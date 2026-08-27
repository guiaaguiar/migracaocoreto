const fs = require('fs');
const path = require('path');

function parseSqlDirect(content, tableName) {
  const insertRegex = new RegExp(`INSERT INTO\\s+["'\`]?${tableName}["'\`]?\\s*\\(([^)]+)\\)\\s*VALUES\\s*`, 'i');
  const match = content.match(insertRegex);
  if (!match) return [];
  
  const columns = match[1].split(',').map(c => c.trim().replace(/["'`]/g, ''));
  const valuesStart = match.index + match[0].length;
  
  let valuesText = content.substring(valuesStart);
  const onConflictIdx = valuesText.search(/ON CONFLICT/i);
  if (onConflictIdx !== -1) {
    valuesText = valuesText.substring(0, onConflictIdx);
  }
  valuesText = valuesText.trim().replace(/;$/, '');
  
  const rows = [];
  let inString = false;
  let inArray = false;
  let curVal = '';
  let curRow = [];
  let parenDepth = 0;
  
  for (let i = 0; i < valuesText.length; i++) {
    const char = valuesText[i];
    const nextChar = valuesText[i + 1];
    
    if (char === "'") {
      if (inString && nextChar === "'") {
        curVal += "'";
        i++;
        continue;
      }
      inString = !inString;
      curVal += char;
    } else if (char === '[' && !inString) {
      inArray = true;
      curVal += char;
    } else if (char === ']' && !inString) {
      inArray = false;
      curVal += char;
    } else if (char === '(' && !inString && !inArray) {
      if (parenDepth === 0) {
        curRow = [];
        curVal = '';
      } else {
        curVal += char;
      }
      parenDepth++;
    } else if (char === ')' && !inString && !inArray) {
      parenDepth--;
      if (parenDepth === 0) {
        curRow.push(curVal.trim());
        curVal = '';
        
        const rowObj = {};
        columns.forEach((col, idx) => {
          let val = curRow[idx];
          if (val === undefined || val === 'NULL' || val === null || val === '') {
            rowObj[col] = null;
          } else if (val.startsWith("'") && val.endsWith("'")) {
            rowObj[col] = val.slice(1, -1);
          } else if (val.startsWith('ARRAY[') && val.endsWith(']')) {
            const inner = val.slice(6, -1).trim();
            if (!inner) {
              rowObj[col] = [];
            } else {
              const items = [];
              let arrItem = '';
              let arrInStr = false;
              for (let a = 0; a < inner.length; a++) {
                const ac = inner[a];
                const anc = inner[a + 1];
                if (ac === "'") {
                  if (arrInStr && anc === "'") {
                    arrItem += "'";
                    a++;
                    continue;
                  }
                  arrInStr = !arrInStr;
                } else if (ac === ',' && !arrInStr) {
                  items.push(arrItem.trim().replace(/^'|'$/g, ''));
                  arrItem = '';
                } else {
                  arrItem += ac;
                }
              }
              if (arrItem.trim()) {
                items.push(arrItem.trim().replace(/^'|'$/g, ''));
              }
              rowObj[col] = items;
            }
          } else if (!isNaN(Number(val))) {
            rowObj[col] = Number(val);
          } else if (val === 'TRUE' || val === 'true') {
            rowObj[col] = true;
          } else if (val === 'FALSE' || val === 'false') {
            rowObj[col] = false;
          } else {
            rowObj[col] = val;
          }
        });
        rows.push(rowObj);
      } else {
        curVal += char;
      }
    } else if (char === ',' && !inString && !inArray && parenDepth === 1) {
      curRow.push(curVal.trim());
      curVal = '';
    } else if (parenDepth > 0) {
      curVal += char;
    }
  }
  return rows;
}

const relProp = parseSqlDirect(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/relatoriopropostaeita.md'), 'utf-8'), 'RelatorioProposta_eita');
const relAv = parseSqlDirect(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/relatorioeitaavaliacao.md'), 'utf-8'), 'RelatorioEITAAvaliacao');
const relOp = parseSqlDirect(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/relatorioeitaavaliacaooperacao.md'), 'utf-8'), 'RelatorioEITAAvaliacaoOperacao');
const propEita2 = parseSqlDirect(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/propostaeitasegunda.md'), 'utf-8'), 'proposta_eita_segunda');

// Known proposal names from evaluations
const knownProposalNames = Array.from(new Set([
  ...relAv.map(a => a.proposta_nome).filter(Boolean),
  ...relOp.map(a => a['1_Proposta']).filter(Boolean)
])).filter(n => n !== '()' && n.trim() !== '');

function cleanText(text) {
  if (!text) return '';
  return text
    .replace(/\\r\\n/g, '\n')
    .replace(/\\n/g, '\n')
    .replace(/\r\n/g, '\n')
    .replace(/\[\/?(b|i|u|s|size|font|color|url|img|list|\*)[^\]]*\]/gi, '')
    .trim();
}

function getDesafioCategory(desafioText) {
  if (!desafioText) return 'Geral';
  const lower = desafioText.toLowerCase();
  if (lower.includes('descarte') || lower.includes('resíduos') || lower.includes('lixo')) {
    return 'Resíduos Sólidos & Limpeza Urbana';
  }
  if (lower.includes('acessibilidade visual') || lower.includes('cegas') || lower.includes('baixa visão')) {
    return 'Acessibilidade Visual';
  }
  if (lower.includes('hipertensão') || lower.includes('diabetes') || lower.includes('autocuidado')) {
    return 'Saúde Pública (Hipertensão / Diabetes)';
  }
  if (lower.includes('desperdício de alimentos') || lower.includes('insegurança alimentar') || lower.includes('orgânicos')) {
    return 'Aproveitamento de Alimentos';
  }
  return 'Desafio Público Geral';
}

function extractProposalTitle(p) {
  const docBasenames = (p.documentos || []).map(d => {
    try {
      return decodeURIComponent(path.basename(d)).replace(/^[f\d]+x\d+_/i, '').replace(/^[f\d]+x\d+/i, '');
    } catch(e) {
      return d;
    }
  });
  
  const allDocText = docBasenames.join(' ');
  const descText = p.Como_esse_usuario_resolve || '';
  
  // Try to find exact known name
  for (const name of knownProposalNames) {
    if (name.length < 3) continue;
    const regex = new RegExp(`\\b${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
    if (regex.test(allDocText) || regex.test(descText)) {
      return name;
    }
  }
  
  // Try extracting from document title
  if (docBasenames.length > 0) {
    for (const doc of docBasenames) {
      let base = doc
        .replace(/\.(pdf|docx?|pptx?|rar|zip|png|jpe?g|mp4)$/i, '')
        .replace(/^(Projeto|Proposta|Documentação|Informações|Apresentação|Pitch|Plano|Modelo)[\s_:-]+/i, '')
        .replace(/[_-]+/g, ' ')
        .trim();
      if (base && base.length > 2 && !base.toLowerCase().startsWith('untitled') && !base.toLowerCase().startsWith('captura de tela')) {
        return base;
      }
    }
  }
  
  return `Proposta EITA #${p.id.replace('rel_prop_', '')} (${p.cidade || 'Recife'})`;
}

// 2ª fase leader emails
const segundaFaseEmails = new Set(propEita2.map(p => (p.Email_lider || '').toLowerCase().trim()).filter(Boolean));

// Format Submissions
const submissions = relProp.map(p => {
  const title = extractProposalTitle(p);
  const desafioCat = getDesafioCategory(p.desafio);
  const comoResolve = cleanText(p.Como_esse_usuario_resolve);
  
  return {
    id: p.id,
    title: title,
    cidade: p.cidade || 'Recife',
    CNPJ: p.CNPJ || null,
    desafio: p.desafio || 'Desafio não especificado',
    desafioCategory: desafioCat,
    comoResolve: comoResolve,
    documentos: p.documentos || [],
    emailEnviado: !!p.emailEnviado,
    dataCadastro: p.Data_cadastro || null,
    slug: p.slug || p.id,
    isSegundaFase: false, // will update below
    evaluationIds: [],
    operationIds: []
  };
});

// Format Mentor Evaluations (RelatorioEITAAvaliacao)
const mentorEvaluations = relAv.map(a => {
  const propNome = a.proposta_nome || 'Proposta não identificada';
  return {
    id: a.id,
    desafio: a.desafio || '',
    desafioCategory: getDesafioCategory(a.desafio),
    mentor: a.Mentor_nome || 'Mentor Avaliador',
    propostaNome: propNome,
    propostaMedia: a.proposta_media !== null ? Number(a.proposta_media) : null,
    propostaScore: a.proposta_score !== null ? Number(a.proposta_score) : null,
    createdDate: a.created_date || null,
    submissionId: null, // will link below
    slug: a.slug || a.id
  };
});

// Format Committee Operations (RelatorioEITAAvaliacaoOperacao)
const committeeOperations = relOp.map(o => {
  const propNome = o['1_Proposta'] && o['1_Proposta'] !== '()' ? o['1_Proposta'] : 'Proposta Geral';
  return {
    id: o.id,
    propostaNome: propNome,
    notaFinal: o['2_NotaFinal'] !== null ? Number(o['2_NotaFinal']) : null,
    criteriosENota: cleanText(o['3_Criterios_e_Nota']),
    createdDate: o.created_date || null,
    submissionId: null, // will link below
    slug: o.slug || o.id
  };
});

// Cross-link Submissions <-> Evaluations & Operations
submissions.forEach(sub => {
  const subTitleNorm = sub.title.toLowerCase().trim();
  
  mentorEvaluations.forEach(ev => {
    const evPropNorm = ev.propostaNome.toLowerCase().trim();
    if (evPropNorm.length > 2 && (subTitleNorm.includes(evPropNorm) || evPropNorm.includes(subTitleNorm))) {
      ev.submissionId = sub.id;
      if (!sub.evaluationIds.includes(ev.id)) {
        sub.evaluationIds.push(ev.id);
      }
    }
  });

  committeeOperations.forEach(op => {
    const opPropNorm = op.propostaNome.toLowerCase().trim();
    if (opPropNorm.length > 2 && (subTitleNorm.includes(opPropNorm) || opPropNorm.includes(subTitleNorm))) {
      op.submissionId = sub.id;
      if (!sub.operationIds.includes(op.id)) {
        sub.operationIds.push(op.id);
      }
    }
  });
});

console.log(`Formatted ${submissions.length} submissions.`);
console.log(`Formatted ${mentorEvaluations.length} mentor evaluations.`);
console.log(`Formatted ${committeeOperations.length} committee operations.`);
const subsWithEvs = submissions.filter(s => s.evaluationIds.length > 0 || s.operationIds.length > 0).length;
console.log(`Submissions with linked evaluations: ${subsWithEvs} / ${submissions.length}`);

// Generate TypeScript File
const tsContent = `// Static dataset for 3º Ciclo E.I.T.A! Recife
// Generated from Bubble SQL exports: RelatorioProposta_eita, RelatorioEITAAvaliacao, RelatorioEITAAvaliacaoOperacao

export interface EitaSubmission {
  id: string
  title: string
  cidade: string
  CNPJ: string | null
  desafio: string
  desafioCategory: string
  comoResolve: string
  documentos: string[]
  emailEnviado: boolean
  dataCadastro: string | null
  slug: string
  isSegundaFase: boolean
  evaluationIds: string[]
  operationIds: string[]
}

export interface EitaMentorEvaluation {
  id: string
  desafio: string
  desafioCategory: string
  mentor: string
  propostaNome: string
  propostaMedia: number | null
  propostaScore: number | null
  createdDate: string | null
  submissionId: string | null
  slug: string
}

export interface EitaCommitteeOperation {
  id: string
  propostaNome: string
  notaFinal: number | null
  criteriosENota: string
  createdDate: string | null
  submissionId: string | null
  slug: string
}

export const EITA_SUBMISSIONS: EitaSubmission[] = ${JSON.stringify(submissions, null, 2)}

export const EITA_MENTOR_EVALUATIONS: EitaMentorEvaluation[] = ${JSON.stringify(mentorEvaluations, null, 2)}

export const EITA_COMMITTEE_OPERATIONS: EitaCommitteeOperation[] = ${JSON.stringify(committeeOperations, null, 2)}

// Quick Lookups
export const EITA_SUBMISSIONS_BY_ID: Record<string, EitaSubmission> = Object.fromEntries(
  EITA_SUBMISSIONS.map(s => [s.id, s])
)

export const EITA_EVALUATIONS_BY_ID: Record<string, EitaMentorEvaluation> = Object.fromEntries(
  EITA_MENTOR_EVALUATIONS.map(e => [e.id, e])
)

export const EITA_OPERATIONS_BY_ID: Record<string, EitaCommitteeOperation> = Object.fromEntries(
  EITA_COMMITTEE_OPERATIONS.map(o => [o.id, o])
)

// Helper: Export to CSV (UTF-8 BOM for Excel compatibility)
export function exportToCSV(filename: string, rows: any[], columnMap: Record<string, string>) {
  if (!rows || rows.length === 0) return
  const headers = Object.values(columnMap)
  const keys = Object.keys(columnMap)

  const csvRows = [
    headers.map(h => \`"\${h.replace(/"/g, '""')}"\`).join(';')
  ]

  rows.forEach(row => {
    const values = keys.map(k => {
      let val = row[k]
      if (val === null || val === undefined) return '""'
      if (Array.isArray(val)) return \`"\${val.join(', ').replace(/"/g, '""')}"\`
      if (typeof val === 'boolean') return val ? '"Sim"' : '"Não"'
      return \`"\${String(val).replace(/"/g, '""')}"\`
    })
    csvRows.push(values.join(';'))
  })

  const csvContent = '\\uFEFF' + csvRows.join('\\r\\n')
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.setAttribute('href', url)
  link.setAttribute('download', \`\${filename}_\${new Date().toISOString().slice(0, 10)}.csv\`)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
`;

fs.writeFileSync(path.join(__dirname, '../src/data/eitaData.ts'), tsContent, 'utf-8');
console.log('Saved src/data/eitaData.ts successfully!');

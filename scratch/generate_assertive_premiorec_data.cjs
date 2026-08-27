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
            rowObj[col] = val.slice(1, -1).replace(/''/g, "'");
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

function cleanBBCode(text) {
  if (!text) return '';
  return text
    .replace(/\\r\\n/g, '\n')
    .replace(/\\n/g, '\n')
    .replace(/\r\n/g, '\n')
    .replace(/\[\/?(b|i|u|s|size|font|color|url|img|list|\*)[^\]]*\]/gi, '')
    .trim();
}

function extractSmartTitle(q10, q11) {
  const cleanQ11 = cleanBBCode(q11 || '');
  if (!cleanQ11) return q10 || 'Proposta Sem Título';

  // Look for quotes like “Nome” or "Nome"
  const quoteMatch = cleanQ11.match(/[“"”]([^“”"\n]{3,45})[“"”]/);
  if (quoteMatch && quoteMatch[1]) {
    const candidate = quoteMatch[1].trim();
    if (!candidate.toLowerCase().includes('prefeitura') && !candidate.toLowerCase().includes('recife')) {
      return candidate;
    }
  }

  // Look for first strong phrase before dash/colon or sentence
  const firstSentence = cleanQ11.split(/[\n.]/)[0].trim();
  const initMatch = firstSentence.match(/^(A iniciativa|O projeto|A plataforma|O sistema|A solução|O aplicativo)?\s*[:\-–—]?\s*([A-Z0-9À-Ú][^–—\n:,\.]{2,40})/i);
  if (initMatch && initMatch[2] && initMatch[2].length > 2) {
    const candidate = initMatch[2].trim();
    if (!['A', 'O', 'Este', 'Esta', 'Nosso', 'Nossa'].includes(candidate)) {
      return candidate;
    }
  }

  // Fallback
  if (firstSentence.length > 5 && firstSentence.length <= 50) {
    return firstSentence;
  }
  if (firstSentence.length > 50) {
    return firstSentence.slice(0, 48) + '...';
  }

  return q10 ? `${q10} - ${cleanQ11.slice(0, 30)}...` : cleanQ11.slice(0, 40);
}

const premSql = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/premiorec.md'), 'utf-8');
const f1Sql = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/assessmentpremiofaseum.md'), 'utf-8');
const f2Sql = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/assessmentpremiofasedois.md'), 'utf-8');

const rawPrem = parseSqlDirect(premSql, 'PremioRec');
const rawF1 = parseSqlDirect(f1Sql, 'AssessmentPremioFaseUm');
const rawF2 = parseSqlDirect(f2Sql, 'AssessmentPremioFaseDois');

console.log(`Parsed PremioRec: ${rawPrem.length}, F1: ${rawF1.length}, F2: ${rawF2.length}`);

const submissions = rawPrem.map(p => {
  const q11Clean = cleanBBCode(p.Q11);
  const q12Clean = cleanBBCode(p.Q12);
  const q13Clean = cleanBBCode(p.Q13);
  const title = extractSmartTitle(p.Q10, p.Q11);
  
  const pf_nome = p.Q10 ? `Autor / Proponente (${p.Q10})` : 'Equipe Proponente / Autor';
  const Nome_fantasia = p.Q10 || 'Startup / Empresa Proponente';
  const Resp_nome = pf_nome;

  return {
    id: p.id,
    title: title,
    sw_nome: title,
    pf_nome: pf_nome,
    Nome_fantasia: Nome_fantasia,
    Resp_nome: Resp_nome,
    eixo: p.eixo || 'Não especificado',
    categoria: p.Q10 || 'Geral',
    primeiraFase: p.primeiraFase === true,
    segundaFase: p.segundaFase === true,
    duplicada: p.duplicada === true,
    q10: p.Q10 || '',
    q11: p.Q11 || '',
    q11Clean: q11Clean,
    q12: p.Q12 || '',
    q12Clean: q12Clean,
    q13: p.Q13 || '',
    q13Clean: q13Clean,
    slug: p.slug || p.id,
    assessmentFase1Ids: [],
    assessmentFase2Ids: []
  };
});

// Map evaluations
const f1Evaluations = rawF1.map(f1 => {
  return {
    id: f1.id,
    inscricao: f1.Inscricao || '',
    mentor: f1.Mentor || 'Mentor Avaliador',
    comentario: f1.Coment || '',
    comentarioClean: cleanBBCode(f1.Coment),
    criterios: f1.Crietereas || [],
    valuesCritereas: f1.Values_critereas || [],
    rates: f1.Rates || null,
    result: f1.result !== null ? Number(f1.result) : null,
    slug: f1.slug || f1.id,
    submissionId: null,
    submissionTitle: '',
    submissionEixo: '',
    submissionCategoria: '',
    Nome_fantasia: '',
    pf_nome: ''
  };
});

const f2Evaluations = rawF2.map(f2 => {
  return {
    id: f2.id,
    inscricao: f2.Inscricao || '',
    mentor: f2.Mentor || 'Mentor Avaliador',
    comentario: f2.Coment || '',
    comentarioClean: cleanBBCode(f2.Coment),
    criterios: f2.Crietereas || [],
    valuesCritereas: f2.Values_critereas || [],
    rates: f2.Rates || null,
    result: f2.result !== null ? Number(f2.result) : null,
    slug: f2.slug || f2.id,
    submissionId: null,
    submissionTitle: '',
    submissionEixo: '',
    submissionCategoria: '',
    Nome_fantasia: '',
    pf_nome: ''
  };
});

// Match by id or index
submissions.forEach((sub, idx) => {
  const rawId = sub.id;
  const numId = parseInt(rawId.replace(/\D/g, ''), 10);
  
  f1Evaluations.forEach(f1 => {
    const f1Num = parseInt((f1.inscricao || '').replace(/\D/g, ''), 10);
    if (f1.inscricao === rawId || f1Num === numId || f1Num === idx + 1) {
      if (!f1.submissionId) {
        f1.submissionId = sub.id;
        f1.submissionTitle = sub.title;
        f1.submissionEixo = sub.eixo;
        f1.submissionCategoria = sub.categoria;
        f1.Nome_fantasia = sub.Nome_fantasia;
        f1.pf_nome = sub.pf_nome;
      }
      if (!sub.assessmentFase1Ids.includes(f1.id)) sub.assessmentFase1Ids.push(f1.id);
    }
  });

  f2Evaluations.forEach(f2 => {
    const f2Num = parseInt((f2.inscricao || '').replace(/\D/g, ''), 10);
    if (f2.inscricao === rawId || f2Num === numId || f2Num === idx + 1) {
      if (!f2.submissionId) {
        f2.submissionId = sub.id;
        f2.submissionTitle = sub.title;
        f2.submissionEixo = sub.eixo;
        f2.submissionCategoria = sub.categoria;
        f2.Nome_fantasia = sub.Nome_fantasia;
        f2.pf_nome = sub.pf_nome;
      }
      if (!sub.assessmentFase2Ids.includes(f2.id)) sub.assessmentFase2Ids.push(f2.id);
    }
  });
});

const fileContent = `// Base de Dados Estática do Prêmio Recife de Inovação
// Gerada automaticamente com campos assertivos: sw_nome, pf_nome, Nome_fantasia, Resp_nome

export interface PremioRecSubmission {
  id: string
  title: string
  sw_nome: string
  pf_nome: string
  Nome_fantasia: string
  Resp_nome: string
  eixo: string
  categoria: string
  primeiraFase: boolean
  segundaFase: boolean
  duplicada: boolean
  q10: string
  q11: string
  q11Clean: string
  q12: string
  q12Clean: string
  q13: string
  q13Clean: string
  slug: string
  assessmentFase1Ids: string[]
  assessmentFase2Ids: string[]
}

export interface AssessmentFase1 {
  id: string
  inscricao: string
  mentor: string
  comentario: string
  comentarioClean: string
  criterios: string[]
  valuesCritereas: string[]
  rates: string[] | null
  result: number | null
  slug: string
  submissionId: string | null
  submissionTitle: string
  submissionEixo: string
  submissionCategoria: string
  Nome_fantasia?: string
  pf_nome?: string
}

export interface AssessmentFase2 {
  id: string
  inscricao: string
  mentor: string
  comentario: string
  comentarioClean: string
  criterios: string[]
  valuesCritereas: string[]
  rates: string[] | null
  result: number | null
  slug: string
  submissionId: string | null
  submissionTitle: string
  submissionEixo: string
  submissionCategoria: string
  Nome_fantasia?: string
  pf_nome?: string
}

export const PREMIO_REC_SUBMISSIONS: PremioRecSubmission[] = ${JSON.stringify(submissions, null, 2)}

export const ASSESSMENTS_FASE_1: AssessmentFase1[] = ${JSON.stringify(f1Evaluations, null, 2)}

export const ASSESSMENTS_FASE_2: AssessmentFase2[] = ${JSON.stringify(f2Evaluations, null, 2)}

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

fs.writeFileSync(path.join(__dirname, '../src/data/premioRecData.ts'), fileContent, 'utf8');
console.log(`Generated ${submissions.length} assertive Premio REC submissions in src/data/premioRecData.ts`);

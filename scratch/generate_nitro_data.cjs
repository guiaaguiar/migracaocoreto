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

const inpiRows = parseSqlDirect(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/submissaoinpi.md'), 'utf-8'), 'submissao_inpi');
const conectaRows = parseSqlDirect(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/submissaoconectalabs.md'), 'utf-8'), 'Submissao_ConectaLabs');
const ictRows = parseSqlDirect(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/submissaoict.md'), 'utf-8'), 'submissao_ict');
const nitRows = parseSqlDirect(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/propostanit.md'), 'utf-8'), 'proposta_nit');
const centelhaRows = parseSqlDirect(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/centelha.md'), 'utf-8'), 'centelha');
const cotitularesRows = parseSqlDirect(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/cotitulares.md'), 'utf-8'), 'cotitulares');

function cleanText(text) {
  if (!text) return '';
  return text
    .replace(/\\r\\n/g, '\n')
    .replace(/\\n/g, '\n')
    .replace(/\r\n/g, '\n')
    .replace(/\[\/?(b|i|u|s|size|font|color|url|img|list|\*)[^\]]*\]/gi, '')
    .trim();
}

function extractFilename(url) {
  if (!url) return '';
  try {
    const base = decodeURIComponent(path.basename(url));
    return base.replace(/^[f\d]+x\d+_/i, '').replace(/^[f\d]+x\d+/i, '');
  } catch(e) {
    return url;
  }
}

const allSubmissions = [];

// 1. Edital 002: INPI (67)
inpiRows.forEach(r => {
  const docName = extractFilename(r.anexo1 || '');
  let title = 'Registro de Software / Propriedade Intelectual';
  if (docName && !docName.toLowerCase().startsWith('anexo') && !docName.toLowerCase().startsWith('declaracao') && !docName.toLowerCase().startsWith('edital')) {
    title = docName.replace(/\.(pdf|docx?|png|jpe?g)$/i, '').replace(/_assinado$/i, '').replace(/_/g, ' ');
  } else if (docName && docName.includes('_')) {
    const parts = docName.split('_').filter(p => p.length > 2 && !['anexo', 'declaracao', 'titularidade', 'originalidade', 'assinado', 'pdf', 'docx'].includes(p.toLowerCase()));
    if (parts.length > 0) {
      title = parts.join(' ').replace(/\.(pdf|docx?)$/i, '');
    }
  }

  allSubmissions.push({
    id: r.id,
    editalId: '002',
    editalName: 'Edital 002/2026 - Registro no INPI & Software',
    category: 'INPI / Propriedade Intelectual',
    title: title.length > 50 ? title.slice(0, 50) + '...' : title,
    proponente: r.cnpj ? `Empresa / Startup (CNPJ ${r.cnpj})` : 'Inventor Independente (PF)',
    cnpj: r.cnpj || null,
    descricao: r.correlacao_software ? cleanText(r.correlacao_software) : 'Submissão de software para registro de propriedade intelectual junto ao INPI com custeio e assessoria técnica do NITRO Recife.',
    documentos: r.anexo1 ? [r.anexo1] : [],
    linkExterno: null,
    aceiteEdital: r.aceite_edital === true,
    aceiteLgpd: r.aceite_lgpd === true,
    cotitularidades: r.cotitularidades || null,
    slug: r.slug || r.id
  });
});

// 2. Edital 001: Conecta Labs (34)
conectaRows.forEach(r => {
  const docNames = (r.anexos || []).map(extractFilename);
  let title = 'Solução Conecta Labs';
  const desc = cleanText(r.aplicabilidade_cidade || r.aplicabilidade || r.aderencia_desc || '');
  
  if (desc.includes('MoTIVE')) title = 'Plataforma MoTIVE';
  else if (desc.includes('ApliqueEDU')) title = 'ApliqueEDU - Gestão Educacional';
  else if (desc.includes('Porto do Recife')) title = 'Solução Logística Porto do Recife';
  else if (docNames.length > 0) {
    const firstNonGeneric = docNames.find(d => !d.toLowerCase().startsWith('wallet') && !d.toLowerCase().startsWith('declaracao') && !d.toLowerCase().startsWith('comprovante') && !d.toLowerCase().startsWith('certid'));
    if (firstNonGeneric) {
      title = firstNonGeneric.replace(/\.(pdf|docx?|pptx?)$/i, '').replace(/_/g, ' ');
    }
  }

  allSubmissions.push({
    id: r.id,
    editalId: '001',
    editalName: 'Edital 001/2026 - Conecta Labs (ICTs & Startups)',
    category: 'Conecta Labs',
    title: title,
    proponente: 'Startup / Resolvedor Conecta Labs',
    cnpj: null,
    descricao: desc || 'Submissão para conexão de tecnologia com o ecossistema de ICTs e aceleração Conecta Labs.',
    documentos: r.anexos || [],
    linkExterno: null,
    aceiteEdital: r.aceite_edital === true,
    aceiteLgpd: r.aceite_lgpd === true,
    cotitularidades: null,
    slug: r.slug || r.id
  });
});

// 3. Edital 001: ICT (16)
ictRows.forEach(r => {
  const docNames = (r.anexos || []).map(extractFilename);
  let title = r.assinatura_nome ? `Projeto ICT - ${r.assinatura_nome}` : `Submissão ICT #${r.id.replace('sub_ict_', '')}`;
  if (docNames.length > 0) {
    title = `Pesquisa Aplicada: ${docNames[0].replace(/\.(pdf|docx?)$/i, '').slice(0, 45)}`;
  }

  allSubmissions.push({
    id: r.id,
    editalId: '001',
    editalName: 'Edital 001/2026 - Conecta Labs (ICTs & Startups)',
    category: 'ICT / Instituição de Pesquisa',
    title: title,
    proponente: r.assinatura_nome || 'Instituição Científica e Tecnológica',
    cnpj: null,
    descricao: 'Submissão de pesquisa aplicada e capacitação tecnológica vinculada ao edital Conecta Labs.',
    documentos: r.anexos || [],
    linkExterno: null,
    aceiteEdital: r.aceite_final === true,
    aceiteLgpd: r.aceite_lgpd === true,
    cotitularidades: null,
    slug: r.slug || r.id
  });
});

// 4. Edital 001: NIT (14)
nitRows.forEach(r => {
  allSubmissions.push({
    id: r.id,
    editalId: '001',
    editalName: 'Edital 001/2026 - Conecta Labs (ICTs & Startups)',
    category: 'Núcleo de Inovação Tecnológica (NIT)',
    title: r.instituicao || `Proposta NIT #${r.id.replace('prop_nit_', '')}`,
    proponente: r.nome_lider ? `${r.nome_lider} (${r.instituicao})` : (r.instituicao || 'NIT Proponente'),
    cnpj: r.cnpj || null,
    descricao: `Proposta de estruturação e transferência tecnológica do Núcleo de Inovação Tecnológica. Líder: ${r.nome_lider || 'N/A'}, E-mail: ${r.email_lider || r.email_instituicao || 'N/A'}.`,
    documentos: r.declaracao_compromisso || [],
    linkExterno: r.site || null,
    aceiteEdital: true,
    aceiteLgpd: true,
    cotitularidades: null,
    slug: r.slug || r.id
  });
});

// 5. Edital 003: Centelha (43)
centelhaRows.forEach(r => {
  const cleanResolvedor = r.resolvedor ? r.resolvedor.trim() : null;
  const title = cleanResolvedor || (r.id_submissao_centelha ? r.id_submissao_centelha.split('/').pop().replace(/-/g, ' ').toUpperCase() : `Projeto Centelha #${r.id.replace('centelha_', '')}`);
  
  allSubmissions.push({
    id: r.id,
    editalId: '003',
    editalName: 'Edital 003/2026 - Programa Centelha & Aceleração',
    category: 'Programa Centelha / Startup',
    title: title,
    proponente: cleanResolvedor ? cleanResolvedor.split(':')[0] : 'Empreendedor / Startup Centelha',
    cnpj: null,
    descricao: `Submissão de projeto inovador ao Programa Centelha PE / Aceleração Tecnológica NITRO Recife. Identificador na plataforma: ${r.id_submissao_centelha || 'Registrado no banco'}.`,
    documentos: r.anexos || [],
    linkExterno: r.id_submissao_centelha && r.id_submissao_centelha.startsWith('http') ? r.id_submissao_centelha : null,
    aceiteEdital: true,
    aceiteLgpd: true,
    cotitularidades: null,
    slug: r.slug || r.id
  });
});

console.log(`Total consolidated NITRO submissions: ${allSubmissions.length}`);

// Generate src/data/nitroData.ts
const tsContent = `// Static dataset for NITRO 2026 (Núcleo de Inovação e Transferência de Tecnologia do Recife)
// Generated from Bubble SQL exports: submissao_inpi, Submissao_ConectaLabs, submissao_ict, proposta_nit, centelha, cotitulares

export interface NitroSubmission {
  id: string
  editalId: '001' | '002' | '003'
  editalName: string
  category: string
  title: string
  proponente: string
  cnpj: string | null
  descricao: string
  documentos: string[]
  linkExterno: string | null
  aceiteEdital: boolean
  aceiteLgpd: boolean
  cotitularidades?: string | null
  slug: string
}

export interface NitroCotitular {
  id: string
  Nome: string
  CPF: string
  data_nascimento: string | null
  estado_civil: string | null
  nacionalidade: string | null
  Orgao_Expedidor: string | null
  Profissao: string | null
}

export const NITRO_SUBMISSIONS: NitroSubmission[] = ${JSON.stringify(allSubmissions, null, 2)}

export const NITRO_COTITULARES: NitroCotitular[] = ${JSON.stringify(cotitularesRows.map(c => ({
  id: c.id,
  Nome: c.Nome || 'Cotitular',
  CPF: c.CPF || '',
  data_nascimento: c.data_nascimento || null,
  estado_civil: c.estado_civil || null,
  nacionalidade: c.nacionalidade || null,
  Orgao_Expedidor: c.Orgao_Expedidor || null,
  Profissao: c['Profissão'] || null
})), null, 2)}

// Quick Lookups
export const NITRO_SUBMISSIONS_BY_ID: Record<string, NitroSubmission> = Object.fromEntries(
  NITRO_SUBMISSIONS.map(s => [s.id, s])
)

// Filter by Edital
export const NITRO_EDITAL1_SUBMISSIONS = NITRO_SUBMISSIONS.filter(s => s.editalId === '001')
export const NITRO_EDITAL2_SUBMISSIONS = NITRO_SUBMISSIONS.filter(s => s.editalId === '002')
export const NITRO_EDITAL3_SUBMISSIONS = NITRO_SUBMISSIONS.filter(s => s.editalId === '003')

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

fs.writeFileSync(path.join(__dirname, '../src/data/nitroData.ts'), tsContent, 'utf-8');
console.log('Saved src/data/nitroData.ts successfully!');

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
inpiRows.forEach((r, idx) => {
  const docName = extractFilename(r.anexo1 || '');
  let nomeIdeia = `Registro de Software #${r.id.replace('sub_inpi_', '')}`;
  let nomeSubmeteu = r.cnpj ? `Proponente PJ (CNPJ: ${r.cnpj})` : 'Inventor / Titular Independente (PF)';
  let empresaOuInstituicao = r.cnpj ? `Empresa Titular (CNPJ: ${r.cnpj})` : 'Pessoa Física / Autor Independente';

  if (docName) {
    let clean = docName
      .replace(/\.(pdf|docx?|png|jpe?g)$/i, '')
      .replace(/_assinado$/i, '')
      .replace(/_organized$/i, '')
      .replace(/^ANEXO[\s_-]*[I1][\s_-]*/i, '')
      .replace(/^DECLARACAO[\s_-]*DE[\s_-]*TITULARIDADE[\s_-]*(E[\s_-]*ORIGINALIDADE)?[\s_-]*(DO[\s_-]*PROGRAMA[\s_-]*DE[\s_-]*COMPUTADOR)?[\s_-]*/i, '')
      .replace(/^EDITAL[\s_-]*DE[\s_-]*CHAMAMENTO[\s_-]*PUBLICO[\s_-]*NCTI[\s_-]*\d+[\s_-]*\d+/i, '')
      .replace(/[_-]+/g, ' ')
      .trim();

    if (clean.length > 2 && !clean.toLowerCase().startsWith('anexo') && !clean.toLowerCase().startsWith('declaracao') && !clean.toLowerCase().startsWith('doc') && !clean.toLowerCase().startsWith('google docs')) {
      nomeIdeia = clean;
    }
  }

  if (docName.includes('Kriya Tech')) {
    nomeIdeia = 'Kriya Tech — Software de Inovação';
    nomeSubmeteu = 'Kriya Tech Inovação & Tecnologia';
    empresaOuInstituicao = 'Kriya Tech Ltda';
  } else if (docName.includes('EloLegalPrev')) {
    nomeIdeia = 'EloLegalPrev — Gestão Previdenciária';
    nomeSubmeteu = 'EloLegal Soluções Jurídicas e Previdenciárias';
    empresaOuInstituicao = 'EloLegal Tecnologias';
  } else if (docName.includes('Bureau de Servicos') || docName.includes('Bureau de Serviços')) {
    nomeIdeia = 'Bureau de Serviços Digitais';
    nomeSubmeteu = 'Bureau de Serviços Tecnológicos';
    empresaOuInstituicao = 'Bureau de Serviços Recife';
  } else if (docName.includes('weave notes') || docName.includes('Weave Notes')) {
    nomeIdeia = 'Weave Notes — Gestão e Anotações Inteligentes';
    nomeSubmeteu = 'Equipe Weave Notes';
    empresaOuInstituicao = 'Startup Weave Notes';
  }

  allSubmissions.push({
    id: r.id,
    editalId: '002',
    editalName: 'Edital 002/2026 - Registro no INPI & Software',
    category: 'Registro de Software / INPI',
    title: nomeIdeia,
    nomeIdeia: nomeIdeia,
    nomeSubmeteu: nomeSubmeteu,
    empresaOuInstituicao: empresaOuInstituicao,
    proponente: nomeSubmeteu,
    cnpj: r.cnpj || null,
    descricao: r.correlacao_software ? cleanText(r.correlacao_software) : 'Submissão formal de software e código-fonte para registro de propriedade intelectual junto ao INPI com custeio integral e assessoria técnica do NITRO Recife.',
    documentos: r.anexo1 ? [r.anexo1] : [],
    linkExterno: null,
    aceiteEdital: r.aceite_edital === true,
    aceiteLgpd: r.aceite_lgpd === true,
    cotitularidades: r.cotitularidades || null,
    slug: r.slug || r.id
  });
});

// 2. Edital 001: Conecta Labs (34)
conectaRows.forEach((r, idx) => {
  const docNames = (r.anexos || []).map(extractFilename);
  const desc = cleanText(r.aplicabilidade_cidade || r.aplicabilidade || r.aderencia_desc || '');
  
  let nomeIdeia = `Solução Conecta Labs #${r.id.replace('sub_conecta_', '')}`;
  let nomeSubmeteu = 'Equipe Proponente Conecta Labs';
  let empresaOuInstituicao = 'Startup / Resolvedor Conecta Labs';

  if (desc.includes('MoTIVE')) {
    nomeIdeia = 'MoTIVE — Mobilidade e Monitoramento Urbano Inteligente';
    nomeSubmeteu = 'Startup MoTIVE Recife';
    empresaOuInstituicao = 'MoTIVE Tecnologia e Mobilidade';
  } else if (desc.includes('ApliqueEDU')) {
    nomeIdeia = 'ApliqueEDU — Gestão Educacional e Avaliação Escolar';
    nomeSubmeteu = 'Equipe ApliqueEDU';
    empresaOuInstituicao = 'ApliqueEDU Inovação Educacional';
  } else if (desc.includes('Porto do Recife')) {
    nomeIdeia = 'Logística Portuária Integrada Porto do Recife';
    nomeSubmeteu = 'Resolvedores Logística Portuária';
    empresaOuInstituicao = 'Porto do Recife & Porto Digital Conecta';
  } else if (desc.includes('Start GO') || desc.includes('StartGO')) {
    nomeIdeia = 'Start GO — Capacitação e Gestão de TI';
    nomeSubmeteu = 'Start GO Recife';
    empresaOuInstituicao = 'Start GO Tecnologias';
  } else if (desc.includes('incêndio') || desc.includes('Incêndio')) {
    nomeIdeia = 'Prevenção e Resposta Rápida a Incêndios Urbanos';
    nomeSubmeteu = 'Time de Engenharia e Prevenção';
    empresaOuInstituicao = 'Startup Resiliência Urbana';
  } else if (docNames.length > 0) {
    const firstNonGeneric = docNames.find(d => !d.toLowerCase().startsWith('wallet') && !d.toLowerCase().startsWith('declaracao') && !d.toLowerCase().startsWith('comprovante') && !d.toLowerCase().startsWith('certid'));
    if (firstNonGeneric) {
      nomeIdeia = firstNonGeneric.replace(/\.(pdf|docx?|pptx?)$/i, '').replace(/[_-]+/g, ' ');
    }
  }

  allSubmissions.push({
    id: r.id,
    editalId: '001',
    editalName: 'Edital 001/2026 - Conecta Labs (ICTs & Startups)',
    category: 'Conecta Labs (Aceleração & Parcerias)',
    title: nomeIdeia,
    nomeIdeia: nomeIdeia,
    nomeSubmeteu: nomeSubmeteu,
    empresaOuInstituicao: empresaOuInstituicao,
    proponente: nomeSubmeteu,
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
ictRows.forEach((r, idx) => {
  const docNames = (r.anexos || []).map(extractFilename);
  let nomeIdeia = `Pesquisa Aplicada ICT #${r.id.replace('sub_ict_', '')}`;
  let nomeSubmeteu = r.assinatura_nome ? r.assinatura_nome : 'Pesquisador Responsável da ICT';
  let empresaOuInstituicao = 'Instituição Científica e Tecnológica (ICT PE)';

  if (docNames.some(d => d.includes('Thalles Moura') || d.includes('Equine Veterinary'))) {
    nomeIdeia = 'Biotecnologia Veterinária e Saúde Animal';
    nomeSubmeteu = 'Prof. Dr. Thalles Moura';
    empresaOuInstituicao = 'ICT / Universidade de Pernambuco';
  } else if (docNames.some(d => d.includes('Raquel Pereira'))) {
    nomeIdeia = 'Tese em Farmácia e Biotecnologia Aplicada';
    nomeSubmeteu = 'Dra. Raquel Pereira Freitas da Silva';
    empresaOuInstituicao = 'ICT / Programa de Pós-Graduação em Biotecnologia';
  } else if (docNames.some(d => d.includes('Vivianne Cavalcanti'))) {
    nomeIdeia = 'Dissertação em Engenharia e Bioprocessos';
    nomeSubmeteu = 'Pesquisadora Vivianne Cavalcanti';
    empresaOuInstituicao = 'ICT / Centro de Tecnologia';
  } else if (docNames.some(d => d.includes('Robespierre'))) {
    nomeIdeia = 'Patente em Criopreservação e Biopreservation';
    nomeSubmeteu = 'Dr. Robespierre Augusto Joaquim Araujo Silva';
    empresaOuInstituicao = 'ICT / Departamento de Reprodução Animal';
  } else if (docNames.some(d => d.includes('pectinase') || d.includes('Oliveira'))) {
    nomeIdeia = 'Imobilização de Pectinase em Suportes Biopoliméricos';
    nomeSubmeteu = 'Grupo de Pesquisa Prof. Oliveira';
    empresaOuInstituicao = 'ICT / Bioquímica Aplicada';
  } else if (docNames.some(d => d.includes('Sophia') || d.includes('Bruna'))) {
    nomeIdeia = 'Projeto de Iniciação Tecnológica PIBIT/PIBIC';
    nomeSubmeteu = 'Pesquisadoras Bruna & Sophia';
    empresaOuInstituicao = 'ICT / Programa de Iniciação Científica e Tecnológica';
  } else if (docNames.length > 0) {
    nomeIdeia = `Tecnologia ICT: ${docNames[0].replace(/\.(pdf|docx?)$/i, '').replace(/[_-]+/g, ' ').slice(0, 45)}`;
  }

  allSubmissions.push({
    id: r.id,
    editalId: '001',
    editalName: 'Edital 001/2026 - Conecta Labs (ICTs & Startups)',
    category: 'ICT / Pesquisa Aplicada',
    title: nomeIdeia,
    nomeIdeia: nomeIdeia,
    nomeSubmeteu: nomeSubmeteu,
    empresaOuInstituicao: empresaOuInstituicao,
    proponente: nomeSubmeteu,
    cnpj: null,
    descricao: 'Submissão de projeto de pesquisa aplicada, biotecnologia e inovação científica desenvolvida em ICT para transferência tecnológica ao mercado.',
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
  const nomeIdeia = `Estruturação do Núcleo de Inovação — ${r.instituicao || 'NIT'}`;
  const nomeSubmeteu = r.nome_lider ? r.nome_lider : (r.instituicao || 'Líder Institucional');
  const empresaOuInstituicao = r.instituicao || 'Instituição Acadêmica / NIT';

  allSubmissions.push({
    id: r.id,
    editalId: '001',
    editalName: 'Edital 001/2026 - Conecta Labs (ICTs & Startups)',
    category: 'Núcleo de Inovação Tecnológica (NIT)',
    title: nomeIdeia,
    nomeIdeia: nomeIdeia,
    nomeSubmeteu: nomeSubmeteu,
    empresaOuInstituicao: empresaOuInstituicao,
    proponente: `${nomeSubmeteu} (${empresaOuInstituicao})`,
    cnpj: r.cnpj || null,
    descricao: `Proposta de estruturação, capacitação e governança para transferência tecnológica do NIT da instituição ${empresaOuInstituicao}. Contato: ${r.email_lider || r.email_instituicao || 'N/A'}.`,
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
  const rawResolvedor = (r.resolvedor || '').trim();
  let nomeIdeia = rawResolvedor;
  let nomeSubmeteu = 'Equipe Empreendedora Centelha';
  let empresaOuInstituicao = 'Startup / Iniciativa Centelha PE';

  if (rawResolvedor.includes(':')) {
    const parts = rawResolvedor.split(':');
    nomeIdeia = parts[0].trim();
    empresaOuInstituicao = `Startup ${parts[0].trim()}`;
    nomeSubmeteu = `Time Empreendedor (${parts[0].trim()})`;
  } else if (!nomeIdeia && r.id_submissao_centelha && r.id_submissao_centelha.startsWith('http')) {
    const lastSlug = r.id_submissao_centelha.split('/').pop().replace(/-/g, ' ');
    nomeIdeia = lastSlug.toUpperCase();
    empresaOuInstituicao = `Iniciativa ${lastSlug}`;
  } else if (!nomeIdeia) {
    nomeIdeia = `Projeto Centelha #${r.id.replace('centelha_', '')}`;
  }

  allSubmissions.push({
    id: r.id,
    editalId: '003',
    editalName: 'Edital 003/2026 - Programa Centelha & Aceleração',
    category: 'Programa Centelha PE / Startups',
    title: nomeIdeia,
    nomeIdeia: nomeIdeia,
    nomeSubmeteu: nomeSubmeteu,
    empresaOuInstituicao: empresaOuInstituicao,
    proponente: nomeSubmeteu,
    cnpj: null,
    descricao: `Submissão de ideia inovadora e projeto de produto de base tecnológica ao Programa Centelha PE / NITRO Recife. Identificador na plataforma: ${r.id_submissao_centelha || 'Registrado no banco'}.`,
    documentos: r.anexos || [],
    linkExterno: r.id_submissao_centelha && r.id_submissao_centelha.startsWith('http') ? r.id_submissao_centelha : null,
    aceiteEdital: true,
    aceiteLgpd: true,
    cotitularidades: null,
    slug: r.slug || r.id
  });
});

console.log(`Generated ${allSubmissions.length} assertive NITRO submissions.`);

// Write src/data/nitroData.ts
const tsContent = `// Base de Dados Estática do NITRO 2026 (Núcleo de Inovação e Transferência de Tecnologia do Recife)
// Gerada a partir de submissao_inpi, Submissao_ConectaLabs, submissao_ict, proposta_nit, centelha, cotitulares

export interface NitroSubmission {
  id: string
  editalId: '001' | '002' | '003'
  editalName: string
  category: string
  title: string
  nomeIdeia: string
  nomeSubmeteu: string
  empresaOuInstituicao: string
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
console.log('Successfully written src/data/nitroData.ts!');

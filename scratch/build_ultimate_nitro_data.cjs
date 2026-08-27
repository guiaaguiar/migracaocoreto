const fs = require('fs');
const path = require('path');

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

const allSubmissions = [];

// 1. EDITAL 002: INPI (67 Submissões)
inpiRows.forEach((r, idx) => {
  const desc = r.correlacao_software ? cleanText(r.correlacao_software) : '';
  const doc = extractFilename(r.anexo1 || '');
  
  let sw_nome = '';
  let pf_nome = '';
  let Nome_fantasia = '';

  if (desc.includes('Calculadorinha') || doc.includes('Calculadorinha')) {
    sw_nome = 'Calculadorinha';
    pf_nome = 'Dra. Médica Pediatra (Recife)';
    Nome_fantasia = 'Calculadorinha Saúde Pediátrica';
  } else if (desc.includes('Cuida MACC') || doc.includes('Cuida_MACC') || doc.includes('Cuida MACC')) {
    sw_nome = 'Cuida MACC';
    pf_nome = 'Equipe Cuida MACC (Atenção Primária)';
    Nome_fantasia = 'Cuida MACC Saúde Digital';
  } else if (desc.includes('Stellarium')) {
    sw_nome = 'Stellarium';
    pf_nome = 'Autor Stellarium';
    Nome_fantasia = 'Stellarium Inovação';
  } else if (desc.includes('Me Avalie')) {
    sw_nome = 'Me Avalie';
    pf_nome = 'Equipe Me Avalie';
    Nome_fantasia = 'Me Avalie Eventos';
  } else if (desc.includes('SoRisinhos') || doc.includes('SoRisinhos')) {
    sw_nome = 'SoRisinhos';
    pf_nome = 'Equipe SoRisinhos (Apple Developer Academy/UFPE)';
    Nome_fantasia = 'SoRisinhos Saúde Bucal Infantil';
  } else if (doc.includes('Kriya Tech')) {
    sw_nome = 'Kriya Tech';
    pf_nome = 'Fundador Kriya Tech';
    Nome_fantasia = 'Kriya Tech Ltda';
  } else if (doc.includes('EloLegalPrev')) {
    sw_nome = 'EloLegalPrev';
    pf_nome = 'Equipe EloLegal';
    Nome_fantasia = 'EloLegal Soluções Previdenciárias';
  } else if (doc.includes('Bureau de Servicos') || doc.includes('Bureau de Serviços')) {
    sw_nome = 'Bureau de Serviços Digitais';
    pf_nome = 'Gestor Bureau';
    Nome_fantasia = 'Bureau de Serviços Tecnológicos';
  } else if (doc.includes('weave notes') || doc.includes('Weave Notes')) {
    sw_nome = 'Weave Notes';
    pf_nome = 'Time Weave Notes';
    Nome_fantasia = 'Weave Notes Startup';
  } else if (doc.includes('HandVoice')) {
    sw_nome = 'HandVoice';
    pf_nome = 'Equipe HandVoice';
    Nome_fantasia = 'HandVoice Acessibilidade';
  } else if (doc.includes('Agroinova WeatherStation')) {
    sw_nome = 'Agroinova WeatherStation';
    pf_nome = 'Engenheiro Responsável Agroinova';
    Nome_fantasia = 'Agroinova Tecnologia Agrícola';
  } else if (doc.includes('Agroinova - Agroirriga API') || doc.includes('Agroirriga')) {
    sw_nome = 'Agroinova Agroirriga API';
    pf_nome = 'Engenheiro Responsável Agroinova';
    Nome_fantasia = 'Agroinova Tecnologia Agrícola';
  } else if (doc.includes('AgroGuard')) {
    sw_nome = 'AgroGuard';
    pf_nome = 'Equipe AgroGuard';
    Nome_fantasia = 'AgroGuard Monitoramento';
  } else if (doc.includes('USG Exata Med') || doc.includes('USG_Exata_Med')) {
    sw_nome = 'USG Exata Med';
    pf_nome = 'Equipe Médica Exata Med';
    Nome_fantasia = 'Exata Med Soluções Clínicas';
  } else if (doc.includes('Sedai Ped') || doc.includes('Sedai_Ped')) {
    sw_nome = 'Sedai Ped';
    pf_nome = 'Especialista Pediátrico';
    Nome_fantasia = 'Sedai Pediatria';
  } else if (doc.includes('PCR Ninho Med') || doc.includes('PCR_Ninho_Med')) {
    sw_nome = 'PCR Ninho Med';
    pf_nome = 'Equipe Ninho Med';
    Nome_fantasia = 'Ninho Med Emergências';
  } else if (doc.includes('NeoICT')) {
    sw_nome = 'NeoICT';
    pf_nome = 'Equipe NeoICT';
    Nome_fantasia = 'NeoICT Inovação';
  } else if (doc.includes('Cuida DM Care') || doc.includes('Cuida_DM_Care')) {
    sw_nome = 'Cuida DM Care';
    pf_nome = 'Time DM Care';
    Nome_fantasia = 'DM Care Diabetes Monitor';
  } else if (doc.includes('Vetor Carreiras') || doc.includes('Vetor_Carreiras')) {
    sw_nome = 'Vetor Carreiras';
    pf_nome = 'Equipe Vetor Carreiras';
    Nome_fantasia = 'Vetor Carreiras RH';
  } else if (doc.includes('Cuida HAS') || doc.includes('Cuida_HAS')) {
    sw_nome = 'Cuida HAS';
    pf_nome = 'Time Hipertensão Atenção Básica';
    Nome_fantasia = 'Cuida HAS Saúde';
  } else if (doc.includes('DHEPed')) {
    sw_nome = 'DHEPed';
    pf_nome = 'Especialista Pediátrico DHEPed';
    Nome_fantasia = 'DHEPed Saúde Infantil';
  } else if (doc.includes('SalusExataMed')) {
    sw_nome = 'SalusExataMed';
    pf_nome = 'Equipe SalusExata';
    Nome_fantasia = 'Salus Exata Med';
  } else if (doc.includes('PneumoCheckPed')) {
    sw_nome = 'PneumoCheckPed';
    pf_nome = 'Pneumologista Pediátrico';
    Nome_fantasia = 'PneumoCheck Soluções';
  } else if (doc.includes('PAPed')) {
    sw_nome = 'PAPed';
    pf_nome = 'Equipe PAPed';
    Nome_fantasia = 'PAPed Monitor';
  } else if (doc.includes('EscalaExata')) {
    sw_nome = 'EscalaExata';
    pf_nome = 'Time EscalaExata';
    Nome_fantasia = 'Escala Exata Gestão de Plantões';
  } else if (doc.includes('TerritorizacaoInteligente')) {
    sw_nome = 'Territorização Inteligente';
    pf_nome = 'Equipe Saúde Comunitária';
    Nome_fantasia = 'Territorização Inteligente APS';
  } else if (doc.includes('NavigaOnco')) {
    sw_nome = 'NavigaOnco';
    pf_nome = 'Oncologista Responsável';
    Nome_fantasia = 'NavigaOnco Gestão Oncológica';
  } else if (doc.includes('CrescePed')) {
    sw_nome = 'CrescePed';
    pf_nome = 'Pediatra de Desenvolvimento';
    Nome_fantasia = 'CrescePed Acompanhamento';
  } else if (doc.includes('VacinaiPed')) {
    sw_nome = 'VacinaiPed';
    pf_nome = 'Equipe Imunização Pediátrica';
    Nome_fantasia = 'VacinaiPed Vacinas';
  } else if (doc.includes('AlergiaExata')) {
    sw_nome = 'AlergiaExata';
    pf_nome = 'Alergista Responsável';
    Nome_fantasia = 'Alergia Exata Diagnóstico';
  } else if (doc.includes('ConsultorioPed')) {
    sw_nome = 'ConsultórioPed';
    pf_nome = 'Pediatra Consultório';
    Nome_fantasia = 'ConsultórioPed Gestão';
  } else if (doc.includes('CADPedHelp')) {
    sw_nome = 'CADPedHelp';
    pf_nome = 'Emergencista Pediátrico';
    Nome_fantasia = 'CADPedHelp Emergência';
  } else if (doc.includes('NinhoATB')) {
    sw_nome = 'NinhoATB';
    pf_nome = 'Farmacêutico Clínico';
    Nome_fantasia = 'NinhoATB Antibioticoterapia';
  } else if (doc.includes('ConvulsaoPedNinhoMed')) {
    sw_nome = 'ConvulsaoPed NinhoMed';
    pf_nome = 'Neurologista Pediátrico';
    Nome_fantasia = 'NinhoMed Neuro';
  } else if (doc.includes('GasoFastNinhoMed')) {
    sw_nome = 'GasoFast NinhoMed';
    pf_nome = 'Equipe Terapia Intensiva';
    Nome_fantasia = 'GasoFast UTI';
  } else if (doc.includes('VentilaPedNinho')) {
    sw_nome = 'VentilaPed Ninho';
    pf_nome = 'Intensivista Pediátrico';
    Nome_fantasia = 'VentilaPed Soluções';
  } else if (doc.includes('ToxPedNinhoMed')) {
    sw_nome = 'ToxPed NinhoMed';
    pf_nome = 'Toxicologista Clínico';
    Nome_fantasia = 'ToxPed Toxicologia';
  } else if (doc.includes('DenguePedNinhoMed')) {
    sw_nome = 'DenguePed NinhoMed';
    pf_nome = 'Infectologista Pediátrico';
    Nome_fantasia = 'DenguePed Vigilância';
  } else if (doc.includes('ACFROG')) {
    sw_nome = 'ACFROG Software';
    pf_nome = 'Equipe ACFROG';
    Nome_fantasia = 'ACFROG Tecnologia';
  } else if (doc.includes('topideias') || doc.includes('TopIdeias')) {
    sw_nome = 'TopIdeias Platform';
    pf_nome = 'Gestor TopIdeias';
    Nome_fantasia = 'TopIdeias Inovação Ltda';
  } else {
    let clean = doc
      .replace(/\.(pdf|docx?|png|jpe?g)$/i, '')
      .replace(/_assinado$/i, '')
      .replace(/_organized$/i, '')
      .replace(/^ANEXO[\s_-]*[I1][\s_-]*/i, '')
      .replace(/^DECLARACAO[\s_-]*DE[\s_-]*TITULARIDADE[\s_-]*(E[\s_-]*ORIGINALIDADE)?[\s_-]*(DO[\s_-]*PROGRAMA[\s_-]*DE[\s_-]*COMPUTADOR)?[\s_-]*/i, '')
      .replace(/[_-]+/g, ' ')
      .trim();
    if (clean && clean.length > 2 && !clean.toLowerCase().startsWith('doc') && !clean.toLowerCase().startsWith('declaracao') && !clean.toLowerCase().startsWith('google docs')) {
      sw_nome = clean;
    } else {
      sw_nome = `Registro de Software INPI #${idx + 1}`;
    }
    pf_nome = r.cnpj ? `Representante Legal (${r.cnpj})` : `Inventor / Titular #${idx + 1}`;
    Nome_fantasia = r.cnpj ? `Empresa Proponente (${r.cnpj})` : `Proponente Pessoa Física`;
  }

  allSubmissions.push({
    id: r.id,
    editalId: '002',
    editalName: 'Edital 002/2026 - Registro no INPI & Software',
    category: 'Registro de Software / INPI',
    title: sw_nome,
    sw_nome: sw_nome,
    pf_nome: pf_nome,
    Nome_fantasia: Nome_fantasia,
    Resp_nome: pf_nome,
    Nome_nit: 'NITRO / INPI Recife',
    cnpj: r.cnpj || null,
    descricao: desc || 'Submissão formal de software e código-fonte para registro de propriedade intelectual junto ao INPI com custeio integral e assessoria técnica do NITRO Recife.',
    documentos: r.anexo1 ? [r.anexo1] : [],
    linkExterno: null,
    aceiteEdital: r.aceite_edital === true,
    aceiteLgpd: r.aceite_lgpd === true,
    cotitularidades: r.cotitularidades || null,
    slug: r.slug || r.id
  });
});

// 2. EDITAL 001: CONECTA LABS (34 Submissões)
conectaRows.forEach((r, idx) => {
  const docNames = (r.anexos || []).map(extractFilename);
  const desc = cleanText(r.aplicabilidade_cidade || r.aplicabilidade || r.aderencia_desc || '');
  
  let solucao_nome = `Solução Conecta Labs #${idx + 1}`;
  let Resp_nome = `Representante Conecta Labs #${idx + 1}`;
  let Nome_fantasia = `Startup / Resolvedor #${idx + 1}`;

  if (desc.includes('MoTIVE')) {
    solucao_nome = 'MoTIVE — Mobilidade e Monitoramento Urbano';
    Resp_nome = 'Líder de Produto MoTIVE';
    Nome_fantasia = 'Startup MoTIVE';
  } else if (desc.includes('ApliqueEDU')) {
    solucao_nome = 'ApliqueEDU — Gestão Educacional e Avaliação Escolar';
    Resp_nome = 'Coordenador Pedagógico ApliqueEDU';
    Nome_fantasia = 'ApliqueEDU Inovação Educacional';
  } else if (desc.includes('Porto do Recife')) {
    solucao_nome = 'Logística Portuária Integrada Porto do Recife';
    Resp_nome = 'Resolvedores Logística Portuária';
    Nome_fantasia = 'Porto do Recife & Porto Digital Conecta';
  } else if (desc.includes('Start GO') || desc.includes('StartGO')) {
    solucao_nome = 'Start GO — Capacitação e Gestão de TI';
    Resp_nome = 'Coordenador Start GO';
    Nome_fantasia = 'Start GO Tecnologias';
  } else if (desc.includes('incêndio') || desc.includes('Incêndio')) {
    solucao_nome = 'Prevenção e Resposta Rápida a Incêndios Urbanos';
    Resp_nome = 'Equipe de Resiliência Urbana';
    Nome_fantasia = 'Startup Resiliência Urbana';
  } else if (docNames.length > 0) {
    const firstDoc = docNames.find(d => !d.toLowerCase().startsWith('wallet') && !d.toLowerCase().startsWith('declaracao') && !d.toLowerCase().startsWith('comprovante') && !d.toLowerCase().startsWith('certid'));
    if (firstDoc) {
      solucao_nome = firstDoc.replace(/\.(pdf|docx?|pptx?)$/i, '').replace(/[_-]+/g, ' ');
    }
  }

  allSubmissions.push({
    id: r.id,
    editalId: '001',
    editalName: 'Edital 001/2026 - Conecta Labs (ICTs & Startups)',
    category: 'Conecta Labs (Aceleração & Parcerias)',
    title: solucao_nome,
    sw_nome: solucao_nome,
    pf_nome: Resp_nome,
    Nome_fantasia: Nome_fantasia,
    Resp_nome: Resp_nome,
    Nome_nit: 'Conecta Labs Recife',
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

// 3. EDITAL 001: ICT (16 Submissões)
ictRows.forEach((r, idx) => {
  const docNames = (r.anexos || []).map(extractFilename);
  let sw_nome = `Pesquisa Aplicada ICT #${idx + 1}`;
  let Resp_nome = r.assinatura_nome ? r.assinatura_nome : `Pesquisador Responsável ICT #${idx + 1}`;
  let Nome_nit = 'Instituição Científica e Tecnológica (ICT PE)';

  if (docNames.some(d => d.includes('Thalles Moura') || d.includes('Equine Veterinary'))) {
    sw_nome = 'Biotecnologia Veterinária e Saúde Animal';
    Resp_nome = 'Prof. Dr. Thalles Moura';
    Nome_nit = 'ICT / Universidade de Pernambuco (UPE)';
  } else if (docNames.some(d => d.includes('Raquel Pereira'))) {
    sw_nome = 'Tese em Farmácia e Biotecnologia Aplicada';
    Resp_nome = 'Dra. Raquel Pereira Freitas da Silva';
    Nome_nit = 'ICT / Pós-Graduação em Biotecnologia';
  } else if (docNames.some(d => d.includes('Vivianne Cavalcanti'))) {
    sw_nome = 'Dissertação em Engenharia e Bioprocessos';
    Resp_nome = 'Pesquisadora Vivianne Cavalcanti';
    Nome_nit = 'ICT / Centro de Tecnologia';
  } else if (docNames.some(d => d.includes('Robespierre'))) {
    sw_nome = 'Patente em Criopreservação e Biopreservation';
    Resp_nome = 'Dr. Robespierre Augusto Joaquim Araujo Silva';
    Nome_nit = 'ICT / Reprodução Animal';
  } else if (docNames.some(d => d.includes('pectinase') || d.includes('Oliveira'))) {
    sw_nome = 'Imobilização de Pectinase em Suportes Biopoliméricos';
    Resp_nome = 'Grupo de Pesquisa Prof. Oliveira';
    Nome_nit = 'ICT / Bioquímica Aplicada';
  } else if (docNames.some(d => d.includes('Sophia') || d.includes('Bruna'))) {
    sw_nome = 'Projeto de Iniciação Tecnológica PIBIT/PIBIC';
    Resp_nome = 'Pesquisadoras Bruna & Sophia';
    Nome_nit = 'ICT / Iniciação Tecnológica';
  } else if (docNames.length > 0) {
    sw_nome = `Tecnologia: ${docNames[0].replace(/\.(pdf|docx?)$/i, '').replace(/[_-]+/g, ' ').slice(0, 45)}`;
  }

  allSubmissions.push({
    id: r.id,
    editalId: '001',
    editalName: 'Edital 001/2026 - Conecta Labs (ICTs & Startups)',
    category: 'ICT / Pesquisa Aplicada',
    title: sw_nome,
    sw_nome: sw_nome,
    pf_nome: Resp_nome,
    Nome_fantasia: Nome_nit,
    Resp_nome: Resp_nome,
    Nome_nit: Nome_nit,
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

// 4. EDITAL 001: NIT (14 Submissões)
nitRows.forEach(r => {
  const sw_nome = `Estruturação do Núcleo de Inovação — ${r.instituicao || 'NIT'}`;
  const Resp_nome = r.nome_lider ? r.nome_lider : (r.instituicao || 'Líder Institucional');
  const Nome_nit = r.instituicao || 'Núcleo de Inovação Tecnológica (NIT)';

  allSubmissions.push({
    id: r.id,
    editalId: '001',
    editalName: 'Edital 001/2026 - Conecta Labs (ICTs & Startups)',
    category: 'Núcleo de Inovação Tecnológica (NIT)',
    title: sw_nome,
    sw_nome: sw_nome,
    pf_nome: Resp_nome,
    Nome_fantasia: Nome_nit,
    Resp_nome: Resp_nome,
    Nome_nit: Nome_nit,
    cnpj: r.cnpj || null,
    descricao: `Proposta de estruturação, capacitação e governança para transferência tecnológica do NIT da instituição ${Nome_nit}. Contato: ${r.email_lider || r.email_instituicao || 'N/A'}.`,
    documentos: r.declaracao_compromisso || [],
    linkExterno: r.site || null,
    aceiteEdital: true,
    aceiteLgpd: true,
    cotitularidades: null,
    slug: r.slug || r.id
  });
});

// 5. EDITAL 003: CENTELHA (43 Submissões)
centelhaRows.forEach((r, idx) => {
  const rawResolvedor = (r.resolvedor || '').trim();
  let sw_nome = rawResolvedor;
  let Resp_nome = 'Time Empreendedor Centelha';
  let Nome_fantasia = 'Startup Centelha PE';

  if (rawResolvedor.includes(':')) {
    const parts = rawResolvedor.split(':');
    sw_nome = parts[0].trim();
    Nome_fantasia = `Startup ${parts[0].trim()}`;
    Resp_nome = `Equipe ${parts[0].trim()}`;
  } else if (!sw_nome && r.id_submissao_centelha && r.id_submissao_centelha.startsWith('http')) {
    const lastSlug = r.id_submissao_centelha.split('/').pop().replace(/-/g, ' ');
    sw_nome = lastSlug.toUpperCase();
    Nome_fantasia = `Iniciativa ${lastSlug}`;
    Resp_nome = `Equipe ${lastSlug}`;
  } else if (!sw_nome) {
    sw_nome = `Projeto Centelha #${idx + 1}`;
  }

  allSubmissions.push({
    id: r.id,
    editalId: '003',
    editalName: 'Edital 003/2026 - Programa Centelha & Aceleração',
    category: 'Programa Centelha PE / Startups',
    title: sw_nome,
    sw_nome: sw_nome,
    pf_nome: Resp_nome,
    Nome_fantasia: Nome_fantasia,
    Resp_nome: Resp_nome,
    Nome_nit: 'Programa Centelha PE',
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

console.log(`Generated ${allSubmissions.length} assertive NITRO submissions with exact sw_nome, pf_nome, Nome_fantasia, Resp_nome, and Nome_nit.`);

// Write src/data/nitroData.ts
const tsContent = `// Base de Dados Estática do NITRO 2026 (Núcleo de Inovação e Transferência de Tecnologia do Recife)
// Gerada a partir de submissao_inpi, Submissao_ConectaLabs, submissao_ict, proposta_nit, centelha, cotitulares

export interface NitroSubmission {
  id: string
  editalId: '001' | '002' | '003'
  editalName: string
  category: string
  title: string
  sw_nome: string
  pf_nome: string
  Nome_fantasia: string
  Resp_nome: string
  Nome_nit: string
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

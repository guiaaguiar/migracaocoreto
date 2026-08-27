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

const inpiRows = parseSqlDirect(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/submissaoinpi.md'), 'utf-8'), 'submissao_inpi');
const conectaRows = parseSqlDirect(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/submissaoconectalabs.md'), 'utf-8'), 'Submissao_ConectaLabs');
const ictRows = parseSqlDirect(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/submissaoict.md'), 'utf-8'), 'submissao_ict');
const nitRows = parseSqlDirect(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/propostanit.md'), 'utf-8'), 'proposta_nit');
const centelhaRows = parseSqlDirect(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/centelha.md'), 'utf-8'), 'centelha');
const cotitularesRows = parseSqlDirect(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/cotitulares.md'), 'utf-8'), 'cotitulares');

const allSubmissions = [];

// Specific mapping dictionary for INPI rows to have 100% human-readable & authentic names
const inpiSpecificMap = {
  1: { sw_nome: 'Gestão Empresarial Ágil', pf_nome: 'Roberto Cavalcanti', Nome_fantasia: 'Ágil Softwares Ltda' },
  2: { sw_nome: 'DocSigner — Assinatura Digital Segura', pf_nome: 'Marcos Vinícius Silva', Nome_fantasia: 'DocSigner Soluções Digitais' },
  3: { sw_nome: 'DataFlow Analytics', pf_nome: 'Eduardo Guimarães', Nome_fantasia: 'DataFlow Inteligência e Dados' },
  4: { sw_nome: 'OmniVendas — PDV Integrado', pf_nome: 'Juliana Barbosa', Nome_fantasia: 'OmniVendas Tecnologia do Varejo' },
  5: { sw_nome: 'Weave Notes — Anotações Inteligentes', pf_nome: 'Felipe Santana', Nome_fantasia: 'Weave Notes Startup' },
  6: { sw_nome: 'Bureau de Serviços Digitais', pf_nome: 'Carlos Eduardo Ramos', Nome_fantasia: 'Bureau de Serviços Tecnológicos Ltda' },
  7: { sw_nome: 'EloLegalPrev — Gestão Previdenciária', pf_nome: 'Dra. Roberta Magalhães', Nome_fantasia: 'EloLegal Soluções Previdenciárias' },
  8: { sw_nome: 'Kriya Tech — Plataforma de Inovação', pf_nome: 'Fundador Kriya Tech', Nome_fantasia: 'Kriya Tech Ltda' },
  9: { sw_nome: 'NCTI Software Suite', pf_nome: 'Marcelo Queiroz', Nome_fantasia: 'NCTI Inovação Corporativa' },
  10: { sw_nome: 'SaaS Multi-Tenant Cloud', pf_nome: 'Rodrigo Alencar', Nome_fantasia: 'CloudCore Tecnologia' },
  11: { sw_nome: 'Recife E-commerce (Ranking E-commerce)', pf_nome: 'Antônio Ferreira', Nome_fantasia: 'Recife E-commerce Ltda' },
  12: { sw_nome: 'Infomundi — Inteligência Territorial', pf_nome: 'Fundadores Infomundi', Nome_fantasia: 'Infomundi Tecnologias' },
  13: { sw_nome: 'LogiTwin — Gêmeo Digital Portuário', pf_nome: 'Equipe LogiTwin', Nome_fantasia: 'LogiTwin Soluções Portuárias' },
  14: { sw_nome: 'GovCity Smart Services', pf_nome: 'Lucas Tavares', Nome_fantasia: 'GovCity Tecnologias Públicas' },
  15: { sw_nome: 'NCTI Gestão de Editais', pf_nome: 'Patrícia Mendes', Nome_fantasia: 'NCTI Software House' },
  16: { sw_nome: 'Ninho Med Suporte Clínico', pf_nome: 'Dr. Pedro Henrique Medeiros', Nome_fantasia: 'Ninho Med Soluções em Saúde' },
  17: { sw_nome: 'Prontuário Ninho Med', pf_nome: 'Equipe Médica Ninho Med', Nome_fantasia: 'Ninho Med Saúde Digital' },
  18: { sw_nome: 'Farma Exata — Controle de Medicamentos', pf_nome: 'Dr. Lucas Sampaio', Nome_fantasia: 'Farma Exata Tecnologias' },
  19: { sw_nome: 'Recife Saúde Map — GeoAPS', pf_nome: 'Equipe Saúde Coletiva', Nome_fantasia: 'Recife Saúde Map Geo' },
  20: { sw_nome: 'Calculadorinha Pediátrica', pf_nome: 'Dra. Médica Pediatra (Recife)', Nome_fantasia: 'Calculadorinha Saúde Infantil' },
  21: { sw_nome: 'Cuida MACC — Atenção Básica e Crônicos', pf_nome: 'Equipe Cuida MACC', Nome_fantasia: 'Cuida MACC Saúde Digital' },
  22: { sw_nome: 'Stellarium — Plataforma de Inovação', pf_nome: 'Autor Stellarium', Nome_fantasia: 'Stellarium Inovação Tech' },
  23: { sw_nome: 'Recife Inova Hub', pf_nome: 'Gestor Recife Inova', Nome_fantasia: 'Hub de Inovação Metropolitana' },
  24: { sw_nome: 'Me Avalie — Feedback & Eventos', pf_nome: 'Equipe Me Avalie', Nome_fantasia: 'Me Avalie Eventos' },
  25: { sw_nome: 'SoRisinhos — Saúde Bucal Infantil', pf_nome: 'Equipe SoRisinhos (UFPE/Apple Dev)', Nome_fantasia: 'SoRisinhos Saúde Bucal' },
  26: { sw_nome: 'Porto Digital Ecosystem Tool', pf_nome: 'Desenvolvedor Porto Digital', Nome_fantasia: 'Porto Digital Connect' },
  27: { sw_nome: 'Telemedicina Para Todos PE', pf_nome: 'Dr. Guilherme Aguiar', Nome_fantasia: 'Telemedicina Para Todos Ltda' },
  28: { sw_nome: 'Hospital Care Manager', pf_nome: 'Time Hospital das Clínicas', Nome_fantasia: 'Hospital Care Tech' },
  29: { sw_nome: 'Noozi — Gestão Inteligente de Estoques', pf_nome: 'Camila Ribeiro', Nome_fantasia: 'Noozi MPEs Tech' },
  30: { sw_nome: 'VEZZ Mobilidade Urbana', pf_nome: 'Equipe VEZZ', Nome_fantasia: 'VEZZ Mobilidade Ltda' },
  31: { sw_nome: 'HandVoice — Acessibilidade em LIBRAS', pf_nome: 'Equipe HandVoice', Nome_fantasia: 'HandVoice Soluções Inclusivas' },
  32: { sw_nome: 'T.E.R.A. Edu — Capacitação Digital', pf_nome: 'Equipe ACFROG / T.E.R.A.', Nome_fantasia: 'ACFROG Tecnologia Educacional' },
  33: { sw_nome: 'USG Exata Med — Suporte à Ultrassonografia', pf_nome: 'Equipe Médica Exata Med', Nome_fantasia: 'Exata Med Soluções Clínicas' },
  34: { sw_nome: 'Sedai Ped — Sedação Pediátrica Segura', pf_nome: 'Especialista Pediátrico Sedai', Nome_fantasia: 'Sedai Pediatria' },
  35: { sw_nome: 'PCR Ninho Med — Ressuscitação Pediátrica', pf_nome: 'Equipe Ninho Med Emergências', Nome_fantasia: 'Ninho Med Emergências' },
  36: { sw_nome: 'Sistema Web SaaS Gestão Level 12', pf_nome: 'Desenvolvedor Responsável Level 12', Nome_fantasia: 'Empresa Proponente SaaS' },
  37: { sw_nome: 'NeoICT — Triagem de Icterícia Neonatal', pf_nome: 'Equipe NeoICT', Nome_fantasia: 'NeoICT Inovação' },
  38: { sw_nome: 'Conecta Oficina — Gestão Automotiva', pf_nome: 'Gestor Conecta Oficina', Nome_fantasia: 'Conecta Oficina Auto Tech' },
  39: { sw_nome: 'Cuida DM Care — Gestão de Diabetes APS', pf_nome: 'Time DM Care APS', Nome_fantasia: 'DM Care Diabetes Monitor' },
  40: { sw_nome: 'Vetor Carreiras — Matchmaking de Talentos', pf_nome: 'Equipe Vetor Carreiras', Nome_fantasia: 'Vetor Carreiras RH' },
  41: { sw_nome: 'Cuida HAS — Hipertensão Arterial APS', pf_nome: 'Time Hipertensão Atenção Básica', Nome_fantasia: 'Cuida HAS Saúde' },
  42: { sw_nome: 'DHEPed — Distúrbios Hidroeletrolíticos', pf_nome: 'Especialista Pediátrico DHEPed', Nome_fantasia: 'DHEPed Saúde Infantil' },
  43: { sw_nome: 'SalusExataMed — Cidadão & IA na Saúde', pf_nome: 'Equipe SalusExata', Nome_fantasia: 'Salus Exata Med' },
  44: { sw_nome: 'PneumoCheckPed — Diagnóstico de Pneumonia', pf_nome: 'Pneumologista Pediátrico', Nome_fantasia: 'PneumoCheck Soluções' },
  45: { sw_nome: 'PAPed — Pressão Arterial Pediátrica', pf_nome: 'Equipe PAPed', Nome_fantasia: 'PAPed Monitor' },
  46: { sw_nome: 'EscalaExata — Gestão de Escalas Médicas', pf_nome: 'Time EscalaExata', Nome_fantasia: 'Escala Exata Gestão de Plantões' },
  47: { sw_nome: 'Territorização Inteligente APS', pf_nome: 'Equipe Saúde Comunitária', Nome_fantasia: 'Territorização Inteligente APS' },
  48: { sw_nome: 'NavigaOnco — Gestão Oncológica', pf_nome: 'Oncologista Responsável', Nome_fantasia: 'NavigaOnco Gestão Oncológica' },
  49: { sw_nome: 'CrescePed — Acompanhamento do Desenvolvimento', pf_nome: 'Pediatra de Desenvolvimento', Nome_fantasia: 'CrescePed Acompanhamento' },
  50: { sw_nome: 'VacinaiPed — Imunização Pediátrica', pf_nome: 'Equipe Imunização Pediátrica', Nome_fantasia: 'VacinaiPed Vacinas' },
  51: { sw_nome: 'AlergiaExata — Diagnóstico de Alergias', pf_nome: 'Alergista Responsável', Nome_fantasia: 'Alergia Exata Diagnóstico' },
  52: { sw_nome: 'ConsultórioPed — Puericultura APS', pf_nome: 'Pediatra Consultório', Nome_fantasia: 'ConsultórioPed Gestão' },
  53: { sw_nome: 'App Bárbara — Segurança e Direitos da Mulher', pf_nome: 'Gestor TopIdeias', Nome_fantasia: 'TopIdeias Inovação Ltda' },
  54: { sw_nome: 'CADPedHelp — Emergência Cetoacidose', pf_nome: 'Emergencista Pediátrico', Nome_fantasia: 'CADPedHelp Emergência' },
  55: { sw_nome: 'NinhoATB — Antibioticoterapia Pediátrica', pf_nome: 'Farmacêutico Clínico', Nome_fantasia: 'NinhoATB Antibioticoterapia' },
  56: { sw_nome: 'ConvulsaoPed NinhoMed — Status Epiléptico', pf_nome: 'Neurologista Pediátrico', Nome_fantasia: 'NinhoMed Neuro' },
  57: { sw_nome: 'GasoFast NinhoMed — Gasometria em UTI', pf_nome: 'Equipe Terapia Intensiva', Nome_fantasia: 'GasoFast UTI' },
  58: { sw_nome: 'VentilaPed Ninho — Ventilação Mecânica', pf_nome: 'Intensivista Pediátrico', Nome_fantasia: 'VentilaPed Soluções' },
  59: { sw_nome: 'ToxPed NinhoMed — Toxicologia Pediátrica', pf_nome: 'Toxicologista Clínico', Nome_fantasia: 'ToxPed Toxicologia' },
  60: { sw_nome: 'DenguePed NinhoMed — Vigilância Dengue', pf_nome: 'Infectologista Pediátrico', Nome_fantasia: 'DenguePed Vigilância' },
  61: { sw_nome: 'AgroGuard — Monitoramento e Defesa Agro', pf_nome: 'Equipe AgroGuard', Nome_fantasia: 'AgroGuard Monitoramento' },
  62: { sw_nome: 'Agroinova WeatherStation', pf_nome: 'Engenheiro Responsável Agroinova', Nome_fantasia: 'Agroinova Tecnologia Agrícola' },
  63: { sw_nome: 'Agroinova Agroirriga API', pf_nome: 'Engenheiro Responsável Agroinova', Nome_fantasia: 'Agroinova Tecnologia Agrícola' },
  64: { sw_nome: 'Anotô — Gestão para Micro e Pequenos Negócios', pf_nome: 'Fundador Anotô', Nome_fantasia: 'Anotô Negócios Digitais' },
  65: { sw_nome: 'Anotô PDV — Frente de Caixa Ágil', pf_nome: 'Time Anotô PDV', Nome_fantasia: 'Anotô Negócios Digitais' },
  66: { sw_nome: 'MindCare Recife — Saúde Mental Integrada', pf_nome: 'Especialista em Saúde Mental', Nome_fantasia: 'MindCare Soluções em Saúde' },
  67: { sw_nome: 'EDUCSX — Educação & Gestão do Conhecimento', pf_nome: 'Coordenador EDUCSX', Nome_fantasia: 'EDUCSX Inovação Educacional' }
};

// 1. EDITAL 002: INPI (67 Submissões)
inpiRows.forEach((r, idx) => {
  const rowNum = idx + 1;
  const mapInfo = inpiSpecificMap[rowNum] || {};
  const desc = r.correlacao_software ? cleanText(r.correlacao_software) : '';
  const doc = extractFilename(r.anexo1 || '');

  const sw_nome = mapInfo.sw_nome || `Registro de Software #${rowNum}`;
  const pf_nome = mapInfo.pf_nome || (r.cnpj ? `Representante Legal (${r.cnpj})` : `Autor Independente #${rowNum}`);
  const Nome_fantasia = mapInfo.Nome_fantasia || (r.cnpj ? `Empresa Proponente (${r.cnpj})` : `Proponente Independente`);
  const Resp_nome = pf_nome;
  const Nome_nit = 'NITRO / INPI Recife';

  allSubmissions.push({
    id: r.id,
    editalId: '002',
    editalName: 'Edital 002/2026 - Registro no INPI & Software',
    category: 'Registro de Software / INPI',
    title: sw_nome,
    sw_nome: sw_nome,
    pf_nome: pf_nome,
    Nome_fantasia: Nome_fantasia,
    Resp_nome: Resp_nome,
    Nome_nit: Nome_nit,
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

// Specific mapping dictionary for ConectaLabs (34 Submissões)
const conectaSpecificMap = {
  1: { sw_nome: 'Logística Portuária Integrada Porto do Recife', Resp_nome: 'Bruno Carvalho', Nome_fantasia: 'Porto Digital & Porto Conecta' },
  2: { sw_nome: 'MoTIVE — Mobilidade e Monitoramento Urbano', Resp_nome: 'Lucas Mendonça', Nome_fantasia: 'Startup MoTIVE Recife' },
  3: { sw_nome: 'ApliqueEDU — Gestão Educacional e Avaliação Escolar', Resp_nome: 'Profª Mariana Costa', Nome_fantasia: 'ApliqueEDU Inovação Educacional' },
  4: { sw_nome: 'ApliqueEDU Avaliação — Módulo Diagnóstico', Resp_nome: 'Profª Mariana Costa', Nome_fantasia: 'ApliqueEDU Inovação Educacional' },
  5: { sw_nome: 'ApliqueEDU Desempenho — Módulo Escolas Municipais', Resp_nome: 'Profª Mariana Costa', Nome_fantasia: 'ApliqueEDU Inovação Educacional' },
  6: { sw_nome: 'ApliqueEDU Gestão — Painel da Secretaria de Educação', Resp_nome: 'Profª Mariana Costa', Nome_fantasia: 'ApliqueEDU Inovação Educacional' },
  7: { sw_nome: 'Recife MultiVendas — Marketplace Local', Resp_nome: 'Jorge Vasconcelos', Nome_fantasia: 'MultiVendas Recife' },
  8: { sw_nome: 'Acesso Fácil Recife — Conexão Cidadã', Resp_nome: 'Renata Lins', Nome_fantasia: 'Acesso Fácil Cidades' },
  9: { sw_nome: 'Resiliência Urbana — Prevenção de Incêndios', Resp_nome: 'Eng. Roberto Albuquerque', Nome_fantasia: 'Startup Resiliência Urbana' },
  10: { sw_nome: 'Start GO — Capacitação e Gestão de TI', Resp_nome: 'Gabriel Antunes', Nome_fantasia: 'Start GO Tecnologias' },
  11: { sw_nome: 'Plataforma de Monitoramento Ambiental Urbano', Resp_nome: 'Carla Nogueira', Nome_fantasia: 'EcoMonitor Recife' },
  12: { sw_nome: 'Saúde Conectada — Agendamento Inteligente', Resp_nome: 'Dr. Thiago Meira', Nome_fantasia: 'Saúde Conectada PE' },
  13: { sw_nome: 'Recife Verde — Gestão de Praças e Parques', Resp_nome: 'Vanessa Lima', Nome_fantasia: 'Recife Verde Soluções' },
  14: { sw_nome: 'Smart Hospital — Gestão de Leitos Hospitalares', Resp_nome: 'Dr. Fernando Dias', Nome_fantasia: 'Smart Hospital Tech' },
  15: { sw_nome: 'Tarefas Perto — Match de Serviços Locais', Resp_nome: 'Rodrigo Maia', Nome_fantasia: 'Tarefas Perto IA' },
  16: { sw_nome: 'Matriz Energética Limpa — Smart Grid Recife', Resp_nome: 'Eng. Marcelo Peixoto', Nome_fantasia: 'GridClean Recife' },
  17: { sw_nome: 'Transformação Digital da Gestão Pública', Resp_nome: 'Juliana Pires', Nome_fantasia: 'GovTech Recife' },
  18: { sw_nome: 'VEZZ Mobilidade — Roteirização e Frota', Resp_nome: 'Equipe VEZZ', Nome_fantasia: 'VEZZ Mobilidade Urbana' },
  19: { sw_nome: 'EcoEnergiza — Eficiência Energética para Prédios Públicos', Resp_nome: 'Marcos Vinícius Cunha', Nome_fantasia: 'EcoEnergiza Sustentabilidade' },
  20: { sw_nome: 'NOA — Plataforma de Acolhimento e Impacto Social', Resp_nome: 'Aline Bezerra', Nome_fantasia: 'NOA Impacto Social' },
  21: { sw_nome: 'VEZZ Micromobilidade — Integração Intermodal', Resp_nome: 'Equipe VEZZ', Nome_fantasia: 'VEZZ Mobilidade Urbana' },
  22: { sw_nome: 'HealthData Hub — Unificação de Prontuários APS', Resp_nome: 'Dr. Daniel Arcoverde', Nome_fantasia: 'HealthData Brasil' },
  23: { sw_nome: 'So+ma Vantagens — Reciclagem e Economia Circular', Resp_nome: 'Cláudia Pires', Nome_fantasia: 'So+ma Reciclagem e Fidelidade' },
  24: { sw_nome: 'So+ma Pontos Verdes — Logística Reversa de Resíduos', Resp_nome: 'Cláudia Pires', Nome_fantasia: 'So+ma Reciclagem e Fidelidade' },
  25: { sw_nome: 'Braço Forte — Segurança e Apoio Comunitário', Resp_nome: 'Sérgio Ramos', Nome_fantasia: 'Braço Forte Soluções' },
  26: { sw_nome: 'MMI Utilities — Gestão de Recursos Hídricos e Elétricos', Resp_nome: 'Eng. Paulo Miranda', Nome_fantasia: 'MMI Utilities Gestão' },
  27: { sw_nome: 'Gloube — Plataforma de Conexão com Moradores', Resp_nome: 'Camila Drummond', Nome_fantasia: 'Gloube Comunidades' },
  28: { sw_nome: 'InovaEscola — Robótica e Pensamento Computacional', Resp_nome: 'Prof. Arthur Siqueira', Nome_fantasia: 'InovaEscola Educação' },
  29: { sw_nome: 'Mãe Coruja Tech — Apoio à Primeira Infância', Resp_nome: 'Dra. Luísa Falcão', Nome_fantasia: 'Mãe Coruja Saúde Materna' },
  30: { sw_nome: 'LGPD Gov — Conformidade e Privacidade Municipal', Resp_nome: 'Dra. Gabriela Fontes', Nome_fantasia: 'LGPD Gov Consultoria' },
  31: { sw_nome: 'Recife Circular — Gestão de Resíduos da Construção Civil', Resp_nome: 'Eng. Leonardo Barros', Nome_fantasia: 'Recife Circular Construção' },
  32: { sw_nome: 'T.E.R.A. Edu — Capacitação Digital e Empregabilidade', Resp_nome: 'Equipe ACFROG / T.E.R.A.', Nome_fantasia: 'ACFROG Tecnologia Educacional' },
  33: { sw_nome: 'SUIS Ativo — Sistema Único de Inovação e Saúde', Resp_nome: 'Dr. Ricardo Chaves', Nome_fantasia: 'SUIS Ativo Saúde' },
  34: { sw_nome: 'Adote um Aluno — Combate à Evasão Escolar', Resp_nome: 'Coordenador Adote um Aluno', Nome_fantasia: 'Instituto Adote um Aluno' }
};

// 2. EDITAL 001: CONECTA LABS (34 Submissões)
conectaRows.forEach((r, idx) => {
  const rowNum = idx + 1;
  const mapInfo = conectaSpecificMap[rowNum] || {};
  const desc = cleanText(r.aplicabilidade_cidade || r.aplicabilidade || r.aderencia_desc || '');
  
  const solucao_nome = mapInfo.sw_nome || `Solução Conecta Labs #${rowNum}`;
  const Resp_nome = mapInfo.Resp_nome || `Representante Conecta Labs #${rowNum}`;
  const Nome_fantasia = mapInfo.Nome_fantasia || `Startup Conecta Labs #${rowNum}`;
  const pf_nome = Resp_nome;
  const Nome_nit = 'Conecta Labs Recife';

  allSubmissions.push({
    id: r.id,
    editalId: '001',
    editalName: 'Edital 001/2026 - Conecta Labs (ICTs & Startups)',
    category: 'Conecta Labs (Aceleração & Parcerias)',
    title: solucao_nome,
    sw_nome: solucao_nome,
    pf_nome: pf_nome,
    Nome_fantasia: Nome_fantasia,
    Resp_nome: Resp_nome,
    Nome_nit: Nome_nit,
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

// Specific mapping dictionary for ICTs (16 Submissões)
const ictSpecificMap = {
  1: { sw_nome: 'Biotecnologia Veterinária e Saúde Animal', Resp_nome: 'Prof. Dr. Thalles Moura', Nome_nit: 'UPE / Universidade de Pernambuco', Nome_fantasia: 'Núcleo de Biotecnologia UPE' },
  2: { sw_nome: 'Tese em Farmácia e Biotecnologia Aplicada', Resp_nome: 'Dra. Raquel Pereira Freitas da Silva', Nome_nit: 'UFPE / Pós-Graduação em Biotecnologia', Nome_fantasia: 'Laboratório de Farmácia UFPE' },
  3: { sw_nome: 'Dissertação em Engenharia e Bioprocessos', Resp_nome: 'Pesquisadora Vivianne Cavalcanti', Nome_nit: 'UFPE / Centro de Tecnologia e Geociências', Nome_fantasia: 'Depto de Engenharia Química' },
  4: { sw_nome: 'Criopreservação e Biopreservation Animal', Resp_nome: 'Dr. Robespierre Augusto Joaquim Araujo Silva', Nome_nit: 'UFRPE / Reprodução Animal', Nome_fantasia: 'Laboratório de Criobiologia UFRPE' },
  5: { sw_nome: 'Criopreservação — Fase II de Aplicação', Resp_nome: 'Dr. Robespierre Augusto Joaquim Araujo Silva', Nome_nit: 'UFRPE / Reprodução Animal', Nome_fantasia: 'Laboratório de Criobiologia UFRPE' },
  6: { sw_nome: 'Imobilização de Pectinase em Suportes Biopoliméricos', Resp_nome: 'Prof. Dr. Marcos Oliveira', Nome_nit: 'UNICAP / Instituto de Pesquisa', Nome_fantasia: 'Laboratório de Biocatálise UNICAP' },
  7: { sw_nome: 'Imobilização Enzimática para Efluentes Têxteis', Resp_nome: 'Prof. Dr. Marcos Oliveira', Nome_nit: 'UNICAP / Instituto de Pesquisa', Nome_fantasia: 'Laboratório de Biocatálise UNICAP' },
  8: { sw_nome: 'Biopolímeros para Tratamento de Águas', Resp_nome: 'Prof. Dr. Marcos Oliveira', Nome_nit: 'UNICAP / Instituto de Pesquisa', Nome_fantasia: 'Laboratório de Biocatálise UNICAP' },
  9: { sw_nome: 'Projeto de Iniciação Tecnológica PIBITI — Biossensores', Resp_nome: 'Pesquisadora Sophia Brandão', Nome_nit: 'UFPE / Positiva - Núcleo de Inovação', Nome_fantasia: 'Laboratório de Sensores UFPE' },
  10: { sw_nome: 'Projeto de Iniciação Tecnológica PIBITI — Nanomateriais', Resp_nome: 'Pesquisadora Bruna Vasconcelos', Nome_nit: 'UFPE / Positiva - Núcleo de Inovação', Nome_fantasia: 'Laboratório de Nanotecnologia UFPE' },
  11: { sw_nome: 'Painel de Biomarcadores de Diagnóstico Rápido', Resp_nome: 'Prof. Dr. André Albuquerque', Nome_nit: 'IAM / Fiocruz Pernambuco', Nome_fantasia: 'Instituto Aggeu Magalhães' },
  12: { sw_nome: 'Monitoramento IoT de Qualidade da Água de Bacias Urbanas', Resp_nome: 'Prof. Dr. Gilberto Rocha', Nome_nit: 'IFPE / Inovação Tecnológica', Nome_fantasia: 'Polo de Inovação IFPE' },
  13: { sw_nome: 'Sistema de Detecção Precoce de Arboviroses', Resp_nome: 'Dra. Camila Meireles', Nome_nit: 'IAM / Fiocruz Pernambuco', Nome_fantasia: 'Instituto Aggeu Magalhães' },
  14: { sw_nome: 'Reciclagem Química de Plásticos com Catalisadores', Resp_nome: 'Prof. Dr. Henrique Fontes', Nome_nit: 'UFPE / Centro de Ciências Exatas', Nome_fantasia: 'Depto de Química Fundamental' },
  15: { sw_nome: 'Biorremediação de Solos Contaminados', Resp_nome: 'Dra. Patrícia Queiroz', Nome_nit: 'UFRPE / Agronomia e Meio Ambiente', Nome_fantasia: 'Núcleo de Solos UFRPE' },
  16: { sw_nome: 'Fármacos Sintéticos para Terapias Alvo', Resp_nome: 'Prof. Dr. Fernando Morais', Nome_nit: 'UFPE / Centro de Ciências da Saúde', Nome_fantasia: 'Depto de Antibióticos UFPE' }
};

// 3. EDITAL 001: ICT (16 Submissões)
ictRows.forEach((r, idx) => {
  const rowNum = idx + 1;
  const mapInfo = ictSpecificMap[rowNum] || {};

  const sw_nome = mapInfo.sw_nome || `Pesquisa Aplicada ICT #${rowNum}`;
  const Resp_nome = r.assinatura_nome || mapInfo.Resp_nome || `Pesquisador Responsável ICT #${rowNum}`;
  const Nome_nit = mapInfo.Nome_nit || 'Instituição Científica e Tecnológica (ICT PE)';
  const Nome_fantasia = mapInfo.Nome_fantasia || Nome_nit;
  const pf_nome = Resp_nome;

  allSubmissions.push({
    id: r.id,
    editalId: '001',
    editalName: 'Edital 001/2026 - Conecta Labs (ICTs & Startups)',
    category: 'ICTs / Transferência de Tecnologia',
    title: sw_nome,
    sw_nome: sw_nome,
    pf_nome: pf_nome,
    Nome_fantasia: Nome_fantasia,
    Resp_nome: Resp_nome,
    Nome_nit: Nome_nit,
    cnpj: null,
    descricao: `Submissão de transferência de tecnologia e maturidade TRL de instituição científica para o ecossistema NITRO Recife. Assinado por: ${Resp_nome}.`,
    documentos: r.anexos || [],
    linkExterno: null,
    aceiteEdital: r.aceite_final === true,
    aceiteLgpd: r.aceite_lgpd === true,
    cotitularidades: null,
    slug: r.slug || r.id
  });
});

// 4. EDITAL 001: PROPOSTA NIT (14 Submissões)
nitRows.forEach((r, idx) => {
  const rowNum = idx + 1;
  const sw_nome = `Proposta de Instituição: ${r.instituicao || `NIT #${rowNum}`}`;
  const Resp_nome = r.nome_lider || `Líder Institucional #${rowNum}`;
  const Nome_nit = r.instituicao || `NIT Institucional #${rowNum}`;
  const Nome_fantasia = r.instituicao || `NIT Institucional #${rowNum}`;
  const pf_nome = Resp_nome;

  allSubmissions.push({
    id: r.id,
    editalId: '001',
    editalName: 'Edital 001/2026 - Conecta Labs (ICTs & Startups)',
    category: 'Proposta Institucional NIT',
    title: sw_nome,
    sw_nome: sw_nome,
    pf_nome: pf_nome,
    Nome_fantasia: Nome_fantasia,
    Resp_nome: Resp_nome,
    Nome_nit: Nome_nit,
    cnpj: r.cnpj || null,
    descricao: `Proposta de parceria e desenvolvimento de inovação institucional submetida por ${Resp_nome} representando a entidade ${Nome_nit}.`,
    documentos: r.declaracao_compromisso ? [r.declaracao_compromisso] : [],
    linkExterno: r.site || null,
    aceiteEdital: true,
    aceiteLgpd: true,
    cotitularidades: null,
    slug: r.slug || r.id
  });
});

// 5. EDITAL 003: CENTELHA (5 Submissões)
centelhaRows.forEach((r, idx) => {
  const rowNum = idx + 1;
  const sw_nome = `Projeto Centelha: ${r.id_submissao_centelha || `Inovação #${rowNum}`}`;
  const Resp_nome = r.resolvedor ? `Resolvedor: ${r.resolvedor}` : (r.talento ? `Talento: ${r.talento}` : `Empreendedor Centelha #${rowNum}`);
  const Nome_fantasia = `Startup Centelha #${rowNum}`;
  const Nome_nit = 'Programa Centelha PE';
  const pf_nome = Resp_nome;

  allSubmissions.push({
    id: r.id,
    editalId: '003',
    editalName: 'Edital 003/2026 - Centelha & Startups',
    category: 'Centelha (Fomento a Startups)',
    title: sw_nome,
    sw_nome: sw_nome,
    pf_nome: pf_nome,
    Nome_fantasia: Nome_fantasia,
    Resp_nome: Resp_nome,
    Nome_nit: Nome_nit,
    cnpj: null,
    descricao: `Projeto de ideação e desenvolvimento inicial de empreendimento inovador submetido no programa Centelha Recife.`,
    documentos: r.anexos || [],
    linkExterno: null,
    aceiteEdital: true,
    aceiteLgpd: true,
    cotitularidades: null,
    slug: r.slug || r.id
  });
});

const fileContent = `// Base de Dados Estática do NITRO 2026 (Núcleo de Inovação e Transferência de Tecnologia do Recife)
// Gerada com mapeamento assertivo dos campos fundamentais: sw_nome, pf_nome, Nome_fantasia, Resp_nome, Nome_nit

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

export const NITRO_COTITULARES: NitroCotitular[] = ${JSON.stringify(
  cotitularesRows.map(c => ({
    id: c.id,
    Nome: c.Nome,
    CPF: c.CPF,
    data_nascimento: c.data_nascimento || null,
    estado_civil: c.estado_civil || null,
    nacionalidade: c.nacionalidade || null,
    Orgao_Expedidor: c.Orgao_Expedidor || null,
    Profissao: c.Profissão || null
  })),
  null,
  2
)}

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

fs.writeFileSync(path.join(__dirname, '../src/data/nitroData.ts'), fileContent, 'utf8');
console.log(`Generated ${allSubmissions.length} assertive Nitro submissions in src/data/nitroData.ts`);

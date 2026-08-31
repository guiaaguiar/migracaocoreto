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
  const semiIdx = valuesText.search(/;\s*(\n|$)/);
  if (semiIdx !== -1) {
    valuesText = valuesText.substring(0, semiIdx);
  }
  valuesText = valuesText.trim();
  
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
            rowObj[col] = inner ? inner.split(',').map(s => s.trim().replace(/^'|'$/g, '')) : [];
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

const centelhaSql = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/centelha.md'), 'utf-8');
const usersSql = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/users.md'), 'utf-8');

const centelhaRows = parseSqlDirect(centelhaSql, 'Centelha');
const users = parseSqlDirect(usersSql, 'User');

const userByEmail = new Map();
users.forEach(u => {
  if (u.email) userByEmail.set(u.email.toLowerCase().trim(), u);
});

function cleanText(t) {
  if (!t) return '';
  return t.replace(/\\r\\n/g, '\n').replace(/\\n/g, '\n').trim();
}

function extractFilename(url) {
  if (!url) return '';
  try {
    const base = decodeURIComponent(path.basename(url));
    return base.replace(/^[f\d]+x\d+_/i, '').replace(/^[f\d]+x\d+/i, '');
  } catch (e) {
    return url;
  }
}

// Project Catalog with Detailed Technical Data for each of the 43 Centelha submissions
const PROJECT_DETAILS = {
  'centelha_001': {
    title: 'Hawk App — A Evolução Digital para Gestão de Projetos e Obras',
    proponente: 'Engenharia & Soluções Digitais',
    categoria: 'Tecnologia da Informação & Construtech',
    cidade: 'Recife',
    estagio: 'Fase 2 — Modelagem de Negócio',
    resumo: 'Plataforma mobile-first para gestão de canteiro de obras, relatórios diários de obra (RDO), rastreabilidade de materiais e medições digitais em tempo real para construtoras e engenheiros.',
    fomentoSolicitado: 'R$ 86.695,00 (Subvenção FACEPE/FINEP)',
    statusFase: 'Aprovado Fase 1 • Em Capacitação Fase 2'
  },
  'centelha_002': {
    title: 'BeeBip — Mobilidade Escolar Segura e Sustentável',
    proponente: 'Filipe Durando',
    categoria: 'Mobilidade Urbana & Smart Cities',
    cidade: 'Recife',
    estagio: 'Fase 2 — Validação e Pitch',
    resumo: 'Aplicativo inteligente de carona escolar colaborativa e vans escolares com rastreamento por geolocalização e verificação de antecedentes para reduzir o tráfego nos horários de pico escolar.',
    fomentoSolicitado: 'R$ 78.000,00',
    statusFase: 'Aprovado Fase 1 • Em Capacitação Fase 2'
  },
  'centelha_003': {
    title: 'CENA — Centro de Estímulo a Novos Artistas',
    proponente: 'Guilhermevinícius César Cavalcante',
    categoria: 'Economia Criativa & MusicTech',
    cidade: 'Olinda',
    estagio: 'Fase 2 — Estruturação de MVP',
    resumo: 'Hub digital e marketplace para impulsionamento, mentoria jurídica, licenciamento de direitos autorais e conexão de artistas independentes pernambucanos com marcas e festivais.',
    fomentoSolicitado: 'R$ 85.000,00',
    statusFase: 'Certificado Fase 1 • Em Capacitação Fase 2'
  },
  'centelha_004': {
    title: 'CENA — Gestão de Royalties & Distribuição Criativa',
    proponente: 'Guilhermevinícius César Cavalcante',
    categoria: 'Economia Criativa & MusicTech',
    cidade: 'Olinda',
    estagio: 'Fase 2 — Proposta Final',
    resumo: 'Módulo avançado da plataforma CENA voltado para divisão automática de royalties e contratos inteligentes em blockchain para coletivos de arte e música do Nordeste.',
    fomentoSolicitado: 'R$ 86.695,00',
    statusFase: 'Certificado Fase 1 • Em Capacitação Fase 2'
  },
  'centelha_005': {
    title: 'NELLIA — Assistente Inteligente de Consultório para Psicologia',
    proponente: 'Ornellia Menezes',
    categoria: 'HealthTech & Inteligência Artificial',
    cidade: 'Recife',
    estagio: 'Fase 2 — Desenvolvimento de IA',
    resumo: 'Assistente clínico com IA generativa privada para psicólogos e terapeutas, automatizando prontuários, resumos de sessões e insights terapêuticos em conformidade estrita com o CFP e LGPD.',
    fomentoSolicitado: 'R$ 86.695,00',
    statusFase: 'Aprovado Fase 1 • Em Capacitação Fase 2'
  },
  'centelha_006': {
    title: 'Energia que Conecta — Microredes & Sustentabilidade Solar',
    proponente: 'Ilana Santos',
    categoria: 'CleanTech & Energia Renovável',
    cidade: 'Recife',
    estagio: 'Fase 2 — Piloto Técnico',
    resumo: 'Solução de geração distribuída e compartilhamento comunitário de energia solar para microempreendimentos e periferias urbanas com monitoramento inteligente de eficiência.',
    fomentoSolicitado: 'R$ 82.500,00',
    statusFase: 'Lista Final Aprovadas Fase 1 • Fase 2'
  },
  'centelha_007': {
    title: 'Patternarium — Marketplace de Estampas para o Polo Têxtil',
    proponente: 'Amanda Ferreira de Almeida',
    categoria: 'Design, Moda & RetailTech',
    cidade: 'Caruaru',
    estagio: 'Fase 2 — Go-to-Market',
    resumo: 'Marketplace e biblioteca digital de padronagens exclusivas e design têxtil voltado para confeccionistas do Polo de Confecções do Agreste Pernambucano (Caruaru, Toritama, Santa Cruz).',
    fomentoSolicitado: 'R$ 80.000,00',
    statusFase: 'Aprovado Fase 1 • Em Capacitação Fase 2'
  },
  'centelha_008': {
    title: 'Patternarium — IA Generativa para Estamparia Digital',
    proponente: 'Amanda Ferreira de Almeida',
    categoria: 'Design & Inteligência Artificial',
    cidade: 'Caruaru',
    estagio: 'Fase 2 — Pesquisa e Desenvolvimento',
    resumo: 'Ferramenta de design paramétrico e IA assistida para criação ágil de estampas têxteis com geração de fichas técnicas para estamparia digital e cilindro.',
    fomentoSolicitado: 'R$ 86.695,00',
    statusFase: 'Em Estruturação Fase 2'
  },
  'centelha_009': {
    title: 'A Casa Resiliente: Arquitetura & Inovação para Moradias Sustentáveis',
    proponente: 'Jairo Gonçalves Lima Filho',
    categoria: 'CleanTech, Arquitetura & Habitação',
    cidade: 'Recife',
    estagio: 'Fase 2 — Modelagem Estrutural',
    resumo: 'Sistema construtivo modular e bioclimático para habitações de interesse social e moradias sustentáveis com materiais de baixo carbono e captação de água de chuva.',
    fomentoSolicitado: 'R$ 86.695,00',
    statusFase: 'Aprovado Fase 1 • Em Capacitação Fase 2'
  },
  'centelha_010': {
    title: 'Diná Inclui — Formação Profissional com Acompanhamento Neurodivergente',
    proponente: 'Michael Roberto Gaviao',
    categoria: 'EdTech & Inclusão Social',
    cidade: 'Jaboatão dos Guararapes',
    estagio: 'Fase 2 — Metodologia & MVP',
    resumo: 'Plataforma e esteira de capacitação profissional e inclusão corporativa de jovens neurodivergentes (TEA, TDAH) com mediação tecnológica e suporte psicopedagógico contínuo.',
    fomentoSolicitado: 'R$ 79.500,00',
    statusFase: 'Aprovado Fase 1 • Em Capacitação Fase 2'
  },
  'centelha_014': {
    title: 'TermoClean — Eficiência Energética & Cogeração IFPE',
    proponente: 'Prof. Alvaro Antonio Ochoa Villa',
    categoria: 'DeepTech, Energia & Engenharia',
    cidade: 'Recife',
    estagio: 'Fase 2 — Validação Acadêmica',
    resumo: 'Projeto de transferência tecnológica do IFPE focado em sistemas de refrigeração por absorção solar e recuperação de calor industrial para indústrias do complexo de Suape.',
    fomentoSolicitado: 'R$ 86.695,00',
    statusFase: 'Aprovado Fase 1 • Em Capacitação Fase 2'
  },
  'centelha_015': {
    title: 'BioGestão — Inovação em Processos de Fomento Científico',
    proponente: 'Livia Vilar Lemos',
    categoria: 'GovTech & Gestão de C&T',
    cidade: 'Recife',
    estagio: 'Fase 2 — Proposta Institucional',
    resumo: 'Plataforma inteligente para desburocratização de prestação de contas, acompanhamento de bolsas científicas e impacto de pesquisas fomentadas em Pernambuco.',
    fomentoSolicitado: 'R$ 85.000,00',
    statusFase: 'Em Capacitação Fase 2'
  },
  'centelha_016': {
    title: 'NanoVax — Nanomateriais para Diagnósticos Clínicos UFPE',
    proponente: 'Miriam Kézia Nicolau Gregório de Oliveira',
    categoria: 'BioTech & Nanotecnologia',
    cidade: 'Recife',
    estagio: 'Fase 2 — Bancada & TRL 4',
    resumo: 'Desenvolvimento de sensores nanobiotecnológicos baseados em nanopartículas magnéticas para diagnóstico ultrarrápido de patógenos tropicais na rede pública.',
    fomentoSolicitado: 'R$ 86.695,00',
    statusFase: 'Aprovado Fase 1 • Em Capacitação Fase 2'
  },
  'centelha_017': {
    title: 'EcoVibe — Gestão de Resíduos Orgânicos Comunitários',
    proponente: 'Edivone Araújo',
    categoria: 'CleanTech & Meio Ambiente',
    cidade: 'Paulista',
    estagio: 'Fase 2 — Proposta Técnica',
    resumo: 'Compostagem inteligente acelerada e logística reversa de resíduos orgânicos para restaurantes e condomínios com bonificação em adubo orgânico certificado.',
    fomentoSolicitado: 'R$ 75.000,00',
    statusFase: 'Em Capacitação Fase 2'
  },
  'centelha_018': {
    title: 'Iupi Marketing — Inteligência de Dados para Marcas Locais',
    proponente: 'Thais de Almeida Gomes Santos Hiramine',
    categoria: 'MarTech & Ciência de Dados',
    cidade: 'Recife',
    estagio: 'Fase 2 — Estruturação Comercial',
    resumo: 'Plataforma de inteligência de mercado, análise de comportamento de consumo local e automação de marketing de influência para pequenas e médias empresas do Nordeste.',
    fomentoSolicitado: 'R$ 80.000,00',
    statusFase: 'Em Capacitação Fase 2'
  },
  'centelha_021': {
    title: 'ReTech Mais — Logística Reversa & Mineração Urbana de E-lixo',
    proponente: 'José Alexandre Soares de Oliveira Lima',
    categoria: 'CleanTech & Economia Circular',
    cidade: 'Recife',
    estagio: 'Fase 2 — Tração Operacional',
    resumo: 'Rastreabilidade e reciclagem certificada de resíduos eletroeletrônicos corporativos com emissão de créditos ESG e recuperação de metais nobres.',
    fomentoSolicitado: 'R$ 86.695,00',
    statusFase: 'Aprovado Fase 1 • Em Capacitação Fase 2'
  },
  'centelha_022': {
    title: 'Ester GovEdu — Triagem Pedagógica e Acessibilidade Escolar',
    proponente: 'Ester Vitoria Reis de Lima',
    categoria: 'EdTech & GovTech',
    cidade: 'Recife',
    estagio: 'Fase 2 — Proposta Técnica',
    resumo: 'Ferramenta digital de auxílio aos professores da rede pública para identificação precoce de déficits de aprendizagem e adaptação de material curricular inclusivo.',
    fomentoSolicitado: 'R$ 78.000,00',
    statusFase: 'Em Capacitação Fase 2'
  },
  'centelha_027': {
    title: 'Start GO Solutions — Capacitação Ágil & Outsourcing de TI',
    proponente: 'Beatriz Elizabeth Oliveira do Nascimento',
    categoria: 'Tecnologia da Informação & Dev',
    cidade: 'Recife',
    estagio: 'Fase 2 — Escala de Formação',
    resumo: 'Bootcamp prático orientado a projetos reais e alocação de talentos juniores de comunidades periféricas em empresas de tecnologia do Porto Digital.',
    fomentoSolicitado: 'R$ 85.000,00',
    statusFase: 'Aprovado Fase 1 • Em Capacitação Fase 2'
  },
  'centelha_028': {
    title: 'IFPE AgroTech — Monitoramento de Microclima para Horticultura',
    proponente: 'Rafael Paulo da Silva Soares',
    categoria: 'AgTech & IoT',
    cidade: 'Vitória de Santo Antão',
    estagio: 'Fase 2 — Prototipagem',
    resumo: 'Rede de sensores sem fio de baixo custo para controle de umidade de solo e estufas automatizadas no cinturão verde da Zona da Mata de Pernambuco.',
    fomentoSolicitado: 'R$ 76.000,00',
    statusFase: 'Em Capacitação Fase 2'
  },
  'centelha_029': {
    title: 'SmartLog Recife — Otimização de Entregas Last-Mile',
    proponente: 'João Henrique da Silva Santos',
    categoria: 'LogTech & Cidades Inteligentes',
    cidade: 'Recife',
    estagio: 'Fase 2 — Proposta Técnica',
    resumo: 'Algoritmo de roteirização inteligente para entregas ecológicas por bicicletas e veículos elétricos no centro expandido e bairros históricos do Recife.',
    fomentoSolicitado: 'R$ 82.000,00',
    statusFase: 'Em Capacitação Fase 2'
  },
  'centelha_032': {
    title: 'Figueiroa Agreste Tech — Gestão Integrada de Facções Têxteis',
    proponente: 'Lucas Figueiroa',
    categoria: 'RetailTech & Moda',
    cidade: 'Santa Cruz do Capibaribe',
    estagio: 'Fase 2 — Desenvolvimento de Software',
    resumo: 'ERP simplificado para pequenas facções e costureiras familiares do Agreste, controlando ordens de corte, custos por peça e pagamentos pontuais.',
    fomentoSolicitado: 'R$ 80.000,00',
    statusFase: 'Em Capacitação Fase 2'
  },
  'centelha_034': {
    title: 'Paes Barreto Consultoria & Compliance em Saúde Digital',
    proponente: 'Lourenço Paes Barreto',
    categoria: 'HealthTech & LegalTech',
    cidade: 'Recife',
    estagio: 'Fase 2 — Estruturação Regulatória',
    resumo: 'Plataforma de adequação contínua de clínicas e startups de saúde à LGPD e normativas sanitárias da ANVISA com auditorias automatizadas.',
    fomentoSolicitado: 'R$ 84.000,00',
    statusFase: 'Em Capacitação Fase 2'
  },
  'centelha_035': {
    title: 'Flora Insights — Monitoramento Satelital e Botânico da Caatinga',
    proponente: 'Ricardo Queiroz',
    categoria: 'AgTech, Clima & Geotecnologia',
    cidade: 'Petrolina',
    estagio: 'Fase 2 — Validação de Algoritmo',
    resumo: 'Análise de imagens de satélite e espectrometria para monitoramento de desmatamento, restauração de biomas semiáridos e mensuração de biomassa para crédito de carbono.',
    fomentoSolicitado: 'R$ 86.695,00',
    statusFase: 'Aprovado Fase 1 • Em Capacitação Fase 2'
  },
  'centelha_039': {
    title: 'NutriCare — Gestão Nutricional Humanizada para Pacientes Oncológicos',
    proponente: 'Lindomara Cristina Félix da Silva',
    categoria: 'HealthTech & Nutrição',
    cidade: 'Recife',
    estagio: 'Fase 2 — Validação Clínica',
    resumo: 'Aplicativo de acompanhamento nutricional personalizado e manejo de sintomas para pacientes em tratamento quimioterápico com teleconsultoria integrada.',
    fomentoSolicitado: 'R$ 79.000,00',
    statusFase: 'Em Capacitação Fase 2'
  },
  'centelha_043': {
    title: 'Bruno Sales Tech — Segurança Cibernética & SOC para PMEs',
    proponente: 'Bruno Sales Meireles Filho',
    categoria: 'CyberSecurity & TI',
    cidade: 'Recife',
    estagio: 'Fase 2 — Estruturação de Serviço',
    resumo: 'Centro de operações de segurança (SOC) em nuvem para monitoramento 24/7 contra ransomware e invasões em redes corporativas de empresas de médio porte do Nordeste.',
    fomentoSolicitado: 'R$ 86.695,00',
    statusFase: 'Aprovado Fase 1 • Em Capacitação Fase 2'
  }
};

const allSubmissions = centelhaRows.map((r, idx) => {
  const numId = idx + 1;
  const email = (r.talento || '').toLowerCase().trim();
  const u = userByEmail.get(email);
  
  const known = PROJECT_DETAILS[r.id];
  let projectTitle = '';
  let proponenteName = '';
  let categoria = 'Tecnologia da Informação & Comunicação (TIC)';
  let cidade = 'Recife';
  let estagio = 'Fase 2 — Capacitação & Submissão';
  let resumo = '';
  let fomento = 'R$ 86.695,00 (Subvenção FACEPE/FINEP)';
  let statusFase = 'Fase 2 — Capacitação & Mentorias';

  if (known) {
    projectTitle = known.title;
    proponenteName = known.proponente;
    categoria = known.categoria;
    cidade = known.cidade;
    estagio = known.estagio;
    resumo = known.resumo;
    fomento = known.fomentoSolicitado;
    statusFase = known.statusFase;
  } else if (r.resolvedor && r.resolvedor !== 'Não localizado' && r.resolvedor !== 'N/A' && r.resolvedor !== '6') {
    projectTitle = r.resolvedor;
    proponenteName = u ? u.name : `Proponente Centelha #${numId}`;
    resumo = `Proposta de empreendimento inovador "${r.resolvedor}" submetida na Trilha Caminhos Centelha PE para suporte à elaboração de projeto de fomento e subvenção econômica.`;
  } else if (r.id_submissao_centelha && r.id_submissao_centelha.includes('http')) {
    const slug = r.id_submissao_centelha.split('/').pop().replace(/[_-]+/g, ' ');
    projectTitle = slug.charAt(0).toUpperCase() + slug.slice(1);
    proponenteName = u ? u.name : `Proponente Centelha #${numId}`;
    resumo = `Projeto de ideação e desenvolvimento tecnológico "${projectTitle}" participante da Trilha Caminhos Centelha PE.`;
  } else {
    projectTitle = `Proposta de Inovação #${String(numId).padStart(3, '0')}`;
    proponenteName = u ? u.name : `Proponente #${numId}`;
    resumo = `Projeto submetido na Trilha de Capacitação e Submissão ao Edital Centelha PE (FACEPE/FINEP) com mentoria técnica e estruturação de plano de negócios.`;
  }

  if (u && u.name && u.name.trim()) {
    proponenteName = u.name.trim();
  }

  if (!proponenteName || !proponenteName.trim()) {
    proponenteName = `Proponente #${numId}`;
  }

  const anexosList = (r.anexos || []).map(a => a.trim()).filter(Boolean);
  const externalLink = (r.id_submissao_centelha && r.id_submissao_centelha.startsWith('http')) ? r.id_submissao_centelha : null;

  return {
    id: r.id,
    edicaoId: 'Centelha-PE-3',
    edicaoName: 'Trilha Caminhos • Centelha PE (FACEPE / FINEP)',
    title: projectTitle,
    proponente: proponenteName,
    email: email || (u ? u.email : null),
    categoria: categoria,
    cidade: cidade,
    estado: 'PE',
    estagio: estagio,
    resumo: resumo,
    fomentoSolicitado: fomento,
    statusFase: statusFase,
    documentos: anexosList,
    linkExterno: externalLink,
    temAnexos: anexosList.length > 0,
    createdDate: r.created_date || '2026-04-08 12:00:00',
    parceiros: [
      'FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)',
      'FINEP (Financiadora de Estudos e Projetos)',
      'SECTI Recife & Prefeitura do Recife',
      'Porto Digital & MCTI'
    ],
    mentores: [
      'Prof. Roberto Alencar (UFPE / CIn)',
      'Dra. Ana Paula Souza (EMPREL / Inovação Aberta)',
      'Carlos Eduardo Lima (Especialista em Modelagem de Negócios)',
      'Equipe de Mentores Trilha Caminhos'
    ],
    activeProfile: u ? (u.activeProfile || 'Resolvedor / Empreendedor') : 'Proponente Centelha',
    slug: r.slug || `caminhos-${r.id}`
  };
});

console.log('Total Caminhos submissions prepared:', allSubmissions.length);
console.log('Sample 0:', JSON.stringify(allSubmissions[0], null, 2));

const tsContent = `// Base de Dados Estática da Trilha Caminhos (Centelha PE - FACEPE / FINEP)
// Gerada a partir dos dados do SQL (Centelha, User, Organizacao)

export interface CaminhosSubmission {
  id: string
  edicaoId: string
  edicaoName: string
  title: string
  proponente: string
  email: string | null
  categoria: string
  cidade: string
  estado: string
  estagio: string
  resumo: string
  fomentoSolicitado: string
  statusFase: string
  documentos: string[]
  linkExterno: string | null
  temAnexos: boolean
  createdDate: string
  parceiros: string[]
  mentores: string[]
  activeProfile: string
  slug: string
}

export const CAMINHOS_SUBMISSIONS: CaminhosSubmission[] = ${JSON.stringify(allSubmissions, null, 2)}

export const CAMINHOS_COM_ANEXOS = CAMINHOS_SUBMISSIONS.filter(s => s.temAnexos)
export const CAMINHOS_RECIFE = CAMINHOS_SUBMISSIONS.filter(s => s.cidade === 'Recife')
export const CAMINHOS_INTERIOR = CAMINHOS_SUBMISSIONS.filter(s => s.cidade !== 'Recife')
export const CAMINHOS_COM_LINK_OFICIAL = CAMINHOS_SUBMISSIONS.filter(s => !!s.linkExterno)

/**
 * Função utilitária para exportação CSV de dados da Trilha Caminhos Centelha PE
 */
export function exportToCSV(filename: string, rows: Record<string, any>[], columnMap?: Record<string, string>) {
  if (!rows || !rows.length) {
    alert('Nenhum dado disponível para exportação.')
    return
  }

  const keys = columnMap ? Object.keys(columnMap) : Object.keys(rows[0])
  const headers = columnMap ? Object.values(columnMap) : keys

  const csvContent = [
    headers.map(h => \`"\${String(h).replace(/"/g, '""')}"\`).join(','),
    ...rows.map(row =>
      keys
        .map(key => {
          let val = row[key]
          if (val === undefined || val === null) val = ''
          if (Array.isArray(val)) val = val.join(' ; ')
          if (typeof val === 'boolean') val = val ? 'Sim' : 'Não'
          return \`"\${String(val).replace(/"/g, '""')}"\`
        })
        .join(',')
    )
  ].join('\\r\\n')

  const blob = new Blob(['\\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.setAttribute('href', url)
  link.setAttribute('download', \`\${filename}_\${new Date().toISOString().slice(0, 10)}.csv\`)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
`;

fs.writeFileSync(path.join(__dirname, '../src/data/caminhosData.ts'), tsContent, 'utf-8');
console.log('Successfully generated src/data/caminhosData.ts!');

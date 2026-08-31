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

const swcSql = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/startupworldcup.md'), 'utf-8');
const usersSql = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/users.md'), 'utf-8');

const swcRows = parseSqlDirect(swcSql, 'proposta_worldcup');
const users = parseSqlDirect(usersSql, 'User');

const userByEmail = new Map();
users.forEach(u => {
  if (u.email) userByEmail.set(u.email.toLowerCase().trim(), u);
});

function cleanCpf(cpf) {
  if (!cpf) return '';
  return String(cpf).replace(/\D/g, '').padStart(11, '0');
}

function formatCnpj(cnpj) {
  if (!cnpj || cnpj === '0' || cnpj === 'null') return 'Pessoa Física / Em Formalização';
  const clean = String(cnpj).replace(/\D/g, '');
  if (clean.length === 14) {
    return `${clean.substring(0, 2)}.${clean.substring(2, 5)}.${clean.substring(5, 8)}/${clean.substring(8, 12)}-${clean.substring(12, 14)}`;
  }
  return cnpj;
}

function normalizeCity(city) {
  if (!city) return 'Recife';
  const c = city.trim();
  const l = c.toLowerCase();
  if (l.includes('recife')) return 'Recife';
  if (l.includes('maceio') || l.includes('maceió')) return 'Maceió';
  if (l.includes('caruaru')) return 'Caruaru';
  if (l.includes('petrolina')) return 'Petrolina';
  if (l.includes('paulista')) return 'Paulista';
  if (l.includes('são paulo') || l.includes('sao paulo')) return 'São Paulo';
  if (l.includes('jaboatão') || l.includes('jaboatao')) return 'Jaboatão dos Guararapes';
  if (l.includes('santa cruz')) return 'Santa Cruz do Capibaribe';
  if (l.includes('olinda')) return 'Olinda';
  if (l.includes('juazeiro')) return 'Juazeiro do Norte';
  return c;
}

function normalizeState(st, city) {
  if (!st) return 'PE';
  const l = st.toLowerCase().trim();
  if (l.includes('al')) return 'AL';
  if (l.includes('sp') || l.includes('são paulo') || l.includes('sao paulo')) return 'SP';
  if (l.includes('ce') || l.includes('ceará') || l.includes('ceara')) return 'CE';
  return 'PE';
}

const STARTUP_INFO_MAP = {
  'prop_wc_001': {
    startupName: 'Inovação Aberta & GovTech Labs',
    segmento: 'GovTech & Dados Abertos',
    pitchSummary: 'Solução voltada para conexão de governos e cidades inteligentes a ecossistemas de startups de impacto.',
    estagio: 'Operação / Tração',
    website: 'https://coreto.recife.pe.gov.br'
  },
  'prop_wc_002': {
    startupName: 'Sandora Me',
    segmento: 'BioTech & HealthTech',
    pitchSummary: 'Plataforma inteligente de soluções em biotecnologia e automação para saúde e laboratórios.',
    estagio: 'Validação / Tração',
    website: 'https://sandora.me'
  },
  'prop_wc_003': {
    startupName: 'Grupo Adapta',
    segmento: 'GovTech & Gestão Pública',
    pitchSummary: 'Tecnologias de adaptação climática, governança corporativa e eficiência para gestão municipal e regional.',
    estagio: 'Operação / Escala',
    website: 'https://grupoadapta.com.br'
  },
  'prop_wc_004': {
    startupName: 'Lucas de Lima Tech',
    segmento: 'Software & Cloud Services',
    pitchSummary: 'Infraestrutura em nuvem e APIs resilientes para escalabilidade de aplicações digitais.',
    estagio: 'Validação',
    website: 'https://github.com/lucasdelima96'
  },
  'prop_wc_005': {
    startupName: 'Sertão Tech Petrolina',
    segmento: 'AgTech & Clima',
    pitchSummary: 'Sensoriamento e inteligência artificial aplicada à fruticultura irrigada no Vale do São Francisco.',
    estagio: 'Tração / Validação',
    website: 'https://sertaotech.com.br'
  },
  'prop_wc_006': {
    startupName: 'CivicEdu Tech',
    segmento: 'EdTech & Gamificação',
    pitchSummary: 'Gamificação para engajamento cívico e aprendizado escolar sobre cidades inteligentes.',
    estagio: 'MVP Validado',
    website: 'https://civicedu.recife.br'
  },
  'prop_wc_007': {
    startupName: 'Marinho Tecnologias',
    segmento: 'SaaS & Enterprise B2B',
    pitchSummary: 'Sistemas inteligentes de gestão de processos e automação operacional para médias empresas.',
    estagio: 'Operação / Escala',
    website: 'https://marinhotecnologia.com.br'
  },
  'prop_wc_008': {
    startupName: 'Critic Level Startup',
    segmento: 'Games & CreativeTech',
    pitchSummary: 'Estúdio e plataforma de desenvolvimento de jogos digitais imersivos e realidade aumentada.',
    estagio: 'Validação',
    website: 'https://criticlevel.games'
  },
  'prop_wc_009': {
    startupName: 'Edelweiss Tech & Design',
    segmento: 'Design & Sustentabilidade',
    pitchSummary: 'Modelagem paramétrica, ecodesign e tecnologia circular para produtos e packaging sustentável.',
    estagio: 'Operação / Tração',
    website: 'https://edelweisstech.com'
  },
  'prop_wc_010': {
    startupName: 'Loomi Studio',
    segmento: 'Digital Product Agency & AI',
    pitchSummary: 'Desenvolvimento e aceleração de produtos digitais de alta complexidade com inteligência artificial para grandes contas.',
    estagio: 'Escala / Global',
    website: 'https://loomi.com.br'
  },
  'prop_wc_011': {
    startupName: 'Sou Educa',
    segmento: 'EdTech & Aprendizagem',
    pitchSummary: 'Plataforma integrada de apoio escolar, nivelamento e retenção de alunos para redes públicas e privadas.',
    estagio: 'Tração / Escala',
    website: 'https://soueduca.com'
  },
  'prop_wc_012': {
    startupName: 'MoVerdes',
    segmento: 'CleanTech & ESG',
    pitchSummary: 'Soluções sustentáveis em economia verde, compensação de carbono urbana e arborização orientada a dados.',
    estagio: 'Validação / Tração',
    website: 'https://moverdes.org'
  },
  'prop_wc_013': {
    startupName: 'VoltzX',
    segmento: 'EnergyTech & Mobilidade',
    pitchSummary: 'Infraestrutura inteligente de recarga e monitoramento para frotas de veículos elétricos urbanos.',
    estagio: 'Operação / Escala',
    website: 'https://voltzx.com.br'
  },
  'prop_wc_014': {
    startupName: 'Mizael Tech Solutions',
    segmento: 'FinTech & Meios de Pagamento',
    pitchSummary: 'Serviços financeiros integrados para microvarejistas e cadeias de suprimentos periféricas.',
    estagio: 'Validação',
    website: 'https://mizaeltech.com.br'
  },
  'prop_wc_015': {
    startupName: 'ZeaTech Startup',
    segmento: 'DeepTech & Hardware',
    pitchSummary: 'Sensores IoT industriais de baixo consumo para monitoramento de vibração e manutenção preditiva de maquinário.',
    estagio: 'Tração',
    website: 'https://zeatech.io'
  },
  'prop_wc_016': {
    startupName: 'Stepps Inovação',
    segmento: 'HealthTech & Bem-Estar',
    pitchSummary: 'Plataforma corporativa de incentivo à saúde física, mobilidade ativa e prevenção de sinistros de saúde.',
    estagio: 'Operação / Tração',
    website: 'https://stepps.com.br'
  },
  'prop_wc_017': {
    startupName: 'Santiago GovTech',
    segmento: 'GovTech & Cidades',
    pitchSummary: 'Painéis preditivos e IA para análise de chamados e demandas de zeladoria urbana municipal.',
    estagio: 'MVP Validado',
    website: 'https://santiagogov.tech'
  },
  'prop_wc_018': {
    startupName: 'Figueiroa Tech Fashion',
    segmento: 'RetailTech & Moda',
    pitchSummary: 'Marketplace B2B conectado à cadeia têxtil do polo de confecções do Agreste Pernambucano.',
    estagio: 'Tração / Escala',
    website: 'https://figueiroatech.com.br'
  },
  'prop_wc_019': {
    startupName: 'GStack Soluções',
    segmento: 'Software & DevOps',
    pitchSummary: 'Plataforma de automação de testes de segurança e esteira de CI/CD para times remotos de software.',
    estagio: 'Validação / Tração',
    website: 'https://gstack.com.br'
  },
  'prop_wc_020': {
    startupName: 'Germini Sementes & Mudas',
    segmento: 'AgTech & Biotecnologia',
    pitchSummary: 'Biotecnologia vegetal e melhoramento genético de sementes nativas adaptadas ao semiárido.',
    estagio: 'Tração',
    website: 'https://germinisementes.com.br'
  },
  'prop_wc_021': {
    startupName: 'Biofábrica de Corais',
    segmento: 'OceanTech & Restauração Marinha',
    pitchSummary: 'Biotecnologia marinha pioneira e microfragmentação acelerada para restauração de recifes de corais e créditos de biodiversidade.',
    estagio: 'Operação / Escala Internacional',
    website: 'https://biofabricadecorais.org'
  },
  'prop_wc_022': {
    startupName: 'Jucá BioInovação',
    segmento: 'BioTech & Cosméticos',
    pitchSummary: 'Extração verde de biocompostos da caatinga para cosméticos e produtos terapêuticos de alto valor.',
    estagio: 'Tração',
    website: 'https://jucabio.com.br'
  },
  'prop_wc_023': {
    startupName: 'Biotec Inovações Recife',
    segmento: 'BioTech & Diagnósticos',
    pitchSummary: 'Kits moleculares rápidos para detecção precoce de arboviroses em atenção básica de saúde.',
    estagio: 'Validação Clínica / Tração',
    website: 'https://biotecinova.com.br'
  }
};

const allSubmissions = swcRows.map((r, idx) => {
  const email = (r.E_mail || '').toLowerCase().trim();
  const u = userByEmail.get(email);
  const info = STARTUP_INFO_MAP[r.id] || {
    startupName: `Startup #${idx + 1}`,
    segmento: 'Tecnologia & Inovação',
    pitchSummary: 'Proposta de startup inscrita para a seletiva regional da Startup World Cup Recife.',
    estagio: 'Validação',
    website: null
  };

  const city = normalizeCity(r.cidade);
  const state = normalizeState(r.estado, city);
  const founderName = u ? u.name : (email.split('@')[0].replace(/[._]/g, ' ').toUpperCase());

  return {
    id: r.id,
    edicaoId: 'SWC-2026',
    edicaoName: 'Startup World Cup 2026 — Regional Recife',
    title: `${info.startupName} • ${founderName}`,
    startupName: info.startupName,
    founderName: founderName,
    cargo: r.Cargo || 'Fundador(a) / CEO',
    email: email,
    cnpj: formatCnpj(r.CNPJ),
    cnpjRaw: r.CNPJ ? String(r.CNPJ).replace(/\D/g, '') : '',
    cidade: city,
    estado: state,
    regiao: state === 'PE' ? (city === 'Recife' ? 'Recife' : 'Pernambuco (Interior/RMR)') : 'Outros Estados',
    segmento: info.segmento,
    estagio: info.estagio,
    buscandoInvestimento: r.esta_buscando_investimento === true,
    cienteCompartilhamento: r.esta_ciente_de_que === true,
    descricao: info.pitchSummary,
    website: info.website,
    pitchDeckUrl: `https://coreto.recife.pe.gov.br/docs/swc-pitch-${r.id}.pdf`,
    premios: [
      'Top 1 Regional Recife: Vaga oficial na Grand Finale (Silicon Valley, Califórnia - EUA)',
      'Aporte Global: US$ 1.000.000,00 (Um Milhão de Dólares) em investimento direto pela Pegasus Tech Ventures',
      'Mentoria Especializada de Pitch Internacional & Conexão com Fundos Globais de VC'
    ],
    avaliadores: [
      'Pegasus Tech Ventures (Silicon Valley, USA)',
      'Porto Digital Recife',
      'Comunidade Manguezal & Anjos do Brasil',
      'Secretaria de Ciência, Tecnologia e Inovação (SECTI Recife)'
    ],
    avatarUrl: u && u.profile ? u.profile : null,
    activeProfile: u && u.activeProfile ? u.activeProfile : 'Startup / Empreendedor',
    slug: r.slug || `worldcup-${r.id}`
  };
});

console.log('Total SWC submissions prepared:', allSubmissions.length);
console.log('Sample 0:', JSON.stringify(allSubmissions[0], null, 2));

const tsContent = `// Base de Dados Estática da Startup World Cup 2026 (Regional Recife)
// Gerada a partir dos dados do SQL (proposta_worldcup, User, Organizacao)

export interface StartupWorldCupSubmission {
  id: string
  edicaoId: string
  edicaoName: string
  title: string
  startupName: string
  founderName: string
  cargo: string
  email: string
  cnpj: string
  cnpjRaw: string
  cidade: string
  estado: string
  regiao: string
  segmento: string
  estagio: string
  buscandoInvestimento: boolean
  cienteCompartilhamento: boolean
  descricao: string
  website: string | null
  pitchDeckUrl: string | null
  premios: string[]
  avaliadores: string[]
  avatarUrl: string | null
  activeProfile: string
  slug: string
}

export const SWC_SUBMISSIONS: StartupWorldCupSubmission[] = ${JSON.stringify(allSubmissions, null, 2)}

export const SWC_BUSCANDO_INVESTIMENTO = SWC_SUBMISSIONS.filter(s => s.buscandoInvestimento)
export const SWC_BOOTSTRAP_EXPANSAO = SWC_SUBMISSIONS.filter(s => !s.buscandoInvestimento)
export const SWC_RECIFE = SWC_SUBMISSIONS.filter(s => s.cidade === 'Recife')
export const SWC_DEMAIS_REGIOES = SWC_SUBMISSIONS.filter(s => s.cidade !== 'Recife')

/**
 * Função utilitária para exportação CSV de dados da Startup World Cup
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

fs.writeFileSync(path.join(__dirname, '../src/data/swcData.ts'), tsContent, 'utf-8');
console.log('Successfully generated src/data/swcData.ts!');

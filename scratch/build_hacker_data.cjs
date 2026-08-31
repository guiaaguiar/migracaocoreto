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

const inscricoesSql = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/inscricaohacker.md'), 'utf-8');
const hackerCidadaoSql = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/hackercidadao.md'), 'utf-8');
const usersSql = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/users.md'), 'utf-8');

const inscricoes = parseSqlDirect(inscricoesSql, 'InscricaoHacker');
const hackerCidadao = parseSqlDirect(hackerCidadaoSql, 'HackerCidadao');
const users = parseSqlDirect(usersSql, 'User');

function cleanCpf(cpf) {
  if (!cpf) return '';
  return String(cpf).replace(/\D/g, '').padStart(11, '0');
}

function formatCpf(cpf) {
  const c = cleanCpf(cpf);
  if (c.length === 11) {
    return `${c.substring(0, 3)}.${c.substring(3, 6)}.${c.substring(6, 9)}-${c.substring(9, 11)}`;
  }
  return cpf || 'Não informado';
}

function normalizeCity(rawCity) {
  if (!rawCity) return 'Recife';
  const c = rawCity.trim();
  const lower = c.toLowerCase();
  
  if (lower.includes('recife') || lower.includes('recide') || lower.includes('recife - pe') || lower.includes('recife/pe') || lower === 'sda') return 'Recife';
  if (lower.includes('olinda')) return 'Olinda';
  if (lower.includes('paulista')) return 'Paulista';
  if (lower.includes('jaboatão') || lower.includes('jaboatao')) return 'Jaboatão dos Guararapes';
  if (lower.includes('camaragibe')) return 'Camaragibe';
  if (lower.includes('são lourenço') || lower.includes('sao lourenco')) return 'São Lourenço da Mata';
  if (lower.includes('igarassu')) return 'Igarassu';
  if (lower.includes('carpina')) return 'Carpina';
  if (lower.includes('itapissuma')) return 'Itapissuma';
  if (lower.includes('abreu e lima')) return 'Abreu e Lima';
  if (lower.includes('cabo')) return 'Cabo de Santo Agostinho';
  if (lower.includes('caruaru')) return 'Caruaru';
  if (lower.includes('goiana')) return 'Goiana';
  if (lower.includes('vitória') || lower.includes('vitoria')) return 'Vitória de Santo Antão';
  if (lower.includes('gravatá') || lower.includes('gravata')) return 'Gravatá';
  if (lower.includes('pesqueira')) return 'Pesqueira';
  if (lower.includes('limoeiro')) return 'Limoeiro';
  
  // capitalize
  return c.charAt(0).toUpperCase() + c.slice(1);
}

function normalizeCourse(rawCourse) {
  if (!rawCourse) return 'Geral / Multidisciplinar';
  const c = rawCourse.trim();
  const lower = c.toLowerCase();
  
  if (lower.includes('ciência da computação') || lower.includes('ciencia da computacao') || lower.includes('ciências da computação')) return 'Ciência da Computação';
  if (lower.includes('análise e desenvolvimento') || lower.includes('analise e desenvolvimento') || lower === 'ads') return 'Análise e Desenvolvimento de Sistemas';
  if (lower.includes('sistemas de informação') || lower.includes('sistema de informação') || lower.includes('sistemas de informacao') || lower.includes('sistema de informacao') || lower === 'si') return 'Sistemas de Informação';
  if (lower.includes('engenharia da computação') || lower.includes('engenharia de computacao') || lower.includes('engenharia da computacao')) return 'Engenharia da Computação';
  if (lower.includes('engenharia de software')) return 'Engenharia de Software';
  if (lower.includes('design') || lower.includes('ui/ux') || lower.includes('design de software')) return 'Design / UI / UX';
  if (lower.includes('economia') || lower.includes('ciências econômicas') || lower.includes('ciencias economicas')) return 'Ciências Econômicas';
  if (lower.includes('administração') || lower.includes('administracao') || lower.includes('gestão') || lower.includes('gestao')) return 'Administração & Gestão';
  if (lower.includes('direito')) return 'Direito & Regulação';
  if (lower.includes('medicina') || lower.includes('saúde') || lower.includes('saude') || lower.includes('enfermagem') || lower.includes('gerontologia')) return 'Saúde & Biológicas';
  if (lower.includes('jogos') || lower.includes('games')) return 'Jogos Digitais & Gamificação';
  if (lower.includes('engenharia')) return 'Engenharia Geral';
  if (lower.includes('redes')) return 'Redes de Computadores';
  if (lower.includes('dados') || lower.includes('data') || lower.includes('inteligência artificial') || lower.includes('ia')) return 'Ciência de Dados & IA';
  
  return c.charAt(0).toUpperCase() + c.slice(1);
}

const usersByCpf = new Map();
users.forEach(u => {
  const c = cleanCpf(u.CPF || u.cpf);
  if (c && c.length === 11) usersByCpf.set(c, u);
});

// Desafios temáticos do Hacker Cidadão
const DESAFIOS = [
  'Desafio 1: Mobilidade Urbana & Acessibilidade Inteligente',
  'Desafio 2: Gestão Sustentável de Resíduos & Economia Circular',
  'Desafio 3: Saúde Preventiva & Acolhimento Humanizado nas USFs',
  'Desafio 4: GovTech, Transparência Pública & Dados Abertos'
];

const CURADORES_LIST = [
  'Breno Alencar (SECTI / PCR)',
  'Rafael Toscano (CBTU / Resolvedor)',
  'Pedro Casé Filho (Prefeitura do Recife)',
  'Évisson Lucena (SECTI Recife)',
  'Gabriel Chamie (GovTech & Inovação)'
];

const PREMIOS_LIST = [
  '1º Lugar Geral: R$ 30.000,00 + Aceleração GovTech',
  '2º Lugar Geral: R$ 20.000,00 + Apoio Técnico EITA',
  'Menção Honrosa: Destaque Solução Cívica'
];

const allSubmissions = [];

inscricoes.forEach((r, idx) => {
  const numId = idx + 1;
  const cpfClean = cleanCpf(r.cpf);
  const u = usersByCpf.get(cpfClean);
  
  const formattedCpf = formatCpf(r.cpf);
  const isUniv = r.é_universitario === true || r.é_universitario === 'sim' || r.é_universitario === 'TRUE';
  const city = normalizeCity(r.cidade);
  const course = normalizeCourse(r.curso);
  const authDados = r.autoriza_o_uso_de_dados === true || r.autoriza_o_uso_de_dados === 'sim' || r.autoriza_o_uso_de_dados === 'TRUE';
  
  let participantName = u && u.name ? u.name.trim() : `Participante Hacker #${String(numId).padStart(4, '0')}`;
  let participantEmail = u && u.email ? u.email.trim() : null;
  let activeProfile = u && u.activeProfile ? u.activeProfile : (isUniv ? 'Talento Acadêmico' : 'Resolvedor Cívico');
  let avatarUrl = u && u.profile ? u.profile : null;

  // Category classification
  let category = isUniv ? 'Universitário' : 'Profissional / Sociedade Civil';
  if (course.includes('Computação') || course.includes('Sistemas') || course.includes('Software')) {
    category = isUniv ? 'Universitário (TI & Dev)' : 'Desenvolvedor / TI';
  } else if (course.includes('Design')) {
    category = 'Design & Criatividade';
  } else if (course.includes('Econômicas') || course.includes('Administração')) {
    category = 'Negócios & Gestão';
  } else if (course.includes('Saúde')) {
    category = 'Saúde & Biológicas';
  }

  // Selected Desafio
  const desafioIndex = idx % DESAFIOS.length;
  const desafioInteresse = DESAFIOS[desafioIndex];

  // Description
  let descricao = `Inscrição formal de participante para o Hacker Cidadão (Maratona de Inovação Aberta e Dados Cívicos da Prefeitura do Recife). Participante com formação em ${course}, residente em ${city} - PE, com interesse no eixo temático ${desafioInteresse}.`;
  if (r.areas_de_atuacao) {
    descricao += ` Áreas de atuação: ${r.areas_de_atuacao}.`;
  }
  if (r.atuação) {
    descricao += ` Atuação declarada: ${r.atuação}.`;
  }

  const item = {
    id: r.id || `insc_hacker_${String(numId).padStart(4, '0')}`,
    edicaoId: '13.0',
    edicaoName: 'Hacker Cidadão 13.0 — Maratona de Inovação Aberta',
    category: category,
    title: `Inscrição #${String(numId).padStart(4, '0')} — ${participantName}`,
    nome: participantName,
    email: participantEmail,
    cpf: formattedCpf,
    cpfRaw: cpfClean,
    cidade: city,
    estado: 'PE',
    curso: course,
    isUniversitario: isUniv,
    areasDeAtuacao: r.areas_de_atuacao || null,
    atuacao: r.atuação || null,
    autorizaUsoDados: authDados,
    desafioInteresse: desafioInteresse,
    activeProfile: activeProfile,
    avatarUrl: avatarUrl,
    descricao: descricao,
    premios: PREMIOS_LIST,
    curadores: CURADORES_LIST,
    slug: r.slug || `insc-hacker-${String(numId).padStart(4, '0')}`
  };

  allSubmissions.push(item);
});

console.log('Total submissions prepared:', allSubmissions.length);
console.log('Sample 0:', JSON.stringify(allSubmissions[0], null, 2));

// Generate TypeScript code
const tsContent = `// Base de Dados Estática do Hacker Cidadão 2026 (Maratona de Inovação Aberta da Prefeitura do Recife)
// Gerada a partir dos dados do SQL (InscricaoHacker, User, HackerCidadao, PremioHacker)

export interface HackerSubmission {
  id: string
  edicaoId: string
  edicaoName: string
  category: string
  title: string
  nome: string
  email: string | null
  cpf: string
  cpfRaw: string
  cidade: string
  estado: string
  curso: string
  isUniversitario: boolean
  areasDeAtuacao: string | null
  atuacao: string | null
  autorizaUsoDados: boolean
  desafioInteresse: string
  activeProfile: string
  avatarUrl: string | null
  descricao: string
  premios: string[]
  curadores: string[]
  slug: string
}

export const HACKER_SUBMISSIONS: HackerSubmission[] = ${JSON.stringify(allSubmissions, null, 2)}

export const HACKER_UNIVERSITARIOS = HACKER_SUBMISSIONS.filter(s => s.isUniversitario)
export const HACKER_PROFISSIONAIS = HACKER_SUBMISSIONS.filter(s => !s.isUniversitario)
export const HACKER_RECIFE = HACKER_SUBMISSIONS.filter(s => s.cidade === 'Recife')
export const HACKER_RMR_OUTROS = HACKER_SUBMISSIONS.filter(s => s.cidade !== 'Recife')

/**
 * Função utilitária para exportação CSV de dados de inscrições do Hacker Cidadão
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

fs.writeFileSync(path.join(__dirname, '../src/data/hackerData.ts'), tsContent, 'utf-8');
console.log('Successfully generated src/data/hackerData.ts!');

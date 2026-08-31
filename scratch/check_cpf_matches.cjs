const fs = require('fs');
const path = require('path');

function parseCsv(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n').map(l => l.trim()).filter(Boolean);
  if (lines.length === 0) return [];
  
  // simple csv parser handling quotes
  const headers = parseCsvLine(lines[0]);
  const rows = [];
  
  for (let i = 1; i < lines.length; i++) {
    const vals = parseCsvLine(lines[i]);
    const obj = {};
    headers.forEach((h, idx) => {
      obj[h] = vals[idx] !== undefined ? vals[idx] : '';
    });
    rows.push(obj);
  }
  return { headers, rows };
}

function parseCsvLine(line) {
  const result = [];
  let cur = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    const next = line[i + 1];
    
    if (c === '"') {
      if (inQuotes && next === '"') {
        cur += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === ',' && !inQuotes) {
      result.push(cur.trim());
      cur = '';
    } else {
      cur += c;
    }
  }
  result.push(cur.trim());
  return result;
}

const dir = path.join(__dirname, '../docs/exportscsv');
const usersData = parseCsv(path.join(dir, 'export_All-Users_2026-08-18_18-24-14.csv'));
const talentosData = parseCsv(path.join(dir, 'export_All-Talentos_2026-08-18_18-23-09.csv'));
const inscricoesData = parseCsv(path.join(dir, 'export_All-Inscri--oHackers_2026-08-18_18-16-28.csv'));
const timesData = parseCsv(path.join(dir, 'export_All-Times_2026-08-18_18-23-53.csv'));

console.log('Users headers:', usersData.headers);
console.log('Users count:', usersData.rows.length);

console.log('Talentos headers:', talentosData.headers);
console.log('Talentos count:', talentosData.rows.length);

console.log('Inscricoes headers:', inscricoesData.headers);
console.log('Inscricoes count:', inscricoesData.rows.length);

console.log('Times headers:', timesData.headers);
console.log('Times count:', timesData.rows.length);

// Let's create CPF map from users
function cleanCpf(cpf) {
  if (!cpf) return '';
  return String(cpf).replace(/\D/g, '').padStart(11, '0');
}

const userByCpf = new Map();
usersData.rows.forEach(u => {
  const cpf = cleanCpf(u.CPF || u.cpf);
  if (cpf && cpf.length === 11) {
    userByCpf.set(cpf, u);
  }
});

const talentoByCpf = new Map();
talentosData.rows.forEach(t => {
  const cpf = cleanCpf(t.CPF || t.cpf);
  if (cpf && cpf.length === 11) {
    talentoByCpf.set(cpf, t);
  }
});

let matchedUsers = 0;
let matchedTalentos = 0;
inscricoesData.rows.forEach(r => {
  const cpf = cleanCpf(r.cpf);
  if (userByCpf.has(cpf)) matchedUsers++;
  if (talentoByCpf.has(cpf)) matchedTalentos++;
});

console.log(`Inscricoes Hacker with matching User: ${matchedUsers} / ${inscricoesData.rows.length}`);
console.log(`Inscricoes Hacker with matching Talento: ${matchedTalentos} / ${inscricoesData.rows.length}`);

// Sample match
const sampleMatches = [];
inscricoesData.rows.forEach(r => {
  const cpf = cleanCpf(r.cpf);
  const user = userByCpf.get(cpf);
  const talento = talentoByCpf.get(cpf);
  if (user || talento) {
    sampleMatches.push({
      inscricao: r,
      user: user ? { name: user.name, email: user.email, profile: user.profile } : null,
      talento: talento ? { nome: talento.Nome || talento.name, email: talento.Email || talento.email, telefone: talento.Telefone || talento.telefone } : null
    });
  }
});

console.log(`Total sample matches found: ${sampleMatches.length}`);
console.log('Sample 3 matches:', JSON.stringify(sampleMatches.slice(0, 3), null, 2));

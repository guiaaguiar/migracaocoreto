const fs = require('fs');
const path = require('path');

function parseCsv(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n').map(l => l.trim()).filter(Boolean);
  if (lines.length === 0) return { headers: [], rows: [] };
  
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
const centelhas = parseCsv(path.join(dir, 'export_All-Centelhas_2026-08-18_18-14-20.csv'));
const users = parseCsv(path.join(dir, 'export_All-Users_2026-08-18_18-24-14.csv'));

console.log('Centelhas headers:', centelhas.headers);
console.log('Centelhas rows:', centelhas.rows.length);

const userByEmail = new Map();
users.rows.forEach(u => {
  if (u.email) userByEmail.set(u.email.toLowerCase().trim(), u);
});

centelhas.rows.forEach((r, idx) => {
  const email = (r.talento || '').toLowerCase().trim();
  const u = userByEmail.get(email);
  console.log(`[${idx + 1}] Talento/Email: "${r.talento}" | Resolv: "${r.resolvedor}" | Submissão: "${r.id_submissao_centelha}"`);
  if (u) {
    console.log(`    User match: ${u.name} (${u.email}) - activeProfile: ${u.activeProfile}`);
  }
  if (r.anexos) {
    console.log(`    Anexos: ${r.anexos}`);
  }
});

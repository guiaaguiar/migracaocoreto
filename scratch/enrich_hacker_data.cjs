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
const talentosSql = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/talentos.md'), 'utf-8');
const timesSql = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/times.md'), 'utf-8');

const inscricoes = parseSqlDirect(inscricoesSql, 'InscricaoHacker');
const hackerCidadao = parseSqlDirect(hackerCidadaoSql, 'HackerCidadao');
const users = parseSqlDirect(usersSql, 'User');
const talentos = parseSqlDirect(talentosSql, 'Talento');
const times = parseSqlDirect(timesSql, 'Time');

console.log('Inscricoes parsed:', inscricoes.length);
console.log('HackerCidadao parsed:', hackerCidadao.length);
console.log('Users parsed:', users.length);
console.log('Talentos parsed:', talentos.length);
console.log('Times parsed:', times.length);

function cleanCpf(cpf) {
  if (!cpf) return '';
  return String(cpf).replace(/\D/g, '').padStart(11, '0');
}

const userMap = new Map();
users.forEach(u => {
  const cpf = cleanCpf(u.CPF || u.cpf);
  if (cpf) userMap.set(cpf, u);
  if (u.email) userMap.set(u.email.toLowerCase(), u);
});

let matched = 0;
const enriched = inscricoes.map(r => {
  const cpf = cleanCpf(r.cpf);
  const u = userMap.get(cpf);
  if (u) matched++;
  return {
    ...r,
    user_name: u ? u.name : null,
    user_email: u ? u.email : null,
    user_profile: u ? u.profile : null,
    user_activeProfile: u ? u.activeProfile : null
  };
});

console.log(`Matched with User: ${matched} / ${inscricoes.length}`);
console.log('Sample 5 enriched records:');
console.log(JSON.stringify(enriched.slice(0, 5), null, 2));

// Let's check distribution of cities, courses, is_university
const cities = {};
const courses = {};
let univCount = 0;
let nonUnivCount = 0;

enriched.forEach(r => {
  const c = (r.cidade || 'Não Informado').trim();
  cities[c] = (cities[c] || 0) + 1;
  
  const cr = (r.curso || 'Sem Curso Informado').trim();
  courses[cr] = (courses[cr] || 0) + 1;
  
  if (r.é_universitario === true) univCount++;
  else if (r.é_universitario === false) nonUnivCount++;
});

console.log('\nTop 10 Cities:', Object.entries(cities).sort((a,b)=>b[1]-a[1]).slice(0, 10));
console.log('\nTop 10 Courses:', Object.entries(courses).sort((a,b)=>b[1]-a[1]).slice(0, 10));
console.log(`Universitários: ${univCount}, Não-universitários: ${nonUnivCount}`);

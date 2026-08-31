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
const usersSql = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/users.md'), 'utf-8');
const timesSql = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/times.md'), 'utf-8');

const inscricoes = parseSqlDirect(inscricoesSql, 'InscricaoHacker');
const users = parseSqlDirect(usersSql, 'User');
const times = parseSqlDirect(timesSql, 'Time');

console.log('Inscricoes:', inscricoes.length);

function cleanCpf(cpf) {
  if (!cpf) return '';
  return String(cpf).replace(/\D/g, '').padStart(11, '0');
}

const usersByCpf = new Map();
const usersByEmail = new Map();
users.forEach(u => {
  const c = cleanCpf(u.CPF || u.cpf);
  if (c && c.length === 11) usersByCpf.set(c, u);
  if (u.email) usersByEmail.set(u.email.toLowerCase().trim(), u);
});

const timesByEmail = new Map();
const timesByName = new Map();
times.forEach(t => {
  if (t.email) timesByEmail.set(t.email.toLowerCase().trim(), t);
  if (t.Nome) timesByName.set(t.Nome.toLowerCase().trim(), t);
});

let userMatches = 0;
let teamMatches = 0;

inscricoes.forEach(i => {
  const c = cleanCpf(i.cpf);
  const u = usersByCpf.get(c);
  if (u) {
    userMatches++;
    if (u.email && timesByEmail.has(u.email.toLowerCase().trim())) {
      teamMatches++;
    }
  }
});

console.log(`Matched with User: ${userMatches}`);
console.log(`Matched with Time/Team: ${teamMatches}`);

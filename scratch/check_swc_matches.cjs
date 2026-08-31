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
const organizacaoSql = fs.readFileSync(path.join(__dirname, '../database/init/04_bubble_inserts.sql'), 'utf-8');

const swcRows = parseSqlDirect(swcSql, 'proposta_worldcup');
const users = parseSqlDirect(usersSql, 'User');
const organizacoes = parseSqlDirect(organizacaoSql, 'Organizacao');

console.log('SWC rows:', swcRows.length);
console.log('Users count:', users.length);
console.log('Organizacoes count:', organizacoes.length);

const userByEmail = new Map();
users.forEach(u => {
  if (u.email) userByEmail.set(u.email.toLowerCase().trim(), u);
});

const orgByCnpj = new Map();
organizacoes.forEach(o => {
  if (o.cnpj) {
    const clean = String(o.cnpj).replace(/\D/g, '');
    if (clean) orgByCnpj.set(clean, o);
  }
});

swcRows.forEach((r, idx) => {
  const email = (r.E_mail || '').toLowerCase().trim();
  const u = userByEmail.get(email);
  const cnpjClean = String(r.CNPJ || '').replace(/\D/g, '');
  const org = orgByCnpj.get(cnpjClean);
  
  console.log(`[${r.id}] Email: ${email}`);
  console.log(`  User: ${u ? u.name + ' (' + u.email + ')' : 'Not found'}`);
  console.log(`  Cargo: ${r.Cargo}, Cidade: ${r.cidade} - ${r.estado}, CNPJ: ${r.CNPJ}`);
  console.log(`  Buscando Investimento: ${r.esta_buscando_investimento}, Ciente: ${r.esta_ciente_de_que}`);
  if (org) console.log(`  Org match: ${org.Nome || org.nome}`);
});

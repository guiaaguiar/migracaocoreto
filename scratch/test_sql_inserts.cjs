const fs = require('fs');

function parseSqlInserts(sqlContent, targetTable) {
  const regex = new RegExp(`INSERT INTO\\s+"${targetTable}"\\s*\\(([^)]+)\\)\\s*VALUES\\s*([\\s\\S]*?);`, 'g');
  const match = regex.exec(sqlContent);
  if (!match) return [];
  
  const cols = match[1].split(',').map(c => c.trim().replace(/"/g, ''));
  const valuesBlock = match[2];
  
  // Parse rows (val1, val2, ...)
  const rows = [];
  let inString = false;
  let inArray = false;
  let curVal = '';
  let curRow = [];
  let depth = 0;
  
  for (let i = 0; i < valuesBlock.length; i++) {
    const c = valuesBlock[i];
    const next = valuesBlock[i+1];
    
    if (c === "'") {
      if (inString && next === "'") {
        curVal += "'";
        i++;
        continue;
      }
      inString = !inString;
      curVal += c;
    } else if (c === '[' && !inString) {
      inArray = true;
      curVal += c;
    } else if (c === ']' && !inString) {
      inArray = false;
      curVal += c;
    } else if (c === '(' && !inString && !inArray) {
      if (depth === 0) {
        curRow = [];
        curVal = '';
      } else {
        curVal += c;
      }
      depth++;
    } else if (c === ')' && !inString && !inArray) {
      depth--;
      if (depth === 0) {
        curRow.push(curVal.trim());
        curVal = '';
        const rowObj = {};
        cols.forEach((col, idx) => {
          let v = curRow[idx];
          if (v === undefined || v === 'NULL' || v === null) {
            rowObj[col] = null;
          } else if (v.startsWith("'") && v.endsWith("'")) {
            rowObj[col] = v.slice(1, -1).replace(/''/g, "'");
          } else {
            rowObj[col] = v;
          }
        });
        rows.push(rowObj);
      } else {
        curVal += c;
      }
    } else if (c === ',' && !inString && !inArray && depth === 1) {
      curRow.push(curVal.trim());
      curVal = '';
    } else if (depth >= 1) {
      curVal += c;
    }
  }
  return rows;
}

const sql = fs.readFileSync('database/init/04_bubble_inserts.sql', 'utf8');

console.log('--- Submissao_INPI rows in 04_bubble_inserts.sql ---');
const inpiRows = parseSqlInserts(sql, 'Submissao_INPI');
console.log(`Total: ${inpiRows.length}`);
inpiRows.slice(0, 10).forEach(r => {
  console.log({ id: r.id, pf_nome: r.pf_nome, sw_nome: r.sw_nome, nome_fantasia: r.nome_fantasia, razao_social: r.razao_social, cnpj: r.cnpj });
});

console.log('\n--- Submissao_ConectaLabs rows in 04_bubble_inserts.sql ---');
const conectaRows = parseSqlInserts(sql, 'Submissao_ConectaLabs');
console.log(`Total: ${conectaRows.length}`);
conectaRows.slice(0, 5).forEach(r => {
  console.log({ id: r.id, nome_fantasia: r.nome_fantasia, resp_nome: r.resp_nome, solucao_nome: r.solucao_nome, cnpj: r.cnpj });
});

console.log('\n--- Submissao_ICT rows in 04_bubble_inserts.sql ---');
const ictRows = parseSqlInserts(sql, 'Submissao_ICT');
console.log(`Total: ${ictRows.length}`);
ictRows.slice(0, 5).forEach(r => {
  console.log({ id: r.id, nome_nit: r.nome_nit, resp_nome: r.resp_nome, tec_nome: r.tec_nome, cnpj: r.cnpj });
});

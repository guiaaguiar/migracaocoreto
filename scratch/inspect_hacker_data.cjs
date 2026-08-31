const fs = require('fs');
const path = require('path');

const insertsSql = fs.readFileSync(path.join(__dirname, '../database/init/04_bubble_inserts.sql'), 'utf8');

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
  // cut until semicolon
  const semiIdx = valuesText.indexOf(';');
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

const inscricoesHacker = parseSqlDirect(insertsSql, 'InscricaoHacker');
const hackerCidadao = parseSqlDirect(insertsSql, 'HackerCidadao');
const premioHacker = parseSqlDirect(insertsSql, 'PremioHacker');
const oportunidade = parseSqlDirect(insertsSql, 'Oportunidade');
const talentos = parseSqlDirect(insertsSql, 'Talentos');
const users = parseSqlDirect(insertsSql, 'User');
const desafio = parseSqlDirect(insertsSql, 'Desafio');

console.log('InscricaoHacker count:', inscricoesHacker.length);
console.log('HackerCidadao count:', hackerCidadao.length);
console.log('PremioHacker count:', premioHacker.length);
console.log('Oportunidade count:', oportunidade.length);
console.log('Talentos count:', talentos.length);
console.log('User count:', users.length);
console.log('Desafio count:', desafio.length);

console.log('\n--- HackerCidadao Sample ---');
console.log(JSON.stringify(hackerCidadao, null, 2));

console.log('\n--- InscricaoHacker Sample (First 3) ---');
console.log(JSON.stringify(inscricoesHacker.slice(0, 3), null, 2));

console.log('\n--- PremioHacker Sample ---');
console.log(JSON.stringify(premioHacker, null, 2));

// Check Oportunidade with hacker
const hackerOportunidades = oportunidade.filter(o => 
  (o.nome && o.nome.toLowerCase().includes('hacker')) ||
  (o.programa && o.programa.toLowerCase().includes('hacker')) ||
  (o.propostas_hacker && o.propostas_hacker.length > 0) ||
  (o.inscritosHacker && o.inscritosHacker.length > 0)
);
console.log('\n--- Hacker Oportunidades count:', hackerOportunidades.length);
hackerOportunidades.forEach(o => {
  console.log(`ID: ${o.id}, Nome: ${o.nome}, Programa: ${o.programa}, Desafios: ${JSON.stringify(o.desafios_relacionados)}`);
});

// Check Desafio with hacker
const hackerDesafios = desafio.filter(d => 
  (d.Nome && d.Nome.toLowerCase().includes('hacker')) ||
  (d.programa && d.programa.toLowerCase().includes('hacker')) ||
  (d.nome && d.nome.toLowerCase().includes('hacker'))
);
console.log('\n--- Hacker Desafios count:', hackerDesafios.length);
desafio.slice(0, 10).forEach(d => console.log('Desafio sample:', d.id, d.Nome || d.nome, d.categoria || d.Categoria));

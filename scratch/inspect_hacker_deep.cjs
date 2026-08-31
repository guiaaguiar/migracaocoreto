const fs = require('fs');
const path = require('path');

const insertsSql = fs.readFileSync(path.join(__dirname, '../database/init/04_bubble_inserts.sql'), 'utf8');

function parseTableRows(content, tableName) {
  // find all INSERT INTO for this table
  const regex = new RegExp(`INSERT INTO\\s+["'\`]?${tableName}["'\`]?\\s*\\(([^)]+)\\)\\s*VALUES\\s*([\\s\\S]*?)(?:;|INSERT INTO|$)`, 'gi');
  let match;
  let allRows = [];
  
  while ((match = regex.exec(content)) !== null) {
    const columns = match[1].split(',').map(c => c.trim().replace(/["'`]/g, ''));
    let valuesText = match[2].trim();
    const onConflictIdx = valuesText.search(/ON CONFLICT/i);
    if (onConflictIdx !== -1) {
      valuesText = valuesText.substring(0, onConflictIdx).trim();
    }
    
    // parse tuples
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
          allRows.push(rowObj);
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
  }
  return allRows;
}

const inscricoes = parseTableRows(insertsSql, 'InscricaoHacker');
const hackerCidadao = parseTableRows(insertsSql, 'HackerCidadao');
const premios = parseTableRows(insertsSql, 'PremioHacker');
const cronogramas = parseTableRows(insertsSql, 'Cronograma');
const locais = parseTableRows(insertsSql, 'Local');
const talentos = parseTableRows(insertsSql, 'Talento');
const times = parseTableRows(insertsSql, 'Time');
const users = parseTableRows(insertsSql, 'User');

console.log('--- STATS ---');
console.log('InscricaoHacker:', inscricoes.length);
console.log('HackerCidadao:', hackerCidadao.length);
console.log('PremioHacker:', premios.length);
console.log('Cronograma:', cronogramas.length);
console.log('Local:', locais.length);
console.log('Talento:', talentos.length);
console.log('Time:', times.length);
console.log('User:', users.length);

console.log('\n--- InscricaoHacker Fields in rows ---');
if (inscricoes.length > 0) {
  console.log('Keys of InscricaoHacker:', Object.keys(inscricoes[0]));
  console.log('Sample row 0:', JSON.stringify(inscricoes[0], null, 2));
  console.log('Sample row 1:', JSON.stringify(inscricoes[1], null, 2));
  console.log('Sample row 10:', JSON.stringify(inscricoes[10], null, 2));
  console.log('Sample row 50:', JSON.stringify(inscricoes[50], null, 2));
}

console.log('\n--- HackerCidadao Detail ---');
console.log(JSON.stringify(hackerCidadao, null, 2));

console.log('\n--- Cronogramas relevant to Hacker ---');
console.log('Hacker cronogramas count:', cronogramas.filter(c => c.Hacker_id || (c.Nome && c.Nome.toLowerCase().includes('hacker'))).length);

console.log('\n--- Locais relevant to Hacker ---');
console.log('Hacker locais count:', locais.filter(l => l.Hacker_id || (l.Nome && l.Nome.toLowerCase().includes('hacker'))).length);

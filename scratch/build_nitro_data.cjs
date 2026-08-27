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
  valuesText = valuesText.trim().replace(/;$/, '');
  
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

const inpiRows = parseSqlDirect(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/submissaoinpi.md'), 'utf-8'), 'submissao_inpi');
const conectaRows = parseSqlDirect(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/submissaoconectalabs.md'), 'utf-8'), 'Submissao_ConectaLabs');
const ictRows = parseSqlDirect(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/submissaoict.md'), 'utf-8'), 'submissao_ict');
const nitRows = parseSqlDirect(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/propostanit.md'), 'utf-8'), 'proposta_nit');
const centelhaRows = parseSqlDirect(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/centelha.md'), 'utf-8'), 'centelha');
const cotitularesRows = parseSqlDirect(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/cotitulares.md'), 'utf-8'), 'cotitulares');

console.log('--- NITRO DATA COUNTS ---');
console.log('submissao_inpi (Edital 002):', inpiRows.length);
console.log('Submissao_ConectaLabs (Edital 001):', conectaRows.length);
console.log('submissao_ict (Edital 001):', ictRows.length);
console.log('proposta_nit (Edital 001):', nitRows.length);
console.log('centelha (Edital 003):', centelhaRows.length);
console.log('cotitulares:', cotitularesRows.length);

// Let's inspect document names in inpiRows to see if software/startup names can be derived
console.log('\nSample INPI docs:');
inpiRows.slice(0, 10).forEach(r => {
  const doc = r.anexo1 || '';
  const decoded = decodeURIComponent(path.basename(doc)).replace(/^[f\d]+x\d+_/i, '').replace(/^[f\d]+x\d+/i, '');
  console.log(`[${r.id}] CNPJ: ${r.cnpj} | Doc: ${decoded}`);
});

console.log('\nSample ConectaLabs docs & applicability:');
conectaRows.slice(0, 5).forEach(r => {
  console.log(`[${r.id}] Aplicabilidade: ${r.aplicabilidade ? r.aplicabilidade.slice(0, 60) : 'N/A'}... | Docs: ${(r.anexos || []).length}`);
});

console.log('\nSample Centelha:');
centelhaRows.slice(0, 5).forEach(r => {
  console.log(`[${r.id}] Resolvedor: ${r.resolvedor} | Link: ${r.id_submissao_centelha}`);
});

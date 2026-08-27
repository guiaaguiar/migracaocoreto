const fs = require('fs');
const path = require('path');

function parseSqlFile(content, tableName) {
  // Find INSERT INTO "tableName" (...) VALUES (...)
  const insertRegex = new RegExp(`INSERT INTO\\s+["'\`]?${tableName}["'\`]?\\s*\\(([^)]+)\\)\\s*VALUES\\s*`, 'i');
  const match = content.match(insertRegex);
  if (!match) {
    console.log('No match for', tableName);
    return [];
  }
  
  const columns = match[1].split(',').map(c => c.trim().replace(/["'`]/g, ''));
  const valuesStart = match.index + match[0].length;
  
  // Find where VALUES end: either ON CONFLICT, or end of text/semicolon
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
        // Escaped single quote '' in SQL
        curVal += "'";
        i++; // skip next quote
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
        
        // Parse row values
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
              // Parse array elements
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

const relPropContent = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/relatoriopropostaeita.md'), 'utf-8');
const relPropRows = parseSqlFile(relPropContent, 'RelatorioProposta_eita');
console.log(`RelatorioProposta_eita parsed: ${relPropRows.length} rows`);

const propEitaContent = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/propostaeita.md'), 'utf-8');
const propEitaRows = parseSqlFile(propEitaContent, 'proposta_eita');
console.log(`proposta_eita parsed: ${propEitaRows.length} rows`);

const relAvContent = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/relatorioeitaavaliacao.md'), 'utf-8');
const relAvRows = parseSqlFile(relAvContent, 'RelatorioEITAAvaliacao');
console.log(`RelatorioEITAAvaliacao parsed: ${relAvRows.length} rows`);

const relOpContent = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/relatorioeitaavaliacaooperacao.md'), 'utf-8');
const relOpRows = parseSqlFile(relOpContent, 'RelatorioEITAAvaliacaoOperacao');
console.log(`RelatorioEITAAvaliacaoOperacao parsed: ${relOpRows.length} rows`);

const propEita2Content = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/propostaeitasegunda.md'), 'utf-8');
const propEita2Rows = parseSqlFile(propEita2Content, 'proposta_eita_segunda');
console.log(`proposta_eita_segunda parsed: ${propEita2Rows.length} rows`);

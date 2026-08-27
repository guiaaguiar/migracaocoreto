const fs = require('fs');
const path = require('path');

function robustParseSql(content) {
  // Find all INSERT INTO statements
  const insertStatements = content.match(/INSERT INTO[\s\S]*?;/gi) || [];
  console.log(`Found ${insertStatements.length} INSERT statements.`);
  
  let allRows = [];
  for (const stmt of insertStatements) {
    const headerMatch = stmt.match(/INSERT INTO\s+["'`]?([\w\d_]+)["'`]?\s*\(([\s\S]*?)\)\s*VALUES/i);
    if (!headerMatch) continue;
    const tableName = headerMatch[1];
    const columns = headerMatch[2].split(',').map(c => c.trim().replace(/["'`]/g, ''));
    
    // Extract values part
    const valuesPart = stmt.substring(headerMatch[0].length).replace(/;$/, '').trim();
    
    // Tokenize rows
    let inString = false;
    let inArray = false;
    let curVal = '';
    let curRow = [];
    let parenDepth = 0;
    
    for (let i = 0; i < valuesPart.length; i++) {
      const char = valuesPart[i];
      const prev = valuesPart[i - 1];
      
      if (char === "'" && prev !== '\\') {
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
          // Build object
          const rowObj = {};
          columns.forEach((col, idx) => {
            let val = curRow[idx];
            if (val === undefined || val === 'NULL' || val === null) {
              rowObj[col] = null;
            } else if (val.startsWith("'") && val.endsWith("'")) {
              rowObj[col] = val.slice(1, -1).replace(/''/g, "'").replace(/\\'/g, "'");
            } else if (val.startsWith('ARRAY[') && val.endsWith(']')) {
              const inner = val.slice(6, -1);
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

const relProp = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/relatoriopropostaeita.md'), 'utf-8');
const relPropRows = robustParseSql(relProp);
console.log('relatoriopropostaeita parsed count:', relPropRows.length);
if (relPropRows.length > 0) {
  console.log('Columns in relatoriopropostaeita:', Object.keys(relPropRows[0]));
  console.log('First 3 proposals:');
  relPropRows.slice(0, 3).forEach(r => console.log(`- [${r.id}] ${r.Nome || r.Lider_nome} | Desafio: ${r.desafio ? r.desafio.slice(0, 50) : 'N/A'}`));
}

const propEita = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/propostaeita.md'), 'utf-8');
const propEitaRows = robustParseSql(propEita);
console.log('propostaeita parsed count:', propEitaRows.length);

const relAv = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/relatorioeitaavaliacao.md'), 'utf-8');
const relAvRows = robustParseSql(relAv);
console.log('relatorioeitaavaliacao parsed count:', relAvRows.length);
if (relAvRows.length > 0) {
  console.log('Sample relatorioeitaavaliacao:', relAvRows[0]);
}

const relOp = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/relatorioeitaavaliacaooperacao.md'), 'utf-8');
const relOpRows = robustParseSql(relOp);
console.log('relatorioeitaavaliacaooperacao parsed count:', relOpRows.length);
if (relOpRows.length > 0) {
  console.log('Sample relatorioeitaavaliacaooperacao:', relOpRows[0]);
}

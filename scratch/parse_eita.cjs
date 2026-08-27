const fs = require('fs');
const path = require('path');

function parseSqlInserts(content, tableName) {
  const insertRegex = new RegExp(`INSERT INTO ["'\`]?${tableName}["'\`]?\\s*\\(([^)]+)\\)\\s*VALUES\\s*([\\s\\S]+?);`, 'i');
  const match = content.match(insertRegex);
  if (!match) {
    console.log(`No match for table ${tableName}`);
    return [];
  }
  const columns = match[1].split(',').map(c => c.trim().replace(/["'`]/g, ''));
  const valuesBlock = match[2];
  
  // We can parse the individual tuples or regex match them
  const rows = [];
  // Split by \n  ( or similar
  const rowRegex = /\(([\s\S]*?)\)(?:,|\s*;)/g;
  let rowMatch;
  while ((rowMatch = rowRegex.exec(valuesBlock)) !== null) {
    // Let's do a simple CSV/SQL value splitter
    const rawRow = rowMatch[1];
    // naive split or state machine
    const values = [];
    let cur = '';
    let inString = false;
    let inArray = false;
    for (let i = 0; i < rawRow.length; i++) {
      const c = rawRow[i];
      if (c === "'" && rawRow[i-1] !== '\\') {
        inString = !inString;
        cur += c;
      } else if (c === '[' && !inString) {
        inArray = true;
        cur += c;
      } else if (c === ']' && !inString) {
        inArray = false;
        cur += c;
      } else if (c === ',' && !inString && !inArray) {
        values.push(cur.trim());
        cur = '';
      } else {
        cur += c;
      }
    }
    values.push(cur.trim());

    const obj = {};
    columns.forEach((col, idx) => {
      let val = values[idx];
      if (val === undefined || val === 'NULL') {
        obj[col] = null;
      } else if (val.startsWith("'") && val.endsWith("'")) {
        obj[col] = val.slice(1, -1).replace(/''/g, "'").replace(/\\'/g, "'");
      } else if (val.startsWith('ARRAY[') && val.endsWith(']')) {
        const inner = val.slice(6, -1);
        obj[col] = inner ? inner.split(',').map(s => s.trim().replace(/^'|'$/g, '')) : [];
      } else if (!isNaN(Number(val))) {
        obj[col] = Number(val);
      } else if (val === 'TRUE' || val === 'true') {
        obj[col] = true;
      } else if (val === 'FALSE' || val === 'false') {
        obj[col] = false;
      } else {
        obj[col] = val;
      }
    });
    rows.push(obj);
  }
  return rows;
}

const relPropContent = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/relatoriopropostaeita.md'), 'utf-8');
const relPropRows = parseSqlInserts(relPropContent, 'RelatorioProposta_eita');
console.log(`Parsed ${relPropRows.length} RelatorioProposta_eita rows.`);
if (relPropRows.length > 0) {
  console.log('Sample RelatorioProposta_eita:', JSON.stringify(relPropRows[0], null, 2));
}

const relAvContent = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/relatorioeitaavaliacao.md'), 'utf-8');
const relAvRows = parseSqlInserts(relAvContent, 'RelatorioEITAAvaliacao');
console.log(`Parsed ${relAvRows.length} RelatorioEITAAvaliacao rows.`);
if (relAvRows.length > 0) {
  console.log('Sample RelatorioEITAAvaliacao:', JSON.stringify(relAvRows[0], null, 2));
}

const propEita2Content = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/propostaeitasegunda.md'), 'utf-8');
const propEita2Rows = parseSqlInserts(propEita2Content, 'proposta_eita_segunda');
console.log(`Parsed ${propEita2Rows.length} proposta_eita_segunda rows.`);
if (propEita2Rows.length > 0) {
  console.log('Sample proposta_eita_segunda:', JSON.stringify(propEita2Rows[0], null, 2));
}

const relOpContent = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/relatorioeitaavaliacaooperacao.md'), 'utf-8');
const relOpRows = parseSqlInserts(relOpContent, 'RelatorioEITAAvaliacaoOperacao');
console.log(`Parsed ${relOpRows.length} RelatorioEITAAvaliacaoOperacao rows.`);
if (relOpRows.length > 0) {
  console.log('Sample RelatorioEITAAvaliacaoOperacao:', JSON.stringify(relOpRows[0], null, 2));
}

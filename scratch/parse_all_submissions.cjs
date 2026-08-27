const fs = require('fs');
const path = require('path');

function parseCSV(content) {
  const rows = [];
  let row = [];
  let cell = '';
  let inQuotes = false;
  
  for (let i = 0; i < content.length; i++) {
    const c = content[i];
    const next = content[i+1];
    
    if (c === '"') {
      if (inQuotes && next === '"') {
        cell += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === ',' && !inQuotes) {
      row.push(cell);
      cell = '';
    } else if ((c === '\r' || c === '\n') && !inQuotes) {
      if (c === '\r' && next === '\n') i++;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = '';
    } else {
      cell += c;
    }
  }
  if (cell || row.length > 0) {
    row.push(cell);
    rows.push(row);
  }
  return rows;
}

const dir = path.join(__dirname, '../docs/exportscsv');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.csv'));

files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const rows = parseCSV(content);
  console.log(`\n========================================`);
  console.log(`FILE: ${f}`);
  console.log(`Total Rows: ${rows.length - 1} | Columns: ${rows[0].length}`);
  console.log(`Headers: ${rows[0].map((h, i) => `[${i}] ${h}`).join(', ')}`);
  if (rows.length > 1) {
    console.log(`Sample row 1 keys with values:`);
    rows[0].forEach((h, i) => {
      const val = (rows[1][i] || '').trim();
      if (val) console.log(`   ${h}: ${val.slice(0, 100)}`);
    });
  }
});

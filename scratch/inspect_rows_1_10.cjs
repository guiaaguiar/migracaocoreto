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

const inpis = parseCSV(fs.readFileSync('docs/exportscsv/export_All-Submissao-INPIS_2026-08-18_18-22-38.csv', 'utf8'));

inpis.slice(1, 11).forEach((r, idx) => {
  console.log(`\n=== INPI ROW #${idx+1} ===`);
  console.log(`Anexo: ${r[3]}`);
  console.log(`CNPJ: ${r[4]}`);
  console.log(`Correlacao/Desc: ${r[5]}`);
  console.log(`Cotitularidades: ${r[6]}`);
});

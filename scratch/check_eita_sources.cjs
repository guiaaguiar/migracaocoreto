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

// Check Eita files
const pEita = parseCSV(fs.readFileSync('docs/exportscsv/export_All-proposta-eitas_2026-08-18_18-19-51.csv', 'utf8'));
console.log('proposta-eitas headers:', pEita[0]);
console.log('Sample rows in proposta-eitas:', pEita.slice(1, 5).map(r => ({ cidade: r[1], desafio: r[3], docs: r[4] })));

const pEitaSeg = parseCSV(fs.readFileSync('docs/exportscsv/export_All-proposta-eita-segundas_2026-08-18_18-18-54.csv', 'utf8'));
console.log('\nproposta-eita-segundas headers:', pEitaSeg[0]);
console.log('Sample rows in proposta-eita-segundas:', pEitaSeg.slice(1, 5).map(r => ({ email: r[3], desafio: r[2], f1: r[5], f2: r[6] })));

const pStartups = parseCSV(fs.readFileSync('docs/exportscsv/export_All-Proposta-startups_2026-08-18_18-20-29.csv', 'utf8'));
console.log('\nProposta-startups headers:', pStartups[0]);
console.log('Sample rows in Proposta-startups:', pStartups.slice(1, 5).map(r => ({ anexos: r[0], desafio: r[1], startup: r[3] })));

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

function extractFilename(url) {
  if (!url) return '';
  try {
    const base = decodeURIComponent(path.basename(url));
    return base.replace(/^[f\d]+x\d+_/i, '').replace(/^[f\d]+x\d+/i, '');
  } catch(e) {
    return url;
  }
}

const inpis = parseCSV(fs.readFileSync('docs/exportscsv/export_All-Submissao-INPIS_2026-08-18_18-22-38.csv', 'utf8'));

console.log(`Total INPI Rows: ${inpis.length - 1}`);
inpis.slice(1).forEach((r, idx) => {
  const anexo = extractFilename(r[3] || '');
  const cnpj = (r[4] || '').trim();
  const desc = (r[5] || '').trim().replace(/\r?\n/g, ' ');
  console.log(`[#${idx+1}] CNPJ: "${cnpj}" | Anexo: "${anexo}"`);
  if (desc) {
    console.log(`       Desc snippet: "${desc.slice(0, 110)}"`);
  }
});

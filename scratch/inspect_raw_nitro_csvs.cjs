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

// 1. Check Submissao-INPIS CSV
const inpis = parseCSV(fs.readFileSync('docs/exportscsv/export_All-Submissao-INPIS_2026-08-18_18-22-38.csv', 'utf8'));
console.log('=== All Submissao-INPIS rows ===');
inpis.slice(1).forEach((r, idx) => {
  const anexo = r[3] || '';
  const cnpj = r[4] || '';
  const desc = r[5] || '';
  const cotit = r[6] || '';
  console.log(`[INPI #${idx+1}] CNPJ: ${cnpj} | Anexo: ${anexo.slice(0, 70)} | Desc: ${desc.slice(0, 50)}`);
});

// 2. Check Submissao-ConectaLabs CSV
const conectas = parseCSV(fs.readFileSync('docs/exportscsv/export_All-Submissao-ConectaLabs_2026-08-18_18-22-18.csv', 'utf8'));
console.log('\n=== All Submissao-ConectaLabs rows ===');
conectas.slice(1).forEach((r, idx) => {
  const desc = r[3] || r[5] || r[6] || '';
  const anexos = r[4] || '';
  console.log(`[Conecta #${idx+1}] Anexo: ${anexos.slice(0, 60)} | Desc: ${desc.slice(0, 60)}`);
});

// 3. Check Submissao-ICTS CSV
const icts = parseCSV(fs.readFileSync('docs/exportscsv/export_All-Submissao-ICTS_2026-08-18_18-22-26.csv', 'utf8'));
console.log('\n=== All Submissao-ICTS rows ===');
icts.slice(1).forEach((r, idx) => {
  const ass = r[6] || '';
  const anexo = r[5] || '';
  console.log(`[ICT #${idx+1}] Assinatura: ${ass} | Anexo: ${anexo.slice(0, 60)}`);
});

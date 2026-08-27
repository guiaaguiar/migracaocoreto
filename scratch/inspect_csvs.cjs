const fs = require('fs');
const path = require('path');

function readCsv(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  // Simple CSV line parser
  const lines = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < content.length; i++) {
    const c = content[i];
    const next = content[i+1];
    if (c === '"') {
      if (inQuotes && next === '"') {
        cur += '"';
        i++;
        continue;
      }
      inQuotes = !inQuotes;
      cur += c;
    } else if ((c === '\n' || (c === '\r' && next === '\n')) && !inQuotes) {
      if (c === '\r') i++;
      lines.push(cur);
      cur = '';
    } else {
      cur += c;
    }
  }
  if (cur) lines.push(cur);
  
  if (lines.length === 0) return [];
  
  // Parse header
  const parseRow = (line) => {
    const cells = [];
    let cell = '';
    let inQ = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      const next = line[i+1];
      if (c === '"') {
        if (inQ && next === '"') {
          cell += '"';
          i++;
          continue;
        }
        inQ = !inQ;
      } else if (c === ',' && !inQ) {
        cells.push(cell.trim());
        cell = '';
      } else {
        cell += c;
      }
    }
    cells.push(cell.trim());
    return cells;
  };
  
  const headers = parseRow(lines[0]);
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    const cells = parseRow(lines[i]);
    const obj = {};
    headers.forEach((h, idx) => {
      obj[h] = cells[idx] !== undefined ? cells[idx] : '';
    });
    rows.push(obj);
  }
  return { headers, rows };
}

const csvDir = path.join(__dirname, '../docs/exportscsv');
const files = fs.readdirSync(csvDir).filter(f => f.includes('Eita') || f.includes('eita') || f.includes('proposta'));

files.forEach(f => {
  const { headers, rows } = readCsv(path.join(csvDir, f));
  console.log(`\n=== File: ${f} ===`);
  console.log(`Headers (${headers.length}):`, headers.join(' | '));
  console.log(`Rows: ${rows.length}`);
  if (rows.length > 0) {
    console.log('Sample Row 1 keys & snippet:');
    const sample = {};
    for (let k of headers.slice(0, 8)) {
      sample[k] = rows[0][k] ? rows[0][k].slice(0, 60) : '';
    }
    console.log(sample);
  }
});

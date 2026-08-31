const fs = require('fs');
const path = require('path');

function inspectCsv(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n').map(l => l.trim()).filter(Boolean);
  console.log('=== FILE:', path.basename(filePath), '===');
  console.log('Total Lines:', lines.length);
  console.log('Header:', lines[0]);
  lines.slice(1, 10).forEach((l, i) => console.log(`Row ${i + 1}:`, l));
  console.log('\n');
}

const dir = path.join(__dirname, '../docs/exportscsv');
inspectCsv(path.join(dir, 'export_All-proposta-worldcups_2026-08-18_18-20-39.csv'));
inspectCsv(path.join(dir, 'export_All-Proposta-startups_2026-08-18_18-20-29.csv'));

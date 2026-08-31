const fs = require('fs');
const path = require('path');

function inspectCsv(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  console.log('=== FILE:', path.basename(filePath), '===');
  console.log('Total Lines:', lines.length);
  console.log('Header:', lines[0]);
  if (lines.length > 1) {
    console.log('Line 1:', lines[1].substring(0, 300));
  }
  if (lines.length > 2) {
    console.log('Line 2:', lines[2].substring(0, 300));
  }
  console.log('\n');
}

const dir = path.join(__dirname, '../docs/exportscsv');
inspectCsv(path.join(dir, 'export_All-HackerCidad-os_2026-08-18_18-16-04.csv'));
inspectCsv(path.join(dir, 'export_All-Inscri--oHackers_2026-08-18_18-16-28.csv'));

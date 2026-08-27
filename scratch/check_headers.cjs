const fs = require('fs');
const path = require('path');

const csvDir = path.join(__dirname, '../docs/exportscsv');

function checkFirstLine(filename) {
  const content = fs.readFileSync(path.join(csvDir, filename), 'utf-8');
  const firstLine = content.split(/\r?\n/)[0];
  console.log(`\n=== Header of ${filename} ===\n`, firstLine);
}

fs.readdirSync(csvDir).forEach(f => {
  if (f.endsWith('.csv')) checkFirstLine(f);
});

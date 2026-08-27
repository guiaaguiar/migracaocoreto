const fs = require('fs');
const path = require('path');
const parseSqlDirect = require('./test_improved_matching.cjs');

const pEita = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/propostaeita.md'), 'utf-8');
const match = pEita.match(/INSERT INTO\s+["'`]?proposta_eita["'`]?\s*\(([^)]+)\)/i);
if (match) {
  console.log('proposta_eita columns:', match[1].split(',').map(c => c.trim()));
}

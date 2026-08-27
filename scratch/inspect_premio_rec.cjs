const fs = require('fs');
const path = require('path');

// Let's inspect premioRecData and eitaData
const premioSql = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/premiorec.md'), 'utf-8');
const match = premioSql.match(/INSERT INTO\s+["'`]?premio_rec["'`]?\s*\(([^)]+)\)/i);
if (match) {
  console.log('premio_rec columns:', match[1].split(',').map(c => c.trim()));
}

const fs = require('fs');
const path = require('path');

const insertsSql = fs.readFileSync(path.join(__dirname, '../database/init/04_bubble_inserts.sql'), 'utf8');

const regex = /INSERT INTO\s+["']?([^"'\s]+)["']?\s*\(([^)]+)\)/g;
let match;
const tables = {};
while ((match = regex.exec(insertsSql)) !== null) {
  const t = match[1];
  tables[t] = (tables[t] || 0) + 1;
}

console.log('All INSERT statements by table:');
console.log(tables);

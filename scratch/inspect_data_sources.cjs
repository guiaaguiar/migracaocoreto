const fs = require('fs');

const sqlContent = fs.readFileSync('database/init/04_bubble_inserts.sql', 'utf8');

const tables = {};
const regex = /INSERT INTO\s+"([^"]+)"\s*\(([^)]+)\)\s*VALUES/g;
let match;
while ((match = regex.exec(sqlContent)) !== null) {
  const table = match[1];
  const cols = match[2].split(',').map(c => c.trim().replace(/"/g, ''));
  if (!tables[table]) tables[table] = [];
  tables[table].push(cols);
}

console.log('Tables found in 04_bubble_inserts.sql:');
Object.keys(tables).forEach(t => {
  console.log(`- ${t}: ${tables[t][0].join(', ')}`);
});

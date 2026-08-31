const fs = require('fs');
const path = require('path');

const insertsSql = fs.readFileSync(path.join(__dirname, '../database/init/04_bubble_inserts.sql'), 'utf8');

function extractInserts(sql, tableName) {
  const regex = new RegExp(`INSERT INTO\\s+["']?${tableName}["']?\\s*\\(([\\s\\S]*?)\\)\\s*VALUES([\\s\\S]*?)(?:;|\\n\\n--|\\nINSERT INTO)`, 'i');
  const match = sql.match(regex);
  if (!match) return null;
  return {
    cols: match[1].split(',').map(c => c.trim().replace(/["']/g, '')),
    valuesText: match[2].trim()
  };
}

['Programa', 'Edital', 'Oportunidade', 'HackerCidadao', 'PremioHacker'].forEach(t => {
  const res = extractInserts(insertsSql, t);
  console.log(`=== TABLE: ${t} ===`);
  if (res) {
    console.log('Columns:', res.cols);
    console.log('Values:', res.valuesText.substring(0, 1000));
  } else {
    console.log('Not found');
  }
  console.log('\n');
});

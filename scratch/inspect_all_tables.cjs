const fs = require('fs');
const path = require('path');

const insertsSql = fs.readFileSync(path.join(__dirname, '../database/init/04_bubble_inserts.sql'), 'utf8');

// Let's find all INSERT INTO sections
const insertRegex = /INSERT INTO "([^"]+)" \(([\s\S]*?)\) VALUES([\s\S]*?);/g;
let match;
const tablesData = {};

while ((match = insertRegex.exec(insertsSql)) !== null) {
  const tableName = match[1];
  const cols = match[2].split(',').map(c => c.trim().replace(/^"|"$/g, ''));
  const valuesStr = match[3];
  
  // count lines / rows roughly
  const rowsCount = (valuesStr.match(/\([^\)]+\)/g) || []).length;
  tablesData[tableName] = { cols, rowsCount };
  
  if (tableName.toLowerCase().includes('hacker') || tableName.toLowerCase().includes('talento') || tableName.toLowerCase().includes('oportunidade')) {
    console.log(`Table: ${tableName}, Columns: ${cols.length}, Rows: ${rowsCount}`);
  }
}

// Let's inspect HackerCidadao table rows
console.log('\n--- ALL TABLES FOUND ---');
Object.keys(tablesData).forEach(t => console.log(`${t}: ${tablesData[t].rowsCount} rows`));

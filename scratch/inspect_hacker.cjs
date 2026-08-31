const fs = require('fs');
const path = require('path');

const tablesSql = fs.readFileSync(path.join(__dirname, '../database/init/03_bubble_tables.sql'), 'utf8');

const regex = /CREATE TABLE IF NOT EXISTS "([^"]+)" \(([\s\S]*?)\);/g;
let match;
while ((match = regex.exec(tablesSql)) !== null) {
  const tableName = match[1];
  const body = match[2];
  if (tableName.toLowerCase().includes('hacker') || body.toLowerCase().includes('hacker')) {
    console.log('=== TABLE:', tableName, '===');
    console.log(body.trim());
    console.log('\n');
  }
}

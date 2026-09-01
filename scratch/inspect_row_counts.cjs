const fs = require('fs');
const readline = require('readline');

async function inspectRows() {
  const content = fs.readFileSync('database/init/04_bubble_inserts.sql', 'utf8');
  const insertRegex = /INSERT INTO ["']?([a-zA-Z0-9_\-]+)["']?\s*\(([^)]+)\)\s*VALUES\s*([\s\S]*?);(?=\n\s*(?:INSERT|--|$))/gi;
  
  let match;
  const stats = {};
  while ((match = insertRegex.exec(content)) !== null) {
    const table = match[1];
    const cols = match[2].split(',').map(c => c.trim().replace(/^["']|["']$/g, ''));
    const valuesPart = match[3];
    // Approximate row count by counting '), ('
    const rows = valuesPart.split(/\),\s*\(/).length;
    stats[table] = { columns: cols.length, rows: (stats[table]?.rows || 0) + rows };
  }
  console.table(stats);
}
inspectRows();

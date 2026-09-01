const fs = require('fs');
const readline = require('readline');

async function parseAllInserts() {
  const fileStream = fs.createReadStream('database/init/04_bubble_inserts.sql', 'utf8');
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  let currentTable = null;
  let currentColumns = [];
  let inValues = false;
  let tableRows = {};

  for await (const line of rl) {
    const trimmed = line.trim();
    if (trimmed.startsWith('--') || !trimmed) continue;

    // Detect INSERT INTO "TableName" (
    const insertMatch = trimmed.match(/^INSERT INTO ["']?([a-zA-Z0-9_\-]+)["']?\s*\(/i);
    if (insertMatch) {
      currentTable = insertMatch[1];
      currentColumns = [];
      inValues = false;
      if (!tableRows[currentTable]) tableRows[currentTable] = [];
      continue;
    }

    if (currentTable && !inValues) {
      if (trimmed.startsWith('VALUES')) {
        inValues = true;
        continue;
      }
      // Extract column name
      const colMatch = trimmed.match(/^["']?([a-zA-Z0-9_\-]+)["']?,?/);
      if (colMatch) {
        currentColumns.push(colMatch[1]);
      }
      continue;
    }

    if (currentTable && inValues) {
      if (trimmed.startsWith('(')) {
        // Count row
        tableRows[currentTable].push(true);
      }
    }
  }

  console.log('Total tables and counts parsed:');
  const summary = {};
  for (const [k, v] of Object.entries(tableRows)) {
    summary[k] = v.length;
  }
  console.table(summary);
}
parseAllInserts();

const fs = require('fs');
const readline = require('readline');

async function inspectInserts() {
  const fileStream = fs.createReadStream('database/init/04_bubble_inserts.sql');
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });
  const counts = {};
  for await (const line of rl) {
    const match = line.match(/INSERT INTO ["']?([a-zA-Z0-9_\-]+)["']?/i);
    if (match) {
      const tbl = match[1];
      counts[tbl] = (counts[tbl] || 0) + 1;
    }
  }
  console.log('Tables and insert counts:');
  console.table(counts);
}
inspectInserts();

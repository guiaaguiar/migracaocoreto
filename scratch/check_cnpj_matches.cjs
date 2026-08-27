const fs = require('fs');
const sql = fs.readFileSync('database/init/04_bubble_inserts.sql', 'utf8');
const cnpjs = ['61.353.474', '04.768.360', '65.925.683', '62.146.045', '65.889.169', '50.237.407', '20.600.287', '60530211', '59.504.798'];

cnpjs.forEach(c => {
  const lines = sql.split('\n').filter(l => l.includes(c));
  console.log(`=== Matches for ${c} (${lines.length}) ===`);
  lines.forEach(l => console.log('  ' + l.slice(0, 120)));
});

const fs = require('fs');
const path = require('path');

const insertsSql = fs.readFileSync(path.join(__dirname, '../database/init/04_bubble_inserts.sql'), 'utf8');
const seedSql = fs.readFileSync(path.join(__dirname, '../database/init/02_seed.sql'), 'utf8');

// Check all occurrences of 'hacker' in seedSql and insertsSql
console.log('Seed SQL lines with hacker:');
seedSql.split('\n').forEach((l, idx) => {
  if (l.toLowerCase().includes('hacker')) {
    console.log(`L${idx + 1}: ${l}`);
  }
});

// Let's check how many unique CPFs in InscricaoHacker
const regex = /'insc_hacker_\d+',\s*(TRUE|FALSE|NULL),\s*([^,]+),\s*([^,]+),\s*(TRUE|FALSE|NULL),\s*('[^']*'|NULL),\s*('[^']*'|NULL),\s*('[^']*'|NULL),\s*'([^']+)'/g;

// Let's inspect the actual values in InscricaoHacker in 04_bubble_inserts.sql
const inscricaoHackerInserts = [];
let match;
const sectionMatch = insertsSql.match(/INSERT INTO "InscricaoHacker" \([\s\S]*?\) VALUES\s*([\s\S]*?);/);
if (sectionMatch) {
  const vals = sectionMatch[1];
  console.log('\nInscricaoHacker raw length:', vals.length);
  // parse lines
  const lines = vals.split('\n').map(l => l.trim()).filter(l => l.startsWith('('));
  console.log('Total insert lines in InscricaoHacker:', lines.length);
  console.log('Line 0:', lines[0]);
  console.log('Line 10:', lines[10]);
  console.log('Line 50:', lines[50]);
}

// Let's inspect other tables with 'hacker' or 'desafio' or 'oportunidade'
const progMatch = insertsSql.match(/INSERT INTO "Programa" \([\s\S]*?\) VALUES\s*([\s\S]*?);/);
if (progMatch) {
  console.log('\n--- Programas ---');
  console.log(progMatch[1]);
}

const editalMatch = insertsSql.match(/INSERT INTO "Edital" \([\s\S]*?\) VALUES\s*([\s\S]*?);/);
if (editalMatch) {
  console.log('\n--- Editais ---');
  console.log(editalMatch[1]);
}

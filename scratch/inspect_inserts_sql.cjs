const fs = require('fs');
const path = require('path');

const insertsPath = path.join(__dirname, '../database/init/04_bubble_inserts.sql');
const content = fs.readFileSync(insertsPath, 'utf-8');

const tables = [
  'RelatorioProposta_eita',
  'proposta_eita',
  'proposta_eita_segunda',
  'RelatorioEITAAvaliacao',
  'RelatorioEITAAvaliacaoOperacao',
  'RelatocioEITAAvaliacaoCriterio',
  'Assessment',
  'AssessmentSecondPhase',
  'Desafios',
  'Startup'
];

tables.forEach(t => {
  const reg = new RegExp(`INSERT INTO\\s+["'\`]?${t}["'\`]?\\s*\\(([^)]+)\\)\\s*VALUES`, 'i');
  const m = content.match(reg);
  if (m) {
    console.log(`\nTable ${t} found in 04_bubble_inserts.sql!`);
    console.log('Columns:', m[1]);
  } else {
    console.log(`\nTable ${t} NOT found in 04_bubble_inserts.sql.`);
  }
});

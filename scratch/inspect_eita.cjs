const fs = require('fs');
const path = require('path');

function readLines(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

console.log("Analyzing EITA files...");

const relProp = readLines(path.join(__dirname, '../docs/sqlcomandos/relatoriopropostaeita.md'));
console.log("relatoriopropostaeita length:", relProp.length);

const propEita = readLines(path.join(__dirname, '../docs/sqlcomandos/propostaeita.md'));
console.log("propostaeita length:", propEita.length);

const propEita2 = readLines(path.join(__dirname, '../docs/sqlcomandos/propostaeitasegunda.md'));
console.log("propostaeitasegunda length:", propEita2.length);

const relAv = readLines(path.join(__dirname, '../docs/sqlcomandos/relatorioeitaavaliacao.md'));
console.log("relatorioeitaavaliacao length:", relAv.length);

const relOp = readLines(path.join(__dirname, '../docs/sqlcomandos/relatorioeitaavaliacaooperacao.md'));
console.log("relatorioeitaavaliacaooperacao length:", relOp.length);

const relCrit = readLines(path.join(__dirname, '../docs/sqlcomandos/relatorioeitaavaliacaocriterio.md'));
console.log("relatorioeitaavaliacaocriterio length:", relCrit.length);

const ass = readLines(path.join(__dirname, '../docs/sqlcomandos/assessment.md'));
console.log("assessment length:", ass.length);

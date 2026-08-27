const fs = require('fs');
const path = require('path');

const eitaData = fs.readFileSync(path.join(__dirname, '../src/data/eitaData.ts'), 'utf8');

console.log('EitaData size:', eitaData.length);

// Let's check sample records
const match = eitaData.match(/export const EITA_SUBMISSIONS: EitaSubmission\[\] = (\[[\s\S]*?\]);\n/);
if (match) {
  const subs = JSON.parse(match[1]);
  console.log(`Total Eita submissions: ${subs.length}`);
  subs.slice(0, 10).forEach((s, idx) => {
    console.log(`[#${idx+1}] ID: ${s.id} | Title: "${s.title}" | Cidade: "${s.cidade}" | CNPJ: "${s.CNPJ}"`);
  });
}

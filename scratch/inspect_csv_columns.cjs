const fs = require('fs');
const path = require('path');

function parseCsv(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = [];
  let row = [];
  let inQuotes = false;
  let curVal = '';

  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    const nextChar = content[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        curVal += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      row.push(curVal.trim());
      curVal = '';
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') i++;
      row.push(curVal.trim());
      if (row.length > 1 || row[0] !== '') {
        lines.push(row);
      }
      row = [];
      curVal = '';
    } else {
      curVal += char;
    }
  }
  if (curVal || row.length > 0) {
    row.push(curVal.trim());
    lines.push(row);
  }

  if (lines.length === 0) return [];
  const headers = lines[0];
  return lines.slice(1).map(r => {
    const obj = {};
    headers.forEach((h, idx) => {
      obj[h] = r[idx] !== undefined ? r[idx] : '';
    });
    return obj;
  });
}

console.log('--- Inspecting CSV Files ---');

const inpi = parseCsv(path.join(__dirname, '../docs/exportscsv/export_All-Submissao-INPIS_2026-08-18_18-22-38.csv'));
console.log('INPI headers:', Object.keys(inpi[0] || {}));
console.log('INPI sample 0:', inpi[0]);
console.log('INPI sample 1:', inpi[1]);

const conecta = parseCsv(path.join(__dirname, '../docs/exportscsv/export_All-Submissao-ConectaLabs_2026-08-18_18-22-18.csv'));
console.log('\nConectaLabs headers:', Object.keys(conecta[0] || {}));
console.log('ConectaLabs sample 0:', conecta[0]);

const icts = parseCsv(path.join(__dirname, '../docs/exportscsv/export_All-Submissao-ICTS_2026-08-18_18-22-26.csv'));
console.log('\nICTs headers:', Object.keys(icts[0] || {}));
console.log('ICTs sample 0:', icts[0]);

const nits = parseCsv(path.join(__dirname, '../docs/exportscsv/export_All-proposta-nits_2026-08-18_18-20-21.csv'));
console.log('\nNITs headers:', Object.keys(nits[0] || {}));
console.log('NITs sample 0:', nits[0]);

const centelhas = parseCsv(path.join(__dirname, '../docs/exportscsv/export_All-Centelhas_2026-08-18_18-14-20.csv'));
console.log('\nCentelha headers:', Object.keys(centelhas[0] || {}));
console.log('Centelha sample 0:', centelhas[0]);

const premio = parseCsv(path.join(__dirname, '../docs/exportscsv/export_All-PremioRecs_2026-08-18_18-18-28.csv'));
console.log('\nPremioRec headers:', Object.keys(premio[0] || {}));
console.log('PremioRec sample 0:', premio[0]);

const propostaEitas = parseCsv(path.join(__dirname, '../docs/exportscsv/export_All-proposta-eitas_2026-08-18_18-19-51.csv'));
console.log('\nProposta Eitas headers:', Object.keys(propostaEitas[0] || {}));
console.log('Proposta Eitas sample 0:', propostaEitas[0]);

const relatorioPropostaEita = parseCsv(path.join(__dirname, '../docs/exportscsv/export_All-RelatorioProposta-eitas_2026-08-18_18-21-54.csv'));
console.log('\nRelatorio Proposta Eitas headers:', Object.keys(relatorioPropostaEita[0] || {}));
console.log('Relatorio Proposta Eitas sample 0:', relatorioPropostaEita[0]);

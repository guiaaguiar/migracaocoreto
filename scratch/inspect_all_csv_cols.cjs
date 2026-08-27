const fs = require('fs');
const path = require('path');

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

const files = [
  'export_All-Submissao-INPIS_2026-08-18_18-22-38.csv',
  'export_All-Submissao-ICTS_2026-08-18_18-22-26.csv',
  'export_All-Submissao-ConectaLabs_2026-08-18_18-22-18.csv',
  'export_All-PremioRecs_2026-08-18_18-18-28.csv',
  'export_All-proposta-eitas_2026-08-18_18-19-51.csv',
  'export_All-RelatorioProposta-eitas_2026-08-18_18-21-54.csv',
  'export_All-proposta-eita-segundas_2026-08-18_18-18-54.csv',
  'export_All-proposta-nits_2026-08-18_18-20-21.csv',
  'export_All-Proposta-startups_2026-08-18_18-20-29.csv',
  'export_All-Talentos_2026-08-18_18-23-09.csv',
  'export_All-Users_2026-08-18_18-24-14.csv',
  'export_All-Centelhas_2026-08-18_18-14-20.csv',
  'export_All-cotitulares_2026-08-18_18-15-16.csv',
  'export_All-AssessmentPremioFaseUms_2026-08-17_16-17-02.csv',
  'export_All-AssessmentPremioFaseDois_2026-08-17_16-16-34.csv',
  'export_All-RelatocioEITAAvaliacaoCriterios_2026-08-18_18-21-12.csv',
  'export_All-RelatorioEITAAvaliacaoOperacaos_2026-08-18_18-21-35.csv',
  'export_All-RelatorioEITAAvaliacaos_2026-08-18_18-21-44.csv'
];

files.forEach(file => {
  const filePath = path.join(__dirname, '../docs/exportscsv', file);
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  const line = content.split(/\r?\n/)[0];
  const cols = parseCSVLine(line);
  console.log(`\n=== ${file} (${cols.length} cols) ===`);
  console.log(cols.join(', '));
});

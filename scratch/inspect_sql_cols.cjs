const fs = require('fs');
const path = require('path');

const inpiSql = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/submissaoinpi.md'), 'utf-8');
const conectaSql = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/submissaoconectalabs.md'), 'utf-8');
const ictSql = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/submissaoict.md'), 'utf-8');

console.log('inpiSql match insert:');
const inpiMatch = inpiSql.match(/INSERT INTO\s+"?submissao_inpi"?\s*\(([^)]+)\)/i);
if (inpiMatch) console.log('INPI SQL cols:', inpiMatch[1]);

const conectaMatch = conectaSql.match(/INSERT INTO\s+"?Submissao_ConectaLabs"?\s*\(([^)]+)\)/i);
if (conectaMatch) console.log('ConectaLabs SQL cols:', conectaMatch[1]);

const ictMatch = ictSql.match(/INSERT INTO\s+"?submissao_ict"?\s*\(([^)]+)\)/i);
if (ictMatch) console.log('ICT SQL cols:', ictMatch[1]);

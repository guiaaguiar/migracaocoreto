const fs = require('fs');
const path = require('path');
const { parseSqlFile } = require('./test_eita_parser2.cjs');

// Let's copy parseSqlFile here directly
function parseSql(content, tableName) {
  const insertRegex = new RegExp(`INSERT INTO\\s+["'\`]?${tableName}["'\`]?\\s*\\(([^)]+)\\)\\s*VALUES\\s*`, 'i');
  const match = content.match(insertRegex);
  if (!match) return [];
  
  const columns = match[1].split(',').map(c => c.trim().replace(/["'`]/g, ''));
  const valuesStart = match.index + match[0].length;
  
  let valuesText = content.substring(valuesStart);
  const onConflictIdx = valuesText.search(/ON CONFLICT/i);
  if (onConflictIdx !== -1) {
    valuesText = valuesText.substring(0, onConflictIdx);
  }
  valuesText = valuesText.trim().replace(/;$/, '');
  
  const rows = [];
  let inString = false;
  let inArray = false;
  let curVal = '';
  let curRow = [];
  let parenDepth = 0;
  
  for (let i = 0; i < valuesText.length; i++) {
    const char = valuesText[i];
    const nextChar = valuesText[i + 1];
    
    if (char === "'") {
      if (inString && nextChar === "'") {
        curVal += "'";
        i++;
        continue;
      }
      inString = !inString;
      curVal += char;
    } else if (char === '[' && !inString) {
      inArray = true;
      curVal += char;
    } else if (char === ']' && !inString) {
      inArray = false;
      curVal += char;
    } else if (char === '(' && !inString && !inArray) {
      if (parenDepth === 0) {
        curRow = [];
        curVal = '';
      } else {
        curVal += char;
      }
      parenDepth++;
    } else if (char === ')' && !inString && !inArray) {
      parenDepth--;
      if (parenDepth === 0) {
        curRow.push(curVal.trim());
        curVal = '';
        
        const rowObj = {};
        columns.forEach((col, idx) => {
          let val = curRow[idx];
          if (val === undefined || val === 'NULL' || val === null || val === '') {
            rowObj[col] = null;
          } else if (val.startsWith("'") && val.endsWith("'")) {
            rowObj[col] = val.slice(1, -1);
          } else if (val.startsWith('ARRAY[') && val.endsWith(']')) {
            const inner = val.slice(6, -1).trim();
            if (!inner) {
              rowObj[col] = [];
            } else {
              const items = [];
              let arrItem = '';
              let arrInStr = false;
              for (let a = 0; a < inner.length; a++) {
                const ac = inner[a];
                const anc = inner[a + 1];
                if (ac === "'") {
                  if (arrInStr && anc === "'") {
                    arrItem += "'";
                    a++;
                    continue;
                  }
                  arrInStr = !arrInStr;
                } else if (ac === ',' && !arrInStr) {
                  items.push(arrItem.trim().replace(/^'|'$/g, ''));
                  arrItem = '';
                } else {
                  arrItem += ac;
                }
              }
              if (arrItem.trim()) {
                items.push(arrItem.trim().replace(/^'|'$/g, ''));
              }
              rowObj[col] = items;
            }
          } else if (!isNaN(Number(val))) {
            rowObj[col] = Number(val);
          } else if (val === 'TRUE' || val === 'true') {
            rowObj[col] = true;
          } else if (val === 'FALSE' || val === 'false') {
            rowObj[col] = false;
          } else {
            rowObj[col] = val;
          }
        });
        rows.push(rowObj);
      } else {
        curVal += char;
      }
    } else if (char === ',' && !inString && !inArray && parenDepth === 1) {
      curRow.push(curVal.trim());
      curVal = '';
    } else if (parenDepth > 0) {
      curVal += char;
    }
  }
  return rows;
}

const relProp = parseSql(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/relatoriopropostaeita.md'), 'utf-8'), 'RelatorioProposta_eita');
const propEita = parseSql(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/propostaeita.md'), 'utf-8'), 'proposta_eita');
const relAv = parseSql(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/relatorioeitaavaliacao.md'), 'utf-8'), 'RelatorioEITAAvaliacao');
const relOp = parseSql(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/relatorioeitaavaliacaooperacao.md'), 'utf-8'), 'RelatorioEITAAvaliacaoOperacao');
const propEita2 = parseSql(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/propostaeitasegunda.md'), 'utf-8'), 'proposta_eita_segunda');

console.log('--- Propostas Sample ---');
console.log(relProp.slice(0, 3));

console.log('--- Unique desafios in RelatorioProposta_eita ---');
const desafios = {};
relProp.forEach(p => {
  desafios[p.desafio] = (desafios[p.desafio] || 0) + 1;
});
console.log(desafios);

console.log('--- RelatorioEITAAvaliacao unique proposta_nome count ---');
const avPropostas = new Set(relAv.map(a => a.proposta_nome));
console.log('Unique proposal names in relAv:', avPropostas.size);

console.log('--- RelatorioEITAAvaliacao unique mentors ---');
const mentores = new Set(relAv.map(a => a.Mentor_nome));
console.log('Unique mentors in relAv:', mentores.size, Array.from(mentores).slice(0, 10));

console.log('--- RelatorioEITAAvaliacaoOperacao unique propostas ---');
const opPropostas = new Set(relOp.map(a => a['1_Proposta']));
console.log('Unique proposal names in relOp:', opPropostas.size);

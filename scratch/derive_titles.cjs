const fs = require('fs');
const path = require('path');

function parseSqlDirect(content, tableName) {
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

const relProp = parseSqlDirect(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/relatoriopropostaeita.md'), 'utf-8'), 'RelatorioProposta_eita');
const relAv = parseSqlDirect(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/relatorioeitaavaliacao.md'), 'utf-8'), 'RelatorioEITAAvaliacao');
const relOp = parseSqlDirect(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/relatorioeitaavaliacaooperacao.md'), 'utf-8'), 'RelatorioEITAAvaliacaoOperacao');
const propEita2 = parseSqlDirect(fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/propostaeitasegunda.md'), 'utf-8'), 'proposta_eita_segunda');

// Build list of known proposal names
const knownProposalNames = Array.from(new Set([
  ...relAv.map(a => a.proposta_nome).filter(Boolean),
  ...relOp.map(a => a['1_Proposta']).filter(Boolean)
])).filter(n => n !== '()' && n.trim() !== '');

console.log('Known proposal names count:', knownProposalNames.length);

function extractCleanTitle(prop) {
  // Check if any known proposal name is in documents or text
  const docBasenames = (prop.documentos || []).map(d => {
    try {
      return decodeURIComponent(path.basename(d)).replace(/^[f\d]+x\d+_/i, '').replace(/^[f\d]+x\d+/i, '');
    } catch(e) {
      return d;
    }
  });
  
  const allDocText = docBasenames.join(' ');
  const descText = (prop.Como_esse_usuario_resolve || '');
  
  for (const name of knownProposalNames) {
    if (name.length < 3) continue;
    const regex = new RegExp(`\\b${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
    if (regex.test(allDocText) || regex.test(descText)) {
      return name;
    }
  }
  
  // If not matched, try to extract from the primary doc name
  if (docBasenames.length > 0) {
    let base = docBasenames[0]
      .replace(/\.(pdf|docx?|pptx?|rar|zip|png|jpe?g|mp4)$/i, '')
      .replace(/^(Projeto|Proposta|Documentação|Informações|Apresentação|Pitch)[\s_-]+/i, '')
      .replace(/[_-]+/g, ' ')
      .trim();
    if (base && base.length > 2 && !base.toLowerCase().startsWith('untitled')) {
      return base;
    }
  }
  
  // Fallback
  return `Proposta EITA #${prop.id.replace('rel_prop_', '')} (${prop.cidade || 'Recife'})`;
}

relProp.forEach((p, idx) => {
  p.derivedTitle = extractCleanTitle(p);
});

console.log('Sample derived titles:');
relProp.slice(0, 25).forEach(p => {
  console.log(`- [${p.id}] ${p.derivedTitle} | Desafio: ${p.desafio ? p.desafio.slice(0, 45) : 'N/A'}...`);
});

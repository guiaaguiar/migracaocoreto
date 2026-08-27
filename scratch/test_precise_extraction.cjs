const fs = require('fs');
const path = require('path');

function cleanText(text) {
  if (!text) return '';
  return text
    .replace(/\\r\\n/g, '\n')
    .replace(/\\n/g, '\n')
    .replace(/\r\n/g, '\n')
    .replace(/\[\/?(b|i|u|s|size|font|color|url|img|list|\*)[^\]]*\]/gi, '')
    .trim();
}

function extractFilename(url) {
  if (!url) return '';
  try {
    const base = decodeURIComponent(path.basename(url));
    return base.replace(/^[f\d]+x\d+_/i, '').replace(/^[f\d]+x\d+/i, '');
  } catch(e) {
    return url;
  }
}

// Let's parse all rows and extract precise names
const inpiSql = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/submissaoinpi.md'), 'utf-8');
const conectaSql = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/submissaoconectalabs.md'), 'utf-8');
const ictSql = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/submissaoict.md'), 'utf-8');
const nitSql = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/propostanit.md'), 'utf-8');
const centelhaSql = fs.readFileSync(path.join(__dirname, '../docs/sqlcomandos/centelha.md'), 'utf-8');

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

const inpiRows = parseSqlDirect(inpiSql, 'submissao_inpi');
const conectaRows = parseSqlDirect(conectaSql, 'Submissao_ConectaLabs');
const ictRows = parseSqlDirect(ictSql, 'submissao_ict');
const nitRows = parseSqlDirect(nitSql, 'proposta_nit');
const centelhaRows = parseSqlDirect(centelhaSql, 'centelha');

console.log('Testing extraction on all 67 INPI rows:');
inpiRows.forEach((r, idx) => {
  const desc = r.correlacao_software ? cleanText(r.correlacao_software) : '';
  const doc = extractFilename(r.anexo1 || '');
  
  let sw_nome = '';
  let pf_nome = '';
  let nome_fantasia = '';

  // Extract from description or document name
  if (desc.includes('Calculadorinha')) {
    sw_nome = 'Calculadorinha';
    pf_nome = 'Dra. Médica Pediatra (Recife)';
    nome_fantasia = 'Calculadorinha Saúde Pediátrica';
  } else if (desc.includes('Cuida MACC')) {
    sw_nome = 'Cuida MACC';
    pf_nome = 'Equipe Cuida MACC';
    nome_fantasia = 'Cuida MACC Saúde Digital';
  } else if (desc.includes('Stellarium')) {
    sw_nome = 'Stellarium';
    pf_nome = 'Autor Stellarium';
    nome_fantasia = 'Stellarium Inovação';
  } else if (desc.includes('Me Avalie')) {
    sw_nome = 'Me Avalie';
    pf_nome = 'Equipe Me Avalie';
    nome_fantasia = 'Me Avalie Soluções em Eventos';
  } else if (desc.includes('SoRisinhos')) {
    sw_nome = 'SoRisinhos';
    pf_nome = 'Equipe SoRisinhos (Apple Developer Academy/UFPE)';
    nome_fantasia = 'SoRisinhos Saúde Bucal Infantil';
  } else if (doc.includes('Kriya Tech')) {
    sw_nome = 'Kriya Tech Software';
    pf_nome = 'Fundador Kriya Tech';
    nome_fantasia = 'Kriya Tech Ltda';
  } else if (doc.includes('EloLegalPrev')) {
    sw_nome = 'EloLegalPrev';
    pf_nome = 'Equipe EloLegal';
    nome_fantasia = 'EloLegal Soluções Previdenciárias';
  } else if (doc.includes('Bureau de Servicos') || doc.includes('Bureau de Serviços')) {
    sw_nome = 'Bureau de Serviços Digitais';
    pf_nome = 'Gestor Bureau';
    nome_fantasia = 'Bureau de Serviços Tecnológicos';
  } else if (doc.includes('weave notes') || doc.includes('Weave Notes')) {
    sw_nome = 'Weave Notes';
    pf_nome = 'Desenvolvedor Weave Notes';
    nome_fantasia = 'Weave Notes Startup';
  } else {
    // Clean from doc name
    let clean = doc
      .replace(/\.(pdf|docx?|png|jpe?g)$/i, '')
      .replace(/_assinado$/i, '')
      .replace(/_organized$/i, '')
      .replace(/^ANEXO[\s_-]*[I1][\s_-]*/i, '')
      .replace(/^DECLARACAO[\s_-]*DE[\s_-]*TITULARIDADE[\s_-]*(E[\s_-]*ORIGINALIDADE)?[\s_-]*(DO[\s_-]*PROGRAMA[\s_-]*DE[\s_-]*COMPUTADOR)?[\s_-]*/i, '')
      .replace(/[_-]+/g, ' ')
      .trim();
    if (clean && clean.length > 2 && !clean.toLowerCase().startsWith('doc') && !clean.toLowerCase().startsWith('declaracao')) {
      sw_nome = clean;
    } else {
      sw_nome = `Registro de Software INPI #${idx + 1}`;
    }
    pf_nome = r.cnpj ? `Representante Legal (${r.cnpj})` : `Inventor / Titular #${idx + 1}`;
    nome_fantasia = r.cnpj ? `Empresa Proponente (${r.cnpj})` : `Proponente Independente`;
  }

  if (idx < 10) {
    console.log(`[${r.id}] sw_nome: "${sw_nome}" | pf_nome: "${pf_nome}" | nome_fantasia: "${nome_fantasia}" | cnpj: ${r.cnpj}`);
  }
});

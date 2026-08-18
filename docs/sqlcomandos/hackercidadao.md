### 1. Mapeamento de Colunas (CSV Bubble $\rightarrow$ SQL)

| Coluna no CSV (Bubble) | Coluna na Tabela SQL | Tipo SQL | Tratamento Realizado |
| :--- | :--- | :--- | :--- |
| `anexos` | `"anexos"` | `TEXT[]` | Lista de strings / URLs convertida para Array SQL |
| `Atividades` | `"Atividades"` | `TEXT[]` | Lista de strings convertida para Array SQL |
| `Critérios de julgamento` | `"Critérios_de_julgamento"` | `TEXT` | Preservado como texto |
| `cronograma` | `"cronograma"` | `TEXT[]` | Lista de IDs de cronograma (`1744...`) convertida para `TEXT[]` |
| `curadores` | `"curadores"` | `TEXT[]` | Lista de e-mails dos curadores convertida para `TEXT[]` |
| `Desafios` | `"Desafios"` | `TEXT[]` | Lista de IDs de desafios (`1741...`) convertida para `TEXT[]` |
| `fases` | `"fases"` | `TEXT[]` | Lista de fases convertida para Array SQL |

---

### 2. DDL - Criação da Tabela `HackerCidadao`

```sql
CREATE TABLE IF NOT EXISTS "HackerCidadao" (
  "id" VARCHAR(255) PRIMARY KEY,
  "anexos" TEXT[],
  "Atividades" TEXT[],
  "Critérios_de_julgamento" TEXT,
  "cronograma" TEXT[],
  "curadores" TEXT[],
  "Desafios" TEXT[],
  "fases" TEXT[],
  "fim" TIMESTAMP,
  "inicio" TIMESTAMP,
  "Inscritos" TEXT[],
  "locais" TEXT[],
  "logo" TEXT,
  "Nome" VARCHAR(255),
  "Premios" TEXT[],
  "regulamento" TEXT,
  "resultado" TEXT,
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);
```

---

### 3. DML - Script de Inserção do Hacker Cidadão

```sql
INSERT INTO "HackerCidadao" (
  "id",
  "anexos",
  "Atividades",
  "Critérios_de_julgamento",
  "cronograma",
  "curadores",
  "Desafios",
  "fases",
  "slug"
)
VALUES
  (
    'hacker_cidadao_001',
    NULL,
    NULL,
    NULL,
    ARRAY[
      '1744397198821x395202010974781440',
      '1744397217647x518803360938721300',
      '1744637180418x401529154491383800',
      '1744637235720x964826209394360300',
      '1744637375216x297396451088269300',
      '1744637404390x753289920088637400',
      '1744637437481x719842897368449000',
      '1744637686107x946789973798420500',
      '1744637707500x368566279015497700',
      '1744637755989x793852409176653800',
      '1744637792446x531546235162591200',
      '1744637815593x330864506828226560',
      '1744637845656x415756150942466050',
      '1744637869716x807465569436303400',
      '1744637889852x320737710078427140',
      '1744637905460x659039303041286100',
      '1744638072708x575838861471776800',
      '1744638153476x714909353116696600',
      '1744638206557x238987470048591870',
      '1744638221111x738408414774820900',
      '1744638244535x423841685753298940',
      '1745324718971x154140611655237630'
    ],
    ARRAY[
      'brenoalencar@recife.pe.gov.br',
      'rafaeltoscano.cbtu@gmail.com',
      'pedrocasefilho2208@gmail.com',
      'evisson.lucena@recife.pe.gov.br',
      'gabrielchamie@gmail.com'
    ],
    ARRAY[
      '1741713756342x475094650909622300',
      '1741715341881x519750575031320600',
      '1741717308549x865975349857747000',
      '1741717852329x959885049985499100'
    ],
    NULL,
    'hacker-cidadao-001'
  )
ON CONFLICT ("id") DO UPDATE SET
  "anexos" = EXCLUDED."anexos",
  "Atividades" = EXCLUDED."Atividades",
  "Critérios_de_julgamento" = EXCLUDED."Critérios_de_julgamento",
  "cronograma" = EXCLUDED."cronograma",
  "curadores" = EXCLUDED."curadores",
  "Desafios" = EXCLUDED."Desafios",
  "fases" = EXCLUDED."fases",
  "modified_date" = CURRENT_TIMESTAMP;
```

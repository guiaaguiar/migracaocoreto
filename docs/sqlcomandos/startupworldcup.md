### 1. Mapeamento de Colunas (CSV Bubble $\rightarrow$ SQL)

| Coluna no CSV (Bubble) | Coluna na Tabela SQL | Tipo SQL | Tratamento Realizado |
| :--- | :--- | :--- | :--- |
| `Cargo` | `"Cargo"` | `VARCHAR(255)` | Preservado |
| `cidade` | `"cidade"` | `VARCHAR(255)` | Limpeza de espaços sobressalentes |
| `CNPJ` | `"CNPJ"` | `VARCHAR(255)` | Vazio convertido para `NULL` |
| `E-mail` | `"E_mail"` | `VARCHAR(255)` | Normalizado |
| `Está buscando investimento-anjo?` | `"esta_buscando_investimento"` | `BOOLEAN` | `sim` $\rightarrow$ `TRUE`, `não` $\rightarrow$ `FALSE` |
| `Está ciente de que compartilharemos...` | `"esta_ciente_de_que"` | `BOOLEAN` | `sim` $\rightarrow$ `TRUE`, `não` $\rightarrow$ `FALSE` |
| `estado` | `"estado"` | `VARCHAR(255)` | Preservado (ex: `PE`, `Pernambuco`, etc.) |

---

### 2. DDL - Criação da Tabela `proposta_worldcup`

```sql
CREATE TABLE IF NOT EXISTS "proposta_worldcup" (
  "id" VARCHAR(255) PRIMARY KEY,
  "Cargo" VARCHAR(255),
  "cidade" VARCHAR(255),
  "CNPJ" VARCHAR(255),
  "E_mail" VARCHAR(255),
  "estado" VARCHAR(255),
  "esta_buscando_investimento" BOOLEAN,
  "esta_ciente_de_que" BOOLEAN,
  "Nome" VARCHAR(255),
  "Nome_da_Startup" VARCHAR(255),
  "Pitch_Deck" TEXT,
  "Segmento_da_startup" VARCHAR(255),
  "Startup_id" VARCHAR(255),
  "Tem_interesse_em_mentoria" BOOLEAN,
  "Website" VARCHAR(255),
  "Whatsapp" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);
```

---

### 3. DML - Script de Inserção de todos os 23 Registros

```sql
INSERT INTO "proposta_worldcup" (
  "id",
  "Cargo",
  "cidade",
  "CNPJ",
  "E_mail",
  "esta_buscando_investimento",
  "esta_ciente_de_que",
  "estado",
  "slug"
)
VALUES
  ('prop_wc_001', 'Lider fundador', 'Recife', '2131231231', 'gabrielchamie@gmail.com', FALSE, TRUE, 'PE', 'worldcup-gabrielchamie'),
  ('prop_wc_002', 'CEO', 'Maceio', '47681875000160', 'admin@sandora.me', FALSE, TRUE, 'AL', 'worldcup-admin-sandora'),
  ('prop_wc_003', 'CEO', 'Caruaru', '46085514000198', 'diretor@grupoadapta.com.br', TRUE, TRUE, 'PE', 'worldcup-diretor-grupoadapta'),
  ('prop_wc_004', 'Founder', 'Recife', '61011472000134', 'lucasdelima96@gmail.com', TRUE, TRUE, 'PE', 'worldcup-lucasdelima96'),
  ('prop_wc_005', 'CEO', 'PETROLINA', '58740502000139', 'vdiogo225@gmali.com', TRUE, TRUE, 'PE', 'worldcup-vdiogo225'),
  ('prop_wc_006', 'Estudante', 'Recife', NULL, 'lucasmiguelbsilva@gmail.com', TRUE, TRUE, 'Pernambuco', 'worldcup-lucasmiguelbsilva'),
  ('prop_wc_007', 'CEO', 'Recife', '58507389000146', 'marinho.tecnologias@gmail.com', TRUE, TRUE, 'Pernambuco, PE', 'worldcup-marinho-tecnologias'),
  ('prop_wc_008', 'CEO', 'Recife', '0', 'criticlevelstartup@gmail.com', TRUE, TRUE, 'Pernambuco', 'worldcup-criticlevelstartup'),
  ('prop_wc_009', 'CEO, Proprietária', 'Paulista', '51289938000104', 'rafaela.edelweiss@gmail.com', TRUE, TRUE, 'PE', 'worldcup-rafaela-edelweiss'),
  ('prop_wc_010', 'Relationship Developer', 'Recife', '26846328000117', 'murilo@loomi.com.br', FALSE, TRUE, 'Pernambuco', 'worldcup-murilo-loomi'),
  ('prop_wc_011', 'Head de Marketing', 'São Paulo', '40651433000121', 'catarina.alecrim@soueduca.com', TRUE, TRUE, 'São Paulo', 'worldcup-catarina-alecrim'),
  ('prop_wc_012', 'Cofundadora', 'Recife', '60273291000113', 'moverdesoficial@gmail.com', TRUE, TRUE, 'Pernambuco', 'worldcup-moverdesoficial'),
  ('prop_wc_013', 'CEO e Co-fundadora', 'Recife', '4906019000115', 'anafernandes@voltzx.com.br', TRUE, TRUE, 'PE', 'worldcup-anafernandes-voltzx'),
  ('prop_wc_014', 'CEO', 'Jaboatão do Guararapes', '60605418000154', 'mizael.correia@gmail.com', FALSE, TRUE, 'PE', 'worldcup-mizael-correia'),
  ('prop_wc_015', 'Chief Executive Officer', 'Recife', '59636516000170', 'zeatechstartup@gmail.com', TRUE, TRUE, 'PE', 'worldcup-zeatechstartup'),
  ('prop_wc_016', 'Diretor de Operações', 'Recife', '38033665000174', 'contato@stepps.com.br', FALSE, TRUE, 'Pernambuco', 'worldcup-contato-stepps'),
  ('prop_wc_017', 'Coordenador do Projeto', 'Recife', NULL, 'dmgssantiago@gmail.com', TRUE, TRUE, 'Pernambuco', 'worldcup-dmgssantiago'),
  ('prop_wc_018', 'CEO', 'Santa Cruz do Capibaribe', '55101632000133', 'deividfigueiroa@gmail.com', TRUE, TRUE, 'PE', 'worldcup-deividfigueiroa'),
  ('prop_wc_019', 'Proprietário', 'Olinda', '31127352000136', 'geovanny@gstack.com.br', FALSE, TRUE, 'Pernambuco', 'worldcup-geovanny-gstack'),
  ('prop_wc_020', 'CEO', 'Recife', '54442057000170', 'germini.sementes@gmail.com', TRUE, TRUE, 'Pernambuco', 'worldcup-germini-sementes'),
  ('prop_wc_021', 'CEO', 'Recife', '41941664000132', 'biofabricadecorais@gmail.com', FALSE, TRUE, 'PE', 'worldcup-biofabricadecorais'),
  ('prop_wc_022', 'CEO', 'Juazeiro do Norte', '57468899000199', 'andre_juca@hotmail.com', TRUE, TRUE, 'CE', 'worldcup-andre-juca'),
  ('prop_wc_023', 'CEO', 'Recife', '50243091000164', 'biotecinovacoes@gmail.com', FALSE, TRUE, 'Pernambuco', 'worldcup-biotecinovacoes')
ON CONFLICT ("id") DO UPDATE SET
  "Cargo" = EXCLUDED."Cargo",
  "cidade" = EXCLUDED."cidade",
  "CNPJ" = EXCLUDED."CNPJ",
  "E_mail" = EXCLUDED."E_mail",
  "esta_buscando_investimento" = EXCLUDED."esta_buscando_investimento",
  "esta_ciente_de_que" = EXCLUDED."esta_ciente_de_que",
  "estado" = EXCLUDED."estado",
  "modified_date" = CURRENT_TIMESTAMP;
```

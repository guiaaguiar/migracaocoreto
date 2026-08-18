### 1. Mapeamento de Colunas (CSV Bubble $\rightarrow$ SQL)

| Coluna no CSV (Bubble) | Coluna na Tabela SQL | Tipo SQL | Tratamento Realizado |
| :--- | :--- | :--- | :--- |
| `é duplicada` | `"é_duplicada"` | `BOOLEAN` | `sim` $\rightarrow$ `TRUE`, `não` $\rightarrow$ `FALSE`, vazio $\rightarrow$ `NULL` |
| `data-submissão` | `"data_submissao"` | `TIMESTAMP` | Data de submissão da proposta da 2ª fase |
| `Desafio` | `"Desafio"` | `VARCHAR(255)` | ID do desafio |
| `Email-lider` | `"Email_lider"` | `VARCHAR(255)` | E-mail do líder da proposta |
| `emailEnviado` | `"emailEnviado"` | `BOOLEAN` | Confirmação de e-mail |
| `File1.1` | `"File1_1"` | `TEXT` | Link do documento anexo 1.1 |
| `File1.2` | `"File1_2"` | `TEXT` | Link do documento anexo 1.2 |

---

### 2. DDL - Criação da Tabela `proposta_eita_segunda`

```sql
CREATE TABLE IF NOT EXISTS "proposta_eita_segunda" (
  "id" VARCHAR(255) PRIMARY KEY,
  "data_submissao" TIMESTAMP,
  "data_submissão" TIMESTAMP,
  "Desafio" VARCHAR(255),
  "Desafio_id" VARCHAR(255),
  "Email_lider" VARCHAR(255),
  "emailEnviado" BOOLEAN,
  "File1_1" TEXT, "File1_2" TEXT, "File1_3" TEXT,
  "File2" TEXT, "File3" TEXT, "File4_3" TEXT,
  "File5_1" TEXT, "File5_2" TEXT, "File5_3" TEXT, "File6" TEXT,
  "finalizado" BOOLEAN,
  "proposta_primeira_fase_id" VARCHAR(255),
  "Q1_1" TEXT, "Q1_2" TEXT, "Q1_3" TEXT, "Q2" TEXT, "Q3" TEXT,
  "Q4_1" TEXT[], "Q4_2" TEXT[], "Q4_3" TEXT, "Q5_1" TEXT, "Q5_2" TEXT, "Q5_3" TEXT, "Q6" TEXT, "Q7" TEXT[],
  "resumo_executivo" TEXT,
  "score" NUMERIC(15, 2),
  "Startup_id" VARCHAR(255),
  "é_duplicada" BOOLEAN,
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);
```

---

### 3. DML - Script de Inserção de todos os 10 Registros

```sql
INSERT INTO "proposta_eita_segunda" (
  "id",
  "é_duplicada",
  "data_submissao",
  "Desafio",
  "Email_lider",
  "emailEnviado",
  "File1_1",
  "File1_2",
  "slug"
)
VALUES
  ('prop_eita2_0001', NULL, '2025-09-01 09:48:00', '1741713756342x475094650909622300', 'gabifc_graciano@hotmail.com', NULL, NULL, NULL, 'proposta-eita-segunda-0001'),
  ('prop_eita2_0002', NULL, '2025-09-02 11:58:00', '1741713756342x475094650909622300', 'fred@indigohive.com.br', NULL, NULL, NULL, 'proposta-eita-segunda-0002'),
  ('prop_eita2_0003', NULL, '2025-08-29 13:27:00', '1741715341881x519750575031320600', 'contato@manaca.net.br', NULL, NULL, NULL, 'proposta-eita-segunda-0003'),
  ('prop_eita2_0004', NULL, '2025-08-29 15:44:00', '1741717308549x865975349857747000', 'rodrigo@tcsindustrial.com.br', NULL, NULL, NULL, 'proposta-eita-segunda-0004'),
  ('prop_eita2_0005', NULL, '2025-08-29 16:07:00', '1741717308549x865975349857747000', 'salvador@saveadd.com.br', NULL, NULL, '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1756493830624x401480104606071200/2.1%20MVP.pdf', 'proposta-eita-segunda-0005'),
  ('prop_eita2_0006', NULL, '2025-08-29 16:40:00', '1741717852329x959885049985499100', 'PABLO13012001@GMAIL.COM', NULL, NULL, NULL, 'proposta-eita-segunda-0006'),
  ('prop_eita2_0007', NULL, '2025-08-29 16:31:00', '1741717852329x959885049985499100', 'mizael.correia@gmail.com', NULL, NULL, NULL, 'proposta-eita-segunda-0007'),
  ('prop_eita2_0008', NULL, '2025-09-01 12:28:00', '1741715341881x519750575031320600', 'wectornanime@gmail.com', NULL, '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1756738592824x130283428189013060/horus-prototipo.pdf', NULL, 'proposta-eita-segunda-0008'),
  ('prop_eita2_0009', NULL, '2025-09-02 10:59:00', '1741717852329x959885049985499100', 'silvio@tech3br.com', NULL, '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1756819321796x625641546217425840/tech3-prototipo_telas.pdf', NULL, 'proposta-eita-segunda-0009'),
  ('prop_eita2_0010', NULL, '2025-09-02 12:17:00', '1741713756342x475094650909622300', 'felipecmuniz@gmail.com', NULL, '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1756825777677x450854471970756350/susia-prototipo.pdf', NULL, 'proposta-eita-segunda-0010')
ON CONFLICT ("id") DO UPDATE SET
  "é_duplicada" = EXCLUDED."é_duplicada",
  "data_submissao" = EXCLUDED."data_submissao",
  "Desafio" = EXCLUDED."Desafio",
  "Email_lider" = EXCLUDED."Email_lider",
  "emailEnviado" = EXCLUDED."emailEnviado",
  "File1_1" = EXCLUDED."File1_1",
  "File1_2" = EXCLUDED."File1_2",
  "modified_date" = CURRENT_TIMESTAMP;
```

### 1. Mapeamento de Colunas (CSV Bubble $\rightarrow$ SQL)

| Coluna no CSV (Bubble) | Coluna na Tabela SQL | Tipo SQL | Tratamento Realizado |
| :--- | :--- | :--- | :--- |
| `eixo` | `"eixo"` | `VARCHAR(255)` | Eixo temático do mentor |
| `categorias` | `"categorias"` | `TEXT[]` | Lista de categorias em `TEXT[]` |
| `desafio` | `"desafio"` | `VARCHAR(255)` | ID do desafio associado |
| `proposta` | `"proposta"` | `VARCHAR(255)` | ID da proposta associada |
| `tipo` | `"tipo"` | `VARCHAR(255)` | Tipo do mentor |
| `tipoMentor` | `"tipoMentor"` | `VARCHAR(255)` | Especialidade do mentor |
| `usuario` | `"usuario"` | `VARCHAR(255)` | E-mail / Identificador do usuário |

---

### 2. DDL - Criação da Tabela `Mentor`

```sql
CREATE TABLE IF NOT EXISTS "Mentor" (
  "id" VARCHAR(255) PRIMARY KEY,
  "categorias" TEXT[],
  "desafio" VARCHAR(255),
  "desafio_id" VARCHAR(255),
  "eixo" VARCHAR(255),
  "proposta" VARCHAR(255),
  "proposta_id" VARCHAR(255),
  "tipo" VARCHAR(255),
  "tipoMentor" VARCHAR(255),
  "usuario" VARCHAR(255),
  "usuario_id" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);
```

---

### 3. DML - Script de Inserção de todos os 43 Registros

```sql
INSERT INTO "Mentor" (
  "id",
  "eixo",
  "categorias",
  "desafio",
  "proposta",
  "tipo",
  "tipoMentor",
  "usuario",
  "slug"
)
VALUES
  ('mentor_import_0001', NULL, NULL, '1741713756342x475094650909622300', NULL, NULL, NULL, 'homero@recife.pe.gov.br', 'mentor-import-0001'),
  ('mentor_import_0002', NULL, NULL, '1741713756342x475094650909622300', NULL, NULL, NULL, 'moisesb@recife.pe.gov.br', 'mentor-import-0002'),
  ('mentor_import_0003', NULL, NULL, '1741713756342x475094650909622300', NULL, NULL, NULL, 'gustavo.godoy@recife.pe.gov.br', 'mentor-import-0003'),
  ('mentor_import_0004', NULL, NULL, '1741713756342x475094650909622300', NULL, NULL, NULL, 'rodrigobzrra@gmail.com', 'mentor-import-0004'),
  ('mentor_import_0005', NULL, NULL, '1741715341881x519750575031320600', NULL, NULL, NULL, 'ana.breda@recife.pe.gov.br', 'mentor-import-0005'),
  ('mentor_import_0006', NULL, NULL, '1741715341881x519750575031320600', NULL, NULL, NULL, 'viviane.kawashima@recife.pe.gov.br', 'mentor-import-0006'),
  ('mentor_import_0007', NULL, NULL, '1741717308549x865975349857747000', NULL, NULL, NULL, 'joao.lobo@recife.pe.gov.br', 'mentor-import-0007'),
  ('mentor_import_0008', NULL, NULL, '1741717308549x865975349857747000', NULL, NULL, NULL, 'cesararaujo569@gmail.com', 'mentor-import-0008'),
  ('mentor_import_0009', NULL, NULL, '1741717308549x865975349857747000', NULL, NULL, NULL, 'adriana.figueira@recife.pe.gov.br', 'mentor-import-0009'),
  ('mentor_import_0010', NULL, NULL, '1741717852329x959885049985499100', NULL, NULL, NULL, 'fernandosouza@recife.pe.gov.br', 'mentor-import-0010'),
  ('mentor_import_0011', NULL, NULL, '1741717852329x959885049985499100', NULL, NULL, NULL, 'rafael.paula@recife.pe.gov.br', 'mentor-import-0011'),
  ('mentor_import_0012', NULL, NULL, '1741717852329x959885049985499100', NULL, NULL, NULL, 'oburegio@gmail.com', 'mentor-import-0012'),
  ('mentor_import_0013', NULL, NULL, '1741717308549x865975349857747000', NULL, NULL, NULL, 'lauracaldasm@gmail.com', 'mentor-import-0013'),
  ('mentor_import_0014', NULL, NULL, '1741713756342x475094650909622300', NULL, NULL, NULL, 'vieira.anaines@gmail.com', 'mentor-import-0014'),
  ('mentor_import_0015', NULL, NULL, '1741717852329x959885049985499100', NULL, NULL, NULL, 'dalmario.telecom@gmail.com', 'mentor-import-0015'),
  ('mentor_import_0016', NULL, NULL, '1741715341881x519750575031320600', NULL, NULL, NULL, 'algdb@hotmail.com', 'mentor-import-0016'),
  ('mentor_import_0017', NULL, NULL, '1741715341881x519750575031320600', NULL, NULL, NULL, 'tmendes00@gmail.com', 'mentor-import-0017'),
  ('mentor_import_0018', NULL, NULL, '1741717852329x959885049985499100', NULL, NULL, NULL, 'maia.tito.professor@gmail.com', 'mentor-import-0018'),
  ('mentor_import_0019', NULL, NULL, '1741715341881x519750575031320600', NULL, NULL, NULL, 'diogo.henriquepaz@gmail.com', 'mentor-import-0019'),
  ('mentor_import_0020', NULL, NULL, '1741717308549x865975349857747000', NULL, NULL, NULL, 'prof.eder.leao@gmail.com', 'mentor-import-0020'),
  ('mentor_import_0021', NULL, NULL, NULL, NULL, 'PremioPrimeiraFase', NULL, 'pedrocasefilho2208@gmail.com', 'mentor-import-0021'),
  ('mentor_import_0022', NULL, NULL, NULL, NULL, 'PremioPrimeiraFase', NULL, 'evisson.lucena@recife.pe.gov.br', 'mentor-import-0022'),
  ('mentor_import_0023', NULL, NULL, NULL, NULL, 'PremioPrimeiraFase', NULL, 'hellen-ssilva@hotmail.com', 'mentor-import-0023'),
  ('mentor_import_0024', NULL, NULL, NULL, NULL, 'PremioPrimeiraFase', NULL, 'rafael.paula@recife.pe.gov.br', 'mentor-import-0024'),
  ('mentor_import_0025', NULL, NULL, NULL, NULL, 'PremioPrimeiraFase', NULL, 'adeildo.barros@recife.pe.gov.br', 'mentor-import-0025'),
  ('mentor_import_0026', NULL, NULL, NULL, NULL, 'PremioPrimeiraFase', NULL, 'tiago.teixeira@recife.pe.gov.br', 'mentor-import-0026'),
  ('mentor_import_0027', NULL, NULL, NULL, NULL, 'PremioPrimeiraFase', NULL, 'cesararaujo569@gmail.com', 'mentor-import-0027'),
  ('mentor_import_0028', 'Inovação Empresarial', ARRAY['Inovação empresarial', 'Inovação ESG'], NULL, NULL, 'PremioSegundaFase', NULL, 'luizsalmeron@gmail.com', 'mentor-import-0028'),
  ('mentor_import_0029', 'Inovação Empresarial', ARRAY['Inovação empresarial', 'Inovação ESG'], NULL, NULL, 'PremioSegundaFase', NULL, 'juliana.melo@aeptecba.org.br', 'mentor-import-0029'),
  ('mentor_import_0030', 'Startups Inovadoras', ARRAY['Startup Ascenção', 'Startup Tração', 'Startup conectada com a cidade'], NULL, NULL, 'PremioSegundaFase', NULL, 'qrzricardo@gmail.com', 'mentor-import-0030'),
  ('mentor_import_0031', 'Inovação Social', ARRAY['Empreendedorismo Social', 'Letramento Digital'], NULL, NULL, 'PremioSegundaFase', NULL, 'daniela.estevam@gmail.com', 'mentor-import-0031'),
  ('mentor_import_0032', 'Inovação Social', ARRAY['Empreendedorismo Social', 'Letramento Digital'], NULL, NULL, 'PremioSegundaFase', NULL, 'fabio.moraes@ufabc.edu.br', 'mentor-import-0032'),
  ('mentor_import_0033', 'Inovação Social', ARRAY['Empreendedorismo Social', 'Letramento Digital'], NULL, NULL, 'PremioSegundaFase', NULL, 'fabiana.a.pereira@rfb.gov.br', 'mentor-import-0033'),
  ('mentor_import_0034', 'Inovação Científica', ARRAY['Pesquisa & Extensão Inovadora', 'Instituição de Pesquisa/Extensão Inovadora', 'Deeptech destaque'], NULL, NULL, 'PremioSegundaFase', NULL, 'rossana.choze@ucb.br', 'mentor-import-0034'),
  ('mentor_import_0035', 'Inovação Científica', ARRAY['Pesquisa & Extensão Inovadora', 'Instituição de Pesquisa/Extensão Inovadora', 'Deeptech destaque'], NULL, NULL, 'PremioSegundaFase', NULL, 'izadora.mattiello@wylinka.org.br', 'mentor-import-0035'),
  ('mentor_import_0036', 'Inovação Científica', ARRAY['Pesquisa & Extensão Inovadora', 'Instituição de Pesquisa/Extensão Inovadora', 'Deeptech destaque'], NULL, NULL, 'PremioSegundaFase', NULL, 'julianadesouzacorrea@gmail.com', 'mentor-import-0036'),
  ('mentor_import_0037', 'Inovação Empresarial', ARRAY['Inovação empresarial', 'Inovação ESG'], NULL, NULL, 'PremioSegundaFase', NULL, 'lima.mayaracosta@gmail.com', 'mentor-import-0037'),
  ('mentor_import_0038', 'Startups Inovadoras', ARRAY['Startup Ascenção', 'Startup Tração', 'Startup conectada com a cidade'], NULL, NULL, 'PremioSegundaFase', NULL, 'djenifer.macedo@southsummitbrazil.com', 'mentor-import-0038'),
  ('mentor_import_0039', NULL, NULL, '1762279000179x559178544360194050', NULL, 'mentor', 'Tutor', 'gabrielchamie@gmail.com', 'mentor-import-0039'),
  ('mentor_import_0040', NULL, NULL, '1762279000179x559178544360194050', NULL, 'mentor', 'Tutor', 'cesararaujo569@gmail.com', 'mentor-import-0040'),
  ('mentor_import_0041', NULL, NULL, '1765373615004x773784994777661400', NULL, 'mentor', 'Tutor', 'gabrielchamie@gmail.com', 'mentor-import-0041'),
  ('mentor_import_0042', NULL, NULL, '1765373615004x773784994777661400', NULL, 'mentor', 'Tutor', 'pedrocasefilho2208@gmail.com', 'mentor-import-0042'),
  ('mentor_import_0043', NULL, NULL, '1765373615004x773784994777661400', NULL, 'mentor', 'Tutor', 'cesararaujo569@gmail.com', 'mentor-import-0043')
ON CONFLICT ("id") DO UPDATE SET
  "eixo" = EXCLUDED."eixo",
  "categorias" = EXCLUDED."categorias",
  "desafio" = EXCLUDED."desafio",
  "proposta" = EXCLUDED."proposta",
  "tipo" = EXCLUDED."tipo",
  "tipoMentor" = EXCLUDED."tipoMentor",
  "usuario" = EXCLUDED."usuario",
  "modified_date" = CURRENT_TIMESTAMP;
```

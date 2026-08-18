### 1. Mapeamento de Colunas (CSV Bubble $\rightarrow$ SQL)

| Coluna no CSV (Bubble) | Coluna na Tabela SQL | Tipo SQL | Tratamento Realizado |
| :--- | :--- | :--- | :--- |
| `anexos` | `"anexos"` | `TEXT[]` | Links do CDN Bubble convertidos para Array nativo (`TEXT[]`) |
| `id_submissao_centelha` | `"id_submissao_centelha"` | `TEXT` | Links e identificadores da plataforma Centelha preservados |
| `resolvedor` | `"resolvedor"` | `TEXT` | Nome/Título do projeto ou iniciativa |
| `talento` | `"talento"` | `VARCHAR(255)` | E-mail do talento/participante |
| `Creation Date` | `"created_date"` | `TIMESTAMP` | Convertido de `Apr 8, 2026 12:31 pm` para `2026-04-08 12:31:00` |
| `Modified Date` | `"modified_date"` | `TIMESTAMP` | Convertido de `Apr 8, 2026 12:31 pm` para `2026-04-08 12:31:00` |
| `Slug` | `"slug"` | `VARCHAR(255)` | Gerado de forma consistente caso vazio |

---

### 2. DDL - Criação da Tabela `Centelha`

```sql
CREATE TABLE IF NOT EXISTS "Centelha" (
  "id" VARCHAR(255) PRIMARY KEY,
  "anexos" TEXT[],
  "id_submissao_centelha" TEXT,
  "resolvedor" TEXT,
  "resolvedor_id" VARCHAR(255),
  "talento" VARCHAR(255),
  "talento_id" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);
```

---

### 3. DML - Script de Inserção de todos os 43 Registros

```sql
INSERT INTO "Centelha" (
  "id",
  "anexos",
  "id_submissao_centelha",
  "resolvedor",
  "talento",
  "created_date",
  "modified_date",
  "slug"
)
VALUES
  ('centelha_001', ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1775662258709x217892817436661440/Pitch%20Hawk%20App_PPT_Edital%20CENTELHA_REV.01_DEZ.2025.pdf'], 'https://pe.programacentelha.com.br/es1/ideia/imprimir/hawk-app-a-evolucao-digital-para-gestao-de-projetos-e-obras', 'Hawk App: a evolução digital para gestão de projetos e obras', NULL, '2026-04-08 12:31:00', '2026-04-08 12:31:00', 'centelha-submissao-001'),
  ('centelha_002', NULL, 'https://pe.programacentelha.com.br/es1/ideia/beebip-mobilidade-escolar-segura-e-sustentavel', NULL, 'filipe@soulmarca.com.br', '2026-04-08 15:06:00', '2026-04-08 15:06:00', 'centelha-submissao-002'),
  ('centelha_003', ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1775675370438x849026398715985200/Certificado%20de%20Participa%C3%A7%C3%A3o%20Fase%201%20-%20Programa%20Centelha%203%20-%20Guilhermevin%C3%ADcius%20C%C3%A9sar%20Cavalcane.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1775675390873x806565523001637200/Programa%20Centelha%20_%20PE%20-%20CENA%20-%20CENTRO%20DE%20EST%C3%8DMULO%20A%20NOVOS%20ARTISTAS.pdf'], 'https://pe.programacentelha.com.br/es1/projeto/cena-centro-de-estimulo-a-novos-artistas', 'CENA - CENTRO DE ESTÍMULO A NOVOS ARTISTAS', NULL, '2026-04-08 16:10:00', '2026-04-08 16:10:00', 'centelha-submissao-003'),
  ('centelha_004', ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1775676030182x664319818340017700/Programa%20Centelha%20_%20PE%20-%20CENA%20-%20CENTRO%20DE%20EST%C3%8DMULO%20A%20NOVOS%20ARTISTAS.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1775676033080x443341944288601100/Certificado%20de%20Participa%C3%A7%C3%A3o%20Fase%201%20-%20Programa%20Centelha%203%20-%20Guilhermevin%C3%ADcius%20C%C3%A9sar%20Cavalcane.pdf'], 'https://pe.programacentelha.com.br/es1/projeto/cena-centro-de-estimulo-a-novos-artistas', 'CENA - CENTRO DE ESTÍMULO A NOVOS ARTISTAS', NULL, '2026-04-08 16:20:00', '2026-04-08 16:20:00', 'centelha-submissao-004'),
  ('centelha_005', ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1775693189315x170039246859255740/Programa%20Centelha%20%7C%20PE%20-%20NELLIA%20-%20Assistente%20inteligente%20de%20Consult%C3%B3rio%20para%20Psi%203.pdf'], 'Não localizado', 'NELLIA', 'ornelliamenezes@hotmail.com', '2026-04-08 21:08:00', '2026-04-08 21:08:00', 'centelha-submissao-005'),
  ('centelha_006', ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1775730097033x940587011513107600/0_Centelha-PE-3_Lista-Final-de-Aprovadas-da-Fase-1_24.03.2026-1.pdf'], '6', 'ENERGIA QUE CONECA', 'ilanakssantos@gmail.com', '2026-04-09 07:21:00', '2026-04-09 07:21:00', 'centelha-submissao-006'),
  ('centelha_007', NULL, 'N/A', 'Patternarium', 'amanda.ferreira@gmail.com', '2026-04-09 09:20:00', '2026-04-09 09:20:00', 'centelha-submissao-007'),
  ('centelha_008', NULL, 'Patternarium - Marketplace de estampas para o setor têxtil', NULL, NULL, '2026-04-09 09:25:00', '2026-04-09 09:25:00', 'centelha-submissao-008'),
  ('centelha_009', ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1775743055985x287923531811788320/Programa%20Centelha%20_%20PE%20-%20A%20Casa%20Resiliente_%20Arquitetura%20e%20inova%C3%A7%C3%A3o%20para%20moradias%20resilientes_%20%281%29.pdf'], 'https://pe.programacentelha.com.br/es1/ideia/a-casa-resiliente-arquitetura-e-inovacao-para-moradias-resilientes', 'A Casa Resiliente: Arquitetura e inovação para moradias resilientes.', 'jairolimafilho@gmail.com', '2026-04-09 11:07:00', '2026-04-09 11:07:00', 'centelha-submissao-009'),
  ('centelha_010', ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1775754919726x905688964813615100/_Din%C3%A1%20Inclui.pptx'], 'https://pe.programacentelha.com.br/es1/ideia/dina-treinamentos-formacao-profissional-com-acompanhamento', NULL, 'dinatreinamentos@gmail.com', '2026-04-09 14:15:00', '2026-04-09 14:15:00', 'centelha-submissao-010'),
  ('centelha_011', NULL, NULL, NULL, NULL, '2026-04-10 08:43:00', '2026-04-10 08:43:00', 'centelha-submissao-011'),
  ('centelha_012', NULL, NULL, NULL, NULL, '2026-04-10 08:49:00', '2026-04-10 08:49:00', 'centelha-submissao-012'),
  ('centelha_013', NULL, NULL, NULL, NULL, '2026-04-10 09:53:00', '2026-04-10 09:53:00', 'centelha-submissao-013'),
  ('centelha_014', NULL, NULL, NULL, 'ochoaalvaro@recife.ifpe.edu.br', '2026-04-10 13:10:00', '2026-04-10 13:10:00', 'centelha-submissao-014'),
  ('centelha_015', NULL, NULL, NULL, 'livia.lemos@facepe.br', '2026-04-10 14:02:00', '2026-04-10 14:02:00', 'centelha-submissao-015'),
  ('centelha_016', NULL, NULL, NULL, 'miriam.kezia@ufpe.br', '2026-04-10 14:48:00', '2026-04-10 14:48:00', 'centelha-submissao-016'),
  ('centelha_017', NULL, NULL, NULL, 'edhyvone.araujo@gmail.com', '2026-04-10 16:04:00', '2026-04-10 16:04:00', 'centelha-submissao-017'),
  ('centelha_018', NULL, NULL, NULL, 'thaisiupimkt@gmail.com', '2026-04-10 17:02:00', '2026-04-10 17:02:00', 'centelha-submissao-018'),
  ('centelha_019', NULL, NULL, NULL, NULL, '2026-04-10 17:45:00', '2026-04-10 17:45:00', 'centelha-submissao-019'),
  ('centelha_020', NULL, NULL, NULL, NULL, '2026-04-10 17:45:00', '2026-04-10 17:45:00', 'centelha-submissao-020'),
  ('centelha_021', NULL, NULL, NULL, 'alexandre.lima@retechmais.com.br', '2026-04-10 18:52:00', '2026-04-10 18:52:00', 'centelha-submissao-021'),
  ('centelha_022', NULL, NULL, NULL, 'estervrl06@gmail.com', '2026-04-12 15:50:00', '2026-04-12 15:50:00', 'centelha-submissao-022'),
  ('centelha_023', NULL, NULL, NULL, NULL, '2026-04-12 15:52:00', '2026-04-12 15:52:00', 'centelha-submissao-023'),
  ('centelha_024', NULL, NULL, NULL, NULL, '2026-04-13 10:15:00', '2026-04-13 10:15:00', 'centelha-submissao-024'),
  ('centelha_025', NULL, NULL, NULL, 'cececec@gmail.com', '2026-04-13 10:43:00', '2026-04-13 10:43:00', 'centelha-submissao-025'),
  ('centelha_026', NULL, NULL, NULL, NULL, '2026-04-13 11:30:00', '2026-04-13 11:30:00', 'centelha-submissao-026'),
  ('centelha_027', NULL, NULL, NULL, 'startgosolutions@gmail.com', '2026-04-13 11:42:00', '2026-04-13 11:42:00', 'centelha-submissao-027'),
  ('centelha_028', NULL, NULL, NULL, 'rpss1@discente.ifpe.edu.br', '2026-04-13 14:36:00', '2026-04-13 14:36:00', 'centelha-submissao-028'),
  ('centelha_029', NULL, NULL, NULL, 'joaohenriquessantos43@gmail.com', '2026-04-13 14:37:00', '2026-04-13 14:37:00', 'centelha-submissao-029'),
  ('centelha_030', NULL, NULL, NULL, 'tyuioiuyiuoyouiyiuo@asdasda.com', '2026-04-14 11:28:00', '2026-04-14 11:28:00', 'centelha-submissao-030'),
  ('centelha_031', NULL, NULL, NULL, '11111@gmail.com.br', '2026-04-14 11:33:00', '2026-04-14 11:33:00', 'centelha-submissao-031'),
  ('centelha_032', NULL, NULL, NULL, 'ofig.lucas@gmail.com', '2026-04-14 11:35:00', '2026-04-14 11:35:00', 'centelha-submissao-032'),
  ('centelha_033', NULL, NULL, NULL, 'asdfasdf@asdfasdf.com', '2026-04-14 11:40:00', '2026-04-14 11:40:00', 'centelha-submissao-033'),
  ('centelha_034', NULL, NULL, NULL, 'lourencolpb@hotmail.com', '2026-04-15 00:43:00', '2026-04-15 00:43:00', 'centelha-submissao-034'),
  ('centelha_035', NULL, NULL, NULL, 'ricardo@florainsights.com.br', '2026-04-16 03:32:00', '2026-04-16 03:32:00', 'centelha-submissao-035'),
  ('centelha_036', NULL, NULL, NULL, NULL, '2026-04-16 18:07:00', '2026-04-16 18:07:00', 'centelha-submissao-036'),
  ('centelha_037', NULL, NULL, NULL, NULL, '2026-04-17 15:34:00', '2026-04-17 15:34:00', 'centelha-submissao-037'),
  ('centelha_038', NULL, NULL, NULL, NULL, '2026-04-17 15:35:00', '2026-04-17 15:35:00', 'centelha-submissao-038'),
  ('centelha_039', NULL, NULL, NULL, 'lindomaracristina16@gmail.com', '2026-04-17 20:00:00', '2026-04-17 20:00:00', 'centelha-submissao-039'),
  ('centelha_040', NULL, NULL, NULL, NULL, '2026-05-16 17:49:00', '2026-05-16 17:49:00', 'centelha-submissao-040'),
  ('centelha_041', NULL, NULL, NULL, NULL, '2026-05-24 18:23:00', '2026-05-24 18:23:00', 'centelha-submissao-041'),
  ('centelha_042', NULL, NULL, NULL, NULL, '2026-06-09 18:44:00', '2026-06-09 18:44:00', 'centelha-submissao-042'),
  ('centelha_043', NULL, NULL, NULL, 'salesmbrunof@gmail.com', '2026-06-25 11:31:00', '2026-06-25 11:31:00', 'centelha-submissao-043')
ON CONFLICT ("id") DO UPDATE SET
  "anexos" = EXCLUDED."anexos",
  "id_submissao_centelha" = EXCLUDED."id_submissao_centelha",
  "resolvedor" = EXCLUDED."resolvedor",
  "talento" = EXCLUDED."talento",
  "created_date" = EXCLUDED."created_date",
  "modified_date" = EXCLUDED."modified_date",
  "slug" = EXCLUDED."slug";
```

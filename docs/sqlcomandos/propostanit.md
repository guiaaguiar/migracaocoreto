### 1. Mapeamento de Colunas (CSV Bubble $\rightarrow$ SQL)

| Coluna no CSV (Bubble) | Coluna na Tabela SQL | Tipo SQL | Tratamento Realizado |
| :--- | :--- | :--- | :--- |
| `cnpj` | `"cnpj"` | `VARCHAR(255)` | CNPJ da instituição |
| `declaração-compromisso` | `"declaracao_compromisso"` | `TEXT` | Links da declaração de compromisso |
| `email-lider` | `"email_lider"` | `VARCHAR(255)` | E-mail do líder proponente |
| `email-instituição` | `"email_instituicao"` | `VARCHAR(255)` | E-mail institucional |
| `instituição` | `"instituicao"` | `VARCHAR(255)` | Razão social / Nome da ICT |
| `nome-lider` | `"nome_lider"` | `VARCHAR(255)` | Nome do líder |
| `site` | `"site"` | `VARCHAR(255)` | Website |

---

### 2. DDL - Criação da Tabela `proposta_nit`

```sql
CREATE TABLE IF NOT EXISTS "proposta_nit" (
  "id" VARCHAR(255) PRIMARY KEY,
  "cnpj" VARCHAR(255),
  "declaracao_compromisso" TEXT,
  "declaração_compromisso" TEXT,
  "email_instituicao" VARCHAR(255),
  "email_instituição" VARCHAR(255),
  "email_lider" VARCHAR(255),
  "instituicao" VARCHAR(255),
  "instituição" VARCHAR(255),
  "nome_lider" VARCHAR(255),
  "site" VARCHAR(255),
  "telefone_lider" NUMERIC(15, 2),
  "time" TEXT[],
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);
```

---

### 3. DML - Script de Inserção de todos os 14 Registros

```sql
INSERT INTO "proposta_nit" (
  "id",
  "cnpj",
  "declaracao_compromisso",
  "email_lider",
  "email_instituicao",
  "instituicao",
  "nome_lider",
  "site",
  "slug"
)
VALUES
  ('prop_nit_0001', '36220496000156', ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1743203065921x150372482433032350/RELEASE%20%E2%80%93%20MC%20TDR%20MARCONE%20B.BOY%20.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1743203315618x351667424471500350/PROJETO%20RADIO%20A%20VOZ%20DO%20POVO%20DE%20TRES%20CARNEIROS.pdf'], 'marconegui235@gmail.com', 'marconegui235@gmail.com', 'Radio a Voz do Povo de Três Carneiros', 'Marcone Guilherme da Silva', NULL, 'proposta-nit-0001'),
  ('prop_nit_0002', '2608755003890', ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1744302315884x209131141596043070/DECLARACAO_DE_COMPROMISSO_NIT_assinado.pdf'], 'luiz.mneto@estacio.br', 'luiz.mneto@estacio.br', 'Centro Universitário Estácio do Recife – Estácio Recife', 'luiz Martins Pereira Neto', NULL, 'proposta-nit-0002'),
  ('prop_nit_0003', '13013263006118', ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1744324458415x777336718744031500/DECLARACAO%20DE%20COMPROMISSO%20NIT00546520250410193401.pdf'], 'karina_organa@pe.unit.br', 'karina_organa@pe.unit.br', 'CENTRO UNIVERSITÁRIO TIRADENTES DE PERNAMBUCO - UNIT PE', 'KARINA ORGANA DA PAZ', 'https://pe.unit.br/', 'proposta-nit-0003'),
  ('prop_nit_0004', '2,32312323123312e+15', ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1744651512040x721777426785266600/ChatGPT%20Image%209%20de%20abr.%20de%202025%2C%2010_21_19.png'], 'gabrielchamie@gmail.com', 'gabrielchamie@gmail.com', 'uikks', 'Gavs', 'gabrielchamie@gmail.com', 'proposta-nit-0004'),
  ('prop_nit_0005', '3681572000171', ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1744661739764x432689111309996400/Modelo_declaracao_-_incubacao_de_NITs_assinado.pdf'], 'elder.msilva@unifbv.br', 'elder.msilva@unifbv.edu.br', 'CENTRO UNIVERSITÁRIO UNIFBV WYDEN', 'ELDER MARANHÃO RODRIGUES DA SILVA', 'https://www.wyden.com.br/unidades/unifbv', 'proposta-nit-0005'),
  ('prop_nit_0006', '24134488000108', ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1744810938667x347795921845393400/Declara%C3%A7%C3%A3o%20-%20STDCT-PCR%20-%20Programa%20de%20Incuba%C3%A7%C3%A3o%20de%20NITs%20-%20PROPESQI.pdf'], 'caroline.bona@ufpe.br', 'secretariadine.propesqi@ufpe.br', 'Universidade Federal de Pernambuco', 'Caroline Bona', 'www.ufpe.br', 'proposta-nit-0006'),
  ('prop_nit_0007', '10767239000307', NULL, 'ricardoalves@recife.ifpe.edu.br', 'ricardoalves@recife.ifpe.edu.br', 'RICARDO LUIS ALVES DA SILVA', 'RICARDO LUIS ALVES DA SILVA', 'www.ifpe.edu.br', 'proposta-nit-0007'),
  ('prop_nit_0008', '4986320003724', ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1745011675346x737466654933576200/Declara%C3%A7%C3%A3o_.pdf'], 'mlara.calado@gmail.com', 'mlara.calado@gmail.com', 'Uninassau-Recife', 'Maria de Lara Moutta Calado de Oliveira', 'https://www.uninassau.edu.br/', 'proposta-nit-0008'),
  ('prop_nit_0009', '10847721000195', NULL, 'tailson.mariano@unicap.br', 'tailson.mariano@unicap.br', 'Universidade Católica de Pernambuco', 'Tailson Mariano', 'https://portal.unicap.br/', 'proposta-nit-0009'),
  ('prop_nit_0010', '11022597000191', ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1745205687727x851568411372882300/SEI_GOVPE%20-%2039336622%20-%20Termo%20de%20Outorga%20UPE_UFRPE.pdf'], 'marleny.gerbi@upe.br', 'marleny.gerbi@upe.br', 'Fundação Universidade de Pernambuco - UPE', 'Marleny Elizabeth Márquez de Martínez Gerbi', 'www.upe.br', 'proposta-nit-0010'),
  ('prop_nit_0011', '1203327000123', NULL, 'hob@cesar.org.br', 'contato@cesar.org.br', 'Cesar School', 'Helda Barros', 'https://www.cesar.org.br/', 'proposta-nit-0011'),
  ('prop_nit_0012', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'proposta-nit-0012'),
  ('prop_nit_0013', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'proposta-nit-0013'),
  ('prop_nit_0014', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'proposta-nit-0014')
ON CONFLICT ("id") DO UPDATE SET
  "cnpj" = EXCLUDED."cnpj",
  "declaracao_compromisso" = EXCLUDED."declaracao_compromisso",
  "email_lider" = EXCLUDED."email_lider",
  "email_instituicao" = EXCLUDED."email_instituicao",
  "instituicao" = EXCLUDED."instituicao",
  "nome_lider" = EXCLUDED."nome_lider",
  "site" = EXCLUDED."site",
  "modified_date" = CURRENT_TIMESTAMP;
```

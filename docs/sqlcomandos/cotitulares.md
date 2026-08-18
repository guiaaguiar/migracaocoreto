### 1. Mapeamento de Colunas (CSV Bubble $\rightarrow$ SQL)

| Coluna no CSV (Bubble) | Coluna na Tabela SQL | Tipo SQL | Tratamento Realizado |
| :--- | :--- | :--- | :--- |
| `CPF` | `"CPF"` | `VARCHAR(255)` | CPF do cotitular |
| `data_nascimento` | `"data_nascimento"` | `TIMESTAMP` | Convertido de data Bubble para padrão SQL |
| `estado_civil` | `"estado_civil"` | `VARCHAR(255)` | Estado civil |
| `nacionalidade` | `"nacionalidade"` | `VARCHAR(255)` | Nacionalidade |
| `Nome` | `"Nome"` | `VARCHAR(255)` | Nome completo |
| `Orgao_Expedidor` | `"Orgao_Expedidor"` | `VARCHAR(255)` | Órgão expedidor do documento |
| `Profissão` | `"Profissão"` | `VARCHAR(255)` | Profissão |

---

### 2. DDL - Criação da Tabela `cotitulares`

```sql
CREATE TABLE IF NOT EXISTS "cotitulares" (
  "id" VARCHAR(255) PRIMARY KEY,
  "bairro" VARCHAR(255),
  "cep" VARCHAR(255),
  "cidade" VARCHAR(255),
  "complemento_end" VARCHAR(255),
  "CPF" VARCHAR(255),
  "data_nascimento" TIMESTAMP,
  "email" VARCHAR(255),
  "endereco" VARCHAR(255),
  "estado" VARCHAR(255),
  "estado_civil" VARCHAR(255),
  "nacionalidade" VARCHAR(255),
  "Nome" VARCHAR(255),
  "numero" VARCHAR(255),
  "Orgao_Expedidor" VARCHAR(255),
  "Profissão" VARCHAR(255),
  "RG" VARCHAR(255),
  "submissao_id" VARCHAR(255),
  "whatsapp" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);
```

---

### 3. DML - Script de Inserção de todos os 17 Registros

```sql
INSERT INTO "cotitulares" (
  "id",
  "CPF",
  "data_nascimento",
  "estado_civil",
  "nacionalidade",
  "Nome",
  "Orgao_Expedidor",
  "Profissão",
  "slug"
)
VALUES
  ('cotit_import_0001', 'fwefwefwfw', '2004-07-10 00:00:00', 'Casado(a)', 'eqweqweqwew', 'fewfwefwf', 'ewfwefwef', 'qweqwewqeqw', 'cotitular-import-0001'),
  ('cotit_import_0002', '11402772432', '2005-01-28 01:00:00', 'Solteiro(a)', 'Brasileiro', 'Guilherme Alves de Albuquerque Melo Filho', 'SDS', 'Pentester', 'cotitular-import-0002'),
  ('cotit_import_0003', '04662875420', '1984-08-23 00:00:00', 'Casado(a)', 'Brasileiro', 'Tarcísio Fernandes Domingos da Silva', 'SDS/PE', 'Administrador de Empresa', 'cotitular-import-0003'),
  ('cotit_import_0004', '04662875420', '1984-08-23 00:00:00', 'Casado(a)', 'Brasileiro', 'Tarcísio Fernandes Domingos da Silva', 'SDS/PE', 'Administrador de Empresa', 'cotitular-import-0004'),
  ('cotit_import_0005', '027.873.214-37', '1978-01-03 00:00:00', 'Casado(a)', 'BRASILEIRA', 'FABÍOLA PATRICIA FERREIRA', 'SSP/PE', 'FISIOTERAPEUTA', 'cotitular-import-0005'),
  ('cotit_import_0006', '129.079.054-06', '2000-12-08 00:00:00', 'Solteiro(a)', 'Brasileira', 'Lucas da Silva Pereira', 'SSP/PE', 'Desenvolvedor', 'cotitular-import-0006'),
  ('cotit_import_0007', '10989782425', '2003-12-07 00:00:00', 'Solteiro(a)', 'Brasileira', 'Raul César Costa da Silva', 'SDS/PE', 'Desenvolvedor', 'cotitular-import-0007'),
  ('cotit_import_0008', '097.758.754-12', '1999-06-21 00:00:00', 'Solteiro(a)', 'Brasileira', 'Geovane José da Silva Júnior', 'SDS/PE', 'Desenvolvedor', 'cotitular-import-0008'),
  ('cotit_import_0009', '70998695408', '2000-01-13 00:00:00', 'Solteiro(a)', 'Jan 13, 2000 12:00 am', 'Thiago Henrique dos Santos Gomes', 'SDS/PE', 'Desenvolvedor', 'cotitular-import-0009'),
  ('cotit_import_0010', '01389060411', '2002-01-16 00:00:00', 'Solteiro(a)', 'Brasileiro', 'José Danilo Sacramento de Paula', 'SDS/PE', 'Desenvolvedor móbile', 'cotitular-import-0010'),
  ('cotit_import_0011', '70344714446', '2002-02-20 00:00:00', 'Solteiro(a)', 'Brasileiro', 'Victor Guilherme Alves Costa', 'SDS/PE', 'Desenvolvedor backend', 'cotitular-import-0011'),
  ('cotit_import_0012', '057834474-20', '1984-08-24 00:00:00', 'Casado(a)', 'Brasileiro', 'Djanir Berto de Melo', 'SDS/PE', 'Coordenador da Qualidade', 'cotitular-import-0012'),
  ('cotit_import_0013', '095.041.804-85', '2005-03-30 00:00:00', 'Solteiro(a)', 'Brasileiro', 'Guilherme Enrique Frota de França Tapia', 'SDS/PE', 'Estudante', 'cotitular-import-0013'),
  ('cotit_import_0014', '050.149.073-69', '2007-04-24 00:00:00', 'Solteiro(a)', 'Brasileiro', 'Gabriel Lucas de Oliveira Xavier', 'SDS/PE', 'Estudante', 'cotitular-import-0014'),
  ('cotit_import_0015', '715.165.074-44', '2006-01-21 01:00:00', 'Solteiro(a)', 'Brasileiro', 'Samuel Victor de Souza Romão', 'SDS/PE', 'Estudante', 'cotitular-import-0015'),
  ('cotit_import_0016', '705.788.924-05', '1999-01-08 01:00:00', 'Solteiro(a)', 'Brasileiro', 'Leonardo Rafael de Araujo', 'IITB/PE', 'Estudante', 'cotitular-import-0016'),
  ('cotit_import_0017', '175.108.554-62', '2006-12-14 01:00:00', 'Solteiro(a)', 'Dec 14, 2006 12:00 am', 'José Miguel Souza Vasconcelos Leão', 'SDS/PE', 'Estudante', 'cotitular-import-0017')
ON CONFLICT ("id") DO UPDATE SET
  "CPF" = EXCLUDED."CPF",
  "data_nascimento" = EXCLUDED."data_nascimento",
  "estado_civil" = EXCLUDED."estado_civil",
  "nacionalidade" = EXCLUDED."nacionalidade",
  "Nome" = EXCLUDED."Nome",
  "Orgao_Expedidor" = EXCLUDED."Orgao_Expedidor",
  "Profissão" = EXCLUDED."Profissão",
  "modified_date" = CURRENT_TIMESTAMP;
```

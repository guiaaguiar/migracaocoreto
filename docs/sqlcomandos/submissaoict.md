### 1. Mapeamento de Colunas (CSV Bubble $\rightarrow$ SQL)

| Coluna no CSV (Bubble) | Coluna na Tabela SQL | Tipo SQL | Tratamento Realizado |
| :--- | :--- | :--- | :--- |
| `aceite_final` | `"aceite_final"` | `BOOLEAN` | `sim` $\rightarrow$ `TRUE`, `não` $\rightarrow$ `FALSE`, vazio $\rightarrow$ `NULL` |
| `aceite_lgpd` | `"aceite_lgpd"` | `BOOLEAN` | `sim` $\rightarrow$ `TRUE`, `não` $\rightarrow$ `FALSE`, vazio $\rightarrow$ `NULL` |
| `aceite_termos` | `"aceite_termos"` | `BOOLEAN` | `sim` $\rightarrow$ `TRUE`, `não` $\rightarrow$ `FALSE`, vazio $\rightarrow$ `NULL` |
| `aceite_veracidade` | `"aceite_veracidade"` | `BOOLEAN` | `sim` $\rightarrow$ `TRUE`, `não` $\rightarrow$ `FALSE`, vazio $\rightarrow$ `NULL` |
| `anexos_complementares` | `"anexos_complementares"` | `TEXT` | Documentos complementares |
| `anexos` | `"anexos"` | `TEXT[]` | Lista de links em `TEXT[]` |
| `assinatura_nome` | `"assinatura_nome"` | `VARCHAR(255)` | Nome do responsável pela assinatura |

---

### 2. DDL - Criação da Tabela `Submissao_ICT`

```sql
CREATE TABLE IF NOT EXISTS "Submissao_ICT" (
  "id" VARCHAR(255) PRIMARY KEY,
  "aceite_final" BOOLEAN,
  "aceite_lgpd" BOOLEAN,
  "aceite_termos" BOOLEAN,
  "aceite_veracidade" BOOLEAN,
  "anexos" TEXT[],
  "anexos_complementares" TEXT,
  "assinatura_nome" VARCHAR(255),
  "ativo_aceleradora" BOOLEAN,
  "ativo_empreend" BOOLEAN,
  "ativo_incubadora" BOOLEAN,
  "ativo_outro" BOOLEAN,
  "ativo_parque" BOOLEAN,
  "ativos_descricao" TEXT,
  "ato_administrativo" TEXT,
  "cnpj" VARCHAR(255),
  "data_abertura" TIMESTAMP,
  "doc_ato_admin" TEXT,
  "doc_interesse_mercado" TEXT[],
  "doc_sede" TEXT,
  "docs_pi" TEXT[],
  "email_institucional" VARCHAR(255),
  "endereco" TEXT,
  "equipe_nit" TEXT,
  "estrutura_nit" TEXT,
  "horas_dedicacao" NUMERIC(15, 2),
  "mercado_evidencias" TEXT,
  "mercado_modelo" TEXT,
  "mercado_perfil" TEXT,
  "mercado_potencial" TEXT,
  "mercado_setores" TEXT,
  "nit_equipe_horas" TEXT,
  "nit_experiencia" TEXT,
  "nome_nit" VARCHAR(255),
  "oferta_diferenciais" TEXT,
  "oferta_problema" TEXT,
  "oferta_valor" TEXT,
  "pi_outro" BOOLEAN,
  "pi_outro_desc" TEXT,
  "pi_patente" BOOLEAN,
  "pi_situacao" TEXT,
  "pi_software" BOOLEAN,
  "proposta_valor_tecnologia" TEXT,
  "razao_social" VARCHAR(255),
  "resp_cargo" VARCHAR(255),
  "resp_cpf" VARCHAR(255),
  "resp_email" VARCHAR(255),
  "resp_nome" VARCHAR(255),
  "resp_telefone" VARCHAR(255),
  "status" VARCHAR(255),
  "tec_area" TEXT,
  "tec_nome" VARCHAR(255),
  "tec_resumo" TEXT,
  "tec_trl" VARCHAR(255),
  "tec_trl_just" TEXT,
  "telefone" VARCHAR(255),
  "tipo_instituicao" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);
```

---

### 3. DML - Script de Inserção de todos os 16 Registros

```sql
INSERT INTO "Submissao_ICT" (
  "id",
  "aceite_final",
  "aceite_lgpd",
  "aceite_termos",
  "aceite_veracidade",
  "anexos_complementares",
  "anexos",
  "assinatura_nome",
  "slug"
)
VALUES
  ('sub_ict_0001', TRUE, NULL, NULL, NULL, NULL, ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1778193115310x218904176292806340/1-s2.0-S0044848617325942-main.pdf'], NULL, 'sub-ict-0001'),
  ('sub_ict_0002', TRUE, NULL, NULL, NULL, NULL, ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1778797780797x249977734464041700/Thalles%20Journal%20of%20Equine%20Veterinary%20Science%202022.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1778797786865x377206923474260300/Dissertac%CC%A7a%CC%83o%20Thalles%20Moura%20em%2028%20julho%202017.pdf'], NULL, 'sub-ict-0002'),
  ('sub_ict_0003', TRUE, NULL, NULL, NULL, NULL, ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779118566281x142646389385997060/TESE%20Raquel%20Pereira%20Freitas%20da%20Silva.pdf'], NULL, 'sub-ict-0003'),
  ('sub_ict_0004', TRUE, NULL, NULL, NULL, NULL, ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779196853694x883558525261982700/ANEXO_A_Paper%20BABT.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779196853910x585141099456519200/Resumo%20Executivo.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779196855202x465873588312086140/ANEXO_B_Paper%20PoC.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779196855515x302832135786470300/ANEXO_C_Paper%20Electronics.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779196857125x486816987740384700/ANEXO_D_Patente.pdf'], NULL, 'sub-ict-0004'),
  ('sub_ict_0005', TRUE, NULL, NULL, NULL, NULL, ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779198423035x107045074333459660/Oliveira%20et%20al.%20-%202018%20-%20IJBIOMAC.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779198423775x628072602142586400/Artigo%20Imobilizac%CC%A7a%CC%83o%20de%20pectinase.pdf'], NULL, 'sub-ict-0005'),
  ('sub_ict_0006', TRUE, NULL, NULL, NULL, NULL, ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779365591383x881663815673479000/DISSERTAC%CC%A7A%CC%83O%20VIVIANNE%20CAVALCANTI.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779365592192x487705175031528000/1-s2.0-S2211926421001090-main%20%281%29.pdf'], NULL, 'sub-ict-0006'),
  ('sub_ict_0007', TRUE, NULL, NULL, NULL, NULL, ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779366695161x263699455503914940/Documento%20sem%20ti%CC%81tulo%20%286%29.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779366695980x326119393408589060/Relatorio%20FINAL%20-%20Bruna%20-%20PIC.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779366697882x532143828379245700/RELATORIO_FINAL_-_PIBIT_-_SOPHIA_assinado.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779366698000x135324705860927940/Relatorio%20Final%20-%20PIBIC%20-%20Igor.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779366700660x807191259163366700/Deize_Bacry_Rodrigues_dos_Santos_-_Relatorio_de_ES_230929_161829__281_29_assinado-2_%25281%2529_assinado.pdf'], NULL, 'sub-ict-0007'),
  ('sub_ict_0008', TRUE, NULL, NULL, NULL, NULL, ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779378296208x824084203249139600/BR102020004629A2.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779378296379x525177491296253250/Melo.2025.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779378298843x121515434066197470/Santos-Magnabosco%20et%20al.%2C%202022.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779378303162x584384496282205600/EVIDENCIAS.pdf'], NULL, 'sub-ict-0008'),
  ('sub_ict_0009', TRUE, NULL, NULL, NULL, NULL, ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779483324570x117317020236962220/Robespierre%20Animal%20Reproduction%202019.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779483324672x589433932008283100/Robespierre%20Biopreservation%20and%20Biobanking.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779483326557x139896123899128080/Dissertac%CC%A7a%CC%83o%20Robespierre%20Augusto%20Joaquim%20Araujo%20Silva.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779483326621x933270194405236000/Patente%20Robespierre%20RoBR102019010150-4%20Versa%CC%83o%20autor%20pATENTE%20RObespierre.pdf'], NULL, 'sub-ict-0009'),
  ('sub_ict_0010', TRUE, NULL, NULL, NULL, NULL, ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779484586945x200723547293657280/Documento%20sem%20ti%CC%81tulo%20%286%29.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779484588010x858821906302821100/BR%2010%202024%20006252%203%20%28VERSA%CC%83O%20INVENTORES%29.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779484589543x913456201871640300/RELATORIO_FINAL_-_PIBIT_-_SOPHIA_assinado.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779484589395x426100708061293060/Deize_Bacry_Rodrigues_dos_Santos_-_Relatorio_de_ES_230929_161829__281_29_assinado-2_%25281%2529_assinado.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779484590670x265873426921651170/Relatorio%20FINAL%20-%20Bruna%20-%20PIC.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779484591829x132639305819992180/Relatorio%20Final%20-%20PIBIC%20-%20Igor.pdf'], NULL, 'sub-ict-0010'),
  ('sub_ict_0011', TRUE, NULL, NULL, NULL, NULL, ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1779658605039x342322834617180900/Tese%20revisa%CC%83o%20versa%CC%83o%20final%2001.pdf'], NULL, 'sub-ict-0011'),
  ('sub_ict_0012', TRUE, NULL, NULL, NULL, NULL, ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1780064653296x509489689438669400/ifpe_agata_certificado_INPI.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1780064653733x805675512332556900/ifpe_agata_resultado.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1780064655508x156332985634303650/ifpe_agata_artigo.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1780064655741x976962835998000500/ifpe_agata_video.mp4', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1780064657980x149449400469405340/ifpe_agata_TESE.pdf'], NULL, 'sub-ict-0012'),
  ('sub_ict_0013', TRUE, NULL, NULL, NULL, NULL, NULL, NULL, 'sub-ict-0013'),
  ('sub_ict_0014', TRUE, NULL, NULL, NULL, NULL, ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1780322415515x552754030246256100/NanoBP%20-%20Rafael%20Vilela.pdf'], NULL, 'sub-ict-0014'),
  ('sub_ict_0015', TRUE, NULL, NULL, NULL, NULL, ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1780339199418x708368114463163900/Proposta%20Comercial%2004_26%20Software%20CDRF%20-%20Prefeitura%20de%20Olinda.docx.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1780339199760x936534756877141600/CDRF%20x%20Mendes%20e%20Borges%20Assinado.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1780339200858x932712723605170400/233.711-NCCP_CONTRATOLICENCIAMENTO_23076.0236282026-62_CONSORCIO%20DIAGGEO%20-%20Clicksign.pdf', '//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1780339285975x503945325146263550/Doc%2009%20-%20CERTIFICADO_-_BR_51_2021_000666_6-1%20%281%29.pdf'], NULL, 'sub-ict-0015'),
  ('sub_ict_0016', TRUE, NULL, NULL, NULL, NULL, ARRAY['//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1780367306443x153737636220547800/Pitch%20Deck%20NMRec_2026_20260601_215621_0000.pdf'], NULL, 'sub-ict-0016')
ON CONFLICT ("id") DO UPDATE SET
  "aceite_final" = EXCLUDED."aceite_final",
  "aceite_lgpd" = EXCLUDED."aceite_lgpd",
  "aceite_termos" = EXCLUDED."aceite_termos",
  "aceite_veracidade" = EXCLUDED."aceite_veracidade",
  "anexos_complementares" = EXCLUDED."anexos_complementares",
  "anexos" = EXCLUDED."anexos",
  "assinatura_nome" = EXCLUDED."assinatura_nome",
  "modified_date" = CURRENT_TIMESTAMP;
```

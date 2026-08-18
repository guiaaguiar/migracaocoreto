-- =============================================================================
-- TABELAS LEGADAS DO BACKEND CORETO (BUBBLE DATA TYPES -> POSTGRESQL DDL)
-- Total: 75 Tabelas mapeadas com tipos e colunas originais
-- =============================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==========================================
-- 0. User (Usuários Bubble)
-- ==========================================
CREATE TABLE IF NOT EXISTS "User" (
  "id" VARCHAR(255) PRIMARY KEY,
  "activeProfile" VARCHAR(255),
  "CPF" VARCHAR(255),
  "current" VARCHAR(255),
  "isAdmin" BOOLEAN,
  "name" VARCHAR(255),
  "profile" TEXT,
  "tmppass" VARCHAR(255),
  "email" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 1. Academy
-- ==========================================
CREATE TABLE IF NOT EXISTS "Academy" (
  "id" VARCHAR(255) PRIMARY KEY,
  "Anexos" TEXT[],
  "Anterior_id" VARCHAR(255),
  "Categorias" TEXT[],
  "Descricao" TEXT,
  "drive" TEXT,
  "Empresas_relacionadas" TEXT[],
  "icone" TEXT,
  "Nome" VARCHAR(255),
  "podcast" TEXT,
  "Proximo_id" VARCHAR(255),
  "Startups_relacionadas" TEXT[],
  "youtube" TEXT,
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 2. Assessment
-- ==========================================
CREATE TABLE IF NOT EXISTS "Assessment" (
  "id" VARCHAR(255) PRIMARY KEY,
  "Coment" TEXT,
  "Crietereas" TEXT[],
  "Criterea_id" VARCHAR(255),
  "Desafio_id" VARCHAR(255),
  "Eita_id" VARCHAR(255),
  "Hash_Confirmed" VARCHAR(255),
  "Hash_Confirmed_Date" TIMESTAMP,
  "Mentor_id" VARCHAR(255),
  "Proposta_id" VARCHAR(255),
  "Rates" TEXT[],
  "result" NUMERIC(15, 2),
  "Startup_id" VARCHAR(255),
  "Values" TEXT[],
  "Values_critereas" TEXT[],
  "Values_critereas_deleted" TEXT[],
  "Weights" TEXT[],
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 3. AssessmentPremioFaseDois
-- ==========================================
CREATE TABLE IF NOT EXISTS "AssessmentPremioFaseDois" (
  "id" VARCHAR(255) PRIMARY KEY,
  "Coment" TEXT,
  "Crietereas" TEXT[],
  "Inscricao" TEXT,
  "Inscricao_id" VARCHAR(255),
  "Mentor" VARCHAR(255),
  "Mentor_id" VARCHAR(255),
  "Rates" TEXT[],
  "result" NUMERIC(15, 2),
  "Values" TEXT[],
  "Values_critereas" TEXT[],
  "Weights" TEXT[],
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 4. AssessmentPremioFaseUm
-- ==========================================
CREATE TABLE IF NOT EXISTS "AssessmentPremioFaseUm" (
  "id" VARCHAR(255) PRIMARY KEY,
  "Coment" TEXT,
  "Crietereas" TEXT[],
  "Inscricao" TEXT,
  "Inscricao_id" VARCHAR(255),
  "Mentor" VARCHAR(255),
  "Mentor_id" VARCHAR(255),
  "Rates" TEXT[],
  "result" NUMERIC(15, 2),
  "Values" TEXT[],
  "Values_critereas" TEXT[],
  "Weights" TEXT[],
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 5. AssessmentSecondPhase
-- ==========================================
CREATE TABLE IF NOT EXISTS "AssessmentSecondPhase" (
  "id" VARCHAR(255) PRIMARY KEY,
  "Coment" TEXT,
  "Crietereas" TEXT[],
  "data_finalizacao" TIMESTAMP,
  "Desafio_id" VARCHAR(255),
  "Eita_id" VARCHAR(255),
  "finalizado" BOOLEAN,
  "Hash_Confirmed" VARCHAR(255),
  "Hash_Confirmed_Date" TIMESTAMP,
  "Mentor_id" VARCHAR(255),
  "proposta_id" VARCHAR(255),
  "Rates" TEXT[],
  "result" NUMERIC(15, 2),
  "Startup_id" VARCHAR(255),
  "Values" TEXT[],
  "Values_critereas" TEXT[],
  "Weights" TEXT[],
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 6. Atividades_eita
-- ==========================================
CREATE TABLE IF NOT EXISTS "Atividades_eita" (
  "id" VARCHAR(255) PRIMARY KEY,
  "anexo_drive" TEXT,
  "anexo_youtube" TEXT,
  "Arquivos" TEXT[],
  "Descrição" TEXT,
  "Eita_id" VARCHAR(255),
  "FormInteresese" BOOLEAN,
  "Hacker_id" VARCHAR(255),
  "Imagem" TEXT,
  "Nome" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 7. Categoria
-- ==========================================
CREATE TABLE IF NOT EXISTS "Categoria" (
  "id" VARCHAR(255) PRIMARY KEY,
  "Nome" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 8. Centelha
-- ==========================================
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

-- ==========================================
-- 9. Click_Log
-- ==========================================
CREATE TABLE IF NOT EXISTS "Click_Log" (
  "id" VARCHAR(255) PRIMARY KEY,
  "element_clicked" VARCHAR(255),
  "onclick_tracking_date" TIMESTAMP,
  "onclick_tracking_field" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 10. cotitulares
-- ==========================================
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

-- ==========================================
-- 11. Criteria
-- ==========================================
CREATE TABLE IF NOT EXISTS "Criteria" (
  "id" VARCHAR(255) PRIMARY KEY,
  "desafio_id" VARCHAR(255),
  "Description" TEXT,
  "eita_id" VARCHAR(255),
  "name" VARCHAR(255),
  "order" NUMERIC(15, 2),
  "type" VARCHAR(255),
  "weight" NUMERIC(15, 2),
  "weight_value_id" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 12. Cronograma
-- ==========================================
CREATE TABLE IF NOT EXISTS "Cronograma" (
  "id" VARCHAR(255) PRIMARY KEY,
  "data" TIMESTAMP,
  "descrição" TEXT,
  "link" TEXT,
  "ordem" NUMERIC(15, 2),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 13. DestaquesCoretoHome
-- ==========================================
CREATE TABLE IF NOT EXISTS "DestaquesCoretoHome" (
  "id" VARCHAR(255) PRIMARY KEY,
  "Categorias" TEXT[],
  "CTA" VARCHAR(255),
  "descricao" TEXT,
  "Empresa_id" VARCHAR(255),
  "Imagem" TEXT,
  "Link" TEXT,
  "Nome" VARCHAR(255),
  "Tipo" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 14. DisparoWhatsapp
-- ==========================================
CREATE TABLE IF NOT EXISTS "DisparoWhatsapp" (
  "id" VARCHAR(255) PRIMARY KEY,
  "contatos" NUMERIC[],
  "descricao" TEXT,
  "img" TEXT,
  "link" TEXT,
  "titulo" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 15. Edital
-- ==========================================
CREATE TABLE IF NOT EXISTS "Edital" (
  "id" VARCHAR(255) PRIMARY KEY,
  "anexo" TEXT,
  "anexos" TEXT[],
  "ativo" BOOLEAN,
  "banner" TEXT,
  "Desafios" TEXT[],
  "descricao" TEXT,
  "empresa_id" VARCHAR(255),
  "Nome" VARCHAR(255),
  "validade" TIMESTAMP,
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 16. Eita
-- ==========================================
CREATE TABLE IF NOT EXISTS "Eita" (
  "id" VARCHAR(255) PRIMARY KEY,
  "Atividades" TEXT[],
  "CriteriosJulgamento" TEXT,
  "cronograma" TEXT[],
  "Desafios" TEXT[],
  "discord" VARCHAR(255),
  "fases" TEXT[],
  "Interessados" TEXT[],
  "nome" VARCHAR(255),
  "regulamento" TEXT,
  "resultado" TEXT[],
  "Validade" TIMESTAMP,
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 17. eita_criterios
-- ==========================================
CREATE TABLE IF NOT EXISTS "eita_criterios" (
  "id" VARCHAR(255) PRIMARY KEY,
  "desafio_id" VARCHAR(255),
  "nota" VARCHAR(255),
  "titulo" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 18. EmailEita
-- ==========================================
CREATE TABLE IF NOT EXISTS "EmailEita" (
  "id" VARCHAR(255) PRIMARY KEY,
  "Assunto" VARCHAR(255),
  "Eita_id" VARCHAR(255),
  "emails" TEXT,
  "Mensagem" TEXT,
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 19. Entidades
-- ==========================================
CREATE TABLE IF NOT EXISTS "Entidades" (
  "id" VARCHAR(255) PRIMARY KEY,
  "Categoria" VARCHAR(255),
  "Conexões" TEXT[],
  "Descrição" TEXT,
  "Localização" VARCHAR(255),
  "Nome" VARCHAR(255),
  "Tags" TEXT[],
  "Tipo" VARCHAR(255),
  "URL" TEXT,
  "x" NUMERIC(15, 2),
  "y" NUMERIC(15, 2),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 20. Export_startup
-- ==========================================
CREATE TABLE IF NOT EXISTS "Export_startup" (
  "id" VARCHAR(255) PRIMARY KEY,
  "banner" TEXT,
  "Categorias" TEXT[],
  "cnpj" VARCHAR(255),
  "descricao" TEXT,
  "Instagram" VARCHAR(255),
  "Integrantes" TEXT[],
  "Linkedin" VARCHAR(255),
  "links" TEXT,
  "lista_de_interesse" TEXT[],
  "logo" TEXT,
  "material_de_apoio" TEXT,
  "mentores" TEXT[],
  "nome" VARCHAR(255),
  "pitch" TEXT,
  "Site" VARCHAR(255),
  "Site_deleted_id" VARCHAR(255),
  "Time_deleted" TEXT[],
  "unique_id_deleted" VARCHAR(255),
  "Youtube" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 21. exportParticipantes
-- ==========================================
CREATE TABLE IF NOT EXISTS "exportParticipantes" (
  "id" VARCHAR(255) PRIMARY KEY,
  "autoriza_o_uso_de_dados" BOOLEAN,
  "cidade" VARCHAR(255),
  "CPF" VARCHAR(255),
  "curso" VARCHAR(255),
  "data_inscricao" TIMESTAMP,
  "Data_Nascimento" TIMESTAMP,
  "Desafio" TEXT,
  "Descreva_de_que_forma" TEXT,
  "Email" VARCHAR(255),
  "estado" VARCHAR(255),
  "Instituicao" VARCHAR(255),
  "ja_participou_de_algum" BOOLEAN,
  "Nome" VARCHAR(255),
  "pretende_participar_de" BOOLEAN,
  "Telefone" VARCHAR(255),
  "é_universitario" BOOLEAN,
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 22. exportSegundaFase
-- ==========================================
CREATE TABLE IF NOT EXISTS "exportSegundaFase" (
  "id" VARCHAR(255) PRIMARY KEY,
  "categoria" VARCHAR(255),
  "eixo" VARCHAR(255),
  "Nome" VARCHAR(255),
  "nota" NUMERIC(15, 2),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 23. Fase_eita
-- ==========================================
CREATE TABLE IF NOT EXISTS "Fase_eita" (
  "id" VARCHAR(255) PRIMARY KEY,
  "descrição" TEXT,
  "indice" NUMERIC(15, 2),
  "link" TEXT,
  "titulo" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 24. HackerCidadão
-- ==========================================
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

-- ==========================================
-- 25. importStartup
-- ==========================================
CREATE TABLE IF NOT EXISTS "importStartup" (
  "id" VARCHAR(255) PRIMARY KEY,
  "desc" TEXT,
  "nome" VARCHAR(255),
  "pitch" TEXT,
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 26. Iniciativa
-- ==========================================
CREATE TABLE IF NOT EXISTS "Iniciativa" (
  "id" VARCHAR(255) PRIMARY KEY,
  "apoio_buscado" VARCHAR(255),
  "area_tematica" TEXT[],
  "banner" TEXT,
  "case_de_sucesso" TEXT,
  "Categorias" TEXT[],
  "Categorias_de_interesse" TEXT[],
  "cnpj" VARCHAR(255),
  "dedicacao_responsavel" VARCHAR(255),
  "descricao" TEXT,
  "estagio_inovacao" VARCHAR(255),
  "Inativo" BOOLEAN,
  "Instagram" VARCHAR(255),
  "Integrantes" TEXT[],
  "Linkedin" VARCHAR(255),
  "links" TEXT,
  "lista_de_interesse" TEXT[],
  "logo" TEXT,
  "material_de_apoio" TEXT,
  "mentores" TEXT[],
  "nome" VARCHAR(255),
  "objetivo_coreto" TEXT,
  "parceiro_desejado" VARCHAR(255),
  "pitch" TEXT,
  "problema_que_resolve" TEXT,
  "publicos_atendidos" TEXT[],
  "responsavel_email" VARCHAR(255),
  "responsavel_nome" VARCHAR(255),
  "responsavel_papel" VARCHAR(255),
  "responsavel_telefone" VARCHAR(255),
  "resultados_alcancados" TEXT,
  "Site" VARCHAR(255),
  "solução" TEXT,
  "territorio_atuacao" VARCHAR(255),
  "tipo_iniciativa" VARCHAR(255),
  "tipo_instituicao" VARCHAR(255),
  "trl_grupo" VARCHAR(255),
  "vinculo_institucional" BOOLEAN,
  "Youtube" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 27. Inscricao-Nitro-ICT
-- ==========================================
CREATE TABLE IF NOT EXISTS "Inscricao_Nitro_ICT" (
  "id" VARCHAR(255) PRIMARY KEY,
  "aceite_lgpd" BOOLEAN,
  "aceite_termos" BOOLEAN,
  "aceite_veracidade" BOOLEAN,
  "assinatura_nome" VARCHAR(255),
  "ativos_aceleradora" BOOLEAN,
  "ativos_descricao" TEXT,
  "ativos_empreendedorismo" BOOLEAN,
  "ativos_incubadora" BOOLEAN,
  "ativos_outro" BOOLEAN,
  "ativos_parque" BOOLEAN,
  "ato_administrativo" TEXT,
  "cnpj" VARCHAR(255),
  "data_assinatura" TIMESTAMP,
  "doc_ato_administrativo" TEXT,
  "doc_sede" TEXT,
  "docs_propriedade_intel" TEXT[],
  "email_institucional" VARCHAR(255),
  "endereco" TEXT,
  "equipe_nit" TEXT,
  "estrutura_nit" TEXT,
  "horas_dedicacao" NUMERIC(15, 2),
  "local_assinatura" VARCHAR(255),
  "nome_nit" VARCHAR(255),
  "razao_social" VARCHAR(255),
  "resp_cargo" VARCHAR(255),
  "resp_cpf" VARCHAR(255),
  "resp_email" VARCHAR(255),
  "resp_nome" VARCHAR(255),
  "resp_telefone" VARCHAR(255),
  "telefone" VARCHAR(255),
  "tipo_instituicao" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 28. InscriçãoHacker
-- ==========================================
CREATE TABLE IF NOT EXISTS "InscricaoHacker" (
  "id" VARCHAR(255) PRIMARY KEY,
  "areas_de_atuacao" TEXT,
  "atuação" TEXT,
  "autoriza_o_uso_de_dados" BOOLEAN,
  "cidade" VARCHAR(255),
  "cpf" VARCHAR(255),
  "curso" VARCHAR(255),
  "data_inscricao" TIMESTAMP,
  "desafio_id" VARCHAR(255),
  "descreva_de_que_forma" TEXT,
  "enviado_para_planilha" BOOLEAN,
  "estado" VARCHAR(255),
  "instituicao" VARCHAR(255),
  "ja_participou_de_algum" BOOLEAN,
  "nasc" TIMESTAMP,
  "Nome" VARCHAR(255),
  "pretende_participar_de" BOOLEAN,
  "telefone" NUMERIC(15, 2),
  "é_universitario" BOOLEAN,
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 29. Interessado
-- ==========================================
CREATE TABLE IF NOT EXISTS "Interessado" (
  "id" VARCHAR(255) PRIMARY KEY,
  "cidade" VARCHAR(255),
  "comentario" TEXT,
  "iniciativa" TEXT,
  "startup_id" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 30. kanban
-- ==========================================
CREATE TABLE IF NOT EXISTS "kanban" (
  "id" VARCHAR(255) PRIMARY KEY,
  "desafio_id" VARCHAR(255),
  "startup_id" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 31. Local
-- ==========================================
CREATE TABLE IF NOT EXISTS "Local" (
  "id" VARCHAR(255) PRIMARY KEY,
  "data" TIMESTAMP,
  "endereço" TEXT,
  "img" TEXT,
  "maps" TEXT,
  "nome" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 32. Log_Notificações
-- ==========================================
CREATE TABLE IF NOT EXISTS "Log_Notificacoes" (
  "id" VARCHAR(255) PRIMARY KEY,
  "conteudo" TEXT,
  "data" TIMESTAMP,
  "emails" TEXT[],
  "id_Notificação_id" VARCHAR(255),
  "telefone" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 33. Mentor
-- ==========================================
CREATE TABLE IF NOT EXISTS "Mentor" (
  "id" VARCHAR(255) PRIMARY KEY,
  "categorias" TEXT[],
  "desafio_id" VARCHAR(255),
  "eixo" VARCHAR(255),
  "proposta_id" VARCHAR(255),
  "tipo" VARCHAR(255),
  "tipoMentor" VARCHAR(255),
  "usuario_id" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 34. Mentoria
-- ==========================================
CREATE TABLE IF NOT EXISTS "Mentoria" (
  "id" VARCHAR(255) PRIMARY KEY,
  "Data" TIMESTAMP,
  "Desafio_id" VARCHAR(255),
  "Duração" NUMERIC(15, 2),
  "Mentor_id" VARCHAR(255),
  "Perguntas" TEXT[],
  "Startup_id" VARCHAR(255),
  "status" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 35. Netpitch
-- ==========================================
CREATE TABLE IF NOT EXISTS "Netpitch" (
  "id" VARCHAR(255) PRIMARY KEY,
  "indicadores" TEXT,
  "publico" TEXT,
  "recursos" TEXT,
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 36. Newsletter
-- ==========================================
CREATE TABLE IF NOT EXISTS "Newsletter" (
  "id" VARCHAR(255) PRIMARY KEY,
  "ativo" BOOLEAN,
  "informacao" TEXT,
  "titulo" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 37. Nitro
-- ==========================================
CREATE TABLE IF NOT EXISTS "Nitro" (
  "id" VARCHAR(255) PRIMARY KEY,
  "oportunidades" TEXT[],
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 38. Notificações
-- ==========================================
CREATE TABLE IF NOT EXISTS "Notificacoes" (
  "id" VARCHAR(255) PRIMARY KEY,
  "Categorias" TEXT,
  "desafio" TEXT,
  "Descricao" TEXT,
  "Imagem" TEXT,
  "img" TEXT,
  "link" TEXT,
  "tipo" VARCHAR(255),
  "tipos_Iniciativa" TEXT[],
  "Titulo" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 39. Oportunidade
-- ==========================================
CREATE TABLE IF NOT EXISTS "Oportunidade" (
  "id" VARCHAR(255) PRIMARY KEY,
  "Data_limite_para_inscricao" TIMESTAMP,
  "anexos" TEXT[],
  "apoio_oferecido" VARCHAR(255),
  "area_tematica_oportunidade" TEXT[],
  "ativo" BOOLEAN,
  "Categorias" TEXT[],
  "Data_de_abertura_das_inscricoes" TIMESTAMP,
  "Data_prevista_de_inicio" TIMESTAMP,
  "data_abertura" TIMESTAMP,
  "desafio_link_externo" TEXT,
  "desafios_relacionados" TEXT[],
  "dor" TEXT,
  "Editais" TEXT[],
  "em_parceria" TEXT,
  "Empresa_id" VARCHAR(255),
  "Empresas" TEXT[],
  "estagio" VARCHAR(255),
  "estagio_elegivel" TEXT[],
  "imagem" TEXT,
  "indicadores" TEXT,
  "InformaçõesComplementares" TEXT,
  "inscritosHacker" TEXT[],
  "interesse" TEXT[],
  "isProgramaNIT" BOOLEAN,
  "jurados" TEXT[],
  "MaterialApoio" TEXT,
  "mentores" TEXT[],
  "ModuloMentoria" BOOLEAN,
  "nome" VARCHAR(255),
  "objetivosLongoPrazo" TEXT,
  "organizacao_promotora" TEXT,
  "Parceiros_envolvidos" TEXT,
  "Perguntas" TEXT[],
  "premio" TEXT,
  "premioHacker_id" VARCHAR(255),
  "problema" TEXT,
  "programa" TEXT,
  "Propostas" TEXT[],
  "propostas_eita" TEXT[],
  "propostas_hacker" TEXT[],
  "Ranking_preliminar_fase1" TEXT,
  "Ranking_preliminar_fase2" TEXT,
  "resultado_vencedor_hacker" TEXT,
  "resultado_esperado" TEXT,
  "resumo" TEXT,
  "riscos" TEXT,
  "tipo_iniciativa_elegivel" TEXT[],
  "tipo_oportunidade" VARCHAR(255),
  "tipo_organizador" VARCHAR(255),
  "trl_elegivel" TEXT[],
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 40. Oportunidade-crawler
-- ==========================================
CREATE TABLE IF NOT EXISTS "Oportunidade_crawler" (
  "id" VARCHAR(255) PRIMARY KEY,
  "Data_limite_para_inscricao" TIMESTAMP,
  "anexos" TEXT[],
  "apoio_oferecido" VARCHAR(255),
  "area_tematica_oportunidades_list" TEXT[],
  "area_tematica_oportunidades_single" VARCHAR(255),
  "ativo" BOOLEAN,
  "ativo_deleted" BOOLEAN,
  "Categorias" TEXT[],
  "Categorias_deleted" TEXT[],
  "Data_de_abertura_das_inscricoes" TIMESTAMP,
  "Data_prevista_de_inicio" TIMESTAMP,
  "data_abertura" TIMESTAMP,
  "desafio_link_externo" TEXT,
  "desafios_relacionados" TEXT[],
  "dor" TEXT,
  "Editais" TEXT[],
  "em_parceria" BOOLEAN,
  "Empresa_id" VARCHAR(255),
  "Empresa_deleted" TEXT[],
  "Empresas" TEXT[],
  "estagio" VARCHAR(255),
  "estagio_elegivel" TEXT[],
  "estagio_elegivel_deleted" VARCHAR(255),
  "imagem" TEXT,
  "indicadores" TEXT,
  "InformaçõesComplementares" TEXT,
  "inscritosHacker" TEXT[],
  "interesse" TEXT[],
  "isProgramaNIT" BOOLEAN,
  "jurados" TEXT[],
  "MaterialApoio" TEXT,
  "mentores" TEXT[],
  "ModuloMentoria" BOOLEAN,
  "nome" VARCHAR(255),
  "objetivosLongoPrazo" TEXT,
  "organizacao_promotora" TEXT,
  "Organização_deleted_id" VARCHAR(255),
  "Parceiros_envolvidos" TEXT,
  "Perguntas" TEXT[],
  "premio" TEXT,
  "premioHacker_id" VARCHAR(255),
  "premioHacker_deleted" TEXT,
  "problema" TEXT,
  "programa" TEXT,
  "programa_deleted_text" TEXT,
  "programa_deleted_program" VARCHAR(255),
  "programa_deleted_list" TEXT[],
  "Propostas" TEXT[],
  "propostas_eita" TEXT[],
  "propostas_hacker" TEXT[],
  "Ranking_preliminar_fase1" TEXT,
  "Ranking_preliminar_fase2" TEXT,
  "resultado_vencedor_hacker" TEXT,
  "resultado_esperado" TEXT,
  "resumo" TEXT,
  "riscos" TEXT,
  "tipo_iniciativa_elegivel_single" VARCHAR(255),
  "tipo_iniciativa_elegivel_list" TEXT[],
  "tipo_oportunidade" VARCHAR(255),
  "tipo_organizador" VARCHAR(255),
  "trl_elegivel" TEXT[],
  "trl_elegivel_deleted" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 41. Organização
-- ==========================================
CREATE TABLE IF NOT EXISTS "Organizacao" (
  "id" VARCHAR(255) PRIMARY KEY,
  "apoio_buscado" VARCHAR(255),
  "area_tematica" TEXT[],
  "ativo" BOOLEAN,
  "Banner" TEXT,
  "Categorias" TEXT[],
  "cnpj" VARCHAR(255),
  "descricao" TEXT,
  "descricao_curta" TEXT,
  "email" VARCHAR(255),
  "empresa_id" NUMERIC(15, 2),
  "estagio_inovacao" VARCHAR(255),
  "Iniciativas_relacionadas" TEXT[],
  "Instagram" VARCHAR(255),
  "Linkedin" VARCHAR(255),
  "logo" TEXT,
  "nome" VARCHAR(255),
  "objetivo_coreto" TEXT,
  "parceiro_desejado" VARCHAR(255),
  "problema_gerado" TEXT,
  "produtos_servicos" TEXT,
  "publicos_atendidos" TEXT[],
  "responsaveis" TEXT[],
  "resultados_alcancados" TEXT,
  "Site" VARCHAR(255),
  "territorio_principal" VARCHAR(255),
  "tipo" VARCHAR(255),
  "tipo_organizacao" VARCHAR(255),
  "Youtube" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 42. parceriasInovadoras
-- ==========================================
CREATE TABLE IF NOT EXISTS "parceriasInovadoras" (
  "id" VARCHAR(255) PRIMARY KEY,
  "compartilhar_seus_dados" TEXT,
  "departamento_da_IES" TEXT,
  "Documento_de_apresentacao" TEXT,
  "Email_do_projeto" VARCHAR(255),
  "Nome_do_Projeto" VARCHAR(255),
  "possui_suporte_financeiro" TEXT,
  "projeto_se_enquadra_colab" TEXT,
  "projeto_se_enquadra_inov" TEXT,
  "quais_recursos_adicionais_text" TEXT,
  "quais_recursos_adicionais_list" TEXT[],
  "qual_IES_do_projeto" TEXT,
  "qual_BO_que_esta_sendo_atendido" TEXT,
  "Reponsaveis_pelo_projeto" TEXT,
  "Resumo_do_Projeto" TEXT,
  "Secretaria_ou_Orgao_Demandante" TEXT,
  "solucao_alinhada_com_BO" TEXT,
  "surgiu_de_iniciativa_academica" TEXT,
  "telefone_do_representante" VARCHAR(255),
  "Areas_de_Impacto" TEXT[],
  "Areas_de_Impacto_outros" TEXT,
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 43. Perguntas
-- ==========================================
CREATE TABLE IF NOT EXISTS "Perguntas" (
  "id" VARCHAR(255) PRIMARY KEY,
  "anexo" TEXT[],
  "Descricao" TEXT,
  "Respostas" TEXT[],
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 44. PremioHacker
-- ==========================================
CREATE TABLE IF NOT EXISTS "PremioHacker" (
  "id" VARCHAR(255) PRIMARY KEY,
  "desafio_id" VARCHAR(255),
  "descrição" TEXT,
  "valor" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 45. PremioRec
-- ==========================================
CREATE TABLE IF NOT EXISTS "PremioRec" (
  "id" VARCHAR(255) PRIMARY KEY,
  "duplicada" BOOLEAN,
  "eixo" VARCHAR(255),
  "primeiraFase" BOOLEAN,
  "Q1" TEXT, "Q2" TEXT, "Q3" TEXT, "Q4" TEXT, "Q5" TEXT,
  "Q6" TEXT, "Q7" TEXT, "Q8" TEXT, "Q9" TEXT, "Q10" TEXT,
  "Q11" TEXT, "Q12" TEXT, "Q13" TEXT, "Q14" TEXT, "Q15" TEXT,
  "Q16" TEXT[],
  "segundaFase" BOOLEAN,
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 46. PremioRecifeInovacao
-- ==========================================
CREATE TABLE IF NOT EXISTS "PremioRecifeInovacao" (
  "id" VARCHAR(255) PRIMARY KEY,
  "resultado1aFase" TEXT,
  "resultado2aFase" TEXT,
  "validade" TIMESTAMP,
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 47. Programa
-- ==========================================
CREATE TABLE IF NOT EXISTS "Programa" (
  "id" VARCHAR(255) PRIMARY KEY,
  "Nome" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 48. Proposta_Comercializacao
-- ==========================================
CREATE TABLE IF NOT EXISTS "Proposta_Comercializacao" (
  "id" VARCHAR(255) PRIMARY KEY,
  "data_criacao" TIMESTAMP,
  "decl_compromisso" BOOLEAN,
  "decl_data" TIMESTAMP,
  "decl_ict_nome" VARCHAR(255),
  "decl_lgpd" BOOLEAN,
  "decl_local" VARCHAR(255),
  "decl_resp_nome" VARCHAR(255),
  "decl_veracidade" BOOLEAN,
  "doc_evidencias_trl" TEXT[],
  "doc_interesse_mercado" TEXT[],
  "doc_responsabilidade" TEXT,
  "ict_cnpj" VARCHAR(255),
  "ict_endereco" TEXT,
  "ict_nome" VARCHAR(255),
  "mercado_modelo" VARCHAR(255),
  "mercado_modelo_outro" TEXT,
  "mercado_perfil" TEXT,
  "mercado_setores" TEXT,
  "motiv_aprendizados" TEXT,
  "motiv_expectativas" TEXT,
  "motiv_priorizacao" TEXT,
  "nit_equipe_horas" VARCHAR(255),
  "nit_experiencia" TEXT,
  "nit_nome" VARCHAR(255),
  "nit_papel" VARCHAR(255),
  "oferta_diferenciais" TEXT,
  "oferta_problema" TEXT,
  "oferta_valor" TEXT,
  "pi_outro" BOOLEAN,
  "pi_outro_desc" TEXT,
  "pi_patente" BOOLEAN,
  "pi_situacao" TEXT,
  "pi_software" BOOLEAN,
  "resp_cargo" VARCHAR(255),
  "resp_email" VARCHAR(255),
  "resp_nome" VARCHAR(255),
  "resp_telefone" VARCHAR(255),
  "status" VARCHAR(255),
  "tec_area" VARCHAR(255),
  "tec_nome" VARCHAR(255),
  "tec_resumo" TEXT,
  "tec_trl" VARCHAR(255),
  "tec_trl_just" TEXT,
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 49. proposta_eita
-- ==========================================
CREATE TABLE IF NOT EXISTS "proposta_eita" (
  "id" VARCHAR(255) PRIMARY KEY,
  "cidade" VARCHAR(255),
  "como_usuario_resolve" TEXT,
  "Desafio_id" VARCHAR(255),
  "documentos" TEXT[],
  "emailEnviado" BOOLEAN,
  "estado" VARCHAR(255),
  "estagio" VARCHAR(255),
  "existe_solucao" TEXT,
  "Lider_email" VARCHAR(255),
  "Lider_nome" VARCHAR(255),
  "Lider_telefone" VARCHAR(255),
  "link_pitch" TEXT,
  "ODS" TEXT[],
  "quem_seria_usuario" TEXT,
  "quem_sera_principal" TEXT,
  "score" NUMERIC(15, 2),
  "Startup_id" VARCHAR(255),
  "tipo" VARCHAR(255),
  "é_duplicada" BOOLEAN,
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 50. proposta_eita_segunda
-- ==========================================
CREATE TABLE IF NOT EXISTS "proposta_eita_segunda" (
  "id" VARCHAR(255) PRIMARY KEY,
  "data_submissão" TIMESTAMP,
  "Desafio_id" VARCHAR(255),
  "Email_lider" VARCHAR(255),
  "emailEnviado" BOOLEAN,
  "File1_1" TEXT[], "File1_2" TEXT[], "File1_3" TEXT[],
  "File2" TEXT[], "File3" TEXT[], "File4_3" TEXT[],
  "File5_1" TEXT[], "File5_2" TEXT[], "File5_3" TEXT[], "File6" TEXT[],
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

-- ==========================================
-- 51. proposta_nit
-- ==========================================
CREATE TABLE IF NOT EXISTS "proposta_nit" (
  "id" VARCHAR(255) PRIMARY KEY,
  "cnpj" NUMERIC(15, 2),
  "declaração_compromisso" TEXT,
  "email_instituição" VARCHAR(255),
  "email_lider" VARCHAR(255),
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

-- ==========================================
-- 52. Proposta_startup
-- ==========================================
CREATE TABLE IF NOT EXISTS "Proposta_startup" (
  "id" VARCHAR(255) PRIMARY KEY,
  "Anexos" TEXT[],
  "Desafio_id" VARCHAR(255),
  "emailEnviado" BOOLEAN,
  "Startup_id" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 53. Proposta_talento
-- ==========================================
CREATE TABLE IF NOT EXISTS "Proposta_talento" (
  "id" VARCHAR(255) PRIMARY KEY,
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 54. proposta_worldcup
-- ==========================================
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

-- ==========================================
-- 55. quizz-recnplay-2025
-- ==========================================
CREATE TABLE IF NOT EXISTS "quizz_recnplay_2025" (
  "id" VARCHAR(255) PRIMARY KEY,
  "cientistaCounter" NUMERIC(15, 2) DEFAULT 0,
  "conectorCounter" NUMERIC(15, 2) DEFAULT 0,
  "desenvolvedorCounter" NUMERIC(15, 2) DEFAULT 0,
  "inovadorCounter" NUMERIC(15, 2) DEFAULT 0,
  "quizzCounter" NUMERIC(15, 2) DEFAULT 0,
  "startupeiroCounter" NUMERIC(15, 2) DEFAULT 0,
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 56. quizzLugarInovacao
-- ==========================================
CREATE TABLE IF NOT EXISTS "quizzLugarInovacao" (
  "id" VARCHAR(255) PRIMARY KEY,
  "q1" TEXT, "q2" TEXT, "q3" TEXT, "q4" TEXT, "q5" TEXT,
  "resultado" TEXT,
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 57. Rates
-- ==========================================
CREATE TABLE IF NOT EXISTS "Rates" (
  "id" VARCHAR(255) PRIMARY KEY,
  "Appraiser_id" VARCHAR(255),
  "criterea_id" VARCHAR(255),
  "value" NUMERIC(15, 2),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 58. RecursoPremioInovacao
-- ==========================================
CREATE TABLE IF NOT EXISTS "RecursoPremioInovacao" (
  "id" VARCHAR(255) PRIMARY KEY,
  "descricaoRecurso" TEXT,
  "emailProjeto" VARCHAR(255),
  "nomeProjeto" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 59. RelatocioEITAAvaliacaoCriterio
-- ==========================================
CREATE TABLE IF NOT EXISTS "RelatocioEITAAvaliacaoCriterio" (
  "id" VARCHAR(255) PRIMARY KEY,
  "1_Avaliacao" TEXT,
  "2_Nota_Final" TEXT,
  "3_Desc" TEXT,
  "4_Mentor" NUMERIC(15, 2),
  "5_Nota" TEXT,
  "6_Proposta" NUMERIC(15, 2),
  "desafio_id" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 60. RelatorioEITAAvaliacao
-- ==========================================
CREATE TABLE IF NOT EXISTS "RelatorioEITAAvaliacao" (
  "id" VARCHAR(255) PRIMARY KEY,
  "desafio" TEXT,
  "Mentor_nome" VARCHAR(255),
  "proposta_media" NUMERIC(15, 2),
  "proposta_nome" VARCHAR(255),
  "proposta_score" NUMERIC(15, 2),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 61. RelatorioEITAAvaliacaoOperacao
-- ==========================================
CREATE TABLE IF NOT EXISTS "RelatorioEITAAvaliacaoOperacao" (
  "id" VARCHAR(255) PRIMARY KEY,
  "1_Proposta" TEXT,
  "2_NotaFinal" NUMERIC(15, 2),
  "3_Criterios_e_Nota" TEXT,
  "desafio_id" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 62. RelatorioProposta_eita
-- ==========================================
CREATE TABLE IF NOT EXISTS "RelatorioProposta_eita" (
  "id" VARCHAR(255) PRIMARY KEY,
  "cidade" VARCHAR(255),
  "CNPJ" VARCHAR(255),
  "Como_esse_usuario_resolve" TEXT,
  "Data_cadastro" TIMESTAMP,
  "desafio" TEXT,
  "documentos" TEXT[],
  "emailEnviado" BOOLEAN,
  "estado" VARCHAR(255),
  "estagio" VARCHAR(255),
  "Existe_alguma_solucao" TEXT,
  "Lider_email" VARCHAR(255),
  "Lider_nome" VARCHAR(255),
  "Lider_telefone" VARCHAR(255),
  "link_pitch" TEXT,
  "Nome" VARCHAR(255),
  "ODS" TEXT,
  "Quem_seria_o_usuario" TEXT,
  "Quem_sera_o_principal" TEXT,
  "Time" TEXT[],
  "tipo" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 63. Respostas
-- ==========================================
CREATE TABLE IF NOT EXISTS "Respostas" (
  "id" VARCHAR(255) PRIMARY KEY,
  "Descricao" TEXT,
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 64. StatusLane
-- ==========================================
CREATE TABLE IF NOT EXISTS "StatusLane" (
  "id" VARCHAR(255) PRIMARY KEY,
  "kanban_id" VARCHAR(255),
  "name" VARCHAR(255),
  "order" NUMERIC(15, 2),
  "tasks" TEXT[],
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 65. Submissao_ConectaLabs
-- ==========================================
CREATE TABLE IF NOT EXISTS "Submissao_ConectaLabs" (
  "id" VARCHAR(255) PRIMARY KEY,
  "aceite_edital" BOOLEAN,
  "aceite_lgpd" BOOLEAN,
  "aceite_veracidade" BOOLEAN,
  "aderencia_desc" TEXT,
  "anexos" TEXT[],
  "aplicabilidade" TEXT,
  "aplicabilidade_cidade" TEXT,
  "cnpj" VARCHAR(255),
  "cnpj_ativo" BOOLEAN,
  "data_constituicao" TIMESTAMP,
  "data_criacao" TIMESTAMP,
  "doc_certidoes" TEXT[],
  "doc_contrato_social" TEXT,
  "doc_curriculos" TEXT[],
  "doc_outros" TEXT[],
  "doc_pitch" TEXT,
  "equipe" TEXT,
  "escalabilidade" TEXT,
  "estagio_desenv" VARCHAR(255),
  "inovacao" TEXT,
  "linkedin" VARCHAR(255),
  "nome_fantasia" VARCHAR(255),
  "ods_descricao" TEXT,
  "ods_selecionados" VARCHAR(255),
  "posicao_fila" NUMERIC(15, 2) DEFAULT 0,
  "possui_tracao" BOOLEAN,
  "razao_social" VARCHAR(255),
  "resp_cargo" VARCHAR(255),
  "resp_cpf" VARCHAR(255),
  "resp_email" VARCHAR(255),
  "resp_nome" VARCHAR(255),
  "resp_telefone" VARCHAR(255),
  "site" VARCHAR(255),
  "situacao_fiscal" VARCHAR(255),
  "solucao_descricao" TEXT,
  "solucao_nome" VARCHAR(255),
  "status" VARCHAR(255),
  "tema_outro_desc" TEXT,
  "temas_pcr" VARCHAR(255),
  "tracao_descricao" TEXT,
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 66. Submissao_ICT
-- ==========================================
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

-- ==========================================
-- 67. Submissao_INPI
-- ==========================================
CREATE TABLE IF NOT EXISTS "Submissao_INPI" (
  "id" VARCHAR(255) PRIMARY KEY,
  "aceite_edital" BOOLEAN,
  "aceite_lgpd" BOOLEAN,
  "aceite_originalidade" BOOLEAN,
  "anexo1" TEXT,
  "campo_aplicacao" VARCHAR(255),
  "cnpj" VARCHAR(255),
  "correlacao_software" TEXT,
  "cotitularidades" TEXT[],
  "data_constituicao" TIMESTAMP,
  "data_criacao" TIMESTAMP,
  "data_publicacao" TIMESTAMP,
  "dec_cargo" VARCHAR(255),
  "dec_cidade_data" VARCHAR(255),
  "dec_cnpj" VARCHAR(255),
  "dec_cpf" VARCHAR(255),
  "dec_endereco" TEXT,
  "dec_nome" VARCHAR(255),
  "dec_sw_nome" VARCHAR(255),
  "dec_titularidade" BOOLEAN,
  "doc_contrato_social" TEXT,
  "doc_declaracao_i" TEXT,
  "doc_id_pf" TEXT,
  "doc_sede_residencia" TEXT,
  "end_bairro" VARCHAR(255),
  "end_cep" VARCHAR(255),
  "end_cidade" VARCHAR(255),
  "end_complemento" VARCHAR(255),
  "end_email" VARCHAR(255),
  "end_logradouro" TEXT,
  "end_numero" VARCHAR(255),
  "end_telefone" VARCHAR(255),
  "end_uf" VARCHAR(255),
  "end_whatsapp" VARCHAR(255),
  "linguagem_programacao" VARCHAR(255),
  "nome_fantasia" VARCHAR(255),
  "pf_cpf" VARCHAR(255),
  "pf_estado_civil" VARCHAR(255),
  "pf_nacionalidade" VARCHAR(255),
  "pf_nascimento" TIMESTAMP,
  "pf_nome" VARCHAR(255),
  "pf_orgao_expedidor" VARCHAR(255),
  "pf_profissao" VARCHAR(255),
  "pf_rg" VARCHAR(255),
  "posicao_fila" NUMERIC(15, 2),
  "razao_social" VARCHAR(255),
  "resp_legal_cpf" VARCHAR(255),
  "resp_legal_nome" VARCHAR(255),
  "startup_constituida" BOOLEAN,
  "status" VARCHAR(255),
  "sw_descricao" TEXT,
  "sw_hash_sha256" VARCHAR(255),
  "sw_nome" VARCHAR(255),
  "sw_versao" VARCHAR(255),
  "tipo_programa" VARCHAR(255),
  "tipo_proponente" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 68. Talento
-- ==========================================
CREATE TABLE IF NOT EXISTS "Talento" (
  "id" VARCHAR(255) PRIMARY KEY,
  "atuacao" TEXT,
  "Categorias" TEXT[],
  "Categorias_de_Interesse" TEXT[],
  "cidade" VARCHAR(255),
  "curriculo" TEXT,
  "Empresa" VARCHAR(255),
  "Empresa_id" VARCHAR(255),
  "escolaridade" VARCHAR(255),
  "estado" VARCHAR(255),
  "etnia" VARCHAR(255),
  "experiencia" TEXT,
  "genero" VARCHAR(255),
  "instituicao" VARCHAR(255),
  "isNotificacaoEmail" BOOLEAN,
  "isNotificacaoWhats" BOOLEAN,
  "linkedin" VARCHAR(255),
  "links" TEXT,
  "mora_recife" BOOLEAN,
  "nascimento" TIMESTAMP,
  "nome_social" VARCHAR(255),
  "talento_id" NUMERIC(15, 2),
  "usuario_id" VARCHAR(255),
  "Whatsapp" NUMERIC(15, 2),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 69. Task
-- ==========================================
CREATE TABLE IF NOT EXISTS "Task" (
  "id" VARCHAR(255) PRIMARY KEY,
  "Attachments" TEXT[],
  "Desafio_id" VARCHAR(255),
  "descricao" TEXT,
  "lane_id" VARCHAR(255),
  "Mentor_id" VARCHAR(255),
  "nome" VARCHAR(255),
  "order" NUMERIC(15, 2),
  "Perguntas" TEXT[],
  "proposta_id" VARCHAR(255),
  "proposta_eita_id" VARCHAR(255),
  "Startup_id" VARCHAR(255),
  "é_duplicada" BOOLEAN,
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 70. Tecnologia_ICT
-- ==========================================
CREATE TABLE IF NOT EXISTS "Tecnologia_ICT" (
  "id" VARCHAR(255) PRIMARY KEY,
  "descricao" TEXT,
  "evidencias_mercado" TEXT,
  "justificativa_pi" TEXT,
  "modelo_comercial" VARCHAR(255),
  "nome" VARCHAR(255),
  "numero_deposito" VARCHAR(255),
  "setor_alvo" VARCHAR(255),
  "situacao_pi" VARCHAR(255),
  "submissao_id" VARCHAR(255),
  "trl" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 71. Time
-- ==========================================
CREATE TABLE IF NOT EXISTS "Time" (
  "id" VARCHAR(255) PRIMARY KEY,
  "dedicacao" VARCHAR(255),
  "email" VARCHAR(255),
  "Nome" VARCHAR(255),
  "papel" VARCHAR(255),
  "proposta_nit" VARCHAR(255),
  "proposta_nit_id" VARCHAR(255),
  "Startup" VARCHAR(255),
  "Startup_id" VARCHAR(255),
  "usuario" VARCHAR(255),
  "usuario_id" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 72. Trilha
-- ==========================================
CREATE TABLE IF NOT EXISTS "Trilha" (
  "id" VARCHAR(255) PRIMARY KEY,
  "ativo" BOOLEAN,
  "Banner" TEXT,
  "Categorias" TEXT[],
  "Conteudos" TEXT[],
  "Descricao" TEXT,
  "Nome" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 73. User
-- ==========================================
CREATE TABLE IF NOT EXISTS "User" (
  "id" VARCHAR(255) PRIMARY KEY,
  "activeProfile" TEXT[],
  "CPF" VARCHAR(255),
  "current" VARCHAR(255),
  "isAdmin" BOOLEAN DEFAULT FALSE,
  "name" VARCHAR(255),
  "profile" TEXT,
  "tmppass" VARCHAR(255),
  "userid" VARCHAR(255),
  "email" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "slug" VARCHAR(255)
);

-- ==========================================
-- 74. Values
-- ==========================================
CREATE TABLE IF NOT EXISTS "Values" (
  "id" VARCHAR(255) PRIMARY KEY,
  "Booleano" BOOLEAN,
  "comentario" TEXT,
  "creterea" VARCHAR(255),
  "creterea_id" VARCHAR(255),
  "desafio" VARCHAR(255),
  "desafio_id" VARCHAR(255),
  "inscricao_premio" VARCHAR(255),
  "inscricaoPremioRec" VARCHAR(255),
  "inscricaoPremioRec_id" VARCHAR(255),
  "Mentor" VARCHAR(255),
  "Mentor_id" VARCHAR(255),
  "proposta_id" VARCHAR(255),
  "proposta_eita_segunda_id" VARCHAR(255),
  "Value" NUMERIC(15, 2),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

-- ==========================================
-- 75. voto / Voto Popular
-- ==========================================
CREATE TABLE IF NOT EXISTS "voto" (
  "id" VARCHAR(255) PRIMARY KEY,
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS "Voto_Popular" (
  "id" VARCHAR(255) PRIMARY KEY,
  "descrição" TEXT,
  "titulo" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);

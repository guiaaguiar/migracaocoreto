-- =============================================================================
-- INSERTS DE DADOS PARA AS 75 TABELAS DO CORETO (BUBBLE DATA TYPES)
-- Ecossistema de Inovação Aberta do Recife (EITA, Hacker Cidadão, Conecta Labs, etc.)
-- =============================================================================

-- 73. User
INSERT INTO "User" ("id", "name", "email", "CPF", "isAdmin", "profile", "activeProfile", "current", "tmppass", "userid", "slug")
VALUES
('usr_admin_01', 'Administrador Coreto', 'admin@coreto.recife.pe.gov.br', '111.222.333-44', TRUE, 'ADMIN', ARRAY['ADMIN', 'GESTOR'], 'ADMIN', NULL, 'usr_admin_01', 'administrador-coreto'),
('usr_gestor_01', 'Pedro Casé', 'pedro.case@recife.pe.gov.br', '222.333.444-55', FALSE, 'GESTOR', ARRAY['GESTOR'], 'GESTOR', NULL, 'usr_gestor_01', 'pedro-case'),
('usr_mentor_01', 'Gabriel Chamie', 'gabrielchamie@gritesolucoes.com.br', '333.444.555-66', FALSE, 'MENTOR', ARRAY['MENTOR', 'AVALIADOR'], 'MENTOR', NULL, 'usr_mentor_01', 'gabriel-chamie'),
('usr_mentor_02', 'Ceci Designer', 'ceci@design.com.br', '444.555.666-77', FALSE, 'MENTOR', ARRAY['MENTOR'], 'MENTOR', NULL, 'usr_mentor_02', 'ceci-designer'),
('usr_startup_01', 'Fernanda Lima', 'contato@beg.com.br', '555.666.777-88', FALSE, 'STARTUP', ARRAY['STARTUP'], 'STARTUP', NULL, 'usr_startup_01', 'fernanda-lima'),
('usr_startup_02', 'Dra. Camilla Ribeiro', 'contato@saudeauditiva.med.br', '666.777.888-99', FALSE, 'STARTUP', ARRAY['STARTUP'], 'STARTUP', NULL, 'usr_startup_02', 'camilla-ribeiro'),
('usr_talento_01', 'Lucas Andrade', 'lucas.andrade@email.com', '777.888.999-00', FALSE, 'TALENTO', ARRAY['TALENTO', 'RESOLVEDOR'], 'TALENTO', NULL, 'usr_talento_01', 'lucas-andrade')
ON CONFLICT ("id") DO NOTHING;

-- 7. Categoria
INSERT INTO "Categoria" ("id", "Nome", "slug")
VALUES
('cat_edtech', 'EdTech & Talentos', 'edtech-talentos'),
('cat_healthtech', 'HealthTech & Saúde', 'healthtech-saude'),
('cat_fintech', 'FinTech & Gestão', 'fintech-gestao'),
('cat_govtech', 'GovTech & Cidades Inteligentes', 'govtech-cidades-inteligentes'),
('cat_cleantech', 'CleanTech & Sustentabilidade', 'cleantech-sustentabilidade'),
('cat_iot', 'IoT & Hardware', 'iot-hardware'),
('cat_ia', 'Inteligência Artificial & Dados', 'ia-dados')
ON CONFLICT ("id") DO NOTHING;

-- 47. Programa
INSERT INTO "Programa" ("id", "Nome", "slug")
VALUES
('prog_eita_2025', 'EITA Recife - Inovação Aberta', 'eita-recife-inovacao-aberta'),
('prog_hacker_2025', 'Hacker Cidadão 11ª Edição', 'hacker-cidadao-11'),
('prog_conectalabs', 'Conecta Labs PCR', 'conecta-labs-pcr'),
('prog_nitro_ict', 'Programa NITRO ICTs', 'nitro-icts'),
('prog_premio_rec', 'Prêmio Recife Inovação', 'premio-recife-inovacao')
ON CONFLICT ("id") DO NOTHING;

-- 41. Organização
INSERT INTO "Organizacao" ("id", "nome", "cnpj", "descricao", "descricao_curta", "email", "Site", "tipo_organizacao", "tipo", "territorio_principal", "Categorias", "ativo", "slug")
VALUES
('org_emprel', 'EMPREL - Empresa Municipal de Informática', '10.565.000/0001-92', 'Empresa pública de TI da Prefeitura do Recife', 'TI Pública do Recife', 'contato@emprel.recife.pe.gov.br', 'https://emprel.recife.pe.gov.br', 'Governo', 'PUBLICA', 'Recife', ARRAY['GovTech', 'Inovação Aberta'], TRUE, 'emprel'),
('org_polotec', 'Polotec UFPE', '24.134.488/0001-08', 'Polo Tecnológico da Universidade Federal de Pernambuco', 'Hub acadêmico e de transferência de tecnologia', 'polotec@ufpe.br', 'https://ufpe.br/polotec', 'ICT / Universidade', 'ACADEMICA', 'Recife', ARRAY['NIT', 'Biotecnologia', 'DeepTech'], TRUE, 'polotec-ufpe'),
('org_porto_digital', 'Porto Digital', '04.567.890/0001-12', 'Parque tecnológico urbano de referência nacional em Recife', 'Parque Tecnológico Urbano', 'info@portodigital.org', 'https://portodigital.org', 'Hub de Inovação', 'PRIVADA', 'Bairro do Recife', ARRAY['Software', 'Economia Criativa'], TRUE, 'porto-digital'),
('org_secti', 'SECTI Recife', '10.565.000/0002-73', 'Secretaria de Ciência, Tecnologia e Inovação do Recife', 'Secretaria Municipal', 'secti@recife.pe.gov.br', 'https://recife.pe.gov.br/secti', 'Governo', 'PUBLICA', 'Recife', ARRAY['Políticas Públicas', 'Fomento'], TRUE, 'secti-recife')
ON CONFLICT ("id") DO NOTHING;

-- 26. Iniciativa
INSERT INTO "Iniciativa" ("id", "nome", "cnpj", "descricao", "solução", "problema_que_resolve", "estagio_inovacao", "trl_grupo", "tipo_iniciativa", "responsavel_nome", "responsavel_email", "Site", "Categorias", "Inativo", "slug")
VALUES
('ini_beg', 'B&G - Talentos Tech', '33.444.555/0001-66', 'Plataforma de capacitação e contratação inteligente de talentos para TI', 'Matching por competências e testes práticos', 'Escassez de mão de obra qualificada no setor tech', 'Operação / Tração', 'TRL 7', 'Startup', 'Fernanda Lima', 'contato@beg.com.br', 'https://beg.recife.pe.br', ARRAY['EdTech & Talentos', 'GovTech'], FALSE, 'beg-talentos-tech'),
('ini_saude_aud', 'Saúde Auditiva IA', '44.555.666/0001-77', 'Triagem auditiva precoce nas escolas da rede municipal com IA', 'Algoritmo de análise audiométrica assistida por app', 'Demora de meses para diagnóstico auditivo infantil', 'Validação / Piloto', 'TRL 8', 'Startup', 'Dra. Camilla Ribeiro', 'contato@saudeauditiva.med.br', 'https://saudeauditiva.med.br', ARRAY['HealthTech & Saúde', 'IA & Dados'], FALSE, 'saude-auditiva-ia'),
('ini_curva_abc', 'Gestão Ágil ABC', '55.666.777/0001-88', 'Controle automatizado de estoque e finanças para microcomerciantes', 'App de categorização de insumos via OCR de notas', 'Perda de mercadoria e falta de fluxo de caixa em feirantes', 'Ideação / Protótipo', 'TRL 5', 'Empresa Júnior', 'Matheus Albuquerque', 'projeto@curvaabc.org', 'https://curvaabc.com.br', ARRAY['FinTech & Gestão'], FALSE, 'gestao-agil-abc')
ON CONFLICT ("id") DO NOTHING;

-- 15. Edital
INSERT INTO "Edital" ("id", "Nome", "descricao", "empresa_id", "ativo", "validade", "anexo", "slug")
VALUES
('edt_eita_03', 'Edital 03/2025 - Desafios Públicos EITA Recife', 'Chamamento público para contratação de soluções de base tecnológica para a PCR', 'org_emprel', TRUE, '2026-12-31 23:59:59', 'https://coreto.recife.pe.gov.br/docs/edital-eita-03-2025.pdf', 'edital-03-2025-eita-recife'),
('edt_nitro_01', 'Edital NITRO ICT 2025/2026', 'Aceleração de tecnologias acadêmicas com TRL 4 a 7 para inserção no mercado', 'org_polotec', TRUE, '2026-11-30 23:59:59', 'https://coreto.recife.pe.gov.br/docs/edital-nitro-2025.pdf', 'edital-nitro-ict-2025')
ON CONFLICT ("id") DO NOTHING;

-- 39. Oportunidade
INSERT INTO "Oportunidade" ("id", "nome", "resumo", "descricao", "problema", "dor", "Empresa_id", "organizacao_promotora", "tipo_oportunidade", "apoio_oferecido", "Data_limite_para_inscricao", "ativo", "Categorias", "area_tematica_oportunidade", "estagio_elegivel", "trl_elegivel", "premio", "ModuloMentoria", "slug")
VALUES
('op_energia_limpa', 'Energia Renovável Challenge', 'Desafio aberto para captação de soluções inovadoras em energia limpa e eficiência predial', 'Desenvolvimento de pilotos para redução do consumo elétrico em prédios públicos da PCR', 'Alto custo com energia elétrica e pegada de carbono elevada', 'Falta de monitoramento em tempo real do gasto por setor', 'org_polotec', 'Polotec / UFPE', 'Desafio de Inovação', 'Mentoria técnica, Acesso a laboratórios, Fomento', '2026-10-31 23:59:59', TRUE, ARRAY['CleanTech & Sustentabilidade', 'IoT & Hardware'], ARRAY['Energia e Sustentabilidade', 'Tecnologia da Informação'], ARRAY['Operação', 'Validação'], ARRAY['TRL 4', 'TRL 5', 'TRL 6', 'TRL 7'], 'R$ 500.000 em pilotos de teste', TRUE, 'energia-renovavel-challenge'),
('op_inclusao_fin', 'Inclusão Financeira Recife', 'Fintechs para bancarização e crédito orientado a microempreendedores informais', 'Criação de esteira digital acessível e microcrédito orientado com garantia municipal', 'Dificuldade de acesso ao crédito bancário tradicional para ambulantes', 'Exclusão financeira e dependência de agiotagem', 'org_emprel', 'EMPREL / Prefeitura do Recife', 'Chamamento Público', 'Subvenção econômica, Contratação pública direta, Sandbox regulatório', '2026-10-31 23:59:59', TRUE, ARRAY['FinTech & Gestão', 'GovTech'], ARRAY['Economia e Negócios', 'Cidades e Sociedade'], ARRAY['Tração', 'Operação'], ARRAY['TRL 6', 'TRL 7', 'TRL 8'], 'Até R$ 5.000.000 via Contrato Público EITA', TRUE, 'inclusao-financeira-recife')
ON CONFLICT ("id") DO NOTHING;

-- 40. Oportunidade_crawler
INSERT INTO "Oportunidade_crawler" ("id", "nome", "resumo", "descricao", "organizacao_promotora", "Data_limite_para_inscricao", "ativo", "Categorias", "tipo_oportunidade", "slug")
VALUES
('crawl_finep_01', 'FINEP Inovacred 2025', 'Financiamento para projetos de inovação em produtos e processos', 'Edital nacional com condições especiais para a região Nordeste', 'FINEP / MCTI', '2026-12-15 18:00:00', TRUE, ARRAY['Fomento', 'DeepTech'], 'Edital de Fomento', 'finep-inovacred-2025'),
('crawl_facepe_02', 'FACEPE PAPPE Integração', 'Apoio à pesquisa aplicada em micro e pequenas empresas de Pernambuco', 'Subvenção econômica para projetos cooperativos universidade-empresa', 'FACEPE', '2026-11-20 17:00:00', TRUE, ARRAY['Biotecnologia', 'Saúde'], 'Subvenção', 'facepe-pappe-integracao')
ON CONFLICT ("id") DO NOTHING;

-- 11. Criteria
INSERT INTO "Criteria" ("id", "name", "Description", "desafio_id", "type", "weight", "order", "slug")
VALUES
('crit_01', 'Grau de Inovação', 'Diferencial tecnológico e originalidade da solução frente ao estado da arte', 'op_energia_limpa', 'Banca', 2.50, 1.00, 'grau-de-inovacao'),
('crit_02', 'Aderência ao Desafio', 'Capacidade técnica de resolver a dor descrita no edital', 'op_energia_limpa', 'Banca', 3.00, 2.00, 'aderencia-ao-desafio'),
('crit_03', 'Maturidade e TRL', 'Estágio real de desenvolvimento e comprovação por testes ou protótipo', 'op_energia_limpa', 'Banca', 2.00, 3.00, 'maturidade-e-trl'),
('crit_04', 'Capacidade da Equipe', 'Experiência prévia, multidisciplinaridade e dedicação dos membros', 'op_energia_limpa', 'Banca', 2.50, 4.00, 'capacidade-da-equipe')
ON CONFLICT ("id") DO NOTHING;

-- 17. eita_criterios
INSERT INTO "eita_criterios" ("id", "titulo", "nota", "desafio_id", "slug")
VALUES
('ecrit_01', 'Impacto Social no Território', '10.0', 'op_inclusao_fin', 'impacto-social'),
('ecrit_02', 'Facilidade de Implementação', '10.0', 'op_inclusao_fin', 'facilidade-de-implementacao')
ON CONFLICT ("id") DO NOTHING;

-- 16. Eita
INSERT INTO "Eita" ("id", "nome", "regulamento", "CriteriosJulgamento", "Desafios", "Validade", "slug")
VALUES
('eita_ciclo_04', '4º Ciclo de Inovação Aberta EITA Recife', 'Regulamento oficial publicado no Diário Oficial do Recife nº 142/2025', 'Avaliação cega de propostas, banca presencial e pitch final', ARRAY['op_energia_limpa', 'op_inclusao_fin'], '2026-12-31 23:59:59', '4-ciclo-eita-recife')
ON CONFLICT ("id") DO NOTHING;

-- 6. Atividades_eita
INSERT INTO "Atividades_eita" ("id", "Nome", "Descrição", "Eita_id", "FormInteresese", "slug")
VALUES
('ativ_01', 'Workshop de Imersão e Esclarecimento de Dúvidas', 'Sessão online com os gestores da PCR para detalhamento das dores operacionais', 'eita_ciclo_04', TRUE, 'workshop-imersao'),
('ativ_02', 'Banca Examinadora de Pitch e Classificação', 'Apresentação presencial de 5 minutos com 3 minutos de perguntas da banca', 'eita_ciclo_04', FALSE, 'banca-examinadora-pitch')
ON CONFLICT ("id") DO NOTHING;

-- 23. Fase_eita
INSERT INTO "Fase_eita" ("id", "titulo", "descrição", "indice", "link", "slug")
VALUES
('fase_01', 'Fase 1: Inscrição e Envio de Propostas', 'Submissão do formulário técnico e vídeo-pitch de até 3 minutos', 1.00, 'https://coreto.recife.pe.gov.br/eita/fase1', 'fase-1-inscricoes'),
('fase_02', 'Fase 2: Prova de Conceito (PoC) e Piloto', 'Desenvolvimento e testes práticos em ambiente municipal controlado por 60 dias', 2.00, 'https://coreto.recife.pe.gov.br/eita/fase2', 'fase-2-poc-piloto')
ON CONFLICT ("id") DO NOTHING;

-- 49. proposta_eita
INSERT INTO "proposta_eita" ("id", "Desafio_id", "Startup_id", "Lider_nome", "Lider_email", "Lider_telefone", "cidade", "estado", "estagio", "como_usuario_resolve", "existe_solucao", "quem_seria_usuario", "quem_sera_principal", "ODS", "score", "emailEnviado", "é_duplicada", "slug")
VALUES
('prop_eita_01', 'op_energia_limpa', 'ini_beg', 'Fernanda Lima', 'contato@beg.com.br', '(81) 98888-1111', 'Recife', 'PE', 'Operação', 'Sensores IoT com dashboard preditivo de corte de picos de carga', 'Sim, soluções parciais em hardware importado de alto custo', 'Gestores prediais e secretários municipais', 'Secretaria de Administração da PCR', ARRAY['ODS 7 - Energia Limpa', 'ODS 11 - Cidades Sustentáveis'], 88.50, TRUE, FALSE, 'prop-energia-beg'),
('prop_eita_02', 'op_inclusao_fin', 'ini_curva_abc', 'Matheus Albuquerque', 'projeto@curvaabc.org', '(81) 97777-2222', 'Recife', 'PE', 'Validação', 'App integrado ao PIX municipal com módulo de educação financeira gamificada', 'Não há solução com microcrédito orientado integrado na cidade', 'Feirantes dos mercados públicos de Casa Amarela e São José', 'Secretaria de Desenvolvimento Econômico', ARRAY['ODS 8 - Trabalho Decente e Crescimento Econômico'], 92.00, TRUE, FALSE, 'prop-inclusao-curva-abc')
ON CONFLICT ("id") DO NOTHING;

-- 50. proposta_eita_segunda
INSERT INTO "proposta_eita_segunda" ("id", "Desafio_id", "Startup_id", "proposta_primeira_fase_id", "Email_lider", "resumo_executivo", "finalizado", "score", "é_duplicada", "slug")
VALUES
('prop_eita_seg_01', 'op_inclusao_fin', 'ini_curva_abc', 'prop_eita_02', 'projeto@curvaabc.org', 'Plano detalhado de execução da PoC no Mercado de Casa Amarela com 50 comerciantes cadastrados na primeira semana', TRUE, 94.50, FALSE, 'poc-curva-abc-segunda-fase')
ON CONFLICT ("id") DO NOTHING;

-- 33. Mentor
INSERT INTO "Mentor" ("id", "usuario_id", "tipo", "tipoMentor", "eixo", "desafio_id", "categorias", "slug")
VALUES
('mnt_01', 'usr_mentor_01', 'Negócios', 'Especialista', 'Tecnologia', 'op_energia_limpa', ARRAY['CleanTech', 'Gestão'], 'mentor-gabriel-chamie'),
('mnt_02', 'usr_mentor_02', 'UX & Design', 'Especialista', 'Design', 'op_inclusao_fin', ARRAY['FinTech', 'Acessibilidade'], 'mentora-ceci-designer')
ON CONFLICT ("id") DO NOTHING;

-- 34. Mentoria
INSERT INTO "Mentoria" ("id", "Desafio_id", "Startup_id", "Mentor_id", "Data", "Duração", "status", "Perguntas", "slug")
VALUES
('mentoria_01', 'op_energia_limpa', 'ini_beg', 'mnt_01', '2026-08-25 14:00:00', 60.00, 'Agendada', ARRAY['Como escalaremos a instalação dos sensores?', 'Qual a margem bruta de cada gateway?'], 'mentoria-beg-energia-01'),
('mentoria_02', 'op_inclusao_fin', 'ini_curva_abc', 'mnt_02', '2026-08-27 10:30:00', 45.00, 'Concluída', ARRAY['Como testar a usabilidade com feirantes de baixa escolaridade?'], 'mentoria-curva-abc-ux-01')
ON CONFLICT ("id") DO NOTHING;

-- 2. Assessment
INSERT INTO "Assessment" ("id", "Desafio_id", "Proposta_id", "Startup_id", "Mentor_id", "result", "Coment", "Hash_Confirmed", "Hash_Confirmed_Date", "Rates", "Values", "Weights", "slug")
VALUES
('ass_01', 'op_energia_limpa', 'prop_eita_01', 'ini_beg', 'mnt_01', 88.50, 'Excelente equipe técnica com protótipo validado em laboratório. Recomendado para a fase de PoC.', 'sha256_e8a93bf114a87b32', '2026-08-18 10:00:00', ARRAY['9.0', '8.5', '9.0', '9.0'], ARRAY['Inovador', 'Aderente', 'TRL 7', 'Equipe Completa'], ARRAY['2.5', '3.0', '2.0', '2.5'], 'avaliacao-prop-beg-01')
ON CONFLICT ("id") DO NOTHING;

-- 5. AssessmentSecondPhase
INSERT INTO "AssessmentSecondPhase" ("id", "Desafio_id", "proposta_id", "Startup_id", "Mentor_id", "result", "finalizado", "Coment", "slug")
VALUES
('ass_sec_01', 'op_inclusao_fin', 'prop_eita_seg_01', 'ini_curva_abc', 'mnt_02', 94.50, TRUE, 'PoC atingiu todas as métricas estabelecidas de adesão e segurança de dados.', 'avaliacao-fase2-curva-abc')
ON CONFLICT ("id") DO NOTHING;

-- 57. Rates
INSERT INTO "Rates" ("id", "Appraiser_id", "criterea_id", "value", "slug")
VALUES
('rate_01', 'mnt_01', 'crit_01', 9.00, 'rate-crit-01'),
('rate_02', 'mnt_01', 'crit_02', 8.50, 'rate-crit-02'),
('rate_03', 'mnt_01', 'crit_03', 9.00, 'rate-crit-03'),
('rate_04', 'mnt_01', 'crit_04', 9.00, 'rate-crit-04')
ON CONFLICT ("id") DO NOTHING;

-- 74. Values
INSERT INTO "Values" ("id", "desafio_id", "Mentor_id", "proposta_id", "creterea_id", "Value", "comentario", "Booleano", "slug")
VALUES
('val_01', 'op_energia_limpa', 'mnt_01', 'prop_eita_01', 'crit_01', 9.00, 'Muito inovador', TRUE, 'val-01'),
('val_02', 'op_energia_limpa', 'mnt_01', 'prop_eita_01', 'crit_02', 8.50, 'Totalmente aderente', TRUE, 'val-02')
ON CONFLICT ("id") DO NOTHING;

-- 30. kanban
INSERT INTO "kanban" ("id", "desafio_id", "startup_id", "slug")
VALUES
('kb_eita_01', 'op_energia_limpa', 'ini_beg', 'kanban-beg-energia'),
('kb_eita_02', 'op_inclusao_fin', 'ini_curva_abc', 'kanban-curva-abc-inclusao')
ON CONFLICT ("id") DO NOTHING;

-- 64. StatusLane
INSERT INTO "StatusLane" ("id", "kanban_id", "name", "order", "tasks", "slug")
VALUES
('lane_todo', 'kb_eita_01', 'A Fazer / Backlog', 1.00, ARRAY['task_01', 'task_02'], 'lane-a-fazer'),
('lane_doing', 'kb_eita_01', 'Em Execução / PoC', 2.00, ARRAY['task_03'], 'lane-em-execucao'),
('lane_done', 'kb_eita_01', 'Validados & Concluídos', 3.00, ARRAY['task_04'], 'lane-concluidos')
ON CONFLICT ("id") DO NOTHING;

-- 69. Task
INSERT INTO "Task" ("id", "lane_id", "Desafio_id", "Startup_id", "Mentor_id", "nome", "descricao", "order", "é_duplicada", "slug")
VALUES
('task_01', 'lane_todo', 'op_energia_limpa', 'ini_beg', 'mnt_01', 'Elaboração do plano de teste do sensor', 'Definir os 3 pontos de instalação no prédio da Emprel', 1.00, FALSE, 'tarefa-plano-teste-sensor'),
('task_02', 'lane_todo', 'op_energia_limpa', 'ini_beg', 'mnt_01', 'Homologação de segurança de rede', 'Validar tráfego MQTT seguro com a equipe de infra da PCR', 2.00, FALSE, 'tarefa-seguranca-rede'),
('task_03', 'lane_doing', 'op_energia_limpa', 'ini_beg', 'mnt_01', 'Calibração dos sensores de corrente', 'Realizar medições paralelas com medidores certificados', 1.00, FALSE, 'tarefa-calibracao-sensores')
ON CONFLICT ("id") DO NOTHING;

-- 65. Submissao_ConectaLabs
INSERT INTO "Submissao_ConectaLabs" ("id", "razao_social", "nome_fantasia", "cnpj", "cnpj_ativo", "resp_nome", "resp_email", "resp_telefone", "solucao_nome", "solucao_descricao", "inovacao", "aplicabilidade_cidade", "possui_tracao", "estagio_desenv", "status", "aceite_edital", "aceite_lgpd", "aceite_veracidade", "slug")
VALUES
('sub_conecta_01', 'BEG Educacao e Tecnologia LTDA', 'B&G Talentos Tech', '33.444.555/0001-66', TRUE, 'Fernanda Lima', 'contato@beg.com.br', '(81) 98888-1111', 'Trilha Conecta Emprego', 'Plataforma de inclusão produtiva digital conectando jovens das periferias do Recife a empresas do Porto Digital', 'Algoritmo de recomendação com gamificação de microcompetências', 'Aplicação direta nos Centros Comunitários da Paz (COMPAZ)', TRUE, 'Em Tração', 'SELECIONADO', TRUE, TRUE, TRUE, 'submissao-beg-conecta-labs')
ON CONFLICT ("id") DO NOTHING;

-- 66. Submissao_ICT
INSERT INTO "Submissao_ICT" ("id", "razao_social", "cnpj", "nome_nit", "email_institucional", "telefone", "resp_nome", "resp_email", "resp_cargo", "tec_nome", "tec_resumo", "tec_area", "tec_trl", "status", "aceite_termos", "aceite_lgpd", "aceite_veracidade", "slug")
VALUES
('sub_ict_01', 'Universidade Federal de Pernambuco', '24.134.488/0001-08', 'Polotec UFPE / Positiva', 'positiva@ufpe.br', '(81) 2126-8000', 'Prof. Dr. Roberto Ramos', 'roberto.ramos@ufpe.br', 'Coordenador de Transferência de Tecnologia', 'Biopolímero Antimicrobiano para Embalagens Sustentáveis', 'Material biodegradável à base de quitosana e nanopartículas com alta atividade bactericida para conservação de alimentos', 'Biotecnologia e Novos Materiais', 'TRL 6', 'EM_ANALISE', TRUE, TRUE, TRUE, 'submissao-polotec-biopolimero')
ON CONFLICT ("id") DO NOTHING;

-- 27. Inscricao_Nitro_ICT
INSERT INTO "Inscricao_Nitro_ICT" ("id", "razao_social", "cnpj", "nome_nit", "email_institucional", "resp_nome", "resp_email", "resp_cargo", "tipo_instituicao", "horas_dedicacao", "aceite_termos", "aceite_lgpd", "aceite_veracidade", "slug")
VALUES
('insc_nitro_01', 'Universidade de Pernambuco - UPE', '11.022.902/0001-25', 'Agência UPE Inovação', 'inovacao@upe.br', 'Profa. Dra. Mariana Costa', 'mariana.costa@upe.br', 'Diretora do NIT', 'ICT Pública Estadual', 20.00, TRUE, TRUE, TRUE, 'inscricao-nitro-upe')
ON CONFLICT ("id") DO NOTHING;

-- 70. Tecnologia_ICT
INSERT INTO "Tecnologia_ICT" ("id", "submissao_id", "nome", "descricao", "setor_alvo", "modelo_comercial", "situacao_pi", "numero_deposito", "trl", "slug")
VALUES
('tec_ict_01', 'sub_ict_01', 'Biopolímero Antimicrobiano', 'Película transparente biodegradável com liberação controlada de agentes antimicrobianos naturais', 'Agronegócio e Alimentos', 'Licenciamento com Royalties', 'Patente de Invenção Depositada', 'BR 10 2025 009876 4', 'TRL 6', 'biopolimero-antimicrobiano')
ON CONFLICT ("id") DO NOTHING;

-- 48. Proposta_Comercializacao
INSERT INTO "Proposta_Comercializacao" ("id", "ict_nome", "ict_cnpj", "nit_nome", "resp_nome", "resp_email", "tec_nome", "tec_resumo", "tec_trl", "mercado_setores", "mercado_modelo", "status", "slug")
VALUES
('prop_com_01', 'UFPE', '24.134.488/0001-08', 'Positiva / Polotec', 'Prof. Roberto Ramos', 'roberto.ramos@ufpe.br', 'Biopolímero Antimicrobiano', 'Pronto para escalonamento industrial em parceria com cooperativas de laticínios', 'TRL 6', 'Embalagens e Alimentos', 'Licenciamento Exclusivo', 'Aprovado para Vitrine', 'comercializacao-biopolimero')
ON CONFLICT ("id") DO NOTHING;

-- 67. Submissao_INPI
INSERT INTO "Submissao_INPI" ("id", "razao_social", "nome_fantasia", "cnpj", "pf_nome", "pf_cpf", "sw_nome", "sw_versao", "linguagem_programacao", "sw_hash_sha256", "sw_descricao", "tipo_programa", "status", "aceite_edital", "aceite_lgpd", "aceite_originalidade", "slug")
VALUES
('sub_inpi_01', 'Saude Auditiva Inteligencia Artificial LTDA', 'Saúde Auditiva IA', '44.555.666/0001-77', 'Camilla Ribeiro', '666.777.888-99', 'AudioScreen AI', 'v2.1.0', 'Python, TypeScript, C++', 'd2c9bc7d8904f86d8a264a974b967e890c2a5598687a6d892a7e78d91a92e104', 'Sistema de processamento de sinal em tempo real para testes de emissões otoacústicas automatizados via smartphone', 'Software Embarcado / Mobile', 'DEPOSITADO', TRUE, TRUE, TRUE, 'inpi-audioscreen-ai')
ON CONFLICT ("id") DO NOTHING;

-- 10. cotitulares
INSERT INTO "cotitulares" ("id", "submissao_id", "Nome", "CPF", "RG", "Orgao_Expedidor", "nacionalidade", "estado_civil", "Profissão", "email", "whatsapp", "cidade", "estado", "slug")
VALUES
('cotit_01', 'sub_inpi_01', 'Lucas Cavalcanti', '888.999.000-11', '8.765.432', 'SDS/PE', 'Brasileira', 'Solteiro', 'Engenheiro de Software', 'lucas.cavalcanti@saudeauditiva.med.br', '(81) 98888-3333', 'Recife', 'PE', 'lucas-cavalcanti')
ON CONFLICT ("id") DO NOTHING;

-- 24. HackerCidadão
INSERT INTO "HackerCidadao" ("id", "Nome", "regulamento", "Critérios_de_julgamento", "inicio", "fim", "Desafios", "fases", "Premios", "slug")
VALUES
('hacker_11', '11º Hacker Cidadão do Recife', 'Regulamento oficial da maratona hacker da PCR', 'Inovação, Viabilidade Técnica, Impacto para a População, Usabilidade', '2026-10-15 08:00:00', '2026-10-17 18:00:00', ARRAY['Mobilidade Ativa', 'Combate a Alagamentos', 'Cultura Cidadã'], ARRAY['Inscrição', 'Ideação', 'Mentoria', 'Demo Day'], ARRAY['1º Lugar: R$ 30.000', '2º Lugar: R$ 20.000', '3º Lugar: R$ 10.000'], '11-hacker-cidadao')
ON CONFLICT ("id") DO NOTHING;

-- 28. InscriçãoHacker
INSERT INTO "InscricaoHacker" ("id", "Nome", "cpf", "nasc", "cidade", "estado", "instituicao", "curso", "é_universitario", "telefone", "areas_de_atuacao", "descreva_de_que_forma", "autoriza_o_uso_de_dados", "pretende_participar_de", "ja_participou_de_algum", "slug")
VALUES
('insc_hacker_01', 'Lucas Andrade', '777.888.999-00', '2000-05-14 00:00:00', 'Recife', 'PE', 'CIn / UFPE', 'Ciência da Computação', TRUE, 81987654321, 'Desenvolvimento Full-Stack e Dados', 'Desenvolvendo apps de rotas inteligentes que desviam de pontos de alagamento em tempo real', TRUE, TRUE, TRUE, 'insc-lucas-andrade')
ON CONFLICT ("id") DO NOTHING;

-- 44. PremioHacker
INSERT INTO "PremioHacker" ("id", "desafio_id", "descrição", "valor", "slug")
VALUES
('prem_hacker_01', 'hacker_11', '1º Lugar Geral - Solução de Maior Impacto Social', 'R$ 30.000,00', 'primeiro-lugar-hacker-11'),
('prem_hacker_02', 'hacker_11', '2º Lugar Geral - Solução Mais Inovadora', 'R$ 20.000,00', 'segundo-lugar-hacker-11')
ON CONFLICT ("id") DO NOTHING;

-- 68. Talento
INSERT INTO "Talento" ("id", "usuario_id", "nome_social", "escolaridade", "instituicao", "atuacao", "experiencia", "mora_recife", "cidade", "estado", "genero", "etnia", "isNotificacaoEmail", "isNotificacaoWhats", "linkedin", "Categorias", "Categorias_de_Interesse", "slug")
VALUES
('tal_01', 'usr_talento_01', 'Lucas Andrade', 'Ensino Superior Incompleto', 'UFPE', 'Desenvolvedor Full-Stack TypeScript e Python', '3 anos de experiência com React, Node, PostgreSQL e projetos open-source', TRUE, 'Recife', 'PE', 'Masculino', 'Pardo', TRUE, TRUE, 'https://linkedin.com/in/lucas-andrade-tech', ARRAY['Tecnologia da Informação', 'Desenvolvimento'], ARRAY['GovTech', 'Inovação Aberta', 'Hackathons'], 'talento-lucas-andrade')
ON CONFLICT ("id") DO NOTHING;

-- 71. Time
INSERT INTO "Time" ("id", "Startup_id", "usuario_id", "Nome", "email", "papel", "dedicacao", "slug")
VALUES
('time_01', 'ini_beg', 'usr_startup_01', 'Fernanda Lima', 'contato@beg.com.br', 'CEO / Fundadora', 'Integral', 'time-fernanda-lima'),
('time_02', 'ini_saude_aud', 'usr_startup_02', 'Dra. Camilla Ribeiro', 'contato@saudeauditiva.med.br', 'CTO / Pesquisadora Líder', 'Integral', 'time-camilla-ribeiro')
ON CONFLICT ("id") DO NOTHING;

-- 19. Entidades (Mapa do Ecossistema)
INSERT INTO "Entidades" ("id", "Nome", "Tipo", "Categoria", "Descrição", "Localização", "URL", "x", "y", "Tags", "Conexões", "slug")
VALUES
('ent_01', 'Porto Digital', 'Hub / Parque', 'Hubs de Inovação', 'Maior parque tecnológico urbano do Brasil no Bairro do Recife', 'Bairro do Recife, Recife - PE', 'https://portodigital.org', 45.50, 62.30, ARRAY['Hub', 'TI', 'Economia Criativa'], ARRAY['ent_02', 'ent_03'], 'mapa-porto-digital'),
('ent_02', 'Polotec UFPE', 'Academia / NIT', 'ICTs & Academias', 'Polo Tecnológico da Universidade Federal de Pernambuco', 'Cidade Universitária, Recife - PE', 'https://ufpe.br/polotec', 25.80, 40.10, ARRAY['ICT', 'Pesquisa', 'Biotecnologia'], ARRAY['ent_01'], 'mapa-polotec-ufpe'),
('ent_03', 'EMPREL', 'Governo / TI', 'Governo & Setor Público', 'Empresa Municipal de Informática da Prefeitura do Recife', 'Madalena, Recife - PE', 'https://emprel.recife.pe.gov.br', 52.10, 50.40, ARRAY['GovTech', 'Dados Públicos'], ARRAY['ent_01', 'ent_02'], 'mapa-emprel')
ON CONFLICT ("id") DO NOTHING;

-- 55. quizz-recnplay-2025
INSERT INTO "quizz_recnplay_2025" ("id", "cientistaCounter", "conectorCounter", "desenvolvedorCounter", "inovadorCounter", "startupeiroCounter", "quizzCounter", "slug")
VALUES
('quizz_rec_stats_01', 45.00, 78.00, 150.00, 112.00, 89.00, 474.00, 'estatisticas-quizz-recnplay-2025')
ON CONFLICT ("id") DO NOTHING;

-- 56. quizzLugarInovacao
INSERT INTO "quizzLugarInovacao" ("id", "q1", "q2", "q3", "q4", "q5", "resultado", "slug")
VALUES
('quizz_res_01', 'Trabalhar em equipe ágil', 'Resolver problemas públicos', 'Criar código e arquiteturas', 'Foco em impacto direto', 'Ambiente dinâmico', 'Seu perfil é: Desenvolvedor Inovador (GovTech)', 'resultado-quizz-lucas')
ON CONFLICT ("id") DO NOTHING;

-- 1. Academy
INSERT INTO "Academy" ("id", "Nome", "Descricao", "Categorias", "youtube", "podcast", "drive", "slug")
VALUES
('acad_01', 'Como Modelar Propostas de Inovação Aberta para o Setor Público', 'Treinamento completo sobre o Marco Legal de Startups e Contratação Pública de Soluções Inovadoras (CPSI)', ARRAY['GovTech', 'Regulatório', 'Negócios'], 'https://youtube.com/watch?v=sample123', 'https://open.spotify.com/episode/sample456', 'https://drive.google.com/drive/sample789', 'academy-modelar-propostas-setor-publico')
ON CONFLICT ("id") DO NOTHING;

-- 72. Trilha
INSERT INTO "Trilha" ("id", "Nome", "Descricao", "ativo", "Categorias", "Conteudos", "slug")
VALUES
('trilha_01', 'Trilha EITA Recife: Do Problema ao Contrato Público', 'Jornada passo a passo para startups validarem soluções no ecossistema do Recife', TRUE, ARRAY['Inovação Aberta', 'GovTech'], ARRAY['acad_01'], 'trilha-eita-recife')
ON CONFLICT ("id") DO NOTHING;

-- 13. DestaquesCoretoHome
INSERT INTO "DestaquesCoretoHome" ("id", "Nome", "Tipo", "descricao", "CTA", "Link", "Empresa_id", "Categorias", "slug")
VALUES
('destaque_01', '4º Ciclo EITA Recife Aberto', 'Chamada Pública', 'Inscrições abertas para desafios com contratos de até R$ 5 milhões para contratação direta de inovação', 'Inscreva sua Startup', '/legacy/eita', 'org_emprel', ARRAY['GovTech', 'Inovação Aberta'], 'destaque-4-ciclo-eita')
ON CONFLICT ("id") DO NOTHING;

-- 38. Notificações
INSERT INTO "Notificacoes" ("id", "Titulo", "Descricao", "tipo", "link", "slug")
VALUES
('notif_01', 'Inscrições abertas para o Desafio de Energia Limpa', 'Envie sua proposta até 31/10/2026 e concorra a fomento de testes', 'OPORTUNIDADE', '/legacy/oportunidades', 'notif-energia-limpa')
ON CONFLICT ("id") DO NOTHING;

-- 36. Newsletter
INSERT INTO "Newsletter" ("id", "titulo", "informacao", "ativo", "slug")
VALUES
('news_01', 'Radar Coreto - Edição Agosto/2026', 'Confira as startups selecionadas para a fase de PoC do EITA Recife e o calendário de mentorias', TRUE, 'radar-coreto-agosto-2026')
ON CONFLICT ("id") DO NOTHING;

-- 45. PremioRec
INSERT INTO "PremioRec" ("id", "eixo", "primeiraFase", "segundaFase", "duplicada", "Q1", "Q2", "slug")
VALUES
('prem_rec_01', 'Educação e Inovação', TRUE, TRUE, FALSE, 'Plataforma de mentoria para alunos da rede pública municipal', 'Escalonado em 15 escolas com mais de 3.000 alunos impactados', 'premio-rec-educacao-01')
ON CONFLICT ("id") DO NOTHING;

-- 46. PremioRecifeInovacao
INSERT INTO "PremioRecifeInovacao" ("id", "resultado1aFase", "resultado2aFase", "validade", "slug")
VALUES
('prem_rec_ano_01', '10 projetos classificados para a banca final', 'Divulgação dos 3 grandes vencedores no RecnPlay', '2026-11-15 00:00:00', 'resultado-premio-recife-inovacao-2026')
ON CONFLICT ("id") DO NOTHING;

-- 58. RecursoPremioInovacao
INSERT INTO "RecursoPremioInovacao" ("id", "nomeProjeto", "emailProjeto", "descricaoRecurso", "slug")
VALUES
('rec_prem_01', 'Historiando Recife', 'contato@historiando.recife.br', 'Solicitação de revisão de nota no critério de aplicabilidade no turismo', 'recurso-historiando-recife')
ON CONFLICT ("id") DO NOTHING;

-- 51. proposta_nit
INSERT INTO "proposta_nit" ("id", "instituição", "email_instituição", "nome_lider", "email_lider", "site", "slug")
VALUES
('prop_nit_01', 'Polotec UFPE', 'positiva@ufpe.br', 'Prof. Roberto Ramos', 'roberto.ramos@ufpe.br', 'https://ufpe.br/polotec', 'proposta-nit-ufpe')
ON CONFLICT ("id") DO NOTHING;

-- 52. Proposta_startup
INSERT INTO "Proposta_startup" ("id", "Desafio_id", "Startup_id", "emailEnviado", "slug")
VALUES
('prop_st_01', 'op_energia_limpa', 'ini_beg', TRUE, 'proposta-startup-beg')
ON CONFLICT ("id") DO NOTHING;

-- 54. proposta_worldcup
INSERT INTO "proposta_worldcup" ("id", "Nome_da_Startup", "Nome", "Cargo", "E_mail", "cidade", "estado", "Segmento_da_startup", "esta_buscando_investimento", "Tem_interesse_em_mentoria", "slug")
VALUES
('prop_wc_01', 'Saúde Auditiva IA', 'Camilla Ribeiro', 'CEO', 'contato@saudeauditiva.med.br', 'Recife', 'PE', 'HealthTech', TRUE, TRUE, 'worldcup-saude-auditiva')
ON CONFLICT ("id") DO NOTHING;

-- 42. parceriasInovadoras
INSERT INTO "parceriasInovadoras" ("id", "Nome_do_Projeto", "qual_IES_do_projeto", "Email_do_projeto", "Resumo_do_Projeto", "Secretaria_ou_Orgao_Demandante", "Areas_de_Impacto", "slug")
VALUES
('parc_01', 'Monitoramento Hidrológico de Bacias Urbanas', 'UFPE / Departamento de Engenharia Civil', 'hidrologia@ufpe.br', 'Rede de sensores pluviométricos e de nível de canais para alerta antecipado de alagamentos', 'Defesa Civil do Recife', ARRAY['Prevenção de Desastres', 'Cidades Inteligentes'], 'parceria-hidrologia-recife')
ON CONFLICT ("id") DO NOTHING;

-- 8. Centelha
INSERT INTO "Centelha" ("id", "id_submissao_centelha", "resolvedor_id", "talento_id", "slug")
VALUES
('centelha_01', 'CENT-PE-2025-0089', 'usr_startup_01', 'tal_01', 'centelha-beg-01')
ON CONFLICT ("id") DO NOTHING;

-- 29. Interessado
INSERT INTO "Interessado" ("id", "startup_id", "iniciativa", "cidade", "comentario", "slug")
VALUES
('interessado_01', 'ini_beg', 'Trilha Conecta Emprego', 'Recife', 'Gostaria de implementar o projeto piloto em nossa instituição parceira', 'interesse-beg-01')
ON CONFLICT ("id") DO NOTHING;

-- 31. Local
INSERT INTO "Local" ("id", "nome", "endereço", "maps", "data", "slug")
VALUES
('loc_01', 'Moinho Recife Hub', 'R. de Santa Rita, 150 - São José, Recife - PE', 'https://maps.google.com/?q=Moinho+Recife', '2026-10-15 09:00:00', 'local-moinho-recife')
ON CONFLICT ("id") DO NOTHING;

-- 12. Cronograma
INSERT INTO "Cronograma" ("id", "data", "descrição", "ordem", "link", "slug")
VALUES
('crono_01', '2026-09-01 00:00:00', 'Abertura das Inscrições Online', 1.00, 'https://coreto.recife.pe.gov.br/eita', 'crono-abertura-inscricoes'),
('crono_02', '2026-10-31 23:59:59', 'Encerramento do Prazo de Submissão', 2.00, 'https://coreto.recife.pe.gov.br/eita', 'crono-encerramento-inscricoes')
ON CONFLICT ("id") DO NOTHING;

-- 35. Netpitch
INSERT INTO "Netpitch" ("id", "publico", "indicadores", "recursos", "slug")
VALUES
('np_01', 'Gestores Públicos Municipais', 'Tempo de resposta reduzido em 70%, economia estimada de R$ 1.2M/ano', 'Servidores em nuvem e 100 sensores instalados', 'netpitch-energia-limpa')
ON CONFLICT ("id") DO NOTHING;

-- 43. Perguntas & 63. Respostas
INSERT INTO "Respostas" ("id", "Descricao", "slug")
VALUES
('resp_01', 'Sim, empresas constituídas fora de Pernambuco podem participar desde que abram filial ou tenham operação no Recife para a fase de PoC.', 'resposta-participacao-nacional')
ON CONFLICT ("id") DO NOTHING;

INSERT INTO "Perguntas" ("id", "Descricao", "Respostas", "slug")
VALUES
('perg_01', 'Startups de outros estados podem submeter propostas no EITA Recife?', ARRAY['resp_01'], 'pergunta-participacao-outros-estados')
ON CONFLICT ("id") DO NOTHING;

-- 75. voto & Voto_Popular
INSERT INTO "Voto_Popular" ("id", "titulo", "descrição", "slug")
VALUES
('votopop_01', 'Escolha a Startup Mais Inovadora do RecnPlay 2026', 'Votação popular aberta para o público do festival', 'voto-popular-recnplay-2026')
ON CONFLICT ("id") DO NOTHING;

INSERT INTO "voto" ("id", "creator_id", "slug")
VALUES
('voto_reg_01', 'usr_talento_01', 'voto-lucas-01')
ON CONFLICT ("id") DO NOTHING;

-- 9. Click_Log
INSERT INTO "Click_Log" ("id", "element_clicked", "onclick_tracking_field", "onclick_tracking_date", "creator_id", "slug")
VALUES
('log_01', 'btn_inscreva_se_eita', 'header_cta_eita', CURRENT_TIMESTAMP, 'usr_startup_01', 'click-log-01')
ON CONFLICT ("id") DO NOTHING;

-- 32. Log_Notificacoes
INSERT INTO "Log_Notificacoes" ("id", "id_Notificação_id", "conteudo", "emails", "telefone", "data", "slug")
VALUES
('log_notif_01', 'notif_01', 'Disparo de e-mail informando sobre prazo final do Edital 03/2025', ARRAY['contato@beg.com.br', 'contato@saudeauditiva.med.br'], '(81) 98888-1111', CURRENT_TIMESTAMP, 'log-disparo-notif-01')
ON CONFLICT ("id") DO NOTHING;

-- 14. DisparoWhatsapp
INSERT INTO "DisparoWhatsapp" ("id", "titulo", "descricao", "link", "slug")
VALUES
('disp_whats_01', 'Lembrete: Faltam 5 dias para o encerramento do EITA', 'Não deixe sua proposta para a última hora. Acesse e envie!', 'https://coreto.recife.pe.gov.br/eita', 'disparo-lembrete-eita')
ON CONFLICT ("id") DO NOTHING;

-- 18. EmailEita
INSERT INTO "EmailEita" ("id", "Eita_id", "Assunto", "Mensagem", "emails", "slug")
VALUES
('email_eita_01', 'eita_ciclo_04', 'Confirmação de Recebimento de Proposta - EITA Recife', 'Sua proposta foi registrada com sucesso sob o protocolo EITA-2026-089. Acompanhe a banca de avaliação.', 'contato@beg.com.br, projeto@curvaabc.org', 'email-confirmacao-proposta')
ON CONFLICT ("id") DO NOTHING;

-- 37. Nitro
INSERT INTO "Nitro" ("id", "oportunidades", "slug")
VALUES
('nitro_prog_01', ARRAY['op_energia_limpa', 'op_inclusao_fin'], 'nitro-geral')
ON CONFLICT ("id") DO NOTHING;

-- 20. Export_startup
INSERT INTO "Export_startup" ("id", "nome", "cnpj", "descricao", "pitch", "Site", "Categorias", "Integrantes", "slug")
VALUES
('exp_st_01', 'B&G Talentos Tech', '33.444.555/0001-66', 'Plataforma de capacitação e recrutamento tech', 'Capacitamos e conectamos talentos diversos ao mercado de tecnologia', 'https://beg.recife.pe.br', ARRAY['EdTech'], ARRAY['Fernanda Lima'], 'export-beg')
ON CONFLICT ("id") DO NOTHING;

-- 25. importStartup
INSERT INTO "importStartup" ("id", "nome", "desc", "pitch", "slug")
VALUES
('imp_st_01', 'Startup Ingestão Teste', 'Startup importada em lote do ecossistema antigo', 'Pitch importado via planilha CSV', 'import-startup-01')
ON CONFLICT ("id") DO NOTHING;

-- 21. exportParticipantes
INSERT INTO "exportParticipantes" ("id", "Nome", "Email", "CPF", "Telefone", "cidade", "estado", "Instituicao", "curso", "é_universitario", "autoriza_o_uso_de_dados", "pretende_participar_de", "ja_participou_de_algum", "slug")
VALUES
('exp_part_01', 'Lucas Andrade', 'lucas.andrade@email.com', '777.888.999-00', '(81) 98765-4321', 'Recife', 'PE', 'UFPE', 'Ciência da Computação', TRUE, TRUE, TRUE, TRUE, 'export-part-lucas')
ON CONFLICT ("id") DO NOTHING;

-- 22. exportSegundaFase
INSERT INTO "exportSegundaFase" ("id", "Nome", "categoria", "eixo", "nota", "slug")
VALUES
('exp_seg_01', 'Gestão Ágil ABC', 'FinTech & Gestão', 'Inovação Pública', 94.50, 'export-segunda-curva-abc')
ON CONFLICT ("id") DO NOTHING;

-- 59, 60, 61, 62. Tabelas de Relatórios Consolidados EITA
INSERT INTO "RelatorioEITAAvaliacao" ("id", "desafio", "proposta_nome", "Mentor_nome", "proposta_score", "proposta_media", "slug")
VALUES
('rel_eita_01', 'Energia Renovável Challenge', 'B&G Sensores IoT', 'Gabriel Chamie', 88.50, 88.50, 'rel-eita-beg-energia'),
('rel_eita_02', 'Inclusão Financeira Recife', 'Gestão Ágil ABC', 'Ceci Designer', 94.50, 93.25, 'rel-eita-curva-abc')
ON CONFLICT ("id") DO NOTHING;

INSERT INTO "RelatocioEITAAvaliacaoCriterio" ("id", "desafio_id", "1_Avaliacao", "2_Nota_Final", "3_Desc", "5_Nota", "slug")
VALUES
('rel_crit_01', 'op_energia_limpa', 'Avaliação Fase 1', '88.50', 'Critérios ponderados da banca examinadora', '9.0', 'rel-criterio-energia-01')
ON CONFLICT ("id") DO NOTHING;

INSERT INTO "RelatorioEITAAvaliacaoOperacao" ("id", "desafio_id", "1_Proposta", "2_NotaFinal", "3_Criterios_e_Nota", "slug")
VALUES
('rel_op_01', 'op_energia_limpa', 'B&G Sensores IoT', 88.50, 'Grau de Inovação: 9.0 | Aderência: 8.5 | TRL: 9.0 | Equipe: 9.0', 'rel-operacao-energia-01')
ON CONFLICT ("id") DO NOTHING;

INSERT INTO "RelatorioProposta_eita" ("id", "Nome", "desafio", "CNPJ", "Lider_nome", "Lider_email", "Lider_telefone", "cidade", "estado", "estagio", "tipo", "ODS", "emailEnviado", "slug")
VALUES
('rel_prop_01', 'B&G Sensores IoT', 'Energia Renovável Challenge', '33.444.555/0001-66', 'Fernanda Lima', 'contato@beg.com.br', '(81) 98888-1111', 'Recife', 'PE', 'Operação', 'Startup', 'ODS 7, ODS 11', TRUE, 'rel-prop-beg-eita')
ON CONFLICT ("id") DO NOTHING;

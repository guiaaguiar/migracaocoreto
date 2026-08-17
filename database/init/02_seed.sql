-- =============================================================================
-- CORETO Database Seed - PostgreSQL Initial Data
-- Dados reais do ecossistema de inovação e empreendedorismo do Recife
-- =============================================================================

-- 1. Inserir Usuários (Avaliadores, Gestores, Talentos, Resolvedores, Admins)
INSERT INTO users (id, name, email, role, status, bio, skills, tags)
VALUES
    ('a0000000-0000-0000-0000-000000000001', 'Pedro Casé', 'pedro.case@recife.pe.gov.br', 'GESTOR_PUBLICO', 'completo', 'Gestor de Inovação Aberta na Prefeitura do Recife / EMPREL', ARRAY['Inovação Aberta', 'GovTech', 'Gestão Pública'], ARRAY['eita', 'gestor']),
    ('a0000000-0000-0000-0000-000000000002', 'Ceci Designer', 'ceci@design.com.br', 'TALENTO', 'completo', 'Product Designer e especialista em UI/UX no Porto Digital', ARRAY['UI/UX', 'Figma', 'Design System', 'Product Design'], ARRAY['AdTech', 'Design']),
    ('a0000000-0000-0000-0000-000000000003', 'Gabriel Chamie', 'gabrielchamie@gritesolucoes.com.br', 'EMPREENDEDOR', 'completo', 'CEO na Grite Soluções e mentor de inovação', ARRAY['EdTech', 'Inovação Aberta', 'Educação', 'Empreendedorismo', 'TI'], ARRAY['EdTech', 'Inovação aberta', 'Educação']),
    ('a0000000-0000-0000-0000-000000000004', 'Dra. Camilla Ribeiro', 'camilla.ribeiro@saudeauditiva.med.br', 'EMPREENDEDOR', 'completo', 'Médica e fundadora da HealthTech Saúde Auditiva', ARRAY['HealthTech', 'Telemedicina', 'IA na Saúde'], ARRAY['HealthTech', 'MedTech']),
    ('a0000000-0000-0000-0000-000000000005', 'Prof. Dr. Marcelo Soares', 'marcelo.soares@ufpe.br', 'AVALIADOR', 'completo', 'Professor Titular na UFPE e Avaliador do Prêmio Recife de Inovação', ARRAY['Avaliação de Projetos', 'Inteligência Artificial', 'Pesquisa Aplicada'], ARRAY['NIT', 'Avaliador']),
    ('a0000000-0000-0000-0000-000000000006', 'Lucas Gabriel', 'lucas.gabriel@mvpei.com.br', 'EMPREENDEDOR', 'completo', 'Head de Prototipagem na MVPEI', ARRAY['MVP', 'Prototipagem', 'Modelagem de Negócios'], ARRAY['Aceleração', 'Ideação']),
    ('a0000000-0000-0000-0000-000000000007', 'Fernanda Lima', 'fernanda.lima@beg.recife.pe.br', 'EMPREENDEDOR', 'completo', 'Co-fundadora da B&G Talentos', ARRAY['Recrutamento', 'Talentos Tech', 'EdTech'], ARRAY['EdTech', 'Desenvolvimento'])
ON CONFLICT (email) DO NOTHING;

-- 2. Inserir Organizações do Ecossistema
INSERT INTO organizations (id, name, trade_name, cnpj, segment, size, website, email, phone, city, state, logo_text, logo_bg, description, tags)
VALUES
    ('b0000000-0000-0000-0000-000000000001', 'Empresa Municipal de Informática - EMPREL', 'EMPREL', '11.000.000/0001-01', 'Governo / TI Pública', 'grande', 'https://emprel.recife.pe.gov.br', 'contato@emprel.recife.pe.gov.br', '(81) 3355-7000', 'Recife', 'PE', 'Emprel', '#003B6D', 'Empresa pública de tecnologia da Prefeitura da Cidade do Recife, responsável pela infraestrutura digital e projetos GovTech.', ARRAY['eita', 'destaque', 'govtech']),
    ('b0000000-0000-0000-0000-000000000002', 'Polo Tecnológico da UFPE - Polotec', 'Polotec / UFPE', '24.134.488/0001-08', 'Academia & ICT', 'media', 'https://polotec.ufpe.br', 'polotec@ufpe.br', '(81) 2126-8000', 'Recife', 'PE', 'polotec', '#BE123C', 'Ambiente de inovação e empreendedorismo da Universidade Federal de Pernambuco, articulando pesquisa e mercado.', ARRAY['NIT', 'Parceira', 'eita', 'destaque']),
    ('b0000000-0000-0000-0000-000000000003', 'Secretaria de Ciência, Tecnologia e Inovação - SECTI Recife', 'SECTI Recife', '10.565.000/0001-99', 'Governo', 'media', 'https://conecta.recife.pe.gov.br', 'secti@recife.pe.gov.br', '(81) 3355-8000', 'Recife', 'PE', 'SECTI', '#10B981', 'Secretaria responsável pela política de inovação, transformação digital e ecossistema de ciência do Recife.', ARRAY['eita', 'organizador-hacker', 'govtech']),
    ('b0000000-0000-0000-0000-000000000004', 'Porto Digital', 'Porto Digital', '04.222.333/0001-44', 'Parque Tecnológico / Hub', 'grande', 'https://portodigital.org', 'contato@portodigital.org', '(81) 3419-8000', 'Recife', 'PE', 'Porto Digital', '#1E293B', 'Um dos maiores parques tecnológicos e ambientes de inovação do Brasil, com mais de 350 empresas embarcadas.', ARRAY['hub', 'destaque', 'parque-tech']),
    ('b0000000-0000-0000-0000-000000000005', 'Grite Soluções & Inovação', 'Grite Soluções', '33.444.555/0001-66', 'Inovação & Consultoria', 'pequena', 'https://gritesolucoes.com.br', 'contato@gritesolucoes.com.br', '(81) 98888-7777', 'Recife', 'PE', 'grite', '#4C1D95', 'Consultoria especializada em inovação aberta, hackathons corporativos e programas de aceleração.', ARRAY['NIT', 'Parceira', 'Aceleração'])
ON CONFLICT (id) DO NOTHING;

-- 3. Inserir Startups
INSERT INTO startups (id, name, category, organization_id, logo_text, logo_bg, logo_type, trl, badge_type, tags, description, pitch_summary, website, email, responsible_name, city, state, status)
VALUES
    ('c0000000-0000-0000-0000-000000000001', 'B&G Talentos', 'EdTech & Talentos', 'b0000000-0000-0000-0000-000000000004', 'beg', '#1e1b4b', 'text', 'TRL 7 - Sistema operacional demonstrado em ambiente operacional', 'Startup', ARRAY['EdTech', 'Desenvolvimento', 'Capacitação', 'Inovação'], 'Plataforma de recrutamento inteligente e formação de novos talentos para o ecossistema de tecnologia e inovação de Pernambuco.', 'Conectamos desenvolvedores juniores e formandos a empresas líderes com trilhas de capacitação acelerada.', 'https://beg.recife.pe.br', 'contato@beg.com.br', 'Fernanda Lima', 'Recife', 'PE', 'Ativo'),
    ('c0000000-0000-0000-0000-000000000002', 'MVPEI Hub', 'Aceleração & Ideação', 'b0000000-0000-0000-0000-000000000002', 'MVPEI', '#ffffff', 'text', 'TRL 6 - Prototipagem em ambiente relevante', 'Startup', ARRAY['Ideação', 'Modelagem de Negócios', 'MVP', 'Aceleração'], 'Hub de prototipagem rápida e consultoria técnica para transformar ideias inovadoras em modelos de negócio validados e escaláveis.', 'Ajudamos fundadores a tirarem o MVP do papel em menos de 4 semanas com metodologia ágil.', 'https://mvpei.com.br', 'atendimento@mvpei.com.br', 'Lucas Gabriel', 'Recife', 'PE', 'Ativo'),
    ('c0000000-0000-0000-0000-000000000003', 'Saúde Auditiva Tech', 'HealthTech', NULL, NULL, NULL, 'coreto', 'TRL 8 - Sistema real completo e qualificado', 'Startup', ARRAY['HealthTech', 'Acessibilidade', 'Dispositivos Médicos', 'IA'], 'Solução em teleaudiologia e diagnóstico auditivo assistido por inteligência artificial para clínicas e unidades públicas de saúde.', 'Democratizando exames audiométricos em larga escala para redes públicas e privadas.', 'https://saudeauditiva.med.br', 'contato@saudeauditiva.med.br', 'Dra. Camilla Ribeiro', 'Recife', 'PE', 'Ativo'),
    ('c0000000-0000-0000-0000-000000000004', 'Curva ABC Gestão Inteligente', 'FinTech & Gestão', NULL, NULL, NULL, 'coreto', 'TRL 5 - Validação de componentes em ambiente relevante', 'Empresa Júnior', ARRAY['FinTech', 'Gestão Financeira', 'Empresa Júnior', 'Logística'], 'Ferramenta de otimização de controle de estoque e análise de curva ABC voltada para micro e pequenas empresas do comércio local.', 'Redução de custos operacionais e desperdício de estoque através de algoritmos preditivos.', 'https://curvaabc.com.br', 'projeto@curvaabc.org', 'Matheus Albuquerque', 'Recife', 'PE', 'Ativo'),
    ('c0000000-0000-0000-0000-000000000005', 'START Líderes Tech', 'EdTech & Liderança', 'b0000000-0000-0000-0000-000000000004', NULL, NULL, 'coreto', 'TRL 7 - Sistema demonstrado em ambiente operacional', 'Startup', ARRAY['Liderança', 'Treinamento', 'Educação Executiva', 'Mentoria'], 'Programa de desenvolvimento de lideranças em tecnologia e inovação com acompanhamento prático, mentoria de executivos e metodologias ágeis.', 'Formação executiva moderna para CTOs, Tech Leads e Product Managers do Nordeste.', 'https://startlideres.com.br', 'contato@startlideres.com.br', 'Juliana Mendonça', 'Recife', 'PE', 'Ativo'),
    ('c0000000-0000-0000-0000-000000000006', 'Recife Circular Resíduos', 'CleanTech & Sustentabilidade', 'b0000000-0000-0000-0000-000000000001', 'RCR', '#059669', 'text', 'TRL 6 - Prototipagem em ambiente relevante', 'Startup', ARRAY['CleanTech', 'Sustentabilidade', 'Economia Circular', 'Smart City'], 'Rastreabilidade de resíduos sólidos urbanos com incentivos gamificados para catadores e cooperativas.', 'Plataforma inteligente de logística reversa e créditos de reciclagem em Recife.', 'https://recifecircular.com.br', 'contato@recifecircular.com.br', 'Thiago Siqueira', 'Recife', 'PE', 'Ativo')
ON CONFLICT (id) DO NOTHING;

-- 4. Inserir Oportunidades & Desafios de Inovação Aberta
INSERT INTO opportunities (id, title, organization_id, organization_name, logo_text, logo_bg, deadline, budget_amount, budget_value, areas, support_types, description, requirements, benefits, status)
VALUES
    (
        'd0000000-0000-0000-0000-000000000001',
        'Energia Renovável Challenge 2026',
        'b0000000-0000-0000-0000-000000000002',
        'Polotec / UFPE',
        'polotec',
        '#BE123C',
        '2026-10-31',
        'R$ 500.000',
        500000.00,
        ARRAY['Energia e Sustentabilidade', 'Tecnologia da informação e comunicação'],
        ARRAY['Mentoria técnica', 'Acesso a laboratórios', 'Subvenção'],
        'Desafio aberto para captação de soluções inovadoras em energia limpa, solar, eólica e otimização de eficiência energética no ambiente urbano.',
        ARRAY['Propostas de startups de base tecnológica (TRL 4 ou superior)', 'Apresentação de protótipo ou MVP funcional', 'Equipe dedicada com pelo menos 2 integrantes'],
        ARRAY['Acesso ao parque de testes do Polotec UFPE', 'Mentoria com especialistas de mercado', 'Premiação em dinheiro e visibilidade institucional'],
        'Inscrições Abertas'
    ),
    (
        'd0000000-0000-0000-0000-000000000002',
        'Desafio Inclusão Financeira & GovTech',
        'b0000000-0000-0000-0000-000000000001',
        'Emprel / Prefeitura do Recife',
        'Emprel',
        '#003B6D',
        '2026-10-31',
        'R$ 5.000.000',
        5000000.00,
        ARRAY['Fintech', 'GovTech', 'Inclusão Social'],
        ARRAY['Fomento / recursos não reembolsáveis (editais de inovação)', 'Programas de aceleração'],
        'Iniciativa voltada ao desenvolvimento de tecnologias financeiras inclusivas para populações de baixa renda, microempreendedores e feirantes locais.',
        ARRAY['Soluções com foco em acessibilidade e facilidade de uso', 'Integração com sistemas municipais ou APIs abertas', 'Plano de sustentabilidade financeira a longo prazo'],
        ARRAY['Subvenção econômica até R$ 5.000.000 para contratados via EITA', 'Oportunidade de contratação pública direta', 'Suporte regulatório e jurídico especializado'],
        'Inscrições Abertas'
    ),
    (
        'd0000000-0000-0000-0000-000000000003',
        'Agro Sustentável PE & Alimentação Urbana',
        'b0000000-0000-0000-0000-000000000005',
        'ABSD / Grite Soluções',
        'grite',
        '#4C1D95',
        '2026-10-31',
        'R$ 350.000',
        350000.00,
        ARRAY['Cidades, mobilidade e urbanismo', 'Meio ambiente e sustentabilidade', 'Agronegócio e alimentação'],
        ARRAY['Fomento / recursos não reembolsáveis (editais de inovação)'],
        'Programa de incentivo a agrotechs e projetos sustentáveis de produção alimentícia urbana, hortas comunitárias e redução de desperdício.',
        ARRAY['Startups ou grupos de pesquisa do Estado de Pernambuco', 'Foco em impacto ambiental positivo e economia circular', 'Disponibilidade para imersões presenciais em Recife'],
        ARRAY['Aporte direto para compra de equipamentos', 'Conexão com rede de produtores e distribuidores regionais', 'Certificação de impacto ambiental verde'],
        'Inscrições Abertas'
    ),
    (
        'd0000000-0000-0000-0000-000000000004',
        'Mobilidade Inteligente & Trânsito Seguro',
        'b0000000-0000-0000-0000-000000000003',
        'SECTI Recife / CTTU',
        'SECTI',
        '#10B981',
        '2026-11-15',
        'R$ 1.200.000',
        1200000.00,
        ARRAY['Cidades, mobilidade e urbanismo', 'Inteligência Artificial', 'Visão Computacional'],
        ARRAY['Contratação Sandbox', 'Mentoria Técnica', 'Dados Abertos'],
        'Captação de soluções de visão computacional e algoritmos de otimização semafórica para redução de gargalos de tráfego e proteção aos pedestres e ciclistas.',
        ARRAY['TRL 6+', 'Capacidade de integração com câmeras públicas da CTTU', 'Conformidade com a LGPD'],
        ARRAY['Teste em ambiente real com dados ao vivo da cidade', 'Aporte financeiro para piloto de 6 meses', 'Possibilidade de contrato de fornecimento permanente'],
        'Inscrições Abertas'
    )
ON CONFLICT (id) DO NOTHING;

-- 5. Inserir Atores do Mapa do Ecossistema (com coordenadas SVG e conexões)
INSERT INTO ecosystem_actors (id, name, category_id, category_name, trl, neighborhood, map_x, map_y, description, website, email, color, connections)
VALUES
    ('e0000000-0000-0000-0000-000000000001', 'Porto Digital', 'hubs', 'Hubs & Co-workings', 9, 'Bairro do Recife', 48.50, 42.00, 'Parque tecnológico de classe mundial abrigando centenas de empresas inovadoras e instituições.', 'https://portodigital.org', 'contato@portodigital.org', '#10b981', ARRAY['e0000000-0000-0000-0000-000000000002', 'e0000000-0000-0000-0000-000000000003']),
    ('e0000000-0000-0000-0000-000000000002', 'EMPREL - Prefeitura do Recife', 'governo', 'Governo & Setor Público', 9, 'Boa Vista', 52.00, 45.00, 'Braço tecnológico do município, impulsionando a transformação digital e inovação pública.', 'https://emprel.recife.pe.gov.br', 'contato@emprel.recife.pe.gov.br', '#f59e0b', ARRAY['e0000000-0000-0000-0000-000000000001', 'e0000000-0000-0000-0000-000000000004']),
    ('e0000000-0000-0000-0000-000000000003', 'CESAR - Centro de Estudos e Sistemas Avançados', 'icts', 'ICTs & Academias', 9, 'Bairro do Recife', 49.20, 43.50, 'Centro de inovação e engenharia de software de referência internacional.', 'https://cesar.org.br', 'contato@cesar.org.br', '#a855f7', ARRAY['e0000000-0000-0000-0000-000000000001']),
    ('e0000000-0000-0000-0000-000000000004', 'Polotec UFPE', 'icts', 'ICTs & Academias', 8, 'Cidade Universitária', 35.00, 60.00, 'Polo Tecnológico e de Inovação da UFPE com laboratórios e incubadoras.', 'https://polotec.ufpe.br', 'polotec@ufpe.br', '#a855f7', ARRAY['e0000000-0000-0000-0000-000000000002', 'e0000000-0000-0000-0000-000000000005']),
    ('e0000000-0000-0000-0000-000000000005', 'B&G Talentos', 'startups', 'Startups & Scale-ups', 7, 'Bairro do Recife', 47.00, 40.00, 'Plataforma EdTech de matching e aceleração de talentos.', 'https://beg.recife.pe.br', 'contato@beg.com.br', '#00a8b5', ARRAY['e0000000-0000-0000-0000-000000000001']),
    ('e0000000-0000-0000-0000-000000000006', 'Jangada VC & Anjos do Nordeste', 'investidores', 'Investidores & VCs', 9, 'Boa Viagem', 62.00, 75.00, 'Fundo de Venture Capital e rede de investidores-anjo focados no ecossistema local.', 'https://jangadavc.com.br', 'invest@jangadavc.com.br', '#f43f5e', ARRAY['e0000000-0000-0000-0000-000000000001', 'e0000000-0000-0000-0000-000000000005']),
    ('e0000000-0000-0000-0000-000000000007', 'Armazém da Criatividade / Aceleradora', 'aceleradoras', 'Aceleradoras & Incubadoras', 8, 'Santo Amaro', 50.00, 38.00, 'Espaço de fomento ao design, economia criativa e aceleração de negócios.', 'https://armazemcriatividade.org.br', 'contato@armazemcriatividade.org.br', '#3b82f6', ARRAY['e0000000-0000-0000-0000-000000000001']),
    ('e0000000-0000-0000-0000-000000000008', 'FACEPE - Fundo de Apoio à Ciência e Tecnologia', 'fomento', 'Entidades de Fomento', 9, 'Madalena', 42.00, 50.00, 'Fundação de amparo à pesquisa e desenvolvimento científico do Estado de PE.', 'https://facepe.br', 'contato@facepe.br', '#6366f1', ARRAY['e0000000-0000-0000-0000-000000000004'])
ON CONFLICT (id) DO NOTHING;

-- 6. Inserir Programas Oficiais CORETO
INSERT INTO programs (id, code, name, edition, description, status, start_date, end_date)
VALUES
    ('f0000000-0000-0000-0000-000000000001', 'EITA_RECIFE_3', '3º Ciclo de Inovação Aberta e.i.t.a! Recife', '3º Ciclo', 'Programa municipal de inovação aberta para contratação e teste de soluções tecnológicas inovadoras para os desafios públicos do Recife.', 'ABERTO', '2025-01-15 00:00:00-03', '2026-12-31 23:59:59-03'),
    ('f0000000-0000-0000-0000-000000000002', 'NITRO_2026', 'NITRO 2026 - Aceleração de Startups', 'Edição 2026', 'Programa intensivo de aceleração, conexão corporativa e investimentos para startups do ecossistema pernambucano.', 'ABERTO', '2026-01-01 00:00:00-03', '2026-11-30 23:59:59-03'),
    ('f0000000-0000-0000-0000-000000000003', 'PREMIO_RECIFE_2025', 'Prêmio Recife de Inovação 2025', '2025', 'Reconhecimento oficial e premiação aos melhores projetos, startups e talentos inovadores da cidade.', 'EM_ANDAMENTO', '2025-06-01 00:00:00-03', '2025-12-31 23:59:59-03'),
    ('f0000000-0000-0000-0000-000000000004', 'HACKER_CIDADAO_13', 'Hacker Cidadão 13.0', '13.0', 'Maratona hacker anual de dados abertos e desenvolvimento cívico da Prefeitura do Recife.', 'ABERTO', '2026-03-01 00:00:00-03', '2026-09-30 23:59:59-03')
ON CONFLICT (code) DO NOTHING;

-- 7. Inserir Inscrições de Referência
INSERT INTO inscriptions (id, program_id, user_id, startup_id, track, title, form_data, status, score)
VALUES
    (
        '10000000-0000-0000-0000-000000000001',
        'f0000000-0000-0000-0000-000000000001',
        'a0000000-0000-0000-0000-000000000004',
        'c0000000-0000-0000-0000-000000000003',
        'Trilha E.I.T.A! Saúde Pública',
        'Diagnóstico Auditivo Automatizado para Redes Municipais',
        '{"trl": 8, "fase": "Piloto", "proposta": "Implementação de totens de triagem auditiva inteligente nas Policlínicas municipais", "orcamento_estimado": 450000}'::jsonb,
        'APROVADO',
        9.4
    ),
    (
        '10000000-0000-0000-0000-000000000002',
        'f0000000-0000-0000-0000-000000000002',
        'a0000000-0000-0000-0000-000000000007',
        'c0000000-0000-0000-0000-000000000001',
        'Track EdTech / Empregabilidade',
        'B&G Plataforma de Talentos para o Porto Digital',
        '{"trl": 7, "fase": "Escala", "proposta": "Capacitação acelerada de 500 jovens da rede pública em tecnologias Web3 e IA", "tempo_mercado_meses": 18}'::jsonb,
        'SELECIONADO',
        9.1
    ),
    (
        '10000000-0000-0000-0000-000000000003',
        'f0000000-0000-0000-0000-000000000004',
        'a0000000-0000-0000-0000-000000000003',
        NULL,
        'Desafio Dados Abertos e Mobilidade',
        'Painel Inteligente de Monitoramento Cicloviário do Recife',
        '{"linguagem": "Python / React", "integracao_api": "Dados Abertos Recife", "descricao": "Algoritmo de previsão de acidentes e mapeamento de fluxo de ciclistas"}'::jsonb,
        'CLASSIFICADO',
        8.8
    )
ON CONFLICT (id) DO NOTHING;

-- 8. Inserir Avaliações
INSERT INTO evaluations (inscription_id, evaluator_id, criteria_scores, overall_score, feedback, recommendation)
VALUES
    (
        '10000000-0000-0000-0000-000000000001',
        'a0000000-0000-0000-0000-000000000005',
        '{"inovacao": 9.5, "viabilidade_tecnica": 9.0, "impacto_social": 9.8, "equipe": 9.2}'::jsonb,
        9.4,
        'Projeto com alta maturidade tecnológica (TRL 8) e impacto social evidente para a atenção primária da saúde.',
        'APROVAR'
    );

-- 9. Inserir Iniciativas do Back Office
INSERT INTO initiatives (id, title, status, date_display, link, organization_id)
VALUES
    ('20000000-0000-0000-0000-000000000001', 'Historiando Recife', 'Ativo', '04/11/2024 16:44', 'https://coreto.recife.pe.gov.br/complete-inscricao/1730749484027x164971235190551680', 'b0000000-0000-0000-0000-000000000001'),
    ('20000000-0000-0000-0000-000000000002', 'Protege Recife', 'Ativo', '04/11/2024 16:44', 'https://coreto.recife.pe.gov.br/complete-inscricao/173074948204x759475313477279000', 'b0000000-0000-0000-0000-000000000001'),
    ('20000000-0000-0000-0000-000000000003', 'SAÚDE EM AÇÃO: Divulgação Científica e Chikungunya', 'Ativo', '04/11/2024 16:44', 'https://coreto.recife.pe.gov.br/complete-inscricao/1730749484217x677865333818280100', 'b0000000-0000-0000-0000-000000000002'),
    ('20000000-0000-0000-0000-000000000004', 'Comunicação Acessível entre Surdos e Ouvintes na Saúde', 'Ativo', '04/11/2024 16:44', 'https://coreto.recife.pe.gov.br/complete-inscricao/1730749484251x250235794954298140', 'b0000000-0000-0000-0000-000000000002')
ON CONFLICT (id) DO NOTHING;

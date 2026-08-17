-- =============================================================================
-- CORETO Database Schema - PostgreSQL DDL
-- Plataforma de Inovação Aberta e Ecossistema Empreendedor do Recife
-- =============================================================================

-- 1. Habilitar extensões úteis
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";
CREATE EXTENSION IF NOT EXISTS "citext";

-- 2. Função genérica para atualizar a coluna updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- -----------------------------------------------------------------------------
-- 3. Tabela: users (Usuários, Talentos, Resolvedores, Avaliadores, Gestores)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    keycloak_id VARCHAR(255) UNIQUE,
    name VARCHAR(255) NOT NULL,
    email CITEXT NOT NULL UNIQUE,
    role VARCHAR(50) NOT NULL DEFAULT 'TALENTO' CHECK (role IN ('ADMIN', 'AVALIADOR', 'EMPREENDEDOR', 'TALENTO', 'GESTOR_PUBLICO')),
    status VARCHAR(50) NOT NULL DEFAULT 'incompleto' CHECK (status IN ('completo', 'incompleto')),
    avatar_url TEXT,
    bio TEXT,
    phone VARCHAR(50),
    linkedin VARCHAR(255),
    github VARCHAR(255),
    skills TEXT[] DEFAULT '{}',
    tags TEXT[] DEFAULT '{}',
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER trg_users_updated_at
BEFORE UPDATE ON users
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
CREATE INDEX IF NOT EXISTS idx_users_status ON users(status);
CREATE INDEX IF NOT EXISTS idx_users_name_trgm ON users USING gin (name gin_trgm_ops);

-- -----------------------------------------------------------------------------
-- 4. Tabela: organizations (Organizações, Empresas, Órgãos Públicos, Hubs, ICTs)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS organizations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    trade_name VARCHAR(255),
    cnpj VARCHAR(20) UNIQUE,
    segment VARCHAR(100),
    size VARCHAR(50) DEFAULT 'media',
    website VARCHAR(255),
    email CITEXT,
    phone VARCHAR(50),
    address TEXT,
    city VARCHAR(100) DEFAULT 'Recife',
    state VARCHAR(2) DEFAULT 'PE',
    logo_url TEXT,
    logo_text VARCHAR(50),
    logo_bg VARCHAR(50),
    description TEXT,
    tags TEXT[] DEFAULT '{}',
    created_by UUID REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER trg_organizations_updated_at
BEFORE UPDATE ON organizations
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE INDEX IF NOT EXISTS idx_organizations_name_trgm ON organizations USING gin (name gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_organizations_segment ON organizations(segment);
CREATE INDEX IF NOT EXISTS idx_organizations_tags ON organizations USING gin (tags);

-- -----------------------------------------------------------------------------
-- 5. Tabela: startups (Startups & Scale-ups do Ecossistema)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS startups (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    organization_id UUID REFERENCES organizations(id) ON DELETE SET NULL,
    logo_text VARCHAR(50),
    logo_bg VARCHAR(50),
    logo_type VARCHAR(50) DEFAULT 'coreto' CHECK (logo_type IN ('custom', 'text', 'coreto')),
    trl VARCHAR(150),
    badge_type VARCHAR(50) DEFAULT 'Startup',
    tags TEXT[] DEFAULT '{}',
    description TEXT NOT NULL,
    pitch_summary TEXT,
    website VARCHAR(255),
    email CITEXT,
    responsible_name VARCHAR(255),
    city VARCHAR(100) DEFAULT 'Recife',
    state VARCHAR(2) DEFAULT 'PE',
    status VARCHAR(50) DEFAULT 'Ativo' CHECK (status IN ('Ativo', 'Inativo', 'Em Validação', 'Graduada')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER trg_startups_updated_at
BEFORE UPDATE ON startups
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE INDEX IF NOT EXISTS idx_startups_name_trgm ON startups USING gin (name gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_startups_category ON startups(category);
CREATE INDEX IF NOT EXISTS idx_startups_status ON startups(status);
CREATE INDEX IF NOT EXISTS idx_startups_tags ON startups USING gin (tags);

-- -----------------------------------------------------------------------------
-- 6. Tabela: opportunities (Oportunidades, Desafios Públicos e Editais)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS opportunities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    organization_id UUID REFERENCES organizations(id) ON DELETE SET NULL,
    organization_name VARCHAR(255) NOT NULL,
    logo_text VARCHAR(50),
    logo_bg VARCHAR(50),
    deadline DATE NOT NULL,
    budget_amount VARCHAR(50),
    budget_value NUMERIC(15, 2),
    areas TEXT[] DEFAULT '{}',
    support_types TEXT[] DEFAULT '{}',
    description TEXT NOT NULL,
    requirements TEXT[] DEFAULT '{}',
    benefits TEXT[] DEFAULT '{}',
    status VARCHAR(50) DEFAULT 'Inscrições Abertas' CHECK (status IN ('Inscrições Abertas', 'Em Avaliação', 'Concluído', 'Encerrado', 'Prorrogado')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER trg_opportunities_updated_at
BEFORE UPDATE ON opportunities
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE INDEX IF NOT EXISTS idx_opportunities_title_trgm ON opportunities USING gin (title gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_opportunities_status ON opportunities(status);
CREATE INDEX IF NOT EXISTS idx_opportunities_deadline ON opportunities(deadline);
CREATE INDEX IF NOT EXISTS idx_opportunities_areas ON opportunities USING gin (areas);

-- -----------------------------------------------------------------------------
-- 7. Tabela: ecosystem_actors (Atores do Mapa do Ecossistema de Inovação)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS ecosystem_actors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    category_id VARCHAR(50) NOT NULL CHECK (category_id IN ('startups', 'icts', 'hubs', 'governo', 'investidores', 'aceleradoras', 'fomento')),
    category_name VARCHAR(100) NOT NULL,
    trl INT DEFAULT 1 CHECK (trl BETWEEN 1 AND 9),
    neighborhood VARCHAR(100) NOT NULL,
    map_x NUMERIC(6, 2) NOT NULL,
    map_y NUMERIC(6, 2) NOT NULL,
    description TEXT,
    website VARCHAR(255),
    email CITEXT,
    color VARCHAR(50),
    connections TEXT[] DEFAULT '{}',
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER trg_ecosystem_actors_updated_at
BEFORE UPDATE ON ecosystem_actors
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE INDEX IF NOT EXISTS idx_ecosystem_actors_category ON ecosystem_actors(category_id);
CREATE INDEX IF NOT EXISTS idx_ecosystem_actors_neighborhood ON ecosystem_actors(neighborhood);

-- -----------------------------------------------------------------------------
-- 8. Tabela: programs (Programas, Ciclos e Concursos de Inovação)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS programs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    edition VARCHAR(50),
    description TEXT,
    banner_url TEXT,
    regulations_url TEXT,
    start_date TIMESTAMPTZ,
    end_date TIMESTAMPTZ,
    status VARCHAR(50) DEFAULT 'ABERTO' CHECK (status IN ('ABERTO', 'EM_ANDAMENTO', 'AVALIACAO', 'ENCERRADO')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER trg_programs_updated_at
BEFORE UPDATE ON programs
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE INDEX IF NOT EXISTS idx_programs_code ON programs(code);
CREATE INDEX IF NOT EXISTS idx_programs_status ON programs(status);

-- -----------------------------------------------------------------------------
-- 9. Tabela: inscriptions (Inscrições e Submissões em Programas e Editais)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS inscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    program_id UUID REFERENCES programs(id) ON DELETE CASCADE,
    opportunity_id UUID REFERENCES opportunities(id) ON DELETE SET NULL,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    startup_id UUID REFERENCES startups(id) ON DELETE SET NULL,
    organization_id UUID REFERENCES organizations(id) ON DELETE SET NULL,
    track VARCHAR(100),
    title VARCHAR(255) NOT NULL,
    form_data JSONB NOT NULL DEFAULT '{}'::jsonb,
    status VARCHAR(50) DEFAULT 'INSCRITO' CHECK (status IN ('INSCRITO', 'EM_ANALISE', 'APROVADO', 'REJEITADO', 'CLASSIFICADO', 'SELECIONADO')),
    score NUMERIC(5, 2),
    submitted_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER trg_inscriptions_updated_at
BEFORE UPDATE ON inscriptions
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE INDEX IF NOT EXISTS idx_inscriptions_program ON inscriptions(program_id);
CREATE INDEX IF NOT EXISTS idx_inscriptions_user ON inscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_inscriptions_startup ON inscriptions(startup_id);
CREATE INDEX IF NOT EXISTS idx_inscriptions_status ON inscriptions(status);
CREATE INDEX IF NOT EXISTS idx_inscriptions_form_data ON inscriptions USING gin (form_data);

-- -----------------------------------------------------------------------------
-- 10. Tabela: evaluations (Avaliações dos Avaliadores de Programas e Editais)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS evaluations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    inscription_id UUID REFERENCES inscriptions(id) ON DELETE CASCADE,
    evaluator_id UUID REFERENCES users(id) ON DELETE CASCADE,
    criteria_scores JSONB NOT NULL DEFAULT '{}'::jsonb,
    overall_score NUMERIC(5, 2) NOT NULL,
    feedback TEXT,
    recommendation VARCHAR(50) DEFAULT 'APROVAR' CHECK (recommendation IN ('APROVAR', 'RESSALVAS', 'REJEITAR')),
    evaluated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_evaluations_inscription ON evaluations(inscription_id);
CREATE INDEX IF NOT EXISTS idx_evaluations_evaluator ON evaluations(evaluator_id);

-- -----------------------------------------------------------------------------
-- 11. Tabela: initiatives (Iniciativas e Projetos do Back Office)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS initiatives (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    status VARCHAR(50) DEFAULT 'Ativo' CHECK (status IN ('Ativo', 'Pendente', 'Concluído', 'Cancelado')),
    date_display VARCHAR(50),
    link TEXT,
    organization_id UUID REFERENCES organizations(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER trg_initiatives_updated_at
BEFORE UPDATE ON initiatives
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE INDEX IF NOT EXISTS idx_initiatives_status ON initiatives(status);

-- -----------------------------------------------------------------------------
-- 12. Tabela: pitches (NETpitch e Layla Pitch Generator)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS pitches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    startup_id UUID REFERENCES startups(id) ON DELETE SET NULL,
    target_audience VARCHAR(100),
    problem_statement TEXT,
    solution_statement TEXT,
    business_model TEXT,
    market_size TEXT,
    traction TEXT,
    generated_pitch_text TEXT,
    duration_seconds INT DEFAULT 180,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_pitches_user ON pitches(user_id);
CREATE INDEX IF NOT EXISTS idx_pitches_startup ON pitches(startup_id);

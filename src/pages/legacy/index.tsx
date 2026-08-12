import { Link } from 'react-router-dom'
import Header from '../../components/Header'

// ─────────────────────────────────────────────
// Registro de páginas do legado Bubble
// Adicione uma entrada aqui sempre que uma nova
// página for convertida para React.
// ─────────────────────────────────────────────
interface LegacyPage {
  slug: string
  name: string
  description: string
  status: 'done' | 'in-progress' | 'pending'
}

const LEGACY_PAGES: LegacyPage[] = [
  {
    slug: '404',
    name: 'Página de Erro 404',
    description: 'Página de erro 404 padrão quando um link não existe, com mensagem amigável, imagem ilustrativa e links de navegação.',
    status: 'done',
  },
  {
    slug: 'home',
    name: 'Home — Portal Principal CORETO',
    description: 'Página inicial do portal CORETO com busca rápida de oportunidades/resolvedores/organizações, cards de destaques e oportunidades em destaque.',
    status: 'done',
  },
  {
    slug: 'home-arianov0',
    name: 'Home — Ariano Call / Portal CORETO',
    description: 'Página inicial completa do ecossistema CORETO com busca de oportunidades, atalhos do Ariano Call e feeds de resolvedores/organizadores.',
    status: 'done',
  },
  {
    slug: 'avaliador-premiorec',
    name: 'Área do Avaliador — Meus Programas',
    description: 'Painel Kanban de acompanhamento e avaliação de inscrições por fases.',
    status: 'done',
  },
  {
    slug: 'avaliador-trilha',
    name: 'Área do Avaliador — Trilha E.I.T.A! Recife',
    description: 'Painel de acompanhamento e avaliação por critérios de propostas submetidas no 3º Ciclo E.I.T.A! Recife.',
    status: 'done',
  },
  {
    slug: 'bo',
    name: 'Back Office (BO) — Painel de Operações',
    description: 'Painel administrativo e operacional com métricas gerais, gestão de Organizações, Iniciativas, Usuários e disparos de Operações Críticas.',
    status: 'done',
  },
  {
    slug: 'caminhos-fase2',
    name: 'Trilha Caminhos — Centelha PE',
    description: 'Trilha de capacitação e submissão de propostas para o edital Centelha PE, com mentorias sob demanda, suporte com IA e aulas 100% online.',
    status: 'done',
  },
  {
    slug: 'complete-inscricao',
    name: 'Conclusão de Cadastro — Startup & Resolvedor',
    description: 'Formulário de conclusão de cadastro da startup com papel, dedicação, pitch, gerador de assuntos de conexão com IA e CNPJ.',
    status: 'done',
  },
  {
    slug: 'eita',
    name: '3º Ciclo de Inovação Aberta e.i.t.a! Recife',
    description: 'Portal oficial do 3º Ciclo E.I.T.A! Recife com fases, desafios públicos, prototipagem, MVP, discord e interação.',
    status: 'done',
  },
  {
    slug: 'hackercidadao',
    name: 'Hacker Cidadão 13.0',
    description: 'Portal oficial da maratona de inovação com desafios, cronograma, prêmios, curadores e regulamento.',
    status: 'done',
  },
  {
    slug: 'inscricao-conexoes',
    name: 'Criar Conexão — Bora criar teu perfil?',
    description: 'Formulário de cadastro de perfil pessoal e da startup com assistente IA, seleção de categorias e upload de avatar/logo.',
    status: 'done',
  },
  {
    slug: 'inscricao-desafio',
    name: 'Crie seu Desafio em CORETO',
    description: 'Formulário completo com turbinador de campos via IA, gerador de tags e validade.',
    status: 'done',
  },
  {
    slug: 'inscricao-desafio-v1',
    name: 'Crie sua Oportunidade (V1)',
    description: 'Formulário de criação e cadastro de oportunidades em 3 etapas.',
    status: 'done',
  },
  {
    slug: 'inscricao-evento',
    name: 'Inscrição no Novo Coreto',
    description: 'Página de pré-inscrição de evento com banner hero, cadastro completo e modal de organizador.',
    status: 'done',
  },
  {
    slug: 'inscricao-organizacao',
    name: 'Cadastrar Organização',
    description: 'Formulário completo para cadastro de empresas/organizações com upload de logo/banner, redes sociais, permissões e assuntos relacionados.',
    status: 'done',
  },
  {
    slug: 'inscricao-resolvedor',
    name: 'Cadastro de Resolvedores',
    description: 'Formulário de cadastro de resolvedores (startups, projetos de inovação, laboratórios) em 2 etapas com TRL, áreas de atuação e tipos de parceria.',
    status: 'done',
  },
  {
    slug: 'inscricao-startup',
    name: 'Inscrição Startup (Iniciativa)',
    description: 'Formulário de cadastro e inscrição de startups em 3 etapas (Iniciativa, Conexões e Time) com upload de logo/banner, pitch, TRL e áreas temáticas.',
    status: 'done',
  },
  {
    slug: 'inscricao-talento',
    name: 'Perfil de Talento',
    description: 'Formulário de perfil e cadastro de talentos com dados pessoais, escolaridade, atuação profissional, palavras-chave e preferências.',
    status: 'done',
  },
  {
    slug: 'inscricao-v2_1',
    name: 'Perfil de Talento (V2.1)',
    description: 'Formulário completo de perfil de talento V2.1 com foto de perfil, dados pessoais, profissionais, assuntos de conexão e notificações.',
    status: 'done',
  },
  {
    slug: 'mapa-ecossistema',
    name: 'Mapa do Ecossistema',
    description: 'Mapa interativo do ecossistema de inovação da cidade com visualização de atores, conexões, categorias, indicadores e importação.',
    status: 'done',
  },
  {
    slug: 'matchariano',
    name: 'Matching com Coreto (Totem 1080x1920)',
    description: 'Totem interativo de matching para o REC\'n\'PLAY 2025 com resolução 1080x1920, quiz de 3 etapas e recomendação de oportunidades e conexões.',
    status: 'done',
  },
  {
    slug: 'meu_eco-organizacoes',
    name: 'Ecossistema - Organizações',
    description: 'Diretório de organizações parceiras de Recife com busca em tempo real, filtro por categorias, visualização de tags e modal de detalhes.',
    status: 'done',
  },
  {
    slug: 'netpitch',
    name: 'NETpitch (IA Pitch Builder)',
    description: 'Plataforma de desenvolvimento de ideias de inovação e geração de pitches executivos com IA, perguntas dinâmicas e exportação.',
    status: 'done',
  },
  {
    slug: 'netpitchv2',
    name: 'NETpitch V2 (Gerador de Pitches com Layla)',
    description: 'Nova página do NETPitch com escolha entre Versão Estendida (20 slides, assistente Layla) e Versão Reduzida (5 perguntas), validação de respostas e download.',
    status: 'done',
  },
  {
    slug: 'nitro',
    name: 'NITRO 2026',
    description: 'Trilha de inovação e transferência tecnológica com editais, abas de navegação, avisos de prazo encerrado (001 e 003) e pop-up de inscrição de software (002) para Startup PJ e Inventor PF.',
    status: 'done',
  },
  {
    slug: 'nitro-inscricoes',
    name: 'Dashboard Inscrições NITRO 2026',
    description: 'Painel administrativo com submissões dos Editais 001, 002 e 003, modais de detalhes completos para cada edital e exportação CSV.',
    status: 'done',
  },
  {
    slug: 'oportunidades',
    name: 'Oportunidades & Desafios',
    description: 'Vitrine de oportunidades do ecossistema com busca em tempo real, desafios abertos, tags de áreas temáticas e apoio oferecido, e modal de detalhes.',
    status: 'done',
  },
  {
    slug: 'parcerias-inovadoras',
    name: 'Escritório de Parcerias Inovadoras',
    description: 'Inscrição para o Escritório de Parcerias Inovadoras com fluxo de introdução e formulário de dados gerais do projeto.',
    status: 'done',
  },
  {
    slug: 'premio-inovacao-rec',
    name: 'Prêmio Recife de Inovação 2025',
    description: 'Página oficial do Prêmio Recife de Inovação com abas de Início, Categorias expansíveis, Cronograma detalhado, Banca Avaliadora, Resultados com links e Área do Avaliador.',
    status: 'done',
  },
  {
    slug: 'quizz-descubra_seu_lugar',
    name: 'Quiz: Descubra o Seu Lugar na Inovação',
    description: 'Quiz interativo de 5 perguntas para descobrir seu papel e perfil no ecossistema de inovação (REC\'n\'PLAY / CORETO) com tela de resultado e badge de perfil.',
    status: 'done',
  },
  {
    slug: 'startupworldcup',
    name: 'Startup World Cup 2025 Regional Recife',
    description: 'Portal oficial da etapa regional Recife da maior competição de startups do mundo com prêmio de US$ 1.000.000 no Vale do Silício, calendário, parceiros e pré-inscrição.',
    status: 'done',
  },
  {
    slug: 'startups_e_meu_ecossistema',
    name: 'Startups & Meu Ecossistema',
    description: 'Vitrine de startups do ecossistema do Recife com busca em tempo real, filtro por categorias, cards interativos e modal de detalhes com informações e contatos.',
    status: 'done',
  },
  {
    slug: 'trilha-eita',
    name: 'Trilha e.i.t.a! Recife (3º Ciclo Inovação Aberta)',
    description: 'Página da Trilha e.i.t.a! Recife com banner oficial, abas, botão de adicionar coluna, e formulário de inscrição em 7 seções e sub-seções sanfonadas com editor rico e upload.',
    status: 'done',
  },
]

const statusLabel: Record<LegacyPage['status'], string> = {
  done: '✅ Convertida',
  'in-progress': '🔄 Em progresso',
  pending: '⏳ Pendente',
}

const statusColor: Record<LegacyPage['status'], string> = {
  done: '#22c55e',
  'in-progress': '#f59e0b',
  pending: '#94a3b8',
}

export default function LegacyIndexPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0f172a' }}>
      <Header />
      <div
        style={{
          flex: 1,
          color: '#f1f5f9',
          fontFamily: "'Inter', 'Segoe UI', sans-serif",
          padding: '48px 32px',
        }}
      >
      {/* Header */}
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: 8 }}>
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(99,102,241,0.15)',
              color: '#818cf8',
              border: '1px solid rgba(99,102,241,0.3)',
              borderRadius: 6,
              padding: '4px 12px',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Área restrita — Somente admins
          </span>
        </div>

        <h1
          style={{
            fontSize: 36,
            fontWeight: 800,
            marginTop: 16,
            marginBottom: 8,
            background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          CORETO — Legado Bubble
        </h1>
        <p style={{ color: '#94a3b8', fontSize: 16, marginBottom: 48, maxWidth: 600 }}>
          Arquivo histórico da plataforma CORETO antes da migração. Cada página abaixo
          é uma conversão fiel da versão Bubble para React, com dados estáticos.
        </p>

        {/* Stats bar */}
        <div
          style={{
            display: 'flex',
            gap: 24,
            marginBottom: 48,
            padding: '16px 24px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 12,
          }}
        >
          <Stat label="Total de páginas" value={LEGACY_PAGES.length || 0} />
          <Stat label="Convertidas" value={LEGACY_PAGES.filter(p => p.status === 'done').length} color="#22c55e" />
          <Stat label="Em progresso" value={LEGACY_PAGES.filter(p => p.status === 'in-progress').length} color="#f59e0b" />
          <Stat label="Pendentes" value={LEGACY_PAGES.filter(p => p.status === 'pending').length} color="#94a3b8" />
        </div>

        {/* Pages grid */}
        {LEGACY_PAGES.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '64px 32px',
              border: '1px dashed rgba(255,255,255,0.1)',
              borderRadius: 16,
              color: '#475569',
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 16 }}>📭</div>
            <p style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#64748b' }}>
              Nenhuma página convertida ainda
            </p>
            <p style={{ fontSize: 14 }}>
              Envie o HTML + screenshot de uma página do Bubble para iniciar a conversão.
            </p>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 16,
            }}
          >
            {LEGACY_PAGES.map(page => (
              <PageCard key={page.slug} page={page} />
            ))}
          </div>
        )}
      </div>
    </div>
    </div>
  )
}

// ─── Sub-componentes ───────────────────────────

function Stat({ label, value, color = '#f1f5f9' }: { label: string; value: number; color?: string }) {
  return (
    <div>
      <div style={{ fontSize: 28, fontWeight: 700, color }}>{value}</div>
      <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>{label}</div>
    </div>
  )
}

function PageCard({ page }: { page: LegacyPage }) {
  const isDone = page.status === 'done'

  const inner = (
    <div
      style={{
        padding: 20,
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${isDone ? 'rgba(99,102,241,0.3)' : 'rgba(255,255,255,0.06)'}`,
        borderRadius: 12,
        transition: 'all 0.2s ease',
        cursor: isDone ? 'pointer' : 'default',
        opacity: isDone ? 1 : 0.6,
      }}
      onMouseEnter={e => {
        if (isDone) (e.currentTarget as HTMLDivElement).style.background = 'rgba(99,102,241,0.08)'
      }}
      onMouseLeave={e => {
        if (isDone) (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.03)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
        <span
          style={{
            fontFamily: 'monospace',
            fontSize: 12,
            color: '#818cf8',
            background: 'rgba(99,102,241,0.1)',
            padding: '2px 8px',
            borderRadius: 4,
          }}
        >
          /legacy/{page.slug}
        </span>
        <span style={{ fontSize: 12, color: statusColor[page.status] }}>
          {statusLabel[page.status]}
        </span>
      </div>
      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 6 }}>{page.name}</div>
      <div style={{ fontSize: 13, color: '#64748b' }}>{page.description}</div>
    </div>
  )

  return isDone ? (
    <Link to={`/legacy/${page.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      {inner}
    </Link>
  ) : (
    <div>{inner}</div>
  )
}

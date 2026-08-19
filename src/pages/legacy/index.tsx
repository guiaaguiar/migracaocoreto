import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Search,
} from 'lucide-react'
import Header from '../../components/Header'

import caminhosIcon from '../../assets/caminhos-icone.png'
import eitaIcon from '../../assets/eita-icone.png'
import hackerIcon from '../../assets/hacker-icone.png'
import nitroIcon from '../../assets/nitro-icone.png'
import startupIcon from '../../assets/startup-icone.png'
import premioIcon from '../../assets/premio-icone.png'

// ─────────────────────────────────────────────
// Registro de programas em destaque (Atalhos)
// ─────────────────────────────────────────────
interface ProgramItem {
  id: string
  name: string
  iconImg: string
  iconColor: string
  iconBg: string
  accentBorder: string
  glowColor: string
  badge: string
  tagline: string
  description: string
  mainSlug: string
  pages: { slug: string; name: string }[]
}

const FEATURED_PROGRAMS: ProgramItem[] = [
  {
    id: 'eita',
    name: 'e.i.t.a! Recife',
    iconImg: eitaIcon,
    iconColor: '#38bdf8',
    iconBg: 'rgba(56, 189, 248, 0.12)',
    accentBorder: 'rgba(56, 189, 248, 0.35)',
    glowColor: 'rgba(56, 189, 248, 0.25)',
    badge: 'Inovação Aberta',
    tagline: '3º Ciclo de Inovação Aberta',
    description: 'Portal oficial do 3º Ciclo com desafios públicos, trilha de submissão e painel de avaliação.',
    mainSlug: 'eita',
    pages: [
      { slug: 'eita', name: 'Página Principal' },
      { slug: 'trilha-eita', name: 'Trilha de Submissão' },
      { slug: 'avaliador-trilha', name: 'Área do Avaliador' },
    ],
  },
  {
    id: 'nitro',
    name: 'NITRO 2026',
    iconImg: nitroIcon,
    iconColor: '#f59e0b',
    iconBg: 'rgba(245, 158, 11, 0.12)',
    accentBorder: 'rgba(245, 158, 11, 0.35)',
    glowColor: 'rgba(245, 158, 11, 0.25)',
    badge: 'Aceleração & TT',
    tagline: 'Transferência Tecnológica',
    description: 'Programa de aceleração e transferência tecnológica com editais abertos e gestão de inscrições.',
    mainSlug: 'nitro',
    pages: [
      { slug: 'nitro', name: 'Página NITRO 2026' },
      { slug: 'nitro-inscricoes', name: 'Painel de Inscrições' },
    ],
  },
  {
    id: 'swc',
    name: 'Startup World Cup',
    iconImg: startupIcon,
    iconColor: '#a855f7',
    iconBg: 'rgba(168, 85, 247, 0.12)',
    accentBorder: 'rgba(168, 85, 247, 0.35)',
    glowColor: 'rgba(168, 85, 247, 0.25)',
    badge: 'Competição Global',
    tagline: 'Regional Recife',
    description: 'Maior competição de startups do mundo com seletiva regional e premiação internacional.',
    mainSlug: 'startupworldcup',
    pages: [
      { slug: 'startupworldcup', name: 'Página Oficial' },
    ],
  },
  {
    id: 'premio',
    name: 'Prêmio Recife de Inovação',
    iconImg: premioIcon,
    iconColor: '#ec4899',
    iconBg: 'rgba(236, 72, 153, 0.12)',
    accentBorder: 'rgba(236, 72, 153, 0.35)',
    glowColor: 'rgba(236, 72, 153, 0.25)',
    badge: 'Reconhecimento',
    tagline: 'Prêmio de Inovação 2025',
    description: 'Reconhecimento de projetos e iniciativas de destaque, com portal oficial e painel de avaliação.',
    mainSlug: 'premio-inovacao-rec',
    pages: [
      { slug: 'premio-inovacao-rec', name: 'Página do Prêmio' },
      { slug: 'premiorec-submissoes', name: 'Dashboard Submissões' },
      { slug: 'premiorec-avaliacoes-fase1', name: 'Avaliações 1ª Fase' },
      { slug: 'premiorec-avaliacoes-fase2', name: 'Avaliações 2ª Fase' },
      { slug: 'avaliador-premiorec', name: 'Área do Avaliador' },
    ],
  },
  {
    id: 'hacker',
    name: 'Hacker Cidadão 13.0',
    iconImg: hackerIcon,
    iconColor: '#10b981',
    iconBg: 'rgba(16, 185, 129, 0.12)',
    accentBorder: 'rgba(16, 185, 129, 0.35)',
    glowColor: 'rgba(16, 185, 129, 0.25)',
    badge: 'Hackathon',
    tagline: 'Maratona de Inovação',
    description: 'Maratona com dados abertos da Prefeitura do Recife, desafios da cidade e premiações.',
    mainSlug: 'hackercidadao',
    pages: [
      { slug: 'hackercidadao', name: 'Portal Hacker Cidadão' },
    ],
  },
  {
    id: 'caminhos',
    name: 'Trilha Caminhos',
    iconImg: caminhosIcon,
    iconColor: '#6366f1',
    iconBg: 'rgba(99, 102, 241, 0.12)',
    accentBorder: 'rgba(99, 102, 241, 0.35)',
    glowColor: 'rgba(99, 102, 241, 0.25)',
    badge: 'Centelha PE',
    tagline: 'Capacitação & Edital',
    description: 'Trilha preparatória e de capacitação para submissão de propostas ao edital Centelha PE.',
    mainSlug: 'caminhos-fase2',
    pages: [
      { slug: 'caminhos-fase2', name: 'Trilha Centelha PE' },
    ],
  },
]

// ─────────────────────────────────────────────
// Registro de páginas do legado Bubble
// ─────────────────────────────────────────────
interface LegacyPage {
  slug: string
  name: string
  description: string
  programId?: string
  status: 'done' | 'in-progress' | 'pending'
  previewUrl?: string
}

const LEGACY_PAGES: LegacyPage[] = [
  {
    slug: '404',
    name: 'Página de Erro 404',
    description: 'Página de erro 404 padrão quando um link não existe, com mensagem amigável e links.',
    status: 'done',
  },
  {
    slug: 'home',
    name: 'Home — Portal Principal CORETO',
    description: 'Página inicial do portal CORETO com busca rápida de oportunidades, cards de destaques.',
    status: 'done',
  },
  {
    slug: 'home-arianov0',
    name: 'Home — Ariano Call / Portal CORETO',
    description: 'Página inicial com busca de oportunidades, atalhos Ariano Call e feeds.',
    status: 'done',
  },
  {
    slug: 'avaliador-premiorec',
    name: 'Área do Avaliador — Meus Programas',
    description: 'Painel Kanban de acompanhamento e avaliação de inscrições por fases.',
    programId: 'premio',
    status: 'done',
  },
  {
    slug: 'avaliador-trilha',
    name: 'Área do Avaliador — Trilha E.I.T.A! Recife',
    description: 'Painel de acompanhamento e avaliação por critérios no 3º Ciclo E.I.T.A! Recife.',
    programId: 'eita',
    status: 'done',
  },
  {
    slug: 'bo',
    name: 'Back Office (BO) — Painel de Operações',
    description: 'Painel administrativo com métricas gerais, gestão de Organizações, Usuários e Operações Críticas.',
    status: 'done',
  },
  {
    slug: 'caminhos-fase2',
    name: 'Trilha Caminhos — Centelha PE',
    description: 'Trilha de capacitação e submissão Centelha PE, com mentorias e suporte com IA.',
    programId: 'caminhos',
    status: 'done',
  },
  {
    slug: 'complete-inscricao',
    name: 'Conclusão de Cadastro — Startup & Resolvedor',
    description: 'Formulário de conclusão de cadastro da startup com papel, pitch e gerador com IA.',
    status: 'done',
  },
  {
    slug: 'eita',
    name: '3º Ciclo de Inovação Aberta e.i.t.a! Recife',
    description: 'Portal oficial do 3º Ciclo E.I.T.A! Recife com fases, desafios públicos e MVP.',
    programId: 'eita',
    status: 'done',
  },
  {
    slug: 'hackercidadao',
    name: 'Hacker Cidadão 13.0',
    description: 'Portal oficial da maratona de inovação com desafios, cronograma, prêmios e regulamento.',
    programId: 'hacker',
    status: 'done',
  },
  {
    slug: 'inscricao-conexoes',
    name: 'Criar Conexão — Bora criar teu perfil?',
    description: 'Formulário de cadastro de perfil pessoal e da startup com assistente IA.',
    status: 'done',
  },
  {
    slug: 'inscricao-desafio',
    name: 'Crie seu Desafio em CORETO',
    description: 'Formulário completo com turbinador de campos via IA e gerador de tags.',
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
    description: 'Página de pré-inscrição de evento com banner hero e modal de organizador.',
    status: 'done',
  },
  {
    slug: 'inscricao-organizacao',
    name: 'Cadastrar Organização',
    description: 'Formulário completo para cadastro de empresas com upload de logo/banner e permissões.',
    status: 'done',
  },
  {
    slug: 'inscricao-resolvedor',
    name: 'Cadastro de Resolvedores',
    description: 'Formulário de cadastro de resolvedores em 2 etapas com TRL e áreas de atuação.',
    status: 'done',
  },
  {
    slug: 'inscricao-startup',
    name: 'Inscrição Startup (Iniciativa)',
    description: 'Formulário de cadastro de startups em 3 etapas com pitch, TRL e áreas temáticas.',
    status: 'done',
  },
  {
    slug: 'inscricao-talento',
    name: 'Perfil de Talento',
    description: 'Formulário de perfil e cadastro de talentos com dados pessoais e atuação profissional.',
    status: 'done',
  },
  {
    slug: 'inscricao-v2_1',
    name: 'Perfil de Talento (V2.1)',
    description: 'Formulário completo de perfil de talento V2.1 com foto, dados pessoais e preferências.',
    status: 'done',
  },
  {
    slug: 'mapa-ecossistema',
    name: 'Mapa do Ecossistema',
    description: 'Mapa interativo do ecossistema de inovação da cidade com visualização de atores.',
    status: 'done',
  },
  {
    slug: 'matchariano',
    name: 'Matching com Coreto (Totem 1080x1920)',
    description: 'Totem interativo de matching para o REC\'n\'PLAY com recomendação de conexões.',
    status: 'done',
  },
  {
    slug: 'meu_eco-organizacoes',
    name: 'Ecossistema - Organizações',
    description: 'Diretório de organizações parceiras de Recife com busca em tempo real e filtros.',
    status: 'done',
  },
  {
    slug: 'netpitch',
    name: 'NETpitch (IA Pitch Builder)',
    description: 'Plataforma de desenvolvimento de ideias de inovação e geração de pitches com IA.',
    status: 'done',
  },
  {
    slug: 'netpitchv2',
    name: 'NETpitch V2 (Gerador de Pitches com Layla)',
    description: 'Gerador de pitches com assistente Layla (Versão Estendida e Reduzida).',
    status: 'done',
  },
  {
    slug: 'nitro',
    name: 'NITRO 2026',
    description: 'Trilha de inovação e transferência tecnológica com editais e pop-up de inscrição.',
    programId: 'nitro',
    status: 'done',
  },
  {
    slug: 'nitro-inscricoes',
    name: 'Dashboard Inscrições NITRO 2026',
    description: 'Painel administrativo com submissões dos Editais 001, 002 e 003 e exportação CSV.',
    programId: 'nitro',
    status: 'done',
  },
  {
    slug: 'oportunidades',
    name: 'Oportunidades & Desafios',
    description: 'Vitrine de oportunidades do ecossistema com busca em tempo real e modal de detalhes.',
    status: 'done',
  },
  {
    slug: 'parcerias-inovadoras',
    name: 'Escritório de Parcerias Inovadoras',
    description: 'Inscrição para o Escritório de Parcerias Inovadoras com formulário de dados gerais.',
    status: 'done',
  },
  {
    slug: 'premio-inovacao-rec',
    name: 'Prêmio Recife de Inovação 2025',
    description: 'Página oficial do Prêmio Recife de Inovação com abas, cronograma e resultados.',
    programId: 'premio',
    status: 'done',
  },
  {
    slug: 'premiorec-submissoes',
    name: 'Dashboard Submissões Prêmio Rec',
    description: 'Painel com todas as 164 submissões, filtros por eixo e fases, detalhes completos e exportação CSV.',
    programId: 'premio',
    status: 'done',
  },
  {
    slug: 'premiorec-avaliacoes-fase1',
    name: 'Dashboard Avaliações 1ª Fase — Prêmio Rec',
    description: 'Painel com 107 pareceres da 1ª fase de admissibilidade, pareceres dos mentores e links diretos.',
    programId: 'premio',
    status: 'done',
  },
  {
    slug: 'premiorec-avaliacoes-fase2',
    name: 'Dashboard Avaliações 2ª Fase — Prêmio Rec',
    description: 'Painel com 266 avaliações de mérito, notas consolidadas da banca final e pareceres dos jurados.',
    programId: 'premio',
    status: 'done',
  },
  {
    slug: 'quizz-descubra_seu_lugar',
    name: 'Quiz: Descubra o Seu Lugar na Inovação',
    description: 'Quiz interativo de 5 perguntas para descobrir seu perfil no ecossistema.',
    status: 'done',
  },
  {
    slug: 'startupworldcup',
    name: 'Startup World Cup 2025 Regional Recife',
    description: 'Portal oficial da etapa regional Recife da competição de startups.',
    programId: 'swc',
    status: 'done',
  },
  {
    slug: 'startups_e_meu_ecossistema',
    name: 'Startups & Meu Ecossistema',
    description: 'Vitrine de startups do ecossistema do Recife com busca em tempo real.',
    status: 'done',
  },
  {
    slug: 'trilha-eita',
    name: 'Trilha e.i.t.a! Recife (3º Ciclo Inovação Aberta)',
    description: 'Página da Trilha e.i.t.a! Recife com formulário de inscrição em 7 seções.',
    programId: 'eita',
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
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPages = LEGACY_PAGES.filter(page => {
    const matchesSearch =
      page.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.slug.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#090d16' }}>
      <Header />
      <div
        style={{
          flex: 1,
          color: '#f1f5f9',
          fontFamily: "'Inter', 'Segoe UI', sans-serif",
          padding: '40px 24px 80px',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Header Tag */}
          <div style={{ marginBottom: 12 }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(99,102,241,0.15)',
                color: '#818cf8',
                border: '1px solid rgba(99,102,241,0.3)',
                borderRadius: 20,
                padding: '4px 14px',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Dashboard de Migração • Legado Bubble → React
            </span>
          </div>

          <h1
            style={{
              fontSize: 38,
              fontWeight: 900,
              marginBottom: 12,
              background: 'linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #c084fc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.02em',
            }}
          >
            Páginas Convertidas do Ecossistema
          </h1>
          <p style={{ color: '#94a3b8', fontSize: 16, marginBottom: 40, maxWidth: 760, lineHeight: 1.6 }}>
            Acompanhe o catálogo de páginas do ecossistema migradas do Bubble para React. Acesse os atalhos diretos dos
            principais programas abaixo ou explore o catálogo completo de rotas convertidas.
          </p>

          {/* ───────────────────────────────────────────── */}
          {/* ATALHOS RÁPIDOS PARA PROGRAMAS */}
          {/* ───────────────────────────────────────────── */}
          <div style={{ marginBottom: 54 }}>
            <div style={{ marginBottom: 20 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: 10, margin: 0 }}>
                <span style={{ fontSize: 24 }}>🚀</span> Programas em Destaque
              </h2>
              <p style={{ margin: '4px 0 0', fontSize: 14, color: '#94a3b8' }}>
                Atalhos diretos para os principais programas e editais do ecossistema
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: 20,
              }}
            >
              {FEATURED_PROGRAMS.map(program => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </div>

          {/* ───────────────────────────────────────────── */}
          {/* BARRA DE PESQUISA E STATS */}
          {/* ───────────────────────────────────────────── */}
          <div style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#f8fafc', marginBottom: 16 }}>
              📚 Catálogo Geral de Páginas ({LEGACY_PAGES.length})
            </h2>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 32,
              background: 'rgba(15,23,42,0.8)',
              padding: '16px 24px',
              borderRadius: 16,
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
              <Stat label="Total" value={LEGACY_PAGES.length} />
              <Stat label="Convertidas" value={LEGACY_PAGES.filter(p => p.status === 'done').length} color="#22c55e" />
              <Stat label="Em Progresso" value={LEGACY_PAGES.filter(p => p.status === 'in-progress').length} color="#f59e0b" />
            </div>

            <div style={{ flex: 1, maxWidth: 360, minWidth: 240, position: 'relative' }}>
              <Search
                size={16}
                color="#64748b"
                style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }}
              />
              <input
                type="text"
                placeholder="Buscar página por título, rota ou descrição..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 10,
                  padding: '10px 16px 10px 36px',
                  color: '#fff',
                  fontSize: 14,
                  outline: 'none',
                }}
              />
            </div>
          </div>

          {/* GRID DE CARDS DE PÁGINAS */}
          {filteredPages.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '64px 32px',
                border: '1px dashed rgba(255,255,255,0.1)',
                borderRadius: 16,
                color: '#64748b',
              }}
            >
              <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
              <p style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#94a3b8' }}>
                Nenhuma página encontrada
              </p>
              <p style={{ fontSize: 14 }}>Tente ajustar seus termos de busca.</p>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: 24,
              }}
            >
              {filteredPages.map(page => (
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
      <div style={{ fontSize: 24, fontWeight: 800, color }}>{value}</div>
      <div style={{ fontSize: 11, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
    </div>
  )
}

function ProgramCard({ program }: { program: ProgramItem }) {
  return (
    <div
      style={{
        background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.55) 100%)',
        border: `1px solid rgba(255, 255, 255, 0.08)`,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        backdropFilter: 'blur(12px)',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = program.accentBorder
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = `0 14px 32px ${program.glowColor}`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Glow de fundo sutil */}
      <div
        style={{
          position: 'absolute',
          top: -30,
          right: -30,
          width: 130,
          height: 130,
          borderRadius: '50%',
          background: program.glowColor,
          filter: 'blur(45px)',
          pointerEvents: 'none',
          opacity: 0.7,
        }}
      />

      {/* Banner / Header com Imagem ocupando >= 30% do card */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 155,
          background: `radial-gradient(ellipse at center, ${program.iconBg} 0%, rgba(15, 23, 42, 0.95) 100%)`,
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={program.iconImg}
          alt={program.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            transition: 'transform 0.35s ease',
          }}
        />

        {/* Gradiente de transição suave na base do banner */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.2) 50%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Conteúdo do Card */}
      <div
        style={{
          padding: '20px 22px 22px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        {/* Título & Tagline */}
        <div style={{ marginBottom: 10 }}>
          <h3
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: '#f8fafc',
              margin: '0 0 4px 0',
              letterSpacing: '-0.01em',
            }}
          >
            {program.name}
          </h3>
          <span style={{ fontSize: 12, fontWeight: 600, color: program.iconColor }}>
            {program.tagline}
          </span>
        </div>

        {/* Descrição */}
        <p
          style={{
            fontSize: 13,
            color: '#cbd5e1',
            lineHeight: 1.5,
            margin: '0 0 16px 0',
            flex: 1,
          }}
        >
          {program.description}
        </p>

        {/* Sub-páginas / Páginas Vinculadas (se houver mais de uma) */}
        {program.pages.length > 1 && (
          <div style={{ marginBottom: 16, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 12 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#64748b', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Páginas do Programa:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {program.pages.map(subPage => (
                <Link
                  key={subPage.slug}
                  to={`/legacy/${subPage.slug}`}
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: '#cbd5e1',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '4px 10px',
                    borderRadius: 8,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = program.iconBg
                    e.currentTarget.style.borderColor = program.accentBorder
                    e.currentTarget.style.color = '#fff'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                    e.currentTarget.style.color = '#cbd5e1'
                  }}
                >
                  <span>{subPage.name}</span>
                  <span style={{ fontSize: 10, opacity: 0.7 }}>↗</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Botão Principal de Acesso */}
        <Link
          to={`/legacy/${program.mainSlug}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            background: `linear-gradient(135deg, ${program.iconColor}20 0%, ${program.iconColor}38 100%)`,
            border: `1px solid ${program.accentBorder}`,
            color: '#fff',
            textDecoration: 'none',
            padding: '10px 16px',
            borderRadius: 12,
            fontSize: 13,
            fontWeight: 700,
            transition: 'all 0.2s ease',
            marginTop: 'auto',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = `linear-gradient(135deg, ${program.iconColor}50 0%, ${program.iconColor}80 100%)`
            e.currentTarget.style.boxShadow = `0 4px 16px ${program.glowColor}`
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = `linear-gradient(135deg, ${program.iconColor}20 0%, ${program.iconColor}38 100%)`
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          <span>Acessar {program.name}</span>
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  )
}

function PageCard({ page }: { page: LegacyPage }) {
  const isDone = page.status === 'done'

  // Busca programa correspondente se houver
  const program = FEATURED_PROGRAMS.find(p => p.id === page.programId)

  // Caminho da imagem de print se disponível na pasta public/previews/
  const previewImagePath = page.previewUrl || `/previews/${page.slug}.png`

  return (
    <Link
      to={isDone ? `/legacy/${page.slug}` : '#'}
      style={{
        textDecoration: 'none',
        color: 'inherit',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          height: '100%',
          background: 'rgba(15,23,42,0.6)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 16,
          overflow: 'hidden',
          transition: 'all 0.25s ease',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        }}
        onMouseEnter={e => {
          if (isDone) {
            e.currentTarget.style.borderColor = program ? program.accentBorder : 'rgba(129,140,248,0.4)'
            e.currentTarget.style.transform = 'translateY(-4px)'
            e.currentTarget.style.boxShadow = program ? `0 12px 28px ${program.glowColor}` : '0 12px 28px rgba(99,102,241,0.2)'
          }
        }}
        onMouseLeave={e => {
          if (isDone) {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)'
          }
        }}
      >
        {/* Print / Thumbnail container */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 160,
            background: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Print Image com fallback elegante */}
          <img
            src={previewImagePath}
            alt={`Print da página ${page.name}`}
            onError={e => {
              ;(e.currentTarget as HTMLImageElement).style.display = 'none'
            }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
            }}
          />

          {/* Placeholder/Fallback de Print quando imagem ainda não foi salva no diretório public/previews */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 16,
              background: 'linear-gradient(135deg, rgba(30,41,59,0.9) 0%, rgba(15,23,42,0.95) 100%)',
              zIndex: 0,
            }}
          >
            {program ? (
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: program.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 8,
                  border: `1px solid ${program.accentBorder}`,
                  padding: 6,
                  boxShadow: `0 4px 14px ${program.glowColor}`,
                }}
              >
                <img
                  src={program.iconImg}
                  alt={program.name}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
            ) : (
              <span style={{ fontSize: 32, marginBottom: 6, opacity: 0.8 }}>🖼️</span>
            )}
            <span style={{ fontSize: 11, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Print da Página
            </span>
          </div>

          {/* Badge do Programa no topo da print se pertencer a um */}
          {program && (
            <div
              style={{
                position: 'absolute',
                top: 10,
                left: 10,
                background: 'rgba(15,23,42,0.88)',
                backdropFilter: 'blur(8px)',
                border: `1px solid ${program.accentBorder}`,
                borderRadius: 8,
                padding: '4px 8px',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                zIndex: 2,
              }}
            >
              <img
                src={program.iconImg}
                alt={program.name}
                style={{ width: 16, height: 16, objectFit: 'contain' }}
              />
              <span style={{ fontSize: 11, fontWeight: 700, color: program.iconColor }}>{program.name}</span>
            </div>
          )}

          {/* Badge de Rota */}
          <div
            style={{
              position: 'absolute',
              bottom: 10,
              right: 10,
              background: 'rgba(15,23,42,0.85)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(99,102,241,0.3)',
              borderRadius: 6,
              padding: '2px 8px',
              fontFamily: 'monospace',
              fontSize: 11,
              color: '#a5b4fc',
              zIndex: 2,
            }}
          >
            /legacy/{page.slug}
          </div>
        </div>

        {/* Informações do Card */}
        <div style={{ padding: 18, flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: statusColor[page.status] }}>
              {statusLabel[page.status]}
            </span>
          </div>

          <h3 style={{ fontWeight: 700, fontSize: 16, color: '#f8fafc', marginBottom: 8, lineHeight: 1.3 }}>
            {page.name}
          </h3>

          <p style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.5, flex: 1, marginBottom: 16 }}>
            {page.description}
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 12,
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 600, color: '#818cf8', display: 'flex', alignItems: 'center', gap: 4 }}>
              Acessar página ➔
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

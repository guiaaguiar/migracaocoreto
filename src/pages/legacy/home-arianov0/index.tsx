import { useState } from 'react'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import BeneficiosModal from '../../../components/BeneficiosModal'
import logoCoreto from '../../../assets/logo-coreto.png'
import logoAbdi from '../../../assets/logo-abdi.png'
import logoEmprel from '../../../assets/logo-emprel.png'

interface OpportunityCard {
  id: string
  title: string
  organization: string
  badge: string
  category: string
  budget: string
  deadline: string
  status: 'Aberto' | 'Em Breve' | 'Encerrado'
  description: string
  tags: string[]
  isArianoCall?: boolean
}

interface ResolverCard {
  id: string
  name: string
  type: string
  category: string
  rating: number
  location: string
  solutionsCount: number
  avatar: string
  description: string
}

interface OrganizerCard {
  id: string
  name: string
  type: string
  activePrograms: number
  logo: string
  description: string
}

const SAMPLE_OPPORTUNITIES: OpportunityCard[] = [
  {
    id: 'opp-1',
    title: 'Edital Ariano Call 2026 — Desafios de Cultura & Tecnologia',
    organization: 'Secretaria de Ciência, Tecnologia e Inovação (SECTI)',
    badge: 'ARIANO CALL',
    category: 'Cultura & GovTech',
    budget: 'R$ 250.000',
    deadline: '28 de Fevereiro, 2026',
    status: 'Aberto',
    description: 'Chamada pública para startups e pesquisadores desenvolverem soluções de inteligência artificial e realidade aumentada aplicadas à preservação do patrimônio cultural.',
    tags: ['Ariano Call', 'IA', 'GovTech', 'Recife'],
    isArianoCall: true,
  },
  {
    id: 'opp-2',
    title: 'Desafio Cidades Inteligentes: Mobilidade Urbana Sustentável',
    organization: 'EMPREL & ABDI',
    badge: 'DESAFIO GOV',
    category: 'Smart Cities',
    budget: 'R$ 180.000',
    deadline: '15 de Março, 2026',
    status: 'Aberto',
    description: 'Busca de soluções para otimização de tráfego, semáforos inteligentes e redução da pegada de carbono nos corredores de transporte público.',
    tags: ['Mobilidade', 'IoT', 'Smart Cities'],
  },
  {
    id: 'opp-3',
    title: 'Programa de Inovação Aberta em Saúde Digital (HealthTech)',
    organization: 'Prefeitura do Recife',
    badge: 'HEALTH',
    category: 'HealthTech',
    budget: 'R$ 300.000',
    deadline: '10 de Abril, 2026',
    status: 'Aberto',
    description: 'Otimização da triagem eletrônica e agendamento inteligente em unidades básicas de saúde com foco em telemedicina e redução de filas.',
    tags: ['Saúde', 'HealthTech', 'IA'],
  },
  {
    id: 'opp-4',
    title: 'Chamada de Transição Energética & ESG para Startups',
    organization: 'ABDI',
    badge: 'ESG TECH',
    category: 'CleanTech',
    budget: 'R$ 150.000',
    deadline: '30 de Maio, 2026',
    status: 'Em Breve',
    description: 'Aceleração e aporte financeiro para startups com foco em energias renováveis e descarbonização de prédios públicos.',
    tags: ['ESG', 'Energia', 'CleanTech'],
  },
]

const SAMPLE_RESOLVERS: ResolverCard[] = [
  {
    id: 'res-1',
    name: 'NeuroTech Innovate',
    type: 'Startup DeepTech',
    category: 'Inteligência Artificial',
    rating: 4.9,
    location: 'Recife - PE',
    solutionsCount: 12,
    avatar: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=150&q=80',
    description: 'Especializada em modelos preditivos e visão computacional aplicados à gestão urbana e monitoramento de tráfego.',
  },
  {
    id: 'res-2',
    name: 'GovConnect Soluções',
    type: 'GovTech',
    category: 'Gestão Pública',
    rating: 4.8,
    location: 'Olinda - PE',
    solutionsCount: 8,
    avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80',
    description: 'Plataforma omnichannel para atendimento ao cidadão e digitalização de processos administrativos governamentais.',
  },
  {
    id: 'res-3',
    name: 'EcoEnergy PE',
    type: 'CleanTech',
    category: 'ESG & Sustentabilidade',
    rating: 4.7,
    location: 'Porto Digital - PE',
    solutionsCount: 5,
    avatar: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=150&q=80',
    description: 'Sistemas inteligentes de gestão de consumo de energia e sensores de impacto ambiental.',
  },
]

const SAMPLE_ORGANIZERS: OrganizerCard[] = [
  {
    id: 'org-1',
    name: 'SECTI Recife',
    type: 'Órgão Público',
    activePrograms: 6,
    logo: logoCoreto,
    description: 'Secretaria de Ciência, Tecnologia e Inovação promovendo chamadas públicas e programas de fomento ao ecossistema local.',
  },
  {
    id: 'org-2',
    name: 'ABDI — Agência Brasileira de Desenvolvimento Industrial',
    type: 'Agência de Fomento',
    activePrograms: 4,
    logo: logoAbdi,
    description: 'Agência indutora da transformação digital e da inovação no setor produtivo brasileiro.',
  },
  {
    id: 'org-3',
    name: 'EMPREL — Empresa Municipal de Informática',
    type: 'Empresa Pública',
    activePrograms: 8,
    logo: logoEmprel,
    description: 'Órgão responsável pela infraestrutura tecnológica e soluções de e-Gov da cidade do Recife.',
  },
]

export default function HomeArianoPage() {
  // Navigation & Active Tabs
  const [activeSidebarNav, setActiveSidebarNav] = useState<'inicio' | 'programas' | 'oportunidades' | 'solucao' | 'beneficios' | 'painel' | 'ajuda'>('inicio')
  const [activeTab, setActiveTab] = useState<'oportunidades' | 'resolvedores' | 'organizadores'>('oportunidades')
  const [categoryFilter, setCategoryFilter] = useState<string>('todas')
  
  // Search & Filters
  const [searchQuery, setSearchQuery] = useState('')
  const [arianoCallOnly, setArianoCallOnly] = useState(false)

  // Modals & Drawers
  const [selectedOpportunity, setSelectedOpportunity] = useState<OpportunityCard | null>(null)
  const [selectedResolver, setSelectedResolver] = useState<ResolverCard | null>(null)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [beneficiosModalOpen, setBeneficiosModalOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3500)
  }

  // Filtered Lists
  const filteredOpportunities = SAMPLE_OPPORTUNITIES.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          opp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          opp.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesAriano = !arianoCallOnly || opp.isArianoCall
    const matchesCategory = categoryFilter === 'todas' || opp.category.toLowerCase().includes(categoryFilter.toLowerCase())
    return matchesSearch && matchesAriano && matchesCategory
  })

  const filteredResolvers = SAMPLE_RESOLVERS.filter(res => {
    return res.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           res.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
           res.description.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const filteredOrganizers = SAMPLE_ORGANIZERS.filter(org => {
    return org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           org.type.toLowerCase().includes(searchQuery.toLowerCase())
  })

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', fontFamily: "'DM Sans', 'Inter', sans-serif" }}>
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed', top: 20, right: 20, zIndex: 9999,
          backgroundColor: '#0f172a', color: '#ffffff', padding: '12px 20px', borderRadius: '8px',
          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', gap: '10px',
          borderLeft: '4px solid #f97316', animation: 'fadeIn 0.3s ease'
        }}>
          <span>✨ {toastMessage}</span>
        </div>
      )}

      <Header />

      {/* ── MAIN LAYOUT (SIDEBAR + CONTENT) ── */}
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar activeItem="inicio" />

        {/* MAIN BODY CONTENT AREA */}
        <main style={{ flex: 1, padding: '40px 32px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          
          {/* HERO SECTION */}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            {/* CORETO Orange/Coral Ring Icon Logo */}
            <div style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{
                width: '64px', height: '64px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 8px 20px rgba(249, 115, 22, 0.25)'
              }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="18" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="18" r="3" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', margin: '0 0 12px 0' }}>
              Olá, Pedro como podemos <span style={{ color: '#f97316', background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>te ajudar?</span>
            </h1>

            {/* Subtitle */}
            <p style={{ color: '#64748b', fontSize: '15px', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
              Bem-vindo ao <strong>CORETO</strong>! Aqui você pode descobrir editais, desafios de inovação, conexões com startups, governo, empresas e muito mais. Tudo reunido num só lugar para facilitar sua jornada e alavancar sua iniciativa!
            </p>
          </div>

          {/* ── CENTRAL SEARCH & QUICK ACCESS BOX ── */}
          <div style={{
            backgroundColor: '#ffffff', borderRadius: '20px', padding: '28px 32px',
            border: '1px solid #e2e8f0', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
            marginBottom: '28px'
          }}>
            {/* Search Input Bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ flex: 1, position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%', padding: '14px 20px', borderRadius: '12px',
                    border: '1px solid #cbd5e1', fontSize: '15px', color: '#0f172a',
                    outline: 'none', transition: 'all 0.2s ease', backgroundColor: '#ffffff',
                    boxSizing: 'border-box'
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#f97316')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#cbd5e1')}
                />
              </div>

              {/* Paper Plane Send Icon Button */}
              <button
                onClick={() => showToast(`Buscando por "${searchQuery}"...`)}
                style={{
                  width: '48px', height: '48px', borderRadius: '12px', border: '1px solid #f97316',
                  backgroundColor: '#ffffff', color: '#f97316', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', cursor: 'pointer', fontSize: '20px', transition: 'all 0.2s ease'
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#fff7ed'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#ffffff'; }}
              >
                ✈
              </button>
            </div>

            {/* Program Tag Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setArianoCallOnly(!arianoCallOnly)}
                style={{
                  backgroundColor: arianoCallOnly ? '#0d9488' : '#00a896', color: '#ffffff',
                  border: 'none', borderRadius: '8px', padding: '8px 18px', fontSize: '13px',
                  fontWeight: 700, cursor: 'pointer', letterSpacing: '0.04em',
                  boxShadow: arianoCallOnly ? '0 0 0 3px rgba(13, 148, 136, 0.3)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                ARIANO CALL {arianoCallOnly ? '✓' : ''}
              </button>

              <span style={{ fontSize: '13px', color: '#64748b', marginLeft: '4px' }}>
                Filtros ativos: {arianoCallOnly ? 'Somente Chamada Ariano' : 'Todos os Editais'}
              </span>
            </div>

            {/* Quick Access Title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: '#f97316', fontWeight: 700, fontSize: '14px' }}>
              <span style={{ fontSize: '16px' }}>🎛️</span>
              <span>Acesso rápido</span>
            </div>

            {/* 3 Interactive Quick Access Tab Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <QuickAccessCard
                title="Encontrar oportunidades"
                active={activeTab === 'oportunidades'}
                onClick={() => setActiveTab('oportunidades')}
              />
              <QuickAccessCard
                title="Encontrar resolvedores"
                active={activeTab === 'resolvedores'}
                onClick={() => setActiveTab('resolvedores')}
              />
              <QuickAccessCard
                title="Encontrar organizadores"
                active={activeTab === 'organizadores'}
                onClick={() => setActiveTab('organizadores')}
              />
            </div>
          </div>

          {/* ── 3 PILL ACTION BUTTONS (ORANGE OUTLINE ROW) ── */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '40px' }}>
            <button
              onClick={() => { setActiveTab('oportunidades'); showToast('Exibindo todas as oportunidades disponíveis'); }}
              style={orangePillButtonStyle}
            >
              Ver todas as oportunidades
            </button>
            <button
              onClick={() => { setActiveTab('resolvedores'); showToast('Exibindo todos os resolvedores cadastrados'); }}
              style={orangePillButtonStyle}
            >
              Ver todos os resolvedores
            </button>
            <button
              onClick={() => { setActiveTab('organizadores'); showToast('Exibindo todas as organizações parceiras'); }}
              style={orangePillButtonStyle}
            >
              Ver todas as organizações
            </button>
          </div>

          {/* ── SECTION TITLE: Oportunidades para você! ── */}
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <h2 style={{
              fontSize: '26px', fontWeight: 800, margin: '0 0 16px 0',
              color: '#f97316', display: 'inline-block'
            }}>
              {activeTab === 'oportunidades' && 'Oportunidades para você!'}
              {activeTab === 'resolvedores' && 'Resolvedores e Startups no CORETO'}
              {activeTab === 'organizadores' && 'Organizações e Instituições Conectadas'}
            </h2>

            {/* Category Filter Chips */}
            {activeTab === 'oportunidades' && (
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
                {['todas', 'GovTech', 'Smart Cities', 'HealthTech', 'CleanTech'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    style={{
                      padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 600,
                      border: categoryFilter === cat ? '1px solid #f97316' : '1px solid #cbd5e1',
                      backgroundColor: categoryFilter === cat ? '#fff7ed' : '#ffffff',
                      color: categoryFilter === cat ? '#f97316' : '#64748b', cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── DYNAMIC FEED CARDS GRID ── */}
          {activeTab === 'oportunidades' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '20px' }}>
              {filteredOpportunities.map(opp => (
                <div key={opp.id} style={feedCardStyle}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <span style={{
                      backgroundColor: opp.isArianoCall ? '#00a896' : '#ea580c', color: '#ffffff',
                      fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '6px',
                      letterSpacing: '0.04em'
                    }}>
                      {opp.badge}
                    </span>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#16a34a', backgroundColor: '#dcfce7', padding: '3px 8px', borderRadius: '4px' }}>
                      ● {opp.status}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px 0', lineHeight: 1.4 }}>
                    {opp.title}
                  </h3>

                  <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>🏛️</span>
                    <span>{opp.organization}</span>
                  </div>

                  <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5, margin: '0 0 16px 0', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {opp.description}
                  </p>

                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
                    {opp.tags.map(t => (
                      <span key={t} style={{ fontSize: '11px', backgroundColor: '#f1f5f9', color: '#475569', padding: '2px 8px', borderRadius: '4px' }}>
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '11px', color: '#94a3b8' }}>Aporte max:</div>
                      <div style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>{opp.budget}</div>
                    </div>
                    <button
                      onClick={() => setSelectedOpportunity(opp)}
                      style={{
                        backgroundColor: '#f97316', color: '#ffffff', border: 'none', borderRadius: '8px',
                        padding: '8px 16px', fontSize: '13px', fontWeight: 700, cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#ea580c')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#f97316')}
                    >
                      Ver Detalhes →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'resolvedores' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
              {filteredResolvers.map(res => (
                <div key={res.id} style={feedCardStyle}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                    <img src={res.avatar} alt={res.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
                    <div>
                      <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: '0 0 2px 0' }}>{res.name}</h3>
                      <div style={{ fontSize: '12px', color: '#f97316', fontWeight: 600 }}>{res.type} • ⭐ {res.rating}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5, margin: '0 0 14px 0' }}>{res.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '12px', fontSize: '12px', color: '#64748b' }}>
                    <span>📍 {res.location}</span>
                    <button
                      onClick={() => setSelectedResolver(res)}
                      style={{
                        backgroundColor: '#ffffff', border: '1px solid #f97316', color: '#f97316',
                        borderRadius: '6px', padding: '6px 12px', fontWeight: 700, cursor: 'pointer'
                      }}
                    >
                      Conectar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'organizadores' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
              {filteredOrganizers.map(org => (
                <div key={org.id} style={feedCardStyle}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                    <img src={org.logo} alt={org.name} style={{ height: '36px', objectFit: 'contain' }} />
                    <div>
                      <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: 0 }}>{org.name}</h3>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>{org.type}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5, margin: '0 0 14px 0' }}>{org.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '12px' }}>
                    <span style={{ fontSize: '12px', color: '#00a896', fontWeight: 700 }}>{org.activePrograms} Programas Ativos</span>
                    <button
                      onClick={() => showToast(`Carregando editaise programas de ${org.name}...`)}
                      style={{
                        backgroundColor: '#0f172a', color: '#ffffff', border: 'none',
                        borderRadius: '6px', padding: '6px 14px', fontSize: '12px', fontWeight: 700, cursor: 'pointer'
                      }}
                    >
                      Ver Programas
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* ── MODAL DE DETALHES DE OPORTUNIDADE ── */}
      {selectedOpportunity && (
        <div style={modalOverlayStyle}>
          <div style={modalBoxStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <span style={{
                  backgroundColor: selectedOpportunity.isArianoCall ? '#00a896' : '#ea580c', color: '#ffffff',
                  fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '6px'
                }}>
                  {selectedOpportunity.badge}
                </span>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', marginTop: '8px' }}>
                  {selectedOpportunity.title}
                </h2>
              </div>
              <button onClick={() => setSelectedOpportunity(null)} style={closeButtonStyle}>✕</button>
            </div>

            <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '16px' }}>
              Organizador: <strong>{selectedOpportunity.organization}</strong>
            </div>

            <p style={{ fontSize: '14px', color: '#334155', lineHeight: 1.6, marginBottom: '20px' }}>
              {selectedOpportunity.description}
            </p>

            <div style={{ backgroundColor: '#f8fafc', borderRadius: '10px', padding: '16px', marginBottom: '24px', display: 'flex', justifyContent: 'space-around' }}>
              <div>
                <div style={{ fontSize: '11px', color: '#64748b' }}>Aporte Financeiro</div>
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#16a34a' }}>{selectedOpportunity.budget}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: '#64748b' }}>Prazo Inscrições</div>
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a' }}>{selectedOpportunity.deadline}</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button onClick={() => setSelectedOpportunity(null)} style={{ padding: '10px 18px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: '#ffffff', cursor: 'pointer', fontWeight: 600 }}>
                Fechar
              </button>
              <button
                onClick={() => {
                  setSelectedOpportunity(null)
                  showToast('Redirecionando para o formulário de submissão...')
                }}
                style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', backgroundColor: '#f97316', color: '#ffffff', fontWeight: 700, cursor: 'pointer' }}
              >
                Submeter Proposta →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL DE CONEXÃO COM RESOLVEDOR ── */}
      {selectedResolver && (
        <div style={modalOverlayStyle}>
          <div style={modalBoxStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Conectar com {selectedResolver.name}
              </h2>
              <button onClick={() => setSelectedResolver(null)} style={closeButtonStyle}>✕</button>
            </div>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.5, marginBottom: '20px' }}>
              Envie uma mensagem direta ou convite de parceria para esta startup/resolvedor no ambiente seguro do CORETO.
            </p>
            <textarea
              rows={4}
              placeholder="Descreva a oportunidade de parceria ou convite para seu projeto..."
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', outline: 'none', marginBottom: '20px', boxSizing: 'border-box' }}
            />
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button onClick={() => setSelectedResolver(null)} style={{ padding: '8px 16px', borderRadius: '6px', border: '1px solid #cbd5e1', backgroundColor: '#ffffff', cursor: 'pointer' }}>
                Cancelar
              </button>
              <button
                onClick={() => {
                  setSelectedResolver(null)
                  showToast(`Convite de conexão enviado para ${selectedResolver.name}!`)
                }}
                style={{ padding: '8px 18px', borderRadius: '6px', border: 'none', backgroundColor: '#00a896', color: '#ffffff', fontWeight: 700, cursor: 'pointer' }}
              >
                Enviar Mensagem
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── POPUP DE BENEFÍCIOS ── */}
      <BeneficiosModal
        isOpen={beneficiosModalOpen}
        onClose={() => setBeneficiosModalOpen(false)}
        onSelectBenefit={(name) => showToast(`Benefício selecionado: ${name}`)}
      />
    </div>
  )
}

// ── SUB-COMPONENTS ──

function QuickAccessCard({ title, active, onClick }: { title: string; active: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{
        border: active ? '2px solid #f97316' : '1px solid #e2e8f0',
        borderRadius: '14px', padding: '16px 20px', textAlign: 'center',
        backgroundColor: active ? '#fff7ed' : '#ffffff', cursor: 'pointer',
        transition: 'all 0.2s ease', boxShadow: active ? '0 4px 12px rgba(249, 115, 22, 0.1)' : 'none'
      }}
      onMouseEnter={e => {
        if (!active) (e.currentTarget as HTMLDivElement).style.borderColor = '#cbd5e1'
      }}
      onMouseLeave={e => {
        if (!active) (e.currentTarget as HTMLDivElement).style.borderColor = '#e2e8f0'
      }}
    >
      <div style={{ fontSize: '14px', fontWeight: 600, color: active ? '#f97316' : '#334155' }}>
        {title}
      </div>
    </div>
  )
}

const orangePillButtonStyle: React.CSSProperties = {
  padding: '12px 24px', borderRadius: '30px', border: '1px solid #f97316',
  backgroundColor: '#ffffff', color: '#f97316', fontWeight: 700, fontSize: '14px',
  cursor: 'pointer', textAlign: 'center', transition: 'all 0.2s ease',
  boxShadow: '0 2px 8px rgba(249, 115, 22, 0.05)'
}

const feedCardStyle: React.CSSProperties = {
  backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px',
  border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
}

const modalOverlayStyle: React.CSSProperties = {
  position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)',
  display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
}

const modalBoxStyle: React.CSSProperties = {
  backgroundColor: '#ffffff', borderRadius: '20px', width: '90%', maxWidth: '560px',
  padding: '28px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', animation: 'fadeIn 0.2s ease'
}

const closeButtonStyle: React.CSSProperties = {
  background: 'none', border: 'none', fontSize: '18px', color: '#94a3b8',
  cursor: 'pointer', padding: '4px'
}

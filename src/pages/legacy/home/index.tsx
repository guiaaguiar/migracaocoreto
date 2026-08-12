import { useState } from 'react'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import BeneficiosModal from '../../../components/BeneficiosModal'
import logoCoreto from '../../../assets/logo-coreto.png'
import logoEmprel from '../../../assets/logo-emprel.png'

interface Opportunity {
  id: string
  title: string
  organization: string
  organizationLogo: string
  logoType: 'image' | 'badge-grite' | 'badge-polotec' | 'badge-emprel'
  deadline: string
  budget: string
  areas: string[]
  supportType: string
  description: string
}

interface FeatureHighlight {
  id: string
  title: string
  subtitle?: string
  organization: string
  bannerType: 'nitro' | 'finep' | 'parcerias'
  tags: string[]
}

const SAMPLE_OPPORTUNITIES: Opportunity[] = [
  {
    id: 'opp-1',
    title: 'Agro Sustentável PE',
    organization: 'Grite PE / Porto Digital',
    organizationLogo: logoCoreto,
    logoType: 'badge-grite',
    deadline: '31/12/2026',
    budget: 'R$ 5.000',
    areas: [
      'Cidades, mobilidade e urbanismo',
      'Meio ambiente e sustentabilidade',
      'Agronegócio e alimentação',
    ],
    supportType: 'Fomento / recursos não reembolsáveis (editais de subvenção, fomento à pesquisa, bolsa)',
    description: 'Edital voltado a soluções de inovação sustentável no agronegócio pernambucano, integrando técnicas de cultivo de baixo carbono e tecnologias urbanas de distribuição alimentar.',
  },
  {
    id: 'opp-2',
    title: 'Saúde Mental Digital',
    organization: 'EMPREL — Prefeitura do Recife',
    organizationLogo: logoEmprel,
    logoType: 'badge-emprel',
    deadline: '07/10/2026',
    budget: 'R$ 500.022',
    areas: [
      'Saúde',
      'Educação',
      'Tecnologia da informação e comunicação',
    ],
    supportType: 'Programas de aceleração',
    description: 'Programa de fomento a startups e GovTechs com soluções digitais para apoio preventivo, acolhimento psicossocial e inteligência de dados na rede municipal de saúde.',
  },
  {
    id: 'opp-3',
    title: 'Cultura Maker Hackathon',
    organization: 'Polotec / UFPE',
    organizationLogo: logoCoreto,
    logoType: 'badge-polotec',
    deadline: '01/12/2026',
    budget: 'R$ 50.000',
    areas: ['Educação'],
    supportType: 'Investimento de risco (investidor-anjo, fundos, corporate venture)',
    description: 'Maratona de inovação focada no desenvolvimento de protótipos de robótica educacional e ferramentas maker para escolas públicas.',
  },
]

const SAMPLE_HIGHLIGHTS: FeatureHighlight[] = [
  {
    id: 'hl-1',
    title: 'Chamada NITRO - Porto Digital e Prefeitura do Recife',
    organization: 'Porto Digital & Prefeitura do Recife',
    bannerType: 'nitro',
    tags: ['Aceleração', 'Porto Digital', 'GovTech'],
  },
  {
    id: 'hl-2',
    title: 'Finep Mais Inovação Brasil - Rodada 2 - Subvenção Econômica Regional',
    organization: 'Finep / Ministério da Ciência e Tecnologia',
    bannerType: 'finep',
    tags: ['Subvenção', 'Finep', 'Pesquisa Aplicada'],
  },
  {
    id: 'hl-3',
    title: 'Escritório de Parcerias Inovadoras',
    subtitle: 'Tem interesse em se conectar com a Prefeitura do Recife? Então chegue mais e venha ser parceiro da gente!',
    organization: 'Prefeitura do Recife',
    bannerType: 'parcerias',
    tags: ['Parcerias Públicas', 'Inovação Aberta'],
  },
]

export default function HomePage() {
  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedOpportunityType, setSelectedOpportunityType] = useState('todas')
  const [selectedResolverType, setSelectedResolverType] = useState('todos')
  const [selectedOrganizerType, setSelectedOrganizerType] = useState('todas')

  // UI Interactivity state
  const [beneficiosModalOpen, setBeneficiosModalOpen] = useState(false)
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null)
  const [selectedHighlight, setSelectedHighlight] = useState<FeatureHighlight | null>(null)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3500)
  }

  // Filtered lists
  const filteredOpportunities = SAMPLE_OPPORTUNITIES.filter(opp => {
    const query = searchQuery.toLowerCase().trim()
    if (!query) return true
    return (
      opp.title.toLowerCase().includes(query) ||
      opp.organization.toLowerCase().includes(query) ||
      opp.areas.some(a => a.toLowerCase().includes(query)) ||
      opp.supportType.toLowerCase().includes(query)
    )
  })

  const filteredHighlights = SAMPLE_HIGHLIGHTS.filter(hl => {
    const query = searchQuery.toLowerCase().trim()
    if (!query) return true
    return (
      hl.title.toLowerCase().includes(query) ||
      (hl.subtitle && hl.subtitle.toLowerCase().includes(query)) ||
      hl.organization.toLowerCase().includes(query)
    )
  })

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#EEF2F5',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        color: '#1A202C',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ── Toast Feedback ── */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            backgroundColor: '#003B6D',
            color: '#ffffff',
            padding: '12px 20px',
            borderRadius: '8px',
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.2)',
            zIndex: 9999,
            fontSize: '13px',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          <span>✨ {toastMessage}</span>
        </div>
      )}

      <Header />

      {/* ── Main Layout Body (Sidebar + Content) ── */}
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar activeItem="inicio" />

        {/* ── Main Content Area ── */}
        <main style={{ flex: 1, padding: '32px 40px', maxWidth: '1140px', margin: '0 auto' }}>
          {/* ── Welcome Banner / Hero Section ── */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#1E293B', marginBottom: '12px' }}>
              Olá, Pedro! Como podemos <span style={{ color: '#00a8b5' }}>te ajudar?</span>
            </h1>
            <p
              style={{
                fontSize: '14px',
                color: '#475569',
                maxWidth: '820px',
                margin: '0 auto',
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              Bem-vindo ao <strong>CORETO</strong>! Aqui você pode descobrir editais, desafios de inovação, conexões com startups, governo, empresas e muito mais. Tudo reunido num só lugar para facilitar sua jornada e alavancar sua iniciativa!
            </p>
          </div>

          {/* ── Search & Quick Access Card ── */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '24px 28px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              marginBottom: '20px',
            }}
          >
            {/* Search Input Box with Submit Arrow */}
            <div style={{ position: 'relative', marginBottom: '20px' }}>
              <input
                type="text"
                placeholder="Pesquisar"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 50px 14px 18px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  outline: 'none',
                  fontSize: '14px',
                  color: '#334155',
                  backgroundColor: '#ffffff',
                  boxSizing: 'border-box',
                }}
              />
              <button
                onClick={() => showToast(`Buscando por: "${searchQuery}"`)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>

            {/* Quick Access Title */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '14px',
                color: '#00a8b5',
                fontSize: '13px',
                fontWeight: 600,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <span>Acesso rápido</span>
            </div>

            {/* Quick Access Selects / Filter Pills */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '16px',
              }}
            >
              {/* Select 1: Encontrar oportunidades */}
              <div style={{ position: 'relative' }}>
                <select
                  value={selectedOpportunityType}
                  onChange={e => {
                    setSelectedOpportunityType(e.target.value)
                    showToast(`Filtro selecionado: ${e.target.value}`)
                  }}
                  style={{
                    width: '100%',
                    padding: '12px 36px 12px 16px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    outline: 'none',
                    fontSize: '13px',
                    color: selectedOpportunityType === 'todas' ? '#64748b' : '#1e293b',
                    backgroundColor: '#ffffff',
                    appearance: 'none',
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                    fontWeight: 500,
                  }}
                >
                  <option value="todas">Encontrar oportunidades</option>
                  <option value="editais">Editais de Subvenção</option>
                  <option value="desafios">Desafios de Inovação</option>
                  <option value="aceleracao">Programas de Aceleração</option>
                  <option value="bolsas">Bolsas & Pesquisa</option>
                </select>
                <div
                  style={{
                    position: 'absolute',
                    right: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                    color: '#94a3b8',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>

              {/* Select 2: Encontrar resolvedores */}
              <div style={{ position: 'relative' }}>
                <select
                  value={selectedResolverType}
                  onChange={e => {
                    setSelectedResolverType(e.target.value)
                    showToast(`Filtro selecionado: ${e.target.value}`)
                  }}
                  style={{
                    width: '100%',
                    padding: '12px 36px 12px 16px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    outline: 'none',
                    fontSize: '13px',
                    color: selectedResolverType === 'todos' ? '#64748b' : '#1e293b',
                    backgroundColor: '#ffffff',
                    appearance: 'none',
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                    fontWeight: 500,
                  }}
                >
                  <option value="todos">Encontrar resolvedores</option>
                  <option value="startups">Startups & Scale-ups</option>
                  <option value="pesquisadores">Pesquisadores & Acadêmicos</option>
                  <option value="govtechs">GovTechs</option>
                  <option value="empresas">Empresas Consolidadas</option>
                </select>
                <div
                  style={{
                    position: 'absolute',
                    right: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                    color: '#94a3b8',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>

              {/* Select 3: Encontrar organizadores */}
              <div style={{ position: 'relative' }}>
                <select
                  value={selectedOrganizerType}
                  onChange={e => {
                    setSelectedOrganizerType(e.target.value)
                    showToast(`Filtro selecionado: ${e.target.value}`)
                  }}
                  style={{
                    width: '100%',
                    padding: '12px 36px 12px 16px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    outline: 'none',
                    fontSize: '13px',
                    color: selectedOrganizerType === 'todas' ? '#64748b' : '#1e293b',
                    backgroundColor: '#ffffff',
                    appearance: 'none',
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                    fontWeight: 500,
                  }}
                >
                  <option value="todas">Encontrar organizadores</option>
                  <option value="governo">Órgãos Públicos & Secretarias</option>
                  <option value="agencias">Agências de Fomento (ABDI, Finep)</option>
                  <option value="universidades">Universidades & ICTs</option>
                  <option value="parques">Parques Tecnológicos</option>
                </select>
                <div
                  style={{
                    position: 'absolute',
                    right: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                    color: '#94a3b8',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ── 3 Main Teal Navigation Action Buttons ── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '16px',
              marginBottom: '40px',
            }}
          >
            <button
              onClick={() => showToast('Carregando todas as oportunidades...')}
              style={mainTealButtonStyle}
            >
              Ver todas as oportunidades
            </button>

            <button
              onClick={() => showToast('Carregando todos os resolvedores...')}
              style={mainTealButtonStyle}
            >
              Ver todos os resolvedores
            </button>

            <button
              onClick={() => showToast('Carregando todas as organizações...')}
              style={mainTealButtonStyle}
            >
              Ver todas as organizações
            </button>
          </div>

          {/* ── Section: Oportunidades em destaque ── */}
          <div style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: '22px',
                fontWeight: 600,
                color: '#00a8b5',
                textAlign: 'center',
                marginBottom: '24px',
              }}
            >
              Oportunidades em destaque
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '24px',
              }}
            >
              {filteredOpportunities.map(opp => (
                <div
                  key={opp.id}
                  onClick={() => setSelectedOpportunity(opp)}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                    cursor: 'pointer',
                    transition: 'transform 0.2s, boxShadow 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.03)'
                  }}
                >
                  <div>
                    {/* Header Row: Badge / Logo + Title */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                      {/* Organization Circle Logo */}
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          backgroundColor: '#ffffff',
                          border: '1px solid #e2e8f0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          overflow: 'hidden',
                          flexShrink: 0,
                        }}
                      >
                        {opp.logoType === 'badge-grite' ? (
                          <div style={{ fontSize: '13px', fontWeight: 700, color: '#4f46e5' }}>:grite</div>
                        ) : opp.logoType === 'badge-polotec' ? (
                          <div
                            style={{
                              width: '100%',
                              height: '100%',
                              backgroundColor: '#881337',
                              color: '#ffffff',
                              fontSize: '10px',
                              fontWeight: 700,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            polotec
                          </div>
                        ) : (
                          <img
                            src={opp.organizationLogo}
                            alt={opp.organization}
                            style={{ width: '80%', height: '80%', objectFit: 'contain' }}
                          />
                        )}
                      </div>

                      <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1E293B', margin: 0, lineHeight: 1.3 }}>
                        {opp.title}
                      </h3>
                    </div>

                    {/* Deadline Pill */}
                    <div style={{ marginBottom: '14px' }}>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          border: '1px solid #cbd5e1',
                          borderRadius: '20px',
                          padding: '4px 14px',
                          fontSize: '12px',
                          color: '#64748b',
                          fontWeight: 500,
                          backgroundColor: '#ffffff',
                        }}
                      >
                        📅 {opp.deadline}
                      </span>
                    </div>

                    {/* Budget */}
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#1E293B', marginBottom: '16px' }}>
                      {opp.budget}
                    </div>

                    {/* Section: Áreas */}
                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ fontSize: '11px', fontWeight: 600, color: '#64748b', marginBottom: '6px' }}>
                        Áreas
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {opp.areas.map((area, idx) => (
                          <span
                            key={idx}
                            style={{
                              backgroundColor: '#00a8b5',
                              color: '#ffffff',
                              borderRadius: '16px',
                              padding: '4px 12px',
                              fontSize: '11px',
                              fontWeight: 500,
                              lineHeight: 1.3,
                            }}
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Section: Apoio Oferecido */}
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 600, color: '#64748b', marginBottom: '6px' }}>
                        Apoio Oferecido
                      </div>
                      <span
                        style={{
                          display: 'inline-block',
                          backgroundColor: '#00a8b5',
                          color: '#ffffff',
                          borderRadius: '16px',
                          padding: '4px 12px',
                          fontSize: '11px',
                          fontWeight: 500,
                          lineHeight: 1.3,
                        }}
                      >
                        {opp.supportType}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Section: Destaques ── */}
          <div style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: '22px',
                fontWeight: 600,
                color: '#00a8b5',
                textAlign: 'center',
                marginBottom: '24px',
              }}
            >
              Destaques
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px',
              }}
            >
              {filteredHighlights.map(hl => (
                <div
                  key={hl.id}
                  onClick={() => setSelectedHighlight(hl)}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'center',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                    cursor: 'pointer',
                    minHeight: '260px',
                    transition: 'transform 0.2s, boxShadow 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.03)'
                  }}
                >
                  {/* Banner Graphical Element */}
                  <div
                    style={{
                      width: '100%',
                      height: '110px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                      backgroundColor: '#f8fafc',
                      borderRadius: '8px',
                      padding: '12px',
                    }}
                  >
                    {hl.bannerType === 'nitro' ? (
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                        <div
                          style={{
                            fontSize: '24px',
                            fontWeight: 900,
                            letterSpacing: '0.05em',
                            color: '#000000',
                            backgroundColor: '#ffffff',
                            borderRadius: '50%',
                            width: '54px',
                            height: '54px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '2px solid #000000',
                          }}
                        >
                          Nitro
                        </div>
                        <div style={{ fontSize: '10px', fontWeight: 600, color: '#003B6D' }}>
                          Porto Digital 25 anos | Recife
                        </div>
                      </div>
                    ) : hl.bannerType === 'finep' ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ fontSize: '32px', fontWeight: 800, color: '#005a60' }}>Finep</div>
                        <div style={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 700, color: '#d97706', textAlign: 'left', lineHeight: 1.2 }}>
                          Inovação<br />e Pesquisa
                        </div>
                      </div>
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ display: 'flex', gap: '4px' }}>
                          <div style={{ width: '8px', height: '36px', backgroundColor: '#eab308' }} />
                          <div style={{ width: '8px', height: '36px', backgroundColor: '#2563eb' }} />
                        </div>
                        <div style={{ textAlign: 'left' }}>
                          <div style={{ fontSize: '11px', fontWeight: 800, color: '#003B6D', textTransform: 'uppercase', lineHeight: 1.2 }}>
                            Escritório de<br />Parcerias<br />Inovadoras
                          </div>
                          <div style={{ fontSize: '9px', color: '#64748b', marginTop: '2px' }}>Prefeitura do Recife</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#1E293B', marginBottom: '8px', lineHeight: 1.4 }}>
                      {hl.title}
                    </h3>
                    {hl.subtitle && (
                      <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0, lineHeight: 1.4 }}>
                        {hl.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* ── Modal Details: Opportunity ── */}
      {selectedOpportunity && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '24px',
          }}
          onClick={() => setSelectedOpportunity(null)}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              maxWidth: '560px',
              width: '100%',
              padding: '28px',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
              position: 'relative',
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedOpportunity(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'none',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
                color: '#64748b',
              }}
            >
              ✕
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#00a8b5',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '14px',
                }}
              >
                {selectedOpportunity.title.charAt(0)}
              </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1E293B', margin: 0 }}>
                  {selectedOpportunity.title}
                </h3>
                <span style={{ fontSize: '12px', color: '#64748b' }}>{selectedOpportunity.organization}</span>
              </div>
            </div>

            <div style={{ marginBottom: '20px', fontSize: '14px', color: '#334155', lineHeight: 1.6 }}>
              {selectedOpportunity.description}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px', fontSize: '13px' }}>
              <div><strong>Prazo limite:</strong> {selectedOpportunity.deadline}</div>
              <div><strong>Aporte financeiro:</strong> {selectedOpportunity.budget}</div>
              <div><strong>Tipo de apoio:</strong> {selectedOpportunity.supportType}</div>
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setSelectedOpportunity(null)}
                style={{
                  padding: '10px 18px',
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: '#ffffff',
                  color: '#475569',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer',
                }}
              >
                Fechar
              </button>
              <button
                onClick={() => {
                  setSelectedOpportunity(null)
                  showToast('Redirecionando para formulário de inscrição...')
                }}
                style={{
                  padding: '10px 20px',
                  borderRadius: '6px',
                  backgroundColor: '#00a8b5',
                  color: '#ffffff',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '13px',
                  cursor: 'pointer',
                }}
              >
                Inscrever Solução
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Modal Details: Highlight ── */}
      {selectedHighlight && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '24px',
          }}
          onClick={() => setSelectedHighlight(null)}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              maxWidth: '520px',
              width: '100%',
              padding: '28px',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
              position: 'relative',
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedHighlight(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'none',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
                color: '#64748b',
              }}
            >
              ✕
            </button>

            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>
              {selectedHighlight.title}
            </h3>
            <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '16px' }}>
              Organizado por: <strong>{selectedHighlight.organization}</strong>
            </p>

            {selectedHighlight.subtitle && (
              <div
                style={{
                  padding: '12px 16px',
                  backgroundColor: '#f8fafc',
                  borderLeft: '4px solid #00a8b5',
                  borderRadius: '4px',
                  fontSize: '13px',
                  color: '#334155',
                  marginBottom: '20px',
                }}
              >
                {selectedHighlight.subtitle}
              </div>
            )}

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
              {selectedHighlight.tags.map((t, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: '#e0f2fe',
                    color: '#0369a1',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontWeight: 600,
                  }}
                >
                  #{t}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setSelectedHighlight(null)}
                style={{
                  padding: '10px 18px',
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: '#ffffff',
                  color: '#475569',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer',
                }}
              >
                Fechar
              </button>
              <button
                onClick={() => {
                  setSelectedHighlight(null)
                  showToast('Abrindo programa parceiro...')
                }}
                style={{
                  padding: '10px 20px',
                  borderRadius: '6px',
                  backgroundColor: '#00a8b5',
                  color: '#ffffff',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '13px',
                  cursor: 'pointer',
                }}
              >
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Benefícios Pop Up / Modal ── */}
      <BeneficiosModal
        isOpen={beneficiosModalOpen}
        onClose={() => setBeneficiosModalOpen(false)}
        onSelectBenefit={(name) => showToast(`Benefício selecionado: ${name}`)}
      />
    </div>
  )
}

// ── Shared Button Style ──
const mainTealButtonStyle: React.CSSProperties = {
  backgroundColor: '#00a8b5',
  color: '#ffffff',
  border: 'none',
  borderRadius: '6px',
  padding: '14px 20px',
  fontSize: '13px',
  fontWeight: 600,
  cursor: 'pointer',
  textAlign: 'center',
  boxShadow: '0 2px 4px rgba(0,0,0,0.06)',
  transition: 'background-color 0.2s, transform 0.1s',
}



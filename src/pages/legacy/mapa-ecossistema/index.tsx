import { useState } from 'react'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'

// ─────────────────────────────────────────────────────────
// Types & Data Model
// ─────────────────────────────────────────────────────────

export type CategoryId = 'startups' | 'icts' | 'hubs' | 'governo' | 'investidores' | 'aceleradoras' | 'fomento'

export interface EcosystemActor {
  id: string
  name: string
  categoryId: CategoryId
  categoryName: string
  trl: number
  neighborhood: string
  x: number // percentage on SVG map
  y: number // percentage on SVG map
  description: string
  website: string
  email: string
  connections: string[] // IDs of connected actors
  color: string
}

const CATEGORIES: { id: CategoryId; name: string; color: string; icon: string; count: number; description: string }[] = [
  {
    id: 'startups',
    name: 'Startups & Scale-ups',
    color: '#00a8b5',
    icon: '🚀',
    count: 142,
    description: 'Empresas de base tecnológica, inovadoras e de alto crescimento.',
  },
  {
    id: 'icts',
    name: 'ICTs & Academias',
    color: '#a855f7',
    icon: '🎓',
    count: 24,
    description: 'Instituições de Ciência e Tecnologia, universidades e centro de pesquisas.',
  },
  {
    id: 'hubs',
    name: 'Hubs & Co-workings',
    color: '#10b981',
    icon: '🏢',
    count: 18,
    description: 'Espaços de inovação aberta, distritos tecnológicos e ambientes compartilhados.',
  },
  {
    id: 'governo',
    name: 'Governo & Setor Público',
    color: '#f59e0b',
    icon: '🏛️',
    count: 14,
    description: 'Órgãos governamentais, secretarias de inovação e agências municipais/estaduais.',
  },
  {
    id: 'investidores',
    name: 'Investidores & VCs',
    color: '#f43f5e',
    icon: '💰',
    count: 12,
    description: 'Redes de anjos, fundos de Venture Capital e Corporate Venture Capital.',
  },
  {
    id: 'aceleradoras',
    name: 'Aceleradoras & Incubadoras',
    color: '#3b82f6',
    icon: '⚡',
    count: 16,
    description: 'Programas de aceleração de negócios, mentoria e incubação tecnológica.',
  },
  {
    id: 'fomento',
    name: 'Entidades de Fomento',
    color: '#6366f1',
    icon: '🤝',
    count: 22,
    description: 'Agências e instituições de apoio ao desenvolvimento industrial e inovação.',
  },
]

const ACTORS: EcosystemActor[] = [
  {
    id: '1',
    name: 'CESAR - Centro de Estudos Avançados',
    categoryId: 'icts',
    categoryName: 'ICTs & Academias',
    trl: 9,
    neighborhood: 'Bairro do Recife',
    x: 62,
    y: 42,
    description: 'Centro de inovação e instituto de pesquisas aplicadas que impulsiona o ecossistema tecnológico.',
    website: 'https://www.cesar.org.br',
    email: 'contato@cesar.org.br',
    connections: ['2', '3', '6', '8'],
    color: '#a855f7',
  },
  {
    id: '2',
    name: 'Porto Digital',
    categoryId: 'hubs',
    categoryName: 'Hubs & Co-workings',
    trl: 9,
    neighborhood: 'Bairro do Recife',
    x: 65,
    y: 45,
    description: 'Um dos maiores parques tecnológicos urbanos da América Latina situado no centro histórico.',
    website: 'https://www.portodigital.org',
    email: 'atendimento@portodigital.org',
    connections: ['1', '4', '7', '10'],
    color: '#10b981',
  },
  {
    id: '3',
    name: 'UFPE - CIn (Centro de Informática)',
    categoryId: 'icts',
    categoryName: 'ICTs & Academias',
    trl: 9,
    neighborhood: 'Cidade Universitária',
    x: 32,
    y: 52,
    description: 'Referência internacional no ensino e pesquisa em computação e inteligência artificial.',
    website: 'https://www.cin.ufpe.br',
    email: 'cin@ufpe.br',
    connections: ['1', '5', '9'],
    color: '#a855f7',
  },
  {
    id: '4',
    name: 'Pitchify Tech',
    categoryId: 'startups',
    categoryName: 'Startups & Scale-ups',
    trl: 8,
    neighborhood: 'Bairro do Recife',
    x: 58,
    y: 40,
    description: 'Plataforma de inteligência para apresentação de pitches e conexões entre startups e investidores.',
    website: 'https://pitchify.io',
    email: 'hello@pitchify.io',
    connections: ['2', '9', '10'],
    color: '#00a8b5',
  },
  {
    id: '5',
    name: 'Recife Health AI',
    categoryId: 'startups',
    categoryName: 'Startups & Scale-ups',
    trl: 7,
    neighborhood: 'Santo Amaro',
    x: 52,
    y: 35,
    description: 'Deeptech focada em diagnóstico preditivo por inteligência artificial para clínicas e hospitais.',
    website: 'https://recifehealth.ai',
    email: 'contato@recifehealth.ai',
    connections: ['3', '6', '8'],
    color: '#00a8b5',
  },
  {
    id: '6',
    name: 'EMPREL',
    categoryId: 'governo',
    categoryName: 'Governo & Setor Público',
    trl: 8,
    neighborhood: 'Afogados',
    x: 44,
    y: 60,
    description: 'Empresa Municipal de Informática responsável pela transformação digital do Recife.',
    website: 'https://www.emprel.recife.pe.gov.br',
    email: 'emprel@recife.pe.gov.br',
    connections: ['1', '5', '7'],
    color: '#f59e0b',
  },
  {
    id: '7',
    name: 'SECTI Recife',
    categoryId: 'governo',
    categoryName: 'Governo & Setor Público',
    trl: 9,
    neighborhood: 'Boa Vista',
    x: 48,
    y: 44,
    description: 'Secretaria de Ciência, Tecnologia e Inovação do Recife promovendo políticas de inovação aberta.',
    website: 'https://secti.recife.pe.gov.br',
    email: 'secti@recife.pe.gov.br',
    connections: ['2', '6', '8', '11'],
    color: '#f59e0b',
  },
  {
    id: '8',
    name: 'ABDI',
    categoryId: 'fomento',
    categoryName: 'Entidades de Fomento',
    trl: 9,
    neighborhood: 'Brasília / Recife',
    x: 40,
    y: 30,
    description: 'Agência Brasileira de Desenvolvimento Industrial estimulando a transformação digital industrial.',
    website: 'https://www.abdi.com.br',
    email: 'fomento@abdi.com.br',
    connections: ['1', '5', '7', '12'],
    color: '#6366f1',
  },
  {
    id: '9',
    name: 'Manguez.al Angels',
    categoryId: 'investidores',
    categoryName: 'Investidores & VCs',
    trl: 9,
    neighborhood: 'Bairro do Recife',
    x: 66,
    y: 38,
    description: 'Grupo de investidores anjo dedicado a impulsionar startups em estágio inicial na região Nordeste.',
    website: 'https://manguezal.angels',
    email: 'pitch@manguezal.angels',
    connections: ['3', '4', '10'],
    color: '#f43f5e',
  },
  {
    id: '10',
    name: 'Jump Brasil',
    categoryId: 'aceleradoras',
    categoryName: 'Aceleradoras & Incubadoras',
    trl: 8,
    neighborhood: 'Santo Amaro',
    x: 54,
    y: 38,
    description: 'Aceleradora de negócios com programa estruturado de tração e captação de investimento.',
    website: 'https://jumpbrasil.com',
    email: 'contato@jumpbrasil.com',
    connections: ['2', '4', '9'],
    color: '#3b82f6',
  },
  {
    id: '11',
    name: 'EducaRecife VR',
    categoryId: 'startups',
    categoryName: 'Startups & Scale-ups',
    trl: 6,
    neighborhood: 'Espinheiro',
    x: 45,
    y: 36,
    description: 'Edtech que utiliza realidade virtual e aumentada para capacitação profissional imersiva.',
    website: 'https://educarecifevr.com.br',
    email: 'oi@educarecifevr.com',
    connections: ['7', '12'],
    color: '#00a8b5',
  },
  {
    id: '12',
    name: 'FACEPE',
    categoryId: 'fomento',
    categoryName: 'Entidades de Fomento',
    trl: 9,
    neighborhood: 'Madalena',
    x: 38,
    y: 46,
    description: 'Fundação de Amparo à Ciência e Tecnologia do Estado de Pernambuco.',
    website: 'http://www.facepe.br',
    email: 'contato@facepe.br',
    connections: ['8', '11'],
    color: '#6366f1',
  },
]

// Highcharts historical series from Bubble snippet:
// categories: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011']
const HISTORICAL_DATA = {
  years: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
  series: [
    {
      name: 'Startups Criadas',
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      color: '#00a8b5',
    },
    {
      name: 'Investimento Mobilizado (R$M)',
      data: [22.9, 22.5, 54.0, 129.2, 4.0, 44.0, 55.0, 55.5, 56.4, 33.1, 22.0, 11.4],
      color: '#10b981',
    },
    {
      name: 'Conexões & Parcerias',
      data: [216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5],
      color: '#a855f7',
    },
  ],
}

// ─────────────────────────────────────────────────────────
// Component: MapaEcossistemaPage
// ─────────────────────────────────────────────────────────

export default function MapaEcossistemaPage() {
  const [actorsList] = useState<EcosystemActor[]>(ACTORS)
  const [activeTab, setActiveTab] = useState<'mapa' | 'categorias' | 'dados' | 'importar-startups' | 'importar-orgs'>('mapa')
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedActor, setSelectedActor] = useState<EcosystemActor | null>(null)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [showConnections, setShowConnections] = useState(true)

  // CSV Import States
  const [startupCsvName, setStartupCsvName] = useState<string | null>(null)
  const [orgCsvName, setOrgCsvName] = useState<string | null>(null)

  // Filtered actors for map & directory
  const filteredActors = actorsList.filter(actor => {
    const matchesCategory = selectedCategoryFilter === 'all' || actor.categoryId === selectedCategoryFilter
    const matchesSearch =
      actor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      actor.neighborhood.toLowerCase().includes(searchTerm.toLowerCase()) ||
      actor.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8FAFC', color: '#1E293B', fontFamily: "'Inter', sans-serif", display: 'flex', flexDirection: 'column' }}>
      <Header />

      {/* ── Main Layout Body ── */}
      <div style={{ display: 'flex', flex: 1, minHeight: 'calc(100vh - 64px)' }}>
        <Sidebar activeItem="mapa" />

        {/* ── Main Content Area ── */}
        <main style={{ flex: 1, backgroundColor: '#F8FAFC', padding: '32px 40px', position: 'relative' }}>
          {/* Top Pill Tabs Switcher */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: '#E2E8F0',
                padding: '4px',
                borderRadius: '8px',
                gap: '4px',
              }}
            >
              <button
                onClick={() => setActiveTab('mapa')}
                style={{
                  padding: '8px 24px',
                  borderRadius: '6px',
                  fontSize: '15px',
                  fontWeight: activeTab === 'mapa' ? 600 : 500,
                  color: activeTab === 'mapa' ? '#0F172A' : '#475569',
                  backgroundColor: activeTab === 'mapa' ? '#CBD5E1' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                Mapa
              </button>
              <button
                onClick={() => setActiveTab('categorias')}
                style={{
                  padding: '8px 24px',
                  borderRadius: '6px',
                  fontSize: '15px',
                  fontWeight: activeTab === 'categorias' ? 600 : 500,
                  color: activeTab === 'categorias' ? '#0F172A' : '#475569',
                  backgroundColor: activeTab === 'categorias' ? '#CBD5E1' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                Categorias
              </button>
              <button
                onClick={() => setActiveTab('dados')}
                style={{
                  padding: '8px 24px',
                  borderRadius: '6px',
                  fontSize: '15px',
                  fontWeight: activeTab === 'dados' ? 600 : 500,
                  color: activeTab === 'dados' ? '#0F172A' : '#475569',
                  backgroundColor: activeTab === 'dados' ? '#CBD5E1' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                Dados
              </button>
              <button
                onClick={() => setActiveTab('importar-startups')}
                style={{
                  padding: '8px 24px',
                  borderRadius: '6px',
                  fontSize: '15px',
                  fontWeight: activeTab === 'importar-startups' ? 600 : 500,
                  color: activeTab === 'importar-startups' ? '#0F172A' : '#475569',
                  backgroundColor: activeTab === 'importar-startups' ? '#CBD5E1' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                Importar Startups
              </button>
              <button
                onClick={() => setActiveTab('importar-orgs')}
                style={{
                  padding: '8px 24px',
                  borderRadius: '6px',
                  fontSize: '15px',
                  fontWeight: activeTab === 'importar-orgs' ? 600 : 500,
                  color: activeTab === 'importar-orgs' ? '#0F172A' : '#475569',
                  backgroundColor: activeTab === 'importar-orgs' ? '#CBD5E1' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                Importar Organizações
              </button>
            </div>
          </div>

          {/* ───────────────────────────────────────────────────────── */}
          {/* TAB 1: MAPA */}
          {/* ───────────────────────────────────────────────────────── */}
          {activeTab === 'mapa' && (
            <div>
              <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#0F172A', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                Mapa do Ecossistema de Inovação
              </h1>
              <p style={{ fontSize: '15px', color: '#64748B', marginBottom: '24px', maxWidth: '850px', lineHeight: 1.5 }}>
                Explore o ecossistema de inovação da cidade através deste mapa interativo que conecta diferentes atores e mostra suas relações.
              </p>

              {/* Map Dark Box Container */}
              <div
                style={{
                  backgroundColor: '#0F172A',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '580px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Controls Bar on Top of Map */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', zIndex: 10 }}>
                  {/* Search and Filters */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', flex: 1 }}>
                    <div style={{ position: 'relative', minWidth: '240px' }}>
                      <input
                        type="text"
                        placeholder="Buscar ator, bairro ou categoria..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        style={{
                          width: '100%',
                          height: '38px',
                          backgroundColor: '#1E293B',
                          border: '1px solid #334155',
                          borderRadius: '6px',
                          padding: '0 12px 0 34px',
                          fontSize: '13px',
                          color: '#F8FAFC',
                          outline: 'none',
                        }}
                      />
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" style={{ position: 'absolute', left: '12px', top: '12px' }}>
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.35-4.35" />
                      </svg>
                    </div>

                    <select
                      value={selectedCategoryFilter}
                      onChange={e => setSelectedCategoryFilter(e.target.value)}
                      style={{
                        height: '38px',
                        backgroundColor: '#1E293B',
                        border: '1px solid #334155',
                        borderRadius: '6px',
                        padding: '0 12px',
                        fontSize: '13px',
                        color: '#F8FAFC',
                        outline: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="all">Todas as Categorias ({ACTORS.length})</option>
                      {CATEGORIES.map(cat => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name} ({ACTORS.filter(a => a.categoryId === cat.id).length})
                        </option>
                      ))}
                    </select>

                    <button
                      onClick={() => setShowConnections(!showConnections)}
                      style={{
                        height: '38px',
                        padding: '0 14px',
                        backgroundColor: showConnections ? '#00a8b5' : '#1E293B',
                        color: '#ffffff',
                        border: '1px solid #334155',
                        borderRadius: '6px',
                        fontSize: '13px',
                        fontWeight: 500,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {showConnections ? '⚡ Conexões Ativas' : '🔌 Ocultar Conexões'}
                    </button>
                  </div>

                  {/* Zoom Controls */}
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <button
                      onClick={() => setZoomLevel(prev => Math.min(prev + 0.2, 1.8))}
                      style={{ width: '32px', height: '32px', backgroundColor: '#1E293B', border: '1px solid #334155', borderRadius: '4px', color: '#F8FAFC', cursor: 'pointer' }}
                      title="Aumentar Zoom"
                    >
                      +
                    </button>
                    <button
                      onClick={() => setZoomLevel(prev => Math.max(prev - 0.2, 0.8))}
                      style={{ width: '32px', height: '32px', backgroundColor: '#1E293B', border: '1px solid #334155', borderRadius: '4px', color: '#F8FAFC', cursor: 'pointer' }}
                      title="Diminuir Zoom"
                    >
                      -
                    </button>
                    <button
                      onClick={() => setZoomLevel(1)}
                      style={{ padding: '0 10px', height: '32px', backgroundColor: '#1E293B', border: '1px solid #334155', borderRadius: '4px', color: '#94A3B8', fontSize: '12px', cursor: 'pointer' }}
                    >
                      Reset
                    </button>
                  </div>
                </div>

                {/* SVG Map Canvas Display */}
                <div
                  style={{
                    flex: 1,
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    backgroundColor: '#090D16',
                    border: '1px solid #1E293B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    viewBox="0 0 1000 600"
                    style={{
                      width: '100%',
                      height: '100%',
                      transform: `scale(${zoomLevel})`,
                      transformOrigin: 'center center',
                      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <defs>
                      <pattern id="gridPattern" width="30" height="30" patternUnits="userSpaceOnUse">
                        <circle cx="15" cy="15" r="1" fill="#1E293B" opacity="0.6" />
                      </pattern>
                      <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {/* Dot Grid Background */}
                    <rect width="1000" height="600" fill="url(#gridPattern)" />

                    {/* Recife Map Silhouette Path (Stylized Map Contour) */}
                    <g opacity="0.85">
                      {/* Coastline & Island of Bairro do Recife */}
                      <path
                        d="M150,520 C 200,480 280,510 340,490 C 400,470 480,530 550,510 C 620,490 680,440 730,420 C 780,400 840,430 890,390 C 920,360 880,300 820,280 C 760,260 710,210 650,200 C 590,190 520,230 460,210 C 400,190 350,140 280,160 C 210,180 160,240 120,310 C 80,380 100,460 150,520 Z"
                        fill="#111B2E"
                        stroke="#1E3A5F"
                        strokeWidth="2"
                        strokeDasharray="4 2"
                      />

                      {/* Capibaribe River Curve Accent */}
                      <path
                        d="M 120,380 Q 300,320 480,390 T 700,350 T 880,310"
                        fill="none"
                        stroke="#00a8b5"
                        strokeWidth="3"
                        opacity="0.25"
                      />
                    </g>

                    {/* Connection Lines between Ecosystem Actors */}
                    {showConnections &&
                      filteredActors.map(actor => {
                        return actor.connections.map(targetId => {
                          const target = ACTORS.find(a => a.id === targetId)
                          if (!target) return null
                          const isHighlighted = selectedActor?.id === actor.id || selectedActor?.id === target.id
                          return (
                            <line
                              key={`${actor.id}-${target.id}`}
                              x1={actor.x * 10}
                              y1={actor.y * 6}
                              x2={target.x * 10}
                              y2={target.y * 6}
                              stroke={isHighlighted ? '#00a8b5' : '#334155'}
                              strokeWidth={isHighlighted ? '2' : '1'}
                              opacity={isHighlighted ? 0.9 : 0.4}
                              strokeDasharray={isHighlighted ? 'none' : '3 3'}
                            />
                          )
                        })
                      })}

                    {/* Actor Nodes */}
                    {filteredActors.map(actor => {
                      const isSelected = selectedActor?.id === actor.id
                      const cx = actor.x * 10
                      const cy = actor.y * 6

                      return (
                        <g
                          key={actor.id}
                          onClick={() => setSelectedActor(actor)}
                          style={{ cursor: 'pointer' }}
                        >
                          {/* Pulsing ring on hover/select */}
                          <circle
                            cx={cx}
                            cy={cy}
                            r={isSelected ? 18 : 12}
                            fill={actor.color}
                            opacity={isSelected ? 0.35 : 0.15}
                            filter="url(#glowEffect)"
                          />
                          {/* Main Dot */}
                          <circle
                            cx={cx}
                            cy={cy}
                            r={isSelected ? 9 : 6}
                            fill={actor.color}
                            stroke="#ffffff"
                            strokeWidth={isSelected ? 2.5 : 1.5}
                          />
                          {/* Actor Name Label */}
                          <text
                            x={cx}
                            y={cy - 12}
                            textAnchor="middle"
                            fill={isSelected ? '#ffffff' : '#CBD5E1'}
                            fontSize={isSelected ? '12 font-weight="700"' : '10'}
                            style={{ pointerEvents: 'none', userSelect: 'none' }}
                          >
                            {actor.name.split(' - ')[0]}
                          </text>
                        </g>
                      )
                    })}
                  </svg>

                  {/* Map Legend */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '16px',
                      backgroundColor: 'rgba(15, 23, 42, 0.85)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid #1E293B',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '12px',
                      alignItems: 'center',
                    }}
                  >
                    {CATEGORIES.map(cat => (
                      <div key={cat.id} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#CBD5E1' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: cat.color }} />
                        <span>{cat.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Side Drawer for Selected Actor */}
              {selectedActor && (
                <div
                  style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: '380px',
                    backgroundColor: '#0F172A',
                    color: '#F8FAFC',
                    borderLeft: '1px solid #1E293B',
                    boxShadow: '-10px 0 25px rgba(0,0,0,0.5)',
                    zIndex: 50,
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                      <span
                        style={{
                          backgroundColor: `${selectedActor.color}22`,
                          color: selectedActor.color,
                          border: `1px solid ${selectedActor.color}44`,
                          padding: '4px 10px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: 600,
                        }}
                      >
                        {selectedActor.categoryName}
                      </span>
                      <button
                        onClick={() => setSelectedActor(null)}
                        style={{ backgroundColor: 'transparent', border: 'none', color: '#94A3B8', fontSize: '20px', cursor: 'pointer' }}
                      >
                        ✕
                      </button>
                    </div>

                    <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px', color: '#ffffff' }}>{selectedActor.name}</h2>
                    <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '20px' }}>📍 Bairro: {selectedActor.neighborhood}</p>

                    <div style={{ backgroundColor: '#1E293B', padding: '14px', borderRadius: '8px', marginBottom: '20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                        <span style={{ color: '#94A3B8' }}>Maturidade Tecnológica</span>
                        <span style={{ color: '#00a8b5', fontWeight: 700 }}>TRL {selectedActor.trl} / 9</span>
                      </div>
                      <div style={{ width: '100%', height: '6px', backgroundColor: '#334155', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ width: `${(selectedActor.trl / 9) * 100}%`, height: '100%', backgroundColor: '#00a8b5' }} />
                      </div>
                    </div>

                    <h4 style={{ fontSize: '13px', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>Sobre a Entidade</h4>
                    <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.5, marginBottom: '24px' }}>{selectedActor.description}</p>

                    <h4 style={{ fontSize: '13px', fontWeight: 600, color: '#CBD5E1', marginBottom: '10px' }}>Conexões no Ecossistema ({selectedActor.connections.length})</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {selectedActor.connections.map(connId => {
                        const target = ACTORS.find(a => a.id === connId)
                        if (!target) return null
                        return (
                          <div
                            key={connId}
                            onClick={() => setSelectedActor(target)}
                            style={{
                              padding: '8px 12px',
                              backgroundColor: '#1E293B',
                              borderRadius: '6px',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              cursor: 'pointer',
                              border: '1px solid #334155',
                            }}
                          >
                            <span style={{ fontSize: '12px', color: '#F8FAFC' }}>{target.name}</span>
                            <span style={{ fontSize: '10px', color: target.color }}>{target.categoryName}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div style={{ paddingTop: '20px', borderTop: '1px solid #1E293B' }}>
                    <a
                      href={selectedActor.website}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'block',
                        width: '100%',
                        padding: '12px',
                        backgroundColor: '#00a8b5',
                        color: '#ffffff',
                        textAlign: 'center',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '14px',
                      }}
                    >
                      Acessar Website Oficial
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ───────────────────────────────────────────────────────── */}
          {/* TAB 2: CATEGORIAS */}
          {/* ───────────────────────────────────────────────────────── */}
          {activeTab === 'categorias' && (
            <div>
              <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#0F172A', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                Categorias Mapeadas
              </h1>
              <p style={{ fontSize: '15px', color: '#64748B', marginBottom: '24px', maxWidth: '850px', lineHeight: 1.5 }}>
                Explore as diferentes categorias de entidades que compõem o ecossistema de inovação da cidade.
              </p>

              <div
                style={{
                  backgroundColor: '#0F172A',
                  borderRadius: '12px',
                  padding: '32px',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
                }}
              >
                {/* Search Header inside Categories Container */}
                <div style={{ marginBottom: '28px', maxWidth: '400px' }}>
                  <input
                    type="text"
                    placeholder="Filtrar por nome da categoria..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    style={{
                      width: '100%',
                      height: '42px',
                      backgroundColor: '#1E293B',
                      border: '1px solid #334155',
                      borderRadius: '8px',
                      padding: '0 16px',
                      fontSize: '14px',
                      color: '#F8FAFC',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Grid of Categories */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
                  {CATEGORIES.filter(cat => cat.name.toLowerCase().includes(searchTerm.toLowerCase())).map(cat => {
                    const catActors = ACTORS.filter(a => a.categoryId === cat.id)
                    return (
                      <div
                        key={cat.id}
                        style={{
                          backgroundColor: '#1E293B',
                          border: '1px solid #334155',
                          borderRadius: '10px',
                          padding: '24px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          transition: 'transform 0.2s ease, border-color 0.2s ease',
                        }}
                      >
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                            <span style={{ fontSize: '28px' }}>{cat.icon}</span>
                            <span
                              style={{
                                backgroundColor: `${cat.color}22`,
                                color: cat.color,
                                border: `1px solid ${cat.color}44`,
                                padding: '4px 12px',
                                borderRadius: '12px',
                                fontSize: '13px',
                                fontWeight: 700,
                              }}
                            >
                              {cat.count} entidades
                            </span>
                          </div>

                          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#F8FAFC', marginBottom: '8px' }}>{cat.name}</h3>
                          <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.5, marginBottom: '20px' }}>{cat.description}</p>
                        </div>

                        {/* Sample actors list */}
                        <div>
                          <h4 style={{ fontSize: '12px', fontWeight: 600, color: '#CBD5E1', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Destaques Mapeados
                          </h4>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {catActors.slice(0, 3).map(actor => (
                              <span
                                key={actor.id}
                                style={{
                                  backgroundColor: '#0F172A',
                                  color: '#CBD5E1',
                                  padding: '4px 8px',
                                  borderRadius: '4px',
                                  fontSize: '11px',
                                }}
                              >
                                {actor.name.split(' - ')[0]}
                              </span>
                            ))}
                            {catActors.length === 0 && (
                              <span style={{ fontSize: '11px', color: '#64748B' }}>Inscrições abertas</span>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ───────────────────────────────────────────────────────── */}
          {/* TAB 3: DADOS */}
          {/* ───────────────────────────────────────────────────────── */}
          {activeTab === 'dados' && (
            <div>
              <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#0F172A', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                Dados do Ecossistema
              </h1>
              <p style={{ fontSize: '15px', color: '#64748B', marginBottom: '24px', maxWidth: '850px', lineHeight: 1.5 }}>
                O "Mapas da Inovação" é uma plataforma interativa que mapeia e conecta os diversos atores do ecossistema de inovação da nossa cidade. Visualize e compreenda os dados do ecossistema de inovação da cidade.
              </p>

              {/* Data Dashboard Dark Container */}
              <div
                style={{
                  backgroundColor: '#0F172A',
                  borderRadius: '12px',
                  padding: '32px',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
                }}
              >
                {/* Metric Summary Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '32px' }}>
                  <div style={{ backgroundColor: '#1E293B', padding: '20px', borderRadius: '8px', border: '1px solid #334155' }}>
                    <div style={{ fontSize: '12px', color: '#94A3B8', marginBottom: '4px' }}>Total de Atores</div>
                    <div style={{ fontSize: '28px', fontWeight: 800, color: '#F8FAFC' }}>248</div>
                    <div style={{ fontSize: '11px', color: '#10B981', marginTop: '4px' }}>↑ +14% este ano</div>
                  </div>

                  <div style={{ backgroundColor: '#1E293B', padding: '20px', borderRadius: '8px', border: '1px solid #334155' }}>
                    <div style={{ fontSize: '12px', color: '#94A3B8', marginBottom: '4px' }}>Startups Mapeadas</div>
                    <div style={{ fontSize: '28px', fontWeight: 800, color: '#00a8b5' }}>142</div>
                    <div style={{ fontSize: '11px', color: '#00a8b5', marginTop: '4px' }}>57% do total</div>
                  </div>

                  <div style={{ backgroundColor: '#1E293B', padding: '20px', borderRadius: '8px', border: '1px solid #334155' }}>
                    <div style={{ fontSize: '12px', color: '#94A3B8', marginBottom: '4px' }}>Hubs & ICTs</div>
                    <div style={{ fontSize: '28px', fontWeight: 800, color: '#a855f7' }}>42</div>
                    <div style={{ fontSize: '11px', color: '#a855f7', marginTop: '4px' }}>Infraestrutura chave</div>
                  </div>

                  <div style={{ backgroundColor: '#1E293B', padding: '20px', borderRadius: '8px', border: '1px solid #334155' }}>
                    <div style={{ fontSize: '12px', color: '#94A3B8', marginBottom: '4px' }}>TRL Médio</div>
                    <div style={{ fontSize: '28px', fontWeight: 800, color: '#f59e0b' }}>7.2</div>
                    <div style={{ fontSize: '11px', color: '#f59e0b', marginTop: '4px' }}>Escala comercial</div>
                  </div>

                  <div style={{ backgroundColor: '#1E293B', padding: '20px', borderRadius: '8px', border: '1px solid #334155' }}>
                    <div style={{ fontSize: '12px', color: '#94A3B8', marginBottom: '4px' }}>Capital Mobilizado</div>
                    <div style={{ fontSize: '28px', fontWeight: 800, color: '#10b981' }}>R$ 45.8M</div>
                    <div style={{ fontSize: '11px', color: '#10b981', marginTop: '4px' }}>Editais e VC</div>
                  </div>
                </div>

                {/* Highcharts Historical Series Chart Component */}
                <div style={{ backgroundColor: '#1E293B', borderRadius: '10px', padding: '24px', border: '1px solid #334155', marginBottom: '32px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#F8FAFC' }}>Evolução Histórica do Ecossistema</h3>
                      <p style={{ fontSize: '12px', color: '#94A3B8' }}>Crescimento de atores e investimentos ao longo dos anos (Highcharts Data)</p>
                    </div>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      {HISTORICAL_DATA.series.map(s => (
                        <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#CBD5E1' }}>
                          <span style={{ width: '10px', height: '10px', backgroundColor: s.color, borderRadius: '2px' }} />
                          <span>{s.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SVG Historical Multi-Line Chart */}
                  <div style={{ width: '100%', height: '280px', position: 'relative' }}>
                    <svg viewBox="0 0 900 240" style={{ width: '100%', height: '100%' }}>
                      {/* Horizontal Grid lines */}
                      {[0, 60, 120, 180, 240].map((val, idx) => (
                        <line key={idx} x1="40" y1={val} x2="880" y2={val} stroke="#334155" strokeDasharray="3 3" opacity="0.5" />
                      ))}

                      {/* X Axis Labels */}
                      {HISTORICAL_DATA.years.map((year, idx) => {
                        const x = 50 + idx * (810 / 11)
                        return (
                          <text key={year} x={x} y="235" fill="#94A3B8" fontSize="11" textAnchor="middle">
                            {year}
                          </text>
                        )
                      })}

                      {/* Series Lines */}
                      {HISTORICAL_DATA.series.map(s => {
                        const points = s.data.map((val, idx) => {
                          const x = 50 + idx * (810 / 11)
                          const y = 210 - (val / 220) * 190
                          return `${x},${y}`
                        })
                        return (
                          <g key={s.name}>
                            <polyline fill="none" stroke={s.color} strokeWidth="3" points={points.join(' ')} />
                            {s.data.map((val, idx) => {
                              const x = 50 + idx * (810 / 11)
                              const y = 210 - (val / 220) * 190
                              return <circle key={idx} cx={x} cy={y} r="4" fill={s.color} stroke="#1E293B" strokeWidth="2" />
                            })}
                          </g>
                        )
                      })}
                    </svg>
                  </div>
                </div>

                {/* Table of Ecosystem Data */}
                <div style={{ backgroundColor: '#1E293B', borderRadius: '10px', padding: '24px', border: '1px solid #334155' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#F8FAFC' }}>Listagem Completa de Atores</h3>
                    <button
                      onClick={() => alert('Download do arquivo CSV iniciado!')}
                      style={{
                        backgroundColor: '#00a8b5',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '8px 16px',
                        fontSize: '13px',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Exportar CSV
                    </button>
                  </div>

                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px', color: '#CBD5E1' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid #334155', color: '#94A3B8' }}>
                          <th style={{ padding: '12px' }}>Nome da Entidade</th>
                          <th style={{ padding: '12px' }}>Categoria</th>
                          <th style={{ padding: '12px' }}>TRL</th>
                          <th style={{ padding: '12px' }}>Bairro</th>
                          <th style={{ padding: '12px' }}>Website</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ACTORS.map(actor => (
                          <tr key={actor.id} style={{ borderBottom: '1px solid #334155' }}>
                            <td style={{ padding: '12px', fontWeight: 600, color: '#F8FAFC' }}>{actor.name}</td>
                            <td style={{ padding: '12px' }}>
                              <span style={{ color: actor.color, fontWeight: 500 }}>{actor.categoryName}</span>
                            </td>
                            <td style={{ padding: '12px' }}>TRL {actor.trl}</td>
                            <td style={{ padding: '12px' }}>{actor.neighborhood}</td>
                            <td style={{ padding: '12px' }}>
                              <a href={actor.website} target="_blank" rel="noreferrer" style={{ color: '#00a8b5', textDecoration: 'none' }}>
                                Link ↗
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ───────────────────────────────────────────────────────── */}
          {/* TAB 4: IMPORTAR STARTUPS */}
          {/* ───────────────────────────────────────────────────────── */}
          {activeTab === 'importar-startups' && (
            <div>
              <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#0F172A', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                Importar Startups
              </h1>
              <p style={{ fontSize: '15px', color: '#64748B', marginBottom: '24px', maxWidth: '850px', lineHeight: 1.5 }}>
                Realize o carregamento em lote de startups no ecossistema via arquivo CSV ou preenchimento manual.
              </p>

              <div
                style={{
                  backgroundColor: '#0F172A',
                  borderRadius: '12px',
                  padding: '32px',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
                  maxWidth: '800px',
                }}
              >
                {/* Upload Zone */}
                <div
                  style={{
                    border: '2px dashed #334155',
                    borderRadius: '10px',
                    padding: '48px 24px',
                    textAlign: 'center',
                    backgroundColor: '#1E293B',
                    marginBottom: '24px',
                  }}
                >
                  <div style={{ fontSize: '40px', marginBottom: '12px' }}>📁</div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#F8FAFC', marginBottom: '8px' }}>
                    {startupCsvName ? `Arquivo carregado: ${startupCsvName}` : 'Arraste seu arquivo CSV de Startups'}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '20px' }}>
                    Suporta colunas: Nome, CNPJ, Setor, TRL, Fundadores, Email, Website
                  </p>

                  <label
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#00a8b5',
                      color: '#ffffff',
                      padding: '10px 24px',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Selecionar Arquivo .CSV
                    <input
                      type="file"
                      accept=".csv"
                      style={{ display: 'none' }}
                      onChange={e => {
                        if (e.target.files && e.target.files[0]) {
                          setStartupCsvName(e.target.files[0].name)
                        }
                      }}
                    />
                  </label>
                </div>

                {/* Template Download & Help */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button
                    onClick={() => alert('Download do modelo CSV de startups iniciado.')}
                    style={{ backgroundColor: 'transparent', border: '1px solid #334155', color: '#CBD5E1', padding: '10px 18px', borderRadius: '6px', fontSize: '13px', cursor: 'pointer' }}
                  >
                    ⬇️ Baixar Planilha Modelo (.csv)
                  </button>

                  <button
                    disabled={!startupCsvName}
                    onClick={() => alert(`Processamento do arquivo ${startupCsvName} concluído com sucesso!`)}
                    style={{
                      backgroundColor: startupCsvName ? '#10B981' : '#334155',
                      color: '#ffffff',
                      border: 'none',
                      padding: '10px 24px',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: startupCsvName ? 'pointer' : 'not-allowed',
                    }}
                  >
                    Confirmar Importação
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ───────────────────────────────────────────────────────── */}
          {/* TAB 5: IMPORTAR ORGANIZAÇÕES */}
          {/* ───────────────────────────────────────────────────────── */}
          {activeTab === 'importar-orgs' && (
            <div>
              <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#0F172A', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                Importar Organizações
              </h1>
              <p style={{ fontSize: '15px', color: '#64748B', marginBottom: '24px', maxWidth: '850px', lineHeight: 1.5 }}>
                Importe instituições, empresas, hubs e órgãos governamentais para o mapa do ecossistema.
              </p>

              <div
                style={{
                  backgroundColor: '#0F172A',
                  borderRadius: '12px',
                  padding: '32px',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
                  maxWidth: '800px',
                }}
              >
                <div
                  style={{
                    border: '2px dashed #334155',
                    borderRadius: '10px',
                    padding: '48px 24px',
                    textAlign: 'center',
                    backgroundColor: '#1E293B',
                    marginBottom: '24px',
                  }}
                >
                  <div style={{ fontSize: '40px', marginBottom: '12px' }}>🏛️</div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#F8FAFC', marginBottom: '8px' }}>
                    {orgCsvName ? `Arquivo carregado: ${orgCsvName}` : 'Arraste o arquivo CSV de Organizações'}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '20px' }}>
                    Suporta colunas: RazaoSocial, Tipo, Responsavel, Bairro, Telefone
                  </p>

                  <label
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#00a8b5',
                      color: '#ffffff',
                      padding: '10px 24px',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Selecionar Arquivo .CSV
                    <input
                      type="file"
                      accept=".csv"
                      style={{ display: 'none' }}
                      onChange={e => {
                        if (e.target.files && e.target.files[0]) {
                          setOrgCsvName(e.target.files[0].name)
                        }
                      }}
                    />
                  </label>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button
                    onClick={() => alert('Download do modelo CSV de organizações iniciado.')}
                    style={{ backgroundColor: 'transparent', border: '1px solid #334155', color: '#CBD5E1', padding: '10px 18px', borderRadius: '6px', fontSize: '13px', cursor: 'pointer' }}
                  >
                    ⬇️ Baixar Planilha Modelo (.csv)
                  </button>

                  <button
                    disabled={!orgCsvName}
                    onClick={() => alert(`Processamento das organizações em ${orgCsvName} concluído com sucesso!`)}
                    style={{
                      backgroundColor: orgCsvName ? '#10B981' : '#334155',
                      color: '#ffffff',
                      border: 'none',
                      padding: '10px 24px',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: orgCsvName ? 'pointer' : 'not-allowed',
                    }}
                  >
                    Confirmar Importação
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Floating Coreto Flower Badge Widget (Bottom Right as seen in design screenshots) */}
          <div
            style={{
              position: 'fixed',
              bottom: '24px',
              right: '24px',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #00A8B5 0%, #E05C5C 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
              cursor: 'pointer',
              zIndex: 40,
            }}
            title="Coreto Platform"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 4C13.1 4 14 4.9 14 6C14 7.1 13.1 8 12 8C10.9 8 10 7.1 10 6C10 4.9 10.9 4 12 4ZM12 16C13.1 16 14 16.9 14 18C14 19.1 13.1 20 12 20C10.9 20 10 19.1 10 18C10 16.9 10.9 16 12 16ZM6 10C7.1 10 8 10.9 8 12C8 13.1 7.1 14 6 14C4.9 14 4 13.1 4 12C4 10.9 4.9 10 6 10ZM18 10C19.1 10 20 10.9 20 12C20 13.1 19.1 14 18 14C16.9 14 16 13.1 16 12C16 10.9 16.9 10 18 10Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </main>
      </div>
    </div>
  )
}

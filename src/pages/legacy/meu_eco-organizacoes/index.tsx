import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import bannerOrganizacoes from '../../../assets/banner-meu_eco-organizacoes.png'
import logoEmprel from '../../../assets/logo-emprel.png'

interface Organizacao {
  id: string
  nome: string
  categoria: string
  logo?: string
  logoText?: string
  logoBg?: string
  tags: string[]
  descricao: string
  site?: string
  email?: string
  responsavel?: string
  cidade?: string
}

const MOCK_ORGANIZACOES: Organizacao[] = [
  {
    id: '1',
    nome: 'Emprel',
    categoria: 'Empresa Pública',
    logo: logoEmprel,
    logoText: 'Emprel',
    logoBg: '#ffffff',
    tags: ['eita', 'destaque', 'GovTech'],
    descricao:
      'Empresa Municipal de Informática do Recife, responsável pelo desenvolvimento tecnológico, infraestrutura de TIC e governança digital da Prefeitura do Recife.',
    site: 'https://www.emprel.gov.br',
    email: 'contato@emprel.gov.br',
    responsavel: 'Pedro Dhalia',
    cidade: 'Recife, PE',
  },
  {
    id: '2',
    nome: 'Polotec',
    categoria: 'NIT / Academia',
    logoText: 'polotec',
    logoBg: '#BE123C',
    tags: ['NIT', 'Parceira', 'Ambiente de Inovação'],
    descricao:
      'Núcleo de Inovação e Polos Tecnológicos da UFPE, atuando na gestão da propriedade intelectual, transferência de tecnologia e apoio a startups nascentes.',
    site: 'https://polotec.ufpe.br',
    email: 'polotec@ufpe.br',
    responsavel: 'Ana Clara Silva',
    cidade: 'Recife, PE',
  },
  {
    id: '3',
    nome: 'Teste LTDA',
    categoria: 'Empresa Privada',
    logoText: 'TESTE',
    logoBg: '#0F172A',
    tags: ['NIT', 'IoT', 'Sensores'],
    descricao:
      'Empresa especializada em soluções de Internet das Coisas (IoT) para gestão urbana inteligente, monitoramento ambiental e telemetria industrial.',
    site: 'https://testeltda.com.br',
    email: 'contato@testeltda.com',
    responsavel: 'Carlos Eduardo Rocha',
    cidade: 'Recife, PE',
  },
  {
    id: '4',
    nome: 'SECTI',
    categoria: 'Órgão Governamental',
    logoText: 'SECTI RECIFE',
    logoBg: '#0284C7',
    tags: ['eita', 'organizador-hacker', 'Transformação Digital'],
    descricao:
      'Secretaria de Ciência, Tecnologia e Inovação da Prefeitura do Recife, promovendo programas estratégicos de inovação aberta e inclusão digital.',
    site: 'https://secti.recife.pe.gov.br',
    email: 'secti@recife.pe.gov.br',
    responsavel: 'Mariana Oliveira',
    cidade: 'Recife, PE',
  },
  {
    id: '5',
    nome: 'asdasdsada',
    categoria: 'Startup',
    logoText: 'CORETO LAB',
    logoBg: '#0D9488',
    tags: ['NIT', 'eita'],
    descricao:
      'Iniciativa em fase de validação focada em soluções de engajamento comunitário e mobilidade sustentável em ecossistemas urbanos.',
    site: 'https://coreto.recife.br',
    email: 'lab@coreto.recife.br',
    responsavel: 'Lucas Santos',
    cidade: 'Recife, PE',
  },
  {
    id: '6',
    nome: 'aeea',
    categoria: 'Empresa Privada',
    logoText: 'AEEA',
    logoBg: '#6366F1',
    tags: ['Inovação', 'Consultoria'],
    descricao:
      'Consultoria estratégica em transformação ágil e inteligência de negócios para médias e grandes corporações.',
    site: 'https://aeea.com.br',
    email: 'contato@aeea.com.br',
    responsavel: 'Roberto Albuquerque',
    cidade: 'Recife, PE',
  },
  {
    id: '7',
    nome: 'Ceci Designer 2025',
    categoria: 'Design & Economia Criativa',
    logoText: 'CECI',
    logoBg: '#D97706',
    tags: ['Design', 'Criatividade', 'Parceira'],
    descricao:
      'Estúdio de design de produtos digitais, branding e experiência do usuário (UX/UI) com foco em impacto social e acessibilidade.',
    site: 'https://cecidesign.com.br',
    email: 'ceci@design.com',
    responsavel: 'Fernanda Costa',
    cidade: 'Recife, PE',
  },
  {
    id: '8',
    nome: 'Ministério das Relações Exteriores',
    categoria: 'Órgão Governamental',
    logoText: 'BRASIL',
    logoBg: '#15803D',
    tags: ['Governo', 'Internacional', 'Parceira'],
    descricao:
      'Representação oficial para promoção de parcerias internacionais de ciência, tecnologia e inovação e diplomacia corporativa.',
    site: 'https://gov.br/mre',
    email: 'diplomacia@mre.gov.br',
    responsavel: 'Gabriel Mendes',
    cidade: 'Brasília, DF',
  },
  {
    id: '9',
    nome: 'ABSD',
    categoria: 'Associação',
    logoText: 'grite',
    logoBg: '#4C1D95',
    tags: ['Associação', 'Software', 'destaque'],
    descricao:
      'Associação Brasileira de Soluções Digitais, reunindo empresas de software e prestadores de serviços em tecnologia de Pernambuco.',
    site: 'https://absd.org.br',
    email: 'contato@absd.org.br',
    responsavel: 'Pedro Dhalia',
    cidade: 'Recife, PE',
  },
  {
    id: '10',
    nome: 'Porto Digital',
    categoria: 'Parque Tecnológico',
    logoText: 'PORTO DIGITAL',
    logoBg: '#0284C7',
    tags: ['destaque', 'Parque Tecnológico', 'Ambiente de Inovação'],
    descricao:
      'Um dos maiores parques tecnológicos urbanos do país, com mais de 350 empresas e instituições gerando impacto socioeconômico no Recife.',
    site: 'https://portodigital.org',
    email: 'comunicacao@portodigital.org',
    responsavel: 'Pierre Lucena',
    cidade: 'Recife, PE',
  },
  {
    id: '11',
    nome: 'FACEPE',
    categoria: 'Fomento',
    logoText: 'FACEPE',
    logoBg: '#B91C1C',
    tags: ['Fomento', 'Pesquisa', 'Parceira'],
    descricao:
      'Fundação de Amparo à Ciência e Tecnologia do Estado de Pernambuco, financiando pesquisas científicas e bolsas de inovação tecnológica.',
    site: 'https://www.facepe.br',
    email: 'atendimento@facepe.br',
    responsavel: 'Maria do Socorro',
    cidade: 'Recife, PE',
  },
  {
    id: '12',
    nome: 'CESAR',
    categoria: 'Instituto de Pesquisa',
    logoText: 'CESAR',
    logoBg: '#F97316',
    tags: ['destaque', 'IoT', 'EduTech'],
    descricao:
      'Centro de Estudos e Sistemas Avançados do Recife, referência nacional em inovação aberta, educação executiva e engenharia de software.',
    site: 'https://www.cesar.org.br',
    email: 'contato@cesar.org.br',
    responsavel: 'Eduardo Peixoto',
    cidade: 'Recife, PE',
  },
]

const CATEGORIAS_OPTIONS = [
  'Todas as Categorias',
  'Empresa Pública',
  'Empresa Privada',
  'NIT / Academia',
  'Órgão Governamental',
  'Parque Tecnológico',
  'Associação',
  'Design & Economia Criativa',
  'Fomento',
  'Startup',
]

export default function MeuEcoOrganizacoesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todas as Categorias')
  const [selectedOrg, setSelectedOrg] = useState<Organizacao | null>(null)

  const filteredOrgs = useMemo(() => {
    return MOCK_ORGANIZACOES.filter(org => {
      const matchesCategory =
        selectedCategory === 'Todas as Categorias' || org.categoria === selectedCategory

      const query = searchTerm.toLowerCase().trim()
      const matchesSearch =
        !query ||
        org.nome.toLowerCase().includes(query) ||
        org.categoria.toLowerCase().includes(query) ||
        org.descricao.toLowerCase().includes(query) ||
        org.tags.some(t => t.toLowerCase().includes(query))

      return matchesCategory && matchesSearch
    })
  }, [searchTerm, selectedCategory])

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#EEF2F5',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        color: '#1A202C',
      }}
    >
      <Header />

      {/* ── Main Layout Body ── */}
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar activeItem="meus-programas" />

        {/* ── Main Content Area ── */}
        <main style={{ flex: 1, padding: '24px 36px 64px', maxWidth: '1280px' }}>
          {/* ── Top Hero Banner ── */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 25px -5px rgba(0, 59, 109, 0.25)',
              marginBottom: '24px',
              minHeight: '190px',
              backgroundColor: '#003B6D',
            }}
          >
            <img
              src={bannerOrganizacoes}
              alt="Organizações Banner"
              style={{
                width: '100%',
                height: '100%',
                maxHeight: '220px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          {/* Subtitle description paragraph */}
          <p
            style={{
              fontSize: '15px',
              lineHeight: 1.6,
              color: '#334155',
              marginBottom: '28px',
              fontWeight: 500,
            }}
          >
            Explore as organizações parceiras de Recife: de empresas públicas a privadas, dedicadas à inovação e
            transformação digital! Conecte-se com startups e líderes criativos, participe de iniciativas disruptivas e
            impulsione sua empresa para novos patamares de sucesso.
          </p>

          {/* ── Search & Filter Controls Bar ── */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '16px 20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '28px',
              border: '1px solid #E2E8F0',
            }}
          >
            {/* Search Bar Input */}
            <div style={{ flex: '1 1 320px', display: 'flex', alignItems: 'center', position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  left: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  pointerEvents: 'none',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Digite uma busca e pressione enter"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 42px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#1E293B',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.03)',
                }}
                onFocus={e => (e.target.style.borderColor = '#00a8b5')}
                onBlur={e => (e.target.style.borderColor = '#E2E8F0')}
              />
            </div>

            {/* Category Filter Select */}
            <div style={{ flex: '0 1 280px', position: 'relative' }}>
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 36px 12px 16px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#475569',
                  outline: 'none',
                  cursor: 'pointer',
                  appearance: 'none',
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                }}
              >
                <option value="Todas as Categorias">Selecione uma Categoria</option>
                {CATEGORIAS_OPTIONS.filter(c => c !== 'Todas as Categorias').map(cat => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <div
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                }}
              >
                <svg width="14" height="14" fill="none" stroke="#94A3B8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Action button: Cadastrar Organização */}
            <Link
              to="/legacy/inscricao-organizacao"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#00a8b5',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '14px',
                padding: '11px 20px',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 6px rgba(0, 168, 181, 0.25)',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.backgroundColor = '#008b96')}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.backgroundColor = '#00a8b5')}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 4v16m8-8H4" />
              </svg>
              Cadastrar Organização
            </Link>
          </div>

          {/* ── Organization Cards Grid ── */}
          {filteredOrgs.length === 0 ? (
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '48px 24px',
                textAlign: 'center',
                border: '1px dashed #CBD5E1',
              }}
            >
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>🔍</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                Nenhuma organização encontrada
              </h3>
              <p style={{ color: '#64748B', fontSize: '14px', marginBottom: '16px' }}>
                Tente ajustar os termos da busca ou selecionar outra categoria.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('Todas as Categorias')
                }}
                style={{
                  backgroundColor: '#E0F2FE',
                  color: '#0369A1',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer',
                }}
              >
                Limpar Filtros
              </button>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: '20px',
              }}
            >
              {filteredOrgs.map(org => (
                <div
                  key={org.id}
                  onClick={() => setSelectedOrg(org)}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
                    padding: '24px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 12px 20px -5px rgba(0, 0, 0, 0.1)'
                    e.currentTarget.style.borderColor = '#00a8b5'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.04)'
                    e.currentTarget.style.borderColor = '#E2E8F0'
                  }}
                >
                  {/* Organization Logo Area */}
                  <div
                    style={{
                      width: '100%',
                      height: '110px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                      borderRadius: '8px',
                      backgroundColor: '#F8FAFC',
                      overflow: 'hidden',
                      padding: '12px',
                    }}
                  >
                    {org.logo ? (
                      <img
                        src={org.logo}
                        alt={org.nome}
                        style={{ maxHeight: '80px', maxWidth: '100%', objectFit: 'contain' }}
                      />
                    ) : (
                      <div
                        style={{
                          backgroundColor: org.logoBg || '#00a8b5',
                          color: '#ffffff',
                          width: '100%',
                          height: '100%',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 800,
                          fontSize: '18px',
                          textAlign: 'center',
                          padding: '8px',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {org.logoText || org.nome}
                      </div>
                    )}
                  </div>

                  {/* Organization Name */}
                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: 700,
                      color: '#1E293B',
                      marginBottom: '12px',
                      lineHeight: 1.3,
                    }}
                  >
                    {org.nome}
                  </h3>

                  {/* Tags Header */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginBottom: '8px',
                      color: '#00a8b5',
                      fontSize: '13px',
                      fontWeight: 600,
                    }}
                  >
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    </svg>
                    <span>Tags</span>
                  </div>

                  {/* Tag Badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
                    {org.tags.map(tag => (
                      <span
                        key={tag}
                        style={{
                          backgroundColor:
                            tag === 'destaque'
                              ? '#00a8b5'
                              : tag === 'eita'
                              ? '#00a8b5'
                              : tag === 'NIT'
                              ? '#00a8b5'
                              : '#00a8b5',
                          color: '#ffffff',
                          fontSize: '11px',
                          fontWeight: 600,
                          padding: '3px 10px',
                          borderRadius: '12px',
                          display: 'inline-block',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* ── Organization Detail Modal ── */}
      {selectedOrg && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: '20px',
          }}
          onClick={() => setSelectedOrg(null)}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              width: '100%',
              maxWidth: '560px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              overflow: 'hidden',
              animation: 'modalIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                backgroundColor: selectedOrg.logoBg || '#003B6D',
                padding: '28px 24px',
                color: '#ffffff',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <button
                onClick={() => setSelectedOrg(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  color: '#ffffff',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                }}
              >
                ✕
              </button>

              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '12px',
                  backgroundColor: '#ffffff',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '14px',
                  color: '#1E293B',
                  flexShrink: 0,
                }}
              >
                {selectedOrg.logo ? (
                  <img src={selectedOrg.logo} alt={selectedOrg.nome} style={{ maxHeight: '100%', maxWidth: '100%' }} />
                ) : (
                  selectedOrg.logoText || selectedOrg.nome
                )}
              </div>

              <div>
                <span
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    fontSize: '11px',
                    fontWeight: 600,
                    padding: '2px 8px',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {selectedOrg.categoria}
                </span>
                <h2 style={{ fontSize: '22px', fontWeight: 800, marginTop: '4px', margin: 0 }}>{selectedOrg.nome}</h2>
              </div>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px' }}>
              <p style={{ color: '#475569', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                {selectedOrg.descricao}
              </p>

              {/* Meta Info Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                  backgroundColor: '#F8FAFC',
                  padding: '16px',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  fontSize: '13px',
                }}
              >
                <div>
                  <span style={{ color: '#94A3B8', display: 'block', fontSize: '11px', fontWeight: 600 }}>
                    RESPONSÁVEL
                  </span>
                  <span style={{ color: '#1E293B', fontWeight: 600 }}>{selectedOrg.responsavel || 'N/I'}</span>
                </div>
                <div>
                  <span style={{ color: '#94A3B8', display: 'block', fontSize: '11px', fontWeight: 600 }}>
                    LOCALIZAÇÃO
                  </span>
                  <span style={{ color: '#1E293B', fontWeight: 600 }}>{selectedOrg.cidade || 'Recife, PE'}</span>
                </div>
              </div>

              {/* Tags List */}
              <div style={{ marginBottom: '24px' }}>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#64748B',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  TAGS DO ECOSSISTEMA
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {selectedOrg.tags.map(t => (
                    <span
                      key={t}
                      style={{
                        backgroundColor: '#E0F2FE',
                        color: '#0369A1',
                        fontSize: '12px',
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: '12px',
                      }}
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                {selectedOrg.site && (
                  <a
                    href={selectedOrg.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      backgroundColor: '#00a8b5',
                      color: '#ffffff',
                      padding: '10px 18px',
                      borderRadius: '8px',
                      fontWeight: 600,
                      fontSize: '14px',
                      textDecoration: 'none',
                    }}
                  >
                    Visitar Website ↗
                  </a>
                )}
                <button
                  onClick={() => setSelectedOrg(null)}
                  style={{
                    backgroundColor: '#F1F5F9',
                    color: '#475569',
                    border: 'none',
                    padding: '10px 18px',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '14px',
                    cursor: 'pointer',
                  }}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Floating Coreto Icon Widget ── */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 40,
          border: '1px solid #E2E8F0',
        }}
        title="Assistente Coreto"
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px', width: '22px', height: '22px' }}>
          <div style={{ backgroundColor: '#E05C5C', borderRadius: '50%' }} />
          <div style={{ backgroundColor: '#00A8B5', borderRadius: '50%' }} />
          <div style={{ backgroundColor: '#9333EA', borderRadius: '50%' }} />
          <div style={{ backgroundColor: '#F59E0B', borderRadius: '50%' }} />
        </div>
      </div>
    </div>
  )
}

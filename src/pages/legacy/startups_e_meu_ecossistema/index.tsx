import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import bannerStartups from '../../../assets/banner-startups.png'

interface Startup {
  id: string
  nome: string
  categoria: string
  logoText?: string
  logoBg?: string
  logoType?: 'custom' | 'text' | 'coreto'
  trl?: string
  tipoBadge?: string
  tags: string[]
  descricao: string
  site?: string
  email?: string
  responsavel?: string
  cidade?: string
}

const MOCK_STARTUPS: Startup[] = [
  {
    id: '1',
    nome: 'B&G',
    categoria: 'EdTech & Talentos',
    logoText: 'beg',
    logoBg: '#1e1b4b',
    logoType: 'text',
    trl: 'TRL 7 - Sistema operacional demonstrado em ambiente operacional',
    tipoBadge: 'Startup',
    tags: ['EdTech', 'Desenvolvimento', 'Capacitação', 'Inovação'],
    descricao:
      'Plataforma de recrutamento inteligente e formação de novos talentos para o ecossistema de tecnologia e inovação de Pernambuco.',
    site: 'https://beg.recife.pe.br',
    email: 'contato@beg.com.br',
    responsavel: 'Fernanda Lima',
    cidade: 'Recife, PE',
  },
  {
    id: '2',
    nome: 'MVPEI',
    categoria: 'Aceleração & Ideação',
    logoText: 'MVPEI',
    logoBg: '#ffffff',
    logoType: 'text',
    trl: 'TRL 6 - Prototipagem em ambiente relevante',
    tipoBadge: 'Startup',
    tags: ['Ideação', 'Modelagem de Negócios', 'MVP', 'Aceleração'],
    descricao:
      'Hub de prototipagem rápida e consultoria técnica para transformar ideias inovadoras em modelos de negócio validados e escaláveis.',
    site: 'https://mvpei.com.br',
    email: 'atendimento@mvpei.com.br',
    responsavel: 'Lucas Gabriel',
    cidade: 'Recife, PE',
  },
  {
    id: '3',
    nome: 'Saúde Auditiva',
    categoria: 'HealthTech',
    logoType: 'coreto',
    trl: 'TRL 8 - Sistema real completo e qualificado',
    tipoBadge: 'Startup',
    tags: ['HealthTech', 'Acessibilidade', 'Dispositivos Médicos', 'IA'],
    descricao:
      'Solução em teleaudiologia e diagnóstico auditivo assistido por inteligência artificial para clínicas e unidades públicas de saúde.',
    site: 'https://saudeauditiva.med.br',
    email: 'contato@saudeauditiva.med.br',
    responsavel: 'Dra. Camilla Ribeiro',
    cidade: 'Recife, PE',
  },
  {
    id: '4',
    nome: 'APLICAÇÃO DA CURVA ABC NA GESTÃO DE...',
    categoria: 'FinTech & Gestão',
    logoType: 'coreto',
    trl: 'TRL 5 - Validação de componentes em ambiente relevante',
    tipoBadge: 'Empresa Júnior',
    tags: ['FinTech', 'Gestão Financeira', 'Empresa Júnior', 'Logística'],
    descricao:
      'Ferramenta de otimização de controle de estoque e análise de curva ABC voltada para micro e pequenas empresas do comércio local.',
    site: 'https://curvaabc.com.br',
    email: 'projeto@curvaabc.org',
    responsavel: 'Matheus Albuquerque',
    cidade: 'Recife, PE',
  },
  {
    id: '5',
    nome: 'START: Formação e desenvolvimento de líderes com foco...',
    categoria: 'EdTech & Liderança',
    logoType: 'coreto',
    trl: 'TRL 7 - Sistema demonstrado em ambiente operacional',
    tipoBadge: 'Startup',
    tags: ['Liderança', 'Treinamento', 'Educação Executiva', 'Mentoria'],
    descricao:
      'Programa de desenvolvimento de lideranças em tecnologia e inovação com acompanhamento prático, mentoria de executivos e metodologias ágeis.',
    site: 'https://startlideres.com.br',
    email: 'contato@startlideres.com.br',
    responsavel: 'Juliana Torres',
    cidade: 'Recife, PE',
  },
  {
    id: '6',
    nome: 'somo a nova era 2024',
    categoria: 'GovTech',
    logoType: 'coreto',
    trl: 'TRL 4 - Validação de componentes em laboratório',
    tipoBadge: 'Startup',
    tags: ['GovTech', 'Cidades Inteligentes', 'Participação Cidadã'],
    descricao:
      'Plataforma de engajamento comunitário e consulta pública digital para modernização dos serviços urbanos no Recife.',
    site: 'https://novaera2024.recife.br',
    email: 'contato@novaera2024.com',
    responsavel: 'Rodrigo Vasconcelos',
    cidade: 'Recife, PE',
  },
  {
    id: '7',
    nome: 'nome generico',
    categoria: 'SaaS & B2B',
    logoType: 'coreto',
    trl: 'TRL 6 - Modelo demonstrado em ambiente relevante',
    tipoBadge: 'Startup',
    tags: ['SaaS', 'B2B', 'Automação de Processos', 'Analytics'],
    descricao:
      'Plataforma SaaS para automação de rotinas administrativas e integração de fluxo de dados empresariais.',
    site: 'https://nomegenerico.io',
    email: 'suporte@nomegenerico.io',
    responsavel: 'Carlos Eduardo',
    cidade: 'Recife, PE',
  },
  {
    id: '8',
    nome: 'nome healthness',
    categoria: 'HealthTech',
    logoType: 'coreto',
    trl: 'TRL 7 - Sistema operacional demonstrado',
    tipoBadge: 'Startup',
    tags: ['HealthTech', 'Bem-Estar', 'Saúde Preventiva', 'Telemedicina'],
    descricao:
      'Ecossistema digital de saúde corporativa focado em monitoramento de bem-estar, prevenção de burnout e hábitos saudáveis.',
    site: 'https://healthness.com.br',
    email: 'contato@healthness.com.br',
    responsavel: 'Mariana Duarte',
    cidade: 'Recife, PE',
  },
  {
    id: '9',
    nome: 'nome de teste',
    categoria: 'DeepTech & IA',
    logoType: 'coreto',
    trl: 'TRL 3 - Prova de conceito analítica e experimental',
    tipoBadge: 'Exploração Científica',
    tags: ['DeepTech', 'IA', 'Análise Preditiva', 'Pesquisa Aplicada'],
    descricao:
      'Pesquisa e desenvolvimento em algoritmos de aprendizado de máquina para modelagem preditiva em mobilidade urbana.',
    site: 'https://nometeste.ufpe.br',
    email: 'pesquisa@nometeste.br',
    responsavel: 'Prof. André Martins',
    cidade: 'Recife, PE',
  },
  {
    id: '10',
    nome: 'CORETO',
    categoria: 'Plataforma de Inovação',
    logoType: 'coreto',
    trl: 'TRL 9 - Sistema com aplicação comercial comprovada',
    tipoBadge: 'Plataforma Pública',
    tags: ['Ecossistema', 'Conexão', 'Inovação Aberta', 'GovTech'],
    descricao:
      'Plataforma de revolução, conexão e facilitação do ecossistema local de inovação, unindo startups, empresas, governo e academia.',
    site: 'https://coreto.recife.pe.gov.br',
    email: 'coreto@recife.pe.gov.br',
    responsavel: 'Equipe CORETO SECTI',
    cidade: 'Recife, PE',
  },
  {
    id: '11',
    nome: 'VDSA',
    categoria: 'CleanTech & Energia',
    logoType: 'coreto',
    trl: 'TRL 6 - Prototipagem em ambiente relevante',
    tipoBadge: 'Startup',
    tags: ['CleanTech', 'Sustentabilidade', 'Eficiência Energética', 'ESG'],
    descricao:
      'Soluções de monitoramento de pegada de carbono e otimização do consumo de energia elétrica para edifícios e fábricas.',
    site: 'https://vdsa.com.br',
    email: 'contato@vdsa.com.br',
    responsavel: 'Vinicius Dias',
    cidade: 'Recife, PE',
  },
  {
    id: '12',
    nome: 'fdas',
    categoria: 'Exploração Científica',
    logoType: 'coreto',
    trl: 'TRL 2 - Formulação do conceito tecnológico',
    tipoBadge: 'Startup',
    tags: ['Startup', 'Exploração científica (TRL 1-3)', 'Biotecnologia'],
    descricao:
      'Iniciativa de pesquisa biotecnológica voltada ao desenvolvimento de novos compostos biodegradáveis.',
    site: 'https://fdas-biotech.org',
    email: 'info@fdas-biotech.org',
    responsavel: 'Dra. Flávia Andrade',
    cidade: 'Recife, PE',
  },
  {
    id: '13',
    nome: 'ASD',
    categoria: 'Empresa Júnior',
    logoType: 'coreto',
    trl: 'TRL 7 - Protótipo validado em ambiente real',
    tipoBadge: 'Empresa Júnior',
    tags: ['Empresa Júnior', 'Protótipo validado em ambiente real', 'Desenvolvimento Web'],
    descricao:
      'Empresa júnior acadêmica especializada no desenvolvimento de sistemas web sob medida e projetos de extensão comunitária.',
    site: 'https://asd-ej.ufpe.br',
    email: 'contato@asd-ej.com',
    responsavel: 'Arthur Silva',
    cidade: 'Recife, PE',
  },
]

const CATEGORIAS_OPTIONS = [
  'Todas as Categorias',
  'EdTech & Talentos',
  'Aceleração & Ideação',
  'HealthTech',
  'FinTech & Gestão',
  'GovTech',
  'SaaS & B2B',
  'DeepTech & IA',
  'CleanTech & Energia',
  'Exploração Científica',
  'Empresa Júnior',
  'Plataforma de Inovação',
]

import { useEffect } from 'react'
import { startupsService, type StartupItem } from '../../../services/startupsService'

export default function StartupsEMeuEcossistemaPage() {
  const [startupsList, setStartupsList] = useState<Startup[]>(MOCK_STARTUPS)
  const [isLoading, setIsLoading] = useState(false)
  const [isLiveFromDb, setIsLiveFromDb] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todas as Categorias')
  const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null)

  useEffect(() => {
    let isMounted = true
    setIsLoading(true)
    startupsService.getAll()
      .then((data: StartupItem[]) => {
        if (!isMounted || !data || data.length === 0) return
        const mapped: Startup[] = data.map(item => ({
          id: item.id,
          nome: item.name,
          categoria: item.category,
          logoText: item.logoText,
          logoBg: item.logoBg,
          logoType: item.logoType || 'coreto',
          trl: item.trl,
          tipoBadge: item.tipoBadge || 'Startup',
          tags: item.tags || [],
          descricao: item.descricao || '',
          site: item.site,
          email: item.email,
          responsavel: item.responsavel,
          cidade: item.cidade,
        }))
        setStartupsList(mapped)
        setIsLiveFromDb(true)
      })
      .catch(() => {
        // Fallback para MOCK_STARTUPS se o backend ainda estiver iniciando
      })
      .finally(() => {
        if (isMounted) setIsLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  const filteredStartups = useMemo(() => {
    return startupsList.filter(item => {
      const matchesCategory =
        selectedCategory === 'Todas as Categorias' || item.categoria === selectedCategory

      const query = searchTerm.toLowerCase().trim()
      const matchesSearch =
        !query ||
        item.nome.toLowerCase().includes(query) ||
        item.categoria.toLowerCase().includes(query) ||
        item.descricao.toLowerCase().includes(query) ||
        item.tags.some(t => t.toLowerCase().includes(query)) ||
        (item.tipoBadge && item.tipoBadge.toLowerCase().includes(query))

      return matchesCategory && matchesSearch
    })
  }, [startupsList, searchTerm, selectedCategory])

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
              marginBottom: '20px',
              backgroundColor: '#003B6D',
            }}
          >
            <img
              src={bannerStartups}
              alt="Startups Banner"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '230px',
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
              marginBottom: '24px',
              fontWeight: 500,
            }}
          >
            Descubra as startups do Recife e veja como elas estão reinventando o mercado com soluções inovadoras.
            Conecte-se com líderes criativos, participe de iniciativas disruptivas e leve seu empreendimento a novos patamares de sucesso!
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

            {/* Action button: Cadastrar Startup */}
            <Link
              to="/legacy/inscricao-startup"
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
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#008b96')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#00a8b5')}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 4v16m8-8H4" />
              </svg>
              Cadastrar Startup
            </Link>
          </div>

          {/* ── Startups Cards Grid ── */}
          {filteredStartups.length === 0 ? (
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '48px 24px',
                textAlign: 'center',
                border: '1px dashed #CBD5E1',
              }}
            >
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>🚀</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                Nenhuma startup encontrada
              </h3>
              <p style={{ color: '#64748B', fontSize: '14px', marginBottom: '16px' }}>
                Tente ajustar o termo de busca ou selecionar outra categoria.
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
                gridTemplateColumns: 'repeat(auto-fill, minmax(215px, 1fr))',
                gap: '20px',
              }}
            >
              {filteredStartups.map(startup => (
                <div
                  key={startup.id}
                  onClick={() => setSelectedStartup(startup)}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
                    padding: '20px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    minHeight: '260px',
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
                  {/* Startup Logo Area */}
                  <div
                    style={{
                      width: '100%',
                      height: '100px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '14px',
                      borderRadius: '8px',
                      backgroundColor: '#ffffff',
                      border: '1px solid #F1F5F9',
                      overflow: 'hidden',
                      padding: '10px',
                    }}
                  >
                    {startup.logoText === 'beg' ? (
                      <div
                        style={{
                          backgroundColor: '#1e1b4b',
                          width: '100%',
                          height: '100%',
                          borderRadius: '6px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '6px',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ec4899' }} />
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#eab308' }} />
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3b82f6' }} />
                        </div>
                        <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '15px', letterSpacing: '0.05em' }}>
                          beg
                        </span>
                        <span style={{ color: '#94a3b8', fontSize: '8px', letterSpacing: '0.1em' }}>RE & GROW</span>
                      </div>
                    ) : startup.logoText === 'MVPEI' ? (
                      <div
                        style={{
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <div style={{ fontSize: '20px', fontWeight: 900, color: '#94a3b8', letterSpacing: '0.05em' }}>
                          MVPEI
                        </div>
                        <div style={{ fontSize: '9px', color: '#cbd5e1', fontWeight: 600 }}>TIRE DO PAPEL</div>
                      </div>
                    ) : (
                      /* Iconic Blue 'C' Logo from Coreto */
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '64px',
                          height: '64px',
                        }}
                      >
                        <svg viewBox="0 0 100 100" width="56" height="56" fill="none">
                          <path
                            d="M75 25 C60 10, 35 10, 20 25 C5 40, 5 65, 20 80 C35 95, 60 95, 75 80 C82 73, 85 64, 85 55 L68 55 C68 60, 65 65, 60 70 C50 80, 32 80, 22 70 C12 60, 12 42, 22 32 C32 22, 50 22, 60 32 C65 37, 68 42, 68 47 L85 47 C85 38, 82 29, 75 25 Z"
                            fill="#0052CC"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <div style={{ marginBottom: '12px' }}>
                    <h3
                      style={{
                        fontSize: '15px',
                        fontWeight: 700,
                        color: '#1E293B',
                        margin: 0,
                        lineHeight: 1.35,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        minHeight: '40px',
                      }}
                      title={startup.nome}
                    >
                      {startup.nome}
                    </h3>
                  </div>

                  {/* Assuntos relacionados / Tags badges area */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <span style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 500 }}>
                      Assuntos relacionados
                    </span>

                    {/* Specific Pill Badges if present */}
                    {startup.tags && startup.tags.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '2px' }}>
                        {startup.tipoBadge && (
                          <span
                            style={{
                              backgroundColor: '#00a8b5',
                              color: '#ffffff',
                              fontSize: '11px',
                              fontWeight: 600,
                              padding: '3px 8px',
                              borderRadius: '12px',
                              display: 'inline-block',
                              whiteSpace: 'nowrap',
                              maxWidth: '100%',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {startup.tipoBadge}
                          </span>
                        )}
                        {startup.tags.slice(0, 2).map((t, idx) => (
                          <span
                            key={idx}
                            style={{
                              backgroundColor: '#E0F2FE',
                              color: '#0369A1',
                              fontSize: '11px',
                              fontWeight: 500,
                              padding: '3px 8px',
                              borderRadius: '12px',
                              display: 'inline-block',
                              whiteSpace: 'nowrap',
                              maxWidth: '100%',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* ── Modal de Detalhes da Startup ── */}
      {selectedStartup && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 50,
            padding: '20px',
          }}
          onClick={() => setSelectedStartup(null)}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              width: '100%',
              maxWidth: '560px',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              padding: '28px',
              position: 'relative',
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedStartup(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#F1F5F9',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#64748B',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#E2E8F0')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#F1F5F9')}
            >
              ✕
            </button>

            {/* Header info inside modal */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#F8FAFC',
                  flexShrink: 0,
                }}
              >
                {selectedStartup.logoText === 'beg' ? (
                  <div
                    style={{
                      backgroundColor: '#1e1b4b',
                      width: '100%',
                      height: '100%',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontWeight: 800,
                      fontSize: '16px',
                    }}
                  >
                    beg
                  </div>
                ) : (
                  <svg viewBox="0 0 100 100" width="40" height="40" fill="none">
                    <path
                      d="M75 25 C60 10, 35 10, 20 25 C5 40, 5 65, 20 80 C35 95, 60 95, 75 80 C82 73, 85 64, 85 55 L68 55 C68 60, 65 65, 60 70 C50 80, 32 80, 22 70 C12 60, 12 42, 22 32 C32 22, 50 22, 60 32 C65 37, 68 42, 68 47 L85 47 C85 38, 82 29, 75 25 Z"
                      fill="#0052CC"
                    />
                  </svg>
                )}
              </div>

              <div>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#00a8b5',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {selectedStartup.categoria}
                </span>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', margin: '4px 0 2px' }}>
                  {selectedStartup.nome}
                </h2>
                <span style={{ fontSize: '13px', color: '#64748B' }}>{selectedStartup.cidade || 'Recife, PE'}</span>
              </div>
            </div>

            {/* Badges list */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
              {selectedStartup.tipoBadge && (
                <span
                  style={{
                    backgroundColor: '#00a8b5',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: '16px',
                  }}
                >
                  {selectedStartup.tipoBadge}
                </span>
              )}
              {selectedStartup.tags.map((t, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: '#F1F5F9',
                    color: '#334155',
                    fontSize: '12px',
                    fontWeight: 500,
                    padding: '4px 10px',
                    borderRadius: '16px',
                  }}
                >
                  #{t}
                </span>
              ))}
            </div>

            {/* TRL Level if present */}
            {selectedStartup.trl && (
              <div
                style={{
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '10px',
                  padding: '12px 16px',
                  marginBottom: '20px',
                }}
              >
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>
                  Maturidade Tecnológica
                </span>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#1E293B', marginTop: '2px' }}>
                  {selectedStartup.trl}
                </div>
              </div>
            )}

            {/* Description */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>
                Sobre a Solução
              </h4>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#475569', margin: 0 }}>
                {selectedStartup.descricao}
              </p>
            </div>

            {/* Contact details */}
            <div
              style={{
                borderTop: '1px solid #E2E8F0',
                paddingTop: '16px',
                marginBottom: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                fontSize: '13px',
                color: '#475569',
              }}
            >
              {selectedStartup.responsavel && (
                <div>
                  <strong>Responsável:</strong> {selectedStartup.responsavel}
                </div>
              )}
              {selectedStartup.email && (
                <div>
                  <strong>E-mail:</strong>{' '}
                  <a href={`mailto:${selectedStartup.email}`} style={{ color: '#00a8b5', textDecoration: 'none' }}>
                    {selectedStartup.email}
                  </a>
                </div>
              )}
              {selectedStartup.site && (
                <div>
                  <strong>Website:</strong>{' '}
                  <a
                    href={selectedStartup.site}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#00a8b5', textDecoration: 'none' }}
                  >
                    {selectedStartup.site}
                  </a>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => {
                  alert(`Solicitação de conexão enviada para ${selectedStartup.nome}!`)
                  setSelectedStartup(null)
                }}
                style={{
                  flex: 1,
                  backgroundColor: '#00a8b5',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '14px',
                  padding: '12px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 2px 6px rgba(0, 168, 181, 0.3)',
                }}
              >
                Conectar com a Startup
              </button>
              <button
                onClick={() => setSelectedStartup(null)}
                style={{
                  backgroundColor: '#F1F5F9',
                  color: '#475569',
                  fontWeight: 600,
                  fontSize: '14px',
                  padding: '12px 20px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

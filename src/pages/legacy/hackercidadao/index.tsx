import { useState, useMemo } from 'react'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'

interface ChallengeItem {
  id: string
  number: number
  title: string
  category: string
  description: string
  problem: string
  impact: string
  target: string
}

interface ScheduleItem {
  id: string
  date: string
  time: string
  title: string
  description: string
  linkUrl?: string
}

interface LocationItem {
  id: string
  date: string
  time: string
  placeName: string
  address: string
  mapUrl: string
}

interface Person {
  id: string
  name: string
  role: string
  organization: string
  initials: string
  bio?: string
}

const CHALLENGES: ChallengeItem[] = [
  {
    id: 'ch-1',
    number: 1,
    title: 'Mobilidade Urbana & Acessibilidade Inteligente',
    category: 'Cidades Inteligentes',
    description: 'Desenvolvimento de soluções tecnológicas para otimização do fluxo no transporte público e ampliação da acessibilidade urbana no Bairro do Recife.',
    problem: 'Gargalos no tempo de espera do transporte coletivo e dificuldades de navegação para cidadãos com deficiência visual ou motora.',
    impact: 'Redução do tempo de viagem e autonomia total de locomoção em vias públicas centrais.',
    target: 'Cidadãos recifenses, usuários de transporte público e pessoas com deficiência.',
  },
  {
    id: 'ch-2',
    number: 2,
    title: 'Gestão Sustentável de Resíduos Sólidos & Economia Circular',
    category: 'Meio Ambiente & ESG',
    description: 'Criação de ferramentas digitais e gamificação para engajamento comunitário na coleta seletiva e rastreamento da reciclagem urbana.',
    problem: 'Baixa adesão residencial à separação de resíduos e desarticulação das cooperativas de catadores locais.',
    impact: 'Aumento de 40% na coleta seletiva nos bairros atendidos e geração de renda para cooperativas.',
    target: 'Moradores, pequenos comerciantes e cooperativas de reciclagem.',
  },
  {
    id: 'ch-3',
    number: 3,
    title: 'Saúde Preventiva & Acolhimento Humanizado nas USFs',
    category: 'Saúde Pública & GovTech',
    description: 'Plataforma inteligente para pré-triagem, agendamento preventivo e redução do absenteísmo de consultas na atenção primária de saúde.',
    problem: 'Filas presenciais nas Unidades de Saúde da Família e falta de canal ágil de comunicação com os pacientes.',
    impact: 'Diminuição de 50% nas filas matutinas e acompanhamento contínuo de pacientes crônicos.',
    target: 'Equipes de saúde da família e usuários da rede pública municipal.',
  },
]

const SCHEDULE: ScheduleItem[] = [
  {
    id: 'sch-1',
    date: '11/08/2026',
    time: '13:58',
    title: 'Lançamento Oficial do Edital & Abertura das Inscrições',
    description: 'Publicação das diretrizes e início das submissões de equipes no portal CORETO.',
  },
  {
    id: 'sch-2',
    date: '25/08/2026',
    time: '18:00',
    title: 'Webinar de Imersão e Apresentação dos Desafios',
    description: 'Sessão ao vivo com gestores públicos da Prefeitura do Recife para tirar dúvidas dos participantes.',
  },
  {
    id: 'sch-3',
    date: '10/09/2026',
    time: '23:59',
    title: 'Encerramento das Inscrições e Submissão de Ideias',
    description: 'Prazo final para cadastro de equipes e envio das propostas preliminares.',
  },
  {
    id: 'sch-4',
    date: '18/09/2026',
    time: '08:00',
    title: 'Abertura da Maratona Hackathon 13.0 (Check-in & Mentoria)',
    description: 'Início da maratona presencial de 48 horas de desenvolvimento no Porto Digital.',
  },
  {
    id: 'sch-5',
    date: '20/09/2026',
    time: '17:00',
    title: 'Pitch Final & Cerimônia de Premiação',
    description: 'Apresentação das bancas finais perante o júri e anúncio das equipes vencedoras.',
  },
]

const LOCATIONS: LocationItem[] = [
  {
    id: 'loc-1',
    date: '11/08/2026',
    time: '13:58',
    placeName: 'Auditório E.I.T.A. Recife',
    address: 'Rua do Apolo, 235 - Bairro do Recife, Recife - PE',
    mapUrl: 'https://maps.google.com/?q=Rua+do+Apolo+235+Recife',
  },
  {
    id: 'loc-2',
    date: '18/09/2026',
    time: '08:00',
    placeName: 'Hub de Inovação Porto Digital',
    address: 'Praça Barão de Lucena - Bairro do Recife, Recife - PE',
    mapUrl: 'https://maps.google.com/?q=Praca+Barao+de+Lucena+Recife',
  },
]

const CURATORS: Person[] = [
  {
    id: 'cur-1',
    name: 'Dra. Ana Paula Souza',
    role: 'Diretora de Inovação Aberta',
    organization: 'EMPREL — Prefeitura do Recife',
    initials: 'AS',
    bio: 'Doutora em Ciência da Computação com 15 anos de experiência em projetos de GovTech e cidades inteligentes.',
  },
  {
    id: 'cur-2',
    name: 'Carlos Eduardo Lima',
    role: 'Especialista em Transformação Digital',
    organization: 'ABDI',
    initials: 'CL',
    bio: 'Líder de programas nacionais de apoio ao ecossistema de startups e modernização industrial.',
  },
  {
    id: 'cur-3',
    name: 'Mariana Medeiros',
    role: 'Coordenadora de Impacto Social',
    organization: 'Porto Digital',
    initials: 'MM',
    bio: 'Engenheira de produção com foco em sustentabilidade urbana e economia criativa.',
  },
]

const JURORS: Person[] = [
  {
    id: 'jur-1',
    name: 'Prof. Roberto Alencar',
    role: 'Docente de Sistemas de Informação',
    organization: 'UFPE / CIn',
    initials: 'RA',
  },
  {
    id: 'jur-2',
    name: 'Beatriz Vasconcelos',
    role: 'Gestora de Produtos GovTech',
    organization: 'Secretaria de Ciência e Tecnologia',
    initials: 'BV',
  },
  {
    id: 'jur-3',
    name: 'Fernando Rocha',
    role: 'Sócio Investidor & Mentor de Startups',
    organization: 'Anjos do Brasil',
    initials: 'FR',
  },
]

export default function HackerCidadaoPage() {
  // Navigation active tab state
  const [activeTab, setActiveTab] = useState<
    'inicio' | 'cronograma' | 'desafios' | 'links' | 'regulamento' | 'eita' | 'resultados' | 'contato'
  >('inicio')

  // UI state
  const [, setSelectedChallenge] = useState<ChallengeItem | null>(null)
  const [isRegulationModalOpen, setIsRegulationModalOpen] = useState(false)
  const [isLinksModalOpen, setIsLinksModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  // Contact Form state
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactSubject, setContactSubject] = useState('Dúvida sobre o Edital')
  const [contactMessage, setContactMessage] = useState('')

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3500)
  }

  const handleTabClick = (
    tab: 'inicio' | 'cronograma' | 'desafios' | 'links' | 'regulamento' | 'eita' | 'resultados' | 'contato',
    sectionId?: string
  ) => {
    setActiveTab(tab)
    if (tab === 'regulamento') {
      setIsRegulationModalOpen(true)
      return
    }
    if (tab === 'links') {
      setIsLinksModalOpen(true)
      return
    }
    if (tab === 'contato') {
      setIsContactModalOpen(true)
      return
    }
    if (sectionId) {
      const el = document.getElementById(sectionId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsContactModalOpen(false)
    setContactName('')
    setContactEmail('')
    setContactMessage('')
    showToast('Sua mensagem foi enviada com sucesso à equipe do Hacker Cidadão!')
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#F8FAFC',
        fontFamily: "'DM Sans', 'Inter', 'Segoe UI', sans-serif",
        color: '#1E293B',
      }}
    >
      {/* ── Toast Alert Notification ── */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 9999,
            backgroundColor: '#0F2C59',
            color: '#FFFFFF',
            padding: '14px 20px',
            borderRadius: '8px',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.25)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '14px',
            fontWeight: 500,
            borderLeft: '4px solid #F97316',
          }}
        >
          <span>ℹ️</span>
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            style={{
              background: 'none',
              border: 'none',
              color: '#94A3B8',
              cursor: 'pointer',
              fontSize: '16px',
              marginLeft: '8px',
            }}
          >
            ✕
          </button>
        </div>
      )}

      <Header />

      {/* ── Main Layout Body (Sidebar + Content) ── */}
      <div style={{ display: 'flex', minHeight: 'calc(100vh - 64px)' }}>
        <Sidebar activeItem="painel" />

        {/* Central Content Column */}
        <main style={{ flex: 1, padding: '24px 32px 64px 32px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          {/* ── Top Hero Banner: HACKER CIDADÃO 13.0 ── */}
          <div
            style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #021226 0%, #06284B 50%, #03172E 100%)',
              padding: '40px 32px',
              color: '#FFFFFF',
              boxShadow: '0 20px 25px -5px rgba(3, 23, 46, 0.3), 0 10px 10px -5px rgba(3, 23, 46, 0.2)',
              marginBottom: '20px',
            }}
          >
            {/* Background Circuit Grid Pattern (SVG overlay) */}
            <svg
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0.25,
                pointerEvents: 'none',
              }}
            >
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 10 10 H 90 V 90 H 10 Z" fill="none" stroke="#00F0FF" strokeWidth="0.5" />
                <circle cx="10" cy="10" r="3" fill="#00F0FF" />
                <circle cx="90" cy="90" r="3" fill="#F97316" />
                <path d="M 10 50 Q 50 10 90 50" fill="none" stroke="#00F0FF" strokeWidth="0.5" strokeDasharray="4" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#circuit)" />
            </svg>

            {/* Floating Cyber Icons in background */}
            <div style={{ position: 'absolute', top: '24px', left: '32px', opacity: 0.7, fontSize: '24px' }}>♻️</div>
            <div style={{ position: 'absolute', top: '24px', right: '120px', opacity: 0.7, fontSize: '24px' }}>👁️</div>
            <div style={{ position: 'absolute', bottom: '24px', left: '160px', opacity: 0.7, fontSize: '24px' }}>🍽️</div>
            <div style={{ position: 'absolute', top: '60px', left: '260px', opacity: 0.7, fontSize: '24px' }}>💓</div>

            {/* Main Center Title Visual */}
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
              <div
                style={{
                  fontSize: '28px',
                  fontWeight: 900,
                  color: '#F97316',
                  letterSpacing: '0.05em',
                  marginBottom: '-10px',
                  textShadow: '0 0 10px rgba(249, 115, 22, 0.5)',
                }}
              >
                13.0
              </div>
              <h1
                style={{
                  fontSize: '52px',
                  fontWeight: 900,
                  margin: 0,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  background: 'linear-gradient(180deg, #FFFFFF 0%, #38BDF8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 4px 12px rgba(0, 240, 255, 0.3))',
                }}
              >
                &lt; HACKER CIDADÃO /&gt;
              </h1>
              <p
                style={{
                  color: '#94A3B8',
                  fontSize: '14px',
                  marginTop: '8px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                Maratona de Inovação Aberta & GovTech de Recife
              </p>
            </div>
          </div>

          {/* ── Subnav Tabs Horizontal Bar ── */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              padding: '12px 16px',
              border: '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              flexWrap: 'wrap',
              marginBottom: '32px',
              boxShadow: '0 1px 3px 0 rgba(0,0,0,0.04)',
            }}
          >
            <button
              onClick={() => handleTabClick('inicio', 'sec-inicio')}
              style={navPillStyle(activeTab === 'inicio', true)}
            >
              Início
            </button>
            <button
              onClick={() => handleTabClick('cronograma', 'sec-cronograma')}
              style={navPillStyle(activeTab === 'cronograma', false)}
            >
              cronograma
            </button>
            <button
              onClick={() => handleTabClick('desafios', 'sec-desafios')}
              style={navPillStyle(activeTab === 'desafios', false)}
            >
              desafios
            </button>
            <button
              onClick={() => handleTabClick('links')}
              style={navPillStyle(activeTab === 'links', false)}
            >
              links úteis
            </button>
            <button
              onClick={() => handleTabClick('regulamento')}
              style={navPillStyle(activeTab === 'regulamento', false)}
            >
              regulamento
            </button>
            <button
              onClick={() => handleTabClick('eita', 'sec-eita')}
              style={navPillStyle(activeTab === 'eita', false)}
            >
              e.i.t.a.
            </button>
            <button
              onClick={() => handleTabClick('resultados', 'sec-resultados')}
              style={navPillStyle(activeTab === 'resultados', false)}
            >
              resultados
            </button>
            <button
              onClick={() => handleTabClick('contato')}
              style={navPillStyle(activeTab === 'contato', false)}
            >
              fale conosco
            </button>
          </div>

          {/* ── SECTION 1: INÍCIO (Overview) ── */}
          <section id="sec-inicio" style={{ marginBottom: '48px' }}>
            <div style={{ display: 'inline-block', marginBottom: '16px' }}>
              <span
                style={{
                  backgroundColor: '#0F2C59',
                  color: '#FFFFFF',
                  padding: '6px 16px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: 700,
                }}
              >
                Início
              </span>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                padding: '28px 32px',
                border: '1px solid #E2E8F0',
                display: 'grid',
                gridTemplateColumns: '2fr 1fr',
                gap: '32px',
                alignItems: 'center',
              }}
            >
              <div>
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#334155', margin: 0 }}>
                  O <strong>Hacker Cidadão</strong> é o lugar onde a criatividade, a inovação e a tecnologia se encontram. Como todo hackathon, os nossos desafios também trazem como meta a busca por soluções inteligentes visando efetividade, praticidade, simplicidade e meconomicidade. Sim! Um bom projeto inclui tudo isso e a gente sabe que você pode nos surpreender trazendo ideias e desenvolvendo soluções que certamente irão facilitar a relação das pessoas com a cidade!
                </p>
                <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
                  <button
                    onClick={() => handleTabClick('desafios', 'sec-desafios')}
                    style={{
                      backgroundColor: '#F97316',
                      color: '#FFFFFF',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '6px',
                      fontWeight: 700,
                      fontSize: '14px',
                      cursor: 'pointer',
                    }}
                  >
                    Ver Desafios 🚀
                  </button>
                  <button
                    onClick={() => setIsRegulationModalOpen(true)}
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: '#0F2C59',
                      border: '1px solid #0F2C59',
                      padding: '10px 20px',
                      borderRadius: '6px',
                      fontWeight: 700,
                      fontSize: '14px',
                      cursor: 'pointer',
                    }}
                  >
                    Baixar Edital 📄
                  </button>
                </div>
              </div>

              {/* Graphic Card Visual Right */}
              <div
                style={{
                  backgroundColor: '#03172E',
                  borderRadius: '10px',
                  padding: '24px',
                  textAlign: 'center',
                  color: '#FFFFFF',
                  border: '1px solid #1E3A8A',
                }}
              >
                <div style={{ fontSize: '16px', color: '#F97316', fontWeight: 800 }}>13.0</div>
                <div style={{ fontSize: '24px', fontWeight: 900, color: '#38BDF8', margin: '4px 0' }}>
                  &lt; HACKER /&gt;
                </div>
                <div style={{ fontSize: '11px', color: '#94A3B8', marginTop: '8px' }}>
                  Hackathon Oficial da Cidade do Recife
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 2: CONHEÇA OS DESAFIOS ── */}
          <section id="sec-desafios" style={{ marginBottom: '56px' }}>
            <h2 style={sectionTitleStyle}>CONHEÇA OS DESAFIOS</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {CHALLENGES.map(ch => (
                <div
                  key={ch.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    padding: '24px 28px',
                    border: '1px solid #E2E8F0',
                    transition: 'box-shadow 0.2s, border-color 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div>
                      <span
                        style={{
                          backgroundColor: '#EFF6FF',
                          color: '#2563EB',
                          fontSize: '12px',
                          fontWeight: 700,
                          padding: '3px 10px',
                          borderRadius: '4px',
                        }}
                      >
                        {ch.category}
                      </span>
                      <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F2C59', marginTop: '8px', marginBottom: '4px' }}>
                        Desafio {ch.number}: {ch.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedChallenge(ch)
                        showToast(`Exibindo detalhes do Desafio ${ch.number}`)
                      }}
                      style={{
                        backgroundColor: '#FFF7ED',
                        color: '#EA580C',
                        border: '1px solid #FDBA74',
                        padding: '6px 14px',
                        borderRadius: '6px',
                        fontWeight: 700,
                        fontSize: '13px',
                        cursor: 'pointer',
                      }}
                    >
                      Inscrever-se ➔
                    </button>
                  </div>

                  <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, marginBottom: '16px' }}>
                    {ch.description}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', backgroundColor: '#F8FAFC', padding: '12px 16px', borderRadius: '8px' }}>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>O Problema</div>
                      <div style={{ fontSize: '13px', color: '#1E293B', marginTop: '2px' }}>{ch.problem}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Público Alvo</div>
                      <div style={{ fontSize: '13px', color: '#1E293B', marginTop: '2px' }}>{ch.target}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 3: PRÊMIOS ── */}
          <section id="sec-premios" style={{ marginBottom: '56px' }}>
            <h2 style={sectionTitleStyle}>PRÊMIOS</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              {/* 1st Place */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '24px',
                  border: '2px solid #F59E0B',
                  textAlign: 'center',
                  boxShadow: '0 4px 12px rgba(245, 158, 11, 0.1)',
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '8px' }}>🏆</div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#D97706', textTransform: 'uppercase' }}>1º Lugar</div>
                <div style={{ fontSize: '24px', fontWeight: 900, color: '#0F2C59', margin: '8px 0' }}>R$ 15.000,00</div>
                <p style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                  Mentoria executiva com a EMPREL + Pré-incubação no programa E.I.T.A. Labs Recife.
                </p>
              </div>

              {/* 2nd Place */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '24px',
                  border: '1px solid #CBD5E1',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '8px' }}>🥈</div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>2º Lugar</div>
                <div style={{ fontSize: '24px', fontWeight: 900, color: '#0F2C59', margin: '8px 0' }}>R$ 10.000,00</div>
                <p style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                  Aceleração GovTech no ecossistema Porto Digital + Conexão com Investidores.
                </p>
              </div>

              {/* 3rd Place */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '24px',
                  border: '1px solid #CBD5E1',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '8px' }}>🥉</div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#B45309', textTransform: 'uppercase' }}>3º Lugar</div>
                <div style={{ fontSize: '24px', fontWeight: 900, color: '#0F2C59', margin: '8px 0' }}>R$ 5.000,00</div>
                <p style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                  Créditos de infraestrutura de nuvem + Certificado de Menção Honrosa.
                </p>
              </div>

              {/* People's Choice */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '24px',
                  border: '1px dashed #38BDF8',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '8px' }}>⭐</div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#0284C7', textTransform: 'uppercase' }}>Voto Popular</div>
                <div style={{ fontSize: '24px', fontWeight: 900, color: '#0F2C59', margin: '8px 0' }}>R$ 2.500,00</div>
                <p style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                  Troféu especial para o projeto mais votado pelo público geral na rodada aberta.
                </p>
              </div>
            </div>
          </section>

          {/* ── SECTION 4: CRONOGRAMA ── */}
          <section id="sec-cronograma" style={{ marginBottom: '56px' }}>
            <h2 style={sectionTitleStyle}>CRONOGRAMA</h2>

            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '24px 28px', border: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {SCHEDULE.map(item => (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      paddingBottom: '16px',
                      borderBottom: '1px solid #F1F5F9',
                    }}
                  >
                    {/* Calendar Badge Icon */}
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        backgroundColor: '#FFF7ED',
                        border: '1px solid #FED7AA',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '20px',
                        flexShrink: 0,
                      }}
                    >
                      📅
                    </div>

                    {/* Text Details */}
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F2C59' }}>
                        <span style={{ color: '#F97316' }}>{item.date} - {item.time}:</span> {item.title}
                      </div>
                      <div style={{ fontSize: '13px', color: '#64748B', marginTop: '2px' }}>{item.description}</div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => showToast(`Acessando evento: ${item.title}`)}
                      style={{
                        backgroundColor: '#FFFFFF',
                        color: '#F97316',
                        border: '1px solid #F97316',
                        padding: '6px 16px',
                        borderRadius: '6px',
                        fontWeight: 600,
                        fontSize: '13px',
                        cursor: 'pointer',
                        flexShrink: 0,
                      }}
                    >
                      Acessar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── SECTION 5: REGULAMENTO ── */}
          <section id="sec-regulamento-banner" style={{ marginBottom: '56px' }}>
            <div
              style={{
                backgroundColor: '#03172E',
                borderRadius: '8px',
                padding: '36px 24px',
                textAlign: 'center',
                color: '#FFFFFF',
                boxShadow: '0 10px 15px -3px rgba(3, 23, 46, 0.2)',
              }}
            >
              <h2 style={{ fontSize: '24px', fontWeight: 900, fontStyle: 'italic', letterSpacing: '0.08em', margin: 0 }}>
                REGULAMENTO
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '14px', marginTop: '8px', marginBottom: '20px' }}>
                Consulte as regras completas, critérios de pontuação e requisitos para submissão das propostas.
              </p>
              <button
                onClick={() => setIsRegulationModalOpen(true)}
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#0F2C59',
                  border: 'none',
                  padding: '10px 28px',
                  borderRadius: '6px',
                  fontWeight: 800,
                  fontSize: '14px',
                  cursor: 'pointer',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                Acesse aqui
              </button>
            </div>
          </section>

          {/* ── SECTION 6: LOCAL ── */}
          <section id="sec-local" style={{ marginBottom: '56px' }}>
            <div
              style={{
                backgroundColor: '#F1F5F9',
                borderRadius: '8px',
                padding: '32px',
                textAlign: 'center',
              }}
            >
              <h2 style={{ ...sectionTitleStyle, marginBottom: '24px' }}>LOCAL</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px', margin: '0 auto' }}>
                {LOCATIONS.map(loc => (
                  <div
                    key={loc.id}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '8px',
                      padding: '16px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      border: '1px solid #E2E8F0',
                    }}
                  >
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F2C59' }}>
                        {loc.date} - {loc.time} <span style={{ color: '#475569', fontWeight: 500 }}>{loc.placeName}</span>
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>{loc.address}</div>
                    </div>
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: '#FFFFFF',
                        color: '#F97316',
                        border: '1px solid #F97316',
                        padding: '6px 14px',
                        borderRadius: '6px',
                        fontWeight: 600,
                        fontSize: '12px',
                        textDecoration: 'none',
                      }}
                    >
                      Maps
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── SECTION 7: CURADORES ── */}
          <section id="sec-curadores" style={{ marginBottom: '56px' }}>
            <h2 style={sectionTitleStyle}>CURADORES</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {CURATORS.map(cur => (
                <div
                  key={cur.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    padding: '20px',
                    border: '1px solid #E2E8F0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: '#0F2C59',
                      color: '#FFFFFF',
                      fontSize: '20px',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '12px',
                    }}
                  >
                    {cur.initials}
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F2C59', margin: '0 0 4px 0' }}>{cur.name}</h3>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#2563EB', marginBottom: '4px' }}>{cur.role}</div>
                  <div style={{ fontSize: '11px', color: '#64748B', marginBottom: '8px' }}>{cur.organization}</div>
                  <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5, margin: 0 }}>{cur.bio}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 8: MENTORES ── */}
          <section id="sec-mentores" style={{ marginBottom: '56px' }}>
            <h2 style={sectionTitleStyle}>MENTORES</h2>
            <div style={{ textAlign: 'center', color: '#2563EB', fontStyle: 'italic', fontSize: '15px', marginBottom: '24px' }}>
              em breve
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              {['UX/UI & Design de Serviço', 'Engenharia de Software & IA', 'Pitch & Modelos de Negócio', 'GovTech & Regulação'].map(
                (area, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '8px',
                      padding: '16px',
                      border: '1px dashed #CBD5E1',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: '24px', marginBottom: '6px' }}>💡</div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#334155' }}>Banca de Mentores #{idx + 1}</div>
                    <div style={{ fontSize: '11px', color: '#64748B', marginTop: '2px' }}>{area}</div>
                  </div>
                )
              )}
            </div>
          </section>

          {/* ── SECTION 9: JURADOS ── */}
          <section id="sec-jurados" style={{ marginBottom: '56px' }}>
            <h2 style={sectionTitleStyle}>JURADOS</h2>
            <div style={{ textAlign: 'center', color: '#64748B', fontSize: '13px', fontWeight: 600, marginBottom: '20px' }}>
              Desafio 1 • Desafio 2 • Desafio 3
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {JURORS.map(jur => (
                <div
                  key={jur.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    padding: '20px',
                    border: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: '#EFF6FF',
                      color: '#1D4ED8',
                      fontSize: '16px',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {jur.initials}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0F2C59', margin: '0 0 2px 0' }}>{jur.name}</h4>
                    <div style={{ fontSize: '12px', color: '#2563EB', fontWeight: 600 }}>{jur.role}</div>
                    <div style={{ fontSize: '11px', color: '#64748B', marginTop: '2px' }}>{jur.organization}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 10: E.I.T.A. & RESULTADOS ── */}
          <section id="sec-eita" style={{ marginBottom: '56px' }}>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                padding: '32px',
                border: '1px solid #E2E8F0',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '32px',
              }}
            >
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F2C59', marginBottom: '8px' }}>
                  Programa E.I.T.A. Recife
                </h3>
                <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  O <strong>E.I.T.A. (Empresa de Inovação e Transformação Aberta)</strong> é a iniciativa da Prefeitura do Recife em parceria com a EMPREL que viabiliza a contratação de testes de soluções tecnológicas inovadoras de startups e cidadãos para os desafios reais da administração pública municipal.
                </p>
              </div>
              <div id="sec-resultados" style={{ borderLeft: '1px solid #F1F5F9', paddingLeft: '32px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F2C59', marginBottom: '8px' }}>
                  Resultados das Edições Anteriores
                </h3>
                <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6, marginBottom: '12px' }}>
                  Confira as soluções vencedoras que já foram implantadas nos serviços públicos da cidade do Recife.
                </p>
                <button
                  onClick={() => showToast('Exibindo arquivo de resultados do Hacker Cidadão 12.0')}
                  style={{
                    backgroundColor: '#EFF6FF',
                    color: '#2563EB',
                    border: '1px solid #BFDBFE',
                    padding: '6px 14px',
                    borderRadius: '6px',
                    fontWeight: 700,
                    fontSize: '12px',
                    cursor: 'pointer',
                  }}
                >
                  Ver arquivo de vencedores 🏆
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* ── MODAL: REGULAMENTO DO EDITAL ── */}
      {isRegulationModalOpen && (
        <div style={modalBackdropStyle}>
          <div style={modalContentStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F2C59', margin: 0 }}>
                Regulamento Oficial — Hacker Cidadão 13.0
              </h3>
              <button onClick={() => setIsRegulationModalOpen(false)} style={closeButtonStyle}>
                ✕
              </button>
            </div>

            <div style={{ maxHeight: '400px', overflowY: 'auto', paddingRight: '8px', fontSize: '13px', color: '#334155', lineHeight: 1.6 }}>
              <h4 style={{ color: '#0F2C59', marginTop: 0 }}>1. DO OBJETIVO</h4>
              <p>
                O Hacker Cidadão 13.0 visa incentivar a criação de soluções tecnológicas focadas em problemas reais da infraestrutura, saúde e meio ambiente do município do Recife.
              </p>

              <h4 style={{ color: '#0F2C59' }}>2. DA PARTICIPAÇÃO</h4>
              <p>
                Poderão se inscrever cidadãos maiores de 18 anos, estudantes, desenvolvedores, designers, pesquisadores e startups constituídas.
              </p>

              <h4 style={{ color: '#0F2C59' }}>3. DA AVALIAÇÃO</h4>
              <p>
                As propostas serão julgadas com base em 4 critérios fundamentais: Grau de Disrupção, Viabilidade Técnica, Impacto Social e Qualidade da Apresentação (Pitch).
              </p>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button onClick={() => setIsRegulationModalOpen(false)} style={{ ...buttonSecondaryStyle }}>
                Fechar
              </button>
              <button
                onClick={() => {
                  setIsRegulationModalOpen(false)
                  showToast('Download do PDF do Edital iniciado!')
                }}
                style={{ ...buttonPrimaryStyle }}
              >
                Baixar PDF do Edital 📥
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL: LINKS ÚTEIS ── */}
      {isLinksModalOpen && (
        <div style={modalBackdropStyle}>
          <div style={modalContentStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F2C59', margin: 0 }}>Links Úteis & Recursos</h3>
              <button onClick={() => setIsLinksModalOpen(false)} style={closeButtonStyle}>
                ✕
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href="https://dados.recife.pe.gov.br"
                target="_blank"
                rel="noopener noreferrer"
                style={linkItemStyle}
              >
                <span>📊 Portal de Dados Abertos da Prefeitura do Recife</span>
                <span>➔</span>
              </a>
              <button
                onClick={() => {
                  setIsLinksModalOpen(false)
                  showToast('Modelo de Apresentação (Pitch Deck) baixado')
                }}
                style={{ ...linkItemStyle, background: 'none', border: '1px solid #E2E8F0', width: '100%', textAlign: 'left', cursor: 'pointer' }}
              >
                <span>🎨 Template Oficial de Pitch Deck (PPTX/Figma)</span>
                <span>📥</span>
              </button>
              <button
                onClick={() => {
                  setIsLinksModalOpen(false)
                  showToast('Manual de Integração de APIs da EMPREL')
                }}
                style={{ ...linkItemStyle, background: 'none', border: '1px solid #E2E8F0', width: '100%', textAlign: 'left', cursor: 'pointer' }}
              >
                <span>🛠️ Documentação das APIs do E.I.T.A. Recife</span>
                <span>➔</span>
              </button>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={() => setIsLinksModalOpen(false)} style={buttonSecondaryStyle}>
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL: FALE CONOSCO ── */}
      {isContactModalOpen && (
        <div style={modalBackdropStyle}>
          <div style={modalContentStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F2C59', margin: 0 }}>
                Fale Conosco — Suporte Hacker Cidadão
              </h3>
              <button onClick={() => setIsContactModalOpen(false)} style={closeButtonStyle}>
                ✕
              </button>
            </div>

            <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={labelStyle}>Seu Nome</label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={e => setContactName(e.target.value)}
                  placeholder="Digite seu nome completo"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>E-mail para resposta</label>
                <input
                  type="email"
                  required
                  value={contactEmail}
                  onChange={e => setContactEmail(e.target.value)}
                  placeholder="seuemail@exemplo.com"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Assunto</label>
                <select
                  value={contactSubject}
                  onChange={e => setContactSubject(e.target.value)}
                  style={inputStyle}
                >
                  <option value="Dúvida sobre o Edital">Dúvida sobre o Edital</option>
                  <option value="Problema na Inscrição">Problema na Inscrição</option>
                  <option value="Parcerias e Imprensa">Parcerias e Imprensa</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Sua Mensagem</label>
                <textarea
                  rows={4}
                  required
                  value={contactMessage}
                  onChange={e => setContactMessage(e.target.value)}
                  placeholder="Descreva detalhadamente sua dúvida ou questão..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '8px' }}>
                <button type="button" onClick={() => setIsContactModalOpen(false)} style={buttonSecondaryStyle}>
                  Cancelar
                </button>
                <button type="submit" style={buttonPrimaryStyle}>
                  Enviar Mensagem ✉️
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Style Constants & Helpers ───

const sectionTitleStyle: React.CSSProperties = {
  fontSize: '22px',
  fontWeight: 900,
  fontStyle: 'italic',
  color: '#0F2C59',
  textAlign: 'center',
  letterSpacing: '0.06em',
  margin: '0 0 24px 0',
  textTransform: 'uppercase',
}

function navPillStyle(isActive: boolean, isFirst: boolean): React.CSSProperties {
  if (isActive && isFirst) {
    return {
      backgroundColor: '#0F2C59',
      color: '#FFFFFF',
      border: '1px solid #0F2C59',
      borderRadius: '6px',
      padding: '6px 16px',
      fontWeight: 700,
      fontSize: '13px',
      cursor: 'pointer',
    }
  }
  return {
    backgroundColor: '#FFFFFF',
    color: '#F97316',
    border: '1px solid #F97316',
    borderRadius: '6px',
    padding: '6px 14px',
    fontWeight: 600,
    fontSize: '13px',
    cursor: 'pointer',
    textTransform: 'lowercase',
  }
}

const modalBackdropStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(15, 23, 42, 0.65)',
  backdropFilter: 'blur(4px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
}

const modalContentStyle: React.CSSProperties = {
  backgroundColor: '#FFFFFF',
  borderRadius: '12px',
  width: '90%',
  maxWidth: '560px',
  padding: '24px',
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
}

const closeButtonStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  fontSize: '18px',
  color: '#64748B',
  cursor: 'pointer',
}

const buttonPrimaryStyle: React.CSSProperties = {
  backgroundColor: '#0F2C59',
  color: '#FFFFFF',
  border: 'none',
  padding: '8px 18px',
  borderRadius: '6px',
  fontWeight: 700,
  fontSize: '13px',
  cursor: 'pointer',
}

const buttonSecondaryStyle: React.CSSProperties = {
  backgroundColor: '#FFFFFF',
  color: '#475569',
  border: '1px solid #CBD5E1',
  padding: '8px 16px',
  borderRadius: '6px',
  fontWeight: 600,
  fontSize: '13px',
  cursor: 'pointer',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '12px',
  fontWeight: 700,
  color: '#334155',
  marginBottom: '4px',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '8px 12px',
  fontSize: '13px',
  borderRadius: '6px',
  border: '1px solid #CBD5E1',
  outline: 'none',
  boxSizing: 'border-box',
}

const linkItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px 16px',
  borderRadius: '8px',
  backgroundColor: '#F8FAFC',
  border: '1px solid #E2E8F0',
  color: '#0F2C59',
  fontWeight: 700,
  fontSize: '13px',
  textDecoration: 'none',
}

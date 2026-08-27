import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import bannerEitaTrilha from '../../../assets/banner-eita-trilha.png'

interface EitaChallenge {
  id: string
  number: number
  title: string
  category: string
  secretaria: string
  description: string
  problem: string
  expectedSolution: string
  impact: string
  targetPublic: string
  status: 'Aberto' | 'Em Avaliação' | 'Em Prototipagem' | 'Concluído'
  phase: 'Desafios Públicos' | 'Prototipagem' | 'MVP'
}

interface TimelineEvent {
  id: string
  title: string
  date: string
  location: string
  description: string
  completed: boolean
}

interface StartupResult {
  id: string
  name: string
  challenge: string
  category: string
  phase: 'Desafios Públicos' | 'Prototipagem' | 'MVP' | 'Finalista'
  score: number
  statusTag: string
  solutionSummary: string
}

const EITA_CHALLENGES: EitaChallenge[] = [
  {
    id: 'eita-ch-1',
    number: 1,
    title: 'Monitoramento Inteligente de Pontos Críticos de Alagamento',
    category: 'Cidades Inteligentes & Resiliência',
    secretaria: 'Defesa Civil & EMLURB',
    description: 'Desenvolvimento de sensores de baixo custo e plataforma preditiva com alertas via WhatsApp para mitigação de alagamentos em corredores viários do Recife.',
    problem: 'Acúmulo de águas pluviais em vias de alto fluxo durante marés altas e chuvas intensas, prejudicando o trânsito e o deslocamento de moradores.',
    expectedSolution: 'Plataforma IoT de telemetria com integração a modelos de IA para estimativa em tempo real da elevação do nível da água.',
    impact: 'Redução do tempo de resposta da Defesa Civil de 45 para 10 minutos e informação antecipada aos motoristas.',
    targetPublic: 'Cidadãos recifenses, motoristas de transporte público e equipes de emergência municipal.',
    status: 'Aberto',
    phase: 'Desafios Públicos',
  },
  {
    id: 'eita-ch-2',
    number: 2,
    title: 'Telemedicina Preventiva e Redução de Absenteísmo nas USFs',
    category: 'Saúde Pública & GovTech',
    secretaria: 'Secretaria de Saúde do Recife',
    description: 'Solução de comunicação multicanal para confirmação automatizada de consultas, teleorientação e triagem preventiva na atenção primária.',
    problem: 'Taxa de 32% de ausência de pacientes em consultas especializadas agendadas na rede municipal de saúde.',
    expectedSolution: 'Assistente virtual conversacional com inteligência artificial para remanejamento de vagas ociosas em até 24h antes do atendimento.',
    impact: 'Reaproveitamento de mais de 15.000 consultas anuais e redução das filas de espera.',
    targetPublic: 'Usuários do SUS Recife e equipes médicas das Unidades de Saúde da Família.',
    status: 'Aberto',
    phase: 'Desafios Públicos',
  },
  {
    id: 'eita-ch-3',
    number: 3,
    title: 'Gestão Inteligente de Resíduos e Gamificação da Coleta Seletiva',
    category: 'Meio Ambiente & ESG',
    secretaria: 'EMLURB & Secretaria de Meio Ambiente',
    description: 'Plataforma de engajamento comunitário com recompensa simbólica para moradores que realizam descarte correto de recicláveis em Ecoestações.',
    problem: 'Baixo percentual de triagem de lixo reciclável nas residências e descarte irregular em terrenos baldios.',
    expectedSolution: 'Aplicativo de pontos e cashback social trocável por descontos em eventos culturais da cidade.',
    impact: 'Aumento de 50% no volume de resíduos direcionados às cooperativas de catadores cadastradas.',
    targetPublic: 'Comunidades locais, catadores de recicláveis e pequenos comerciantes.',
    status: 'Aberto',
    phase: 'Prototipagem',
  },
  {
    id: 'eita-ch-4',
    number: 4,
    title: 'Acessibilidade Digital e Navegação Inclusiva no Centro Histórico',
    category: 'Inclusão & Mobilidade',
    secretaria: 'Secretaria de Desenvolvimento Econômico & TurisRecife',
    description: 'Sistema de audiodescrição e mapeamento tátil por beacons para navegação autônoma de pessoas com deficiência no Bairro do Recife.',
    problem: 'Dificuldades de orientação e falta de sinalização acessível para turistas e moradores com deficiência visual.',
    expectedSolution: 'App de navegação outdoor/indoor por geolocalização de altíssima precisão com orientação por voz sintetizada em português.',
    impact: 'Autonomia completa de circulação para mais de 8.000 cidadãos com deficiência visual na ilha do Recife antigo.',
    targetPublic: 'Pessoas com deficiência visual, idosos e turistas.',
    status: 'Em Avaliação',
    phase: 'MVP',
  },
]

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'event-1',
    title: 'Dia "E" — Apresentação Oficial dos Desafios',
    date: '15/05/2026',
    location: 'Auditório da Emprel / Transmissão YouTube',
    description: 'Lançamento público dos desafios do 3º Ciclo EITA com presença de secretários municipais e especialistas do ecossistema de inovação.',
    completed: true,
  },
  {
    id: 'event-2',
    title: 'Fórum de Nivelamento com Especialistas',
    date: '28/05/2026',
    location: 'Porto Digital & Salas Virtuais',
    description: 'Encontro presencial e online entre startups interessadas e técnicos das Secretarias da Prefeitura do Recife para alinhamento de escopo.',
    completed: true,
  },
  {
    id: 'event-3',
    title: 'Hacker Cidadão — Maratona de Prototipagem',
    date: '18/09/2026 a 20/09/2026',
    location: 'Moinho Recife Business & Tech',
    description: 'Maratona intensa de 48 horas de ideação, mentoria e desenvolvimento do primeiro protótipo funcional das soluções.',
    completed: false,
  },
  {
    id: 'event-4',
    title: 'Dia do Protótipo (Funil 2)',
    date: '15/10/2026',
    location: 'Hub de Inovação da Emprel',
    description: 'Apresentação dos protótipos não funcionais para banca avaliadora e seleção das equipes que avançam para a fase de MVP.',
    completed: false,
  },
  {
    id: 'event-5',
    title: 'Dia das Entregas dos MVPs & Premiação Final',
    date: '04/12/2026',
    location: 'Teatro do Parque / Recife',
    description: 'Demonstração prática dos MVPs testados em ambiente real de homologação, entrega de prêmios e anúncio dos contratos de inovação.',
    completed: false,
  },
]

const STARTUP_RESULTS: StartupResult[] = [
  {
    id: 'res-1',
    name: 'HydroTech Recife',
    challenge: 'Monitoramento Inteligente de Alagamento',
    category: 'Cidades Inteligentes',
    phase: 'MVP',
    score: 98.4,
    statusTag: 'Classificado para Teste Real',
    solutionSummary: 'Sensor ultra-sônico integrado com gateway LoRaWAN e bot de alerta no Telegram.',
  },
  {
    id: 'res-2',
    name: 'SaúdeFácil Gov',
    challenge: 'Telemedicina e Confirmação nas USFs',
    category: 'GovTech',
    phase: 'MVP',
    score: 96.8,
    statusTag: 'Classificado para Teste Real',
    solutionSummary: 'Plataforma de confirmação via WhatsApp Business API vinculada ao sistema e-SUS.',
  },
  {
    id: 'res-3',
    name: 'ReciclaMais Recife',
    challenge: 'Gamificação da Coleta Seletiva',
    category: 'ESG',
    phase: 'Prototipagem',
    score: 91.2,
    statusTag: 'Aprovado na Fase 2',
    solutionSummary: 'App mobile com carteira digital de pontos trocáveis por ingressos do Cinema São Luiz.',
  },
  {
    id: 'res-4',
    name: 'VozUrbana Acessível',
    challenge: 'Acessibilidade Digital no Centro Histórico',
    category: 'Inclusão',
    phase: 'Prototipagem',
    score: 89.5,
    statusTag: 'Aprovado na Fase 2',
    solutionSummary: 'Dispositivo IoT vestível com sintese de voz e mapa tátil digital.',
  },
]

export default function EitaPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<
    'inicio' | 'resultados' | 'cronograma' | 'desafios' | 'links' | 'regulamento' | 'inscricoes' | 'contato'
  >('inicio')

  // Modals state
  const [isRegulationModalOpen, setIsRegulationModalOpen] = useState(false)
  const [isLinksModalOpen, setIsLinksModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isDiscordModalOpen, setIsDiscordModalOpen] = useState(false)
  const [isInscriptionModalOpen, setIsInscriptionModalOpen] = useState(false)
  const [isChallengeDetailModalOpen, setIsChallengeDetailModalOpen] = useState(false)
  const [selectedChallenge, setSelectedChallenge] = useState<EitaChallenge | null>(null)

  // Filters & Search
  const [challengeSearch, setChallengeSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas')

  // Form states
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactSubject, setContactSubject] = useState('Dúvida sobre o 3º Ciclo EITA')
  const [contactMessage, setContactMessage] = useState('')

  const [inscriptionStartupName, setInscriptionStartupName] = useState('')
  const [inscriptionCnpj, setInscriptionCnpj] = useState('')
  const [inscriptionSelectedChallengeId, setInscriptionSelectedChallengeId] = useState(EITA_CHALLENGES[0].id)
  const [inscriptionPitchUrl, setInscriptionPitchUrl] = useState('')

  // Video State
  const [isPlayingVideo, setIsPlayingVideo] = useState(false)

  // Google Drive Widget state
  const [driveWidgetState, setDriveWidgetState] = useState<'error' | 'reloading' | 'loaded'>('error')

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3800)
  }

  const handleTabClick = (
    tab: 'inicio' | 'resultados' | 'cronograma' | 'desafios' | 'links' | 'regulamento' | 'inscricoes' | 'contato'
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
    if (tab === 'inscricoes') {
      setIsInscriptionModalOpen(true)
      return
    }
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsContactModalOpen(false)
    setContactName('')
    setContactEmail('')
    setContactMessage('')
    showToast('Sua mensagem foi enviada com sucesso à equipe do Esquadrão E.I.T.A! Recife.')
  }

  const handleInscriptionSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsInscriptionModalOpen(false)
    setInscriptionStartupName('')
    setInscriptionCnpj('')
    setInscriptionPitchUrl('')
    showToast('Inscrição no 3º Ciclo EITA submetida com sucesso! Você receberá a confirmação por e-mail.')
  }

  const categories = ['Todas', 'Cidades Inteligentes & Resiliência', 'Saúde Pública & GovTech', 'Meio Ambiente & ESG', 'Inclusão & Mobilidade']

  const filteredChallenges = EITA_CHALLENGES.filter(ch => {
    const matchesCat = selectedCategory === 'Todas' || ch.category === selectedCategory
    const matchesSearch =
      ch.title.toLowerCase().includes(challengeSearch.toLowerCase()) ||
      ch.description.toLowerCase().includes(challengeSearch.toLowerCase()) ||
      ch.secretaria.toLowerCase().includes(challengeSearch.toLowerCase())
    return matchesCat && matchesSearch
  })

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
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            padding: '14px 22px',
            borderRadius: '10px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '14px',
            fontWeight: 500,
            borderLeft: '5px solid #F97316',
          }}
        >
          <span style={{ fontSize: '18px' }}>🚀</span>
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

      {/* ── Main Layout Body (Sidebar + Content Column) ── */}
      <div style={{ display: 'flex', minHeight: 'calc(100vh - 64px)' }}>
        <Sidebar activeItem="painel" />

        {/* Central Main Content */}
        <main style={{ flex: 1, padding: '24px 32px 64px 32px', maxWidth: '1240px', margin: '0 auto', width: '100%' }}>
          {/* ── Top Hero Banner: 3º CICLO DE INOVAÇÃO ABERTA e.i.t.a! Recife ── */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
              overflow: 'hidden',
              marginBottom: '20px',
            }}
          >
            <img
              src={bannerEitaTrilha}
              alt="3º Ciclo de Inovação Aberta e.i.t.a! Recife Banner"
              style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '420px', objectFit: 'cover' }}
            />
          </div>


          {/* ── Sub-navigation Pills / Tabs ── */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              overflowX: 'auto',
              paddingBottom: '12px',
              marginBottom: '24px',
              scrollbarWidth: 'thin',
            }}
          >
            {[
              { id: 'inicio', label: 'Início' },
              { id: 'resultados', label: 'Resultados' },
              { id: 'cronograma', label: 'Cronograma' },
              { id: 'desafios', label: 'Desafios' },
              { id: 'links', label: 'Links úteis' },
              { id: 'regulamento', label: 'Regulamento' },
              { id: 'inscricoes', label: 'Inscrições' },
              { id: 'contato', label: 'Fale conosco' },
              { id: 'hacker-cidadao', label: 'Hacker cidadão' },
            ].map(tab => {
              const isActive = activeTab === tab.id
              const isHackerCidadao = tab.id === 'hacker-cidadao'

              if (isHackerCidadao) {
                return (
                  <Link
                    key={tab.id}
                    to="/legacy/hackercidadao"
                    style={{
                      padding: '8px 20px',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: 600,
                      border: '1.5px solid #EA580C',
                      color: '#EA580C',
                      backgroundColor: '#FFFFFF',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                    }}
                  >
                    {tab.label}
                  </Link>
                )
              }

              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id as any)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: 600,
                    border: isActive ? '1.5px solid #EA580C' : '1.5px solid #EA580C',
                    backgroundColor: isActive ? '#EA580C' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : '#EA580C',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                  }}
                >
                  {tab.label}
                </button>
              )
            })}

            <Link
              to="/legacy/eita-submissoes"
              style={{
                padding: '8px 20px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 700,
                backgroundColor: '#00a8b5',
                color: '#FFFFFF',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 2px 6px rgba(0, 168, 181, 0.3)',
              }}
            >
              📊 Dashboards EITA
            </Link>
          </div>

          {/* ───────────────────────────────────────────────────────────── */}
          {/* TAB CONTENT: INÍCIO */}
          {/* ───────────────────────────────────────────────────────────── */}
          {activeTab === 'inicio' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
              {/* Section 1: O Ciclo Card */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '28px 32px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '32px',
                }}
              >
                <div style={{ flex: 1 }}>
                  <h2
                    style={{
                      fontSize: '22px',
                      fontWeight: 700,
                      color: '#0F172A',
                      marginBottom: '16px',
                    }}
                  >
                    O ciclo
                  </h2>

                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#475569', marginBottom: '16px' }}>
                    Visa a obtenção de soluções inovadoras para desafios da cidade do Recife, órgão que tem como principal função servir o cidadão. O processo seguirá os princípios da Inovação Aberta, contemplando três macro fases: <strong>desafios públicos</strong>, <strong>prototipagem</strong> e <strong>desenvolvimento de produto mínimo viável (MVP)</strong>.
                  </p>

                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#475569', marginBottom: 0 }}>
                    Ao final das três fases, será realizada uma experimentação do MVP para avaliação e possível desenvolvimento em larga escala (visão de futuro da solução) e go-to-market do produto. Para este ciclo, estão previstos cinco eventos principais: o <strong>Dia "E"</strong> (apresentação dos desafios), o <strong>Fórum com os especialistas</strong>, o <strong>Hacker Cidadão</strong>, <strong>Dia do Protótipo</strong> e o <strong>Dia das entregas dos MVPs</strong>.
                  </p>
                </div>

                {/* Hero Illustration Graphic */}
                <div
                  style={{
                    width: '280px',
                    height: '180px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #FEF3C7 0%, #FFEDD5 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <svg width="220" height="150" viewBox="0 0 220 150" fill="none">
                    <circle cx="110" cy="75" r="55" fill="#F97316" fillOpacity="0.15" />
                    <path d="M40 110 Q 110 30 180 110" stroke="#EA580C" strokeWidth="4" fill="none" strokeDasharray="6 6" />
                    {/* People & Ideas graphic */}
                    <circle cx="65" cy="85" r="18" fill="#1E3A8A" />
                    <circle cx="65" cy="75" r="8" fill="#FDBA74" />
                    <circle cx="155" cy="85" r="18" fill="#EA580C" />
                    <circle cx="155" cy="75" r="8" fill="#FED7AA" />
                    <circle cx="110" cy="55" r="22" fill="#0284C7" />
                    <circle cx="110" cy="43" r="10" fill="#FEF08A" />
                    <path d="M102 43 L118 43 M110 35 L110 51" stroke="#EA580C" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* Section 2: CONHEÇA AS FASES */}
              <div>
                <h2
                  style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#0F2C59',
                    textAlign: 'center',
                    marginBottom: '28px',
                  }}
                >
                  CONHEÇA AS FASES
                </h2>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '24px',
                  }}
                >
                  {/* Card 1: Desafios Públicos */}
                  <div
                    style={{
                      backgroundColor: '#F8FAFC',
                      borderRadius: '12px',
                      padding: '24px 20px',
                      border: '1px solid #E2E8F0',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      transition: 'transform 0.2s, boxShadow 0.2s',
                    }}
                  >
                    <div
                      style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        backgroundColor: '#FFFFFF',
                        border: '2px solid #E2E8F0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <rect x="10" y="15" width="40" height="30" rx="4" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
                        <path d="M18 28 L28 28 M18 34 L38 34" stroke="#0369A1" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="42" cy="22" r="6" fill="#F97316" />
                      </svg>
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0F2C59', marginBottom: '12px' }}>
                      Desafios públicos
                    </h3>
                    <p style={{ fontSize: '13px', lineHeight: 1.5, color: '#64748B', margin: 0 }}>
                      Apresentação dos desafios por parte dos especialistas para entendimento e nivelamento entre todos do ecossistema. A partir dessa fase, os interessados poderão se cadastrar nos desafios que possuem interesse. Nesta etapa teremos o primeiro funil do processo, onde serão selecionadas as equipes que seguirão adiante.
                    </p>
                  </div>

                  {/* Card 2: Prototipagem */}
                  <div
                    style={{
                      backgroundColor: '#F8FAFC',
                      borderRadius: '12px',
                      padding: '24px 20px',
                      border: '1px solid #E2E8F0',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      transition: 'transform 0.2s, boxShadow 0.2s',
                    }}
                  >
                    <div
                      style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        backgroundColor: '#FFFFFF',
                        border: '2px solid #E2E8F0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <rect x="12" y="12" width="36" height="36" rx="6" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
                        <path d="M20 22 H40 M20 30 H32 M20 38 H36" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="36" cy="30" r="4" fill="#EA580C" />
                      </svg>
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0F2C59', marginBottom: '12px' }}>
                      Prototipagem
                    </h3>
                    <p style={{ fontSize: '13px', lineHeight: 1.5, color: '#64748B', margin: 0 }}>
                      As equipes selecionadas poderão iniciar o desenvolvimento de um protótipo não funcional para apresentar seu processo de ideação de uma possível solução. Esta fase representa o segundo funil de seleção do processo.
                    </p>
                  </div>

                  {/* Card 3: MVP */}
                  <div
                    style={{
                      backgroundColor: '#F8FAFC',
                      borderRadius: '12px',
                      padding: '24px 20px',
                      border: '1px solid #E2E8F0',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      transition: 'transform 0.2s, boxShadow 0.2s',
                    }}
                  >
                    <div
                      style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        backgroundColor: '#FFFFFF',
                        border: '2px solid #E2E8F0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <circle cx="30" cy="30" r="22" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2" />
                        <path d="M22 30 L28 36 L38 24" stroke="#15803D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0F2C59', marginBottom: '12px' }}>
                      MVP
                    </h3>
                    <p style={{ fontSize: '13px', lineHeight: 1.5, color: '#64748B', margin: 0 }}>
                      As equipes selecionadas partirão para o desenvolvimento de um produto mínimo viável no sentido de apresentar uma solução funcionando em um ambiente controlado que possa confirmar a hipótese de resolução do desafio. Ao final desse processo, as equipes receberão uma premiação e ainda contam com uma possibilidade de contratação por parte da Prefeitura.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3: Todas as fases (Progress indicators) */}
              <div>
                <h2
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#0F2C59',
                    textAlign: 'center',
                    marginBottom: '24px',
                  }}
                >
                  Todas as fases
                </h2>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', alignItems: 'center' }}>
                  {/* Phase 1 Circle */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '50%',
                        border: '4px solid #1E293B',
                        borderTopColor: '#F97316',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#F97316',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      1
                    </div>
                    <span style={{ fontSize: '13px', color: '#475569', fontWeight: 500 }}>Fase 1 — Ideação</span>
                  </div>

                  {/* Line Divider */}
                  <div style={{ width: '60px', height: '2px', backgroundColor: '#CBD5E1' }} />

                  {/* Phase 2 Circle */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '50%',
                        border: '4px solid #1E293B',
                        borderTopColor: '#F97316',
                        borderRightColor: '#F97316',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#F97316',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      2
                    </div>
                    <span style={{ fontSize: '13px', color: '#475569', fontWeight: 500 }}>Fase 2 — Protótipo</span>
                  </div>

                  {/* Line Divider */}
                  <div style={{ width: '60px', height: '2px', backgroundColor: '#CBD5E1' }} />

                  {/* Phase 3 Circle */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '50%',
                        border: '4px solid #1E293B',
                        borderTopColor: '#F97316',
                        borderRightColor: '#F97316',
                        borderBottomColor: '#F97316',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#F97316',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      3
                    </div>
                    <span style={{ fontSize: '13px', color: '#475569', fontWeight: 500 }}>Fase 3 — MVP Final</span>
                  </div>
                </div>
              </div>

              {/* Section 4: CONHEÇA OS DESAFIOS */}
              <div style={{ marginTop: '12px' }}>
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0F2C59', marginBottom: '8px' }}>
                    CONHEÇA OS DESAFIOS
                  </h2>
                  <p style={{ fontSize: '14px', color: '#64748B' }}>
                    Explore as demandas estratégicas lançadas pelas secretarias da Prefeitura do Recife para este ciclo.
                  </p>
                </div>

                {/* Challenge Cards Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                  {EITA_CHALLENGES.map(ch => (
                    <div
                      key={ch.id}
                      style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: '12px',
                        padding: '24px',
                        border: '1px solid #E2E8F0',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                          <span
                            style={{
                              fontSize: '12px',
                              fontWeight: 700,
                              color: '#EA580C',
                              backgroundColor: '#FFF7ED',
                              padding: '4px 10px',
                              borderRadius: '20px',
                              border: '1px solid #FFEDD5',
                            }}
                          >
                            Desafio #{ch.number}
                          </span>
                          <span
                            style={{
                              fontSize: '11px',
                              fontWeight: 600,
                              color: '#0369A1',
                              backgroundColor: '#E0F2FE',
                              padding: '3px 8px',
                              borderRadius: '4px',
                            }}
                          >
                            {ch.secretaria}
                          </span>
                        </div>

                        <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', marginBottom: '10px', lineHeight: 1.4 }}>
                          {ch.title}
                        </h3>

                        <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5, marginBottom: '16px' }}>
                          {ch.description}
                        </p>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid #F1F5F9' }}>
                        <span style={{ fontSize: '12px', color: '#64748B', fontWeight: 500 }}>
                          📁 {ch.category}
                        </span>
                        <button
                          onClick={() => {
                            setSelectedChallenge(ch)
                            setIsChallengeDetailModalOpen(true)
                          }}
                          style={{
                            padding: '6px 14px',
                            borderRadius: '6px',
                            fontSize: '12px',
                            fontWeight: 600,
                            backgroundColor: '#0F2C59',
                            color: '#FFFFFF',
                            border: 'none',
                            cursor: 'pointer',
                          }}
                        >
                          Ver detalhes
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 5: Banner Discord */}
              <div
                style={{
                  borderRadius: '12px',
                  background: 'linear-gradient(90deg, #1D4ED8 0%, #4338CA 50%, #C2410C 100%)',
                  padding: '32px 40px',
                  color: '#FFFFFF',
                  boxShadow: '0 10px 20px -5px rgba(29, 78, 216, 0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <h3
                  style={{
                    fontSize: '15px',
                    fontWeight: 800,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    margin: 0,
                  }}
                >
                  FERRAMENTA DE INTERAÇÃO EM CADA DESAFIO ENTRE OS ESPECIALISTAS E AS STARTUPS
                </h3>

                <div>
                  <button
                    onClick={() => setIsDiscordModalOpen(true)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      backgroundColor: '#FFFFFF',
                      color: '#EA580C',
                      border: 'none',
                      padding: '10px 24px',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      transition: 'transform 0.2s',
                    }}
                  >
                    <span>💬</span>
                    <span>Acesse nosso discord</span>
                  </button>
                </div>
              </div>

              {/* Section 6: Próxima atividade & Widgets */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0F2C59', textAlign: 'center', margin: 0 }}>
                  Próxima atividade
                </h2>

                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    padding: '24px',
                    border: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                  }}
                >
                  <div
                    style={{
                      width: '140px',
                      height: '100px',
                      borderRadius: '12px',
                      backgroundColor: '#FEF3C7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="90" height="70" viewBox="0 0 90 70" fill="none">
                      <rect x="10" y="10" width="70" height="50" rx="8" fill="#1E3A8A" />
                      <circle cx="30" cy="35" r="12" fill="#F97316" />
                      <path d="M50 25 H70 M50 35 H65 M50 45 H70" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#EA580C', marginBottom: '4px' }}>
                      PRÓXIMO ENCONTRO PRESENCIAL
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                      Fórum Técnico de Alinhamento com os Especialistas da Emprel
                    </h3>
                    <p style={{ fontSize: '13px', color: '#64748B', margin: 0 }}>
                      Data: 28/05/2026 às 14:30 • Local: Auditório do Porto Digital & Sala Virtual no Discord.
                    </p>
                  </div>
                </div>

                {/* Google Drive Document Viewer Embed Box */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    border: '1px solid #E2E8F0',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L2 19H22L12 2Z" fill="#4285F4" />
                        <path d="M2 19L7 10H17L22 19H2Z" fill="#FBBC05" />
                        <path d="M12 2L17 10H7L12 2Z" fill="#34A853" />
                      </svg>
                      <span style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A' }}>Google Drive — Documento Oficial</span>
                    </div>

                    <button
                      onClick={() => {
                        setDriveWidgetState('reloading')
                        setTimeout(() => {
                          setDriveWidgetState('loaded')
                          showToast('Documento recarregado com sucesso!')
                        }, 1200)
                      }}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: 600,
                        backgroundColor: '#F1F5F9',
                        color: '#475569',
                        border: '1px solid #CBD5E1',
                        cursor: 'pointer',
                      }}
                    >
                      {driveWidgetState === 'reloading' ? 'Carregando...' : '🔄 Tentar novamente'}
                    </button>
                  </div>

                  {driveWidgetState === 'error' && (
                    <div
                      style={{
                        padding: '24px',
                        backgroundColor: '#F8FAFC',
                        borderRadius: '8px',
                        border: '1px dashed #CBD5E1',
                        textAlign: 'center',
                      }}
                    >
                      <p style={{ fontSize: '14px', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>
                        Não foi possível abrir o arquivo.
                      </p>
                      <p style={{ fontSize: '12px', color: '#64748B', maxWidth: '600px', margin: '0 auto 12px auto', lineHeight: 1.5 }}>
                        Os aplicativos do Google Drive facilitam a criação, o armazenamento e o compartilhamento de documentos, planilhas e apresentações on-line e muito mais.
                      </p>
                      <a
                        href="https://drive.google.com/start/apps"
                        target="_blank"
                        rel="noreferrer"
                        style={{ fontSize: '12px', fontWeight: 600, color: '#2563EB', textDecoration: 'none' }}
                      >
                        Saiba mais em drive.google.com/start/apps
                      </a>
                    </div>
                  )}

                  {driveWidgetState === 'loaded' && (
                    <div
                      style={{
                        padding: '20px',
                        backgroundColor: '#EFF6FF',
                        borderRadius: '8px',
                        border: '1px solid #BFDBFE',
                      }}
                    >
                      <div style={{ fontWeight: 700, color: '#1E4ED8', fontSize: '14px', marginBottom: '6px' }}>
                        📄 Guia de Orientação para Inscrição no 3º Ciclo EITA (PDF)
                      </div>
                      <p style={{ fontSize: '12px', color: '#1E3A8A', margin: 0 }}>
                        Documento oficial com os critérios de homologação, formulários de pitch e checklist de submissão.
                      </p>
                    </div>
                  )}
                </div>

                {/* Embedded Video Player Box */}
                <div
                  style={{
                    backgroundColor: '#000000',
                    borderRadius: '12px',
                    height: '360px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {isPlayingVideo ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                      title="Vídeo de apresentação 3º Ciclo EITA"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div
                      onClick={() => setIsPlayingVideo(true)}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '16px',
                        cursor: 'pointer',
                        color: '#FFFFFF',
                      }}
                    >
                      <div
                        style={{
                          width: '68px',
                          height: '48px',
                          backgroundColor: '#FF0000',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 10px rgba(255,0,0,0.4)',
                        }}
                      >
                        <div
                          style={{
                            width: 0,
                            height: 0,
                            borderTop: '10px solid transparent',
                            borderBottom: '10px solid transparent',
                            borderLeft: '16px solid #FFFFFF',
                            marginLeft: '4px',
                          }}
                        />
                      </div>
                      <span style={{ fontSize: '14px', fontWeight: 600, color: '#E2E8F0' }}>
                        Clique para assistir ao vídeo de apresentação do 3º Ciclo E.I.T.A! Recife
                      </span>
                    </div>
                  )}
                </div>

                {/* Attachment Indicator / Download Icon Widget */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '12px' }}>
                  <div
                    onClick={() => showToast('Download do arquivo file_name.png iniciado!')}
                    style={{
                      display: 'inline-flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '6px',
                      cursor: 'pointer',
                      padding: '12px 20px',
                      borderRadius: '50px',
                      border: '2px solid #F97316',
                      backgroundColor: '#FFFFFF',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#FFF7ED',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#EA580C',
                        fontWeight: 700,
                      }}
                    >
                      📁
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#EA580C' }}>
                      file_name.png
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ───────────────────────────────────────────────────────────── */}
          {/* TAB CONTENT: RESULTADOS */}
          {/* ───────────────────────────────────────────────────────────── */}
          {activeTab === 'resultados' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '24px',
                  border: '1px solid #E2E8F0',
                }}
              >
                <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0F2C59', marginBottom: '8px' }}>
                  Resultados Parciais & Startups Classificadas
                </h2>
                <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '20px' }}>
                  Acompanhe a pontuação e status das soluções submetidas por fase do processo seletivo.
                </p>

                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#F8FAFC', borderBottom: '2px solid #E2E8F0' }}>
                        <th style={{ padding: '12px 16px', fontWeight: 700, color: '#475569' }}>Startup</th>
                        <th style={{ padding: '12px 16px', fontWeight: 700, color: '#475569' }}>Desafio Vinculado</th>
                        <th style={{ padding: '12px 16px', fontWeight: 700, color: '#475569' }}>Fase</th>
                        <th style={{ padding: '12px 16px', fontWeight: 700, color: '#475569' }}>Nota</th>
                        <th style={{ padding: '12px 16px', fontWeight: 700, color: '#475569' }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {STARTUP_RESULTS.map(res => (
                        <tr key={res.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                          <td style={{ padding: '12px 16px', fontWeight: 700, color: '#0F172A' }}>{res.name}</td>
                          <td style={{ padding: '12px 16px', color: '#475569' }}>{res.challenge}</td>
                          <td style={{ padding: '12px 16px', color: '#64748B' }}>{res.phase}</td>
                          <td style={{ padding: '12px 16px', fontWeight: 700, color: '#16A34A' }}>{res.score}</td>
                          <td style={{ padding: '12px 16px' }}>
                            <span
                              style={{
                                padding: '4px 8px',
                                borderRadius: '4px',
                                fontSize: '11px',
                                fontWeight: 600,
                                backgroundColor: '#DCFCE7',
                                color: '#15803D',
                              }}
                            >
                              {res.statusTag}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ───────────────────────────────────────────────────────────── */}
          {/* TAB CONTENT: CRONOGRAMA */}
          {/* ───────────────────────────────────────────────────────────── */}
          {activeTab === 'cronograma' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '24px',
                  border: '1px solid #E2E8F0',
                }}
              >
                <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0F2C59', marginBottom: '8px' }}>
                  Cronograma Oficial — 3º Ciclo E.I.T.A! Recife
                </h2>
                <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '24px' }}>
                  Datas e marcos fundamentais do ciclo de inovação aberta.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {TIMELINE_EVENTS.map(ev => (
                    <div
                      key={ev.id}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '16px',
                        padding: '16px',
                        borderRadius: '8px',
                        backgroundColor: ev.completed ? '#F0FDF4' : '#F8FAFC',
                        border: ev.completed ? '1px solid #BBF7D0' : '1px solid #E2E8F0',
                      }}
                    >
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: ev.completed ? '#22C55E' : '#EA580C',
                          color: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '14px',
                          flexShrink: 0,
                        }}
                      >
                        {ev.completed ? '✓' : '•'}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', margin: 0 }}>{ev.title}</h3>
                          <span style={{ fontSize: '12px', fontWeight: 700, color: '#EA580C' }}>{ev.date}</span>
                        </div>
                        <div style={{ fontSize: '12px', color: '#0284C7', fontWeight: 500, marginBottom: '6px' }}>
                          📍 {ev.location}
                        </div>
                        <p style={{ fontSize: '13px', color: '#475569', margin: 0, lineHeight: 1.5 }}>{ev.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ───────────────────────────────────────────────────────────── */}
          {/* TAB CONTENT: DESAFIOS */}
          {/* ───────────────────────────────────────────────────────────── */}
          {activeTab === 'desafios' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Filter controls */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '20px',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <input
                  type="text"
                  placeholder="Buscar desafio por título ou palavra-chave..."
                  value={challengeSearch}
                  onChange={e => setChallengeSearch(e.target.value)}
                  style={{
                    flex: 1,
                    minWidth: '240px',
                    padding: '10px 14px',
                    borderRadius: '6px',
                    border: '1px solid #CBD5E1',
                    fontSize: '13px',
                    outline: 'none',
                  }}
                />

                <select
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                  style={{
                    padding: '10px 14px',
                    borderRadius: '6px',
                    border: '1px solid #CBD5E1',
                    fontSize: '13px',
                    backgroundColor: '#FFFFFF',
                    outline: 'none',
                  }}
                >
                  {categories.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Challenges grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                {filteredChallenges.map(ch => (
                  <div
                    key={ch.id}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '12px',
                      padding: '24px',
                      border: '1px solid #E2E8F0',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                        <span
                          style={{
                            fontSize: '12px',
                            fontWeight: 700,
                            color: '#EA580C',
                            backgroundColor: '#FFF7ED',
                            padding: '4px 10px',
                            borderRadius: '20px',
                            border: '1px solid #FFEDD5',
                          }}
                        >
                          Desafio #{ch.number}
                        </span>
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 600,
                            color: '#0369A1',
                            backgroundColor: '#E0F2FE',
                            padding: '3px 8px',
                            borderRadius: '4px',
                          }}
                        >
                          {ch.secretaria}
                        </span>
                      </div>

                      <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', marginBottom: '10px', lineHeight: 1.4 }}>
                        {ch.title}
                      </h3>

                      <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5, marginBottom: '16px' }}>
                        {ch.description}
                      </p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid #F1F5F9' }}>
                      <span style={{ fontSize: '12px', color: '#64748B', fontWeight: 500 }}>
                        📁 {ch.category}
                      </span>
                      <button
                        onClick={() => {
                          setSelectedChallenge(ch)
                          setIsChallengeDetailModalOpen(true)
                        }}
                        style={{
                          padding: '6px 14px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: 600,
                          backgroundColor: '#0F2C59',
                          color: '#FFFFFF',
                          border: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        Ver detalhes
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* MODALS */}
      {/* ───────────────────────────────────────────────────────────── */}

      {/* Regulamento Modal */}
      {isRegulationModalOpen && (
        <div style={modalOverlayStyle}>
          <div style={{ ...modalBoxStyle, maxWidth: '650px' }}>
            <div style={modalHeaderStyle}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', margin: 0 }}>
                Regulamento Oficial — 3º Ciclo EITA
              </h3>
              <button onClick={() => setIsRegulationModalOpen(false)} style={closeButtonStyle}>✕</button>
            </div>
            <div style={{ padding: '20px', fontSize: '13px', color: '#334155', lineHeight: 1.6, maxHeight: '400px', overflowY: 'auto' }}>
              <p><strong>1. DO OBJETIVO:</strong> O presente Regulamento estabelece as regras e diretrizes para participação no 3º Ciclo de Inovação Aberta da Prefeitura do Recife (EITA Recife).</p>
              <p><strong>2. DAS ELEGIBILIDADES:</strong> Podem participar startups, empresas de base tecnológica e grupos de pesquisadores legalmente constituídos no Brasil.</p>
              <p><strong>3. DAS FASES:</strong> O processo compreende 3 macro fases: Desafios Públicos, Prototipagem e Desenvolvimento do Produto Mínimo Viável (MVP).</p>
              <p><strong>4. DA PREMIAÇÃO:</strong> As equipes selecionadas na fase final farão jus à premiação e ao direito de teste homologado junto aos órgãos municipais.</p>
            </div>
            <div style={modalFooterStyle}>
              <button
                onClick={() => {
                  setIsRegulationModalOpen(false)
                  showToast('Download do Regulamento Completo (PDF) iniciado!')
                }}
                style={{ ...primaryButtonStyle, backgroundColor: '#EA580C' }}
              >
                📥 Baixar Regulamento (PDF)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Links Úteis Modal */}
      {isLinksModalOpen && (
        <div style={modalOverlayStyle}>
          <div style={{ ...modalBoxStyle, maxWidth: '550px' }}>
            <div style={modalHeaderStyle}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', margin: 0 }}>
                Links Úteis & Recursos
              </h3>
              <button onClick={() => setIsLinksModalOpen(false)} style={closeButtonStyle}>✕</button>
            </div>
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href="https://discord.gg/coreto"
                target="_blank"
                rel="noreferrer"
                style={linkCardStyle}
              >
                <span>💬 Servidor Oficial do Discord</span>
                <span>→</span>
              </a>
              <a
                href="https://drive.google.com"
                target="_blank"
                rel="noreferrer"
                style={linkCardStyle}
              >
                <span>📁 Pasta Pública no Google Drive</span>
                <span>→</span>
              </a>
              <button
                onClick={() => {
                  setIsLinksModalOpen(false)
                  showToast('Modelo de Pitch Deck (PPTX) baixado com sucesso!')
                }}
                style={{ ...linkCardStyle, background: 'none', border: '1px solid #CBD5E1', cursor: 'pointer', textAlign: 'left' }}
              >
                <span>📊 Template de Pitch Deck Oficial</span>
                <span>📥</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Discord Modal */}
      {isDiscordModalOpen && (
        <div style={modalOverlayStyle}>
          <div style={{ ...modalBoxStyle, maxWidth: '500px', textAlign: 'center' }}>
            <div style={{ padding: '32px 24px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>💬</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Canal Interativo Discord EITA
              </h3>
              <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.5, marginBottom: '24px' }}>
                Tire suas dúvidas diretamente com os especialistas técnicos de cada secretaria da Prefeitura do Recife e interaja com outras startups participantes.
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <button
                  onClick={() => {
                    setIsDiscordModalOpen(false)
                    showToast('Redirecionando para a comunidade do Discord...')
                  }}
                  style={{ ...primaryButtonStyle, backgroundColor: '#5865F2' }}
                >
                  Entrar no Discord
                </button>
                <button
                  onClick={() => setIsDiscordModalOpen(false)}
                  style={{ padding: '10px 18px', borderRadius: '6px', border: '1px solid #CBD5E1', backgroundColor: '#FFFFFF', cursor: 'pointer', fontSize: '13px' }}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Inscrição Modal */}
      {isInscriptionModalOpen && (
        <div style={modalOverlayStyle}>
          <div style={{ ...modalBoxStyle, maxWidth: '600px' }}>
            <div style={modalHeaderStyle}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', margin: 0 }}>
                Inscrição de Solução no 3º Ciclo EITA
              </h3>
              <button onClick={() => setIsInscriptionModalOpen(false)} style={closeButtonStyle}>✕</button>
            </div>
            <form onSubmit={handleInscriptionSubmit} style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={labelStyle}>Nome da Startup / Equipe *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: TechRecife Soluções"
                  value={inscriptionStartupName}
                  onChange={e => setInscriptionStartupName(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>CNPJ ou CPF do Responsável *</label>
                <input
                  type="text"
                  required
                  placeholder="00.000.000/0001-00"
                  value={inscriptionCnpj}
                  onChange={e => setInscriptionCnpj(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Selecione o Desafio *</label>
                <select
                  value={inscriptionSelectedChallengeId}
                  onChange={e => setInscriptionSelectedChallengeId(e.target.value)}
                  style={inputStyle}
                >
                  {EITA_CHALLENGES.map(ch => (
                    <option key={ch.id} value={ch.id}>
                      Desafio #{ch.number} — {ch.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={labelStyle}>Link do Pitch / Apresentação (Google Drive / YouTube) *</label>
                <input
                  type="url"
                  required
                  placeholder="https://..."
                  value={inscriptionPitchUrl}
                  onChange={e => setInscriptionPitchUrl(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div style={modalFooterStyle}>
                <button type="button" onClick={() => setIsInscriptionModalOpen(false)} style={{ padding: '10px 18px', borderRadius: '6px', border: '1px solid #CBD5E1', backgroundColor: '#FFFFFF', cursor: 'pointer', fontSize: '13px' }}>
                  Cancelar
                </button>
                <button type="submit" style={{ ...primaryButtonStyle, backgroundColor: '#EA580C' }}>
                  Enviar Inscrição
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {isContactModalOpen && (
        <div style={modalOverlayStyle}>
          <div style={{ ...modalBoxStyle, maxWidth: '550px' }}>
            <div style={modalHeaderStyle}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', margin: 0 }}>
                Fale Conosco — Suporte EITA
              </h3>
              <button onClick={() => setIsContactModalOpen(false)} style={closeButtonStyle}>✕</button>
            </div>
            <form onSubmit={handleContactSubmit} style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={labelStyle}>Seu Nome *</label>
                <input
                  type="text"
                  required
                  placeholder="Nome completo"
                  value={contactName}
                  onChange={e => setContactName(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Seu E-mail *</label>
                <input
                  type="email"
                  required
                  placeholder="seuemail@exemplo.com"
                  value={contactEmail}
                  onChange={e => setContactEmail(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Assunto *</label>
                <input
                  type="text"
                  required
                  value={contactSubject}
                  onChange={e => setContactSubject(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Mensagem *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Escreva sua dúvida ou solicitação..."
                  value={contactMessage}
                  onChange={e => setContactMessage(e.target.value)}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              <div style={modalFooterStyle}>
                <button type="button" onClick={() => setIsContactModalOpen(false)} style={{ padding: '10px 18px', borderRadius: '6px', border: '1px solid #CBD5E1', backgroundColor: '#FFFFFF', cursor: 'pointer', fontSize: '13px' }}>
                  Cancelar
                </button>
                <button type="submit" style={{ ...primaryButtonStyle, backgroundColor: '#0F2C59' }}>
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Challenge Detail Modal */}
      {isChallengeDetailModalOpen && selectedChallenge && (
        <div style={modalOverlayStyle}>
          <div style={{ ...modalBoxStyle, maxWidth: '650px' }}>
            <div style={modalHeaderStyle}>
              <div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#EA580C' }}>
                  Desafio #{selectedChallenge.number} • {selectedChallenge.secretaria}
                </span>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', margin: '4px 0 0 0' }}>
                  {selectedChallenge.title}
                </h3>
              </div>
              <button onClick={() => setIsChallengeDetailModalOpen(false)} style={closeButtonStyle}>✕</button>
            </div>
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '13px', color: '#334155', maxHeight: '450px', overflowY: 'auto' }}>
              <div>
                <strong style={{ color: '#0F172A' }}>Descrição Geral:</strong>
                <p style={{ marginTop: '4px', lineHeight: 1.5 }}>{selectedChallenge.description}</p>
              </div>

              <div>
                <strong style={{ color: '#0F172A' }}>Problema Enfrentado:</strong>
                <p style={{ marginTop: '4px', lineHeight: 1.5 }}>{selectedChallenge.problem}</p>
              </div>

              <div>
                <strong style={{ color: '#0F172A' }}>Solução Esperada:</strong>
                <p style={{ marginTop: '4px', lineHeight: 1.5 }}>{selectedChallenge.expectedSolution}</p>
              </div>

              <div>
                <strong style={{ color: '#0F172A' }}>Impacto Estimado:</strong>
                <p style={{ marginTop: '4px', lineHeight: 1.5 }}>{selectedChallenge.impact}</p>
              </div>

              <div>
                <strong style={{ color: '#0F172A' }}>Público Alvo:</strong>
                <p style={{ marginTop: '4px', lineHeight: 1.5 }}>{selectedChallenge.targetPublic}</p>
              </div>
            </div>
            <div style={modalFooterStyle}>
              <button
                onClick={() => setIsChallengeDetailModalOpen(false)}
                style={{ padding: '10px 18px', borderRadius: '6px', border: '1px solid #CBD5E1', backgroundColor: '#FFFFFF', cursor: 'pointer', fontSize: '13px' }}
              >
                Fechar
              </button>
              <button
                onClick={() => {
                  setIsChallengeDetailModalOpen(false)
                  setInscriptionSelectedChallengeId(selectedChallenge.id)
                  setIsInscriptionModalOpen(true)
                }}
                style={{ ...primaryButtonStyle, backgroundColor: '#EA580C' }}
              >
                🚀 Inscrever Solução Neste Desafio
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Shared Inline Style Helpers ─────────────────────────────────────

const modalOverlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(15, 23, 42, 0.6)',
  backdropFilter: 'blur(4px)',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
}

const modalBoxStyle: React.CSSProperties = {
  backgroundColor: '#FFFFFF',
  borderRadius: '12px',
  width: '100%',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  overflow: 'hidden',
}

const modalHeaderStyle: React.CSSProperties = {
  padding: '16px 20px',
  borderBottom: '1px solid #E2E8F0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#F8FAFC',
}

const modalFooterStyle: React.CSSProperties = {
  padding: '16px 20px',
  borderTop: '1px solid #E2E8F0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '12px',
  backgroundColor: '#F8FAFC',
}

const closeButtonStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  fontSize: '18px',
  color: '#64748B',
  cursor: 'pointer',
}

const primaryButtonStyle: React.CSSProperties = {
  padding: '10px 20px',
  borderRadius: '6px',
  fontSize: '13px',
  fontWeight: 600,
  color: '#FFFFFF',
  border: 'none',
  cursor: 'pointer',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '12px',
  fontWeight: 700,
  color: '#334155',
  marginBottom: '6px',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: '6px',
  border: '1px solid #CBD5E1',
  fontSize: '13px',
  outline: 'none',
  boxSizing: 'border-box',
}

const linkCardStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '14px 16px',
  borderRadius: '8px',
  backgroundColor: '#F8FAFC',
  border: '1px solid #E2E8F0',
  color: '#0F172A',
  fontWeight: 600,
  fontSize: '13px',
  textDecoration: 'none',
}

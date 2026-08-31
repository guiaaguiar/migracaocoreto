import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import bannerMarcoZero from '../../../assets/marco-zero-recife.avif'
import swcLogo from '../../../assets/swc-logo.avif'

interface CalendarEvent {
  date: string
  title: string
  highlight?: boolean
}

interface SpeakerItem {
  id: string
  name: string
  role: string
  company: string
  imageUrl: string
  bio: string
  status: 'confirmado' | 'em-breve'
}

interface FaqItem {
  id: string
  question: string
  answer: string
}

const CALENDAR_ITEMS: CalendarEvent[] = [
  { date: '26/05', title: 'Abertura pré-inscrição' },
  { date: '20/07', title: 'Deadline para aplicar para Recife' },
  { date: '25/07', title: 'Anuncio top 8' },
  { date: '08/08', title: 'Final Brasileira em Recife', highlight: true },
]

const GRAND_FINALE_EVENT: CalendarEvent = {
  date: '15 a 17/10',
  title: 'Grand Finale no Vale do Silício (Califórnia, EUA)',
  highlight: true,
}

const SPEAKERS: SpeakerItem[] = [
  {
    id: 'sp-1',
    name: 'Em breve',
    role: 'Avaliador & Palestrante',
    company: 'Pegasus Tech Ventures',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'Investidor convidado especializado em scale-ups globais e captação de recursos no Vale do Silício.',
    status: 'em-breve',
  },
  {
    id: 'sp-2',
    name: 'Em breve',
    role: 'Avaliador & Palestrante',
    company: 'Porto Digital / Recife',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'Líder do ecossistema de tecnologia e inovação com atuação em governança corporativa e Venture Capital.',
    status: 'em-breve',
  },
  {
    id: 'sp-3',
    name: 'Em breve',
    role: 'Avaliador & Palestrante',
    company: 'Comunidade Manguezal',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'Fundador e mentor ativo do ecossistema pernambucano de startups e inovação aberta.',
    status: 'em-breve',
  },
  {
    id: 'sp-4',
    name: 'Em breve',
    role: 'Avaliador & Palestrante',
    company: 'Global VC Partner',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'Executiva de Venture Capital internacional focada em startups DeepTech, FinTech e AgTech.',
    status: 'em-breve',
  },
]

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'O que a startup vencedora da Startup World Cup Recife recebe?',
    answer:
      'A startup vencedora da etapa regional em Recife garante o selo oficial Top 1 Startup World Cup Recife, mentoria intensiva de pitch em inglês, visibilidade frente a fundos globais de investimento e a vaga para representar o Brasil na Grand Finale no Vale do Silício (Califórnia, EUA), concorrendo ao prêmio principal de 1.000.000 USD em investimento.',
  },
  {
    id: 'faq-2',
    question: 'O que o vencedor da Grand Finale na Califórnia recebe?',
    answer:
      'O vencedor global da Grand Finale em San Francisco / Vale do Silício recebe US$ 1.000.000 (um milhão de dólares) na forma de aporte de investimento direto da Pegasus Tech Ventures.',
  },
  {
    id: 'faq-3',
    question: 'Qual o formato dos pitchs?',
    answer:
      'Os pitches da etapa regional Recife têm formato presencial de 4 minutos de apresentação em inglês + 2 minutos de perguntas e respostas (Q&A) conduzidos pela banca de jurados e investidores.',
  },
  {
    id: 'faq-4',
    question: 'Qual o estágio de maturidade das startups?',
    answer:
      'A competição recebe startups desde early-stage com MVP validado até scale-ups em tração e expansão. O requisito principal é possuir um modelo de negócios escalável com potencial global.',
  },
  {
    id: 'faq-5',
    question: 'Tem um modelo de apresentação?',
    answer:
      'Sim, disponibilizamos um template oficial de 10 a 12 slides cobrindo: Problema, Solução, Tamanho de Mercado, Tração/Métricas, Modelo de Negócios, Diferencial Tecnológico e Equipe.',
  },
  {
    id: 'faq-6',
    question: 'Quem vai avaliar minha startup?',
    answer:
      'A banca examinadora é formada por parceiros da Pegasus Tech Ventures, investidores anjo e de Venture Capital, executivos do Porto Digital e fundadores de startups de alto impacto.',
  },
  {
    id: 'faq-7',
    question: 'É obrigatório tuitar após o envio da minha inscrição?',
    answer:
      'Não é obrigatório, mas encorajamos a divulgação nas redes sociais com a hashtag #StartupWorldCupRecife para engajamento e apoio da comunidade.',
  },
  {
    id: 'faq-8',
    question: 'Já levantamos algum capital. Há alguma restrição para a inscrição?',
    answer:
      'Não há restrição de capital já captado. Startups Bootstrap, Anjo, Pre-Seed, Seed e Series A são elegíveis.',
  },
  {
    id: 'faq-9',
    question: 'É possível assistir a Grand Finale no Vale do Silício sem ganhar a etapa regional Recife?',
    answer:
      'Sim! O evento global na Califórnia é aberto ao público e os ingressos podem ser adquiridos no site oficial da Startup World Cup.',
  },
  {
    id: 'faq-10',
    question: 'Onde e quando ocorrerá a Startup World Cup?',
    answer:
      'A final regional de Recife ocorrerá em 08 de Agosto de 2026 no ecossistema do Porto Digital em Recife-PE. A Grand Finale será realizada de 15 a 17 de Outubro no Vale do Silício, EUA.',
  },
  {
    id: 'faq-11',
    question: 'O que fazer após a pré-inscrição?',
    answer:
      'Após preencher a pré-inscrição no CORETO, você receberá a confirmação por e-mail com instruções para envio do pitch deck em PDF e vídeo de demonstração.',
  },
  {
    id: 'faq-12',
    question: 'Ganhei a regional Startup World Cup Recife, e agora?',
    answer:
      'Parabéns! Nossa equipe de aceleração e internacionalização acompanhará a startup campeã com preparação intensa de pitch, conexão com investidores americanos e suporte para a viagem ao Vale do Silício.',
  },
]

const SEGMENTS = [
  'Biotechs',
  'Healthtechs',
  'Agtechs',
  'Cleantechs e Energytechs',
  'Fintechs',
  'Smart Cities e Govtech',
  'Deeptechs & Outras tecnologias',
]

export default function StartupWorldCupPage() {
  const [activeTab, setActiveTab] = useState<'sobre' | 'inscricao'>('sobre')
  const [openFaqId, setOpenFaqId] = useState<string | null>(null)
  const [selectedSpeaker, setSelectedSpeaker] = useState<SpeakerItem | null>(null)
  const [showPreInscricaoModal, setShowPreInscricaoModal] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  // Form State
  const [formData, setFormData] = useState({
    founderName: '',
    email: '',
    phone: '',
    startupName: '',
    segment: 'Deeptechs & Outras tecnologias',
    deckUrl: '',
    solutionSummary: '',
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const triggerToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage(null)
    }, 4000)
  }

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => (prev === id ? null : id))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.founderName || !formData.email || !formData.startupName) {
      triggerToast('Por favor, preencha os campos obrigatórios (*).')
      return
    }
    setFormSubmitted(true)
    triggerToast('🎉 Pré-inscrição enviada com sucesso para a Startup World Cup 2025 Recife!')
  }

  const resetForm = () => {
    setFormData({
      founderName: '',
      email: '',
      phone: '',
      startupName: '',
      segment: 'Deeptechs & Outras tecnologias',
      deckUrl: '',
      solutionSummary: '',
    })
    setFormSubmitted(false)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
        fontFamily: "'DM Sans', 'Inter', system-ui, sans-serif",
        color: '#0f172a',
      }}
    >
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar activeItem="meus-programas" />
        <main style={{ flex: 1, padding: '24px 36px 60px 36px', overflowY: 'auto' }}>

        {/* ───────────────────────────────────────────────────────────── */}
        {/* BANNER PRINCIPAL DA STARTUP WORLD CUP 2025 RECIFE */}
        {/* ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 20px -2px rgba(0,0,0,0.06)',
            marginBottom: '24px',
            border: '1px solid #e2e8f0',
          }}
        >
          {/* Header Image Cover */}
          <div
            style={{
              height: '240px',
              backgroundImage:
                `linear-gradient(180deg, rgba(14, 165, 233, 0.15) 0%, rgba(15, 23, 42, 0.55) 100%), url(${bannerMarcoZero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 40%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Center Emblem Logo */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 24px',
                  border: '3px solid #0284c7',
                  maxHeight: '110px',
                }}
              >
                <img
                  src={swcLogo}
                  alt="Startup World Cup Logo"
                  style={{
                    maxHeight: '100px',
                    maxWidth: '260px',
                    objectFit: 'contain',
                  }}
                />
              </div>

              {/* Pegasus tech ventures small ribbon */}
              <div
                style={{
                  marginTop: '-10px',
                  backgroundColor: '#0284c7',
                  color: '#ffffff',
                  fontSize: '10px',
                  fontWeight: 700,
                  padding: '4px 16px',
                  borderRadius: '12px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                }}
              >
                Pegasus Tech Ventures
              </div>
            </div>
          </div>

          {/* Banner Text Block */}
          <div style={{ padding: '24px 32px 32px 32px', textAlign: 'center' }}>
            <h1
              style={{
                fontSize: '32px',
                fontWeight: 800,
                color: '#0284c7',
                margin: '0 0 6px 0',
                letterSpacing: '-0.02em',
              }}
            >
              Startup World Cup 2025
            </h1>
            <h2
              style={{
                fontSize: '24px',
                fontWeight: 700,
                color: '#0284c7',
                margin: '0 0 16px 0',
              }}
            >
              Regional Recife
            </h2>

            <p style={{ fontSize: '15px', color: '#64748b', margin: '0 0 4px 0' }}>
              A maior competição de startups no mundo.
            </p>
            <p style={{ fontSize: '14px', fontWeight: 600, color: '#0ea5e9', margin: 0 }}>
              1.000.000 USD na Grande Final no Vale do Silício
            </p>
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────────── */}
        {/* ABA NAVEGAÇÃO SUB-TAB (Sobre / Pré-inscrição!) */}
        {/* ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            marginBottom: '36px',
          }}
        >
          <button
            onClick={() => setActiveTab('sobre')}
            style={{
              padding: '14px 24px',
              borderRadius: '8px',
              border: activeTab === 'sobre' ? 'none' : '1px solid #0284c7',
              backgroundColor: activeTab === 'sobre' ? '#030712' : '#ffffff',
              color: activeTab === 'sobre' ? '#ffffff' : '#0284c7',
              fontSize: '15px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: activeTab === 'sobre' ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
            }}
          >
            Sobre a Competição
          </button>

          <button
            onClick={() => setActiveTab('inscricao')}
            style={{
              padding: '14px 24px',
              borderRadius: '8px',
              border: '1px solid #0284c7',
              backgroundColor: activeTab === 'inscricao' ? '#0284c7' : '#ffffff',
              color: activeTab === 'inscricao' ? '#ffffff' : '#0284c7',
              fontSize: '15px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: activeTab === 'inscricao' ? '0 4px 12px rgba(2, 132, 199, 0.25)' : 'none',
            }}
          >
            Formulário de Pré-inscrição
          </button>

          <Link
            to="/legacy/startupworldcup-inscricoes"
            style={{
              padding: '14px 24px',
              borderRadius: '8px',
              backgroundColor: '#7C3AED',
              color: '#ffffff',
              fontSize: '15px',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3)',
            }}
          >
            <span>📊 Painel de Inscrições (23)</span>
            <span>↗</span>
          </Link>
        </div>

        {/* ───────────────────────────────────────────────────────────── */}
        {/* CONTEÚDO DAS ABAS */}
        {/* ───────────────────────────────────────────────────────────── */}
        {activeTab === 'inscricao' ? (
          /* ───────────────────────────────────────────────────────────── */
          /* TELA DE PRÉ-INSCRIÇÃO (Fiel à imagem enviada pelo usuário) */
          /* ───────────────────────────────────────────────────────────── */
          <div
            style={{
              backgroundColor: '#fafafa',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              padding: '36px 44px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              marginBottom: '48px',
            }}
          >
            {/* Título Principal com Foguete */}
            <h2
              style={{
                fontSize: '17px',
                fontWeight: 700,
                color: '#1e1b4b',
                margin: '0 0 24px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>🚀</span>
              Bem-vindo ao formulário de pré-inscrição do Startup World Cup 2025!
            </h2>

            {/* Texto de introdução */}
            <p
              style={{
                fontSize: '13px',
                color: '#475569',
                lineHeight: 1.6,
                marginBottom: '20px',
              }}
            >
              Você está prestes a dar o primeiro passo para representar sua startup em uma das maiores competições de inovação do mundo. Esta é a sua chance de mostrar o valor da sua solução, se conectar com investidores globais e colocar sua ideia no palco principal da inovação.
            </p>

            {/* Linha de destaque com raio */}
            <p
              style={{
                fontSize: '13px',
                color: '#475569',
                lineHeight: 1.6,
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '6px',
              }}
            >
              <span>⚡</span>
              <span>
                <strong>E tem mais:</strong> ao preencher este formulário, você também entra para o Coreto, a plataforma que conecta talentos, startups e instituições em todo o ecossistema de inovação. Por lá, você poderá:
              </span>
            </p>

            {/* Lista de benefícios */}
            <ul
              style={{
                listStyle: 'none',
                paddingLeft: 0,
                marginTop: 0,
                marginBottom: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                fontSize: '13px',
                color: '#475569',
              }}
            >
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#0ea5e9' }}>▪</span>
                Ampliar sua rede de contatos estratégicos;
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#0ea5e9' }}>▪</span>
                Participar de desafios e oportunidades exclusivas;
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#0ea5e9' }}>▪</span>
                Mostrar sua trajetória em um portfólio validado;
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#0ea5e9' }}>▪</span>
                Receber conexões inteligentes com programas, eventos e parceiros.
              </li>
            </ul>

            {/* Mensagem de atenção */}
            <div style={{ marginBottom: '24px', fontSize: '13px', color: '#475569', lineHeight: 1.5 }}>
              <p style={{ margin: '0 0 4px 0' }}>
                <strong>Preencha com atenção — estamos aqui para te ajudar em cada etapa!</strong>
              </p>
              <p style={{ margin: 0 }}>
                Vamos juntos transformar sua startup em um destaque global.
              </p>
            </div>

            {/* Contato pelo WhatsApp */}
            <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '40px' }}>
              Estamos à disposição para auxiliá-lo(a) em caso de dúvidas, converse pelo whats <strong>81 996894297</strong>
            </p>

            {/* Linha de botões inferior */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Botão de Inscrições encerradas */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                  onClick={() => setShowPreInscricaoModal(true)}
                  style={{
                    width: '100%',
                    maxWidth: '840px',
                    padding: '12px 24px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #1e1b4b',
                    borderRadius: '4px',
                    color: '#1e1b4b',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Inscrições encerradas ‣
                </button>
              </div>

              {/* Botão Anterior (Cyan) */}
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <button
                  onClick={() => setActiveTab('sobre')}
                  style={{
                    padding: '10px 36px',
                    backgroundColor: '#00b4d8',
                    border: 'none',
                    borderRadius: '4px',
                    color: '#ffffff',
                    fontSize: '14px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  ‹ Anterior
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ───────────────────────────────────────────────────────────── */
          /* VISÃO SOBRE (CONTEÚDO PRINCIPAL) */
          /* ───────────────────────────────────────────────────────────── */
          <>
            {/* ───────────────────────────────────────────────────────────── */}
            {/* SEÇÃO 1: SOBRE DA COMPETIÇÃO */}
            {/* ───────────────────────────────────────────────────────────── */}
            <section style={{ marginBottom: '48px' }}>
              <h2
                style={{
                  fontSize: '32px',
                  fontWeight: 800,
                  color: '#0284c7',
                  textAlign: 'center',
                  marginBottom: '28px',
                }}
              >
                Sobre
              </h2>

              <div
                style={{
                  maxWidth: '840px',
                  margin: '0 auto',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                  backgroundColor: '#000000',
                  position: 'relative',
                }}
              >
                {/* Embed Video Block / Youtube Player */}
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    src="https://www.youtube.com/embed/mt-RNCI7yOI"
                    title="Startup World Cup 2025 Trailer"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none',
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </section>

            {/* ───────────────────────────────────────────────────────────── */}
            {/* SEÇÃO 2: PORQUE PARTICIPAR? + SEGMENTOS */}
            {/* ───────────────────────────────────────────────────────────── */}
            <section style={{ marginBottom: '56px' }}>
              <h2
                style={{
                  fontSize: '32px',
                  fontWeight: 800,
                  color: '#0284c7',
                  textAlign: 'center',
                  marginBottom: '36px',
                }}
              >
                Porque participar?
              </h2>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.4fr 1fr',
                  gap: '40px',
                  alignItems: 'center',
                }}
              >
                {/* Benefícios (Lista à esquerda) */}
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    fontSize: '14px',
                    color: '#334155',
                    lineHeight: 1.6,
                  }}
                >
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#0284c7', fontWeight: 900 }}>•</span>
                    <span>
                      O vencedor no Recife representará o Brasil nos Estados Unidos por um investimento de{' '}
                      <strong>1 milhão de dólares</strong>;
                    </span>
                  </li>

                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#0284c7', fontWeight: 900 }}>•</span>
                    <span>Selo top 10 Startup World Cup Recife</span>
                  </li>

                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#0284c7', fontWeight: 900 }}>•</span>
                    <span>Visibilidade perante investidores</span>
                  </li>

                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#0284c7', fontWeight: 900 }}>•</span>
                    <span>Aprimorar o pitch em inglês</span>
                  </li>

                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#0284c7', fontWeight: 900 }}>•</span>
                    <span>Presença em eventos com investidores</span>
                  </li>

                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#0284c7', fontWeight: 900 }}>•</span>
                    <span>Acesso ao evento Mangue Bit da comunidade Manguezal</span>
                  </li>

                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#0284c7', fontWeight: 900 }}>•</span>
                    <span>Conhecer o ecossistema Porto Digital – Recife</span>
                  </li>
                </ul>

                {/* Card Azul de Segmentos (à direita) */}
                <div
                  style={{
                    backgroundColor: '#0ea5e9',
                    borderRadius: '16px',
                    padding: '28px 24px',
                    color: '#ffffff',
                    boxShadow: '0 8px 24px -4px rgba(14, 165, 233, 0.4)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '18px',
                      fontWeight: 800,
                      marginBottom: '16px',
                    }}
                  >
                    <span style={{ fontSize: '18px' }}>💎</span>
                    Segmentos
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
                    {SEGMENTS.map((seg, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ opacity: 0.8, fontSize: '10px' }}>▪</span>
                        <span>{seg}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ───────────────────────────────────────────────────────────── */}
            {/* SEÇÃO 3: CALENDÁRIO */}
            {/* ───────────────────────────────────────────────────────────── */}
            <section style={{ marginBottom: '56px' }}>
              <h2
                style={{
                  fontSize: '32px',
                  fontWeight: 800,
                  color: '#0284c7',
                  textAlign: 'center',
                  marginBottom: '32px',
                }}
              >
                Calendário
              </h2>

              {/* Grid de 4 datas na primeira linha */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '16px',
                  marginBottom: '16px',
                }}
              >
                {CALENDAR_ITEMS.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#e0f2fe',
                      borderRadius: '12px',
                      padding: '24px 20px',
                      minHeight: '120px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '22px',
                        fontWeight: 800,
                        color: '#0f172a',
                        marginBottom: '8px',
                      }}
                    >
                      {item.date}
                    </div>
                    <div style={{ fontSize: '13px', color: '#334155', fontWeight: 500, lineHeight: 1.4 }}>
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>

              {/* Segunda linha: Card largo Grand Finale */}
              <div
                style={{
                  backgroundColor: '#e0f2fe',
                  borderRadius: '12px',
                  padding: '24px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '22px',
                    fontWeight: 800,
                    color: '#0f172a',
                    marginBottom: '8px',
                  }}
                >
                  {GRAND_FINALE_EVENT.date}
                </div>
                <div style={{ fontSize: '14px', color: '#334155', fontWeight: 500 }}>
                  {GRAND_FINALE_EVENT.title}
                </div>
              </div>
            </section>

            {/* ───────────────────────────────────────────────────────────── */}
            {/* SEÇÃO 4: AVALIADORES E PALESTRANTES */}
            {/* ───────────────────────────────────────────────────────────── */}
            <section style={{ marginBottom: '56px' }}>
              <h2
                style={{
                  fontSize: '32px',
                  fontWeight: 800,
                  color: '#0284c7',
                  textAlign: 'center',
                  marginBottom: '36px',
                }}
              >
                Avaliadores e Palestrantes
              </h2>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '24px',
                }}
              >
                {SPEAKERS.map(sp => (
                  <div
                    key={sp.id}
                    onClick={() => setSelectedSpeaker(sp)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <div
                      style={{
                        width: '130px',
                        height: '130px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        marginBottom: '14px',
                        border: '3px solid #cbd5e1',
                        boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
                        transition: 'transform 0.2s ease',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                      <img
                        src={sp.imageUrl}
                        alt={sp.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>

                    <div
                      style={{
                        fontSize: '15px',
                        fontWeight: 700,
                        color: '#0f172a',
                        marginBottom: '2px',
                      }}
                    >
                      {sp.name}
                    </div>

                    <div style={{ fontSize: '13px', color: '#64748b' }}>{sp.role}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* ───────────────────────────────────────────────────────────── */}
            {/* SEÇÃO 5: REALIZAÇÃO, APOIO E PARCEIROS */}
            {/* ───────────────────────────────────────────────────────────── */}
            <section style={{ marginBottom: '60px', textAlign: 'center' }}>
              {/* Realização */}
              <div style={{ marginBottom: '40px' }}>
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: 800,
                    color: '#0284c7',
                    marginBottom: '20px',
                  }}
                >
                  Realização
                </h3>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '40px',
                    flexWrap: 'wrap',
                  }}
                >
                  {/* Logo Traciona */}
                  <div style={{ fontWeight: 900, fontSize: '18px', color: '#0f172a', letterSpacing: '0.1em' }}>
                    TRACIONA
                  </div>

                  {/* Logo Pegasus Tech Ventures */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        backgroundColor: '#0ea5e9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontWeight: 'bold',
                        fontSize: '20px',
                      }}
                    >
                      🦄
                    </div>
                  </div>

                  {/* Logo Prefeitura do Recife */}
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '12px',
                      border: '2px solid #0284c7',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0284c7',
                      fontWeight: 900,
                      fontSize: '11px',
                      lineHeight: 1,
                      padding: '4px',
                    }}
                  >
                    <span>🏰</span>
                    <span style={{ marginTop: '2px' }}>RECIFE</span>
                  </div>
                </div>
              </div>

              {/* Apoio */}
              <div style={{ marginBottom: '40px' }}>
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: 800,
                    color: '#0284c7',
                    marginBottom: '20px',
                  }}
                >
                  Apoio
                </h3>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '24px',
                  }}
                >
                  {/* Manguezal */}
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: '#0f172a',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '9px',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      padding: '6px',
                    }}
                  >
                    MANGUEZAL
                  </div>

                  {/* Mangue.bit */}
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: '#0f172a',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '9px',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      padding: '6px',
                    }}
                  >
                    MANGUE.BIT
                  </div>
                </div>
              </div>

              {/* Parceiros */}
              <div>
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: 800,
                    color: '#0284c7',
                    marginBottom: '20px',
                  }}
                >
                  Parceiros
                </h3>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '32px',
                  }}
                >
                  {/* Criarce */}
                  <div
                    style={{
                      width: '60px',
                      height: '52px',
                      clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                      backgroundColor: '#1e293b',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '10px',
                      fontWeight: 'bold',
                    }}
                  >
                    criarce
                  </div>

                  {/* GR */}
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      border: '3px solid #eab308',
                      color: '#eab308',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      fontWeight: 900,
                    }}
                  >
                    GR
                  </div>
                </div>
              </div>
            </section>

            {/* ───────────────────────────────────────────────────────────── */}
            {/* SEÇÃO 6: FAQ (PERGUNTAS FREQUENTES) */}
            {/* ───────────────────────────────────────────────────────────── */}
            <section style={{ marginBottom: '60px', maxWidth: '880px', margin: '0 auto 60px auto' }}>
              <h2
                style={{
                  fontSize: '32px',
                  fontWeight: 800,
                  color: '#0284c7',
                  textAlign: 'center',
                  marginBottom: '32px',
                }}
              >
                FAQ
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {FAQ_ITEMS.map(faq => {
                  const isOpen = openFaqId === faq.id
                  return (
                    <div
                      key={faq.id}
                      style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '10px',
                        border: '1px solid #e2e8f0',
                        overflow: 'hidden',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '16px 20px',
                          backgroundColor: 'transparent',
                          border: 'none',
                          textAlign: 'left',
                          cursor: 'pointer',
                          fontSize: '15px',
                          fontWeight: 600,
                          color: '#1e293b',
                        }}
                      >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span style={{ color: '#0284c7', fontSize: '14px' }}>
                            {isOpen ? '˅' : '˅'}
                          </span>
                          {faq.question}
                        </span>
                        <span style={{ fontSize: '16px', color: '#64748b' }}>{isOpen ? '▲' : '▼'}</span>
                      </button>

                      {isOpen && (
                        <div
                          style={{
                            padding: '0 20px 20px 48px',
                            fontSize: '14px',
                            color: '#475569',
                            lineHeight: 1.6,
                            borderTop: '1px solid #f1f5f9',
                            paddingTop: '12px',
                          }}
                        >
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </section>

            {/* ───────────────────────────────────────────────────────────── */}
            {/* SEÇÃO 7: ENTRE EM CONTATO! */}
            {/* ───────────────────────────────────────────────────────────── */}
            <section style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
              <h2
                style={{
                  fontSize: '32px',
                  fontWeight: 800,
                  color: '#0284c7',
                  marginBottom: '24px',
                }}
              >
                Entre em contato!
              </h2>

              <a
                href="https://www.startupworldcup.io/recife-regional"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  backgroundColor: '#0ea5e9',
                  color: '#ffffff',
                  borderRadius: '12px',
                  padding: '20px 24px',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: 600,
                  boxShadow: '0 4px 16px rgba(14, 165, 233, 0.3)',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                🌐 https://www.startupworldcup.io/recife-regional
              </a>
            </section>
          </>
        )}

        {/* ───────────────────────────────────────────────────────────── */}
        {/* MODAL DE PALESTRANTE / AVALIADOR */}
        {/* ───────────────────────────────────────────────────────────── */}
        {selectedSpeaker && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.65)',
              backdropFilter: 'blur(4px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
            onClick={() => setSelectedSpeaker(null)}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                maxWidth: '480px',
                width: '100%',
                padding: '32px',
                position: 'relative',
                boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)',
                textAlign: 'center',
              }}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedSpeaker(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  border: 'none',
                  backgroundColor: 'transparent',
                  fontSize: '20px',
                  cursor: 'pointer',
                  color: '#94a3b8',
                }}
              >
                ✕
              </button>

              <img
                src={selectedSpeaker.imageUrl}
                alt={selectedSpeaker.name}
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  margin: '0 auto 16px auto',
                  border: '4px solid #0284c7',
                }}
              />

              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0' }}>
                {selectedSpeaker.name}
              </h3>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#0284c7', marginBottom: '4px' }}>
                {selectedSpeaker.role}
              </div>
              <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '16px' }}>
                {selectedSpeaker.company}
              </div>

              <p style={{ fontSize: '14px', color: '#334155', lineHeight: 1.5, marginBottom: '24px' }}>
                {selectedSpeaker.bio}
              </p>

              <button
                onClick={() => setSelectedSpeaker(null)}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  backgroundColor: '#0284c7',
                  color: '#ffffff',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
              >
                Fechar
              </button>
            </div>
          </div>
        )}

        {/* ───────────────────────────────────────────────────────────── */}
        {/* MODAL DE FORMULÁRIO INTERATIVO DE PRÉ-INSCRIÇÃO */}
        {/* ───────────────────────────────────────────────────────────── */}
        {showPreInscricaoModal && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.7)',
              backdropFilter: 'blur(4px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
            onClick={() => setShowPreInscricaoModal(false)}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                maxWidth: '600px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '32px',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
              }}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setShowPreInscricaoModal(false)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  border: 'none',
                  backgroundColor: '#f1f5f9',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  fontSize: '16px',
                  cursor: 'pointer',
                  color: '#64748b',
                }}
              >
                ✕
              </button>

              <div style={{ marginBottom: '24px' }}>
                <span
                  style={{
                    backgroundColor: '#e0f2fe',
                    color: '#0284c7',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                  }}
                >
                  Regional Recife 2025
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginTop: '10px', marginBottom: '6px' }}>
                  Formulário de Pré-Inscrição
                </h2>
                <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>
                  Preencha os dados da sua startup para submissão à banca examinadora do Startup World Cup 2025.
                </p>
              </div>

              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '32px 16px' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏆</div>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0284c7', marginBottom: '8px' }}>
                    Pré-inscrição Confirmada!
                  </h3>
                  <p style={{ fontSize: '14px', color: '#475569', marginBottom: '24px', lineHeight: 1.5 }}>
                    Recebemos os dados da startup <strong>{formData.startupName}</strong>. Enviamos as instruções de submissão do pitch deck para o e-mail informado.
                  </p>
                  <button
                    onClick={() => {
                      resetForm()
                      setShowPreInscricaoModal(false)
                    }}
                    style={{
                      padding: '12px 24px',
                      backgroundColor: '#0284c7',
                      color: '#ffffff',
                      borderRadius: '8px',
                      border: 'none',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    Concluir
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                      Nome do Fundador / Responsável *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Maria Silva"
                      value={formData.founderName}
                      onChange={e => setFormData({ ...formData, founderName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '14px',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                        E-mail Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="contato@startup.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '8px',
                          border: '1px solid #cbd5e1',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                        Telefone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="(81) 99689-4297"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '8px',
                          border: '1px solid #cbd5e1',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                        Nome da Startup *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Recife Tech Solutions"
                        value={formData.startupName}
                        onChange={e => setFormData({ ...formData, startupName: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '8px',
                          border: '1px solid #cbd5e1',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                        Segmento de Atuação
                      </label>
                      <select
                        value={formData.segment}
                        onChange={e => setFormData({ ...formData, segment: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '8px',
                          border: '1px solid #cbd5e1',
                          fontSize: '14px',
                          outline: 'none',
                          backgroundColor: '#ffffff',
                        }}
                      >
                        {SEGMENTS.map(s => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                      Link do Pitch Deck (Drive/Dropbox/Notion) ou Website
                    </label>
                    <input
                      type="url"
                      placeholder="https://..."
                      value={formData.deckUrl}
                      onChange={e => setFormData({ ...formData, deckUrl: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '14px',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                      Resumo da Solução e Diferencial Competitivo
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Descreva brevemente o problema, a solução inovadora e a métrica de tração."
                      value={formData.solutionSummary}
                      onChange={e => setFormData({ ...formData, solutionSummary: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                    <button
                      type="button"
                      onClick={() => setShowPreInscricaoModal(false)}
                      style={{
                        flex: 1,
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        backgroundColor: '#ffffff',
                        color: '#475569',
                        fontWeight: 700,
                        cursor: 'pointer',
                      }}
                    >
                      Cancelar
                    </button>

                    <button
                      type="submit"
                      style={{
                        flex: 2,
                        padding: '12px',
                        borderRadius: '8px',
                        border: 'none',
                        backgroundColor: '#0284c7',
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '14px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(2, 132, 199, 0.3)',
                      }}
                    >
                      Enviar Pré-inscrição
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        {/* ───────────────────────────────────────────────────────────── */}
        {/* NOTIFICAÇÃO TOAST */}
        {/* ───────────────────────────────────────────────────────────── */}
        {toastMessage && (
          <div
            style={{
              position: 'fixed',
              bottom: '24px',
              right: '24px',
              backgroundColor: '#0f172a',
              color: '#ffffff',
              padding: '14px 20px',
              borderRadius: '10px',
              boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)',
              fontSize: '14px',
              fontWeight: 600,
              zIndex: 10000,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              border: '1px solid #334155',
            }}
          >
            <span>🔔</span>
            <span>{toastMessage}</span>
          </div>
        )}
      </main>
    </div>
  </div>
  )
}

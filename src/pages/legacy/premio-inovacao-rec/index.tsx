import { useState } from 'react'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import bannerPremio from '../../../assets/banner-premiorec.png'
import logoPremio from '../../../assets/logo-premiorec.png'

export default function PremioInovacaoRecPage() {
  const [activeTab, setActiveTab] = useState<'inicio' | 'categorias' | 'cronograma' | 'banca' | 'resultados' | 'avaliador'>('inicio')

  // Accordion state for Categorias section
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    'eixo-1': false,
    'eixo-2': false,
    'eixo-3': false,
    'eixo-4': false,
    'votacao-popular': false,
  })

  const toggleAccordion = (id: string) => {
    setOpenAccordions(prev => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // Modals state
  const [showAvaliadorModal, setShowAvaliadorModal] = useState(false)
  const [showEditalModal, setShowEditalModal] = useState(false)
  const [showVotacaoModal, setShowVotacaoModal] = useState(false)

  // Avaliador form state
  const [emailAvaliador, setEmailAvaliador] = useState('')
  const [senhaAvaliador, setSenhaAvaliador] = useState('')
  const [loginSuccess, setLoginSuccess] = useState(false)

  const handleTabClick = (tab: 'inicio' | 'categorias' | 'cronograma' | 'banca' | 'resultados' | 'avaliador') => {
    if (tab === 'avaliador') {
      setShowAvaliadorModal(true)
      return
    }
    setActiveTab(tab)
  }

  const handleLoginAvaliador = (e: React.FormEvent) => {
    e.preventDefault()
    if (emailAvaliador.trim() && senhaAvaliador.trim()) {
      setLoginSuccess(true)
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#F3F6F8',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        color: '#1A202C',
      }}
    >
      <Header />

      {/* ── Main Layout Body ── */}
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar activeItem="premio" />

        {/* ── Main Content Area ── */}
        <main style={{ flex: 1, padding: '24px 32px 64px', maxWidth: '1080px', margin: '0 auto', width: '100%' }}>
          {/* ── Outer Card Wrapper matching exact Bubble style ── */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
              padding: '24px',
              marginBottom: '24px',
            }}
          >
            {/* ── Top Banner Image ── */}
            <div
              style={{
                width: '100%',
                borderRadius: '12px',
                overflow: 'hidden',
                marginBottom: '24px',
                backgroundColor: '#003B6D',
              }}
            >
              <img
                src={bannerPremio}
                alt="Prêmio Recife de Inovação 2025"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '340px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Main Page Title */}
            <h1
              style={{
                fontSize: '24px',
                fontWeight: 800,
                color: '#000000',
                marginBottom: '20px',
                letterSpacing: '-0.01em',
                textTransform: 'uppercase',
              }}
            >
              PRÊMIO RECIFE DE INOVAÇÃO 2025
            </h1>

            {/* ── Navigation Tabs ── */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '24px',
              }}
            >
              <button
                onClick={() => handleTabClick('inicio')}
                style={{
                  padding: '8px 24px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: '#ffffff',
                  color: '#E53935',
                  border: `2px solid ${activeTab === 'inicio' ? '#E53935' : '#E53935'}`,
                  transition: 'all 0.2s ease',
                  boxShadow: activeTab === 'inicio' ? '0 2px 6px rgba(229,57,53,0.15)' : 'none',
                }}
              >
                Início
              </button>

              <button
                onClick={() => handleTabClick('categorias')}
                style={{
                  padding: '8px 24px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: '#ffffff',
                  color: '#E53935',
                  border: `2px solid ${activeTab === 'categorias' ? '#E53935' : '#E53935'}`,
                  transition: 'all 0.2s ease',
                  boxShadow: activeTab === 'categorias' ? '0 2px 6px rgba(229,57,53,0.15)' : 'none',
                }}
              >
                Categorias
              </button>

              <button
                onClick={() => handleTabClick('cronograma')}
                style={{
                  padding: '8px 24px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: '#ffffff',
                  color: '#E53935',
                  border: `2px solid ${activeTab === 'cronograma' ? '#E53935' : '#E53935'}`,
                  transition: 'all 0.2s ease',
                  boxShadow: activeTab === 'cronograma' ? '0 2px 6px rgba(229,57,53,0.15)' : 'none',
                }}
              >
                Cronograma
              </button>

              <button
                onClick={() => handleTabClick('banca')}
                style={{
                  padding: '8px 24px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: '#ffffff',
                  color: '#E53935',
                  border: `2px solid ${activeTab === 'banca' ? '#E53935' : '#E53935'}`,
                  transition: 'all 0.2s ease',
                  boxShadow: activeTab === 'banca' ? '0 2px 6px rgba(229,57,53,0.15)' : 'none',
                }}
              >
                Banca Avaliadora
              </button>

              <button
                onClick={() => handleTabClick('resultados')}
                style={{
                  padding: '8px 24px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: '#ffffff',
                  color: '#E53935',
                  border: `2px solid ${activeTab === 'resultados' ? '#E53935' : '#E53935'}`,
                  transition: 'all 0.2s ease',
                  boxShadow: activeTab === 'resultados' ? '0 2px 6px rgba(229,57,53,0.15)' : 'none',
                }}
              >
                Resultados
              </button>

              <button
                onClick={() => handleTabClick('avaliador')}
                style={{
                  padding: '8px 24px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: '#E53935',
                  color: '#ffffff',
                  border: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 6px rgba(229, 57, 53, 0.3)',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#d32f2f')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#E53935')}
              >
                Área do Avaliador
              </button>
            </div>
          </div>

          {/* ── TAB CONTENT: INÍCIO ── */}
          {activeTab === 'inicio' && (
            <>
              {/* SECTION: SOBRE A PREMIAÇÃO */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  padding: '32px',
                  marginBottom: '24px',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#E53935',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '15px',
                    padding: '8px 20px',
                    borderRadius: '6px',
                    display: 'inline-block',
                    marginBottom: '24px',
                  }}
                >
                  Sobre a Premiação
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '32px', alignItems: 'center' }}>
                  {/* Text column */}
                  <div>
                    <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#2D3748', marginBottom: '20px' }}>
                      O <strong>Prêmio Recife de Inovação 2025</strong> premiará iniciativas que se destaquem na promoção do conhecimento, desenvolvimento de processos, bens e serviços inovadores que tragam benefícios diretos à cidade do Recife e ao cidadão recifense.
                    </p>

                    <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#2D3748', marginBottom: '28px' }}>
                      Ao promover este chamamento*, a Prefeitura do Recife busca identificar e valorizar ações que tragam soluções práticas e eficientes para os desafios urbanos e sociais da cidade, uma vez que as iniciativas selecionadas são fundamentais para o fortalecimento do ecossistema de inovação local, impulsionando a geração de novos conhecimentos, tecnologias e serviços, em alinhamento com as políticas públicas voltadas para o crescimento econômico e social da cidade.
                    </p>

                    {/* Buttons */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '420px' }}>
                      <button
                        onClick={() => setShowEditalModal(true)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '10px',
                          backgroundColor: '#E53935',
                          color: '#ffffff',
                          fontWeight: 700,
                          fontSize: '15px',
                          padding: '12px 24px',
                          borderRadius: '6px',
                          border: 'none',
                          cursor: 'pointer',
                          boxShadow: '0 4px 12px rgba(229, 57, 53, 0.25)',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#c62828')}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#E53935')}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Acesse o edital completo
                      </button>

                      <button
                        onClick={() => setShowVotacaoModal(true)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '10px',
                          backgroundColor: '#008744',
                          color: '#ffffff',
                          fontWeight: 700,
                          fontSize: '15px',
                          padding: '12px 24px',
                          borderRadius: '6px',
                          border: 'none',
                          cursor: 'pointer',
                          boxShadow: '0 4px 12px rgba(0, 135, 68, 0.25)',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#006e37')}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#008744')}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Conheça as iniciativas para votação popular
                      </button>
                    </div>
                  </div>

                  {/* Logo Column */}
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                      src={logoPremio}
                      alt="Logo Prêmio Recife de Inovação"
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                        maxHeight: '280px',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* SECTION: PROPÓSITO */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  padding: '32px',
                  marginBottom: '24px',
                }}
              >
                <h2
                  style={{
                    fontSize: '22px',
                    fontWeight: 800,
                    color: '#E53935',
                    marginBottom: '24px',
                    letterSpacing: '-0.01em',
                    textTransform: 'uppercase',
                  }}
                >
                  PROPÓSITO
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                  {/* Card 1 */}
                  <div
                    style={{
                      border: '1.5px solid #0090FF',
                      borderRadius: '12px',
                      padding: '24px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      backgroundColor: '#ffffff',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#0090FF',
                        color: '#ffffff',
                        fontSize: '28px',
                        fontWeight: 800,
                        width: '56px',
                        height: '56px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                      }}
                    >
                      1
                    </div>
                    <p
                      style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#0084D1',
                        lineHeight: 1.5,
                        textTransform: 'uppercase',
                        margin: 0,
                      }}
                    >
                      FOMENTAR A CULTURA DE INOVAÇÃO DENTRO DO ECOSSISTEMA DO RECIFE
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div
                    style={{
                      border: '1.5px solid #003B6D',
                      borderRadius: '12px',
                      padding: '24px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      backgroundColor: '#ffffff',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#003B6D',
                        color: '#ffffff',
                        fontSize: '28px',
                        fontWeight: 800,
                        width: '56px',
                        height: '56px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                      }}
                    >
                      2
                    </div>
                    <p
                      style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#003B6D',
                        lineHeight: 1.5,
                        textTransform: 'uppercase',
                        margin: 0,
                      }}
                    >
                      RECONHECER E PREMIAR INICIATIVAS E ORGANIZAÇÕES QUE DESENVOLVAM SOLUÇÕES INOVADORAS
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div
                    style={{
                      border: '1.5px solid #40A835',
                      borderRadius: '12px',
                      padding: '24px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      backgroundColor: '#ffffff',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#40A835',
                        color: '#ffffff',
                        fontSize: '28px',
                        fontWeight: 800,
                        width: '56px',
                        height: '56px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                      }}
                    >
                      3
                    </div>
                    <p
                      style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#40A835',
                        lineHeight: 1.5,
                        textTransform: 'uppercase',
                        margin: 0,
                      }}
                    >
                      DISSEMINAR PRÁTICAS QUE POSSAM SERVIR DE MODELO PARA FUTURAS INICIATIVAS EM INOVAÇÃO
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION: CRONOGRAMA SUMMARY */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  padding: '32px',
                  marginBottom: '24px',
                }}
              >
                <h2
                  style={{
                    fontSize: '22px',
                    fontWeight: 800,
                    color: '#E53935',
                    marginBottom: '24px',
                    letterSpacing: '-0.01em',
                    textTransform: 'uppercase',
                  }}
                >
                  CRONOGRAMA
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px' }}>
                  {/* Step 1 */}
                  <div style={{ backgroundColor: '#F8FAFC', borderRadius: '12px', padding: '16px 12px', textAlign: 'center' }}>
                    <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                      <svg width="64" height="64" viewBox="0 0 100 100" fill="none">
                        <rect x="25" y="15" width="50" height="65" rx="6" fill="#E2E8F0" />
                        <rect x="32" y="25" width="36" height="6" rx="3" fill="#00A8B5" />
                        <rect x="32" y="36" width="28" height="4" rx="2" fill="#94A3B8" />
                        <circle cx="65" cy="65" r="16" fill="#003B6D" />
                        <path d="M60 65l3 3 7-7" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: '#003B6D', marginBottom: '4px' }}>INSCRIÇÃO</div>
                    <div style={{ fontSize: '12px', color: '#475569', fontWeight: 600 }}>13/10 à 28/10/2025</div>
                  </div>

                  {/* Step 2 */}
                  <div style={{ backgroundColor: '#F8FAFC', borderRadius: '12px', padding: '16px 12px', textAlign: 'center' }}>
                    <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                      <svg width="64" height="64" viewBox="0 0 100 100" fill="none">
                        <circle cx="45" cy="45" r="24" stroke="#003B6D" strokeWidth="6" fill="none" />
                        <path d="M62 62l18 18" stroke="#003B6D" strokeWidth="8" strokeLinecap="round" />
                        <circle cx="40" cy="40" r="8" fill="#00A8B5" />
                      </svg>
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: '#003B6D', marginBottom: '4px' }}>ANÁLISE DE ELEGIBILIDADE</div>
                    <div style={{ fontSize: '12px', color: '#475569', fontWeight: 600 }}>29/10 à 03/11/2025</div>
                  </div>

                  {/* Step 3 */}
                  <div style={{ backgroundColor: '#F8FAFC', borderRadius: '12px', padding: '16px 12px', textAlign: 'center' }}>
                    <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                      <svg width="64" height="64" viewBox="0 0 100 100" fill="none">
                        <rect x="20" y="30" width="60" height="45" rx="4" fill="#00A8B5" opacity="0.2" />
                        <path d="M25 65l15-20 15 10 20-25" stroke="#00A8B5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: '#003B6D', marginBottom: '4px' }}>ANÁLISE TÉCNICA</div>
                    <div style={{ fontSize: '12px', color: '#475569', fontWeight: 600 }}>10/11 à 24/11/2025</div>
                  </div>

                  {/* Step 4 */}
                  <div style={{ backgroundColor: '#F8FAFC', borderRadius: '12px', padding: '16px 12px', textAlign: 'center' }}>
                    <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                      <svg width="64" height="64" viewBox="0 0 100 100" fill="none">
                        <rect x="30" y="45" width="40" height="35" rx="4" fill="#003B6D" />
                        <rect x="44" y="30" width="12" height="20" fill="#00A8B5" />
                      </svg>
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: '#003B6D', marginBottom: '4px' }}>VOTAÇÃO POPULAR</div>
                    <div style={{ fontSize: '12px', color: '#475569', fontWeight: 600 }}>10/11 à 24/11/2025</div>
                  </div>

                  {/* Step 5 */}
                  <div style={{ backgroundColor: '#F8FAFC', borderRadius: '12px', padding: '16px 12px', textAlign: 'center' }}>
                    <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                      <svg width="64" height="64" viewBox="0 0 100 100" fill="none">
                        <path d="M35 30h30v20c0 10-7 18-15 18s-15-8-15-18V30z" fill="#F59E0B" />
                        <rect x="35" y="80" width="30" height="8" rx="2" fill="#003B6D" />
                      </svg>
                    </div>
                    <div style={{ backgroundColor: '#003B6D', color: '#fff', fontSize: '12px', fontWeight: 800, padding: '3px 10px', borderRadius: '4px', marginBottom: '4px', display: 'inline-block' }}>PREMIAÇÃO</div>
                    <div style={{ fontSize: '12px', color: '#475569', fontWeight: 600 }}>04/12/2025</div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ── TAB CONTENT: CATEGORIAS ── */}
          {activeTab === 'categorias' && (
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                padding: '32px',
                marginBottom: '24px',
              }}
            >
              {/* Badge */}
              <div
                style={{
                  backgroundColor: '#E53935',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '15px',
                  padding: '8px 20px',
                  borderRadius: '6px',
                  display: 'inline-block',
                  marginBottom: '24px',
                }}
              >
                Categorias
              </div>

              {/* Intro Text */}
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: '#2D3748',
                  marginBottom: '32px',
                }}
              >
                Ao todo, o <strong>Prêmio Recife de Inovação</strong> contará com 10 (dez) categorias, de modo que os eixos temáticos de <em>Inovação Empresarial</em> e <em>Inovação Social</em> possuem 2 (duas) categorias cada; e os eixos de <em>Startups Inovadoras</em> e <em>Inovação Científica</em> possuem 3 (três) categorias cada:
              </p>

              {/* ACCORDIONS LIST */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* 1. EIXO TEMÁTICO 1: INOVAÇÃO EMPRESARIAL */}
                <div>
                  <div
                    onClick={() => toggleAccordion('eixo-1')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      fontSize: '15px',
                      fontWeight: 800,
                      color: '#00609C',
                      userSelect: 'none',
                    }}
                  >
                    <span>EIXO TEMÁTICO 1: INOVAÇÃO EMPRESARIAL</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      {openAccordions['eixo-1'] ? (
                        <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                      ) : (
                        <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                      )}
                    </svg>
                  </div>

                  {openAccordions['eixo-1'] && (
                    <div style={{ marginTop: '20px', paddingLeft: '8px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      <div>
                        <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#1E293B', marginBottom: '8px' }}>
                          CATEGORIA 1: CASE DE INOVAÇÃO EMPRESARIAL
                        </h4>
                        <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#334155', margin: 0 }}>
                          A categoria de Case de Inovação Empresarial visa reconhecer o projeto que demonstra a aplicação mais consistente e transformadora de inovação. Esse prêmio será concedido ao case que evidencie como a iniciativa foi concebida e implementada, destacando o caráter inovador da solução e os resultados alcançados. O case reconhecido nesta categoria deve mostrar impacto relevante no mercado e no ecossistema local, servindo como referência prática de como a inovação pode gerar valor e contribuir para o desenvolvimento econômico do Recife.
                        </p>
                      </div>

                      <div>
                        <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#1E293B', marginBottom: '8px' }}>
                          CATEGORIA 2: CASE DE INOVAÇÃO EM ESG
                        </h4>
                        <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#334155', margin: 0 }}>
                          A categoria de Case de Inovação em ESG (Sigla em inglês de Ambiental, Social e Governança) do Prêmio Recife de Inovação valoriza iniciativas que incorporam, de forma concreta, práticas dessas três áreas em alinhamento à Agenda 2030 da ONU e aos Objetivos de Desenvolvimento Sustentável (ODS). A premiação valoriza iniciativas que vão além do desempenho corporativo, evidenciando impacto positivo no meio ambiente, na inclusão social e na ética empresarial. Trata-se de destacar empresas que transformam princípios de sustentabilidade em resultados concretos para a cidade do Recife.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. EIXO TEMÁTICO 2: STARTUPS INOVADORAS */}
                <div>
                  <div
                    onClick={() => toggleAccordion('eixo-2')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      fontSize: '15px',
                      fontWeight: 800,
                      color: '#00609C',
                      userSelect: 'none',
                    }}
                  >
                    <span>EIXO TEMÁTICO 2: STARTUPS INOVADORAS</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      {openAccordions['eixo-2'] ? (
                        <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                      ) : (
                        <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                      )}
                    </svg>
                  </div>

                  {openAccordions['eixo-2'] && (
                    <div style={{ marginTop: '20px', paddingLeft: '8px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      <div>
                        <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#1E293B', marginBottom: '8px' }}>
                          CATEGORIA 1: STARTUP ASCENÇÃO
                        </h4>
                        <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#334155', margin: 0 }}>
                          A categoria Startup Ascenção destina-se a reconhecer a startup que demonstrou crescimento exponencial ao longo do ano de 2025. O foco são startups emergentes que, por meio de sua capacidade inovativa, alcançaram expansão significativa de suas operações e de seus resultados. Esta categoria é exclusiva para startups cujo faturamento anual seja de até R$1.000.000,00 (um milhão de reais) no ano de 2024. O objetivo é celebrar sua capacidade de "virar a chave" e se tornar agente protagonista no ecossistema de inovação do Recife.
                        </p>
                      </div>

                      <div>
                        <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#1E293B', marginBottom: '8px' }}>
                          CATEGORIA 2: STARTUP TRAÇÃO
                        </h4>
                        <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#334155', margin: 0 }}>
                          Reconhecer a Startup Tração é fundamental para fortalecer o Recife como um centro de inovação e empreendedorismo. Esta categoria premia a startup que, além de alcançar resultados significativos, atingiu um alto grau de maturidade organizacional, tornando-se referência para o ecossistema local, regional e/ou nacional. O reconhecimento é direcionado apenas para startups com faturamento anual superior a R$1.000.000,00 (um milhão de reais) no ano de 2024. O intuito é reconhecer as startups com trajetória de sucesso e que se destacam pela capacidade de servir como modelo para novas empresas, impulsionando o desenvolvimento e a inovação na cidade.
                        </p>
                      </div>

                      <div>
                        <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#1E293B', marginBottom: '8px' }}>
                          CATEGORIA 3: STARTUP CONECTADA COM A CIDADE
                        </h4>
                        <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#334155', margin: 0 }}>
                          A Startup Conectada com a Cidade é premiada por desenvolver soluções que têm um impacto direto e positivo na vida dos cidadãos do Recife. Esta categoria reconhece startups cujas inovações respondem aos desafios urbanos locais. Ao premiar essas Startups, destacamos seu papel no desenvolvimento da qualidade de vida e na resolução de problemas específicos do Recife, fortalecendo a ligação entre inovação e desenvolvimento comunitário. Encorajamos nessa categoria as startups que participaram dos ciclos de inovação aberta do E.I.T.A.! Recife.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. EIXO TEMÁTICO 3: INOVAÇÃO SOCIAL */}
                <div>
                  <div
                    onClick={() => toggleAccordion('eixo-3')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      fontSize: '15px',
                      fontWeight: 800,
                      color: '#00609C',
                      userSelect: 'none',
                    }}
                  >
                    <span>EIXO TEMÁTICO 3: INOVAÇÃO SOCIAL</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      {openAccordions['eixo-3'] ? (
                        <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                      ) : (
                        <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                      )}
                    </svg>
                  </div>

                  {openAccordions['eixo-3'] && (
                    <div style={{ marginTop: '20px', paddingLeft: '8px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      <div>
                        <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#1E293B', marginBottom: '8px' }}>
                          CATEGORIA 1: CASE DE EMPREENDEDORISMO SOCIAL
                        </h4>
                        <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#334155', margin: 0 }}>
                          A categoria de Case de Empreendedorismo Social do Prêmio Recife de Inovação reconhece iniciativas inovadoras que promovem transformação social na cidade do Recife. Esta premiação valoriza cases apresentados por organizações da sociedade civil, como ONGs e coletivos, que desenvolvem soluções criativas para enfrentar desafios locais, fortalecendo laços comunitários, ampliando oportunidades e promovendo inclusão. O case vencedor deverá demonstrar impacto social concreto e inovador, contribuindo de forma significativa para a construção de um Recife mais justo e sustentável.
                        </p>
                      </div>

                      <div>
                        <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#1E293B', marginBottom: '8px' }}>
                          CATEGORIA 2: CASE DE LETRAMENTO DIGITAL
                        </h4>
                        <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#334155', margin: 0 }}>
                          Esta categoria reconhece cases que, de forma inovadora, ampliam as habilidades digitais dos cidadãos, preparando-os para usar as tecnologias de maneira consciente, criativa e responsável. A premiação valoriza iniciativas que vão além do simples acesso, promovendo aprendizado contínuo, autonomia e novas oportunidades. O destaque recai sobre projetos que transformam o domínio das ferramentas digitais em um caminho para maior participação social, fortalecimento da inovação e desenvolvimento sustentável no Recife.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* 4. EIXO TEMÁTICO 4: INOVAÇÃO CIENTÍFICA */}
                <div>
                  <div
                    onClick={() => toggleAccordion('eixo-4')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      fontSize: '15px',
                      fontWeight: 800,
                      color: '#00609C',
                      userSelect: 'none',
                    }}
                  >
                    <span>EIXO TEMÁTICO 4: INOVAÇÃO CIENTÍFICA</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      {openAccordions['eixo-4'] ? (
                        <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                      ) : (
                        <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                      )}
                    </svg>
                  </div>

                  {openAccordions['eixo-4'] && (
                    <div style={{ marginTop: '20px', paddingLeft: '8px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      <div>
                        <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#1E293B', marginBottom: '8px' }}>
                          CATEGORIA 1: PESQUISA & EXTENSÃO INOVADORA
                        </h4>
                        <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#334155', margin: 0 }}>
                          Esta categoria reconhece projetos de pesquisa ou extensão que se destacam pela originalidade e pela relevância de seus resultados. Podem ser contempladas tanto pesquisas de caráter teórico, que abrem novas fronteiras do conhecimento, quanto investigações aplicadas que oferecem soluções concretas para desafios sociais. Do mesmo modo, valoriza-se projetos de extensão de alto valor, capazes de aproximar a academia da sociedade e gerar transformações significativas. O destaque recai sobre iniciativas que fortalecem a integração entre universidade e comunidade, contribuindo para o avanço científico, social e tecnológico do Recife.
                        </p>
                      </div>

                      <div>
                        <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#1E293B', marginBottom: '8px' }}>
                          CATEGORIA 2: INSTITUIÇÕES DE ENSINO E/OU PESQUISA INOVADORA
                        </h4>
                        <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#334155', margin: 0 }}>
                          Esta categoria é destinada a premiar uma instituição de ensino ou pesquisa que se destaca pela implementação de uma iniciativa na promoção de empreendedorismo e inovação. Reconhecemos instituições que conseguem não apenas implementar, mas também engajar estudantes, professores e/ou pesquisadores em práticas de empreendedorismo inovador, demonstrando resultados tangíveis e significativos dentro do ambiente acadêmico. O prêmio valoriza projetos que promovem ativamente a inovação e têm um impacto duradouro na cultura de inovação da instituição.
                        </p>
                      </div>

                      <div>
                        <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#1E293B', marginBottom: '8px' }}>
                          CATEGORIA 3: DEEP TECH DESTAQUE
                        </h4>
                        <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#334155', margin: 0 }}>
                          A categoria Deep Tech Destaque reconhece a startup que se sobressai no eixo da inovação científica, desenvolvendo soluções de base tecnológica e científica de fronteira. São valorizadas startups que, a partir da intensa pesquisa e desenvolvimento, validam tecnologias complexas e inéditas, capazes de transformar setores estratégicos e consolidar-se como referência em inovação de alto impacto. Esta categoria celebra iniciativas que unem rigor científico, diferenciação técnica e potencial de transformação sistêmica, demonstrando que o conhecimento acadêmico e científico pode ser convertido em soluções concretas de alto valor. Ao destacar uma deep tech de referência, buscamos inspirar novas conexões entre ciência, mercado e sociedade, reforçando o papel do Recife como um ambiente fértil para a inovação de fronteira.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* 5. VOTAÇÃO POPULAR */}
                <div>
                  <div
                    onClick={() => toggleAccordion('votacao-popular')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      fontSize: '15px',
                      fontWeight: 800,
                      color: '#00609C',
                      userSelect: 'none',
                    }}
                  >
                    <span>VOTAÇÃO POPULAR</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      {openAccordions['votacao-popular'] ? (
                        <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                      ) : (
                        <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                      )}
                    </svg>
                  </div>

                  {openAccordions['votacao-popular'] && (
                    <div style={{ marginTop: '20px', paddingLeft: '8px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#334155', margin: 0 }}>
                        A premiação contará com a votação popular, garantindo a participação direta da sociedade no reconhecimento das iniciativas. A votação será realizada em cada um dos quatro eixos: Inovação Empresarial, Startups Inovadoras, Inovação Social e Inovação Científica. Todas as iniciativas elegíveis dentro das respectivas categorias estarão disponíveis para a escolha do público. Assim, cada eixo terá o seu destaque eleito pela sociedade, em um processo que valoriza a pluralidade de percepções e reforça o caráter participativo do Prêmio. A votação popular complementa a análise técnica realizada por especialistas, conferindo legitimidade e engajamento coletivo ao reconhecimento da inovação no Recife.
                      </p>

                      <div>
                        <button
                          onClick={() => setShowVotacaoModal(true)}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            backgroundColor: '#008744',
                            color: '#ffffff',
                            fontWeight: 700,
                            fontSize: '15px',
                            padding: '12px 28px',
                            borderRadius: '6px',
                            border: 'none',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(0, 135, 68, 0.25)',
                            transition: 'all 0.2s ease',
                          }}
                          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#006e37')}
                          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#008744')}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Acesse a votação popular
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ── TAB CONTENT: CRONOGRAMA DETALHADO ── */}
          {activeTab === 'cronograma' && (
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                padding: '32px',
                marginBottom: '24px',
              }}
            >
              {/* Badge */}
              <div
                style={{
                  backgroundColor: '#E53935',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '15px',
                  padding: '8px 20px',
                  borderRadius: '6px',
                  display: 'inline-block',
                  marginBottom: '32px',
                }}
              >
                Cronograma Detalhado
              </div>

              {/* Vertical Timeline List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', paddingLeft: '8px' }}>
                {/* 1 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <CalendarIcon />
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: '#00609C', marginBottom: '4px' }}>
                      13/10/2025
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#475569', letterSpacing: '0.01em' }}>
                      INÍCIO DO PERÍODO DE SUBMISSÃO DOS PROJETOS
                    </div>
                  </div>
                </div>

                {/* 2 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <CalendarIcon />
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: '#00609C', marginBottom: '4px' }}>
                      28/10/2025
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#475569', letterSpacing: '0.01em' }}>
                      FIM DO PERÍODO DE SUBMISSÃO DOS PROJETOS
                    </div>
                  </div>
                </div>

                {/* 3 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <CalendarIcon />
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: '#00609C', marginBottom: '4px' }}>
                      29/10/2025
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#475569', letterSpacing: '0.01em' }}>
                      DIVULGAÇÃO DAS BANCAS DE AVALIAÇÃO
                    </div>
                  </div>
                </div>

                {/* 4 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <CalendarIcon />
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: '#00609C', marginBottom: '4px' }}>
                      29/10/2025 à 03/11/2025
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#475569', letterSpacing: '0.01em' }}>
                      PERÍODO DA ANÁLISE DE ELEGIBILIDADE (1ª AVALIAÇÃO)
                    </div>
                  </div>
                </div>

                {/* 5 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <CalendarIcon />
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: '#00609C', marginBottom: '4px' }}>
                      04/11/2025
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#475569', letterSpacing: '0.01em' }}>
                      DIVULGAÇÃO INICIAL DAS INICIATIVAS APROVADAS NA ANÁLISE DE ELEGIBILIDADE
                    </div>
                  </div>
                </div>

                {/* 6 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <CalendarIcon />
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: '#00609C', marginBottom: '4px' }}>
                      04/11/2025 à 07/11/2025
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#475569', letterSpacing: '0.01em' }}>
                      PERÍODO PARA SOLICITAÇÃO DE RECURSOS
                    </div>
                  </div>
                </div>

                {/* 7 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <CalendarIcon />
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: '#00609C', marginBottom: '4px' }}>
                      10/11/2025
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#475569', letterSpacing: '0.01em' }}>
                      DIVULGAÇÃO FINAL DAS INICIATIVAS APROVADAS NA ANÁLISE DE ELEGIBILIDADE
                    </div>
                  </div>
                </div>

                {/* 8 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <CalendarIcon />
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: '#00609C', marginBottom: '4px' }}>
                      10/11/2025 à 24/11/2025
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#475569', letterSpacing: '0.01em' }}>
                      PERÍODO DA ANÁLISE TÉCNICA (2ª AVALIAÇÃO)
                    </div>
                  </div>
                </div>

                {/* 9 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <CalendarIcon />
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: '#00609C', marginBottom: '4px' }}>
                      10/11/2025 à 24/11/2025
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#475569', letterSpacing: '0.01em' }}>
                      PERÍODO DE VOTAÇÃO POPULAR
                    </div>
                  </div>
                </div>

                {/* 10 - Trophy */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: '#00A8B5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
                      <path d="M35 25h30v22c0 10-7 18-15 18s-15-8-15-18V25z" fill="#FFC107" />
                      <path d="M45 65h10v14H45z" fill="#FFA000" />
                      <rect x="32" y="78" width="36" height="8" rx="2" fill="#fff" />
                      <circle cx="28" cy="35" r="7" stroke="#FFC107" strokeWidth="4" fill="none" />
                      <circle cx="72" cy="35" r="7" stroke="#FFC107" strokeWidth="4" fill="none" />
                      <text x="50" y="44" fontSize="16" fontWeight="bold" fill="#003B6D" textAnchor="middle">#1</text>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: '#00609C', marginBottom: '4px' }}>
                      04/12/2025
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#475569', letterSpacing: '0.01em' }}>
                      CERIMÔNIA DO PRÊMIO RECIFE DE INOVAÇÃO
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── TAB CONTENT: BANCA AVALIADORA ── */}
          {activeTab === 'banca' && (
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                padding: '32px',
                marginBottom: '24px',
              }}
            >
              {/* Badge */}
              <div
                style={{
                  backgroundColor: '#E53935',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '15px',
                  padding: '8px 20px',
                  borderRadius: '6px',
                  display: 'inline-block',
                  marginBottom: '24px',
                }}
              >
                Banca Avaliadora
              </div>

              <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#1E293B', marginBottom: '16px' }}>
                Análise de Elegibilidade (Banca Interna)
              </h3>

              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#334155', marginBottom: '20px' }}>
                Nesta primeira etapa, as inscrições passam por uma verificação técnica conduzida por uma banca interna da Prefeitura do Recife. O objetivo é garantir que os projetos atendam aos critérios formais e temáticos do Prêmio, avaliando se as informações foram preenchidas de forma completa e coerente, e se há alinhamento com a categoria escolhida.
              </p>

              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#334155', marginBottom: '24px' }}>
                Durante essa análise, a banca poderá realocar projetos para outra categoria quando houver maior adequação ou desclassificar iniciativas que não cumpram os requisitos mínimos do edital. Apenas as propostas consideradas elegíveis seguirão para a próxima fase de avaliação.
              </p>

              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#334155', marginBottom: '24px' }}>
                Abaixo, segue a lista oficial dos integrantes da Banca Interna responsável pela Análise de Elegibilidade do Prêmio Recife de Inovação 2025:
              </p>

              <ol style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '20px', margin: 0 }}>
                <li style={{ fontSize: '15px', lineHeight: 1.6, color: '#334155' }}>
                  <strong>Rafael Henriques Pimentel de Paula</strong> – Secretaria de Transformação Digital, Ciência e Tecnologia da Prefeitura do Recife
                </li>
                <li style={{ fontSize: '15px', lineHeight: 1.6, color: '#334155' }}>
                  <strong>Hellen da Silva Alves Teixeira</strong> – Secretaria de Transformação Digital, Ciência e Tecnologia da Prefeitura do Recife
                </li>
                <li style={{ fontSize: '15px', lineHeight: 1.6, color: '#334155' }}>
                  <strong>Tiago Gayoso Teixeira</strong> – Secretaria de Transformação Digital, Ciência e Tecnologia da Prefeitura do Recife
                </li>
                <li style={{ fontSize: '15px', lineHeight: 1.6, color: '#334155' }}>
                  <strong>Evisson Fernandes de Lucena</strong> – Secretaria de Transformação Digital, Ciência e Tecnologia da Prefeitura do Recife
                </li>
                <li style={{ fontSize: '15px', lineHeight: 1.6, color: '#334155' }}>
                  <strong>Adeíldo José de Barros Filho</strong> – Secretaria de Transformação Digital, Ciência e Tecnologia da Prefeitura do Recife
                </li>
              </ol>
            </div>
          )}

          {/* ── TAB CONTENT: RESULTADOS ── */}
          {activeTab === 'resultados' && (
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                padding: '32px',
                marginBottom: '24px',
              }}
            >
              {/* Badge */}
              <div
                style={{
                  backgroundColor: '#E53935',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '15px',
                  padding: '8px 20px',
                  borderRadius: '6px',
                  display: 'inline-block',
                  marginBottom: '24px',
                }}
              >
                Resultados
              </div>

              <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0F4C81', marginBottom: '16px', textTransform: 'uppercase' }}>
                RESULTADO 1ª FASE
              </h3>

              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#334155', marginBottom: '20px' }}>
                A Prefeitura do Recife, através Secretaria de Transformação Digital, Ciência e Tecnologia, divulga o resultado da <strong>1ª Fase – Análise de Elegibilidade do Prêmio Recife de Inovação 2025</strong>. Esta fase verificou o preenchimento, admissibilidade e alinhamento temático das iniciativas inscritas.
              </p>

              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#334155', marginBottom: '20px' }}>
                As iniciativas elegíveis avançam para a 2ª Fase – Avaliação Técnica e Votação Popular, que começa em 10 de novembro de 2025, conforme cronograma.
              </p>

              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#334155', marginBottom: '28px' }}>
                Iniciativas não aprovadas ou que discordem da realocação de categoria podem interpor recurso até as 23h59 de 07 de novembro de 2025. A lista completa das iniciativas e seu status nesta fase está disponível abaixo.
              </p>

              {/* Action Link Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                <a
                  href="https://drive.google.com/file/d/1JWdQ2UIhmYNB1jXRWdvt8--KMWCjBzOH/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 24px',
                    borderRadius: '6px',
                    border: '2px solid #E53935',
                    backgroundColor: '#ffffff',
                    color: '#E53935',
                    fontWeight: 700,
                    fontSize: '15px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#FEF2F2'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = '#ffffff'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 2v6h6M12 18v-6m-3 3l3-3 3 3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Ver Resultado Preliminar
                </a>

                <a
                  href="https://drive.google.com/file/d/1_rJ0OiWyR23WLfhSSWsWoX_IL4w8Db_R/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 24px',
                    borderRadius: '6px',
                    border: '2px solid #E53935',
                    backgroundColor: '#ffffff',
                    color: '#E53935',
                    fontWeight: 700,
                    fontSize: '15px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#FEF2F2'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = '#ffffff'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 2v6h6M12 18v-6m-3 3l3-3 3 3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Ver Resultado Final
                </a>
              </div>
            </div>
          )}

          {/* ── FALE CONOSCO & FOOTER ── */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
              padding: '32px',
              marginBottom: '28px',
            }}
          >
            <h2
              style={{
                fontSize: '22px',
                fontWeight: 800,
                color: '#E53935',
                marginBottom: '16px',
                letterSpacing: '-0.01em',
                textTransform: 'uppercase',
              }}
            >
              FALE CONOSCO
            </h2>

            <p style={{ fontSize: '16px', color: '#1E293B', marginBottom: '24px' }}>
              Dúvidas? Entre em contato através do nosso e-mail <strong>secti@recife.pe.gov.br</strong>
            </p>

            <p
              style={{
                fontSize: '12px',
                color: '#64748B',
                fontStyle: 'italic',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              * Este chamamento se dá conforme as diretrizes estabelecidas pelo Conselho Municipal de Ciência, Tecnologia e Inovação, órgão responsável por definir os critérios e a regulamentação do Prêmio Recife de Inovação, conforme disposto no Art. 39 da Lei nº 18.974/2022.
            </p>
          </div>
        </main>
      </div>

      {/* ── MODAL: Área do Avaliador ── */}
      {showAvaliadorModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: '16px',
          }}
          onClick={() => setShowAvaliadorModal(false)}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              maxWidth: '440px',
              width: '100%',
              padding: '32px',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
              position: 'relative',
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowAvaliadorModal(false)}
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

            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div
                style={{
                  backgroundColor: '#E53935',
                  color: '#fff',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  marginBottom: '12px',
                }}
              >
                🔐
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', margin: '0 0 6px' }}>
                Área do Avaliador
              </h3>
              <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>
                Acesso exclusivo para membros da banca avaliadora
              </p>
            </div>

            {loginSuccess ? (
              <div style={{ textAlign: 'center', padding: '16px 0' }}>
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>✅</div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#15803D', marginBottom: '8px' }}>
                  Acesso Autorizado!
                </h4>
                <p style={{ fontSize: '14px', color: '#475569', marginBottom: '20px' }}>
                  Bem-vindo ao painel de avaliação das propostas submetidas ao Prêmio Recife de Inovação.
                </p>
                <button
                  onClick={() => setShowAvaliadorModal(false)}
                  style={{
                    backgroundColor: '#003B6D',
                    color: '#fff',
                    fontWeight: 700,
                    padding: '10px 24px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Fechar
                </button>
              </div>
            ) : (
              <form onSubmit={handleLoginAvaliador}>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#1E293B', marginBottom: '6px' }}>
                    E-mail institucional
                  </label>
                  <input
                    type="email"
                    required
                    value={emailAvaliador}
                    onChange={e => setEmailAvaliador(e.target.value)}
                    placeholder="avaliador@recife.pe.gov.br"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      fontSize: '14px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#1E293B', marginBottom: '6px' }}>
                    Senha de acesso
                  </label>
                  <input
                    type="password"
                    required
                    value={senhaAvaliador}
                    onChange={e => setSenhaAvaliador(e.target.value)}
                    placeholder="••••••••"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      fontSize: '14px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    backgroundColor: '#E53935',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '15px',
                    padding: '12px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Entrar na Área Restrita
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ── MODAL: Edital Completo ── */}
      {showEditalModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: '16px',
          }}
          onClick={() => setShowEditalModal(false)}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              maxWidth: '560px',
              width: '100%',
              padding: '32px',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
              position: 'relative',
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowEditalModal(false)}
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

            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
              📜 Edital do Prêmio Recife de Inovação 2025
            </h3>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
              O edital regulamenta os critérios de elegibilidade, avaliação técnica, cronograma de etapas e premiação para todos os participantes inscritos.
            </p>

            <div style={{ backgroundColor: '#F8FAFC', padding: '16px', borderRadius: '8px', border: '1px solid #E2E8F0', marginBottom: '24px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#003B6D', marginBottom: '4px' }}>
                Documento Oficial: Edital_PRI_2025.pdf
              </div>
              <div style={{ fontSize: '12px', color: '#64748B' }}>
                Tamanho: 2.4 MB • Atualizado em 13/10/2025
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setShowEditalModal(false)}
                style={{
                  backgroundColor: '#E2E8F0',
                  color: '#475569',
                  fontWeight: 600,
                  fontSize: '14px',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Fechar
              </button>
              <button
                onClick={() => {
                  alert('Download do Edital iniciado!')
                  setShowEditalModal(false)
                }}
                style={{
                  backgroundColor: '#E53935',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '14px',
                  padding: '10px 24px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Baixar PDF
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL: Votação Popular ── */}
      {showVotacaoModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: '16px',
          }}
          onClick={() => setShowVotacaoModal(false)}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              maxWidth: '580px',
              width: '100%',
              padding: '32px',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
              position: 'relative',
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVotacaoModal(false)}
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

            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#008744', marginBottom: '12px' }}>
              🗳️ Votação Popular - Prêmio Recife de Inovação
            </h3>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
              Selecione o Eixo Temático abaixo para visualizar as iniciativas finalistas e computar o seu voto:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {['Inovação Empresarial', 'Startups Inovadoras', 'Inovação Social', 'Inovação Científica'].map((eixo, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '14px 18px',
                    border: '1px solid #CBD5E1',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: '#F8FAFC',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#F1F5F9')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#F8FAFC')}
                >
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>
                    {eixo}
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#008744' }}>
                    Votar neste eixo →
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setShowVotacaoModal(false)}
                style={{
                  backgroundColor: '#008744',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '14px',
                  padding: '10px 24px',
                  borderRadius: '6px',
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

function CalendarIcon() {
  return (
    <div style={{ width: '48px', height: '48px', flexShrink: 0 }}>
      <svg width="48" height="48" viewBox="0 0 100 100" fill="none">
        {/* Base */}
        <rect x="20" y="25" width="60" height="60" rx="8" fill="#E2E8F0" />
        <rect x="20" y="25" width="60" height="18" rx="8" fill="#E53935" />
        <rect x="20" y="35" width="60" height="8" fill="#E53935" />
        <rect x="24" y="46" width="52" height="34" rx="4" fill="#FFFFFF" />

        {/* Binder rings */}
        <rect x="32" y="18" width="6" height="14" rx="3" fill="#64748B" />
        <rect x="47" y="18" width="6" height="14" rx="3" fill="#64748B" />
        <rect x="62" y="18" width="6" height="14" rx="3" fill="#64748B" />

        {/* Dots grid */}
        <rect x="32" y="52" width="6" height="6" rx="1.5" fill="#94A3B8" />
        <rect x="44" y="52" width="6" height="6" rx="1.5" fill="#94A3B8" />
        <rect x="56" y="52" width="6" height="6" rx="1.5" fill="#94A3B8" />
        <rect x="68" y="52" width="6" height="6" rx="1.5" fill="#94A3B8" />

        <rect x="32" y="62" width="6" height="6" rx="1.5" fill="#94A3B8" />
        <rect x="44" y="62" width="6" height="6" rx="1.5" fill="#94A3B8" />
        <rect x="56" y="62" width="6" height="6" rx="1.5" fill="#94A3B8" />
        <rect x="68" y="62" width="6" height="6" rx="1.5" fill="#94A3B8" />

        <rect x="32" y="72" width="6" height="6" rx="1.5" fill="#94A3B8" />
        <rect x="44" y="72" width="6" height="6" rx="1.5" fill="#94A3B8" />
        <rect x="56" y="72" width="6" height="6" rx="1.5" fill="#94A3B8" />
      </svg>
    </div>
  )
}

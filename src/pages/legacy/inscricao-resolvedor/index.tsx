import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import logoCoreto from '../../../assets/logo-coreto.png'
import logoAbdi from '../../../assets/logo-abdi.png'
import logoEmprel from '../../../assets/logo-emprel.png'

interface SelectableCardProps {
  label: string
  subText?: string
  isSelected: boolean
  onClick: () => void
}

function SelectableCard({ label, subText, isSelected, onClick }: SelectableCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const activeOrHover = isSelected || isHovered

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: activeOrHover ? '#EF5A24' : '#F1F5F9',
        color: activeOrHover ? '#FFFFFF' : '#334155',
        border: activeOrHover ? '1px solid #EF5A24' : '1px solid transparent',
        borderRadius: '8px',
        padding: subText ? '16px 14px' : '20px 14px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        fontWeight: activeOrHover ? 700 : 500,
        fontSize: '14px',
        transition: 'all 0.2s ease-in-out',
        minHeight: '76px',
        boxSizing: 'border-box',
        userSelect: 'none',
        boxShadow: activeOrHover ? '0 4px 12px rgba(239, 90, 36, 0.25)' : 'none',
      }}
    >
      <div style={{ fontWeight: activeOrHover ? 700 : 600, fontSize: '14px', lineHeight: 1.3 }}>
        {label}
      </div>
      {subText && (
        <div
          style={{
            fontSize: '12px',
            marginTop: '4px',
            opacity: activeOrHover ? 0.95 : 0.75,
            fontWeight: 400,
            lineHeight: 1.3,
          }}
        >
          {subText}
        </div>
      )}
    </div>
  )
}

interface OutlineButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

function OutlineButton({ children, onClick, type = 'button', disabled = false }: OutlineButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: '12px 28px',
        borderRadius: '8px',
        border: '1.5px solid #EF5A24',
        backgroundColor: isHovered ? '#EF5A24' : '#FFFFFF',
        color: isHovered ? '#FFFFFF' : '#EF5A24',
        fontSize: '14px',
        fontWeight: 700,
        cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        transition: 'all 0.2s ease-in-out',
        boxShadow: isHovered ? '0 4px 12px rgba(239, 90, 36, 0.2)' : 'none',
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {children}
    </button>
  )
}

export default function InscricaoResolvedorPage() {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // Step 1 State
  const [nomeIniciativa, setNomeIniciativa] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [logoPreview, setLogoPreview] = useState<string | null>(null)
  const [bannerPreview, setBannerPreview] = useState<string | null>(null)
  const [tipoIniciativa, setTipoIniciativa] = useState<string>('')

  // Step 2 State
  const [descricaoIniciativa, setDescricaoIniciativa] = useState('')
  const [problemaDesafio, setProblemaDesafio] = useState('')
  const [solucaoConcreta, setSolucaoConcreta] = useState('')
  const [publicosAlvo, setPublicosAlvo] = useState<string[]>([])
  const [abrangenciaTerritorial, setAbrangenciaTerritorial] = useState<string>('')
  const [resultadosAlcancados, setResultadosAlcancados] = useState('')
  const [areasAtuacao, setAreasAtuacao] = useState<string[]>([])

  // Additional Fields from Step 2
  const [trlMaturidade, setTrlMaturidade] = useState<string>('')
  const [estagioIniciativa, setEstagioIniciativa] = useState<string>('')
  const [tiposApoio, setTiposApoio] = useState<string[]>([])
  const [tipoParceiroConectar, setTipoParceiroConectar] = useState<string>('')
  const [objetivo12Meses, setObjetivo12Meses] = useState('')

  const logoInputRef = useRef<HTMLInputElement>(null)
  const bannerInputRef = useRef<HTMLInputElement>(null)

  // Options Lists
  const tiposIniciativaOptions = [
    'Startup',
    'Projeto de Inovação',
    'Empresa Junior',
    'Grupo de Pesquisa',
    'Laboratório de Pesquisa',
    'Projeto de Extensão ou Programa Acadêmico',
    'ONG',
    'OSC',
    'Negócio de Impacto Social',
    'Coletivo ou Comunidade',
    'Outros (sem CNPJ)',
  ]

  const publicosOptions = [
    'Empresas',
    'Órgãos Públicos',
    'Estudantes',
    'Comunidade Local',
    'Pesquisadores ou Academia',
    'ONGs ou Coletivos',
    'Consumidor Final',
  ]

  const abrangenciaOptions = ['Municipal', 'Estadual', 'Nacional']

  const areasOptions = [
    'Saúde',
    'Educação',
    'Governo e Setor Público',
    'Cidades, Mobilidade e Urbanismo',
    'Segurança Pública',
    'Meio Ambiente e Sustentabilidade',
    'Clima e Transição Energética',
    'Indústria',
    'Agronegócio',
    'Alimentação',
    'Comércio e Serviços',
    'Logística e Transportes',
    'Finanças, Crédito e Seguros',
    'Trabalho Emprego e Renda',
    'Inclusão Social e Direitos Humanos',
    'Habitação',
    'Cultura e Economia Criativa',
    'Esporte e Lazer',
    'Turismo e Hotelaria',
    'Tecnologia da Informação',
    'Comunicação e Mídias',
  ]

  const trlOptions = [
    { label: 'TRL 1–2', subText: 'Exploração Científica' },
    { label: 'TRL 3–4', subText: 'Prova de Conceito em Ambiente de Laboratório' },
    { label: 'TRL 5–6', subText: 'Protótipo Validado em Ambiente Relevante' },
    { label: 'TRL 7–9', subText: 'Sistema Demonstrado ou em Operação em Ambiente Real' },
  ]

  const estagioOptions = ['Ideação', 'Validação', 'Operação', 'Tração', 'Escala']

  const tiposApoioOptions = [
    'Fomento / Recursos não reembolsáveis (editais de subvenção, fomento à pesquisa, bolsas, prêmios)',
    'Investimento de risco (investidor-anjo, fundos, corporate venture)',
    'Crédito / Financiamento reembolsável',
    'Programas de incubação / Pré-Incubação',
    'Programas de Aceleração',
    'Testes e Pilotos com Governo',
    'Testes e Pilotos com Empresas Privadas',
    'Parcerias de P&D com universidades / Institutos de Pesquisa',
    'Conexão com o Ecossistema de Inovação (participação em desafios, eventos, premiações, redes e comunidades)',
  ]

  const tipoParceiroOptions = [
    { label: 'Órgãos Públicos', subText: '(prefeitura, governo do estado ou órgãos federais)' },
    { label: 'Empresas Privadas', subText: '(indústria, comércio ou serviços)' },
    { label: 'Startups e Negócios Inovadores', subText: '' },
    { label: 'Universidades e Institutos de Pesquisa', subText: '' },
    { label: 'ONGs, Coletivos e Projetos Sociais', subText: '' },
    { label: 'Investidores', subText: '(anjo, fundos, corporate venture)' },
    { label: 'Comunidades e Associações Locais', subText: '' },
  ]

  // CNPJ Mask Helper
  const handleCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '')
    if (value.length > 14) value = value.slice(0, 14)

    if (value.length > 12) {
      value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
    } else if (value.length > 8) {
      value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{0,4})/, '$1.$2.$3/$4')
    } else if (value.length > 5) {
      value = value.replace(/^(\d{2})(\d{3})(\d{0,3})/, '$1.$2.$3')
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,3})/, '$1.$2')
    }

    setCnpj(value)
  }

  // Upload Handlers
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        setLogoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleBannerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        setBannerPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  // Checkbox Selection Handler with Max Limit
  const handleCheckboxToggle = (
    item: string,
    currentList: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    maxLimit: number = 3
  ) => {
    if (currentList.includes(item)) {
      setList(currentList.filter(i => i !== item))
    } else {
      if (currentList.length < maxLimit) {
        setList([...currentList, item])
      }
    }
  }

  const handleNextStep = () => {
    setCurrentStep(2)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlePrevStep = () => {
    setCurrentStep(1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 600)
  }

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
      {/* ── Top Header ── */}
      <header
        style={{
          backgroundColor: '#fff',
          height: '60px',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #e2e8f0',
          position: 'sticky',
          top: 0,
          zIndex: 30,
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
        }}
      >
        {/* Left Logos */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link to="/legacy" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src={logoCoreto} alt="Coreto" style={{ height: '30px', objectFit: 'contain' }} />
          </Link>
          <div style={{ width: '1px', height: '26px', backgroundColor: '#e2e8f0' }} />
          <img src={logoAbdi} alt="ABDI" style={{ height: '26px', objectFit: 'contain' }} />
          <img src={logoEmprel} alt="Emprel" style={{ height: '22px', objectFit: 'contain' }} />
        </div>

        {/* Right User Profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.5">
            <circle cx="12" cy="5" r="2.5" />
            <circle cx="4.5" cy="19" r="2.5" />
            <circle cx="19.5" cy="19" r="2.5" />
            <path d="M12 7.5v3.5M12 11L6 17M12 11l6 6" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: '14px', fontWeight: 600, color: '#1A202C' }}>Pedro</span>
          <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#003B6D' }}>
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </header>

      <div style={{ display: 'flex', flex: 1 }}>
        {/* ── Left Sidebar ── */}
        <aside
          style={{
            width: '175px',
            backgroundColor: '#fff',
            borderRight: '1px solid #e2e8f0',
            paddingTop: '16px',
            paddingBottom: '48px',
            flexShrink: 0,
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', fontSize: '13px' }}>
            {/* Início */}
            <Link
              to="/legacy"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '9px 14px',
                fontWeight: 600,
                color: '#00a8b5',
                textDecoration: 'none',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00a8b5" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="12" cy="12" r="1.5" fill="#00a8b5" stroke="none" />
              </svg>
              <span>Início</span>
            </Link>

            {/* Meus programas */}
            <a
              href="#"
              onClick={e => e.preventDefault()}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '9px 14px',
                fontWeight: 600,
                color: '#00a8b5',
                textDecoration: 'none',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e05c5c" strokeWidth="1.8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                />
              </svg>
              <span>Meus programas</span>
            </a>

            {/* Section Header: Resolvedor */}
            <div style={{ padding: '16px 14px 6px' }}>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#1A202C' }}>Resolvedor</span>
            </div>

            {/* Oportunidades */}
            <a
              href="#"
              onClick={e => e.preventDefault()}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '9px 14px',
                fontWeight: 600,
                color: '#00a8b5',
                textDecoration: 'none',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00a8b5" strokeWidth="1.8">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <path d="M8.59 13.51l6.83 3.98M15.41 6.51L8.59 10.49" strokeLinecap="round" />
              </svg>
              <span>Oportunidades</span>
            </a>

            {/* Criar solução */}
            <a
              href="#"
              onClick={e => e.preventDefault()}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '9px 14px',
                fontWeight: 600,
                color: '#9333EA',
                textDecoration: 'none',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9333EA" strokeWidth="1.8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072m-2.828 9.9a9 9 0 010-12.728"
                />
              </svg>
              <span>Criar solução</span>
            </a>

            {/* Benefícios */}
            <a
              href="#"
              onClick={e => e.preventDefault()}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '9px 14px',
                fontWeight: 600,
                color: '#00a8b5',
                textDecoration: 'none',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00a8b5" strokeWidth="1.8">
                <circle cx="12" cy="12" r="4" />
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-20 12 12)" />
              </svg>
              <span>Benefícios</span>
            </a>

            {/* Painel */}
            <a
              href="#"
              onClick={e => e.preventDefault()}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '9px 14px',
                fontWeight: 600,
                color: '#00a8b5',
                textDecoration: 'none',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00a8b5" strokeWidth="1.8">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              <span>Painel</span>
            </a>

            <div style={{ margin: '12px 14px 6px', borderTop: '1px solid #e2e8f0' }} />

            {/* GERAL */}
            <div style={{ padding: '4px 14px 6px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#1A202C', letterSpacing: '0.05em' }}>
                GERAL
              </span>
            </div>

            {/* Ajuda */}
            <a
              href="#"
              onClick={e => e.preventDefault()}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '9px 14px',
                fontWeight: 600,
                color: '#00a8b5',
                textDecoration: 'none',
              }}
            >
              <span style={{ color: '#f59e0b', fontWeight: 700, fontSize: '14px', width: '16px', textAlign: 'center' }}>
                ?
              </span>
              <span>Ajuda</span>
            </a>

            {/* Sair */}
            <a
              href="#"
              onClick={e => e.preventDefault()}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '9px 14px',
                fontWeight: 600,
                color: '#00a8b5',
                textDecoration: 'none',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00a8b5" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Sair</span>
            </a>
          </nav>
        </aside>

        {/* ── Main Content Form Area ── */}
        <main
          style={{
            flex: 1,
            padding: '32px 48px 64px 48px',
            maxWidth: '1020px',
            boxSizing: 'border-box',
          }}
        >
          {isSubmitted ? (
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                padding: '48px 32px',
                textAlign: 'center',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#DCFCE7',
                  color: '#16A34A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}
              >
                <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
                Cadastro de Resolvedor Realizado com Sucesso!
              </h1>
              <p style={{ fontSize: '15px', color: '#475569', maxWidth: '520px', margin: '0 auto 28px', lineHeight: 1.5 }}>
                Sua iniciativa foi cadastrada no ecossistema <strong>CORETO</strong>. Em breve você poderá se conectar com oportunidades, programas de inovação e novos parceiros!
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                <button
                  onClick={() => {
                    setIsSubmitted(false)
                    setCurrentStep(1)
                    setNomeIniciativa('')
                    setCnpj('')
                    setLogoPreview(null)
                    setBannerPreview(null)
                    setTipoIniciativa('')
                    setDescricaoIniciativa('')
                    setProblemaDesafio('')
                    setSolucaoConcreta('')
                    setPublicosAlvo([])
                    setAbrangenciaTerritorial('')
                    setResultadosAlcancados('')
                    setAreasAtuacao([])
                    setTrlMaturidade('')
                    setEstagioIniciativa('')
                    setTiposApoio([])
                    setTipoParceiroConectar('')
                    setObjetivo12Meses('')
                  }}
                  style={{
                    padding: '10px 24px',
                    borderRadius: '8px',
                    border: '1px solid #EF5A24',
                    color: '#EF5A24',
                    fontWeight: 600,
                    backgroundColor: '#ffffff',
                    cursor: 'pointer',
                    fontSize: '14px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Novo Cadastro
                </button>
                <Link
                  to="/legacy"
                  style={{
                    padding: '10px 24px',
                    borderRadius: '8px',
                    backgroundColor: '#EF5A24',
                    color: '#ffffff',
                    fontWeight: 600,
                    textDecoration: 'none',
                    fontSize: '14px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Voltar ao Painel
                </Link>
              </div>
            </div>
          ) : (
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                padding: '36px 40px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
              }}
            >
              {/* Header Title & Description */}
              <div style={{ marginBottom: '32px' }}>
                <h1
                  style={{
                    fontSize: '26px',
                    fontWeight: 800,
                    color: '#EF5A24',
                    margin: '0 0 10px 0',
                    letterSpacing: '-0.3px',
                  }}
                >
                  Cadastro de Resolvedores
                </h1>
                <p
                  style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    color: '#1E293B',
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  Queremos saber mais sobre a sua iniciativa! Quanto mais completas as informações, melhor para CORETO te conectar!
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                {/* ── STEP 1 ── */}
                {currentStep === 1 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                    {/* NOME DA INICIATIVA */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '13px',
                          fontWeight: 700,
                          color: '#003B6D',
                          marginBottom: '8px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.03em',
                        }}
                      >
                        NOME DA INICIATIVA <span style={{ color: '#EF5A24' }}>*</span>
                      </label>
                      <input
                        type="text"
                        value={nomeIniciativa}
                        onChange={e => setNomeIniciativa(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          backgroundColor: '#ffffff',
                          border: '1px solid #00A8B5',
                          borderRadius: '8px',
                          fontSize: '14px',
                          color: '#1E293B',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>

                    {/* CNPJ */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '13px',
                          fontWeight: 700,
                          color: '#003B6D',
                          marginBottom: '8px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.03em',
                        }}
                      >
                        CNPJ <span style={{ color: '#EF5A24' }}>*</span>
                      </label>
                      <input
                        type="text"
                        value={cnpj}
                        onChange={handleCnpjChange}
                        placeholder="00.000.000/0000-00"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          backgroundColor: '#ffffff',
                          border: '1px solid #00A8B5',
                          borderRadius: '8px',
                          fontSize: '14px',
                          color: '#1E293B',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>

                    {/* IDENTIDADE VISUAL */}
                    <div>
                      <h2
                        style={{
                          fontSize: '13px',
                          fontWeight: 700,
                          color: '#003B6D',
                          marginBottom: '12px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.03em',
                        }}
                      >
                        IDENTIDADE VISUAL
                      </h2>

                      <input
                        type="file"
                        accept="image/*"
                        ref={logoInputRef}
                        onChange={handleLogoUpload}
                        style={{ display: 'none' }}
                      />
                      <input
                        type="file"
                        accept="image/*"
                        ref={bannerInputRef}
                        onChange={handleBannerUpload}
                        style={{ display: 'none' }}
                      />

                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                          gap: '20px',
                        }}
                      >
                        {/* Logo Box */}
                        <div>
                          <div style={{ fontSize: '12px', color: '#475569', marginBottom: '6px' }}>
                            <strong style={{ color: '#1E293B' }}>LOGO</strong> · 150 x 150 px
                          </div>
                          <div
                            onClick={() => logoInputRef.current?.click()}
                            style={{
                              height: '140px',
                              backgroundColor: '#ffffff',
                              border: '1px solid #CBD5E1',
                              borderRadius: '8px',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              padding: '16px',
                              textAlign: 'center',
                              transition: 'all 0.2s ease',
                              position: 'relative',
                              overflow: 'hidden',
                            }}
                            onMouseEnter={e => {
                              ;(e.currentTarget as HTMLDivElement).style.borderColor = '#00A8B5'
                              ;(e.currentTarget as HTMLDivElement).style.backgroundColor = '#F8FAFC'
                            }}
                            onMouseLeave={e => {
                              ;(e.currentTarget as HTMLDivElement).style.borderColor = '#CBD5E1'
                              ;(e.currentTarget as HTMLDivElement).style.backgroundColor = '#ffffff'
                            }}
                          >
                            {logoPreview ? (
                              <img
                                src={logoPreview}
                                alt="Logo Preview"
                                style={{ maxHeight: '100px', maxWidth: '100%', objectFit: 'contain' }}
                              />
                            ) : (
                              <span style={{ fontSize: '13px', color: '#94A3B8', fontWeight: 500 }}>
                                Clique para adicionar uma LOGO
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Banner Box */}
                        <div>
                          <div style={{ fontSize: '12px', color: '#475569', marginBottom: '6px' }}>
                            <strong style={{ color: '#1E293B' }}>BANNER</strong> · 1280 x 200 px
                          </div>
                          <div
                            onClick={() => bannerInputRef.current?.click()}
                            style={{
                              height: '140px',
                              backgroundColor: '#ffffff',
                              border: '1px solid #CBD5E1',
                              borderRadius: '8px',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              padding: '16px',
                              textAlign: 'center',
                              transition: 'all 0.2s ease',
                              position: 'relative',
                              overflow: 'hidden',
                            }}
                            onMouseEnter={e => {
                              ;(e.currentTarget as HTMLDivElement).style.borderColor = '#00A8B5'
                              ;(e.currentTarget as HTMLDivElement).style.backgroundColor = '#F8FAFC'
                            }}
                            onMouseLeave={e => {
                              ;(e.currentTarget as HTMLDivElement).style.borderColor = '#CBD5E1'
                              ;(e.currentTarget as HTMLDivElement).style.backgroundColor = '#ffffff'
                            }}
                          >
                            {bannerPreview ? (
                              <img
                                src={bannerPreview}
                                alt="Banner Preview"
                                style={{ maxHeight: '100px', maxWidth: '100%', objectFit: 'cover' }}
                              />
                            ) : (
                              <span style={{ fontSize: '13px', color: '#94A3B8', fontWeight: 500 }}>
                                Clique para adicionar um BANNER
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* TIPO DA INICIATIVA */}
                    <div>
                      <h2
                        style={{
                          fontSize: '13px',
                          fontWeight: 700,
                          color: '#003B6D',
                          marginBottom: '14px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.03em',
                        }}
                      >
                        TIPO DA INICIATIVA <span style={{ color: '#EF5A24' }}>*</span>
                      </h2>

                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(4, 1fr)',
                          gap: '14px',
                        }}
                      >
                        {tiposIniciativaOptions.map(option => (
                          <SelectableCard
                            key={option}
                            label={option}
                            isSelected={tipoIniciativa === option}
                            onClick={() => setTipoIniciativa(option)}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Next Button */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                      <OutlineButton onClick={handleNextStep}>
                        <span>Próxima Página</span>
                        <span style={{ fontSize: '16px' }}>→</span>
                      </OutlineButton>
                    </div>
                  </div>
                )}

                {/* ── STEP 2 ── */}
                {currentStep === 2 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                    {/* Explique, em poucas palavras, o que é sua iniciativa: */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '14px',
                          fontWeight: 700,
                          color: '#0F172A',
                          marginBottom: '8px',
                        }}
                      >
                        Explique, em poucas palavras, o que é sua iniciativa: <span style={{ color: '#EF5A24' }}>*</span>
                      </label>
                      <textarea
                        rows={4}
                        maxLength={500}
                        placeholder="Até 500 caracteres"
                        value={descricaoIniciativa}
                        onChange={e => setDescricaoIniciativa(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          backgroundColor: '#ffffff',
                          border: '1px solid #00A8B5',
                          borderRadius: '8px',
                          fontSize: '14px',
                          color: '#1E293B',
                          outline: 'none',
                          boxSizing: 'border-box',
                          fontFamily: 'inherit',
                          resize: 'vertical',
                        }}
                      />
                      <div style={{ fontSize: '12px', color: '#94A3B8', textAlign: 'right', marginTop: '4px' }}>
                        {descricaoIniciativa.length} / 500
                      </div>
                    </div>

                    {/* Qual é o principal problema, dor ou desafio que a iniciativa busca enfrentar? */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '14px',
                          fontWeight: 700,
                          color: '#0F172A',
                          marginBottom: '8px',
                        }}
                      >
                        Qual é o principal problema, dor ou desafio que a iniciativa busca enfrentar? <span style={{ color: '#EF5A24' }}>*</span>
                      </label>
                      <textarea
                        rows={4}
                        maxLength={500}
                        placeholder="Até 500 caracteres"
                        value={problemaDesafio}
                        onChange={e => setProblemaDesafio(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          backgroundColor: '#ffffff',
                          border: '1px solid #00A8B5',
                          borderRadius: '8px',
                          fontSize: '14px',
                          color: '#1E293B',
                          outline: 'none',
                          boxSizing: 'border-box',
                          fontFamily: 'inherit',
                          resize: 'vertical',
                        }}
                      />
                      <div style={{ fontSize: '12px', color: '#94A3B8', textAlign: 'right', marginTop: '4px' }}>
                        {problemaDesafio.length} / 500
                      </div>
                    </div>

                    {/* O que sua iniciativa faz, concretamente, para enfrentar esse problema */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '14px',
                          fontWeight: 700,
                          color: '#0F172A',
                          marginBottom: '8px',
                          lineHeight: 1.4,
                        }}
                      >
                        O que sua iniciativa faz, concretamente, para enfrentar esse problema (produto, serviço, tecnologia, metodologia, programa, etc.)? <span style={{ color: '#EF5A24' }}>*</span>
                      </label>
                      <textarea
                        rows={4}
                        maxLength={500}
                        placeholder="Até 500 caracteres"
                        value={solucaoConcreta}
                        onChange={e => setSolucaoConcreta(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          backgroundColor: '#ffffff',
                          border: '1px solid #00A8B5',
                          borderRadius: '8px',
                          fontSize: '14px',
                          color: '#1E293B',
                          outline: 'none',
                          boxSizing: 'border-box',
                          fontFamily: 'inherit',
                          resize: 'vertical',
                        }}
                      />
                      <div style={{ fontSize: '12px', color: '#94A3B8', textAlign: 'right', marginTop: '4px' }}>
                        {solucaoConcreta.length} / 500
                      </div>
                    </div>

                    {/* Quem são os principais públicos ou beneficiários da sua iniciativa? */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '14px',
                          fontWeight: 700,
                          color: '#0F172A',
                          marginBottom: '4px',
                        }}
                      >
                        Quem são os principais públicos ou beneficiários da sua iniciativa? <span style={{ color: '#EF5A24' }}>*</span>
                      </label>
                      <div style={{ fontSize: '13px', color: '#64748B', marginBottom: '12px' }}>
                        Selecione até 3:
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {publicosOptions.map(option => {
                          const isChecked = publicosAlvo.includes(option)
                          return (
                            <label
                              key={option}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: 500,
                                color: '#1E293B',
                                userSelect: 'none',
                              }}
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() =>
                                  handleCheckboxToggle(option, publicosAlvo, setPublicosAlvo, 3)
                                }
                                style={{
                                  width: '16px',
                                  height: '16px',
                                  accentColor: '#00A8B5',
                                  cursor: 'pointer',
                                }}
                              />
                              <span>{option}</span>
                            </label>
                          )
                        })}
                      </div>
                    </div>

                    {/* Indique a abrangência territorial onde sua iniciativa atua hoje: */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '14px',
                          fontWeight: 700,
                          color: '#0F172A',
                          marginBottom: '12px',
                        }}
                      >
                        Indique a abrangência territorial onde sua iniciativa atua hoje:
                      </label>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                        {abrangenciaOptions.map(option => (
                          <SelectableCard
                            key={option}
                            label={option}
                            isSelected={abrangenciaTerritorial === option}
                            onClick={() => setAbrangenciaTerritorial(option)}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Principais resultados já alcançados: */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '14px',
                          fontWeight: 700,
                          color: '#0F172A',
                          marginBottom: '8px',
                        }}
                      >
                        Principais resultados já alcançados:
                      </label>
                      <textarea
                        rows={4}
                        maxLength={500}
                        placeholder="Até 500 caracteres"
                        value={resultadosAlcancados}
                        onChange={e => setResultadosAlcancados(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          backgroundColor: '#ffffff',
                          border: '1px solid #00A8B5',
                          borderRadius: '8px',
                          fontSize: '14px',
                          color: '#1E293B',
                          outline: 'none',
                          boxSizing: 'border-box',
                          fontFamily: 'inherit',
                          resize: 'vertical',
                        }}
                      />
                      <div style={{ fontSize: '12px', color: '#94A3B8', textAlign: 'right', marginTop: '4px' }}>
                        {resultadosAlcancados.length} / 500
                      </div>
                    </div>

                    {/* Em quais áreas sua iniciativa atua? */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '14px',
                          fontWeight: 700,
                          color: '#0F172A',
                          marginBottom: '4px',
                        }}
                      >
                        Em quais áreas sua iniciativa atua? <span style={{ color: '#EF5A24' }}>*</span>
                      </label>
                      <div style={{ fontSize: '13px', color: '#64748B', marginBottom: '12px' }}>
                        Selecione até 3:
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {areasOptions.map(option => {
                          const isChecked = areasAtuacao.includes(option)
                          return (
                            <label
                              key={option}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: 500,
                                color: '#1E293B',
                                userSelect: 'none',
                              }}
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() =>
                                  handleCheckboxToggle(option, areasAtuacao, setAreasAtuacao, 3)
                                }
                                style={{
                                  width: '16px',
                                  height: '16px',
                                  accentColor: '#00A8B5',
                                  cursor: 'pointer',
                                }}
                              />
                              <span>{option}</span>
                            </label>
                          )
                        })}
                      </div>
                    </div>

                    {/* Em que nível de maturidade tecnológica sua solução está hoje? */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '14px',
                          fontWeight: 700,
                          color: '#0F172A',
                          marginBottom: '12px',
                        }}
                      >
                        Em que nível de maturidade tecnológica sua solução está hoje? <span style={{ color: '#EF5A24' }}>*</span>
                      </label>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }}>
                        {trlOptions.map(item => (
                          <SelectableCard
                            key={item.label}
                            label={item.label}
                            subText={item.subText}
                            isSelected={trlMaturidade === item.label}
                            onClick={() => setTrlMaturidade(item.label)}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Em que estágio sua iniciativa está hoje? */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '14px',
                          fontWeight: 700,
                          color: '#0F172A',
                          marginBottom: '12px',
                        }}
                      >
                        Em que estágio sua iniciativa está hoje? <span style={{ color: '#EF5A24' }}>*</span>
                      </label>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }}>
                        {estagioOptions.map(option => (
                          <SelectableCard
                            key={option}
                            label={option}
                            isSelected={estagioIniciativa === option}
                            onClick={() => setEstagioIniciativa(option)}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Que tipo de apoio você busca em CORETO nos próximos meses? */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '14px',
                          fontWeight: 700,
                          color: '#0F172A',
                          marginBottom: '4px',
                        }}
                      >
                        Que tipo de apoio você busca em CORETO nos próximos meses? <span style={{ color: '#EF5A24' }}>*</span>
                      </label>
                      <div style={{ fontSize: '13px', color: '#64748B', marginBottom: '12px' }}>
                        Selecione até 3 opções que sejam prioridade para sua iniciativa:
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {tiposApoioOptions.map(option => {
                          const isChecked = tiposApoio.includes(option)
                          return (
                            <label
                              key={option}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'flex-start',
                                gap: '10px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: 500,
                                color: '#1E293B',
                                userSelect: 'none',
                                lineHeight: 1.4,
                              }}
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() =>
                                  handleCheckboxToggle(option, tiposApoio, setTiposApoio, 3)
                                }
                                style={{
                                  width: '16px',
                                  height: '16px',
                                  accentColor: '#00A8B5',
                                  cursor: 'pointer',
                                  marginTop: '2px',
                                }}
                              />
                              <span>{option}</span>
                            </label>
                          )
                        })}
                      </div>
                    </div>

                    {/* Com qual tipo de parceiro você mais quer se conectar hoje? */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '14px',
                          fontWeight: 700,
                          color: '#0F172A',
                          marginBottom: '12px',
                        }}
                      >
                        Com qual tipo de parceiro você <strong>mais</strong> quer se conectar hoje? <span style={{ color: '#EF5A24' }}>*</span>
                      </label>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }}>
                        {tipoParceiroOptions.map(item => (
                          <SelectableCard
                            key={item.label}
                            label={item.label}
                            subText={item.subText}
                            isSelected={tipoParceiroConectar === item.label}
                            onClick={() => setTipoParceiroConectar(item.label)}
                          />
                        ))}
                      </div>
                    </div>

                    {/* O que você gostaria de conquistar através do CORETO nos próximos 12 meses? */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '14px',
                          fontWeight: 700,
                          color: '#0F172A',
                          marginBottom: '8px',
                        }}
                      >
                        O que você gostaria de conquistar através do CORETO nos próximos 12 meses?
                      </label>
                      <textarea
                        rows={4}
                        maxLength={500}
                        placeholder="Até 500 caracteres"
                        value={objetivo12Meses}
                        onChange={e => setObjetivo12Meses(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          backgroundColor: '#ffffff',
                          border: '1px solid #00A8B5',
                          borderRadius: '8px',
                          fontSize: '14px',
                          color: '#1E293B',
                          outline: 'none',
                          boxSizing: 'border-box',
                          fontFamily: 'inherit',
                          resize: 'vertical',
                        }}
                      />
                      <div style={{ fontSize: '12px', color: '#94A3B8', textAlign: 'right', marginTop: '4px' }}>
                        {objetivo12Meses.length} / 500
                      </div>
                    </div>

                    {/* Actions: Prev & Submit */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '16px',
                        paddingTop: '20px',
                        borderTop: '1px solid #E2E8F0',
                      }}
                    >
                      <OutlineButton onClick={handlePrevStep}>
                        <span>← Página Anterior</span>
                      </OutlineButton>

                      <OutlineButton type="submit" disabled={isLoading}>
                        <span>{isLoading ? 'Enviando...' : 'Finalizar'}</span>
                        <span style={{ fontSize: '16px' }}>✓</span>
                      </OutlineButton>
                    </div>
                  </div>
                )}
              </form>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import logoCoreto from '../../../assets/logo-coreto.png'
import logoAbdi from '../../../assets/logo-abdi.png'
import logoEmprel from '../../../assets/logo-emprel.png'

interface MultiSelectProps {
  label?: string
  placeholder: string
  options: string[]
  selected: string[]
  onChange: (selected: string[]) => void
}

function MultiSelectInput({ label, placeholder, options, selected, onChange }: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)

  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter(item => item !== option))
    } else {
      onChange([...selected, option])
    }
  }

  const removeTag = (e: React.MouseEvent, option: string) => {
    e.stopPropagation()
    onChange(selected.filter(item => item !== option))
  }

  const filteredOptions = options.filter(
    opt => !selected.includes(opt) && opt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div style={{ position: 'relative', width: '100%' }} ref={containerRef}>
      {label && (
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
          {label}
        </label>
      )}

      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          minHeight: '46px',
          backgroundColor: '#ffffff',
          border: isOpen ? '1px solid #00a8b5' : '1px solid #CBD5E1',
          borderRadius: '8px',
          padding: '8px 14px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          boxShadow: isOpen ? '0 0 0 3px rgba(0, 168, 181, 0.15)' : 'none',
          transition: 'all 0.2s ease',
        }}
      >
        {selected.length === 0 && (
          <span style={{ color: '#94A3B8', fontSize: '14px' }}>{placeholder}</span>
        )}

        {selected.map(item => (
          <span
            key={item}
            style={{
              backgroundColor: 'rgba(0, 168, 181, 0.1)',
              color: '#007A87',
              fontSize: '13px',
              fontWeight: 600,
              padding: '4px 10px',
              borderRadius: '16px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              border: '1px solid rgba(0, 168, 181, 0.25)',
            }}
          >
            {item}
            <span
              onClick={e => removeTag(e, item)}
              style={{
                cursor: 'pointer',
                fontSize: '14px',
                lineHeight: 1,
                borderRadius: '50%',
                width: '16px',
                height: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 168, 181, 0.2)',
                color: '#004D56',
              }}
            >
              ×
            </span>
          </span>
        ))}

        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="#64748B"
            viewBox="0 0 24 24"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            marginTop: '4px',
            backgroundColor: '#ffffff',
            border: '1px solid #E2E8F0',
            borderRadius: '8px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            zIndex: 50,
            maxHeight: '220px',
            overflowY: 'auto',
            padding: '6px 0',
          }}
        >
          <div style={{ padding: '6px 12px', borderBottom: '1px solid #F1F5F9' }}>
            <input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              onClick={e => e.stopPropagation()}
              style={{
                width: '100%',
                padding: '6px 10px',
                fontSize: '13px',
                border: '1px solid #CBD5E1',
                borderRadius: '6px',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>
          {filteredOptions.length === 0 ? (
            <div style={{ padding: '10px 14px', fontSize: '13px', color: '#94A3B8' }}>
              Nenhuma opção encontrada
            </div>
          ) : (
            filteredOptions.map(opt => (
              <div
                key={opt}
                onClick={e => {
                  e.stopPropagation()
                  toggleOption(opt)
                }}
                style={{
                  padding: '8px 14px',
                  fontSize: '13px',
                  color: '#334155',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease',
                }}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLDivElement).style.backgroundColor = '#F1F5F9'
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLDivElement).style.backgroundColor = 'transparent'
                }}
              >
                {opt}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}

export default function InscricaoTalentoPage() {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false)

  // Step 1 - Personal Details & Avatar
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  const [nomeCompleto, setNomeCompleto] = useState('Pedro Dhalia')
  const [nomeSocial, setNomeSocial] = useState('Pedro Dhalia')
  const [cpf, setCpf] = useState('09477893404')
  const [dataNascimento, setDataNascimento] = useState('')
  const [genero, setGenero] = useState('')
  const [identificacaoEtnica, setIdentificacaoEtnica] = useState('')
  const [numeroWhatsapp, setNumeroWhatsapp] = useState('')
  const [estado, setEstado] = useState('')
  const [cidade, setCidade] = useState('')
  const [email, setEmail] = useState('pedro.dhalia@gmail.com')

  // Step 2 - Professional Details & Interests
  const [escolaridade, setEscolaridade] = useState('')
  const [instituicaoEnsino, setInstituicaoEnsino] = useState('')
  const [lattes, setLattes] = useState('')
  const [linkedIn, setLinkedIn] = useState('')
  const [atuacaoProfissional, setAtuacaoProfissional] = useState('')
  const [linksExternos, setLinksExternos] = useState('')

  // Multi-select Interests & Keywords
  const [oqueBusco, setOqueBusco] = useState<string[]>([])
  const [assuntosDefinem, setAssuntosDefinem] = useState<string[]>([])

  // Notifications
  const [notificacaoWhatsapp, setNotificacaoWhatsapp] = useState(false)
  const [notificacaoEmail, setNotificacaoEmail] = useState(false)

  const avatarInputRef = useRef<HTMLInputElement>(null)

  // Options
  const generosOptions = ['Masculino', 'Feminino', 'Não-binário', 'Prefiro não informar', 'Outro']
  const etniasOptions = ['Branca', 'Preta', 'Parda', 'Amarela', 'Indígena', 'Prefiro não declarar']
  const escolaridadeOptions = [
    'Ensino Médio Incompleto',
    'Ensino Médio Completo',
    'Ensino Técnico',
    'Ensino Superior Cursando',
    'Ensino Superior Completo',
    'Pós-graduação / Especialização',
    'Mestrado',
    'Doutorado',
  ]

  const estadosBR = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
    'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
    'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
  ]

  const palavrasChaveOptions = [
    'Inteligência Artificial',
    'Ciência de Dados',
    'Desenvolvimento Web',
    'Design de Experiência (UX/UI)',
    'Gestão de Produtos',
    'Inovação Aberta',
    'Cidades Inteligentes (Smart Cities)',
    'Sustentabilidade & ESG',
    'GovTech',
    'HealthTech',
    'EdTech',
    'FinTech',
    'AgTech',
    'CleanTech',
    'Marketing Digital',
    'Vendas & Negócios',
    'Pitch & Storytelling',
    'Metodologias Ágeis',
    'Recursos Humanos & Talentos',
    'Captação de Recursos',
  ]

  // Avatar Upload Handler
  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  // Handle Form Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Handle Delete Profile
  const handleDeleteProfile = () => {
    setShowDeleteModal(false)
    setIsSubmitted(true)
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

        {/* ── Main Content Area ── */}
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
                Perfil de Talento Salvo com Sucesso!
              </h1>
              <p style={{ fontSize: '15px', color: '#475569', maxWidth: '520px', margin: '0 auto 28px', lineHeight: 1.5 }}>
                Suas informações de perfil foram registradas no ecossistema <strong>CORETO</strong>.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                <button
                  onClick={() => {
                    setIsSubmitted(false)
                    setCurrentStep(1)
                  }}
                  style={{
                    padding: '10px 24px',
                    borderRadius: '8px',
                    border: '1px solid #00a8b5',
                    color: '#00a8b5',
                    fontWeight: 600,
                    backgroundColor: '#ffffff',
                    cursor: 'pointer',
                    fontSize: '14px',
                  }}
                >
                  Editar Perfil
                </button>
                <Link
                  to="/legacy"
                  style={{
                    padding: '10px 24px',
                    borderRadius: '8px',
                    backgroundColor: '#00a8b5',
                    color: '#ffffff',
                    fontWeight: 600,
                    textDecoration: 'none',
                    fontSize: '14px',
                    display: 'inline-flex',
                    alignItems: 'center',
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
                position: 'relative',
              }}
            >
              {/* Header Title & Description */}
              <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h1
                    style={{
                      fontSize: '26px',
                      fontWeight: 800,
                      color: '#2A1B4E',
                      margin: '0 0 10px 0',
                      letterSpacing: '-0.3px',
                    }}
                  >
                    Perfil de Talento
                  </h1>
                  <p
                    style={{
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#475569',
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    Queremos saber mais sobre você! Quanto mais completas as informações, melhor!
                  </p>
                </div>

                {/* Voltar button on Step 2 */}
                {currentStep === 2 && (
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentStep(1)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    style={{
                      padding: '8px 18px',
                      borderRadius: '20px',
                      border: '1.5px solid #00a8b5',
                      backgroundColor: '#ffffff',
                      color: '#00a8b5',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 12H3m0 0l7-7m-7 7l7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Voltar
                  </button>
                )}
              </div>

              <form onSubmit={handleSubmit}>
                {/* ── STEP 1: Foto e Dados Pessoais ── */}
                {currentStep === 1 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    {/* Foto de Perfil */}
                    <div>
                      <h2
                        style={{
                          fontSize: '15px',
                          fontWeight: 700,
                          color: '#2A1B4E',
                          marginBottom: '16px',
                        }}
                      >
                        Foto de Perfil
                      </h2>

                      <input
                        type="file"
                        accept="image/*"
                        ref={avatarInputRef}
                        onChange={handleAvatarUpload}
                        style={{ display: 'none' }}
                      />

                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div
                          onClick={() => avatarInputRef.current?.click()}
                          style={{
                            width: '90px',
                            height: '90px',
                            borderRadius: '50%',
                            border: '1.5px solid #00a8b5',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            backgroundColor: '#F8FAFC',
                            overflow: 'hidden',
                            position: 'relative',
                            flexShrink: 0,
                          }}
                        >
                          {avatarPreview ? (
                            <img src={avatarPreview} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          ) : (
                            <span style={{ color: '#EF5A24', fontWeight: 600, fontSize: '13px' }}>Selecione</span>
                          )}
                        </div>

                        <span style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.4 }}>
                          Utilize imagens com proporção
                          <br />
                          150 x 150
                        </span>
                      </div>
                    </div>

                    {/* Dados pessoais */}
                    <div>
                      <h2
                        style={{
                          fontSize: '16px',
                          fontWeight: 700,
                          color: '#2A1B4E',
                          marginBottom: '20px',
                        }}
                      >
                        Dados pessoais
                      </h2>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {/* Nome completo */}
                        <div style={{ position: 'relative' }}>
                          <label
                            style={{
                              position: 'absolute',
                              top: '-9px',
                              left: '12px',
                              backgroundColor: '#ffffff',
                              padding: '0 6px',
                              fontSize: '12px',
                              fontWeight: 500,
                              color: '#94A3B8',
                              zIndex: 2,
                            }}
                          >
                            Nome completo
                          </label>
                          <input
                            type="text"
                            value={nomeCompleto}
                            onChange={e => setNomeCompleto(e.target.value)}
                            style={{
                              width: '100%',
                              padding: '12px 14px',
                              backgroundColor: '#ffffff',
                              border: '1px solid #CBD5E1',
                              borderRadius: '8px',
                              fontSize: '14px',
                              color: '#1E293B',
                              outline: 'none',
                              boxSizing: 'border-box',
                            }}
                          />
                        </div>

                        {/* Nome Social */}
                        <div style={{ position: 'relative' }}>
                          <label
                            style={{
                              position: 'absolute',
                              top: '-9px',
                              left: '12px',
                              backgroundColor: '#ffffff',
                              padding: '0 6px',
                              fontSize: '12px',
                              fontWeight: 500,
                              color: '#94A3B8',
                              zIndex: 2,
                            }}
                          >
                            Nome Social
                          </label>
                          <input
                            type="text"
                            value={nomeSocial}
                            onChange={e => setNomeSocial(e.target.value)}
                            style={{
                              width: '100%',
                              padding: '12px 14px',
                              backgroundColor: '#ffffff',
                              border: '1px solid #CBD5E1',
                              borderRadius: '8px',
                              fontSize: '14px',
                              color: '#1E293B',
                              outline: 'none',
                              boxSizing: 'border-box',
                            }}
                          />
                        </div>

                        {/* Grid: CPF & Data de Nascimento */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                          {/* CPF */}
                          <div style={{ position: 'relative' }}>
                            <label
                              style={{
                                position: 'absolute',
                                top: '-9px',
                                left: '12px',
                                backgroundColor: '#ffffff',
                                padding: '0 6px',
                                fontSize: '12px',
                                fontWeight: 500,
                                color: '#94A3B8',
                                zIndex: 2,
                              }}
                            >
                              CPF
                            </label>
                            <input
                              type="text"
                              value={cpf}
                              onChange={e => setCpf(e.target.value)}
                              style={{
                                width: '100%',
                                padding: '12px 14px',
                                backgroundColor: '#ffffff',
                                border: '1px solid #CBD5E1',
                                borderRadius: '8px',
                                fontSize: '14px',
                                color: '#1E293B',
                                outline: 'none',
                                boxSizing: 'border-box',
                              }}
                            />
                          </div>

                          {/* Data de nascimento */}
                          <div style={{ position: 'relative' }}>
                            <label
                              style={{
                                position: 'absolute',
                                top: '-9px',
                                left: '12px',
                                backgroundColor: '#ffffff',
                                padding: '0 6px',
                                fontSize: '12px',
                                fontWeight: 500,
                                color: '#94A3B8',
                                zIndex: 2,
                              }}
                            >
                              Data de nascimento
                            </label>
                            <div style={{ position: 'relative', width: '100%' }}>
                              <input
                                type="date"
                                value={dataNascimento}
                                onChange={e => setDataNascimento(e.target.value)}
                                style={{
                                  width: '100%',
                                  padding: '12px 14px',
                                  backgroundColor: '#ffffff',
                                  border: '1px solid #CBD5E1',
                                  borderRadius: '8px',
                                  fontSize: '14px',
                                  color: dataNascimento ? '#1E293B' : '#94A3B8',
                                  outline: 'none',
                                  boxSizing: 'border-box',
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Grid: Gênero & Identificação étnica */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                          {/* Gênero */}
                          <div style={{ position: 'relative' }}>
                            <select
                              value={genero}
                              onChange={e => setGenero(e.target.value)}
                              style={{
                                width: '100%',
                                padding: '12px 14px',
                                backgroundColor: '#ffffff',
                                border: '1px solid #CBD5E1',
                                borderRadius: '8px',
                                fontSize: '14px',
                                color: genero ? '#1E293B' : '#94A3B8',
                                outline: 'none',
                                boxSizing: 'border-box',
                                appearance: 'none',
                              }}
                            >
                              <option value="" disabled hidden>
                                Gênero
                              </option>
                              {generosOptions.map(g => (
                                <option key={g} value={g}>
                                  {g}
                                </option>
                              ))}
                            </select>
                            <div
                              style={{
                                position: 'absolute',
                                right: '14px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                pointerEvents: 'none',
                              }}
                            >
                              <svg width="12" height="12" fill="#64748B" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>

                          {/* Identificação étnica */}
                          <div style={{ position: 'relative' }}>
                            <select
                              value={identificacaoEtnica}
                              onChange={e => setIdentificacaoEtnica(e.target.value)}
                              style={{
                                width: '100%',
                                padding: '12px 14px',
                                backgroundColor: '#ffffff',
                                border: '1px solid #CBD5E1',
                                borderRadius: '8px',
                                fontSize: '14px',
                                color: identificacaoEtnica ? '#1E293B' : '#94A3B8',
                                outline: 'none',
                                boxSizing: 'border-box',
                                appearance: 'none',
                              }}
                            >
                              <option value="" disabled hidden>
                                Identificação étnica
                              </option>
                              {etniasOptions.map(e => (
                                <option key={e} value={e}>
                                  {e}
                                </option>
                              ))}
                            </select>
                            <div
                              style={{
                                position: 'absolute',
                                right: '14px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                pointerEvents: 'none',
                              }}
                            >
                              <svg width="12" height="12" fill="#64748B" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Número Whatsapp */}
                        <div style={{ position: 'relative', width: '50%' }}>
                          <label
                            style={{
                              position: 'absolute',
                              top: '-9px',
                              left: '12px',
                              backgroundColor: '#ffffff',
                              padding: '0 6px',
                              fontSize: '12px',
                              fontWeight: 500,
                              color: '#94A3B8',
                              zIndex: 2,
                            }}
                          >
                            Número Whatsapp
                          </label>
                          <input
                            type="text"
                            value={numeroWhatsapp}
                            onChange={e => setNumeroWhatsapp(e.target.value)}
                            placeholder="(00) 00000-0000"
                            style={{
                              width: '100%',
                              padding: '12px 14px',
                              backgroundColor: '#ffffff',
                              border: '1px solid #CBD5E1',
                              borderRadius: '8px',
                              fontSize: '14px',
                              color: '#1E293B',
                              outline: 'none',
                              boxSizing: 'border-box',
                            }}
                          />
                        </div>

                        {/* Section: De onde você é? */}
                        <div style={{ marginTop: '8px' }}>
                          <h3
                            style={{
                              fontSize: '16px',
                              fontWeight: 700,
                              color: '#2A1B4E',
                              marginBottom: '16px',
                            }}
                          >
                            De onde você é?
                          </h3>

                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            {/* Estado */}
                            <div style={{ position: 'relative' }}>
                              <select
                                value={estado}
                                onChange={e => setEstado(e.target.value)}
                                style={{
                                  width: '100%',
                                  padding: '12px 14px',
                                  backgroundColor: '#ffffff',
                                  border: '1px solid #CBD5E1',
                                  borderRadius: '8px',
                                  fontSize: '14px',
                                  color: estado ? '#1E293B' : '#94A3B8',
                                  outline: 'none',
                                  boxSizing: 'border-box',
                                  appearance: 'none',
                                }}
                              >
                                <option value="" disabled hidden>
                                  Estado
                                </option>
                                {estadosBR.map(uf => (
                                  <option key={uf} value={uf}>
                                    {uf}
                                  </option>
                                ))}
                              </select>
                              <div
                                style={{
                                  position: 'absolute',
                                  right: '14px',
                                  top: '50%',
                                  transform: 'translateY(-50%)',
                                  pointerEvents: 'none',
                                }}
                              >
                                <svg width="12" height="12" fill="#64748B" viewBox="0 0 20 20">
                                  <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </div>

                            {/* Cidade */}
                            <div style={{ position: 'relative' }}>
                              <input
                                type="text"
                                value={cidade}
                                onChange={e => setCidade(e.target.value)}
                                placeholder="Cidade"
                                style={{
                                  width: '100%',
                                  padding: '12px 14px',
                                  backgroundColor: '#ffffff',
                                  border: '1px solid #00a8b5',
                                  borderRadius: '8px',
                                  fontSize: '14px',
                                  color: '#1E293B',
                                  outline: 'none',
                                  boxSizing: 'border-box',
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Email * */}
                        <div style={{ position: 'relative', marginTop: '8px' }}>
                          <label
                            style={{
                              position: 'absolute',
                              top: '-9px',
                              left: '12px',
                              backgroundColor: '#ffffff',
                              padding: '0 6px',
                              fontSize: '12px',
                              fontWeight: 500,
                              color: '#94A3B8',
                              zIndex: 2,
                            }}
                          >
                            Email <span style={{ color: '#EF5A24' }}>*</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            style={{
                              width: '100%',
                              padding: '12px 14px',
                              backgroundColor: '#ffffff',
                              border: '1px solid #CBD5E1',
                              borderRadius: '8px',
                              fontSize: '14px',
                              color: '#1E293B',
                              outline: 'none',
                              boxSizing: 'border-box',
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Next Button */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                      <button
                        type="button"
                        onClick={() => {
                          setCurrentStep(2)
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                        style={{
                          padding: '10px 48px',
                          borderRadius: '8px',
                          border: '1.5px solid #00a8b5',
                          backgroundColor: '#ffffff',
                          color: '#00a8b5',
                          fontSize: '14px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          transition: 'all 0.2s ease',
                          boxShadow: '0 2px 4px rgba(0, 168, 181, 0.1)',
                        }}
                      >
                        Próximo →
                      </button>
                    </div>
                  </div>
                )}

                {/* ── STEP 2: Dados Profissionais, Interesses e Notificações ── */}
                {currentStep === 2 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    {/* Dados profissionais */}
                    <div>
                      <h2
                        style={{
                          fontSize: '16px',
                          fontWeight: 700,
                          color: '#2A1B4E',
                          marginBottom: '20px',
                        }}
                      >
                        Dados profissionais
                      </h2>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {/* Grid: Escolaridade & Instituição de ensino */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                          {/* Escolaridade */}
                          <div style={{ position: 'relative' }}>
                            <select
                              value={escolaridade}
                              onChange={e => setEscolaridade(e.target.value)}
                              style={{
                                width: '100%',
                                padding: '12px 14px',
                                backgroundColor: '#ffffff',
                                border: '1px solid #CBD5E1',
                                borderRadius: '8px',
                                fontSize: '14px',
                                color: escolaridade ? '#1E293B' : '#94A3B8',
                                outline: 'none',
                                boxSizing: 'border-box',
                                appearance: 'none',
                              }}
                            >
                              <option value="" disabled hidden>
                                Escolaridade
                              </option>
                              {escolaridadeOptions.map(esc => (
                                <option key={esc} value={esc}>
                                  {esc}
                                </option>
                              ))}
                            </select>
                            <div
                              style={{
                                position: 'absolute',
                                right: '14px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                pointerEvents: 'none',
                              }}
                            >
                              <svg width="12" height="12" fill="#64748B" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>

                          {/* Instituição de ensino */}
                          <div style={{ position: 'relative' }}>
                            <input
                              type="text"
                              value={instituicaoEnsino}
                              onChange={e => setInstituicaoEnsino(e.target.value)}
                              placeholder="Instituição de ensino"
                              style={{
                                width: '100%',
                                padding: '12px 14px',
                                backgroundColor: '#ffffff',
                                border: '1px solid #CBD5E1',
                                borderRadius: '8px',
                                fontSize: '14px',
                                color: '#1E293B',
                                outline: 'none',
                                boxSizing: 'border-box',
                              }}
                            />
                          </div>
                        </div>

                        {/* Grid: Lattes & LinkedIn */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                          {/* Lattes */}
                          <div style={{ position: 'relative' }}>
                            <input
                              type="text"
                              value={lattes}
                              onChange={e => setLattes(e.target.value)}
                              placeholder="Lattes"
                              style={{
                                width: '100%',
                                padding: '12px 14px',
                                backgroundColor: '#ffffff',
                                border: '1px solid #CBD5E1',
                                borderRadius: '8px',
                                fontSize: '14px',
                                color: '#1E293B',
                                outline: 'none',
                                boxSizing: 'border-box',
                              }}
                            />
                          </div>

                          {/* LinkedIn */}
                          <div style={{ position: 'relative' }}>
                            <input
                              type="text"
                              value={linkedIn}
                              onChange={e => setLinkedIn(e.target.value)}
                              placeholder="LinkedIn"
                              style={{
                                width: '100%',
                                padding: '12px 14px',
                                backgroundColor: '#ffffff',
                                border: '1px solid #CBD5E1',
                                borderRadius: '8px',
                                fontSize: '14px',
                                color: '#1E293B',
                                outline: 'none',
                                boxSizing: 'border-box',
                              }}
                            />
                          </div>
                        </div>

                        {/* Atuação profissional */}
                        <div style={{ position: 'relative' }}>
                          <textarea
                            rows={4}
                            value={atuacaoProfissional}
                            onChange={e => setAtuacaoProfissional(e.target.value)}
                            placeholder="Atuação profissional"
                            style={{
                              width: '100%',
                              padding: '12px 14px',
                              backgroundColor: '#ffffff',
                              border: '1px solid #003B6D',
                              borderRadius: '8px',
                              fontSize: '14px',
                              color: '#1E293B',
                              outline: 'none',
                              boxSizing: 'border-box',
                              resize: 'vertical',
                            }}
                          />
                        </div>

                        {/* Links externos */}
                        <div style={{ position: 'relative' }}>
                          <textarea
                            rows={3}
                            value={linksExternos}
                            onChange={e => setLinksExternos(e.target.value)}
                            placeholder="Links externos"
                            style={{
                              width: '100%',
                              padding: '12px 14px',
                              backgroundColor: '#ffffff',
                              border: '1px solid #CBD5E1',
                              borderRadius: '8px',
                              fontSize: '14px',
                              color: '#1E293B',
                              outline: 'none',
                              boxSizing: 'border-box',
                              resize: 'vertical',
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* O que busco ? */}
                    <div>
                      <h2
                        style={{
                          fontSize: '16px',
                          fontWeight: 700,
                          color: '#2A1B4E',
                          marginBottom: '16px',
                        }}
                      >
                        O que busco ?
                      </h2>
                      <MultiSelectInput
                        placeholder="Selecione as palavras-chave de interesse"
                        options={palavrasChaveOptions}
                        selected={oqueBusco}
                        onChange={setOqueBusco}
                      />
                    </div>

                    {/* Assuntos que me definem: */}
                    <div>
                      <h2
                        style={{
                          fontSize: '16px',
                          fontWeight: 700,
                          color: '#2A1B4E',
                          marginBottom: '16px',
                        }}
                      >
                        Assuntos que me definem:
                      </h2>
                      <MultiSelectInput
                        placeholder="Selecione as palavras-chave de interesse"
                        options={palavrasChaveOptions}
                        selected={assuntosDefinem}
                        onChange={setAssuntosDefinem}
                      />
                    </div>

                    {/* Receber notificações */}
                    <div>
                      <h2
                        style={{
                          fontSize: '16px',
                          fontWeight: 700,
                          color: '#2A1B4E',
                          marginBottom: '16px',
                        }}
                      >
                        Receber notificações
                      </h2>

                      <div style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
                        <label
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            color: '#334155',
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={notificacaoWhatsapp}
                            onChange={e => setNotificacaoWhatsapp(e.target.checked)}
                            style={{
                              width: '16px',
                              height: '16px',
                              accentColor: '#00a8b5',
                              cursor: 'pointer',
                            }}
                          />
                          <span>Notificação via whatsapp</span>
                        </label>

                        <label
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            color: '#334155',
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={notificacaoEmail}
                            onChange={e => setNotificacaoEmail(e.target.checked)}
                            style={{
                              width: '16px',
                              height: '16px',
                              accentColor: '#00a8b5',
                              cursor: 'pointer',
                            }}
                          />
                          <span>Notificação via email</span>
                        </label>
                      </div>
                    </div>

                    {/* Action Buttons Row */}
                    <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
                      <button
                        type="submit"
                        style={{
                          flex: 1,
                          padding: '12px 24px',
                          borderRadius: '8px',
                          backgroundColor: '#00a8b5',
                          color: '#ffffff',
                          fontSize: '14px',
                          fontWeight: 700,
                          border: 'none',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          transition: 'all 0.2s ease',
                          boxShadow: '0 2px 4px rgba(0, 168, 181, 0.2)',
                        }}
                      >
                        <span style={{ fontSize: '16px' }}>👍</span> Salvar
                      </button>

                      <button
                        type="button"
                        onClick={() => setShowDeleteModal(true)}
                        style={{
                          padding: '12px 24px',
                          borderRadius: '8px',
                          border: '1.5px solid #00a8b5',
                          backgroundColor: '#ffffff',
                          color: '#00a8b5',
                          fontSize: '14px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Excluir meu perfil
                      </button>
                    </div>
                  </div>
                )}
              </form>

              {/* Confirmation Modal for Delete Profile */}
              {showDeleteModal && (
                <div
                  style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(15, 23, 42, 0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 100,
                    backdropFilter: 'blur(2px)',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '12px',
                      padding: '32px',
                      maxWidth: '440px',
                      width: '90%',
                      textAlign: 'center',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: '#FEE2E2',
                        color: '#EF4444',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px',
                      }}
                    >
                      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                      Excluir Perfil de Talento?
                    </h3>
                    <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '24px', lineHeight: 1.5 }}>
                      Tem certeza de que deseja excluir seu perfil? Esta ação é irreversível e removerá seus dados cadastrados.
                    </p>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                      <button
                        onClick={() => setShowDeleteModal(false)}
                        style={{
                          padding: '10px 20px',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          backgroundColor: '#ffffff',
                          color: '#475569',
                          fontWeight: 600,
                          cursor: 'pointer',
                          fontSize: '14px',
                        }}
                      >
                        Cancelar
                      </button>
                      <button
                        onClick={handleDeleteProfile}
                        style={{
                          padding: '10px 20px',
                          borderRadius: '8px',
                          backgroundColor: '#EF4444',
                          color: '#ffffff',
                          fontWeight: 600,
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '14px',
                        }}
                      >
                        Sim, Excluir
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

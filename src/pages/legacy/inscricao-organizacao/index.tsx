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
    <div style={{ marginBottom: '20px', position: 'relative' }} ref={containerRef}>
      {label && (
        <label
          style={{
            display: 'block',
            fontSize: '15px',
            fontWeight: 600,
            color: '#1E293B',
            marginBottom: '8px',
          }}
        >
          {label}
        </label>
      )}

      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          minHeight: '48px',
          backgroundColor: '#ffffff',
          border: '1px solid #CBD5E1',
          borderRadius: '8px',
          padding: '8px 14px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          boxShadow: isOpen ? '0 0 0 3px rgba(0, 168, 181, 0.15)' : 'none',
          borderColor: isOpen ? '#00a8b5' : '#CBD5E1',
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
                border: '1px solid #CBD5E1',
                borderRadius: '4px',
                fontSize: '13px',
                outline: 'none',
              }}
            />
          </div>

          {filteredOptions.length === 0 ? (
            <div style={{ padding: '10px 14px', fontSize: '13px', color: '#94A3B8' }}>
              Nenhuma opção disponível
            </div>
          ) : (
            filteredOptions.map(option => (
              <div
                key={option}
                onClick={e => {
                  e.stopPropagation()
                  toggleOption(option)
                }}
                style={{
                  padding: '10px 14px',
                  fontSize: '14px',
                  color: '#334155',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLDivElement).style.backgroundColor = '#F0FDFA'
                  ;(e.currentTarget as HTMLDivElement).style.color = '#007A87'
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLDivElement).style.backgroundColor = 'transparent'
                  ;(e.currentTarget as HTMLDivElement).style.color = '#334155'
                }}
              >
                + {option}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}

export default function InscricaoOrganizacaoPage() {
  const [formData, setFormData] = useState({
    empresa: '',
    cnpj: '',
    email: '',
    descricao: '',
    linkInstitucional: '',
    instagram: '',
    linkedin: '',
    youtube: '',
  })

  const [logoPreview, setLogoPreview] = useState<string | null>(null)
  const [bannerPreview, setBannerPreview] = useState<string | null>(null)

  const [permissoes, setPermissoes] = useState<string[]>([])
  const [assuntos, setAssuntos] = useState<string[]>([])
  const [startups, setStartups] = useState<string[]>([])

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const logoInputRef = useRef<HTMLInputElement>(null)
  const bannerInputRef = useRef<HTMLInputElement>(null)

  const userOptions = [
    'Pedro Dhalia',
    'Ana Clara Silva',
    'Carlos Eduardo Rocha',
    'Mariana Oliveira',
    'Lucas Santos',
    'Fernanda Costa',
    'Roberto Albuquerque',
  ]

  const assuntoOptions = [
    'Cidades Inteligentes',
    'Governança & Gestão Pública',
    'GovTech & Inovação Aberta',
    'EduTech & Capacitação',
    'HealthTech & Saúde',
    'Inteligência Artificial & Dados',
    'Sustentabilidade & Meio Ambiente',
    'Transformação Digital',
    'IoT & Sensores',
  ]

  const startupOptions = [
    'TechCorp NIT',
    'BioInnovate Soluções',
    'DataAnalytics Brasil',
    'SmartGrid Inovação',
    'UrbanMobility Lab',
    'EcoEnergy Systems',
    'CivicTech Brasil',
  ]

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.8">
                <circle cx="12" cy="12" r="9" />
                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" strokeLinecap="round" />
              </svg>
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
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" strokeLinecap="round" />
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
            maxWidth: '1000px',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ marginBottom: '28px' }}>
            <h1
              style={{
                fontSize: '28px',
                fontWeight: 800,
                color: '#0F172A',
                margin: 0,
                letterSpacing: '-0.3px',
              }}
            >
              Cadastrar Organização
            </h1>
          </div>

          {isSubmitted && (
            <div
              style={{
                backgroundColor: '#F0FDF4',
                border: '1px solid #86EFAC',
                borderRadius: '8px',
                padding: '16px 20px',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: '#166534',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span style={{ fontSize: '15px', fontWeight: 600 }}>
                  Organização cadastrada com sucesso! Os dados foram salvos no sistema.
                </span>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#166534',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '16px',
                }}
              >
                ×
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Empresa */}
            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#1E293B',
                  marginBottom: '8px',
                }}
              >
                Empresa
              </label>
              <input
                type="text"
                placeholder="Nome"
                value={formData.empresa}
                onChange={e => handleChange('empresa', e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #CBD5E1',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#1E293B',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'all 0.2s ease',
                }}
              />
            </div>

            {/* CNPJ */}
            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#1E293B',
                  marginBottom: '8px',
                }}
              >
                CNPJ
              </label>
              <input
                type="text"
                placeholder="CNPJ"
                value={formData.cnpj}
                onChange={e => handleChange('cnpj', e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #CBD5E1',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#1E293B',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'all 0.2s ease',
                }}
              />
            </div>

            {/* E-mail */}
            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#1E293B',
                  marginBottom: '8px',
                }}
              >
                E-mail
              </label>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={e => handleChange('email', e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #CBD5E1',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#1E293B',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'all 0.2s ease',
                }}
              />
            </div>

            {/* Descrição */}
            <div style={{ marginBottom: '28px' }}>
              <textarea
                placeholder="Descrição"
                rows={4}
                value={formData.descricao}
                onChange={e => handleChange('descricao', e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #CBD5E1',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#1E293B',
                  outline: 'none',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  transition: 'all 0.2s ease',
                }}
              />
            </div>

            {/* Logo e banner de sua empresa */}
            <div style={{ marginBottom: '28px' }}>
              <h2
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#1E293B',
                  marginBottom: '16px',
                }}
              >
                Logo e banner de sua empresa:
              </h2>

              {/* Upload Logo Box */}
              <div style={{ marginBottom: '20px' }}>
                <input
                  type="file"
                  accept="image/*"
                  ref={logoInputRef}
                  onChange={handleLogoUpload}
                  style={{ display: 'none' }}
                />

                <div
                  onClick={() => logoInputRef.current?.click()}
                  style={{
                    width: '100%',
                    height: '140px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #CBD5E1',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={e => {
                    ;(e.currentTarget as HTMLDivElement).style.borderColor = '#00a8b5'
                    ;(e.currentTarget as HTMLDivElement).style.backgroundColor = '#F8FAFC'
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLDivElement).style.borderColor = '#CBD5E1'
                    ;(e.currentTarget as HTMLDivElement).style.backgroundColor = '#ffffff'
                  }}
                >
                  {logoPreview ? (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                      <img
                        src={logoPreview}
                        alt="Logo preview"
                        style={{ maxHeight: '90px', maxWidth: '140px', objectFit: 'contain' }}
                      />
                      <span style={{ fontSize: '12px', color: '#00a8b5', fontWeight: 600 }}>
                        Clique para alterar a logo
                      </span>
                    </div>
                  ) : (
                    <span style={{ color: '#94A3B8', fontSize: '14px' }}>
                      Click to upload your logo MAX: 150x150
                    </span>
                  )}
                </div>
                <div style={{ fontSize: '14px', color: '#1E293B', marginTop: '6px', fontWeight: 500 }}>
                  Logo: 150x150px
                </div>
              </div>

              {/* Upload Banner Box */}
              <div style={{ marginBottom: '20px' }}>
                <input
                  type="file"
                  accept="image/*"
                  ref={bannerInputRef}
                  onChange={handleBannerUpload}
                  style={{ display: 'none' }}
                />

                <div
                  onClick={() => bannerInputRef.current?.click()}
                  style={{
                    width: '100%',
                    height: '140px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #CBD5E1',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={e => {
                    ;(e.currentTarget as HTMLDivElement).style.borderColor = '#00a8b5'
                    ;(e.currentTarget as HTMLDivElement).style.backgroundColor = '#F8FAFC'
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLDivElement).style.borderColor = '#CBD5E1'
                    ;(e.currentTarget as HTMLDivElement).style.backgroundColor = '#ffffff'
                  }}
                >
                  {bannerPreview ? (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                      <img
                        src={bannerPreview}
                        alt="Banner preview"
                        style={{ maxHeight: '90px', maxWidth: '90%', objectFit: 'cover', borderRadius: '4px' }}
                      />
                      <span style={{ fontSize: '12px', color: '#00a8b5', fontWeight: 600 }}>
                        Clique para alterar o banner
                      </span>
                    </div>
                  ) : (
                    <span style={{ color: '#94A3B8', fontSize: '14px' }}>
                      Click to upload your banner MAX: 1280x200
                    </span>
                  )}
                </div>
                <div style={{ fontSize: '14px', color: '#1E293B', marginTop: '6px', fontWeight: 500 }}>
                  Banner: 1280x200px
                </div>
              </div>
            </div>

            {/* Link Institucional */}
            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#1E293B',
                  marginBottom: '8px',
                }}
              >
                Link Institucional
              </label>
              <input
                type="text"
                placeholder="Digite o link do Site de sua empresa"
                value={formData.linkInstitucional}
                onChange={e => handleChange('linkInstitucional', e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #CBD5E1',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#1E293B',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'all 0.2s ease',
                }}
              />
            </div>

            {/* Instagram */}
            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#1E293B',
                  marginBottom: '8px',
                }}
              >
                Instagram
              </label>
              <input
                type="text"
                placeholder="Digite o link do Instagram de sua empresa"
                value={formData.instagram}
                onChange={e => handleChange('instagram', e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #CBD5E1',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#1E293B',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'all 0.2s ease',
                }}
              />
            </div>

            {/* LinkedIn */}
            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#1E293B',
                  marginBottom: '8px',
                }}
              >
                LinkedIn
              </label>
              <input
                type="text"
                placeholder="Digite o Linkedin de sua empresa"
                value={formData.linkedin}
                onChange={e => handleChange('linkedin', e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #CBD5E1',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#1E293B',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'all 0.2s ease',
                }}
              />
            </div>

            {/* Youtube */}
            <div style={{ marginBottom: '24px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#1E293B',
                  marginBottom: '8px',
                }}
              >
                Youtube
              </label>
              <input
                type="text"
                placeholder="Digite o canal do Youtube de sua empresa"
                value={formData.youtube}
                onChange={e => handleChange('youtube', e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #CBD5E1',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#1E293B',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'all 0.2s ease',
                }}
              />
            </div>

            {/* Permissões */}
            <MultiSelectInput
              label="Permissões"
              placeholder="Escolha quais usuários possuem permissão de empresa"
              options={userOptions}
              selected={permissoes}
              onChange={setPermissoes}
            />

            {/* Assuntos e Startups relacionadas Header */}
            <div style={{ marginTop: '36px', marginBottom: '20px' }}>
              <h2
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#1E293B',
                  margin: 0,
                }}
              >
                Assuntos e Startups relacionadas
              </h2>
            </div>

            {/* Assuntos */}
            <MultiSelectInput
              placeholder="Escolha os assuntos mais relacionados a empresa"
              options={assuntoOptions}
              selected={assuntos}
              onChange={setAssuntos}
            />

            {/* Startups */}
            <MultiSelectInput
              placeholder="Escolha as startups relacionadas (Empresas NIT)"
              options={startupOptions}
              selected={startups}
              onChange={setStartups}
            />

            {/* Submit Button */}
            <div style={{ marginTop: '36px', display: 'flex', justifyContent: 'center' }}>
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  width: '100%',
                  maxWidth: '420px',
                  height: '48px',
                  backgroundColor: '#ffffff',
                  border: '1.5px solid #00a8b5',
                  borderRadius: '8px',
                  color: '#00a8b5',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: isLoading ? 'wait' : 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                }}
                onMouseEnter={e => {
                  if (!isLoading) {
                    ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = '#F0FDFA'
                    ;(e.currentTarget as HTMLButtonElement).style.borderColor = '#007A87'
                    ;(e.currentTarget as HTMLButtonElement).style.color = '#007A87'
                  }
                }}
                onMouseLeave={e => {
                  if (!isLoading) {
                    ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = '#ffffff'
                    ;(e.currentTarget as HTMLButtonElement).style.borderColor = '#00a8b5'
                    ;(e.currentTarget as HTMLButtonElement).style.color = '#00a8b5'
                  }
                }}
              >
                {isLoading ? 'Salvando...' : 'Salvar'}
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}

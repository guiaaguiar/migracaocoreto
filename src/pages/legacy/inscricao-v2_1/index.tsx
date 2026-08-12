import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import logoCoreto from '../../../assets/logo-coreto.png'
import logoAbdi from '../../../assets/logo-abdi.png'
import logoEmprel from '../../../assets/logo-emprel.png'

// ─────────────────────────────────────────────────────────
// Components for Outlined Form Elements with Floating Labels
// ─────────────────────────────────────────────────────────

interface InputProps {
  label: string
  value: string
  onChange: (val: string) => void
  type?: string
  placeholder?: string
  required?: boolean
  icon?: React.ReactNode
}

function OutlinedInput({ label, value, onChange, type = 'text', placeholder, required, icon }: InputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const showLabel = label && (value !== '' || isFocused)

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {showLabel && (
        <label
          style={{
            position: 'absolute',
            top: '-9px',
            left: '12px',
            backgroundColor: '#ffffff',
            padding: '0 5px',
            fontSize: '11px',
            fontWeight: 600,
            color: isFocused ? '#00a8b5' : '#64748B',
            zIndex: 2,
            transition: 'all 0.15s ease',
            pointerEvents: 'none',
          }}
        >
          {label} {required && <span style={{ color: '#EF4444' }}>*</span>}
        </label>
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <input
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={showLabel ? placeholder || label : placeholder || label}
          required={required}
          style={{
            width: '100%',
            height: '48px',
            backgroundColor: '#ffffff',
            border: isFocused ? '1.5px solid #00a8b5' : '1px solid #CBD5E1',
            borderRadius: '6px',
            padding: icon ? '0 40px 0 14px' : '0 14px',
            fontSize: '14px',
            color: '#1E293B',
            outline: 'none',
            boxShadow: isFocused ? '0 0 0 3px rgba(0, 168, 181, 0.12)' : 'none',
            transition: 'all 0.2s ease',
            boxSizing: 'border-box',
          }}
        />
        {icon && (
          <div
            style={{
              position: 'absolute',
              right: '12px',
              color: '#64748B',
              display: 'flex',
              alignItems: 'center',
              pointerEvents: 'none',
            }}
          >
            {icon}
          </div>
        )}
      </div>
    </div>
  )
}

interface SelectProps {
  label: string
  value: string
  onChange: (val: string) => void
  options: { value: string; label: string }[]
  placeholder?: string
}

function OutlinedSelect({ label, value, onChange, options, placeholder }: SelectProps) {
  const [isFocused, setIsFocused] = useState(false)
  const showLabel = label && (value !== '' || isFocused)

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {showLabel && (
        <label
          style={{
            position: 'absolute',
            top: '-9px',
            left: '12px',
            backgroundColor: '#ffffff',
            padding: '0 5px',
            fontSize: '11px',
            fontWeight: 600,
            color: isFocused ? '#00a8b5' : '#64748B',
            zIndex: 2,
            transition: 'all 0.15s ease',
            pointerEvents: 'none',
          }}
        >
          {label}
        </label>
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            width: '100%',
            height: '48px',
            backgroundColor: '#ffffff',
            border: isFocused ? '1.5px solid #00a8b5' : '1px solid #CBD5E1',
            borderRadius: '6px',
            padding: '0 36px 0 14px',
            fontSize: '14px',
            color: value ? '#1E293B' : '#94A3B8',
            outline: 'none',
            appearance: 'none',
            WebkitAppearance: 'none',
            boxShadow: isFocused ? '0 0 0 3px rgba(0, 168, 181, 0.12)' : 'none',
            transition: 'all 0.2s ease',
            cursor: 'pointer',
            boxSizing: 'border-box',
          }}
        >
          <option value="" disabled hidden>
            {placeholder || label}
          </option>
          {options.map(opt => (
            <option key={opt.value} value={opt.value} style={{ color: '#1E293B' }}>
              {opt.label}
            </option>
          ))}
        </select>
        <div
          style={{
            position: 'absolute',
            right: '12px',
            color: '#64748B',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

interface TextareaProps {
  label?: string
  value: string
  onChange: (val: string) => void
  placeholder?: string
  rows?: number
}

function OutlinedTextarea({ label, value, onChange, placeholder, rows = 4 }: TextareaProps) {
  const [isFocused, setIsFocused] = useState(false)
  const showLabel = label && (value !== '' || isFocused)

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {showLabel && (
        <label
          style={{
            position: 'absolute',
            top: '-9px',
            left: '12px',
            backgroundColor: '#ffffff',
            padding: '0 5px',
            fontSize: '11px',
            fontWeight: 600,
            color: isFocused ? '#00a8b5' : '#64748B',
            zIndex: 2,
            transition: 'all 0.15s ease',
            pointerEvents: 'none',
          }}
        >
          {label}
        </label>
      )}
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={showLabel ? placeholder || label : placeholder || label}
        rows={rows}
        style={{
          width: '100%',
          backgroundColor: '#ffffff',
          border: isFocused ? '1.5px solid #00a8b5' : '1px solid #CBD5E1',
          borderRadius: '6px',
          padding: '12px 14px',
          fontSize: '14px',
          color: '#1E293B',
          outline: 'none',
          boxShadow: isFocused ? '0 0 0 3px rgba(0, 168, 181, 0.12)' : 'none',
          transition: 'all 0.2s ease',
          resize: 'vertical',
          boxSizing: 'border-box',
          fontFamily: 'inherit',
        }}
      />
    </div>
  )
}

// ─────────────────────────────────────────────────────────
// Main Page Component: InscricaoV21Page
// ─────────────────────────────────────────────────────────

export default function InscricaoV21Page() {
  // Personal Details
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  const [nomeCompleto, setNomeCompleto] = useState('Pedro Dhalia')
  const [nomeSocial, setNomeSocial] = useState('Pedro Dhalia')
  const [cpf, setCpf] = useState('09477893404')
  const [dataNascimento, setDataNascimento] = useState('')
  const [genero, setGenero] = useState('')
  const [identificacaoEtnica, setIdentificacaoEtnica] = useState('')
  const [numeroWhatsapp, setNumeroWhatsapp] = useState('')
  const [email, setEmail] = useState('pedro.dhalia@gmail.com')
  const [moraEmRecife, setMoraEmRecife] = useState('Não')

  // Professional Details
  const [escolaridade, setEscolaridade] = useState('')
  const [instituicaoEnsino, setInstituicaoEnsino] = useState('')
  const [lattes, setLattes] = useState('')
  const [linkedIn, setLinkedIn] = useState('')
  const [atuacaoProfissional, setAtuacaoProfissional] = useState('')
  const [linksExternos, setLinksExternos] = useState('')

  // Notifications
  const [notificacaoWhatsapp, setNotificacaoWhatsapp] = useState(false)
  const [notificacaoEmail, setNotificacaoEmail] = useState(false)

  // Generated topics / tags
  const [assuntos, setAssuntos] = useState<string[]>([])
  const [novoAssunto, setNovoAssunto] = useState('')

  // UI state
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Dropdown Options
  const generosOptions = [
    { value: 'Masculino', label: 'Masculino' },
    { value: 'Feminino', label: 'Feminino' },
    { value: 'Não-binário', label: 'Não-binário' },
    { value: 'Prefiro não informar', label: 'Prefiro não informar' },
    { value: 'Outro', label: 'Outro' },
  ]

  const etniasOptions = [
    { value: 'Branca', label: 'Branca' },
    { value: 'Preta', label: 'Preta' },
    { value: 'Parda', label: 'Parda' },
    { value: 'Amarela', label: 'Amarela' },
    { value: 'Indígena', label: 'Indígena' },
    { value: 'Prefiro não declarar', label: 'Prefiro não declarar' },
  ]

  const escolaridadeOptions = [
    { value: 'Ensino Fundamental', label: 'Ensino Fundamental' },
    { value: 'Ensino Médio Incompleto', label: 'Ensino Médio Incompleto' },
    { value: 'Ensino Médio Completo', label: 'Ensino Médio Completo' },
    { value: 'Ensino Técnico', label: 'Ensino Técnico' },
    { value: 'Graduação / Superior Cursando', label: 'Graduação / Superior Cursando' },
    { value: 'Graduação / Superior Completo', label: 'Graduação / Superior Completo' },
    { value: 'Pós-graduação / Especialização', label: 'Pós-graduação / Especialização' },
    { value: 'Mestrado', label: 'Mestrado' },
    { value: 'Doutorado', label: 'Doutorado' },
  ]

  const recifeOptions = [
    { value: 'Não', label: 'Não' },
    { value: 'Sim', label: 'Sim' },
  ]

  // Handlers
  const handleAvatarSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleGerarAssuntos = () => {
    const palavrasSugeridas = [
      'Inovação Aberta',
      'Inteligência Artificial',
      'Cidades Inteligentes',
      'GovTech',
      'Transformação Digital',
      'Empreendedorismo',
      'HealthTech',
      'Sustentabilidade & ESG',
    ]

    // Select 4 random topics
    const shuffled = [...palavrasSugeridas].sort(() => 0.5 - Math.random())
    const selected = shuffled.slice(0, 4)
    
    // Add unique topics
    const newAssuntos = Array.from(new Set([...assuntos, ...selected]))
    setAssuntos(newAssuntos)
    showToast('Assuntos de conexão gerados com sucesso!')
  }

  const handleAddAssunto = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && novoAssunto.trim() !== '') {
      e.preventDefault()
      if (!assuntos.includes(novoAssunto.trim())) {
        setAssuntos([...assuntos, novoAssunto.trim()])
      }
      setNovoAssunto('')
    }
  }

  const handleRemoveAssunto = (assunto: string) => {
    setAssuntos(assuntos.filter(a => a !== assunto))
  }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    showToast('Perfil de talento salvo com sucesso!')
  }

  const handleDeleteConfirmed = () => {
    setShowDeleteModal(false)
    // Reset form
    setAvatarPreview(null)
    setNomeCompleto('')
    setNomeSocial('')
    setCpf('')
    setDataNascimento('')
    setGenero('')
    setIdentificacaoEtnica('')
    setNumeroWhatsapp('')
    setEmail('')
    setMoraEmRecife('Não')
    setEscolaridade('')
    setInstituicaoEnsino('')
    setLattes('')
    setLinkedIn('')
    setAtuacaoProfissional('')
    setLinksExternos('')
    setNotificacaoWhatsapp(false)
    setNotificacaoEmail(false)
    setAssuntos([])
    showToast('Perfil excluído com sucesso.')
  }

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage(null)
    }, 4000)
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#F1F5F9',
        fontFamily: "'DM Sans', 'Inter', -apple-system, sans-serif",
        display: 'flex',
        flexDirection: 'column',
        color: '#0F172A',
      }}
    >
      {/* Toast Alert */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            backgroundColor: '#00a8b5',
            color: '#ffffff',
            padding: '12px 20px',
            borderRadius: '8px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            zIndex: 100,
            fontWeight: 600,
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            animation: 'fadeIn 0.3s ease',
          }}
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          {toastMessage}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 110,
            padding: '16px',
          }}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '24px',
              maxWidth: '440px',
              width: '100%',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', marginTop: 0, marginBottom: '12px' }}>
              Excluir Perfil
            </h3>
            <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.5, marginBottom: '24px' }}>
              Tem certeza que deseja excluir seu perfil de talento? Todos os seus dados serão apagados permanentemente.
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button
                type="button"
                onClick={() => setShowDeleteModal(false)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  border: '1px solid #CBD5E1',
                  backgroundColor: '#ffffff',
                  color: '#475569',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleDeleteConfirmed}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: '#EF4444',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
              >
                Sim, excluir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Top Navigation Bar ── */}
      <header
        style={{
          backgroundColor: '#ffffff',
          height: '64px',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #E2E8F0',
          position: 'sticky',
          top: 0,
          zIndex: 30,
        }}
      >
        {/* Left Logos */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Link to="/legacy" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src={logoCoreto} alt="Coreto" style={{ height: '32px', objectFit: 'contain' }} />
          </Link>
          <img src={logoAbdi} alt="ABDI" style={{ height: '28px', objectFit: 'contain' }} />
          <img src={logoEmprel} alt="Emprel" style={{ height: '24px', objectFit: 'contain' }} />
        </div>

        {/* Right User Avatar Dropdown */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
            padding: '6px 12px',
            borderRadius: '20px',
            transition: 'background-color 0.2s ease',
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#F1F5F9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #CBD5E1',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E293B" strokeWidth="1.5">
              <circle cx="12" cy="5" r="2.5" />
              <circle cx="4.5" cy="19" r="2.5" />
              <circle cx="19.5" cy="19" r="2.5" />
              <path d="M12 7.5v3.5M12 11L6 17M12 11l6 6" strokeLinecap="round" />
            </svg>
          </div>
          <span style={{ fontSize: '14px', fontWeight: 600, color: '#0F172A' }}>Pedro</span>
          <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#0F172A' }}>
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </header>

      <div style={{ display: 'flex', flex: 1 }}>
        {/* ── Left Sidebar Navigation ── */}
        <aside
          style={{
            width: '200px',
            backgroundColor: '#ffffff',
            borderRight: '1px solid #E2E8F0',
            paddingTop: '20px',
            paddingBottom: '48px',
            flexShrink: 0,
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {/* Início */}
            <Link
              to="/legacy"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 20px',
                fontWeight: 600,
                fontSize: '14px',
                color: '#00a8b5',
                textDecoration: 'none',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00a8b5" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 9h6v6H9z" />
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
                gap: '12px',
                padding: '10px 20px',
                fontWeight: 600,
                fontSize: '14px',
                color: '#00a8b5',
                textDecoration: 'none',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e05c5c" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Meus programas</span>
            </a>

            {/* Section: Resolvedor */}
            <div style={{ padding: '20px 20px 8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#1E293B', letterSpacing: '0.02em' }}>
                Resolvedor
              </span>
            </div>

            {/* Oportunidades */}
            <a
              href="#"
              onClick={e => e.preventDefault()}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 20px',
                fontWeight: 500,
                fontSize: '14px',
                color: '#00a8b5',
                textDecoration: 'none',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00a8b5" strokeWidth="2">
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
                gap: '12px',
                padding: '10px 20px',
                fontWeight: 500,
                fontSize: '14px',
                color: '#00a8b5',
                textDecoration: 'none',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00a8b5" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 010 12.728" />
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
                gap: '12px',
                padding: '10px 20px',
                fontWeight: 500,
                fontSize: '14px',
                color: '#00a8b5',
                textDecoration: 'none',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00a8b5" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M3.6 9h16.8M3.6 15h16.8" />
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
                gap: '12px',
                padding: '10px 20px',
                fontWeight: 500,
                fontSize: '14px',
                color: '#00a8b5',
                textDecoration: 'none',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00a8b5" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              <span>Painel</span>
            </a>

            <div style={{ height: '1px', backgroundColor: '#E2E8F0', margin: '16px 20px' }} />

            {/* Section: GERAL */}
            <div style={{ padding: '4px 20px 8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#1E293B', letterSpacing: '0.02em' }}>
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
                gap: '12px',
                padding: '10px 20px',
                fontWeight: 500,
                fontSize: '14px',
                color: '#00a8b5',
                textDecoration: 'none',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00a8b5" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" strokeLinecap="round" />
              </svg>
              <span>Ajuda</span>
            </a>

            {/* Sair */}
            <Link
              to="/legacy"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 20px',
                fontWeight: 500,
                fontSize: '14px',
                color: '#00a8b5',
                textDecoration: 'none',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00a8b5" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Sair</span>
            </Link>
          </nav>
        </aside>

        {/* ── Main Form Content ── */}
        <main style={{ flex: 1, padding: '40px 48px', maxWidth: '1000px' }}>
          <form onSubmit={handleSave}>
            {/* Page Header */}
            <h1
              style={{
                fontSize: '32px',
                fontWeight: 800,
                color: '#0F172A',
                margin: '0 0 8px 0',
                letterSpacing: '-0.02em',
              }}
            >
              Perfil de Talento
            </h1>
            <p style={{ fontSize: '15px', color: '#475569', margin: '0 0 36px 0', fontWeight: 400 }}>
              Queremos saber mais sobre você! Quanto mais completas as informações, melhor!
            </p>

            {/* ── Section: Foto de Perfil ── */}
            <section style={{ marginBottom: '36px' }}>
              <h2
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#0F172A',
                  margin: '0 0 16px 0',
                }}
              >
                Foto de Perfil
              </h2>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleAvatarSelect}
                  accept="image/*"
                  style={{ display: 'none' }}
                />

                <div
                  onClick={() => fileInputRef.current?.click()}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    border: '2px solid #00a8b5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    backgroundColor: '#ffffff',
                    position: 'relative',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    ;(e.currentTarget as HTMLDivElement).style.borderColor = '#008591'
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLDivElement).style.borderColor = '#00a8b5'
                  }}
                >
                  {avatarPreview ? (
                    <img src={avatarPreview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <span style={{ color: '#E07A5F', fontWeight: 700, fontSize: '15px' }}>Selecione</span>
                  )}
                </div>

                <div style={{ fontSize: '12px', color: '#64748B', maxWidth: '160px', lineHeight: 1.4 }}>
                  Utilize imagens com proporção <br />
                  <strong style={{ color: '#334155' }}>150 x 150</strong>
                </div>
              </div>
            </section>

            {/* ── Section: Dados pessoais ── */}
            <section style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h2
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#0F172A',
                  margin: '0 0 4px 0',
                }}
              >
                Dados pessoais
              </h2>

              {/* Nome completo */}
              <OutlinedInput
                label="Nome completo"
                value={nomeCompleto}
                onChange={setNomeCompleto}
              />

              {/* Nome Social */}
              <OutlinedInput
                label="Nome Social"
                value={nomeSocial}
                onChange={setNomeSocial}
              />

              {/* CPF & Data de nascimento */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <OutlinedInput
                  label="CPF"
                  value={cpf}
                  onChange={setCpf}
                />
                <OutlinedInput
                  label="Data de nascimento"
                  value={dataNascimento}
                  onChange={setDataNascimento}
                  placeholder="Data de nascimento"
                  icon={
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  }
                />
              </div>

              {/* Gênero & Identificação étnica */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <OutlinedSelect
                  label="Gênero"
                  value={genero}
                  onChange={setGenero}
                  options={generosOptions}
                  placeholder="Gênero"
                />
                <OutlinedSelect
                  label="Identificação étnica"
                  value={identificacaoEtnica}
                  onChange={setIdentificacaoEtnica}
                  options={etniasOptions}
                  placeholder="Identificação étnica"
                />
              </div>

              {/* Número Whatsapp & Email */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <OutlinedInput
                  label="Número Whatsapp"
                  value={numeroWhatsapp}
                  onChange={setNumeroWhatsapp}
                  placeholder="Número Whatsapp"
                />
                <OutlinedInput
                  label="Email"
                  value={email}
                  onChange={setEmail}
                  required
                />
              </div>

              {/* Mora em Recife? */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '8px' }}>
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#0F172A',
                    margin: '0 0 12px 0',
                    textAlign: 'center',
                  }}
                >
                  Mora em Recife?
                </h3>
                <div style={{ width: '100%', maxWidth: '600px' }}>
                  <OutlinedSelect
                    label=""
                    value={moraEmRecife}
                    onChange={setMoraEmRecife}
                    options={recifeOptions}
                  />
                </div>
              </div>
            </section>

            {/* ── Section: Dados profissionais ── */}
            <section style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h2
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#0F172A',
                  margin: '0 0 4px 0',
                }}
              >
                Dados profissionais
              </h2>

              {/* Escolaridade & Instituição de ensino */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <OutlinedSelect
                  label="Escolaridade"
                  value={escolaridade}
                  onChange={setEscolaridade}
                  options={escolaridadeOptions}
                  placeholder="Escolaridade"
                />
                <OutlinedInput
                  label="Instituição de ensino"
                  value={instituicaoEnsino}
                  onChange={setInstituicaoEnsino}
                  placeholder="Instituição de ensino"
                />
              </div>

              {/* Lattes & LinkedIn */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <OutlinedInput
                  label="Lattes"
                  value={lattes}
                  onChange={setLattes}
                  placeholder="Lattes"
                />
                <OutlinedInput
                  label="LinkedIn"
                  value={linkedIn}
                  onChange={setLinkedIn}
                  placeholder="LinkedIn"
                />
              </div>

              {/* Atuação profissional */}
              <OutlinedTextarea
                label="Atuação profissional"
                value={atuacaoProfissional}
                onChange={setAtuacaoProfissional}
                placeholder="Atuação profissional"
                rows={5}
              />

              {/* Links externos */}
              <OutlinedTextarea
                label="Links externos"
                value={linksExternos}
                onChange={setLinksExternos}
                placeholder="Links externos"
                rows={4}
              />
            </section>

            {/* ── Section: Receber notificações ── */}
            <section style={{ marginBottom: '40px' }}>
              <h2
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#0F172A',
                  margin: '0 0 16px 0',
                }}
              >
                Receber notificações
              </h2>

              {/* Checkboxes */}
              <div style={{ display: 'flex', gap: '32px', marginBottom: '24px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', color: '#1E293B' }}>
                  <input
                    type="checkbox"
                    checked={notificacaoWhatsapp}
                    onChange={e => setNotificacaoWhatsapp(e.target.checked)}
                    style={{ width: '16px', height: '16px', accentColor: '#00a8b5', cursor: 'pointer' }}
                  />
                  Notificação via whatsapp
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', color: '#1E293B' }}>
                  <input
                    type="checkbox"
                    checked={notificacaoEmail}
                    onChange={e => setNotificacaoEmail(e.target.checked)}
                    style={{ width: '16px', height: '16px', accentColor: '#00a8b5', cursor: 'pointer' }}
                  />
                  Notificação via email
                </label>
              </div>

              {/* Assuntos sendo gerados! */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #CBD5E1',
                  borderRadius: '6px',
                  padding: '12px 14px',
                  minHeight: '48px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                {assuntos.length === 0 && (
                  <span style={{ color: '#94A3B8', fontSize: '14px' }}>Assuntos sendo gerados!</span>
                )}

                {assuntos.map(tag => (
                  <span
                    key={tag}
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
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveAssunto(tag)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#007A87',
                        cursor: 'pointer',
                        padding: 0,
                        fontSize: '14px',
                        lineHeight: 1,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      ×
                    </button>
                  </span>
                ))}

                <input
                  type="text"
                  value={novoAssunto}
                  onChange={e => setNovoAssunto(e.target.value)}
                  onKeyDown={handleAddAssunto}
                  placeholder={assuntos.length === 0 ? '' : 'Adicionar...'}
                  style={{
                    border: 'none',
                    outline: 'none',
                    fontSize: '14px',
                    color: '#1E293B',
                    flex: 1,
                    minWidth: '120px',
                    backgroundColor: 'transparent',
                  }}
                />
              </div>
            </section>

            {/* ── Bottom Action Buttons ── */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                marginTop: '32px',
              }}
            >
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
                {/* Salvar */}
                <button
                  type="submit"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px 32px',
                    borderRadius: '8px',
                    border: '1.5px solid #00a8b5',
                    backgroundColor: '#ffffff',
                    color: '#00a8b5',
                    fontSize: '15px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    minWidth: '220px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(0, 168, 181, 0.06)'
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = '#ffffff'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2" />
                  </svg>
                  Salvar
                </button>

                {/* gerar assuntos de conexão */}
                <button
                  type="button"
                  onClick={handleGerarAssuntos}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px 28px',
                    borderRadius: '8px',
                    border: '1.5px solid #00a8b5',
                    backgroundColor: '#ffffff',
                    color: '#00a8b5',
                    fontSize: '15px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    minWidth: '260px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(0, 168, 181, 0.06)'
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = '#ffffff'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <path d="M8.59 13.51l6.83 3.98M15.41 6.51L8.59 10.49" strokeLinecap="round" />
                  </svg>
                  gerar assuntos de conexão
                </button>
              </div>

              {/* Excluir */}
              <button
                type="button"
                onClick={() => setShowDeleteModal(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '12px 32px',
                  borderRadius: '8px',
                  border: '1.5px solid #00a8b5',
                  backgroundColor: '#ffffff',
                  color: '#00a8b5',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  minWidth: '220px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(0, 168, 181, 0.06)'
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = '#ffffff'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Excluir
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}

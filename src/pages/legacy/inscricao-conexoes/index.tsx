import React, { useState } from 'react'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'

interface CategoryOption {
  id: string
  label: string
  color: string
}

const CATEGORY_OPTIONS: CategoryOption[] = [
  { id: 'govtech', label: 'GovTech & Gestão Pública', color: '#3b82f6' },
  { id: 'smartcities', label: 'Cidades Inteligentes', color: '#06b6d4' },
  { id: 'healthtech', label: 'HealthTech & Saúde', color: '#10b981' },
  { id: 'edutech', label: 'EduTech & Educação', color: '#8b5cf6' },
  { id: 'fintech', label: 'FinTech & Serviços Financeiros', color: '#f59e0b' },
  { id: 'esg', label: 'ESG & Sustentabilidade', color: '#059669' },
  { id: 'cleantech', label: 'CleanTech & Meio Ambiente', color: '#14b8a6' },
  { id: 'ai', label: 'Inteligência Artificial & Dados', color: '#6366f1' },
  { id: 'saas', label: 'B2B SaaS', color: '#ec4899' },
  { id: 'deeptech', label: 'DeepTech & Pesquisa', color: '#d97706' },
]

const DEFAULT_AVATARS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
]

const DEFAULT_LOGOS = [
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80',
  'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=150&q=80',
  'https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=150&q=80',
]

export default function InscricaoConexoesPage() {
  // Form State
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [startupLogo, setStartupLogo] = useState<string | null>(null)
  const [nome, setNome] = useState('Pedro Dhalia')
  const [whatsapp, setWhatsapp] = useState('(81) 99876-5432')
  const [startupNome, setStartupNome] = useState('')
  const [startupDescricao, setStartupDescricao] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [notifyWhatsapp, setNotifyWhatsapp] = useState(true)

  // UI States
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false)
  const [isAiTurbining, setIsAiTurbining] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [isSaved, setIsSaved] = useState(false)
  const [showAvatarPicker, setShowAvatarPicker] = useState(false)
  const [showLogoPicker, setShowLogoPicker] = useState(false)

  // Helper toast notification
  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3500)
  }

  // AI Description Enhancement
  const handleTurbinarDescricao = () => {
    setIsAiTurbining(true)
    setTimeout(() => {
      const current = startupDescricao.trim()
      const enhanced = current
        ? `${current}\n\n✨ [IA Otimizada]: Atuamos no desenvolvimento de soluções inovadoras focadas em eficiência operacional, impacto social positivo e escalabilidade tecnológica no ecossistema CORETO.`
        : 'Startup focada no desenvolvimento de soluções tecnológicas inovadoras para otimização de processos públicos e ecossistema de inovação aberta, integrando inteligência de dados e experiência do usuário.'
      setStartupDescricao(enhanced)
      setIsAiTurbining(false)
      showToast('Descrição da startup turbinada com IA!')
    }, 1200)
  }

  // Category toggle
  const toggleCategory = (catId: string) => {
    if (selectedCategories.includes(catId)) {
      setSelectedCategories(selectedCategories.filter(c => c !== catId))
    } else {
      setSelectedCategories([...selectedCategories, catId])
    }
  }

  // Handle Save
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaved(true)
    showToast('Perfil e dados da startup salvos com sucesso!')
    setTimeout(() => setIsSaved(false), 4000)
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#F4F7FA',
        fontFamily: "'DM Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        display: 'flex',
        flexDirection: 'column',
        color: '#1E293B',
      }}
    >
      {/* ── Toast Notification ── */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            top: 20,
            right: 20,
            backgroundColor: '#00a8b5',
            color: '#ffffff',
            padding: '12px 24px',
            borderRadius: '8px',
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.2)',
            zIndex: 1000,
            fontSize: '14px',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            animation: 'fadeIn 0.3s ease',
          }}
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
          {toastMessage}
        </div>
      )}

      <Header />

      {/* ── Main Layout Body (Sidebar + Content) ── */}
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />

        {/* ── Main Content Area ── */}
        <main style={{ flex: 1, padding: '32px 40px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          {/* Top Banner Card */}
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #0f172a 100%)',
              color: '#ffffff',
              padding: '40px 48px',
              marginBottom: '36px',
              overflow: 'hidden',
              boxShadow: '0 10px 25px -5px rgba(2, 132, 199, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Background Decorative Rings */}
            <div
              style={{
                position: 'absolute',
                right: '-40px',
                top: '-40px',
                width: '380px',
                height: '380px',
                borderRadius: '50%',
                border: '40px solid rgba(255, 255, 255, 0.08)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                right: '40px',
                top: '0px',
                width: '260px',
                height: '260px',
                borderRadius: '50%',
                border: '30px solid rgba(255, 255, 255, 0.12)',
                pointerEvents: 'none',
              }}
            />

            <div style={{ maxWidth: '650px', zIndex: 2 }}>
              <h2
                style={{
                  fontSize: '28px',
                  fontWeight: 700,
                  lineHeight: 1.3,
                  margin: 0,
                  letterSpacing: '-0.02em',
                }}
              >
                Aquele espaço massa para fazer conexões, gerar negócios e criar oportunidades
              </h2>
            </div>
          </div>

          {/* Form Header */}
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#1E1B4B', margin: '0 0 6px 0' }}>
              Bora criar teu perfil?
            </h1>
            <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>
              Queremos saber mais sobre você! Quanto mais completas as informações, melhor!
            </p>
          </div>

          {/* Form Main Container */}
          <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Section 1: Foto de Perfil */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '24px 28px', border: '1px solid #E2E8F0' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#334155', marginBottom: '16px' }}>
                Foto de Perfil
              </label>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div
                  onClick={() => setShowAvatarPicker(!showAvatarPicker)}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    border: '2px solid #00a8b5',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                  }}
                  title="Clique para selecionar uma foto"
                >
                  {profileImage ? (
                    <img src={profileImage} alt="Foto Perfil" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <span style={{ fontSize: '13px', color: '#f97316', fontWeight: 600 }}>
                      Selecione
                    </span>
                  )}
                </div>

                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '13px', color: '#64748B' }}>
                    Utilize imagens com proporção 150 x 150
                  </span>
                  {showAvatarPicker && (
                    <div style={{ marginTop: '12px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: '#475569' }}>Escolha um exemplo:</span>
                      {DEFAULT_AVATARS.map((url, idx) => (
                        <img
                          key={idx}
                          src={url}
                          alt={`Avatar ${idx}`}
                          onClick={() => {
                            setProfileImage(url)
                            setShowAvatarPicker(false)
                          }}
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            border: profileImage === url ? '2px solid #00a8b5' : '1px solid #cbd5e1',
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Section 2: Dados pessoais */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '24px 28px', border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1E1B4B', margin: '0 0 20px 0' }}>
                Dados pessoais
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Field: Nome */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>
                    Nome
                  </label>
                  <input
                    type="text"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    placeholder="Nome completo"
                    style={{
                      width: '100%',
                      height: '46px',
                      padding: '0 16px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '14px',
                      color: '#1E293B',
                      outline: 'none',
                      boxSizing: 'border-box',
                      transition: 'border-color 0.2s ease',
                    }}
                    onFocus={e => (e.target.style.borderColor = '#00a8b5')}
                    onBlur={e => (e.target.style.borderColor = '#CBD5E1')}
                  />
                </div>

                {/* Field: Telefone (Whatsapp) */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>
                    Telefone (Whatsapp)
                  </label>
                  <input
                    type="text"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    placeholder="Número WhatsApp"
                    style={{
                      width: '100%',
                      height: '46px',
                      padding: '0 16px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '14px',
                      color: '#1E293B',
                      outline: 'none',
                      boxSizing: 'border-box',
                      transition: 'border-color 0.2s ease',
                    }}
                    onFocus={e => (e.target.style.borderColor = '#00a8b5')}
                    onBlur={e => (e.target.style.borderColor = '#CBD5E1')}
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Dados da startup */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '24px 28px', border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1E1B4B', margin: '0 0 20px 0' }}>
                Dados da startup
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Field: Logo */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '12px' }}>
                    Logo
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div
                      onClick={() => setShowLogoPicker(!showLogoPicker)}
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        border: '2px solid #00a8b5',
                        backgroundColor: '#ffffff',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        overflow: 'hidden',
                        transition: 'all 0.2s ease',
                      }}
                      title="Clique para selecionar uma logo"
                    >
                      {startupLogo ? (
                        <img src={startupLogo} alt="Startup Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <span style={{ fontSize: '13px', color: '#f97316', fontWeight: 600 }}>
                          Selecione
                        </span>
                      )}
                    </div>

                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: '13px', color: '#64748B' }}>
                        Faça upload de uma logo para sua startup! Utilize imagens com proporção 150 x 150
                      </span>
                      {showLogoPicker && (
                        <div style={{ marginTop: '12px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                          <span style={{ fontSize: '12px', fontWeight: 600, color: '#475569' }}>Exemplos de logo:</span>
                          {DEFAULT_LOGOS.map((url, idx) => (
                            <img
                              key={idx}
                              src={url}
                              alt={`Logo ${idx}`}
                              onClick={() => {
                                setStartupLogo(url)
                                setShowLogoPicker(false)
                              }}
                              style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                border: startupLogo === url ? '2px solid #00a8b5' : '1px solid #cbd5e1',
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Field: Nome da Startup */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>
                    Nome
                  </label>
                  <input
                    type="text"
                    value={startupNome}
                    onChange={e => setStartupNome(e.target.value)}
                    placeholder="Digite o nome da sua startup"
                    style={{
                      width: '100%',
                      height: '46px',
                      padding: '0 16px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '14px',
                      color: '#1E293B',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                    onFocus={e => (e.target.style.borderColor = '#00a8b5')}
                    onBlur={e => (e.target.style.borderColor = '#CBD5E1')}
                  />
                </div>

                {/* Field: Descrição da Startup (with AI assist) */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#475569' }}>
                      Descrição
                    </label>
                    <button
                      type="button"
                      onClick={handleTurbinarDescricao}
                      disabled={isAiTurbining}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#0284c7',
                        fontSize: '12px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      {isAiTurbining ? '⏳ Processando...' : '✨ Turbinar com IA'}
                    </button>
                  </div>
                  <textarea
                    rows={4}
                    value={startupDescricao}
                    onChange={e => setStartupDescricao(e.target.value)}
                    placeholder="Digite um pouco mais sobre sua startup"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '14px',
                      color: '#1E293B',
                      outline: 'none',
                      boxSizing: 'border-box',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                    }}
                    onFocus={e => (e.target.style.borderColor = '#00a8b5')}
                    onBlur={e => (e.target.style.borderColor = '#CBD5E1')}
                  />
                </div>

                {/* Field: Categorias */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>
                    Categorias
                  </label>

                  {/* Dropdown container */}
                  <div style={{ position: 'relative' }}>
                    <div
                      onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                      style={{
                        minHeight: '46px',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        border: '1px solid #CBD5E1',
                        backgroundColor: '#ffffff',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '8px',
                      }}
                    >
                      {selectedCategories.length === 0 ? (
                        <span style={{ fontSize: '14px', color: '#94A3B8' }}>
                          Escolha quais categorias de CORETO sua startup melhor se encaixa
                        </span>
                      ) : (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {selectedCategories.map(catId => {
                            const cat = CATEGORY_OPTIONS.find(c => c.id === catId)
                            return (
                              <span
                                key={catId}
                                style={{
                                  backgroundColor: `${cat?.color || '#0284c7'}15`,
                                  color: cat?.color || '#0284c7',
                                  border: `1px solid ${cat?.color || '#0284c7'}40`,
                                  padding: '4px 10px',
                                  borderRadius: '20px',
                                  fontSize: '12px',
                                  fontWeight: 600,
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '6px',
                                }}
                              >
                                {cat?.label}
                                <span
                                  onClick={e => {
                                    e.stopPropagation()
                                    toggleCategory(catId)
                                  }}
                                  style={{ cursor: 'pointer', fontSize: '14px', fontWeight: 700 }}
                                >
                                  ×
                                </span>
                              </span>
                            )
                          })}
                        </div>
                      )}
                      <span style={{ fontSize: '12px', color: '#64748B' }}>▼</span>
                    </div>

                    {/* Popover / Options List */}
                    {isCategoryDropdownOpen && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          right: 0,
                          marginTop: '4px',
                          backgroundColor: '#ffffff',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)',
                          maxHeight: '220px',
                          overflowY: 'auto',
                          zIndex: 50,
                          padding: '6px 0',
                        }}
                      >
                        {CATEGORY_OPTIONS.map(cat => {
                          const isSelected = selectedCategories.includes(cat.id)
                          return (
                            <div
                              key={cat.id}
                              onClick={() => toggleCategory(cat.id)}
                              style={{
                                padding: '10px 16px',
                                fontSize: '13px',
                                cursor: 'pointer',
                                backgroundColor: isSelected ? '#F0FDFA' : 'transparent',
                                color: isSelected ? '#00a8b5' : '#334155',
                                fontWeight: isSelected ? 600 : 400,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                transition: 'background-color 0.15s ease',
                              }}
                            >
                              <span>{cat.label}</span>
                              {isSelected && <span style={{ color: '#00a8b5', fontWeight: 700 }}>✓</span>}
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Receber notificações */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '24px 28px', border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1E1B4B', margin: '0 0 16px 0' }}>
                Receber notificações
              </h3>

              <label
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  color: '#334155',
                  userSelect: 'none',
                }}
              >
                <input
                  type="checkbox"
                  checked={notifyWhatsapp}
                  onChange={e => setNotifyWhatsapp(e.target.checked)}
                  style={{
                    width: '18px',
                    height: '18px',
                    accentColor: '#00a8b5',
                    cursor: 'pointer',
                  }}
                />
                Notificação via whatsapp
              </label>
            </div>

            {/* Section 5: Submit Action Button */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '12px' }}>
              <button
                type="submit"
                style={{
                  minWidth: '280px',
                  padding: '14px 32px',
                  backgroundColor: isSaved ? '#10b981' : '#ffffff',
                  border: `1px solid ${isSaved ? '#10b981' : '#00a8b5'}`,
                  borderRadius: '8px',
                  color: isSaved ? '#ffffff' : '#00a8b5',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  boxShadow: '0 2px 8px rgba(0, 168, 181, 0.08)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  if (!isSaved) {
                    e.currentTarget.style.backgroundColor = '#00a8b5'
                    e.currentTarget.style.color = '#ffffff'
                  }
                }}
                onMouseLeave={e => {
                  if (!isSaved) {
                    e.currentTarget.style.backgroundColor = '#ffffff'
                    e.currentTarget.style.color = '#00a8b5'
                  }
                }}
              >
                <span>{isSaved ? '✅' : '👍'}</span> {isSaved ? 'Salvo com sucesso!' : 'Salvar'}
              </button>
            </div>
          </form>

          {/* Bottom Floating Info / Status Bar */}
          <div
            style={{
              marginTop: '48px',
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              padding: '14px 20px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span style={{ fontSize: '13px', color: '#94A3B8' }}>Assuntos sendo gerados!</span>
          </div>
        </main>
      </div>
    </div>
  )
}



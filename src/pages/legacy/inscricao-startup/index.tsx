import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import bannerStartup from '../../../assets/banner-inscricao-startup-evento.png'

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
        padding: '10px 24px',
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

interface FloatingFieldProps {
  label: string
  children: React.ReactNode
  focused?: boolean
}

function FloatingField({ label, children, focused = false }: FloatingFieldProps) {
  return (
    <div style={{ position: 'relative', marginTop: '12px' }}>
      <label
        style={{
          position: 'absolute',
          top: '-10px',
          left: '12px',
          backgroundColor: '#FFFFFF',
          padding: '0 6px',
          fontSize: '12px',
          fontWeight: 600,
          color: focused ? '#00a8b5' : '#64748B',
          zIndex: 2,
          transition: 'color 0.2s ease',
          pointerEvents: 'none',
        }}
      >
        {label}
      </label>
      {children}
    </div>
  )
}

export default function InscricaoStartupPage() {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // Step 1 State - Responsável & Dados Iniciais
  const [papelStartup, setPapelStartup] = useState('')
  const [dedicacaoStartup, setDedicacaoStartup] = useState('')
  const [nomeStartup, setNomeStartup] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [descricao, setDescricao] = useState('')
  const [problemaResolve, setProblemaResolve] = useState('')
  const [solucao, setSolucao] = useState('')
  const [caseSucesso, setCaseSucesso] = useState('')

  // Social links
  const [linkOficial, setLinkOficial] = useState('')
  const [instagram, setInstagram] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [youtube, setYoutube] = useState('')

  // Step 2 State - Conexões
  const [oqueEuSou, setOqueEuSou] = useState('')
  const [areasTematicas, setAreasTematicas] = useState<string[]>([])
  const [trlMaturidade, setTrlMaturidade] = useState('')
  const [estagioInovacao, setEstagioInovacao] = useState('')
  const [apoioProcuro, setApoioProcuro] = useState('')
  const [parceiroProcuro, setParceiroProcuro] = useState('')

  // Step 3 State - Time
  const [membrosTime, setMembrosTime] = useState<Array<{ nome: string; cargo: string; linkedin: string }>>([])
  const [novoMembroNome, setNovoMembroNome] = useState('')
  const [novoMembroCargo, setNovoMembroCargo] = useState('')
  const [novoMembroLinkedin, setNovoMembroLinkedin] = useState('')

  // Focus trackers for Floating labels
  const [focusedField, setFocusedField] = useState<string | null>(null)

  // Upload previews
  const [bannerPreview, setBannerPreview] = useState<string | null>(null)
  const [logoPreview, setLogoPreview] = useState<string | null>(null)

  const bannerInputRef = useRef<HTMLInputElement>(null)
  const logoInputRef = useRef<HTMLInputElement>(null)

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
  const handleBannerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onloadend = () => setBannerPreview(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onloadend = () => setLogoPreview(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  // Options
  const areaOptions = [
    'GovTech',
    'HealthTech',
    'EdTech',
    'ClimateTech',
    'AgTech',
    'FinTech',
    'Smart Cities',
    'Cybersecurity',
    'IA & Ciência de Dados',
    'BioTech',
    'Logística',
    'CleanTech',
    'DeepTech',
    'E-commerce',
    'Indústria 4.0',
    'Impacto Social',
  ]

  const toggleAreaTematica = (option: string) => {
    if (areasTematicas.includes(option)) {
      setAreasTematicas(areasTematicas.filter(item => item !== option))
    } else {
      if (areasTematicas.length < 3) {
        setAreasTematicas([...areasTematicas, option])
      }
    }
  }

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleAddMembro = () => {
    if (novoMembroNome.trim()) {
      setMembrosTime([
        ...membrosTime,
        { nome: novoMembroNome, cargo: novoMembroCargo, linkedin: novoMembroLinkedin },
      ])
      setNovoMembroNome('')
      setNovoMembroCargo('')
      setNovoMembroLinkedin('')
    }
  }

  const handleRemoveMembro = (index: number) => {
    setMembrosTime(membrosTime.filter((_, i) => i !== index))
  }

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 600)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setCurrentStep(1)
  }

  const isStep1MissingFields = !nomeStartup.trim() || !problemaResolve.trim() || !solucao.trim() || !descricao.trim()

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

      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />

        {/* ── Main Content Area ── */}
        <main style={{ flex: 1, padding: '36px 48px 80px', maxWidth: '1000px' }}>
          {isSubmitted ? (
            /* Success Feedback Screen */
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '48px 32px',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                border: '1px solid #E2E8F0',
                maxWidth: '640px',
                margin: '40px auto',
              }}
            >
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  backgroundColor: '#DEF7EC',
                  color: '#0E9F6E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                }}
              >
                <svg width="36" height="36" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
                Inscrição Concluída com Sucesso!
              </h2>

              <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.6, marginBottom: '32px' }}>
                Sua startup <strong>{nomeStartup || 'cadastrada'}</strong> foi registrada na rede CORETO.
                Nossa equipe analisará as informações e fará as conexões adequadas com o ecossistema!
              </p>

              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                <button
                  onClick={handleReset}
                  style={{
                    padding: '12px 24px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    backgroundColor: '#FFFFFF',
                    color: '#334155',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Editar cadastro
                </button>
                <Link
                  to="/legacy"
                  style={{
                    padding: '12px 24px',
                    borderRadius: '8px',
                    backgroundColor: '#EF5A24',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                >
                  Voltar ao painel
                </Link>
              </div>
            </div>
          ) : (
            /* Multi-step Form Container */
            <div>
              {/* ── STEP 1: Iniciativa & Dados Iniciais ── */}
              {currentStep === 1 && (
                <div>
                  {/* Hero Banner */}
                  <div
                    style={{
                      borderRadius: '12px',
                      overflow: 'hidden',
                      marginBottom: '24px',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    }}
                  >
                    <img
                      src={bannerStartup}
                      alt="Criar Startups - CORETO"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        borderRadius: '12px',
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '28px' }}>
                    <p style={{ fontSize: '15px', color: '#1A202C', margin: 0, fontWeight: 500 }}>
                      Queremos saber mais sobre tua startup! Quanto mais completas as informações, melhor para CORETO te conectar!
                    </p>
                  </div>

                  {/* CARD 1: Responsável pela Iniciativa */}
                  <div
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '12px',
                      padding: '28px',
                      marginBottom: '28px',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                      border: '1px solid #E2E8F0',
                    }}
                  >
                    <h2
                      style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#0F172A',
                        marginTop: 0,
                        marginBottom: '20px',
                      }}
                    >
                      Responsável pela Iniciativa
                    </h2>

                    <div
                      style={{
                        backgroundColor: '#F8FAFC',
                        borderRadius: '8px',
                        padding: '24px',
                        border: '1px solid #F1F5F9',
                      }}
                    >
                      <div style={{ marginBottom: '20px' }}>
                        <span style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A' }}>
                          Pedro Dhalia
                        </span>
                      </div>

                      {/* Seu papel na startup (Floating Label) */}
                      <div style={{ marginBottom: '20px' }}>
                        <FloatingField
                          label={papelStartup ? 'Seu papel na startup' : ''}
                          focused={focusedField === 'papelStartup'}
                        >
                          <input
                            type="text"
                            placeholder="Seu papel na startup"
                            value={papelStartup}
                            onChange={e => setPapelStartup(e.target.value)}
                            onFocus={() => setFocusedField('papelStartup')}
                            onBlur={() => setFocusedField(null)}
                            style={{
                              width: '100%',
                              height: '48px',
                              padding: '0 16px',
                              borderRadius: '8px',
                              border: focusedField === 'papelStartup' ? '1px solid #00a8b5' : '1px solid #CBD5E1',
                              backgroundColor: '#FFFFFF',
                              fontSize: '14px',
                              color: '#1E293B',
                              outline: 'none',
                              boxSizing: 'border-box',
                              transition: 'border-color 0.2s ease',
                            }}
                          />
                        </FloatingField>
                      </div>

                      {/* Qual a sua dedicação à startup? (Floating Label Select) */}
                      <div>
                        <FloatingField
                          label={dedicacaoStartup ? 'Qual a sua dedicação à startup?' : ''}
                          focused={focusedField === 'dedicacaoStartup'}
                        >
                          <select
                            value={dedicacaoStartup}
                            onChange={e => setDedicacaoStartup(e.target.value)}
                            onFocus={() => setFocusedField('dedicacaoStartup')}
                            onBlur={() => setFocusedField(null)}
                            style={{
                              width: '100%',
                              height: '48px',
                              padding: '0 16px',
                              borderRadius: '8px',
                              border: focusedField === 'dedicacaoStartup' ? '1px solid #00a8b5' : '1px solid #CBD5E1',
                              backgroundColor: '#FFFFFF',
                              fontSize: '14px',
                              color: dedicacaoStartup ? '#1E293B' : '#94A3B8',
                              outline: 'none',
                              boxSizing: 'border-box',
                              cursor: 'pointer',
                              transition: 'border-color 0.2s ease',
                              appearance: 'none',
                              backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 20 20' fill='%3C64748B' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'right 16px center',
                            }}
                          >
                            <option value="" disabled hidden>
                              Qual a sua dedicação à startup?
                            </option>
                            <option value="Parcial">Parcial</option>
                            <option value="Integral">Integral</option>
                          </select>
                        </FloatingField>
                      </div>
                    </div>
                  </div>

                  {/* CARD 2: Dados iniciais */}
                  <div
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '12px',
                      padding: '28px',
                      marginBottom: '28px',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                      border: '1px solid #E2E8F0',
                    }}
                  >
                    <h2
                      style={{
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#0F172A',
                        marginTop: 0,
                        marginBottom: '24px',
                      }}
                    >
                      Dados iniciais
                    </h2>

                    {/* Upload Banner & Logo Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '8px' }}>
                      <div
                        onClick={() => bannerInputRef.current?.click()}
                        style={{
                          height: '140px',
                          border: '1px dashed #CBD5E1',
                          borderRadius: '8px',
                          backgroundColor: bannerPreview ? '#000' : '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          position: 'relative',
                          overflow: 'hidden',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.borderColor = '#00a8b5')}
                        onMouseLeave={e => (e.currentTarget.style.borderColor = '#CBD5E1')}
                      >
                        <input
                          type="file"
                          ref={bannerInputRef}
                          onChange={handleBannerUpload}
                          accept="image/*"
                          style={{ display: 'none' }}
                        />
                        {bannerPreview ? (
                          <img
                            src={bannerPreview}
                            alt="Banner Preview"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        ) : (
                          <span style={{ color: '#94A3B8', fontSize: '14px', fontWeight: 500 }}>
                            Alterar Banner (1280x200)
                          </span>
                        )}
                      </div>

                      <div
                        onClick={() => logoInputRef.current?.click()}
                        style={{
                          height: '140px',
                          border: '1px dashed #CBD5E1',
                          borderRadius: '8px',
                          backgroundColor: logoPreview ? '#000' : '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          position: 'relative',
                          overflow: 'hidden',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.borderColor = '#00a8b5')}
                        onMouseLeave={e => (e.currentTarget.style.borderColor = '#CBD5E1')}
                      >
                        <input
                          type="file"
                          ref={logoInputRef}
                          onChange={handleLogoUpload}
                          accept="image/*"
                          style={{ display: 'none' }}
                        />
                        {logoPreview ? (
                          <img
                            src={logoPreview}
                            alt="Logo Preview"
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                          />
                        ) : (
                          <span style={{ color: '#94A3B8', fontSize: '14px', fontWeight: 500 }}>
                            Alterar LOGO (150x150)
                          </span>
                        )}
                      </div>
                    </div>

                    <div style={{ marginBottom: '24px', fontSize: '13px', color: '#475569', lineHeight: 1.4 }}>
                      <div>Banner: 1280x200px</div>
                      <div>Logo: 150x150px</div>
                    </div>

                    {/* Nome */}
                    <div style={{ marginBottom: '20px' }}>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '16px',
                          fontWeight: 700,
                          color: '#0F172A',
                          marginBottom: '8px',
                        }}
                      >
                        Nome
                      </label>
                      <input
                        type="text"
                        placeholder="nome da startup"
                        value={nomeStartup}
                        onChange={e => setNomeStartup(e.target.value)}
                        style={{
                          width: '100%',
                          height: '48px',
                          padding: '0 16px',
                          borderRadius: '8px',
                          border: '1px solid #00a8b5',
                          backgroundColor: '#FFFFFF',
                          fontSize: '14px',
                          color: '#1E293B',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>

                    {/* CNPJ */}
                    <div style={{ marginBottom: '20px' }}>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '16px',
                          fontWeight: 700,
                          color: '#0F172A',
                          marginBottom: '8px',
                        }}
                      >
                        CNPJ
                      </label>
                      <input
                        type="text"
                        placeholder="digite o CNPJ"
                        value={cnpj}
                        onChange={handleCnpjChange}
                        style={{
                          width: '100%',
                          height: '48px',
                          padding: '0 16px',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          backgroundColor: '#FFFFFF',
                          fontSize: '14px',
                          color: '#1E293B',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>

                    {/* Descrição */}
                    <div style={{ marginBottom: '24px' }}>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '16px',
                          fontWeight: 700,
                          color: '#0F172A',
                          marginBottom: '8px',
                        }}
                      >
                        Descrição
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Descreva aqui sua startup"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          backgroundColor: '#FFFFFF',
                          fontSize: '14px',
                          color: '#1E293B',
                          outline: 'none',
                          boxSizing: 'border-box',
                          resize: 'vertical',
                          fontFamily: 'inherit',
                        }}
                      />
                    </div>

                    {/* Problema que resolve */}
                    <div style={{ marginBottom: '24px' }}>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '16px',
                          fontWeight: 700,
                          color: '#0F172A',
                          marginBottom: '8px',
                        }}
                      >
                        Problema que resolve
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Descreva aqui sua startup"
                        value={problemaResolve}
                        onChange={e => setProblemaResolve(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          backgroundColor: '#FFFFFF',
                          fontSize: '14px',
                          color: '#1E293B',
                          outline: 'none',
                          boxSizing: 'border-box',
                          resize: 'vertical',
                          fontFamily: 'inherit',
                        }}
                      />
                    </div>

                    {/* Solução */}
                    <div style={{ marginBottom: '24px' }}>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '16px',
                          fontWeight: 700,
                          color: '#0F172A',
                          marginBottom: '8px',
                        }}
                      >
                        Solução
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Descreva aqui sua startup"
                        value={solucao}
                        onChange={e => setSolucao(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          borderRadius: '8px',
                          border: '1px solid #00a8b5',
                          backgroundColor: '#FFFFFF',
                          fontSize: '14px',
                          color: '#1E293B',
                          outline: 'none',
                          boxSizing: 'border-box',
                          resize: 'vertical',
                          fontFamily: 'inherit',
                        }}
                      />
                    </div>

                    {/* Case de sucesso */}
                    <div style={{ marginBottom: '24px' }}>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '16px',
                          fontWeight: 700,
                          color: '#0F172A',
                          marginBottom: '8px',
                        }}
                      >
                        Case de sucesso
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Descreva aqui sua startup"
                        value={caseSucesso}
                        onChange={e => setCaseSucesso(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          backgroundColor: '#FFFFFF',
                          fontSize: '14px',
                          color: '#1E293B',
                          outline: 'none',
                          boxSizing: 'border-box',
                          resize: 'vertical',
                          fontFamily: 'inherit',
                        }}
                      />
                    </div>

                    {/* Link Oficial */}
                    <div style={{ marginBottom: '20px' }}>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '16px',
                          fontWeight: 700,
                          color: '#0F172A',
                          marginBottom: '8px',
                        }}
                      >
                        Link Oficial
                      </label>
                      <input
                        type="text"
                        placeholder="Digite o link do Site de sua empresa"
                        value={linkOficial}
                        onChange={e => setLinkOficial(e.target.value)}
                        style={{
                          width: '100%',
                          height: '48px',
                          padding: '0 16px',
                          borderRadius: '8px',
                          border: '1px solid #00a8b5',
                          backgroundColor: '#FFFFFF',
                          fontSize: '14px',
                          color: '#1E293B',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>

                    {/* Instagram */}
                    <div style={{ marginBottom: '20px' }}>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '16px',
                          fontWeight: 700,
                          color: '#0F172A',
                          marginBottom: '8px',
                        }}
                      >
                        Instagram
                      </label>
                      <input
                        type="text"
                        placeholder="Digite o link do Instagram de sua empresa"
                        value={instagram}
                        onChange={e => setInstagram(e.target.value)}
                        style={{
                          width: '100%',
                          height: '48px',
                          padding: '0 16px',
                          borderRadius: '8px',
                          border: '1px solid #00a8b5',
                          backgroundColor: '#FFFFFF',
                          fontSize: '14px',
                          color: '#1E293B',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>

                    {/* LinkedIn */}
                    <div style={{ marginBottom: '20px' }}>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '16px',
                          fontWeight: 700,
                          color: '#0F172A',
                          marginBottom: '8px',
                        }}
                      >
                        LinkedIn
                      </label>
                      <input
                        type="text"
                        placeholder="Digite o Linkedin de sua empresa"
                        value={linkedin}
                        onChange={e => setLinkedin(e.target.value)}
                        style={{
                          width: '100%',
                          height: '48px',
                          padding: '0 16px',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          backgroundColor: '#FFFFFF',
                          fontSize: '14px',
                          color: '#1E293B',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>

                    {/* Youtube */}
                    <div style={{ marginBottom: '32px' }}>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '16px',
                          fontWeight: 700,
                          color: '#0F172A',
                          marginBottom: '8px',
                        }}
                      >
                        Youtube
                      </label>
                      <input
                        type="text"
                        placeholder="Digite o canal do Youtube de sua empresa"
                        value={youtube}
                        onChange={e => setYoutube(e.target.value)}
                        style={{
                          width: '100%',
                          height: '48px',
                          padding: '0 16px',
                          borderRadius: '8px',
                          border: '1px solid #00a8b5',
                          backgroundColor: '#FFFFFF',
                          fontSize: '14px',
                          color: '#1E293B',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>

                    {/* Button Next */}
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                      <OutlineButton onClick={handleNextStep}>Próximo →</OutlineButton>
                    </div>
                  </div>
                </div>
              )}

              {/* ── STEP 2: Conexões ── */}
              {currentStep === 2 && (
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    padding: '28px',
                    marginBottom: '28px',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #E2E8F0',
                  }}
                >
                  {/* Top Bar with Voltar */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '24px',
                    }}
                  >
                    <h1
                      style={{
                        fontSize: '28px',
                        fontWeight: 800,
                        color: '#0F172A',
                        margin: 0,
                      }}
                    >
                      Conexões
                    </h1>
                    <OutlineButton onClick={handlePrevStep}>&lt; Voltar</OutlineButton>
                  </div>

                  {/* O que eu sou: */}
                  <div style={{ marginBottom: '28px' }}>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#0F172A',
                        marginBottom: '8px',
                      }}
                    >
                      O que eu sou:
                    </label>
                    <select
                      value={oqueEuSou}
                      onChange={e => setOqueEuSou(e.target.value)}
                      style={{
                        width: '100%',
                        height: '48px',
                        padding: '0 16px',
                        borderRadius: '8px',
                        border: '1px solid #CBD5E1',
                        backgroundColor: '#FFFFFF',
                        fontSize: '14px',
                        color: oqueEuSou ? '#1E293B' : '#94A3B8',
                        outline: 'none',
                        boxSizing: 'border-box',
                        cursor: 'pointer',
                        appearance: 'none',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 20 20' fill='%3C64748B' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 16px center',
                      }}
                    >
                      <option value="" disabled hidden>
                        Escolha uma opção
                      </option>
                      <option value="startup">Startup</option>
                      <option value="scaleup">Scale-up</option>
                      <option value="impacto">Negócio de Impacto Social</option>
                      <option value="tecnologica">Empresa de Base Tecnológica</option>
                      <option value="spinoff">Spin-off Acadêmica / Laboratório</option>
                    </select>
                  </div>

                  {/* Área temática */}
                  <div style={{ marginBottom: '32px' }}>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#0F172A',
                        marginBottom: '8px',
                      }}
                    >
                      Área temática
                    </label>
                    <div
                      style={{
                        minHeight: '48px',
                        border: '1px solid #00a8b5',
                        borderRadius: '8px',
                        padding: '8px 12px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: '8px',
                        backgroundColor: '#FFFFFF',
                        boxSizing: 'border-box',
                      }}
                    >
                      {areasTematicas.length === 0 && (
                        <span style={{ color: '#94A3B8', fontSize: '14px' }}>Escolha até 3 palavras</span>
                      )}
                      {areasTematicas.map(area => (
                        <span
                          key={area}
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
                          {area}
                          <span
                            onClick={() => toggleAreaTematica(area)}
                            style={{
                              cursor: 'pointer',
                              fontWeight: 700,
                              fontSize: '14px',
                            }}
                          >
                            ×
                          </span>
                        </span>
                      ))}
                    </div>

                    {/* Options selection grid */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                        marginTop: '12px',
                      }}
                    >
                      {areaOptions.map(option => {
                        const isSelected = areasTematicas.includes(option)
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => toggleAreaTematica(option)}
                            style={{
                              padding: '6px 12px',
                              borderRadius: '20px',
                              border: isSelected ? '1px solid #00a8b5' : '1px solid #CBD5E1',
                              backgroundColor: isSelected ? '#00a8b5' : '#F8FAFC',
                              color: isSelected ? '#FFFFFF' : '#475569',
                              fontSize: '13px',
                              fontWeight: 500,
                              cursor: 'pointer',
                              transition: 'all 0.15s ease',
                            }}
                          >
                            {option}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Maturidade */}
                  <div style={{ marginBottom: '28px' }}>
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#0F172A',
                        marginTop: 0,
                        marginBottom: '16px',
                      }}
                    >
                      Maturidade
                    </h3>

                    {/* TRL */}
                    <div style={{ marginBottom: '20px' }}>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '14px',
                          fontWeight: 600,
                          color: '#475569',
                          marginBottom: '6px',
                        }}
                      >
                        TRL
                      </label>
                      <select
                        value={trlMaturidade}
                        onChange={e => setTrlMaturidade(e.target.value)}
                        style={{
                          width: '100%',
                          height: '48px',
                          padding: '0 16px',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          backgroundColor: '#FFFFFF',
                          fontSize: '14px',
                          color: trlMaturidade ? '#1E293B' : '#94A3B8',
                          outline: 'none',
                          boxSizing: 'border-box',
                          cursor: 'pointer',
                          appearance: 'none',
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 20 20' fill='%3C64748B' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 16px center',
                        }}
                      >
                        <option value="" disabled hidden>
                          Escolha uma opção
                        </option>
                        <option value="TRL 1-2">TRL 1-2 (Pesquisa Boadora)</option>
                        <option value="TRL 3-4">TRL 3-4 (Prova de Conceito)</option>
                        <option value="TRL 5-6">TRL 5-6 (Protótipo em Validação)</option>
                        <option value="TRL 7-9">TRL 7-9 (Sistema Operacional/Comercial)</option>
                      </select>
                    </div>

                    {/* Estágio de inovação */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '14px',
                          fontWeight: 600,
                          color: '#475569',
                          marginBottom: '6px',
                        }}
                      >
                        Estágio de inovação
                      </label>
                      <select
                        value={estagioInovacao}
                        onChange={e => setEstagioInovacao(e.target.value)}
                        style={{
                          width: '100%',
                          height: '48px',
                          padding: '0 16px',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          backgroundColor: '#FFFFFF',
                          fontSize: '14px',
                          color: estagioInovacao ? '#1E293B' : '#94A3B8',
                          outline: 'none',
                          boxSizing: 'border-box',
                          cursor: 'pointer',
                          appearance: 'none',
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 20 20' fill='%3C64748B' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 16px center',
                        }}
                      >
                        <option value="" disabled hidden>
                          Escolha uma opção
                        </option>
                        <option value="Ideação">Ideação</option>
                        <option value="Validação">Validação</option>
                        <option value="Operação">Operação</option>
                        <option value="Tração">Tração</option>
                        <option value="Escala">Escala</option>
                      </select>
                    </div>
                  </div>

                  {/* O que busco? */}
                  <div style={{ marginBottom: '32px' }}>
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#0F172A',
                        marginTop: 0,
                        marginBottom: '16px',
                      }}
                    >
                      O que busco?
                    </h3>

                    {/* Apoio que procuro */}
                    <div style={{ marginBottom: '20px' }}>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '14px',
                          fontWeight: 600,
                          color: '#475569',
                          marginBottom: '6px',
                        }}
                      >
                        Apoio que procuro
                      </label>
                      <select
                        value={apoioProcuro}
                        onChange={e => setApoioProcuro(e.target.value)}
                        style={{
                          width: '100%',
                          height: '48px',
                          padding: '0 16px',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          backgroundColor: '#FFFFFF',
                          fontSize: '14px',
                          color: apoioProcuro ? '#1E293B' : '#94A3B8',
                          outline: 'none',
                          boxSizing: 'border-box',
                          cursor: 'pointer',
                          appearance: 'none',
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 20 20' fill='%3C64748B' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 16px center',
                        }}
                      >
                        <option value="" disabled hidden>
                          Escolha uma opção
                        </option>
                        <option value="fomento">Fomento / Editais de Subvenção</option>
                        <option value="investimento">Investimento Anjo / VC</option>
                        <option value="aceleracao">Programas de Aceleração / Incubação</option>
                        <option value="pilotos">Pilotos e POCs com Governo</option>
                        <option value="empresas">Pilotos com Empresas Privadas</option>
                        <option value="parcerias">Parcerias de P&D com Universidades</option>
                      </select>
                    </div>

                    {/* Parceiro que procuro */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '14px',
                          fontWeight: 600,
                          color: '#475569',
                          marginBottom: '6px',
                        }}
                      >
                        Parceiro que procuro
                      </label>
                      <select
                        value={parceiroProcuro}
                        onChange={e => setParceiroProcuro(e.target.value)}
                        style={{
                          width: '100%',
                          height: '48px',
                          padding: '0 16px',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          backgroundColor: '#FFFFFF',
                          fontSize: '14px',
                          color: parceiroProcuro ? '#1E293B' : '#94A3B8',
                          outline: 'none',
                          boxSizing: 'border-box',
                          cursor: 'pointer',
                          appearance: 'none',
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 20 20' fill='%3C64748B' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 16px center',
                        }}
                      >
                        <option value="" disabled hidden>
                          Escolha uma opção
                        </option>
                        <option value="governo">Órgãos Públicos (Prefeitura, Estado, Federal)</option>
                        <option value="privada">Empresas Privadas (Indústria, Serviços)</option>
                        <option value="investidores">Investidores (Anjo, Fundos)</option>
                        <option value="universidades">Universidades e ICTs</option>
                        <option value="social">ONGs e Coletivos Locais</option>
                      </select>
                    </div>
                  </div>

                  {/* Button Next */}
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <OutlineButton onClick={handleNextStep}>Próximo →</OutlineButton>
                  </div>
                </div>
              )}

              {/* ── STEP 3: Time ── */}
              {currentStep === 3 && (
                <div>
                  {/* Top Bar with Voltar */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '20px',
                    }}
                  >
                    <h1
                      style={{
                        fontSize: '32px',
                        fontWeight: 800,
                        color: '#0F172A',
                        margin: 0,
                      }}
                    >
                      Time
                    </h1>
                    <OutlineButton onClick={handlePrevStep}>&lt; Voltar</OutlineButton>
                  </div>

                  {/* Warning Badge Banner if Step 1 fields missing */}
                  {isStep1MissingFields && (
                    <div
                      style={{
                        backgroundColor: '#00a8b5',
                        color: '#FFFFFF',
                        padding: '12px 18px',
                        borderRadius: '6px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '14px',
                        fontWeight: 600,
                        marginBottom: '24px',
                        boxShadow: '0 2px 8px rgba(0, 168, 181, 0.2)',
                      }}
                    >
                      <span style={{ fontSize: '18px', lineHeight: 1 }}>✳</span>
                      <span>Preencha o nome, problema, solução e descrição</span>
                    </div>
                  )}

                  {/* CARD 1: Responsável pela Iniciativa Summary */}
                  <div
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '12px',
                      padding: '28px',
                      marginBottom: '28px',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                      border: '1px solid #E2E8F0',
                    }}
                  >
                    <h2
                      style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#0F172A',
                        marginTop: 0,
                        marginBottom: '20px',
                      }}
                    >
                      Responsável pela Iniciativa
                    </h2>

                    <div
                      style={{
                        backgroundColor: '#F8FAFC',
                        borderRadius: '8px',
                        padding: '24px',
                        border: '1px solid #F1F5F9',
                      }}
                    >
                      <div style={{ marginBottom: '20px' }}>
                        <span style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A' }}>
                          Pedro Dhalia
                        </span>
                      </div>

                      {/* Seu papel na startup */}
                      <div style={{ marginBottom: '20px' }}>
                        <FloatingField label="Seu papel na startup">
                          <input
                            type="text"
                            value={papelStartup || 'Fundador / CEO'}
                            readOnly
                            style={{
                              width: '100%',
                              height: '48px',
                              padding: '0 16px',
                              borderRadius: '8px',
                              border: '1px solid #CBD5E1',
                              backgroundColor: '#FFFFFF',
                              fontSize: '14px',
                              color: '#1E293B',
                              outline: 'none',
                              boxSizing: 'border-box',
                            }}
                          />
                        </FloatingField>
                      </div>

                      {/* Qual a sua dedicação à startup? */}
                      <div>
                        <FloatingField label="Qual a sua dedicação à startup?">
                          <input
                            type="text"
                            value={dedicacaoStartup || 'Parcial'}
                            readOnly
                            style={{
                              width: '100%',
                              height: '48px',
                              padding: '0 16px',
                              borderRadius: '8px',
                              border: '1px solid #CBD5E1',
                              backgroundColor: '#FFFFFF',
                              fontSize: '14px',
                              color: '#1E293B',
                              outline: 'none',
                              boxSizing: 'border-box',
                            }}
                          />
                        </FloatingField>
                      </div>
                    </div>
                  </div>

                  {/* CARD 2: Integrantes do Time */}
                  <div
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '12px',
                      padding: '28px',
                      marginBottom: '28px',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                      border: '1px solid #E2E8F0',
                    }}
                  >
                    <h2
                      style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#0F172A',
                        marginTop: 0,
                        marginBottom: '20px',
                      }}
                    >
                      Outros Integrantes do Time
                    </h2>

                    {/* Member add form */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                      <input
                        type="text"
                        placeholder="Nome do integrante"
                        value={novoMembroNome}
                        onChange={e => setNovoMembroNome(e.target.value)}
                        style={{
                          height: '44px',
                          padding: '0 14px',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                      <input
                        type="text"
                        placeholder="Cargo / Função"
                        value={novoMembroCargo}
                        onChange={e => setNovoMembroCargo(e.target.value)}
                        style={{
                          height: '44px',
                          padding: '0 14px',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                      <input
                        type="text"
                        placeholder="LinkedIn do integrante"
                        value={novoMembroLinkedin}
                        onChange={e => setNovoMembroLinkedin(e.target.value)}
                        style={{
                          flex: 1,
                          height: '44px',
                          padding: '0 14px',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                      <button
                        type="button"
                        onClick={handleAddMembro}
                        style={{
                          padding: '0 20px',
                          borderRadius: '8px',
                          backgroundColor: '#00a8b5',
                          color: '#FFFFFF',
                          fontWeight: 600,
                          fontSize: '14px',
                          border: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        + Adicionar
                      </button>
                    </div>

                    {/* List of members */}
                    {membrosTime.length > 0 && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
                        {membrosTime.map((membro, index) => (
                          <div
                            key={index}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: '12px 16px',
                              backgroundColor: '#F8FAFC',
                              borderRadius: '8px',
                              border: '1px solid #E2E8F0',
                            }}
                          >
                            <div>
                              <div style={{ fontWeight: 700, fontSize: '14px', color: '#0F172A' }}>
                                {membro.nome}
                              </div>
                              <div style={{ fontSize: '12px', color: '#64748B' }}>
                                {membro.cargo} {membro.linkedin ? `• ${membro.linkedin}` : ''}
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleRemoveMembro(index)}
                              style={{
                                border: 'none',
                                background: 'transparent',
                                color: '#EF4444',
                                cursor: 'pointer',
                                fontSize: '16px',
                                fontWeight: 700,
                              }}
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <OutlineButton onClick={handleSubmit} disabled={isLoading}>
                      {isLoading ? 'Finalizando...' : 'Concluir Inscrição ✓'}
                    </OutlineButton>
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

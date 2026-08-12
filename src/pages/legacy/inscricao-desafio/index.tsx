import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'

export default function InscricaoDesafioPage() {
  const [formData, setFormData] = useState({
    nome: '',
    premioInvestimento: '',
    organizador: '',
    resumo: '',
    contexto: '',
    tags: '',
    validadeData: '2026-08-11',
    validadeHora: '12:00',
  })

  const [isAiLoadingResumo, setIsAiLoadingResumo] = useState(false)
  const [isAiLoadingContexto, setIsAiLoadingContexto] = useState(false)
  const [isGeneratingTags, setIsGeneratingTags] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage(null)
    }, 3500)
  }

  // Simulate AI Turbinar Campo for Resumo
  const handleTurbinarResumo = () => {
    setIsAiLoadingResumo(true)
    setTimeout(() => {
      const enhancedText = formData.resumo.trim()
        ? `[IA Otimizada] ${formData.resumo}\n\nObjetivo Estratégico: Impulsionar a inovação aberta no ecossistema local por meio de soluções tecnológicas de alto impacto social e econômico.`
        : 'Desenvolvimento de uma plataforma integrada de gestão e monitoramento em tempo real para otimização de processos públicos e engajamento cidadão no ecossistema de inovação.'
      
      setFormData(prev => ({ ...prev, resumo: enhancedText }))
      setIsAiLoadingResumo(false)
      showToast('Campo "Resumo" turbinado com Inteligência Artificial!')
    }, 1200)
  }

  // Simulate AI Turbinar Campo for Contexto
  const handleTurbinarContexto = () => {
    setIsAiLoadingContexto(true)
    setTimeout(() => {
      const enhancedText = formData.contexto.trim()
        ? `[IA Otimizada] ${formData.contexto}\n\nContexto Regulatório e Territorial: O desafio se insere nas diretrizes da estratégia municipal de transformação digital (E-Gov 2026), com integração direta ao ecossistema Porto Digital e parceiros estratégicos.`
        : 'O desafio surge no contexto da necessidade de modernização tecnológica das políticas públicas urbanas, buscando integrar dados abertos, infraestrutura inteligente e soluções de governança colaborativa.'
      
      setFormData(prev => ({ ...prev, contexto: enhancedText }))
      setIsAiLoadingContexto(false)
      showToast('Campo "Contexto" turbinado com Inteligência Artificial!')
    }, 1200)
  }

  // Simulate Tag Generation
  const handleGerarTags = () => {
    setIsGeneratingTags(true)
    setTimeout(() => {
      const defaultTags = ['Cidades Inteligentes', 'GovTech', 'Transformação Digital', 'Inovação Aberta', 'Recife']
      setFormData(prev => ({ ...prev, tags: defaultTags.join(', ') }))
      setIsGeneratingTags(false)
      showToast('Tags automáticas geradas com sucesso!')
    }, 900)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F3F4F6',
      fontFamily: "'DM Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      display: 'flex',
      flexDirection: 'column',
      color: '#1A202C'
    }}>
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: '#00a8b5',
          color: '#ffffff',
          padding: '12px 20px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 100,
          fontSize: '14px',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          animation: 'fadeIn 0.3s ease'
        }}>
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {toastMessage}
        </div>
      )}

      <Header />

      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />

        {/* ── Main Form Area ── */}
        <main style={{ flex: 1, padding: '36px 48px', overflowY: 'auto' }}>
          <div style={{ maxWidth: '940px' }}>
            
            {/* Header Title Section with Icon */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '24px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 168, 181, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '2px'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00a8b5" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>

              <div>
                <h1 style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#1E293B',
                  margin: '0 0 4px 0',
                  letterSpacing: '-0.3px'
                }}>
                  Crie seu desafio em coreto!
                </h1>
                <p style={{
                  fontSize: '13px',
                  color: '#64748B',
                  margin: 0,
                  lineHeight: '1.4'
                }}>
                  Siga o passo a passo abaixo para descrever os principais pontos de construção para uma boa oportunidade!
                </p>
              </div>
            </div>

            {/* Submission Success State */}
            {isSubmitted ? (
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                padding: '56px 40px',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#D1FAE5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <svg width="32" height="32" fill="none" stroke="#059669" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>
                  Desafio Criado com Sucesso!
                </h2>
                <p style={{ fontSize: '14px', color: '#64748B', maxWidth: '420px', margin: '0 auto 28px', lineHeight: 1.5 }}>
                  O desafio <strong style={{ color: '#0F172A' }}>{formData.nome || 'Sem título'}</strong> foi publicado e estará visível na vitrine de oportunidades do ecossistema.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '14px' }}>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        nome: '',
                        premioInvestimento: '',
                        organizador: '',
                        resumo: '',
                        contexto: '',
                        tags: '',
                        validadeData: '2026-08-11',
                        validadeHora: '12:00',
                      })
                    }}
                    style={{
                      padding: '10px 22px',
                      borderRadius: '6px',
                      border: '1px solid #00a8b5',
                      color: '#00a8b5',
                      fontWeight: 600,
                      backgroundColor: '#ffffff',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}
                  >
                    Criar outro desafio
                  </button>
                  <Link
                    to="/legacy"
                    style={{
                      padding: '10px 22px',
                      borderRadius: '6px',
                      backgroundColor: '#00a8b5',
                      color: '#ffffff',
                      fontWeight: 600,
                      textDecoration: 'none',
                      fontSize: '14px',
                      display: 'inline-flex',
                      alignItems: 'center'
                    }}
                  >
                    Voltar ao painel
                  </Link>
                </div>
              </div>
            ) : (
              /* Main Form Fields Card */
              <form onSubmit={handleSubmit} style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                padding: '32px 36px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}>

                {/* Field 1: Nome */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 700, color: '#1E293B' }}>
                    Nome
                  </label>
                  <input
                    type="text"
                    placeholder="Nome"
                    value={formData.nome}
                    onChange={e => handleInputChange('nome', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '6px',
                      border: '1px solid #CBD5E1',
                      fontSize: '13px',
                      color: '#1E293B',
                      outline: 'none',
                      boxSizing: 'border-box',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={e => e.target.style.borderColor = '#00a8b5'}
                    onBlur={e => e.target.style.borderColor = '#CBD5E1'}
                  />
                </div>

                {/* Field 2: Prêmio / Investimento */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 700, color: '#1E293B' }}>
                    Existe valor previsto de investimento ou apoio?
                  </label>
                  <input
                    type="text"
                    placeholder="Qual será o prêmio previsto?"
                    value={formData.premioInvestimento}
                    onChange={e => handleInputChange('premioInvestimento', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '6px',
                      border: '1px solid #CBD5E1',
                      fontSize: '13px',
                      color: '#1E293B',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                    onFocus={e => e.target.style.borderColor = '#00a8b5'}
                    onBlur={e => e.target.style.borderColor = '#CBD5E1'}
                  />
                </div>

                {/* Field 3: Organizador */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 700, color: '#1E293B' }}>
                    Qual organizador você estará lançando essa oportunidade
                  </label>
                  <div style={{ position: 'relative' }}>
                    <select
                      value={formData.organizador}
                      onChange={e => handleInputChange('organizador', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '6px',
                        border: '1px solid #CBD5E1',
                        fontSize: '13px',
                        color: formData.organizador ? '#1E293B' : '#94A3B8',
                        backgroundColor: '#ffffff',
                        appearance: 'none',
                        outline: 'none',
                        cursor: 'pointer',
                        boxSizing: 'border-box'
                      }}
                      onFocus={e => e.target.style.borderColor = '#00a8b5'}
                      onBlur={e => e.target.style.borderColor = '#CBD5E1'}
                    >
                      <option value="" disabled hidden>Escolha a empresa</option>
                      <option value="EMPREL">EMPREL — Empresa Municipal de Informática</option>
                      <option value="SECTI">SECTI — Secretaria de Ciência, Tecnologia e Inovação</option>
                      <option value="ABDI">ABDI — Agência Brasileira de Desenvolvimento Industrial</option>
                      <option value="Prefeitura do Recife">Prefeitura do Recife</option>
                      <option value="Porto Digital">Porto Digital</option>
                      <option value="ADEPE">ADEPE — Agência de Desenvolvimento Econômico</option>
                    </select>
                    <div style={{
                      position: 'absolute',
                      right: '14px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      pointerEvents: 'none',
                      color: '#64748B'
                    }}>
                      <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Field 4: Resumo da oportunidade + Turbinar Campo Button */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 700, color: '#1E293B' }}>
                    Primeiro nos dê um resumo da sua oportunidade
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Fale resumidamente sobre sua demanda/problema/oportunidade"
                    value={formData.resumo}
                    onChange={e => handleInputChange('resumo', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '6px',
                      border: '1px solid #CBD5E1',
                      fontSize: '13px',
                      color: '#1E293B',
                      outline: 'none',
                      resize: 'vertical',
                      boxSizing: 'border-box',
                      fontFamily: 'inherit'
                    }}
                    onFocus={e => e.target.style.borderColor = '#00a8b5'}
                    onBlur={e => e.target.style.borderColor = '#CBD5E1'}
                  />

                  {/* Turbinar campo Button (Center aligned under textarea) */}
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
                    <button
                      type="button"
                      onClick={handleTurbinarResumo}
                      disabled={isAiLoadingResumo}
                      style={{
                        padding: '10px 28px',
                        borderRadius: '8px',
                        background: 'linear-gradient(90deg, #00a8b5 0%, #0093a2 50%, #9333ea 100%)',
                        color: '#ffffff',
                        border: 'none',
                        fontWeight: 600,
                        fontSize: '13px',
                        cursor: isAiLoadingResumo ? 'wait' : 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 2px 6px rgba(0, 168, 181, 0.25)',
                        transition: 'opacity 0.2s, transform 0.1s',
                        opacity: isAiLoadingResumo ? 0.8 : 1
                      }}
                      onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.98)')}
                      onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      {isAiLoadingResumo ? 'Otimizando com IA...' : 'turbinar campo'}
                    </button>
                  </div>
                </div>

                {/* Field 5: Contexto + Turbinar Campo Button */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 700, color: '#1E293B' }}>
                    Defina o contexto que se encontra sua oportunidade
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Defina em qual contexto o desafio se encontra"
                    value={formData.contexto}
                    onChange={e => handleInputChange('contexto', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '6px',
                      border: '1px solid #CBD5E1',
                      fontSize: '13px',
                      color: '#1E293B',
                      outline: 'none',
                      resize: 'vertical',
                      boxSizing: 'border-box',
                      fontFamily: 'inherit'
                    }}
                    onFocus={e => e.target.style.borderColor = '#00a8b5'}
                    onBlur={e => e.target.style.borderColor = '#CBD5E1'}
                  />

                  {/* Turbinar campo Button */}
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
                    <button
                      type="button"
                      onClick={handleTurbinarContexto}
                      disabled={isAiLoadingContexto}
                      style={{
                        padding: '10px 28px',
                        borderRadius: '8px',
                        background: 'linear-gradient(90deg, #00a8b5 0%, #0093a2 50%, #9333ea 100%)',
                        color: '#ffffff',
                        border: 'none',
                        fontWeight: 600,
                        fontSize: '13px',
                        cursor: isAiLoadingContexto ? 'wait' : 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 2px 6px rgba(0, 168, 181, 0.25)',
                        transition: 'opacity 0.2s, transform 0.1s',
                        opacity: isAiLoadingContexto ? 0.8 : 1
                      }}
                      onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.98)')}
                      onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      {isAiLoadingContexto ? 'Otimizando com IA...' : 'turbinar campo'}
                    </button>
                  </div>
                </div>

                {/* Field 6: Tags (Assuntos) + Gerar Tags Button */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 700, color: '#1E293B' }}>
                    Clique no botão ao lado para gerar tags para o seu desafio:
                  </label>
                  
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <input
                      type="text"
                      placeholder="Assuntos"
                      value={formData.tags}
                      onChange={e => handleInputChange('tags', e.target.value)}
                      style={{
                        flex: 1,
                        padding: '10px 14px',
                        borderRadius: '6px',
                        border: '1px solid #CBD5E1',
                        fontSize: '13px',
                        color: '#1E293B',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                      onFocus={e => e.target.style.borderColor = '#00a8b5'}
                      onBlur={e => e.target.style.borderColor = '#CBD5E1'}
                    />

                    <button
                      type="button"
                      onClick={handleGerarTags}
                      disabled={isGeneratingTags}
                      style={{
                        padding: '10px 24px',
                        borderRadius: '6px',
                        backgroundColor: '#00a8b5',
                        color: '#ffffff',
                        border: 'none',
                        fontWeight: 600,
                        fontSize: '13px',
                        cursor: isGeneratingTags ? 'wait' : 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 2px 4px rgba(0, 168, 181, 0.2)'
                      }}
                    >
                      <span>Gerar tags</span>
                      <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Field 7: Validade (Data e Hora) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 700, color: '#1E293B' }}>
                    Defina a validade para que a oportunidade esteja visível
                  </label>
                  
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    {/* Date Input */}
                    <div style={{ flex: 1 }}>
                      <input
                        type="date"
                        value={formData.validadeData}
                        onChange={e => handleInputChange('validadeData', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '6px',
                          border: '1px solid #CBD5E1',
                          fontSize: '13px',
                          color: '#1E293B',
                          outline: 'none',
                          boxSizing: 'border-box',
                          backgroundColor: '#ffffff'
                        }}
                        onFocus={e => e.target.style.borderColor = '#00a8b5'}
                        onBlur={e => e.target.style.borderColor = '#CBD5E1'}
                      />
                    </div>

                    {/* Time Input */}
                    <div style={{ width: '120px' }}>
                      <input
                        type="time"
                        value={formData.validadeHora}
                        onChange={e => handleInputChange('validadeHora', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '6px',
                          border: '1px solid #CBD5E1',
                          fontSize: '13px',
                          color: '#1E293B',
                          outline: 'none',
                          textAlign: 'center',
                          boxSizing: 'border-box',
                          backgroundColor: '#ffffff'
                        }}
                        onFocus={e => e.target.style.borderColor = '#00a8b5'}
                        onBlur={e => e.target.style.borderColor = '#CBD5E1'}
                      />
                    </div>
                  </div>
                </div>

                {/* Form Footer Action Buttons */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '12px',
                  marginTop: '12px',
                  paddingTop: '20px',
                  borderTop: '1px solid #F1F5F9'
                }}>
                  <button
                    type="button"
                    onClick={() => showToast('Rascunho salvo com sucesso!')}
                    style={{
                      padding: '10px 20px',
                      borderRadius: '6px',
                      border: '1px solid #CBD5E1',
                      backgroundColor: '#ffffff',
                      color: '#475569',
                      fontWeight: 600,
                      fontSize: '13px',
                      cursor: 'pointer'
                    }}
                  >
                    Salvar rascunho
                  </button>

                  <button
                    type="submit"
                    style={{
                      padding: '10px 28px',
                      borderRadius: '6px',
                      backgroundColor: '#00a8b5',
                      color: '#ffffff',
                      border: 'none',
                      fontWeight: 600,
                      fontSize: '14px',
                      cursor: 'pointer',
                      boxShadow: '0 2px 6px rgba(0, 168, 181, 0.3)'
                    }}
                  >
                    Criar desafio
                  </button>
                </div>

              </form>
            )}

          </div>
        </main>
      </div>
    </div>
  )
}

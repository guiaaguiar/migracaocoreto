import React, { useState } from 'react'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'

interface ConnectionTopic {
  id: string
  label: string
}

const DEFAULT_TOPICS: ConnectionTopic[] = [
  { id: '1', label: 'GovTech & Inovação Aberta' },
  { id: '2', label: 'Cidades Inteligentes & Mobilidade' },
  { id: '3', label: 'Parcerias Estratégicas e B2B' },
  { id: '4', label: 'Captação de Recursos e Editais' },
  { id: '5', label: 'Inteligência Artificial Aplicada' },
]

export default function CompleteInscricaoPage() {
  // Form State
  const [papelStartup, setPapelStartup] = useState('CEO & Fundador')
  const [dedicacao, setDedicacao] = useState('Tempo integral (Full-time)')
  
  // Startup Descriptions
  const [resumoCurto, setResumoCurto] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie vehicula mi ut dignissim. Aenean viverra mi quis gravida finibus.'
  )
  const [detalhesPitch, setDetalhesPitch] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget lacinia elit. Proin venenatis tellus nec posuere cursus. Fusce maximus neque lectus, sed venenatis tortor dictum id.'
  )
  const [resumoExtra, setResumoExtra] = useState('Lorem ipsum...')
  const [descricaoExpandida, setDescricaoExpandida] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum lacus nec nunc facilisis, ut eleifend elit vulputate. Morbi in urna nec lorem tristique imperdiet.'
  )
  const [cnpj, setCnpj] = useState('')

  // Connection Topics State
  const [isGeneratingTopics, setIsGeneratingTopics] = useState(false)
  const [topicsGenerated, setTopicsGenerated] = useState<ConnectionTopic[]>([])
  const [hasGenerated, setHasGenerated] = useState(false)
  const [newTopicInput, setNewTopicInput] = useState('')

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [isSaved, setIsSaved] = useState(false)

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3500)
  }

  // Handle AI Connection Topics Generation
  const handleGerarAssuntos = () => {
    setIsGeneratingTopics(true)
    setTimeout(() => {
      setTopicsGenerated(DEFAULT_TOPICS)
      setHasGenerated(true)
      setIsGeneratingTopics(false)
      showToast('Assuntos de conexão gerados com sucesso!')
    }, 1200)
  }

  const handleAddTopic = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTopicInput.trim()) return
    const newTopic: ConnectionTopic = {
      id: Date.now().toString(),
      label: newTopicInput.trim(),
    }
    setTopicsGenerated(prev => [...prev, newTopic])
    setNewTopicInput('')
  }

  const handleRemoveTopic = (id: string) => {
    setTopicsGenerated(prev => prev.filter(t => t.id !== id))
  }

  // Handle Form Save
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaved(true)
    showToast('Inscrição e dados da startup salvos com sucesso!')
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
        <main style={{ flex: 1, padding: '32px 40px', maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
          {/* Banner Title Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
            <span style={{ fontSize: '24px' }}>🎯</span>
            <h1
              style={{
                fontSize: '22px',
                fontWeight: 800,
                color: '#0f172a',
                margin: 0,
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
              }}
            >
              Tá na reta final! Conclua seu cadastro e se jogue nas oportunidades!
            </h1>
          </div>

          {/* Main Card Container */}
          <form
            onSubmit={handleSave}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              border: '1px solid #E2E8F0',
              padding: '32px 36px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {/* User Name */}
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Pedro Dhalia
              </h2>
            </div>

            {/* Field: Seu papel na startup */}
            <div>
              <input
                type="text"
                value={papelStartup}
                onChange={e => setPapelStartup(e.target.value)}
                placeholder="Seu papel na startup"
                style={{
                  width: '100%',
                  height: '48px',
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

            {/* Field: Qual a sua dedicação à startup? */}
            <div>
              <select
                value={dedicacao}
                onChange={e => setDedicacao(e.target.value)}
                style={{
                  width: '100%',
                  height: '48px',
                  padding: '0 16px',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  fontSize: '14px',
                  color: dedicacao ? '#1E293B' : '#94A3B8',
                  outline: 'none',
                  backgroundColor: '#ffffff',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                }}
                onFocus={e => (e.target.style.borderColor = '#00a8b5')}
                onBlur={e => (e.target.style.borderColor = '#CBD5E1')}
              >
                <option value="" disabled>
                  Qual a sua dedicação à startup?
                </option>
                <option value="Tempo integral (Full-time)">Tempo integral (Full-time)</option>
                <option value="Tempo parcial (Part-time)">Tempo parcial (Part-time)</option>
                <option value="Advisory / Mentoria">Advisory / Mentoria</option>
                <option value="Investidor / Anjo">Investidor / Anjo</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            {/* Section Header: Descrição da Startup */}
            <div style={{ marginTop: '8px', borderTop: '1px solid #F1F5F9', paddingTop: '20px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#003B6D', margin: '0 0 16px 0' }}>
                Descrição da Startup
              </h3>
            </div>

            {/* Grid for Startup Descriptions (Two side-by-side or stacked fields) */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <textarea
                  rows={4}
                  value={resumoCurto}
                  onChange={e => setResumoCurto(e.target.value)}
                  placeholder="Resumo curto da solução..."
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '13px',
                    color: '#334155',
                    outline: 'none',
                    boxSizing: 'border-box',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#00a8b5')}
                  onBlur={e => (e.target.style.borderColor = '#CBD5E1')}
                />
              </div>

              <div>
                <textarea
                  rows={4}
                  value={detalhesPitch}
                  onChange={e => setDetalhesPitch(e.target.value)}
                  placeholder="Detalhes do Pitch / Proposta..."
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '13px',
                    color: '#334155',
                    outline: 'none',
                    boxSizing: 'border-box',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#00a8b5')}
                  onBlur={e => (e.target.style.borderColor = '#CBD5E1')}
                />
              </div>
            </div>

            {/* Additional Text Input & Expanded Textarea */}
            <div>
              <input
                type="text"
                value={resumoExtra}
                onChange={e => setResumoExtra(e.target.value)}
                placeholder="Lorem ipsum..."
                style={{
                  width: '100%',
                  height: '44px',
                  padding: '0 16px',
                  borderRadius: '8px',
                  border: '1px solid #00a8b5',
                  fontSize: '13px',
                  color: '#334155',
                  outline: 'none',
                  boxSizing: 'border-box',
                  backgroundColor: '#ffffff',
                }}
              />
            </div>

            <div>
              <textarea
                rows={5}
                value={descricaoExpandida}
                onChange={e => setDescricaoExpandida(e.target.value)}
                placeholder="Lorem ipsum..."
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: '8px',
                  border: '1px solid #1E293B',
                  fontSize: '13px',
                  color: '#334155',
                  outline: 'none',
                  boxSizing: 'border-box',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  backgroundColor: '#ffffff',
                }}
              />
            </div>

            {/* Field: CNPJ */}
            <div>
              <input
                type="text"
                value={cnpj}
                onChange={e => setCnpj(e.target.value)}
                placeholder="digite o CNPJ"
                style={{
                  width: '100%',
                  height: '44px',
                  padding: '0 16px',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  fontSize: '13px',
                  color: '#1E293B',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
                onFocus={e => (e.target.style.borderColor = '#00a8b5')}
                onBlur={e => (e.target.style.borderColor = '#CBD5E1')}
              />
            </div>

            {/* Assuntos de Conexão Button */}
            <div>
              <button
                type="button"
                onClick={handleGerarAssuntos}
                disabled={isGeneratingTopics}
                style={{
                  backgroundColor: '#00a8b5',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '12px 24px',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: isGeneratingTopics ? 'wait' : 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 2px 6px rgba(0, 168, 181, 0.25)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  if (!isGeneratingTopics) e.currentTarget.style.backgroundColor = '#008c97'
                }}
                onMouseLeave={e => {
                  if (!isGeneratingTopics) e.currentTarget.style.backgroundColor = '#00a8b5'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" y1="2" x2="12" y2="15" />
                </svg>
                {isGeneratingTopics ? 'gerando assuntos...' : 'gerar assuntos de conexão'}
              </button>
            </div>

            {/* Output Box: Assuntos sendo gerados! */}
            <div
              style={{
                borderRadius: '8px',
                border: '1px solid #f97316',
                padding: '18px 24px',
                backgroundColor: '#ffffff',
                minHeight: '60px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {!hasGenerated && !isGeneratingTopics ? (
                <span style={{ fontSize: '13px', color: '#f97316', fontWeight: 600 }}>
                  Assuntos sendo gerados!
                </span>
              ) : isGeneratingTopics ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '13px', color: '#f97316', fontWeight: 600 }}>
                    ⏳ Processando inteligência de conexões...
                  </span>
                </div>
              ) : (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '13px', color: '#f97316', fontWeight: 700 }}>
                      Assuntos gerados para seu perfil:
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                    {topicsGenerated.map(topic => (
                      <span
                        key={topic.id}
                        style={{
                          backgroundColor: '#FFF7ED',
                          color: '#C2410C',
                          border: '1px solid #FDBA74',
                          padding: '6px 12px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          fontWeight: 600,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        {topic.label}
                        <span
                          onClick={() => handleRemoveTopic(topic.id)}
                          style={{ cursor: 'pointer', fontSize: '14px', fontWeight: 700, color: '#EA580C' }}
                          title="Remover assunto"
                        >
                          ×
                        </span>
                      </span>
                    ))}
                  </div>

                  {/* Add Custom Topic Input */}
                  <form onSubmit={handleAddTopic} style={{ display: 'flex', gap: '8px', maxWidth: '400px' }}>
                    <input
                      type="text"
                      value={newTopicInput}
                      onChange={e => setNewTopicInput(e.target.value)}
                      placeholder="Adicionar novo assunto..."
                      style={{
                        flex: 1,
                        height: '34px',
                        padding: '0 12px',
                        borderRadius: '6px',
                        border: '1px solid #CBD5E1',
                        fontSize: '12px',
                        outline: 'none',
                      }}
                    />
                    <button
                      type="submit"
                      style={{
                        backgroundColor: '#f97316',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '0 14px',
                        fontSize: '12px',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      + Add
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Main Action: Salvar */}
            <div style={{ marginTop: '8px' }}>
              <button
                type="submit"
                style={{
                  backgroundColor: '#00a8b5',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '12px 32px',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 2px 6px rgba(0, 168, 181, 0.25)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#008c97')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#00a8b5')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                  <polyline points="17 21 17 13 7 13 7 21" />
                  <polyline points="7 3 7 8 15 8" />
                </svg>
                {isSaved ? 'Salvo!' : 'Salvar'}
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}

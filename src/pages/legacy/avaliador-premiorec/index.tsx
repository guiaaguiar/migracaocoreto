import { useState } from 'react'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import bannerPremio from '../../../assets/banner-premio.png'

interface CardItem {
  id: string
  title: string
  author?: string
  phase: 'submetidas' | 'primeira' | 'segunda'
  statusTag?: string
}

interface CategoryOption {
  title: string
  subtitle: string
  selected?: boolean
}

interface CardEvaluationState {
  ratings: { [key: number]: number }
  savedCriteria: { [key: number]: boolean }
  comments: { [key: number]: string }
  criterio3Option?: 'sim' | 'nao' | null
  criterio3Comment?: string
  criterio3Saved?: boolean
  criterio4Option?: 'sim' | 'nao' | null
  criterio4Comment?: string
  criterio4Saved?: boolean
  avaliacaoFinal?: string
}

function MockRichTextEditor({ value, onChange, label, description }: { value: string; onChange?: (val: string) => void; label?: string; description?: string }) {
  return (
    <div style={{ marginBottom: '24px' }}>
      {label && <div style={{ fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>{label}</div>}
      {description && <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px', lineHeight: 1.4 }}>{description}</div>}
      
      <div style={{ border: '1px solid #3b82f6', borderRadius: '6px', overflow: 'hidden', backgroundColor: '#ffffff' }}>
        {/* Editor Toolbar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 12px',
          borderBottom: '1px solid #cbd5e1', backgroundColor: '#ffffff', fontSize: '12px', color: '#334155',
          flexWrap: 'wrap', userSelect: 'none'
        }}>
          <span style={{ fontWeight: 600 }}>Sans Serif ▾</span>
          <span style={{ fontWeight: 600 }}>Normal ▾</span>
          <span style={{ borderLeft: '1px solid #e2e8f0', paddingLeft: '8px', fontWeight: 700 }}>B</span>
          <span style={{ fontStyle: 'italic', fontWeight: 700 }}>I</span>
          <span style={{ textDecoration: 'underline' }}>U</span>
          <span style={{ textDecoration: 'line-through' }}>S</span>
          <span style={{ borderLeft: '1px solid #e2e8f0', paddingLeft: '8px' }}>A ▾</span>
          <span>A ▾</span>
          <span>x²</span>
          <span>x₂</span>
          <span>H₁</span>
          <span>H₂</span>
          <span>H₃</span>
          <span>H₄</span>
          <span>”</span>
          <span>&lt;/&gt;</span>
          <span style={{ borderLeft: '1px solid #e2e8f0', paddingLeft: '8px' }}>≡</span>
          <span>≡</span>
          <span>≡</span>
          <span>≡</span>
          <span>≡</span>
          <span style={{ borderLeft: '1px solid #e2e8f0', paddingLeft: '8px' }}>🔗</span>
          <span>🖼</span>
          <span>📋</span>
          <span>Tx</span>
        </div>

        {/* Text Area Content */}
        <textarea
          rows={4}
          value={value}
          onChange={e => onChange && onChange(e.target.value)}
          style={{
            width: '100%', border: 'none', outline: 'none', padding: '12px 16px',
            fontSize: '13px', color: '#1A202C', fontFamily: 'inherit', resize: 'vertical',
            boxSizing: 'border-box', backgroundColor: '#ffffff'
          }}
        />
      </div>
    </div>
  )
}

const INITIAL_SUBMETIDAS: CardItem[] = [
  { id: 'sub-1', title: '1 - teste-assessment2-deep_tech', phase: 'submetidas' },
  { id: 'sub-2', title: '2 - teste-assessment2-ie', phase: 'submetidas' },
  { id: 'sub-3', title: '3 - teste-assessment2-pesquisa', phase: 'submetidas' },
]

const INITIAL_PRIMEIRA: CardItem[] = [
  { id: 'prim-1', title: '1 - teste-assessment2-deep_tech', author: 'Casé Pedro', phase: 'primeira' },
  { id: 'prim-2', title: '2 - teste-assessment2-pesquisa', author: 'Gabriel Chamie', phase: 'primeira' },
  { id: 'prim-3', title: '3 - testando rg', phase: 'primeira' },
]

export default function LegacyAreaAvaliadorPage() {
  const [selectedEvaluation, setSelectedEvaluation] = useState<CardItem | null>(null)
  
  // Accordions state
  const [isFichaOpen, setIsFichaOpen] = useState<boolean>(true)
  const [isResumoOpen, setIsResumoOpen] = useState<boolean>(false)

  // Kanban Columns
  const [submetidasCards, setSubmetidasCards] = useState<CardItem[]>(INITIAL_SUBMETIDAS)
  const [primeiraFaseCards, setPrimeiraFaseCards] = useState<CardItem[]>(INITIAL_PRIMEIRA)
  const [segundaFaseCards, setSegundaFaseCards] = useState<CardItem[]>([])

  // Isolated Evaluation Data per Card ID
  const [evaluationsByCard, setEvaluationsByCard] = useState<{ [cardId: string]: CardEvaluationState }>({})
  const [primeiraEvaluatingId, setPrimeiraEvaluatingId] = useState<number | null>(null)
  const [lastEvaluatedCriterionId, setLastEvaluatedCriterionId] = useState<number>(1)

  // Resumo Form Fields
  const [resumoDescricao, setResumoDescricao] = useState<string>(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie vehicula mi ut dignissim. Aenean viverra mi quis gravida finibus. Sed in consectetur purus. Aenean sed metus feugiat augue tincidunt pharetra eget sed neque. Vivamus non bibendum sem, at commodo massa. Ut pretium laoreet bibendum. Morbi varius sem in metus laoreet, ut consequat ante dapibus. Vivamus sed ante non neque interdum rutrum in id mauris. Aliquam pellentesque urna non sapien ultrices lacinia. Nam accumsan congue elit, eget molestie eros hendrerit vel. Praesent efficitur ligula eget vehicula malesuada. Cras interdum turpis ornare interdum pulvinar.\n\nProin eget lacinia elit. Proin venenatis tellus nec posuere cursus. Fusce maximus neque lectus, sed venenatis tortor dictum id. Curabitur at malesuada purus, in efficitur metus. Curabitur ullamcorper vel eros a placerat. Etiam volutpat placerat ligula, sit amet sollicitudin lacus congue in. Vivamus dictum vestibulum mi ac consectetur. Aliquam in lacus vel mauris iaculis scelerisque mattis nec orci. Nulla varius felis nec sapien malesuada commodo.'
  )
  const [resumoResultados, setResumoResultados] = useState<string>('teste')
  const [resumoReplicabilidade, setResumoReplicabilidade] = useState<string>('teste')
  const [resumoFocoPessoas, setResumoFocoPessoas] = useState<string>('teste')
  const [resumoDisrupcao, setResumoDisrupcao] = useState<string>('teste')

  const categoryOptions: CategoryOption[] = [
    { title: 'Case de Inovação Empresarial', subtitle: 'Inovação Empresarial' },
    { title: 'Case de Inovação em ESG', subtitle: 'Inovação Empresarial' },
    { title: 'Startup Ascensão', subtitle: 'Startups Inovadoras' },
    { title: 'Startup Tração', subtitle: 'Startups Inovadoras' },
    { title: 'Startup conectada com a Cidade', subtitle: 'Startups Inovadoras', selected: true },
    { title: 'Case de Empreendedorismo Social', subtitle: 'Inovação Social' },
    { title: 'Case de Letramento Digital', subtitle: 'Inovação Social' },
    { title: 'Pesquisa & Extensão Inovadora', subtitle: 'Inovação Científica' },
    { title: 'Instituição de Ensino e/ou Pesquisa Inovadora', subtitle: 'Inovação Científica' },
    { title: 'Deep Tech Destaque', subtitle: 'Inovação Científica' },
  ]

  const primeiraFaseCriterios = [
    {
      id: 1,
      title: 'Critério 1 – Grau de Disrupção.',
      instruction: 'Avalia a originalidade da iniciativa e sua capacidade de propor soluções inéditas ou melhorias significativas em relação ao que já existe. Considera o grau de ruptura ou diferenciação frente ao estado da arte em seu setor, bem como a relevância da proposta para introduzir novas formas de pensamento, ação e interação.'
    },
    {
      id: 2,
      title: 'Critério 2 – Resultados.',
      instruction: 'Avalia os resultados alcançados pela iniciativa, incluindo evidências qualitativas e quantitativas, indicadores de desempenho e ganhos concretos para o público-alvo ou setor de atuação.'
    },
    {
      id: 3,
      title: 'Critério 3 – Replicabilidade e Potencial de Escala.',
      instruction: 'Explique a capacidade da iniciativa de ser expandida, adaptada ou reproduzida em outros contextos, públicos ou territórios, destacando evidências de escalabilidade e impacto de médio e longo prazo.'
    },
    {
      id: 4,
      title: 'Critério 4 – Foco nas Pessoas, Território e Ecossistema.',
      instruction: 'Apresente como a iniciativa coloca as pessoas no centro, gera benefícios sociais mais amplos, fortalece o ecossistema de inovação e se conecta a desafios contemporâneos de relevância global.'
    },
  ]

  // Helper for current card evaluation state
  const currentCardEval: CardEvaluationState = (selectedEvaluation && evaluationsByCard[selectedEvaluation.id]) || {
    ratings: {},
    savedCriteria: {},
    comments: {}
  }

  const updateCurrentEval = (updater: (prev: CardEvaluationState) => CardEvaluationState) => {
    if (!selectedEvaluation) return
    const cardId = selectedEvaluation.id
    setEvaluationsByCard(prev => {
      const existing = prev[cardId] || { ratings: {}, savedCriteria: {}, comments: {} }
      return {
        ...prev,
        [cardId]: updater(existing)
      }
    })
  }

  const handleStarClick = (criterionId: number, rating: number) => {
    setLastEvaluatedCriterionId(criterionId)
    updateCurrentEval(prev => ({
      ...prev,
      ratings: { ...prev.ratings, [criterionId]: rating },
      savedCriteria: { ...prev.savedCriteria, [criterionId]: true }
    }))
  }

  const handleSaveCriterion = (criterionId: number) => {
    setLastEvaluatedCriterionId(criterionId)
    updateCurrentEval(prev => ({
      ...prev,
      savedCriteria: { ...prev.savedCriteria, [criterionId]: true }
    }))
    setPrimeiraEvaluatingId(null)
  }

  const handleFinalizeEvaluation = () => {
    if (!selectedEvaluation) return

    if (selectedEvaluation.phase === 'submetidas') {
      setSubmetidasCards(prev => prev.filter(c => c.id !== selectedEvaluation.id))
      setPrimeiraFaseCards(prev => [...prev, { ...selectedEvaluation, phase: 'primeira', author: selectedEvaluation.author || 'Casé Pedro' }])
      alert('Inscrição aprovada e promovida para a Primeira Fase!')
    } else if (selectedEvaluation.phase === 'primeira') {
      setPrimeiraFaseCards(prev => prev.filter(c => c.id !== selectedEvaluation.id))
      setSegundaFaseCards(prev => [...prev, { ...selectedEvaluation, phase: 'segunda', statusTag: 'Não finalizada' }])
      alert('Avaliação finalizada! Inscrição promovida para a Segunda Fase.')
    } else if (selectedEvaluation.phase === 'segunda') {
      alert('Reavaliação salva com sucesso!')
    }
    setSelectedEvaluation(null)
  }

  // Active criterion object for history panel (always shows the last evaluated criterion)
  const activeCriterionObj = primeiraFaseCriterios.find(c => c.id === lastEvaluatedCriterionId) || primeiraFaseCriterios[0]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#EEF2F5', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", display: 'flex', flexDirection: 'column', color: '#1A202C' }}>
      <Header />

      {/* ── Main Layout Body ── */}
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar activeItem="meus-programas" />

        {/* ── Main Content Area ── */}
        <main style={{ flex: 1, padding: '24px 32px', maxWidth: '1280px' }}>
          {/* Top Banner: Prêmio Recife de Inovação */}
          <div style={{ marginBottom: '24px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <img
              src={bannerPremio}
              alt="Prêmio Recife de Inovação"
              style={{ width: '100%', maxHeight: '220px', objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* Render Condition: Evaluation View OR Kanban View */}
          {selectedEvaluation ? (
            /* ── Evaluation Form View (When clicking Avaliar / Reavaliar) ── */
            <div>
              {/* Header Card of the Selected Inscription */}
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                padding: '24px 28px',
                marginBottom: '20px',
                position: 'relative',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
              }}>
                {/* Red X Close Button */}
                <button
                  onClick={() => setSelectedEvaluation(null)}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '24px',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    color: '#D9381E',
                    fontSize: '18px',
                    fontWeight: 700,
                    lineHeight: 1
                  }}
                  title="Fechar avaliação"
                >
                  ✕
                </button>

                {/* Title */}
                <h2 style={{
                  fontSize: '18px',
                  fontWeight: 800,
                  color: '#1A202C',
                  marginTop: 0,
                  marginBottom: '12px',
                  lineHeight: 1.3
                }}>
                  {selectedEvaluation.title.replace(/^[0-9]+\s*-\s*/, '')}
                </h2>

                {/* Participant */}
                <div style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#003B6D',
                  marginBottom: '4px'
                }}>
                  Participante: {selectedEvaluation.author || 'Casé Pedro'}
                </div>

                {/* Status */}
                <div style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#003B6D'
                }}>
                  Ainda não avaliado!
                </div>
              </div>

              {/* 2-Column Grid: FICHA AVALIAÇÃO & HISTÓRICO DE AVALIAÇÃO */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '20px', alignItems: 'start' }}>
                
                {/* Left Column: FICHA AVALIAÇÃO & RESUMO */}
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  overflow: 'hidden'
                }}>
                  {/* Accordion 1: FICHA AVALIAÇÃO */}
                  <div
                    onClick={() => {
                      setIsFichaOpen(!isFichaOpen)
                      if (!isFichaOpen) setIsResumoOpen(false)
                    }}
                    style={{
                      padding: '18px 24px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderBottom: '1px solid #e2e8f0',
                      cursor: 'pointer',
                      userSelect: 'none',
                      backgroundColor: isFichaOpen ? '#ffffff' : '#fafafa'
                    }}
                  >
                    <span style={{ fontSize: '14px', fontWeight: 800, color: '#003B6D', letterSpacing: '0.02em' }}>
                      FICHA AVALIAÇÃO
                    </span>
                    <svg
                      width="14" height="14" viewBox="0 0 20 20" fill="currentColor"
                      style={{ color: '#003B6D', transform: isFichaOpen ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s' }}
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>

                  {/* Accordion 2: RESUMO */}
                  <div
                    onClick={() => {
                      setIsResumoOpen(!isResumoOpen)
                      if (!isResumoOpen) setIsFichaOpen(false)
                    }}
                    style={{
                      padding: '16px 24px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderBottom: isFichaOpen || isResumoOpen ? '1px solid #e2e8f0' : 'none',
                      cursor: 'pointer',
                      userSelect: 'none',
                      backgroundColor: isResumoOpen ? '#ffffff' : '#fafafa'
                    }}
                  >
                    <span style={{ fontSize: '14px', fontWeight: 800, color: '#003B6D', letterSpacing: '0.02em' }}>
                      RESUMO
                    </span>
                    <svg
                      width="14" height="14" viewBox="0 0 20 20" fill="currentColor"
                      style={{ color: '#003B6D', transform: isResumoOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
                    >
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>

                  {/* ── Ficha Avaliação Body Content ── */}
                  {isFichaOpen && (
                    <div style={{ padding: '24px' }}>
                      {selectedEvaluation.phase === 'primeira' || selectedEvaluation.phase === 'segunda' ? (
                        /* ── FICHA AVALIAÇÃO: PRIMEIRA E SEGUNDA FASE (Com Estrelas 1-5) ── */
                        <div>
                          {primeiraFaseCriterios.map((crit, index) => {
                            const currentRating = currentCardEval.ratings[crit.id] || 0
                            const isSaved = Boolean(currentCardEval.savedCriteria[crit.id])
                            const isEvaluated = isSaved || currentRating > 0
                            const isEvaluating = primeiraEvaluatingId === crit.id

                            return (
                              <div key={crit.id} style={{ marginBottom: '24px' }}>
                                {/* Status Badge (Green when evaluated, Red when not evaluated) */}
                                <div style={{ marginBottom: '6px' }}>
                                  <span style={{
                                    backgroundColor: isEvaluated ? '#22c55e' : '#FF0000',
                                    color: '#ffffff',
                                    fontSize: '11px',
                                    fontWeight: 700,
                                    padding: '3px 8px',
                                    borderRadius: '4px',
                                    display: 'inline-block'
                                  }}>
                                    {isEvaluated ? 'Avaliado' : 'Não avaliado'}
                                  </span>
                                </div>

                                {/* Criterion Title */}
                                <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#003B6D', marginTop: 0, marginBottom: '12px' }}>
                                  {crit.title}
                                </h3>

                                {/* Expanded Evaluation Box when clicking Avaliar / Pencil */}
                                {isEvaluating ? (
                                  <div style={{
                                    backgroundColor: '#F1F5F9',
                                    borderRadius: '8px',
                                    padding: '24px',
                                    border: '1px solid #E2E8F0',
                                    position: 'relative'
                                  }}>
                                    {/* Red X Close button for criterion */}
                                    <button
                                      onClick={() => setPrimeiraEvaluatingId(null)}
                                      style={{
                                        position: 'absolute', top: '16px', right: '20px',
                                        border: 'none', background: 'none', cursor: 'pointer',
                                        color: '#FF0000', fontSize: '16px', fontWeight: 700
                                      }}
                                    >
                                      ✕
                                    </button>

                                    {/* Sub-header */}
                                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#00a8b5', marginBottom: '12px' }}>
                                      Avalie de acordo com a escala de 1 a 5
                                    </div>

                                    {/* Instruction Heading */}
                                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#1A202C', marginBottom: '8px' }}>
                                      Instruções de avaliação deste critério
                                    </div>

                                    <p style={{ fontSize: '12px', color: '#334155', lineHeight: 1.5, marginTop: 0, marginBottom: '20px' }}>
                                      {crit.instruction}
                                    </p>

                                    <div style={{ borderTop: '1px solid #cbd5e1', paddingTop: '20px', marginBottom: '20px' }}>
                                      {/* Avaliar: + Star Icons */}
                                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                        <span style={{ fontSize: '13px', fontWeight: 700, color: '#00a8b5' }}>Avaliar:</span>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                          {[1, 2, 3, 4, 5].map(starNum => (
                                            <span
                                              key={starNum}
                                              onClick={() => {
                                                handleStarClick(crit.id, starNum)
                                                setPrimeiraEvaluatingId(crit.id)
                                              }}
                                              style={{
                                                fontSize: '24px',
                                                cursor: 'pointer',
                                                color: starNum <= currentRating ? '#FF6B00' : '#334155',
                                                userSelect: 'none',
                                                transition: 'transform 0.1s'
                                              }}
                                              title={`Nota ${starNum}`}
                                            >
                                              ★
                                            </span>
                                          ))}
                                        </div>
                                      </div>

                                      {/* Comment Area */}
                                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#00a8b5', marginBottom: '8px' }}>
                                        Comentários do avaliador (Opcional)
                                      </div>

                                      <textarea
                                        rows={3}
                                        value={currentCardEval.comments[crit.id] || ''}
                                        onChange={e => {
                                          const val = e.target.value
                                          updateCurrentEval(prev => ({
                                            ...prev,
                                            comments: { ...prev.comments, [crit.id]: val }
                                          }))
                                        }}
                                        style={{
                                          width: '100%', borderRadius: '6px', border: '1px solid #CBD5E1',
                                          padding: '12px', fontSize: '13px', color: '#1A202C',
                                          outline: 'none', resize: 'vertical', boxSizing: 'border-box',
                                          backgroundColor: '#F8FAFC'
                                        }}
                                      />
                                    </div>

                                    {/* Save Evaluation Button */}
                                    <button
                                      type="button"
                                      onClick={() => handleSaveCriterion(crit.id)}
                                      style={{
                                        backgroundColor: '#FF0000', color: '#ffffff',
                                        border: 'none', borderRadius: '6px', padding: '10px 28px',
                                        fontWeight: 700, fontSize: '13px', cursor: 'pointer',
                                        boxShadow: '0 1px 3px rgba(255,0,0,0.3)'
                                      }}
                                    >
                                      Salvar avaliação
                                    </button>
                                  </div>
                                ) : (
                                  /* Collapsed Status Bar */
                                  <div>
                                    <div style={{
                                      backgroundColor: '#F1F5F9',
                                      borderRadius: '6px',
                                      padding: '14px 20px',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'space-between',
                                      marginBottom: '10px'
                                    }}>
                                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#003B6D' }}>
                                        Avaliação | {isEvaluated ? `Nota ${currentRating}` : 'Pendente'}
                                      </div>

                                      {/* Star Icons Display */}
                                      <div style={{ display: 'flex', gap: '6px' }}>
                                        {[1, 2, 3, 4, 5].map(starNum => (
                                          <span
                                            key={starNum}
                                            onClick={() => {
                                              handleStarClick(crit.id, starNum)
                                              setPrimeiraEvaluatingId(crit.id)
                                            }}
                                            style={{
                                              fontSize: '22px',
                                              cursor: 'pointer',
                                              color: starNum <= currentRating ? '#FF6B00' : '#334155',
                                              userSelect: 'none'
                                            }}
                                          >
                                            ★
                                          </span>
                                        ))}
                                      </div>

                                      {/* Pencil Icon */}
                                      <div
                                        onClick={() => {
                                          setLastEvaluatedCriterionId(crit.id)
                                          setPrimeiraEvaluatingId(crit.id)
                                        }}
                                        style={{ color: '#FF0000', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                                        title="Editar avaliação"
                                      >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                                        </svg>
                                      </div>
                                    </div>

                                    {/* Avaliar Button */}
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setLastEvaluatedCriterionId(crit.id)
                                        setPrimeiraEvaluatingId(crit.id)
                                      }}
                                      style={{
                                        padding: '6px 20px',
                                        borderRadius: '6px',
                                        border: '1px solid #FF0000',
                                        backgroundColor: '#ffffff',
                                        color: '#FF0000',
                                        fontWeight: 600,
                                        fontSize: '12px',
                                        cursor: 'pointer'
                                      }}
                                    >
                                      Avaliar
                                    </button>
                                  </div>
                                )}

                                {/* Separator Line */}
                                {index < primeiraFaseCriterios.length - 1 && (
                                  <div style={{ borderBottom: '1px solid #e2e8f0', marginTop: '20px' }} />
                                )}
                              </div>
                            )
                          })}

                          {/* ── AVALIAÇÃO FINAL DO PROJETO ── */}
                          <div style={{ marginTop: '32px' }}>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1A202C', marginBottom: '8px' }}>
                              Descreva sua avaliação final sobre o projeto *
                            </label>

                            <textarea
                              rows={4}
                              value={currentCardEval.avaliacaoFinal || ''}
                              onChange={e => {
                                const val = e.target.value
                                updateCurrentEval(prev => ({ ...prev, avaliacaoFinal: val }))
                              }}
                              style={{
                                width: '100%', borderRadius: '6px', border: '1px solid #003B6D',
                                padding: '14px', fontSize: '13px', color: '#1A202C',
                                outline: 'none', resize: 'vertical', boxSizing: 'border-box',
                                backgroundColor: '#ffffff'
                              }}
                            />

                            {/* Botão Finalizar Avaliação */}
                            <div style={{ marginTop: '16px' }}>
                              <button
                                type="button"
                                onClick={handleFinalizeEvaluation}
                                style={{
                                  backgroundColor: '#FF0000', color: '#ffffff',
                                  border: 'none', borderRadius: '6px', padding: '12px 28px',
                                  fontWeight: 700, fontSize: '14px', cursor: 'pointer',
                                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                                  boxShadow: '0 2px 4px rgba(255,0,0,0.3)'
                                }}
                              >
                                <span>&gt;</span> {selectedEvaluation.phase === 'segunda' ? 'Salvar reavaliação' : 'Finalizar avaliação'}
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* ── FICHA AVALIAÇÃO: INSCRIÇÕES SUBMETIDAS (Sim / Não) ── */
                        <div>
                          {/* ── CRITÉRIO 3 ── */}
                          <div style={{ marginBottom: '32px' }}>
                            {/* Red/Green Badge */}
                            {(() => {
                              const isCrit3Eval = Boolean(currentCardEval.criterio3Saved) || currentCardEval.criterio3Option != null
                              return (
                                <div style={{ marginBottom: '6px' }}>
                                  <span style={{
                                    backgroundColor: isCrit3Eval ? '#22c55e' : '#FF0000', color: '#ffffff',
                                    fontSize: '11px', fontWeight: 700, padding: '3px 8px',
                                    borderRadius: '4px', display: 'inline-block'
                                  }}>
                                    {isCrit3Eval ? 'Avaliado' : 'Não avaliado'}
                                  </span>
                                </div>
                              )
                            })()}

                            {/* Title */}
                            <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#003B6D', marginTop: 0, marginBottom: '12px' }}>
                              Critério 3 – Adequação à Categoria Inscrita.
                            </h3>

                            {/* Question */}
                            <p style={{ fontSize: '13px', color: '#1A202C', marginTop: 0, marginBottom: '16px', lineHeight: 1.5 }}>
                              A iniciativa foi submetida à categoria correta, conforme descrições das categorias e eixos apresentados no Item 7 do edital?
                            </p>

                            {/* Grey Instructions Container */}
                            <div style={{
                              backgroundColor: '#F1F5F9', borderRadius: '8px',
                              padding: '24px', border: '1px solid #E2E8F0'
                            }}>
                              <div style={{ fontSize: '13px', fontWeight: 700, color: '#1A202C', marginBottom: '10px' }}>
                                Instruções de avaliação deste critério
                              </div>
                              
                              <p style={{ fontSize: '12px', color: '#334155', lineHeight: 1.5, marginTop: 0, marginBottom: '20px' }}>
                                A iniciativa foi submetida à categoria correta conforme as descrições oficiais dos Eixos e Categorias do Item 7 do edital (Inovação Empresarial, Startups Inovadoras, Inovação Social, Inovação Científica e respectivas categorias)?
                                <br />
                                Caso considere que esteja em outra categoria, sinalize essa nova categoria no campo de Comentários do avaliador.
                              </p>

                              <div style={{ borderTop: '1px solid #cbd5e1', paddingTop: '20px', marginBottom: '20px' }}>
                                <div style={{ fontSize: '13px', fontWeight: 700, color: '#00a8b5', marginBottom: '4px' }}>
                                  Avaliar:
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#1A202C' }}>
                                    Marque apenas uma das opções:
                                  </span>

                                  <div style={{ display: 'flex', gap: '16px' }}>
                                    <button
                                      type="button"
                                      onClick={() => updateCurrentEval(prev => ({ ...prev, criterio3Option: 'sim', criterio3Saved: true }))}
                                      style={{
                                        width: '140px', padding: '10px 16px', borderRadius: '6px',
                                        border: '1px solid #FF0000',
                                        backgroundColor: currentCardEval.criterio3Option === 'sim' ? '#FF0000' : '#ffffff',
                                        color: currentCardEval.criterio3Option === 'sim' ? '#ffffff' : '#FF0000',
                                        fontWeight: 600, fontSize: '13px', cursor: 'pointer', textAlign: 'center'
                                      }}
                                    >
                                      Sim
                                    </button>

                                    <button
                                      type="button"
                                      onClick={() => updateCurrentEval(prev => ({ ...prev, criterio3Option: 'nao', criterio3Saved: true }))}
                                      style={{
                                        width: '140px', padding: '10px 16px', borderRadius: '6px',
                                        border: '1px solid #FF0000',
                                        backgroundColor: currentCardEval.criterio3Option === 'nao' ? '#FF0000' : '#ffffff',
                                        color: currentCardEval.criterio3Option === 'nao' ? '#ffffff' : '#FF0000',
                                        fontWeight: 600, fontSize: '13px', cursor: 'pointer', textAlign: 'center'
                                      }}
                                    >
                                      Não
                                    </button>
                                  </div>
                                </div>

                                {/* Comentários do Avaliador */}
                                <div style={{ fontSize: '13px', fontWeight: 700, color: '#00a8b5', marginBottom: '8px' }}>
                                  Comentários do avaliador
                                </div>

                                <textarea
                                  rows={3}
                                  value={currentCardEval.criterio3Comment || ''}
                                  onChange={e => {
                                    const val = e.target.value
                                    updateCurrentEval(prev => ({ ...prev, criterio3Comment: val }))
                                  }}
                                  style={{
                                    width: '100%', borderRadius: '6px', border: '1px solid #CBD5E1',
                                    padding: '12px', fontSize: '13px', color: '#1A202C',
                                    outline: 'none', resize: 'vertical', boxSizing: 'border-box',
                                    backgroundColor: '#F8FAFC'
                                  }}
                                />
                              </div>

                              {/* Botão Salvar Avaliação */}
                              <button
                                type="button"
                                onClick={() => updateCurrentEval(prev => ({ ...prev, criterio3Saved: true }))}
                                style={{
                                  backgroundColor: '#FF0000', color: '#ffffff',
                                  border: 'none', borderRadius: '6px', padding: '10px 24px',
                                  fontWeight: 700, fontSize: '13px', cursor: 'pointer',
                                  boxShadow: '0 1px 3px rgba(255,0,0,0.3)'
                                }}
                              >
                                Salvar avaliação
                              </button>
                            </div>
                          </div>

                          {/* ── CRITÉRIO 4 ── */}
                          <div style={{ marginBottom: '32px' }}>
                            {/* Red/Green Badge */}
                            {(() => {
                              const isCrit4Eval = Boolean(currentCardEval.criterio4Saved) || currentCardEval.criterio4Option != null
                              return (
                                <div style={{ marginBottom: '6px' }}>
                                  <span style={{
                                    backgroundColor: isCrit4Eval ? '#22c55e' : '#FF0000', color: '#ffffff',
                                    fontSize: '11px', fontWeight: 700, padding: '3px 8px',
                                    borderRadius: '4px', display: 'inline-block'
                                  }}>
                                    {isCrit4Eval ? 'Avaliado' : 'Não avaliado'}
                                  </span>
                                </div>
                              )
                            })()}

                            {/* Title */}
                            <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#003B6D', marginTop: 0, marginBottom: '16px' }}>
                              Critério 4 – Conclusão da Análise de Elegibilidade
                            </h3>

                            {/* Grey Instructions Container */}
                            <div style={{
                              backgroundColor: '#F1F5F9', borderRadius: '8px',
                              padding: '24px', border: '1px solid #E2E8F0'
                            }}>
                              <div style={{ fontSize: '13px', fontWeight: 700, color: '#1A202C', marginBottom: '10px' }}>
                                Instruções de avaliação deste critério
                              </div>
                              
                              <p style={{ fontSize: '12px', color: '#334155', lineHeight: 1.5, marginTop: 0, marginBottom: '20px' }}>
                                Esta é a decisão final desta etapa. Confirme se, com base nos critérios anteriores, a iniciativa deve ser aprovada ou não para seguir adiante.
                              </p>

                              <div style={{ borderTop: '1px solid #cbd5e1', paddingTop: '20px', marginBottom: '20px' }}>
                                <div style={{ fontSize: '13px', fontWeight: 700, color: '#00a8b5', marginBottom: '4px' }}>
                                  Avaliar:
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#1A202C' }}>
                                    Marque apenas uma das opções:
                                  </span>

                                  <div style={{ display: 'flex', gap: '16px' }}>
                                    <button
                                      type="button"
                                      onClick={() => updateCurrentEval(prev => ({ ...prev, criterio4Option: 'sim', criterio4Saved: true }))}
                                      style={{
                                        width: '140px', padding: '10px 16px', borderRadius: '6px',
                                        border: '1px solid #FF0000',
                                        backgroundColor: currentCardEval.criterio4Option === 'sim' ? '#FF0000' : '#ffffff',
                                        color: currentCardEval.criterio4Option === 'sim' ? '#ffffff' : '#FF0000',
                                        fontWeight: 600, fontSize: '13px', cursor: 'pointer', textAlign: 'center'
                                      }}
                                    >
                                      Sim
                                    </button>

                                    <button
                                      type="button"
                                      onClick={() => updateCurrentEval(prev => ({ ...prev, criterio4Option: 'nao', criterio4Saved: true }))}
                                      style={{
                                        width: '140px', padding: '10px 16px', borderRadius: '6px',
                                        border: '1px solid #FF0000',
                                        backgroundColor: currentCardEval.criterio4Option === 'nao' ? '#FF0000' : '#ffffff',
                                        color: currentCardEval.criterio4Option === 'nao' ? '#ffffff' : '#FF0000',
                                        fontWeight: 600, fontSize: '13px', cursor: 'pointer', textAlign: 'center'
                                      }}
                                    >
                                      Não
                                    </button>
                                  </div>
                                </div>

                                {/* Comentários do Avaliador */}
                                <div style={{ fontSize: '13px', fontWeight: 700, color: '#00a8b5', marginBottom: '8px' }}>
                                  Comentários do avaliador
                                </div>

                                <textarea
                                  rows={3}
                                  value={currentCardEval.criterio4Comment || ''}
                                  onChange={e => {
                                    const val = e.target.value
                                    updateCurrentEval(prev => ({ ...prev, criterio4Comment: val }))
                                  }}
                                  style={{
                                    width: '100%', borderRadius: '6px', border: '1px solid #CBD5E1',
                                    padding: '12px', fontSize: '13px', color: '#1A202C',
                                    outline: 'none', resize: 'vertical', boxSizing: 'border-box',
                                    backgroundColor: '#F8FAFC'
                                  }}
                                />
                              </div>

                              {/* Botão Salvar Avaliação */}
                              <button
                                type="button"
                                onClick={() => updateCurrentEval(prev => ({ ...prev, criterio4Saved: true }))}
                                style={{
                                  backgroundColor: '#FF0000', color: '#ffffff',
                                  border: 'none', borderRadius: '6px', padding: '10px 24px',
                                  fontWeight: 700, fontSize: '13px', cursor: 'pointer',
                                  boxShadow: '0 1px 3px rgba(255,0,0,0.3)'
                                }}
                              >
                                Salvar avaliação
                              </button>
                            </div>
                          </div>

                          {/* ── AVALIAÇÃO FINAL DO PROJETO ── */}
                          <div style={{ marginTop: '24px' }}>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1A202C', marginBottom: '8px' }}>
                              Descreva sua avaliação final sobre o projeto *
                            </label>

                            <textarea
                              rows={4}
                              value={currentCardEval.avaliacaoFinal || ''}
                              onChange={e => {
                                const val = e.target.value
                                updateCurrentEval(prev => ({ ...prev, avaliacaoFinal: val }))
                              }}
                              style={{
                                width: '100%', borderRadius: '6px', border: '1px solid #003B6D',
                                padding: '14px', fontSize: '13px', color: '#1A202C',
                                outline: 'none', resize: 'vertical', boxSizing: 'border-box',
                                backgroundColor: '#ffffff'
                              }}
                            />

                            {/* Botão Finalizar Avaliação */}
                            <div style={{ marginTop: '16px' }}>
                              <button
                                type="button"
                                onClick={handleFinalizeEvaluation}
                                style={{
                                  backgroundColor: '#FF0000', color: '#ffffff',
                                  border: 'none', borderRadius: '6px', padding: '12px 28px',
                                  fontWeight: 700, fontSize: '14px', cursor: 'pointer',
                                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                                  boxShadow: '0 2px 4px rgba(255,0,0,0.3)'
                                }}
                              >
                                <span>&gt;</span> Finalizar avaliação
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                    </div>
                  )}

                  {/* ── Resumo Body Content ── */}
                  {isResumoOpen && (
                    <div style={{ padding: '24px' }}>
                      {/* Red/Orange Inscrição Badge */}
                      <div style={{ marginBottom: '12px' }}>
                        <span style={{
                          backgroundColor: '#D9381E', color: '#ffffff',
                          fontSize: '12px', fontWeight: 700, padding: '4px 12px',
                          borderRadius: '4px', display: 'inline-block'
                        }}>
                          Inscrição
                        </span>
                      </div>

                      {/* Section 1 Header */}
                      <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#003B6D', marginTop: 0, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        1. IDENTIFICAÇÃO DA INICIATIVA &gt;
                      </h3>

                      {/* Readonly Form Fields */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                        <input
                          readOnly
                          value="teste-assessment2-deep_tech"
                          style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px', color: '#334155', boxSizing: 'border-box' }}
                        />
                        <input
                          readOnly
                          value="teste"
                          style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px', color: '#334155', boxSizing: 'border-box' }}
                        />
                        <div style={{ display: 'flex', gap: '16px' }}>
                          <input
                            readOnly
                            value="Recife"
                            style={{ flex: 2, padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px', color: '#334155', boxSizing: 'border-box' }}
                          />
                          <input
                            readOnly
                            value="PE"
                            style={{ flex: 1, padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px', color: '#334155', boxSizing: 'border-box' }}
                          />
                        </div>
                        <input
                          readOnly
                          value="pedrocasefilho2208@gmail.com"
                          style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px', color: '#334155', boxSizing: 'border-box' }}
                        />
                        <div style={{ display: 'flex', gap: '16px' }}>
                          <input
                            readOnly
                            value="teste"
                            style={{ flex: 1, padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px', color: '#334155', boxSizing: 'border-box' }}
                          />
                          <input
                            readOnly
                            value="81985282208"
                            style={{ flex: 1, padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px', color: '#334155', boxSizing: 'border-box' }}
                          />
                        </div>
                        <div style={{ display: 'flex', gap: '16px' }}>
                          <input
                            readOnly
                            value="teste"
                            style={{ flex: 1, padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px', color: '#334155', boxSizing: 'border-box' }}
                          />
                          <input
                            readOnly
                            value="2022"
                            style={{ flex: 1, padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px', color: '#334155', boxSizing: 'border-box' }}
                          />
                        </div>
                      </div>

                      {/* Category Selection Grid */}
                      <div style={{ marginBottom: '32px' }}>
                        <div style={{ fontSize: '14px', fontWeight: 700, color: '#003B6D', marginBottom: '16px' }}>
                          Selecione uma categoria de inscrição (conforme regulamento do prêmio)
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px' }}>
                          {categoryOptions.map((cat, idx) => (
                            <div
                              key={idx}
                              style={{
                                padding: '16px 12px',
                                borderRadius: '6px',
                                backgroundColor: cat.selected ? '#F8FAFC' : '#F3F4F6',
                                border: cat.selected ? '1px solid #FF6B00' : '1px solid transparent',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                minHeight: '90px'
                              }}
                            >
                              <div style={{ fontSize: '12px', fontWeight: 700, color: '#1A202C', marginBottom: '6px', lineHeight: 1.3 }}>
                                {cat.title}
                              </div>
                              <div style={{ fontSize: '11px', color: '#64748b' }}>
                                {cat.subtitle}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Section 2 Header */}
                      <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#003B6D', marginTop: 0, marginBottom: '16px' }}>
                        2. DESCRIÇÃO DA INICIATIVA &gt;
                      </h3>

                      <MockRichTextEditor
                        label="Resumo descritivo da iniciativa (até 2.000 caracteres)"
                        description="Explique de forma clara como sua solução endereça diretamente o desafio público selecionado. Aponte a dor central, os objetivos da proposta e o impacto esperado. Use dados e evidências do problema identificado."
                        value={resumoDescricao}
                        onChange={setResumoDescricao}
                      />

                      {/* Section 3 Header */}
                      <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#003B6D', marginTop: '32px', marginBottom: '16px' }}>
                        3. CRITÉRIOS DE AVALIAÇÃO (até 2.000 caracteres cada) &gt;
                      </h3>

                      <MockRichTextEditor
                        label="Resultados"
                        description="Descreva os principais resultados da iniciativa, incluindo evidências qualitativas e quantitativas, indicadores de desempenho e ganhos concretos para o público-alvo ou setor de atuação."
                        value={resumoResultados}
                        onChange={setResumoResultados}
                      />

                      <MockRichTextEditor
                        label="Replicabilidade e Potencial de Escala"
                        description="Explique a capacidade da iniciativa de ser expandida, adaptada ou reproduzida em outros contextos, públicos ou territórios, destacando evidências de escalabilidade e impacto de médio e longo prazo."
                        value={resumoReplicabilidade}
                        onChange={setResumoReplicabilidade}
                      />

                      <MockRichTextEditor
                        label="Foco nas Pessoas, Território e Ecossistema"
                        description="Apresente como a iniciativa coloca as pessoas no centro, gera benefícios sociais mais amplos, fortalece o ecossistema de inovação e se conecta a desafios contemporâneos de relevância global."
                        value={resumoFocoPessoas}
                        onChange={setResumoFocoPessoas}
                      />

                      <MockRichTextEditor
                        label="Grau de Disrupção"
                        description="Explique em que medida a iniciativa é original, quais soluções inéditas ou melhorias significativas ela propõe em relação ao que já existe, e como contribui para introduzir novas formas de pensamento, ação e interação."
                        value={resumoDisrupcao}
                        onChange={setResumoDisrupcao}
                      />

                      <div style={{ fontSize: '12px', fontWeight: 600, color: '#64748b', marginTop: '16px', marginBottom: '32px' }}>
                        Links relevantes (sites, redes sociais, reportagens, vídeos, dashboards)
                      </div>

                      {/* Section 4 Header */}
                      <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#003B6D', marginTop: '32px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        4. MATERIAIS COMPLEMENTARES &gt;
                      </h3>

                      {/* Upload Box Container */}
                      <div style={{
                        border: '1px dashed #93c5fd',
                        backgroundColor: '#F8FAFC',
                        borderRadius: '6px',
                        padding: '40px 24px',
                        textAlign: 'center',
                        color: '#475569',
                        fontSize: '13px'
                      }}>
                        Upload de anexos opcionais (imagens, documentos, apresentações)
                      </div>

                    </div>
                  )}
                </div>

                {/* Right Column: HISTÓRICO DE AVALIAÇÃO */}
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  padding: '24px 20px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  minHeight: '380px'
                }}>
                  <h3 style={{
                    fontSize: '14px',
                    fontWeight: 800,
                    color: '#003B6D',
                    marginTop: 0,
                    marginBottom: '6px',
                    letterSpacing: '0.02em'
                  }}>
                    HISTÓRICO DE AVALIAÇÃO
                  </h3>

                  <p style={{
                    fontSize: '12px',
                    color: '#64748b',
                    marginTop: 0,
                    marginBottom: '20px',
                    lineHeight: 1.4
                  }}>
                    Histórico referente ao critério ao qual você está atualmente avaliando
                  </p>

                  <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '16px', marginBottom: '16px' }}>
                    {/* Dynamic Criterion Header Pill */}
                    <div style={{
                      backgroundColor: '#F1F5F9',
                      borderRadius: '6px',
                      padding: '10px 16px',
                      textAlign: 'center',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#D9381E',
                      marginBottom: '16px'
                    }}>
                      CRITÉRIO &nbsp;– &nbsp;{activeCriterionObj.title.replace(/^Critério\s*[0-9]+\s*–\s*/i, '').toUpperCase()}
                    </div>

                    {/* History Evaluation Card */}
                    <div style={{
                      border: '1px solid #e2e8f0',
                      borderRadius: '6px',
                      padding: '16px',
                      backgroundColor: '#F8FAFC'
                    }}>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#1A202C', marginBottom: '8px' }}>
                        {selectedEvaluation.title.replace(/^[0-9]+\s*-\s*/, '')}
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#1A202C' }}>
                        <span>Avaliação :</span>
                        <div style={{ display: 'flex', gap: '2px' }}>
                          {[1, 2, 3, 4, 5].map(starNum => {
                            const r = currentCardEval.ratings[activeCriterionObj.id] || 0
                            return (
                              <span key={starNum} style={{ color: starNum <= r ? '#FF6B00' : '#334155', fontSize: '16px' }}>
                                ★
                              </span>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ) : (
            /* ── Default Kanban Board View ── */
            <div>
              {/* Red/Orange Tag Badge */}
              <div style={{ marginBottom: '20px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#D9381E',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '13px',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                  }}
                >
                  Área do Avaliador
                </span>
              </div>

              {/* Kanban Columns Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', alignItems: 'start' }}>
                
                {/* Column 1: Inscrições Submetidas */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{
                    backgroundColor: '#68B93D', color: '#ffffff',
                    padding: '12px 16px', borderRadius: '6px',
                    fontWeight: 700, fontSize: '14px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
                  }}>
                    Inscrições Submetidas ({submetidasCards.length})
                  </div>

                  {submetidasCards.map(card => (
                    <div key={card.id} style={{
                      backgroundColor: '#F8FAFC',
                      borderRadius: '8px',
                      border: '1px solid #E2E8F0',
                      padding: '18px 16px',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
                    }}>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#1A202C', marginBottom: '16px', lineHeight: '1.4' }}>
                        {card.title}
                      </div>

                      <button
                        onClick={() => setSelectedEvaluation(card)}
                        style={{
                          width: '100%',
                          padding: '8px 16px',
                          borderRadius: '6px',
                          border: '1px solid #D9381E',
                          backgroundColor: '#ffffff',
                          color: '#D9381E',
                          fontWeight: 600,
                          fontSize: '13px',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.backgroundColor = '#FFF5F5'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.backgroundColor = '#ffffff'
                        }}
                      >
                        Avaliar
                      </button>
                    </div>
                  ))}
                </div>

                {/* Column 2: Primeira Fase */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{
                    backgroundColor: '#31A7D8', color: '#ffffff',
                    padding: '12px 16px', borderRadius: '6px',
                    fontWeight: 700, fontSize: '14px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
                  }}>
                    Primeira Fase ({primeiraFaseCards.length})
                  </div>

                  {primeiraFaseCards.map(card => (
                    <div key={card.id} style={{
                      backgroundColor: '#F8FAFC',
                      borderRadius: '8px',
                      border: '1px solid #E2E8F0',
                      padding: '18px 16px',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
                    }}>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#1A202C', marginBottom: card.author ? '8px' : '16px', lineHeight: '1.4' }}>
                        {card.title}
                      </div>

                      {card.author && (
                        <div style={{ fontSize: '12px', fontWeight: 700, color: '#1A202C', marginBottom: '16px' }}>
                          {card.author}
                        </div>
                      )}

                      <button
                        onClick={() => setSelectedEvaluation(card)}
                        style={{
                          width: '100%',
                          padding: '8px 16px',
                          borderRadius: '6px',
                          border: '1px solid #D9381E',
                          backgroundColor: '#ffffff',
                          color: '#D9381E',
                          fontWeight: 600,
                          fontSize: '13px',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.backgroundColor = '#FFF5F5'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.backgroundColor = '#ffffff'
                        }}
                      >
                        Avaliar
                      </button>
                    </div>
                  ))}
                </div>

                {/* Column 3: Segunda Fase */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{
                    backgroundColor: '#15539B', color: '#ffffff',
                    padding: '12px 16px', borderRadius: '6px',
                    fontWeight: 700, fontSize: '14px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
                  }}>
                    Segunda Fase ({segundaFaseCards.length})
                  </div>

                  {segundaFaseCards.length === 0 ? (
                    <div style={{
                      padding: '32px 16px', textAlign: 'center', color: '#94a3b8',
                      fontSize: '13px', border: '1px dashed #cbd5e1', borderRadius: '8px',
                      backgroundColor: 'rgba(255,255,255,0.4)'
                    }}>
                      Nenhuma inscrição nesta fase
                    </div>
                  ) : (
                    segundaFaseCards.map(card => (
                      <div key={card.id} style={{
                        backgroundColor: '#F8FAFC', borderRadius: '8px',
                        border: '1px solid #E2E8F0', padding: '18px 16px',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
                      }}>
                        {/* Orange Tag: Não finalizada */}
                        <div style={{ marginBottom: '10px' }}>
                          <span style={{
                            backgroundColor: '#D9381E', color: '#ffffff',
                            fontSize: '11px', fontWeight: 700, padding: '3px 8px',
                            borderRadius: '4px', display: 'inline-block'
                          }}>
                            {card.statusTag || 'Não finalizada'}
                          </span>
                        </div>

                        <div style={{ fontSize: '13px', fontWeight: 600, color: '#1A202C', marginBottom: '8px', lineHeight: '1.4' }}>
                          {card.title}
                        </div>

                        {card.author && (
                          <div style={{ fontSize: '12px', fontWeight: 700, color: '#1A202C', marginBottom: '16px' }}>
                            {card.author}
                          </div>
                        )}

                        {/* Action Buttons Row: Reavaliar + Mail/Inbox icon button */}
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                          <button
                            onClick={() => setSelectedEvaluation(card)}
                            style={{
                              flex: 1,
                              padding: '8px 16px',
                              borderRadius: '6px',
                              border: '1px solid #D9381E',
                              backgroundColor: '#ffffff',
                              color: '#D9381E',
                              fontWeight: 600,
                              fontSize: '13px',
                              cursor: 'pointer'
                            }}
                          >
                            Reavaliar
                          </button>

                          <button
                            onClick={() => alert('Abrir caixa de mensagens do projeto')}
                            style={{
                              width: '36px',
                              height: '36px',
                              borderRadius: '6px',
                              border: '1px solid #D9381E',
                              backgroundColor: '#ffffff',
                              color: '#D9381E',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              padding: 0
                            }}
                            title="Caixa de entrada"
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D9381E" strokeWidth="2">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                              <polyline points="22,6 12,13 2,6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

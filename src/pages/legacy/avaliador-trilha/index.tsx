import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import bannerTrilha from '../../../assets/banner_trilha.png'

interface CardItem {
  id: string
  title: string
  author?: string
  organization?: string
  phase: 'submetidas' | 'avaliado'
  statusTag?: string
  score?: number
  submittedDate?: string
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
  { id: 'sub-1', title: '1 - Solução Inteligente de Gestão Urbana para Recife', author: 'Casé Pedro', organization: 'TechRecife Solutions', phase: 'submetidas', submittedDate: '10/08/2026' },
  { id: 'sub-2', title: '2 - Plataforma de Iluminação Pública Eficiente', author: 'Gabriel Chamie', organization: 'Lumina Inovação', phase: 'submetidas', submittedDate: '11/08/2026' },
  { id: 'sub-3', title: '3 - Sistema de Monitoramento Ambiental E.I.T.A!', author: 'Mariana Silva', organization: 'EcoData PE', phase: 'submetidas', submittedDate: '12/08/2026' },
]

const INITIAL_AVALIADOS: CardItem[] = [
  { id: 'aval-1', title: '1 - Reciclagem Inteligente em Parques Urbanos', author: 'Lucas Andrade', organization: 'ReciclaMais Tech', phase: 'avaliado', statusTag: 'Avaliado', score: 4.8, submittedDate: '05/08/2026' },
  { id: 'aval-2', title: '2 - App de Mobilidade Inclusiva e Acessível', author: 'Beatriz Costa', organization: 'Mobilidade Recife', phase: 'avaliado', statusTag: 'Avaliado', score: 4.5, submittedDate: '06/08/2026' },
]

export default function LegacyAvaliadorTrilhaPage() {
  const [selectedEvaluation, setSelectedEvaluation] = useState<CardItem | null>(null)
  
  // Accordions state
  const [isFichaOpen, setIsFichaOpen] = useState<boolean>(true)
  const [isResumoOpen, setIsResumoOpen] = useState<boolean>(false)

  // Submissions Lists
  const [submetidasCards, setSubmetidasCards] = useState<CardItem[]>(INITIAL_SUBMETIDAS)
  const [avaliadoCards, setAvaliadoCards] = useState<CardItem[]>(INITIAL_AVALIADOS)

  // Search filters
  const [searchSubmetidas, setSearchSubmetidas] = useState<string>('')
  const [searchAvaliado, setSearchAvaliado] = useState<string>('')

  // Isolated Evaluation Data per Card ID
  const [evaluationsByCard, setEvaluationsByCard] = useState<{ [cardId: string]: CardEvaluationState }>({})

  // Resumo Form Fields
  const [resumoDescricao, setResumoDescricao] = useState<string>(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie vehicula mi ut dignissim. Aenean viverra mi quis gravida finibus. Sed in consectetur purus. Aenean sed metus feugiat augue tincidunt pharetra eget sed neque. Vivamus non bibendum sem, at commodo massa. Ut pretium laoreet bibendum. Morbi varius sem in metus laoreet, ut consequat ante dapibus.'
  )
  const [resumoResultados, setResumoResultados] = useState<string>('Solução testada em campo com redução de 30% em gargalos urbanos.')
  const [resumoReplicabilidade, setResumoReplicabilidade] = useState<string>('Potencial de replicação em todos os bairros da Região Metropolitana do Recife.')
  const [resumoFocoPessoas, setResumoFocoPessoas] = useState<string>('Impacto direto em mais de 50.000 moradores e agentes públicos locais.')
  const [resumoDisrupcao, setResumoDisrupcao] = useState<string>('Uso pioneiro de tecnologia aberta integrada à infraestrutura da cidade.')

  const categoryOptions: CategoryOption[] = [
    { title: 'Solução Urbana Inteligente', subtitle: 'Tecnologia & Cidade' },
    { title: 'Inovação Aberta e.i.t.a! Recife', subtitle: 'Gestão Pública', selected: true },
    { title: 'Sustentabilidade & ESG', subtitle: 'Meio Ambiente' },
    { title: 'Mobilidade Urbana Acessível', subtitle: 'Inclusão & Cidadania' },
  ]

  const trilhaCriterios = [
    {
      id: 1,
      title: 'Critério 1 – Grau de Disrupção e Inovação.',
      instruction: 'Avalia a originalidade da iniciativa e sua capacidade de propor soluções inéditas no contexto do 3º Ciclo de Inovação Aberta e.i.t.a! Recife, considerando a ruptura frente ao estado da arte em soluções de cidades inteligentes.'
    },
    {
      id: 2,
      title: 'Critério 2 – Viabilidade Técnica e Resultados Esperados.',
      instruction: 'Avalia a viabilidade de execução da proposta, clareza metodológica, robustez dos indicadores propostos e probabilidade de alcance dos resultados dentro do cronograma da trilha.'
    },
    {
      id: 3,
      title: 'Critério 3 – Replicabilidade e Potencial de Escala.',
      instruction: 'Avalia a capacidade da solução de ser expandida para outros territórios da cidade ou adaptada para novos desafios de inovação pública.'
    },
    {
      id: 4,
      title: 'Critério 4 – Impacto no Ecossistema e Foco nos Cidadãos.',
      instruction: 'Apresente como a iniciativa gera benefícios sociais concretos para os cidadãos do Recife, alinhando-se aos princípios da gestão pública transparente e aberta.'
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
    updateCurrentEval(prev => ({
      ...prev,
      ratings: { ...prev.ratings, [criterionId]: rating },
      savedCriteria: { ...prev.savedCriteria, [criterionId]: true }
    }))
  }

  const handleSaveCriterion = (criterionId: number) => {
    updateCurrentEval(prev => ({
      ...prev,
      savedCriteria: { ...prev.savedCriteria, [criterionId]: true }
    }))
  }

  const handleFinalizeEvaluation = () => {
    if (!selectedEvaluation) return

    if (selectedEvaluation.phase === 'submetidas') {
      const ratingVals = Object.values(currentCardEval.ratings)
      const avgScore = ratingVals.length > 0 ? Number((ratingVals.reduce((a, b) => a + b, 0) / ratingVals.length).toFixed(1)) : 4.5

      setSubmetidasCards(prev => prev.filter(c => c.id !== selectedEvaluation.id))
      setAvaliadoCards(prev => [...prev, {
        ...selectedEvaluation,
        phase: 'avaliado',
        statusTag: 'Avaliado',
        score: avgScore,
        author: selectedEvaluation.author || 'Casé Pedro'
      }])
      alert('Avaliação concluída! Proposta promovida para a lista de Avaliado.')
    } else {
      alert('Reavaliação salva com sucesso!')
    }
    setSelectedEvaluation(null)
  }

  // Filtered lists
  const filteredSubmetidas = submetidasCards.filter(c =>
    c.title.toLowerCase().includes(searchSubmetidas.toLowerCase()) ||
    (c.author && c.author.toLowerCase().includes(searchSubmetidas.toLowerCase())) ||
    (c.organization && c.organization.toLowerCase().includes(searchSubmetidas.toLowerCase()))
  )

  const filteredAvaliado = avaliadoCards.filter(c =>
    c.title.toLowerCase().includes(searchAvaliado.toLowerCase()) ||
    (c.author && c.author.toLowerCase().includes(searchAvaliado.toLowerCase())) ||
    (c.organization && c.organization.toLowerCase().includes(searchAvaliado.toLowerCase()))
  )

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#EEF2F5', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", display: 'flex', flexDirection: 'column', color: '#1A202C' }}>
      <Header />

      {/* ── Main Layout Body ── */}
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar activeItem="meus-programas" />

        {/* ── Main Content Area ── */}
        <main style={{ flex: 1, padding: '24px 32px', maxWidth: '1280px' }}>
          {/* Top Banner: 3º Ciclo de Inovação Aberta e.i.t.a! Recife */}
          <div style={{ marginBottom: '20px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <img
              src={bannerTrilha}
              alt="3º Ciclo de Inovação Aberta e.i.t.a! Recife"
              style={{ width: '100%', maxHeight: '240px', objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* Section Title */}
          <div style={{ marginBottom: '24px', backgroundColor: '#ffffff', padding: '16px 20px', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <h1 style={{ fontSize: '18px', fontWeight: 700, color: '#1A202C', margin: 0 }}>
              Lorem ipsum...
            </h1>
          </div>

          {/* Render Condition: Evaluation View OR Submissions List Grid */}
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
                    position: 'absolute', top: '16px', right: '16px',
                    width: '32px', height: '32px', borderRadius: '50%',
                    backgroundColor: '#fee2e2', border: '1px solid #fca5a5',
                    color: '#ef4444', fontWeight: 700, fontSize: '16px',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                  title="Fechar avaliação"
                >
                  ✕
                </button>

                <div style={{ fontSize: '12px', fontWeight: 700, color: '#00a8b5', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                  Avaliação da Trilha — {selectedEvaluation.phase === 'submetidas' ? 'Proposta Submetida' : 'Reavaliação'}
                </div>

                <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1A202C', marginBottom: '8px' }}>
                  {selectedEvaluation.title}
                </h2>

                <div style={{ display: 'flex', gap: '24px', color: '#64748b', fontSize: '13px', flexWrap: 'wrap' }}>
                  <div><strong>Autor:</strong> {selectedEvaluation.author || 'Casé Pedro'}</div>
                  <div><strong>Organização:</strong> {selectedEvaluation.organization || 'TechRecife Solutions'}</div>
                  <div><strong>Data de Submissão:</strong> {selectedEvaluation.submittedDate || '10/08/2026'}</div>
                </div>
              </div>

              {/* Accordion 1: FICHA DA PROPOSTA */}
              <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '16px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                <div
                  onClick={() => setIsFichaOpen(!isFichaOpen)}
                  style={{
                    padding: '16px 24px', backgroundColor: '#f8fafc', borderBottom: isFichaOpen ? '1px solid #e2e8f0' : 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer'
                  }}
                >
                  <span style={{ fontSize: '15px', fontWeight: 700, color: '#003B6D' }}>📋 Ficha da Proposta / Inscrição</span>
                  <span style={{ fontSize: '16px', color: '#64748b' }}>{isFichaOpen ? '▲' : '▼'}</span>
                </div>

                {isFichaOpen && (
                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                      <div>
                        <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Vídeo Pitch / Apresentação</div>
                        <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{ color: '#00a8b5', fontWeight: 600, fontSize: '13px', textDecoration: 'underline' }}>
                          🔗 Assistir Vídeo Pitch no YouTube
                        </a>
                      </div>

                      <div>
                        <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Pitch Deck (PDF)</div>
                        <a href="#" onClick={e => e.preventDefault()} style={{ color: '#00a8b5', fontWeight: 600, fontSize: '13px', textDecoration: 'underline' }}>
                          📄 Baixar Apresentação da Proposta (.pdf)
                        </a>
                      </div>

                      <div>
                        <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Categoria Selecionada</div>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: '#1A202C' }}>
                          3º Ciclo de Inovação Aberta e.i.t.a! Recife
                        </div>
                      </div>
                    </div>

                    {/* Categorias Grid */}
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '10px' }}>
                        Categorias de Atuação:
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '10px' }}>
                        {categoryOptions.map((cat, idx) => (
                          <div
                            key={idx}
                            style={{
                              padding: '10px 14px', borderRadius: '6px',
                              border: cat.selected ? '2px solid #00a8b5' : '1px solid #cbd5e1',
                              backgroundColor: cat.selected ? 'rgba(0, 168, 181, 0.05)' : '#ffffff',
                              fontSize: '12px'
                            }}
                          >
                            <div style={{ fontWeight: 700, color: cat.selected ? '#00a8b5' : '#334155' }}>{cat.title}</div>
                            <div style={{ color: '#64748b', fontSize: '11px', marginTop: '2px' }}>{cat.subtitle}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 2: RESUMO COM EDITOR RICH TEXT */}
              <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '24px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                <div
                  onClick={() => setIsResumoOpen(!isResumoOpen)}
                  style={{
                    padding: '16px 24px', backgroundColor: '#f8fafc', borderBottom: isResumoOpen ? '1px solid #e2e8f0' : 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer'
                  }}
                >
                  <span style={{ fontSize: '15px', fontWeight: 700, color: '#003B6D' }}>📝 Resumo Detalhado & Justificativas da Solução</span>
                  <span style={{ fontSize: '16px', color: '#64748b' }}>{isResumoOpen ? '▲' : '▼'}</span>
                </div>

                {isResumoOpen && (
                  <div style={{ padding: '24px' }}>
                    <MockRichTextEditor
                      label="Descrição da Proposta"
                      description="Resumo executivo do projeto submetido ao 3º Ciclo E.I.T.A!"
                      value={resumoDescricao}
                      onChange={setResumoDescricao}
                    />

                    <MockRichTextEditor
                      label="Resultados Esperados & Metas"
                      value={resumoResultados}
                      onChange={setResumoResultados}
                    />

                    <MockRichTextEditor
                      label="Replicabilidade e Escalabilidade"
                      value={resumoReplicabilidade}
                      onChange={setResumoReplicabilidade}
                    />

                    <MockRichTextEditor
                      label="Foco nos Cidadãos e Impacto Urbano"
                      value={resumoFocoPessoas}
                      onChange={setResumoFocoPessoas}
                    />

                    <MockRichTextEditor
                      label="Grau de Disrupção"
                      value={resumoDisrupcao}
                      onChange={setResumoDisrupcao}
                    />
                  </div>
                )}
              </div>

              {/* ── CRITÉRIOS DE AVALIAÇÃO (COM ESTRELAS 1 A 5 E NOTA INDIVIDUAL) ── */}
              <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0', padding: '24px 28px', marginBottom: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#003B6D', marginTop: 0, marginBottom: '16px', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px' }}>
                  ⭐ Formulário de Atribuição de Notas por Critério
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {trilhaCriterios.map(crit => {
                    const currentRating = currentCardEval.ratings[crit.id] || 0
                    const isSaved = !!currentCardEval.savedCriteria[crit.id]
                    const currentComment = currentCardEval.comments[crit.id] || ''

                    return (
                      <div key={crit.id} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '18px 20px', backgroundColor: isSaved ? '#f8fafc' : '#ffffff' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '8px' }}>
                          <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#1A202C', margin: 0 }}>
                            {crit.title}
                          </h4>

                          {/* Status Tag */}
                          <span style={{
                            fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '12px',
                            backgroundColor: isSaved ? '#dcfce7' : '#fef3c7',
                            color: isSaved ? '#166534' : '#92400e'
                          }}>
                            {isSaved ? '✓ Critério Salvo' : 'Pendente de nota'}
                          </span>
                        </div>

                        <p style={{ fontSize: '12px', color: '#64748b', marginTop: 0, marginBottom: '14px', lineHeight: 1.4 }}>
                          {crit.instruction}
                        </p>

                        {/* Star Rating Select (1 to 5) */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '14px' }}>
                          <span style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>Sua nota:</span>
                          <div style={{ display: 'flex', gap: '6px' }}>
                            {[1, 2, 3, 4, 5].map(star => (
                              <button
                                key={star}
                                onClick={() => handleStarClick(crit.id, star)}
                                style={{
                                  background: 'none', border: 'none', cursor: 'pointer', fontSize: '24px',
                                  color: star <= currentRating ? '#f59e0b' : '#cbd5e1',
                                  transition: 'transform 0.1s ease',
                                  padding: '0 2px'
                                }}
                                title={`${star} Estrela${star > 1 ? 's' : ''}`}
                              >
                                ★
                              </button>
                            ))}
                          </div>
                          <span style={{ fontSize: '13px', fontWeight: 700, color: currentRating > 0 ? '#f59e0b' : '#94a3b8' }}>
                            {currentRating > 0 ? `${currentRating}.0 / 5.0` : 'Selecione'}
                          </span>
                        </div>

                        {/* Justificativa do Critério */}
                        <div style={{ marginBottom: '12px' }}>
                          <label style={{ fontSize: '12px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '4px' }}>
                            Parecer / Comentário sobre este critério:
                          </label>
                          <textarea
                            rows={2}
                            value={currentComment}
                            onChange={e => {
                              const val = e.target.value
                              updateCurrentEval(prev => ({
                                ...prev,
                                comments: { ...prev.comments, [crit.id]: val }
                              }))
                            }}
                            placeholder="Escreva a justificativa da pontuação concedida..."
                            style={{
                              width: '100%', padding: '8px 12px', borderRadius: '6px',
                              border: '1px solid #cbd5e1', outline: 'none', fontSize: '12px',
                              boxSizing: 'border-box', fontFamily: 'inherit'
                            }}
                          />
                        </div>

                        {/* Botão de Salvar Critério Individual */}
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                          <button
                            onClick={() => handleSaveCriterion(crit.id)}
                            style={{
                              padding: '6px 16px', borderRadius: '6px',
                              backgroundColor: isSaved ? '#e2e8f0' : '#00a8b5',
                              color: isSaved ? '#334155' : '#ffffff',
                              fontWeight: 600, fontSize: '12px', border: 'none', cursor: 'pointer'
                            }}
                          >
                            {isSaved ? 'Atualizar Critério' : 'Salvar Critério'}
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Panel Action: Finalizar Avaliação */}
              <div style={{
                backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0',
                padding: '20px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)', marginBottom: '40px'
              }}>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#1A202C' }}>
                    Concluir Avaliação Completa da Proposta
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                    Certifique-se de ter atribuído nota a todos os critérios antes de finalizar.
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={() => setSelectedEvaluation(null)}
                    style={{
                      padding: '10px 20px', borderRadius: '6px', border: '1px solid #cbd5e1',
                      backgroundColor: '#ffffff', color: '#475569', fontWeight: 600, fontSize: '13px',
                      cursor: 'pointer'
                    }}
                  >
                    Cancelar
                  </button>

                  <button
                    onClick={handleFinalizeEvaluation}
                    style={{
                      padding: '10px 24px', borderRadius: '6px', border: 'none',
                      backgroundColor: '#00a8b5', color: '#ffffff', fontWeight: 700, fontSize: '13px',
                      cursor: 'pointer', boxShadow: '0 2px 4px rgba(0, 168, 181, 0.2)'
                    }}
                  >
                    ✓ Finalizar Avaliação
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* ── Default View: Submissions Cards Grid (Matches user screenshot) ── */
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '24px', alignItems: 'start' }}>

              {/* CARD 1: PROPOSTAS SUBMETIDAS */}
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                border: '1px solid #e2e8f0',
                overflow: 'hidden',
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
              }}>
                {/* Red to Teal Gradient Header Bar */}
                <div style={{
                  background: 'linear-gradient(90deg, #d9383a 0%, #00a8b5 100%)',
                  padding: '14px 20px',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span>Propostas submetidas</span>
                  <span style={{
                    backgroundColor: 'rgba(255,255,255,0.25)',
                    padding: '2px 10px',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }}>
                    {filteredSubmetidas.length}
                  </span>
                </div>

                {/* Card Body */}
                <div style={{ padding: '20px' }}>
                  {/* Search Input */}
                  <div style={{ marginBottom: '16px' }}>
                    <input
                      type="text"
                      placeholder="🔍 Buscar por título, autor ou startup..."
                      value={searchSubmetidas}
                      onChange={e => setSearchSubmetidas(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '9px 12px',
                        borderRadius: '6px',
                        border: '1px solid #cbd5e1',
                        fontSize: '12px',
                        boxSizing: 'border-box',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Submissions List */}
                  {filteredSubmetidas.length === 0 ? (
                    <div style={{ padding: '32px 16px', textAlign: 'center', color: '#94a3b8', fontSize: '13px' }}>
                      Nenhuma proposta submetida encontrada.
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {filteredSubmetidas.map(item => (
                        <div
                          key={item.id}
                          style={{
                            padding: '14px 16px',
                            border: '1px solid #e2e8f0',
                            borderRadius: '8px',
                            backgroundColor: '#ffffff',
                            transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                          }}
                        >
                          <div style={{ fontWeight: 700, fontSize: '14px', color: '#1A202C', marginBottom: '4px' }}>
                            {item.title}
                          </div>

                          <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>
                            Submetido por: <strong style={{ color: '#334155' }}>{item.author}</strong> ({item.organization})
                          </div>

                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{
                              fontSize: '11px', fontWeight: 600, padding: '3px 8px', borderRadius: '4px',
                              backgroundColor: '#fff7ed', color: '#c2410c', border: '1px solid #ffedd5'
                            }}>
                              Pendente de Avaliação
                            </span>

                            <button
                              onClick={() => setSelectedEvaluation(item)}
                              style={{
                                padding: '6px 16px',
                                borderRadius: '6px',
                                backgroundColor: '#00a8b5',
                                color: '#ffffff',
                                border: 'none',
                                fontWeight: 700,
                                fontSize: '12px',
                                cursor: 'pointer'
                              }}
                            >
                              Avaliar →
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* CARD 2: AVALIADO */}
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                border: '1px solid #e2e8f0',
                overflow: 'hidden',
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
              }}>
                {/* Red to Teal Gradient Header Bar */}
                <div style={{
                  background: 'linear-gradient(90deg, #d9383a 0%, #00a8b5 100%)',
                  padding: '14px 20px',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span>Avaliado</span>
                  <span style={{
                    backgroundColor: 'rgba(255,255,255,0.25)',
                    padding: '2px 10px',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }}>
                    {filteredAvaliado.length}
                  </span>
                </div>

                {/* Card Body */}
                <div style={{ padding: '20px' }}>
                  {/* Search Input */}
                  <div style={{ marginBottom: '16px' }}>
                    <input
                      type="text"
                      placeholder="🔍 Buscar por proposta avaliada..."
                      value={searchAvaliado}
                      onChange={e => setSearchAvaliado(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '9px 12px',
                        borderRadius: '6px',
                        border: '1px solid #cbd5e1',
                        fontSize: '12px',
                        boxSizing: 'border-box',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Evaluated List */}
                  {filteredAvaliado.length === 0 ? (
                    <div style={{ padding: '32px 16px', textAlign: 'center', color: '#94a3b8', fontSize: '13px' }}>
                      Nenhuma proposta avaliada ainda.
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {filteredAvaliado.map(item => (
                        <div
                          key={item.id}
                          style={{
                            padding: '14px 16px',
                            border: '1px solid #e2e8f0',
                            borderRadius: '8px',
                            backgroundColor: '#f8fafc'
                          }}
                        >
                          <div style={{ fontWeight: 700, fontSize: '14px', color: '#1A202C', marginBottom: '4px' }}>
                            {item.title}
                          </div>

                          <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>
                            Avaliador: <strong style={{ color: '#334155' }}>Pedro</strong> | Autor: {item.author}
                          </div>

                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span style={{
                                fontSize: '11px', fontWeight: 600, padding: '3px 8px', borderRadius: '4px',
                                backgroundColor: '#f0fdf4', color: '#15803d', border: '1px solid #bbf7d0'
                              }}>
                                ✓ Avaliado
                              </span>

                              {item.score && (
                                <span style={{ fontSize: '12px', fontWeight: 700, color: '#f59e0b' }}>
                                  ★ {item.score}
                                </span>
                              )}
                            </div>

                            <button
                              onClick={() => setSelectedEvaluation(item)}
                              style={{
                                padding: '6px 14px',
                                borderRadius: '6px',
                                backgroundColor: '#ffffff',
                                color: '#00a8b5',
                                border: '1px solid #00a8b5',
                                fontWeight: 600,
                                fontSize: '12px',
                                cursor: 'pointer'
                              }}
                            >
                              Reavaliar
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
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

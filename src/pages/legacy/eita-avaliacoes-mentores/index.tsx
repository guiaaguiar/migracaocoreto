import { useState, useMemo } from 'react'
import { useSearchParams, Link, useNavigate } from 'react-router-dom'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import {
  EITA_MENTOR_EVALUATIONS,
  EITA_SUBMISSIONS,
  exportToCSV
} from '../../../data/eitaData'
import type { EitaMentorEvaluation } from '../../../data/eitaData'

export default function EitaAvaliacoesMentoresPage() {
  const [searchParams] = useSearchParams()
  const initialSearch = searchParams.get('search') || ''
  const [searchTerm, setSearchTerm] = useState(initialSearch)
  const [selectedMentor, setSelectedMentor] = useState<string>('todos')
  const [selectedDesafio, setSelectedDesafio] = useState<string>('todos')
  const [selectedEvaluation, setSelectedEvaluation] = useState<EitaMentorEvaluation | null>(null)
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards')
  const navigate = useNavigate()

  // Mentors list
  const mentorsList = useMemo(() => {
    const set = new Set(EITA_MENTOR_EVALUATIONS.map(a => a.mentor).filter(Boolean))
    return ['todos', ...Array.from(set)]
  }, [])

  // Desafios list
  const desafiosList = useMemo(() => {
    const set = new Set(EITA_MENTOR_EVALUATIONS.map(a => a.desafioCategory).filter(Boolean))
    return ['todos', ...Array.from(set)]
  }, [])

  // Filter evaluations
  const filteredEvaluations = useMemo(() => {
    return EITA_MENTOR_EVALUATIONS.filter(ev => {
      const matchesSearch =
        !searchTerm ||
        ev.propostaNome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ev.mentor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ev.desafio.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ev.id.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesMentor = selectedMentor === 'todos' || ev.mentor === selectedMentor
      const matchesDesafio = selectedDesafio === 'todos' || ev.desafioCategory === selectedDesafio

      return matchesSearch && matchesMentor && matchesDesafio
    })
  }, [searchTerm, selectedMentor, selectedDesafio])

  // Metrics
  const totalAvaliacoes = EITA_MENTOR_EVALUATIONS.length
  const uniquePropostas = new Set(EITA_MENTOR_EVALUATIONS.map(a => a.propostaNome)).size
  const uniqueMentores = new Set(EITA_MENTOR_EVALUATIONS.map(a => a.mentor)).size
  const scoredItems = EITA_MENTOR_EVALUATIONS.filter(a => a.propostaScore !== null)
  const mediaScores = scoredItems.length > 0
    ? (scoredItems.reduce((acc, curr) => acc + (curr.propostaScore || 0), 0) / scoredItems.length).toFixed(2)
    : '0.00'

  // CSV mapping
  const csvColumnMap = {
    id: 'ID da Avaliação',
    propostaNome: 'Proposta Avaliada',
    mentor: 'Mentor Avaliador',
    desafioCategory: 'Eixo do Desafio',
    desafio: 'Desafio Público',
    propostaScore: 'Score Ponderado',
    propostaMedia: 'Média do Mentor',
    submissionId: 'ID da Submissão Vinculada',
    createdDate: 'Data de Criação'
  }

  // Navigate to Submission with Popup Open
  const handleGoToSubmission = (ev: EitaMentorEvaluation) => {
    if (ev.submissionId) {
      navigate(`/legacy/eita-submissoes?selectedId=${ev.submissionId}`)
    } else {
      navigate(`/legacy/eita-submissoes?proposal=${encodeURIComponent(ev.propostaNome)}`)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F8FAFC', fontFamily: "'DM Sans', sans-serif" }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar activeItem="painel" />
        <main style={{ flex: 1, padding: '32px', maxWidth: '1320px', width: '100%', margin: '0 auto' }}>

          {/* ── Sub-Navigation Tabs between Dashboards ── */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <Link
              to="/legacy/eita-submissoes"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 700,
                backgroundColor: '#FFFFFF',
                color: '#475569',
                border: '1px solid #CBD5E1',
                textDecoration: 'none',
              }}
            >
              <span>📋 Submissões EITA ({EITA_SUBMISSIONS.length})</span>
            </Link>

            <Link
              to="/legacy/eita-avaliacoes-mentores"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 700,
                backgroundColor: '#0284c7',
                color: '#FFFFFF',
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(2, 132, 199, 0.25)',
              }}
            >
              <span>🔍 Avaliações dos Mentores ({totalAvaliacoes})</span>
            </Link>

            <Link
              to="/legacy/eita-avaliacoes-operacao"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 700,
                backgroundColor: '#FFFFFF',
                color: '#475569',
                border: '1px solid #CBD5E1',
                textDecoration: 'none',
              }}
            >
              <span>🏆 Consolidação & Operação (660)</span>
            </Link>

            <Link
              to="/legacy/eita"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 700,
                backgroundColor: '#FFFFFF',
                color: '#64748B',
                border: '1px solid #CBD5E1',
                textDecoration: 'none',
                marginLeft: 'auto',
              }}
            >
              <span>← Portal Oficial E.I.T.A!</span>
            </Link>
          </div>

          {/* ── Top Hero Card ── */}
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              padding: '36px 40px',
              color: '#FFFFFF',
              background: 'linear-gradient(135deg, #022340 0%, #0369a1 50%, #0284c7 100%)',
              overflow: 'hidden',
              boxShadow: '0 10px 25px rgba(2, 35, 64, 0.15)',
              marginBottom: '32px',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-40px',
                right: '10%',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                border: '40px solid rgba(255, 255, 255, 0.08)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-80px',
                right: '-40px',
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                border: '60px solid rgba(255, 255, 255, 0.05)',
                pointerEvents: 'none',
              }}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '28px' }}>
              <div>
                <span style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#7dd3fc', display: 'block', marginBottom: '6px' }}>
                  Painel de Avaliação • Banca de Mentores do 3º Ciclo EITA Recife
                </span>
                <h1 style={{ fontSize: '32px', fontWeight: 900, margin: 0, letterSpacing: '-0.02em' }}>
                  Avaliações dos Mentores
                </h1>
                <p style={{ fontSize: '15px', color: '#E2E8F0', margin: '8px 0 0 0', maxWidth: '650px', lineHeight: 1.5 }}>
                  Consulte os pareceres técnicos, scores ponderados e avaliações individuais emitidas pela banca técnica de especialistas do programa.
                </p>
              </div>

              {/* Export CSV Button */}
              <button
                onClick={() => exportToCSV('avaliacoes_mentores_eita', filteredEvaluations, csvColumnMap)}
                style={{
                  backgroundColor: '#0284c7',
                  color: '#FFFFFF',
                  border: '1.5px solid rgba(255,255,255,0.4)',
                  borderRadius: '30px',
                  padding: '12px 24px',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 12px rgba(2, 132, 199, 0.3)',
                  whiteSpace: 'nowrap',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <span>Exportar ({filteredEvaluations.length}) CSV</span>
              </button>
            </div>

            {/* 4 Counter Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {totalAvaliacoes}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#0284c7' }}>
                  Total Avaliações
                </div>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {mediaScores} <span style={{ fontSize: '20px', color: '#F59E0B' }}>⭐️</span>
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#00a8b5' }}>
                  Média de Scores
                </div>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {uniquePropostas}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#8b5cf6' }}>
                  Propostas Avaliadas
                </div>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {uniqueMentores}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#10b981' }}>
                  Mentores Avaliadores
                </div>
              </div>
            </div>
          </div>

          {/* ── Search and Filter Controls ── */}
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '24px', border: '1px solid #E2E8F0', marginBottom: '28px', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ position: 'relative', flex: 1 }}>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Pesquisar por proposta avaliada, nome do mentor, ID ou desafio..."
                    style={{
                      width: '100%',
                      padding: '14px 16px 14px 44px',
                      borderRadius: '10px',
                      border: '1.5px solid #0284c7',
                      fontSize: '14px',
                      outline: 'none',
                      backgroundColor: '#FFFFFF',
                      boxSizing: 'border-box',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                    }}
                  />
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="2"
                    style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }}
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        fontSize: '16px',
                        cursor: 'pointer',
                        color: '#94A3B8',
                      }}
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* View Mode Toggle */}
                <div style={{ display: 'flex', border: '1px solid #CBD5E1', borderRadius: '8px', overflow: 'hidden' }}>
                  <button
                    onClick={() => setViewMode('cards')}
                    style={{
                      padding: '10px 14px',
                      backgroundColor: viewMode === 'cards' ? '#0284c7' : '#FFFFFF',
                      color: viewMode === 'cards' ? '#FFFFFF' : '#475569',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="14" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                    </svg>
                    <span>Cards</span>
                  </button>
                  <button
                    onClick={() => setViewMode('table')}
                    style={{
                      padding: '10px 14px',
                      backgroundColor: viewMode === 'table' ? '#0284c7' : '#FFFFFF',
                      color: viewMode === 'table' ? '#FFFFFF' : '#475569',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="8" y1="6" x2="21" y2="6" />
                      <line x1="8" y1="12" x2="21" y2="12" />
                      <line x1="8" y1="18" x2="21" y2="18" />
                      <line x1="3" y1="6" x2="3.01" y2="6" />
                      <line x1="3" y1="12" x2="3.01" y2="12" />
                      <line x1="3" y1="18" x2="3.01" y2="18" />
                    </svg>
                    <span>Tabela</span>
                  </button>
                </div>
              </div>

              {/* Desafio Filters */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#64748B', marginRight: '4px' }}>
                  Desafio:
                </span>
                {desafiosList.map(des => (
                  <button
                    key={des}
                    onClick={() => setSelectedDesafio(des)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: selectedDesafio === des ? 700 : 500,
                      backgroundColor: selectedDesafio === des ? '#0284c7' : '#F1F5F9',
                      color: selectedDesafio === des ? '#FFFFFF' : '#334155',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {des === 'todos' ? 'Todos os Desafios' : des}
                  </button>
                ))}
              </div>

              {/* Mentor Filters */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#64748B', marginRight: '4px' }}>
                  Mentor:
                </span>
                {mentorsList.slice(0, 10).map(mentor => (
                  <button
                    key={mentor}
                    onClick={() => setSelectedMentor(mentor)}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '16px',
                      fontSize: '12px',
                      fontWeight: selectedMentor === mentor ? 700 : 500,
                      backgroundColor: selectedMentor === mentor ? '#00a8b5' : '#F8FAFC',
                      color: selectedMentor === mentor ? '#FFFFFF' : '#475569',
                      border: '1px solid #E2E8F0',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {mentor === 'todos' ? 'Todos os Mentores' : mentor.split(' ').slice(0, 2).join(' ')}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Evaluations Listing ── */}
          <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A' }}>
              Exibindo <strong style={{ color: '#0284c7' }}>{filteredEvaluations.length}</strong> de {totalAvaliacoes} avaliações
            </span>
          </div>

          {filteredEvaluations.length === 0 ? (
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '48px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>🔍</div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', margin: '0 0 8px 0' }}>
                Nenhuma avaliação encontrada
              </h3>
              <p style={{ fontSize: '14px', color: '#64748B', margin: '0 0 20px 0' }}>
                Tente ajustar os filtros ou termos de pesquisa.
              </p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedMentor('todos'); setSelectedDesafio('todos'); }}
                style={{
                  backgroundColor: '#0284c7',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '20px',
                  padding: '10px 24px',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Limpar Filtros
              </button>
            </div>
          ) : viewMode === 'cards' ? (
            /* ── Cards Grid ── */
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '20px' }}>
              {filteredEvaluations.map(ev => (
                <div
                  key={ev.id}
                  onClick={() => setSelectedEvaluation(ev)}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1px solid #E2E8F0',
                    padding: '24px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(2, 132, 199, 0.12)'
                    e.currentTarget.style.borderColor = '#0284c7'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)'
                    e.currentTarget.style.borderColor = '#E2E8F0'
                  }}
                >
                  <div>
                    {/* Header with ID and Score */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', gap: '8px' }}>
                      <span style={{ backgroundColor: '#F1F5F9', color: '#475569', fontSize: '11px', fontWeight: 800, padding: '4px 10px', borderRadius: '12px' }}>
                        {ev.id}
                      </span>
                      {ev.propostaScore !== null ? (
                        <span style={{ backgroundColor: '#E0F2FE', color: '#0284C7', fontSize: '13px', fontWeight: 900, padding: '4px 12px', borderRadius: '16px' }}>
                          ⭐️ {ev.propostaScore.toFixed(2)}
                        </span>
                      ) : (
                        <span style={{ backgroundColor: '#F1F5F9', color: '#64748B', fontSize: '11px', fontWeight: 600, padding: '4px 8px', borderRadius: '12px' }}>
                          Sem nota
                        </span>
                      )}
                    </div>

                    {/* Proposal Title with Link */}
                    <div style={{ marginBottom: '10px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '4px' }}>
                        💡 Proposta Avaliada (sw_nome):
                      </span>
                      <button
                        onClick={e => {
                          e.stopPropagation()
                          handleGoToSubmission(ev)
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          textAlign: 'left',
                          fontSize: '16px',
                          fontWeight: 800,
                          color: '#0F172A',
                          cursor: 'pointer',
                          lineHeight: 1.35,
                          textDecoration: 'underline',
                          textDecorationColor: '#93C5FD',
                          transition: 'color 0.15s ease',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#0284C7')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#0F172A')}
                      >
                        {ev.propostaNome} ↗
                      </button>
                    </div>

                    {/* Submitter, Company & Mentor Box */}
                    {(() => {
                      const linkedSub = EITA_SUBMISSIONS.find(s => s.id === ev.submissionId || s.title.toLowerCase().includes(ev.propostaNome.toLowerCase()))
                      return (
                        <div style={{ backgroundColor: '#F8FAFC', padding: '10px 12px', borderRadius: '8px', border: '1px solid #E2E8F0', marginBottom: '12px' }}>
                          <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span>👤</span>
                            <span><strong>Quem submeteu:</strong> {linkedSub?.pf_nome || 'Autor / Proponente EITA'}</span>
                          </div>
                          {linkedSub?.Nome_fantasia && (
                            <div style={{ fontSize: '12px', color: '#475569', marginTop: '3px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <span>🏢</span>
                              <span><strong>Empresa / Startup:</strong> {linkedSub.Nome_fantasia}</span>
                            </div>
                          )}
                          <div style={{ fontSize: '12px', color: '#0284c7', marginTop: '4px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span>🧑‍🏫</span>
                            <span><strong>Mentor:</strong> {ev.mentor}</span>
                          </div>
                        </div>
                      )
                    })()}

                    {/* Desafio Category */}
                    <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '16px' }}>
                      🎯 Desafio: {ev.desafioCategory}
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button
                      onClick={e => {
                        e.stopPropagation()
                        handleGoToSubmission(ev)
                      }}
                      style={{
                        backgroundColor: 'transparent',
                        color: '#00a8b5',
                        border: '1px solid #00a8b5',
                        borderRadius: '20px',
                        padding: '6px 14px',
                        fontSize: '12px',
                        fontWeight: 700,
                        cursor: 'pointer',
                      }}
                    >
                      Ver Proposta 📋
                    </button>

                    <button
                      onClick={e => {
                        e.stopPropagation()
                        setSelectedEvaluation(ev)
                      }}
                      style={{
                        backgroundColor: '#0284c7',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '20px',
                        padding: '8px 18px',
                        fontSize: '13px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(2, 132, 199, 0.2)',
                      }}
                    >
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* ── Table View ── */
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: '#F8FAFC' }}>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '10%' }}>ID</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '32%' }}>Proposta Avaliada</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '25%' }}>Mentor Avaliador</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '15%' }}>Score</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '10%' }}>Média</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', textAlign: 'right', width: '8%' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEvaluations.map(ev => (
                    <tr
                      key={ev.id}
                      style={{ borderBottom: '1px solid #F1F5F9', cursor: 'pointer' }}
                      onClick={() => setSelectedEvaluation(ev)}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#F8FAFC')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#FFFFFF')}
                    >
                      <td style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#64748B' }}>{ev.id}</td>
                      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#0F172A', fontWeight: 600 }}>
                        <button
                          onClick={e => {
                            e.stopPropagation()
                            handleGoToSubmission(ev)
                          }}
                          style={{
                            background: 'none',
                            border: 'none',
                            padding: 0,
                            textAlign: 'left',
                            color: '#0F172A',
                            fontWeight: 700,
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            textDecorationColor: '#93C5FD',
                          }}
                        >
                          {ev.propostaNome}
                        </button>
                      </td>
                      <td style={{ padding: '16px 20px', fontSize: '13px', color: '#0284c7', fontWeight: 600 }}>{ev.mentor}</td>
                      <td style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>
                        {ev.propostaScore !== null ? `⭐️ ${ev.propostaScore.toFixed(2)}` : '-'}
                      </td>
                      <td style={{ padding: '16px 20px', fontSize: '13px', color: '#64748B' }}>
                        {ev.propostaMedia !== null ? ev.propostaMedia.toFixed(2) : '-'}
                      </td>
                      <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                        <button
                          onClick={e => {
                            e.stopPropagation()
                            setSelectedEvaluation(ev)
                          }}
                          style={{
                            backgroundColor: '#0284c7',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '20px',
                            padding: '6px 14px',
                            fontSize: '12px',
                            fontWeight: 700,
                            cursor: 'pointer',
                          }}
                        >
                          Ver
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </main>
      </div>

      {/* ── MODAL "DETALHES DA AVALIAÇÃO DO MENTOR" ── */}
      {selectedEvaluation && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '24px',
          }}
          onClick={() => setSelectedEvaluation(null)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              maxWidth: '840px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '36px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedEvaluation(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                fontSize: '22px',
                cursor: 'pointer',
                color: '#64748B',
              }}
            >
              ✕
            </button>

            {/* Top CSV Button */}
            <button
              onClick={() => exportToCSV(`avaliacao_eita_${selectedEvaluation.id}`, [selectedEvaluation], csvColumnMap)}
              style={{
                width: '100%',
                border: '1.5px solid #0284c7',
                borderRadius: '8px',
                padding: '14px',
                backgroundColor: '#FFFFFF',
                color: '#0284c7',
                fontSize: '15px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <span>Exportar Dados da Avaliação em CSV</span>
            </button>

            {/* Modal Title */}
            <div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ backgroundColor: '#0284C7', color: '#FFFFFF', fontSize: '12px', fontWeight: 800, padding: '4px 10px', borderRadius: '6px' }}>
                  {selectedEvaluation.id}
                </span>
                <span style={{ fontSize: '13px', color: '#64748B', fontWeight: 600 }}>
                  3º Ciclo EITA • {selectedEvaluation.desafioCategory}
                </span>
              </div>
              <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: 0, lineHeight: 1.3 }}>
                {selectedEvaluation.propostaNome}
              </h2>
            </div>

            {/* ── Banner Action: Go to Submission ── */}
            <div
              style={{
                backgroundColor: '#F0F9FF',
                borderRadius: '12px',
                padding: '18px 22px',
                border: '1.5px solid #BAE6FD',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#0369A1', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                  💡 Proposta Vinculada no EITA (sw_nome)
                </span>
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A' }}>
                  {selectedEvaluation.propostaNome}
                </div>
                {(() => {
                  const linkedSub = EITA_SUBMISSIONS.find(s => s.id === selectedEvaluation.submissionId || s.title.toLowerCase().includes(selectedEvaluation.propostaNome.toLowerCase()))
                  return (
                    <div style={{ fontSize: '13px', color: '#475569', marginTop: '4px' }}>
                      👤 <strong>Quem submeteu:</strong> {linkedSub?.pf_nome || 'Autor / Proponente EITA'} &nbsp;•&nbsp; 🏢 <strong>Empresa:</strong> {linkedSub?.Nome_fantasia || 'Startup EITA'}
                    </div>
                  )
                })()}
                <div style={{ fontSize: '12px', color: '#0284c7', fontWeight: 700, marginTop: '2px' }}>
                  🎯 Desafio: {selectedEvaluation.desafioCategory}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedEvaluation(null)
                  handleGoToSubmission(selectedEvaluation)
                }}
                style={{
                  backgroundColor: '#00a8b5',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '30px',
                  padding: '10px 22px',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 2px 6px rgba(0, 168, 181, 0.25)',
                  whiteSpace: 'nowrap',
                }}
              >
                <span>Ver Submissão Completa 📋</span>
              </button>
            </div>

            {/* ── Details Fields ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ fontSize: '13px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '6px' }}>
                  👤 Mentor / Avaliador Responsável:
                </label>
                <div style={{ backgroundColor: '#F8FAFC', padding: '12px 16px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '14px', fontWeight: 600, color: '#0F172A' }}>
                  {selectedEvaluation.mentor}
                </div>
              </div>

              <div>
                <label style={{ fontSize: '13px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '6px' }}>
                  🎯 Desafio Público:
                </label>
                <div style={{ backgroundColor: '#F8FAFC', padding: '12px 16px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '14px', lineHeight: 1.5, color: '#0F172A' }}>
                  {selectedEvaluation.desafio || 'Desafio Geral'}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '6px' }}>
                    ⭐️ Score Ponderado:
                  </label>
                  <div style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0', padding: '12px 16px', borderRadius: '8px', fontSize: '18px', fontWeight: 900, color: '#15803D' }}>
                    {selectedEvaluation.propostaScore !== null ? `${selectedEvaluation.propostaScore.toFixed(2)} ⭐️` : 'Sem nota registrada'}
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '13px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '6px' }}>
                    📊 Média do Mentor:
                  </label>
                  <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #CBD5E1', padding: '12px 16px', borderRadius: '8px', fontSize: '18px', fontWeight: 900, color: '#0F172A' }}>
                    {selectedEvaluation.propostaMedia !== null ? selectedEvaluation.propostaMedia.toFixed(2) : '-'}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button
                onClick={() => {
                  setSelectedEvaluation(null)
                  handleGoToSubmission(selectedEvaluation)
                }}
                style={{
                  backgroundColor: 'transparent',
                  color: '#00a8b5',
                  border: '1px solid #00a8b5',
                  borderRadius: '8px',
                  padding: '10px 20px',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Abrir Pop-up da Submissão ↗
              </button>

              <button
                onClick={() => setSelectedEvaluation(null)}
                style={{
                  backgroundColor: '#0284c7',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 28px',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

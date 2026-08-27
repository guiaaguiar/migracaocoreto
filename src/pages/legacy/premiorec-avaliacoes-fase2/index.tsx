import { useState, useMemo } from 'react'
import { useSearchParams, Link, useNavigate } from 'react-router-dom'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import {
  ASSESSMENTS_FASE_2,
  exportToCSV
} from '../../../data/premioRecData'
import type { AssessmentFase2 } from '../../../data/premioRecData'


export default function PremioRecAvaliacoesFase2Page() {
  const [searchParams] = useSearchParams()
  const initialSearch = searchParams.get('search') || ''
  const [searchTerm, setSearchTerm] = useState(initialSearch)
  const [selectedMentor, setSelectedMentor] = useState<string>('todos')
  const [selectedScoreRange, setSelectedScoreRange] = useState<string>('todos')
  const [selectedAssessment, setSelectedAssessment] = useState<AssessmentFase2 | null>(null)
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards')
  const navigate = useNavigate()

  // Mentors list
  const mentorsList = useMemo(() => {
    const set = new Set(ASSESSMENTS_FASE_2.map(a => a.mentor).filter(Boolean))
    return ['todos', ...Array.from(set)]
  }, [])

  // Filter assessments
  const filteredAssessments = useMemo(() => {
    return ASSESSMENTS_FASE_2.filter(ass => {
      const matchesSearch =
        !searchTerm ||
        ass.inscricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ass.mentor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ass.comentarioClean.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ass.id.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesMentor = selectedMentor === 'todos' || ass.mentor === selectedMentor

      let matchesScore = true
      if (selectedScoreRange === 'top') matchesScore = ass.result !== null && ass.result >= 4.5
      else if (selectedScoreRange === 'good') matchesScore = ass.result !== null && ass.result >= 4.0 && ass.result < 4.5
      else if (selectedScoreRange === 'mid') matchesScore = ass.result !== null && ass.result >= 3.0 && ass.result < 4.0
      else if (selectedScoreRange === 'low') matchesScore = ass.result !== null && ass.result < 3.0
      else if (selectedScoreRange === 'sem_nota') matchesScore = ass.result === null

      return matchesSearch && matchesMentor && matchesScore
    })
  }, [searchTerm, selectedMentor, selectedScoreRange])

  // Metrics
  const totalAvaliacoes = ASSESSMENTS_FASE_2.length
  const uniqueInscricoes = new Set(ASSESSMENTS_FASE_2.map(a => a.inscricao)).size
  const uniqueMentores = new Set(ASSESSMENTS_FASE_2.map(a => a.mentor)).size
  const scoredItems = ASSESSMENTS_FASE_2.filter(a => a.result !== null)
  const mediaNotas = scoredItems.length > 0
    ? (scoredItems.reduce((acc, curr) => acc + (curr.result || 0), 0) / scoredItems.length).toFixed(2)
    : '0.00'

  // CSV mapping
  const csvColumnMap = {
    id: 'ID da Avaliação',
    inscricao: 'Inscrição / Proposta Avaliada',
    mentor: 'Mentor / Avaliador',
    result: 'Nota Consolidada',
    comentarioClean: 'Comentário / Parecer',
    submissionId: 'ID da Submissão',
    submissionEixo: 'Eixo Temático',
    submissionCategoria: 'Categoria',
    slug: 'Slug'
  }

  // Navigate to Submission with Popup Open
  const handleGoToSubmission = (ass: AssessmentFase2) => {
    if (ass.submissionId) {
      navigate(`/legacy/premiorec-submissoes?selectedId=${ass.submissionId}`)
    } else {
      navigate(`/legacy/premiorec-submissoes?submission=${encodeURIComponent(ass.inscricao)}`)
    }
  }

  // Score Badge Color Helper
  const getScoreBadgeStyle = (score: number | null) => {
    if (score === null) return { bg: '#F1F5F9', color: '#64748B' }
    if (score >= 4.5) return { bg: '#DCFCE7', color: '#15803D' }
    if (score >= 4.0) return { bg: '#E0F2FE', color: '#0369A1' }
    if (score >= 3.0) return { bg: '#FEF3C7', color: '#B45309' }
    return { bg: '#FEE2E2', color: '#B91C1C' }
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
              to="/legacy/premiorec-submissoes"
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
              <span>📋 Submissões (164)</span>
            </Link>

            <Link
              to="/legacy/premiorec-avaliacoes-fase1"
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
              <span>🔍 Avaliações 1ª Fase (107)</span>
            </Link>

            <Link
              to="/legacy/premiorec-avaliacoes-fase2"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 700,
                backgroundColor: '#7E22CE',
                color: '#FFFFFF',
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(126, 34, 206, 0.25)',
              }}
            >
              <span>🏆 Avaliações 2ª Fase ({totalAvaliacoes})</span>
            </Link>
          </div>

          {/* ── Top Hero Card (Avaliações 2ª Fase) ── */}
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              padding: '36px 40px',
              color: '#FFFFFF',
              background: 'linear-gradient(135deg, #022340 0%, #4c1d95 50%, #7e22ce 100%)',
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
                <span style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#d8b4fe', display: 'block', marginBottom: '6px' }}>
                  Painel de Julgamento • 2ª Fase e Banca Final
                </span>
                <h1 style={{ fontSize: '32px', fontWeight: 900, margin: 0, letterSpacing: '-0.02em' }}>
                  Avaliações da 2ª Fase
                </h1>
                <p style={{ fontSize: '15px', color: '#E2E8F0', margin: '8px 0 0 0', maxWidth: '650px', lineHeight: 1.5 }}>
                  Consulte as notas consolidadas, critérios de mérito e pareceres detalhados emitidos pelos jurados e especialistas na 2ª Fase do prêmio.
                </p>
              </div>

              {/* Export CSV Button */}
              <button
                onClick={() => exportToCSV('avaliacoes_premio_recife_fase2', filteredAssessments, csvColumnMap)}
                style={{
                  backgroundColor: '#7E22CE',
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
                  boxShadow: '0 4px 12px rgba(126, 34, 206, 0.3)',
                  whiteSpace: 'nowrap',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <span>Exportar ({filteredAssessments.length}) CSV</span>
              </button>
            </div>

            {/* 4 Counter Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {totalAvaliacoes}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#7E22CE' }}>
                  Total Avaliações
                </div>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {mediaNotas} <span style={{ fontSize: '20px', color: '#F59E0B' }}>⭐️</span>
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#0284c7' }}>
                  Média Geral das Notas
                </div>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {uniqueInscricoes}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#00a8b5' }}>
                  Propostas Avaliadas
                </div>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {uniqueMentores}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#10b981' }}>
                  Jurados / Especialistas
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
                    placeholder="Pesquisar por proposta, e-mail do jurado ou trecho do parecer..."
                    style={{
                      width: '100%',
                      padding: '14px 16px 14px 44px',
                      borderRadius: '10px',
                      border: '1.5px solid #7E22CE',
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
                    stroke="#7E22CE"
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
                      backgroundColor: viewMode === 'cards' ? '#7E22CE' : '#FFFFFF',
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
                      backgroundColor: viewMode === 'table' ? '#7E22CE' : '#FFFFFF',
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

              {/* Score Range Filters */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#64748B', marginRight: '4px' }}>
                  Faixa de Nota:
                </span>
                {[
                  { id: 'todos', label: 'Todas as Notas' },
                  { id: 'top', label: '⭐️ 4.5+ (Excelente)' },
                  { id: 'good', label: '⭐️ 4.0 a 4.4 (Muito Bom)' },
                  { id: 'mid', label: '⭐️ 3.0 a 3.9 (Médio)' },
                  { id: 'low', label: '⭐️ < 3.0 (Abaixo da Média)' },
                ].map(sr => (
                  <button
                    key={sr.id}
                    onClick={() => setSelectedScoreRange(sr.id)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: selectedScoreRange === sr.id ? 700 : 500,
                      backgroundColor: selectedScoreRange === sr.id ? '#7E22CE' : '#F1F5F9',
                      color: selectedScoreRange === sr.id ? '#FFFFFF' : '#334155',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {sr.label}
                  </button>
                ))}
              </div>

              {/* Mentor Filters */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#64748B', marginRight: '4px' }}>
                  Jurado:
                </span>
                {mentorsList.slice(0, 15).map(mentor => (
                  <button
                    key={mentor}
                    onClick={() => setSelectedMentor(mentor)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: selectedMentor === mentor ? 700 : 500,
                      backgroundColor: selectedMentor === mentor ? '#0284c7' : '#F1F5F9',
                      color: selectedMentor === mentor ? '#FFFFFF' : '#334155',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {mentor === 'todos' ? 'Todos os Jurados' : mentor.split('@')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Assessments Listing ── */}
          <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A' }}>
              Exibindo <strong style={{ color: '#7E22CE' }}>{filteredAssessments.length}</strong> de {totalAvaliacoes} avaliações
            </span>
          </div>

          {filteredAssessments.length === 0 ? (
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '48px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>🔍</div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', margin: '0 0 8px 0' }}>
                Nenhuma avaliação encontrada
              </h3>
              <p style={{ fontSize: '14px', color: '#64748B', margin: '0 0 20px 0' }}>
                Tente ajustar os termos de pesquisa ou o filtro de nota.
              </p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedMentor('todos'); setSelectedScoreRange('todos'); }}
                style={{
                  backgroundColor: '#7E22CE',
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
              {filteredAssessments.map(ass => {
                const scoreStyle = getScoreBadgeStyle(ass.result)
                return (
                  <div
                    key={ass.id}
                    onClick={() => setSelectedAssessment(ass)}
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
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(126, 34, 206, 0.12)'
                      e.currentTarget.style.borderColor = '#7E22CE'
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
                          {ass.id}
                        </span>

                        {ass.result !== null ? (
                          <span
                            style={{
                              backgroundColor: scoreStyle.bg,
                              color: scoreStyle.color,
                              fontSize: '14px',
                              fontWeight: 900,
                              padding: '4px 12px',
                              borderRadius: '16px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                            }}
                          >
                            <span>⭐️ {ass.result.toFixed(2)}</span>
                          </span>
                        ) : (
                          <span style={{ backgroundColor: '#F1F5F9', color: '#64748B', fontSize: '11px', fontWeight: 600, padding: '4px 8px', borderRadius: '12px' }}>
                            Sem nota
                          </span>
                        )}
                      </div>

                      {/* Proposal Title with Direct Link */}
                      <div style={{ marginBottom: '10px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#7E22CE', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '4px' }}>
                          💡 Proposta Avaliada (sw_nome):
                        </span>
                        <button
                          onClick={e => {
                            e.stopPropagation()
                            handleGoToSubmission(ass)
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
                            textDecorationColor: '#DDD6FE',
                            transition: 'color 0.15s ease',
                          }}
                          onMouseEnter={e => (e.currentTarget.style.color = '#7E22CE')}
                          onMouseLeave={e => (e.currentTarget.style.color = '#0F172A')}
                        >
                          {ass.submissionTitle || ass.inscricao} ↗
                        </button>
                      </div>

                      {/* Submitter, Company & Mentor Box */}
                      <div style={{ backgroundColor: '#F8FAFC', padding: '10px 12px', borderRadius: '8px', border: '1px solid #E2E8F0', marginBottom: '12px' }}>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span>👤</span>
                          <span><strong>Quem submeteu:</strong> {ass.pf_nome || 'Autor / Proponente'}</span>
                        </div>
                        {ass.Nome_fantasia && (
                          <div style={{ fontSize: '12px', color: '#475569', marginTop: '3px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span>🏢</span>
                            <span><strong>Empresa / Startup:</strong> {ass.Nome_fantasia}</span>
                          </div>
                        )}
                        <div style={{ fontSize: '12px', color: '#7E22CE', marginTop: '4px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span>🧑‍🏫</span>
                          <span><strong>Mentor:</strong> {ass.mentor}</span>
                        </div>
                      </div>

                      {/* Parecer Comment */}
                      <div
                        style={{
                          backgroundColor: '#F8FAFC',
                          borderRadius: '8px',
                          padding: '12px 14px',
                          border: '1px solid #E2E8F0',
                          marginBottom: '16px',
                        }}
                      >
                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', display: 'block', marginBottom: '4px' }}>
                          Parecer e Justificativa:
                        </span>
                        <p style={{ fontSize: '13px', color: '#334155', lineHeight: 1.5, margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {ass.comentarioClean || 'Nenhum comentário textual registrado.'}
                        </p>
                      </div>
                    </div>

                    {/* Card Action Footer */}
                    <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <button
                        onClick={e => {
                          e.stopPropagation()
                          handleGoToSubmission(ass)
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
                          setSelectedAssessment(ass)
                        }}
                        style={{
                          backgroundColor: '#7E22CE',
                          color: '#FFFFFF',
                          border: 'none',
                          borderRadius: '20px',
                          padding: '8px 18px',
                          fontSize: '13px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          boxShadow: '0 2px 4px rgba(126, 34, 206, 0.2)',
                        }}
                      >
                        Ver Avaliação
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            /* ── Table View ── */
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: '#F8FAFC' }}>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '10%' }}>ID</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '32%' }}>Inscrição Avaliada</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '22%' }}>Jurado / Especialista</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '10%' }}>Nota</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '18%' }}>Parecer</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', textAlign: 'right', width: '8%' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAssessments.map(ass => (
                    <tr
                      key={ass.id}
                      style={{ borderBottom: '1px solid #F1F5F9', cursor: 'pointer' }}
                      onClick={() => setSelectedAssessment(ass)}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#F8FAFC')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#FFFFFF')}
                    >
                      <td style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#64748B' }}>{ass.id}</td>
                      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#0F172A', fontWeight: 600 }}>
                        <button
                          onClick={e => {
                            e.stopPropagation()
                            handleGoToSubmission(ass)
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
                            textDecorationColor: '#DDD6FE',
                          }}
                        >
                          {ass.inscricao}
                        </button>
                      </td>
                      <td style={{ padding: '16px 20px', fontSize: '13px', color: '#7E22CE', fontWeight: 600 }}>{ass.mentor}</td>
                      <td style={{ padding: '16px 20px' }}>
                        {ass.result !== null ? (
                          <span style={{ backgroundColor: '#FAF5FF', color: '#7E22CE', border: '1px solid #E9D5FF', fontSize: '13px', fontWeight: 800, padding: '3px 8px', borderRadius: '12px' }}>
                            {ass.result.toFixed(2)} ⭐️
                          </span>
                        ) : '-'}
                      </td>
                      <td style={{ padding: '16px 20px', fontSize: '13px', color: '#475569' }}>
                        <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px' }}>
                          {ass.comentarioClean || '-'}
                        </div>
                      </td>
                      <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                        <button
                          onClick={e => {
                            e.stopPropagation()
                            setSelectedAssessment(ass)
                          }}
                          style={{
                            backgroundColor: '#7E22CE',
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

      {/* ── MODAL "DETALHES DA AVALIAÇÃO DA 2ª FASE" ── */}
      {selectedAssessment && (
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
          onClick={() => setSelectedAssessment(null)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              maxWidth: '860px',
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
              onClick={() => setSelectedAssessment(null)}
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
              onClick={() => exportToCSV(`avaliacao_fase2_${selectedAssessment.id}`, [selectedAssessment], csvColumnMap)}
              style={{
                width: '100%',
                border: '1.5px solid #7E22CE',
                borderRadius: '8px',
                padding: '14px',
                backgroundColor: '#FFFFFF',
                color: '#7E22CE',
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

            {/* Modal Title & Score */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ backgroundColor: '#7E22CE', color: '#FFFFFF', fontSize: '12px', fontWeight: 800, padding: '4px 10px', borderRadius: '6px' }}>
                    {selectedAssessment.id}
                  </span>
                  <span style={{ fontSize: '13px', color: '#64748B', fontWeight: 600 }}>
                    Fase 2 • {selectedAssessment.slug}
                  </span>
                </div>
                <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', margin: 0, lineHeight: 1.3 }}>
                  {selectedAssessment.inscricao}
                </h2>
              </div>

              {selectedAssessment.result !== null && (
                <div style={{ backgroundColor: '#FAF5FF', border: '2px solid #7E22CE', borderRadius: '16px', padding: '12px 20px', textAlign: 'center' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#7E22CE', textTransform: 'uppercase', display: 'block' }}>
                    Nota Consolidada
                  </span>
                  <span style={{ fontSize: '28px', fontWeight: 900, color: '#7E22CE' }}>
                    {selectedAssessment.result.toFixed(2)} <span style={{ fontSize: '20px' }}>⭐️</span>
                  </span>
                </div>
              )}
            </div>

            {/* ── Banner Action: Go to Submission ── */}
            <div
              style={{
                backgroundColor: '#FAF5FF',
                borderRadius: '12px',
                padding: '18px 22px',
                border: '1.5px solid #E9D5FF',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#6B21A8', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                  💡 Proposta Vinculada no Prêmio (sw_nome)
                </span>
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A' }}>
                  {selectedAssessment.submissionTitle}
                </div>
                <div style={{ fontSize: '13px', color: '#475569', marginTop: '4px' }}>
                  👤 <strong>Quem submeteu:</strong> {selectedAssessment.pf_nome || 'Autor / Proponente'} &nbsp;•&nbsp; 🏢 <strong>Empresa:</strong> {selectedAssessment.Nome_fantasia || selectedAssessment.submissionCategoria}
                </div>
                {selectedAssessment.submissionEixo && (
                  <div style={{ fontSize: '12px', color: '#7E22CE', fontWeight: 700, marginTop: '2px' }}>
                    🏷️ Eixo: {selectedAssessment.submissionEixo}
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  setSelectedAssessment(null)
                  handleGoToSubmission(selectedAssessment)
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
                  👤 Jurado / Especialista Responsável:
                </label>
                <div style={{ backgroundColor: '#F8FAFC', padding: '12px 16px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '14px', fontWeight: 600, color: '#0F172A' }}>
                  {selectedAssessment.mentor}
                </div>
              </div>

              <div>
                <label style={{ fontSize: '13px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '6px' }}>
                  📝 Parecer e Justificativa Detalhada da 2ª Fase:
                </label>
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1.5px solid #7E22CE',
                    borderRadius: '8px',
                    padding: '18px',
                    fontSize: '14px',
                    lineHeight: 1.7,
                    color: '#1E293B',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {selectedAssessment.comentarioClean || 'Sem comentário registrado.'}
                </div>
              </div>

              {selectedAssessment.criterios.length > 0 && (
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '6px' }}>
                    Critérios de Mérito Avaliados:
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {selectedAssessment.criterios.map((c, i) => (
                      <span key={i} style={{ backgroundColor: '#FAF5FF', color: '#7E22CE', fontSize: '12px', padding: '4px 10px', borderRadius: '6px', fontFamily: 'monospace', border: '1px solid #E9D5FF' }}>
                        Critério #{i + 1}: {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button
                onClick={() => {
                  setSelectedAssessment(null)
                  handleGoToSubmission(selectedAssessment)
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
                onClick={() => setSelectedAssessment(null)}
                style={{
                  backgroundColor: '#7E22CE',
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

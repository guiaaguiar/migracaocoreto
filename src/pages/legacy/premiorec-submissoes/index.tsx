import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import ProgramNavigationHeader from '../../../components/ProgramNavigationHeader'
import UnifiedSubmissionModal, { type SubmissionData, type EvaluationItem } from '../../../components/UnifiedSubmissionModal'
import {
  PREMIO_REC_SUBMISSIONS,
  ASSESSMENTS_FASE_1,
  ASSESSMENTS_FASE_2,
  exportToCSV
} from '../../../data/premioRecData'
import type { PremioRecSubmission } from '../../../data/premioRecData'


export default function PremioRecSubmissoesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedEixo, setSelectedEixo] = useState<string>('todos')
  const [selectedFase, setSelectedFase] = useState<string>('todos')
  const [selectedSubmission, setSelectedSubmission] = useState<PremioRecSubmission | null>(null)
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards')

  // Read URL query params on load or change to auto-open popup
  useEffect(() => {
    const selectedId = searchParams.get('selectedId') || searchParams.get('id')
    const submissionTitle = searchParams.get('title') || searchParams.get('submission')

    if (selectedId) {
      const found = PREMIO_REC_SUBMISSIONS.find(s => s.id.toLowerCase() === selectedId.toLowerCase())
      if (found) setSelectedSubmission(found)
    } else if (submissionTitle) {
      const norm = submissionTitle.toLowerCase().trim()
      const found = PREMIO_REC_SUBMISSIONS.find(
        s => s.title.toLowerCase().includes(norm) || norm.includes(s.title.toLowerCase())
      )
      if (found) setSelectedSubmission(found)
    }
  }, [searchParams])

  // Unique Eixos
  const eixosList = useMemo(() => {
    const set = new Set(PREMIO_REC_SUBMISSIONS.map(s => s.eixo).filter(Boolean))
    return ['todos', ...Array.from(set)]
  }, [])

  // Filter submissions
  const filteredSubmissions = useMemo(() => {
    return PREMIO_REC_SUBMISSIONS.filter(sub => {
      // Search term
      const matchesSearch =
        !searchTerm ||
        sub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.eixo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.categoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.q11Clean.toLowerCase().includes(searchTerm.toLowerCase())

      // Eixo filter
      const matchesEixo = selectedEixo === 'todos' || sub.eixo === selectedEixo

      // Fase filter
      let matchesFase = true
      if (selectedFase === 'fase1') matchesFase = sub.primeiraFase === true
      else if (selectedFase === 'fase2') matchesFase = sub.segundaFase === true
      else if (selectedFase === 'duplicadas') matchesFase = sub.duplicada === true
      else if (selectedFase === 'avaliadas') matchesFase = sub.assessmentFase1Ids.length > 0 || sub.assessmentFase2Ids.length > 0

      return matchesSearch && matchesEixo && matchesFase
    })
  }, [searchTerm, selectedEixo, selectedFase])

  // Metrics
  const totalSubmissoes = PREMIO_REC_SUBMISSIONS.length
  const totalFase1 = PREMIO_REC_SUBMISSIONS.filter(s => s.primeiraFase).length
  const totalFase2 = PREMIO_REC_SUBMISSIONS.filter(s => s.segundaFase).length
  const totalAvaliadas = PREMIO_REC_SUBMISSIONS.filter(s => s.assessmentFase1Ids.length > 0 || s.assessmentFase2Ids.length > 0).length

  // CSV column mapping
  const csvColumnMap = {
    id: 'ID',
    title: 'Título da Proposta',
    eixo: 'Eixo Temático',
    categoria: 'Categoria',
    primeiraFase: 'Classificado 1ª Fase',
    segundaFase: 'Classificado 2ª Fase',
    duplicada: 'Duplicada',
    q10: 'Q10 (Categoria Declarada)',
    q11Clean: 'Q11 (Problema e Solução)',
    q12Clean: 'Q12 (Entregas e Resultados)',
    q13Clean: 'Q13 (Escalabilidade)',
    slug: 'Slug'
  }

  const handleOpenDetails = (sub: PremioRecSubmission) => {
    setSelectedSubmission(sub)
    setSearchParams({ selectedId: sub.id })
  }

  const handleCloseDetails = () => {
    setSelectedSubmission(null)
    setSearchParams({})
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F8FAFC', fontFamily: "'DM Sans', sans-serif" }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar activeItem="painel" />
        <main style={{ flex: 1, padding: '32px', maxWidth: '1320px', width: '100%', margin: '0 auto' }}>

          {/* ── Sub-Navigation Bar between Programs & Dashboards ── */}
          <ProgramNavigationHeader currentProgramId="premiorec" activeTab="submissions" />

          {/* ── Top Hero Card (Dashboard Submissões Prêmio Recife) ── */}
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              padding: '36px 40px',
              color: '#FFFFFF',
              background: 'linear-gradient(135deg, #022340 0%, #004d80 50%, #0077b6 100%)',
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
                <span style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#38bdf8', display: 'block', marginBottom: '6px' }}>
                  Painel Oficial • Prêmio Recife de Inovação
                </span>
                <h1 style={{ fontSize: '32px', fontWeight: 900, margin: 0, letterSpacing: '-0.02em' }}>
                  Submissões do Prêmio Rec
                </h1>
                <p style={{ fontSize: '15px', color: '#E2E8F0', margin: '8px 0 0 0', maxWidth: '650px', lineHeight: 1.5 }}>
                  Consulte todas as propostas submetidas, filtre por eixos temáticos e fases de classificação, e visualize os pareceres de avaliação vinculados.
                </p>
              </div>

              {/* Header Action: Export CSV */}
              <button
                onClick={() => exportToCSV('submissoes_premio_recife_todas', filteredSubmissions, csvColumnMap)}
                style={{
                  backgroundColor: '#00a8b5',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '30px',
                  padding: '12px 24px',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 12px rgba(0, 168, 181, 0.3)',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <span>Exportar ({filteredSubmissions.length}) CSV</span>
              </button>
            </div>

            {/* 4 Counter Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {totalSubmissoes}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#00a8b5' }}>
                  Total Submissões
                </div>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {totalFase1}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#0284c7' }}>
                  Classificadas 1ª Fase
                </div>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {totalFase2}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#10b981' }}>
                  Classificadas 2ª Fase
                </div>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {totalAvaliadas}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#8b5cf6' }}>
                  Com Avaliações
                </div>
              </div>
            </div>
          </div>

          {/* ── Filters and Search Bar Section ── */}
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '24px', border: '1px solid #E2E8F0', marginBottom: '28px', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Search input and View Mode toggle */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ position: 'relative', flex: 1 }}>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Pesquisar por título, ID, categoria, palavras do problema ou solução..."
                    style={{
                      width: '100%',
                      padding: '14px 16px 14px 44px',
                      borderRadius: '10px',
                      border: '1.5px solid #00a8b5',
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
                    stroke="#00a8b5"
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
                      backgroundColor: viewMode === 'cards' ? '#00a8b5' : '#FFFFFF',
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
                      backgroundColor: viewMode === 'table' ? '#00a8b5' : '#FFFFFF',
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

              {/* Filter Pills: Eixos and Phases */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#64748B', marginRight: '4px' }}>
                  Fases:
                </span>
                {[
                  { id: 'todos', label: 'Todas' },
                  { id: 'fase1', label: '1ª Fase Classificadas' },
                  { id: 'fase2', label: '2ª Fase Finalistas' },
                  { id: 'avaliadas', label: 'Com Avaliações' },
                  { id: 'duplicadas', label: 'Duplicadas' },
                ].map(f => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFase(f.id)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: selectedFase === f.id ? 700 : 500,
                      backgroundColor: selectedFase === f.id ? '#00a8b5' : '#F1F5F9',
                      color: selectedFase === f.id ? '#FFFFFF' : '#334155',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#64748B', marginRight: '4px' }}>
                  Eixos:
                </span>
                {eixosList.map(eixo => (
                  <button
                    key={eixo}
                    onClick={() => setSelectedEixo(eixo)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: selectedEixo === eixo ? 700 : 500,
                      backgroundColor: selectedEixo === eixo ? '#0284c7' : '#F1F5F9',
                      color: selectedEixo === eixo ? '#FFFFFF' : '#334155',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {eixo === 'todos' ? 'Todos os Eixos' : eixo}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Submissions Listing ── */}
          <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A' }}>
              Exibindo <strong style={{ color: '#00a8b5' }}>{filteredSubmissions.length}</strong> de {totalSubmissoes} submissões
            </span>
          </div>

          {filteredSubmissions.length === 0 ? (
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '48px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>🔍</div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', margin: '0 0 8px 0' }}>
                Nenhuma submissão encontrada
              </h3>
              <p style={{ fontSize: '14px', color: '#64748B', margin: '0 0 20px 0' }}>
                Tente ajustar os termos de pesquisa ou remover os filtros aplicados.
              </p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedEixo('todos'); setSelectedFase('todos'); }}
                style={{
                  backgroundColor: '#00a8b5',
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
            /* ── Grid of Cards ── */
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '20px' }}>
              {filteredSubmissions.map(sub => (
                <div
                  key={sub.id}
                  onClick={() => handleOpenDetails(sub)}
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
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 168, 181, 0.12)'
                    e.currentTarget.style.borderColor = '#00a8b5'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)'
                    e.currentTarget.style.borderColor = '#E2E8F0'
                  }}
                >
                  <div>
                    {/* Badges Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', gap: '8px', flexWrap: 'wrap' }}>
                      <span style={{ backgroundColor: '#F1F5F9', color: '#475569', fontSize: '11px', fontWeight: 800, padding: '4px 10px', borderRadius: '12px' }}>
                        {sub.id}
                      </span>

                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {sub.primeiraFase && (
                          <span style={{ backgroundColor: '#E0F2FE', color: '#0284C7', fontSize: '11px', fontWeight: 700, padding: '4px 8px', borderRadius: '12px' }}>
                            1ª Fase
                          </span>
                        )}
                        {sub.segundaFase && (
                          <span style={{ backgroundColor: '#DCFCE7', color: '#16A34A', fontSize: '11px', fontWeight: 700, padding: '4px 8px', borderRadius: '12px' }}>
                            2ª Fase
                          </span>
                        )}
                        {sub.duplicada && (
                          <span style={{ backgroundColor: '#FEE2E2', color: '#DC2626', fontSize: '11px', fontWeight: 700, padding: '4px 8px', borderRadius: '12px' }}>
                            Duplicada
                          </span>
                        )}
                      </div>
                    </div>

                    {/* 1. Nome do Projeto / Solução (sw_nome) */}
                    <div style={{ marginBottom: '8px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: '#00a8b5', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '2px' }}>
                        💡 Projeto / Iniciativa (sw_nome):
                      </span>
                      <h3 style={{ fontSize: '17px', fontWeight: 900, color: '#0F172A', margin: 0, lineHeight: 1.35 }}>
                        {sub.sw_nome || sub.title}
                      </h3>
                    </div>

                    {/* 2. Quem Submeteu (pf_nome / Resp_nome) & Empresa (Nome_fantasia) */}
                    <div style={{ backgroundColor: '#F8FAFC', padding: '10px 12px', borderRadius: '8px', border: '1px solid #E2E8F0', marginBottom: '12px' }}>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>👤</span>
                        <span><strong>Quem submeteu:</strong> {sub.pf_nome || sub.Resp_nome || sub.q10}</span>
                      </div>
                      <div style={{ fontSize: '12px', color: '#475569', marginTop: '3px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>🏢</span>
                        <span><strong>Empresa / Startup:</strong> {sub.Nome_fantasia || sub.categoria}</span>
                      </div>
                      <div style={{ fontSize: '12px', color: '#00a8b5', marginTop: '4px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>🏷️</span>
                        <span>Eixo: {sub.eixo} {sub.categoria && sub.categoria !== sub.eixo ? `• Cat: ${sub.categoria}` : ''}</span>
                      </div>
                    </div>

                    {/* Resumo snippet */}
                    {sub.q11Clean && (
                      <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5, margin: '0 0 16px 0', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {sub.q11Clean}
                      </p>
                    )}
                  </div>

                  {/* Footer with Assessment Count and Button */}
                  <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px', marginTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '12px', fontSize: '12px', color: '#64748B' }}>
                      <span>🔍 F1: <strong>{sub.assessmentFase1Ids.length}</strong></span>
                      <span>🏆 F2: <strong>{sub.assessmentFase2Ids.length}</strong></span>
                    </div>

                    <button
                      onClick={e => {
                        e.stopPropagation()
                        handleOpenDetails(sub)
                      }}
                      style={{
                        backgroundColor: '#00a8b5',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '20px',
                        padding: '8px 18px',
                        fontSize: '13px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 2px 4px rgba(0, 168, 181, 0.2)',
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
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '35%' }}>Título da Proposta</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '20%' }}>Eixo</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '15%' }}>Status</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '10%' }}>Avaliações</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', textAlign: 'right', width: '10%' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSubmissions.map(sub => (
                    <tr
                      key={sub.id}
                      style={{ borderBottom: '1px solid #F1F5F9', cursor: 'pointer' }}
                      onClick={() => handleOpenDetails(sub)}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#F8FAFC')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#FFFFFF')}
                    >
                      <td style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#64748B' }}>{sub.id}</td>
                      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#0F172A', fontWeight: 600 }}>{sub.title}</td>
                      <td style={{ padding: '16px 20px', fontSize: '13px', color: '#00a8b5', fontWeight: 600 }}>{sub.eixo}</td>
                      <td style={{ padding: '16px 20px' }}>
                        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                          {sub.primeiraFase && <span style={{ backgroundColor: '#E0F2FE', color: '#0284C7', fontSize: '11px', fontWeight: 700, padding: '2px 6px', borderRadius: '10px' }}>1ª Fase</span>}
                          {sub.segundaFase && <span style={{ backgroundColor: '#DCFCE7', color: '#16A34A', fontSize: '11px', fontWeight: 700, padding: '2px 6px', borderRadius: '10px' }}>2ª Fase</span>}
                        </div>
                      </td>
                      <td style={{ padding: '16px 20px', fontSize: '13px', color: '#475569' }}>
                        {sub.assessmentFase1Ids.length + sub.assessmentFase2Ids.length} ({sub.assessmentFase1Ids.length} F1 / {sub.assessmentFase2Ids.length} F2)
                      </td>
                      <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                        <button
                          onClick={e => {
                            e.stopPropagation()
                            handleOpenDetails(sub)
                          }}
                          style={{
                            backgroundColor: '#00a8b5',
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

      {/* ── MODAL UNIVERSAL "VER DETALHES DA SUBMISSÃO" (PADRÃO BUBBLE BO) ── */}
      {selectedSubmission && (
        <UnifiedSubmissionModal
          submission={mapPremioRecToSubmissionData(selectedSubmission)}
          onClose={handleCloseDetails}
        />
      )}
    </div>
  )
}

function mapPremioRecToSubmissionData(sub: PremioRecSubmission): SubmissionData {
  // Avaliações correlacionadas (Fase 1 e Fase 2)
  const evals: EvaluationItem[] = []

  // Fase 1
  sub.assessmentFase1Ids.forEach(f1Id => {
    const a1 = ASSESSMENTS_FASE_1.find(a => a.id === f1Id)
    if (a1) {
      evals.push({
        id: a1.id,
        phase: '1ª Fase (Classificação)',
        evaluatorName: a1.mentor,
        score: a1.result,
        comment: a1.comentarioClean || a1.comentario,
        criteriaScores: a1.criterios && a1.valuesCritereas ? a1.criterios.map((crit, idx) => ({
          name: crit,
          score: a1.valuesCritereas[idx] || '-'
        })) : []
      })
    }
  })

  // Fase 2
  sub.assessmentFase2Ids.forEach(f2Id => {
    const a2 = ASSESSMENTS_FASE_2.find(a => a.id === f2Id)
    if (a2) {
      evals.push({
        id: a2.id,
        phase: '2ª Fase (Finalistas)',
        evaluatorName: a2.mentor,
        score: a2.result,
        comment: a2.comentarioClean || a2.comentario,
        criteriaScores: a2.criterios && a2.valuesCritereas ? a2.criterios.map((crit, idx) => ({
          name: crit,
          score: a2.valuesCritereas[idx] || '-'
        })) : []
      })
    }
  })

  // Links encontrados nos textos
  const allText = `${sub.q11 || ''} ${sub.q12 || ''} ${sub.q13 || ''}`
  const linksFound: string[] = []
  const linkRegex = /(https?:\/\/[^\s\)\],]+)/gi
  let match
  while ((match = linkRegex.exec(allText)) !== null) {
    if (!linksFound.includes(match[1])) {
      linksFound.push(match[1])
    }
  }

  // Materiais complementares / Anexos
  const attachments: string[] = []
  const isFejepe = sub.title.toLowerCase().includes('fejepe') || sub.q11?.includes('FEJEPE') || sub.id === 'prem_rec_0008' || sub.id === 'prem_rec_0164'
  if (isFejepe || sub.id === 'prem_rec_0008') {
    attachments.push('%5BFEJEPE%5D%20Apresenta%C3%A7%C3%A3o%20Institucional.pdf')
    attachments.push('Hoje%2C%20o%20MEJ%20Pernambucano%20virou%20Bom%20Dia%20Pernambuco%20FEJEPE.mp4')
  }

  return {
    id: sub.id,
    programName: 'Prêmio Recife de Inovação',
    title: sub.sw_nome || sub.title,
    organization: sub.Nome_fantasia || sub.categoria,
    city: 'Recife',
    state: 'PE',
    email: isFejepe ? 'hellen.gouveia@fejepe.org.br' : (sub.Resp_nome && sub.Resp_nome.includes('@') ? sub.Resp_nome : `${sub.id}@coreto.recife.pe.gov.br`),
    responsibleName: isFejepe ? 'Hellen Gouveia Rodrigues de Melo' : (sub.pf_nome || sub.Resp_nome || sub.q10),
    phone: isFejepe ? '87999177721' : '(81) 98800-0000',
    socialLink: isFejepe ? 'instagram.com/mejpernambucano/' : 'instagram.com/iniciativa',
    foundedYear: isFejepe ? '1998' : '2021',
    category: sub.categoria || sub.q10 || sub.eixo,
    description: sub.q11,
    helpDescription: 'Explique de forma clara como sua solução endereça diretamente o desafio público selecionado. Aponte a dor central, os objetivos da proposta e o impacto esperado. Use dados e evidências do problema identificado.',
    criteriaAnswers: [
      {
        title: 'Resultados',
        helpText: 'Apresente os principais resultados obtidos ou esperados, entregas já realizadas e métricas de validação.',
        content: sub.q12 || 'Não informado.'
      },
      {
        title: 'Replicabilidade e Potencial de Escala',
        helpText: 'Explique a capacidade da iniciativa de ser expandida, adaptada ou reproduzida em outros contextos, públicos ou territórios, destacando evidências de escalabilidade e impacto de médio e longo prazo.',
        content: sub.q13 || 'Não informado.'
      },
      {
        title: 'Foco nas Pessoas, Território e Ecossistema',
        helpText: 'Apresente como a iniciativa coloca as pessoas no centro, gera benefícios sociais mais amplos, fortalece o ecossistema de inovação e se conecta a desafios contemporâneos de relevância global.',
        content: sub.q12 || sub.q11 || 'Não informado.'
      },
      {
        title: 'Grau de Disrupção',
        helpText: 'Explique em que medida a iniciativa é original, quais soluções inéditas ou melhorias significativas ela propõe em relação ao que já existe, e como contribui para introduzir novas formas de pensamento, ação e interação.',
        content: sub.q11 || 'Não informado.'
      }
    ],
    attachments: attachments,
    links: linksFound,
    evaluations: evals,
    primeiraFase: sub.primeiraFase,
    segundaFase: sub.segundaFase,
    duplicada: sub.duplicada,
    slug: sub.slug,
    rawBackendData: sub
  }
}


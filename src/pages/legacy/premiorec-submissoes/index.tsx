import { useState, useEffect, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
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
                backgroundColor: '#00a8b5',
                color: '#FFFFFF',
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(0, 168, 181, 0.25)',
              }}
            >
              <span>📋 Submissões ({totalSubmissoes})</span>
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
                backgroundColor: '#FFFFFF',
                color: '#475569',
                border: '1px solid #CBD5E1',
                textDecoration: 'none',
              }}
            >
              <span>🏆 Avaliações 2ª Fase (266)</span>
            </Link>
          </div>

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

                    {/* Title */}
                    <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0F172A', margin: '0 0 10px 0', lineHeight: 1.35 }}>
                      {sub.title}
                    </h3>

                    {/* Eixo & Categoria */}
                    <div style={{ marginBottom: '14px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div style={{ fontSize: '13px', color: '#00a8b5', fontWeight: 700 }}>
                        {sub.eixo}
                      </div>
                      {sub.categoria && sub.categoria !== sub.eixo && (
                        <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 600 }}>
                          Cat: {sub.categoria}
                        </div>
                      )}
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

      {/* ── MODAL "VER DETALHES DA SUBMISSÃO" ── */}
      {selectedSubmission && (
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
          onClick={handleCloseDetails}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              maxWidth: '920px',
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
              onClick={handleCloseDetails}
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

            {/* Top Bar: Export Individual CSV */}
            <button
              onClick={() => exportToCSV(`submissao_${selectedSubmission.id}`, [selectedSubmission], csvColumnMap)}
              style={{
                width: '100%',
                border: '1.5px solid #00a8b5',
                borderRadius: '8px',
                padding: '14px',
                backgroundColor: '#FFFFFF',
                color: '#00a8b5',
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
              <span>Exportar Dados da Proposta em CSV</span>
            </button>

            {/* Modal Title */}
            <div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ backgroundColor: '#0284c7', color: '#FFFFFF', fontSize: '12px', fontWeight: 800, padding: '4px 10px', borderRadius: '6px' }}>
                  {selectedSubmission.id}
                </span>
                <span style={{ fontSize: '14px', color: '#64748B', fontWeight: 600 }}>
                  Slug: {selectedSubmission.slug}
                </span>
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0F172A', margin: '0 0 12px 0', lineHeight: 1.3 }}>
                {selectedSubmission.title}
              </h2>
            </div>

            {/* ── Section: Identificação da Proposta ── */}
            <div style={{ backgroundColor: '#F8FAFC', borderRadius: '12px', padding: '20px', border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0B4F8C', margin: '0 0 16px 0' }}>
                📌 Identificação e Classificação
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', display: 'block', marginBottom: '4px' }}>
                    Eixo Temático:
                  </label>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#00a8b5' }}>
                    {selectedSubmission.eixo}
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', display: 'block', marginBottom: '4px' }}>
                    Categoria Declarada (Q10):
                  </label>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#334155' }}>
                    {selectedSubmission.categoria || '-'}
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', display: 'block', marginBottom: '4px' }}>
                    Classificação 1ª Fase:
                  </label>
                  <span style={{ backgroundColor: selectedSubmission.primeiraFase ? '#DCFCE7' : '#F1F5F9', color: selectedSubmission.primeiraFase ? '#16A34A' : '#64748B', fontSize: '13px', fontWeight: 700, padding: '4px 10px', borderRadius: '8px' }}>
                    {selectedSubmission.primeiraFase ? 'Sim (Classificada)' : 'Não'}
                  </span>
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', display: 'block', marginBottom: '4px' }}>
                    Classificação 2ª Fase:
                  </label>
                  <span style={{ backgroundColor: selectedSubmission.segundaFase ? '#DCFCE7' : '#F1F5F9', color: selectedSubmission.segundaFase ? '#16A34A' : '#64748B', fontSize: '13px', fontWeight: 700, padding: '4px 10px', borderRadius: '8px' }}>
                    {selectedSubmission.segundaFase ? 'Sim (Finalista)' : 'Não'}
                  </span>
                </div>
              </div>
            </div>

            {/* ── Section: Q11 - Problema e Solução ── */}
            <div>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0B4F8C', margin: '0 0 10px 0' }}>
                💡 1. Problema e Solução Proposta (Q11)
              </h3>
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid #00a8b5',
                  borderRadius: '10px',
                  padding: '16px 20px',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  color: '#1E293B',
                  whiteSpace: 'pre-line',
                }}
              >
                {selectedSubmission.q11Clean || 'Não preenchido.'}
              </div>
            </div>

            {/* ── Section: Q12 - Resultados Esperados ── */}
            {selectedSubmission.q12Clean && (
              <div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0B4F8C', margin: '0 0 10px 0' }}>
                  📈 2. Resultados Esperados, Entregas e Validação (Q12)
                </h3>
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1.5px solid #00a8b5',
                    borderRadius: '10px',
                    padding: '16px 20px',
                    fontSize: '14px',
                    lineHeight: 1.7,
                    color: '#1E293B',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {selectedSubmission.q12Clean}
                </div>
              </div>
            )}

            {/* ── Section: Q13 - Escalabilidade ── */}
            {selectedSubmission.q13Clean && (
              <div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0B4F8C', margin: '0 0 10px 0' }}>
                  🚀 3. Escalabilidade e Replicabilidade (Q13)
                </h3>
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1.5px solid #00a8b5',
                    borderRadius: '10px',
                    padding: '16px 20px',
                    fontSize: '14px',
                    lineHeight: 1.7,
                    color: '#1E293B',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {selectedSubmission.q13Clean}
                </div>
              </div>
            )}

            {/* ── Section: Avaliações Vinculadas da 1ª Fase ── */}
            {selectedSubmission.assessmentFase1Ids.length > 0 && (
              <div style={{ backgroundColor: '#F0FDF4', borderRadius: '12px', padding: '20px', border: '1px solid #BBF7D0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#166534', margin: 0 }}>
                    🔍 Avaliações Recebidas na 1ª Fase ({selectedSubmission.assessmentFase1Ids.length})
                  </h3>
                  <Link
                    to={`/legacy/premiorec-avaliacoes-fase1?search=${encodeURIComponent(selectedSubmission.title)}`}
                    style={{ fontSize: '13px', fontWeight: 700, color: '#15803D', textDecoration: 'none' }}
                  >
                    Ver na página da 1ª Fase →
                  </Link>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {selectedSubmission.assessmentFase1Ids.map(f1Id => {
                    const f1 = ASSESSMENTS_FASE_1.find(a => a.id === f1Id)
                    if (!f1) return null
                    return (
                      <div key={f1.id} style={{ backgroundColor: '#FFFFFF', borderRadius: '8px', padding: '14px 16px', border: '1px solid #DCFCE7' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                          <span style={{ fontSize: '13px', fontWeight: 700, color: '#15803D' }}>
                            👤 Mentor: {f1.mentor}
                          </span>
                          <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>{f1.id}</span>
                        </div>
                        <p style={{ fontSize: '13px', color: '#334155', margin: 0, lineHeight: 1.5 }}>
                          {f1.comentarioClean || 'Sem comentário adicional.'}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* ── Section: Avaliações Vinculadas da 2ª Fase ── */}
            {selectedSubmission.assessmentFase2Ids.length > 0 && (
              <div style={{ backgroundColor: '#FAF5FF', borderRadius: '12px', padding: '20px', border: '1px solid #E9D5FF' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#6B21A8', margin: 0 }}>
                    🏆 Avaliações Recebidas na 2ª Fase ({selectedSubmission.assessmentFase2Ids.length})
                  </h3>
                  <Link
                    to={`/legacy/premiorec-avaliacoes-fase2?search=${encodeURIComponent(selectedSubmission.title)}`}
                    style={{ fontSize: '13px', fontWeight: 700, color: '#7E22CE', textDecoration: 'none' }}
                  >
                    Ver na página da 2ª Fase →
                  </Link>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {selectedSubmission.assessmentFase2Ids.map(f2Id => {
                    const f2 = ASSESSMENTS_FASE_2.find(a => a.id === f2Id)
                    if (!f2) return null
                    return (
                      <div key={f2.id} style={{ backgroundColor: '#FFFFFF', borderRadius: '8px', padding: '14px 16px', border: '1px solid #F3E8FF' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                          <span style={{ fontSize: '13px', fontWeight: 700, color: '#7E22CE' }}>
                            👤 Mentor: {f2.mentor}
                          </span>
                          {f2.result !== null && (
                            <span style={{ backgroundColor: '#7E22CE', color: '#FFFFFF', fontSize: '12px', fontWeight: 800, padding: '3px 10px', borderRadius: '12px' }}>
                              Nota: {f2.result.toFixed(2)} ⭐️
                            </span>
                          )}
                        </div>
                        <p style={{ fontSize: '13px', color: '#334155', margin: 0, lineHeight: 1.5 }}>
                          {f2.comentarioClean || 'Sem comentário adicional.'}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Bottom Close Button */}
            <div style={{ marginTop: '12px', textAlign: 'right' }}>
              <button
                onClick={handleCloseDetails}
                style={{
                  backgroundColor: '#00a8b5',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px 32px',
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

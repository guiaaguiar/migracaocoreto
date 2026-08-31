import { useState, useEffect, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import {
  SWC_SUBMISSIONS,
  SWC_BUSCANDO_INVESTIMENTO,
  SWC_BOOTSTRAP_EXPANSAO,
  SWC_RECIFE,
  SWC_DEMAIS_REGIOES,
  exportToCSV
} from '../../../data/swcData'
import type { StartupWorldCupSubmission } from '../../../data/swcData'

export default function StartupWorldCupInscricoesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState<'todos' | 'investimento' | 'bootstrap' | 'recife' | 'outros'>('todos')
  const [selectedSegmento, setSelectedSegmento] = useState<string>('todos')
  const [selectedCity, setSelectedCity] = useState<string>('todas')
  const [selectedSubmission, setSelectedSubmission] = useState<StartupWorldCupSubmission | null>(null)
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards')

  // URL query parameter sync (?selectedId=prop_wc_001 or ?submission=... or ?filter=...)
  useEffect(() => {
    const selectedIdParam = searchParams.get('selectedId')
    const submissionParam = searchParams.get('submission') || searchParams.get('startup') || searchParams.get('founder')
    const filterParam = searchParams.get('filter')

    if (filterParam && ['todos', 'investimento', 'bootstrap', 'recife', 'outros'].includes(filterParam)) {
      setSelectedFilter(filterParam as any)
    }

    if (selectedIdParam) {
      const found = SWC_SUBMISSIONS.find(s => s.id.toLowerCase() === selectedIdParam.toLowerCase())
      if (found) {
        setSelectedSubmission(found)
        return
      }
    }

    if (submissionParam) {
      const decoded = decodeURIComponent(submissionParam).trim()
      const lowerDecoded = decoded.toLowerCase()
      setSearchTerm(decoded)
      const found = SWC_SUBMISSIONS.find(
        s =>
          s.startupName.toLowerCase().includes(lowerDecoded) ||
          s.founderName.toLowerCase().includes(lowerDecoded) ||
          s.id.toLowerCase() === lowerDecoded ||
          s.email.toLowerCase().includes(lowerDecoded) ||
          s.segmento.toLowerCase().includes(lowerDecoded) ||
          s.cidade.toLowerCase().includes(lowerDecoded) ||
          s.cnpj.includes(decoded) ||
          s.cnpjRaw.includes(decoded)
      )
      if (found) {
        setSelectedSubmission(found)
      }
    }
  }, [searchParams])

  // Segment list for filter pills
  const segmentosList = useMemo(() => {
    const segmentos = Array.from(new Set(SWC_SUBMISSIONS.map(s => s.segmento)))
    return ['todos', ...segmentos]
  }, [])

  // City list for filter pills
  const citiesList = useMemo(() => {
    const counts: Record<string, number> = {}
    SWC_SUBMISSIONS.forEach(s => {
      counts[s.cidade] = (counts[s.cidade] || 0) + 1
    })
    const sorted = Object.keys(counts).sort((a, b) => counts[b] - counts[a])
    return ['todas', ...sorted]
  }, [])

  // Filter submissions
  const filteredSubmissions = useMemo(() => {
    return SWC_SUBMISSIONS.filter(sub => {
      const matchesSearch =
        !searchTerm ||
        sub.startupName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.founderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.cidade.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.estado.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.segmento.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.cargo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.cnpj.includes(searchTerm) ||
        sub.cnpjRaw.includes(searchTerm)

      let matchesFilter = true
      if (selectedFilter === 'investimento') matchesFilter = sub.buscandoInvestimento
      else if (selectedFilter === 'bootstrap') matchesFilter = !sub.buscandoInvestimento
      else if (selectedFilter === 'recife') matchesFilter = sub.cidade === 'Recife'
      else if (selectedFilter === 'outros') matchesFilter = sub.cidade !== 'Recife'

      const matchesSegmento = selectedSegmento === 'todos' || sub.segmento === selectedSegmento
      const matchesCity = selectedCity === 'todas' || sub.cidade === selectedCity

      return matchesSearch && matchesFilter && matchesSegmento && matchesCity
    })
  }, [searchTerm, selectedFilter, selectedSegmento, selectedCity])

  // Metrics
  const totalStartups = SWC_SUBMISSIONS.length
  const totalInvestimento = SWC_BUSCANDO_INVESTIMENTO.length
  const totalBootstrap = SWC_BOOTSTRAP_EXPANSAO.length
  const totalRecife = SWC_RECIFE.length
  const totalDemais = SWC_DEMAIS_REGIOES.length

  const totalEstados = useMemo(() => {
    return new Set(SWC_SUBMISSIONS.map(s => s.estado)).size
  }, [])

  const totalSegmentos = useMemo(() => {
    return new Set(SWC_SUBMISSIONS.map(s => s.segmento)).size
  }, [])

  // CSV column mapping
  const csvColumnMap = {
    id: 'ID da Proposta',
    edicaoName: 'Competição',
    startupName: 'Nome da Startup',
    founderName: 'Fundador(a) / Responsável',
    cargo: 'Cargo',
    email: 'E-mail de Contato',
    cnpj: 'CNPJ',
    cidade: 'Cidade',
    estado: 'Estado',
    segmento: 'Segmento / Vertical',
    estagio: 'Estágio de Maturidade',
    buscandoInvestimento: 'Buscando Investimento Anjo/VC',
    website: 'Website / Link',
    pitchDeckUrl: 'Link do Pitch Deck',
    descricao: 'Tese & Resumo do Pitch'
  }

  const handleOpenModal = (sub: StartupWorldCupSubmission) => {
    setSelectedSubmission(sub)
    setSearchParams({ selectedId: sub.id })
  }

  const handleCloseModal = () => {
    setSelectedSubmission(null)
    setSearchParams({})
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F8FAFC', fontFamily: "'DM Sans', sans-serif" }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar activeItem="painel" />
        <main style={{ flex: 1, padding: '32px', maxWidth: '1320px', width: '100%', margin: '0 auto' }}>

          {/* ── Sub-Navigation Tabs between SWC Filter Groups ── */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <button
              onClick={() => { setSelectedFilter('todos'); setSelectedSegmento('todos'); setSelectedCity('todas'); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 700,
                backgroundColor: selectedFilter === 'todos' ? '#7C3AED' : '#FFFFFF',
                color: selectedFilter === 'todos' ? '#FFFFFF' : '#475569',
                border: selectedFilter === 'todos' ? 'none' : '1px solid #CBD5E1',
                cursor: 'pointer',
                boxShadow: selectedFilter === 'todos' ? '0 2px 8px rgba(124, 58, 237, 0.3)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              <span>🚀 Todas as Startups ({totalStartups})</span>
            </button>

            <button
              onClick={() => { setSelectedFilter('investimento'); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 700,
                backgroundColor: selectedFilter === 'investimento' ? '#4F46E5' : '#FFFFFF',
                color: selectedFilter === 'investimento' ? '#FFFFFF' : '#475569',
                border: selectedFilter === 'investimento' ? 'none' : '1px solid #CBD5E1',
                cursor: 'pointer',
                boxShadow: selectedFilter === 'investimento' ? '0 2px 8px rgba(79, 70, 229, 0.3)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              <span>💰 Buscando Investimento ({totalInvestimento})</span>
            </button>

            <button
              onClick={() => { setSelectedFilter('bootstrap'); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 700,
                backgroundColor: selectedFilter === 'bootstrap' ? '#0284C7' : '#FFFFFF',
                color: selectedFilter === 'bootstrap' ? '#FFFFFF' : '#475569',
                border: selectedFilter === 'bootstrap' ? 'none' : '1px solid #CBD5E1',
                cursor: 'pointer',
                boxShadow: selectedFilter === 'bootstrap' ? '0 2px 8px rgba(2, 132, 199, 0.3)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              <span>⚡ Bootstrapping & Expansão ({totalBootstrap})</span>
            </button>

            <button
              onClick={() => { setSelectedFilter('recife'); setSelectedCity('Recife'); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 700,
                backgroundColor: selectedFilter === 'recife' ? '#0D9488' : '#FFFFFF',
                color: selectedFilter === 'recife' ? '#FFFFFF' : '#475569',
                border: selectedFilter === 'recife' ? 'none' : '1px solid #CBD5E1',
                cursor: 'pointer',
                boxShadow: selectedFilter === 'recife' ? '0 2px 8px rgba(13, 148, 136, 0.3)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              <span>📍 Recife ({totalRecife})</span>
            </button>

            <button
              onClick={() => { setSelectedFilter('outros'); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 700,
                backgroundColor: selectedFilter === 'outros' ? '#DB2777' : '#FFFFFF',
                color: selectedFilter === 'outros' ? '#FFFFFF' : '#475569',
                border: selectedFilter === 'outros' ? 'none' : '1px solid #CBD5E1',
                cursor: 'pointer',
                boxShadow: selectedFilter === 'outros' ? '0 2px 8px rgba(219, 39, 119, 0.3)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              <span>🌎 Demais Cidades / Estados ({totalDemais})</span>
            </button>

            <Link
              to="/legacy/startupworldcup"
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
                transition: 'all 0.15s ease',
              }}
            >
              <span>← Portal Oficial Startup World Cup</span>
            </Link>
          </div>

          {/* ── Top Hero Card ── */}
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              padding: '36px 40px',
              color: '#FFFFFF',
              background: 'linear-gradient(135deg, #09090b 0%, #1e1b4b 30%, #3730a3 65%, #6366f1 100%)',
              overflow: 'hidden',
              boxShadow: '0 10px 25px rgba(30, 27, 75, 0.25)',
              marginBottom: '32px',
            }}
          >
            {/* Decorative circles */}
            <div
              style={{
                position: 'absolute',
                top: '-40px',
                right: '10%',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                border: '40px solid rgba(255, 255, 255, 0.06)',
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
                border: '60px solid rgba(255, 255, 255, 0.04)',
                pointerEvents: 'none',
              }}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '28px' }}>
              <div>
                <span style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#A5B4FC', display: 'block', marginBottom: '6px' }}>
                  Painel de Gestão & Seletiva Regional • Pegasus Tech Ventures & Porto Digital
                </span>
                <h1 style={{ fontSize: '32px', fontWeight: 900, margin: 0, letterSpacing: '-0.02em' }}>
                  Inscrições Startup World Cup 2026
                </h1>
                <p style={{ fontSize: '15px', color: '#E0E7FF', margin: '8px 0 0 0', maxWidth: '700px', lineHeight: 1.5 }}>
                  Consulte todas as startups, fundadores, teses de negócio e propostas inscritas para a seletiva regional de Recife rumo ao aporte global de US$ 1.000.000 no Vale do Silício.
                </p>
              </div>

              {/* Export All CSV Button */}
              <button
                onClick={() => exportToCSV('inscricoes_startup_world_cup_recife', filteredSubmissions, csvColumnMap)}
                style={{
                  backgroundColor: '#7C3AED',
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
                  boxShadow: '0 4px 14px rgba(124, 58, 237, 0.4)',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s ease',
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
              <div
                onClick={() => { setSelectedFilter('todos'); setSelectedSegmento('todos'); setSelectedCity('todas'); }}
                style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', cursor: 'pointer' }}
              >
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {totalStartups}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#7C3AED' }}>
                  Total Startups Inscritas
                </div>
              </div>

              <div
                onClick={() => { setSelectedFilter('investimento'); }}
                style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', cursor: 'pointer' }}
              >
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {totalInvestimento}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#4F46E5' }}>
                  Buscando Investimento ({((totalInvestimento / totalStartups) * 100).toFixed(0)}%)
                </div>
              </div>

              <div
                onClick={() => { setSelectedFilter('recife'); setSelectedCity('Recife'); }}
                style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', cursor: 'pointer' }}
              >
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {totalRecife}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#0D9488' }}>
                  Recife & Porto Digital
                </div>
              </div>

              <div
                onClick={() => { setSelectedFilter('todos'); }}
                style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', cursor: 'pointer' }}
              >
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {totalEstados}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#DB2777' }}>
                  Estados ({totalSegmentos} Verticais)
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
                    placeholder="Pesquisar por startup, fundador, e-mail, CNPJ, segmento, estágio ou cidade..."
                    style={{
                      width: '100%',
                      padding: '14px 16px 14px 44px',
                      borderRadius: '10px',
                      border: '1.5px solid #7C3AED',
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
                    stroke="#7C3AED"
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
                      backgroundColor: viewMode === 'cards' ? '#7C3AED' : '#FFFFFF',
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
                      backgroundColor: viewMode === 'table' ? '#7C3AED' : '#FFFFFF',
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

              {/* Status / Perfil Filter Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#64748B', marginRight: '4px' }}>
                  Foco:
                </span>
                {[
                  { id: 'todos', label: 'Todas as Startups' },
                  { id: 'investimento', label: '💰 Buscando Investimento (14)' },
                  { id: 'bootstrap', label: '⚡ Bootstrapping & Expansão (9)' },
                  { id: 'recife', label: '📍 Polo Recife (15)' },
                  { id: 'outros', label: '🌎 Demais Cidades & Estados (8)' },
                ].map(flt => (
                  <button
                    key={flt.id}
                    onClick={() => setSelectedFilter(flt.id as any)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: selectedFilter === flt.id ? 700 : 500,
                      backgroundColor: selectedFilter === flt.id ? '#7C3AED' : '#F1F5F9',
                      color: selectedFilter === flt.id ? '#FFFFFF' : '#334155',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {flt.label}
                  </button>
                ))}
              </div>

              {/* Segmento Filter Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#64748B', marginRight: '4px' }}>
                  Vertical / Segmento:
                </span>
                {segmentosList.map(seg => (
                  <button
                    key={seg}
                    onClick={() => setSelectedSegmento(seg)}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '16px',
                      fontSize: '12px',
                      fontWeight: selectedSegmento === seg ? 700 : 500,
                      backgroundColor: selectedSegmento === seg ? '#4F46E5' : '#F8FAFC',
                      color: selectedSegmento === seg ? '#FFFFFF' : '#475569',
                      border: '1px solid #E2E8F0',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {seg === 'todos' ? 'Todas as Verticais' : seg}
                  </button>
                ))}
              </div>

              {/* City Filter Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#64748B', marginRight: '4px' }}>
                  Origem / Cidade:
                </span>
                {citiesList.map(ct => (
                  <button
                    key={ct}
                    onClick={() => setSelectedCity(ct)}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '16px',
                      fontSize: '12px',
                      fontWeight: selectedCity === ct ? 700 : 500,
                      backgroundColor: selectedCity === ct ? '#0D9488' : '#F8FAFC',
                      color: selectedCity === ct ? '#FFFFFF' : '#475569',
                      border: '1px solid #E2E8F0',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {ct === 'todas' ? 'Todas as Cidades' : ct}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Submissions Listing ── */}
          <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A' }}>
              Exibindo <strong style={{ color: '#7C3AED' }}>{filteredSubmissions.length}</strong> de {totalStartups} startups inscritas
            </span>
          </div>

          {filteredSubmissions.length === 0 ? (
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '48px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>🔍</div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', margin: '0 0 8px 0' }}>
                Nenhuma startup encontrada
              </h3>
              <p style={{ fontSize: '14px', color: '#64748B', margin: '0 0 20px 0' }}>
                Tente ajustar os filtros de segmento, cidade ou termos de busca.
              </p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedFilter('todos'); setSelectedSegmento('todos'); setSelectedCity('todas'); }}
                style={{
                  backgroundColor: '#7C3AED',
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
            /* ── Cards Grid (Assertive Database Display) ── */
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '20px' }}>
              {filteredSubmissions.map(sub => {
                return (
                  <div
                    key={sub.id}
                    onClick={() => handleOpenModal(sub)}
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
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(124, 58, 237, 0.15)'
                      e.currentTarget.style.borderColor = '#7C3AED'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)'
                      e.currentTarget.style.borderColor = '#E2E8F0'
                    }}
                  >
                    <div>
                      {/* Header Tags */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', gap: '8px' }}>
                        <span style={{ backgroundColor: '#F1F5F9', color: '#475569', fontSize: '11px', fontWeight: 800, padding: '4px 10px', borderRadius: '12px' }}>
                          {sub.id}
                        </span>
                        <span
                          style={{
                            backgroundColor: sub.buscandoInvestimento ? '#EEF2FF' : '#F0FDF4',
                            color: sub.buscandoInvestimento ? '#4F46E5' : '#16A34A',
                            border: `1px solid ${sub.buscandoInvestimento ? '#C7D2FE' : '#BBF7D0'}`,
                            fontSize: '11px',
                            fontWeight: 700,
                            padding: '4px 10px',
                            borderRadius: '12px'
                          }}
                        >
                          {sub.buscandoInvestimento ? '💰 Buscando Investimento' : '⚡ Em Expansão / Bootstrap'}
                        </span>
                      </div>

                      {/* Startup Name / Title */}
                      <div style={{ marginBottom: '8px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#6D28D9', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '2px' }}>
                          🚀 Startup Candidata:
                        </span>
                        <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#0F172A', margin: 0, lineHeight: 1.35 }}>
                          {sub.startupName}
                        </h3>
                      </div>

                      {/* Founder & Location Details Box */}
                      <div style={{ backgroundColor: '#F8FAFC', padding: '12px 14px', borderRadius: '8px', border: '1px solid #E2E8F0', marginBottom: '12px' }}>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span>👤</span>
                          <span><strong>Fundador(a):</strong> {sub.founderName} ({sub.cargo})</span>
                        </div>
                        <div style={{ fontSize: '12px', color: '#475569', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span>📍</span>
                          <span><strong>Origem:</strong> {sub.cidade} - {sub.estado}</span>
                        </div>
                        <div style={{ fontSize: '12px', color: '#6D28D9', marginTop: '4px', fontWeight: 700 }}>
                          🏷️ Vertical: {sub.segmento}
                        </div>
                        <div style={{ fontSize: '11px', color: '#047857', marginTop: '3px', fontWeight: 600 }}>
                          📄 CNPJ: {sub.cnpj}
                        </div>
                      </div>

                      {/* Pitch Summary Excerpt */}
                      <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5, margin: '0 0 16px 0', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {sub.descricao}
                      </p>
                    </div>

                    {/* Footer Stats and Action */}
                    <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        <span style={{ backgroundColor: '#F5F3FF', color: '#6D28D9', fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', border: '1px solid #DDD6FE' }}>
                          {sub.estagio}
                        </span>
                        {sub.website && (
                          <span style={{ backgroundColor: '#EFF6FF', color: '#1D4ED8', fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '6px' }}>
                            🔗 Web
                          </span>
                        )}
                      </div>

                      <button
                        onClick={e => {
                          e.stopPropagation()
                          handleOpenModal(sub)
                        }}
                        style={{
                          backgroundColor: '#7C3AED',
                          color: '#FFFFFF',
                          border: 'none',
                          borderRadius: '20px',
                          padding: '8px 18px',
                          fontSize: '13px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          boxShadow: '0 2px 4px rgba(124, 58, 237, 0.25)',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        Ver Detalhes
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
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '8%' }}>ID</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '28%' }}>Startup / Tese</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '25%' }}>Fundador & Contato</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '15%' }}>Local & Vertical</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '14%' }}>Investimento</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', textAlign: 'right', width: '10%' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSubmissions.map(sub => (
                    <tr
                      key={sub.id}
                      style={{ borderBottom: '1px solid #F1F5F9', cursor: 'pointer' }}
                      onClick={() => handleOpenModal(sub)}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#F8FAFC')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#FFFFFF')}
                    >
                      <td style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#64748B' }}>{sub.id}</td>
                      <td style={{ padding: '16px 20px', fontSize: '14px', fontWeight: 800, color: '#0F172A' }}>
                        <div>{sub.startupName}</div>
                        <div style={{ fontSize: '11px', color: '#6D28D9', fontWeight: 600, marginTop: '2px' }}>{sub.estagio}</div>
                      </td>
                      <td style={{ padding: '16px 20px', fontSize: '13px', color: '#334155' }}>
                        <div style={{ fontWeight: 700 }}>{sub.founderName}</div>
                        <div style={{ fontSize: '12px', color: '#64748B' }}>{sub.cargo} • {sub.email}</div>
                        <div style={{ fontSize: '11px', color: '#047857' }}>CNPJ: {sub.cnpj}</div>
                      </td>
                      <td style={{ padding: '16px 20px', fontSize: '13px', color: '#334155' }}>
                        <div style={{ fontWeight: 700 }}>📍 {sub.cidade} - {sub.estado}</div>
                        <div style={{ fontSize: '12px', color: '#6D28D9' }}>{sub.segmento}</div>
                      </td>
                      <td style={{ padding: '16px 20px', fontSize: '12px' }}>
                        <span style={{ color: sub.buscandoInvestimento ? '#4F46E5' : '#16A34A', fontWeight: 700 }}>
                          {sub.buscandoInvestimento ? '💰 Sim (Anjo/VC)' : '⚡ Expansão / Boot'}
                        </span>
                      </td>
                      <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                        <button
                          onClick={e => {
                            e.stopPropagation()
                            handleOpenModal(sub)
                          }}
                          style={{
                            backgroundColor: '#7C3AED',
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

      {/* ── MODAL "DETALHES DA INSCRIÇÃO STARTUP WORLD CUP" (Assertive Data) ── */}
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
          onClick={handleCloseModal}
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
              onClick={handleCloseModal}
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
              onClick={() => exportToCSV(`inscricao_swc_${selectedSubmission.id}`, [selectedSubmission], csvColumnMap)}
              style={{
                width: '100%',
                border: '1.5px solid #7C3AED',
                borderRadius: '8px',
                padding: '14px',
                backgroundColor: '#FFFFFF',
                color: '#6D28D9',
                fontSize: '15px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.15s ease',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <span>Exportar Dados da Startup em CSV</span>
            </button>

            {/* Modal Title & Identification */}
            <div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap' }}>
                <span style={{ backgroundColor: '#1E1B4B', color: '#FFFFFF', fontSize: '12px', fontWeight: 800, padding: '4px 10px', borderRadius: '6px' }}>
                  {selectedSubmission.id}
                </span>
                <span style={{ backgroundColor: '#F5F3FF', color: '#6D28D9', fontSize: '12px', fontWeight: 700, padding: '4px 10px', borderRadius: '6px' }}>
                  {selectedSubmission.edicaoName}
                </span>
                <span style={{ backgroundColor: '#EFF6FF', color: '#1D4ED8', fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '6px' }}>
                  {selectedSubmission.segmento}
                </span>
              </div>
              <h2 style={{ fontSize: '26px', fontWeight: 900, color: '#0F172A', margin: '0 0 12px 0', lineHeight: 1.3 }}>
                {selectedSubmission.startupName}
              </h2>

              {/* ── Submitter & Company Details Card ── */}
              <div style={{ backgroundColor: '#F8FAFC', borderRadius: '10px', padding: '16px 20px', border: '1px solid #E2E8F0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                    👤 Fundador(a) / Responsável:
                  </span>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A' }}>
                    {selectedSubmission.founderName} ({selectedSubmission.cargo})
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                    ✉️ E-mail de Contato:
                  </span>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#4F46E5' }}>
                    {selectedSubmission.email}
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                    📄 CNPJ Cadastrado:
                  </span>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#047857' }}>
                    {selectedSubmission.cnpj}
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                    📍 Localização:
                  </span>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#0D9488' }}>
                    {selectedSubmission.cidade} - {selectedSubmission.estado}
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                    📈 Estágio de Maturidade:
                  </span>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#6D28D9' }}>
                    {selectedSubmission.estagio}
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                    💰 Captação de Recursos:
                  </span>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: selectedSubmission.buscandoInvestimento ? '#4F46E5' : '#16A34A' }}>
                    {selectedSubmission.buscandoInvestimento ? 'Buscando Investimento Anjo / VC' : 'Bootstrapping / Recursos Próprios'}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Tese & Resumo do Pitch ── */}
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#6D28D9', margin: '0 0 10px 0', borderBottom: '2px solid #E2E8F0', paddingBottom: '6px' }}>
                💡 Tese de Negócios & Proposta de Valor
              </h3>
              <div style={{ backgroundColor: '#F8FAFC', padding: '16px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '14px', lineHeight: 1.7, color: '#1E293B' }}>
                {selectedSubmission.descricao}
              </div>
            </div>

            {/* ── Links & Pitch Deck ── */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {selectedSubmission.website && (
                <a
                  href={selectedSubmission.website}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 18px',
                    backgroundColor: '#F5F3FF',
                    border: '1px solid #DDD6FE',
                    borderRadius: '8px',
                    color: '#6D28D9',
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontWeight: 700,
                  }}
                >
                  <span>🌐 Website da Startup</span>
                  <span>↗</span>
                </a>
              )}

              {selectedSubmission.pitchDeckUrl && (
                <a
                  href={selectedSubmission.pitchDeckUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 18px',
                    backgroundColor: '#EEF2FF',
                    border: '1px solid #C7D2FE',
                    borderRadius: '8px',
                    color: '#4F46E5',
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontWeight: 700,
                  }}
                >
                  <span>📊 Pitch Deck Oficial (PDF)</span>
                  <span>↗</span>
                </a>
              )}
            </div>

            {/* ── Premiação & Banca Examinadora ── */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#6D28D9', margin: '0 0 8px 0' }}>
                  🏆 Premiação Regional & Silicon Valley
                </h4>
                <div style={{ backgroundColor: '#F8FAFC', padding: '12px 14px', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '13px', color: '#334155' }}>
                  <ul style={{ margin: 0, paddingLeft: '18px', lineHeight: 1.6 }}>
                    {selectedSubmission.premios.map((p, idx) => (
                      <li key={idx}><strong>{p}</strong></li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#6D28D9', margin: '0 0 8px 0' }}>
                  👥 Banca Examinadora & Investidores
                </h4>
                <div style={{ backgroundColor: '#F8FAFC', padding: '12px 14px', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '12px', color: '#475569' }}>
                  <ul style={{ margin: 0, paddingLeft: '18px', lineHeight: 1.5 }}>
                    {selectedSubmission.avaliadores.map((c, idx) => (
                      <li key={idx}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* ── Termos & Compartilhamento ── */}
            <div style={{ backgroundColor: '#F8FAFC', borderRadius: '8px', padding: '14px', border: '1px solid #E2E8F0', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ fontSize: '13px', color: '#475569' }}>
                📜 <strong>Regulamento SWC 2026:</strong> Conforme às Diretrizes Oficiais Pegasus Tech Ventures
              </div>
              <div style={{ fontSize: '13px', color: '#475569' }}>
                🔒 <strong>Compartilhamento com Investidores:</strong> {selectedSubmission.cienteCompartilhamento ? '✅ Autorizado pelo Fundador' : '⚠️ Pendente'}
              </div>
            </div>

            {/* Close Button Footer */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
              <button
                onClick={handleCloseModal}
                style={{
                  backgroundColor: '#7C3AED',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 28px',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
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

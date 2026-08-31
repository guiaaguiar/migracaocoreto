import { useState, useEffect, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import {
  CAMINHOS_SUBMISSIONS,
  CAMINHOS_COM_ANEXOS,
  CAMINHOS_RECIFE,
  CAMINHOS_INTERIOR,
  CAMINHOS_COM_LINK_OFICIAL,
  exportToCSV
} from '../../../data/caminhosData'
import type { CaminhosSubmission } from '../../../data/caminhosData'

export default function CaminhosInscricoesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState<'todos' | 'anexos' | 'oficial' | 'recife' | 'interior'>('todos')
  const [selectedCategory, setSelectedCategory] = useState<string>('todas')
  const [selectedCity, setSelectedCity] = useState<string>('todas')
  const [selectedSubmission, setSelectedSubmission] = useState<CaminhosSubmission | null>(null)
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards')

  // URL query parameter sync (?selectedId=centelha_001 or ?submission=... or ?filter=...)
  useEffect(() => {
    const selectedIdParam = searchParams.get('selectedId')
    const submissionParam = searchParams.get('submission') || searchParams.get('projeto') || searchParams.get('proponente')
    const filterParam = searchParams.get('filter')

    if (filterParam && ['todos', 'anexos', 'oficial', 'recife', 'interior'].includes(filterParam)) {
      setSelectedFilter(filterParam as any)
    }

    if (selectedIdParam) {
      const found = CAMINHOS_SUBMISSIONS.find(s => s.id.toLowerCase() === selectedIdParam.toLowerCase())
      if (found) {
        setSelectedSubmission(found)
        return
      }
    }

    if (submissionParam) {
      const decoded = decodeURIComponent(submissionParam).trim()
      const lowerDecoded = decoded.toLowerCase()
      setSearchTerm(decoded)
      const found = CAMINHOS_SUBMISSIONS.find(
        s =>
          s.title.toLowerCase().includes(lowerDecoded) ||
          s.proponente.toLowerCase().includes(lowerDecoded) ||
          s.id.toLowerCase() === lowerDecoded ||
          (s.email && s.email.toLowerCase().includes(lowerDecoded)) ||
          s.categoria.toLowerCase().includes(lowerDecoded) ||
          s.cidade.toLowerCase().includes(lowerDecoded) ||
          s.resumo.toLowerCase().includes(lowerDecoded)
      )
      if (found) {
        setSelectedSubmission(found)
      }
    }
  }, [searchParams])

  // Category list for filter pills
  const categoriesList = useMemo(() => {
    const categories = Array.from(new Set(CAMINHOS_SUBMISSIONS.map(s => s.categoria)))
    return ['todas', ...categories]
  }, [])

  // City list for filter pills
  const citiesList = useMemo(() => {
    const counts: Record<string, number> = {}
    CAMINHOS_SUBMISSIONS.forEach(s => {
      counts[s.cidade] = (counts[s.cidade] || 0) + 1
    })
    const sorted = Object.keys(counts).sort((a, b) => counts[b] - counts[a])
    return ['todas', ...sorted]
  }, [])

  // Filter submissions
  const filteredSubmissions = useMemo(() => {
    return CAMINHOS_SUBMISSIONS.filter(sub => {
      const matchesSearch =
        !searchTerm ||
        sub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.proponente.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.categoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.cidade.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.estado.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.resumo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (sub.email && sub.email.toLowerCase().includes(searchTerm.toLowerCase()))

      let matchesFilter = true
      if (selectedFilter === 'anexos') matchesFilter = sub.temAnexos
      else if (selectedFilter === 'oficial') matchesFilter = !!sub.linkExterno
      else if (selectedFilter === 'recife') matchesFilter = sub.cidade === 'Recife'
      else if (selectedFilter === 'interior') matchesFilter = sub.cidade !== 'Recife'

      const matchesCategory = selectedCategory === 'todas' || sub.categoria === selectedCategory
      const matchesCity = selectedCity === 'todas' || sub.cidade === selectedCity

      return matchesSearch && matchesFilter && matchesCategory && matchesCity
    })
  }, [searchTerm, selectedFilter, selectedCategory, selectedCity])

  // Metrics
  const totalPropostas = CAMINHOS_SUBMISSIONS.length
  const totalAnexos = CAMINHOS_COM_ANEXOS.length
  const totalOficial = CAMINHOS_COM_LINK_OFICIAL.length
  const totalRecife = CAMINHOS_RECIFE.length
  const totalInterior = CAMINHOS_INTERIOR.length

  const totalCategorias = useMemo(() => {
    return new Set(CAMINHOS_SUBMISSIONS.map(s => s.categoria)).size
  }, [])

  const totalCidades = useMemo(() => {
    return new Set(CAMINHOS_SUBMISSIONS.map(s => s.cidade)).size
  }, [])

  // CSV column mapping
  const csvColumnMap = {
    id: 'ID da Proposta',
    edicaoName: 'Programa / Edital',
    title: 'Título do Projeto / Solução',
    proponente: 'Proponente / Responsável',
    email: 'E-mail de Contato',
    categoria: 'Área / Setor Tecnológico',
    cidade: 'Cidade',
    estado: 'Estado',
    estagio: 'Fase da Trilha',
    statusFase: 'Status de Aprovação',
    fomentoSolicitado: 'Fomento Solicitado (Subvenção)',
    linkExterno: 'Link Plataforma Centelha',
    resumo: 'Resumo da Proposta'
  }

  const handleOpenModal = (sub: CaminhosSubmission) => {
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

          {/* ── Sub-Navigation Tabs between Caminhos Filter Groups ── */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <button
              onClick={() => { setSelectedFilter('todos'); setSelectedCategory('todas'); setSelectedCity('todas'); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 700,
                backgroundColor: selectedFilter === 'todos' ? '#00A8B5' : '#FFFFFF',
                color: selectedFilter === 'todos' ? '#FFFFFF' : '#475569',
                border: selectedFilter === 'todos' ? 'none' : '1px solid #CBD5E1',
                cursor: 'pointer',
                boxShadow: selectedFilter === 'todos' ? '0 2px 8px rgba(0, 168, 181, 0.3)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              <span>🚀 Todas as Propostas ({totalPropostas})</span>
            </button>

            <button
              onClick={() => { setSelectedFilter('anexos'); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 700,
                backgroundColor: selectedFilter === 'anexos' ? '#0284C7' : '#FFFFFF',
                color: selectedFilter === 'anexos' ? '#FFFFFF' : '#475569',
                border: selectedFilter === 'anexos' ? 'none' : '1px solid #CBD5E1',
                cursor: 'pointer',
                boxShadow: selectedFilter === 'anexos' ? '0 2px 8px rgba(2, 132, 199, 0.3)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              <span>📎 Com Anexos & Pitches ({totalAnexos})</span>
            </button>

            <button
              onClick={() => { setSelectedFilter('oficial'); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 700,
                backgroundColor: selectedFilter === 'oficial' ? '#7C3AED' : '#FFFFFF',
                color: selectedFilter === 'oficial' ? '#FFFFFF' : '#475569',
                border: selectedFilter === 'oficial' ? 'none' : '1px solid #CBD5E1',
                cursor: 'pointer',
                boxShadow: selectedFilter === 'oficial' ? '0 2px 8px rgba(124, 58, 237, 0.3)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              <span>🌐 Plataforma Oficial Centelha ({totalOficial})</span>
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
              onClick={() => { setSelectedFilter('interior'); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 700,
                backgroundColor: selectedFilter === 'interior' ? '#E11D48' : '#FFFFFF',
                color: selectedFilter === 'interior' ? '#FFFFFF' : '#475569',
                border: selectedFilter === 'interior' ? 'none' : '1px solid #CBD5E1',
                cursor: 'pointer',
                boxShadow: selectedFilter === 'interior' ? '0 2px 8px rgba(225, 29, 72, 0.3)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              <span>🏞️ Interior & RMR ({totalInterior})</span>
            </button>

            <Link
              to="/legacy/caminhos-fase2"
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
              <span>← Portal Trilha Caminhos</span>
            </Link>
          </div>

          {/* ── Top Hero Card ── */}
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              padding: '36px 40px',
              color: '#FFFFFF',
              background: 'linear-gradient(135deg, #091a24 0%, #004d61 35%, #007a87 70%, #00a8b5 100%)',
              overflow: 'hidden',
              boxShadow: '0 10px 25px rgba(0, 77, 97, 0.25)',
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
                border: '40px solid rgba(255, 255, 255, 0.07)',
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
                <span style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6EE7B7', display: 'block', marginBottom: '6px' }}>
                  Painel de Gestão & Trilha de Capacitação • FACEPE, FINEP & SECTI Recife
                </span>
                <h1 style={{ fontSize: '32px', fontWeight: 900, margin: 0, letterSpacing: '-0.02em' }}>
                  Inscrições Trilha Caminhos (Centelha PE)
                </h1>
                <p style={{ fontSize: '15px', color: '#E0F2FE', margin: '8px 0 0 0', maxWidth: '720px', lineHeight: 1.5 }}>
                  Consulte todos os projetos de inovação, empreendedores, planos de negócio e submissões à Fase 2 do Programa Centelha Pernambuco.
                </p>
              </div>

              {/* Export All CSV Button */}
              <button
                onClick={() => exportToCSV('inscricoes_trilha_caminhos_centelha_pe', filteredSubmissions, csvColumnMap)}
                style={{
                  backgroundColor: '#00A8B5',
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
                  boxShadow: '0 4px 14px rgba(0, 168, 181, 0.4)',
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
                onClick={() => { setSelectedFilter('todos'); setSelectedCategory('todas'); setSelectedCity('todas'); }}
                style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', cursor: 'pointer' }}
              >
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {totalPropostas}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#00A8B5' }}>
                  Total de Propostas
                </div>
              </div>

              <div
                onClick={() => { setSelectedFilter('anexos'); }}
                style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', cursor: 'pointer' }}
              >
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {totalAnexos}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#0284C7' }}>
                  Com Anexos & Pitches
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
                  Recife & Região
                </div>
              </div>

              <div
                onClick={() => { setSelectedFilter('todos'); }}
                style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', cursor: 'pointer' }}
              >
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {totalCategorias}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#7C3AED' }}>
                  Verticais ({totalCidades} Cidades)
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
                    placeholder="Pesquisar por projeto, proponente, e-mail, área tecnológica, cidade ou resumo..."
                    style={{
                      width: '100%',
                      padding: '14px 16px 14px 44px',
                      borderRadius: '10px',
                      border: '1.5px solid #00A8B5',
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
                    stroke="#00A8B5"
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
                      backgroundColor: viewMode === 'cards' ? '#00A8B5' : '#FFFFFF',
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
                      backgroundColor: viewMode === 'table' ? '#00A8B5' : '#FFFFFF',
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

              {/* Status / Scope Filter Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#64748B', marginRight: '4px' }}>
                  Foco:
                </span>
                {[
                  { id: 'todos', label: `Todas as Propostas (${totalPropostas})` },
                  { id: 'anexos', label: `📎 Com Anexos & Pitches (${totalAnexos})` },
                  { id: 'oficial', label: `🌐 Link Plataforma Centelha (${totalOficial})` },
                  { id: 'recife', label: `📍 Polo Recife (${totalRecife})` },
                  { id: 'interior', label: `🏞️ Interior & RMR (${totalInterior})` },
                ].map(flt => (
                  <button
                    key={flt.id}
                    onClick={() => setSelectedFilter(flt.id as any)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: selectedFilter === flt.id ? 700 : 500,
                      backgroundColor: selectedFilter === flt.id ? '#00A8B5' : '#F1F5F9',
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

              {/* Category / Sector Filter Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#64748B', marginRight: '4px' }}>
                  Setor Tecnológico:
                </span>
                {categoriesList.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '16px',
                      fontSize: '12px',
                      fontWeight: selectedCategory === cat ? 700 : 500,
                      backgroundColor: selectedCategory === cat ? '#007A87' : '#F8FAFC',
                      color: selectedCategory === cat ? '#FFFFFF' : '#475569',
                      border: '1px solid #E2E8F0',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {cat === 'todas' ? 'Todos os Setores' : cat}
                  </button>
                ))}
              </div>

              {/* City Filter Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#64748B', marginRight: '4px' }}>
                  Cidade:
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
                      backgroundColor: selectedCity === ct ? '#0284C7' : '#F8FAFC',
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
              Exibindo <strong style={{ color: '#00A8B5' }}>{filteredSubmissions.length}</strong> de {totalPropostas} propostas cadastradas
            </span>
          </div>

          {filteredSubmissions.length === 0 ? (
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '48px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>🔍</div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', margin: '0 0 8px 0' }}>
                Nenhuma proposta encontrada
              </h3>
              <p style={{ fontSize: '14px', color: '#64748B', margin: '0 0 20px 0' }}>
                Tente ajustar os termos de pesquisa ou os filtros de setor e cidade.
              </p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedFilter('todos'); setSelectedCategory('todas'); setSelectedCity('todas'); }}
                style={{
                  backgroundColor: '#00A8B5',
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
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 168, 181, 0.15)'
                      e.currentTarget.style.borderColor = '#00A8B5'
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
                            backgroundColor: '#E0F2FE',
                            color: '#0369A1',
                            border: '1px solid #BAE6FD',
                            fontSize: '11px',
                            fontWeight: 700,
                            padding: '4px 10px',
                            borderRadius: '12px'
                          }}
                        >
                          {sub.statusFase.split('•')[0].trim()}
                        </span>
                      </div>

                      {/* Project Title */}
                      <div style={{ marginBottom: '8px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#007A87', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '2px' }}>
                          💡 Projeto / Ideia Inovadora:
                        </span>
                        <h3 style={{ fontSize: '17px', fontWeight: 900, color: '#0F172A', margin: 0, lineHeight: 1.35 }}>
                          {sub.title}
                        </h3>
                      </div>

                      {/* Submitter & Location Details Box */}
                      <div style={{ backgroundColor: '#F8FAFC', padding: '12px 14px', borderRadius: '8px', border: '1px solid #E2E8F0', marginBottom: '12px' }}>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span>👤</span>
                          <span><strong>Proponente:</strong> {sub.proponente}</span>
                        </div>
                        <div style={{ fontSize: '12px', color: '#475569', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span>📍</span>
                          <span><strong>Cidade:</strong> {sub.cidade} - {sub.estado}</span>
                        </div>
                        <div style={{ fontSize: '12px', color: '#007A87', marginTop: '4px', fontWeight: 700 }}>
                          🏷️ Setor: {sub.categoria}
                        </div>
                        {sub.email && (
                          <div style={{ fontSize: '11px', color: '#0284C7', marginTop: '3px', fontWeight: 600 }}>
                            ✉️ {sub.email}
                          </div>
                        )}
                      </div>

                      {/* Summary Excerpt */}
                      <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5, margin: '0 0 16px 0', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {sub.resumo}
                      </p>
                    </div>

                    {/* Footer Stats and Action */}
                    <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {sub.documentos.length > 0 && (
                          <span style={{ backgroundColor: '#F0FDFA', color: '#0F766E', fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', border: '1px solid #CCFBF1' }}>
                            📎 {sub.documentos.length} anexo{sub.documentos.length > 1 ? 's' : ''}
                          </span>
                        )}
                        {sub.linkExterno && (
                          <span style={{ backgroundColor: '#F5F3FF', color: '#6D28D9', fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', border: '1px solid #DDD6FE' }}>
                            🔗 Centelha PE
                          </span>
                        )}
                      </div>

                      <button
                        onClick={e => {
                          e.stopPropagation()
                          handleOpenModal(sub)
                        }}
                        style={{
                          backgroundColor: '#00A8B5',
                          color: '#FFFFFF',
                          border: 'none',
                          borderRadius: '20px',
                          padding: '8px 18px',
                          fontSize: '13px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          boxShadow: '0 2px 4px rgba(0, 168, 181, 0.25)',
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
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '9%' }}>ID</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '30%' }}>Projeto / Solução</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '23%' }}>Proponente & Contato</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '18%' }}>Setor & Cidade</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '10%' }}>Anexos</th>
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
                        <div>{sub.title}</div>
                        <div style={{ fontSize: '11px', color: '#007A87', fontWeight: 600, marginTop: '2px' }}>{sub.statusFase}</div>
                      </td>
                      <td style={{ padding: '16px 20px', fontSize: '13px', color: '#334155' }}>
                        <div style={{ fontWeight: 700 }}>{sub.proponente}</div>
                        {sub.email && <div style={{ fontSize: '11px', color: '#64748B' }}>{sub.email}</div>}
                      </td>
                      <td style={{ padding: '16px 20px', fontSize: '13px', color: '#334155' }}>
                        <div style={{ fontWeight: 700 }}>📍 {sub.cidade} - {sub.estado}</div>
                        <div style={{ fontSize: '12px', color: '#007A87' }}>{sub.categoria}</div>
                      </td>
                      <td style={{ padding: '16px 20px', fontSize: '12px', color: '#047857' }}>
                        {sub.documentos.length > 0 ? `📎 ${sub.documentos.length} anexo(s)` : '—'}
                      </td>
                      <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                        <button
                          onClick={e => {
                            e.stopPropagation()
                            handleOpenModal(sub)
                          }}
                          style={{
                            backgroundColor: '#00A8B5',
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

      {/* ── MODAL "DETALHES DA PROPOSTA TRILHA CAMINHOS" (Assertive Data) ── */}
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
              onClick={() => exportToCSV(`proposta_caminhos_${selectedSubmission.id}`, [selectedSubmission], csvColumnMap)}
              style={{
                width: '100%',
                border: '1.5px solid #00A8B5',
                borderRadius: '8px',
                padding: '14px',
                backgroundColor: '#FFFFFF',
                color: '#007A87',
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
              <span>Exportar Dados da Proposta em CSV</span>
            </button>

            {/* Modal Title & Identification */}
            <div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap' }}>
                <span style={{ backgroundColor: '#0F172A', color: '#FFFFFF', fontSize: '12px', fontWeight: 800, padding: '4px 10px', borderRadius: '6px' }}>
                  {selectedSubmission.id}
                </span>
                <span style={{ backgroundColor: '#E0F2FE', color: '#0369A1', fontSize: '12px', fontWeight: 700, padding: '4px 10px', borderRadius: '6px' }}>
                  {selectedSubmission.edicaoName}
                </span>
                <span style={{ backgroundColor: '#F0FDFA', color: '#0F766E', fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '6px' }}>
                  {selectedSubmission.categoria}
                </span>
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0F172A', margin: '0 0 12px 0', lineHeight: 1.3 }}>
                {selectedSubmission.title}
              </h2>

              {/* ── Submitter & Proposta Details Card ── */}
              <div style={{ backgroundColor: '#F8FAFC', borderRadius: '10px', padding: '16px 20px', border: '1px solid #E2E8F0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                    👤 Proponente / Responsável:
                  </span>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A' }}>
                    {selectedSubmission.proponente}
                  </div>
                </div>

                {selectedSubmission.email && (
                  <div>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                      ✉️ E-mail de Contato:
                    </span>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#0284C7' }}>
                      {selectedSubmission.email}
                    </div>
                  </div>
                )}

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
                    📈 Fase na Trilha:
                  </span>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#007A87' }}>
                    {selectedSubmission.estagio}
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                    💰 Subvenção Solicitada:
                  </span>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: '#047857' }}>
                    {selectedSubmission.fomentoSolicitado}
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                    🛡️ Status Centelha PE:
                  </span>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#6D28D9' }}>
                    {selectedSubmission.statusFase}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Resumo da Proposta ── */}
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#007A87', margin: '0 0 10px 0', borderBottom: '2px solid #E2E8F0', paddingBottom: '6px' }}>
                💡 Resumo Executivo & Justificativa da Inovação
              </h3>
              <div style={{ backgroundColor: '#F8FAFC', padding: '16px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '14px', lineHeight: 1.7, color: '#1E293B' }}>
                {selectedSubmission.resumo}
              </div>
            </div>

            {/* ── Documentos e Anexos (Pitches, Certificados) ── */}
            {selectedSubmission.documentos.length > 0 && (
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#007A87', margin: '0 0 10px 0', borderBottom: '2px solid #E2E8F0', paddingBottom: '6px' }}>
                  📎 Documentos & Arquivos da Proposta ({selectedSubmission.documentos.length})
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {selectedSubmission.documentos.map((doc, idx) => {
                    const decodedName = decodeURIComponent(doc.split('/').pop() || `Anexo ${idx + 1}`)
                    const fullUrl = doc.startsWith('http') ? doc : `https:${doc}`
                    return (
                      <a
                        key={idx}
                        href={fullUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '12px 16px',
                          backgroundColor: '#F0FDFA',
                          border: '1px solid #CCFBF1',
                          borderRadius: '8px',
                          color: '#0F766E',
                          textDecoration: 'none',
                          fontSize: '13px',
                          fontWeight: 700,
                          transition: 'all 0.15s ease',
                        }}
                      >
                        <span>📄 {decodedName}</span>
                        <span style={{ fontSize: '12px', color: '#007A87', fontWeight: 600 }}>Visualizar / Baixar ↗</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            )}

            {/* ── Link Plataforma Oficial Centelha ── */}
            {selectedSubmission.linkExterno && (
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#007A87', margin: '0 0 10px 0', borderBottom: '2px solid #E2E8F0', paddingBottom: '6px' }}>
                  🌐 Link Oficial da Submissão (Programa Centelha PE)
                </h3>
                <a
                  href={selectedSubmission.linkExterno}
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
                  <span>🔗 {selectedSubmission.linkExterno}</span>
                  <span>↗</span>
                </a>
              </div>
            )}

            {/* ── Parceiros & Mentores ── */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#007A87', margin: '0 0 8px 0' }}>
                  🏛️ Instituições de Fomento & Apoio
                </h4>
                <div style={{ backgroundColor: '#F8FAFC', padding: '12px 14px', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '13px', color: '#334155' }}>
                  <ul style={{ margin: 0, paddingLeft: '18px', lineHeight: 1.6 }}>
                    {selectedSubmission.parceiros.map((p, idx) => (
                      <li key={idx}><strong>{p}</strong></li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#007A87', margin: '0 0 8px 0' }}>
                  👥 Mentores & Assistente EDIT.AI
                </h4>
                <div style={{ backgroundColor: '#F8FAFC', padding: '12px 14px', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '12px', color: '#475569' }}>
                  <ul style={{ margin: 0, paddingLeft: '18px', lineHeight: 1.5 }}>
                    {selectedSubmission.mentores.map((m, idx) => (
                      <li key={idx}>{m}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Close Button Footer */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
              <button
                onClick={handleCloseModal}
                style={{
                  backgroundColor: '#00A8B5',
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

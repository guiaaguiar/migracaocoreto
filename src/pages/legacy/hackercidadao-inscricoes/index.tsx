import { useState, useEffect, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import ProgramNavigationHeader from '../../../components/ProgramNavigationHeader'
import UnifiedSubmissionModal, { type SubmissionData, type EvaluationItem, type CategoryOption } from '../../../components/UnifiedSubmissionModal'
import {
  HACKER_SUBMISSIONS,
  HACKER_UNIVERSITARIOS,
  HACKER_PROFISSIONAIS,
  HACKER_RECIFE,
  HACKER_RMR_OUTROS,
  exportToCSV
} from '../../../data/hackerData'
import type { HackerSubmission } from '../../../data/hackerData'

export default function HackerCidadaoInscricoesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState<'todos' | 'universitarios' | 'profissionais' | 'recife' | 'rmr'>('todos')
  const [selectedCategory, setSelectedCategory] = useState<string>('todas')
  const [selectedCity, setSelectedCity] = useState<string>('todas')
  const [selectedSubmission, setSelectedSubmission] = useState<HackerSubmission | null>(null)
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards')

  // URL query parameter (?selectedId=insc_hacker_0001 or ?submission=... or ?filter=...)
  useEffect(() => {
    const selectedIdParam = searchParams.get('selectedId')
    const submissionParam = searchParams.get('submission') || searchParams.get('nome') || searchParams.get('cpf')
    const filterParam = searchParams.get('filter')

    if (filterParam && ['todos', 'universitarios', 'profissionais', 'recife', 'rmr'].includes(filterParam)) {
      setSelectedFilter(filterParam as any)
    }

    if (selectedIdParam) {
      const found = HACKER_SUBMISSIONS.find(s => s.id.toLowerCase() === selectedIdParam.toLowerCase())
      if (found) {
        setSelectedSubmission(found)
        return
      }
    }

    if (submissionParam) {
      const decoded = decodeURIComponent(submissionParam).trim()
      const lowerDecoded = decoded.toLowerCase()
      setSearchTerm(decoded)
      const found = HACKER_SUBMISSIONS.find(
        s =>
          s.nome.toLowerCase().includes(lowerDecoded) ||
          s.title.toLowerCase().includes(lowerDecoded) ||
          s.id.toLowerCase() === lowerDecoded ||
          (s.email && s.email.toLowerCase().includes(lowerDecoded)) ||
          s.cidade.toLowerCase().includes(lowerDecoded) ||
          s.curso.toLowerCase().includes(lowerDecoded) ||
          s.cpf.includes(decoded) ||
          s.cpfRaw.includes(decoded)
      )
      if (found) {
        setSelectedSubmission(found)
      }
    }
  }, [searchParams])

  // Category list for filter pills
  const categoriesList = useMemo(() => {
    const categories = Array.from(new Set(HACKER_SUBMISSIONS.map(s => s.category)))
    return ['todas', ...categories]
  }, [])

  // City list for filter pills (top cities)
  const topCitiesList = useMemo(() => {
    const counts: Record<string, number> = {}
    HACKER_SUBMISSIONS.forEach(s => {
      counts[s.cidade] = (counts[s.cidade] || 0) + 1
    })
    const sorted = Object.keys(counts).sort((a, b) => counts[b] - counts[a]).slice(0, 8)
    return ['todas', ...sorted]
  }, [])

  // Filter submissions
  const filteredSubmissions = useMemo(() => {
    return HACKER_SUBMISSIONS.filter(sub => {
      const matchesSearch =
        !searchTerm ||
        sub.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.cidade.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.curso.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.desafioInteresse.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (sub.email && sub.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
        sub.cpf.includes(searchTerm) ||
        sub.cpfRaw.includes(searchTerm)

      let matchesFilter = true
      if (selectedFilter === 'universitarios') matchesFilter = sub.isUniversitario
      else if (selectedFilter === 'profissionais') matchesFilter = !sub.isUniversitario
      else if (selectedFilter === 'recife') matchesFilter = sub.cidade === 'Recife'
      else if (selectedFilter === 'rmr') matchesFilter = sub.cidade !== 'Recife'

      const matchesCategory = selectedCategory === 'todas' || sub.category === selectedCategory
      const matchesCity = selectedCity === 'todas' || sub.cidade === selectedCity

      return matchesSearch && matchesFilter && matchesCategory && matchesCity
    })
  }, [searchTerm, selectedFilter, selectedCategory, selectedCity])

  // Metrics
  const totalInscricoes = HACKER_SUBMISSIONS.length
  const totalUniversitarios = HACKER_UNIVERSITARIOS.length
  const totalProfissionais = HACKER_PROFISSIONAIS.length
  const totalRecife = HACKER_RECIFE.length
  const totalRmr = HACKER_RMR_OUTROS.length

  const totalCidades = useMemo(() => {
    return new Set(HACKER_SUBMISSIONS.map(s => s.cidade)).size
  }, [])

  const totalCursos = useMemo(() => {
    return new Set(HACKER_SUBMISSIONS.map(s => s.curso)).size
  }, [])

  // CSV column mapping
  const csvColumnMap = {
    id: 'ID da Inscrição',
    edicaoName: 'Programa / Edição',
    nome: 'Nome do Participante',
    cpf: 'CPF',
    email: 'E-mail',
    category: 'Modalidade / Categoria',
    cidade: 'Cidade',
    estado: 'UF',
    curso: 'Curso / Formação',
    isUniversitario: 'É Universitário',
    activeProfile: 'Perfil Cadastrado',
    desafioInteresse: 'Desafio Temático de Interesse',
    autorizaUsoDados: 'Autorização de Uso de Dados (LGPD)',
    descricao: 'Descrição do Registro'
  }

  const handleOpenModal = (sub: HackerSubmission) => {
    setSelectedSubmission(sub)
    setSearchParams({ selectedId: sub.id })
  }

  const handleCloseModal = () => {
    setSelectedSubmission(null)
    setSearchParams({})
  }

  const getCategoryBadge = (sub: HackerSubmission) => {
    if (sub.isUniversitario) {
      return { bg: '#ECFDF5', color: '#047857', border: '#A7F3D0', label: '🎓 Universitário' }
    }
    return { bg: '#EFF6FF', color: '#1D4ED8', border: '#BFDBFE', label: '💼 Profissional / Comunidade' }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F8FAFC', fontFamily: "'DM Sans', sans-serif" }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar activeItem="painel" />
        <main style={{ flex: 1, padding: '32px', maxWidth: '1320px', width: '100%', margin: '0 auto' }}>

          {/* ── Sub-Navigation Bar between Programs & Dashboards ── */}
          <ProgramNavigationHeader currentProgramId="hacker" activeTab="submissions" />

          {/* ── Sub-Navigation Tabs between Hacker Filter Groups ── */}
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
                backgroundColor: selectedFilter === 'todos' ? '#10B981' : '#FFFFFF',
                color: selectedFilter === 'todos' ? '#FFFFFF' : '#475569',
                border: selectedFilter === 'todos' ? 'none' : '1px solid #CBD5E1',
                cursor: 'pointer',
                boxShadow: selectedFilter === 'todos' ? '0 2px 8px rgba(16, 185, 129, 0.3)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              <span>📋 Todas as Inscrições ({totalInscricoes})</span>
            </button>

            <button
              onClick={() => { setSelectedFilter('universitarios'); setSelectedCategory('todas'); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 700,
                backgroundColor: selectedFilter === 'universitarios' ? '#047857' : '#FFFFFF',
                color: selectedFilter === 'universitarios' ? '#FFFFFF' : '#475569',
                border: selectedFilter === 'universitarios' ? 'none' : '1px solid #CBD5E1',
                cursor: 'pointer',
                boxShadow: selectedFilter === 'universitarios' ? '0 2px 8px rgba(4, 120, 87, 0.3)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              <span>🎓 Universitários ({totalUniversitarios})</span>
            </button>

            <button
              onClick={() => { setSelectedFilter('profissionais'); setSelectedCategory('todas'); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 700,
                backgroundColor: selectedFilter === 'profissionais' ? '#0284C7' : '#FFFFFF',
                color: selectedFilter === 'profissionais' ? '#FFFFFF' : '#475569',
                border: selectedFilter === 'profissionais' ? 'none' : '1px solid #CBD5E1',
                cursor: 'pointer',
                boxShadow: selectedFilter === 'profissionais' ? '0 2px 8px rgba(2, 132, 199, 0.3)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              <span>💼 Profissionais & Outros ({totalProfissionais})</span>
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
                backgroundColor: selectedFilter === 'recife' ? '#0F766E' : '#FFFFFF',
                color: selectedFilter === 'recife' ? '#FFFFFF' : '#475569',
                border: selectedFilter === 'recife' ? 'none' : '1px solid #CBD5E1',
                cursor: 'pointer',
                boxShadow: selectedFilter === 'recife' ? '0 2px 8px rgba(15, 118, 110, 0.3)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              <span>📍 Recife ({totalRecife})</span>
            </button>

            <button
              onClick={() => { setSelectedFilter('rmr'); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 700,
                backgroundColor: selectedFilter === 'rmr' ? '#7C3AED' : '#FFFFFF',
                color: selectedFilter === 'rmr' ? '#FFFFFF' : '#475569',
                border: selectedFilter === 'rmr' ? 'none' : '1px solid #CBD5E1',
                cursor: 'pointer',
                boxShadow: selectedFilter === 'rmr' ? '0 2px 8px rgba(124, 58, 237, 0.3)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              <span>🏙️ RMR & Demais Cidades ({totalRmr})</span>
            </button>

            <Link
              to="/legacy/hackercidadao"
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
              <span>← Portal Oficial Hacker Cidadão</span>
            </Link>
          </div>

          {/* ── Top Hero Card ── */}
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              padding: '36px 40px',
              color: '#FFFFFF',
              background: 'linear-gradient(135deg, #022c22 0%, #064e3b 35%, #047857 70%, #059669 100%)',
              overflow: 'hidden',
              boxShadow: '0 10px 25px rgba(6, 78, 59, 0.2)',
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
                  Painel de Gestão & Inscrições • Maratona de Inovação Aberta da Prefeitura do Recife
                </span>
                <h1 style={{ fontSize: '32px', fontWeight: 900, margin: 0, letterSpacing: '-0.02em' }}>
                  Inscrições do Hacker Cidadão 2026
                </h1>
                <p style={{ fontSize: '15px', color: '#D1FAE5', margin: '8px 0 0 0', maxWidth: '680px', lineHeight: 1.5 }}>
                  Consulte todos os participantes, estudantes, desenvolvedores e talentos inscritos para a maratona de dados abertos e desafios cívicos da PCR.
                </p>
              </div>

              {/* Export All CSV Button */}
              <button
                onClick={() => exportToCSV('inscricoes_hacker_cidadao_recife', filteredSubmissions, csvColumnMap)}
                style={{
                  backgroundColor: '#10B981',
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
                  boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)',
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
                  {totalInscricoes}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#10B981' }}>
                  Total Geral Inscritos
                </div>
              </div>

              <div
                onClick={() => { setSelectedFilter('universitarios'); setSelectedCategory('todas'); }}
                style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', cursor: 'pointer' }}
              >
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {totalUniversitarios}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#047857' }}>
                  Universitários (89,8%)
                </div>
              </div>

              <div
                onClick={() => { setSelectedFilter('recife'); setSelectedCity('Recife'); }}
                style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', cursor: 'pointer' }}
              >
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {totalRecife}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#0F766E' }}>
                  Recife ({((totalRecife / totalInscricoes) * 100).toFixed(0)}%)
                </div>
              </div>

              <div
                onClick={() => { setSelectedFilter('todos'); }}
                style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', cursor: 'pointer' }}
              >
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {totalCidades}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#7C3AED' }}>
                  Cidades & {totalCursos} Cursos
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
                    placeholder="Pesquisar por participante, CPF, curso, cidade, modalidade ou área de atuação..."
                    style={{
                      width: '100%',
                      padding: '14px 16px 14px 44px',
                      borderRadius: '10px',
                      border: '1.5px solid #10B981',
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
                    stroke="#10B981"
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
                      backgroundColor: viewMode === 'cards' ? '#10B981' : '#FFFFFF',
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
                      backgroundColor: viewMode === 'table' ? '#10B981' : '#FFFFFF',
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

              {/* Perfil Filter Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#64748B', marginRight: '4px' }}>
                  Perfil:
                </span>
                {[
                  { id: 'todos', label: 'Todos os Inscritos' },
                  { id: 'universitarios', label: '🎓 Universitários (863)' },
                  { id: 'profissionais', label: '💼 Profissionais & Comunidade (98)' },
                  { id: 'recife', label: '📍 Município do Recife (737)' },
                  { id: 'rmr', label: '🏙️ RMR & Outros (224)' },
                ].map(flt => (
                  <button
                    key={flt.id}
                    onClick={() => setSelectedFilter(flt.id as any)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: selectedFilter === flt.id ? 700 : 500,
                      backgroundColor: selectedFilter === flt.id ? '#10B981' : '#F1F5F9',
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

              {/* Category / Area Filter Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#64748B', marginRight: '4px' }}>
                  Área / Curso:
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
                      backgroundColor: selectedCategory === cat ? '#047857' : '#F8FAFC',
                      color: selectedCategory === cat ? '#FFFFFF' : '#475569',
                      border: '1px solid #E2E8F0',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {cat === 'todas' ? 'Todas as Áreas' : cat}
                  </button>
                ))}
              </div>

              {/* City Filter Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#64748B', marginRight: '4px' }}>
                  Cidade:
                </span>
                {topCitiesList.map(ct => (
                  <button
                    key={ct}
                    onClick={() => setSelectedCity(ct)}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '16px',
                      fontSize: '12px',
                      fontWeight: selectedCity === ct ? 700 : 500,
                      backgroundColor: selectedCity === ct ? '#0F766E' : '#F8FAFC',
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
              Exibindo <strong style={{ color: '#10B981' }}>{filteredSubmissions.length}</strong> de {totalInscricoes} inscrições
            </span>
          </div>

          {filteredSubmissions.length === 0 ? (
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '48px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>🔍</div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', margin: '0 0 8px 0' }}>
                Nenhuma inscrição encontrada
              </h3>
              <p style={{ fontSize: '14px', color: '#64748B', margin: '0 0 20px 0' }}>
                Tente ajustar os filtros de perfil, cidade ou termos de pesquisa.
              </p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedFilter('todos'); setSelectedCategory('todas'); setSelectedCity('todas'); }}
                style={{
                  backgroundColor: '#10B981',
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
                const badge = getCategoryBadge(sub)
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
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(16, 185, 129, 0.15)'
                      e.currentTarget.style.borderColor = '#10B981'
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
                        <span style={{ backgroundColor: badge.bg, color: badge.color, border: `1px solid ${badge.border}`, fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '12px' }}>
                          {badge.label}
                        </span>
                      </div>

                      {/* Participant Name / Title */}
                      <div style={{ marginBottom: '10px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '2px' }}>
                          👤 Participante Inscrito:
                        </span>
                        <h3 style={{ fontSize: '17px', fontWeight: 900, color: '#0F172A', margin: 0, lineHeight: 1.35 }}>
                          {sub.nome}
                        </h3>
                      </div>

                      {/* Details Box */}
                      <div style={{ backgroundColor: '#F8FAFC', padding: '12px 14px', borderRadius: '8px', border: '1px solid #E2E8F0', marginBottom: '12px' }}>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span>🎓</span>
                          <span><strong>Curso / Área:</strong> {sub.curso}</span>
                        </div>
                        <div style={{ fontSize: '12px', color: '#475569', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span>📍</span>
                          <span><strong>Cidade:</strong> {sub.cidade} - {sub.estado}</span>
                        </div>
                        <div style={{ fontSize: '12px', color: '#047857', marginTop: '4px', fontWeight: 700 }}>
                          📄 CPF: {sub.cpf}
                        </div>
                        {sub.email && (
                          <div style={{ fontSize: '11px', color: '#0284C7', marginTop: '3px', fontWeight: 600 }}>
                            ✉️ {sub.email}
                          </div>
                        )}
                      </div>

                      {/* Desafio de Interesse */}
                      <div style={{ backgroundColor: '#ECFDF5', padding: '10px 12px', borderRadius: '6px', border: '1px solid #A7F3D0', marginBottom: '14px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#065F46', display: 'block', marginBottom: '2px' }}>
                          🎯 Eixo Temático / Desafio:
                        </span>
                        <span style={{ fontSize: '12px', fontWeight: 600, color: '#047857' }}>
                          {sub.desafioInteresse}
                        </span>
                      </div>
                    </div>

                    {/* Footer Stats and Action */}
                    <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        <span style={{ backgroundColor: sub.autorizaUsoDados ? '#ECFDF5' : '#FEF2F2', color: sub.autorizaUsoDados ? '#047857' : '#B91C1C', fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                          {sub.autorizaUsoDados ? '✓ LGPD Autorizado' : '⚠️ LGPD Pendente'}
                        </span>
                        <span style={{ backgroundColor: '#F8FAFC', color: '#64748B', fontSize: '11px', fontWeight: 600, padding: '3px 8px', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                          {sub.activeProfile}
                        </span>
                      </div>

                      <button
                        onClick={e => {
                          e.stopPropagation()
                          handleOpenModal(sub)
                        }}
                        style={{
                          backgroundColor: '#10B981',
                          color: '#FFFFFF',
                          border: 'none',
                          borderRadius: '20px',
                          padding: '8px 18px',
                          fontSize: '13px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          boxShadow: '0 2px 4px rgba(16, 185, 129, 0.25)',
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
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '28%' }}>Participante / Nome</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '24%' }}>Curso & Cidade</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '20%' }}>Desafio de Interesse</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '9%' }}>LGPD</th>
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
                        <div>{sub.nome}</div>
                        <div style={{ fontSize: '11px', color: '#047857', fontWeight: 600, marginTop: '2px' }}>CPF: {sub.cpf}</div>
                        {sub.email && <div style={{ fontSize: '11px', color: '#64748B' }}>{sub.email}</div>}
                      </td>
                      <td style={{ padding: '16px 20px', fontSize: '13px', color: '#334155' }}>
                        <div style={{ fontWeight: 700 }}>{sub.curso}</div>
                        <div style={{ fontSize: '12px', color: '#64748B' }}>📍 {sub.cidade} - {sub.estado}</div>
                      </td>
                      <td style={{ padding: '16px 20px', fontSize: '12px', color: '#047857', fontWeight: 600 }}>
                        {sub.desafioInteresse.split(':')[0]}
                      </td>
                      <td style={{ padding: '16px 20px', fontSize: '12px' }}>
                        <span style={{ color: sub.autorizaUsoDados ? '#047857' : '#B91C1C', fontWeight: 700 }}>
                          {sub.autorizaUsoDados ? '✓ Sim' : '✗ Não'}
                        </span>
                      </td>
                      <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                        <button
                          onClick={e => {
                            e.stopPropagation()
                            handleOpenModal(sub)
                          }}
                          style={{
                            backgroundColor: '#10B981',
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

      {/* ── MODAL UNIVERSAL "DETALHES DA INSCRIÇÃO HACKER CIDADÃO" (PADRÃO BUBBLE BO) ── */}
      {selectedSubmission && (
        <UnifiedSubmissionModal
          submission={mapHackerToSubmissionData(selectedSubmission)}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

function mapHackerToSubmissionData(sub: HackerSubmission): SubmissionData {
  const evals: EvaluationItem[] = []

  // Curadores e Comissão de Avaliação
  sub.curadores.forEach((cur, idx) => {
    evals.push({
      id: `curador_${idx + 1}`,
      phase: 'Comissão Curadora Oficial',
      evaluatorName: cur,
      comment: `Inscrição homologada para participação na maratona de dados públicos. Alocado para desenvolvimento de soluções para o ${sub.desafioInteresse}.`
    })
  })

  // Categorias Hacker Cidadão
  const hackerCategories: CategoryOption[] = [
    { id: 'cat_uni', title: 'Estudante Universitário', subtitle: 'Categoria Acadêmica' },
    { id: 'cat_prof', title: 'Profissional / Sociedade Civil', subtitle: 'Categoria Livre' },
    { id: 'cat_gov', title: 'Servidor / Gestor Público', subtitle: 'Categoria GovTech' },
    { id: 'cat_resolvedor', title: 'Resolvedor / Desenvolvedor', subtitle: 'Categoria Técnica' },
    { id: 'cat_design', title: 'Designer / UX / UI', subtitle: 'Categoria Design' },
    { id: 'cat_negocios', title: 'Negócios / Empreendedorismo', subtitle: 'Categoria Gestão' }
  ]

  return {
    id: sub.id,
    programName: sub.edicaoName || 'Hacker Cidadão 13.0',
    title: sub.nome,
    organization: sub.curso ? `Curso: ${sub.curso}` : 'Universidade / Instituição de Ensino',
    responsibleName: sub.nome,
    cpf: sub.cpf,
    curso: sub.curso,
    escolaridade: sub.isUniversitario ? 'Graduação / Superior Cursando' : 'Profissional / Sociedade Civil',
    atuacaoProfissional: sub.atuacao || sub.areasDeAtuacao || sub.activeProfile,
    city: sub.cidade || 'Recife',
    state: sub.estado || 'PE',
    moraEmRecife: sub.cidade?.toLowerCase() === 'recife' ? 'Sim' : 'Não',
    email: sub.email || `${sub.id}@hackercidadao.recife.pe.gov.br`,
    phone: '(81) 98800-0000',
    socialLink: 'hackercidadao.recife.pe.gov.br',
    foundedYear: '2024',
    category: sub.category,
    availableCategories: hackerCategories,
    description: sub.descricao,
    helpDescription: 'Explique de forma clara como sua formação, competências e proposta de solução colaboram para resolver os desafios cívicos da cidade do Recife.',
    topicosConexao: [sub.desafioInteresse.split(':')[0], sub.activeProfile, sub.category, sub.curso].filter(Boolean) as string[],
    termosAceitos: true,
    autorizaLGPD: sub.autorizaUsoDados,
    criteriaAnswers: [
      {
        title: 'Desafio Temático de Interesse',
        helpText: 'Eixo prioritário de desafio público no qual o participante deseja atuar durante o hackathon.',
        content: sub.desafioInteresse
      },
      {
        title: 'Formação Acadêmica & Perfil de Atuação',
        helpText: 'Curso de graduação/pós-graduação, instituição e áreas de especialidade técnica.',
        content: `Curso: ${sub.curso}\nNível Acadêmico: ${sub.isUniversitario ? 'Estudante Universitário' : 'Profissional / Sociedade Civil'}\nPerfil CORETO: ${sub.activeProfile}\nCPF: ${sub.cpf}`
      },
      {
        title: 'Premiação Almejada & Reconhecimento',
        helpText: 'Categorias de premiação oficiais e aceleração oferecidas pela Prefeitura do Recife.',
        content: sub.premios.join('\n')
      },
      {
        title: 'Conformidade com Regulamento e LGPD',
        helpText: 'Declaração formal de concordância com o regulamento e tratamento de dados cívicos.',
        content: `Autorização de Uso de Dados: ${sub.autorizaUsoDados ? 'Concedida pelo participante conforme as diretrizes da LGPD.' : 'Pendente de validação'}`
      }
    ],
    evaluations: evals,
    slug: sub.slug,
    rawBackendData: sub
  }
}


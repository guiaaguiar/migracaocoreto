import { useState, useEffect, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import ProgramNavigationHeader from '../../../components/ProgramNavigationHeader'
import UnifiedSubmissionModal, { type SubmissionData, type EvaluationItem, type CategoryOption } from '../../../components/UnifiedSubmissionModal'
import {
  NITRO_SUBMISSIONS,
  NITRO_EDITAL1_SUBMISSIONS,
  NITRO_EDITAL2_SUBMISSIONS,
  NITRO_EDITAL3_SUBMISSIONS,
  exportToCSV
} from '../../../data/nitroData'
import type { NitroSubmission } from '../../../data/nitroData'

export default function NitroInscricoesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedEdital, setSelectedEdital] = useState<'todos' | '001' | '002' | '003'>('todos')
  const [selectedCategory, setSelectedCategory] = useState<string>('todas')
  const [selectedSubmission, setSelectedSubmission] = useState<NitroSubmission | null>(null)
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards')

  // URL query parameter (?selectedId=sub_inpi_0001 or ?submission=...)
  useEffect(() => {
    const selectedIdParam = searchParams.get('selectedId')
    const submissionParam = searchParams.get('submission') || searchParams.get('proposal')
    const editalParam = searchParams.get('edital')

    if (editalParam && ['001', '002', '003'].includes(editalParam)) {
      setSelectedEdital(editalParam as any)
    }

    if (selectedIdParam) {
      const found = NITRO_SUBMISSIONS.find(s => s.id.toLowerCase() === selectedIdParam.toLowerCase())
      if (found) {
        setSelectedSubmission(found)
        return
      }
    }

    if (submissionParam) {
      const decoded = decodeURIComponent(submissionParam).trim()
      const lowerDecoded = decoded.toLowerCase()
      setSearchTerm(decoded)
      const found = NITRO_SUBMISSIONS.find(
        s =>
          s.sw_nome.toLowerCase().includes(lowerDecoded) ||
          s.title.toLowerCase().includes(lowerDecoded) ||
          s.pf_nome.toLowerCase().includes(lowerDecoded) ||
          s.Resp_nome.toLowerCase().includes(lowerDecoded) ||
          s.Nome_fantasia.toLowerCase().includes(lowerDecoded) ||
          s.Nome_nit.toLowerCase().includes(lowerDecoded) ||
          s.id.toLowerCase() === lowerDecoded ||
          s.descricao.toLowerCase().includes(lowerDecoded) ||
          (s.cnpj && s.cnpj.includes(decoded))
      )
      if (found) {
        setSelectedSubmission(found)
      }
    }
  }, [searchParams])

  // Category list for filter pills
  const categoriesList = useMemo(() => {
    const categories = Array.from(new Set(NITRO_SUBMISSIONS.map(s => s.category)))
    return ['todas', ...categories]
  }, [])

  // Filter submissions
  const filteredSubmissions = useMemo(() => {
    return NITRO_SUBMISSIONS.filter(sub => {
      const matchesSearch =
        !searchTerm ||
        sub.sw_nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.pf_nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.Resp_nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.Nome_fantasia.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.Nome_nit.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (sub.cnpj && sub.cnpj.includes(searchTerm)) ||
        sub.category.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesEdital = selectedEdital === 'todos' || sub.editalId === selectedEdital
      const matchesCategory = selectedCategory === 'todas' || sub.category === selectedCategory

      return matchesSearch && matchesEdital && matchesCategory
    })
  }, [searchTerm, selectedEdital, selectedCategory])

  // Metrics
  const totalSubmissoes = NITRO_SUBMISSIONS.length
  const totalEdital1 = NITRO_EDITAL1_SUBMISSIONS.length
  const totalEdital2 = NITRO_EDITAL2_SUBMISSIONS.length
  const totalEdital3 = NITRO_EDITAL3_SUBMISSIONS.length

  // CSV column mapping
  const csvColumnMap = {
    id: 'ID da Submissão',
    editalName: 'Edital NITRO',
    category: 'Modalidade / Categoria',
    sw_nome: 'Nome do Software / Ideia (sw_nome)',
    pf_nome: 'Quem Submeteu / Autor (pf_nome)',
    Nome_fantasia: 'Empresa / Startup (Nome_fantasia)',
    Resp_nome: 'Responsável pelo Envio (Resp_nome)',
    Nome_nit: 'NIT / ICT (Nome_nit)',
    cnpj: 'CNPJ',
    descricao: 'Descrição / Aplicabilidade',
    documentos: 'Links dos Anexos',
    linkExterno: 'Link Externo / Plataforma',
    aceiteEdital: 'Aceite do Edital',
    aceiteLgpd: 'Aceite LGPD'
  }

  const handleOpenModal = (sub: NitroSubmission) => {
    setSelectedSubmission(sub)
    setSearchParams({ selectedId: sub.id })
  }

  const handleCloseModal = () => {
    setSelectedSubmission(null)
    setSearchParams({})
  }

  const getEditalBadgeColor = (editalId: string) => {
    if (editalId === '001') return { bg: '#E0F2FE', color: '#0369A1', label: 'Edital 001 • Conecta Labs & ICTs' }
    if (editalId === '002') return { bg: '#FEF3C7', color: '#B45309', label: 'Edital 002 • Registro INPI & Soft' }
    return { bg: '#F3E8FF', color: '#7E22CE', label: 'Edital 003 • Centelha & Startups' }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F8FAFC', fontFamily: "'DM Sans', sans-serif" }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar activeItem="painel" />
        <main style={{ flex: 1, padding: '32px', maxWidth: '1320px', width: '100%', margin: '0 auto' }}>

          {/* ── Sub-Navigation Bar between Programs & Dashboards ── */}
          <ProgramNavigationHeader currentProgramId="nitro" activeTab="submissions" />

          {/* ── Sub-Navigation Tabs between Nitro Editais ── */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <button
              onClick={() => { setSelectedEdital('todos'); setSelectedCategory('todas'); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 700,
                backgroundColor: selectedEdital === 'todos' ? '#f59e0b' : '#FFFFFF',
                color: selectedEdital === 'todos' ? '#FFFFFF' : '#475569',
                border: selectedEdital === 'todos' ? 'none' : '1px solid #CBD5E1',
                cursor: 'pointer',
                boxShadow: selectedEdital === 'todos' ? '0 2px 8px rgba(245, 158, 11, 0.3)' : 'none',
              }}
            >
              <span>📋 Todas as Submissões ({totalSubmissoes})</span>
            </button>

            <button
              onClick={() => { setSelectedEdital('001'); setSelectedCategory('todas'); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 700,
                backgroundColor: selectedEdital === '001' ? '#0284c7' : '#FFFFFF',
                color: selectedEdital === '001' ? '#FFFFFF' : '#475569',
                border: selectedEdital === '001' ? 'none' : '1px solid #CBD5E1',
                cursor: 'pointer',
                boxShadow: selectedEdital === '001' ? '0 2px 8px rgba(2, 132, 199, 0.3)' : 'none',
              }}
            >
              <span>🏛️ Edital 001 — Conecta Labs & ICTs ({totalEdital1})</span>
            </button>

            <button
              onClick={() => { setSelectedEdital('002'); setSelectedCategory('todas'); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 700,
                backgroundColor: selectedEdital === '002' ? '#d97706' : '#FFFFFF',
                color: selectedEdital === '002' ? '#FFFFFF' : '#475569',
                border: selectedEdital === '002' ? 'none' : '1px solid #CBD5E1',
                cursor: 'pointer',
                boxShadow: selectedEdital === '002' ? '0 2px 8px rgba(217, 119, 6, 0.3)' : 'none',
              }}
            >
              <span>📜 Edital 002 — Registro INPI & Software ({totalEdital2})</span>
            </button>

            <button
              onClick={() => { setSelectedEdital('003'); setSelectedCategory('todas'); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 700,
                backgroundColor: selectedEdital === '003' ? '#7e22ce' : '#FFFFFF',
                color: selectedEdital === '003' ? '#FFFFFF' : '#475569',
                border: selectedEdital === '003' ? 'none' : '1px solid #CBD5E1',
                cursor: 'pointer',
                boxShadow: selectedEdital === '003' ? '0 2px 8px rgba(126, 34, 206, 0.3)' : 'none',
              }}
            >
              <span>🚀 Edital 003 — Centelha & Startups ({totalEdital3})</span>
            </button>

            <Link
              to="/legacy/nitro"
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
              <span>← Portal Oficial NITRO</span>
            </Link>
          </div>

          {/* ── Top Hero Card ── */}
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              padding: '36px 40px',
              color: '#FFFFFF',
              background: 'linear-gradient(135deg, #022340 0%, #78350f 45%, #b45309 80%, #d97706 100%)',
              overflow: 'hidden',
              boxShadow: '0 10px 25px rgba(2, 35, 64, 0.15)',
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
                <span style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#fde68a', display: 'block', marginBottom: '6px' }}>
                  Painel de Gestão & Inscrições • Núcleo de Inovação Tecnológica de Recife
                </span>
                <h1 style={{ fontSize: '32px', fontWeight: 900, margin: 0, letterSpacing: '-0.02em' }}>
                  Submissões do NITRO 2026
                </h1>
                <p style={{ fontSize: '15px', color: '#FEF3C7', margin: '8px 0 0 0', maxWidth: '680px', lineHeight: 1.5 }}>
                  Consulte todos os projetos, tecnologias, pedidos de registro no INPI e propostas de aceleração submetidas aos editais do programa NITRO.
                </p>
              </div>

              {/* Export All CSV Button */}
              <button
                onClick={() => exportToCSV('submissoes_nitro_recife', filteredSubmissions, csvColumnMap)}
                style={{
                  backgroundColor: '#f59e0b',
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
                  boxShadow: '0 4px 12px rgba(245, 158, 11, 0.35)',
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
              <div
                onClick={() => { setSelectedEdital('todos'); setSelectedCategory('todas'); }}
                style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', cursor: 'pointer' }}
              >
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {totalSubmissoes}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#f59e0b' }}>
                  Total Geral NITRO
                </div>
              </div>

              <div
                onClick={() => { setSelectedEdital('001'); setSelectedCategory('todas'); }}
                style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', cursor: 'pointer' }}
              >
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {totalEdital1}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#0284c7' }}>
                  Edital 001 (Conecta Labs)
                </div>
              </div>

              <div
                onClick={() => { setSelectedEdital('002'); setSelectedCategory('todas'); }}
                style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', cursor: 'pointer' }}
              >
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {totalEdital2}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#d97706' }}>
                  Edital 002 (INPI & Soft)
                </div>
              </div>

              <div
                onClick={() => { setSelectedEdital('003'); setSelectedCategory('todas'); }}
                style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', cursor: 'pointer' }}
              >
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {totalEdital3}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#7e22ce' }}>
                  Edital 003 (Centelha)
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
                    placeholder="Pesquisar por software (sw_nome), autor (pf_nome), empresa (Nome_fantasia), NIT (Nome_nit) ou CNPJ..."
                    style={{
                      width: '100%',
                      padding: '14px 16px 14px 44px',
                      borderRadius: '10px',
                      border: '1.5px solid #f59e0b',
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
                    stroke="#f59e0b"
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
                      backgroundColor: viewMode === 'cards' ? '#f59e0b' : '#FFFFFF',
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
                      backgroundColor: viewMode === 'table' ? '#f59e0b' : '#FFFFFF',
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

              {/* Edital Filter Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#64748B', marginRight: '4px' }}>
                  Edital:
                </span>
                {[
                  { id: 'todos', label: 'Todos os Editais' },
                  { id: '001', label: 'Edital 001/2026 (Conecta Labs & ICTs)' },
                  { id: '002', label: 'Edital 002/2026 (INPI & Software)' },
                  { id: '003', label: 'Edital 003/2026 (Centelha & Startups)' },
                ].map(ed => (
                  <button
                    key={ed.id}
                    onClick={() => setSelectedEdital(ed.id as any)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: selectedEdital === ed.id ? 700 : 500,
                      backgroundColor: selectedEdital === ed.id ? '#f59e0b' : '#F1F5F9',
                      color: selectedEdital === ed.id ? '#FFFFFF' : '#334155',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {ed.label}
                  </button>
                ))}
              </div>

              {/* Category Filter Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#64748B', marginRight: '4px' }}>
                  Categoria:
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
                      backgroundColor: selectedCategory === cat ? '#0284c7' : '#F8FAFC',
                      color: selectedCategory === cat ? '#FFFFFF' : '#475569',
                      border: '1px solid #E2E8F0',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {cat === 'todas' ? 'Todas as Categorias' : cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Submissions Listing ── */}
          <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A' }}>
              Exibindo <strong style={{ color: '#f59e0b' }}>{filteredSubmissions.length}</strong> de {totalSubmissoes} submissões
            </span>
          </div>

          {filteredSubmissions.length === 0 ? (
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '48px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>🔍</div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', margin: '0 0 8px 0' }}>
                Nenhuma submissão encontrada
              </h3>
              <p style={{ fontSize: '14px', color: '#64748B', margin: '0 0 20px 0' }}>
                Tente ajustar os filtros de edital ou termos de pesquisa.
              </p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedEdital('todos'); setSelectedCategory('todas'); }}
                style={{
                  backgroundColor: '#f59e0b',
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
                const edBadge = getEditalBadgeColor(sub.editalId)
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
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(245, 158, 11, 0.15)'
                      e.currentTarget.style.borderColor = '#f59e0b'
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
                        <span style={{ backgroundColor: edBadge.bg, color: edBadge.color, fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '12px' }}>
                          {edBadge.label}
                        </span>
                      </div>

                      {/* 1. Nome do Software / Ideia (sw_nome) */}
                      <div style={{ marginBottom: '8px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#b45309', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '2px' }}>
                          💡 Software / Ideia (sw_nome):
                        </span>
                        <h3 style={{ fontSize: '17px', fontWeight: 900, color: '#0F172A', margin: 0, lineHeight: 1.35 }}>
                          {sub.sw_nome}
                        </h3>
                      </div>

                      {/* 2. Quem Submeteu (pf_nome / Resp_nome) & Empresa (Nome_fantasia) */}
                      <div style={{ backgroundColor: '#F8FAFC', padding: '12px 14px', borderRadius: '8px', border: '1px solid #E2E8F0', marginBottom: '12px' }}>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span>👤</span>
                          <span><strong>Quem submeteu:</strong> {sub.pf_nome || sub.Resp_nome}</span>
                        </div>
                        {sub.Nome_fantasia && (
                          <div style={{ fontSize: '12px', color: '#475569', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span>🏢</span>
                            <span><strong>Empresa / NIT:</strong> {sub.Nome_fantasia}</span>
                          </div>
                        )}
                        {sub.Nome_nit && sub.Nome_nit !== sub.Nome_fantasia && (
                          <div style={{ fontSize: '11px', color: '#0284c7', marginTop: '3px', fontWeight: 600 }}>
                            🏛️ NIT Vinculado: {sub.Nome_nit}
                          </div>
                        )}
                        {sub.cnpj && (
                          <div style={{ fontSize: '11px', color: '#047857', fontWeight: 700, marginTop: '4px' }}>
                            📄 CNPJ: {sub.cnpj}
                          </div>
                        )}
                      </div>

                      {/* Description Excerpt */}
                      <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5, margin: '0 0 16px 0', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {sub.descricao || 'Sem descrição textual adicional.'}
                      </p>
                    </div>

                    {/* Footer Stats and Action */}
                    <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {sub.documentos.length > 0 && (
                          <span style={{ backgroundColor: '#F8FAFC', color: '#475569', fontSize: '11px', fontWeight: 600, padding: '3px 8px', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                            📎 {sub.documentos.length} anexo{sub.documentos.length > 1 ? 's' : ''}
                          </span>
                        )}
                        {sub.linkExterno && (
                          <span style={{ backgroundColor: '#EFF6FF', color: '#1D4ED8', fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '6px' }}>
                            🔗 Link Externo
                          </span>
                        )}
                      </div>

                      <button
                        onClick={e => {
                          e.stopPropagation()
                          handleOpenModal(sub)
                        }}
                        style={{
                          backgroundColor: '#f59e0b',
                          color: '#FFFFFF',
                          border: 'none',
                          borderRadius: '20px',
                          padding: '8px 18px',
                          fontSize: '13px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          boxShadow: '0 2px 4px rgba(245, 158, 11, 0.25)',
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
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '28%' }}>Software / Ideia (sw_nome)</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '26%' }}>Quem Submeteu (pf_nome) / Empresa</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '18%' }}>Edital & Modalidade</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '9%' }}>Anexos</th>
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
                      <td style={{ padding: '16px 20px', fontSize: '14px', fontWeight: 800, color: '#0F172A' }}>{sub.sw_nome}</td>
                      <td style={{ padding: '16px 20px', fontSize: '13px', color: '#334155' }}>
                        <div style={{ fontWeight: 700 }}>{sub.pf_nome || sub.Resp_nome}</div>
                        {sub.Nome_fantasia && <div style={{ fontSize: '12px', color: '#64748B' }}>{sub.Nome_fantasia}</div>}
                        {sub.cnpj && <div style={{ fontSize: '11px', color: '#047857', fontWeight: 600 }}>CNPJ: {sub.cnpj}</div>}
                      </td>
                      <td style={{ padding: '16px 20px', fontSize: '12px', color: '#b45309', fontWeight: 700 }}>{sub.editalName.split('-')[0]}</td>
                      <td style={{ padding: '16px 20px', fontSize: '13px', color: '#475569' }}>{sub.documentos.length} anexo{sub.documentos.length > 1 ? 's' : ''}</td>
                      <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                        <button
                          onClick={e => {
                            e.stopPropagation()
                            handleOpenModal(sub)
                          }}
                          style={{
                            backgroundColor: '#f59e0b',
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

      {/* ── MODAL UNIVERSAL "DETALHES DA SUBMISSÃO NITRO" (PADRÃO BUBBLE BO) ── */}
      {selectedSubmission && (
        <UnifiedSubmissionModal
          submission={mapNitroToSubmissionData(selectedSubmission)}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

function mapNitroToSubmissionData(sub: NitroSubmission): SubmissionData {
  const evals: EvaluationItem[] = []

  // Categorias / Editais NITRO vinculados ao registro do banco
  const nitroCategories: CategoryOption[] = [
    {
      id: '001',
      title: 'Edital 001 — Mapeamento de ICTs',
      subtitle: 'Mapeamento de ICTs & NITs',
      selected: sub.editalId === '001' || sub.category.includes('001') || sub.category.includes('ICT')
    },
    {
      id: '002',
      title: 'Edital 002 — Registro no INPI & Software',
      subtitle: 'Registro de Software / INPI',
      selected: sub.editalId === '002' || sub.category.includes('002') || sub.category.includes('INPI') || sub.category.includes('Software')
    },
    {
      id: '003',
      title: 'Edital 003 — ConectaLabs & Desafios',
      subtitle: 'ConectaLabs / Desafios PCR',
      selected: sub.editalId === '003' || sub.category.includes('003') || sub.category.includes('ConectaLabs')
    },
    {
      id: 'software',
      title: 'Software & Plataforma Cívica',
      subtitle: 'Ativo Tecnológico',
      selected: Boolean(sub.sw_nome && sub.sw_nome.length > 0 && sub.editalId === '002')
    },
    {
      id: 'biotech',
      title: 'Biotecnologia & Saúde',
      subtitle: 'Ativo Tecnológico',
      selected: Boolean(sub.descricao?.toLowerCase().includes('saúde') || sub.descricao?.toLowerCase().includes('bio') || sub.sw_nome?.toLowerCase().includes('saúde'))
    },
    {
      id: 'hardware',
      title: 'Hardware & IoT / Robótica',
      subtitle: 'Ativo Tecnológico',
      selected: Boolean(sub.descricao?.toLowerCase().includes('iot') || sub.descricao?.toLowerCase().includes('hardware') || sub.descricao?.toLowerCase().includes('robó'))
    }
  ]

  return {
    id: sub.id,
    programName: sub.editalName || 'Programa NITRO ICT & ConectaLabs',
    title: sub.sw_nome || sub.title,
    organization: sub.Nome_fantasia || sub.Nome_nit || (sub.cnpj ? `CNPJ: ${sub.cnpj}` : 'Empresa / ICT Proponente'),
    cnpj: sub.cnpj,
    instituicaoEnsino: sub.Nome_nit,
    responsibleName: sub.pf_nome || sub.Resp_nome || 'Autor / Proponente',
    city: 'Recife',
    state: 'PE',
    moraEmRecife: 'Sim',
    email: `${sub.id}@nitro.recife.pe.gov.br`,
    phone: '(81) 98800-0000',
    socialLink: sub.linkExterno || 'nitro.recife.pe.gov.br',
    foundedYear: '2023',
    category: sub.category || sub.editalName,
    categorySectionTitle: 'Selecione uma categoria / edital de inscrição (conforme regulamento do NITRO)',
    availableCategories: nitroCategories,
    description: sub.descricao,
    helpDescription: 'Explique a tecnologia patenteada, modelo de negócio, maturidade TRL e aplicabilidade prática nos desafios de inovação.',
    estagio: sub.editalId === '003' ? 'Portfólio Tecnológico & Patente INPI' : (sub.editalId === '002' ? 'Inovação Aberta ConectaLabs' : 'Mapeamento de ICTs'),
    topicosConexao: [sub.editalName, sub.Nome_nit ? `NIT: ${sub.Nome_nit}` : null, 'Patentes & Transferência', 'Inovação Aberta'].filter(Boolean) as string[],
    termosAceitos: sub.aceiteEdital,
    autorizaLGPD: sub.aceiteLgpd,
    criteriaAnswers: [
      {
        title: 'Edital & Eixo Temático do Programa',
        helpText: 'Identificação da chamada pública e escopo de enquadramento da submissão.',
        content: `${sub.editalName} (Edital ID: ${sub.editalId})`
      },
      {
        title: 'Descrição da Solução, Aplicabilidade e Justificativa',
        helpText: 'Detalhamento técnico, problema solucionado e benefícios operacionais gerados.',
        content: sub.descricao
      },
      {
        title: 'Ativos de Propriedade Intelectual & Vinculação Institucional',
        helpText: 'Registro de patentes, titularidade, NIT gestor e pessoa jurídica proponente.',
        content: `NIT / ICT: ${sub.Nome_nit || 'Não especificado'}\nEmpresa / Startup: ${sub.Nome_fantasia || 'Não especificada'}\nCNPJ: ${sub.cnpj || 'Não registrado'}`
      },
      {
        title: 'Conformidade e Aceite de Termos',
        helpText: 'Termos de submissão do edital de inovação aberta e diretrizes LGPD.',
        content: `Aceite do Edital: ${sub.aceiteEdital ? 'Concordância confirmada.' : 'Pendente'}\nConformidade LGPD: ${sub.aceiteLgpd ? 'Tratamento de dados autorizado.' : 'Pendente'}`
      }
    ],
    attachments: sub.documentos,
    links: sub.linkExterno ? [sub.linkExterno] : [],
    evaluations: evals,
    slug: sub.slug,
    rawBackendData: sub
  }
}


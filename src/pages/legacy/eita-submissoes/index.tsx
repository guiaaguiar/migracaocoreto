import { useState, useEffect, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import {
  EITA_SUBMISSIONS,
  EITA_MENTOR_EVALUATIONS,
  EITA_COMMITTEE_OPERATIONS,
  EITA_EVALUATIONS_BY_ID,
  EITA_OPERATIONS_BY_ID,
  exportToCSV
} from '../../../data/eitaData'
import type { EitaSubmission } from '../../../data/eitaData'

export default function EitaSubmissoesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDesafio, setSelectedDesafio] = useState<string>('todos')
  const [selectedCidade, setSelectedCidade] = useState<string>('todos')
  const [selectedSubmission, setSelectedSubmission] = useState<EitaSubmission | null>(null)
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards')

  // Listen to URL query parameter (?selectedId=rel_prop_0001 or ?proposal=...)
  useEffect(() => {
    const selectedIdParam = searchParams.get('selectedId')
    const proposalParam = searchParams.get('proposal') || searchParams.get('submission')

    if (selectedIdParam) {
      const found = EITA_SUBMISSIONS.find(s => s.id.toLowerCase() === selectedIdParam.toLowerCase())
      if (found) {
        setSelectedSubmission(found)
        return
      }
    }

    if (proposalParam) {
      const decoded = decodeURIComponent(proposalParam).trim()
      const lowerDecoded = decoded.toLowerCase()
      setSearchTerm(decoded)
      const found = EITA_SUBMISSIONS.find(
        s =>
          s.title.toLowerCase().includes(lowerDecoded) ||
          s.id.toLowerCase() === lowerDecoded ||
          lowerDecoded.includes(s.title.toLowerCase()) ||
          s.comoResolve.toLowerCase().includes(lowerDecoded)
      )
      if (found) {
        setSelectedSubmission(found)
      }
    }
  }, [searchParams])

  // Desafios list for filter pills
  const desafiosList = useMemo(() => {
    const categories = Array.from(new Set(EITA_SUBMISSIONS.map(s => s.desafioCategory)))
    return ['todos', ...categories]
  }, [])

  // Cidades list
  const cidadesList = useMemo(() => {
    const cities = Array.from(new Set(EITA_SUBMISSIONS.map(s => s.cidade).filter(Boolean)))
    return ['todos', ...cities]
  }, [])

  // Filter submissions
  const filteredSubmissions = useMemo(() => {
    return EITA_SUBMISSIONS.filter(sub => {
      const matchesSearch =
        !searchTerm ||
        sub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.comoResolve.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.desafio.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (sub.CNPJ && sub.CNPJ.includes(searchTerm)) ||
        sub.cidade.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesDesafio = selectedDesafio === 'todos' || sub.desafioCategory === selectedDesafio
      const matchesCidade = selectedCidade === 'todos' || sub.cidade === selectedCidade

      return matchesSearch && matchesDesafio && matchesCidade
    })
  }, [searchTerm, selectedDesafio, selectedCidade])

  // Metrics
  const totalSubmissoes = EITA_SUBMISSIONS.length
  const totalDesafios = new Set(EITA_SUBMISSIONS.map(s => s.desafio)).size
  const totalCidades = new Set(EITA_SUBMISSIONS.map(s => s.cidade)).size
  const comAvaliacoes = EITA_SUBMISSIONS.filter(s => s.evaluationIds.length > 0 || s.operationIds.length > 0).length

  // CSV column mapping
  const csvColumnMap = {
    id: 'ID da Submissão',
    title: 'Título da Proposta / Solução',
    desafioCategory: 'Eixo do Desafio',
    desafio: 'Desafio Público',
    cidade: 'Cidade',
    CNPJ: 'CNPJ',
    comoResolve: 'Descrição do Problema e Solução',
    dataCadastro: 'Data de Cadastro',
    documentos: 'Links de Documentos Anexos'
  }

  const handleOpenModal = (sub: EitaSubmission) => {
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

          {/* ── Sub-Navigation Tabs between EITA Dashboards ── */}
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
                backgroundColor: '#00a8b5',
                color: '#FFFFFF',
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(0, 168, 181, 0.3)',
              }}
            >
              <span>📋 Submissões EITA ({totalSubmissoes})</span>
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
                backgroundColor: '#FFFFFF',
                color: '#475569',
                border: '1px solid #CBD5E1',
                textDecoration: 'none',
              }}
            >
              <span>🔍 Avaliações dos Mentores ({EITA_MENTOR_EVALUATIONS.length})</span>
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
              <span>🏆 Consolidação & Operação ({EITA_COMMITTEE_OPERATIONS.length})</span>
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

          {/* ── Top Hero Card (Design System Nitro/Premio) ── */}
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
                <span style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00e5ff', display: 'block', marginBottom: '6px' }}>
                  Painel de Gestão e Acompanhamento • 3º Ciclo de Inovação Aberta
                </span>
                <h1 style={{ fontSize: '32px', fontWeight: 900, margin: 0, letterSpacing: '-0.02em' }}>
                  Submissões do e.i.t.a! Recife
                </h1>
                <p style={{ fontSize: '15px', color: '#E2E8F0', margin: '8px 0 0 0', maxWidth: '680px', lineHeight: 1.5 }}>
                  Consulte todas as propostas submetidas aos desafios públicos da Prefeitura do Recife, com soluções propostas, anexos e pareceres técnicos de avaliação.
                </p>
              </div>

              {/* Export All CSV Button */}
              <button
                onClick={() => exportToCSV('submissoes_eita_recife', filteredSubmissions, csvColumnMap)}
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
                  {totalDesafios}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#0284c7' }}>
                  Desafios Públicos
                </div>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {totalCidades}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#8b5cf6' }}>
                  Cidades Participantes
                </div>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '8px' }}>
                  {comAvaliacoes}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#10b981' }}>
                  Com Avaliações
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
                    placeholder="Pesquisar por título da solução, ID, cidade, CNPJ ou palavras do problema/solução..."
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

              {/* Desafio Filter Pills */}
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
                      backgroundColor: selectedDesafio === des ? '#00a8b5' : '#F1F5F9',
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

              {/* Cidade Filter Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#64748B', marginRight: '4px' }}>
                  Cidade:
                </span>
                {cidadesList.slice(0, 10).map(cid => (
                  <button
                    key={cid}
                    onClick={() => setSelectedCidade(cid)}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '16px',
                      fontSize: '12px',
                      fontWeight: selectedCidade === cid ? 700 : 500,
                      backgroundColor: selectedCidade === cid ? '#0284c7' : '#F8FAFC',
                      color: selectedCidade === cid ? '#FFFFFF' : '#475569',
                      border: '1px solid #E2E8F0',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {cid === 'todos' ? 'Todas as Cidades' : cid}
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
                Tente ajustar os filtros ou termos de pesquisa.
              </p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedDesafio('todos'); setSelectedCidade('todos'); }}
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
            /* ── Cards Grid ── */
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '20px' }}>
              {filteredSubmissions.map(sub => (
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
                    e.currentTarget.style.borderColor = '#00a8b5'
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
                      <span style={{ backgroundColor: '#E0F2FE', color: '#0369A1', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '12px' }}>
                        📍 {sub.cidade}
                      </span>
                    </div>

                    {/* 1. Nome do Projeto / Solução (sw_nome) */}
                    <div style={{ marginBottom: '8px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: '#00a8b5', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '2px' }}>
                        💡 Projeto / Solução (sw_nome):
                      </span>
                      <h3 style={{ fontSize: '17px', fontWeight: 900, color: '#0F172A', margin: 0, lineHeight: 1.35 }}>
                        {sub.sw_nome || sub.title}
                      </h3>
                    </div>

                    {/* 2. Quem Submeteu (pf_nome / Resp_nome) & Empresa (Nome_fantasia) */}
                    <div style={{ backgroundColor: '#F8FAFC', padding: '10px 12px', borderRadius: '8px', border: '1px solid #E2E8F0', marginBottom: '12px' }}>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>👤</span>
                        <span><strong>Quem submeteu:</strong> {sub.pf_nome || sub.Resp_nome}</span>
                      </div>
                      <div style={{ fontSize: '12px', color: '#475569', marginTop: '3px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>🏢</span>
                        <span><strong>Empresa / Startup:</strong> {sub.Nome_fantasia}</span>
                      </div>
                      <div style={{ fontSize: '11px', color: '#64748B', marginTop: '3px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>📍</span>
                        <span>{sub.cidade} • Desafio: {sub.desafioCategory}</span>
                      </div>
                    </div>

                    {/* Problem/Solution Excerpt */}
                    <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.5, margin: '0 0 16px 0', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {sub.comoResolve || 'Sem descrição textual detalhada.'}
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
                      {(sub.evaluationIds.length > 0 || sub.operationIds.length > 0) && (
                        <span style={{ backgroundColor: '#FEF3C7', color: '#B45309', fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '6px' }}>
                          ⭐️ Avaliada
                        </span>
                      )}
                    </div>

                    <button
                      onClick={e => {
                        e.stopPropagation()
                        handleOpenModal(sub)
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
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '30%' }}>Proposta / Solução</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '25%' }}>Desafio Público</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '15%' }}>Cidade</th>
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
                      <td style={{ padding: '16px 20px', fontSize: '14px', fontWeight: 800, color: '#0F172A' }}>{sub.title}</td>
                      <td style={{ padding: '16px 20px', fontSize: '13px', color: '#00a8b5', fontWeight: 600 }}>{sub.desafioCategory}</td>
                      <td style={{ padding: '16px 20px', fontSize: '13px', color: '#475569' }}>{sub.cidade}</td>
                      <td style={{ padding: '16px 20px', fontSize: '13px', color: '#475569' }}>{sub.documentos.length} anexo{sub.documentos.length > 1 ? 's' : ''}</td>
                      <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                        <button
                          onClick={e => {
                            e.stopPropagation()
                            handleOpenModal(sub)
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

      {/* ── MODAL "DETALHES DA SUBMISSÃO EITA" ── */}
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
              onClick={() => exportToCSV(`submissao_eita_${selectedSubmission.id}`, [selectedSubmission], csvColumnMap)}
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
              <span>Exportar Dados da Submissão em CSV</span>
            </button>

            {/* Modal Title & Identification */}
            <div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap' }}>
                <span style={{ backgroundColor: '#022340', color: '#FFFFFF', fontSize: '12px', fontWeight: 800, padding: '4px 10px', borderRadius: '6px' }}>
                  {selectedSubmission.id}
                </span>
                <span style={{ backgroundColor: '#E0F2FE', color: '#0369A1', fontSize: '12px', fontWeight: 700, padding: '4px 10px', borderRadius: '6px' }}>
                  📍 {selectedSubmission.cidade}
                </span>
                {selectedSubmission.CNPJ && (
                  <span style={{ backgroundColor: '#F1F5F9', color: '#475569', fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '6px' }}>
                    CNPJ: {selectedSubmission.CNPJ}
                  </span>
                )}
                {selectedSubmission.dataCadastro && (
                  <span style={{ fontSize: '12px', color: '#64748B' }}>
                    📅 {selectedSubmission.dataCadastro}
                  </span>
                )}
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0F172A', margin: '0 0 12px 0', lineHeight: 1.3 }}>
                {selectedSubmission.title}
              </h2>

              {/* Submitter & Company Details Box */}
              <div style={{ backgroundColor: '#F8FAFC', borderRadius: '10px', padding: '16px 20px', border: '1px solid #E2E8F0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', marginBottom: '12px' }}>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                    👤 Quem Submeteu / Autor (pf_nome / Resp_nome):
                  </span>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A' }}>
                    {selectedSubmission.pf_nome || selectedSubmission.Resp_nome}
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                    🏢 Empresa / Startup (Nome_fantasia):
                  </span>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A' }}>
                    {selectedSubmission.Nome_fantasia}
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                    📍 Localização / Cidade:
                  </span>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A' }}>
                    {selectedSubmission.cidade}
                  </div>
                </div>

                {selectedSubmission.CNPJ && (
                  <div>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                      📄 CNPJ Registrado:
                    </span>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: '#047857' }}>
                      {selectedSubmission.CNPJ}
                    </div>
                  </div>
                )}
              </div>

              <div style={{ backgroundColor: '#F0FDFA', border: '1px solid #CCFBF1', borderRadius: '8px', padding: '12px 16px', fontSize: '13px', color: '#0F766E', fontWeight: 600 }}>
                🎯 <strong>Desafio Público Vinculado:</strong> {selectedSubmission.desafio}
              </div>
            </div>

            {/* ── Problema e Solução Proposta ── */}
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0B4F8C', margin: '0 0 10px 0', borderBottom: '2px solid #E2E8F0', paddingBottom: '6px' }}>
                💡 Problema e Solução Proposta
              </h3>
              <div style={{ backgroundColor: '#F8FAFC', padding: '16px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '14px', lineHeight: 1.7, color: '#1E293B', whiteSpace: 'pre-line' }}>
                {selectedSubmission.comoResolve || 'Nenhum detalhe textual registrado.'}
              </div>
            </div>

            {/* ── Documentos e Anexos ── */}
            {selectedSubmission.documentos.length > 0 && (
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0B4F8C', margin: '0 0 10px 0', borderBottom: '2px solid #E2E8F0', paddingBottom: '6px' }}>
                  📎 Documentos e Anexos Submetidos ({selectedSubmission.documentos.length})
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
                          backgroundColor: '#F8FAFC',
                          border: '1px solid #CBD5E1',
                          borderRadius: '8px',
                          color: '#0284c7',
                          textDecoration: 'none',
                          fontSize: '13px',
                          fontWeight: 700,
                          transition: 'all 0.15s ease',
                        }}
                      >
                        <span>📄 {decodedName}</span>
                        <span style={{ fontSize: '12px', color: '#64748B', fontWeight: 600 }}>Visualizar / Baixar ↗</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            )}

            {/* ── Avaliações dos Mentores Vinculadas ── */}
            {selectedSubmission.evaluationIds.length > 0 && (
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0B4F8C', margin: '0 0 10px 0', borderBottom: '2px solid #E2E8F0', paddingBottom: '6px' }}>
                  🔍 Avaliações dos Mentores ({selectedSubmission.evaluationIds.length})
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {selectedSubmission.evaluationIds.map(evId => {
                    const ev = EITA_EVALUATIONS_BY_ID[evId]
                    if (!ev) return null
                    return (
                      <div key={evId} style={{ backgroundColor: '#F0F9FF', border: '1px solid #BAE6FD', borderRadius: '8px', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                        <div>
                          <div style={{ fontSize: '14px', fontWeight: 800, color: '#0369A1' }}>
                            👤 Mentor: {ev.mentor}
                          </div>
                          <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>
                            {ev.desafioCategory} • {ev.createdDate || 'Data não registrada'}
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                          {ev.propostaScore !== null && (
                            <span style={{ backgroundColor: '#FFFFFF', color: '#0284c7', border: '1px solid #BAE6FD', fontSize: '13px', fontWeight: 900, padding: '4px 10px', borderRadius: '12px' }}>
                              Score: {ev.propostaScore.toFixed(2)} ⭐️
                            </span>
                          )}
                          <Link
                            to={`/legacy/eita-avaliacoes-mentores?search=${encodeURIComponent(ev.id)}`}
                            style={{ fontSize: '12px', color: '#0284c7', fontWeight: 700, textDecoration: 'none' }}
                          >
                            Ver no Painel ↗
                          </Link>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* ── Memória de Cálculo da Banca ── */}
            {selectedSubmission.operationIds.length > 0 && (
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0B4F8C', margin: '0 0 10px 0', borderBottom: '2px solid #E2E8F0', paddingBottom: '6px' }}>
                  🏆 Memória de Cálculo e Nota Consolidada da Banca ({selectedSubmission.operationIds.length})
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {selectedSubmission.operationIds.map(opId => {
                    const op = EITA_OPERATIONS_BY_ID[opId]
                    if (!op) return null
                    return (
                      <div key={opId} style={{ backgroundColor: '#FAF5FF', border: '1px solid #E9D5FF', borderRadius: '8px', padding: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                          <span style={{ fontSize: '13px', fontWeight: 800, color: '#7E22CE' }}>
                            Registro: {op.id}
                          </span>
                          {op.notaFinal !== null && (
                            <span style={{ backgroundColor: '#7E22CE', color: '#FFFFFF', fontSize: '14px', fontWeight: 900, padding: '4px 12px', borderRadius: '12px' }}>
                              Nota Final: {op.notaFinal.toFixed(2)} ⭐️
                            </span>
                          )}
                        </div>
                        {op.criteriosENota && (
                          <div style={{ backgroundColor: '#FFFFFF', padding: '12px', borderRadius: '6px', border: '1px solid #E9D5FF', fontSize: '12px', color: '#334155', whiteSpace: 'pre-line', lineHeight: 1.6, maxHeight: '160px', overflowY: 'auto' }}>
                            {op.criteriosENota}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Close Button Footer */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
              <button
                onClick={handleCloseModal}
                style={{
                  backgroundColor: '#00a8b5',
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

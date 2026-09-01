import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import ProgramNavigationHeader from '../../../components/ProgramNavigationHeader'
import UnifiedSubmissionModal, { type SubmissionData, type EvaluationItem, type CategoryOption } from '../../../components/UnifiedSubmissionModal'
import {
  EITA_SUBMISSIONS,
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

          {/* ── Sub-Navigation Bar between Programs & Dashboards ── */}
          <ProgramNavigationHeader currentProgramId="eita" activeTab="submissions" />

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

      {/* ── MODAL UNIVERSAL "DETALHES DA SUBMISSÃO EITA" (PADRÃO BUBBLE BO) ── */}
      {selectedSubmission && (
        <UnifiedSubmissionModal
          submission={mapEitaToSubmissionData(selectedSubmission)}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

function mapEitaToSubmissionData(sub: EitaSubmission): SubmissionData {
  const evals: EvaluationItem[] = []

  // Avaliações dos Mentores
  sub.evaluationIds.forEach(evId => {
    const ev = EITA_EVALUATIONS_BY_ID[evId]
    if (ev) {
      evals.push({
        id: ev.id,
        phase: 'Avaliação Técnica / Mentores',
        evaluatorName: ev.mentor,
        score: ev.propostaScore,
        comment: `Desafio: ${ev.desafioCategory}. Data de registro: ${ev.createdDate || 'Recente'}. Média proposta: ${ev.propostaMedia || '-'}`
      })
    }
  })

  // Operação / Banca
  sub.operationIds.forEach(opId => {
    const op = EITA_OPERATIONS_BY_ID[opId]
    if (op) {
      evals.push({
        id: op.id,
        phase: 'Comitê e Banca de Operação',
        evaluatorName: 'Comitê de Avaliação E.I.T.A.!',
        score: op.notaFinal,
        comment: op.criteriosENota || 'Nota consolidada pela banca avaliadora.'
      })
    }
  })

  // Categorias / Eixos de Desafios EITA vinculados ao registro do banco
  const desLower = (sub.desafioCategory || sub.desafio || '').toLowerCase()
  const eitaCategories: CategoryOption[] = [
    {
      id: 'residuos',
      title: 'Resíduos Sólidos & Limpeza Urbana',
      subtitle: 'Desafio EITA',
      selected: desLower.includes('resíduo') || desLower.includes('residuo') || desLower.includes('limpeza') || desLower.includes('lixo')
    },
    {
      id: 'defesa_civil',
      title: 'Defesa Civil & Monitoramento Climático',
      subtitle: 'Desafio EITA',
      selected: desLower.includes('defesa') || desLower.includes('clima') || desLower.includes('alagamento') || desLower.includes('morro')
    },
    {
      id: 'mobilidade',
      title: 'Mobilidade Urbana & Gestão de Tráfego',
      subtitle: 'Desafio EITA',
      selected: desLower.includes('mobilidade') || desLower.includes('tráfego') || desLower.includes('transporte') || desLower.includes('sinal')
    },
    {
      id: 'saude',
      title: 'Saúde Pública & Gestão de Consultas',
      subtitle: 'Desafio EITA',
      selected: desLower.includes('saúde') || desLower.includes('saude') || desLower.includes('consulta') || desLower.includes('medic')
    },
    {
      id: 'educacao',
      title: 'Educação & Tecnologia em Sala de Aula',
      subtitle: 'Desafio EITA',
      selected: desLower.includes('educação') || desLower.includes('educacao') || desLower.includes('escola') || desLower.includes('aluno')
    },
    {
      id: 'energia',
      title: 'Eficiência Energética & Iluminação',
      subtitle: 'Desafio EITA',
      selected: desLower.includes('energia') || desLower.includes('iluminação') || desLower.includes('eletric')
    },
    {
      id: 'empreendedorismo',
      title: 'Empreendedorismo & Negócios Locais',
      subtitle: 'Desafio EITA',
      selected: desLower.includes('empreendedorismo') || desLower.includes('negócio') || desLower.includes('empresa') || desLower.includes('desenvolvimento')
    },
    {
      id: 'cultura',
      title: 'Cultura, Turismo & Economia Criativa',
      subtitle: 'Desafio EITA',
      selected: desLower.includes('cultura') || desLower.includes('turismo') || desLower.includes('criativ')
    }
  ]

  return {
    id: sub.id,
    programName: '3º Ciclo E.I.T.A.! Recife',
    title: sub.sw_nome || sub.title,
    organization: sub.Nome_fantasia || (sub.CNPJ ? `CNPJ: ${sub.CNPJ}` : 'Equipe Proponente'),
    cnpj: sub.CNPJ,
    city: sub.cidade || 'Recife',
    state: 'PE',
    moraEmRecife: sub.cidade?.toLowerCase() === 'recife' ? 'Sim' : 'Não',
    email: `${sub.id}@eita.recife.pe.gov.br`,
    responsibleName: sub.pf_nome || sub.Resp_nome || 'Proponente / Autor',
    phone: '(81) 98800-0000',
    socialLink: 'eita.recife.pe.gov.br',
    foundedYear: '2023',
    category: sub.desafioCategory || sub.desafio,
    categorySectionTitle: 'Selecione uma categoria / eixo do desafio público (conforme regulamento do E.I.T.A!)',
    availableCategories: eitaCategories,
    description: sub.comoResolve,
    helpDescription: `Explique de forma clara como sua solução endereça diretamente o desafio público selecionado: "${sub.desafio}". Aponte a dor central, os objetivos da proposta e o impacto esperado.`,
    statusFase: sub.isSegundaFase ? 'Classificado para a 2ª Fase' : '1ª Fase / Triagem Técnica',
    topicosConexao: [sub.desafioCategory, 'GovTech', 'Inovação Aberta', 'Prefeitura do Recife', sub.cidade].filter(Boolean) as string[],
    termosAceitos: true,
    autorizaLGPD: true,
    criteriaAnswers: [
      {
        title: 'Desafio Público Vinculado',
        helpText: 'Problema público prioritário endereçado por esta solução no ecossistema do Recife.',
        content: sub.desafio
      },
      {
        title: 'Solução e Metodologia de Implementação',
        helpText: 'Detalhamento da abordagem metodológica, tecnologia empregada e modelo de operação.',
        content: sub.comoResolve
      },
      {
        title: 'Estrutura da Equipe e Capacidade Técnica',
        helpText: 'Perfil dos integrantes, dedicação e competências técnicas para entrega.',
        content: `Autor / Responsável: ${sub.pf_nome || sub.Resp_nome} • Entidade: ${sub.Nome_fantasia} • Município: ${sub.cidade}`
      }
    ],
    attachments: sub.documentos,
    evaluations: evals,
    status: sub.isSegundaFase ? 'Segunda Fase' : 'Primeira Fase',
    slug: sub.slug,
    rawBackendData: sub
  }
}


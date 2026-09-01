import React, { useState } from 'react'

// Interface flexível para suportar qualquer programa e todos os dados correlacionados
export interface CategoryOption {
  id: string
  title: string
  subtitle?: string
}

export interface EvaluationItem {
  id: string
  phase?: string
  evaluatorName?: string
  evaluatorRole?: string
  score?: number | null
  criteriaScores?: { name: string; score: number | string; weight?: number | string }[]
  comment?: string
  recommendation?: string
  date?: string
  rawValues?: string[]
}

export interface SubmissionData {
  id: string
  programName?: string
  title: string
  organization?: string
  city?: string
  state?: string
  email?: string
  responsibleName?: string
  phone?: string
  socialLink?: string
  foundedYear?: string | number
  category?: string
  availableCategories?: CategoryOption[]
  description?: string
  helpDescription?: string
  
  // Dados Cadastrais Adicionais dos Formulários de Inscrição
  cpf?: string | null
  cnpj?: string | null
  nomeSocial?: string | null
  genero?: string | null
  etnia?: string | null
  dataNascimento?: string | null
  moraEmRecife?: string | null
  escolaridade?: string | null
  instituicaoEnsino?: string | null
  curso?: string | null
  lattes?: string | null
  linkedin?: string | null
  atuacaoProfissional?: string | null
  cargo?: string | null
  estagio?: string | null
  fomentoSolicitado?: string | null
  statusFase?: string | null
  topicosConexao?: string[]
  termosAceitos?: boolean
  autorizaLGPD?: boolean
  notificacoes?: { email?: boolean; whatsapp?: boolean }

  // Critérios de avaliação / Respostas do candidato
  criteriaAnswers?: {
    title: string
    helpText?: string
    content: string
  }[]

  // Materiais complementares / Anexos
  attachments?: (string | { name: string; url?: string; type?: string })[]
  links?: string[]

  // Avaliações correlacionadas
  evaluations?: EvaluationItem[]

  // Metadados / Flags
  status?: string
  primeiraFase?: boolean
  segundaFase?: boolean
  duplicada?: boolean
  score?: number | null
  submittedAt?: string
  slug?: string

  // Dados brutos adicionais do backend
  rawBackendData?: Record<string, any>
}

interface UnifiedSubmissionModalProps {
  submission: SubmissionData
  onClose: () => void
}

// Formatador avançado de BBCode e formatação do Bubble
export function renderFormattedContent(text: string | undefined): React.ReactNode {
  if (!text) return <span style={{ color: '#94A3B8', fontStyle: 'italic' }}>Não informado</span>

  let formatted = text
    .replace(/\\r\\n/g, '\n')
    .replace(/\\n/g, '\n')
    .replace(/\r\n/g, '\n')

  // Parse [b]...[/b]
  formatted = formatted.replace(/\[b\]([\s\S]*?)\[\/b\]/gi, '<strong>$1</strong>')
  // Parse [i]...[/i]
  formatted = formatted.replace(/\[i\]([\s\S]*?)\[\/i\]/gi, '<em>$1</em>')
  // Parse [u]...[/u]
  formatted = formatted.replace(/\[u\]([\s\S]*?)\[\/u\]/gi, '<u>$1</u>')
  // Parse [s]...[/s]
  formatted = formatted.replace(/\[s\]([\s\S]*?)\[\/s\]/gi, '<s>$1</s>')
  // Parse [h1-h4]
  formatted = formatted.replace(/\[h1\]([\s\S]*?)\[\/h1\]/gi, '<h3 style="font-weight:800; font-size:18px; margin:12px 0 6px 0; color:#0F172A;">$1</h3>')
  formatted = formatted.replace(/\[h2\]([\s\S]*?)\[\/h2\]/gi, '<h4 style="font-weight:800; font-size:16px; margin:10px 0 4px 0; color:#0F172A;">$1</h4>')
  formatted = formatted.replace(/\[h3\]([\s\S]*?)\[\/h3\]/gi, '<h5 style="font-weight:800; font-size:15px; margin:8px 0 4px 0; color:#0F172A;">$1</h5>')
  formatted = formatted.replace(/\[h4\]([\s\S]*?)\[\/h4\]/gi, '<h6 style="font-weight:800; font-size:14px; margin:8px 0 4px 0; color:#0F172A;">$1</h6>')
  
  // Parse [color=...]...[/color]
  formatted = formatted.replace(/\[color=([^\]]+)\]([\s\S]*?)\[\/color\]/gi, '<span style="color:$1;">$2</span>')
  // Parse [highlight=...]...[/highlight]
  formatted = formatted.replace(/\[highlight=([^\]]+)\]([\s\S]*?)\[\/highlight\]/gi, '<span style="background-color:$1;">$2</span>')
  // Parse [justify]
  formatted = formatted.replace(/\[justify\]([\s\S]*?)\[\/justify\]/gi, '<div style="text-align:justify;">$1</div>')
  
  // Parse list structures [ml][ul][li...]...[/li][/ul][/ml]
  formatted = formatted.replace(/\[ml\]([\s\S]*?)\[\/ml\]/gi, '$1')
  formatted = formatted.replace(/\[ul\]([\s\S]*?)\[\/ul\]/gi, '<ul style="margin:8px 0 8px 20px; padding-left:10px;">$1</ul>')
  formatted = formatted.replace(/\[ol\]([\s\S]*?)\[\/ol\]/gi, '<ol style="margin:8px 0 8px 20px; padding-left:10px;">$1</ol>')
  formatted = formatted.replace(/\[li[^\]]*\]([\s\S]*?)\[\/li\]/gi, '<li style="margin-bottom:4px; line-height:1.6;">$1</li>')
  
  // Parse [url=...]...[/url] and [url]...[/url]
  formatted = formatted.replace(/\[url=([^\]]+)\]([\s\S]*?)\[\/url\]/gi, '<a href="$1" target="_blank" rel="noreferrer" style="color:#0284c7; text-decoration:underline; font-weight:600;">$2</a>')
  formatted = formatted.replace(/\[url\]([\s\S]*?)\[\/url\]/gi, '<a href="$1" target="_blank" rel="noreferrer" style="color:#0284c7; text-decoration:underline; font-weight:600;">$1</a>')

  // Clean any remaining unknown bbcode tags
  formatted = formatted.replace(/\[\/?[a-z0-9_=-]+[^\]]*\]/gi, '')

  // Convert newlines to breaks if not already wrapped in block elements
  const lines = formatted.split('\n')
  const htmlContent = lines.map(line => {
    if (line.trim().startsWith('<') && line.trim().endsWith('>')) return line
    return line ? `<p style="margin: 0 0 10px 0; line-height: 1.65; color: #1E293B;">${line}</p>` : '<div style="height: 6px;"></div>'
  }).join('')

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      style={{
        fontSize: '14px',
        color: '#1E293B',
        fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    />
  )
}

// Barra de Ferramentas Estilo WYSIWYG do Bubble
function BubbleEditorToolbar() {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1.5px solid #CBD5E1',
        padding: '8px 12px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        flexWrap: 'wrap',
        fontSize: '12px',
        color: '#475569',
        userSelect: 'none',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', border: '1px solid #E2E8F0', borderRadius: '4px', padding: '3px 6px', backgroundColor: '#F8FAFC' }}>
        <span>Sans Serif</span>
        <span style={{ fontSize: '9px' }}>▾</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', border: '1px solid #E2E8F0', borderRadius: '4px', padding: '3px 6px', backgroundColor: '#F8FAFC' }}>
        <span>Normal</span>
        <span style={{ fontSize: '9px' }}>▾</span>
      </div>

      <div style={{ width: '1px', height: '18px', backgroundColor: '#CBD5E1', margin: '0 4px' }} />

      <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
        <button type="button" title="Negrito" style={{ background: 'none', border: 'none', fontWeight: 900, cursor: 'default', padding: '2px 5px', color: '#1E293B' }}>B</button>
        <button type="button" title="Itálico" style={{ background: 'none', border: 'none', fontStyle: 'italic', cursor: 'default', padding: '2px 5px', color: '#1E293B' }}>I</button>
        <button type="button" title="Sublinhado" style={{ background: 'none', border: 'none', textDecoration: 'underline', cursor: 'default', padding: '2px 5px', color: '#1E293B' }}>U</button>
        <button type="button" title="Tachado" style={{ background: 'none', border: 'none', textDecoration: 'line-through', cursor: 'default', padding: '2px 5px', color: '#1E293B' }}>S</button>
      </div>

      <div style={{ width: '1px', height: '18px', backgroundColor: '#CBD5E1', margin: '0 4px' }} />

      <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
        <span title="Cor da Fonte" style={{ fontWeight: 800, color: '#0F172A', cursor: 'default', padding: '2px 4px' }}>A</span>
        <span title="Destaque" style={{ cursor: 'default', fontSize: '13px' }}>🎨</span>
        <span title="Sobrescrito" style={{ fontSize: '11px', fontWeight: 600 }}>x²</span>
        <span title="Subscrito" style={{ fontSize: '11px', fontWeight: 600 }}>x₂</span>
      </div>

      <div style={{ width: '1px', height: '18px', backgroundColor: '#CBD5E1', margin: '0 4px' }} />

      <div style={{ display: 'flex', gap: '6px', alignItems: 'center', fontWeight: 700, fontSize: '11px' }}>
        <span>H1</span>
        <span>H2</span>
        <span>H3</span>
        <span>H4</span>
        <span>❝</span>
      </div>

      <div style={{ display: 'flex', gap: '6px', alignItems: 'center', fontSize: '12px' }}>
        <span title="Inserir Link">🔗</span>
        <span title="Inserir Imagem">🖼️</span>
        <span title="Inserir Vídeo">🎬</span>
      </div>
    </div>
  )
}

// Caixa de Exibição com Barra WYSIWYG
function BubbleRichTextBox({ content }: { content: string | undefined }) {
  return (
    <div
      style={{
        border: '1.5px solid #005696',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
        marginTop: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}
    >
      <BubbleEditorToolbar />
      <div style={{ padding: '16px 20px', minHeight: '100px', backgroundColor: '#FFFFFF' }}>
        {renderFormattedContent(content)}
      </div>
    </div>
  )
}

// Input Field Readonly Styled como no Bubble
function BubbleInputField({ label, value, fullWidth = false }: { label?: string; value: string | number | undefined | null; fullWidth?: boolean }) {
  return (
    <div style={{ flex: fullWidth ? '1 1 100%' : '1 1 200px', minWidth: '180px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {label && (
        <label style={{ fontSize: '12px', fontWeight: 600, color: '#475569' }}>
          {label}
        </label>
      )}
      <div
        style={{
          border: '1.5px solid #CBD5E1',
          borderRadius: '8px',
          padding: '10px 14px',
          backgroundColor: '#FFFFFF',
          fontSize: '14px',
          color: '#0F172A',
          fontWeight: 600,
          minHeight: '42px',
          display: 'flex',
          alignItems: 'center',
          wordBreak: 'break-word',
        }}
      >
        {value !== undefined && value !== null && value !== '' ? String(value) : <span style={{ color: '#94A3B8', fontWeight: 400 }}>-</span>}
      </div>
    </div>
  )
}

export default function UnifiedSubmissionModal({ submission, onClose }: UnifiedSubmissionModalProps) {
  // Controle de sanfonas
  const [openSec1, setOpenSec1] = useState(true)
  const [openSec2, setOpenSec2] = useState(true)
  const [openSec3, setOpenSec3] = useState(true)
  const [openSec4, setOpenSec4] = useState(true)
  const [openSec5, setOpenSec5] = useState(true)
  const [openSec6, setOpenSec6] = useState(false)
  const [copied, setCopied] = useState(false)

  // Suporte a tecla ESC para fechar
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const toggleAll = (expand: boolean) => {
    setOpenSec1(expand)
    setOpenSec2(expand)
    setOpenSec3(expand)
    setOpenSec4(expand)
    setOpenSec5(expand)
    setOpenSec6(expand)
  }

  const handleCopyId = () => {
    navigator.clipboard.writeText(submission.id)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToSection = (id: string, expandFn: () => void) => {
    expandFn()
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  const defaultCategories: CategoryOption[] = [
    { id: 'inov_emp', title: 'Case de Inovação Empresarial', subtitle: 'Inovação Empresarial' },
    { id: 'inov_esg', title: 'Case de Inovação em ESG', subtitle: 'Inovação Empresarial' },
    { id: 'startup_asc', title: 'Startup Ascensão', subtitle: 'Startups Inovadoras' },
    { id: 'startup_trac', title: 'Startup Tração', subtitle: 'Startups Inovadoras' },
    { id: 'startup_cidade', title: 'Startup conectada com a Cidade', subtitle: 'Startups Inovadoras' },
    { id: 'case_emp', title: 'Case de Empreendedorismo', subtitle: 'Educação Empreendedora' },
    { id: 'case_letra', title: 'Case de Letramento', subtitle: 'Educação Empreendedora' },
    { id: 'pesq_ext', title: 'Pesquisa & Extensão', subtitle: 'Instituição de Ensino' },
    { id: 'inst_ensino', title: 'Instituição de Ensino', subtitle: 'Instituição de Ensino' },
    { id: 'deep_tech', title: 'Deep Tech Destaque', subtitle: 'Startups Inovadoras' },
  ]

  const categories = submission.availableCategories && submission.availableCategories.length > 0
    ? submission.availableCategories
    : defaultCategories

  const selectedCat = (submission.category || '').toLowerCase().trim()

  const isSelectedCategory = (cat: CategoryOption) => {
    if (!selectedCat) return false
    const catTitle = cat.title.toLowerCase().trim()
    const catSub = (cat.subtitle || '').toLowerCase().trim()
    return (
      selectedCat.includes(catTitle) ||
      catTitle.includes(selectedCat) ||
      (catSub && selectedCat.includes(catSub)) ||
      (selectedCat.includes('pesquisa') && catTitle.includes('pesquisa')) ||
      (selectedCat.includes('ascen') && catTitle.includes('ascen')) ||
      (selectedCat.includes('tração') && catTitle.includes('tração')) ||
      (selectedCat.includes('cidade') && catTitle.includes('cidade')) ||
      (selectedCat.includes('esg') && catTitle.includes('esg'))
    )
  }

  // Decodifica nomes de arquivos URL-encoded
  const decodeFilename = (raw: string) => {
    try {
      const decoded = decodeURIComponent(raw)
      const clean = decoded.split('/').pop() || decoded
      return clean.replace(/^[0-9x_]+-?/, '')
    } catch {
      return raw
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '16px',
        fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          maxWidth: '1120px',
          width: '100%',
          maxHeight: '94vh',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #E2E8F0',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* ── Top Header Bar Sticky ── */}
        <div
          style={{
            padding: '20px 28px',
            borderBottom: '1px solid #E2E8F0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            backgroundColor: '#FFFFFF',
            zIndex: 10,
            boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span
              style={{
                backgroundColor: '#EA580C',
                color: '#FFFFFF',
                fontSize: '12px',
                fontWeight: 800,
                padding: '4px 10px',
                borderRadius: '6px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              Inscrição
            </span>

            <h1 style={{ fontSize: '20px', fontWeight: 900, color: '#0F172A', margin: 0, letterSpacing: '-0.02em' }}>
              {submission.title || 'DETALHES DA INSCRIÇÃO'}
            </h1>

            <button
              onClick={handleCopyId}
              title="Clique para copiar o ID"
              style={{
                backgroundColor: copied ? '#DCFCE7' : '#F1F5F9',
                color: copied ? '#16A34A' : '#475569',
                fontSize: '12px',
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: '6px',
                border: copied ? '1px solid #86EFAC' : '1px solid #CBD5E1',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                transition: 'all 0.15s ease',
              }}
            >
              <span>ID: {submission.id}</span>
              <span>{copied ? '✓ Copiado' : '📋'}</span>
            </button>

            {submission.programName && (
              <span
                style={{
                  backgroundColor: '#E0F2FE',
                  color: '#0284C7',
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '6px',
                }}
              >
                {submission.programName}
              </span>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Botão de Fechar com Borda Vermelha */}
            <button
              onClick={onClose}
              aria-label="Fechar Modal (ESC)"
              title="Fechar (ESC)"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '6px',
                border: '1.5px solid #EF4444',
                backgroundColor: '#FFFFFF',
                color: '#EF4444',
                fontSize: '16px',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#FEF2F2'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#FFFFFF'
              }}
            >
              ✕
            </button>
          </div>
        </div>

        {/* ── Sub-Bar: Quick Navigation Chips & Controls ── */}
        <div
          style={{
            backgroundColor: '#F8FAFC',
            borderBottom: '1px solid #E2E8F0',
            padding: '10px 28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          {/* Quick Jump Buttons */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginRight: '4px' }}>
              Ir para:
            </span>
            <button
              onClick={() => scrollToSection('sec-1-identificacao', () => setOpenSec1(true))}
              style={{ padding: '4px 10px', borderRadius: '6px', border: '1px solid #CBD5E1', backgroundColor: '#FFFFFF', fontSize: '12px', fontWeight: 600, color: '#334155', cursor: 'pointer' }}
            >
              1. Identificação
            </button>
            <button
              onClick={() => scrollToSection('sec-2-descricao', () => setOpenSec2(true))}
              style={{ padding: '4px 10px', borderRadius: '6px', border: '1px solid #CBD5E1', backgroundColor: '#FFFFFF', fontSize: '12px', fontWeight: 600, color: '#334155', cursor: 'pointer' }}
            >
              2. Descrição
            </button>
            <button
              onClick={() => scrollToSection('sec-3-criterios', () => setOpenSec3(true))}
              style={{ padding: '4px 10px', borderRadius: '6px', border: '1px solid #CBD5E1', backgroundColor: '#FFFFFF', fontSize: '12px', fontWeight: 600, color: '#334155', cursor: 'pointer' }}
            >
              3. Critérios ({submission.criteriaAnswers?.length || 0})
            </button>
            <button
              onClick={() => scrollToSection('sec-4-anexos', () => setOpenSec4(true))}
              style={{ padding: '4px 10px', borderRadius: '6px', border: '1px solid #CBD5E1', backgroundColor: '#FFFFFF', fontSize: '12px', fontWeight: 600, color: '#334155', cursor: 'pointer' }}
            >
              4. Anexos ({submission.attachments?.length || 0})
            </button>
            <button
              onClick={() => scrollToSection('sec-5-avaliacoes', () => setOpenSec5(true))}
              style={{ padding: '4px 10px', borderRadius: '6px', border: '1px solid #CBD5E1', backgroundColor: '#FFFFFF', fontSize: '12px', fontWeight: 600, color: '#0284C7', cursor: 'pointer' }}
            >
              5. Avaliações ({submission.evaluations?.length || 0})
            </button>
            <button
              onClick={() => scrollToSection('sec-6-json', () => setOpenSec6(true))}
              style={{ padding: '4px 10px', borderRadius: '6px', border: '1px solid #CBD5E1', backgroundColor: '#FFFFFF', fontSize: '12px', fontWeight: 600, color: '#64748B', cursor: 'pointer' }}
            >
              6. Dados Brutos
            </button>
          </div>

          {/* Expand/Collapse Toggle */}
          <div style={{ display: 'flex', gap: '6px' }}>
            <button
              onClick={() => toggleAll(true)}
              style={{ padding: '4px 10px', borderRadius: '6px', border: '1px solid #E2E8F0', backgroundColor: '#FFFFFF', fontSize: '11px', fontWeight: 700, color: '#0284C7', cursor: 'pointer' }}
            >
              Expandir Tudo ▾
            </button>
            <button
              onClick={() => toggleAll(false)}
              style={{ padding: '4px 10px', borderRadius: '6px', border: '1px solid #E2E8F0', backgroundColor: '#FFFFFF', fontSize: '11px', fontWeight: 700, color: '#64748B', cursor: 'pointer' }}
            >
              Recolher Tudo ▴
            </button>
          </div>
        </div>

        {/* ── Modal Body Content ── */}
        <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: '24px' }}>

          {/* ══════════════════════════════════════════════════════════════
              SEÇÃO 1: IDENTIFICAÇÃO DA INICIATIVA & DADOS CADASTRAIS
             ══════════════════════════════════════════════════════════════ */}
          <div id="sec-1-identificacao" style={{ border: '1px solid #E2E8F0', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#FFFFFF' }}>
            <button
              onClick={() => setOpenSec1(!openSec1)}
              style={{
                width: '100%',
                padding: '16px 20px',
                backgroundColor: '#F8FAFC',
                border: 'none',
                borderBottom: openSec1 ? '1px solid #E2E8F0' : 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                1. IDENTIFICAÇÃO DA INICIATIVA & FORMULÁRIO DO PARTICIPANTE
              </span>
              <span style={{ fontSize: '18px', color: '#64748B', fontWeight: 700, transform: openSec1 ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s' }}>
                ⌵
              </span>
            </button>

            {openSec1 && (
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Linha 1: Nome da Iniciativa */}
                <BubbleInputField label="Nome da Iniciativa / Proposta / Solução" value={submission.title} fullWidth />

                {/* Linha 2: Organização e CNPJ */}
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <BubbleInputField label="Organização / Instituição / Empresa" value={submission.organization} fullWidth={!submission.cnpj} />
                  {submission.cnpj && <BubbleInputField label="CNPJ" value={submission.cnpj} />}
                </div>

                {/* Linha 3: Responsável, Nome Social e CPF */}
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <BubbleInputField label="Nome do Responsável / Autor" value={submission.responsibleName} />
                  {submission.nomeSocial && <BubbleInputField label="Nome Social" value={submission.nomeSocial} />}
                  {submission.cpf && <BubbleInputField label="CPF do Inscrito" value={submission.cpf} />}
                </div>

                {/* Linha 4: E-mail e Telefone */}
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <BubbleInputField label="E-mail de Contato" value={submission.email} />
                  <BubbleInputField label="Telefone / WhatsApp" value={submission.phone} />
                </div>

                {/* Linha 5: Cidade, Estado e Mora em Recife */}
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <BubbleInputField label="Município / Cidade" value={submission.city || 'Recife'} />
                  <div style={{ flex: '0 0 120px' }}>
                    <BubbleInputField label="UF" value={submission.state || 'PE'} />
                  </div>
                  {submission.moraEmRecife && (
                    <div style={{ flex: '0 0 160px' }}>
                      <BubbleInputField label="Reside no Recife?" value={submission.moraEmRecife} />
                    </div>
                  )}
                </div>

                {/* Linha 6 (Demografia): Gênero, Etnia e Data de Nascimento (se presentes) */}
                {(submission.genero || submission.etnia || submission.dataNascimento) && (
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    {submission.genero && <BubbleInputField label="Identidade de Gênero" value={submission.genero} />}
                    {submission.etnia && <BubbleInputField label="Identificação Étnico-Racial" value={submission.etnia} />}
                    {submission.dataNascimento && <BubbleInputField label="Data de Nascimento" value={submission.dataNascimento} />}
                  </div>
                )}

                {/* Linha 7 (Formação Acadêmica): Escolaridade, Curso e Instituição */}
                {(submission.escolaridade || submission.curso || submission.instituicaoEnsino) && (
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    {submission.escolaridade && <BubbleInputField label="Escolaridade / Nível" value={submission.escolaridade} />}
                    {submission.curso && <BubbleInputField label="Curso / Formação" value={submission.curso} />}
                    {submission.instituicaoEnsino && <BubbleInputField label="Instituição de Ensino" value={submission.instituicaoEnsino} />}
                  </div>
                )}

                {/* Linha 8 (Atuação Profissional): Cargo, Atuação e Estágio */}
                {(submission.cargo || submission.atuacaoProfissional || submission.estagio) && (
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    {submission.cargo && <BubbleInputField label="Cargo / Função" value={submission.cargo} />}
                    {submission.atuacaoProfissional && <BubbleInputField label="Atuação Profissional / Perfil" value={submission.atuacaoProfissional} />}
                    {submission.estagio && <BubbleInputField label="Estágio de Maturidade" value={submission.estagio} />}
                  </div>
                )}

                {/* Linha 9 (Links & Conexões): LinkedIn, Lattes, Redes e Ano */}
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  {submission.linkedin && <BubbleInputField label="Perfil LinkedIn" value={submission.linkedin} />}
                  {submission.lattes && <BubbleInputField label="Currículo Lattes" value={submission.lattes} />}
                  {submission.socialLink && <BubbleInputField label="Redes Sociais / Site / Instagram" value={submission.socialLink} />}
                  {submission.foundedYear && (
                    <div style={{ flex: '0 0 160px' }}>
                      <BubbleInputField label="Ano de Fundação" value={submission.foundedYear} />
                    </div>
                  )}
                </div>

                {/* Linha 10 (Fomento & Trilha): Subvenção Solicitada e Status da Fase */}
                {(submission.fomentoSolicitado || submission.statusFase) && (
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    {submission.fomentoSolicitado && <BubbleInputField label="Subvenção / Fomento Solicitado" value={submission.fomentoSolicitado} />}
                    {submission.statusFase && <BubbleInputField label="Status / Fase na Trilha" value={submission.statusFase} />}
                  </div>
                )}

                {/* Tópicos / Assuntos de Conexão */}
                {submission.topicosConexao && submission.topicosConexao.length > 0 && (
                  <div style={{ marginTop: '4px' }}>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: '#475569', display: 'block', marginBottom: '6px' }}>
                      Tópicos & Assuntos de Conexão no CORETO
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {submission.topicosConexao.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            backgroundColor: '#F0FDFA',
                            color: '#0F766E',
                            border: '1px solid #99F6E4',
                            borderRadius: '16px',
                            padding: '4px 12px',
                            fontSize: '12px',
                            fontWeight: 700,
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Termos de Aceite & LGPD */}
                {(submission.termosAceitos !== undefined || submission.autorizaLGPD !== undefined) && (
                  <div style={{ backgroundColor: '#F8FAFC', borderRadius: '8px', padding: '12px 16px', border: '1px solid #E2E8F0', display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '4px' }}>
                    {submission.termosAceitos !== undefined && (
                      <div style={{ fontSize: '13px', color: '#475569' }}>
                        📜 <strong>Regulamento Oficial do Edital:</strong>{' '}
                        <span style={{ color: submission.termosAceitos ? '#15803D' : '#B91C1C', fontWeight: 700 }}>
                          {submission.termosAceitos ? '✅ Declarado e Aceito' : '⚠️ Pendente de Aceite'}
                        </span>
                      </div>
                    )}
                    {submission.autorizaLGPD !== undefined && (
                      <div style={{ fontSize: '13px', color: '#475569' }}>
                        🔒 <strong>Tratamento de Dados LGPD:</strong>{' '}
                        <span style={{ color: submission.autorizaLGPD ? '#15803D' : '#B91C1C', fontWeight: 700 }}>
                          {submission.autorizaLGPD ? '✅ Autorizado pelo Proponente' : '⚠️ Não especificado'}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Grade de Seleção de Categorias */}
                <div style={{ marginTop: '12px' }}>
                  <label style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A', display: 'block', marginBottom: '12px' }}>
                    Selecione uma categoria de inscrição (conforme regulamento do prêmio)
                  </label>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                      gap: '12px',
                    }}
                  >
                    {categories.map(cat => {
                      const isSelected = isSelectedCategory(cat)
                      return (
                        <div
                          key={cat.id}
                          style={{
                            padding: '16px 14px',
                            borderRadius: '8px',
                            backgroundColor: isSelected ? '#FFF7ED' : '#F8FAFC',
                            border: isSelected ? '2px solid #EA580C' : '1px solid #E2E8F0',
                            boxShadow: isSelected ? '0 0 0 1px #EA580C' : 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            gap: '6px',
                            minHeight: '85px',
                            transition: 'all 0.15s ease',
                          }}
                        >
                          <div style={{ fontSize: '13px', fontWeight: 800, color: isSelected ? '#EA580C' : '#0F172A', lineHeight: 1.3 }}>
                            {cat.title}
                          </div>
                          {cat.subtitle && (
                            <div style={{ fontSize: '11px', color: isSelected ? '#C2410C' : '#64748B', fontWeight: 600 }}>
                              {cat.subtitle}
                            </div>
                          )}
                          {isSelected && (
                            <span style={{ fontSize: '10px', backgroundColor: '#EA580C', color: '#FFFFFF', padding: '2px 8px', borderRadius: '10px', fontWeight: 700, marginTop: '2px' }}>
                              ✓ Selecionada
                            </span>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ══════════════════════════════════════════════════════════════
              SEÇÃO 2: DESCRIÇÃO DA INICIATIVA
             ══════════════════════════════════════════════════════════════ */}
          <div id="sec-2-descricao" style={{ border: '1px solid #E2E8F0', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#FFFFFF' }}>
            <button
              onClick={() => setOpenSec2(!openSec2)}
              style={{
                width: '100%',
                padding: '16px 20px',
                backgroundColor: '#F8FAFC',
                border: 'none',
                borderBottom: openSec2 ? '1px solid #E2E8F0' : 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                2. Descrição da Iniciativa
              </span>
              <span style={{ fontSize: '18px', color: '#64748B', fontWeight: 700, transform: openSec2 ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s' }}>
                ⌵
              </span>
            </button>

            {openSec2 && (
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>
                  Resumo descritivo da iniciativa (até 2.000 caracteres)
                </div>
                <div style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.5 }}>
                  {submission.helpDescription || 'Explique de forma clara como sua solução endereça diretamente o desafio público selecionado. Aponte a dor central, os objetivos da proposta e o impacto esperado. Use dados e evidências do problema identificado.'}
                </div>

                <BubbleRichTextBox content={submission.description} />
              </div>
            )}
          </div>

          {/* ══════════════════════════════════════════════════════════════
              SEÇÃO 3: CRITÉRIOS DE AVALIAÇÃO
             ══════════════════════════════════════════════════════════════ */}
          <div id="sec-3-criterios" style={{ border: '1px solid #E2E8F0', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#FFFFFF' }}>
            <button
              onClick={() => setOpenSec3(!openSec3)}
              style={{
                width: '100%',
                padding: '16px 20px',
                backgroundColor: '#F8FAFC',
                border: 'none',
                borderBottom: openSec3 ? '1px solid #E2E8F0' : 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                3. Critérios de Avaliação (até 2.000 caracteres cada)
              </span>
              <span style={{ fontSize: '18px', color: '#64748B', fontWeight: 700, transform: openSec3 ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s' }}>
                ⌵
              </span>
            </button>

            {openSec3 && (
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {submission.criteriaAnswers && submission.criteriaAnswers.length > 0 ? (
                  submission.criteriaAnswers.map((crit, idx) => (
                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A' }}>
                        {crit.title}
                      </div>
                      {crit.helpText && (
                        <div style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.5 }}>
                          {crit.helpText}
                        </div>
                      )}
                      <BubbleRichTextBox content={crit.content} />
                    </div>
                  ))
                ) : (
                  <div style={{ color: '#64748B', fontSize: '13px', fontStyle: 'italic' }}>
                    Critérios específicos não preenchidos nesta submissão.
                  </div>
                )}

                {/* Links Relevantes */}
                {submission.links && submission.links.length > 0 && (
                  <div style={{ marginTop: '8px' }}>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>
                      Links relevantes (sites, redes sociais, reportagens, vídeos, dashboards)
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {submission.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.startsWith('http') ? link : `https://${link}`}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            color: '#0284c7',
                            fontSize: '13px',
                            fontWeight: 600,
                            textDecoration: 'underline',
                          }}
                        >
                          <span>🔗</span>
                          <span>{link}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ══════════════════════════════════════════════════════════════
              SEÇÃO 4: MATERIAIS COMPLEMENTARES / ANEXOS
             ══════════════════════════════════════════════════════════════ */}
          <div id="sec-4-anexos" style={{ border: '1px solid #E2E8F0', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#FFFFFF' }}>
            <button
              onClick={() => setOpenSec4(!openSec4)}
              style={{
                width: '100%',
                padding: '16px 20px',
                backgroundColor: '#F8FAFC',
                border: 'none',
                borderBottom: openSec4 ? '1px solid #E2E8F0' : 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                4. Materiais Complementares
              </span>
              <span style={{ fontSize: '18px', color: '#64748B', fontWeight: 700, transform: openSec4 ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s' }}>
                ⌵
              </span>
            </button>

            {openSec4 && (
              <div style={{ padding: '20px' }}>
                {submission.attachments && submission.attachments.length > 0 ? (
                  <div
                    style={{
                      border: '2px dashed #93C5FD',
                      backgroundColor: '#F0F9FF',
                      borderRadius: '8px',
                      padding: '18px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    {submission.attachments.map((att, aIdx) => {
                      const filename = typeof att === 'string' ? att : att.name
                      const url = typeof att === 'string' ? att : att.url || att.name
                      const isPdf = filename.toLowerCase().endsWith('.pdf')
                      const isVideo = filename.toLowerCase().endsWith('.mp4') || filename.toLowerCase().endsWith('.mov')
                      const isImg = filename.toLowerCase().endsWith('.png') || filename.toLowerCase().endsWith('.jpg') || filename.toLowerCase().endsWith('.webp')

                      return (
                        <div
                          key={aIdx}
                          style={{
                            backgroundColor: '#FFFFFF',
                            border: '1px solid #BAE6FD',
                            borderRadius: '6px',
                            padding: '10px 14px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '12px',
                            flexWrap: 'wrap',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '20px' }}>
                              {isPdf ? '📄' : isVideo ? '🎬' : isImg ? '🖼️' : '📎'}
                            </span>
                            <span style={{ fontSize: '13px', fontWeight: 700, color: '#0369A1', wordBreak: 'break-all' }}>
                              {decodeFilename(filename)}
                            </span>
                          </div>

                          <a
                            href={url.startsWith('http') || url.startsWith('//') ? (url.startsWith('//') ? `https:${url}` : url) : `https://${url}`}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              backgroundColor: '#0284C7',
                              color: '#FFFFFF',
                              padding: '6px 14px',
                              borderRadius: '6px',
                              fontSize: '12px',
                              fontWeight: 700,
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                            }}
                          >
                            <span>Abrir / Baixar</span>
                            <span>↗</span>
                          </a>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div
                    style={{
                      border: '2px dashed #CBD5E1',
                      backgroundColor: '#F8FAFC',
                      borderRadius: '8px',
                      padding: '24px',
                      textAlign: 'center',
                      color: '#64748B',
                      fontSize: '13px',
                    }}
                  >
                    Nenhum arquivo complementar anexado pelo candidato nesta inscrição.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ══════════════════════════════════════════════════════════════
              SEÇÃO 5: AVALIAÇÕES E PARECERES CO-RELACIONADOS
             ══════════════════════════════════════════════════════════════ */}
          <div id="sec-5-avaliacoes" style={{ border: '1px solid #E2E8F0', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#FFFFFF' }}>
            <button
              onClick={() => setOpenSec5(!openSec5)}
              style={{
                width: '100%',
                padding: '16px 20px',
                backgroundColor: '#F8FAFC',
                border: 'none',
                borderBottom: openSec5 ? '1px solid #E2E8F0' : 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                  5. Avaliações & Pareceres Co-relacionados
                </span>
                {submission.evaluations && submission.evaluations.length > 0 && (
                  <span style={{ backgroundColor: '#00a8b5', color: '#FFFFFF', fontSize: '11px', fontWeight: 800, padding: '2px 8px', borderRadius: '12px' }}>
                    {submission.evaluations.length} {submission.evaluations.length === 1 ? 'Avaliação' : 'Avaliações'}
                  </span>
                )}
              </div>
              <span style={{ fontSize: '18px', color: '#64748B', fontWeight: 700, transform: openSec5 ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s' }}>
                ⌵
              </span>
            </button>

            {openSec5 && (
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {submission.evaluations && submission.evaluations.length > 0 ? (
                  submission.evaluations.map((ev, evIdx) => (
                    <div
                      key={ev.id || evIdx}
                      style={{
                        backgroundColor: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        borderRadius: '10px',
                        padding: '18px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                      }}
                    >
                      {/* Top Bar da Avaliação */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A' }}>
                            👤 Avaliador / Mentor: {ev.evaluatorName || 'Comitê de Avaliação'}
                          </span>
                          {ev.phase && (
                            <span style={{ backgroundColor: '#E0F2FE', color: '#0284C7', fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '10px' }}>
                              {ev.phase}
                            </span>
                          )}
                        </div>

                        {ev.score !== null && ev.score !== undefined && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>Nota Final:</span>
                            <span style={{ backgroundColor: '#00a8b5', color: '#FFFFFF', fontSize: '13px', fontWeight: 900, padding: '4px 12px', borderRadius: '12px' }}>
                              {typeof ev.score === 'number' ? ev.score.toFixed(2) : ev.score} ⭐
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Critérios e Notas */}
                      {ev.criteriaScores && ev.criteriaScores.length > 0 && (
                        <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '12px' }}>
                          <div style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', marginBottom: '8px', textTransform: 'uppercase' }}>
                            Pontuação por Critério:
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
                            {ev.criteriaScores.map((c, cIdx) => (
                              <div key={cIdx} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 8px', backgroundColor: '#F8FAFC', borderRadius: '4px', fontSize: '12px' }}>
                                <span style={{ color: '#334155', fontWeight: 600 }}>{c.name}</span>
                                <span style={{ color: '#00a8b5', fontWeight: 800 }}>{c.score}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Parecer / Comentário */}
                      <div>
                        <div style={{ fontSize: '12px', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                          Parecer e Comentário Técnico:
                        </div>
                        <div
                          style={{
                            backgroundColor: '#FFFFFF',
                            border: '1px solid #CBD5E1',
                            borderRadius: '6px',
                            padding: '12px 16px',
                            fontSize: '13px',
                            lineHeight: 1.6,
                            color: '#1E293B',
                          }}
                        >
                          {renderFormattedContent(ev.comment || 'Nenhum comentário textual registrado.')}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div
                    style={{
                      border: '1px dashed #CBD5E1',
                      backgroundColor: '#F8FAFC',
                      borderRadius: '8px',
                      padding: '24px',
                      textAlign: 'center',
                      color: '#64748B',
                      fontSize: '13px',
                    }}
                  >
                    Nenhuma avaliação técnica vinculada até o momento.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ══════════════════════════════════════════════════════════════
              SEÇÃO 6: DADOS BRUTOS & METADADOS COMPLETOS DO BACKEND
             ══════════════════════════════════════════════════════════════ */}
          <div id="sec-6-json" style={{ border: '1px solid #E2E8F0', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#FFFFFF' }}>
            <button
              onClick={() => setOpenSec6(!openSec6)}
              style={{
                width: '100%',
                padding: '14px 20px',
                backgroundColor: '#F1F5F9',
                border: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#475569' }}>
                  ⚙️ 6. Metadados e Todos os Campos Brutos do Banco de Dados
                </span>
                <span style={{ fontSize: '11px', color: '#64748B', backgroundColor: '#E2E8F0', padding: '2px 6px', borderRadius: '4px' }}>
                  Auditoria 100%
                </span>
              </div>
              <span style={{ fontSize: '16px', color: '#64748B', fontWeight: 700, transform: openSec6 ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s' }}>
                ⌵
              </span>
            </button>

            {openSec6 && (
              <div style={{ padding: '16px 20px', backgroundColor: '#F8FAFC' }}>
                <p style={{ fontSize: '12px', color: '#64748B', margin: '0 0 12px 0' }}>
                  Todos os atributos registrados nesta linha no banco de dados para conferência integral de dados:
                </p>
                <div style={{ maxHeight: '300px', overflowY: 'auto', backgroundColor: '#0F172A', borderRadius: '8px', padding: '16px' }}>
                  <pre style={{ margin: 0, fontSize: '12px', color: '#38BDF8', fontFamily: 'monospace', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                    {JSON.stringify(submission.rawBackendData || submission, null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* ── Footer ── */}
        <div
          style={{
            padding: '18px 32px',
            borderTop: '1px solid #E2E8F0',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '12px',
            backgroundColor: '#F8FAFC',
            borderBottomLeftRadius: '12px',
            borderBottomRightRadius: '12px',
          }}
        >
          <button
            onClick={onClose}
            style={{
              backgroundColor: '#0F172A',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 28px',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Fechar Visualização
          </button>
        </div>
      </div>
    </div>
  )
}

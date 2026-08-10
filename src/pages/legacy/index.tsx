import { Link } from 'react-router-dom'

// ─────────────────────────────────────────────
// Registro de páginas do legado Bubble
// Adicione uma entrada aqui sempre que uma nova
// página for convertida para React.
// ─────────────────────────────────────────────
interface LegacyPage {
  slug: string
  name: string
  description: string
  status: 'done' | 'in-progress' | 'pending'
}

const LEGACY_PAGES: LegacyPage[] = [
  // Exemplo (descomente ao adicionar a primeira página):
  // {
  //   slug: 'dashboard',
  //   name: 'Dashboard',
  //   description: 'Tela principal do CORETO no Bubble.',
  //   status: 'done',
  // },
]

const statusLabel: Record<LegacyPage['status'], string> = {
  done: '✅ Convertida',
  'in-progress': '🔄 Em progresso',
  pending: '⏳ Pendente',
}

const statusColor: Record<LegacyPage['status'], string> = {
  done: '#22c55e',
  'in-progress': '#f59e0b',
  pending: '#94a3b8',
}

export default function LegacyIndexPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0f172a',
        color: '#f1f5f9',
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        padding: '48px 32px',
      }}
    >
      {/* Header */}
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: 8 }}>
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(99,102,241,0.15)',
              color: '#818cf8',
              border: '1px solid rgba(99,102,241,0.3)',
              borderRadius: 6,
              padding: '4px 12px',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Área restrita — Somente admins
          </span>
        </div>

        <h1
          style={{
            fontSize: 36,
            fontWeight: 800,
            marginTop: 16,
            marginBottom: 8,
            background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          CORETO — Legado Bubble
        </h1>
        <p style={{ color: '#94a3b8', fontSize: 16, marginBottom: 48, maxWidth: 600 }}>
          Arquivo histórico da plataforma CORETO antes da migração. Cada página abaixo
          é uma conversão fiel da versão Bubble para React, com dados estáticos.
        </p>

        {/* Stats bar */}
        <div
          style={{
            display: 'flex',
            gap: 24,
            marginBottom: 48,
            padding: '16px 24px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 12,
          }}
        >
          <Stat label="Total de páginas" value={LEGACY_PAGES.length || 0} />
          <Stat label="Convertidas" value={LEGACY_PAGES.filter(p => p.status === 'done').length} color="#22c55e" />
          <Stat label="Em progresso" value={LEGACY_PAGES.filter(p => p.status === 'in-progress').length} color="#f59e0b" />
          <Stat label="Pendentes" value={LEGACY_PAGES.filter(p => p.status === 'pending').length} color="#94a3b8" />
        </div>

        {/* Pages grid */}
        {LEGACY_PAGES.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '64px 32px',
              border: '1px dashed rgba(255,255,255,0.1)',
              borderRadius: 16,
              color: '#475569',
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 16 }}>📭</div>
            <p style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#64748b' }}>
              Nenhuma página convertida ainda
            </p>
            <p style={{ fontSize: 14 }}>
              Envie o HTML + screenshot de uma página do Bubble para iniciar a conversão.
            </p>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 16,
            }}
          >
            {LEGACY_PAGES.map(page => (
              <PageCard key={page.slug} page={page} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Sub-componentes ───────────────────────────

function Stat({ label, value, color = '#f1f5f9' }: { label: string; value: number; color?: string }) {
  return (
    <div>
      <div style={{ fontSize: 28, fontWeight: 700, color }}>{value}</div>
      <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>{label}</div>
    </div>
  )
}

function PageCard({ page }: { page: LegacyPage }) {
  const isDone = page.status === 'done'

  const inner = (
    <div
      style={{
        padding: 20,
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${isDone ? 'rgba(99,102,241,0.3)' : 'rgba(255,255,255,0.06)'}`,
        borderRadius: 12,
        transition: 'all 0.2s ease',
        cursor: isDone ? 'pointer' : 'default',
        opacity: isDone ? 1 : 0.6,
      }}
      onMouseEnter={e => {
        if (isDone) (e.currentTarget as HTMLDivElement).style.background = 'rgba(99,102,241,0.08)'
      }}
      onMouseLeave={e => {
        if (isDone) (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.03)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
        <span
          style={{
            fontFamily: 'monospace',
            fontSize: 12,
            color: '#818cf8',
            background: 'rgba(99,102,241,0.1)',
            padding: '2px 8px',
            borderRadius: 4,
          }}
        >
          /legacy/{page.slug}
        </span>
        <span style={{ fontSize: 12, color: statusColor[page.status] }}>
          {statusLabel[page.status]}
        </span>
      </div>
      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 6 }}>{page.name}</div>
      <div style={{ fontSize: 13, color: '#64748b' }}>{page.description}</div>
    </div>
  )

  return isDone ? (
    <Link to={`/legacy/${page.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      {inner}
    </Link>
  ) : (
    <div>{inner}</div>
  )
}

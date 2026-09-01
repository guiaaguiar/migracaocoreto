import React from 'react'
import { Link, useLocation } from 'react-router-dom'

interface ProgramItem {
  id: string
  name: string
  icon: string
  submissionsPath: string
  evaluationsPath?: string
  count: number
  badgeColor?: string
}

const PROGRAMS: ProgramItem[] = [
  {
    id: 'premiorec',
    name: 'Prêmio Recife',
    icon: '🏆',
    submissionsPath: '/legacy/premiorec-submissoes',
    evaluationsPath: '/legacy/premiorec-avaliacoes-fase1',
    count: 164,
    badgeColor: '#EA580C',
  },
  {
    id: 'eita',
    name: 'E.I.T.A.! Recife',
    icon: '💡',
    submissionsPath: '/legacy/eita-submissoes',
    evaluationsPath: '/legacy/eita-avaliacoes-mentores',
    count: 123,
    badgeColor: '#0284C7',
  },
  {
    id: 'hacker',
    name: 'Hacker Cidadão',
    icon: '⚡',
    submissionsPath: '/legacy/hackercidadao-inscricoes',
    count: 961,
    badgeColor: '#16A34A',
  },
  {
    id: 'nitro',
    name: 'NITRO ICT',
    icon: '🔬',
    submissionsPath: '/legacy/nitro-inscricoes',
    count: 80,
    badgeColor: '#9333EA',
  },
  {
    id: 'swc',
    name: 'Startup World Cup',
    icon: '🌍',
    submissionsPath: '/legacy/startupworldcup-inscricoes',
    count: 23,
    badgeColor: '#2563EB',
  },
  {
    id: 'caminhos',
    name: 'Caminhos da Inovação',
    icon: '🚀',
    submissionsPath: '/legacy/caminhos-inscricoes',
    count: 43,
    badgeColor: '#D97706',
  },
]

interface ProgramNavigationHeaderProps {
  currentProgramId: string
  activeTab?: 'submissions' | 'evaluations1' | 'evaluations2' | 'operations'
}

export default function ProgramNavigationHeader({ currentProgramId, activeTab = 'submissions' }: ProgramNavigationHeaderProps) {
  const location = useLocation()
  const currentProgram = PROGRAMS.find(p => p.id === currentProgramId) || PROGRAMS[0]

  return (
    <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
      
      {/* ── Top Bar: Quick Switcher Between Programs ── */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '4px',
          scrollbarWidth: 'thin',
        }}
      >
        {PROGRAMS.map(prog => {
          const isActive = prog.id === currentProgramId
          return (
            <Link
              key={prog.id}
              to={prog.submissionsPath}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '12px',
                fontSize: '13px',
                fontWeight: 800,
                textDecoration: 'none',
                backgroundColor: isActive ? '#0F172A' : '#FFFFFF',
                color: isActive ? '#FFFFFF' : '#475569',
                border: isActive ? '1.5px solid #0F172A' : '1px solid #E2E8F0',
                boxShadow: isActive ? '0 4px 12px rgba(15, 23, 42, 0.15)' : '0 1px 2px rgba(0,0,0,0.03)',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease',
              }}
            >
              <span>{prog.icon}</span>
              <span>{prog.name}</span>
              <span
                style={{
                  backgroundColor: isActive ? prog.badgeColor || '#EA580C' : '#F1F5F9',
                  color: isActive ? '#FFFFFF' : '#64748B',
                  fontSize: '11px',
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: '10px',
                }}
              >
                {prog.count}
              </span>
            </Link>
          )
        })}
      </div>

      {/* ── Secondary Bar: Switch Submissions vs Evaluations ── */}
      {currentProgram.id === 'premiorec' && (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Link
            to="/legacy/premiorec-submissoes"
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: 700,
              textDecoration: 'none',
              backgroundColor: location.pathname.includes('submissoes') ? '#00a8b5' : '#FFFFFF',
              color: location.pathname.includes('submissoes') ? '#FFFFFF' : '#475569',
              border: location.pathname.includes('submissoes') ? '1px solid #00a8b5' : '1px solid #CBD5E1',
            }}
          >
            📋 Submissões & Inscrições (164)
          </Link>
          <Link
            to="/legacy/premiorec-avaliacoes-fase1"
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: 700,
              textDecoration: 'none',
              backgroundColor: location.pathname.includes('fase1') ? '#00a8b5' : '#FFFFFF',
              color: location.pathname.includes('fase1') ? '#FFFFFF' : '#475569',
              border: location.pathname.includes('fase1') ? '1px solid #00a8b5' : '1px solid #CBD5E1',
            }}
          >
            🧑‍🏫 1ª Fase: Avaliações dos Mentores (107)
          </Link>
          <Link
            to="/legacy/premiorec-avaliacoes-fase2"
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: 700,
              textDecoration: 'none',
              backgroundColor: location.pathname.includes('fase2') ? '#00a8b5' : '#FFFFFF',
              color: location.pathname.includes('fase2') ? '#FFFFFF' : '#475569',
              border: location.pathname.includes('fase2') ? '1px solid #00a8b5' : '1px solid #CBD5E1',
            }}
          >
            ⭐ 2ª Fase: Avaliações dos Finalistas (266)
          </Link>
        </div>
      )}

      {currentProgram.id === 'eita' && (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Link
            to="/legacy/eita-submissoes"
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: 700,
              textDecoration: 'none',
              backgroundColor: location.pathname.includes('submissoes') ? '#0284c7' : '#FFFFFF',
              color: location.pathname.includes('submissoes') ? '#FFFFFF' : '#475569',
              border: location.pathname.includes('submissoes') ? '1px solid #0284c7' : '1px solid #CBD5E1',
            }}
          >
            📋 Submissões & Desafios (123)
          </Link>
          <Link
            to="/legacy/eita-avaliacoes-mentores"
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: 700,
              textDecoration: 'none',
              backgroundColor: location.pathname.includes('mentores') ? '#0284c7' : '#FFFFFF',
              color: location.pathname.includes('mentores') ? '#FFFFFF' : '#475569',
              border: location.pathname.includes('mentores') ? '1px solid #0284c7' : '1px solid #CBD5E1',
            }}
          >
            🧑‍🏫 Pareceres dos Mentores (359)
          </Link>
          <Link
            to="/legacy/eita-avaliacoes-operacao"
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: 700,
              textDecoration: 'none',
              backgroundColor: location.pathname.includes('operacao') ? '#0284c7' : '#FFFFFF',
              color: location.pathname.includes('operacao') ? '#FFFFFF' : '#475569',
              border: location.pathname.includes('operacao') ? '1px solid #0284c7' : '1px solid #CBD5E1',
            }}
          >
            🏛️ Bancas & Comitê de Operação (660)
          </Link>
        </div>
      )}

    </div>
  )
}

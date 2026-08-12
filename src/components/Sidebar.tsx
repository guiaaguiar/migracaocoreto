import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BeneficiosModal from './BeneficiosModal'

interface SidebarProps {
  activeItem?: 'inicio' | 'meus-programas' | 'oportunidades' | 'criar-solucao' | 'beneficios' | 'painel' | 'mapa' | string
}

export const Sidebar: React.FC<SidebarProps> = ({ activeItem = '' }) => {
  const [beneficiosModalOpen, setBeneficiosModalOpen] = useState(false)

  const getItemStyle = (itemName: string) => {
    const isActive = activeItem === itemName
    return {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '10px 20px',
      fontWeight: isActive ? 700 : 500,
      fontSize: '14px',
      color: '#00a8b5',
      backgroundColor: isActive ? 'rgba(0, 168, 181, 0.08)' : 'transparent',
      borderLeft: isActive ? '3px solid #00a8b5' : '3px solid transparent',
      textDecoration: 'none',
      transition: 'all 0.15s ease',
      width: '100%',
      boxSizing: 'border-box' as const,
      border: 'none',
      textAlign: 'left' as const,
      cursor: 'pointer',
      fontFamily: "'Inter', sans-serif",
    }
  }

  return (
    <>
      <aside
        style={{
          width: '200px',
          backgroundColor: '#ffffff',
          borderRight: '1px solid #E2E8F0',
          paddingTop: '20px',
          paddingBottom: '48px',
          flexShrink: 0,
        }}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {/* Início */}
          <Link to="/legacy/home" style={getItemStyle('inicio')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00a8b5" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M9 9h6v6H9z" />
            </svg>
            <span>Início</span>
          </Link>

          {/* Meus programas */}
          <Link to="/legacy/startups_e_meu_ecossistema" style={getItemStyle('meus-programas')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e05c5c" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Meus programas</span>
          </Link>

          {/* Section: Resolvedor */}
          <div style={{ padding: '20px 20px 8px' }}>
            <span style={{ fontSize: '13px', fontWeight: 800, color: '#1E293B', letterSpacing: '0.02em' }}>
              Resolvedor
            </span>
          </div>

          {/* Oportunidades */}
          <Link to="/legacy/oportunidades" style={getItemStyle('oportunidades')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00a8b5" strokeWidth="2">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <path d="M8.59 13.51l6.83 3.98M15.41 6.51L8.59 10.49" strokeLinecap="round" />
            </svg>
            <span>Oportunidades</span>
          </Link>

          {/* Criar solução */}
          <Link to="/legacy/netpitch" style={getItemStyle('criar-solucao')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e05c5c" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 3.5l5 5L8 21H3v-5L15.5 3.5z" />
            </svg>
            <span>Criar solução</span>
          </Link>

          {/* Benefícios */}
          <button
            type="button"
            onClick={() => setBeneficiosModalOpen(true)}
            style={getItemStyle('beneficios')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e05c5c" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v8M8 12h8" strokeLinecap="round" />
            </svg>
            <span>Benefícios</span>
          </button>

          {/* Painel */}
          <Link to="/legacy/bo" style={getItemStyle('painel')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00a8b5" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            <span>Painel</span>
          </Link>

          {/* Mapa do Ecossistema */}
          <Link to="/legacy/mapa-ecossistema" style={getItemStyle('mapa')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00a8b5" strokeWidth="2">
              <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
              <line x1="8" y1="2" x2="8" y2="18" />
              <line x1="16" y1="6" x2="16" y2="22" />
            </svg>
            <span>Mapa Ecossistema</span>
          </Link>

          {/* Section: GERAL */}
          <div style={{ padding: '24px 20px 8px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#475569', letterSpacing: '0.05em' }}>
              GERAL
            </span>
          </div>

          {/* Ajuda */}
          <a
            href="#"
            onClick={e => e.preventDefault()}
            style={getItemStyle('ajuda')}
          >
            <span style={{ fontWeight: 'bold', fontSize: '16px', display: 'inline-block', width: '18px', textAlign: 'center' }}>?</span>
            <span>Ajuda</span>
          </a>

          {/* Sair */}
          <Link to="/legacy" style={getItemStyle('sair')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00a8b5" strokeWidth="2">
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Sair</span>
          </Link>
        </nav>
      </aside>

      <BeneficiosModal
        isOpen={beneficiosModalOpen}
        onClose={() => setBeneficiosModalOpen(false)}
      />
    </>
  )
}

export default Sidebar

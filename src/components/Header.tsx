import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logoCoreto from '../assets/logo-coreto.png'
import logoAbdi from '../assets/logo-abdi.png'
import logoEmprel from '../assets/logo-emprel.png'

interface HeaderProps {
  userName?: string
}

export const Header: React.FC<HeaderProps> = ({ userName = 'Pedro' }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header
      style={{
        backgroundColor: '#ffffff',
        height: '64px',
        padding: '0 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #E2E8F0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Left Logos */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Link to="/legacy" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src={logoCoreto} alt="Coreto" style={{ height: '32px', objectFit: 'contain' }} />
        </Link>
        <img src={logoAbdi} alt="ABDI" style={{ height: '28px', objectFit: 'contain' }} />
        <img src={logoEmprel} alt="Emprel" style={{ height: '24px', objectFit: 'contain' }} />
      </div>

      {/* Right User Dropdown */}
      <div style={{ position: 'relative' }}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
            padding: '6px 12px',
            borderRadius: '20px',
            border: 'none',
            backgroundColor: dropdownOpen ? '#F1F5F9' : 'transparent',
            transition: 'background-color 0.2s ease',
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#F1F5F9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #CBD5E1',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E293B" strokeWidth="1.5">
              <circle cx="12" cy="5" r="2.5" />
              <circle cx="4.5" cy="19" r="2.5" />
              <circle cx="19.5" cy="19" r="2.5" />
              <path d="M12 7.5v3.5M12 11L6 17M12 11l6 6" strokeLinecap="round" />
            </svg>
          </div>
          <span style={{ fontSize: '14px', fontWeight: 600, color: '#0F172A' }}>{userName}</span>
          <svg
            width="12"
            height="12"
            fill="currentColor"
            viewBox="0 0 20 20"
            style={{
              color: '#0F172A',
              transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
            }}
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {dropdownOpen && (
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: '48px',
              width: '180px',
              backgroundColor: '#ffffff',
              border: '1px solid #E2E8F0',
              borderRadius: '8px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              padding: '6px 0',
              zIndex: 110,
            }}
          >
            <Link
              to="/legacy/home"
              onClick={() => setDropdownOpen(false)}
              style={{
                display: 'block',
                padding: '8px 16px',
                fontSize: '13px',
                color: '#334155',
                textDecoration: 'none',
              }}
            >
              Meu Perfil
            </Link>
            <Link
              to="/legacy"
              onClick={() => setDropdownOpen(false)}
              style={{
                display: 'block',
                padding: '8px 16px',
                fontSize: '13px',
                color: '#EF4444',
                textDecoration: 'none',
              }}
            >
              Sair
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

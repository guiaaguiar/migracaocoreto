import React from 'react'

interface BeneficiosModalProps {
  isOpen: boolean
  onClose: () => void
  onSelectBenefit?: (benefitName: string) => void
}

export const BeneficiosModal: React.FC<BeneficiosModalProps> = ({
  isOpen,
  onClose,
  onSelectBenefit,
}) => {
  if (!isOpen) return null

  const handleCardClick = (name: string) => {
    if (onSelectBenefit) {
      onSelectBenefit(name)
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
        padding: '20px',
        animation: 'fadeIn 0.2s ease-out',
      }}
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '920px',
          padding: '36px 40px 40px 40px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar pop up de benefícios"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#F1F5F9',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#64748B',
            fontSize: '18px',
            fontWeight: 'bold',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#E2E8F0'
            e.currentTarget.style.color = '#0F172A'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#F1F5F9'
            e.currentTarget.style.color = '#64748B'
          }}
        >
          ✕
        </button>

        {/* Modal Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <h2
            style={{
              margin: 0,
              fontSize: '28px',
              fontWeight: 700,
              color: '#F26522', // Orange title as in the screenshot
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              letterSpacing: '-0.02em',
            }}
          >
            benefícios coreto
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: '14px',
              fontWeight: 500,
              color: '#2D3748',
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            }}
          >
            conheça os nossos benefícios de acesso, conecte-se a novos desafios, parceiros e muito mais!
          </p>
        </div>

        {/* Benefits Grid: 3 columns x 2 rows */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '8px',
          }}
        >
          {/* ── Card 1: EDIT AI ── */}
          <div
            onClick={() => handleCardClick('EDIT AI')}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              height: '140px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)'
            }}
          >
            {/* EDIT AI Badge Design */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {/* EDIT pill */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #6366F1 0%, #3B82F6 100%)',
                  borderRadius: '10px',
                  padding: '10px 20px',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: '26px',
                  letterSpacing: '1px',
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
              >
                EDIT
              </div>
              {/* AI square pill */}
              <div
                style={{
                  border: '3px solid #6366F1',
                  borderRadius: '12px',
                  padding: '8px 12px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#FFFFFF',
                  boxShadow: '0 0 0 2px rgba(99, 102, 241, 0.15)',
                }}
              >
                {/* Inner frame outline */}
                <div
                  style={{
                    position: 'absolute',
                    top: '3px',
                    left: '3px',
                    right: '3px',
                    bottom: '3px',
                    border: '1.5px stroke #3B82F6',
                    borderRadius: '6px',
                    pointerEvents: 'none',
                  }}
                />
                <span
                  style={{
                    color: '#3B82F6',
                    fontWeight: 800,
                    fontSize: '24px',
                    letterSpacing: '0.5px',
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  AI
                </span>
              </div>
            </div>
          </div>

          {/* ── Card 2: NETPitch ── */}
          <div
            onClick={() => handleCardClick('NETPitch')}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              height: '140px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '16px',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)'
            }}
          >
            {/* Laptop Icon with Red 'N' */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* Monitor */}
              <div
                style={{
                  width: '54px',
                  height: '34px',
                  backgroundColor: '#6A5649',
                  borderRadius: '4px 4px 0 0',
                  border: '2px solid #524237',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                {/* Red N */}
                <span
                  style={{
                    color: '#E50914',
                    fontWeight: 900,
                    fontSize: '18px',
                    fontFamily: 'sans-serif',
                    lineHeight: 1,
                  }}
                >
                  N
                </span>
              </div>
              {/* Laptop Keyboard base */}
              <div
                style={{
                  width: '64px',
                  height: '5px',
                  backgroundColor: '#D1D5DB',
                  borderRadius: '0 0 4px 4px',
                  borderTop: '1px solid #9CA3AF',
                }}
              />
            </div>
            {/* Text NETPitch */}
            <div
              style={{
                fontSize: '26px',
                fontWeight: 800,
                color: '#1A1A1A',
                fontFamily: "system-ui, -apple-system, sans-serif",
                letterSpacing: '-0.03em',
              }}
            >
              NET<span style={{ fontWeight: 800 }}>Pitch</span>
            </div>
          </div>

          {/* ── Card 3: CESAR | Dates ── */}
          <div
            onClick={() => handleCardClick('C.E.S.A.R Dates')}
            style={{
              backgroundColor: '#FF5500',
              borderRadius: '12px',
              boxShadow: '0 4px 14px rgba(255, 85, 0, 0.25)',
              height: '140px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              padding: '16px 24px',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(255, 85, 0, 0.35)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(255, 85, 0, 0.25)'
            }}
          >
            {/* CESAR logo side */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              {/* Concentric oval target symbol */}
              <svg width="44" height="26" viewBox="0 0 44 26" fill="none">
                <ellipse cx="22" cy="13" rx="20" ry="11" stroke="#FFFFFF" strokeWidth="2.5" />
                <ellipse cx="22" cy="13" rx="12" ry="6.5" stroke="#FFFFFF" strokeWidth="2" />
                <ellipse cx="22" cy="13" rx="5" ry="2.5" fill="#FFFFFF" />
              </svg>
              <span
                style={{
                  color: '#FFFFFF',
                  fontSize: '9px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  fontFamily: 'sans-serif',
                }}
              >
                C.E.S.A.R
              </span>
            </div>

            {/* Vertical Divider Line */}
            <div style={{ width: '1.5px', height: '42px', backgroundColor: 'rgba(255, 255, 255, 0.6)' }} />

            {/* Dates text */}
            <span
              style={{
                color: '#FFFFFF',
                fontSize: '34px',
                fontWeight: 800,
                fontFamily: "system-ui, -apple-system, sans-serif",
                letterSpacing: '-0.02em',
              }}
            >
              Dates
            </span>
          </div>

          {/* ── Card 4: SEBRAE ── */}
          <div
            onClick={() => handleCardClick('SEBRAE')}
            style={{
              backgroundColor: '#2B54D8',
              borderRadius: '12px',
              boxShadow: '0 4px 14px rgba(43, 84, 216, 0.25)',
              height: '140px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '16px',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(43, 84, 216, 0.35)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(43, 84, 216, 0.25)'
            }}
          >
            {/* SEBRAE Icon: 3 horizontal bar stripes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', width: '48px', alignItems: 'center' }}>
              <div style={{ width: '44px', height: '5px', backgroundColor: '#FFFFFF', borderRadius: '1px' }} />
              <div style={{ width: '32px', height: '5px', backgroundColor: '#FFFFFF', borderRadius: '1px' }} />
              <div style={{ width: '44px', height: '5px', backgroundColor: '#FFFFFF', borderRadius: '1px' }} />
            </div>

            {/* SEBRAE Text */}
            <span
              style={{
                color: '#FFFFFF',
                fontSize: '30px',
                fontWeight: 900,
                fontStyle: 'italic',
                fontFamily: "system-ui, -apple-system, sans-serif",
                letterSpacing: '1px',
              }}
            >
              SEBRAE
            </span>
          </div>

          {/* ── Card 5: phostem ── */}
          <div
            onClick={() => handleCardClick('phostem')}
            style={{
              backgroundColor: '#000000',
              borderRadius: '12px',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.35)',
              height: '140px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 10px 22px rgba(0, 0, 0, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.35)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span
                style={{
                  color: '#FFFFFF',
                  fontSize: '26px',
                  fontWeight: 700,
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  letterSpacing: '-0.03em',
                }}
              >
                phostem
              </span>
            </div>
          </div>

          {/* ── Card 6: Ecossistema ── */}
          <div
            onClick={() => handleCardClick('Ecossistema')}
            style={{
              backgroundColor: '#48BB78',
              borderRadius: '12px',
              boxShadow: '0 4px 14px rgba(72, 187, 120, 0.25)',
              height: '140px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '16px',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(72, 187, 120, 0.35)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(72, 187, 120, 0.25)'
            }}
          >
            {/* Title text */}
            <span
              style={{
                color: '#0F3822',
                fontSize: '28px',
                fontWeight: 800,
                fontFamily: "system-ui, -apple-system, sans-serif",
                letterSpacing: '-0.02em',
              }}
            >
              Ecossistema
            </span>

            {/* Network Nodes Icon */}
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
              {/* Lines */}
              <line x1="21" y1="21" x2="10" y2="12" stroke="#0F3822" strokeWidth="2" />
              <line x1="21" y1="21" x2="32" y2="12" stroke="#0F3822" strokeWidth="2" />
              <line x1="21" y1="21" x2="10" y2="30" stroke="#0F3822" strokeWidth="2" />
              <line x1="21" y1="21" x2="32" y2="30" stroke="#0F3822" strokeWidth="2" />
              <line x1="21" y1="21" x2="21" y2="35" stroke="#0F3822" strokeWidth="2" />

              {/* Central node */}
              <circle cx="21" cy="21" r="4.5" fill="#48BB78" stroke="#0F3822" strokeWidth="2.5" />

              {/* Satellite nodes */}
              <circle cx="10" cy="12" r="3" fill="#48BB78" stroke="#0F3822" strokeWidth="2" />
              <circle cx="32" cy="12" r="3" fill="#48BB78" stroke="#0F3822" strokeWidth="2" />
              <circle cx="10" cy="30" r="3" fill="#48BB78" stroke="#0F3822" strokeWidth="2" />
              <circle cx="32" cy="30" r="3" fill="#48BB78" stroke="#0F3822" strokeWidth="2" />
              <circle cx="21" cy="35" r="3" fill="#48BB78" stroke="#0F3822" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BeneficiosModal

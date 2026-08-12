import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logoCoreto from '../../../assets/logo-coreto.png'
import logoAbdi from '../../../assets/logo-abdi.png'
import logoEmprel from '../../../assets/logo-emprel.png'
import logoPrefeitura from '../../../assets/logo-prefeitura.png'
import logoRecnplay from '../../../assets/logo-recnplay.png'

// ─────────────────────────────────────────────────────────────
// Tipos & interfaces
// ─────────────────────────────────────────────────────────────
interface MatchItem {
  id: string
  title: string
  category: string
  type: 'organização' | 'resolvedor' | 'desafio'
  area: string
  description: string
  tags: string[]
  badge: string
}

// Banco de dados estático de matches para o ecossistema Coreto / REC'n'PLAY
const MOCK_MATCHES: MatchItem[] = [
  {
    id: '1',
    title: 'Recife Conectada & Inteligente',
    category: 'EMPREL / Prefeitura do Recife',
    type: 'desafio',
    area: 'Tecnologia',
    description: 'Desafio aberto de inovação pública para otimização do fluxo de trânsito e mobilidade urbana com IoT.',
    tags: ['IoT', 'Smart Cities', 'Mobilidade'],
    badge: 'Desafio Ativo 🚀',
  },
  {
    id: '2',
    title: 'HealthTech Recife Hub',
    category: 'Startup Resolvedora',
    type: 'resolvedor',
    area: 'Saúde',
    description: 'Soluções de IA para triagem rápida em postos de saúde da família e teleatendimento integrado.',
    tags: ['Inteligência Artificial', 'Saúde Pública'],
    badge: 'Resolvedor Verificado ✅',
  },
  {
    id: '3',
    title: 'Porto Digital & Parque Tecnológico',
    category: 'Organização / Ecossistema',
    type: 'organização',
    area: 'Tecnologia',
    description: 'Um dos maiores parques tecnológicos do Brasil impulsionando empreendedorismo, ciência e TI.',
    tags: ['Hub de Inovação', 'Parque Tecnológico'],
    badge: 'Organização Parceira 🏢',
  },
  {
    id: '4',
    title: 'EducaRecife Inovadora',
    category: 'Secretaria de Educação',
    type: 'desafio',
    area: 'Educação',
    description: 'Plataforma gamificada de aprendizagem para alunos da rede municipal de ensino fundamental.',
    tags: ['EdTech', 'Gamificação'],
    badge: 'Desafio Ativo 🚀',
  },
  {
    id: '5',
    title: 'EcoLog - Logística Verde',
    category: 'Startup Cleantech',
    type: 'resolvedor',
    area: 'Sustentabilidade',
    description: 'Roteamento sustentável de micro-mobilidade para entregas de última milha no Bairro do Recife.',
    tags: ['ESG', 'Cleantech', 'Mobilidade'],
    badge: 'Resolvedor Verificado ✅',
  },
  {
    id: '6',
    title: 'Softex Recife & Parcerias Globais',
    category: 'Organização Internacional',
    type: 'organização',
    area: 'Internacionalização',
    description: 'Programas de aceleração e preparação de empresas pernambucanas para expansão global.',
    tags: ['Exportação', 'Softlanding'],
    badge: 'Organização Parceira 🌐',
  },
]

export default function MatcharianoPage() {
  // Estado de navegação do Totem (0: Capa, 1: Passo 1, 2: Passo 2, 3: Passo 3, 4: Resultado)
  const [step, setStep] = useState<number>(0)

  // Modos de exibição (true: Totem 1080x1920 Simulado, false: Responsivo)
  const [isTotemMode, setIsTotemMode] = useState<boolean>(false)

  // Respostas do Quiz
  const [selectedProcura, setSelectedProcura] = useState<string[]>([])
  const [selectedAreas, setSelectedAreas] = useState<string[]>([])
  const [selectedPerfil, setSelectedPerfil] = useState<string>('')

  // Alternar seleção de múltipla escolha
  const toggleProcura = (value: string) => {
    setSelectedProcura(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    )
  }

  const toggleArea = (value: string) => {
    setSelectedAreas(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    )
  }

  // Reiniciar quiz
  const handleReset = () => {
    setStep(0)
    setSelectedProcura([])
    setSelectedAreas([])
    setSelectedPerfil('')
  }

  // Filtrar resultados
  const filteredMatches = MOCK_MATCHES.filter(match => {
    const areaMatch = selectedAreas.length === 0 || selectedAreas.includes(match.area)
    const procuraMatch =
      selectedProcura.length === 0 ||
      (selectedProcura.includes('ORGANIZAÇÕES') && match.type === 'organização') ||
      (selectedProcura.includes('RESOLVEDORES') && match.type === 'resolvedor') ||
      (selectedProcura.includes('DESAFIOS') && match.type === 'desafio')
    return areaMatch && procuraMatch
  })

  // Se nada foi filtrado explicitamente, mostra todos os destaques
  const displayMatches = filteredMatches.length > 0 ? filteredMatches : MOCK_MATCHES.slice(0, 3)

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0F172A',
        fontFamily: "'DM Sans', 'Montserrat', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        color: '#FFFFFF',
      }}
    >
      {/* ── 1. Barra de Navegação Global (Legado Coreto) ── */}
      <header
        style={{
          backgroundColor: '#FFFFFF',
          height: '60px',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #E2E8F0',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        }}
      >
        {/* Logos Esquerda */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link to="/legacy" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src={logoCoreto} alt="Coreto" style={{ height: '28px', objectFit: 'contain' }} />
          </Link>
          <div style={{ width: '1px', height: '24px', backgroundColor: '#CBD5E1' }} />
          <img src={logoAbdi} alt="ABDI" style={{ height: '24px', objectFit: 'contain' }} />
          <img src={logoEmprel} alt="Emprel" style={{ height: '20px', objectFit: 'contain' }} />
        </div>

        {/* Controles de Modo & Perfil Direita */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={() => setIsTotemMode(!isTotemMode)}
            style={{
              backgroundColor: isTotemMode ? '#00D2D3' : '#F1F5F9',
              color: isTotemMode ? '#04153B' : '#475569',
              border: `1px solid ${isTotemMode ? '#00B4D8' : '#CBD5E1'}`,
              borderRadius: '20px',
              padding: '6px 14px',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s ease',
            }}
          >
            <span>{isTotemMode ? '📱 Modo Totem (1080x1920)' : '🖥️ Modo Tela Cheia'}</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1E293B', fontSize: '13px', fontWeight: 600 }}>
            <div
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: '#E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A8B5" strokeWidth="2">
                <circle cx="12" cy="7" r="4" />
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              </svg>
            </div>
            <span>Pedro</span>
            <span style={{ fontSize: '10px', color: '#64748B' }}>▼</span>
          </div>

          <Link
            to="/legacy"
            style={{
              fontSize: '12px',
              fontWeight: 600,
              color: '#00A8B5',
              textDecoration: 'none',
            }}
          >
            ← Legado
          </Link>
        </div>
      </header>

      {/* ── 2. Container Principal (Modo Totem 1080x1920 ou Responsivo) ── */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: isTotemMode ? '24px' : '0',
          backgroundColor: '#0F172A',
        }}
      >
        {/* Frame do Totem Kiosk */}
        <div
          style={{
            width: isTotemMode ? '540px' : '100%',
            maxWidth: '1080px',
            height: isTotemMode ? '960px' : 'calc(100vh - 60px)',
            minHeight: isTotemMode ? '960px' : '800px',
            backgroundColor: step === 0 ? 'transparent' : '#04153B',
            borderRadius: isTotemMode ? '24px' : '0',
            boxShadow: isTotemMode ? '0 25px 50px -12px rgba(0,0,0,0.7), 0 0 0 12px #1E293B' : 'none',
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            transition: 'all 0.3s ease',
          }}
        >
          {/* Top Bar do Kiosk Totem (Presente nas etapas 1, 2, 3 e Resultados) */}
          {step > 0 && (
            <div
              style={{
                height: '70px',
                padding: '0 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#04153B',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                zIndex: 10,
              }}
            >
              {/* Logo REC'n'PLAY */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logoRecnplay} alt="REC'n'PLAY" style={{ height: '36px', objectFit: 'contain' }} />
              </div>

              {/* Botão de Reiniciar / Refresh ↻ */}
              <button
                onClick={handleReset}
                title="Reiniciar Totem"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#FFFFFF',
                  fontSize: '22px',
                  cursor: 'pointer',
                  padding: '8px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'rotate(180deg)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'rotate(0deg)')}
              >
                ↻
              </button>

              {/* Logo Prefeitura do Recife */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logoPrefeitura} alt="Prefeitura do Recife" style={{ height: '36px', objectFit: 'contain' }} />
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              TELA 0: Capa / Boas-Vindas
             ───────────────────────────────────────────────────────────── */}
          {step === 0 && (
            <div
              style={{
                flex: 1,
                background: 'linear-gradient(180deg, #FF1744 0%, #E6005C 40%, #00B4D8 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '48px 24px',
                textAlign: 'center',
                position: 'relative',
                boxSizing: 'border-box',
              }}
            >
              {/* Logo Central Prefeitura do Recife (sem fundo branco) */}
              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', width: '100%' }}>
                <img
                  src={logoPrefeitura}
                  alt="Prefeitura do Recife"
                  style={{
                    width: '180px',
                    maxHeight: '180px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.25))',
                  }}
                />
              </div>

              {/* Títulos em caixas brancas destacadas com sombra rosa centralizados */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px',
                  width: '100%',
                  maxWidth: '520px',
                  margin: '32px auto',
                }}
              >
                {/* Banner 1 */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '8px',
                    padding: '16px 20px',
                    boxShadow: '0 8px 0px #FF007F, 0 12px 24px rgba(0,0,0,0.2)',
                    transform: 'rotate(-1deg)',
                    width: '100%',
                    boxSizing: 'border-box',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <h1
                    style={{
                      margin: 0,
                      fontSize: '26px',
                      fontWeight: 900,
                      color: '#04153B',
                      letterSpacing: '-0.5px',
                      textAlign: 'center',
                      lineHeight: 1.3,
                    }}
                  >
                    MATCHING COM CORETO!
                  </h1>
                </div>

                {/* Banner 2 */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '8px',
                    padding: '14px 20px',
                    boxShadow: '0 8px 0px #FF007F, 0 12px 24px rgba(0,0,0,0.2)',
                    transform: 'rotate(1deg)',
                    width: '100%',
                    boxSizing: 'border-box',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: '13px',
                      fontWeight: 800,
                      color: '#04153B',
                      textTransform: 'uppercase',
                      letterSpacing: '0.3px',
                      lineHeight: 1.4,
                      textAlign: 'center',
                    }}
                  >
                    ENCONTRE OPORTUNIDADES, DESAFIOS, EMPRESAS E MUITO MAIS!
                  </p>
                </div>
              </div>

              {/* Botão de Ação INICIAR */}
              <div style={{ width: '100%', maxWidth: '380px', margin: '0 auto 24px auto', display: 'flex', justifyContent: 'center' }}>
                <button
                  onClick={() => setStep(1)}
                  style={{
                    width: '100%',
                    backgroundColor: '#00C4CC',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '18px 24px',
                    fontSize: '28px',
                    fontWeight: 900,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    boxShadow: '0 8px 0px #D84315, 0 16px 32px rgba(0,0,0,0.3)',
                    transition: 'transform 0.1s ease, boxShadow 0.1s ease',
                  }}
                  onMouseDown={e => {
                    e.currentTarget.style.transform = 'translateY(4px)'
                    e.currentTarget.style.boxShadow = '0 4px 0px #D84315, 0 8px 16px rgba(0,0,0,0.3)'
                  }}
                  onMouseUp={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 8px 0px #D84315, 0 16px 32px rgba(0,0,0,0.3)'
                  }}
                >
                  <span>INICIAR</span>
                  <span style={{ fontSize: '26px' }}>🚀</span>
                </button>
              </div>

              {/* Marca D'água REC'n'PLAY */}
              <div style={{ opacity: 0.95, display: 'flex', justifyContent: 'center', width: '100%' }}>
                <img src={logoRecnplay} alt="REC'n'PLAY" style={{ height: '48px', objectFit: 'contain' }} />
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              TELA 1: "1 de 3 - O que você procura?"
             ───────────────────────────────────────────────────────────── */}
          {step === 1 && (
            <div
              style={{
                flex: 1,
                padding: '36px 24px 48px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ width: '100%', maxWidth: '520px', textAlign: 'center' }}>
                {/* Badge Passo */}
                <div
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#00D2D3',
                    color: '#04153B',
                    fontWeight: 900,
                    fontSize: '15px',
                    padding: '6px 20px',
                    borderRadius: '4px',
                    marginBottom: '20px',
                  }}
                >
                  1 de 3
                </div>

                {/* Pergunta */}
                <h2
                  style={{
                    fontSize: '32px',
                    fontWeight: 800,
                    margin: '0 0 32px 0',
                    color: '#FFFFFF',
                    letterSpacing: '-0.5px',
                  }}
                >
                  O que você procura?
                </h2>

                {/* Opções */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Opção 1: Organizações */}
                  <OptionCard
                    selected={selectedProcura.includes('ORGANIZAÇÕES')}
                    onClick={() => toggleProcura('ORGANIZAÇÕES')}
                    icon={
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00C4CC" strokeWidth="2">
                        <rect x="3" y="3" width="7" height="7" rx="1" />
                        <rect x="14" y="3" width="7" height="7" rx="1" />
                        <rect x="14" y="14" width="7" height="7" rx="1" />
                        <rect x="3" y="14" width="7" height="7" rx="1" />
                      </svg>
                    }
                    subtext="descobrir"
                    title="ORGANIZAÇÕES"
                  />

                  {/* Opção 2: Resolvedores */}
                  <OptionCard
                    selected={selectedProcura.includes('RESOLVEDORES')}
                    onClick={() => toggleProcura('RESOLVEDORES')}
                    icon={
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00C4CC" strokeWidth="2">
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71.79-1.81.2-2.55L4.5 16.5z" />
                        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z" />
                      </svg>
                    }
                    subtext="conhecer"
                    title="RESOLVEDORES"
                  />

                  {/* Opção 3: Desafios */}
                  <OptionCard
                    selected={selectedProcura.includes('DESAFIOS')}
                    onClick={() => toggleProcura('DESAFIOS')}
                    icon={
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00C4CC" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <circle cx="12" cy="5" r="2" />
                        <circle cx="5" cy="19" r="2" />
                        <circle cx="19" cy="19" r="2" />
                        <line x1="12" y1="7" x2="12" y2="9" />
                        <line x1="6.7" y1="17.5" x2="10" y2="13.5" />
                        <line x1="17.3" y1="17.5" x2="14" y2="13.5" />
                      </svg>
                    }
                    subtext="explorar"
                    title="DESAFIOS"
                  />
                </div>
              </div>

              {/* Botão Próxima Pergunta */}
              <div style={{ width: '100%', maxWidth: '420px', marginTop: '32px' }}>
                <button
                  onClick={() => setStep(2)}
                  style={{
                    width: '100%',
                    backgroundColor: '#00C4CC',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '16px 24px',
                    fontSize: '22px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: '0 6px 0px #00838F, 0 12px 20px rgba(0,0,0,0.3)',
                    transition: 'transform 0.1s ease',
                  }}
                >
                  <span>Próxima Pergunta</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              TELA 2: "2 de 3 - Qual área te interessa mais?"
             ───────────────────────────────────────────────────────────── */}
          {step === 2 && (
            <div
              style={{
                flex: 1,
                padding: '36px 24px 48px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ width: '100%', maxWidth: '560px', textAlign: 'center' }}>
                {/* Badge Passo */}
                <div
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#00D2D3',
                    color: '#04153B',
                    fontWeight: 900,
                    fontSize: '15px',
                    padding: '6px 20px',
                    borderRadius: '4px',
                    marginBottom: '20px',
                  }}
                >
                  2 de 3
                </div>

                {/* Pergunta */}
                <h2
                  style={{
                    fontSize: '30px',
                    fontWeight: 800,
                    margin: '0 0 28px 0',
                    color: '#FFFFFF',
                    letterSpacing: '-0.5px',
                  }}
                >
                  Qual área te interessa mais?
                </h2>

                {/* Grid 3x2 de Opções */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '12px',
                  }}
                >
                  {/* Área 1: Tecnologia */}
                  <GridOptionCard
                    selected={selectedAreas.includes('Tecnologia')}
                    onClick={() => toggleArea('Tecnologia')}
                    title="Tecnologia"
                    icon={
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00C4CC" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                    }
                  />

                  {/* Área 2: Saúde */}
                  <GridOptionCard
                    selected={selectedAreas.includes('Saúde')}
                    onClick={() => toggleArea('Saúde')}
                    title="Saúde"
                    icon={
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00C4CC" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    }
                  />

                  {/* Área 3: Educação */}
                  <GridOptionCard
                    selected={selectedAreas.includes('Educação')}
                    onClick={() => toggleArea('Educação')}
                    title="Educação"
                    icon={
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00C4CC" strokeWidth="2">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                    }
                  />

                  {/* Área 4: Mobilidade */}
                  <GridOptionCard
                    selected={selectedAreas.includes('Mobilidade')}
                    onClick={() => toggleArea('Mobilidade')}
                    title="Mobilidade"
                    icon={
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00C4CC" strokeWidth="2">
                        <circle cx="5.5" cy="17.5" r="3.5" />
                        <circle cx="18.5" cy="17.5" r="3.5" />
                        <path d="M15 6h5l1.5 7H15z" />
                        <path d="M5.5 17.5L12 6h3" />
                      </svg>
                    }
                  />

                  {/* Área 5: Sustentabilidade */}
                  <GridOptionCard
                    selected={selectedAreas.includes('Sustentabilidade')}
                    onClick={() => toggleArea('Sustentabilidade')}
                    title="Sustentabilidade"
                    icon={
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00C4CC" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2" />
                      </svg>
                    }
                  />

                  {/* Área 6: Internacionalização */}
                  <GridOptionCard
                    selected={selectedAreas.includes('Internacionalização')}
                    onClick={() => toggleArea('Internacionalização')}
                    title="Internacionalização"
                    icon={
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00C4CC" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    }
                  />
                </div>
              </div>

              {/* Botão Próxima Pergunta */}
              <div style={{ width: '100%', maxWidth: '420px', marginTop: '32px' }}>
                <button
                  onClick={() => setStep(3)}
                  style={{
                    width: '100%',
                    backgroundColor: '#00C4CC',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '16px 24px',
                    fontSize: '22px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: '0 6px 0px #00838F, 0 12px 20px rgba(0,0,0,0.3)',
                    transition: 'transform 0.1s ease',
                  }}
                >
                  <span>Próxima Pergunta</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              TELA 3: "3 de 3 - Você é ..."
             ───────────────────────────────────────────────────────────── */}
          {step === 3 && (
            <div
              style={{
                flex: 1,
                padding: '36px 24px 48px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ width: '100%', maxWidth: '560px', textAlign: 'center' }}>
                {/* Badge Passo */}
                <div
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#00D2D3',
                    color: '#04153B',
                    fontWeight: 900,
                    fontSize: '15px',
                    padding: '6px 20px',
                    borderRadius: '4px',
                    marginBottom: '20px',
                  }}
                >
                  3 de 3
                </div>

                {/* Pergunta */}
                <h2
                  style={{
                    fontSize: '32px',
                    fontWeight: 800,
                    margin: '0 0 28px 0',
                    color: '#FFFFFF',
                    letterSpacing: '-0.5px',
                  }}
                >
                  Você é ...
                </h2>

                {/* Linha Superior: 3 Cards (Cidadão, Estudante, Startup) */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '12px' }}>
                  <GridOptionCard
                    selected={selectedPerfil === 'Cidadão'}
                    onClick={() => setSelectedPerfil('Cidadão')}
                    title="Cidadão"
                    icon={
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00C4CC" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    }
                  />

                  <GridOptionCard
                    selected={selectedPerfil === 'Estudante'}
                    onClick={() => setSelectedPerfil('Estudante')}
                    title="Estudante"
                    icon={
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00C4CC" strokeWidth="2">
                        <rect x="2" y="5" width="20" height="14" rx="2" />
                        <line x1="2" y1="15" x2="22" y2="15" />
                      </svg>
                    }
                  />

                  <GridOptionCard
                    selected={selectedPerfil === 'Startup'}
                    onClick={() => setSelectedPerfil('Startup')}
                    title="Startup"
                    icon={
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00C4CC" strokeWidth="2">
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71.79-1.81.2-2.55L4.5 16.5z" />
                        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z" />
                      </svg>
                    }
                  />
                </div>

                {/* Linha Inferior: 2 Cards Centralizados (Empresa, Órgão Público) */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', maxWidth: '380px', margin: '0 auto' }}>
                  <GridOptionCard
                    selected={selectedPerfil === 'Empresa'}
                    onClick={() => setSelectedPerfil('Empresa')}
                    title="Empresa"
                    icon={
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00C4CC" strokeWidth="2">
                        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" />
                        <path d="M6 12H4a2 2 0 0 0-2 2v8" />
                        <path d="M18 9h2a2 2 0 0 1 2 2v11" />
                      </svg>
                    }
                  />

                  <GridOptionCard
                    selected={selectedPerfil === 'Órgão Público'}
                    onClick={() => setSelectedPerfil('Órgão Público')}
                    title="Órgão Público"
                    icon={
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00C4CC" strokeWidth="2">
                        <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 3L2 10h20L12 3z" />
                      </svg>
                    }
                  />
                </div>
              </div>

              {/* Botão Ver Resultado */}
              <div style={{ width: '100%', maxWidth: '420px', marginTop: '32px' }}>
                <button
                  onClick={() => setStep(4)}
                  style={{
                    width: '100%',
                    backgroundColor: '#00C4CC',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '18px 24px',
                    fontSize: '24px',
                    fontWeight: 900,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    boxShadow: '0 6px 0px #00838F, 0 12px 20px rgba(0,0,0,0.3)',
                    transition: 'transform 0.1s ease',
                  }}
                >
                  <span>VER RESULTADO</span>
                  <span style={{ fontSize: '20px' }}>⊙</span>
                </button>
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              TELA 4: Resultados / Matches Encontrados
             ───────────────────────────────────────────────────────────── */}
          {step === 4 && (
            <div
              style={{
                flex: 1,
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              {/* Card Container Branco Central */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '32px 24px',
                  width: '100%',
                  maxWidth: '560px',
                  textAlign: 'center',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  color: '#1E293B',
                  boxSizing: 'border-box',
                }}
              >
                {/* Ícone Quebra-Cabeça de Match */}
                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                  <div
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '20px',
                      backgroundColor: '#F8FAFC',
                      border: '2px solid #E2E8F0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.06)',
                    }}
                  >
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                      <path d="M14 14h16a5 5 0 0 1 5 5v2a5 5 0 0 1-5 5H14V14z" fill="#00D2D3" stroke="#04153B" strokeWidth="2" />
                      <path d="M36 14h14v16a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5V14z" fill="#A3E635" stroke="#04153B" strokeWidth="2" />
                      <path d="M14 36h14a5 5 0 0 1 5 5v2a5 5 0 0 1-5 5H14V36z" fill="#FF007F" stroke="#04153B" strokeWidth="2" />
                      <path d="M36 36h14v14a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5V36z" fill="#FF8C00" stroke="#04153B" strokeWidth="2" />
                      <circle cx="32" cy="32" r="13" fill="#22C55E" stroke="#FFFFFF" strokeWidth="3" />
                      <path d="M26 32l4 4 8-8" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Título Principal */}
                <h2
                  style={{
                    margin: '0 0 16px 0',
                    fontSize: '26px',
                    fontWeight: 900,
                    color: '#FF4500',
                    lineHeight: 1.25,
                    letterSpacing: '-0.5px',
                  }}
                >
                  Estamos buscando as principais oportunidades pra você!
                </h2>

                {/* Botão de Contato / Chama a gente */}
                <div style={{ marginBottom: '24px' }}>
                  <button
                    style={{
                      width: '100%',
                      background: 'linear-gradient(90deg, #00C4CC 0%, #D8006B 100%)',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '20px',
                      padding: '10px 16px',
                      fontSize: '13px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    }}
                  >
                    <span>💬 Não achou o que busca? Chama a gente!</span>
                  </button>
                </div>

                {/* Lista de Matches Recomendados */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
                  {displayMatches.map(item => (
                    <div
                      key={item.id}
                      style={{
                        backgroundColor: '#F8FAFC',
                        borderRadius: '12px',
                        padding: '14px 16px',
                        border: '1px solid #E2E8F0',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 800, color: '#00A8B5', textTransform: 'uppercase' }}>
                          {item.category}
                        </span>
                        <span style={{ fontSize: '10px', backgroundColor: '#E0F2FE', color: '#0369A1', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
                          {item.badge}
                        </span>
                      </div>
                      <h4 style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: 700, color: '#0F172A' }}>
                        {item.title}
                      </h4>
                      <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#475569', lineHeight: 1.4 }}>
                        {item.description}
                      </p>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {item.tags.map(tag => (
                          <span key={tag} style={{ fontSize: '10px', backgroundColor: '#F1F5F9', color: '#64748B', padding: '2px 6px', borderRadius: '4px' }}>
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botão de Ação CONCLUIR */}
              <div style={{ width: '100%', maxWidth: '420px', marginTop: '24px' }}>
                <button
                  onClick={handleReset}
                  style={{
                    width: '100%',
                    backgroundColor: '#FF007F',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '18px 24px',
                    fontSize: '28px',
                    fontWeight: 900,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: '0 8px 0px #00FF66, 0 16px 24px rgba(0,0,0,0.4)',
                    transition: 'transform 0.1s ease',
                  }}
                  onMouseDown={e => (e.currentTarget.style.transform = 'translateY(4px)')}
                  onMouseUp={e => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <span>CONCLUIR</span>
                  <span>✓</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Sub-componentes auxiliares de Cards de Opção
// ─────────────────────────────────────────────────────────────

interface OptionCardProps {
  selected: boolean
  onClick: () => void
  icon: React.ReactNode
  subtext: string
  title: string
}

function OptionCard({ selected, onClick, icon, subtext, title }: OptionCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: selected ? '#ECFDF5' : '#FFFFFF',
        border: `3px solid ${selected ? '#00D2D3' : '#E2E8F0'}`,
        borderRadius: '12px',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        cursor: 'pointer',
        boxShadow: selected ? '0 8px 20px rgba(0,210,211,0.25)' : '0 4px 8px rgba(0,0,0,0.1)',
        transition: 'all 0.15s ease',
      }}
    >
      <div style={{ flexShrink: 0 }}>{icon}</div>
      <div style={{ textAlign: 'left' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, color: selected ? '#00A8B5' : '#64748B' }}>
          {subtext}
        </div>
        <div style={{ fontSize: '17px', fontWeight: 900, color: '#04153B', letterSpacing: '0.3px' }}>
          {title}
        </div>
      </div>
    </div>
  )
}

interface GridOptionCardProps {
  selected: boolean
  onClick: () => void
  icon: React.ReactNode
  title: string
}

function GridOptionCard({ selected, onClick, icon, title }: GridOptionCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: selected ? '#ECFDF5' : '#FFFFFF',
        border: `3px solid ${selected ? '#00D2D3' : '#E2E8F0'}`,
        borderRadius: '12px',
        padding: '18px 10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        cursor: 'pointer',
        boxShadow: selected ? '0 6px 16px rgba(0,210,211,0.25)' : '0 4px 8px rgba(0,0,0,0.1)',
        transition: 'all 0.15s ease',
        minHeight: '100px',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ flexShrink: 0 }}>{icon}</div>
      <div
        style={{
          fontSize: '13px',
          fontWeight: 800,
          color: '#04153B',
          textAlign: 'center',
          lineHeight: 1.2,
        }}
      >
        {title}
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logoCoreto from '../../../assets/logo-coreto.png'
import logoAbdi from '../../../assets/logo-abdi.png'
import logoEmprel from '../../../assets/logo-emprel.png'
import logoRecnplay from '../../../assets/logo-recnplay.png'

// ─────────────────────────────────────────────────────────────
// Types & Data
// ─────────────────────────────────────────────────────────────

type Profile = 'Pesquisador' | 'Empreendedor' | 'Tecnologista' | 'Inovador Social' | 'Conector'

interface AnswerOption {
  label: string
  profile: Profile
}

interface Question {
  id: number
  text: string
  options: AnswerOption[]
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'QUANDO VOCÊ SE DEPARA COM UM DESAFIO, O QUE MAIS TE INSTIGA?',
    options: [
      { label: 'ENTENDER PROFUNDAMENTE O QUE ESTÁ POR TRÁS DO PROBLEMA', profile: 'Pesquisador' },
      { label: 'IMAGINAR UMA FORMA CRIATIVA DE RESOLVER E COLOCAR EM PRÁTICA', profile: 'Empreendedor' },
      { label: 'DESCOBRIR COMO A TECNOLOGIA PODE AJUDAR A RESOLVER DE FORMA EFICIENTE', profile: 'Tecnologista' },
      { label: 'PENSAR EM COMO ESSA SOLUÇÃO PODE MELHORAR A VIDA DAS PESSOAS', profile: 'Inovador Social' },
      { label: 'CHAMAR QUEM PODE SOMAR E CONSTRUIR ALGO MAIOR JUNTOS', profile: 'Conector' },
    ],
  },
  {
    id: 2,
    text: 'O QUE MAIS REPRESENTA O SEU ESTILO DE PENSAR?',
    options: [
      { label: '"CONHECIMENTO É A BASE DE TUDO"', profile: 'Pesquisador' },
      { label: '"IDEIAS SÓ VALEM QUANDO SAEM DO PAPEL"', profile: 'Empreendedor' },
      { label: '"A MELHOR SOLUÇÃO É AQUELA QUE FUNCIONA"', profile: 'Tecnologista' },
      { label: '"INOVAR É CUIDAR DAS PESSOAS DE UM JEITO NOVO"', profile: 'Inovador Social' },
      { label: '"A FORÇA ESTÁ NAS CONEXÕES"', profile: 'Conector' },
    ],
  },
  {
    id: 3,
    text: 'QUANDO VOCÊ PENSA EM INOVAÇÃO, O QUE MAIS TE MOTIVA?',
    options: [
      { label: 'DESCOBRIR ALGO NOVO QUE NINGUÉM SABE AINDA', profile: 'Pesquisador' },
      { label: 'TRANSFORMAR UMA IDEIA EM UM NEGÓCIO DE SUCESSO', profile: 'Empreendedor' },
      { label: 'CRIAR SOLUÇÕES TECNOLÓGICAS QUE FACILITEM A VIDA DAS PESSOAS', profile: 'Tecnologista' },
      { label: 'USAR INOVAÇÃO PARA MELHORAR OS SERVIÇOS PÚBLICOS E TRANSFORMAR A CIDADE', profile: 'Inovador Social' },
      { label: 'CONECTAR PESSOAS E INSTITUIÇÕES PARA GERAR IMPACTO COLETIVO', profile: 'Conector' },
    ],
  },
  {
    id: 4,
    text: 'QUAL DESSAS FRASES PARECE MAIS COM VOCÊ?',
    options: [
      { label: '"QUERO ENTENDER O PORQUÊ DAS COISAS"', profile: 'Pesquisador' },
      { label: '"TENHO MIL IDEIAS E QUERO COLOCAR TODAS EM PRÁTICA"', profile: 'Empreendedor' },
      { label: '"PREFIRO VER O RESULTADO NA TELA DO QUE NO PAPEL"', profile: 'Tecnologista' },
      { label: '"QUERO DEIXAR A CIDADE MELHOR PARA QUEM VIVE NELA"', profile: 'Inovador Social' },
      { label: '"GOSTO DE JUNTAR AS PESSOAS CERTAS PARA FAZER ACONTECER"', profile: 'Conector' },
    ],
  },
  {
    id: 5,
    text: 'QUAL DESSAS PALAVRAS TE DEFINE MELHOR?',
    options: [
      { label: 'CURIOSO(A)', profile: 'Pesquisador' },
      { label: 'VISIONÁRIO(A)', profile: 'Empreendedor' },
      { label: 'PRÁTICO(A)', profile: 'Tecnologista' },
      { label: 'TRANSFORMADOR(A)', profile: 'Inovador Social' },
      { label: 'CONECTOR(A)', profile: 'Conector' },
    ],
  },
]

interface ProfileResult {
  title: string
  tagline: string
  mantra: string
  description: string
  badgeColor: string      // badge circle border colour
  badgeEmoji: string
  badgeLabel: string      // text inside badge circle
  titleBg: string         // yellow or accent for title box
  borderColor: string     // description box border colour
}

const PROFILES: Record<Profile, ProfileResult> = {
  Pesquisador: {
    title: 'Ciência & Conhecimento',
    tagline: 'ANALISA. INVESTIGA. DESCOBRE.',
    mantra: 'ANALISA. INVESTIGA. DESCOBRE.',
    description:
      'Você é movido pela curiosidade e pelo conhecimento profundo. Antes de agir, você precisa entender. Sua maior força está em transformar dados e evidências em insights que ninguém mais enxergou. Seu lugar é nos laboratórios, centros de pesquisa, universidades e iniciativas que constroem o futuro a partir da ciência e da investigação rigorosa.',
    badgeColor: '#00B4D8',
    badgeEmoji: '🔬',
    badgeLabel: 'CIÊNCIA &\nCONHECIMENTO',
    titleBg: '#E8F700',
    borderColor: '#00B4D8',
  },
  Empreendedor: {
    title: 'Empreendedorismo Inovador',
    tagline: 'CRIA. ARRISCA. TRANSFORMA.',
    mantra: 'CRIA. ARRISCA. TRANSFORMA.',
    description:
      'Você não espera o momento perfeito — você cria. Tem a coragem de transformar ideias em realidade e a resiliência para superar os obstáculos do caminho. Inovar, para você, é um verbo no presente. Seu lugar é nas startups, aceleradoras e programas que transformam boas ideias em negócios de impacto.',
    badgeColor: '#FF6B35',
    badgeEmoji: '🚀',
    badgeLabel: 'EMPREENDEDORISMO\nINOVADOR',
    titleBg: '#E8F700',
    borderColor: '#FF6B35',
  },
  Tecnologista: {
    title: 'Tecnologia & Soluções',
    tagline: 'CONSTRÓI. OTIMIZA. ENTREGA.',
    mantra: 'CONSTRÓI. OTIMIZA. ENTREGA.',
    description:
      'Você enxerga o futuro através do código, dos dados e das plataformas. Seu superpoder é construir soluções que escalam e funcionam. Onde outros veem problemas, você vê arquiteturas. Seu lugar é nos parques tecnológicos, hubs de inovação e iniciativas que desenvolvem tecnologia de ponta para transformar a cidade.',
    badgeColor: '#7B2FBE',
    badgeEmoji: '💻',
    badgeLabel: 'TECNOLOGIA\n& SOLUÇÕES',
    titleBg: '#E8F700',
    borderColor: '#7B2FBE',
  },
  'Inovador Social': {
    title: 'Inovação Social & Impacto',
    tagline: 'OUVE. CUIDA. TRANSFORMA.',
    mantra: 'OUVE. CUIDA. TRANSFORMA.',
    description:
      'Você inova porque se importa com as pessoas. Sua inovação tem impacto real na vida real. Você consegue ver a humanidade por trás de cada dado e transformar empatia em soluções que tocam vidas. Seu lugar é nas iniciativas, OSCs e programas que colocam o cidadão no centro da transformação da cidade.',
    badgeColor: '#2DC653',
    badgeEmoji: '🌱',
    badgeLabel: 'INOVAÇÃO\nSOCIAL',
    titleBg: '#E8F700',
    borderColor: '#2DC653',
  },
  Conector: {
    title: 'Conexão de Ecossistemas',
    tagline: 'ARTICULA. MOBILIZA. CONECTA.',
    mantra: 'ARTICULA. MOBILIZA. FOMENTA.',
    description:
      'Você é aquele que faz as coisas acontecerem: gosta de unir pessoas, criar oportunidades e construir pontes entre universidades, empresas e governo. Seu lugar é nas instituições que fortalecem o ecossistema de inovação, promovendo parcerias, editais e programas que impulsionam o futuro da cidade.',
    badgeColor: '#F7B731',
    badgeEmoji: '🔗',
    badgeLabel: 'CONEXÃO DE\nECOSSISTEMAS',
    titleBg: '#E8F700',
    borderColor: '#00C4CC',
  },
}

// ─────────────────────────────────────────────────────────────
// Answer Card sub-component
// ─────────────────────────────────────────────────────────────

interface AnswerCardProps {
  label: string
  selected: boolean
  onClick: () => void
}

function AnswerCard({ label, selected, onClick }: AnswerCardProps) {
  const [hovered, setHovered] = React.useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: selected ? '#E8F700' : hovered ? '#F0F4FF' : '#FFFFFF',
        border: `2px solid ${selected ? '#00C4CC' : '#E2E8F0'}`,
        borderRadius: '8px',
        padding: '22px 16px',
        cursor: 'pointer',
        textAlign: 'center',
        fontFamily: "'DM Sans', 'Montserrat', sans-serif",
        fontSize: '13px',
        fontWeight: 700,
        color: selected ? '#04153B' : '#1E3A5F',
        letterSpacing: '0.5px',
        lineHeight: 1.45,
        transition: 'all 0.18s ease',
        transform: selected ? 'scale(1.02)' : hovered ? 'scale(1.01)' : 'scale(1)',
        boxShadow: selected
          ? '0 4px 16px rgba(0, 196, 204, 0.25)'
          : hovered
            ? '0 4px 12px rgba(0,0,0,0.08)'
            : '0 2px 4px rgba(0,0,0,0.04)',
        minHeight: '88px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {label}
    </button>
  )
}

// ─────────────────────────────────────────────────────────────
// Badge Circle sub-component (replaces the capybara medallion)
// ─────────────────────────────────────────────────────────────

function ProfileBadge({ profile }: { profile: ProfileResult }) {
  return (
    <div
      style={{
        width: '240px',
        height: '240px',
        borderRadius: '50%',
        border: `6px solid ${profile.badgeColor}`,
        boxShadow: `0 0 0 4px rgba(255,255,255,0.1), 0 0 40px ${profile.badgeColor}55, inset 0 0 40px rgba(0,0,0,0.3)`,
        backgroundColor: '#0A0A0A',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        position: 'relative',
        flexShrink: 0,
      }}
    >
      {/* Outer dashed ring */}
      <div
        style={{
          position: 'absolute',
          inset: '-16px',
          borderRadius: '50%',
          border: `2px dashed ${profile.badgeColor}88`,
          animation: 'spin 20s linear infinite',
        }}
      />
      {/* Emoji */}
      <span style={{ fontSize: '56px', lineHeight: 1 }}>{profile.badgeEmoji}</span>
      {/* Label lines */}
      {profile.badgeLabel.split('\n').map((line, i) => (
        <span
          key={i}
          style={{
            fontSize: '11px',
            fontWeight: 900,
            color: profile.badgeColor,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            textAlign: 'center',
            lineHeight: 1.3,
          }}
        >
          {line}
        </span>
      ))}

      {/* Spin keyframes injected once */}
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Main Page Component
// ─────────────────────────────────────────────────────────────

export default function QuizzDescubraSeuLugarPage() {
  // 0 = intro, 1–5 = questions, 6 = result
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, Profile>>({})

  const currentQuestion = QUESTIONS[step - 1]
  const selectedForCurrent = answers[step]

  const handleSelect = (profile: Profile) => {
    setAnswers(prev => ({ ...prev, [step]: profile }))
  }

  const handleNext = () => {
    if (step < 5) setStep(s => s + 1)
    else setStep(6)
  }

  const handleReset = () => {
    setStep(0)
    setAnswers({})
  }

  // Most frequent profile wins
  const getResult = (): Profile => {
    const counts: Partial<Record<Profile, number>> = {}
    Object.values(answers).forEach(p => {
      counts[p] = (counts[p] ?? 0) + 1
    })
    let max = 0
    let winner: Profile = 'Conector'
    for (const [p, c] of Object.entries(counts) as [Profile, number][]) {
      if (c > max) { max = c; winner = p }
    }
    return winner
  }

  // ── Navbar ──────────────────────────────────────────────────
  const Navbar = () => (
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
        flexShrink: 0,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Link to="/legacy" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src={logoCoreto} alt="Coreto" style={{ height: '28px', objectFit: 'contain' }} />
        </Link>
        <div style={{ width: '1px', height: '24px', backgroundColor: '#CBD5E1' }} />
        <img src={logoAbdi} alt="ABDI" style={{ height: '24px', objectFit: 'contain' }} />
        <img src={logoEmprel} alt="Emprel" style={{ height: '20px', objectFit: 'contain' }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1E293B', fontSize: '13px', fontWeight: 600 }}>
          <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A8B5" strokeWidth="2">
              <circle cx="12" cy="7" r="4" />
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            </svg>
          </div>
          <span>Pedro</span>
          <span style={{ fontSize: '10px', color: '#64748B' }}>▼</span>
        </div>
        <Link to="/legacy" style={{ fontSize: '12px', fontWeight: 600, color: '#00A8B5', textDecoration: 'none' }}>← Legado</Link>
      </div>
    </header>
  )

  // ── Step 0: Intro ────────────────────────────────────────────
  if (step === 0) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'DM Sans', 'Montserrat', sans-serif" }}>
        <Navbar />
        <main
          style={{
            flex: 1,
            background: 'linear-gradient(160deg, #04153B 0%, #083D5C 40%, #006B75 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px 24px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative blobs */}
          <div style={{ position: 'absolute', top: '-120px', right: '-120px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(0, 196, 204, 0.12)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255, 20, 147, 0.1)', pointerEvents: 'none' }} />

          <img src={logoRecnplay} alt="REC'n'PLAY" style={{ height: '52px', objectFit: 'contain', marginBottom: '40px' }} />

          {/* Title banner */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              padding: '18px 32px',
              boxShadow: '0 8px 0px #FF007F, 0 16px 32px rgba(0,0,0,0.25)',
              marginBottom: '24px',
              maxWidth: '660px',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <h1 style={{ margin: 0, fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 900, color: '#04153B', letterSpacing: '-0.5px', lineHeight: 1.2 }}>
              DESCUBRA O SEU LUGAR NA INOVAÇÃO
            </h1>
          </div>

          {/* Subtitle banner */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              padding: '14px 28px',
              boxShadow: '0 6px 0px #FF007F, 0 12px 24px rgba(0,0,0,0.2)',
              marginBottom: '40px',
              maxWidth: '660px',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <p style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#1E3A5F', lineHeight: 1.5 }}>
              Responda às perguntas e descubra qual papel combina com o seu jeito de pensar, agir e transformar o mundo!
            </p>
          </div>

          {/* CTA */}
          <button
            id="quiz-start-btn"
            onClick={() => setStep(1)}
            style={{
              backgroundColor: '#E8F700',
              color: '#04153B',
              border: 'none',
              borderRadius: '8px',
              padding: '18px 48px',
              fontSize: '22px',
              fontWeight: 900,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 6px 0px #B5BF00, 0 12px 24px rgba(0,0,0,0.25)',
              transition: 'transform 0.1s ease, box-shadow 0.1s ease',
              letterSpacing: '0.5px',
            }}
            onMouseDown={e => { e.currentTarget.style.transform = 'translateY(3px)'; e.currentTarget.style.boxShadow = '0 3px 0px #B5BF00, 0 6px 12px rgba(0,0,0,0.25)' }}
            onMouseUp={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 0px #B5BF00, 0 12px 24px rgba(0,0,0,0.25)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 0px #B5BF00, 0 12px 24px rgba(0,0,0,0.25)' }}
          >
            INICIAR <span style={{ fontSize: '20px' }}>🚀</span>
          </button>
        </main>
      </div>
    )
  }

  // ── Steps 1–5: Questions ─────────────────────────────────────
  if (step >= 1 && step <= 5 && currentQuestion) {
    const topRow = currentQuestion.options.slice(0, 3)
    const bottomRow = currentQuestion.options.slice(3, 5)

    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'DM Sans', 'Montserrat', sans-serif", backgroundColor: '#F8FAFF' }}>
        <Navbar />
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '48px 24px 64px' }}>

          {/* Step badge */}
          <div
            id={`quiz-step-badge-${step}`}
            style={{
              backgroundColor: '#00C4CC',
              color: '#04153B',
              fontWeight: 900,
              fontSize: '14px',
              padding: '5px 18px',
              borderRadius: '4px',
              marginBottom: '28px',
              letterSpacing: '0.3px',
            }}
          >
            {step} de 5
          </div>

          {/* Question */}
          <h2
            style={{
              fontSize: 'clamp(20px, 3vw, 30px)',
              fontWeight: 900,
              color: '#04153B',
              textAlign: 'center',
              margin: '0 0 40px 0',
              maxWidth: '860px',
              lineHeight: 1.25,
              letterSpacing: '-0.3px',
            }}
          >
            {currentQuestion.text}
          </h2>

          {/* Cards grid */}
          <div style={{ width: '100%', maxWidth: '900px' }}>
            {/* Top 3 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '16px' }}>
              {topRow.map((opt, i) => (
                <AnswerCard key={i} label={opt.label} selected={selectedForCurrent === opt.profile} onClick={() => handleSelect(opt.profile)} />
              ))}
            </div>
            {/* Bottom 2 — centered under top 3 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', maxWidth: 'calc(66.66% + 8px)', margin: '0 auto' }}>
              {bottomRow.map((opt, i) => (
                <AnswerCard key={i} label={opt.label} selected={selectedForCurrent === opt.profile} onClick={() => handleSelect(opt.profile)} />
              ))}
            </div>
          </div>

          {/* Next / Result button */}
          <div style={{ marginTop: '48px' }}>
            <button
              id={`quiz-next-btn-${step}`}
              onClick={handleNext}
              disabled={!selectedForCurrent}
              style={{
                backgroundColor: selectedForCurrent ? '#E8F700' : '#E2E8F0',
                color: selectedForCurrent ? '#04153B' : '#94A3B8',
                border: selectedForCurrent ? '2px solid #00C4CC' : '2px solid transparent',
                borderRadius: '8px',
                padding: '14px 36px',
                fontSize: '18px',
                fontWeight: 800,
                cursor: selectedForCurrent ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: selectedForCurrent ? '0 4px 0px #00C4CC, 0 8px 20px rgba(0,0,0,0.12)' : 'none',
                transition: 'all 0.18s ease',
              }}
            >
              {step < 5 ? 'Próxima Pergunta' : 'Ver Resultado'} →
            </button>
          </div>
        </main>
      </div>
    )
  }

  // ── Step 6: Result ───────────────────────────────────────────
  const resultKey = getResult()
  const profile = PROFILES[resultKey]

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'DM Sans', 'Montserrat', sans-serif",
        backgroundColor: '#000000',
      }}
    >
      <Navbar />

      <main
        style={{
          flex: 1,
          backgroundColor: '#000000',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px 24px',
          gap: '32px',
        }}
      >
        {/* "RESULTADO" badge */}
        <div
          id="quiz-result-badge"
          style={{
            backgroundColor: '#FF007F',
            color: '#FFFFFF',
            fontWeight: 900,
            fontSize: '15px',
            letterSpacing: '2.5px',
            padding: '8px 28px',
            borderRadius: '4px',
          }}
        >
          RESULTADO
        </div>

        {/* Content row: badge + text */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '48px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            maxWidth: '820px',
            width: '100%',
          }}
        >
          {/* Circular badge */}
          <ProfileBadge profile={profile} />

          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1, minWidth: '280px' }}>
            {/* Title yellow box */}
            <div
              style={{
                backgroundColor: '#E8F700',
                borderRadius: '8px',
                padding: '14px 24px',
              }}
            >
              <h1
                id="quiz-result-title"
                style={{
                  margin: 0,
                  fontSize: 'clamp(22px, 4vw, 30px)',
                  fontWeight: 900,
                  color: '#04153B',
                  letterSpacing: '-0.5px',
                  lineHeight: 1.2,
                }}
              >
                {profile.title}
              </h1>
            </div>

            {/* Description box with colored border */}
            <div
              style={{
                border: `3px solid ${profile.borderColor}`,
                borderRadius: '8px',
                backgroundColor: '#FFFFFF',
                padding: '20px 24px',
              }}
            >
              <p
                style={{
                  margin: '0 0 8px 0',
                  fontSize: '12px',
                  fontWeight: 900,
                  color: '#04153B',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}
              >
                {profile.mantra}
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#1E293B',
                  lineHeight: 1.7,
                }}
              >
                {profile.description}
              </p>
            </div>
          </div>
        </div>

        {/* CONCLUIR button */}
        <button
          id="quiz-concluir-btn"
          onClick={handleReset}
          style={{
            backgroundColor: '#FF007F',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '6px',
            padding: '14px 40px',
            fontSize: '16px',
            fontWeight: 900,
            cursor: 'pointer',
            letterSpacing: '2px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 4px 20px rgba(255, 0, 127, 0.4)',
            transition: 'all 0.18s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,0,127,0.5)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,0,127,0.4)' }}
        >
          CONCLUIR ✓
        </button>

        {/* REC'n'PLAY watermark */}
        <img src={logoRecnplay} alt="REC'n'PLAY" style={{ height: '36px', objectFit: 'contain', opacity: 0.6 }} />
      </main>
    </div>
  )
}

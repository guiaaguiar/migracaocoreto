import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logoCoreto from '../../../assets/logo-coreto.png'
import logoAbdi from '../../../assets/logo-abdi.png'
import logoEmprel from '../../../assets/logo-emprel.png'
import bannerNetpitch from '../../../assets/banner-netpitch.png'

// ─── SVG Mascot Layla ────────────────────────────────────────

function LaylaMascot() {
  return (
    <svg width="220" height="260" viewBox="0 0 220 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Fluffy tail on right */}
      <path
        d="M175 160C195 165 210 185 205 205C200 220 180 225 165 210C155 200 160 175 175 160Z"
        fill="#E69C24"
      />
      <path
        d="M185 175C195 180 202 195 198 208C194 218 180 220 170 210C163 202 168 185 185 175Z"
        fill="#F59E0B"
      />

      {/* Body & Vest/Overalls (Navy Blue) */}
      <path
        d="M60 145C60 135 75 135 110 135C145 135 160 145 160 165L170 240C170 250 160 255 145 255H75C60 255 50 250 50 240L60 145Z"
        fill="#0F384C"
      />

      {/* White undershirt sleeves */}
      <path d="M55 140C45 145 35 155 30 170C40 175 52 170 58 155L55 140Z" fill="#E2E8F0" />
      <path d="M165 140C175 145 185 155 190 170C180 175 168 170 162 155L165 140Z" fill="#E2E8F0" />

      {/* Waving Right Paw / Arm (left in view) */}
      <path d="M32 170C20 160 12 145 22 135C30 128 42 140 46 155L32 170Z" fill="#E69C24" />
      <circle cx="20" cy="138" r="7" fill="#292524" />
      <circle cx="15" cy="132" r="3" fill="#292524" />
      <circle cx="22" cy="129" r="3" fill="#292524" />
      <circle cx="28" cy="133" r="3" fill="#292524" />

      {/* Belt / Harness */}
      <rect x="65" y="195" width="90" height="10" rx="5" fill="#1E293B" />

      {/* Red Collar */}
      <path d="M68 128C68 120 152 120 152 128C152 138 68 138 68 128Z" fill="#DC2626" />

      {/* Coreto Logo Tag on Collar */}
      <circle cx="110" cy="138" r="10" fill="#00A3B4" />
      <path
        d="M106 134C106 132 108 132 110 134C112 132 114 132 114 134C114 136 112 138 110 142C108 138 106 136 106 134Z"
        fill="#FFFFFF"
      />
      <circle cx="106" cy="138" r="2" fill="#E11D48" />
      <circle cx="114" cy="138" r="2" fill="#3B82F6" />

      {/* Head (Golden Tan) */}
      <ellipse cx="110" cy="85" rx="58" ry="48" fill="#F59E0B" />
      <ellipse cx="110" cy="98" rx="42" ry="32" fill="#FCD34D" />

      {/* Floppy Left Ear */}
      <path d="M54 60C38 65 30 90 35 115C42 125 58 115 58 95L54 60Z" fill="#C2780E" />

      {/* Floppy Right Ear */}
      <path d="M166 60C182 65 190 90 185 115C178 125 162 115 162 95L166 60Z" fill="#C2780E" />

      {/* Big Expressive Eyes */}
      <ellipse cx="90" cy="78" rx="10" ry="14" fill="#1E293B" />
      <ellipse cx="130" cy="78" rx="10" ry="14" fill="#1E293B" />
      {/* Eye Highlights */}
      <circle cx="87" cy="73" r="4" fill="#FFFFFF" />
      <circle cx="127" cy="73" r="4" fill="#FFFFFF" />
      <circle cx="92" cy="82" r="2" fill="#FFFFFF" />
      <circle cx="132" cy="82" r="2" fill="#FFFFFF" />

      {/* Eyebrows */}
      <path d="M80 58C86 54 98 56 100 60" stroke="#78350F" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M140 58C134 54 122 56 120 60" stroke="#78350F" strokeWidth="3.5" strokeLinecap="round" />

      {/* Snout & Nose */}
      <path d="M100 92C100 86 120 86 120 92C120 98 100 98 100 92Z" fill="#1E293B" />
      <ellipse cx="110" cy="90" rx="8" ry="6" fill="#0F172A" />
      <circle cx="108" cy="88" r="2" fill="#FFFFFF" opacity="0.6" />

      {/* Happy Open Mouth */}
      <path d="M96 98C100 115 120 115 124 98Z" fill="#7F1D1D" />
      <path d="M102 106C106 114 114 114 118 106Z" fill="#F43F5E" />
    </svg>
  )
}

// ─── Option Cards SVG Illustrations ───────────────────────────

function ExtendedVersionIllustration() {
  return (
    <svg width="180" height="130" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Speech bubble */}
      <rect x="85" y="8" width="22" height="14" rx="4" fill="#3B82F6" opacity="0.8" />
      <path d="M92 22L88 26V22H92Z" fill="#3B82F6" opacity="0.8" />
      <line x1="89" y1="13" x2="101" y2="13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="89" y1="17" x2="97" y2="17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />

      {/* Whiteboard / Easel */}
      <line x1="45" y1="105" x2="35" y2="130" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="75" y1="105" x2="85" y2="130" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="60" y1="105" x2="60" y2="132" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Board frame */}
      <rect x="25" y="28" width="70" height="78" rx="4" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" />
      <rect x="28" y="31" width="64" height="72" rx="2" fill="#F8FAFC" />
      
      {/* Board Content: Pie Chart */}
      <circle cx="44" cy="50" r="10" fill="#E2E8F0" />
      <path d="M44 50 L44 40 A10 10 0 0 1 54 50 Z" fill="#2563EB" />
      
      {/* Board Content: Bar Chart */}
      <rect x="62" y="52" width="6" height="14" rx="1" fill="#3B82F6" />
      <rect x="71" y="44" width="6" height="22" rx="1" fill="#60A5FA" />
      <rect x="80" y="38" width="6" height="28" rx="1" fill="#2563EB" />
      
      {/* Board Content: Text lines below */}
      <line x1="34" y1="75" x2="86" y2="75" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
      <line x1="34" y1="83" x2="72" y2="83" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
      <line x1="34" y1="91" x2="64" y2="91" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />

      {/* Potted Plant left of board */}
      <path d="M18 118L20 130H26L28 118H18Z" fill="#94A3B8" />
      <path d="M19 118C17 112 14 110 12 110C14 114 18 116 19 118Z" fill="#22C55E" />
      <path d="M23 118C23 110 23 106 25 104C26 109 25 114 23 118Z" fill="#16A34A" />

      {/* Woman character right of board */}
      <path d="M115 95L111 130H117L121 95Z" fill="#F43F5E" />
      <path d="M123 95L127 130H133L127 95Z" fill="#F43F5E" />
      
      <path d="M110 58C110 54 116 54 121 54C126 54 132 54 132 58L130 96H112L110 58Z" fill="#2563EB" />
      
      <path d="M112 60L98 75L102 78L114 65Z" fill="#2563EB" />
      <circle cx="97" cy="76" r="3" fill="#FDBA74" />
      
      <path d="M130 60L135 78L130 80L127 65Z" fill="#1D4ED8" />
      <circle cx="134" cy="80" r="3" fill="#FDBA74" />

      <rect x="119" y="47" width="4" height="8" fill="#FDBA74" />
      <circle cx="121" cy="42" r="7" fill="#FDBA74" />
      <path d="M114 42C114 34 128 34 128 42C128 45 125 47 125 47H117C117 47 114 45 114 42Z" fill="#1E293B" />
    </svg>
  )
}

function ReducedVersionIllustration() {
  return (
    <svg width="180" height="130" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shadow / Backing Paper (Purple tint) */}
      <rect x="75" y="18" width="62" height="82" rx="4" fill="#A855F7" opacity="0.4" />
      
      {/* Front Main Document */}
      <rect x="62" y="24" width="64" height="84" rx="4" fill="#FFFFFF" stroke="#86EFAC" strokeWidth="2.5" />
      
      {/* Header Block (Green) */}
      <rect x="67" y="30" width="30" height="14" rx="2" fill="#22C55E" />
      {/* Header Block (Orange Accent) */}
      <rect x="100" y="30" width="20" height="7" rx="1.5" fill="#F97316" />
      
      {/* Content text lines */}
      <rect x="67" y="50" width="45" height="3" rx="1.5" fill="#CBD5E1" />
      <rect x="67" y="57" width="52" height="3" rx="1.5" fill="#E2E8F0" />
      <rect x="67" y="64" width="38" height="3" rx="1.5" fill="#E2E8F0" />
      
      {/* Bottom Highlight Box ("a_") */}
      <rect x="67" y="74" width="40" height="24" rx="3" fill="#DCFCE7" stroke="#86EFAC" strokeWidth="1" />
      
      {/* Text "a_" inside green box */}
      <text x="73" y="91" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#15803D">a_</text>
    </svg>
  )
}

// ─── Main Component ──────────────────────────────────────────

export default function NetpitchV2Page() {
  const [activeMenu, setActiveMenu] = useState('Criar solução')
  
  // Selection mode: null = Selection screen, 'estendida' = 20-question form, 'reduzida' = 5-question form
  const [selectedVersion, setSelectedVersion] = useState<'estendida' | 'reduzida' | null>(null)
  
  // Hovered state tracking
  const [hoveredOption, setHoveredOption] = useState<'estendida' | 'reduzida' | null>(null)

  // Step counter inside questionnaire (0-indexed)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  // Question form answers
  const [answersEstendida, setAnswersEstendida] = useState<string[]>(Array(20).fill(''))
  const [answersReduzida, setAnswersReduzida] = useState<string[]>(Array(5).fill(''))

  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [validationError, setValidationError] = useState(false)

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 4000)
  }

  // ALL 20 Questions for Versão Estendida
  const slidesEstendida = [
    {
      laylaMsg: 'Olá! Eu sou a Layla, sua assistente virtual aqui no NetPitch. 💡\nO NetPitch é um gerador inteligente de apresentações que transforma suas respostas em um pitch deck profissional, rápido e claro! Vamos criar algo incrível juntos? Primeiro, começamos com o básico:',
      question: 'Vamos começar com o nome! Como sua startup se chama? Pode ser o nome atual ou o que você está planejando usar.',
    },
    {
      laylaMsg: 'Agora me conta: qual é aquela frase curta e marcante que resume o propósito da sua startup? Algo que ajude a fixar sua marca na mente do público.',
      question: 'Qual o slogan ou frase que representa a sua startup?',
    },
    {
      laylaMsg: 'Compartilhe como tudo começou. Quando sua empresa surgiu? Teve algum marco importante ou uma virada de chave que merece ser lembrada?',
      question: 'Conte brevemente o histórico da sua empresa.',
    },
    {
      laylaMsg: 'Me impressione! 😃 Aqui você pode usar um dado chamativo ou uma frase poderosa. Algo que provoque o famoso “uau!” de quem vai ver seu pitch.',
      question: 'Qual é a frase de impacto ou Big Number que resume o potencial da sua startup?',
    },
    {
      laylaMsg: 'Toda boa solução começa com um bom problema. Explique qual dor você resolveu detectar — e como ela impacta a vida das pessoas ou empresas.',
      question: 'Que problema sua startup resolve?',
    },
    {
      laylaMsg: 'Quem é seu cliente ideal? Descreva o perfil demográfico, hábitos ou necessidades do público que você busca alcançar.',
      question: 'Quem é o seu público-alvo principal?',
    },
    {
      laylaMsg: 'Aqui vale mostrar o quanto sua ideia pode escalar! 📈\nFale quantas pessoas ou empresas podem se beneficiar da sua solução. Se souber, cite números estimados do seu mercado total, o que já consegue atender e o que já está conquistando.',
      question: 'Descreva brevemente o mercado em que atua (TAM, SAM, SOM).',
    },
    {
      laylaMsg: 'Aqui quero entender: o que sua startup oferece, de forma prática? O que ela exatamente faz para resolver o problema que você citou antes?',
      question: 'Explique de forma simples qual é a sua solução.',
    },
    {
      laylaMsg: 'Agora é hora de ir além da promessa e explicar o como. Descreva os recursos, fluxos, ferramentas e tecnologias que tornam sua solução real e funcional. Pense que você está mostrando como ela realmente opera na vida do cliente!',
      question: 'Liste as principais funcionalidades e diferenciais do seu produto/serviço.',
    },
    {
      laylaMsg: 'Se sua startup tem algo que ninguém mais tem — como uma tecnologia própria, patente ou processo exclusivo — é hora de destacar isso. Isso mostra inovação e barreiras de entrada.',
      question: 'Sua solução possui patente registrada ou tecnologia exclusiva?',
    },
    {
      laylaMsg: 'Me conta o caminho que seu cliente percorre! 🚶\nComo que ele começa, o que ele experimenta e qual o resultado final? Uma boa jornada mostra a maturidade da sua entrega.',
      question: 'Descreva a jornada típica do cliente usando seu produto ou serviço.',
    },
    {
      laylaMsg: 'Hora de mostrar que funciona! Compartilhe uma história real, com resultado claro, que mostre o valor da sua solução na prática.',
      question: 'Conte um caso real de sucesso de cliente.',
    },
    {
      laylaMsg: 'Já testou sua ideia com clientes reais, pilotos ou MVPs? Que tipo de feedback você recebeu? Isso fortalece muito seu pitch!',
      question: 'Quais validações de mercado você já realizou?',
    },
    {
      laylaMsg: 'Se você está num jogo... quem mais já está jogando? Mostre que conhece o mercado, e o que sua startup faz diferente dos demais.',
      question: 'Quem são seus principais concorrentes?',
    },
    {
      laylaMsg: 'Conte como entra dinheiro na sua operação. Venda direta? Assinatura? Freemium com upsell? Quanto custa e como o cliente paga?',
      question: 'Como sua empresa gera receita?',
    },
    {
      laylaMsg: 'Vamos mostrar tração! Faturamento, usuários, expansão, parcerias — qualquer métrica que indique que você está crescendo.',
      question: 'Quais são os principais resultados alcançados até agora?',
    },
    {
      laylaMsg: 'Agora vamos olhar para frente: o que vem por aí? Quais são suas metas, lançamentos, expansão ou próximos marcos?',
      question: 'Quais são seus próximos passos e visão de futuro?',
    },
    {
      laylaMsg: 'Apresente as mentes por trás do negócio! Mostre experiência, funções e o que faz esse time ser a melhor equipe para essa missão.',
      question: 'Quem são os fundadores e principais membros do time?',
    },
    {
      laylaMsg: 'Para o slide final, escreva uma frase institucional, clara e impactante. Algo que feche o pitch com personalidade e convide o público a continuar essa conversa com você!',
      question: 'Escreva uma mini copy para apresentar sua startup.',
    },
    {
      laylaMsg: 'Por último, mas não menos importante: como as pessoas podem te encontrar? Deixe os principais contatos atualizados!',
      question: 'Informe seus dados de contato: e-mail, telefone, Instagram e site.',
    },
  ]

  // ALL 5 Questions for Versão Reduzida
  const slidesReduzida = [
    {
      laylaMsg: 'Olá! Eu sou a Layla, sua assistente virtual no NetPitch. 🐾\nNesta versão, vamos montar um pitch direto e impactante em formato de texto.\nIdeal para apresentar ideias de forma rápida, clara e com foco na mensagem principal.\nAgora, vamos começar com o mais importante:',
      question: 'Sobre o que é sua ideia, projeto ou solução?',
    },
    {
      laylaMsg: 'Toda boa ideia nasce de um problema real. O que sua solução resolve? Tente mostrar por que isso importa para as pessoas ou para o mundo.',
      question: 'Qual problema ela resolve ou necessidade atende?',
    },
    {
      laylaMsg: 'Agora me diga o que torna a sua ideia especial. Por que ela é diferente ou melhor do que outras parecidas? Vale destacar tecnologia, abordagem, impacto ou algo único.',
      question: 'Qual seu diferencial?',
    },
    {
      laylaMsg: 'Quem se beneficia com essa solução? Pode ser um perfil de pessoas, uma região, uma comunidade específica ou até um setor.',
      question: 'Quem é seu público alvo?',
    },
    {
      laylaMsg: 'Seu pitch precisa fechar com um convite claro. Quer que invistam? Que compartilhem? Que apoiem? Me diga qual é a sua chamada para ação.',
      question: 'O que você quer que as pessoas façam depois de ouvir seu Pitch?',
    },
  ]

  const currentSlides = selectedVersion === 'estendida' ? slidesEstendida : slidesReduzida
  const currentAnswers = selectedVersion === 'estendida' ? answersEstendida : answersReduzida

  const currentAnswerText = currentAnswers[currentQuestionIndex] || ''
  const isCurrentAnswerFilled = currentAnswerText.trim().length > 0

  // ── DYNAMIC PROGRESS CALCULATION ──
  // As requested: When something is filled in the input for the current question,
  // the progress bar immediately updates to include this step (e.g. 5% -> 100% or 20% -> 100%)
  const completedQuestionsCount = currentQuestionIndex + (isCurrentAnswerFilled ? 1 : 0)
  const totalQuestionsCount = currentSlides.length
  const progressPercentage = Math.round((completedQuestionsCount / totalQuestionsCount) * 100)
  const progressPctString = `${progressPercentage}%`

  const handleNext = () => {
    if (!isCurrentAnswerFilled) {
      setValidationError(true)
      showToast('⚠️ O campo de resposta é obrigatório! Preencha antes de avançar.')
      return
    }
    setValidationError(false)
    if (currentQuestionIndex < currentSlides.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    } else {
      // Finalize & Download
      if (selectedVersion === 'estendida') {
        handleDownloadEstendida()
      } else {
        handleDownloadReduzida()
      }
    }
  }

  const handleDownloadEstendida = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
      const content = `NETPITCH - VERSÃO ESTENDIDA (.PPTX GENERATED)\n\n` +
        slidesEstendida.map((s, idx) => `[SLIDE ${idx + 1}] ${s.question}\nResposta: ${answersEstendida[idx] || 'Não preenchido'}\n`).join('\n')
      
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `pitch-estendido-${Date.now()}.pptx.txt`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
      showToast('🚀 Pitch Estendido gerado e baixado com sucesso (.pptx)!')
    }, 1200)
  }

  const handleDownloadReduzida = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
      const content = `NETPITCH - VERSÃO REDUZIDA (.TXT)\n\n` +
        slidesReduzida.map((s, idx) => `[PERGUNTA ${idx + 1}] ${s.question}\n-> ${answersReduzida[idx] || 'Não preenchido'}\n`).join('\n')

      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `pitch-reduzido-${Date.now()}.txt`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
      showToast('🚀 Pitch Reduzido gerado e baixado em formato .txt!')
    }, 1000)
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#F8FAFC',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        color: '#1E293B',
      }}
    >
      {/* Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            padding: '12px 20px',
            borderRadius: '8px',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
            zIndex: 9999,
            fontSize: '14px',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            animation: 'fadeIn 0.3s ease',
          }}
        >
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ── Top Header Bar ── */}
      <header
        style={{
          backgroundColor: '#FFFFFF',
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
          <Link to="/legacy" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logoCoreto} alt="Coreto" style={{ height: '32px', objectFit: 'contain' }} />
          </Link>
          <div style={{ width: '1px', height: '24px', backgroundColor: '#CBD5E1' }} />
          <img src={logoAbdi} alt="ABDI" style={{ height: '26px', objectFit: 'contain' }} />
          <img src={logoEmprel} alt="Emprel" style={{ height: '22px', objectFit: 'contain' }} />
        </div>

        {/* Right User Profile / Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#F1F5F9',
              border: '1px solid #CBD5E1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#334155',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <span style={{ fontSize: '14px', fontWeight: 600, color: '#334155' }}>Pedro</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </header>

      {/* ── Main Layout: Sidebar + Content ── */}
      <div style={{ display: 'flex', flex: 1 }}>
        {/* Left Sidebar */}
        <aside
          style={{
            width: '240px',
            backgroundColor: '#FFFFFF',
            borderRight: '1px solid #E2E8F0',
            padding: '24px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            flexShrink: 0,
          }}
        >
          {/* Top Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <SidebarItem
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              }
              label="Início"
              active={activeMenu === 'Início'}
              onClick={() => setActiveMenu('Início')}
            />
            <SidebarItem
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 4 23 10 17 10" />
                  <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                </svg>
              }
              label="Meus programas"
              active={activeMenu === 'Meus programas'}
              onClick={() => setActiveMenu('Meus programas')}
            />
          </div>

          {/* RESOLVEDOR Section */}
          <div>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: '#1E293B',
                letterSpacing: '0.05em',
                marginBottom: '8px',
                paddingLeft: '12px',
                textTransform: 'uppercase',
              }}
            >
              RESOLVEDOR
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <SidebarItem
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a16.5 16.5 0 0 0 .33-1.82l-2.05-.72a8.88 8.88 0 0 0-.44-1.07l1.17-1.84a16.56 16.56 0 0 0-1.28-1.29l-1.84 1.17c-.34-.17-.7-.32-1.07-.44l-.72-2.05A16.56 16.56 0 0 0 12 4.6v2.18c-.38.03-.76.1-1.12.21L9.67 4.95a16.63 16.63 0 0 0-1.82.33l-.72 2.05c-.37.12-.73.27-1.07.44L4.22 6.6A16.56 16.56 0 0 0 2.94 7.89l1.17 1.84c-.17.34-.32.7-.44 1.07l-2.05.72A16.5 16.5 0 0 0 1.6 13.34h2.18c.03.38.1.76.21 1.12l-2.04 1.21a16.63 16.63 0 0 0 .33 1.82l2.05.72c.12.37.27.73.44 1.07l-1.17 1.84a16.56 16.56 0 0 0 1.28-1.29l1.84-1.17c.34.17.7.32 1.07.44l.72 2.05c.6.12 1.2.23 1.82.33v-2.18c.38-.03.76-.1 1.12-.21l1.21 2.04c.61-.09 1.22-.2 1.82-.33l.72-2.05c.37-.12.73-.27 1.07-.44l1.84 1.17a16.56 16.56 0 0 0 1.28-1.29l-1.17-1.84c.17-.34.32-.7.44-1.07l2.05-.72z" />
                  </svg>
                }
                label="Oportunidades"
                active={activeMenu === 'Oportunidades'}
                onClick={() => setActiveMenu('Oportunidades')}
              />
              <SidebarItem
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z" />
                  </svg>
                }
                label="Criar solução"
                active={activeMenu === 'Criar solução'}
                onClick={() => {
                  setActiveMenu('Criar solução')
                  setSelectedVersion(null)
                }}
              />
              <SidebarItem
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                }
                label="Benefícios"
                active={activeMenu === 'Benefícios'}
                onClick={() => setActiveMenu('Benefícios')}
              />
              <SidebarItem
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="9" y1="3" x2="9" y2="21" />
                  </svg>
                }
                label="Painel"
                active={activeMenu === 'Painel'}
                onClick={() => setActiveMenu('Painel')}
              />
            </div>
          </div>

          <div style={{ height: '1px', backgroundColor: '#E2E8F0', margin: '4px 0' }} />

          {/* GERAL Section */}
          <div>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: '#1E293B',
                letterSpacing: '0.05em',
                marginBottom: '8px',
                paddingLeft: '12px',
                textTransform: 'uppercase',
              }}
            >
              GERAL
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <SidebarItem
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                }
                label="Ajuda"
                active={activeMenu === 'Ajuda'}
                onClick={() => setActiveMenu('Ajuda')}
              />
              <SidebarItem
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                }
                label="Sair"
                active={false}
                onClick={() => showToast('Sessão encerrada')}
              />
            </div>
          </div>
        </aside>

        {/* ── Main Content Area ── */}
        <main style={{ flex: 1, padding: '32px 40px', maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Top Banner Card */}
          <div
            style={{
              width: '100%',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
              marginBottom: '28px',
              backgroundColor: '#00A3B4',
            }}
          >
            <img
              src={bannerNetpitch}
              alt="NETpitch"
              style={{ width: '100%', display: 'block', maxHeight: '200px', objectFit: 'cover' }}
            />
          </div>

          {/* Main Content Box */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: selectedVersion ? '36px 40px' : '40px 48px',
              boxShadow: '0 4px 25px -4px rgba(0, 0, 0, 0.04)',
              border: '1px solid #E2E8F0',
            }}
          >
            {/* View 1: Version Selection Screen */}
            {selectedVersion === null && (
              <div>
                <h1
                  style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    color: '#0F172A',
                    marginBottom: '12px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Bem-vindo(a) ao NETPitch!
                </h1>
                <p
                  style={{
                    fontSize: '15px',
                    color: '#475569',
                    marginBottom: '36px',
                    lineHeight: 1.6,
                  }}
                >
                  O NETPitch te ajuda na formatação de <i>pitches</i> a partir da descrição da sua startup, projeto ou ideia! Selecione uma opção:
                </p>

                {/* The Two Version Option Cards with Hover Effect */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '28px',
                  }}
                >
                  {/* Card 1: Versão Estendida */}
                  <div
                    onClick={() => {
                      setSelectedVersion('estendida')
                      setCurrentQuestionIndex(0)
                      setValidationError(false)
                    }}
                    onMouseEnter={() => setHoveredOption('estendida')}
                    onMouseLeave={() => setHoveredOption(null)}
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: hoveredOption === 'estendida' ? '1.5px solid #00A3B4' : '1px solid #E2E8F0',
                      borderRadius: '16px',
                      padding: '44px 28px 36px 28px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      cursor: 'pointer',
                      boxShadow:
                        hoveredOption === 'estendida'
                          ? '0 12px 30px -4px rgba(0, 163, 180, 0.15)'
                          : '0 2px 10px rgba(0, 0, 0, 0.03)',
                      transform: hoveredOption === 'estendida' ? 'translateY(-4px)' : 'translateY(0)',
                      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                      minHeight: '260px',
                      justifyContent: 'center',
                    }}
                  >
                    <div style={{ marginBottom: '16px' }}>
                      <ExtendedVersionIllustration />
                    </div>

                    <h2
                      style={{
                        fontSize: '22px',
                        fontWeight: 700,
                        color: '#0F172A',
                        margin: 0,
                        transition: 'color 0.2s ease',
                      }}
                    >
                      Versão Estendida
                    </h2>

                    {/* Hover text container */}
                    <div
                      style={{
                        maxHeight: hoveredOption === 'estendida' ? '100px' : '0px',
                        opacity: hoveredOption === 'estendida' ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        marginTop: hoveredOption === 'estendida' ? '12px' : '0px',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '14px',
                          color: '#475569',
                          lineHeight: 1.5,
                          margin: 0,
                          maxWidth: '320px',
                        }}
                      >
                        Uma versão mais detalhada com base em um questionário de 20 perguntas, gerada no formato .pptx
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Versão Reduzida */}
                  <div
                    onClick={() => {
                      setSelectedVersion('reduzida')
                      setCurrentQuestionIndex(0)
                      setValidationError(false)
                    }}
                    onMouseEnter={() => setHoveredOption('reduzida')}
                    onMouseLeave={() => setHoveredOption(null)}
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: hoveredOption === 'reduzida' ? '1.5px solid #00A3B4' : '1px solid #E2E8F0',
                      borderRadius: '16px',
                      padding: '44px 28px 36px 28px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      cursor: 'pointer',
                      boxShadow:
                        hoveredOption === 'reduzida'
                          ? '0 12px 30px -4px rgba(0, 163, 180, 0.15)'
                          : '0 2px 10px rgba(0, 0, 0, 0.03)',
                      transform: hoveredOption === 'reduzida' ? 'translateY(-4px)' : 'translateY(0)',
                      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                      minHeight: '260px',
                      justifyContent: 'center',
                    }}
                  >
                    <div style={{ marginBottom: '16px' }}>
                      <ReducedVersionIllustration />
                    </div>

                    <h2
                      style={{
                        fontSize: '22px',
                        fontWeight: 700,
                        color: '#0F172A',
                        margin: 0,
                        transition: 'color 0.2s ease',
                      }}
                    >
                      Versão Reduzida
                    </h2>

                    {/* Hover text container */}
                    <div
                      style={{
                        maxHeight: hoveredOption === 'reduzida' ? '100px' : '0px',
                        opacity: hoveredOption === 'reduzida' ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        marginTop: hoveredOption === 'reduzida' ? '12px' : '0px',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '14px',
                          color: '#475569',
                          lineHeight: 1.5,
                          margin: 0,
                          maxWidth: '320px',
                        }}
                      >
                        Uma versão reduzida com base em um questionário de 5 perguntas, gerada no formato .txt
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* View 2: Form Wizard for Versão Estendida & Reduzida (With Mascot Layla) */}
            {selectedVersion !== null && (
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 220px', gap: '24px', alignItems: 'flex-start' }}>
                  {/* Left Column: Layla Message + Question Box */}
                  <div>
                    {/* Layla Speech Bubble */}
                    <div
                      style={{
                        backgroundColor: '#F1F5F9',
                        borderRadius: '12px',
                        padding: '16px 20px',
                        marginBottom: '16px',
                        border: '1px solid #E2E8F0',
                        lineHeight: 1.5,
                        fontSize: '14px',
                        color: '#1E293B',
                        whiteSpace: 'pre-line',
                        fontWeight: 500,
                      }}
                    >
                      {currentSlides[currentQuestionIndex].laylaMsg}
                    </div>

                    {/* Main Question Box */}
                    <div
                      style={{
                        backgroundColor: '#F8FAFC',
                        borderRadius: '12px',
                        padding: '20px',
                        border: '1px solid #E2E8F0',
                        marginBottom: '20px',
                      }}
                    >
                      <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', marginBottom: '14px' }}>
                        {currentSlides[currentQuestionIndex].question}
                      </h3>

                      {/* Text Input Container */}
                      <div style={{ position: 'relative' }}>
                        <textarea
                          rows={2}
                          value={currentAnswerText}
                          onChange={(e) => {
                            setValidationError(false)
                            if (selectedVersion === 'estendida') {
                              const newAns = [...answersEstendida]
                              newAns[currentQuestionIndex] = e.target.value
                              setAnswersEstendida(newAns)
                            } else {
                              const newAns = [...answersReduzida]
                              newAns[currentQuestionIndex] = e.target.value
                              setAnswersReduzida(newAns)
                            }
                          }}
                          placeholder="Responda assertivamente a questão acima"
                          style={{
                            width: '100%',
                            padding: '14px 16px',
                            borderRadius: '8px',
                            backgroundColor: '#EAECEF',
                            border: validationError ? '2px solid #EF4444' : '1px solid #CBD5E1',
                            fontSize: '14px',
                            color: '#1E293B',
                            outline: 'none',
                            resize: 'none',
                            boxSizing: 'border-box',
                            fontFamily: 'inherit',
                            transition: 'border-color 0.2s ease',
                          }}
                        />
                        {validationError && (
                          <div style={{ color: '#EF4444', fontSize: '12px', fontWeight: 600, marginTop: '4px' }}>
                            ⚠️ O campo não pode ficar em branco para avançar.
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons Row */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '16px',
                        marginBottom: '24px',
                      }}
                    >
                      {/* Left: Voltar & Voltar ao Menu */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, maxWidth: '280px' }}>
                        <button
                          disabled={currentQuestionIndex === 0}
                          onClick={() => {
                            setValidationError(false)
                            setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))
                          }}
                          style={{
                            backgroundColor: '#FFFFFF',
                            color: '#DC2626',
                            border: '1.5px solid #DC2626',
                            borderRadius: '8px',
                            padding: '10px 16px',
                            fontSize: '14px',
                            fontWeight: 600,
                            cursor: currentQuestionIndex === 0 ? 'not-allowed' : 'pointer',
                            opacity: currentQuestionIndex === 0 ? 0.5 : 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            transition: 'all 0.15s ease',
                          }}
                        >
                          ← Voltar
                        </button>
                        <button
                          onClick={() => {
                            setSelectedVersion(null)
                            setCurrentQuestionIndex(0)
                            setValidationError(false)
                          }}
                          style={{
                            backgroundColor: '#FFFFFF',
                            color: '#DC2626',
                            border: '1.5px solid #DC2626',
                            borderRadius: '8px',
                            padding: '8px 16px',
                            fontSize: '13px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            transition: 'all 0.15s ease',
                          }}
                        >
                          ↲ Voltar ao menu
                        </button>
                      </div>

                      {/* Right: Próxima pergunta / Finalizar / Baixar Pitch */}
                      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', height: '100%', alignItems: 'flex-start' }}>
                        <button
                          onClick={handleNext}
                          style={{
                            backgroundColor: '#FFFFFF',
                            color: '#00A3B4',
                            border: '1.5px solid #00A3B4',
                            borderRadius: '8px',
                            padding: '10px 24px',
                            fontSize: '14px',
                            fontWeight: 700,
                            cursor: !isCurrentAnswerFilled ? 'not-allowed' : 'pointer',
                            opacity: !isCurrentAnswerFilled ? 0.6 : 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            transition: 'all 0.15s ease',
                            width: '100%',
                            maxWidth: '260px',
                            height: '42px',
                          }}
                        >
                          {currentQuestionIndex < currentSlides.length - 1 ? (
                            <>→ Próxima pergunta</>
                          ) : (
                            <>{isGenerating ? 'Gerando...' : '↓ Baixar Pitch'}</>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Layla Mascot */}
                  <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
                    <LaylaMascot />
                  </div>
                </div>

                {/* Bottom Step Indicator Pills (01 to 20 or 1 to 5) */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${currentSlides.length}, 1fr)`,
                    gap: '6px',
                    marginTop: '16px',
                    marginBottom: '12px',
                  }}
                >
                  {currentSlides.map((_, idx) => {
                    // Pill is completed if previous question OR current question filled
                    const isDoneOrActive = idx < currentQuestionIndex || (idx === currentQuestionIndex && isCurrentAnswerFilled)
                    const isCurrent = idx === currentQuestionIndex
                    const labelText = selectedVersion === 'estendida' ? String(idx + 1).padStart(2, '0') : String(idx + 1)
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          if (idx <= currentQuestionIndex || currentAnswers[idx]?.trim()) {
                            setCurrentQuestionIndex(idx)
                            setValidationError(false)
                          }
                        }}
                        style={{
                          backgroundColor: isDoneOrActive ? '#00A3B4' : '#E0F2FE',
                          color: isDoneOrActive ? '#FFFFFF' : '#00A3B4',
                          border: isCurrent ? '2px solid #0F172A' : 'none',
                          borderRadius: '4px',
                          padding: '6px 0',
                          fontSize: '11px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          textAlign: 'center',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        {labelText}
                      </button>
                    )
                  })}
                </div>

                {/* Progress Bar Container */}
                <div
                  style={{
                    border: '1.5px solid #0F172A',
                    borderRadius: '4px',
                    height: '24px',
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  <div
                    style={{
                      width: progressPctString,
                      height: '100%',
                      backgroundColor: '#00A3B4',
                      transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: progressPercentage > 50 ? '#FFFFFF' : '#0F172A',
                    }}
                  >
                    {progressPctString}
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

// ─── Sidebar Item Helper Component ───────────────────────────

function SidebarItem({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  active?: boolean
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        width: '100%',
        padding: '10px 12px',
        borderRadius: '8px',
        backgroundColor: active ? 'rgba(0, 163, 180, 0.08)' : 'transparent',
        color: active ? '#00A3B4' : '#64748B',
        border: 'none',
        fontSize: '14px',
        fontWeight: active ? 600 : 500,
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'all 0.15s ease',
      }}
    >
      <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>
      <span>{label}</span>
    </button>
  )
}

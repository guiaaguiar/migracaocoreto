import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logoCoreto from '../../../assets/logo-coreto.png'
import logoAbdi from '../../../assets/logo-abdi.png'
import logoEmprel from '../../../assets/logo-emprel.png'
import bannerNetpitch from '../../../assets/banner-netpitch.png'

// Pool de perguntas genéricas de inovação que rotacionam no carregamento da página
const PERGUNTAS_1_POOL = [
  'Qual é a proposta de valor central e o modelo de negócio da sua startup?',
  'Como o seu produto ou serviço se diferencia das soluções já existentes no mercado?',
  'Qual é o principal problema ou dor do mercado que a sua solução se propõe a resolver?',
  'De que forma a tecnologia ou metodologia aplicada garante uma vantagem competitiva sustentável?',
  'Como você pretende atrair, adquirir e reter os seus primeiros clientes?',
]

const PERGUNTAS_2_POOL = [
  'Quais são as principais métricas (KPIs) utilizadas para medir o sucesso e a tração do negócio?',
  'Quais são os maiores desafios regulatórios, operacionais ou tecnológicos previstos para a escala?',
  'Qual é o perfil e a experiência da equipe fundadora para executar essa solução com excelência?',
  'Quais recursos financeiros e humanos são necessários para atingir os próximos marcos estratégicos?',
  'Como a solução impacta o ecossistema local e qual o potencial de expansão para outros mercados?',
]

// Pools de contexto mockado para os campos de resultado (rotacionam aleatoriamente a cada refresh, min 5 linhas)
const RECURSOS_NECESSARIOS_POOL = [
  `1. Infraestrutura Cloud e Servidores: Contratação de serviços em nuvem (AWS/GCP) com instâncias dedicadas de GPU para inferência de IA.
2. Equipe Técnica Especializada: 2 Desenvolvedores Full-stack (React/Node.js), 1 Engenheiro de Dados/IA e 1 Designer UX/UI.
3. Licenciamento e APIs de Terceiros: Assinatura de APIs de modelos de linguagem (OpenAI/Anthropic) e bancos de dados vetoriais.
4. Capital para Marketing B2B: Orçamento inicial para campanhas direcionadas no LinkedIn Ads e participação em eventos de ecossistema.
5. Assessoria Jurídica e Contábil: Suporte para adequação à LGPD, propriedade intelectual e estruturação de contratos com clientes.`,

  `1. Desenvolvimento de Software: Alocação de squad ágil focada no desenvolvimento do MVP com arquitetura escalável e segurança de dados.
2. Ferramentas de Produtividade: Licenças de plataformas de prototipagem, automação de testes e monitoramento contínuo de desempenho.
3. Consultoria de Domínio: Especialistas do setor público e privado para validação das regras de negócio e integrações.
4. Estrutura de Atendimento e Suporte: Implementação de canal omnicanal para onboarding e suporte aos usuários iniciais.
5. Reserva Financeira Operacional: Capital de giro estipulado para cobrir custos de operação durante a fase de validação inicial.`,

  `1. Equipe Multidisciplinar: Contratação de Gerente de Produto (PM), Desenvolvedor Frontend e especialista em Customer Success.
2. Infraestrutura de Segurança: Certificados SSL/TLS, auditoria de código para conformidade com normas ISO e testes de invasão.
3. Tráfego Pago e Outbound: Orçamento dedicado para prospecção ativa B2B e geração de leads qualificados.
4. Equipamentos e Hardware: Estações de trabalho de alta performance para os times de tecnologia e design.
5. Integrações de Pagamento e Billing: Módulos para gestão de assinaturas, emissão automática de notas fiscais e conciliação bancária.`,
]

const PUBLICO_ALVO_POOL = [
  `1. Startups em Estágio Inicial (Seed/Pre-Seed): Empreendedores e fundadores que necessitam estruturar propostas de valor para captação.
2. Gestores de Inovação Aberta: Profissionais em grandes corporações e órgãos governamentais responsáveis por avaliar soluções.
3. Hubs e Incubadoras Tecnológicas: Instituições de fomento que acompanham o desenvolvimento e maturidade dos projetos cadastrados.
4. Investidores Anjo e Fundos de VC: Avaliadores que buscam pitches padronizados, estruturados e com métricas claras de viabilidade.
5. Consultores e Mentores de Negócios: Especialistas que utilizam a plataforma para orientar startups no refinamento do pitch.`,

  `1. Empresas de Médio e Grande Porte: Organizações buscando conectar seus problemas operacionais a soluções inovadoras do mercado.
2. Instituições de Ensino e Pesquisa: Universidades e NITs interessados em transformar pesquisas acadêmicas em produtos comercializáveis.
3. Gestores Públicos e GovTechs: Secretarias de tecnologia e inovação municipal ou estadual com foco em modernização de serviços.
4. Ecossistema de Inovação Local: Atores e parceiros estratégicos que demandam relatórios consolidados sobre maturidade de projetos.
5. Empreendedores Universitários: Estudantes e pesquisadores participando de programas de ideação e maratonas de inovação.`,

  `1. Micro e Pequenas Empresas Inovadoras: Negócios tradicionais em processo de transição digital que buscam novos parceiros.
2. Aceleradoras de Negócios de Impacto: Entidades direcionadas a apoiar startups com viés social, ambiental e tecnológico.
3. Equipes de P&D Corporativo: Departamentos internos de pesquisa que necessitam de metodologias ágeis para apresentação de ideias.
4. Fundos de Investimento de Impacto: Investidores focados em soluções com alto retorno socioeconômico e escalabilidade.
5. Comunidades de Startups: Líderes de ecossistemas regionais buscando ferramentas simples para apoiar seus membros.`,
]

const INDICADORES_SUCESSO_POOL = [
  `1. Taxa de Conclusão de Pitches: Mais de 80% das startups iniciantes completando a geração do pitch completo em menos de 10 minutos.
2. Custo de Aquisição de Clientes (CAC): Redução progressiva do CAC B2B através de parcerias estratégicas com hubs de inovação.
3. Net Promoter Score (NPS): Manutenção do NPS acima de 65 pontos, medindo a satisfação e utilidade percebida pelos empreendedores.
4. Volume de Conexões Geradas: Número mensal de startups conectadas a oportunidades de financiamento e programas de aceleração.
5. Taxa de Retenção e Engajamento (LTV/CAC): Razão LTV/CAC superior a 3.5x com uso contínuo das ferramentas de acompanhamento.`,

  `1. Tempo Médio de Criação da Solução: Redução de 70% no tempo gasto pelos fundadores para estruturar apresentações executivas.
2. Índice de Submissões Aprovadas: Aumento na taxa de aprovação de pitches submetidos a editais e bancas de avaliação.
3. Usuários Ativos Mensais (MAU): Crescimento recorrente de 15% ao mês na quantidade de startups utilizando a plataforma.
4. Taxa de Conversão de Ideias em MVPs: Porcentagem de projetos de ideação que progridem para a fase de protótipo testado.
5. Satisfação dos Avaliadores: Avaliação superior a 4.5/5.0 por parte dos mentores e investidores sobre a clareza dos dados apresentados.`,

  `1. Engajamento Diário dos Fundadores: Frequência de acesso e revisão dos indicadores de desempenho da startup na plataforma.
2. Volume de Pitches Exportados: Quantidade total de documentos baixados para apresentação presencial e reuniões de negócios.
3. Churn Rate Mensal: Manutenção da taxa de cancelamento de assinaturas/acesso abaixo de 3% entre os usuários cadastrados.
4. Retorno Sobre o Investimento (ROI): ROI positivo para as organizações parceiras ao encontrarem soluções adequadas no tempo esperado.
5. Crescimento da Base de Dados de Projetos: Expansão do catálogo de soluções registradas no mapa de inovação da cidade.`,
]

function getRandomItem(pool: string[]) {
  const index = Math.floor(Math.random() * pool.length)
  return pool[index]
}

export default function NetpitchPage() {
  // Navigation active state
  const [activeMenu, setActiveMenu] = useState('Criar solução')

  // Workflow steps: 1 = Inicial, 2 = Perguntas IA, 3 = Pitch Gerado
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [isProcessingIa, setIsProcessingIa] = useState(false)
  const [isGeneratingPitch, setIsGeneratingPitch] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  // Perguntas dinâmicas (rotacionam aleatoriamente a cada atualização da página)
  const [tituloPergunta1] = useState(() => getRandomItem(PERGUNTAS_1_POOL))
  const [tituloPergunta2] = useState(() => getRandomItem(PERGUNTAS_2_POOL))

  // Form Fields State
  const [descricaoInicial, setDescricaoInicial] = useState('')
  const [pergunta1, setPergunta1] = useState('')
  const [pergunta2, setPergunta2] = useState('')

  // Step 3 Pitch Outputs - Preenchidos com contexto aleatório mockado de 5+ linhas que rotaciona a cada refresh
  const [recursosNecessarios, setRecursosNecessarios] = useState(() => getRandomItem(RECURSOS_NECESSARIOS_POOL))
  const [publicoAlvo, setPublicoAlvo] = useState(() => getRandomItem(PUBLICO_ALVO_POOL))
  const [indicadoresSucesso, setIndicadoresSucesso] = useState(() => getRandomItem(INDICADORES_SUCESSO_POOL))

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 4000)
  }

  const handleDesenvolverComIA = () => {
    setIsProcessingIa(true)
    setTimeout(() => {
      setIsProcessingIa(false)
      setStep(2)
      showToast('Análise de IA concluída! Perguntas complementares geradas.')
    }, 1200)
  }

  const handleGerarPitch = () => {
    setIsGeneratingPitch(true)
    setTimeout(() => {
      setIsGeneratingPitch(false)
      setStep(3)
      showToast('Pitch gerado com sucesso com base nas informações fornecidas!')
    }, 1500)
  }

  const handleExportarPitch = () => {
    const pitchData = {
      descricaoProjeto: descricaoInicial,
      pergunta1: { titulo: tituloPergunta1, resposta: pergunta1 },
      pergunta2: { titulo: tituloPergunta2, resposta: pergunta2 },
      recursosNecessarios,
      publicoAlvo,
      indicadoresSucesso,
      dataExportacao: new Date().toLocaleDateString('pt-BR'),
    }

    const blob = new Blob([JSON.stringify(pitchData, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `pitch-netpitch-${Date.now()}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    showToast('🚀 Pitch exportado com sucesso em formato JSON!')
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
        {/* Left: Logos */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Link to="/legacy" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logoCoreto} alt="Coreto" style={{ height: '32px', objectFit: 'contain' }} />
          </Link>
          <div style={{ width: '1px', height: '24px', backgroundColor: '#CBD5E1' }} />
          <img src={logoAbdi} alt="ABDI" style={{ height: '26px', objectFit: 'contain' }} />
          <img src={logoEmprel} alt="Emprel" style={{ height: '22px', objectFit: 'contain' }} />
        </div>

        {/* Right: User Profile */}
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

      {/* ── Main Layout Body: Sidebar + Content ── */}
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
          {/* Top Menu Links */}
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
                    <path d="M19.4 15a16.5 16.5 0 0 0 .33-1.82l-2.05-.72a8.88 8.88 0 0 0-.44-1.07l1.17-1.84a16.56 16.56 0 0 0-1.28-1.29l-1.84 1.17c-.34-.17-.7-.32-1.07-.44l-.72-2.05A16.56 16.56 0 0 0 12 4.6v2.18c-.38.03-.76.1-1.12.21L9.67 4.95a16.63 16.63 0 0 0-1.82.33l-.72 2.05c-.37.12-.73.27-1.07.44L4.22 6.6A16.56 16.56 0 0 0 2.94 7.89l1.17 1.84c-.17.34-.32.7-.44 1.07l-2.05.72A16.5 16.5 0 0 0 1.6 13.34h2.18c.03.38.1.76.21 1.12l-2.04 1.21a16.63 16.63 0 0 0 .33 1.82l2.05.72c.12.37.27.73.44 1.07l-1.17 1.84a16.56 16.56 0 0 0 1.28 1.29l1.84-1.17c.34.17.7.32 1.07.44l.72 2.05c.6.12 1.2.23 1.82.33v-2.18c.38-.03.76-.1 1.12-.21l1.21 2.04c.61-.09 1.22-.2 1.82-.33l.72-2.05c.37-.12.73-.27 1.07-.44l1.84 1.17a16.56 16.56 0 0 0 1.28-1.29l-1.17-1.84c.17-.34.32-.7.44-1.07l2.05-.72z" />
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
                onClick={() => setActiveMenu('Criar solução')}
              />
              <SidebarItem
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
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
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                }
                label="Painel"
                active={activeMenu === 'Painel'}
                onClick={() => setActiveMenu('Painel')}
              />
            </div>
          </div>

          {/* GERAL Section */}
          <div style={{ marginTop: 'auto' }}>
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
                active={activeMenu === 'Sair'}
                onClick={() => setActiveMenu('Sair')}
              />
            </div>
          </div>
        </aside>

        {/* ── Main Work Area ── */}
        <main
          style={{
            flex: 1,
            padding: '32px 40px',
            maxWidth: '1080px',
            margin: '0 auto',
            boxSizing: 'border-box',
          }}
        >
          {/* NETpitch Hero Banner */}
          <div style={{ marginBottom: '32px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
            <img
              src={bannerNetpitch}
              alt="NETpitch Banner"
              style={{
                width: '100%',
                maxHeight: '260px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          {/* Form / Content Panel */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              padding: '36px 40px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
              border: '1px solid #E2E8F0',
            }}
          >
            {/* Title */}
            <h1
              style={{
                fontSize: '28px',
                fontWeight: 700,
                color: '#0F172A',
                marginBottom: '16px',
                marginTop: 0,
              }}
            >
              Conte-nos sobre o teu projeto!
            </h1>

            {/* Description Text & Bullet Points */}
            <p
              style={{
                fontSize: '15px',
                color: '#334155',
                lineHeight: '1.6',
                marginBottom: '16px',
              }}
            >
              Para ajudar a desenvolver tua ideia, precisamos entender bem o seu projeto. Descreva detalhadamente sua startup, incluindo as seguintes informações:
            </p>

            <ul
              style={{
                paddingLeft: '20px',
                margin: '0 0 20px 0',
                color: '#334155',
                fontSize: '14px',
                lineHeight: '1.7',
              }}
            >
              <li>
                <strong>Nome da startup</strong> (se já tiver).
              </li>
              <li>
                <strong>O que sua startup faz?</strong> Explique o produto ou serviço que oferece.
              </li>
              <li>
                <strong>Qual problema ela resolve?</strong> Descreva a dor ou necessidade do mercado que sua solução atende.
              </li>
              <li>
                <strong>Quem é o público-alvo?</strong> Fale sobre quem são seus clientes (ex.: empresas, consumidores finais, setor específico).
              </li>
              <li>
                <strong>Qual o diferencial?</strong> O que torna sua ideia única em relação à concorrência?
              </li>
              <li>
                <strong>Qual o estágio atual do projeto?</strong> Está na fase de ideia, protótipo, MVP, já tem clientes ou está em crescimento?
              </li>
            </ul>

            <p
              style={{
                fontSize: '14px',
                color: '#475569',
                marginBottom: '24px',
                fontStyle: 'normal',
              }}
            >
              Quanto mais detalhes você fornecer, mais precisas serão as sugestões para o desenvolvimento da sua ideia!
            </p>

            {/* Step 1 Input Textarea */}
            <div style={{ marginBottom: '24px' }}>
              <textarea
                value={descricaoInicial}
                onChange={e => setDescricaoInicial(e.target.value)}
                placeholder="Responda assertivamente a questão acima"
                rows={4}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: '6px',
                  border: '1px solid #94A3B8',
                  fontSize: '14px',
                  color: '#1E293B',
                  outline: 'none',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  backgroundColor: '#FFFFFF',
                }}
              />
            </div>

            {/* Step 1 Action Button */}
            {step === 1 && (
              <div style={{ marginBottom: '32px' }}>
                <button
                  type="button"
                  onClick={handleDesenvolverComIA}
                  disabled={isProcessingIa}
                  style={{
                    backgroundColor: '#00a8b5',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '10px 20px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: isProcessingIa ? 'not-allowed' : 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease',
                    opacity: isProcessingIa ? 0.7 : 1,
                  }}
                >
                  <span style={{ fontSize: '16px' }}>🤖</span>
                  {isProcessingIa ? 'Analisando Ideia...' : 'Desenvolver Ideia com IA'}
                </button>
              </div>
            )}

            {/* ── Step 2: IA Generated Questions ── */}
            {step >= 2 && (
              <div style={{ marginTop: '36px', paddingTop: '28px', borderTop: '1px solid #E2E8F0' }}>
                {/* Question 1 */}
                <div style={{ marginBottom: '24px' }}>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#0F172A',
                      marginBottom: '12px',
                    }}
                  >
                    {tituloPergunta1}
                  </h3>
                  <textarea
                    value={pergunta1}
                    onChange={e => setPergunta1(e.target.value)}
                    placeholder="Responda assertivamente a questão acima"
                    rows={3}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '6px',
                      border: '1px solid #1E293B',
                      fontSize: '14px',
                      color: '#1E293B',
                      outline: 'none',
                      boxSizing: 'border-box',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                      backgroundColor: '#FFFFFF',
                    }}
                  />
                </div>

                {/* Question 2 */}
                <div style={{ marginBottom: '24px' }}>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#0F172A',
                      marginBottom: '12px',
                    }}
                  >
                    {tituloPergunta2}
                  </h3>
                  <textarea
                    value={pergunta2}
                    onChange={e => setPergunta2(e.target.value)}
                    placeholder="Responda assertivamente a questão acima"
                    rows={3}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '6px',
                      border: '1px solid #1E293B',
                      fontSize: '14px',
                      color: '#1E293B',
                      outline: 'none',
                      boxSizing: 'border-box',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                      backgroundColor: '#FFFFFF',
                    }}
                  />
                </div>

                {/* Step 2 Action Button */}
                {step === 2 && (
                  <div style={{ marginBottom: '32px' }}>
                    <button
                      type="button"
                      onClick={handleGerarPitch}
                      disabled={isGeneratingPitch}
                      style={{
                        backgroundColor: '#00a8b5',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '10px 20px',
                        fontSize: '14px',
                        fontWeight: 600,
                        cursor: isGeneratingPitch ? 'not-allowed' : 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'all 0.2s ease',
                        opacity: isGeneratingPitch ? 0.7 : 1,
                      }}
                    >
                      <span style={{ fontSize: '16px' }}>🤖</span>
                      {isGeneratingPitch ? 'Gerando Pitch Executivo...' : 'Gerar Pitch'}
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* ── Step 3: Generated Pitch Results ── */}
            {step >= 3 && (
              <div style={{ marginTop: '36px', paddingTop: '28px', borderTop: '1px solid #E2E8F0' }}>
                {/* Section 1: Recursos necessários */}
                <div style={{ marginBottom: '28px' }}>
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#0F172A',
                      marginBottom: '12px',
                    }}
                  >
                    Recursos necessários
                  </h3>
                  <textarea
                    value={recursosNecessarios}
                    onChange={e => setRecursosNecessarios(e.target.value)}
                    placeholder="Responda assertivamente a questão acima"
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '14px',
                      color: '#334155',
                      outline: 'none',
                      boxSizing: 'border-box',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                      backgroundColor: '#FFFFFF',
                      lineHeight: '1.6',
                    }}
                  />
                </div>

                {/* Section 2: Público alvo */}
                <div style={{ marginBottom: '28px' }}>
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#0F172A',
                      marginBottom: '12px',
                    }}
                  >
                    Público alvo
                  </h3>
                  <textarea
                    value={publicoAlvo}
                    onChange={e => setPublicoAlvo(e.target.value)}
                    placeholder="Responda assertivamente a questão acima"
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '14px',
                      color: '#334155',
                      outline: 'none',
                      boxSizing: 'border-box',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                      backgroundColor: '#FFFFFF',
                      lineHeight: '1.6',
                    }}
                  />
                </div>

                {/* Section 3: Indicadores de sucesso */}
                <div style={{ marginBottom: '32px' }}>
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#0F172A',
                      marginBottom: '12px',
                    }}
                  >
                    Indicadores de sucesso
                  </h3>
                  <textarea
                    value={indicadoresSucesso}
                    onChange={e => setIndicadoresSucesso(e.target.value)}
                    placeholder="Responda assertivamente a questão acima"
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '14px',
                      color: '#334155',
                      outline: 'none',
                      boxSizing: 'border-box',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                      backgroundColor: '#FFFFFF',
                      lineHeight: '1.6',
                    }}
                  />
                </div>

                {/* Export Action Button */}
                <div>
                  <button
                    type="button"
                    onClick={handleExportarPitch}
                    style={{
                      backgroundColor: '#00a8b5',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '12px 24px',
                      fontSize: '14px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 4px 12px rgba(0, 168, 181, 0.2)',
                    }}
                  >
                    Exportar Pitch Personalizado 🚀
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

// ── Sidebar Sub-item ──
interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  active?: boolean
  onClick?: () => void
}

function SidebarItem({ icon, label, active, onClick }: SidebarItemProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '10px 12px',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: active ? 600 : 500,
        color: active ? '#00a8b5' : '#0F172A',
        backgroundColor: active ? 'rgba(0, 168, 181, 0.08)' : 'transparent',
        cursor: 'pointer',
        transition: 'all 0.15s ease',
      }}
      onMouseEnter={e => {
        if (!active) {
          e.currentTarget.style.backgroundColor = '#F1F5F9'
        }
      }}
      onMouseLeave={e => {
        if (!active) {
          e.currentTarget.style.backgroundColor = 'transparent'
        }
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', color: active ? '#00a8b5' : '#0F172A' }}>
        {icon}
      </div>
      <span>{label}</span>
    </div>
  )
}

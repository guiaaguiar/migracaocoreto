import { useState, useRef } from 'react'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import bannerParcerias from '../../../assets/banner-parcerias-inovadoras.png'

export default function ParceriasInovadorasPage() {
  // Fluxo de navegação completo das etapas:
  // 0: Apresentação Inicial
  // 1: Informações Gerais do Projeto
  // 2: Informações Gerais sobre a IES (Apenas se iniciativaAcademica === 'Sim')
  // 3: Descrição do Projeto
  // 4: Conexão com a Prefeitura
  // 5: Mapeamento de necessidades
  // 6: Contatos do Projeto
  // 7: Privacidade e segurança
  // 8: Finalização / Agradecimento
  const [currentStep, setCurrentStep] = useState(0)

  // ── Etapa 1: Informações Gerais do Projeto ──
  const [nomeProjeto, setNomeProjeto] = useState('')
  const [iniciativaAcademica, setIniciativaAcademica] = useState('') // 'Sim' | 'Nao'
  const [solucaoBO, setSolucaoBO] = useState('') // 'Sim' | 'Nao'
  const [boResolvido, setBoResolvido] = useState('')

  // ── Etapa 2: IES (Condicional) ──
  const [iesNome, setIesNome] = useState('')
  const [iesDepartamento, setIesDepartamento] = useState('')
  const [iesEnquadramento, setIesEnquadramento] = useState('')
  const [iesOutro, setIesOutro] = useState('')

  // ── Etapa 3: Descrição do Projeto ──
  const [resumoProjeto, setResumoProjeto] = useState('')
  const [areasImpacto, setAreasImpacto] = useState('')
  const [responsaveisProjeto, setResponsaveisProjeto] = useState('')
  const [documentoArquivo, setDocumentoArquivo] = useState<File | null>(null)

  // ── Etapa 4: Conexão com a Prefeitura ──
  const [secretariaDesejada, setSecretariaDesejada] = useState('')

  // ── Etapa 5: Mapeamento de necessidades ──
  const [suporteFinanceiro, setSuporteFinanceiro] = useState('') // 'Sim' | 'Nao'
  const [recursosAdicionais, setRecursosAdicionais] = useState('')

  // ── Etapa 6: Contatos do Projeto ──
  const [telefoneRepresentante, setTelefoneRepresentante] = useState('')
  const [emailRepresentante, setEmailRepresentante] = useState('')

  // ── Etapa 7: Privacidade e segurança ──
  const [concordaLGPD, setConcordaLGPD] = useState('') // 'Concordo' | 'Não concordo'

  // ── Estado de Hover nos Botões de Ação ──
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  // Ref para upload de arquivo
  const fileInputRef = useRef<HTMLInputElement>(null)

  // ── Validações de cada etapa ──
  const isStep1Valid =
    nomeProjeto.trim().length > 0 && iniciativaAcademica !== '' && solucaoBO !== ''

  const isStep2Valid =
    iesNome.trim().length > 0 &&
    iesDepartamento.trim().length > 0 &&
    iesEnquadramento !== '' &&
    (iesEnquadramento !== 'Outro:' || iesOutro.trim().length > 0)

  const isStep3Valid =
    resumoProjeto.trim().length > 0 &&
    areasImpacto.trim().length > 0 &&
    responsaveisProjeto.trim().length > 0

  const isStep4Valid = secretariaDesejada.trim().length > 0

  const isStep5Valid = suporteFinanceiro !== '' || recursosAdicionais.trim().length > 0

  const isStep6Valid =
    telefoneRepresentante.trim().length > 0 && emailRepresentante.trim().length > 0

  const isStep7Valid = concordaLGPD === 'Concordo'

  // ── Scroll suave até o topo do formulário ao mudar de etapa ──
  const scrollToFormTop = () => {
    setTimeout(() => {
      const formEl = document.getElementById('container-formulario')
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  // ── Avanço e Recuo no Fluxo ──
  const handleStartFlow = () => {
    setCurrentStep(1)
    scrollToFormTop()
  }

  const handleNextStep1 = () => {
    if (!isStep1Valid) return
    if (iniciativaAcademica === 'Sim') {
      setCurrentStep(2)
    } else {
      setCurrentStep(3)
    }
    scrollToFormTop()
  }

  const handleNextStep2 = () => {
    if (!isStep2Valid) return
    setCurrentStep(3)
    scrollToFormTop()
  }

  const handleNextStep3 = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isStep3Valid) return
    setCurrentStep(4)
    scrollToFormTop()
  }

  const handleNextStep4 = () => {
    if (!isStep4Valid) return
    setCurrentStep(5)
    scrollToFormTop()
  }

  const handleNextStep5 = () => {
    if (!isStep5Valid) return
    setCurrentStep(6)
    scrollToFormTop()
  }

  const handleNextStep6 = () => {
    if (!isStep6Valid) return
    setCurrentStep(7)
    scrollToFormTop()
  }

  const handleNextStep7 = () => {
    if (!isStep7Valid) return
    setCurrentStep(8)
    scrollToFormTop()
  }

  const handlePrevStep = () => {
    if (currentStep === 2) {
      setCurrentStep(1)
    } else if (currentStep === 3) {
      if (iniciativaAcademica === 'Sim') {
        setCurrentStep(2)
      } else {
        setCurrentStep(1)
      }
    } else if (currentStep > 3) {
      setCurrentStep(prev => prev - 1)
    }
    scrollToFormTop()
  }

  const handleReset = () => {
    setCurrentStep(0)
    setNomeProjeto('')
    setIniciativaAcademica('')
    setSolucaoBO('')
    setBoResolvido('')
    setIesNome('')
    setIesDepartamento('')
    setIesEnquadramento('')
    setIesOutro('')
    setResumoProjeto('')
    setAreasImpacto('')
    setResponsaveisProjeto('')
    setDocumentoArquivo(null)
    setSecretariaDesejada('')
    setSuporteFinanceiro('')
    setRecursosAdicionais('')
    setTelefoneRepresentante('')
    setEmailRepresentante('')
    setConcordaLGPD('')
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDocumentoArquivo(e.target.files[0])
    }
  }

  const handleFormatText = (tag: string) => {
    if (tag === 'b') setResumoProjeto(prev => prev + ' **texto em negrito** ')
    if (tag === 'i') setResumoProjeto(prev => prev + ' *texto em itálico* ')
    if (tag === 'link') setResumoProjeto(prev => prev + ' [link](url) ')
    if (tag === 'h1') setResumoProjeto(prev => prev + '\n# Título 1\n')
    if (tag === 'h2') setResumoProjeto(prev => prev + '\n## Título 2\n')
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#EEF2F5',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        color: '#1A202C',
      }}
    >
      <Header />

      {/* ── Main Layout Body ── */}
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar activeItem="parcerias" />

        {/* ── Main Content Area ── */}
        <main style={{ flex: 1, padding: '24px 36px 64px', maxWidth: '1000px', margin: '0 auto' }}>
          {/* ── Top Banner Image ── */}
          <div
            style={{
              width: '100%',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
              marginBottom: '24px',
              backgroundColor: '#003B6D',
            }}
          >
            <img
              src={bannerParcerias}
              alt="Escritório de Parcerias Inovadoras"
              style={{
                width: '100%',
                maxHeight: '260px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          {/* Page Title */}
          <h1
            style={{
              fontSize: '24px',
              fontWeight: 800,
              color: '#0F172A',
              marginBottom: '20px',
              letterSpacing: '-0.01em',
            }}
          >
            Inscrição para o Escritório de Parcerias Inovadoras
          </h1>

          {/* ── ETAPA 0: Card de Apresentação Inicial ── */}
          {currentStep === 0 && (
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '14px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
                padding: '28px 32px',
                marginBottom: '28px',
              }}
            >
              {/* Highlight Orange Badge */}
              <div
                style={{
                  backgroundColor: '#F98600',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '15px',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  display: 'inline-block',
                  marginBottom: '20px',
                  boxShadow: '0 2px 6px rgba(249, 134, 0, 0.25)',
                }}
              >
                Tem interesse em se conectar com a Prefeitura do Recife!? Então chegue mais e venha ser parceiro da gente!
              </div>

              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.65,
                  color: '#334155',
                  marginBottom: '16px',
                  fontWeight: 500,
                }}
              >
                No Escritório de Parcerias Inovadoras conectamos sua ideia com os órgãos da Prefeitura do Recife - é sua oportunidade de rodar um projeto com o setor público, potencializando sua visibilidade e seu impacto.
              </p>

              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.65,
                  color: '#334155',
                  marginBottom: '24px',
                  fontWeight: 500,
                }}
              >
                Nós do Escritório estamos buscando constantemente as soluções mais inovadoras para construir uma cidade melhor para nossa gente.
              </p>

              <p
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#1E293B',
                  marginBottom: '14px',
                }}
              >
                E só para você entender como vai funcionar essa parceria:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                <div style={{ fontSize: '15px', color: '#1E293B' }}>
                  <strong>1. Você faz a inscrição do seu projeto;</strong>
                </div>

                <div style={{ fontSize: '15px', color: '#1E293B' }}>
                  <strong>2. Escritório faz análise de mérito;</strong>
                  <div style={{ fontSize: '14px', color: '#64748B', marginLeft: '20px', marginTop: '4px' }}>
                    Caso aprovado
                  </div>
                </div>

                <div style={{ fontSize: '15px', color: '#1E293B' }}>
                  <strong>3. Você recebe o selo de apoio da Prefeitura, e te conectamos com órgão solicitado pelo projeto.</strong>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                <button
                  onClick={handleStartFlow}
                  style={{
                    backgroundColor: '#00a8b5',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '15px',
                    padding: '12px 40px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0, 168, 181, 0.3)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#008b96'
                    e.currentTarget.style.transform = 'translateY(-1px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = '#00a8b5'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  Começar
                </button>
              </div>
            </div>
          )}

          {/* ── ETAPA 1: Informações Gerais do Projeto ── */}
          {currentStep === 1 && (
            <div
              id="container-formulario"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '14px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
                padding: '32px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#F98600',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '14px',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  display: 'inline-block',
                  marginBottom: '14px',
                }}
              >
                Informações Gerais do Projeto
              </div>

              <h2
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#0F172A',
                  marginBottom: '28px',
                }}
              >
                Para começar, queremos só coletar alguns dados básicos do teu projeto – coisa rápida
              </h2>

              <div style={{ marginBottom: '28px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#1E293B',
                    marginBottom: '10px',
                  }}
                >
                  Qual o nome do projeto? <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <input
                  type="text"
                  value={nomeProjeto}
                  onChange={e => setNomeProjeto(e.target.value)}
                  placeholder=""
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '15px',
                    color: '#1E293B',
                    backgroundColor: '#ffffff',
                    border: '1.5px solid #CBD5E1',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                    boxSizing: 'border-box',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#00a8b5')}
                  onBlur={e => (e.target.style.borderColor = '#CBD5E1')}
                />
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#1E293B',
                    marginBottom: '12px',
                  }}
                >
                  Seu projeto surgiu dentro de alguma inciativa acadêmica? <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '15px',
                      color: '#334155',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      type="radio"
                      name="iniciativaAcademica"
                      value="Sim"
                      checked={iniciativaAcademica === 'Sim'}
                      onChange={e => setIniciativaAcademica(e.target.value)}
                      style={{ width: '18px', height: '18px', accentColor: '#00a8b5', cursor: 'pointer' }}
                    />
                    <span>Sim</span>
                  </label>

                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '15px',
                      color: '#334155',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      type="radio"
                      name="iniciativaAcademica"
                      value="Nao"
                      checked={iniciativaAcademica === 'Nao'}
                      onChange={e => setIniciativaAcademica(e.target.value)}
                      style={{ width: '18px', height: '18px', accentColor: '#00a8b5', cursor: 'pointer' }}
                    />
                    <span>Nao</span>
                  </label>
                </div>
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#1E293B',
                    marginBottom: '12px',
                  }}
                >
                  A sua solução está alinhada com algum B.O da Prefeitura do Recife? <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '8px' }}>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '15px',
                      color: '#334155',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      type="radio"
                      name="solucaoBO"
                      value="Sim"
                      checked={solucaoBO === 'Sim'}
                      onChange={e => setSolucaoBO(e.target.value)}
                      style={{ width: '18px', height: '18px', accentColor: '#00a8b5', cursor: 'pointer' }}
                    />
                    <span>Sim</span>
                  </label>

                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '15px',
                      color: '#334155',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      type="radio"
                      name="solucaoBO"
                      value="Nao"
                      checked={solucaoBO === 'Nao'}
                      onChange={e => setSolucaoBO(e.target.value)}
                      style={{ width: '18px', height: '18px', accentColor: '#00a8b5', cursor: 'pointer' }}
                    />
                    <span>Nao</span>
                  </label>
                </div>

                <div style={{ fontSize: '13px', color: '#64748B', marginTop: '6px' }}>
                  Caso ainda não saiba o que é um BO da Prefeitura, acesse{' '}
                  <a
                    href="https://inovacaoaberta.recife.pe.gov.br/lista-de-bos/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#00a8b5', textDecoration: 'none', fontWeight: 500 }}
                  >
                    inovacaoaberta.recife.pe.gov.br/lista-de-bos/
                  </a>
                </div>
              </div>

              <div style={{ marginBottom: '36px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#1E293B',
                    marginBottom: '10px',
                  }}
                >
                  Se sim, qual o BO que está sendo resolvido por sua solução?
                </label>
                <input
                  type="text"
                  value={boResolvido}
                  onChange={e => setBoResolvido(e.target.value)}
                  placeholder=""
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '15px',
                    color: '#1E293B',
                    backgroundColor: '#ffffff',
                    border: '1.5px solid #CBD5E1',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'all 0.2s ease',
                    boxSizing: 'border-box',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#00a8b5')}
                  onBlur={e => (e.target.style.borderColor = '#CBD5E1')}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                <button
                  onClick={handleNextStep1}
                  onMouseEnter={() => setIsButtonHovered(true)}
                  onMouseLeave={() => setIsButtonHovered(false)}
                  style={{
                    backgroundColor: isStep1Valid
                      ? isButtonHovered
                        ? '#008b96'
                        : '#00a8b5'
                      : isButtonHovered
                      ? '#FF2A00'
                      : '#00a8b5',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '14px',
                    padding: '12px 36px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: isStep1Valid ? 'pointer' : 'default',
                    boxShadow: isStep1Valid
                      ? '0 4px 12px rgba(0, 168, 181, 0.3)'
                      : isButtonHovered
                      ? '0 4px 14px rgba(255, 42, 0, 0.4)'
                      : '0 2px 6px rgba(0, 168, 181, 0.2)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {isStep1Valid ? 'Próximo' : 'Responda todos os campos obrigatórios'}
                </button>
              </div>
            </div>
          )}

          {/* ── ETAPA 2: Informações Gerais sobre a Insituições de Ensino Superior (Apenas se Sim) ── */}
          {currentStep === 2 && (
            <div
              id="container-formulario"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '14px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
                padding: '32px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#F98600',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '14px',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  display: 'inline-block',
                  marginBottom: '14px',
                }}
              >
                Informações Gerais sobre a Insituições de Ensino Superior
              </div>

              <h2
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#0F172A',
                  marginBottom: '28px',
                }}
              >
                Já que sua iniciativa surgiu dentro do ambiente acadêmico, queremos entender mais sobre esse contexto!
              </h2>

              <div style={{ marginBottom: '28px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#1E293B',
                    marginBottom: '10px',
                  }}
                >
                  De qual Instituição de Ensino Superior (IES) seu projeto faz parte? <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <input
                  type="text"
                  value={iesNome}
                  onChange={e => setIesNome(e.target.value)}
                  placeholder=""
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '15px',
                    color: '#1E293B',
                    backgroundColor: '#ffffff',
                    border: '1.5px solid #CBD5E1',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                    boxSizing: 'border-box',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#00a8b5')}
                  onBlur={e => (e.target.style.borderColor = '#CBD5E1')}
                />
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#1E293B',
                    marginBottom: '10px',
                  }}
                >
                  O projeto está ligado à qual departamento da IES? <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <input
                  type="text"
                  value={iesDepartamento}
                  onChange={e => setIesDepartamento(e.target.value)}
                  placeholder=""
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '15px',
                    color: '#1E293B',
                    backgroundColor: '#ffffff',
                    border: '1.5px solid #CBD5E1',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                    boxSizing: 'border-box',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#00a8b5')}
                  onBlur={e => (e.target.style.borderColor = '#CBD5E1')}
                />
              </div>

              <div style={{ marginBottom: '36px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#1E293B',
                    marginBottom: '14px',
                  }}
                >
                  O projeto se enquadra como: <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Iniciação Científica',
                    'Empresa Júnior',
                    'Liga Acadêmica',
                    'Laboratório de Pesquisa',
                    'Startup',
                    'Grupo de Estudo',
                    'Grupo de Pesquisa',
                    'Trabalho de Conclusão Curso (Graduação)',
                    'Projeto de Pós-Graduação',
                    'Outro:',
                  ].map(opcao => (
                    <div key={opcao} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <label
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontSize: '15px',
                          color: '#334155',
                          cursor: 'pointer',
                        }}
                      >
                        <input
                          type="radio"
                          name="iesEnquadramento"
                          value={opcao}
                          checked={iesEnquadramento === opcao}
                          onChange={e => setIesEnquadramento(e.target.value)}
                          style={{ width: '18px', height: '18px', accentColor: '#00a8b5', cursor: 'pointer' }}
                        />
                        <span>{opcao}</span>
                      </label>
                      {opcao === 'Outro:' && iesEnquadramento === 'Outro:' && (
                        <input
                          type="text"
                          value={iesOutro}
                          onChange={e => setIesOutro(e.target.value)}
                          placeholder="Especifique..."
                          style={{
                            padding: '6px 12px',
                            fontSize: '14px',
                            border: '1px solid #CBD5E1',
                            borderRadius: '6px',
                            outline: 'none',
                            width: '240px',
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '24px' }}>
                <button
                  type="button"
                  onClick={handlePrevStep}
                  style={{
                    backgroundColor: '#00a8b5',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '14px',
                    padding: '12px 32px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#008b96')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#00a8b5')}
                >
                  Voltar
                </button>

                <button
                  type="button"
                  onClick={handleNextStep2}
                  onMouseEnter={() => setIsButtonHovered(true)}
                  onMouseLeave={() => setIsButtonHovered(false)}
                  style={{
                    backgroundColor: isStep2Valid
                      ? isButtonHovered
                        ? '#008b96'
                        : '#00a8b5'
                      : isButtonHovered
                      ? '#FF2A00'
                      : '#00a8b5',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '14px',
                    padding: '12px 36px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: isStep2Valid ? 'pointer' : 'default',
                    boxShadow: isStep2Valid
                      ? '0 4px 12px rgba(0, 168, 181, 0.3)'
                      : isButtonHovered
                      ? '0 4px 14px rgba(255, 42, 0, 0.4)'
                      : '0 2px 6px rgba(0, 168, 181, 0.2)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {isStep2Valid ? 'Próximo' : 'Responda todos os campos obrigatórios'}
                </button>
              </div>
            </div>
          )}

          {/* ── ETAPA 3: Descrição do Projeto ── */}
          {currentStep === 3 && (
            <div
              id="container-formulario"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '14px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
                padding: '32px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#F98600',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '14px',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  display: 'inline-block',
                  marginBottom: '14px',
                }}
              >
                Descrição do Projeto
              </div>

              <h2
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#0F172A',
                  marginBottom: '28px',
                }}
              >
                Agora nós queremos entender mais do que se trata o projeto, então capricha na explicação!
              </h2>

              <form onSubmit={handleNextStep3}>
                <div style={{ marginBottom: '28px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: 700,
                      color: '#1E293B',
                      marginBottom: '4px',
                    }}
                  >
                    Resumo do Projeto: <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <div style={{ fontSize: '13px', color: '#64748B', marginBottom: '2px' }}>
                    Descreva brevemente os objetivos, atividades e impacto esperado do projeto.
                  </div>
                  <div style={{ fontSize: '13px', color: '#64748B', fontWeight: 600, marginBottom: '10px' }}>
                    (Limite de 5000 caracteres)
                  </div>

                  <div
                    style={{
                      border: '1.5px solid #00a8b5',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      backgroundColor: '#ffffff',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '8px 14px',
                        backgroundColor: '#F8FAFC',
                        borderBottom: '1px solid #E2E8F0',
                        fontSize: '14px',
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => handleFormatText('b')}
                        style={{ background: 'none', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
                        title="Negrito"
                      >
                        B
                      </button>
                      <button
                        type="button"
                        onClick={() => handleFormatText('i')}
                        style={{ background: 'none', border: 'none', fontStyle: 'italic', cursor: 'pointer' }}
                        title="Itálico"
                      >
                        I
                      </button>
                      <button
                        type="button"
                        onClick={() => handleFormatText('link')}
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        title="Inserir Link"
                      >
                        🔗
                      </button>
                      <span style={{ color: '#CBD5E1' }}>|</span>
                      <button
                        type="button"
                        onClick={() => handleFormatText('h1')}
                        style={{ background: 'none', border: 'none', fontWeight: 700, cursor: 'pointer' }}
                      >
                        H₁
                      </button>
                      <button
                        type="button"
                        onClick={() => handleFormatText('h2')}
                        style={{ background: 'none', border: 'none', fontWeight: 700, cursor: 'pointer' }}
                      >
                        H₂
                      </button>
                    </div>

                    <textarea
                      rows={6}
                      maxLength={5000}
                      value={resumoProjeto}
                      onChange={e => setResumoProjeto(e.target.value)}
                      placeholder=""
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        fontSize: '15px',
                        color: '#1E293B',
                        border: 'none',
                        outline: 'none',
                        resize: 'vertical',
                        boxSizing: 'border-box',
                        fontFamily: 'inherit',
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: 700,
                      color: '#1E293B',
                      marginBottom: '4px',
                    }}
                  >
                    Áreas de Impacto: <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <div style={{ fontSize: '13px', color: '#64748B', marginBottom: '10px' }}>
                    Marque as áreas que o projeto impacta (marque todas que se aplicam)
                  </div>
                  <input
                    type="text"
                    value={areasImpacto}
                    onChange={e => setAreasImpacto(e.target.value)}
                    placeholder="Ex.: Saúde, Educação, Tecnologia, Cidades Inteligentes..."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '15px',
                      color: '#1E293B',
                      backgroundColor: '#ffffff',
                      border: '1.5px solid #CBD5E1',
                      borderRadius: '8px',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                    onFocus={e => (e.target.style.borderColor = '#00a8b5')}
                    onBlur={e => (e.target.style.borderColor = '#CBD5E1')}
                  />
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: 700,
                      color: '#1E293B',
                      marginBottom: '4px',
                    }}
                  >
                    Reponsáveis pelo projeto: <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <div style={{ fontSize: '13px', color: '#64748B', marginBottom: '10px' }}>
                    Liste os responsáveis pelo projeto, incluindo o título na IES (ex.: João Silva - Coordenador do Projeto - Professor Titular na UFRPE).
                  </div>
                  <input
                    type="text"
                    value={responsaveisProjeto}
                    onChange={e => setResponsaveisProjeto(e.target.value)}
                    placeholder=""
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '15px',
                      color: '#1E293B',
                      backgroundColor: '#ffffff',
                      border: '1.5px solid #CBD5E1',
                      borderRadius: '8px',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                    onFocus={e => (e.target.style.borderColor = '#00a8b5')}
                    onBlur={e => (e.target.style.borderColor = '#CBD5E1')}
                  />
                </div>

                <div style={{ marginBottom: '36px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: 700,
                      color: '#1E293B',
                      marginBottom: '4px',
                    }}
                  >
                    Documento de apresentação
                  </label>
                  <div style={{ fontSize: '13px', color: '#64748B', marginBottom: '12px' }}>
                    Link para envio da apresentação institucional do projeto (modelo PDF):
                  </div>

                  <div
                    onClick={() => fileInputRef.current?.click()}
                    style={{
                      border: '2px dashed #00a8b5',
                      borderRadius: '10px',
                      padding: '32px 20px',
                      textAlign: 'center',
                      backgroundColor: '#F8FAFC',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#F0FDFA')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#F8FAFC')}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      accept=".pdf,.doc,.docx,.ppt,.pptx"
                      style={{ display: 'none' }}
                    />
                    <div style={{ fontSize: '13px', color: '#64748B', marginBottom: '12px' }}>
                      Faça upload de 1 arquivo aceito. O tamanho máximo é de 10 MB.
                    </div>
                    {documentoArquivo ? (
                      <div style={{ color: '#00a8b5', fontWeight: 600, fontSize: '14px' }}>
                        📄 {documentoArquivo.name} ({(documentoArquivo.size / 1024 / 1024).toFixed(2)} MB)
                      </div>
                    ) : (
                      <span
                        style={{
                          color: '#94A3B8',
                          fontSize: '14px',
                          fontWeight: 500,
                        }}
                      >
                        Adicionar Arquivo
                      </span>
                    )}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '24px' }}>
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    style={{
                      backgroundColor: '#00a8b5',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '14px',
                      padding: '12px 32px',
                      borderRadius: '6px',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#008b96')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#00a8b5')}
                  >
                    Voltar
                  </button>

                  <button
                    type="submit"
                    onMouseEnter={() => setIsButtonHovered(true)}
                    onMouseLeave={() => setIsButtonHovered(false)}
                    style={{
                      backgroundColor: isStep3Valid
                        ? isButtonHovered
                          ? '#008b96'
                          : '#00a8b5'
                        : isButtonHovered
                        ? '#FF2A00'
                        : '#00a8b5',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '14px',
                      padding: '12px 36px',
                      borderRadius: '6px',
                      border: 'none',
                      cursor: isStep3Valid ? 'pointer' : 'default',
                      boxShadow: isStep3Valid
                        ? '0 4px 12px rgba(0, 168, 181, 0.3)'
                        : isButtonHovered
                        ? '0 4px 14px rgba(255, 42, 0, 0.4)'
                        : '0 2px 6px rgba(0, 168, 181, 0.2)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {isStep3Valid ? 'Próximo' : 'Responda todos os campos obrigatórios'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* ── ETAPA 4: Conexão com a Prefeitura ── */}
          {currentStep === 4 && (
            <div
              id="container-formulario"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '14px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
                padding: '32px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#F98600',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '14px',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  display: 'inline-block',
                  marginBottom: '14px',
                }}
              >
                Conexão com a Prefeitura
              </div>

              <h2
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#0F172A',
                  marginBottom: '28px',
                }}
              >
                Massa demais! Nessa parte queremos entender como você vê essa conexão com a Prefeitura – explique porque seu projeto quer estar junto com a gente!
              </h2>

              <div style={{ marginBottom: '36px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#1E293B',
                    marginBottom: '4px',
                  }}
                >
                  Secretaria ou Órgão Desejado para Parceria: <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <div style={{ fontSize: '13px', color: '#64748B', marginBottom: '12px' }}>
                  Especifique qual secretaria ou órgão da Prefeitura do Recife você deseja que seu projeto se conecte e explique como ele poderia integrar ou apoiar uma política pública específica.
                </div>
                <input
                  type="text"
                  value={secretariaDesejada}
                  onChange={e => setSecretariaDesejada(e.target.value)}
                  placeholder=""
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '15px',
                    color: '#1E293B',
                    backgroundColor: '#ffffff',
                    border: '1.5px solid #CBD5E1',
                    borderRadius: '8px',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#00a8b5')}
                  onBlur={e => (e.target.style.borderColor = '#CBD5E1')}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '24px' }}>
                <button
                  type="button"
                  onClick={handlePrevStep}
                  style={{
                    backgroundColor: '#00a8b5',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '14px',
                    padding: '12px 32px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#008b96')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#00a8b5')}
                >
                  Voltar
                </button>

                <button
                  type="button"
                  onClick={handleNextStep4}
                  onMouseEnter={() => setIsButtonHovered(true)}
                  onMouseLeave={() => setIsButtonHovered(false)}
                  style={{
                    backgroundColor: isStep4Valid
                      ? isButtonHovered
                        ? '#008b96'
                        : '#00a8b5'
                      : isButtonHovered
                      ? '#FF2A00'
                      : '#00a8b5',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '14px',
                    padding: '12px 36px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: isStep4Valid ? 'pointer' : 'default',
                    boxShadow: isStep4Valid
                      ? '0 4px 12px rgba(0, 168, 181, 0.3)'
                      : isButtonHovered
                      ? '0 4px 14px rgba(255, 42, 0, 0.4)'
                      : '0 2px 6px rgba(0, 168, 181, 0.2)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {isStep4Valid ? 'Próximo' : 'Responda todos os campos obrigatórios'}
                </button>
              </div>
            </div>
          )}

          {/* ── ETAPA 5: Mapeamento de necessidades ── */}
          {currentStep === 5 && (
            <div
              id="container-formulario"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '14px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
                padding: '32px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#F98600',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '14px',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  display: 'inline-block',
                  marginBottom: '14px',
                }}
              >
                Mapeamento de necessidades
              </div>

              <h2
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#0F172A',
                  marginBottom: '28px',
                }}
              >
                Para pensarmos em futuros projetos junto à academia, queremos entender suas necessidades – coisa rápida também – já estamos finalizando o formulário!
              </h2>

              <div style={{ marginBottom: '28px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#1E293B',
                    marginBottom: '12px',
                  }}
                >
                  O projeto possui suporte financeiro adequado?
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '15px',
                      color: '#334155',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      type="radio"
                      name="suporteFinanceiro"
                      value="Sim"
                      checked={suporteFinanceiro === 'Sim'}
                      onChange={e => setSuporteFinanceiro(e.target.value)}
                      style={{ width: '18px', height: '18px', accentColor: '#00a8b5', cursor: 'pointer' }}
                    />
                    <span>Sim</span>
                  </label>

                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '15px',
                      color: '#334155',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      type="radio"
                      name="suporteFinanceiro"
                      value="Nao"
                      checked={suporteFinanceiro === 'Nao'}
                      onChange={e => setSuporteFinanceiro(e.target.value)}
                      style={{ width: '18px', height: '18px', accentColor: '#00a8b5', cursor: 'pointer' }}
                    />
                    <span>Nao</span>
                  </label>
                </div>
              </div>

              <div style={{ marginBottom: '36px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#1E293B',
                    marginBottom: '4px',
                  }}
                >
                  Descreva quais recursos adicionais seriam mais importantes para o projeto:
                </label>
                <div style={{ fontSize: '13px', color: '#64748B', marginBottom: '10px' }}>
                  Selecione até 3 opções
                </div>
                <input
                  type="text"
                  value={recursosAdicionais}
                  onChange={e => setRecursosAdicionais(e.target.value)}
                  placeholder="Ex.: Mentoria, Infraestrutura, Recursos Financeiros, Testes..."
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '15px',
                    color: '#1E293B',
                    backgroundColor: '#ffffff',
                    border: '1.5px solid #CBD5E1',
                    borderRadius: '8px',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#00a8b5')}
                  onBlur={e => (e.target.style.borderColor = '#CBD5E1')}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '24px' }}>
                <button
                  type="button"
                  onClick={handlePrevStep}
                  style={{
                    backgroundColor: '#00a8b5',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '14px',
                    padding: '12px 32px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#008b96')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#00a8b5')}
                >
                  Voltar
                </button>

                <button
                  type="button"
                  onClick={handleNextStep5}
                  style={{
                    backgroundColor: '#00a8b5',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '14px',
                    padding: '12px 36px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0, 168, 181, 0.3)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#008b96')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#00a8b5')}
                >
                  Próximo
                </button>
              </div>
            </div>
          )}

          {/* ── ETAPA 6: Contatos do Projeto ── */}
          {currentStep === 6 && (
            <div
              id="container-formulario"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '14px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
                padding: '32px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#F98600',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '14px',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  display: 'inline-block',
                  marginBottom: '14px',
                }}
              >
                Contatos do Projeto
              </div>

              <h2
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#0F172A',
                  marginBottom: '28px',
                }}
              >
                Para finalizar, se o seu projeto passar na nossa análise de mérito, iremos te conectar com o órgão solicitado – só que antes precisamos dos contatos do projeto.
              </h2>

              <div style={{ marginBottom: '28px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#1E293B',
                    marginBottom: '10px',
                  }}
                >
                  Número de telefone do representante do projeto: <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <input
                  type="text"
                  value={telefoneRepresentante}
                  onChange={e => setTelefoneRepresentante(e.target.value)}
                  placeholder="(81) 99999-9999"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '15px',
                    color: '#1E293B',
                    backgroundColor: '#ffffff',
                    border: '1.5px solid #CBD5E1',
                    borderRadius: '8px',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#00a8b5')}
                  onBlur={e => (e.target.style.borderColor = '#CBD5E1')}
                />
              </div>

              <div style={{ marginBottom: '36px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#1E293B',
                    marginBottom: '10px',
                  }}
                >
                  Email do projeto (ou do representante do projeto): <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <input
                  type="email"
                  value={emailRepresentante}
                  onChange={e => setEmailRepresentante(e.target.value)}
                  placeholder="contato@projeto.com.br"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '15px',
                    color: '#1E293B',
                    backgroundColor: '#ffffff',
                    border: '1.5px solid #CBD5E1',
                    borderRadius: '8px',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#00a8b5')}
                  onBlur={e => (e.target.style.borderColor = '#CBD5E1')}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '24px' }}>
                <button
                  type="button"
                  onClick={handlePrevStep}
                  style={{
                    backgroundColor: '#00a8b5',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '14px',
                    padding: '12px 32px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#008b96')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#00a8b5')}
                >
                  Voltar
                </button>

                <button
                  type="button"
                  onClick={handleNextStep6}
                  onMouseEnter={() => setIsButtonHovered(true)}
                  onMouseLeave={() => setIsButtonHovered(false)}
                  style={{
                    backgroundColor: isStep6Valid
                      ? isButtonHovered
                        ? '#008b96'
                        : '#00a8b5'
                      : isButtonHovered
                      ? '#FF2A00'
                      : '#FF2A00',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '14px',
                    padding: '12px 36px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: isStep6Valid ? 'pointer' : 'default',
                    boxShadow: isStep6Valid
                      ? '0 4px 12px rgba(0, 168, 181, 0.3)'
                      : '0 4px 14px rgba(255, 42, 0, 0.4)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {isStep6Valid ? 'Próximo' : 'Responda todos os campos obrigatórios'}
                </button>
              </div>
            </div>
          )}

          {/* ── ETAPA 7: Privacidade e segurança ── */}
          {currentStep === 7 && (
            <div
              id="container-formulario"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '14px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
                padding: '32px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#F98600',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '14px',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  display: 'inline-block',
                  marginBottom: '14px',
                }}
              >
                Privacidade e segurança
              </div>

              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: '#334155',
                  fontStyle: 'italic',
                  marginBottom: '24px',
                }}
              >
                Ao fornecer informações neste formulário, você autoriza o Escritório de Parcerias Inovadoras compartilhar seus dados com órgãos da Prefeitura do Recife, e incluí-los em uma plataforma de projetos acadêmicos que são apoiados pela Prefeitura. Todos os dados serão utilizados exclusivamente para esses fins, respeitando a Lei Geral de Proteção de Dados (LGPD). <span style={{ color: '#EF4444' }}>*</span>
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '15px',
                    color: '#334155',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="radio"
                    name="concordaLGPD"
                    value="Concordo"
                    checked={concordaLGPD === 'Concordo'}
                    onChange={e => setConcordaLGPD(e.target.value)}
                    style={{ width: '18px', height: '18px', accentColor: '#00a8b5', cursor: 'pointer' }}
                  />
                  <span>Concordo</span>
                </label>

                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '15px',
                    color: '#334155',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="radio"
                    name="concordaLGPD"
                    value="Não concordo"
                    checked={concordaLGPD === 'Não concordo'}
                    onChange={e => setConcordaLGPD(e.target.value)}
                    style={{ width: '18px', height: '18px', accentColor: '#00a8b5', cursor: 'pointer' }}
                  />
                  <span>Não concordo</span>
                </label>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '24px' }}>
                <button
                  type="button"
                  onClick={handlePrevStep}
                  style={{
                    backgroundColor: '#00a8b5',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '14px',
                    padding: '12px 32px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#008b96')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#00a8b5')}
                >
                  Voltar
                </button>

                <button
                  type="button"
                  onClick={handleNextStep7}
                  style={{
                    backgroundColor: isStep7Valid ? '#FF1A00' : '#FF1A00',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '14px',
                    padding: '12px 36px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: isStep7Valid ? 'pointer' : 'default',
                    boxShadow: '0 4px 14px rgba(255, 26, 0, 0.4)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#DC2626')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#FF1A00')}
                >
                  Próximo
                </button>
              </div>
            </div>
          )}

          {/* ── ETAPA 8: Pronto, finalizamos sua inscrição. Muito obrigado!! ── */}
          {currentStep === 8 && (
            <div
              id="container-formulario"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '14px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
                padding: '32px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#F98600',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '15px',
                  padding: '10px 18px',
                  borderRadius: '6px',
                  display: 'inline-block',
                  marginBottom: '20px',
                }}
              >
                Pronto, finalizamos sua inscrição. Muito obrigado!!
              </div>

              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  lineHeight: 1.6,
                  color: '#0F172A',
                  marginBottom: '32px',
                }}
              >
                Agora é esperar nossa equipe avaliar o mérito do projeto, em até uma semana te daremos um retorno. Estamos ansiosos para apoiar iniciativas inovadoras como a de vocês!
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '24px' }}>
                <button
                  type="button"
                  onClick={handlePrevStep}
                  style={{
                    backgroundColor: '#00a8b5',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '14px',
                    padding: '12px 32px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#008b96')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#00a8b5')}
                >
                  Voltar
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  style={{
                    backgroundColor: '#00a8b5',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '14px',
                    padding: '12px 36px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0, 168, 181, 0.3)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#008b96')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#00a8b5')}
                >
                  Enviar
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

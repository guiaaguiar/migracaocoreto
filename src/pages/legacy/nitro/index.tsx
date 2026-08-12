import { useState } from 'react'
import { Link } from 'react-router-dom'

import logoCoreto from '../../../assets/logo-coreto.png'
import logoAbdi from '../../../assets/logo-abdi.png'
import logoEmprel from '../../../assets/logo-emprel.png'
import bannerNitro from '../../../assets/banner-nitro.png'

type TabType = 'inicio' | 'inscricao' | 'editais' | 'cronograma'
type ProponenteType = 'startup' | 'inventor'

export default function NitroPage() {
  const [activeTab, setActiveTab] = useState<TabType>('inicio')
  const [showExpiredToast, setShowExpiredToast] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  // Modal Form State
  const [proponenteType, setProponenteType] = useState<ProponenteType>('startup')
  const [coTitularidade, setCoTitularidade] = useState<string>('nao_ha')

  const [formData, setFormData] = useState({
    // Startup / Proponente PJ
    razaoSocial: '',
    nomeStartup: '',
    cnpj: '',
    dataAbertura: '',
    representanteLegal: '',
    cpfRepresentante: '',
    
    // Inventor PF (Dados do Titular)
    nomeInventor: '',
    cpfInventor: '',
    rgInventor: '',
    orgaoExpedidor: '',
    dataNascimentoInventor: '',
    nacionalidade: '',
    estadoCivil: 'Solteiro(a)',
    profissao: '',

    // Endereço e Contato comum
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: '',
    whatsapp: '',
    email: '',
    
    // Uploads
    contratoSocialFile: null as string | null,
    comprovanteResidenciaFile: null as string | null,

    // Software
    nomeSoftware: '',
    versaoSoftware: '',
    descricaoSoftware: '',
    linguagemProgramacao: '',
    campoAplicacao: 'AD01-Administr (desenvolv.organizacional, desburocratização);',
    tipoPrograma: 'SO01-Sist Operac (Sistema Operacional)',
    dataCriacaoSoftware: '',
    dataPublicacaoSoftware: '',
    hashSHA256: '',
    justificativaInteressePublico: '',
    anexoIFile: null as string | null,
    aceiteFinal: '',
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (field: string, fileName: string) => {
    setFormData(prev => ({ ...prev, [field]: fileName }))
  }

  const handleEditalClick = (editalId: string) => {
    if (editalId === '001' || editalId === '003') {
      setShowExpiredToast(true)
      // Auto hide toast after 5s
      setTimeout(() => setShowExpiredToast(false), 5000)
    } else if (editalId === '002') {
      setIsModalOpen(true)
      setIsSubmitted(false)
    }
  }

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8FAFC', color: '#1E293B', fontFamily: "'Inter', 'Segoe UI', sans-serif", display: 'flex', flexDirection: 'column' }}>
      
      {/* ── Floating Toast Alert for Encerrado ── */}
      {showExpiredToast && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            backgroundColor: '#DC2626',
            color: '#FFFFFF',
            padding: '14px 20px',
            borderRadius: '8px',
            boxShadow: '0 10px 25px -5px rgba(220, 38, 38, 0.4)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            maxWidth: '450px',
            animation: 'fadeIn 0.3s ease',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <div style={{ flex: 1, fontSize: '14px', fontWeight: 600, lineHeight: 1.4 }}>
            O prazo para novas submissões para esse Edital já encerrou!
          </div>
          <button
            onClick={() => setShowExpiredToast(false)}
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '18px', fontWeight: 700, padding: 0 }}
          >
            ×
          </button>
        </div>
      )}

      {/* ── Top Header Navigation Bar ── */}
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
          zIndex: 30,
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

        {/* Right User & Voltar link */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Link
            to="/legacy"
            style={{
              fontSize: '13px',
              fontWeight: 600,
              color: '#00a8b5',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>← Voltar ao Legado</span>
          </Link>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              padding: '6px 12px',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
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
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#0F172A' }}>Pedro</span>
            <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#0F172A' }}>
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </header>

      {/* ── Main Layout Body ── */}
      <div style={{ display: 'flex', flex: 1, minHeight: 'calc(100vh - 64px)' }}>
        
        {/* ── Left Sidebar ── */}
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
            <Link
              to="/legacy"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 20px',
                fontWeight: 500,
                fontSize: '14px',
                color: '#00a8b5',
                textDecoration: 'none',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00a8b5" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 9h6v6H9z" />
              </svg>
              <span>Início</span>
            </Link>

            {/* Meus programas */}
            <a
              href="#"
              onClick={e => e.preventDefault()}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 20px',
                fontWeight: 500,
                fontSize: '14px',
                color: '#00a8b5',
                textDecoration: 'none',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e05c5c" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Meus programas</span>
            </a>

            {/* Section: Resolvedor */}
            <div style={{ padding: '20px 20px 8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#1E293B', letterSpacing: '0.02em' }}>
                Resolvedor
              </span>
            </div>

            <SidebarItem icon="opportunity" label="Oportunidades" color="#00a8b5" />
            <SidebarItem icon="solution" label="Criar solução" color="#d946ef" />
            <SidebarItem icon="benefits" label="Benefícios" color="#f97316" />
            <SidebarItem icon="panel" label="Painel" color="#00a8b5" />

            {/* Section: GERAL */}
            <div style={{ padding: '24px 20px 8px', borderTop: '1px solid #F1F5F9', marginTop: '12px' }}>
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#1E293B', letterSpacing: '0.02em' }}>
                GERAL
              </span>
            </div>

            <SidebarItem icon="help" label="Ajuda" color="#eab308" />
            <SidebarItem icon="exit" label="Sair" color="#00a8b5" />
          </nav>
        </aside>

        {/* ── Main Content Area ── */}
        <main style={{ flex: 1, padding: '32px 40px', backgroundColor: '#F8FAFC', maxWidth: '1100px' }}>
          
          {/* Card Wrapper */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
              overflow: 'hidden',
              marginBottom: '32px',
            }}
          >
            {/* Banner Image */}
            <img
              src={bannerNitro}
              alt="NITRO 2026 Banner"
              style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '380px', objectFit: 'cover' }}
            />

            {/* Banner Sub-Header & Navigation Tabs */}
            <div style={{ padding: '24px 32px' }}>
              <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#0F172A', margin: '0 0 16px 0', letterSpacing: '-0.3px' }}>
                NITRO 2026
              </h1>

              {/* Navigation Tabs */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <TabButton
                  label="Início"
                  isActive={activeTab === 'inicio'}
                  onClick={() => setActiveTab('inicio')}
                />
                <TabButton
                  label="Inscrição"
                  isActive={activeTab === 'inscricao'}
                  onClick={() => setActiveTab('inscricao')}
                />
                <TabButton
                  label="Editais"
                  isActive={activeTab === 'editais'}
                  onClick={() => setActiveTab('editais')}
                />
                <TabButton
                  label="Cronograma"
                  isActive={activeTab === 'cronograma'}
                  onClick={() => setActiveTab('cronograma')}
                />
              </div>
            </div>
          </div>

          {/* ── Tab Content 1: INÍCIO ── */}
          {activeTab === 'inicio' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Sobre o NITRO Box */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  padding: '32px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                  display: 'grid',
                  gridTemplateColumns: '1fr 280px',
                  gap: '32px',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ marginBottom: '16px' }}>
                    <span
                      style={{
                        backgroundColor: '#00a8b5',
                        color: '#ffffff',
                        padding: '6px 14px',
                        borderRadius: '6px',
                        fontSize: '13px',
                        fontWeight: 700,
                      }}
                    >
                      Sobre o NITRO
                    </span>
                  </div>

                  <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#334155', marginBottom: '16px' }}>
                    O <strong>NITRO 2026</strong> é a trilha de inovação e transferência tecnológica do Recife, que conecta startups, instituições científicas e o setor público para desenvolver, validar e escalar soluções inovadoras.
                  </p>
                  <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#334155', marginBottom: '16px' }}>
                    Por meio de diferentes editais e oportunidades, o programa apoia iniciativas que atuam em desafios reais da cidade, promovendo experimentação em ambiente urbano, estruturação de estratégias de comercialização e fortalecimento da inovação local.
                  </p>
                  <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#334155', marginBottom: '28px' }}>
                    As iniciativas selecionadas terão acesso a suporte técnico especializado, conexões estratégicas e oportunidades de validação e crescimento dentro do ecossistema de inovação do Recife.
                  </p>

                  {/* Buttons */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
                    <button
                      onClick={() => setActiveTab('inscricao')}
                      style={{
                        backgroundColor: '#00873D',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '14px 24px',
                        fontSize: '15px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        transition: 'background-color 0.2s ease, transform 0.1s ease',
                        boxShadow: '0 2px 5px rgba(0, 135, 61, 0.2)',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#007534')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#00873D')}
                    >
                      <span style={{ fontSize: '18px' }}>↗</span> Clique aqui para se inscrever
                    </button>

                    <button
                      onClick={() => setActiveTab('editais')}
                      style={{
                        backgroundColor: '#00a8b5',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '14px 24px',
                        fontSize: '15px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        transition: 'background-color 0.2s ease',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#00909c')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#00a8b5')}
                    >
                      <span style={{ fontSize: '18px' }}>🚀</span> Acesse os editais completo
                    </button>
                  </div>
                </div>

                {/* Right Circle Nitro Logo */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '220px',
                      height: '220px',
                      borderRadius: '50%',
                      backgroundColor: '#18181B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                    }}
                  >
                    <span style={{ color: '#FFFFFF', fontSize: '48px', fontWeight: 800, fontFamily: "'Poppins', sans-serif", letterSpacing: '-1px' }}>
                      Nitrō
                    </span>
                  </div>
                </div>
              </div>

              {/* PROPÓSITO Section */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  padding: '32px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                }}
              >
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#00a8b5', margin: '0 0 24px 0', letterSpacing: '0.03em' }}>
                  PROPÓSITO
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                  {/* Purpose Box 1 */}
                  <div
                    style={{
                      border: '2px solid #00a8b5',
                      borderRadius: '10px',
                      padding: '24px 16px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      backgroundColor: '#FFFFFF',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#00a8b5',
                        color: '#FFFFFF',
                        width: '44px',
                        height: '44px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        fontWeight: 800,
                        marginBottom: '20px',
                      }}
                    >
                      1
                    </div>
                    <p style={{ fontSize: '13px', fontWeight: 700, color: '#00a8b5', margin: 0, lineHeight: 1.5 }}>
                      IMPULSIONAR A MATURIDADE E A PROTEÇÃO INTELECTUAL DO ECOSSISTEMA DO RECIFE
                    </p>
                  </div>

                  {/* Purpose Box 2 */}
                  <div
                    style={{
                      border: '2px solid #034980',
                      borderRadius: '10px',
                      padding: '24px 16px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      backgroundColor: '#FFFFFF',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#034980',
                        color: '#FFFFFF',
                        width: '44px',
                        height: '44px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        fontWeight: 800,
                        marginBottom: '20px',
                      }}
                    >
                      2
                    </div>
                    <p style={{ fontSize: '13px', fontWeight: 700, color: '#034980', margin: 0, lineHeight: 1.5 }}>
                      QUALIFICAR STARTUPS E PESQUISADORES PARA A COMERCIALIZAÇÃO DE NOVAS TECNOLOGIAS
                    </p>
                  </div>

                  {/* Purpose Box 3 */}
                  <div
                    style={{
                      border: '2px solid #00873D',
                      borderRadius: '10px',
                      padding: '24px 16px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      backgroundColor: '#FFFFFF',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#00873D',
                        color: '#FFFFFF',
                        width: '44px',
                        height: '44px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        fontWeight: 800,
                        marginBottom: '20px',
                      }}
                    >
                      3
                    </div>
                    <p style={{ fontSize: '13px', fontWeight: 700, color: '#00873D', margin: 0, lineHeight: 1.5 }}>
                      CONECTAR SOLUÇÕES INOVADORAS AO AMBIENTE DE EXPERIMENTAÇÃO EM CIDADES INTELIGENTES
                    </p>
                  </div>
                </div>
              </div>

              {/* FALE CONOSCO Section */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  padding: '28px 32px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                }}
              >
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#00a8b5', margin: '0 0 12px 0', letterSpacing: '0.03em' }}>
                  FALE CONOSCO
                </h2>
                <p style={{ fontSize: '15px', color: '#334155', margin: 0 }}>
                  Dúvidas? Entre em contato através do nosso e-mail{' '}
                  <a href="mailto:ncti@portodigital.org" style={{ color: '#0F172A', fontWeight: 700, textDecoration: 'none' }}>
                    ncti@portodigital.org
                  </a>
                </p>
              </div>
            </div>
          )}

          {/* ── Tab Content 2: INSCRIÇÃO ── */}
          {activeTab === 'inscricao' && (
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                padding: '32px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              }}
            >
              <div style={{ marginBottom: '20px' }}>
                <span
                  style={{
                    backgroundColor: '#00a8b5',
                    color: '#ffffff',
                    padding: '8px 18px',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: 700,
                    display: 'inline-block',
                  }}
                >
                  Inscrições
                </span>
              </div>

              <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#334155', marginBottom: '32px' }}>
                Selecione abaixo o edital ou chamada pública em que deseja inscrever seu projeto, startup ou instituição. Cada oportunidade possui requisitos específicos de elegibilidade e prazos distintos. <strong>Certifique-se de ter lido o edital correspondente antes de iniciar sua submissão.</strong>
              </p>

              {/* 3 Edital Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                
                {/* Edital 001 */}
                <button
                  onClick={() => handleEditalClick('001')}
                  style={{
                    width: '100%',
                    backgroundColor: '#00a8b5',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '18px 24px',
                    fontSize: '16px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 4px rgba(0, 168, 181, 0.2)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#00909c')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#00a8b5')}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  <span>NCTI 001/2026 – Apoio para Comercialização de tecnologias</span>
                </button>

                {/* Edital 002 (Only Active Edital) */}
                <button
                  onClick={() => handleEditalClick('002')}
                  style={{
                    width: '100%',
                    backgroundColor: '#00a8b5',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '18px 24px',
                    fontSize: '16px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 4px rgba(0, 168, 181, 0.2)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#00909c')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#00a8b5')}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  <span>NCTI 002/2026 – Apoio para Registros de software</span>
                </button>

                {/* Edital 003 */}
                <button
                  onClick={() => handleEditalClick('003')}
                  style={{
                    width: '100%',
                    backgroundColor: '#00a8b5',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '18px 24px',
                    fontSize: '16px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 4px rgba(0, 168, 181, 0.2)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#00909c')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#00a8b5')}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                  <span>NCTI 003/2026 – Trilha para qualificação ConectaLabs</span>
                </button>

              </div>
            </div>
          )}

          {/* ── Tab Content 3: EDITAIS ── */}
          {activeTab === 'editais' && (
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                padding: '32px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              }}
            >
              <div style={{ marginBottom: '20px' }}>
                <span
                  style={{
                    backgroundColor: '#00a8b5',
                    color: '#ffffff',
                    padding: '8px 18px',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: 700,
                    display: 'inline-block',
                  }}
                >
                  Editais
                </span>
              </div>

              <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#334155', marginBottom: '32px' }}>
                O <strong>NITRO 2026</strong> apresenta oportunidades focadas no desenvolvimento tecnológico e na inovação aberta do Recife. Atualmente, o programa oferece 3 (três) chamadas públicas destinadas a startups, instituições de ensino e inventores locais, divididas entre o suporte à propriedade intelectual, comercialização de tecnologias e experimentação em cidades inteligentes:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                
                {/* ── Seção 1: Edital 001 ── */}
                <div>
                  <div
                    style={{
                      backgroundColor: '#00a8b5',
                      color: '#FFFFFF',
                      padding: '12px 20px',
                      borderRadius: '6px',
                      fontSize: '15px',
                      fontWeight: 700,
                      marginBottom: '16px',
                    }}
                  >
                    Edital de Chamamento Público NCTI 001/2026 – Apoio para Comercialização de Tecnologias
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      {
                        title: 'Resultados Final da Seleção de ICTs - Plano de Comercialização',
                        url: 'https://drive.google.com/file/d/1c6FZi1SEMte8nlhZO5epiBHuLgKefmtf/view',
                      },
                      {
                        title: 'Edital de Chamamento Público Segunda Rerratificação (02) NCTI 001_2026',
                        url: 'https://drive.google.com/file/d/1uhkWR9LiQl9QilRUHa1KE1S0jCOOUgsa/view',
                      },
                      {
                        title: 'Aviso de Segunda Rerratificação (02) do Chamamento Público NCTI 001_2026',
                        url: 'https://drive.google.com/file/d/1ylj_WrWP1ziG-6ImKjk1jPeE3DyL5sXA/view',
                      },
                      {
                        title: 'Edital de Chamamento Público Rerratificado NCTI 001_2026',
                        url: 'https://drive.google.com/file/d/1x5pByor5alcfn7J2csLMoJg3mQbOzY2Q/view',
                      },
                      {
                        title: 'Aviso de Rerratificação do Chamamento Público NCTI 001_2026',
                        url: 'https://drive.google.com/file/d/16wLjKv1yGo2eou6Ryh4DCWApMrz4KV-a/view',
                      },
                      {
                        title: 'Edital de Chamamento Público NCTI 001/2026 - Apoio para Comercialização de tecnologias',
                        url: 'https://drive.google.com/file/d/1Yus1eqQ8ZEHhLNevI8xiOR8y9ITe74xc/view',
                      },
                    ].map((doc, i) => (
                      <DocumentButton key={i} title={doc.title} url={doc.url} />
                    ))}
                  </div>
                </div>

                {/* ── Seção 2: Edital 002 ── */}
                <div>
                  <div
                    style={{
                      backgroundColor: '#00a8b5',
                      color: '#FFFFFF',
                      padding: '12px 20px',
                      borderRadius: '6px',
                      fontSize: '15px',
                      fontWeight: 700,
                      marginBottom: '16px',
                    }}
                  >
                    Edital de Chamamento Público NCTI 002/2026 – Apoio para Registros de software
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      {
                        title: 'Edital de Chamamento Público Rerratificado NCTI 002_2026',
                        url: 'https://drive.google.com/file/d/1FFrZpqUUSMZOHOPkgu6SU_LQ3NxalqNs/view',
                      },
                      {
                        title: 'Aviso de Rerratificação Chamamento Público NCTI 002/2026',
                        url: 'https://drive.google.com/file/d/1vuNuKJ5llJoNj0AJzW0bSBfa-rjIBZPZ/view',
                      },
                      {
                        title: 'Edital de Chamamento Público NCTI 002/2026 - Apoio para Registros de software',
                        url: 'https://drive.google.com/file/d/1Yg2Y0GU6lG3kmgF6Z53SKt-eyC4kqq5P/view',
                      },
                    ].map((doc, i) => (
                      <DocumentButton key={i} title={doc.title} url={doc.url} />
                    ))}
                  </div>
                </div>

                {/* ── Seção 3: Edital 003 ── */}
                <div>
                  <div
                    style={{
                      backgroundColor: '#00a8b5',
                      color: '#FFFFFF',
                      padding: '12px 20px',
                      borderRadius: '6px',
                      fontSize: '15px',
                      fontWeight: 700,
                      marginBottom: '16px',
                    }}
                  >
                    Edital de Seleção De Startups NCTI 003/2026 – Trilha para qualificação ConectaLabs
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      {
                        title: 'Resultado Final da Seleção de Startups - Conecta Labs Recife',
                        url: 'https://drive.google.com/file/d/1Yg2Y0GU6lG3kmgF6Z53SKt-eyC4kqq5P/view',
                      },
                      {
                        title: 'Edital de Chamamento Público Segunda Rerratificação (02) NCTI 003_2026',
                        url: 'https://drive.google.com/file/d/1lkPQhg85cMyDBrvFQzs__g4YNnEckGLd/view?usp=sharing',
                      },
                      {
                        title: 'Aviso de Segunda Rerratificação (02) do Chamamento Público NCTI 003_2026',
                        url: 'https://drive.google.com/file/d/1YnkBU2bz-qcLng9rtUk4kY4ahDHZtHv7/view?usp=sharing',
                      },
                      {
                        title: 'Edital de Chamamento Público Rerratificado NCTI 003_2026',
                        url: 'https://drive.google.com/file/d/1gyjQ6c8HDNLS78I6i_u5yM-kggznQsLQ/view?usp=sharing',
                      },
                      {
                        title: 'Aviso de Rerratificação do Chamamento Público NCTI 003_2026',
                        url: 'https://drive.google.com/file/d/1orDSfNIHOhX8rP3gBriEsn8EeZa_rG5F/view',
                      },
                      {
                        title: 'Edital de Seleção De Startups NCTI 003/2026 – Trilha para qualificação ConectaLabs',
                        url: 'https://drive.google.com/file/d/1FWbI9dYVafEc4sa_PceOWLXu6T9IE5ZX/view',
                      },
                    ].map((doc, i) => (
                      <DocumentButton key={i} title={doc.title} url={doc.url} />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ── Tab Content 4: CRONOGRAMA ── */}
          {activeTab === 'cronograma' && (
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                padding: '32px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>

                {/* ── Cronograma 001 ── */}
                <div>
                  <div
                    style={{
                      backgroundColor: '#00a8b5',
                      color: '#FFFFFF',
                      padding: '12px 20px',
                      borderRadius: '6px',
                      fontSize: '15px',
                      fontWeight: 700,
                      marginBottom: '24px',
                    }}
                  >
                    Cronograma Edital de Chamamento Público NCTI 001/2026 – Apoio para Comercialização de tecnologias (Segunda Rerratificação)
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {[
                      { date: '26/03/2026', label: 'PUBLICAÇÃO DO EDITAL' },
                      { date: '01/06/2026', label: 'DATA LIMITE PARA ENVIO DAS PROPOSTAS' },
                      { date: '12/06/2026', label: 'PUBLICAÇÃO DO RESULTADO PRELIMINAR' },
                      { date: '16/06/2026', label: 'PRAZO PARA INTERPOSIÇÃO DE RECURSOS' },
                      { date: '19/06/2026', label: 'PUBLICAÇÃO DO RESULTADO FINAL' },
                      { date: '22/06/2026', label: 'INÍCIO DA CONSTRUÇÃO DO PLANO DE COMERCIALIZAÇÃO TECNOLÓGICA' },
                    ].map((item, i) => (
                      <TimelineItem key={i} date={item.date} label={item.label} />
                    ))}
                  </div>
                </div>

                {/* ── Cronograma 002 ── */}
                <div>
                  <div
                    style={{
                      backgroundColor: '#00a8b5',
                      color: '#FFFFFF',
                      padding: '12px 20px',
                      borderRadius: '6px',
                      fontSize: '15px',
                      fontWeight: 700,
                      marginBottom: '24px',
                    }}
                  >
                    Cronograma Edital de Chamamento Público NCTI 002/2026 – Apoio para Registros de software
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {[
                      { date: '26/03/2026', label: 'PUBLICAÇÃO DO EDITAL' },
                      { date: '26/03/2026', label: 'INÍCIO DAS INSCRIÇÕES' },
                      { date: '26/04/2026', label: 'INÍCIO DOS REGISTROS DE SOFTWARE' },
                      { date: '01/06/2026', label: 'DATA LIMITE PARA AS INSCRIÇÕES' },
                      { date: 'FLUXO CONTÍNUO', label: 'PUBLICAÇÃO DO RESULTADO PRELIMINAR' },
                      { date: 'PRAZO PARA INTERPOSIÇÃO DE RECURSOS', label: 'ATÉ 2 DIAS APÓS A PUBLICAÇÃO DE CADA RESULTADO' },
                      { date: 'FLUXO CONTÍNUO', label: 'PUBLICAÇÃO DO RESULTADO FINAL' },
                    ].map((item, i) => (
                      <TimelineItem key={i} date={item.date} label={item.label} />
                    ))}
                  </div>
                </div>

                {/* ── Cronograma 003 ── */}
                <div>
                  <div
                    style={{
                      backgroundColor: '#00a8b5',
                      color: '#FFFFFF',
                      padding: '12px 20px',
                      borderRadius: '6px',
                      fontSize: '15px',
                      fontWeight: 700,
                      marginBottom: '24px',
                    }}
                  >
                    Cronograma Edital de Seleção De Startups NCTI 003/2026 – Trilha para qualificação ConectaLabs
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {[
                      { date: '26/03/2026', label: 'PUBLICAÇÃO DO EDITAL' },
                      { date: '01/06/2026', label: 'DATA LIMITE PARA INSCRIÇÕES' },
                      { date: '03/06/2026', label: 'PUBLICAÇÃO DO RESULTADO' },
                      { date: '05/06/2026', label: 'PRZO PARA INTERPOSIÇÃO DE RECURSOS' },
                      { date: '09/06/2026', label: 'PUBLICAÇÃO DO RESULTADO FINAL' },
                      { date: '12/06/2026', label: 'EVENTO DE KICK-OFF COM STARTUPS SELECIONADAS' },
                      { date: '16/06/2026', label: 'CAPACITAÇÃO REGULATÓRIA' },
                      { date: '17/06/2026', label: 'CAPACITAÇÃO TÉCNICA E OPERACIONAL' },
                      { date: '18/06/2026', label: 'INÍCIO DAS ATIVIDADES E CONSULTORIA' },
                    ].map((item, i) => (
                      <TimelineItem key={i} date={item.date} label={item.label} />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

        </main>
      </div>

      {/* ───────────────────────────────────────────────────────── */}
      {/* ── MODAL POP UP DE INSCRIÇÃO (Edital 002) ─────────────── */}
      {/* ───────────────────────────────────────────────────────── */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(4px)',
            zIndex: 9990,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              width: '100%',
              maxWidth: '860px',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              border: '1px solid #E2E8F0',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Modal Header Bar */}
            <div
              style={{
                padding: '24px 32px 16px',
                borderBottom: '1px solid #F1F5F9',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <p style={{ fontSize: '13px', color: '#00a8b5', fontWeight: 500, margin: '0 0 8px 0', lineHeight: 1.4, maxWidth: '720px' }}>
                  Este formulário destina-se a startups e inventores que desejam apoio técnico e subsídio para o registro de programa de computador no INPI. A seleção é realizada por ordem de inscrição até o limite de 400 registros.
                </p>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                  Inicie por aqui:
                </h2>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  color: '#64748B',
                  cursor: 'pointer',
                  padding: '4px',
                  lineHeight: 1,
                }}
              >
                ×
              </button>
            </div>

            {/* Modal Body / Form */}
            {isSubmitted ? (
              <div style={{ padding: '48px 32px', textAlign: 'center' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#DCFCE7',
                    color: '#166534',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
                  Inscrição Recebida com Sucesso!
                </h3>
                <p style={{ fontSize: '15px', color: '#64748B', maxWidth: '500px', margin: '0 auto 32px' }}>
                  Sua solicitação de apoio para o Registro de Software (NCTI 002/2026) foi registrada. Em breve nossa equipe entrará em contato.
                </p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    backgroundColor: '#00a8b5',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px 28px',
                    fontSize: '15px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Fechar Janela
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitForm} style={{ padding: '24px 32px 32px' }}>
                
                {/* 1. Identificação */}
                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
                    1. Identificação
                  </h3>
                  <label style={{ fontSize: '14px', fontWeight: 600, color: '#00a8b5', display: 'block', marginBottom: '8px' }}>
                    Selecione: Startup PJ ou Inventor PF *
                  </label>

                  <div style={{ display: 'flex', gap: '24px', marginBottom: proponenteType === 'inventor' ? '16px' : '0' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', color: '#00a8b5', fontWeight: 600 }}>
                      <input
                        type="radio"
                        name="proponenteType"
                        value="startup"
                        checked={proponenteType === 'startup'}
                        onChange={() => setProponenteType('startup')}
                        style={{ accentColor: '#00a8b5' }}
                      />
                      Startup PJ
                    </label>

                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', color: '#00a8b5', fontWeight: 600 }}>
                      <input
                        type="radio"
                        name="proponenteType"
                        value="inventor"
                        checked={proponenteType === 'inventor'}
                        onChange={() => setProponenteType('inventor')}
                        style={{ accentColor: '#00a8b5' }}
                      />
                      Inventor PF
                    </label>
                  </div>

                  {/* Additional field for Inventor PF: Co-titularidade */}
                  {proponenteType === 'inventor' && (
                    <div style={{ marginTop: '16px' }}>
                      <label style={{ fontSize: '14px', fontWeight: 600, color: '#00a8b5', display: 'block', marginBottom: '8px' }}>
                        Selecione: Há Co-titularidade? Se sim, informe a quantidade de cotitulares
                      </label>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {[
                          { id: 'nao_ha', label: 'Não há' },
                          { id: '1', label: '1' },
                          { id: '2', label: '2' },
                          { id: '3', label: '3' },
                          { id: '4', label: '4' },
                          { id: '5', label: '5' },
                        ].map(opt => (
                          <label key={opt.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', color: '#00a8b5' }}>
                            <input
                              type="radio"
                              name="coTitularidade"
                              value={opt.id}
                              checked={coTitularidade === opt.id}
                              onChange={e => setCoTitularidade(e.target.value)}
                              style={{ accentColor: '#00a8b5' }}
                            />
                            <span>{opt.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Yellow Warning Box */}
                <div
                  style={{
                    backgroundColor: '#FEF9C3',
                    border: '1px solid #FDE047',
                    borderRadius: '8px',
                    padding: '16px 20px',
                    marginBottom: '28px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                  }}
                >
                  <span style={{ fontSize: '20px' }}>⚠️</span>
                  <p style={{ fontSize: '14px', lineHeight: 1.5, color: '#1E293B', margin: 0, fontWeight: 500 }}>
                    <strong>Atenção:</strong> O INPI <strong>não aceita</strong> assinaturas realizadas pelo <strong>Gov.br</strong> para processos de Registro de Software.<br />
                    Certifique-se de usar um formato válido antes de anexar qualquer documento.
                  </p>
                </div>

                {/* Dynamic Proponente Fields */}
                {proponenteType === 'startup' ? (
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
                      Dados da Startup
                    </h3>

                    <FormInput
                      label="Razão Social: *"
                      placeholder="Texto conforme contrato social"
                      value={formData.razaoSocial}
                      onChange={v => handleInputChange('razaoSocial', v)}
                    />
                    <FormInput
                      label="Nome: *"
                      placeholder="Nome fantasia da startup."
                      value={formData.nomeStartup}
                      onChange={v => handleInputChange('nomeStartup', v)}
                    />
                    <FormInput
                      label="CNPJ: *"
                      placeholder="Formato: 00.000.000/0000-00."
                      value={formData.cnpj}
                      onChange={v => handleInputChange('cnpj', v)}
                    />
                    <FormInput
                      label="Data de Abertura: *"
                      placeholder="Data de abertura da empresa."
                      value={formData.dataAbertura}
                      onChange={v => handleInputChange('dataAbertura', v)}
                    />
                    <FormInput
                      label="Representante legal da startup: *"
                      placeholder="Nome do representante legal."
                      value={formData.representanteLegal}
                      onChange={v => handleInputChange('representanteLegal', v)}
                    />
                    <FormInput
                      label="CPF do Representante: *"
                      placeholder="CPF do representante legal. Formato: 000.000.000-00."
                      value={formData.cpfRepresentante}
                      onChange={v => handleInputChange('cpfRepresentante', v)}
                    />
                    <FormInput
                      label="Endereço(logradouro): *"
                      placeholder="Rua, Avenida, etc."
                      value={formData.endereco}
                      onChange={v => handleInputChange('endereco', v)}
                    />
                    <FormInput
                      label="Número: *"
                      placeholder="Número do imóvel."
                      value={formData.numero}
                      onChange={v => handleInputChange('numero', v)}
                    />
                    <FormInput
                      label="Complemento: *"
                      placeholder="Apartamento, sala, etc."
                      value={formData.complemento}
                      onChange={v => handleInputChange('complemento', v)}
                    />
                    <FormInput
                      label="Bairro: *"
                      placeholder="Bairro."
                      value={formData.bairro}
                      onChange={v => handleInputChange('bairro', v)}
                    />
                    <FormInput
                      label="Cidade: *"
                      placeholder="Cidade:"
                      value={formData.cidade}
                      onChange={v => handleInputChange('cidade', v)}
                    />
                    <FormInput
                      label="Estado: *"
                      placeholder="Estado."
                      value={formData.estado}
                      onChange={v => handleInputChange('estado', v)}
                    />
                    <FormInput
                      label="Cep: *"
                      placeholder="Formato: 00000-000."
                      value={formData.cep}
                      onChange={v => handleInputChange('cep', v)}
                    />
                    <FormInput
                      label="Whatsapp: *"
                      placeholder="WhatsApp com DDD."
                      value={formData.whatsapp}
                      onChange={v => handleInputChange('whatsapp', v)}
                    />
                    <FormInput
                      label="Email: *"
                      placeholder="E-mail principal do proponente."
                      value={formData.email}
                      onChange={v => handleInputChange('email', v)}
                    />

                    {/* File Uploads for Startup */}
                    <FileUploadBox
                      label="Contrato Social: *"
                      subtext="Upload de apenas Startup"
                      fileName={formData.contratoSocialFile}
                      onUpload={name => handleFileUpload('contratoSocialFile', name)}
                    />

                    <FileUploadBox
                      label="Comprovante de Residência: *"
                      subtext="Comprovante de sede (PJ) ou residência (PF) em Recife/PE."
                      fileName={formData.comprovanteResidenciaFile}
                      onUpload={name => handleFileUpload('comprovanteResidenciaFile', name)}
                    />
                  </div>
                ) : (
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
                      Dados do Titular
                    </h3>

                    <FormInput
                      label="Nome Completo: *"
                      placeholder="Nome completo conforme documento de identidade."
                      value={formData.nomeInventor}
                      onChange={v => handleInputChange('nomeInventor', v)}
                    />
                    <FormInput
                      label="CPF : *"
                      placeholder="Formato: 000.000.000-00."
                      value={formData.cpfInventor}
                      onChange={v => handleInputChange('cpfInventor', v)}
                    />
                    <FormInput
                      label="RG: *"
                      placeholder="Número do RG."
                      value={formData.rgInventor}
                      onChange={v => handleInputChange('rgInventor', v)}
                    />
                    <FormInput
                      label="Órgão Expedidor: *"
                      placeholder="Ex.: SSP/PE."
                      value={formData.orgaoExpedidor}
                      onChange={v => handleInputChange('orgaoExpedidor', v)}
                    />
                    <FormInput
                      label="Data de Nascimento: *"
                      placeholder="Data de nascimento."
                      value={formData.dataNascimentoInventor}
                      onChange={v => handleInputChange('dataNascimentoInventor', v)}
                    />
                    <FormInput
                      label="Nacionalidade: *"
                      placeholder="Nacionalidade."
                      value={formData.nacionalidade}
                      onChange={v => handleInputChange('nacionalidade', v)}
                    />

                    {/* Estado Civil */}
                    <div style={{ marginBottom: '16px' }}>
                      <label style={{ fontSize: '14px', fontWeight: 600, color: '#00a8b5', display: 'block', marginBottom: '8px' }}>
                        Estado Civil: *
                      </label>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'].map(opt => (
                          <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', color: '#00a8b5' }}>
                            <input
                              type="radio"
                              name="estadoCivil"
                              value={opt}
                              checked={formData.estadoCivil === opt}
                              onChange={e => handleInputChange('estadoCivil', e.target.value)}
                              style={{ accentColor: '#00a8b5' }}
                            />
                            <span>{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <FormInput
                      label="Profissão: *"
                      placeholder="Profissão do inventor."
                      value={formData.profissao}
                      onChange={v => handleInputChange('profissao', v)}
                    />
                    <FormInput
                      label="Endereço(logradouro): *"
                      placeholder="Rua, Avenida, etc."
                      value={formData.endereco}
                      onChange={v => handleInputChange('endereco', v)}
                    />
                    <FormInput
                      label="Número: *"
                      placeholder="Número do imóvel."
                      value={formData.numero}
                      onChange={v => handleInputChange('numero', v)}
                    />
                    <FormInput
                      label="Complemento: *"
                      placeholder="Apartamento, sala, etc."
                      value={formData.complemento}
                      onChange={v => handleInputChange('complemento', v)}
                    />
                    <FormInput
                      label="Bairro: *"
                      placeholder="Bairro."
                      value={formData.bairro}
                      onChange={v => handleInputChange('bairro', v)}
                    />
                    <FormInput
                      label="Cidade: *"
                      placeholder="Cidade:"
                      value={formData.cidade}
                      onChange={v => handleInputChange('cidade', v)}
                    />
                    <FormInput
                      label="Estado: *"
                      placeholder="Estado."
                      value={formData.estado}
                      onChange={v => handleInputChange('estado', v)}
                    />
                    <FormInput
                      label="Cep: *"
                      placeholder="Formato: 00000-000."
                      value={formData.cep}
                      onChange={v => handleInputChange('cep', v)}
                    />
                    <FormInput
                      label="Whatsapp: *"
                      placeholder="WhatsApp com DDD."
                      value={formData.whatsapp}
                      onChange={v => handleInputChange('whatsapp', v)}
                    />
                    <FormInput
                      label="Email: *"
                      placeholder="E-mail principal do proponente."
                      value={formData.email}
                      onChange={v => handleInputChange('email', v)}
                    />

                    <FileUploadBox
                      label="Comprovante de Residência: *"
                      subtext="Comprovante de sede (PJ) ou residência (PF) em Recife/PE."
                      fileName={formData.comprovanteResidenciaFile}
                      onUpload={name => handleFileUpload('comprovanteResidenciaFile', name)}
                    />
                  </div>
                )}

                {/* 2. Dados do software */}
                <div style={{ marginTop: '32px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#00a8b5', marginBottom: '16px' }}>
                    2. Dados do software:
                  </h3>

                  <FormInput
                    label="Nome do Software: *"
                    placeholder="Nome do programa/software."
                    value={formData.nomeSoftware}
                    onChange={v => handleInputChange('nomeSoftware', v)}
                  />
                  <FormInput
                    label="Versão: *"
                    placeholder="Versão. Ex.: 1.0.0."
                    value={formData.versaoSoftware}
                    onChange={v => handleInputChange('versaoSoftware', v)}
                  />
                  <FormTextarea
                    label="Descrição do Software: *"
                    placeholder="Máx. 200 palavras."
                    value={formData.descricaoSoftware}
                    onChange={v => handleInputChange('descricaoSoftware', v)}
                  />
                  <FormInput
                    label="Linguagem de Programação: *"
                    placeholder="Lista das linguagens utilizadas no desenvolvimento"
                    value={formData.linguagemProgramacao}
                    onChange={v => handleInputChange('linguagemProgramacao', v)}
                  />

                  {/* Campo de Aplicação */}
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ fontSize: '14px', fontWeight: 600, color: '#00a8b5', display: 'block', marginBottom: '10px' }}>
                      Campo de Aplicação: *
                    </label>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '240px', overflowY: 'auto', paddingRight: '8px', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '12px' }}>
                      {[
                        'AD01-Administr (desenvolv.organizacional, desburocratização);',
                        'ADO2-Função Adm (Planejamento governamental: estratégico, operacional, técnica de planej., organização administr., organização funcional, organograma, estrutura organizacional, controle administr. – análise de desempenho, avaliação de desempenho);',
                        'ADO3-Modern Adm (análise organizacional, O&M);',
                        'ADO4-Adm Publ (Administr. Federal, Estadual, Municipal, direito administr., reforma administr., intervenção do Estado na economia, controle da administr.)',
                        'AD05-Adm Empres (administr., de negócios, privada, organização de empresas);',
                        'AD06-Adm Prod (planejamento da fábrica, engenharia do produto, protótipo, planejamento da produção, controle de qualidade);',
                        'AD07-Adm Pes (planejamento de pessoal - recrutamento, seleção, admissão, avaliação, promoção, etc);',
                        'AD08-Adm Materl (planejamento de material, aquisição, armazenamento, almoxarifado, alienação, controle de material, de estoque, inventário, requisição de material);',
                        'AD09-Adm Patrim (inventário patrimonial, fiscalização, conservação, manutenção do patrimônio);',
                        'AD10-Marketing (mercadologia, administr. de marketing ou mercadológica, análise, e pesquisa de mercado, estratégia de marketing, composto do produto-marca-embalagem, administr. de vendas - planejamento de vendas - controle de vendas);',
                        'AD11-Adm Escrit (serviços de escritório - comunicação administr., arquivo de escritório, etc).',
                        'AGO1-Agricultur (agropecuária, desenvolvimento rural, extensão rural, planejamento e política agrícola, zoneamento agrícola);',
                        'AGO2-Ciênc Agrl (agrologia, agronomia, agrostologia, edafologia, pomologia);',
                        'AHO4-Pol As Hum Políticas de Assentamento Humanos (política demográfica, migratória, planejamento familiar, política de colonização, de desenvolvimento urbano ou política urbana);',
                        'BLO1-Biologia (ser vivo, substância orgânica, leis biológicas, biotipologia, biometria, bioclimatologia, parasitologia, filogenia ou evolução, geobiologia, histologia, limnologia);',
                      ].map(opt => (
                        <label key={opt} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', fontSize: '13px', color: '#00a8b5', lineHeight: 1.4 }}>
                          <input
                            type="radio"
                            name="campoAplicacao"
                            value={opt}
                            checked={formData.campoAplicacao === opt}
                            onChange={e => handleInputChange('campoAplicacao', e.target.value)}
                            style={{ marginTop: '2px', accentColor: '#00a8b5' }}
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Tipo de Programa */}
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ fontSize: '14px', fontWeight: 600, color: '#00a8b5', display: 'block', marginBottom: '10px' }}>
                      Tipo de Programa: *
                    </label>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '180px', overflowY: 'auto', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '12px' }}>
                      {[
                        'SO01-Sist Operac (Sistema Operacional)',
                        'SO02-Interf E&S (Interface de Entrada e Saída)',
                        'SO03-Interf Disc (Interface Básica de Disco)',
                        'SO04-Interf Com (Interface de Comunicação)',
                        'SO05-Geren Usuar (Gerenciador de Usuários)',
                        'SO06-Adm Dispost (Administrador de Dispositivos)',
                        'LG01-Linguagem (Linguagens)',
                        'LG02-Compilador (Compilador)',
                        'GI01-Gerenc Info (Gerenciador de Informações)',
                        'GI02-Gerenc BD (Gerenciador de Banco de Dados)',
                      ].map(opt => (
                        <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px', color: '#00a8b5' }}>
                          <input
                            type="radio"
                            name="tipoPrograma"
                            value={opt}
                            checked={formData.tipoPrograma === opt}
                            onChange={e => handleInputChange('tipoPrograma', e.target.value)}
                            style={{ accentColor: '#00a8b5' }}
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <FormInput
                    label="Data de Criação: *"
                    placeholder="Data de criação do Software."
                    value={formData.dataCriacaoSoftware}
                    onChange={v => handleInputChange('dataCriacaoSoftware', v)}
                  />
                  <FormInput
                    label="Data de Publicação: *"
                    placeholder="Data de publicação do Software."
                    value={formData.dataPublicacaoSoftware}
                    onChange={v => handleInputChange('dataPublicacaoSoftware', v)}
                  />
                  <FormInput
                    label="Hash SHA-256: *"
                    placeholder="Hash SHA-256 do código-fonte. Campo monospace. Validar formato hex 64 caracteres."
                    value={formData.hashSHA256}
                    onChange={v => handleInputChange('hashSHA256', v)}
                  />
                  <FormTextarea
                    label="Justificativa de correlação do software com interesse público do Recife e potencial mercadológico *"
                    placeholder="Descreva aqui"
                    value={formData.justificativaInteressePublico}
                    onChange={v => handleInputChange('justificativaInteressePublico', v)}
                  />
                </div>

                {/* 3. Declaração Anexo I */}
                <div style={{ marginTop: '32px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
                    3. Declaração Anexo I:
                  </h3>
                  <FileUploadBox
                    label=""
                    subtext="Upload de Anexo I"
                    fileName={formData.anexoIFile}
                    onUpload={name => handleFileUpload('anexoIFile', name)}
                  />
                </div>

                {/* 4. Aceite Final */}
                <div style={{ marginTop: '32px', marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
                    4. Aceite Final:
                  </h3>
                  <p style={{ fontSize: '14px', color: '#334155', marginBottom: '12px' }}>
                    Ao aceitar esses termos você concorda com todos os critérios do edital, LGPD e originalidade *
                  </p>
                  <div style={{ display: 'flex', gap: '24px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', color: '#00a8b5', fontWeight: 600 }}>
                      <input
                        type="radio"
                        name="aceiteFinal"
                        value="sim"
                        checked={formData.aceiteFinal === 'sim'}
                        onChange={e => handleInputChange('aceiteFinal', e.target.value)}
                        style={{ accentColor: '#00a8b5' }}
                      />
                      Sim
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', color: '#00a8b5', fontWeight: 600 }}>
                      <input
                        type="radio"
                        name="aceiteFinal"
                        value="nao"
                        checked={formData.aceiteFinal === 'nao'}
                        onChange={e => handleInputChange('aceiteFinal', e.target.value)}
                        style={{ accentColor: '#00a8b5' }}
                      />
                      Não
                    </label>
                  </div>
                </div>

                {/* Modal Submit Button */}
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    backgroundColor: '#00a8b5',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '16px',
                    fontSize: '16px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: '0 4px 6px -1px rgba(0, 168, 181, 0.3)',
                    transition: 'background-color 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#00909c')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#00a8b5')}
                >
                  <span style={{ fontSize: '18px' }}>🚀</span> Finalizar cadastro
                </button>

              </form>
            )}

          </div>
        </div>
      )}

    </div>
  )
}

// ─────────────────────────────────────────────────────────
// Helper Components
// ─────────────────────────────────────────────────────────

function TabButton({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: isActive ? 'transparent' : '#FFFFFF',
        color: '#00a8b5',
        border: isActive ? '2px solid #00a8b5' : '1px solid #00a8b5',
        borderRadius: '6px',
        padding: '8px 20px',
        fontSize: '14px',
        fontWeight: isActive ? 700 : 500,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
    >
      {label}
    </button>
  )
}

function FormInput({ label, placeholder, value, onChange }: { label: string; placeholder: string; value: string; onChange: (v: string) => void }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{ fontSize: '14px', fontWeight: 600, color: '#00a8b5', display: 'block', marginBottom: '6px' }}>
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          width: '100%',
          padding: '12px 14px',
          borderRadius: '6px',
          border: '1px solid #00a8b5',
          fontSize: '14px',
          outline: 'none',
          boxSizing: 'border-box',
          color: '#1E293B',
        }}
      />
    </div>
  )
}

function FormTextarea({ label, placeholder, value, onChange }: { label: string; placeholder: string; value: string; onChange: (v: string) => void }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{ fontSize: '14px', fontWeight: 600, color: '#00a8b5', display: 'block', marginBottom: '6px' }}>
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        rows={4}
        style={{
          width: '100%',
          padding: '12px 14px',
          borderRadius: '6px',
          border: '1px solid #00a8b5',
          fontSize: '14px',
          outline: 'none',
          boxSizing: 'border-box',
          color: '#1E293B',
          fontFamily: 'inherit',
          resize: 'vertical',
        }}
      />
    </div>
  )
}

function FileUploadBox({ label, subtext, fileName, onUpload }: { label: string; subtext: string; fileName: string | null; onUpload: (name: string) => void }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      {label && (
        <label style={{ fontSize: '14px', fontWeight: 600, color: '#00a8b5', display: 'block', marginBottom: '6px' }}>
          {label}
        </label>
      )}
      <div
        onClick={() => {
          const fakeName = 'documento_anexo_' + Math.floor(Math.random() * 1000) + '.pdf'
          onUpload(fakeName)
        }}
        style={{
          border: '1px dashed #00a8b5',
          borderRadius: '8px',
          padding: '36px 20px',
          textAlign: 'center',
          backgroundColor: '#FFFFFF',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#F0FDFA')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#FFFFFF')}
      >
        <span style={{ fontSize: '14px', color: '#64748B', display: 'block' }}>
          {fileName ? `📎 File selecionado: ${fileName}` : subtext}
        </span>
      </div>
    </div>
  )
}

function SidebarItem({ icon, label, color }: { icon: string; label: string; color: string }) {
  return (
    <a
      href="#"
      onClick={e => e.preventDefault()}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '10px 20px',
        fontWeight: 500,
        fontSize: '14px',
        color: '#00a8b5',
        textDecoration: 'none',
      }}
    >
      <div style={{ width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {icon === 'opportunity' && (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
            <circle cx="12" cy="5" r="3" />
            <circle cx="5" cy="18" r="3" />
            <circle cx="19" cy="18" r="3" />
            <line x1="12" y1="8" x2="5" y2="15" />
            <line x1="12" y1="8" x2="19" y2="15" />
          </svg>
        )}
        {icon === 'solution' && (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71 1.26-1.5 1.5-2.5l-3-3c-1 .24-1.79.79-2.5 1.5z" />
            <path d="M12 15l-3-3 8.5-8.5c.83-.83 2.17-.83 3 0s.83 2.17 0 3L12 15z" />
          </svg>
        )}
        {icon === 'benefits' && (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M3.6 9h16.8" />
            <path d="M3.6 15h16.8" />
          </svg>
        )}
        {icon === 'panel' && (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="9" y1="21" x2="9" y2="9" />
          </svg>
        )}
        {icon === 'help' && (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        )}
        {icon === 'exit' && (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        )}
      </div>
      <span>{label}</span>
    </a>
  )
}

function DocumentButton({ title, url }: { title: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        border: '1px solid #00a8b5',
        borderRadius: '6px',
        padding: '14px 18px',
        backgroundColor: '#FFFFFF',
        color: '#00a8b5',
        fontSize: '14px',
        fontWeight: 600,
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        maxWidth: '720px',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.backgroundColor = '#F0FDFA'
        e.currentTarget.style.borderColor = '#008b96'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.backgroundColor = '#FFFFFF'
        e.currentTarget.style.borderColor = '#00a8b5'
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00a8b5" strokeWidth="2" style={{ flexShrink: 0 }}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
      <span>{title}</span>
    </a>
  )
}

function TimelineItem({ date, label }: { date: string; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <div
        style={{
          width: '48px',
          height: '48px',
          flexShrink: 0,
          backgroundColor: '#FFFFFF',
          borderRadius: '8px',
          border: '1px solid #CBD5E1',
          boxShadow: '0 2px 4px rgba(0,0,0,0.06)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            backgroundColor: '#EF4444',
            height: '14px',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <div style={{ width: '3px', height: '6px', backgroundColor: '#991B1B', borderRadius: '1px' }} />
          <div style={{ width: '3px', height: '6px', backgroundColor: '#991B1B', borderRadius: '1px' }} />
          <div style={{ width: '3px', height: '6px', backgroundColor: '#991B1B', borderRadius: '1px' }} />
        </div>
        <div
          style={{
            flex: 1,
            backgroundColor: '#F1F5F9',
            padding: '4px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '3px',
            alignItems: 'center',
            justifyItems: 'center',
          }}
        >
          <div style={{ width: '4px', height: '4px', backgroundColor: '#94A3B8', borderRadius: '1px' }} />
          <div style={{ width: '4px', height: '4px', backgroundColor: '#94A3B8', borderRadius: '1px' }} />
          <div style={{ width: '4px', height: '4px', backgroundColor: '#94A3B8', borderRadius: '1px' }} />
          <div style={{ width: '4px', height: '4px', backgroundColor: '#94A3B8', borderRadius: '1px' }} />
          <div style={{ width: '4px', height: '4px', backgroundColor: '#94A3B8', borderRadius: '1px' }} />
          <div style={{ width: '4px', height: '4px', backgroundColor: '#94A3B8', borderRadius: '1px' }} />
        </div>
      </div>

      <div>
        <div style={{ fontSize: '16px', fontWeight: 700, color: '#0B4F8C', marginBottom: '4px' }}>
          {date}
        </div>
        <div style={{ fontSize: '13px', fontWeight: 700, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
          {label}
        </div>
      </div>
    </div>
  )
}

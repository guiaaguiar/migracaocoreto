import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import bannerCaminhos from '../../../assets/banner-caminhos.avif'
import logoCentelha from '../../../assets/logo-centelha.avif'

export default function CaminhosFase2Page() {
  const [activeTab, setActiveTab] = useState<'inicio' | 'inscricao'>('inicio')
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  // Modals & Interactivity
  const [isInscricaoModalOpen, setIsInscricaoModalOpen] = useState(false)
  const [isAiModalOpen, setIsAiModalOpen] = useState(false)
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false)

  // Registration Popup Form State
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [genero, setGenero] = useState('')
  const [dataNascimento, setDataNascimento] = useState('11/08/2026')
  const [etnia, setEtnia] = useState('')
  const [estado, setEstado] = useState('Pernambuco')
  const [cidade, setCidade] = useState('')
  const [telefone, setTelefone] = useState('')
  const [emailContato, setEmailContato] = useState('')

  // Dados Profissionais Form State
  const [escolaridade, setEscolaridade] = useState('')
  const [instituicao, setInstituicao] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [lattes, setLattes] = useState('')
  const [atuacaoProfissional, setAtuacaoProfissional] = useState('')
  const [linksExternos, setLinksExternos] = useState('')
  const [oQueBusco, setOQueBusco] = useState('')
  const [assuntosMeDefinem, setAssuntosMeDefinem] = useState('')

  // Original Registration Form State
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('Recife')
  const [projectTitle, setProjectTitle] = useState('')
  const [category, setCategory] = useState('Tecnologia da Informação & Comunicação (TIC)')
  const [summary, setSummary] = useState('')
  const [pitchLink, setPitchLink] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)

  // AI Generator Loading State
  const [isGeneratingAi, setIsGeneratingAi] = useState(false)

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 4000)
  }

  const handleGenerateAiProposal = () => {
    if (!projectTitle) {
      showToast('Por favor, informe o Título da Proposta antes de usar a IA.')
      return
    }
    setIsGeneratingAi(true)
    setTimeout(() => {
      setSummary(
        `A proposta "${projectTitle}" consiste em uma solução tecnológica inovadora voltada para a otimização de processos e impacto social e econômico em Pernambuco. Utiliza inteligência artificial e modelos orientados a dados para resolver gargalos críticos do setor de ${category}, promovendo escalabilidade, sustentabilidade e alta aderência às diretrizes do Edital Centelha PE.`
      )
      setIsGeneratingAi(false)
      setIsAiModalOpen(false)
      showToast('✨ Descrição da proposta turbinada com sucesso pelo EDIT.AI!')
    }, 1200)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!fullName || !email || !projectTitle || !summary) {
      showToast('Preencha os campos obrigatórios (*).')
      return
    }
    if (!termsAccepted) {
      showToast('É necessário aceitar os termos do edital para finalizar.')
      return
    }
    showToast('🚀 Inscrição enviada com sucesso para a Trilha Caminhos Centelha PE!')
    setActiveTab('inicio')
  }


  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#EEF2F5',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        display: 'flex',
        flexDirection: 'column',
        color: '#1A202C',
      }}
    >
      {/* ── Toast Notification ── */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 9999,
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            padding: '14px 22px',
            borderRadius: '8px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '13px',
            fontWeight: 600,
            borderLeft: '4px solid #00A8B5',
          }}
        >
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            style={{
              background: 'none',
              border: 'none',
              color: '#94A3B8',
              cursor: 'pointer',
              fontSize: '14px',
              marginLeft: '8px',
            }}
          >
            ✕
          </button>
        </div>
      )}

      <Header />

      {/* ── Main Layout Body (Sidebar + Content Area) ── */}
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar activeItem="meus-programas" />

        {/* ── Main Content Area ── */}
        <main style={{ flex: 1, padding: '24px 32px 64px 32px', maxWidth: '1240px', margin: '0 auto', width: '100%' }}>
          {/* ── Main Hero Banner Image (2600 x 780 px Ultra Sharp) ── */}
          <div
            style={{
              marginBottom: '24px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
              backgroundColor: '#0052D4',
            }}
          >
            <img
              src={bannerCaminhos}
              alt="Trilha Caminhos Centelha PE"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'cover',
                borderRadius: '12px',
                imageRendering: 'auto',
              }}
            />
          </div>

          {/* Subtitle & Tab Navigation Box */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              border: '1px solid #E2E8F0',
              padding: '20px 24px',
              marginBottom: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
            }}
          >
            <h1
              style={{
                fontSize: '18px',
                fontWeight: 800,
                color: '#1A202C',
                marginTop: 0,
                marginBottom: '16px',
                lineHeight: 1.3,
              }}
            >
              Trilha Caminhos: ajudando a alcançar novas oportunidades!
            </h1>

            {/* Tabs: Início, Inscrição & Painel de Inscrições */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => setActiveTab('inicio')}
                style={{
                  padding: '8px 24px',
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: '1px solid #0077B6',
                  backgroundColor: activeTab === 'inicio' ? '#FFFFFF' : '#FFFFFF',
                  color: '#0077B6',
                  boxShadow: activeTab === 'inicio' ? '0 0 0 1px #0077B6' : 'none',
                  transition: 'all 0.15s ease',
                }}
              >
                Início
              </button>

              <button
                type="button"
                onClick={() => setIsInscricaoModalOpen(true)}
                style={{
                  padding: '8px 24px',
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: '1px solid #0077B6',
                  backgroundColor: '#FFFFFF',
                  color: '#0077B6',
                  transition: 'all 0.15s ease',
                }}
              >
                Inscrição
              </button>

              <Link
                to="/legacy/caminhos-inscricoes"
                style={{
                  padding: '8px 24px',
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  backgroundColor: '#00A8B5',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 2px 8px rgba(0, 168, 181, 0.3)',
                  transition: 'all 0.15s ease',
                  marginLeft: 'auto',
                }}
              >
                <span>📊 Painel de Inscrições (43 Propostas)</span>
                <span>↗</span>
              </Link>
            </div>
          </div>

          {/* ───────────────────────────────────────────────────────────── */}
          {/* TAB 1: INÍCIO */}
          {/* ───────────────────────────────────────────────────────────── */}
          {activeTab === 'inicio' && (
            <div>
              {/* Section 1: Sobre o Trilha Caminhos Card */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                  border: '1px solid #E2E8F0',
                  padding: '24px 28px',
                  marginBottom: '24px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                }}
              >
                {/* Pill Tag */}
                <div style={{ marginBottom: '16px' }}>
                  <span
                    style={{
                      backgroundColor: '#0077B6',
                      color: '#FFFFFF',
                      fontSize: '12px',
                      fontWeight: 700,
                      padding: '6px 14px',
                      borderRadius: '4px',
                      display: 'inline-block',
                    }}
                  >
                    Sobre o Trilha Caminhos
                  </span>
                </div>

                {/* Content Split: Left Text + Right Logo */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '32px',
                    marginBottom: '24px',
                  }}
                >
                  <p
                    style={{
                      fontSize: '13px',
                      lineHeight: 1.6,
                      color: '#334155',
                      margin: 0,
                      maxWidth: '620px',
                    }}
                  >
                    A trilha Caminhos ajuda aos proponentes que desejam se tornar novos empreendedores ou retirar suas soluções do papel através do edital Centelha PE.
                  </p>

                  <div style={{ flexShrink: 0 }}>
                    <img src={logoCentelha} alt="Centelha PE" style={{ height: '70px', maxWidth: '240px', objectFit: 'contain', display: 'block' }} />
                  </div>
                </div>

                {/* Red CTA Button */}
                <div>
                  <button
                    type="button"
                    onClick={() => setIsInscricaoModalOpen(true)}
                    style={{
                      backgroundColor: '#E05C5C',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '12px 28px',
                      fontSize: '14px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 2px 4px rgba(224,92,92,0.3)',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#C53030')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#E05C5C')}
                  >
                    <span>↗</span> Clique aqui para se inscrever
                  </button>
                </div>
              </div>

              {/* Section 2: COMO FUNCIONA Header */}
              <div style={{ marginBottom: '16px' }}>
                <h2
                  style={{
                    fontSize: '16px',
                    fontWeight: 800,
                    color: '#0077B6',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    margin: 0,
                  }}
                >
                  COMO FUNCIONA
                </h2>
              </div>

              {/* 3 Step Cards Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '20px',
                  marginBottom: '32px',
                }}
              >
                {/* Card 1: Blue */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '4px',
                    border: '1.5px solid #0077B6',
                    padding: '36px 20px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    minHeight: '180px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                  }}
                >
                  {/* Number Badge */}
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      backgroundColor: '#0077B6',
                      color: '#FFFFFF',
                      fontSize: '20px',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '2px',
                      marginBottom: '20px',
                    }}
                  >
                    1
                  </div>

                  <h3
                    style={{
                      fontSize: '12px',
                      fontWeight: 800,
                      color: '#0077B6',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                      marginTop: 0,
                      marginBottom: '10px',
                      lineHeight: 1.4,
                    }}
                  >
                    MENTORIAS SOB DEMANDA
                  </h3>
                  <p style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                    Acompanhamento individualizado com mentores qualificados do ecossistema para tirar dúvidas técnicas e mercadológicas.
                  </p>
                </div>

                {/* Card 2: Teal */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '4px',
                    border: '1.5px solid #00A8B5',
                    padding: '36px 20px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    minHeight: '180px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                  }}
                >
                  {/* Number Badge */}
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      backgroundColor: '#00A8B5',
                      color: '#FFFFFF',
                      fontSize: '20px',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '2px',
                      marginBottom: '20px',
                    }}
                  >
                    2
                  </div>

                  <h3
                    style={{
                      fontSize: '12px',
                      fontWeight: 800,
                      color: '#00A8B5',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                      marginTop: 0,
                      marginBottom: '10px',
                      lineHeight: 1.4,
                    }}
                  >
                    UTILIZAÇÃO DE IA NA CONSTRUÇÃO DE SUA PROPOSTA (EDIT.AI)
                  </h3>
                  <p style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                    Assistente inteligente que ajuda a refinar a redação, justificativa de inovação e formato exigido pelo edital.
                  </p>
                </div>

                {/* Card 3: Red/Orange */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '4px',
                    border: '1.5px solid #E05C5C',
                    padding: '36px 20px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    minHeight: '180px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                  }}
                >
                  {/* Number Badge */}
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      backgroundColor: '#E05C5C',
                      color: '#FFFFFF',
                      fontSize: '20px',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '2px',
                      marginBottom: '20px',
                    }}
                  >
                    3
                  </div>

                  <h3
                    style={{
                      fontSize: '12px',
                      fontWeight: 800,
                      color: '#E05C5C',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                      marginTop: 0,
                      marginBottom: '10px',
                      lineHeight: 1.4,
                    }}
                  >
                    AULAS 100% ONLINE PARA TODO O ESTADO
                  </h3>
                  <p style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                    Trilha de aprendizagem flexível com conteúdos práticos acessíveis para empreendedores de qualquer cidade de Pernambuco.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ───────────────────────────────────────────────────────────── */}
          {/* TAB 2: INSCRIÇÃO */}
          {/* ───────────────────────────────────────────────────────────── */}
          {activeTab === 'inscricao' && (
            <div>
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                  border: '1px solid #E2E8F0',
                  padding: '28px 32px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                }}
              >
                {/* Form Header */}
                <div style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: '16px', marginBottom: '24px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#00A8B5', textTransform: 'uppercase' }}>
                    Formulário Oficial
                  </span>
                  <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#0F2C59', marginTop: '4px', marginBottom: '6px' }}>
                    Inscrição na Trilha Caminhos – Centelha PE
                  </h2>
                  <p style={{ fontSize: '13px', color: '#64748B', margin: 0, lineHeight: 1.4 }}>
                    Preencha os dados da sua ideia/projeto para receber mentoria e suporte com a ferramenta EDIT.AI.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit}>
                  {/* Seção 1: Dados do Proponente */}
                  <div style={{ marginBottom: '28px' }}>
                    <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#0077B6', marginTop: 0, marginBottom: '16px' }}>
                      1. Informações do Proponente
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={e => setFullName(e.target.value)}
                          placeholder="Ex: Pedro Oliveira"
                          style={{
                            width: '100%',
                            padding: '10px 14px',
                            borderRadius: '4px',
                            border: '1px solid #CBD5E1',
                            fontSize: '13px',
                            outline: 'none',
                            boxSizing: 'border-box',
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                          E-mail Principal *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          placeholder="Ex: pedro@email.com"
                          style={{
                            width: '100%',
                            padding: '10px 14px',
                            borderRadius: '4px',
                            border: '1px solid #CBD5E1',
                            fontSize: '13px',
                            outline: 'none',
                            boxSizing: 'border-box',
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                          WhatsApp / Telefone
                        </label>
                        <input
                          type="text"
                          value={phone}
                          onChange={e => setPhone(e.target.value)}
                          placeholder="(81) 99999-9999"
                          style={{
                            width: '100%',
                            padding: '10px 14px',
                            borderRadius: '4px',
                            border: '1px solid #CBD5E1',
                            fontSize: '13px',
                            outline: 'none',
                            boxSizing: 'border-box',
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                          CPF
                        </label>
                        <input
                          type="text"
                          value={cpf}
                          onChange={e => setCpf(e.target.value)}
                          placeholder="000.000.000-00"
                          style={{
                            width: '100%',
                            padding: '10px 14px',
                            borderRadius: '4px',
                            border: '1px solid #CBD5E1',
                            fontSize: '13px',
                            outline: 'none',
                            boxSizing: 'border-box',
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                          Município em Pernambuco *
                        </label>
                        <select
                          value={city}
                          onChange={e => setCity(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '10px 14px',
                            borderRadius: '4px',
                            border: '1px solid #CBD5E1',
                            fontSize: '13px',
                            outline: 'none',
                            boxSizing: 'border-box',
                            backgroundColor: '#FFFFFF',
                          }}
                        >
                          <option value="Recife">Recife</option>
                          <option value="Olinda">Olinda</option>
                          <option value="Jaboatão dos Guararapes">Jaboatão dos Guararapes</option>
                          <option value="Caruaru">Caruaru</option>
                          <option value="Petrolina">Petrolina</option>
                          <option value="Garanhuns">Garanhuns</option>
                          <option value="Paulista">Paulista</option>
                          <option value="Outro município">Outro município em PE</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Seção 2: Dados da Ideia / Projeto */}
                  <div style={{ marginBottom: '28px' }}>
                    <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#0077B6', marginTop: 0, marginBottom: '16px' }}>
                      2. Dados da Proposta de Inovação
                    </h3>

                    <div style={{ marginBottom: '16px' }}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                        Título da Proposta / Projeto *
                      </label>
                      <input
                        type="text"
                        required
                        value={projectTitle}
                        onChange={e => setProjectTitle(e.target.value)}
                        placeholder="Ex: Plataforma IoT para Eficiência Energética na Indústria"
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '4px',
                          border: '1px solid #CBD5E1',
                          fontSize: '13px',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                        Setor de Aplicação Principal
                      </label>
                      <select
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '4px',
                          border: '1px solid #CBD5E1',
                          fontSize: '13px',
                          outline: 'none',
                          boxSizing: 'border-box',
                          backgroundColor: '#FFFFFF',
                        }}
                      >
                        <option value="Tecnologia da Informação & Comunicação (TIC)">Tecnologia da Informação & Comunicação (TIC)</option>
                        <option value="Biotecnologia & Saúde">Biotecnologia & Saúde</option>
                        <option value="Energia Limpa & ESG">Energia Limpa & ESG</option>
                        <option value="Agritech & Agronegócio">Agritech & Agronegócio</option>
                        <option value="Economia Criativa & EdTech">Economia Criativa & EdTech</option>
                        <option value="Cidades Inteligentes & GovTech">Cidades Inteligentes & GovTech</option>
                      </select>
                    </div>

                    {/* Resumo com IA Trigger */}
                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <label style={{ fontSize: '12px', fontWeight: 700, color: '#334155' }}>
                          Resumo da Solução Inovadora *
                        </label>
                        <button
                          type="button"
                          onClick={() => setIsAiModalOpen(true)}
                          style={{
                            padding: '4px 12px',
                            backgroundColor: '#00A8B5',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '4px',
                            fontSize: '11px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                          }}
                        >
                          ✨ Turbinar com EDIT.AI
                        </button>
                      </div>

                      <textarea
                        rows={5}
                        required
                        value={summary}
                        onChange={e => setSummary(e.target.value)}
                        placeholder="Descreva o problema identificado, como sua solução funciona e qual o diferencial de inovação frente ao mercado..."
                        style={{
                          width: '100%',
                          padding: '12px',
                          borderRadius: '4px',
                          border: '1px solid #CBD5E1',
                          fontSize: '13px',
                          outline: 'none',
                          resize: 'vertical',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                        Link da Apresentação / Pitch / Protótipo (Opcional)
                      </label>
                      <input
                        type="url"
                        value={pitchLink}
                        onChange={e => setPitchLink(e.target.value)}
                        placeholder="https://drive.google.com/... ou https://youtube.com/..."
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '4px',
                          border: '1px solid #CBD5E1',
                          fontSize: '13px',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  </div>

                  {/* Terms Checkbox */}
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '13px', color: '#475569' }}>
                      <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={e => setTermsAccepted(e.target.checked)}
                        style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                      />
                      <span>
                        Declaro que li e concordo com os critérios de participação e regras gerais do edital Centelha PE.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <button
                      type="submit"
                      style={{
                        backgroundColor: '#E05C5C',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '12px 32px',
                        fontSize: '14px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(224,92,92,0.3)',
                      }}
                    >
                      Enviar Inscrição
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab('inicio')}
                      style={{
                        backgroundColor: '#FFFFFF',
                        color: '#64748B',
                        border: '1px solid #CBD5E1',
                        borderRadius: '4px',
                        padding: '12px 24px',
                        fontSize: '13px',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ── Modal: Assistente EDIT.AI ── */}
      {isAiModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.55)',
            zIndex: 999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              maxWidth: '520px',
              width: '100%',
              padding: '28px',
              boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)',
              position: 'relative',
            }}
          >
            <button
              onClick={() => setIsAiModalOpen(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '20px',
                border: 'none',
                background: 'none',
                fontSize: '18px',
                cursor: 'pointer',
                color: '#64748B',
              }}
            >
              ✕
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{ fontSize: '24px' }}>✨</span>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F2C59', margin: 0 }}>
                  Assistente EDIT.AI – Centelha PE
                </h3>
                <span style={{ fontSize: '11px', color: '#00A8B5', fontWeight: 600 }}>Inteligência Artificial Integrada</span>
              </div>
            </div>

            <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5, marginBottom: '20px' }}>
              O EDIT.AI analisará o título <strong>"{projectTitle || 'Sua Proposta'}"</strong> no setor de <strong>{category}</strong> e gerará uma estrutura otimizada com argumentos claros de inovação e impacto.
            </p>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button
                type="button"
                onClick={() => setIsAiModalOpen(false)}
                style={{
                  padding: '10px 18px',
                  borderRadius: '4px',
                  border: '1px solid #CBD5E1',
                  backgroundColor: '#FFFFFF',
                  color: '#64748B',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Cancelar
              </button>
              <button
                type="button"
                disabled={isGeneratingAi}
                onClick={handleGenerateAiProposal}
                style={{
                  padding: '10px 22px',
                  borderRadius: '4px',
                  border: 'none',
                  backgroundColor: '#00A8B5',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: isGeneratingAi ? 'not-allowed' : 'pointer',
                }}
              >
                {isGeneratingAi ? 'Gerando proposta...' : 'Gerar Texto com IA'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Modal: Central de Ajuda ── */}
      {isHelpModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.55)',
            zIndex: 999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              maxWidth: '480px',
              width: '100%',
              padding: '28px',
              boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)',
              position: 'relative',
            }}
          >
            <button
              onClick={() => setIsHelpModalOpen(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '20px',
                border: 'none',
                background: 'none',
                fontSize: '18px',
                cursor: 'pointer',
                color: '#64748B',
              }}
            >
              ✕
            </button>

            <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F2C59', marginTop: 0, marginBottom: '12px' }}>
              Central de Ajuda – Trilha Caminhos
            </h3>
            <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5, marginBottom: '20px' }}>
              Precisa de ajuda para submeter seu projeto ao Edital Centelha PE? Entre em contato com nossa equipe de suporte ou agende uma mentoria.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              <div style={{ padding: '12px', backgroundColor: '#F8FAFC', borderRadius: '4px', borderLeft: '3px solid #0077B6' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#0077B6' }}>E-mail de Suporte</div>
                <div style={{ fontSize: '13px', color: '#1A202C' }}>suporte.caminhos@coreto.pe.gov.br</div>
              </div>
              <div style={{ padding: '12px', backgroundColor: '#F8FAFC', borderRadius: '4px', borderLeft: '3px solid #00A8B5' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#00A8B5' }}>Atendimento WhatsApp</div>
                <div style={{ fontSize: '13px', color: '#1A202C' }}>(81) 98100-2025</div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsHelpModalOpen(false)
                showToast('Solicitação de contato registrada!')
              }}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#0077B6',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 700,
                fontSize: '13px',
                cursor: 'pointer',
              }}
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* ── Modal: Inscrição Trilha Caminhos Pop-up ── */}
      {isInscricaoModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.55)',
            backdropFilter: 'blur(2px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '10px',
              maxWidth: '820px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '36px 40px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              position: 'relative',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {/* Close button X */}
            <button
              onClick={() => setIsInscricaoModalOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '24px',
                border: 'none',
                background: 'none',
                fontSize: '22px',
                fontWeight: 700,
                cursor: 'pointer',
                color: '#64748B',
              }}
            >
              ✕
            </button>

            {/* Modal Header */}
            <div style={{ marginBottom: '28px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0F2C59', marginTop: 0, marginBottom: '6px' }}>
                Inscrição Trilha Caminhos
              </h2>
              <p style={{ fontSize: '13px', color: '#64748B', margin: 0, lineHeight: 1.4 }}>
                Queremos saber mais sobre você! Quanto mais completas as informações, melhor!
              </p>
            </div>

            <form
              onSubmit={e => {
                e.preventDefault()
                setIsInscricaoModalOpen(false)
                showToast('🚀 Sua inscrição na Trilha Caminhos foi realizada com sucesso!')
              }}
            >
              {/* ── SEÇÃO 1: 1. Perfil Talento ── */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#0F2C59', marginTop: 0, marginBottom: '18px' }}>
                  1. Perfil Talento
                </h3>

                {/* Nome */}
                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1A202C', marginBottom: '6px' }}>
                    Nome
                  </label>
                  <input
                    type="text"
                    required
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    placeholder="Digite como você prefere ser chamado"
                    style={popupInputStyle}
                  />
                </div>

                {/* CPF */}
                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1A202C', marginBottom: '6px' }}>
                    CPF
                  </label>
                  <input
                    type="text"
                    required
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    placeholder="000.000.000-00"
                    style={popupInputStyle}
                  />
                </div>

                {/* Gênero */}
                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1A202C', marginBottom: '6px' }}>
                    Gênero
                  </label>
                  <select value={genero} onChange={e => setGenero(e.target.value)} style={popupSelectStyle}>
                    <option value="">Gênero</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Não-binário">Não-binário</option>
                    <option value="Prefiro não informar">Prefiro não informar</option>
                  </select>
                </div>

                {/* Data de Nascimento */}
                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1A202C', marginBottom: '6px' }}>
                    Data de Nascimento
                  </label>
                  <input
                    type="text"
                    value={dataNascimento}
                    onChange={e => setDataNascimento(e.target.value)}
                    placeholder="11/08/2026"
                    style={popupInputStyle}
                  />
                </div>

                {/* Etnia */}
                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1A202C', marginBottom: '6px' }}>
                    Etnia
                  </label>
                  <select value={etnia} onChange={e => setEtnia(e.target.value)} style={popupSelectStyle}>
                    <option value="">Identificação étnica</option>
                    <option value="Amarela">Amarela</option>
                    <option value="Branca">Branca</option>
                    <option value="Indígena">Indígena</option>
                    <option value="Parda">Parda</option>
                    <option value="Preta">Preta</option>
                    <option value="Prefiro não declarar">Prefiro não declarar</option>
                  </select>
                </div>

                {/* De onde você é? */}
                <div style={{ marginTop: '24px', marginBottom: '18px' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#1A202C', marginTop: 0, marginBottom: '16px' }}>
                    De onde você é?
                  </h4>

                  {/* Estado */}
                  <div style={{ marginBottom: '18px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1A202C', marginBottom: '6px' }}>
                      Estado
                    </label>
                    <select value={estado} onChange={e => setEstado(e.target.value)} style={popupSelectStyle}>
                      <option value="">Estado</option>
                      <option value="Pernambuco">Pernambuco</option>
                      <option value="Alagoas">Alagoas</option>
                      <option value="Bahia">Bahia</option>
                      <option value="Ceará">Ceará</option>
                      <option value="Paraíba">Paraíba</option>
                      <option value="Outros">Outros</option>
                    </select>
                  </div>

                  {/* Cidade */}
                  <div style={{ marginBottom: '18px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1A202C', marginBottom: '6px' }}>
                      Cidade
                    </label>
                    <input
                      type="text"
                      value={cidade}
                      onChange={e => setCidade(e.target.value)}
                      placeholder="Cidade"
                      style={popupInputStyle}
                    />
                  </div>
                </div>

                {/* Telefone de Contato */}
                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1A202C', marginBottom: '6px' }}>
                    Telefone de Contato
                  </label>
                  <input
                    type="text"
                    value={telefone}
                    onChange={e => setTelefone(e.target.value)}
                    placeholder="(81) 99999-9999"
                    style={popupInputStyle}
                  />
                </div>

                {/* E-mail de Contato */}
                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1A202C', marginBottom: '6px' }}>
                    E-mail de Contato
                  </label>
                  <input
                    type="email"
                    value={emailContato}
                    onChange={e => setEmailContato(e.target.value)}
                    placeholder="nome@email.com.br"
                    style={popupInputStyle}
                  />
                </div>
              </div>

              {/* ── SEÇÃO 2: Dados profissionais ── */}
              <div style={{ marginBottom: '32px', borderTop: '1px solid #E2E8F0', paddingTop: '24px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#0F2C59', marginTop: 0, marginBottom: '18px' }}>
                  Dados profissionais
                </h3>

                {/* Escolaridade */}
                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1A202C', marginBottom: '6px' }}>
                    Escolaridade
                  </label>
                  <select value={escolaridade} onChange={e => setEscolaridade(e.target.value)} style={popupSelectStyle}>
                    <option value="">Escolaridade</option>
                    <option value="Ensino Médio">Ensino Médio</option>
                    <option value="Técnico">Técnico</option>
                    <option value="Graduação em andamento">Graduação em andamento</option>
                    <option value="Graduação completa">Graduação completa</option>
                    <option value="Pós-graduação / Mestrado / Doutorado">Pós-graduação / Mestrado / Doutorado</option>
                  </select>
                </div>

                {/* Instituição */}
                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1A202C', marginBottom: '6px' }}>
                    Instituição
                  </label>
                  <input
                    type="text"
                    value={instituicao}
                    onChange={e => setInstituicao(e.target.value)}
                    placeholder="Instituição de ensino"
                    style={popupInputStyle}
                  />
                </div>

                {/* LinkedIn */}
                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1A202C', marginBottom: '6px' }}>
                    LinkedIn
                  </label>
                  <input
                    type="url"
                    value={linkedin}
                    onChange={e => setLinkedin(e.target.value)}
                    placeholder="https://www.linkedin.com/company/suastartup"
                    style={popupInputStyle}
                  />
                </div>

                {/* Lattes */}
                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1A202C', marginBottom: '6px' }}>
                    Lattes
                  </label>
                  <input
                    type="url"
                    value={lattes}
                    onChange={e => setLattes(e.target.value)}
                    placeholder="https://www.suastartup.com.br"
                    style={popupInputStyle}
                  />
                </div>

                {/* Atuação Profissional */}
                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1A202C', marginBottom: '6px' }}>
                    Atuação Profissional
                  </label>
                  <textarea
                    rows={4}
                    value={atuacaoProfissional}
                    onChange={e => setAtuacaoProfissional(e.target.value)}
                    placeholder="Descreva detalhadamente sobre sua atuação profissional."
                    style={popupTextareaStyle}
                  />
                </div>

                {/* Links Externos */}
                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1A202C', marginBottom: '6px' }}>
                    Links Externos
                  </label>
                  <textarea
                    rows={3}
                    value={linksExternos}
                    onChange={e => setLinksExternos(e.target.value)}
                    placeholder="Links Externos"
                    style={popupTextareaStyle}
                  />
                </div>

                {/* O que eu busco? */}
                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1A202C', marginBottom: '6px' }}>
                    O que eu busco?
                  </label>
                  <input
                    type="text"
                    value={oQueBusco}
                    onChange={e => setOQueBusco(e.target.value)}
                    placeholder="Selecione as palavras-chave de interesse"
                    style={popupInputStyle}
                  />
                </div>

                {/* Assuntos que me definem */}
                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1A202C', marginBottom: '6px' }}>
                    Assuntos que me definem
                  </label>
                  <input
                    type="text"
                    value={assuntosMeDefinem}
                    onChange={e => setAssuntosMeDefinem(e.target.value)}
                    placeholder="Selecione as palavras-chave de interesse"
                    style={popupInputStyle}
                  />
                </div>
              </div>

              {/* Modal Submit Actions */}
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-start', paddingTop: '12px' }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#E05C5C',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '12px 32px',
                    fontSize: '14px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(224,92,92,0.3)',
                  }}
                >
                  Salvar e enviar inscrição
                </button>
                <button
                  type="button"
                  onClick={() => setIsInscricaoModalOpen(false)}
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#64748B',
                    border: '1px solid #CBD5E1',
                    borderRadius: '4px',
                    padding: '12px 24px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Helper Styles para o Popup Modal ──
const popupInputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '6px',
  border: '1px solid #38BDF8',
  fontSize: '13px',
  color: '#1A202C',
  outline: 'none',
  boxSizing: 'border-box',
  backgroundColor: '#FFFFFF',
}

const popupSelectStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '6px',
  border: '1px solid #E2E8F0',
  fontSize: '13px',
  color: '#64748B',
  outline: 'none',
  boxSizing: 'border-box',
  backgroundColor: '#FFFFFF',
}

const popupTextareaStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '6px',
  border: '1px solid #38BDF8',
  fontSize: '13px',
  color: '#1A202C',
  outline: 'none',
  resize: 'vertical',
  boxSizing: 'border-box',
  backgroundColor: '#FFFFFF',
}

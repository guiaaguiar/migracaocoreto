import { useState } from 'react'
import { Link } from 'react-router-dom'

import logoCoreto from '../../../assets/logo-coreto.png'
import logoAbdi from '../../../assets/logo-abdi.png'
import logoEmprel from '../../../assets/logo-emprel.png'
import bannerEitaTrilha from '../../../assets/banner-eita-trilha.png'

export default function TrilhaEitaPage() {
  const [activeTab, setActiveTab] = useState<'inicio' | 'inscricao'>('inicio')
  
  // Section toggle state
  const [openSection, setOpenSection] = useState<number | null>(1)
  const [openSubSection1, setOpenSubSection1] = useState<string | null>('1.1')
  const [openSubSection4, setOpenSubSection4] = useState<string | null>('4.1')
  const [openSubSection5, setOpenSubSection5] = useState<string | null>('5.1')
  
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [showModifiedNotice, setShowModifiedNotice] = useState<boolean>(true)
  const [columns, setColumns] = useState<string[]>([])

  // Rich text fields state
  const [fieldData, setFieldData] = useState<Record<string, string>>({
    '1.1': '',
    '1.2': '',
    '1.3': '',
    '2': '',
    '3': '',
    '4.1': '',
    '4.2': '',
    '4.3': '',
    '5.1': '',
    '5.2': '',
    '5.3': '',
    '6': '',
    '7': '',
  })

  // File upload state
  const [fileUploads, setFileUploads] = useState<Record<string, string>>({})

  const handleTextChange = (key: string, value: string) => {
    setFieldData(prev => ({ ...prev, [key]: value }))
    setShowModifiedNotice(true)
  }

  const handleFileUpload = (key: string, fileName: string) => {
    setFileUploads(prev => ({ ...prev, [key]: fileName }))
    setShowModifiedNotice(true)
  }

  const handleSubmeterSolucao = () => {
    setIsSubmitted(true)
    setShowModifiedNotice(false)
  }

  const handleAddColumn = () => {
    const colName = prompt('Digite o nome da nova coluna:')
    if (colName && colName.trim() !== '') {
      setColumns(prev => [...prev, colName.trim()])
    }
  }

  const toggleSection = (id: number) => {
    setOpenSection(openSection === id ? null : id)
  }

  const toggleSubSection1 = (id: string) => {
    setOpenSubSection1(openSubSection1 === id ? null : id)
  }

  const toggleSubSection4 = (id: string) => {
    setOpenSubSection4(openSubSection4 === id ? null : id)
  }

  const toggleSubSection5 = (id: string) => {
    setOpenSubSection5(openSubSection5 === id ? null : id)
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8FAFC', color: '#1E293B', fontFamily: "'Inter', 'Segoe UI', sans-serif", display: 'flex', flexDirection: 'column' }}>
      
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
        <main style={{ flex: 1, padding: '32px 40px', backgroundColor: '#F8FAFC', maxWidth: '1150px' }}>
          
          {/* ── View 1: Main Banner & Overview ── */}
          {activeTab === 'inicio' && (
            <div>
              {/* Banner Container */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                  overflow: 'hidden',
                  marginBottom: '24px',
                }}
              >
                <img
                  src={bannerEitaTrilha}
                  alt="3º Ciclo de Inovação Aberta e.i.t.a! Recife Banner"
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '420px', objectFit: 'cover' }}
                />
              </div>

              {/* Content Card below Banner */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  padding: '32px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                }}
              >
                <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#0F172A', margin: '0 0 20px 0', letterSpacing: '-0.3px' }}>
                  Lorem ipsum...
                </h1>

                {/* Added Columns if any */}
                {columns.length > 0 && (
                  <div style={{ marginBottom: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {columns.map((col, idx) => (
                      <div
                        key={idx}
                        style={{
                          backgroundColor: '#F1F5F9',
                          border: '1px solid #CBD5E1',
                          padding: '6px 14px',
                          borderRadius: '6px',
                          fontSize: '13px',
                          fontWeight: 600,
                          color: '#334155',
                        }}
                      >
                        {col}
                      </div>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <button
                    onClick={handleAddColumn}
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: '#ea580c',
                      border: '2px solid #ea580c',
                      borderRadius: '8px',
                      padding: '12px 24px',
                      fontSize: '15px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = '#fff7ed'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = '#FFFFFF'
                    }}
                  >
                    adicionar coluna
                  </button>

                  <button
                    onClick={() => setActiveTab('inscricao')}
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: '#ea580c',
                      border: '2px solid #ea580c',
                      borderRadius: '8px',
                      padding: '12px 24px',
                      fontSize: '15px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = '#ea580c'
                      e.currentTarget.style.color = '#FFFFFF'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = '#FFFFFF'
                      e.currentTarget.style.color = '#ea580c'
                    }}
                  >
                    Inscreva-se na segunda fase
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ── View 2: Inscrição / Proposal Submission Form ── */}
          {activeTab === 'inscricao' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Back to main overview tab */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                  onClick={() => setActiveTab('inicio')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#00a8b5',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: 0,
                  }}
                >
                  ← Voltar para a apresentação da trilha
                </button>
              </div>

              {/* Red-Bordered INSCRIÇÃO Container */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                  border: '1px solid #ef4444',
                  padding: '32px',
                  position: 'relative',
                  boxShadow: '0 2px 8px rgba(239, 68, 68, 0.08)',
                }}
              >
                {/* Header Title & Status Badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <h2
                    style={{
                      fontSize: '32px',
                      fontWeight: 800,
                      color: '#ea580c',
                      margin: 0,
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                    }}
                  >
                    INSCRIÇÃO
                  </h2>
                  <span
                    style={{
                      backgroundColor: isSubmitted ? '#16a34a' : '#ea580c',
                      color: '#ffffff',
                      padding: '4px 12px',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: 600,
                    }}
                  >
                    {isSubmitted ? 'Finalizada' : 'Não finalizada'}
                  </span>
                </div>

                {/* Yellow Warning Notice */}
                <div
                  style={{
                    backgroundColor: '#ffff00',
                    border: '1px solid #eab308',
                    borderRadius: '6px',
                    padding: '16px 20px',
                    marginBottom: '28px',
                    textAlign: 'center',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#000000',
                    lineHeight: 1.5,
                  }}
                >
                  Atenção! Todas as alterações feitas sobrescrevem a versão atual <span style={{ textDecoration: 'underline' }}>AUTOMATICAMENTE</span>. Para finalizar seu envio, clique em <em>"submeter solução"</em>.
                </div>

                {/* 7 Numbered Accordion Items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  
                  {/* ── 1. Apresentação do Protótipo ── */}
                  <AccordionItem
                    number={1}
                    title="Apresentação do Protótipo"
                    isOpen={openSection === 1}
                    onToggle={() => toggleSection(1)}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '12px' }}>
                      <p style={{ fontSize: '15px', lineHeight: 1.6, fontWeight: 700, color: '#0F172A', margin: 0 }}>
                        Apresente um resumo do protótipo (funcional ou não), destacando as principais funcionalidades e interface. Mostre telas, navegação, figma, ou qualquer outro artefato que deixe claro como a solução funciona e que a banca julgadora entenda essa solução.
                      </p>
                      
                      <p style={{ fontSize: '15px', lineHeight: 1.6, fontWeight: 700, color: '#0F172A', margin: 0 }}>
                        O protótipo tem que ser apresentado pensando na visão de futuro da solução. Ou seja, solução completa. Porém, é necessário destacar o recorte que vai ser dado para o MVP e como será essa experimentação.
                      </p>

                      <p style={{ fontSize: '15px', lineHeight: 1.6, fontWeight: 700, color: '#0F172A', margin: '8px 0 0 0' }}>
                        A seguir, tem as seções para a apresentação desse protótipo:
                      </p>

                      {/* Subsections 1.1, 1.2, 1.3 */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
                        
                        {/* 1.1. Protótipo Completo */}
                        <SubAccordionItem
                          code="1.1"
                          title="Protótipo Completo (visão de futuro da solução)"
                          isOpen={openSubSection1 === '1.1'}
                          onToggle={() => toggleSubSection1('1.1')}
                        >
                          <RichTextEditorWithUpload
                            fieldKey="1.1"
                            value={fieldData['1.1']}
                            onChange={val => handleTextChange('1.1', val)}
                            uploadedFile={fileUploads['1.1']}
                            onFileUpload={file => handleFileUpload('1.1', file)}
                          />
                        </SubAccordionItem>

                        {/* 1.2. MVP */}
                        <SubAccordionItem
                          code="1.2"
                          title="MVP"
                          isOpen={openSubSection1 === '1.2'}
                          onToggle={() => toggleSubSection1('1.2')}
                        >
                          <RichTextEditorWithUpload
                            fieldKey="1.2"
                            value={fieldData['1.2']}
                            onChange={val => handleTextChange('1.2', val)}
                            uploadedFile={fileUploads['1.2']}
                            onFileUpload={file => handleFileUpload('1.2', file)}
                          />
                        </SubAccordionItem>

                        {/* 1.3. Experimentação do MVP */}
                        <SubAccordionItem
                          code="1.3"
                          title="Experimentação do MVP"
                          isOpen={openSubSection1 === '1.3'}
                          onToggle={() => toggleSubSection1('1.3')}
                        >
                          <RichTextEditorWithUpload
                            fieldKey="1.3"
                            value={fieldData['1.3']}
                            onChange={val => handleTextChange('1.3', val)}
                            uploadedFile={fileUploads['1.3']}
                            onFileUpload={file => handleFileUpload('1.3', file)}
                          />
                        </SubAccordionItem>

                      </div>
                    </div>
                  </AccordionItem>

                  {/* ── 2. Alinhamento com os critérios de aceite ── */}
                  <AccordionItem
                    number={2}
                    title="Alinhamento com os critérios de aceite"
                    isOpen={openSection === 2}
                    onToggle={() => toggleSection(2)}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '12px' }}>
                      <p style={{ fontSize: '15px', lineHeight: 1.6, fontWeight: 700, color: '#0F172A', margin: 0 }}>
                        Descreva como o protótipo proposto atende aos critérios de aceite estabelecidos no desafio público selecionado. Explique de forma objetiva como a solução irá garantir:
                      </p>

                      <p style={{ fontSize: '15px', lineHeight: 1.6, fontWeight: 700, color: '#0F172A', margin: 0 }}>
                        Recomendação: destaque cada critério de aceite e mostre como a sua solução está atendendo esse critério, de forma clara e objetiva.
                      </p>

                      <RichTextEditorWithUpload
                        fieldKey="2"
                        value={fieldData['2']}
                        onChange={val => handleTextChange('2', val)}
                        uploadedFile={fileUploads['2']}
                        onFileUpload={file => handleFileUpload('2', file)}
                      />
                    </div>
                  </AccordionItem>

                  {/* ── 3. Arquitetura da Solução Tecnológica ── */}
                  <AccordionItem
                    number={3}
                    title="Arquitetura da Solução Tecnológica"
                    isOpen={openSection === 3}
                    onToggle={() => toggleSection(3)}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '12px' }}>
                      <p style={{ fontSize: '15px', lineHeight: 1.6, fontWeight: 700, color: '#0F172A', margin: 0 }}>
                        Descreva de forma detalhada a arquitetura da solução, indicando os seguintes elementos:
                      </p>

                      <ul style={{ fontSize: '15px', lineHeight: 1.8, fontWeight: 700, color: '#0F172A', margin: 0, paddingLeft: '20px' }}>
                        <li>Front-end: framework ou linguagem utilizada, navegadores e dispositivos compatíveis</li>
                        <li>Back-end: linguagens, frameworks e infraestrutura de hospedagem</li>
                        <li>Banco de dados: tipo de banco, estrutura, segurança</li>
                        <li>Integrações: APIs, webservices, serviços externos e internos, nuvem</li>
                        <li>Segurança: autenticação, LGPD, criptografia de dados</li>
                      </ul>

                      <p style={{ fontSize: '15px', lineHeight: 1.6, fontWeight: 700, color: '#0F172A', margin: '8px 0 0 0' }}>
                        Importante destacar na arquitetura todos os componentes externos que serão utilizados na solução.
                      </p>

                      <RichTextEditorWithUpload
                        fieldKey="3"
                        value={fieldData['3']}
                        onChange={val => handleTextChange('3', val)}
                        uploadedFile={fileUploads['3']}
                        onFileUpload={file => handleFileUpload('3', file)}
                      />
                    </div>
                  </AccordionItem>

                  {/* ── 4. Planejamento do MVP e da Aceleração ── */}
                  <AccordionItem
                    number={4}
                    title="Planejamento do MVP e da Aceleração"
                    isOpen={openSection === 4}
                    onToggle={() => toggleSection(4)}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '12px' }}>
                      
                      {/* Sub-item 4.1 MVP */}
                      <SubAccordionItem
                        code="4.1"
                        title="MVP"
                        isOpen={openSubSection4 === '4.1'}
                        onToggle={() => toggleSubSection4('4.1')}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '8px' }}>
                          <p style={{ fontSize: '15px', lineHeight: 1.6, fontWeight: 700, color: '#0F172A', margin: 0 }}>
                            Organize o planejamento do MVP em ciclos quinzenais (sprints), apresentando as entregas previstas, equipe envolvida e custos estimados.
                          </p>
                          <p style={{ fontSize: '15px', lineHeight: 1.6, fontWeight: 700, color: '#0F172A', margin: 0 }}>
                            OBS: É importante colocar nas linhas da tabela o custo estimado, horas de trabalho e quantidade de pessoas por entregável e não por sprint.
                          </p>

                          <a
                            href="#"
                            onClick={e => {
                              e.preventDefault()
                              alert('Download do modelo de resposta iniciado!')
                            }}
                            style={{
                              fontSize: '14px',
                              fontWeight: 700,
                              color: '#0F172A',
                              textDecoration: 'underline',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                            }}
                          >
                            <span>⬇</span> Baixar o modelo de resposta deste critério
                          </a>

                          <DottedFileUploadBox
                            uploadedFile={fileUploads['4.1']}
                            onFileUpload={file => handleFileUpload('4.1', file)}
                          />
                        </div>
                      </SubAccordionItem>

                      {/* Sub-item 4.2 Aceleração */}
                      <SubAccordionItem
                        code="4.2"
                        title="Aceleração"
                        isOpen={openSubSection4 === '4.2'}
                        onToggle={() => toggleSubSection4('4.2')}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '8px' }}>
                          <p style={{ fontSize: '15px', lineHeight: 1.6, fontWeight: 700, color: '#0F172A', margin: 0 }}>
                            Organize o planejamento da aceleração em ciclos quinzenais (sprints), apresentando as entregas previstas, equipe envolvida e custos estimados.
                          </p>
                          <p style={{ fontSize: '15px', lineHeight: 1.6, fontWeight: 700, color: '#0F172A', margin: 0 }}>
                            OBS.1: A aceleração deve ser prevista para um máximo de 12 meses.
                          </p>
                          <p style={{ fontSize: '15px', lineHeight: 1.6, fontWeight: 700, color: '#0F172A', margin: 0 }}>
                            OBS.2: É importante colocar nas linhas da tabela o custo estimado, horas de trabalho e quantidade de pessoas por entregável e não por sprint.
                          </p>

                          <a
                            href="#"
                            onClick={e => {
                              e.preventDefault()
                              alert('Download do modelo de resposta iniciado!')
                            }}
                            style={{
                              fontSize: '14px',
                              fontWeight: 700,
                              color: '#0F172A',
                              textDecoration: 'underline',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                            }}
                          >
                            <span>⬇</span> Baixar o modelo de resposta deste critério
                          </a>

                          <DottedFileUploadBox
                            uploadedFile={fileUploads['4.2']}
                            onFileUpload={file => handleFileUpload('4.2', file)}
                          />
                        </div>
                      </SubAccordionItem>

                      {/* Sub-item 4.3 Custos de Infraestrutura (with cyan background option) */}
                      <SubAccordionItem
                        code="4.3"
                        title="Custos de Infraestrutura"
                        isCyan={true}
                        isOpen={openSubSection4 === '4.3'}
                        onToggle={() => toggleSubSection4('4.3')}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '8px' }}>
                          <p style={{ fontSize: '15px', lineHeight: 1.6, fontWeight: 700, color: '#0F172A', margin: 0 }}>
                            Listar todos os custos de infraestrutura que podem impactar no projeto, tais como: agentes de IA, nuvem, IOT, algum mobiliário urbano, entre outros itens. Esses itens normalmente transpassam as sprints e devem ser custeados durante todo o projeto, por isso colocamos de forma destacada.
                          </p>

                          <p style={{ fontSize: '15px', lineHeight: 1.6, fontWeight: 700, color: '#0F172A', margin: 0 }}>
                            OBS.1: o EITA! Recife acelera produtos e não startups. Por isso não é permitido colocar itens como: compra de notebooks para a equipe, aluguel de salas, contratação de equipe jurídicas, entre outras coisas.
                          </p>

                          <p style={{ fontSize: '15px', lineHeight: 1.6, fontWeight: 700, color: '#0F172A', margin: 0 }}>
                            OBS.2: Todo o nosso programa é baseado na modalidade de preço fixo do marco legal das startups. No caso do MVP e aceleração, serão sempre preços de custo. Então, tudo que é colocado na tabela deverá ser comprovado como preço de custo ao jurídico da EMPREL.
                          </p>

                          <p style={{ fontSize: '15px', lineHeight: 1.6, fontWeight: 700, color: '#0F172A', margin: 0 }}>
                            OBS.3: Funcionalidades já existentes numa possível solução não podem ser cobradas como custo de desenvolvimento. Essas funcionalidades pré-existentes não entram no modelo de co-propriedade, porém também não podem ser inseridas nas tabelas acima como custo de desenvolvimento.
                          </p>

                          <RichTextEditorWithUpload
                            fieldKey="4.3"
                            value={fieldData['4.3']}
                            onChange={val => handleTextChange('4.3', val)}
                            uploadedFile={fileUploads['4.3']}
                            onFileUpload={file => handleFileUpload('4.3', file)}
                          />
                        </div>
                      </SubAccordionItem>

                    </div>
                  </AccordionItem>

                  {/* ── 5. Viabilidade Econômica e Escalabilidade na cidade ── */}
                  <AccordionItem
                    number={5}
                    title="Viabilidade Econômica e Escalabilidade na cidade"
                    isCyan={true}
                    isOpen={openSection === 5}
                    onToggle={() => toggleSection(5)}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '12px' }}>
                      
                      {/* Sub-item 5.1 Viabilidade Econômica */}
                      <SubAccordionItem
                        code="5.1"
                        title="Viabilidade Econômica"
                        isOpen={openSubSection5 === '5.1'}
                        onToggle={() => toggleSubSection5('5.1')}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '8px' }}>
                          <p style={{ fontSize: '15px', lineHeight: 1.6, fontWeight: 700, color: '#0F172A', margin: 0 }}>
                            Apresente os aspectos da sua solução que mostrem a viabilidade econômica. Inclua análise de custo-benefício, sustentabilidade financeira e compatibilidade com o orçamento previsto para o projeto, ou seja: até 50 mil reais para o MVP e até 1,55 milhão para aceleração.
                          </p>

                          <RichTextEditorWithUpload
                            fieldKey="5.1"
                            value={fieldData['5.1']}
                            onChange={val => handleTextChange('5.1', val)}
                            uploadedFile={fileUploads['5.1']}
                            onFileUpload={file => handleFileUpload('5.1', file)}
                          />
                        </div>
                      </SubAccordionItem>

                      {/* Sub-item 5.2 Escalabilidade (Cyan Pill) */}
                      <SubAccordionItem
                        code="5.2"
                        title="Escalabilidade"
                        isCyan={true}
                        isOpen={openSubSection5 === '5.2'}
                        onToggle={() => toggleSubSection5('5.2')}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '8px' }}>
                          <p style={{ fontSize: '15px', lineHeight: 1.6, fontWeight: 700, color: '#0F172A', margin: 0 }}>
                            Explique como a solução poderá ser replicada em outros contextos urbanos da cidade do Recife. Indique os aspectos técnicos e operacionais que favorecem essa escalabilidade.
                          </p>

                          <RichTextEditorWithUpload
                            fieldKey="5.2"
                            value={fieldData['5.2']}
                            onChange={val => handleTextChange('5.2', val)}
                            uploadedFile={fileUploads['5.2']}
                            onFileUpload={file => handleFileUpload('5.2', file)}
                          />
                        </div>
                      </SubAccordionItem>

                      {/* Sub-item 5.3 Resumo dos custos totais do projeto */}
                      <SubAccordionItem
                        code="5.3"
                        title="Resumo dos custos totais do projeto"
                        isOpen={openSubSection5 === '5.3'}
                        onToggle={() => toggleSubSection5('5.3')}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '8px' }}>
                          <div style={{ backgroundColor: '#F8FAFC', padding: '16px 20px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: '15px', color: '#0F172A', marginBottom: '12px' }}>
                              <span>Descrição</span>
                              <span>Valor Estimado</span>
                            </div>
                            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', fontWeight: 700, color: '#0F172A', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                              <li>Custo para desenvolvimento do MVP</li>
                              <li>Custo estimado do Produto Final (Aceleração)</li>
                              <li>Custos adicionais esperados (licenças, APIs, infraestrutura, etc.)</li>
                            </ul>
                          </div>

                          <RichTextEditorWithUpload
                            fieldKey="5.3"
                            value={fieldData['5.3']}
                            onChange={val => handleTextChange('5.3', val)}
                            uploadedFile={fileUploads['5.3']}
                            onFileUpload={file => handleFileUpload('5.3', file)}
                          />
                        </div>
                      </SubAccordionItem>

                    </div>
                  </AccordionItem>

                  {/* ── 6. Premissas da Solução e Recursos necessários ── */}
                  <AccordionItem
                    number={6}
                    title="Premissas da Solução e Recursos necessários"
                    isCyan={true}
                    isOpen={openSection === 6}
                    onToggle={() => toggleSection(6)}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '12px' }}>
                      <p style={{ fontSize: '15px', lineHeight: 1.6, fontWeight: 700, color: '#0F172A', margin: 0 }}>
                        Informe os dados, sistemas ou acessos necessários para o desenvolvimento da solução (MVP e Aceleração), bem como eventuais dependências externas, parcerias, ou validações obrigatórias.
                      </p>

                      <RichTextEditorWithUpload
                        fieldKey="6"
                        value={fieldData['6']}
                        onChange={val => handleTextChange('6', val)}
                        uploadedFile={fileUploads['6']}
                        onFileUpload={file => handleFileUpload('6', file)}
                      />
                    </div>
                  </AccordionItem>

                  {/* ── 7. Pitch ── */}
                  <AccordionItem
                    number={7}
                    title="Pitch"
                    isOpen={openSection === 7}
                    onToggle={() => toggleSection(7)}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '12px' }}>
                      <p style={{ fontSize: '15px', lineHeight: 1.6, fontWeight: 700, color: '#0F172A', margin: 0 }}>
                        Submeta o pitch da proposta abaixo:
                      </p>

                      <DottedFileUploadBox
                        uploadedFile={fileUploads['7']}
                        onFileUpload={file => handleFileUpload('7', file)}
                      />
                    </div>
                  </AccordionItem>

                </div>

              </div>

              {/* Bottom Red Warning Button */}
              {showModifiedNotice && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
                  <button
                    onClick={handleSubmeterSolucao}
                    style={{
                      backgroundColor: '#e60000',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '14px 28px',
                      fontSize: '16px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(230, 0, 0, 0.3)',
                      transition: 'transform 0.1s ease, background-color 0.2s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#cc0000')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#e60000')}
                  >
                    Você alterou conteúdo da proposta. Reenvie para confirmar!
                  </button>
                </div>
              )}

              {isSubmitted && !showModifiedNotice && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
                  <div
                    style={{
                      backgroundColor: '#16a34a',
                      color: '#FFFFFF',
                      borderRadius: '8px',
                      padding: '14px 28px',
                      fontSize: '15px',
                      fontWeight: 700,
                      boxShadow: '0 4px 12px rgba(22, 163, 74, 0.2)',
                    }}
                  >
                    ✓ Proposta e solução submetidas com sucesso!
                  </div>
                </div>
              )}

            </div>
          )}

        </main>
      </div>
    </div>
  )
}

// ── Sub-components ──

function SidebarItem({ icon, label, color }: { icon: string; label: string; color: string }) {
  const getIcon = () => {
    switch (icon) {
      case 'opportunity':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <path d="M8.59 13.51l6.83 3.98M15.41 6.51L8.59 10.49" strokeLinecap="round" />
          </svg>
        )
      case 'solution':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072m-2.828 9.9a9 9 0 010-12.728" />
          </svg>
        )
      case 'benefits':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
            <circle cx="12" cy="12" r="4" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-20 12 12)" />
          </svg>
        )
      case 'panel':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        )
      case 'help':
        return (
          <span style={{ color, fontWeight: 800, fontSize: '16px', width: '18px', textAlign: 'center' }}>?</span>
        )
      case 'exit':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        )
      default:
        return null
    }
  }

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
      {getIcon()}
      <span>{label}</span>
    </a>
  )
}

function AccordionItem({
  number,
  title,
  isOpen,
  onToggle,
  children,
}: {
  number: number
  title: string
  isOpen: boolean
  isCyan?: boolean
  onToggle: () => void
  children: React.ReactNode
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      style={{
        borderRadius: '6px',
        border: isOpen ? '1px dashed #94a3b8' : '1px solid #E2E8F0',
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={onToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: '100%',
          padding: '16px 20px',
          backgroundColor: isHovered ? '#80deea' : '#FFFFFF',
          border: 'none',
          textAlign: 'left',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          outline: 'none',
          transition: 'background-color 0.2s ease',
        }}
      >
        <span
          style={{
            fontSize: '18px',
            fontWeight: 700,
            color: '#003B6D',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          {number}. {title}
        </span>
        <span
          style={{
            fontSize: '18px',
            fontWeight: 700,
            color: '#003B6D',
            transition: 'transform 0.2s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          ˅
        </span>
      </button>

      {isOpen && (
        <div style={{ padding: '0 20px 20px 20px', borderTop: '1px solid #F1F5F9' }}>
          {children}
        </div>
      )}
    </div>
  )
}

function SubAccordionItem({
  code,
  title,
  isOpen,
  onToggle,
  children,
}: {
  code: string
  title: string
  isOpen: boolean
  isCyan?: boolean
  onToggle: () => void
  children: React.ReactNode
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <button
        onClick={onToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: '100%',
          padding: '10px 14px',
          backgroundColor: isHovered ? '#80deea' : 'transparent',
          borderRadius: '8px',
          border: 'none',
          textAlign: 'left',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          outline: 'none',
          transition: 'background-color 0.2s ease',
        }}
      >
        <span style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A' }}>
          {code}. {title}
        </span>
        <span style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A' }}>
          {isOpen ? '˅' : '❯'}
        </span>
      </button>

      {isOpen && <div>{children}</div>}
    </div>
  )
}

function DottedFileUploadBox({
  uploadedFile,
  onFileUpload,
}: {
  uploadedFile?: string
  onFileUpload: (fileName: string) => void
}) {
  return (
    <label
      style={{
        border: '1.5px dashed #3b82f6',
        borderRadius: '4px',
        backgroundColor: '#FFFFFF',
        padding: '24px 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        textAlign: 'center',
        transition: 'background-color 0.2s ease',
      }}
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#eff6ff')}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#FFFFFF')}
    >
      <input
        type="file"
        accept=".doc,.docx,.pdf,.ppt,.pptx"
        onChange={e => {
          if (e.target.files && e.target.files[0]) {
            onFileUpload(e.target.files[0].name)
          }
        }}
        style={{ display: 'none' }}
      />
      <span style={{ fontSize: '14px', color: '#334155', fontWeight: 500 }}>
        {uploadedFile ? `✓ Arquivo anexado: ${uploadedFile}` : 'Upload do documento complementar (.doc, .pdf, .ppt)'}
      </span>
    </label>
  )
}

// ── Rich Text Editor + File Upload Component (Bubble WYSIWYG replica) ──

function RichTextEditorWithUpload({
  value,
  onChange,
  uploadedFile,
  onFileUpload,
}: {
  fieldKey?: string
  value: string
  onChange: (val: string) => void
  uploadedFile?: string
  onFileUpload: (fileName: string) => void
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
      {/* WYSIWYG Box Container */}
      <div
        style={{
          border: '1px solid #CBD5E1',
          borderRadius: '4px',
          backgroundColor: '#FFFFFF',
          overflow: 'hidden',
        }}
      >
        {/* Editor Toolbar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            borderBottom: '1px solid #E2E8F0',
            backgroundColor: '#FAFAFA',
            flexWrap: 'wrap',
            fontSize: '13px',
            color: '#475569',
          }}
        >
          {/* Font Select */}
          <select style={{ border: 'none', background: 'transparent', fontSize: '13px', cursor: 'pointer', color: '#475569' }}>
            <option>Sans Serif</option>
            <option>Serif</option>
            <option>Monospace</option>
          </select>
          <span style={{ color: '#CBD5E1' }}>|</span>

          {/* Format Select */}
          <select style={{ border: 'none', background: 'transparent', fontSize: '13px', cursor: 'pointer', color: '#475569' }}>
            <option>Normal</option>
            <option>H1</option>
            <option>H2</option>
            <option>H3</option>
            <option>H4</option>
          </select>
          <span style={{ color: '#CBD5E1' }}>|</span>

          {/* Action Buttons */}
          <button type="button" style={toolBtnStyle}><b>B</b></button>
          <button type="button" style={toolBtnStyle}><i>I</i></button>
          <button type="button" style={toolBtnStyle}><u>U</u></button>
          <button type="button" style={toolBtnStyle}><s>S</s></button>
          <span style={{ color: '#CBD5E1' }}>|</span>

          <button type="button" style={toolBtnStyle}>A</button>
          <button type="button" style={toolBtnStyle}>A (bg)</button>
          <span style={{ color: '#CBD5E1' }}>|</span>

          <button type="button" style={toolBtnStyle}>x²</button>
          <button type="button" style={toolBtnStyle}>x₂</button>
          <span style={{ color: '#CBD5E1' }}>|</span>

          <button type="button" style={toolBtnStyle}>H₁</button>
          <button type="button" style={toolBtnStyle}>H₂</button>
          <button type="button" style={toolBtnStyle}>H₃</button>
          <button type="button" style={toolBtnStyle}>H₄</button>
          <button type="button" style={toolBtnStyle}>”</button>
          <button type="button" style={toolBtnStyle}>{'</>'}</button>
          <span style={{ color: '#CBD5E1' }}>|</span>

          <button type="button" style={toolBtnStyle}>• =</button>
          <button type="button" style={toolBtnStyle}>1. =</button>
          <span style={{ color: '#CBD5E1' }}>|</span>

          <button type="button" style={toolBtnStyle}>🔗</button>
          <button type="button" style={toolBtnStyle}>🖼️</button>
          <button type="button" style={toolBtnStyle}>🎬</button>
          <button type="button" style={toolBtnStyle}>Tₓ</button>
        </div>

        {/* Textarea Area */}
        <textarea
          rows={6}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="Escreva aqui os detalhes da sua proposta..."
          style={{
            width: '100%',
            padding: '16px',
            border: 'none',
            outline: 'none',
            fontSize: '14px',
            color: '#1E293B',
            fontFamily: 'inherit',
            resize: 'vertical',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {/* Dotted Upload Box */}
      <DottedFileUploadBox uploadedFile={uploadedFile} onFileUpload={onFileUpload} />
    </div>
  )
}

const toolBtnStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  fontSize: '13px',
  cursor: 'pointer',
  padding: '2px 4px',
  color: '#475569',
  fontWeight: 600,
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'

export default function InscricaoDesafioV1Page() {
  const [currentStep, setCurrentStep] = useState<number>(3)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  // Form state
  const [formData, setFormData] = useState({
    // Step 1
    nome: '',
    tipoOportunidade: '',
    resumo: '',
    investimentoPremio: '',
    bannerFileName: '',
    linkExterno: '',
    materiaisFileName: '',
    dataInicio: '2026-08-10',
    horaInicio: '12:00',
    dataFimInscricao: '2026-08-10',
    horaFimInscricao: '12:00',
    dataInicioInscricao: '2026-08-10',
    horaInicioInscricao: '12:00',

    // Step 2
    organizacaoLancamento: '',
    tipoOrganizacaoPromotora: '',
    parcerias: '',

    // Step 3
    areaOportunidade: '',
    apoioOferecido: '',
    tiposIniciativa: '',
    estagioDesenvolvimento: '',
    maturidadeTecnologicaTRL: '',
  })

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (field: string, event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFormData(prev => ({ ...prev, [field]: event.target.files![0].name }))
    }
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setIsSubmitted(true)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#EEF2F5', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', display: 'flex', flexDirection: 'column', color: '#1A202C' }}>
      <Header />

      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar activeItem="criar-solucao" />

        {/* ── Main Content Area ── */}
        <main style={{ flex: 1, padding: '32px 40px', overflowY: 'auto' }}>
          <div style={{ maxWidth: '860px' }}>
            {/* Page Header */}
            <div style={{ marginBottom: '18px' }}>
              <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#1A202C', margin: '0 0 4px 0', letterSpacing: '-0.2px' }}>
                Crie sua oportunidade em coreto!
              </h1>
              <p style={{ fontSize: '13px', fontWeight: 500, color: '#00a8b5', margin: 0 }}>
                Preencha os dados necessários para que possamos conectar as melhores soluções e parcerias!
              </p>
            </div>

            {/* Form Card */}
            {isSubmitted ? (
              <div style={{
                backgroundColor: '#fff', borderRadius: '10px', border: '1px solid #e2e8f0',
                padding: '60px', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
              }}>
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#d1fae5',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px'
                }}>
                  <svg width="32" height="32" fill="none" stroke="#059669" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1A202C', marginBottom: '8px' }}>Oportunidade Criada com Sucesso!</h2>
                <p style={{ fontSize: '14px', color: '#64748b', maxWidth: '380px', margin: '0 auto 28px' }}>
                  Sua oportunidade foi cadastrada no ecossistema CORETO e em breve estará visível para parceiros e resolvedores.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setCurrentStep(1)
                      setFormData({
                        nome: '', tipoOportunidade: '', resumo: '', investimentoPremio: '',
                        bannerFileName: '', linkExterno: '', materiaisFileName: '',
                        dataInicio: '2026-08-10', horaInicio: '12:00',
                        dataFimInscricao: '2026-08-10', horaFimInscricao: '12:00',
                        dataInicioInscricao: '2026-08-10', horaInicioInscricao: '12:00',
                        organizacaoLancamento: '', tipoOrganizacaoPromotora: '', parcerias: '',
                        areaOportunidade: '', apoioOferecido: '', tiposIniciativa: '',
                        estagioDesenvolvimento: '', maturidadeTecnologicaTRL: '',
                      })
                    }}
                    style={{
                      padding: '8px 20px', borderRadius: '6px', border: '1px solid #00a8b5',
                      color: '#00a8b5', fontWeight: 600, backgroundColor: '#fff', cursor: 'pointer', fontSize: '14px'
                    }}
                  >
                    Criar outra oportunidade
                  </button>
                  <Link
                    to="/legacy"
                    style={{
                      padding: '8px 20px', borderRadius: '6px', backgroundColor: '#00a8b5',
                      color: '#fff', fontWeight: 600, textDecoration: 'none', fontSize: '14px',
                      display: 'inline-flex', alignItems: 'center'
                    }}
                  >
                    Voltar ao painel
                  </Link>
                </div>
              </div>
            ) : (
              <div style={{
                backgroundColor: '#fff', borderRadius: '10px',
                border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
              }}>
                {/* ── STEP 1: Identificação da oportunidade ── */}
                {currentStep === 1 && (
                  <div>
                    {/* Card Header */}
                    <div style={{
                      padding: '18px 28px', borderBottom: '1px solid #e2e8f0',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                    }}>
                      <h2 style={{ fontSize: '15px', fontWeight: 700, color: '#003B6D', margin: 0 }}>
                        Identificação da oportunidade
                      </h2>
                    </div>

                    {/* Card Body */}
                    <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

                      {/* Qual o nome da oportunidade? */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#1A202C' }}>
                          Qual o nome da oportunidade?
                        </label>
                        <input
                          type="text"
                          placeholder="Nome"
                          value={formData.nome}
                          onChange={e => handleChange('nome', e.target.value)}
                          style={{
                            width: '100%', padding: '10px 14px', borderRadius: '6px',
                            border: '1px solid #cbd5e1', outline: 'none', fontSize: '13px',
                            color: '#334155', boxSizing: 'border-box' as const
                          }}
                        />
                      </div>

                      {/* Tipo de oportunidade */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#1A202C' }}>
                          Tipo de oportunidade
                        </label>
                        <div style={{ position: 'relative' }}>
                          <select
                            value={formData.tipoOportunidade}
                            onChange={e => handleChange('tipoOportunidade', e.target.value)}
                            style={{
                              width: '100%', padding: '10px 36px 10px 14px', borderRadius: '6px',
                              border: '1px solid #cbd5e1', outline: 'none', fontSize: '13px',
                              color: '#334155', backgroundColor: '#fff', appearance: 'none' as const,
                              cursor: 'pointer', boxSizing: 'border-box' as const
                            }}
                          >
                            <option value="">Escolha uma opção</option>
                            <option value="desafio-aberto">Desafio Aberto</option>
                            <option value="edital-inovacao">Edital de Inovação</option>
                            <option value="chamada-publica">Chamada Pública</option>
                            <option value="hackathon">Hackathon</option>
                          </select>
                          <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#94a3b8' }}>
                            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                          </div>
                        </div>
                      </div>

                      {/* Resumo */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#1A202C' }}>
                          Primeiro nos de um resumo da sua oportunidade
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Fale resumidamente sobre sua demanda/problema/oportunidade"
                          value={formData.resumo}
                          onChange={e => handleChange('resumo', e.target.value)}
                          style={{
                            width: '100%', padding: '10px 14px', borderRadius: '6px',
                            border: '1px solid #cbd5e1', outline: 'none', fontSize: '13px',
                            color: '#334155', resize: 'vertical' as const, boxSizing: 'border-box' as const, fontFamily: 'inherit'
                          }}
                        />
                      </div>

                      {/* Investimento */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#1A202C' }}>
                          Existe investimento/premiação ou repasse financeiro?
                        </label>
                        <input
                          type="text"
                          placeholder="Qual será o prêmio previsto?"
                          value={formData.investimentoPremio}
                          onChange={e => handleChange('investimentoPremio', e.target.value)}
                          style={{
                            width: '100%', padding: '10px 14px', borderRadius: '6px',
                            border: '1px solid #cbd5e1', outline: 'none', fontSize: '13px',
                            color: '#334155', boxSizing: 'border-box' as const
                          }}
                        />
                      </div>

                      {/* Imagem do banner */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#1A202C' }}>Imagem do banner da oportunidade:</label>
                        <label style={{
                          border: '1px solid #cbd5e1', borderRadius: '6px', padding: '32px 20px',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          cursor: 'pointer', color: '#94a3b8'
                        }}>
                          <input type="file" accept="image/*" onChange={e => handleFileUpload('bannerFileName', e)} style={{ display: 'none' }} />
                          <span style={{ fontSize: '13px', fontWeight: 500 }}>
                            {formData.bannerFileName ? `Arquivo selecionado: ${formData.bannerFileName}` : 'Clique para enviar uma imagem( proporção 5x3)'}
                          </span>
                        </label>
                      </div>

                      {/* Link externo */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#1A202C' }}>Tem algum link externo?</label>
                        <input
                          type="text" placeholder="Insira o link" value={formData.linkExterno}
                          onChange={e => handleChange('linkExterno', e.target.value)}
                          style={{
                            width: '100%', padding: '10px 14px', borderRadius: '6px',
                            border: '1px solid #cbd5e1', outline: 'none', fontSize: '13px',
                            color: '#334155', boxSizing: 'border-box' as const
                          }}
                        />
                      </div>

                      {/* Materiais */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#1A202C' }}>Existem materiais de apoio?(edital, etc)</label>
                        <label style={{
                          border: '1px solid #cbd5e1', borderRadius: '6px', padding: '32px 20px',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          cursor: 'pointer', color: '#94a3b8'
                        }}>
                          <input type="file" onChange={e => handleFileUpload('materiaisFileName', e)} style={{ display: 'none' }} />
                          <span style={{ fontSize: '13px', fontWeight: 500 }}>
                            {formData.materiaisFileName ? `Arquivo selecionado: ${formData.materiaisFileName}` : 'Anexe aqui arquivos relacionados'}
                          </span>
                        </label>
                      </div>

                      <div>
                        <p style={{ fontSize: '13px', fontWeight: 700, color: '#003B6D', margin: 0 }}>
                          vamos agora gerar os assuntos para melhor notificar a todos sobre o desafio:
                        </p>
                      </div>

                      {/* Datas */}
                      {[{
                        label: 'Quando a oportunidade começa?',
                        dateField: 'dataInicio', timeField: 'horaInicio'
                      }, {
                        label: 'Quando as inscrições encerram-se?',
                        dateField: 'dataFimInscricao', timeField: 'horaFimInscricao'
                      }, {
                        label: 'Quando as inscrições iniciam-se?',
                        dateField: 'dataInicioInscricao', timeField: 'horaInicioInscricao'
                      }].map(({ label, dateField, timeField }) => (
                        <div key={dateField} style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                          <label style={{ fontSize: '13px', fontWeight: 600, color: '#1A202C' }}>{label}</label>
                          <div style={{ display: 'flex', gap: '12px' }}>
                            <input
                              type="text"
                              value={(formData as Record<string, string>)[dateField]}
                              onChange={e => handleChange(dateField, e.target.value)}
                              style={{
                                flex: 1, padding: '10px 14px', borderRadius: '6px',
                                border: '1px solid #cbd5e1', outline: 'none', fontSize: '13px', color: '#334155',
                                boxSizing: 'border-box' as const
                              }}
                            />
                            <input
                              type="text"
                              value={(formData as Record<string, string>)[timeField]}
                              onChange={e => handleChange(timeField, e.target.value)}
                              style={{
                                width: '88px', padding: '10px 14px', borderRadius: '6px',
                                border: '1px solid #cbd5e1', outline: 'none', fontSize: '13px', color: '#334155',
                                textAlign: 'center', boxSizing: 'border-box' as const
                              }}
                            />
                          </div>
                        </div>
                      ))}

                      <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '6px' }}>
                        <button
                          type="button" onClick={handleNext}
                          style={{
                            padding: '8px 20px', borderRadius: '6px', border: '1px solid #FF6B00',
                            color: '#FF6B00', fontWeight: 600, backgroundColor: '#fff',
                            cursor: 'pointer', fontSize: '13px',
                            display: 'flex', alignItems: 'center', gap: '6px'
                          }}
                        >
                          <span>Próximo</span><span>→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── STEP 2: Quem promove e parcerias ── */}
                {currentStep === 2 && (
                  <div>
                    <div style={{
                      padding: '18px 28px', borderBottom: '1px solid #e2e8f0',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                    }}>
                      <h2 style={{ fontSize: '15px', fontWeight: 700, color: '#003B6D', margin: 0 }}>Quem promove e parcerias</h2>
                      <button type="button" onClick={handlePrev} style={{
                        padding: '7px 16px', borderRadius: '6px', border: '1px solid #FF6B00',
                        color: '#FF6B00', fontWeight: 600, backgroundColor: '#fff', cursor: 'pointer',
                        fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px'
                      }}>
                        <span>{'<'}</span><span>Voltar</span>
                      </button>
                    </div>

                    <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#1A202C' }}>Qual a organização que irá lançar?</label>
                        <div style={{ position: 'relative' }}>
                          <select value={formData.organizacaoLancamento} onChange={e => handleChange('organizacaoLancamento', e.target.value)}
                            style={{
                              width: '100%', padding: '10px 36px 10px 14px', borderRadius: '6px',
                              border: '1px solid #cbd5e1', outline: 'none', fontSize: '13px',
                              color: '#334155', backgroundColor: '#fff', appearance: 'none' as const,
                              cursor: 'pointer', boxSizing: 'border-box' as const
                            }}>
                            <option value="">Escolha a empresa</option>
                            <option value="recife">Prefeitura do Recife</option>
                            <option value="emprel">EMPREL</option>
                            <option value="secti">SECTI</option>
                            <option value="abdi">ABDI</option>
                          </select>
                          <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#94a3b8' }}>
                            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#1A202C' }}>Tipo de organização promotora</label>
                        <div style={{ position: 'relative' }}>
                          <select value={formData.tipoOrganizacaoPromotora} onChange={e => handleChange('tipoOrganizacaoPromotora', e.target.value)}
                            style={{
                              width: '100%', padding: '10px 36px 10px 14px', borderRadius: '6px',
                              border: '1px solid #cbd5e1', outline: 'none', fontSize: '13px',
                              color: '#334155', backgroundColor: '#fff', appearance: 'none' as const,
                              cursor: 'pointer', boxSizing: 'border-box' as const
                            }}>
                            <option value="">Escolha uma opção</option>
                            <option value="orgao-publico">Órgão Público</option>
                            <option value="empresa-privada">Empresa Privada</option>
                            <option value="ict">Instituição de Ensino / ICT</option>
                            <option value="startup">Startup</option>
                          </select>
                          <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#94a3b8' }}>
                            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#1A202C' }}>Possui alguma parceria?</label>
                        <input type="text" placeholder="Escreva aqui as organizações parceiras" value={formData.parcerias}
                          onChange={e => handleChange('parcerias', e.target.value)}
                          style={{
                            width: '100%', padding: '10px 14px', borderRadius: '6px',
                            border: '1px solid #cbd5e1', outline: 'none', fontSize: '13px',
                            color: '#334155', boxSizing: 'border-box' as const
                          }}
                        />
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'flex-start', paddingTop: '6px' }}>
                        <button type="button" onClick={handleNext} style={{
                          padding: '8px 20px', borderRadius: '6px', border: '1px solid #FF6B00',
                          color: '#FF6B00', fontWeight: 600, backgroundColor: '#fff', cursor: 'pointer',
                          fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px'
                        }}>
                          <span>Próximo</span><span>→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div>
                    {/* Card Header */}
                    <div style={{
                      padding: '18px 28px', borderBottom: '1px solid #e2e8f0',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                    }}>
                      <h2 style={{ fontSize: '15px', fontWeight: 700, color: '#003B6D', margin: 0 }}>Perfil da oportunidade</h2>
                      <button type="button" onClick={handlePrev} style={{
                        padding: '7px 16px', borderRadius: '6px', border: '1px solid #FF6B00',
                        color: '#FF6B00', fontWeight: 600, backgroundColor: '#fff', cursor: 'pointer',
                        fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px'
                      }}>
                        <span>{'<'}</span><span>Voltar</span>
                      </button>
                    </div>

                    {/* Card Body */}
                    <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

                      {/* Área da oportunidade */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#1A202C' }}>Área da oportunidade</label>
                        <input
                          type="text" placeholder="Escolha até 3 opções" value={formData.areaOportunidade}
                          onChange={e => handleChange('areaOportunidade', e.target.value)}
                          style={{
                            width: '100%', padding: '10px 14px', borderRadius: '6px',
                            border: '1px solid #cbd5e1', outline: 'none', fontSize: '13px',
                            color: '#334155', boxSizing: 'border-box' as const
                          }}
                        />
                      </div>

                      {/* Apoio oferecido */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#1A202C' }}>Apoio oferecido</label>
                        <div style={{ position: 'relative' }}>
                          <select value={formData.apoioOferecido} onChange={e => handleChange('apoioOferecido', e.target.value)}
                            style={{
                              width: '100%', padding: '10px 36px 10px 14px', borderRadius: '6px',
                              border: '1px solid #cbd5e1', outline: 'none', fontSize: '13px',
                              color: formData.apoioOferecido ? '#334155' : '#94a3b8',
                              backgroundColor: '#fff', appearance: 'none' as const,
                              cursor: 'pointer', boxSizing: 'border-box' as const
                            }}>
                            <option value="">Escolha uma opção</option>
                            <option value="financeiro">Aporte Financeiro</option>
                            <option value="mentoria">Mentoria &amp; Capacitação</option>
                            <option value="sandbox">Ambiente de Testes (Sandbox)</option>
                            <option value="infraestrutura">Infraestrutura &amp; Espaço Físico</option>
                            <option value="conexao">Conexão com Mercado</option>
                          </select>
                          <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#94a3b8' }}>
                            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                          </div>
                        </div>
                      </div>

                      {/* Que tipos de iniciativa podem participar? */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#003B6D' }}>Que tipos de iniciativa podem participar?</label>
                        <input
                          type="text" placeholder="Escolha até 5 opções" value={formData.tiposIniciativa}
                          onChange={e => handleChange('tiposIniciativa', e.target.value)}
                          style={{
                            width: '100%', padding: '10px 14px', borderRadius: '6px',
                            border: '1px solid #cbd5e1', outline: 'none', fontSize: '13px',
                            color: '#334155', boxSizing: 'border-box' as const
                          }}
                        />
                      </div>

                      {/* Em que estágio de desenvolvimento? */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#003B6D' }}>Em que estágio de desenvolvimento as iniciativas podem se inscrever?</label>
                        <input
                          type="text" placeholder="Escolha até 5 opções" value={formData.estagioDesenvolvimento}
                          onChange={e => handleChange('estagioDesenvolvimento', e.target.value)}
                          style={{
                            width: '100%', padding: '10px 14px', borderRadius: '6px',
                            border: '1px solid #cbd5e1', outline: 'none', fontSize: '13px',
                            color: '#334155', boxSizing: 'border-box' as const
                          }}
                        />
                      </div>

                      {/* Maturidade tecnológica */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#003B6D' }}>Há exigência de maturidade tecnológica (TRL)?</label>
                        <input
                          type="text" placeholder="Escolha até 3 opções" value={formData.maturidadeTecnologicaTRL}
                          onChange={e => handleChange('maturidadeTecnologicaTRL', e.target.value)}
                          style={{
                            width: '100%', padding: '10px 14px', borderRadius: '6px',
                            border: '1px solid #cbd5e1', outline: 'none', fontSize: '13px',
                            color: '#334155', boxSizing: 'border-box' as const
                          }}
                        />
                      </div>

                      {/* Submit */}
                      <div style={{ paddingTop: '4px' }}>
                        <button type="button" onClick={handleNext} style={{
                          padding: '10px 28px', borderRadius: '6px', backgroundColor: '#00a8b5',
                          color: '#fff', fontWeight: 700, fontSize: '14px', border: 'none',
                          cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px'
                        }}>
                          <span>Lançar oportunidade</span>
                          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072m-2.828 9.9a9 9 0 010-12.728" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

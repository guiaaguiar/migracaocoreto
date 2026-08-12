import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logoCoreto from '../../../assets/logo-coreto.png'
import logoAbdi from '../../../assets/logo-abdi.png'
import logoEmprel from '../../../assets/logo-emprel.png'
import bannerCoreto from '../../../assets/banner-inscricao-evento.png'

export default function InscricaoEventoPage() {
  const [isOrganizerModalOpen, setIsOrganizerModalOpen] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  // Form State
  const [formData, setFormData] = useState({
    nomeCompleto: 'Pedro Dhalia',
    cpf: '09477893404',
    dataNascimento: '',
    genero: '',
    whatsapp: '',
    email: 'pedro.dhalia@gmail.com',
    cidade: '',
    estado: '',
    atuacaoProfissional: '',
    opcoesAtuacao: '',
    notifWhatsapp: false,
    notifEmail: false,
    assuntosGerados: '',
    isOrganizador: true,
  })

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#EEF2F5', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', display: 'flex', flexDirection: 'column', color: '#1A202C' }}>
      
      {/* ── Header Global ── */}
      <header style={{
        backgroundColor: '#fff', height: '60px', padding: '0 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 30,
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
      }}>
        {/* Left Logos */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link to="/legacy" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src={logoCoreto} alt="Coreto" style={{ height: '30px', objectFit: 'contain' }} />
          </Link>
          <div style={{ width: '1px', height: '26px', backgroundColor: '#e2e8f0' }} />
          <img src={logoAbdi} alt="ABDI" style={{ height: '26px', objectFit: 'contain' }} />
          <img src={logoEmprel} alt="Emprel" style={{ height: '22px', objectFit: 'contain' }} />
        </div>

        {/* Right Nav Link */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link to="/legacy" style={{
            fontSize: '13px', fontWeight: 600, color: '#00a8b5', textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: '6px'
          }}>
            <span>← Voltar ao Legado</span>
          </Link>
        </div>
      </header>

      {/* ── Main Content Container ── */}
      <main style={{ flex: 1, padding: '32px 20px', maxWidth: '880px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        
        {/* Hero Banner Section */}
        <div style={{
          backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0',
          overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.04)', marginBottom: '28px'
        }}>
          <img
            src={bannerCoreto}
            alt="Transformando territórios através de território de conexões"
            style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '360px', objectFit: 'cover' }}
          />

          <div style={{ padding: '24px 28px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#00a8b5', margin: '0 0 10px 0', letterSpacing: '-0.2px' }}>
              Prepare-se para o novo Coreto:
            </h2>
            <p style={{ fontSize: '14px', color: '#1A202C', margin: 0, lineHeight: 1.5, fontWeight: 400 }}>
              Estamos preparando uma experiência ainda mais completa para conectar pessoas, ideias e oportunidades dentro do ecossistema de inovação. Ao se inscrever, você receberá atualizações em primeira mão.
            </p>
          </div>
        </div>

        {/* Form Container */}
        {isSubmitted ? (
          <div style={{
            backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0',
            padding: '60px 40px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.04)'
          }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#d1fae5',
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px'
            }}>
              <svg width="32" height="32" fill="none" stroke="#059669" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1A202C', marginBottom: '8px' }}>Inscrição Realizada com Sucesso!</h2>
            <p style={{ fontSize: '14px', color: '#64748b', maxWidth: '420px', margin: '0 auto 28px' }}>
              Obrigado por se inscrever no novo Coreto. Em breve entraremos em contato com novidades do ecossistema.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
              <button
                onClick={() => setIsSubmitted(false)}
                style={{
                  padding: '10px 24px', borderRadius: '6px', border: '1px solid #00a8b5',
                  color: '#00a8b5', fontWeight: 600, backgroundColor: '#fff', cursor: 'pointer', fontSize: '14px'
                }}
              >
                Editar dados
              </button>
              <Link
                to="/legacy"
                style={{
                  padding: '10px 24px', borderRadius: '6px', backgroundColor: '#00a8b5',
                  color: '#fff', fontWeight: 600, textDecoration: 'none', fontSize: '14px',
                  display: 'inline-flex', alignItems: 'center'
                }}
              >
                Voltar ao painel
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{
            backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0',
            padding: '32px 36px', boxShadow: '0 2px 4px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', gap: '28px'
          }}>

            {/* ── Section 1: Foto de Perfil ── */}
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#003B6D', margin: '0 0 16px 0' }}>
                Foto de Perfil
              </h3>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <label style={{
                  width: '90px', height: '90px', borderRadius: '50%', border: '2px solid #00a8b5',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                  backgroundColor: '#fff', flexShrink: 0
                }}>
                  <input type="file" accept="image/*" style={{ display: 'none' }} />
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#00a8b5' }}>Selecione</span>
                </label>
                <span style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.4 }}>
                  Utilize imagens com proporção<br />150 x 150
                </span>
              </div>
            </div>

            {/* ── Section 2: Dados Pessoais ── */}
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#003B6D', margin: '0 0 16px 0' }}>
                Dados pessoais
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                
                {/* Nome completo */}
                <div style={{ position: 'relative' }}>
                  <fieldset style={{
                    border: '1px solid #cbd5e1', borderRadius: '6px', padding: '0 12px 8px 12px', margin: 0
                  }}>
                    <legend style={{ fontSize: '12px', fontWeight: 500, color: '#64748b', padding: '0 4px' }}>
                      Nome completo
                    </legend>
                    <input
                      type="text"
                      value={formData.nomeCompleto}
                      onChange={e => handleChange('nomeCompleto', e.target.value)}
                      style={{
                        width: '100%', border: 'none', outline: 'none', fontSize: '14px',
                        color: '#1A202C', padding: '4px 0', backgroundColor: 'transparent', boxSizing: 'border-box'
                      }}
                    />
                  </fieldset>
                </div>

                {/* CPF e Data de Nascimento */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ position: 'relative' }}>
                    <fieldset style={{
                      border: '1px solid #cbd5e1', borderRadius: '6px', padding: '0 12px 8px 12px', margin: 0
                    }}>
                      <legend style={{ fontSize: '12px', fontWeight: 500, color: '#64748b', padding: '0 4px' }}>
                        CPF
                      </legend>
                      <input
                        type="text"
                        value={formData.cpf}
                        onChange={e => handleChange('cpf', e.target.value)}
                        style={{
                          width: '100%', border: 'none', outline: 'none', fontSize: '14px',
                          color: '#1A202C', padding: '4px 0', backgroundColor: 'transparent', boxSizing: 'border-box'
                        }}
                      />
                    </fieldset>
                  </div>

                  <div style={{ position: 'relative' }}>
                    <input
                      type="text"
                      placeholder="Data de nascimento"
                      value={formData.dataNascimento}
                      onChange={e => handleChange('dataNascimento', e.target.value)}
                      style={{
                        width: '100%', padding: '12px 36px 12px 14px', borderRadius: '6px',
                        border: '1px solid #cbd5e1', outline: 'none', fontSize: '13px',
                        color: '#334155', boxSizing: 'border-box'
                      }}
                    />
                    <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748b', pointerEvents: 'none' }}>
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth={1.8} />
                        <line x1="16" y1="2" x2="16" y2="6" strokeWidth={1.8} />
                        <line x1="8" y1="2" x2="8" y2="6" strokeWidth={1.8} />
                        <line x1="3" y1="10" x2="21" y2="10" strokeWidth={1.8} />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Gênero e WhatsApp */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ position: 'relative' }}>
                    <select
                      value={formData.genero}
                      onChange={e => handleChange('genero', e.target.value)}
                      style={{
                        width: '100%', padding: '12px 36px 12px 14px', borderRadius: '6px',
                        border: '1px solid #cbd5e1', outline: 'none', fontSize: '13px',
                        color: formData.genero ? '#1A202C' : '#94a3b8', backgroundColor: '#fff',
                        appearance: 'none', cursor: 'pointer', boxSizing: 'border-box'
                      }}
                    >
                      <option value="">Gênero</option>
                      <option value="masculino">Masculino</option>
                      <option value="feminino">Feminino</option>
                      <option value="outro">Outro</option>
                      <option value="prefiro-nao-dizer">Prefiro não dizer</option>
                    </select>
                    <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#94a3b8' }}>
                      <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Número WhatsApp"
                      value={formData.whatsapp}
                      onChange={e => handleChange('whatsapp', e.target.value)}
                      style={{
                        width: '100%', padding: '12px 14px', borderRadius: '6px',
                        border: '1px solid #00a8b5', outline: 'none', fontSize: '13px',
                        color: '#334155', boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>

                {/* Email * */}
                <div style={{ position: 'relative' }}>
                  <fieldset style={{
                    border: '1px solid #cbd5e1', borderRadius: '6px', padding: '0 12px 8px 12px', margin: 0
                  }}>
                    <legend style={{ fontSize: '12px', fontWeight: 500, color: '#64748b', padding: '0 4px' }}>
                      Email *
                    </legend>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => handleChange('email', e.target.value)}
                      style={{
                        width: '100%', border: 'none', outline: 'none', fontSize: '14px',
                        color: '#1A202C', padding: '4px 0', backgroundColor: 'transparent', boxSizing: 'border-box'
                      }}
                    />
                  </fieldset>
                </div>

              </div>
            </div>

            {/* ── Section 3: Cidade e Estado ── */}
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#003B6D', margin: '0 0 16px 0' }}>
                Cidade e Estado
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <input
                  type="text"
                  placeholder="Digite sua Cidade"
                  value={formData.cidade}
                  onChange={e => handleChange('cidade', e.target.value)}
                  style={{
                    width: '100%', padding: '12px 14px', borderRadius: '6px',
                    border: '1px solid #cbd5e1', outline: 'none', fontSize: '13px',
                    color: '#334155', boxSizing: 'border-box'
                  }}
                />

                <div style={{ position: 'relative' }}>
                  <select
                    value={formData.estado}
                    onChange={e => handleChange('estado', e.target.value)}
                    style={{
                      width: '100%', padding: '12px 36px 12px 14px', borderRadius: '6px',
                      border: '1px solid #cbd5e1', outline: 'none', fontSize: '13px',
                      color: formData.estado ? '#1A202C' : '#94a3b8', backgroundColor: '#fff',
                      appearance: 'none', cursor: 'pointer', boxSizing: 'border-box'
                    }}
                  >
                    <option value="">Estado</option>
                    <option value="PE">Pernambuco</option>
                    <option value="AL">Alagoas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="PB">Paraíba</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="SE">Sergipe</option>
                    <option value="SP">São Paulo</option>
                    <option value="RJ">Rio de Janeiro</option>
                  </select>
                  <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#94a3b8' }}>
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Section 4: Sobre mim ── */}
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#003B6D', margin: '0 0 16px 0' }}>
                Sobre mim
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <textarea
                  rows={4}
                  placeholder="Atuação profissional"
                  value={formData.atuacaoProfissional}
                  onChange={e => handleChange('atuacaoProfissional', e.target.value)}
                  style={{
                    width: '100%', padding: '12px 14px', borderRadius: '6px',
                    border: '1px solid #cbd5e1', outline: 'none', fontSize: '13px',
                    color: '#334155', boxSizing: 'border-box', fontFamily: 'inherit', resize: 'vertical'
                  }}
                />

                <input
                  type="text"
                  placeholder="Escolha até 3 opções:"
                  value={formData.opcoesAtuacao}
                  onChange={e => handleChange('opcoesAtuacao', e.target.value)}
                  style={{
                    width: '100%', padding: '12px 14px', borderRadius: '6px',
                    border: '1px solid #cbd5e1', outline: 'none', fontSize: '13px',
                    color: '#334155', boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            {/* ── Section 5: Receber notificações ── */}
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#003B6D', margin: '0 0 12px 0' }}>
                Receber notificações
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '14px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#1A202C', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={formData.notifWhatsapp}
                    onChange={e => handleChange('notifWhatsapp', e.target.checked)}
                    style={{ accentColor: '#00a8b5', width: '16px', height: '16px' }}
                  />
                  <span>Notificação via whatsapp</span>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#1A202C', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={formData.notifEmail}
                    onChange={e => handleChange('notifEmail', e.target.checked)}
                    style={{ accentColor: '#00a8b5', width: '16px', height: '16px' }}
                  />
                  <span>Notificação via email</span>
                </label>
              </div>

              <input
                type="text"
                disabled
                placeholder="Assuntos sendo gerados!"
                value={formData.assuntosGerados}
                style={{
                  width: '100%', padding: '12px 14px', borderRadius: '6px',
                  border: '1px solid #e2e8f0', outline: 'none', fontSize: '13px',
                  color: '#94a3b8', backgroundColor: '#f8fafc', boxSizing: 'border-box'
                }}
              />
            </div>

            {/* ── Section 6: Pergunta de Organizador ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
              <label style={{ fontSize: '13px', fontWeight: 700, color: '#1A202C' }}>
                Você está à frente de alguma organização?
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#1A202C', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.isOrganizador}
                  onChange={e => handleChange('isOrganizador', e.target.checked)}
                  style={{ accentColor: '#00a8b5', width: '16px', height: '16px' }}
                />
                <span>Sim</span>
              </label>

              <div style={{ marginTop: '4px' }}>
                <button
                  type="button"
                  onClick={() => setIsOrganizerModalOpen(true)}
                  style={{
                    background: 'none', border: 'none', padding: 0, color: '#00a8b5',
                    fontSize: '13px', fontWeight: 700, cursor: 'pointer', display: 'inline-flex',
                    alignItems: 'center', gap: '8px', textDecoration: 'none'
                  }}
                >
                  <svg width="18" height="18" fill="none" stroke="#00a8b5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6" />
                  </svg>
                  <span>O que é um organizador?</span>
                </button>
              </div>
            </div>

            {/* ── Submit Button ── */}
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '12px' }}>
              <button
                type="submit"
                style={{
                  width: '100%', maxWidth: '340px', padding: '12px 36px', borderRadius: '6px',
                  backgroundColor: '#76E4E2', color: '#fff', fontWeight: 700, fontSize: '15px',
                  border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', gap: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.06)'
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#00a8b5')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#76E4E2')}
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span>Concluir!</span>
              </button>
            </div>

          </form>
        )}
      </main>

      {/* ── Modal Pop-up: "O que é ser um organizador?" ── */}
      {isOrganizerModalOpen && (
        <div
          onClick={() => setIsOrganizerModalOpen(false)}
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.55)', zIndex: 100,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '20px', backdropFilter: 'blur(2px)'
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              backgroundColor: '#ffffff', borderRadius: '14px', padding: '36px 40px',
              maxWidth: '680px', width: '100%', position: 'relative',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              border: '1px solid #e2e8f0'
            }}
          >
            {/* Close X Button */}
            <button
              onClick={() => setIsOrganizerModalOpen(false)}
              style={{
                position: 'absolute', top: '20px', right: '20px', background: 'none',
                border: 'none', cursor: 'pointer', color: '#94a3b8', fontSize: '20px',
                padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}
              aria-label="Fechar"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Title */}
            <h2 style={{
              fontSize: '28px', fontWeight: 800, color: '#FF5500', margin: '0 0 16px 0',
              letterSpacing: '-0.3px', lineHeight: 1.2
            }}>
              O que é ser um organizador?
            </h2>

            {/* Modal Subtitle & Paragraph 1 */}
            <p style={{
              fontSize: '14px', color: '#475569', margin: '0 0 16px 0', lineHeight: 1.6, fontWeight: 400
            }}>
              Ao se tornar um organizador, você pode criar e gerenciar uma organização dentro da plataforma. Isso permite que sua empresa lance desafios, receba ideias inovadoras e colabore com talentos de forma prática e estratégica.
            </p>

            {/* Paragraph 2 */}
            <p style={{
              fontSize: '14px', color: '#475569', margin: '0 0 16px 0', lineHeight: 1.6, fontWeight: 400
            }}>
              Com um perfil de organizador, você poderá:
            </p>

            {/* Bullet Points List */}
            <ul style={{
              listStyleType: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex',
              flexDirection: 'column', gap: '10px'
            }}>
              {[
                'Criar e editar organizações;',
                'Lançar desafios personalizados;',
                'Acompanhar e gerenciar todos os desafios criados;',
                'Usar o BOFlix para turbinar ideias iniciais;',
                'Visualizar, editar ou excluir desafios a qualquer momento.',
                'Tudo isso com autonomia e facilidade, diretamente pelo seu painel.'
              ].map((item, index) => (
                <li key={index} style={{
                  fontSize: '14px', color: '#334155', lineHeight: 1.5, display: 'flex', gap: '4px'
                }}>
                  <span style={{ color: '#475569' }}>-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Bottom Callout Line */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '8px' }}>
              <span style={{ fontSize: '18px' }}>👉</span>
              <span style={{ fontSize: '15px', fontWeight: 700, color: '#1E293B' }}>
                Pronto para impulsionar a inovação com sua organização?
              </span>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

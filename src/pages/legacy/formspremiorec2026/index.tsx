import { useState } from 'react'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import bannerPremio from '../../../assets/banner-premiorec.png'
import logoPremio from '../../../assets/logo-premiorec.png'

interface Category {
  id: string; label: string; eixo: string; eixoColor: string; description: string; publicAlvo: string
}
const CATEGORIES_2026: Category[] = [
  { id: 'case_inov_emp', label: 'Case de Inovação Empresarial', eixo: 'Inovação Empresarial', eixoColor: '#1d4ed8', description: 'Reconhece o projeto que demonstra a aplicação mais consistente e transformadora da inovação, com impacto relevante no mercado e no ecossistema local.', publicAlvo: 'Empresas privadas com CNPJ ativo no Município do Recife.' },
  { id: 'case_esg', label: 'Case de Inovação em ESG', eixo: 'Inovação Empresarial', eixoColor: '#1d4ed8', description: 'Valoriza iniciativas que incorporam práticas Ambientais, Sociais e de Governança (ESG) em alinhamento à Agenda 2030 da ONU e aos ODS.', publicAlvo: 'Empresas privadas com CNPJ ativo no Município do Recife.' },
  { id: 'startup_ano', label: 'Startup do Ano', eixo: 'Startups Inovadoras', eixoColor: '#7c3aed', description: 'Reconhece a startup que mais se destacou ao longo de 2026 pela realização de projetos, iniciativas e soluções capazes de gerar impacto relevante na sociedade.', publicAlvo: 'Startups com CNPJ ativo no Município do Recife.' },
  { id: 'startup_mundo', label: 'De Recife para o Mundo', eixo: 'Startups Inovadoras', eixoColor: '#7c3aed', description: 'Reconhece a startup que se destacou pela internacionalização de uma solução desenvolvida no Recife para além das fronteiras do Brasil.', publicAlvo: 'Startups com CNPJ ativo no Município do Recife.' },
  { id: 'startup_cidade', label: 'Startup Conectada com a Cidade', eixo: 'Startups Inovadoras', eixoColor: '#7c3aed', description: 'Reconhece startups cujas inovações respondem a desafios urbanos locais com impacto direto e positivo na vida dos cidadãos do Recife.', publicAlvo: 'Startups de qualquer parte do Brasil com impacto direto no Município do Recife.' },
  { id: 'case_emp_social', label: 'Case de Empreendedorismo Social', eixo: 'Inovação Social', eixoColor: '#059669', description: 'Reconhece iniciativas inovadoras que promovem transformação social na cidade do Recife. Valoriza cases de ONGs e organizações da sociedade civil.', publicAlvo: 'Organizações não governamentais e sociais com CNPJ ativo no Município do Recife.' },
  { id: 'case_letramento', label: 'Case de Letramento Digital', eixo: 'Inovação Social', eixoColor: '#059669', description: 'Reconhece iniciativas que promovem a inclusão no universo digital, ampliando competências, qualificação profissional e acesso a oportunidades.', publicAlvo: 'Organizações sem fins lucrativos e empresas com CNPJ ativo no Município do Recife.' },
  { id: 'pesquisa_inovadora', label: 'Pesquisa Inovadora', eixo: 'Inovação Científica', eixoColor: '#d97706', description: 'Reconhece pesquisas desenvolvidas no Recife que se destacam pela originalidade, relevância científica e potencial de gerar impacto significativo na sociedade.', publicAlvo: 'Instituições de ensino superior, pesquisa e ICTs com CNPJ ativo no Município do Recife.' },
  { id: 'resolve_bo', label: 'Resolve o B.O.', eixo: 'Inovação Científica', eixoColor: '#d97706', description: 'Reconhece iniciativas de extensão universitária que contribuem para desafios concretos de Recife, incentivando soluções do Banco de Oportunidades da Prefeitura.', publicAlvo: 'Instituições de ensino superior com CNPJ ativo no Município do Recife.' },
  { id: 'inst_ensino_inovadora', label: 'Instituição de Ensino e/ou Pesquisa Inovadora', eixo: 'Inovação Científica', eixoColor: '#d97706', description: 'Premia instituição de ensino ou pesquisa que se destaca por iniciativas de empreendedorismo e inovação.', publicAlvo: 'Instituições de ensino técnico e superior cadastradas no e-MEC, com CNPJ ativo no Município do Recife.' },
]
const EIXOS = [
  { label: 'Inovação Empresarial', color: '#1d4ed8', bg: '#EFF6FF' },
  { label: 'Startups Inovadoras', color: '#7c3aed', bg: '#F5F3FF' },
  { label: 'Inovação Social', color: '#059669', bg: '#ECFDF5' },
  { label: 'Inovação Científica', color: '#d97706', bg: '#FFFBEB' },
]
const TIPO_ORG = ['Empresa Privada','Startup','Instituição de Ensino Técnico','Instituição de Ensino Superior','Instituição de Pesquisa','Instituição de Ciência e Tecnologia (ICT)','Organização Não Governamental (ONG)','Organização Social','Outro']
const STEPS = [{ label: 'Identificação', icon: '🏢' },{ label: 'Categoria', icon: '🏆' },{ label: 'Iniciativa', icon: '📝' },{ label: 'Materiais', icon: '📎' },{ label: 'Revisão', icon: '✅' }]
const CRITERIOS = [
  { key: 'q_disrupcao', n: '1', title: 'Grau de Disrupção', sub: 'Apresente a originalidade da iniciativa e sua capacidade de propor soluções inéditas ou melhorias significativas. Descreva o grau de ruptura frente ao estado da arte em seu setor e a relevância da proposta para introduzir novas formas de pensar, agir ou interagir.', ph: 'Descreva o que torna sua iniciativa inovadora e diferente das soluções existentes no mercado...' },
  { key: 'q_resultados', n: '2', title: 'Resultados', sub: 'Apresente evidências qualitativas e quantitativas dos efeitos alcançados. Informe resultados concretos em termos de objetivos atingidos, indicadores de desempenho e ganhos para o público-alvo.', ph: 'Descreva os principais resultados e impactos alcançados. Use dados, métricas e evidências sempre que possível...' },
  { key: 'q_replicabilidade', n: '3', title: 'Replicabilidade e Potencial de Escala', sub: 'Analise a capacidade da iniciativa de ser expandida, adaptada ou reproduzida em diferentes contextos, públicos ou territórios. Considere o potencial de gerar impacto em médio e longo prazo.', ph: 'Descreva como a iniciativa pode ser escalada ou replicada em outros contextos, territórios ou públicos...' },
  { key: 'q_foco_pessoas', n: '4', title: 'Foco nas Pessoas, Território e Ecossistema', sub: 'Examine o grau em que a iniciativa coloca as pessoas no centro do processo, promove benefícios sociais e contribui para o fortalecimento do ecossistema de inovação local e global.', ph: 'Descreva como sua iniciativa beneficia pessoas, contribui para o território e fortalece o ecossistema de inovação do Recife...' },
]

interface FormData {
  nomeIniciativa: string; nomeOrganizacao: string; cnpj: string; tipoOrganizacao: string
  nomeResponsavel: string; email: string; telefone: string; municipio: string; uf: string; site: string
  categoriaId: string
  q_disrupcao: string; q_resultados: string; q_replicabilidade: string; q_foco_pessoas: string
  linkVideo: string; linkApresentacao: string; linkAdicional: string; observacoes: string
  aceitaTermos: boolean; autorizaLGPD: boolean; iniciativaJaPremiadaAntes: boolean
}
const INIT: FormData = {
  nomeIniciativa: '', nomeOrganizacao: '', cnpj: '', tipoOrganizacao: '',
  nomeResponsavel: '', email: '', telefone: '', municipio: 'Recife', uf: 'PE', site: '',
  categoriaId: '',
  q_disrupcao: '', q_resultados: '', q_replicabilidade: '', q_foco_pessoas: '',
  linkVideo: '', linkApresentacao: '', linkAdicional: '', observacoes: '',
  aceitaTermos: false, autorizaLGPD: false, iniciativaJaPremiadaAntes: false,
}
const s0: React.CSSProperties = { width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '14px', color: '#0F172A', outline: 'none', boxSizing: 'border-box' as const, backgroundColor: '#FFFFFF', transition: 'border-color 0.2s ease', fontFamily: 'inherit' }
const ta: React.CSSProperties = { ...s0, resize: 'vertical' as const, minHeight: '140px', lineHeight: 1.65 }
const lb: React.CSSProperties = { fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '6px', display: 'block' }
const sh: React.CSSProperties = { fontSize: '16px', fontWeight: 800, marginBottom: '4px', letterSpacing: '-0.01em' }
const ss: React.CSSProperties = { fontSize: '13px', color: '#64748B', marginBottom: '20px', lineHeight: 1.5 }
const fg: React.CSSProperties = { display: 'flex', flexDirection: 'column' as const, gap: '4px' }
const RED = '#E53935'

export default function FormsPremioRec2026Page() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<FormData>(INIT)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const cat = CATEGORIES_2026.find(c => c.id === form.categoriaId)

  const setF = (k: keyof FormData, v: string | boolean) => {
    setForm(p => ({ ...p, [k]: v }))
    setErrors(p => ({ ...p, [k]: undefined }))
  }
  const vld = (s: number) => {
    const e: Partial<Record<keyof FormData, string>> = {}
    if (s === 0) {
      if (!form.nomeIniciativa.trim()) e.nomeIniciativa = 'Campo obrigatório'
      if (!form.nomeOrganizacao.trim()) e.nomeOrganizacao = 'Campo obrigatório'
      if (!form.cnpj.trim()) e.cnpj = 'Campo obrigatório'
      if (!form.tipoOrganizacao) e.tipoOrganizacao = 'Selecione o tipo'
      if (!form.nomeResponsavel.trim()) e.nomeResponsavel = 'Campo obrigatório'
      if (!form.email.trim()) e.email = 'Campo obrigatório'
      if (!form.telefone.trim()) e.telefone = 'Campo obrigatório'
    }
    if (s === 1 && !form.categoriaId) e.categoriaId = 'Selecione uma categoria'
    if (s === 2) {
      if (!form.q_disrupcao.trim()) e.q_disrupcao = 'Campo obrigatório'
      if (!form.q_resultados.trim()) e.q_resultados = 'Campo obrigatório'
      if (!form.q_replicabilidade.trim()) e.q_replicabilidade = 'Campo obrigatório'
      if (!form.q_foco_pessoas.trim()) e.q_foco_pessoas = 'Campo obrigatório'
    }
    if (s === 4) {
      if (!form.aceitaTermos) e.aceitaTermos = 'Você deve aceitar os termos do edital'
      if (!form.autorizaLGPD) e.autorizaLGPD = 'Você deve autorizar o uso dos dados (LGPD)'
      if (form.iniciativaJaPremiadaAntes) e.iniciativaJaPremiadaAntes = 'Iniciativa premiada em edição anterior não pode participar (Cláusula 4.3).'
    }
    setErrors(e); return Object.keys(e).length === 0
  }
  const next = () => { if (vld(step)) setStep(s => Math.min(s + 1, 4)) }
  const back = () => setStep(s => Math.max(s - 1, 0))
  const submit = () => { if (vld(4)) setSubmitted(true) }
  const fi = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { e.target.style.borderColor = RED; e.target.style.boxShadow = '0 0 0 3px rgba(229,57,53,0.1)' }
  const fo = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { e.target.style.borderColor = '#CBD5E1'; e.target.style.boxShadow = 'none' }
  const Err = ({ k }: { k: keyof FormData }) => errors[k] ? <span style={{ color: '#EF4444', fontSize: '12px' }}>{errors[k]}</span> : null
  const Badge = ({ txt, n }: { txt: string; n: number }) => <div style={{ backgroundColor: RED, color: '#fff', fontWeight: 700, fontSize: '14px', padding: '6px 16px', borderRadius: '6px', display: 'inline-block', marginBottom: '12px' }}>Etapa {n} de 5 — {txt}</div>
  const Card = ({ children }: { children: React.ReactNode }) => <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(0,0,0,0.04)', padding: '32px', marginBottom: '20px' }}>{children}</div>

  if (submitted) return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F3F6F8', fontFamily: 'Inter,sans-serif', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar activeItem="premio" />
        <main style={{ flex: 1, padding: '48px 32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', padding: '48px 40px', maxWidth: '600px', width: '100%', textAlign: 'center' }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>🏆</div>
            <h1 style={{ fontSize: '26px', fontWeight: 900, color: '#0F172A', marginBottom: '12px' }}>Inscrição Enviada com Sucesso!</h1>
            <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7, marginBottom: '8px' }}>Sua iniciativa <strong>"{form.nomeIniciativa}"</strong> foi submetida ao <strong>Prêmio Recife de Inovação 2026</strong>.</p>
            <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6, marginBottom: '28px' }}>Você receberá confirmação em <strong>{form.email}</strong>. Acompanhe na plataforma CORETO.</p>
            <div style={{ backgroundColor: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '20px', marginBottom: '28px', textAlign: 'left' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>Resumo da Submissão</div>
              {[['Iniciativa', form.nomeIniciativa], ['Organização', form.nomeOrganizacao], ['Categoria', cat?.label ?? '—'], ['Eixo', cat?.eixo ?? '—']].map(([l, v]) => (
                <div key={l} style={{ display: 'flex', gap: '8px', fontSize: '14px', marginBottom: '6px' }}>
                  <span style={{ color: '#94A3B8', minWidth: '110px' }}>{l}:</span>
                  <span style={{ fontWeight: 700, color: '#0F172A' }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="/legacy/premio-inovacao-rec" style={{ display: 'block', backgroundColor: RED, color: '#fff', fontWeight: 700, fontSize: '15px', padding: '13px 24px', borderRadius: '8px', textDecoration: 'none' }}>Voltar à Página do Prêmio</a>
              <button onClick={() => { setSubmitted(false); setStep(0); setForm(INIT) }} style={{ backgroundColor: '#F8FAFC', color: '#475569', fontWeight: 600, fontSize: '14px', padding: '12px 24px', borderRadius: '8px', border: '1px solid #E2E8F0', cursor: 'pointer' }}>Nova Inscrição</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F3F6F8', fontFamily: "Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif", display: 'flex', flexDirection: 'column', color: '#1A202C' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar activeItem="premio" />
        <main style={{ flex: 1, padding: '24px 32px 64px', maxWidth: '1080px', margin: '0 auto', width: '100%' }}>

          {/* Banner + Title */}
          <div style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(0,0,0,0.04)', padding: '24px', marginBottom: '24px' }}>
            <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', marginBottom: '20px', backgroundColor: '#003B6D' }}>
              <img src={bannerPremio} alt="Banner Prêmio Recife 2026" style={{ width: '100%', height: 'auto', maxHeight: '240px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h1 style={{ fontSize: '22px', fontWeight: 900, color: '#000', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '-0.01em' }}>Formulário de Inscrição — Prêmio Recife de Inovação 2026</h1>
                <p style={{ fontSize: '13px', color: '#64748B', margin: 0 }}>3ª Edição • Inscrições: <strong>30/09/2026 a 25/10/2026</strong> • Plataforma CORETO / Conecta Recife</p>
              </div>
              <img src={logoPremio} alt="Logo Prêmio REC" style={{ height: '60px', objectFit: 'contain' }} />
            </div>
          </div>

          {/* Progress */}
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '20px 28px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {STEPS.map((s, i) => {
                const active = i === step, done = i < step
                return (
                  <div key={s.label} style={{ display: 'flex', alignItems: 'center', flex: i < STEPS.length - 1 ? '1' : '0' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                      <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: done || active ? RED : '#F1F5F9', border: `2px solid ${done || active ? RED : '#E2E8F0'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 800, color: done || active ? '#fff' : '#94A3B8', transition: 'all 0.3s ease', flexShrink: 0 }}>
                        {done ? '✓' : s.icon}
                      </div>
                      <span style={{ fontSize: '11px', fontWeight: active ? 800 : 600, color: active ? RED : done ? '#475569' : '#94A3B8', whiteSpace: 'nowrap' }}>{s.label}</span>
                    </div>
                    {i < STEPS.length - 1 && <div style={{ flex: 1, height: '2px', backgroundColor: done ? RED : '#E2E8F0', margin: '0 4px', marginBottom: '18px' }} />}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Form Card */}
          <Card>

            {/* STEP 0 */}
            {step === 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div><Badge txt="Identificação da Organização" n={1} /><p style={{ fontSize: '14px', color: '#64748B', margin: 0, lineHeight: 1.6 }}>Preencha os dados da organização e do responsável. Os nomes não poderão ser alterados após a submissão (Cláusula 5.3 do Edital).</p></div>
                <div style={fg}><label style={lb}>Nome da Iniciativa / Solução *</label><input type="text" value={form.nomeIniciativa} onChange={e => setF('nomeIniciativa', e.target.value)} placeholder="Ex.: Plataforma de Conectividade Urbana Recife" style={{ ...s0, borderColor: errors.nomeIniciativa ? '#EF4444' : '#CBD5E1' }} onFocus={fi} onBlur={fo} /><Err k="nomeIniciativa" /></div>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <div style={{ ...fg, flex: '2 1 260px' }}><label style={lb}>Organização / Empresa / Instituição *</label><input type="text" value={form.nomeOrganizacao} onChange={e => setF('nomeOrganizacao', e.target.value)} placeholder="Razão social ou nome fantasia" style={{ ...s0, borderColor: errors.nomeOrganizacao ? '#EF4444' : '#CBD5E1' }} onFocus={fi} onBlur={fo} /><Err k="nomeOrganizacao" /></div>
                  <div style={{ ...fg, flex: '1 1 180px' }}><label style={lb}>CNPJ *</label><input type="text" value={form.cnpj} onChange={e => setF('cnpj', e.target.value)} placeholder="00.000.000/0001-00" style={{ ...s0, borderColor: errors.cnpj ? '#EF4444' : '#CBD5E1' }} onFocus={fi} onBlur={fo} /><Err k="cnpj" /></div>
                </div>
                <div style={fg}><label style={lb}>Tipo de Organização *</label><select value={form.tipoOrganizacao} onChange={e => setF('tipoOrganizacao', e.target.value)} style={{ ...s0, borderColor: errors.tipoOrganizacao ? '#EF4444' : '#CBD5E1' }} onFocus={fi} onBlur={fo}><option value="">Selecione o tipo...</option>{TIPO_ORG.map(o => <option key={o} value={o}>{o}</option>)}</select><Err k="tipoOrganizacao" /></div>
                <div style={fg}><label style={lb}>Nome do Responsável *</label><input type="text" value={form.nomeResponsavel} onChange={e => setF('nomeResponsavel', e.target.value)} placeholder="Nome completo" style={{ ...s0, borderColor: errors.nomeResponsavel ? '#EF4444' : '#CBD5E1' }} onFocus={fi} onBlur={fo} /><Err k="nomeResponsavel" /></div>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <div style={{ ...fg, flex: '1 1 220px' }}><label style={lb}>E-mail *</label><input type="email" value={form.email} onChange={e => setF('email', e.target.value)} placeholder="contato@organizacao.com.br" style={{ ...s0, borderColor: errors.email ? '#EF4444' : '#CBD5E1' }} onFocus={fi} onBlur={fo} /><Err k="email" /></div>
                  <div style={{ ...fg, flex: '1 1 180px' }}><label style={lb}>Telefone / WhatsApp *</label><input type="tel" value={form.telefone} onChange={e => setF('telefone', e.target.value)} placeholder="(81) 9 0000-0000" style={{ ...s0, borderColor: errors.telefone ? '#EF4444' : '#CBD5E1' }} onFocus={fi} onBlur={fo} /><Err k="telefone" /></div>
                </div>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <div style={{ ...fg, flex: '2 1 200px' }}><label style={lb}>Município</label><input type="text" value={form.municipio} onChange={e => setF('municipio', e.target.value)} style={s0} onFocus={fi} onBlur={fo} /></div>
                  <div style={{ ...fg, flex: '0 0 80px' }}><label style={lb}>UF</label><input type="text" value={form.uf} onChange={e => setF('uf', e.target.value)} maxLength={2} style={s0} onFocus={fi} onBlur={fo} /></div>
                  <div style={{ ...fg, flex: '2 1 200px' }}><label style={lb}>Site / Redes Sociais</label><input type="url" value={form.site} onChange={e => setF('site', e.target.value)} placeholder="https://www.organizacao.com.br" style={s0} onFocus={fi} onBlur={fo} /></div>
                </div>
                <div style={{ backgroundColor: '#FFF7ED', borderRadius: '8px', border: '1px solid #FED7AA', padding: '14px 16px' }}>
                  <p style={{ fontSize: '13px', color: '#92400E', margin: 0, lineHeight: 1.6 }}><strong>⚠️ Atenção:</strong> Para participar, a organização deve possuir <strong>CNPJ ativo no Município do Recife</strong>. Apenas <em>Startup Conectada com a Cidade</em> aceita inscrições de qualquer localidade, desde que comprovem impacto em Recife. Iniciativas premiadas em edições anteriores não poderão participar (Cláusula 4.3).</p>
                </div>
              </div>
            )}

            {/* STEP 1 */}
            {step === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div><Badge txt="Seleção de Categoria" n={2} /><p style={{ fontSize: '14px', color: '#64748B', margin: 0, lineHeight: 1.6 }}>Selecione a categoria. Cada proposta pode ser inscrita em apenas uma (Cláusula 5.5). Em 2026 são <strong>10 categorias</strong> em 4 eixos temáticos.</p></div>
                {errors.categoriaId && <div style={{ backgroundColor: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '8px', padding: '10px 14px' }}><span style={{ color: '#B91C1C', fontSize: '13px', fontWeight: 600 }}>⚠️ {errors.categoriaId}</span></div>}
                {EIXOS.map(eixo => (
                  <div key={eixo.label}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                      <div style={{ width: '4px', height: '20px', borderRadius: '2px', backgroundColor: eixo.color }} />
                      <span style={{ fontSize: '14px', fontWeight: 800, color: eixo.color, textTransform: 'uppercase', letterSpacing: '0.02em' }}>{eixo.label}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '12px' }}>
                      {CATEGORIES_2026.filter(c => c.eixo === eixo.label).map(c => {
                        const sel = form.categoriaId === c.id
                        return (
                          <div key={c.id} onClick={() => setF('categoriaId', c.id)} style={{ border: `2px solid ${sel ? c.eixoColor : '#E2E8F0'}`, borderRadius: '10px', padding: '16px', cursor: 'pointer', backgroundColor: sel ? eixo.bg : '#FAFAFA', transition: 'all 0.2s ease', display: 'flex', gap: '14px', alignItems: 'flex-start' }} onMouseEnter={e => { if (!sel) e.currentTarget.style.borderColor = c.eixoColor }} onMouseLeave={e => { if (!sel) e.currentTarget.style.borderColor = '#E2E8F0' }}>
                            <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: `2px solid ${sel ? c.eixoColor : '#CBD5E1'}`, backgroundColor: sel ? c.eixoColor : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', transition: 'all 0.2s ease' }}>
                              {sel && <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#fff' }} />}
                            </div>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: '15px', fontWeight: 800, color: sel ? c.eixoColor : '#0F172A', marginBottom: '4px' }}>{c.label}</div>
                              <div style={{ fontSize: '13px', color: '#475569', lineHeight: 1.55, marginBottom: '6px' }}>{c.description}</div>
                              <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 600 }}>👥 {c.publicAlvo}</div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
                <div style={{ backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0', padding: '16px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Categorias Especiais (não disponíveis para inscrição pública)</div>
                  <div style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.6 }}><strong>Inovação na Gestão Pública</strong> e <strong>Prêmio Marleny Gerbi de Mulheres Inovadoras</strong> são geridas pela Comissão Organizadora.</div>
                </div>
              </div>
            )}

            {/* STEP 2 — 4 CRITERIA */}
            {step === 2 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <div><Badge txt="Descrição da Iniciativa" n={3} /><p style={{ fontSize: '14px', color: '#64748B', margin: 0, lineHeight: 1.6 }}>Responda às 4 questões abaixo, alinhadas aos critérios de avaliação da banca técnica (Seção 9 do Edital). Todos os critérios têm o mesmo peso na nota final.</p></div>
                {cat && (
                  <div style={{ backgroundColor: '#F8FAFC', border: `1.5px solid ${cat.eixoColor}`, borderRadius: '8px', padding: '12px 16px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <div style={{ fontSize: '20px' }}>🏆</div>
                    <div><div style={{ fontSize: '13px', fontWeight: 800, color: cat.eixoColor }}>{cat.eixo}</div><div style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>{cat.label}</div></div>
                  </div>
                )}
                <div style={{ backgroundColor: '#EFF6FF', borderRadius: '8px', border: '1px solid #BFDBFE', padding: '14px 16px' }}>
                  <p style={{ fontSize: '13px', color: '#1D4ED8', margin: 0, lineHeight: 1.6 }}><strong>📋 Critérios de Avaliação 2026:</strong> Notas de 1 a 5 por avaliador externo. Nota final = média aritmética dos 4 critérios (igual peso). Em empate: Grau de Disrupção → Resultados → Replicabilidade → Foco nas Pessoas.</p>
                </div>
                {CRITERIOS.map(q => (
                  <div key={q.key} style={fg}>
                    <div style={{ marginBottom: '8px' }}><div style={{ ...sh, color: RED }}>{q.n}. {q.title} *</div><div style={ss}>{q.sub}</div></div>
                    <textarea value={form[q.key as keyof FormData] as string} onChange={e => setF(q.key as keyof FormData, e.target.value)} placeholder={q.ph} style={{ ...ta, borderColor: errors[q.key as keyof FormData] ? '#EF4444' : '#CBD5E1' }} onFocus={fi} onBlur={fo} />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><Err k={q.key as keyof FormData} /><span style={{ fontSize: '12px', color: '#94A3B8', marginLeft: 'auto' }}>{(form[q.key as keyof FormData] as string).length} car.</span></div>
                  </div>
                ))}
              </div>
            )}

            {/* STEP 3 — MATERIAIS */}
            {step === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div><Badge txt="Materiais Complementares" n={4} /><p style={{ fontSize: '14px', color: '#64748B', margin: 0, lineHeight: 1.6 }}>Adicione evidências: vídeos, apresentações, relatórios. Todos os campos são opcionais (Cláusula 5.4).</p></div>
                {[
                  { key: 'linkVideo', label: '🎬 Link do Vídeo de Apresentação (YouTube, Vimeo...)', ph: 'https://www.youtube.com/watch?v=...' },
                  { key: 'linkApresentacao', label: '📊 Link do Pitch Deck / Apresentação (Drive, Canva, Notion...)', ph: 'https://...' },
                  { key: 'linkAdicional', label: '🔗 Link Adicional (Relatório, Portfolio, Site do projeto...)', ph: 'https://...' },
                ].map(f => (
                  <div key={f.key} style={fg}><label style={lb}>{f.label}</label><input type="url" value={form[f.key as keyof FormData] as string} onChange={e => setF(f.key as keyof FormData, e.target.value)} placeholder={f.ph} style={s0} onFocus={fi} onBlur={fo} /></div>
                ))}
                <div style={fg}><label style={lb}>💬 Observações Adicionais</label><textarea value={form.observacoes} onChange={e => setF('observacoes', e.target.value)} placeholder="Informações complementares..." style={{ ...ta, minHeight: '100px' }} onFocus={fi} onBlur={fo} /></div>
                <div style={{ backgroundColor: '#F0FDF4', borderRadius: '8px', border: '1px solid #BBF7D0', padding: '14px 16px' }}><p style={{ fontSize: '13px', color: '#15803D', margin: 0, lineHeight: 1.6 }}><strong>💡 Dica:</strong> Vídeos demonstrativos, dashboards de métricas e relatórios fortalecem a avaliação. Certifique-se de que os links sejam públicos e acessíveis.</p></div>
              </div>
            )}

            {/* STEP 4 — REVISÃO */}
            {step === 4 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div><Badge txt="Revisão e Confirmação" n={5} /><p style={{ fontSize: '14px', color: '#64748B', margin: 0, lineHeight: 1.6 }}>Revise as informações antes de enviar. Após a submissão, dados dos membros não podem ser alterados (Cláusula 5.3).</p></div>

                {/* Identificação summary */}
                <div style={{ borderRadius: '10px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
                  <div style={{ backgroundColor: RED, padding: '10px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#fff', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase' }}>Identificação</span>
                    <button onClick={() => setStep(0)} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.5)', color: '#fff', fontSize: '12px', borderRadius: '4px', padding: '2px 8px', cursor: 'pointer' }}>Editar</button>
                  </div>
                  <div style={{ padding: '16px', backgroundColor: '#F8FAFC', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                    {[['Iniciativa', form.nomeIniciativa], ['Organização', form.nomeOrganizacao], ['CNPJ', form.cnpj], ['Tipo', form.tipoOrganizacao], ['Responsável', form.nomeResponsavel], ['E-mail', form.email], ['Telefone', form.telefone], ['Município', `${form.municipio} / ${form.uf}`]].map(([l, v]) => (
                      <div key={l}><div style={{ fontSize: '11px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>{l}</div><div style={{ fontSize: '13px', fontWeight: 600, color: '#0F172A' }}>{v || '—'}</div></div>
                    ))}
                  </div>
                </div>

                {/* Categoria summary */}
                <div style={{ borderRadius: '10px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
                  <div style={{ backgroundColor: cat?.eixoColor ?? RED, padding: '10px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#fff', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase' }}>Categoria</span>
                    <button onClick={() => setStep(1)} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.5)', color: '#fff', fontSize: '12px', borderRadius: '4px', padding: '2px 8px', cursor: 'pointer' }}>Editar</button>
                  </div>
                  <div style={{ padding: '16px', backgroundColor: '#F8FAFC' }}>
                    <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>{cat?.label ?? '—'}</div>
                    <div style={{ fontSize: '13px', color: '#475569' }}>Eixo: <strong>{cat?.eixo ?? '—'}</strong></div>
                  </div>
                </div>

                {/* Iniciativa summary */}
                <div style={{ borderRadius: '10px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
                  <div style={{ backgroundColor: '#475569', padding: '10px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#fff', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase' }}>Descrição da Iniciativa</span>
                    <button onClick={() => setStep(2)} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.5)', color: '#fff', fontSize: '12px', borderRadius: '4px', padding: '2px 8px', cursor: 'pointer' }}>Editar</button>
                  </div>
                  <div style={{ padding: '16px', backgroundColor: '#F8FAFC', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[['Grau de Disrupção', form.q_disrupcao], ['Resultados', form.q_resultados], ['Replicabilidade e Potencial de Escala', form.q_replicabilidade], ['Foco nas Pessoas, Território e Ecossistema', form.q_foco_pessoas]].map(([l, v]) => (
                      <div key={l}><div style={{ fontSize: '12px', fontWeight: 800, color: RED, marginBottom: '4px', textTransform: 'uppercase' }}>{l}</div><div style={{ fontSize: '13px', color: '#334155', lineHeight: 1.6, backgroundColor: '#fff', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '10px 12px', maxHeight: '72px', overflow: 'hidden' }}>{v || <em style={{ color: '#94A3B8' }}>Não preenchido</em>}</div></div>
                    ))}
                  </div>
                </div>

                {/* Declarações */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A' }}>Declarações Obrigatórias</div>

                  <label style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', cursor: 'pointer' }}>
                    <input type="checkbox" checked={form.iniciativaJaPremiadaAntes} onChange={e => setF('iniciativaJaPremiadaAntes', e.target.checked)} style={{ marginTop: '3px', width: '16px', height: '16px', accentColor: RED }} />
                    <span style={{ fontSize: '13px', color: '#334155', lineHeight: 1.6 }}>A iniciativa submetida <strong>FOI premiada</strong> em edições anteriores do Prêmio Recife de Inovação. <em style={{ color: '#94A3B8', display: 'block', fontSize: '12px' }}>Marque apenas se a iniciativa específica foi premiada antes — a organização pode inscrever outros projetos.</em></span>
                  </label>
                  {errors.iniciativaJaPremiadaAntes && <div style={{ backgroundColor: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '6px', padding: '10px 14px' }}><span style={{ color: '#B91C1C', fontSize: '13px' }}>⛔ {errors.iniciativaJaPremiadaAntes}</span></div>}

                  <label style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', cursor: 'pointer' }}>
                    <input type="checkbox" checked={form.aceitaTermos} onChange={e => setF('aceitaTermos', e.target.checked)} style={{ marginTop: '3px', width: '16px', height: '16px', accentColor: RED }} />
                    <span style={{ fontSize: '13px', color: '#334155', lineHeight: 1.6 }}>Li e aceito integralmente as normas do <strong>Edital de Chamamento Público Nº XXX/2026</strong> do Prêmio Recife de Inovação 2026, incluindo regras sobre elegibilidade, avaliação e premiação. *</span>
                  </label>
                  <Err k="aceitaTermos" />

                  <label style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', cursor: 'pointer' }}>
                    <input type="checkbox" checked={form.autorizaLGPD} onChange={e => setF('autorizaLGPD', e.target.checked)} style={{ marginTop: '3px', width: '16px', height: '16px', accentColor: RED }} />
                    <span style={{ fontSize: '13px', color: '#334155', lineHeight: 1.6 }}>Autorizo a Prefeitura do Recife a utilizar os dados e imagens fornecidos para fins de divulgação e gestão do Prêmio, conforme <strong>LGPD (Lei nº 13.709/2018)</strong> e Cláusulas 13.1–13.6 do Edital. *</span>
                  </label>
                  <Err k="autorizaLGPD" />
                </div>
              </div>
            )}

          </Card>

          {/* Navigation */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: '13px', color: '#94A3B8' }}>Etapa {step + 1} de {STEPS.length}</div>
            <div style={{ display: 'flex', gap: '12px' }}>
              {step > 0 && <button onClick={back} style={{ padding: '11px 24px', borderRadius: '8px', border: '1.5px solid #CBD5E1', backgroundColor: '#fff', color: '#475569', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }} onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#F8FAFC')} onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#fff')}>← Voltar</button>}
              {step < 4
                ? <button onClick={next} style={{ padding: '11px 28px', borderRadius: '8px', border: 'none', backgroundColor: RED, color: '#fff', fontWeight: 700, fontSize: '14px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(229,57,53,0.25)' }} onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#c62828')} onMouseLeave={e => (e.currentTarget.style.backgroundColor = RED)}>Avançar →</button>
                : <button onClick={submit} style={{ padding: '11px 32px', borderRadius: '8px', border: 'none', backgroundColor: '#15803d', color: '#fff', fontWeight: 800, fontSize: '14px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(21,128,61,0.25)', display: 'flex', alignItems: 'center', gap: '8px' }} onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#166534')} onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#15803d')}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>Enviar Inscrição</button>
              }
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <a href="/legacy/premio-inovacao-rec" style={{ fontSize: '13px', color: '#94A3B8', textDecoration: 'none' }} onMouseEnter={e => (e.currentTarget.style.color = RED)} onMouseLeave={e => (e.currentTarget.style.color = '#94A3B8')}>← Voltar à página do Prêmio Recife de Inovação</a>
          </div>

        </main>
      </div>
    </div>
  )
}

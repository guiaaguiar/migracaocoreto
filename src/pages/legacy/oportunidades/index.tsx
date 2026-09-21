import { useState, useMemo } from 'react'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import bannerOportunidades from '../../../assets/banner-oportunidades.png'

interface Oportunidade {
  id: string
  titulo: string
  organizacao: string
  logoText: string
  logoBg: string
  dataLimite: string
  valor: string
  areas: string[]
  apoio: string[]
  descricao: string
  requisitos?: string[]
  beneficios?: string[]
  status?: string
}

const MOCK_OPORTUNIDADES: Oportunidade[] = [
  {
    id: '1',
    titulo: 'Energia Renovável Challenge',
    organizacao: 'Polotec / UFPE',
    logoText: 'polotec',
    logoBg: '#BE123C',
    dataLimite: '31/10/2026',
    valor: 'R$ 500',
    areas: ['Energia e Sustentabilidade', 'Tecnologia da informação e comunicação'],
    apoio: ['Mentoria técnica', 'Acesso a laboratórios'],
    descricao:
      'Desafio aberto para captação de soluções inovadoras em energia limpa, solar, eólica e otimização de eficiência energética no ambiente urbano.',
    requisitos: [
      'Propostas de startups de base tecnológica (TRL 4 ou superior)',
      'Apresentação de protótipo ou MVP funcional',
      'Equipe dedicada com pelo menos 2 integrantes',
    ],
    beneficios: [
      'Acesso ao parque de testes do Polotec UFPE',
      'Mentoria com especialistas de mercado',
      'Premiação em dinheiro e visibilidade institucional',
    ],
    status: 'Inscrições Abertas',
  },
  {
    id: '2',
    titulo: 'Desafio Inclusão Financeira',
    organizacao: 'Emprel / Prefeitura do Recife',
    logoText: 'Emprel',
    logoBg: '#003B6D',
    dataLimite: '31/10/2026',
    valor: 'R$ 5.000.000',
    areas: ['Fintech', 'GovTech', 'Inclusão Social'],
    apoio: ['Fomento / recursos não reembolsáveis (editais de inovação)', 'Programas de aceleração'],
    descricao:
      'Iniciativa voltada ao desenvolvimento de tecnologias financeiras inclusivas para populações de baixa renda, microempreendedores e feirantes locais.',
    requisitos: [
      'Soluções com foco em acessibilidade e facilidade de uso',
      'Integração com sistemas municipais ou APIs abertas',
      'Plano de sustentabilidade financeira a longo prazo',
    ],
    beneficios: [
      'Subvenção econômica até R$ 5.000.000 para contratados via EITA',
      'Oportunidade de contratação pública direta',
      'Suporte regulatório e jurídico especializado',
    ],
    status: 'Inscrições Abertas',
  },
  {
    id: '3',
    titulo: 'Agro Sustentável PE',
    organizacao: 'ABSD / Grite',
    logoText: 'grite',
    logoBg: '#4C1D95',
    dataLimite: '31/10/2026',
    valor: 'R$ 5.000',
    areas: [
      'Cidades, mobilidade e urbanismo',
      'Meio ambiente e sustentabilidade',
      'Agronegócio e alimentação',
    ],
    apoio: ['Fomento / recursos não reembolsáveis (editais de inovação)'],
    descricao:
      'Programa de incentivo a agrotechs e projetos sustentáveis de produção alimentícia urbana, hortas comunitárias e redução de desperdício.',
    requisitos: [
      'Startups ou grupos de pesquisa do Estado de Pernambuco',
      'Foco em impacto ambiental positivo e economia circular',
      'Disponibilidade para imersões presenciais em Recife',
    ],
    beneficios: [
      'Aporte direto para compra de equipamentos',
      'Conexão com rede de produtores e distribuidores regionais',
      'Certificação de impacto ambiental verde',
    ],
    status: 'Inscrições Abertas',
  },
  {
    id: '4',
    titulo: 'Hack Segurança Urbana',
    organizacao: 'Polotec / UFPE',
    logoText: 'polotec',
    logoBg: '#BE123C',
    dataLimite: '30/10/2026',
    valor: 'R$ 500.022',
    areas: ['Cidades, mobilidade e urbanismo', 'Tecnologia da informação e comunicação'],
    apoio: ['Programas de aceleração', 'Investimento de risco (investidor-anjo, fundos)'],
    descricao:
      'Hackathon focado em inteligência artificial e visão computacional para melhoria da segurança pública municipal e monitoramento preventivo.',
    requisitos: [
      'Desenvolvimento de algoritmos em tempo real',
      'Uso de dados abertos municipais',
      'Equipes de 3 a 5 participantes',
    ],
    beneficios: [
      'Premiação para as 3 melhores equipes',
      'Aceleração rápida de 3 meses no Polotec',
      'Possibilidade de investimento anjo',
    ],
    status: 'Em Breve Encerramento',
  },
  {
    id: '5',
    titulo: 'Desafio Turismo Inteligente',
    organizacao: 'Emprel / Prefeitura do Recife',
    logoText: 'Emprel',
    logoBg: '#003B6D',
    dataLimite: '28/10/2026',
    valor: 'R$ 50.000',
    areas: ['Cidades, mobilidade e urbanismo', 'Economia Criativa & Cultura'],
    apoio: ['Programas de aceleração', 'Mentoria com especialistas'],
    descricao:
      'Busca por soluções digitais interativas e imersivas (Realidade Aumentada, Geolocalização) para enriquecer a experiência de turistas no Recife Antigo.',
    requisitos: [
      'Aplicativo móvel ou web responsiva',
      'Conteúdo multilíngue e acessível',
      'Interatividade com patrimônio histórico da cidade',
    ],
    beneficios: [
      'Implantar a solução no ecossistema turístico da cidade',
      'Aporte financeiro de R$ 50.000',
      'Divulgação nos canais oficiais da Prefeitura',
    ],
    status: 'Inscrições Abertas',
  },
  {
    id: '6',
    titulo: 'Saúde Mental Digital',
    organizacao: 'Emprel / Prefeitura do Recife',
    logoText: 'Emprel',
    logoBg: '#003B6D',
    dataLimite: '07/10/2026',
    valor: 'R$ 500.022',
    areas: ['Saúde', 'Educação', 'Tecnologia da informação e comunicação'],
    apoio: ['Programas de aceleração'],
    descricao:
      'Plataformas e ferramentas digitais focadas no acolhimento de saúde mental, bem-estar comunitário e suporte psicológico para jovens e educadores.',
    requisitos: [
      'Validação clínica ou embasamento teórico comprovado',
      'Garantia de sigilo de dados conforme LGPD',
      'Interface intuitiva para jovens e adultos',
    ],
    beneficios: [
      'Piloto de aplicação na rede municipal de ensino',
      'Acompanhamento com profissionais de saúde pública',
      'Verba para expansão e escala da tecnologia',
    ],
    status: 'Inscrições Abertas',
  },
  {
    id: '7',
    titulo: 'Cultura Maker Hackathon',
    organizacao: 'Polotec / UFPE',
    logoText: 'polotec',
    logoBg: '#BE123C',
    dataLimite: '06/10/2026',
    valor: 'R$ 50.000',
    areas: ['Educação', 'Cidades, mobilidade e urbanismo'],
    apoio: ['Investimento de risco (investidor-anjo, fundos, cor...'],
    descricao:
      'Maratona maker para prototipagem de soluções físicas e digitais integradas visando laboratórios fablabs comunitários em escolas municipais.',
    requisitos: [
      'Projetos open-source ou hardware aberto',
      'Uso de impressão 3D, IoT ou corte a laser',
      'Interesse em engajamento educacional infantil',
    ],
    beneficios: [
      'Bolsa de fomento maker de R$ 50.000',
      'Acesso ilimitado ao FabLab Polotec',
      'Mentoria com especialistas de hardware',
    ],
    status: 'Inscrições Abertas',
  },
  {
    id: '8',
    titulo: 'Mobilidade Inteligente & Trânsito Seguro',
    organizacao: 'SECTI Recife / CTTU',
    logoText: 'SECTI',
    logoBg: '#10B981',
    dataLimite: '15/11/2026',
    valor: 'R$ 1.200.000',
    areas: ['Cidades, mobilidade e urbanismo', 'Inteligência Artificial', 'Visão Computacional'],
    apoio: ['Contratação Sandbox', 'Mentoria Técnica', 'Dados Abertos'],
    descricao:
      'Captação de soluções de visão computacional e algoritmos de otimização semafórica para redução de gargalos de tráfego e proteção aos pedestres e ciclistas.',
    requisitos: [
      'TRL 6+',
      'Capacidade de integração com câmeras públicas da CTTU',
      'Conformidade com a LGPD',
    ],
    beneficios: [
      'Teste em ambiente real com dados ao vivo da cidade',
      'Aporte financeiro para piloto de 6 meses',
      'Possibilidade de contrato de fornecimento permanente',
    ],
    status: 'Inscrições Abertas',
  },
]

export default function OportunidadesPage() {
  const [oportunidadesList] = useState<Oportunidade[]>(MOCK_OPORTUNIDADES)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedOportunidade, setSelectedOportunidade] = useState<Oportunidade | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const filteredOportunidades = useMemo(() => {
    const query = searchTerm.toLowerCase().trim()
    if (!query) return oportunidadesList

    return oportunidadesList.filter(item => {
      const matchTitle = item.titulo.toLowerCase().includes(query)
      const matchOrg = item.organizacao.toLowerCase().includes(query)
      const matchDesc = item.descricao.toLowerCase().includes(query)
      const matchAreas = item.areas.some(a => a.toLowerCase().includes(query))
      const matchApoio = item.apoio.some(ap => ap.toLowerCase().includes(query))

      return matchTitle || matchOrg || matchDesc || matchAreas || matchApoio
    })
  }, [oportunidadesList, searchTerm])

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
        <Sidebar activeItem="oportunidades" />

        {/* ── Main Content Area ── */}
        <main style={{ flex: 1, padding: '24px 36px 64px', maxWidth: '1280px' }}>
          {/* ── Top Hero Banner Container ── */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 25px -5px rgba(0, 59, 109, 0.25)',
              marginBottom: '24px',
              minHeight: '190px',
              backgroundColor: '#003B6D',
            }}
          >
            <img
              src={bannerOportunidades}
              alt="Oportunidades Banner"
              style={{
                width: '100%',
                height: '100%',
                maxHeight: '220px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          {/* Subtitle description paragraph */}
          <p
            style={{
              fontSize: '15px',
              lineHeight: 1.65,
              color: '#334155',
              marginBottom: '28px',
              fontWeight: 500,
            }}
          >
            Aqui você vai encontrar desafios, trilhas, startups e conexões que podem transformar sua jornada! Seja para
            testar novas ideias, aprender com especialistas ou acelerar seu negócio, CORETO traz oportunidades que
            fazem a diferença. Conecte-se com incubadoras, participe de programas de aceleração e mergulhe em desafios
            que vão impulsar seu crescimento.
          </p>

          {/* ── Search Bar Input Card ── */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '16px 20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
              marginBottom: '32px',
              border: '1px solid #E2E8F0',
            }}
          >
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  left: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  pointerEvents: 'none',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Inicie uma busca"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 48px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  fontSize: '15px',
                  color: '#1E293B',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.02)',
                }}
                onFocus={e => (e.target.style.borderColor = '#00a8b5')}
                onBlur={e => (e.target.style.borderColor = '#E2E8F0')}
              />
            </div>
          </div>

          {/* ── Opportunity Cards Grid ── */}
          {filteredOportunidades.length === 0 ? (
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '48px 24px',
                textAlign: 'center',
                border: '1px dashed #CBD5E1',
              }}
            >
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>🔍</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                Nenhuma oportunidade encontrada
              </h3>
              <p style={{ color: '#64748B', fontSize: '14px', marginBottom: '16px' }}>
                Tente ajustar os termos da busca para encontrar desafios e programas.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                style={{
                  backgroundColor: '#E0F2FE',
                  color: '#0369A1',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer',
                }}
              >
                Limpar Busca
              </button>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '24px',
              }}
            >
              {filteredOportunidades.map(item => (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedOportunidade(item)
                    setIsSubmitted(false)
                  }}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
                    padding: '24px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 14px 24px -6px rgba(0, 0, 0, 0.09)'
                    e.currentTarget.style.borderColor = '#00a8b5'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.04)'
                    e.currentTarget.style.borderColor = '#E2E8F0'
                  }}
                >
                  {/* Top Header Row: Logo Badge + Title */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        backgroundColor: item.logoBg,
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '13px',
                        flexShrink: 0,
                        border: '2px solid #E2E8F0',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.08)',
                        textAlign: 'center',
                        padding: '4px',
                      }}
                    >
                      {item.logoText}
                    </div>
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#1E293B',
                        margin: 0,
                        lineHeight: 1.3,
                      }}
                    >
                      {item.titulo}
                    </h3>
                  </div>

                  {/* Deadline Tag Pill */}
                  <div style={{ marginBottom: '14px' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '4px 12px',
                        borderRadius: '16px',
                        border: '1.5px solid #00a8b5',
                        color: '#00a8b5',
                        fontSize: '13px',
                        fontWeight: 600,
                        backgroundColor: '#ffffff',
                      }}
                    >
                      <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                        <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round" />
                        <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round" />
                        <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                      </svg>
                      {item.dataLimite}
                    </span>
                  </div>

                  {/* Funding Value */}
                  <div style={{ marginBottom: '16px' }}>
                    <span
                      style={{
                        fontSize: '20px',
                        fontWeight: 800,
                        color: '#0F172A',
                      }}
                    >
                      {item.valor}
                    </span>
                  </div>

                  {/* Áreas Section */}
                  <div style={{ marginBottom: '14px' }}>
                    <div
                      style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#64748B',
                        marginBottom: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00a8b5" strokeWidth="2">
                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
                        <line x1="7" y1="7" x2="7.01" y2="7" />
                      </svg>
                      Áreas
                    </div>
                    {item.areas.length > 0 ? (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {item.areas.map((area, idx) => (
                          <span
                            key={idx}
                            style={{
                              backgroundColor: '#00a8b5',
                              color: '#ffffff',
                              borderRadius: '16px',
                              padding: '4px 12px',
                              fontSize: '12px',
                              fontWeight: 600,
                              lineHeight: 1.3,
                            }}
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span style={{ fontSize: '13px', color: '#94A3B8' }}>Não especificado</span>
                    )}
                  </div>

                  {/* Apoio Oferecido Section */}
                  <div style={{ marginTop: 'auto' }}>
                    <div
                      style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#64748B',
                        marginBottom: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00a8b5" strokeWidth="2">
                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
                        <line x1="7" y1="7" x2="7.01" y2="7" />
                      </svg>
                      Apoio Oferecido
                    </div>
                    {item.apoio.length > 0 ? (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {item.apoio.map((ap, idx) => (
                          <span
                            key={idx}
                            style={{
                              backgroundColor: '#00a8b5',
                              color: '#ffffff',
                              borderRadius: '16px',
                              padding: '4px 12px',
                              fontSize: '12px',
                              fontWeight: 600,
                              lineHeight: 1.3,
                            }}
                          >
                            {ap}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span style={{ fontSize: '13px', color: '#94A3B8' }}>Não especificado</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* ── Detail Modal ── */}
      {selectedOportunidade && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: '20px',
          }}
          onClick={() => setSelectedOportunidade(null)}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              padding: '32px',
              position: 'relative',
              border: '1px solid #E2E8F0',
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedOportunidade(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                border: 'none',
                background: '#F1F5F9',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#64748B',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#E2E8F0')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#F1F5F9')}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: selectedOportunidade.logoBg,
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '14px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.12)',
                  textAlign: 'center',
                }}
              >
                {selectedOportunidade.logoText}
              </div>
              <div>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', margin: 0, lineHeight: 1.2 }}>
                  {selectedOportunidade.titulo}
                </h2>
                <div style={{ fontSize: '14px', color: '#64748B', marginTop: '4px', fontWeight: 500 }}>
                  Organizado por: <strong style={{ color: '#00a8b5' }}>{selectedOportunidade.organizacao}</strong>
                </div>
              </div>
            </div>

            {/* Key Metrics Strip */}
            <div
              style={{
                display: 'flex',
                gap: '20px',
                padding: '16px 20px',
                backgroundColor: '#F8FAFC',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                marginBottom: '24px',
              }}
            >
              <div>
                <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>
                  Aporte / Prêmio
                </div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginTop: '2px' }}>
                  {selectedOportunidade.valor}
                </div>
              </div>
              <div style={{ width: '1px', backgroundColor: '#CBD5E1' }} />
              <div>
                <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>
                  Prazo Limite
                </div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#00a8b5', marginTop: '4px' }}>
                  {selectedOportunidade.dataLimite}
                </div>
              </div>
            </div>

            {/* Description */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>
                Sobre esta Oportunidade
              </h4>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#475569', margin: 0 }}>
                {selectedOportunidade.descricao}
              </p>
            </div>

            {/* Areas & Apoio Tags */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#1E293B', marginBottom: '10px' }}>
                Áreas Temáticas
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                {selectedOportunidade.areas.map((area, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor: '#00a8b5',
                      color: '#fff',
                      padding: '5px 14px',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: 600,
                    }}
                  >
                    {area}
                  </span>
                ))}
              </div>

              <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#1E293B', marginBottom: '10px' }}>
                Apoio & Recursos Oferecidos
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedOportunidade.apoio.map((ap, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor: '#00a8b5',
                      color: '#fff',
                      padding: '5px 14px',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: 600,
                    }}
                  >
                    {ap}
                  </span>
                ))}
              </div>
            </div>

            {/* Requisitos & Benefícios lists */}
            {selectedOportunidade.requisitos && (
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>
                  Requisitos de Elegibilidade
                </h4>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#475569', fontSize: '14px', lineHeight: 1.6 }}>
                  {selectedOportunidade.requisitos.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Modal CTA / Submission Form */}
            <div style={{ paddingTop: '16px', borderTop: '1px solid #E2E8F0', textAlign: 'center' }}>
              {isSubmitted ? (
                <div
                  style={{
                    backgroundColor: '#F0FDF4',
                    border: '1px solid #BBF7D0',
                    color: '#166534',
                    padding: '16px',
                    borderRadius: '12px',
                    fontWeight: 600,
                    fontSize: '15px',
                  }}
                >
                  🎉 Interesse registrado com sucesso! Entraremos em contato para orientar a submissão formal.
                </div>
              ) : (
                <button
                  onClick={() => setIsSubmitted(true)}
                  style={{
                    backgroundColor: '#00a8b5',
                    color: '#ffffff',
                    border: 'none',
                    padding: '14px 36px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '15px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(0, 168, 181, 0.35)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#008b96')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#00a8b5')}
                >
                  Inscrever-se nesta Oportunidade
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Floating Coreto Emblem Widget ── */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 50,
          cursor: 'pointer',
          filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.15))',
          transition: 'transform 0.2s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        title="CORETO Ecossistema"
      >
        <svg width="48" height="48" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="30" r="16" fill="#00A8B5" />
          <circle cx="70" cy="50" r="16" fill="#E05C5C" />
          <circle cx="50" cy="70" r="16" fill="#9333EA" />
          <circle cx="30" cy="50" r="16" fill="#F59E0B" />
          <circle cx="50" cy="50" r="10" fill="#FFFFFF" />
          <circle cx="50" cy="50" r="5" fill="#0F172A" />
        </svg>
      </div>
    </div>
  )
}

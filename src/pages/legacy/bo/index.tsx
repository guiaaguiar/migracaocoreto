import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'

// Interfaces
interface Organization {
  id: string
  name: string
  tags: string[]
}

interface Initiative {
  id: string
  status: string
  title: string
  date: string
  link: string
}

interface UserItem {
  id: string
  name: string
  email: string
  status: 'completo' | 'incompleto'
  date?: string
  tags?: string[]
}

const INITIAL_ORGANIZATIONS: Organization[] = [
  { id: 'org-1', name: 'Emprel', tags: ['eita', 'destaque'] },
  { id: 'org-2', name: 'Polotec', tags: ['NIT', 'Parceira', 'eita', 'destaque'] },
  { id: 'org-3', name: 'Teste LTDA', tags: ['NIT', 'IoT'] },
  { id: 'org-4', name: 'SECTI', tags: ['eita', 'organizador-hacker'] },
  { id: 'org-5', name: 'asdasdsada', tags: ['NIT', 'eita'] },
]

const INITIAL_INITIATIVES: Initiative[] = [
  {
    id: 'init-1',
    status: 'Ativo',
    title: 'Historiando Recife ()',
    date: '04/11/2024 16:44',
    link: 'https://coreto.recife.pe.gov.br/complete-inscricao/1730749484027x164971235190551680',
  },
  {
    id: 'init-2',
    status: 'Ativo',
    title: 'Protege Recife ()',
    date: '04/11/2024 16:44',
    link: 'https://coreto.recife.pe.gov.br/complete-inscricao/173074948204x759475313477279000',
  },
  {
    id: 'init-3',
    status: 'Ativo',
    title: 'SAÚDE EM AÇÃO: PRODUÇÃO DE MATERIAL E CONTEÚDO EDUCATIVO PARA AÇÕES DE DIVULGAÇÃO CIENTÍFICA E EDUCAÇÃO EM SAÚDE SOBRE CHIKUNGUNYA ()',
    date: '04/11/2024 16:44',
    link: 'https://coreto.recife.pe.gov.br/complete-inscricao/1730749484217x677865333818280100',
  },
  {
    id: 'init-4',
    status: 'Ativo',
    title: 'AVALIAÇÃO DE FERRAMENTAS PARA A MELHORA DA COMUNICAÇÃO ENTRE SURDOS E OUVINTES DA ÁREA DE SAÚDE ()',
    date: '04/11/2024 16:44',
    link: 'https://coreto.recife.pe.gov.br/complete-inscricao/1730749484251x250235794954298140',
  },
]

const INITIAL_USERS: UserItem[] = [
  {
    id: 'user-1',
    name: 'Casé Pedro',
    email: 'pedro.case@recife.pe.gov.br',
    status: 'incompleto',
  },
  {
    id: 'user-2',
    name: 'Casé Pedro',
    email: 'pedrocasefilho2208@gmail.com',
    status: 'incompleto',
  },
  {
    id: 'user-3',
    name: 'Ceci Designer',
    email: 'ceci@design.com.br',
    status: 'completo',
    date: '11/08/2025 10:52',
    tags: ['AdTech'],
  },
  {
    id: 'user-4',
    name: 'Gabre',
    email: 'gabrielchamie@gritesolucoes.com.br',
    status: 'completo',
    date: '08/08/2025 08:18',
    tags: ['EdTech', 'Inovação aberta', 'Educação', 'Empreendedorismo', 'Tecnologia da Informação'],
  },
  {
    id: 'user-5',
    name: 'Gabriel Chamie',
    email: 'gabrielchamie@gmail.com',
    status: 'completo',
    date: '03/10/2025 13:50',
    tags: ['Educação', 'Tecnologia da Informação', 'Inovação aberta'],
  },
]

import { useEffect } from 'react'
import { boService, type BoOrganization, type BoInitiative, type BoUser } from '../../../services/boService'

export default function LegacyBoPage() {
  // State for Lists & Searching
  const [organizations, setOrganizations] = useState<Organization[]>(INITIAL_ORGANIZATIONS)
  const [searchOrg, setSearchOrg] = useState<string>('')

  const [initiatives, setInitiatives] = useState<Initiative[]>(INITIAL_INITIATIVES)
  const [searchInit, setSearchInit] = useState<string>('')

  const [users, setUsers] = useState<UserItem[]>(INITIAL_USERS)
  const [searchUser, setSearchUser] = useState<string>('')

  useEffect(() => {
    let isMounted = true

    // Carregar iniciativas reais
    boService.getInitiatives()
      .then((data: BoInitiative[]) => {
        if (!isMounted || !data || data.length === 0) return
        setInitiatives(data.map(i => ({
          id: i.id,
          status: i.status,
          title: i.title,
          date: i.date || 'Recente',
          link: i.link || '#',
        })))
      })
      .catch(() => {})

    // Carregar usuários reais
    boService.getUsers()
      .then((data: BoUser[]) => {
        if (!isMounted || !data || data.length === 0) return
        setUsers(data.map(u => ({
          id: u.id,
          name: u.name,
          email: u.email,
          status: u.status,
          date: u.date,
          tags: u.tags || [],
        })))
      })
      .catch(() => {})

    // Carregar organizações reais
    boService.getOrganizations()
      .then((data: BoOrganization[]) => {
        if (!isMounted || !data || data.length === 0) return
        setOrganizations(data.map(o => ({
          id: o.id,
          name: o.name,
          tags: o.tags || [],
        })))
      })
      .catch(() => {})

    return () => {
      isMounted = false
    }
  }, [])

  // Modals state
  const [isOrgModalOpen, setIsOrgModalOpen] = useState<boolean>(false)
  const [editingOrg, setEditingOrg] = useState<Organization | null>(null)
  const [newOrgName, setNewOrgName] = useState<string>('')
  const [newOrgTags, setNewOrgTags] = useState<string>('')
  const [newOrgCnpj, setNewOrgCnpj] = useState<string>('')
  const [newOrgEmail, setNewOrgEmail] = useState<string>('')
  const [newOrgDesc, setNewOrgDesc] = useState<string>('')
  const [newOrgSite, setNewOrgSite] = useState<string>('')
  const [newOrgInstagram, setNewOrgInstagram] = useState<string>('')
  const [newOrgLinkedin, setNewOrgLinkedin] = useState<string>('')
  const [newOrgYoutube, setNewOrgYoutube] = useState<string>('')
  const [newOrgUserPermissions, setNewOrgUserPermissions] = useState<string>('')
  const [newOrgTopics, setNewOrgTopics] = useState<string>('')
  const [newOrgLogoName, setNewOrgLogoName] = useState<string>('')
  const [newOrgBannerName, setNewOrgBannerName] = useState<string>('')

  const [isInitModalOpen, setIsInitModalOpen] = useState<boolean>(false)
  const [editingInit, setEditingInit] = useState<Initiative | null>(null)
  const [newInitTitle, setNewInitTitle] = useState<string>('')
  const [newInitLink, setNewInitLink] = useState<string>('')
  const [newInitCnpj, setNewInitCnpj] = useState<string>('')
  const [newInitUser, setNewInitUser] = useState<string>('')
  const [newInitPresentationLink, setNewInitPresentationLink] = useState<string>('')
  const [newInitDesc, setNewInitDesc] = useState<string>('')
  const [newInitSite, setNewInitSite] = useState<string>('')
  const [newInitInstagram, setNewInitInstagram] = useState<string>('')
  const [newInitLinkedin, setNewInitLinkedin] = useState<string>('')
  const [newInitYoutube, setNewInitYoutube] = useState<string>('')
  const [newInitLogoName, setNewInitLogoName] = useState<string>('')
  const [newInitBannerName, setNewInitBannerName] = useState<string>('')
  const [newInitAssuntos, setNewInitAssuntos] = useState<string>('')
  const [newInitOQueSou, setNewInitOQueSou] = useState<string>('')
  const [newInitAreaTematica, setNewInitAreaTematica] = useState<string>('')
  const [newInitTrl, setNewInitTrl] = useState<string>('')
  const [newInitEstagioInovacao, setNewInitEstagioInovacao] = useState<string>('')
  const [newInitApoioProcuro, setNewInitApoioProcuro] = useState<string>('')
  const [newInitParceiroProcuro, setNewInitParceiroProcuro] = useState<string>('')

  const [isUserModalOpen, setIsUserModalOpen] = useState<boolean>(false)
  const [editingUser, setEditingUser] = useState<UserItem | null>(null)
  const [newUserName, setNewUserName] = useState<string>('')
  const [newUserEmail, setNewUserEmail] = useState<string>('')
  const [newUserTags, setNewUserTags] = useState<string>('')
  const [newUserCpf, setNewUserCpf] = useState<string>('')
  const [newUserAvatarName, setNewUserAvatarName] = useState<string>('')
  const [newUserOrg, setNewUserOrg] = useState<string>('')
  const [newUserAtuacao, setNewUserAtuacao] = useState<string>('')
  const [newUserAssuntos, setNewUserAssuntos] = useState<string>('')
  const [newUserPhone, setNewUserPhone] = useState<string>('')

  const [isNotifyModalOpen, setIsNotifyModalOpen] = useState<boolean>(false)
  const [notifyTitle, setNotifyTitle] = useState<string>('')
  const [notifyMessage, setNotifyMessage] = useState<string>('')
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  // Tags Modal state
  const [isTagsModalOpen, setIsTagsModalOpen] = useState<boolean>(false)
  const [tagsList, setTagsList] = useState<string[]>([
    'NIT',
    'Marketplace',
    'E-commerce',
    'Parceira',
    'InsurTech',
    'AdTech',
    'EdTech',
    'Cleantech',
  ])
  const [newTagName, setNewTagName] = useState<string>('')

  // Oportunidades / Desafios Modal state
  const [isOportunidadesModalOpen, setIsOportunidadesModalOpen] = useState<boolean>(false)
  const [opportunitiesList, setOpportunitiesList] = useState<
    Array<{ id: string; title: string; categories: string; active: boolean }>
  >([
    {
      id: 'opp-1',
      title: 'Solução Inteligente para Aferição de Carga e Contagem de Contêiner',
      categories:
        'Governo e Poder Público, Logística e Transportes, Indústria e Transformação, Segurança e Defesa, Tecnologia da Informação',
      active: true,
    },
    {
      id: 'opp-2',
      title: 'Sistema Inteligente de Evasão de Pessoas no Porto de Suape',
      categories:
        'Governo e Poder Público, Logística e Transportes, Saúde e Bem-estar, Segurança e Defesa, Tecnologia da Informação',
      active: true,
    },
    {
      id: 'opp-3',
      title: 'SBSI 2025 – Simpósio Brasileiro de Sistemas de Informação',
      categories: 'Educação, Tecnologia da Informação, Inovação Aberta, Ciência',
      active: true,
    },
  ])

  // Ar.IA.no Modal state
  const [isArianoModalOpen, setIsArianoModalOpen] = useState<boolean>(false)
  const [arianoStep, setArianoStep] = useState<number>(1)
  const [selectedWhoAreYou, setSelectedWhoAreYou] = useState<string>('Startup')
  const [selectedWhatYouSeek, setSelectedWhatYouSeek] = useState<string>('')
  const [lastSyncDate, setLastSyncDate] = useState<string>('25/02/2026 11:59')

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3500)
  }

  // Organizações handlers
  const handleSaveOrg = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newOrgName.trim()) return

    const tagsArr = newOrgTags
      .split(',')
      .map(t => t.trim())
      .filter(Boolean)

    if (editingOrg) {
      setOrganizations(prev =>
        prev.map(o => (o.id === editingOrg.id ? { ...o, name: newOrgName, tags: tagsArr } : o))
      )
      showToast(`Organização "${newOrgName}" atualizada com sucesso!`)
    } else {
      const newEntry: Organization = {
        id: `org-${Date.now()}`,
        name: newOrgName,
        tags: tagsArr,
      }
      setOrganizations(prev => [newEntry, ...prev])
      showToast(`Organização "${newOrgName}" cadastrada com sucesso!`)
    }
    setIsOrgModalOpen(false)
    setEditingOrg(null)
    setNewOrgName('')
    setNewOrgTags('')
  }

  const handleDeleteOrg = (id: string, name: string) => {
    if (window.confirm(`Deseja remover a organização "${name}"?`)) {
      setOrganizations(prev => prev.filter(o => o.id !== id))
      showToast(`Organização "${name}" removida.`)
    }
  }

  // Iniciativas handlers
  const handleSaveInit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newInitTitle.trim()) return

    const now = new Date()
    const dateFormatted = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(
      2,
      '0'
    )}/${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`

    if (editingInit) {
      setInitiatives(prev =>
        prev.map(i => (i.id === editingInit.id ? { ...i, title: newInitTitle, link: newInitLink } : i))
      )
      showToast(`Iniciativa "${newInitTitle}" atualizada.`)
    } else {
      const newEntry: Initiative = {
        id: `init-${Date.now()}`,
        status: 'Ativo',
        title: newInitTitle,
        date: dateFormatted,
        link: newInitLink || 'https://coreto.recife.pe.gov.br/complete-inscricao/' + Date.now(),
      }
      setInitiatives(prev => [newEntry, ...prev])
      showToast(`Iniciativa "${newInitTitle}" cadastrada.`)
    }
    setIsInitModalOpen(false)
    setEditingInit(null)
    setNewInitTitle('')
    setNewInitLink('')
  }

  const handleDeleteInit = (id: string, title: string) => {
    if (window.confirm(`Deseja remover a iniciativa "${title}"?`)) {
      setInitiatives(prev => prev.filter(i => i.id !== id))
      showToast(`Iniciativa removida.`)
    }
  }

  // Usuários handlers
  const handleSaveUser = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newUserName.trim() || !newUserEmail.trim()) return

    const tagsArr = newUserTags
      .split(',')
      .map(t => t.trim())
      .filter(Boolean)

    if (editingUser) {
      setUsers(prev =>
        prev.map(u =>
          u.id === editingUser.id ? { ...u, name: newUserName, email: newUserEmail, tags: tagsArr } : u
        )
      )
      showToast(`Usuário "${newUserName}" atualizado.`)
    } else {
      const now = new Date()
      const dateFormatted = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(
        2,
        '0'
      )}/${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`

      const newEntry: UserItem = {
        id: `user-${Date.now()}`,
        name: newUserName,
        email: newUserEmail,
        status: 'completo',
        date: dateFormatted,
        tags: tagsArr,
      }
      setUsers(prev => [newEntry, ...prev])
      showToast(`Usuário "${newUserName}" cadastrado com sucesso.`)
    }
    setIsUserModalOpen(false)
    setEditingUser(null)
    setNewUserName('')
    setNewUserEmail('')
    setNewUserTags('')
  }

  const handleDeleteUser = (id: string, name: string) => {
    if (window.confirm(`Deseja remover o usuário "${name}"?`)) {
      setUsers(prev => prev.filter(u => u.id !== id))
      showToast(`Usuário "${name}" removido.`)
    }
  }

  // Notification Handler
  const handleSendNotification = (e: React.FormEvent) => {
    e.preventDefault()
    if (!notifyTitle.trim() || !notifyMessage.trim()) return
    showToast(`🚀 Notificação "${notifyTitle}" enviada com sucesso para todas as Startups!`)
    setIsNotifyModalOpen(false)
    setNotifyTitle('')
    setNotifyMessage('')
  }

  // Filtering
  const filteredOrgs = organizations.filter(
    o =>
      o.name.toLowerCase().includes(searchOrg.toLowerCase()) ||
      o.tags.some(t => t.toLowerCase().includes(searchOrg.toLowerCase()))
  )

  const filteredInits = initiatives.filter(
    i =>
      i.title.toLowerCase().includes(searchInit.toLowerCase()) ||
      i.status.toLowerCase().includes(searchInit.toLowerCase())
  )

  const filteredUsers = users.filter(
    u =>
      u.name.toLowerCase().includes(searchUser.toLowerCase()) ||
      u.email.toLowerCase().includes(searchUser.toLowerCase()) ||
      (u.tags && u.tags.some(t => t.toLowerCase().includes(searchUser.toLowerCase())))
  )

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#F8FAFC',
        fontFamily: "'DM Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
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
            bottom: '24px',
            right: '24px',
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            padding: '14px 24px',
            borderRadius: '8px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            zIndex: 9999,
            fontSize: '14px',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            animation: 'fadeIn 0.3s ease',
          }}
        >
          <span>✅</span>
          <span>{toastMessage}</span>
        </div>
      )}

      <Header />

      {/* ── Main Layout Body ── */}
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar activeItem="painel" />

        {/* ── Main Content Area ── */}
        <main style={{ flex: 1, overflowX: 'hidden' }}>
          {/* ── Top Hero Blue Banner Section ── */}
          <div
            style={{
              background: 'linear-gradient(135deg, #002D54 0%, #004B80 50%, #002244 100%)',
              padding: '32px 36px 40px',
              position: 'relative',
              overflow: 'hidden',
              color: '#FFFFFF',
            }}
          >
            {/* Background Graphic Rings/Circles */}
            <div
              style={{
                position: 'absolute',
                top: '-50px',
                right: '10%',
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                border: '40px solid rgba(255, 255, 255, 0.08)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-100px',
                right: '-50px',
                width: '450px',
                height: '450px',
                borderRadius: '50%',
                border: '60px solid rgba(255, 255, 255, 0.05)',
                pointerEvents: 'none',
              }}
            />

            {/* Stat Cards Grid (4 Cards) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '20px',
                marginBottom: '32px',
                position: 'relative',
                zIndex: 2,
              }}
            >
              {/* Card 1: Startups */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '24px 28px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                  color: '#1E293B',
                }}
              >
                <div style={{ fontSize: '42px', fontWeight: 800, lineHeight: 1, color: '#0F172A' }}>74</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#00A8B5', marginTop: '6px' }}>
                  Startups
                </div>
              </div>

              {/* Card 2: Desafios */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '24px 28px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                  color: '#1E293B',
                }}
              >
                <div style={{ fontSize: '42px', fontWeight: 800, lineHeight: 1, color: '#0F172A' }}>132</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#00A8B5', marginTop: '6px' }}>
                  Desafios
                </div>
              </div>

              {/* Card 3: Talentos */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '24px 28px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                  color: '#1E293B',
                }}
              >
                <div style={{ fontSize: '42px', fontWeight: 800, lineHeight: 1, color: '#0F172A' }}>54</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#00A8B5', marginTop: '6px' }}>
                  Talentos
                </div>
              </div>

              {/* Card 4: Organizações */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '24px 28px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                  color: '#1E293B',
                }}
              >
                <div style={{ fontSize: '42px', fontWeight: 800, lineHeight: 1, color: '#0F172A' }}>10</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#00A8B5', marginTop: '6px' }}>
                  Organizações
                </div>
              </div>
            </div>

            {/* Programas Section */}
            <div style={{ textAlign: 'center', marginBottom: '24px', position: 'relative', zIndex: 2 }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginTop: 0, marginBottom: '16px', color: '#FFFFFF' }}>
                Programas
              </h3>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <Link
                  to="/legacy/eita"
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#00A8B5',
                    padding: '10px 48px',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '13px',
                    textDecoration: 'none',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  }}
                >
                  E.I.T.A.
                </Link>
                <Link
                  to="/legacy/hackercidadao"
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#00A8B5',
                    padding: '10px 48px',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '13px',
                    textDecoration: 'none',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  }}
                >
                  Hacker Cidadão
                </Link>
                <Link
                  to="/legacy/avaliador-premiorec"
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#00A8B5',
                    padding: '10px 48px',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '13px',
                    textDecoration: 'none',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  }}
                >
                  Prêmio Recife
                </Link>
              </div>
            </div>

            {/* Configurações Section */}
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginTop: 0, marginBottom: '16px', color: '#FFFFFF' }}>
                Configurações
              </h3>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '12px',
                  flexWrap: 'wrap',
                  maxWidth: '900px',
                  margin: '0 auto',
                }}
              >
                {['Phostem', 'Ar.IA.no', 'Oportunidades', 'Captador oportunidades', 'Notificações', 'Tags'].map(
                  item => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        if (item === 'Tags') {
                          setIsTagsModalOpen(true)
                        } else if (item === 'Oportunidades') {
                          setIsOportunidadesModalOpen(true)
                        } else if (item === 'Ar.IA.no') {
                          setIsArianoModalOpen(true)
                        } else {
                          showToast(`Configuração "${item}" selecionada.`)
                        }
                      }}
                      style={{
                        backgroundColor: '#FFFFFF',
                        color: '#00A8B5',
                        padding: '10px 28px',
                        borderRadius: '8px',
                        fontWeight: 600,
                        fontSize: '13px',
                        border: '1px solid #E2E8F0',
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      }}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          {/* ── Lower Main Data Tables Section ── */}
          <div style={{ padding: '32px 36px', display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {/* ── SECTION 1: ORGANIZAÇÕES ── */}
            <section>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', margin: 0 }}>Organizações</h2>
                <button
                  type="button"
                  onClick={() => {
                    setEditingOrg(null)
                    setNewOrgName('')
                    setNewOrgTags('')
                    setIsOrgModalOpen(true)
                  }}
                  style={{
                    backgroundColor: '#00A8B5',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 20px',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 2px 6px rgba(0,168,181,0.3)',
                  }}
                >
                  <span style={{ fontSize: '16px', lineHeight: 1 }}>⊕</span> Cadastrar organização
                </button>
              </div>

              {/* Search Box */}
              <div style={{ marginBottom: '16px' }}>
                <input
                  type="text"
                  placeholder="Pesquise..."
                  value={searchOrg}
                  onChange={e => setSearchOrg(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '6px',
                    border: '1px solid #00A8B5',
                    outline: 'none',
                    fontSize: '13px',
                    color: '#1E293B',
                    boxSizing: 'border-box',
                    backgroundColor: '#FFFFFF',
                  }}
                />
              </div>

              {/* Table Container */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                  overflow: 'hidden',
                }}
              >
                {filteredOrgs.length === 0 ? (
                  <div style={{ padding: '24px', textAlign: 'center', color: '#64748B', fontSize: '14px' }}>
                    Nenhuma organização encontrada.
                  </div>
                ) : (
                  filteredOrgs.map((org, index) => (
                    <div
                      key={org.id}
                      style={{
                        padding: '14px 20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderBottom: index < filteredOrgs.length - 1 ? '1px solid #E2E8F0' : 'none',
                      }}
                    >
                      <div style={{ fontSize: '13px', color: '#1E293B', fontWeight: 500 }}>
                        <span style={{ fontWeight: 600 }}>{org.name}</span>{' '}
                        {org.tags.length > 0 && (
                          <span style={{ color: '#475569' }}>({org.tags.join(', ')})</span>
                        )}
                      </div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        {/* Pencil Edit */}
                        <button
                          type="button"
                          onClick={() => {
                            setEditingOrg(org)
                            setNewOrgName(org.name)
                            setNewOrgTags(org.tags.join(', '))
                            setIsOrgModalOpen(true)
                          }}
                          style={{
                            backgroundColor: '#00A8B5',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '4px',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                          }}
                          title="Editar"
                        >
                          ✏️
                        </button>

                        {/* Trash Delete */}
                        <button
                          type="button"
                          onClick={() => handleDeleteOrg(org.id, org.name)}
                          style={{
                            backgroundColor: '#00A8B5',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '4px',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                          }}
                          title="Excluir"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>

            {/* ── SECTION 2: INICIATIVAS ── */}
            <section>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', margin: 0 }}>Iniciativas</h2>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    type="button"
                    onClick={() => showToast('Importação de dados iniciada.')}
                    style={{
                      backgroundColor: '#00A8B5',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '8px 16px',
                      fontWeight: 700,
                      fontSize: '12px',
                      cursor: 'pointer',
                    }}
                  >
                    Importar
                  </button>
                  <button
                    type="button"
                    onClick={() => showToast('Exportação de dados em CSV gerada.')}
                    style={{
                      backgroundColor: '#00A8B5',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '8px 16px',
                      fontWeight: 700,
                      fontSize: '12px',
                      cursor: 'pointer',
                    }}
                  >
                    Exportar
                  </button>
                  <button
                    type="button"
                    onClick={() => showToast('Tags automáticas geradas.')}
                    style={{
                      backgroundColor: '#00A8B5',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '8px 16px',
                      fontWeight: 700,
                      fontSize: '12px',
                      cursor: 'pointer',
                    }}
                  >
                    Gerar tags
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setEditingInit(null)
                      setNewInitTitle('')
                      setNewInitLink('')
                      setIsInitModalOpen(true)
                    }}
                    style={{
                      backgroundColor: '#00A8B5',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '8px 16px',
                      fontWeight: 700,
                      fontSize: '12px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <span>⊕</span> Cadastrar
                  </button>
                </div>
              </div>

              {/* Search Box */}
              <div style={{ marginBottom: '16px' }}>
                <input
                  type="text"
                  placeholder="Pesquise..."
                  value={searchInit}
                  onChange={e => setSearchInit(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '6px',
                    border: '1px solid #00A8B5',
                    outline: 'none',
                    fontSize: '13px',
                    color: '#1E293B',
                    boxSizing: 'border-box',
                    backgroundColor: '#FFFFFF',
                  }}
                />
              </div>

              {/* Table Container */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                  overflow: 'hidden',
                }}
              >
                {filteredInits.length === 0 ? (
                  <div style={{ padding: '24px', textAlign: 'center', color: '#64748B', fontSize: '14px' }}>
                    Nenhuma iniciativa encontrada.
                  </div>
                ) : (
                  filteredInits.map((init, index) => (
                    <div
                      key={init.id}
                      style={{
                        padding: '14px 20px',
                        display: 'grid',
                        gridTemplateColumns: '2fr 140px 3fr auto',
                        gap: '16px',
                        alignItems: 'center',
                        borderBottom: index < filteredInits.length - 1 ? '1px solid #E2E8F0' : 'none',
                      }}
                    >
                      <div style={{ fontSize: '13px', color: '#1E293B', fontWeight: 600, lineHeight: 1.3 }}>
                        {init.status} – {init.title}
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748B' }}>{init.date}</div>
                      <div style={{ fontSize: '12px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        <a
                          href={init.link}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: '#00A8B5', textDecoration: 'none' }}
                        >
                          {init.link}
                        </a>
                      </div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                          type="button"
                          onClick={() => {
                            setEditingInit(init)
                            setNewInitTitle(init.title)
                            setNewInitLink(init.link)
                            setIsInitModalOpen(true)
                          }}
                          style={{
                            backgroundColor: '#00A8B5',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '4px',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                          }}
                          title="Editar"
                        >
                          ✏️
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteInit(init.id, init.title)}
                          style={{
                            backgroundColor: '#00A8B5',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '4px',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                          }}
                          title="Excluir"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>

            {/* ── SECTION 3: USUÁRIOS ── */}
            <section>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', margin: 0 }}>Usuários</h2>
                <button
                  type="button"
                  onClick={() => {
                    setEditingUser(null)
                    setNewUserName('')
                    setNewUserEmail('')
                    setNewUserTags('')
                    setIsUserModalOpen(true)
                  }}
                  style={{
                    backgroundColor: '#00A8B5',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 20px',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 2px 6px rgba(0,168,181,0.3)',
                  }}
                >
                  <span style={{ fontSize: '16px', lineHeight: 1 }}>⊕</span> Cadastrar Usuário
                </button>
              </div>

              {/* Search Box */}
              <div style={{ marginBottom: '16px' }}>
                <input
                  type="text"
                  placeholder="Pesquise..."
                  value={searchUser}
                  onChange={e => setSearchUser(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '6px',
                    border: '1px solid #00A8B5',
                    outline: 'none',
                    fontSize: '13px',
                    color: '#1E293B',
                    boxSizing: 'border-box',
                    backgroundColor: '#FFFFFF',
                  }}
                />
              </div>

              {/* Table Container */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                  overflow: 'hidden',
                }}
              >
                {filteredUsers.length === 0 ? (
                  <div style={{ padding: '24px', textAlign: 'center', color: '#64748B', fontSize: '14px' }}>
                    Nenhum usuário encontrado.
                  </div>
                ) : (
                  filteredUsers.map((usr, index) => (
                    <div
                      key={usr.id}
                      style={{
                        padding: '14px 20px',
                        display: 'grid',
                        gridTemplateColumns: '2fr 160px 140px 2fr auto',
                        gap: '16px',
                        alignItems: 'center',
                        borderBottom: index < filteredUsers.length - 1 ? '1px solid #E2E8F0' : 'none',
                      }}
                    >
                      <div style={{ fontSize: '13px', color: '#1E293B' }}>
                        <span style={{ fontWeight: 600 }}>{usr.name}</span>{' '}
                        <span style={{ color: '#64748B' }}>({usr.email})</span>
                      </div>
                      <div>
                        <span
                          style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            color: usr.status === 'completo' ? '#16A34A' : '#DC2626',
                          }}
                        >
                          Cadastro {usr.status}
                        </span>
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748B' }}>{usr.date || '—'}</div>
                      <div style={{ fontSize: '12px', color: '#334155' }}>
                        {usr.tags && usr.tags.length > 0 ? usr.tags.join(', ') : '—'}
                      </div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                          type="button"
                          onClick={() => {
                            setEditingUser(usr)
                            setNewUserName(usr.name)
                            setNewUserEmail(usr.email)
                            setNewUserTags(usr.tags ? usr.tags.join(', ') : '')
                            setIsUserModalOpen(true)
                          }}
                          style={{
                            backgroundColor: '#00A8B5',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '4px',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                          }}
                          title="Editar"
                        >
                          ✏️
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteUser(usr.id, usr.name)}
                          style={{
                            backgroundColor: '#00A8B5',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '4px',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                          }}
                          title="Excluir"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>

            {/* ── SECTION 4: OPERAÇÕES CRÍTICAS ── */}
            <section style={{ marginTop: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ fontSize: '20px' }}>⚠️</span>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                  Operações Críticas
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsNotifyModalOpen(true)}
                style={{
                  backgroundColor: '#00A8B5',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px 24px',
                  fontWeight: 700,
                  fontSize: '13px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 2px 6px rgba(0,168,181,0.3)',
                }}
              >
                <span>🔔</span> Notificar Startups
              </button>
            </section>
          </div>
        </main>
      </div>

      {/* ── MODAL: CADASTRAR/EDITAR ORGANIZAÇÃO ── */}
      {isOrgModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '24px 16px',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              width: '100%',
              maxWidth: '720px',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '32px 40px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              position: 'relative',
            }}
          >
            {/* Modal Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ margin: 0, fontSize: '24px', color: '#0F172A', fontWeight: 800 }}>
                {editingOrg ? 'Editar Organização' : 'Cadastrar Organização'}
              </h2>
              <button
                type="button"
                onClick={() => setIsOrgModalOpen(false)}
                style={{
                  border: 'none',
                  background: 'none',
                  fontSize: '22px',
                  color: '#00A8B5',
                  cursor: 'pointer',
                  fontWeight: 600,
                  lineHeight: 1,
                }}
                title="Fechar"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveOrg}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Field 1: Nome */}
                <div>
                  <input
                    type="text"
                    required
                    value={newOrgName}
                    onChange={e => setNewOrgName(e.target.value)}
                    placeholder="Nome"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #00A8B5',
                      fontSize: '13px',
                      color: '#1E293B',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Field 2: CNPJ */}
                <div>
                  <input
                    type="text"
                    value={newOrgCnpj}
                    onChange={e => setNewOrgCnpj(e.target.value)}
                    placeholder="CNPJ"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #00A8B5',
                      fontSize: '13px',
                      color: '#1E293B',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Field 3: Email */}
                <div>
                  <input
                    type="email"
                    value={newOrgEmail}
                    onChange={e => setNewOrgEmail(e.target.value)}
                    placeholder="Email"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #00A8B5',
                      fontSize: '13px',
                      color: '#1E293B',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Field 4: Descrição */}
                <div>
                  <textarea
                    rows={4}
                    value={newOrgDesc}
                    onChange={e => setNewOrgDesc(e.target.value)}
                    placeholder="Descrição"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #CBD5E1',
                      fontSize: '13px',
                      color: '#1E293B',
                      boxSizing: 'border-box',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                {/* Section Title */}
                <div style={{ marginTop: '8px', marginBottom: '4px' }}>
                  <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#0F172A' }}>
                    Coloque a Logo e banner de sua empresa!
                  </h4>
                </div>

                {/* Logo Upload Box */}
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                    Logo = 150x150px
                  </div>
                  <label
                    style={{
                      display: 'block',
                      border: '1px dashed #CBD5E1',
                      borderRadius: '6px',
                      padding: '40px 20px',
                      textAlign: 'center',
                      backgroundColor: '#FAFAFA',
                      color: '#94A3B8',
                      fontSize: '13px',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={e => {
                        const file = e.target.files?.[0]
                        if (file) setNewOrgLogoName(file.name)
                      }}
                    />
                    {newOrgLogoName ? `✅ Arquivo selecionado: ${newOrgLogoName}` : 'Click to upload your logo MAX: 150x150'}
                  </label>
                </div>

                {/* Banner Upload Box */}
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                    Banner = 1280x200px
                  </div>
                  <label
                    style={{
                      display: 'block',
                      border: '1px dashed #CBD5E1',
                      borderRadius: '6px',
                      padding: '48px 20px',
                      textAlign: 'center',
                      backgroundColor: '#FAFAFA',
                      color: '#94A3B8',
                      fontSize: '13px',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={e => {
                        const file = e.target.files?.[0]
                        if (file) setNewOrgBannerName(file.name)
                      }}
                    />
                    {newOrgBannerName ? `✅ Arquivo selecionado: ${newOrgBannerName}` : 'Click to upload your banner MAX: 1280x200'}
                  </label>
                </div>

                {/* Field: Link do Site */}
                <div>
                  <input
                    type="text"
                    value={newOrgSite}
                    onChange={e => setNewOrgSite(e.target.value)}
                    placeholder="Digite o link do Site de sua empresa"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #00A8B5',
                      fontSize: '13px',
                      color: '#1E293B',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Field: Link do Instagram */}
                <div>
                  <input
                    type="text"
                    value={newOrgInstagram}
                    onChange={e => setNewOrgInstagram(e.target.value)}
                    placeholder="Digite o link do Instagram de sua empresa"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #00A8B5',
                      fontSize: '13px',
                      color: '#1E293B',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Field: Link do Linkedin */}
                <div>
                  <input
                    type="text"
                    value={newOrgLinkedin}
                    onChange={e => setNewOrgLinkedin(e.target.value)}
                    placeholder="Digite o link de sua empresa"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #00A8B5',
                      fontSize: '13px',
                      color: '#1E293B',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Field: Canal do Youtube */}
                <div>
                  <input
                    type="text"
                    value={newOrgYoutube}
                    onChange={e => setNewOrgYoutube(e.target.value)}
                    placeholder="Digite o canal do Youtube de sua empresa"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #00A8B5',
                      fontSize: '13px',
                      color: '#1E293B',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Field: Usuários com permissão */}
                <div>
                  <input
                    type="text"
                    value={newOrgUserPermissions}
                    onChange={e => setNewOrgUserPermissions(e.target.value)}
                    placeholder="Escolha quais usuários possuem permissão de empresa"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #CBD5E1',
                      fontSize: '13px',
                      color: '#1E293B',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Field: Assuntos mais relacionados */}
                <div>
                  <input
                    type="text"
                    value={newOrgTopics}
                    onChange={e => setNewOrgTopics(e.target.value)}
                    placeholder="Escolha os assuntos mais relacionados a empresa."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #CBD5E1',
                      fontSize: '13px',
                      color: '#1E293B',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div style={{ marginTop: '24px' }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#00A8B5',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '10px 32px',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0,168,181,0.2)',
                  }}
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── MODAL: CADASTRAR/EDITAR INICIATIVA (STARTUP) ── */}
      {isInitModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '24px 16px',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              width: '100%',
              maxWidth: '750px',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '32px 40px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              position: 'relative',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <h2 style={{ margin: 0, fontSize: '24px', color: '#0F172A', fontWeight: 800 }}>
                Cadastrar Startup
              </h2>
              <button
                type="button"
                onClick={() => setIsInitModalOpen(false)}
                style={{
                  border: 'none',
                  background: 'none',
                  fontSize: '22px',
                  color: '#00A8B5',
                  cursor: 'pointer',
                  fontWeight: 600,
                  lineHeight: 1,
                }}
                title="Fechar"
              >
                ✕
              </button>
            </div>

            {/* Subtitle Warning */}
            <div style={{ fontSize: '15px', fontWeight: 800, color: '#002D54', marginBottom: '24px' }}>
              atenção: ao clicar no item, todas as alterações são salvas automaticamente
            </div>

            <form onSubmit={handleSaveInit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* 1. Nome */}
                <div>
                  <input
                    type="text"
                    required
                    value={newInitTitle}
                    onChange={e => setNewInitTitle(e.target.value)}
                    placeholder="Nome"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #00A8B5',
                      fontSize: '13px',
                      color: '#1E293B',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* 2. CNPJ */}
                <div>
                  <input
                    type="text"
                    value={newInitCnpj}
                    onChange={e => setNewInitCnpj(e.target.value)}
                    placeholder="CNPJ"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #00A8B5',
                      fontSize: '13px',
                      color: '#1E293B',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* 3. Selecione um usuário */}
                <div>
                  <select
                    value={newInitUser}
                    onChange={e => setNewInitUser(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #00A8B5',
                      fontSize: '13px',
                      color: newInitUser ? '#1E293B' : '#94A3B8',
                      boxSizing: 'border-box',
                      outline: 'none',
                      backgroundColor: '#FFFFFF',
                    }}
                  >
                    <option value="">Selecione um usuário</option>
                    <option value="Pedro Casé">Pedro Casé (pedro.case@recife.pe.gov.br)</option>
                    <option value="Gabriel Chamie">Gabriel Chamie (gabrielchamie@gmail.com)</option>
                    <option value="Ceci Designer">Ceci Designer (ceci@design.com.br)</option>
                  </select>
                </div>

                {/* 4. Link de apresentação */}
                <div>
                  <input
                    type="text"
                    value={newInitPresentationLink}
                    onChange={e => setNewInitPresentationLink(e.target.value)}
                    placeholder="Link de apresentação"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #00A8B5',
                      fontSize: '13px',
                      color: '#1E293B',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* 5. Descrição */}
                <div>
                  <textarea
                    rows={4}
                    value={newInitDesc}
                    onChange={e => setNewInitDesc(e.target.value)}
                    placeholder="Descrição"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #CBD5E1',
                      fontSize: '13px',
                      color: '#1E293B',
                      boxSizing: 'border-box',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                {/* 6. Site */}
                <div>
                  <input
                    type="text"
                    value={newInitSite}
                    onChange={e => setNewInitSite(e.target.value)}
                    placeholder="Digite o link do Site de sua empresa"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #00A8B5',
                      fontSize: '13px',
                      color: '#1E293B',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* 7. Instagram */}
                <div>
                  <input
                    type="text"
                    value={newInitInstagram}
                    onChange={e => setNewInitInstagram(e.target.value)}
                    placeholder="Digite o link do Instagram de sua empresa"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #00A8B5',
                      fontSize: '13px',
                      color: '#1E293B',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* 8. LinkedIn */}
                <div>
                  <input
                    type="text"
                    value={newInitLinkedin}
                    onChange={e => setNewInitLinkedin(e.target.value)}
                    placeholder="Digite o Linkedin de sua empresa"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #00A8B5',
                      fontSize: '13px',
                      color: '#1E293B',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* 9. Youtube */}
                <div>
                  <input
                    type="text"
                    value={newInitYoutube}
                    onChange={e => setNewInitYoutube(e.target.value)}
                    placeholder="Digite o canal do Youtube de sua empresa"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #00A8B5',
                      fontSize: '13px',
                      color: '#1E293B',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* 10. Upload Section (Logo & Banner Boxes) */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '16px', marginTop: '8px' }}>
                  {/* Logo Box */}
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>
                      Logo = 150x150px
                    </div>
                    <label
                      style={{
                        display: 'block',
                        border: '1px dashed #CBD5E1',
                        borderRadius: '6px',
                        padding: '36px 12px',
                        textAlign: 'center',
                        backgroundColor: '#FAFAFA',
                        color: '#94A3B8',
                        fontSize: '12px',
                        cursor: 'pointer',
                      }}
                    >
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={e => {
                          const file = e.target.files?.[0]
                          if (file) setNewInitLogoName(file.name)
                        }}
                      />
                      {newInitLogoName ? `✅ ${newInitLogoName}` : 'Click to upload an image'}
                    </label>
                  </div>

                  {/* Banner Box */}
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>
                      Banner = 1280x200px
                    </div>
                    <label
                      style={{
                        display: 'block',
                        border: '1px dashed #CBD5E1',
                        borderRadius: '6px',
                        padding: '36px 12px',
                        textAlign: 'center',
                        backgroundColor: '#FAFAFA',
                        color: '#94A3B8',
                        fontSize: '12px',
                        cursor: 'pointer',
                      }}
                    >
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={e => {
                          const file = e.target.files?.[0]
                          if (file) setNewInitBannerName(file.name)
                        }}
                      />
                      {newInitBannerName ? `✅ ${newInitBannerName}` : 'Click to upload an image'}
                    </label>
                  </div>
                </div>

                {/* 11. Assuntos sendo gerados */}
                <div>
                  <textarea
                    rows={3}
                    value={newInitAssuntos}
                    onChange={e => setNewInitAssuntos(e.target.value)}
                    placeholder="Assuntos sendo geradaos!"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #CBD5E1',
                      fontSize: '13px',
                      color: '#1E293B',
                      boxSizing: 'border-box',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                {/* ── SECTION: CONEXÕES ── */}
                <div style={{ marginTop: '16px' }}>
                  <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 800, color: '#1E1B4B', marginBottom: '16px' }}>
                    Conexões
                  </h3>

                  {/* O que eu sou */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
                      O que eu sou:
                    </label>
                    <select
                      value={newInitOQueSou}
                      onChange={e => setNewInitOQueSou(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '4px',
                        border: '1px solid #E2E8F0',
                        fontSize: '13px',
                        color: newInitOQueSou ? '#1E293B' : '#94A3B8',
                        boxSizing: 'border-box',
                        outline: 'none',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      <option value="">Escolha uma opção</option>
                      <option value="Startup em Estágio Inicial">Startup em Estágio Inicial</option>
                      <option value="Startup em Tração">Startup em Tração</option>
                      <option value="Empresa Consolidada">Empresa Consolidada</option>
                    </select>
                  </div>

                  {/* Área temática */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
                      Área temática
                    </label>
                    <input
                      type="text"
                      value={newInitAreaTematica}
                      onChange={e => setNewInitAreaTematica(e.target.value)}
                      placeholder="Escolha até 3 palavras"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '4px',
                        border: '1px solid #00A8B5',
                        fontSize: '13px',
                        color: '#1E293B',
                        boxSizing: 'border-box',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {/* Maturidade Heading */}
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#1E293B', marginBottom: '12px', marginTop: '16px' }}>
                    Maturidade
                  </div>

                  {/* TRL */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
                      TRL
                    </label>
                    <select
                      value={newInitTrl}
                      onChange={e => setNewInitTrl(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '4px',
                        border: '1px solid #E2E8F0',
                        fontSize: '13px',
                        color: newInitTrl ? '#1E293B' : '#94A3B8',
                        boxSizing: 'border-box',
                        outline: 'none',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      <option value="">Escolha uma opção</option>
                      <option value="TRL 1-3">TRL 1-3 (Conceito & Pesquisa)</option>
                      <option value="TRL 4-6">TRL 4-6 (Prototipagem & Validação)</option>
                      <option value="TRL 7-9">TRL 7-9 (Mercado & Escala)</option>
                    </select>
                  </div>

                  {/* Estágio de inovação */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
                      Estágio de inovação
                    </label>
                    <select
                      value={newInitEstagioInovacao}
                      onChange={e => setNewInitEstagioInovacao(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '4px',
                        border: '1px solid #E2E8F0',
                        fontSize: '13px',
                        color: newInitEstagioInovacao ? '#1E293B' : '#94A3B8',
                        boxSizing: 'border-box',
                        outline: 'none',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      <option value="">Escolha uma opção</option>
                      <option value="Ideação">Ideação</option>
                      <option value="MVP">MVP</option>
                      <option value="Tração / Operação">Tração / Operação</option>
                    </select>
                  </div>

                  {/* O que busco? Heading */}
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#1E293B', marginBottom: '12px', marginTop: '16px' }}>
                    O que busco?
                  </div>

                  {/* Apoio que procuro */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
                      Apoio que procuro
                    </label>
                    <select
                      value={newInitApoioProcuro}
                      onChange={e => setNewInitApoioProcuro(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '4px',
                        border: '1px solid #E2E8F0',
                        fontSize: '13px',
                        color: newInitApoioProcuro ? '#1E293B' : '#94A3B8',
                        boxSizing: 'border-box',
                        outline: 'none',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      <option value="">Escolha uma opção</option>
                      <option value="Mentoria">Mentoria</option>
                      <option value="Investimento">Investimento Anjo / VC</option>
                      <option value="Conexão com Clientes">Conexão com Clientes</option>
                    </select>
                  </div>

                  {/* Parceiro que procuro */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
                      Parceiro que procuro
                    </label>
                    <select
                      value={newInitParceiroProcuro}
                      onChange={e => setNewInitParceiroProcuro(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '4px',
                        border: '1px solid #E2E8F0',
                        fontSize: '13px',
                        color: newInitParceiroProcuro ? '#1E293B' : '#94A3B8',
                        boxSizing: 'border-box',
                        outline: 'none',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      <option value="">Escolha uma opção</option>
                      <option value="Corporativo">Corporativo</option>
                      <option value="Governo / Setor Público">Governo / Setor Público</option>
                      <option value="Universidade / Pesquisa">Universidade / Pesquisa</option>
                    </select>
                  </div>
                </div>

                {/* ── SECTION: TIME ── */}
                <div style={{ marginTop: '16px' }}>
                  <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 800, color: '#1E1B4B', marginBottom: '12px' }}>
                    Time
                  </h3>
                </div>
              </div>

              {/* Submit Button */}
              <div style={{ marginTop: '24px' }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#00A8B5',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '10px 32px',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0,168,181,0.2)',
                  }}
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── MODAL: CADASTRAR/EDITAR USUÁRIO ── */}
      {isUserModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '24px 16px',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              width: '100%',
              maxWidth: '720px',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '32px 40px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              position: 'relative',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
              <div>
                <h2 style={{ margin: 0, fontSize: '24px', color: '#0F172A', fontWeight: 800 }}>
                  {editingUser ? 'Editar Usuário' : 'Cadastrar Usuário'}
                </h2>
                <div style={{ fontSize: '13px', color: '#64748B', marginTop: '4px' }}>
                  Alterações serão feitas automaticamente
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsUserModalOpen(false)}
                style={{
                  border: 'none',
                  background: 'none',
                  fontSize: '22px',
                  color: '#00A8B5',
                  cursor: 'pointer',
                  fontWeight: 600,
                  lineHeight: 1,
                }}
                title="Fechar"
              >
                ✕
              </button>
            </div>

            {/* Circular Avatar Upload Frame */}
            <div style={{ margin: '20px 0 28px', display: 'flex', justifyContent: 'center' }}>
              <label
                style={{
                  width: '110px',
                  height: '110px',
                  borderRadius: '50%',
                  border: '1px dashed #CBD5E1',
                  backgroundColor: '#FAFAFA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  color: '#94A3B8',
                  fontSize: '11px',
                  cursor: 'pointer',
                  padding: '12px',
                  boxSizing: 'border-box',
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={e => {
                    const file = e.target.files?.[0]
                    if (file) setNewUserAvatarName(file.name)
                  }}
                />
                {newUserAvatarName ? `✅ ${newUserAvatarName}` : 'Click to upload an image'}
              </label>
            </div>

            <form onSubmit={handleSaveUser}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {/* 1. Nome */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>
                    Nome
                  </label>
                  <input
                    type="text"
                    required
                    value={newUserName}
                    onChange={e => setNewUserName(e.target.value)}
                    placeholder="nome"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #00A8B5',
                      fontSize: '13px',
                      color: '#1E293B',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* 2. CPF */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>
                    CPF
                  </label>
                  <input
                    type="text"
                    value={newUserCpf}
                    onChange={e => setNewUserCpf(e.target.value)}
                    placeholder="cpf"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #00A8B5',
                      fontSize: '13px',
                      color: '#1E293B',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* 3. E-mail */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>
                    E-mail
                  </label>
                  <input
                    type="email"
                    required
                    value={newUserEmail}
                    onChange={e => setNewUserEmail(e.target.value)}
                    placeholder="E-mail"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #00A8B5',
                      fontSize: '13px',
                      color: '#1E293B',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* 4. Organizações relacionadas */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>
                    Organizações relacionadas
                  </label>
                  <input
                    type="text"
                    value={newUserOrg}
                    onChange={e => setNewUserOrg(e.target.value)}
                    placeholder="Empresa"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #00A8B5',
                      fontSize: '13px',
                      color: '#1E293B',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* 5. Atuação */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>
                    Atuação
                  </label>
                  <textarea
                    rows={3}
                    value={newUserAtuacao}
                    onChange={e => setNewUserAtuacao(e.target.value)}
                    placeholder="Atuação"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #CBD5E1',
                      fontSize: '13px',
                      color: '#1E293B',
                      boxSizing: 'border-box',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                {/* 6. Assuntos de interesse */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>
                    Assuntos de interesse
                  </label>
                  <input
                    type="text"
                    value={newUserAssuntos}
                    onChange={e => setNewUserAssuntos(e.target.value)}
                    placeholder="assuntos"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #CBD5E1',
                      fontSize: '13px',
                      color: '#1E293B',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* 7. Telefone(DDD + Numero) */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>
                    Telefone(DDD + Numero)
                  </label>
                  <input
                    type="text"
                    value={newUserPhone}
                    onChange={e => setNewUserPhone(e.target.value)}
                    placeholder="Whatsapp"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: '1px solid #00A8B5',
                      fontSize: '13px',
                      color: '#1E293B',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div style={{ marginTop: '24px' }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#F97316',
                    border: '1px solid #F97316',
                    borderRadius: '4px',
                    padding: '10px 32px',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer',
                  }}
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── MODAL: NOTIFICAR STARTUPS (OPERAÇÕES CRÍTICAS) ── */}
      {isNotifyModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '16px',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              width: '100%',
              maxWidth: '550px',
              padding: '28px',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{ fontSize: '24px' }}>🔔</span>
              <h3 style={{ margin: 0, fontSize: '18px', color: '#0F172A', fontWeight: 700 }}>
                Disparar Notificação Broadcast para Startups
              </h3>
            </div>
            <form onSubmit={handleSendNotification}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                  Título da Notificação *
                </label>
                <input
                  type="text"
                  required
                  value={notifyTitle}
                  onChange={e => setNotifyTitle(e.target.value)}
                  placeholder="Ex: Novo Edital Publicado — Inscreva-se!"
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '6px',
                    border: '1px solid #CBD5E1',
                    fontSize: '13px',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                  Mensagem *
                </label>
                <textarea
                  rows={4}
                  required
                  value={notifyMessage}
                  onChange={e => setNotifyMessage(e.target.value)}
                  placeholder="Escreva os detalhes da notificação que será enviada para todas as startups cadastradas no CORETO..."
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '6px',
                    border: '1px solid #CBD5E1',
                    fontSize: '13px',
                    boxSizing: 'border-box',
                    resize: 'vertical',
                  }}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button
                  type="button"
                  onClick={() => setIsNotifyModalOpen(false)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '6px',
                    border: '1px solid #CBD5E1',
                    backgroundColor: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '13px',
                    cursor: 'pointer',
                  }}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  style={{
                    padding: '10px 24px',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: '#00A8B5',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  🚀 Disparar Notificação
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── MODAL: TAGS / ASSUNTOS ── */}
      {isTagsModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '24px 16px',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              width: '100%',
              maxWidth: '780px',
              maxHeight: '88vh',
              overflowY: 'auto',
              padding: '32px 36px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              position: 'relative',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ margin: 0, fontSize: '24px', color: '#0F172A', fontWeight: 800 }}>
                Assuntos
              </h2>
              <button
                type="button"
                onClick={() => setIsTagsModalOpen(false)}
                style={{
                  border: 'none',
                  background: 'none',
                  fontSize: '22px',
                  color: '#00A8B5',
                  cursor: 'pointer',
                  fontWeight: 600,
                  lineHeight: 1,
                }}
                title="Fechar"
              >
                ✕
              </button>
            </div>

            {/* Gray Container for Tags */}
            <div
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '8px',
                padding: '20px 24px',
                border: '1px solid #E2E8F0',
                marginBottom: '24px',
                maxHeight: '280px',
                overflowY: 'auto',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px 24px',
                  alignItems: 'center',
                }}
              >
                {tagsList.map(tag => (
                  <div
                    key={tag}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: '#00A8B5',
                        color: '#FFFFFF',
                        padding: '10px 16px',
                        borderRadius: '4px',
                        fontWeight: 700,
                        fontSize: '13px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        boxShadow: '0 1px 3px rgba(0,168,181,0.2)',
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
                      </svg>
                      <span>{tag}</span>
                    </div>
                    {/* Trash Delete Icon */}
                    <button
                      type="button"
                      onClick={() => {
                        setTagsList(prev => prev.filter(t => t !== tag))
                        showToast(`Tag "${tag}" removida.`)
                      }}
                      style={{
                        backgroundColor: 'transparent',
                        color: '#00A8B5',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      title="Excluir Tag"
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Form for Adding New Tag */}
            <form
              onSubmit={e => {
                e.preventDefault()
                if (!newTagName.trim()) return
                if (tagsList.includes(newTagName.trim())) {
                  showToast(`A tag "${newTagName.trim()}" já existe.`)
                  return
                }
                setTagsList(prev => [...prev, newTagName.trim()])
                showToast(`Tag "${newTagName.trim()}" cadastrada com sucesso!`)
                setNewTagName('')
              }}
            >
              <div style={{ marginBottom: '16px' }}>
                <input
                  type="text"
                  value={newTagName}
                  onChange={e => setNewTagName(e.target.value)}
                  placeholder="Nome"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '4px',
                    border: '1px solid #CBD5E1',
                    fontSize: '13px',
                    color: '#1E293B',
                    boxSizing: 'border-box',
                    outline: 'none',
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: '#00A8B5',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '10px 32px',
                  fontWeight: 700,
                  fontSize: '13px',
                  cursor: 'pointer',
                  boxShadow: '0 2px 4px rgba(0,168,181,0.2)',
                }}
              >
                Salvar
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ── MODAL: DESAFIOS / OPORTUNIDADES ── */}
      {isOportunidadesModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '24px 16px',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              width: '100%',
              maxWidth: '920px',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '32px 40px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              position: 'relative',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
              <div>
                <h2 style={{ margin: 0, fontSize: '24px', color: '#0F172A', fontWeight: 800 }}>
                  Desafios
                </h2>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#002D54', marginTop: '4px' }}>
                  Área de edição e exibição de Desafios
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOportunidadesModalOpen(false)}
                style={{
                  border: 'none',
                  background: 'none',
                  fontSize: '22px',
                  color: '#00A8B5',
                  cursor: 'pointer',
                  fontWeight: 600,
                  lineHeight: 1,
                }}
                title="Fechar"
              >
                ✕
              </button>
            </div>

            {/* +1 Cadastrar Button */}
            <div style={{ margin: '16px 0 24px' }}>
              <button
                type="button"
                onClick={() => showToast('Abrindo formulário de criação de novo desafio...')}
                style={{
                  backgroundColor: '#00A8B5',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '8px 20px',
                  fontWeight: 700,
                  fontSize: '13px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 2px 4px rgba(0,168,181,0.2)',
                }}
              >
                <span>+1</span> Cadastrar
              </button>
            </div>

            {/* List of Opportunities / Challenges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {opportunitiesList.map(opp => (
                <div
                  key={opp.id}
                  style={{
                    paddingBottom: '20px',
                    borderBottom: '1px solid #E2E8F0',
                  }}
                >
                  {/* Action Buttons Row on top */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                      flexWrap: 'wrap',
                      gap: '12px',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <button
                        type="button"
                        onClick={() => showToast(`Acessando "${opp.title}"`)}
                        style={{
                          backgroundColor: '#00A8B5',
                          color: '#FFFFFF',
                          border: 'none',
                          borderRadius: '4px',
                          padding: '8px 20px',
                          fontWeight: 700,
                          fontSize: '12px',
                          cursor: 'pointer',
                        }}
                      >
                        Acessar
                      </button>
                      <button
                        type="button"
                        onClick={() => showToast(`Editando "${opp.title}"`)}
                        style={{
                          backgroundColor: '#00A8B5',
                          color: '#FFFFFF',
                          border: 'none',
                          borderRadius: '4px',
                          padding: '8px 20px',
                          fontWeight: 700,
                          fontSize: '12px',
                          cursor: 'pointer',
                        }}
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        onClick={() => showToast(`Abrindo Mentorias e Avaliadores para "${opp.title}"`)}
                        style={{
                          backgroundColor: '#00A8B5',
                          color: '#FFFFFF',
                          border: 'none',
                          borderRadius: '4px',
                          padding: '8px 20px',
                          fontWeight: 700,
                          fontSize: '12px',
                          cursor: 'pointer',
                        }}
                      >
                        Mentorias e Avaliadores
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (window.confirm(`Deseja excluir o desafio "${opp.title}"?`)) {
                            setOpportunitiesList(prev => prev.filter(o => o.id !== opp.id))
                            showToast(`Desafio removido.`)
                          }
                        }}
                        style={{
                          backgroundColor: '#00A8B5',
                          color: '#FFFFFF',
                          border: 'none',
                          borderRadius: '4px',
                          padding: '8px 20px',
                          fontWeight: 700,
                          fontSize: '12px',
                          cursor: 'pointer',
                        }}
                      >
                        Excluir
                      </button>
                    </div>

                    {/* Active Checkbox */}
                    <label
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#00A8B5',
                        cursor: 'pointer',
                        userSelect: 'none',
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={opp.active}
                        onChange={() => {
                          setOpportunitiesList(prev =>
                            prev.map(o => (o.id === opp.id ? { ...o, active: !o.active } : o))
                          )
                          showToast(`Status do desafio alterado.`)
                        }}
                        style={{ width: '16px', height: '16px', accentColor: '#00A8B5' }}
                      />
                      <span>Ativo</span>
                    </label>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      margin: '0 0 6px',
                      fontSize: '15px',
                      fontWeight: 800,
                      color: '#0F172A',
                      lineHeight: 1.3,
                    }}
                  >
                    {opp.title}
                  </h3>

                  {/* Categories */}
                  <div style={{ fontSize: '12px', color: '#64748B' }}>{opp.categories}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL: AR.IA.NO ── */}
      {isArianoModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '24px 16px',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              width: '100%',
              maxWidth: '1200px',
              maxHeight: '92vh',
              overflowY: 'auto',
              padding: '32px 40px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              position: 'relative',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ margin: 0, fontSize: '26px', color: '#0F172A', fontWeight: 800 }}>
                Ar.IA.no
              </h2>
              <button
                type="button"
                onClick={() => setIsArianoModalOpen(false)}
                style={{
                  border: 'none',
                  background: 'none',
                  fontSize: '22px',
                  color: '#00A8B5',
                  cursor: 'pointer',
                  fontWeight: 600,
                  lineHeight: 1,
                }}
                title="Fechar"
              >
                ✕
              </button>
            </div>

            {/* Top Action Bar (Sync & Logs) */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '28px',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <div>
                <button
                  type="button"
                  onClick={() => {
                    const now = new Date()
                    const dateFormatted = `${String(now.getDate()).padStart(2, '0')}/${String(
                      now.getMonth() + 1
                    ).padStart(2, '0')}/${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(
                      now.getMinutes()
                    ).padStart(2, '0')}`
                    setLastSyncDate(dateFormatted)
                    showToast('Sincronização de Iniciativas e Organizações concluída!')
                  }}
                  style={{
                    backgroundColor: '#00A8B5',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '10px 20px',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0,168,181,0.2)',
                  }}
                >
                  Sincronizar Iniciativas e Organizações
                </button>
                <div style={{ fontSize: '11px', color: '#64748B', marginTop: '4px' }}>
                  Última sincronização: {lastSyncDate}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <button
                  type="button"
                  onClick={() => showToast('Sincronização de Oportunidades concluída!')}
                  style={{
                    backgroundColor: '#00A8B5',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '10px 20px',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0,168,181,0.2)',
                  }}
                >
                  Sincronizar Oportunidades
                </button>
                <button
                  type="button"
                  onClick={() => showToast('Exibindo log do sistema Ar.IA.no...')}
                  style={{
                    backgroundColor: '#00A8B5',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '10px 20px',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0,168,181,0.2)',
                  }}
                >
                  Visualizar Log
                </button>
              </div>
            </div>

            {/* Stepper Header (3 Cards) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                marginBottom: '32px',
              }}
            >
              {/* Step 1 */}
              <div
                onClick={() => setArianoStep(1)}
                style={{
                  backgroundColor: arianoStep === 1 ? '#F97316' : '#FFFFFF',
                  color: arianoStep === 1 ? '#FFFFFF' : '#64748B',
                  border: arianoStep === 1 ? 'none' : '1px solid #E2E8F0',
                  borderRadius: '8px',
                  padding: '16px 20px',
                  cursor: 'pointer',
                  boxShadow: arianoStep === 1 ? '0 4px 12px rgba(249,115,22,0.25)' : '0 1px 3px rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ fontWeight: 800, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>{arianoStep === 1 ? '🟢' : '①'}</span> Quem é você?
                </div>
                <div style={{ fontSize: '12px', marginTop: '4px', opacity: 0.9 }}>Estamos falando com um...</div>
              </div>

              {/* Step 2 */}
              <div
                onClick={() => setArianoStep(2)}
                style={{
                  backgroundColor: arianoStep === 2 ? '#F97316' : '#FFFFFF',
                  color: arianoStep === 2 ? '#FFFFFF' : '#64748B',
                  border: arianoStep === 2 ? 'none' : '1px solid #E2E8F0',
                  borderRadius: '8px',
                  padding: '16px 20px',
                  cursor: 'pointer',
                  boxShadow: arianoStep === 2 ? '0 4px 12px rgba(249,115,22,0.25)' : '0 1px 3px rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ fontWeight: 800, fontSize: '14px' }}>② O que você busca?</div>
                <div style={{ fontSize: '12px', marginTop: '4px', opacity: 0.9 }}>Escolha uma opção</div>
              </div>

              {/* Step 3 */}
              <div
                onClick={() => setArianoStep(3)}
                style={{
                  backgroundColor: arianoStep === 3 ? '#F97316' : '#FFFFFF',
                  color: arianoStep === 3 ? '#FFFFFF' : '#64748B',
                  border: arianoStep === 3 ? 'none' : '1px solid #E2E8F0',
                  borderRadius: '8px',
                  padding: '16px 20px',
                  cursor: 'pointer',
                  boxShadow: arianoStep === 3 ? '0 4px 12px rgba(249,115,22,0.25)' : '0 1px 3px rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ fontWeight: 800, fontSize: '14px' }}>③ Match!</div>
                <div style={{ fontSize: '12px', marginTop: '4px', opacity: 0.9 }}>Principais recomendações</div>
              </div>
            </div>

            {/* STEP 1 CONTENT */}
            {arianoStep === 1 && (
              <div>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#F97316', marginBottom: '4px' }}>
                    1 Quem é você?
                  </div>
                  <div style={{ fontSize: '13px', color: '#64748B' }}>Estamos falando com um...</div>
                </div>

                {/* 16 Selection Cards Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '16px',
                    marginBottom: '32px',
                  }}
                >
                  {[
                    { label: 'Startup', icon: '🚀' },
                    { label: 'Empresa estabelecida com projeto de inovação', icon: '🚀' },
                    { label: 'Empresa Júnior', icon: '🚀' },
                    { label: 'Grupo de pesquisa', icon: '🚀' },
                    { label: 'Laboratório de pesquisa', icon: '🚀' },
                    { label: 'Projeto de extensão / programa acadêmico', icon: '🚀' },
                    { label: 'ONG', icon: '🚀' },
                    { label: 'OSC', icon: '🚀' },
                    { label: 'Órgão público (Prefeitura, Governo do Estado, órgão federal etc.)', icon: '🏢' },
                    { label: 'Empresa privada (indústria, comércio, serviços)', icon: '🏢' },
                    { label: 'Universidade / Instituto de pesquisa', icon: '🏢' },
                    { label: 'Instituição de ensino técnico / tecnológico', icon: '🏢' },
                    { label: 'ONG', icon: '🏢' },
                    { label: 'OSC', icon: '🏢' },
                    { label: 'Parque tecnológico / hub / incubadora / aceleradora', icon: '🏢' },
                    { label: 'Outra instituição privada sem fins lucrativos', icon: '🏢' },
                  ].map((option, index) => {
                    const isSelected = selectedWhoAreYou === option.label
                    return (
                      <div
                        key={`${option.label}-${index}`}
                        onClick={() => setSelectedWhoAreYou(option.label)}
                        style={{
                          backgroundColor: isSelected ? '#F97316' : '#FFFFFF',
                          color: isSelected ? '#FFFFFF' : '#1E293B',
                          border: isSelected ? 'none' : '1px solid #E2E8F0',
                          borderRadius: '8px',
                          padding: '24px 16px',
                          textAlign: 'center',
                          cursor: 'pointer',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '10px',
                          minHeight: '110px',
                          boxShadow: isSelected
                            ? '0 6px 16px rgba(249,115,22,0.3)'
                            : '0 1px 3px rgba(0,0,0,0.04)',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        <span style={{ fontSize: '24px' }}>{option.icon}</span>
                        <span style={{ fontSize: '12px', fontWeight: 600, lineHeight: 1.3 }}>{option.label}</span>
                      </div>
                    )
                  })}
                </div>

                {/* Bottom Next Action */}
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    type="button"
                    onClick={() => setArianoStep(2)}
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: '#F97316',
                      border: '1px solid #F97316',
                      borderRadius: '6px',
                      padding: '10px 36px',
                      fontWeight: 700,
                      fontSize: '13px',
                      cursor: 'pointer',
                    }}
                  >
                    Próximo ➔
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2 CONTENT */}
            {arianoStep === 2 && (
              <div>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#F97316', marginBottom: '4px' }}>
                    2 O que você busca?
                  </div>
                  <div style={{ fontSize: '13px', color: '#64748B' }}>Escolha o tipo de oportunidade ou conexão...</div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
                  {['Desafios Públicos / Licitações', 'Conexão com Startups', 'Editais de Fomento / Mentoria'].map(opt => (
                    <div
                      key={opt}
                      onClick={() => setSelectedWhatYouSeek(opt)}
                      style={{
                        backgroundColor: selectedWhatYouSeek === opt ? '#F97316' : '#FFFFFF',
                        color: selectedWhatYouSeek === opt ? '#FFFFFF' : '#1E293B',
                        border: selectedWhatYouSeek === opt ? 'none' : '1px solid #E2E8F0',
                        borderRadius: '8px',
                        padding: '28px 20px',
                        textAlign: 'center',
                        cursor: 'pointer',
                        fontWeight: 700,
                        fontSize: '14px',
                      }}
                    >
                      {opt}
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button
                    type="button"
                    onClick={() => setArianoStep(1)}
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: '#64748B',
                      border: '1px solid #CBD5E1',
                      borderRadius: '6px',
                      padding: '10px 24px',
                      fontWeight: 600,
                      fontSize: '13px',
                      cursor: 'pointer',
                    }}
                  >
                    ← Voltar
                  </button>
                  <button
                    type="button"
                    onClick={() => setArianoStep(3)}
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: '#F97316',
                      border: '1px solid #F97316',
                      borderRadius: '6px',
                      padding: '10px 36px',
                      fontWeight: 700,
                      fontSize: '13px',
                      cursor: 'pointer',
                    }}
                  >
                    Próximo ➔
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 CONTENT */}
            {arianoStep === 3 && (
              <div>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#F97316', marginBottom: '4px' }}>
                    3 Match!
                  </div>
                  <div style={{ fontSize: '13px', color: '#64748B' }}>Recomendações baseadas nas suas escolhas:</div>
                </div>

                <div style={{ padding: '24px', backgroundColor: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0', marginBottom: '24px' }}>
                  <div style={{ fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                    Perfil Selecionado: <span style={{ color: '#F97316' }}>{selectedWhoAreYou}</span>
                  </div>
                  <div style={{ fontSize: '13px', color: '#475569' }}>
                    🚀 12 Oportunidades e Iniciativas compatíveis encontradas com alta relevância de Match via IA.
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button
                    type="button"
                    onClick={() => setArianoStep(2)}
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: '#64748B',
                      border: '1px solid #CBD5E1',
                      borderRadius: '6px',
                      padding: '10px 24px',
                      fontWeight: 600,
                      fontSize: '13px',
                      cursor: 'pointer',
                    }}
                  >
                    ← Voltar
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      showToast('Match concluído com sucesso!')
                      setIsArianoModalOpen(false)
                    }}
                    style={{
                      backgroundColor: '#00A8B5',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '10px 36px',
                      fontWeight: 700,
                      fontSize: '13px',
                      cursor: 'pointer',
                    }}
                  >
                    Concluir
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// Base de Dados Estática da Trilha Caminhos (Centelha PE - FACEPE / FINEP)
// Gerada a partir dos dados do SQL (Centelha, User, Organizacao)

export interface CaminhosSubmission {
  id: string
  edicaoId: string
  edicaoName: string
  title: string
  proponente: string
  email: string | null
  categoria: string
  cidade: string
  estado: string
  estagio: string
  resumo: string
  fomentoSolicitado: string
  statusFase: string
  documentos: string[]
  linkExterno: string | null
  temAnexos: boolean
  createdDate: string
  parceiros: string[]
  mentores: string[]
  activeProfile: string
  slug: string
}

export const CAMINHOS_SUBMISSIONS: CaminhosSubmission[] = [
  {
    "id": "centelha_001",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Hawk App — A Evolução Digital para Gestão de Projetos e Obras",
    "proponente": "Engenharia & Soluções Digitais",
    "email": null,
    "categoria": "Tecnologia da Informação & Construtech",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Modelagem de Negócio",
    "resumo": "Plataforma mobile-first para gestão de canteiro de obras, relatórios diários de obra (RDO), rastreabilidade de materiais e medições digitais em tempo real para construtoras e engenheiros.",
    "fomentoSolicitado": "R$ 86.695,00 (Subvenção FACEPE/FINEP)",
    "statusFase": "Aprovado Fase 1 • Em Capacitação Fase 2",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1775662258709x217892817436661440/Pitch%20Hawk%20App_PPT_Edital%20CENTELHA_REV.01_DEZ.2025.pdf"
    ],
    "linkExterno": "https://pe.programacentelha.com.br/es1/ideia/imprimir/hawk-app-a-evolucao-digital-para-gestao-de-projetos-e-obras",
    "temAnexos": true,
    "createdDate": "2026-04-08 12:31:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Proponente Centelha",
    "slug": "centelha-submissao-001"
  },
  {
    "id": "centelha_002",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "BeeBip — Mobilidade Escolar Segura e Sustentável",
    "proponente": "Filipe Durando",
    "email": "filipe@soulmarca.com.br",
    "categoria": "Mobilidade Urbana & Smart Cities",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Validação e Pitch",
    "resumo": "Aplicativo inteligente de carona escolar colaborativa e vans escolares com rastreamento por geolocalização e verificação de antecedentes para reduzir o tráfego nos horários de pico escolar.",
    "fomentoSolicitado": "R$ 78.000,00",
    "statusFase": "Aprovado Fase 1 • Em Capacitação Fase 2",
    "documentos": [],
    "linkExterno": "https://pe.programacentelha.com.br/es1/ideia/beebip-mobilidade-escolar-segura-e-sustentavel",
    "temAnexos": false,
    "createdDate": "2026-04-08 15:06:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Resolvedor",
    "slug": "centelha-submissao-002"
  },
  {
    "id": "centelha_003",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "CENA — Centro de Estímulo a Novos Artistas",
    "proponente": "Guilhermevinícius César Cavalcante",
    "email": null,
    "categoria": "Economia Criativa & MusicTech",
    "cidade": "Olinda",
    "estado": "PE",
    "estagio": "Fase 2 — Estruturação de MVP",
    "resumo": "Hub digital e marketplace para impulsionamento, mentoria jurídica, licenciamento de direitos autorais e conexão de artistas independentes pernambucanos com marcas e festivais.",
    "fomentoSolicitado": "R$ 85.000,00",
    "statusFase": "Certificado Fase 1 • Em Capacitação Fase 2",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1775675370438x849026398715985200/Certificado%20de%20Participa%C3%A7%C3%A3o%20Fase%201%20-%20Programa%20Centelha%203%20-%20Guilhermevin%C3%ADcius%20C%C3%A9sar%20Cavalcane.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1775675390873x806565523001637200/Programa%20Centelha%20_%20PE%20-%20CENA%20-%20CENTRO%20DE%20EST%C3%8DMULO%20A%20NOVOS%20ARTISTAS.pdf"
    ],
    "linkExterno": "https://pe.programacentelha.com.br/es1/projeto/cena-centro-de-estimulo-a-novos-artistas",
    "temAnexos": true,
    "createdDate": "2026-04-08 16:10:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Proponente Centelha",
    "slug": "centelha-submissao-003"
  },
  {
    "id": "centelha_004",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "CENA — Gestão de Royalties & Distribuição Criativa",
    "proponente": "Guilhermevinícius César Cavalcante",
    "email": null,
    "categoria": "Economia Criativa & MusicTech",
    "cidade": "Olinda",
    "estado": "PE",
    "estagio": "Fase 2 — Proposta Final",
    "resumo": "Módulo avançado da plataforma CENA voltado para divisão automática de royalties e contratos inteligentes em blockchain para coletivos de arte e música do Nordeste.",
    "fomentoSolicitado": "R$ 86.695,00",
    "statusFase": "Certificado Fase 1 • Em Capacitação Fase 2",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1775676030182x664319818340017700/Programa%20Centelha%20_%20PE%20-%20CENA%20-%20CENTRO%20DE%20EST%C3%8DMULO%20A%20NOVOS%20ARTISTAS.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1775676033080x443341944288601100/Certificado%20de%20Participa%C3%A7%C3%A3o%20Fase%201%20-%20Programa%20Centelha%203%20-%20Guilhermevin%C3%ADcius%20C%C3%A9sar%20Cavalcane.pdf"
    ],
    "linkExterno": "https://pe.programacentelha.com.br/es1/projeto/cena-centro-de-estimulo-a-novos-artistas",
    "temAnexos": true,
    "createdDate": "2026-04-08 16:20:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Proponente Centelha",
    "slug": "centelha-submissao-004"
  },
  {
    "id": "centelha_005",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "NELLIA — Assistente Inteligente de Consultório para Psicologia",
    "proponente": "Ornellia",
    "email": "ornelliamenezes@hotmail.com",
    "categoria": "HealthTech & Inteligência Artificial",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Desenvolvimento de IA",
    "resumo": "Assistente clínico com IA generativa privada para psicólogos e terapeutas, automatizando prontuários, resumos de sessões e insights terapêuticos em conformidade estrita com o CFP e LGPD.",
    "fomentoSolicitado": "R$ 86.695,00",
    "statusFase": "Aprovado Fase 1 • Em Capacitação Fase 2",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1775693189315x170039246859255740/Programa%20Centelha%20%7C%20PE%20-%20NELLIA%20-%20Assistente%20inteligente%20de%20Consult%C3%B3rio%20para%20Psi%203.pdf"
    ],
    "linkExterno": null,
    "temAnexos": true,
    "createdDate": "2026-04-08 21:08:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Resolvedor , Talento , Organizador",
    "slug": "centelha-submissao-005"
  },
  {
    "id": "centelha_006",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Energia que Conecta — Microredes & Sustentabilidade Solar",
    "proponente": "Ilana",
    "email": "ilanakssantos@gmail.com",
    "categoria": "CleanTech & Energia Renovável",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Piloto Técnico",
    "resumo": "Solução de geração distribuída e compartilhamento comunitário de energia solar para microempreendimentos e periferias urbanas com monitoramento inteligente de eficiência.",
    "fomentoSolicitado": "R$ 82.500,00",
    "statusFase": "Lista Final Aprovadas Fase 1 • Fase 2",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1775730097033x940587011513107600/0_Centelha-PE-3_Lista-Final-de-Aprovadas-da-Fase-1_24.03.2026-1.pdf"
    ],
    "linkExterno": null,
    "temAnexos": true,
    "createdDate": "2026-04-09 07:21:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Resolvedor",
    "slug": "centelha-submissao-006"
  },
  {
    "id": "centelha_007",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Patternarium — Marketplace de Estampas para o Polo Têxtil",
    "proponente": "Amanda Ferreira de Almeida",
    "email": "amanda.ferreira@gmail.com",
    "categoria": "Design, Moda & RetailTech",
    "cidade": "Caruaru",
    "estado": "PE",
    "estagio": "Fase 2 — Go-to-Market",
    "resumo": "Marketplace e biblioteca digital de padronagens exclusivas e design têxtil voltado para confeccionistas do Polo de Confecções do Agreste Pernambucano (Caruaru, Toritama, Santa Cruz).",
    "fomentoSolicitado": "R$ 80.000,00",
    "statusFase": "Aprovado Fase 1 • Em Capacitação Fase 2",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-09 09:20:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Resolvedor",
    "slug": "centelha-submissao-007"
  },
  {
    "id": "centelha_008",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Patternarium — IA Generativa para Estamparia Digital",
    "proponente": "Amanda Ferreira de Almeida",
    "email": null,
    "categoria": "Design & Inteligência Artificial",
    "cidade": "Caruaru",
    "estado": "PE",
    "estagio": "Fase 2 — Pesquisa e Desenvolvimento",
    "resumo": "Ferramenta de design paramétrico e IA assistida para criação ágil de estampas têxteis com geração de fichas técnicas para estamparia digital e cilindro.",
    "fomentoSolicitado": "R$ 86.695,00",
    "statusFase": "Em Estruturação Fase 2",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-09 09:25:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Proponente Centelha",
    "slug": "centelha-submissao-008"
  },
  {
    "id": "centelha_009",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "A Casa Resiliente: Arquitetura & Inovação para Moradias Sustentáveis",
    "proponente": "Jairo Gonçalves Lima Filho",
    "email": "jairolimafilho@gmail.com",
    "categoria": "CleanTech, Arquitetura & Habitação",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Modelagem Estrutural",
    "resumo": "Sistema construtivo modular e bioclimático para habitações de interesse social e moradias sustentáveis com materiais de baixo carbono e captação de água de chuva.",
    "fomentoSolicitado": "R$ 86.695,00",
    "statusFase": "Aprovado Fase 1 • Em Capacitação Fase 2",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1775743055985x287923531811788320/Programa%20Centelha%20_%20PE%20-%20A%20Casa%20Resiliente_%20Arquitetura%20e%20inova%C3%A7%C3%A3o%20para%20moradias%20resilientes_%20%281%29.pdf"
    ],
    "linkExterno": "https://pe.programacentelha.com.br/es1/ideia/a-casa-resiliente-arquitetura-e-inovacao-para-moradias-resilientes",
    "temAnexos": true,
    "createdDate": "2026-04-09 11:07:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Resolvedor",
    "slug": "centelha-submissao-009"
  },
  {
    "id": "centelha_010",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Diná Inclui — Formação Profissional com Acompanhamento Neurodivergente",
    "proponente": "Michael Roberto de Athayde Pereira Gaviao",
    "email": "dinatreinamentos@gmail.com",
    "categoria": "EdTech & Inclusão Social",
    "cidade": "Jaboatão dos Guararapes",
    "estado": "PE",
    "estagio": "Fase 2 — Metodologia & MVP",
    "resumo": "Plataforma e esteira de capacitação profissional e inclusão corporativa de jovens neurodivergentes (TEA, TDAH) com mediação tecnológica e suporte psicopedagógico contínuo.",
    "fomentoSolicitado": "R$ 79.500,00",
    "statusFase": "Aprovado Fase 1 • Em Capacitação Fase 2",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1775754919726x905688964813615100/_Din%C3%A1%20Inclui.pptx"
    ],
    "linkExterno": "https://pe.programacentelha.com.br/es1/ideia/dina-treinamentos-formacao-profissional-com-acompanhamento",
    "temAnexos": true,
    "createdDate": "2026-04-09 14:15:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Resolvedor",
    "slug": "centelha-submissao-010"
  },
  {
    "id": "centelha_011",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Proposta de Inovação #011",
    "proponente": "Proponente #11",
    "email": null,
    "categoria": "Tecnologia da Informação & Comunicação (TIC)",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Capacitação & Submissão",
    "resumo": "Projeto submetido na Trilha de Capacitação e Submissão ao Edital Centelha PE (FACEPE/FINEP) com mentoria técnica e estruturação de plano de negócios.",
    "fomentoSolicitado": "R$ 86.695,00 (Subvenção FACEPE/FINEP)",
    "statusFase": "Fase 2 — Capacitação & Mentorias",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-10 08:43:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Proponente Centelha",
    "slug": "centelha-submissao-011"
  },
  {
    "id": "centelha_012",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Proposta de Inovação #012",
    "proponente": "Proponente #12",
    "email": null,
    "categoria": "Tecnologia da Informação & Comunicação (TIC)",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Capacitação & Submissão",
    "resumo": "Projeto submetido na Trilha de Capacitação e Submissão ao Edital Centelha PE (FACEPE/FINEP) com mentoria técnica e estruturação de plano de negócios.",
    "fomentoSolicitado": "R$ 86.695,00 (Subvenção FACEPE/FINEP)",
    "statusFase": "Fase 2 — Capacitação & Mentorias",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-10 08:49:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Proponente Centelha",
    "slug": "centelha-submissao-012"
  },
  {
    "id": "centelha_013",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Proposta de Inovação #013",
    "proponente": "Proponente #13",
    "email": null,
    "categoria": "Tecnologia da Informação & Comunicação (TIC)",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Capacitação & Submissão",
    "resumo": "Projeto submetido na Trilha de Capacitação e Submissão ao Edital Centelha PE (FACEPE/FINEP) com mentoria técnica e estruturação de plano de negócios.",
    "fomentoSolicitado": "R$ 86.695,00 (Subvenção FACEPE/FINEP)",
    "statusFase": "Fase 2 — Capacitação & Mentorias",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-10 09:53:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Proponente Centelha",
    "slug": "centelha-submissao-013"
  },
  {
    "id": "centelha_014",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "TermoClean — Eficiência Energética & Cogeração IFPE",
    "proponente": "Alvaro Antonio Ochoa Villa",
    "email": "ochoaalvaro@recife.ifpe.edu.br",
    "categoria": "DeepTech, Energia & Engenharia",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Validação Acadêmica",
    "resumo": "Projeto de transferência tecnológica do IFPE focado em sistemas de refrigeração por absorção solar e recuperação de calor industrial para indústrias do complexo de Suape.",
    "fomentoSolicitado": "R$ 86.695,00",
    "statusFase": "Aprovado Fase 1 • Em Capacitação Fase 2",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-10 13:10:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Resolvedor",
    "slug": "centelha-submissao-014"
  },
  {
    "id": "centelha_015",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "BioGestão — Inovação em Processos de Fomento Científico",
    "proponente": "Livia Vilar Lemos",
    "email": "livia.lemos@facepe.br",
    "categoria": "GovTech & Gestão de C&T",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Proposta Institucional",
    "resumo": "Plataforma inteligente para desburocratização de prestação de contas, acompanhamento de bolsas científicas e impacto de pesquisas fomentadas em Pernambuco.",
    "fomentoSolicitado": "R$ 85.000,00",
    "statusFase": "Em Capacitação Fase 2",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-10 14:02:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Resolvedor",
    "slug": "centelha-submissao-015"
  },
  {
    "id": "centelha_016",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "NanoVax — Nanomateriais para Diagnósticos Clínicos UFPE",
    "proponente": "Miriam Kézia Nicolau Gregório de Oliveira",
    "email": "miriam.kezia@ufpe.br",
    "categoria": "BioTech & Nanotecnologia",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Bancada & TRL 4",
    "resumo": "Desenvolvimento de sensores nanobiotecnológicos baseados em nanopartículas magnéticas para diagnóstico ultrarrápido de patógenos tropicais na rede pública.",
    "fomentoSolicitado": "R$ 86.695,00",
    "statusFase": "Aprovado Fase 1 • Em Capacitação Fase 2",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-10 14:48:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Resolvedor , Talento , Organizador",
    "slug": "centelha-submissao-016"
  },
  {
    "id": "centelha_017",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "EcoVibe — Gestão de Resíduos Orgânicos Comunitários",
    "proponente": "Edivone Araújo",
    "email": "edhyvone.araujo@gmail.com",
    "categoria": "CleanTech & Meio Ambiente",
    "cidade": "Paulista",
    "estado": "PE",
    "estagio": "Fase 2 — Proposta Técnica",
    "resumo": "Compostagem inteligente acelerada e logística reversa de resíduos orgânicos para restaurantes e condomínios com bonificação em adubo orgânico certificado.",
    "fomentoSolicitado": "R$ 75.000,00",
    "statusFase": "Em Capacitação Fase 2",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-10 16:04:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Resolvedor",
    "slug": "centelha-submissao-017"
  },
  {
    "id": "centelha_018",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Iupi Marketing — Inteligência de Dados para Marcas Locais",
    "proponente": "Thais de Almeida Gomes Santos Hiramine",
    "email": "thaisiupimkt@gmail.com",
    "categoria": "MarTech & Ciência de Dados",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Estruturação Comercial",
    "resumo": "Plataforma de inteligência de mercado, análise de comportamento de consumo local e automação de marketing de influência para pequenas e médias empresas do Nordeste.",
    "fomentoSolicitado": "R$ 80.000,00",
    "statusFase": "Em Capacitação Fase 2",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-10 17:02:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Resolvedor",
    "slug": "centelha-submissao-018"
  },
  {
    "id": "centelha_019",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Proposta de Inovação #019",
    "proponente": "Proponente #19",
    "email": null,
    "categoria": "Tecnologia da Informação & Comunicação (TIC)",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Capacitação & Submissão",
    "resumo": "Projeto submetido na Trilha de Capacitação e Submissão ao Edital Centelha PE (FACEPE/FINEP) com mentoria técnica e estruturação de plano de negócios.",
    "fomentoSolicitado": "R$ 86.695,00 (Subvenção FACEPE/FINEP)",
    "statusFase": "Fase 2 — Capacitação & Mentorias",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-10 17:45:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Proponente Centelha",
    "slug": "centelha-submissao-019"
  },
  {
    "id": "centelha_020",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Proposta de Inovação #020",
    "proponente": "Proponente #20",
    "email": null,
    "categoria": "Tecnologia da Informação & Comunicação (TIC)",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Capacitação & Submissão",
    "resumo": "Projeto submetido na Trilha de Capacitação e Submissão ao Edital Centelha PE (FACEPE/FINEP) com mentoria técnica e estruturação de plano de negócios.",
    "fomentoSolicitado": "R$ 86.695,00 (Subvenção FACEPE/FINEP)",
    "statusFase": "Fase 2 — Capacitação & Mentorias",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-10 17:45:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Proponente Centelha",
    "slug": "centelha-submissao-020"
  },
  {
    "id": "centelha_021",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "ReTech Mais — Logística Reversa & Mineração Urbana de E-lixo",
    "proponente": "José Alexandre Soares de Oliveira Lima",
    "email": "alexandre.lima@retechmais.com.br",
    "categoria": "CleanTech & Economia Circular",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Tração Operacional",
    "resumo": "Rastreabilidade e reciclagem certificada de resíduos eletroeletrônicos corporativos com emissão de créditos ESG e recuperação de metais nobres.",
    "fomentoSolicitado": "R$ 86.695,00",
    "statusFase": "Aprovado Fase 1 • Em Capacitação Fase 2",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-10 18:52:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Resolvedor",
    "slug": "centelha-submissao-021"
  },
  {
    "id": "centelha_022",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Ester GovEdu — Triagem Pedagógica e Acessibilidade Escolar",
    "proponente": "Ester Vitoria Reis de Lima",
    "email": "estervrl06@gmail.com",
    "categoria": "EdTech & GovTech",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Proposta Técnica",
    "resumo": "Ferramenta digital de auxílio aos professores da rede pública para identificação precoce de déficits de aprendizagem e adaptação de material curricular inclusivo.",
    "fomentoSolicitado": "R$ 78.000,00",
    "statusFase": "Em Capacitação Fase 2",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-12 15:50:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Resolvedor",
    "slug": "centelha-submissao-022"
  },
  {
    "id": "centelha_023",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Proposta de Inovação #023",
    "proponente": "Proponente #23",
    "email": null,
    "categoria": "Tecnologia da Informação & Comunicação (TIC)",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Capacitação & Submissão",
    "resumo": "Projeto submetido na Trilha de Capacitação e Submissão ao Edital Centelha PE (FACEPE/FINEP) com mentoria técnica e estruturação de plano de negócios.",
    "fomentoSolicitado": "R$ 86.695,00 (Subvenção FACEPE/FINEP)",
    "statusFase": "Fase 2 — Capacitação & Mentorias",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-12 15:52:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Proponente Centelha",
    "slug": "centelha-submissao-023"
  },
  {
    "id": "centelha_024",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Proposta de Inovação #024",
    "proponente": "Proponente #24",
    "email": null,
    "categoria": "Tecnologia da Informação & Comunicação (TIC)",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Capacitação & Submissão",
    "resumo": "Projeto submetido na Trilha de Capacitação e Submissão ao Edital Centelha PE (FACEPE/FINEP) com mentoria técnica e estruturação de plano de negócios.",
    "fomentoSolicitado": "R$ 86.695,00 (Subvenção FACEPE/FINEP)",
    "statusFase": "Fase 2 — Capacitação & Mentorias",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-13 10:15:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Proponente Centelha",
    "slug": "centelha-submissao-024"
  },
  {
    "id": "centelha_025",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Proposta de Inovação #025",
    "proponente": "Proponente #25",
    "email": "cececec@gmail.com",
    "categoria": "Tecnologia da Informação & Comunicação (TIC)",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Capacitação & Submissão",
    "resumo": "Projeto submetido na Trilha de Capacitação e Submissão ao Edital Centelha PE (FACEPE/FINEP) com mentoria técnica e estruturação de plano de negócios.",
    "fomentoSolicitado": "R$ 86.695,00 (Subvenção FACEPE/FINEP)",
    "statusFase": "Fase 2 — Capacitação & Mentorias",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-13 10:43:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Resolvedor",
    "slug": "centelha-submissao-025"
  },
  {
    "id": "centelha_026",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Proposta de Inovação #026",
    "proponente": "Proponente #26",
    "email": null,
    "categoria": "Tecnologia da Informação & Comunicação (TIC)",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Capacitação & Submissão",
    "resumo": "Projeto submetido na Trilha de Capacitação e Submissão ao Edital Centelha PE (FACEPE/FINEP) com mentoria técnica e estruturação de plano de negócios.",
    "fomentoSolicitado": "R$ 86.695,00 (Subvenção FACEPE/FINEP)",
    "statusFase": "Fase 2 — Capacitação & Mentorias",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-13 11:30:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Proponente Centelha",
    "slug": "centelha-submissao-026"
  },
  {
    "id": "centelha_027",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Start GO Solutions — Capacitação Ágil & Outsourcing de TI",
    "proponente": "BEATRIZ ELIZABETH OLIVEIRA DO NASCIMENTO",
    "email": "startgosolutions@gmail.com",
    "categoria": "Tecnologia da Informação & Dev",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Escala de Formação",
    "resumo": "Bootcamp prático orientado a projetos reais e alocação de talentos juniores de comunidades periféricas em empresas de tecnologia do Porto Digital.",
    "fomentoSolicitado": "R$ 85.000,00",
    "statusFase": "Aprovado Fase 1 • Em Capacitação Fase 2",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-13 11:42:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Resolvedor",
    "slug": "centelha-submissao-027"
  },
  {
    "id": "centelha_028",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "IFPE AgroTech — Monitoramento de Microclima para Horticultura",
    "proponente": "Rafael Paulo da Silva Soares",
    "email": "rpss1@discente.ifpe.edu.br",
    "categoria": "AgTech & IoT",
    "cidade": "Vitória de Santo Antão",
    "estado": "PE",
    "estagio": "Fase 2 — Prototipagem",
    "resumo": "Rede de sensores sem fio de baixo custo para controle de umidade de solo e estufas automatizadas no cinturão verde da Zona da Mata de Pernambuco.",
    "fomentoSolicitado": "R$ 76.000,00",
    "statusFase": "Em Capacitação Fase 2",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-13 14:36:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Resolvedor",
    "slug": "centelha-submissao-028"
  },
  {
    "id": "centelha_029",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "SmartLog Recife — Otimização de Entregas Last-Mile",
    "proponente": "joao Henrique da silva santos",
    "email": "joaohenriquessantos43@gmail.com",
    "categoria": "LogTech & Cidades Inteligentes",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Proposta Técnica",
    "resumo": "Algoritmo de roteirização inteligente para entregas ecológicas por bicicletas e veículos elétricos no centro expandido e bairros históricos do Recife.",
    "fomentoSolicitado": "R$ 82.000,00",
    "statusFase": "Em Capacitação Fase 2",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-13 14:37:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Resolvedor , Talento , Organizador",
    "slug": "centelha-submissao-029"
  },
  {
    "id": "centelha_030",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Proposta de Inovação #030",
    "proponente": "asdf",
    "email": "tyuioiuyiuoyouiyiuo@asdasda.com",
    "categoria": "Tecnologia da Informação & Comunicação (TIC)",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Capacitação & Submissão",
    "resumo": "Projeto submetido na Trilha de Capacitação e Submissão ao Edital Centelha PE (FACEPE/FINEP) com mentoria técnica e estruturação de plano de negócios.",
    "fomentoSolicitado": "R$ 86.695,00 (Subvenção FACEPE/FINEP)",
    "statusFase": "Fase 2 — Capacitação & Mentorias",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-14 11:28:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Resolvedor",
    "slug": "centelha-submissao-030"
  },
  {
    "id": "centelha_031",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Proposta de Inovação #031",
    "proponente": "asdf",
    "email": "11111@gmail.com.br",
    "categoria": "Tecnologia da Informação & Comunicação (TIC)",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Capacitação & Submissão",
    "resumo": "Projeto submetido na Trilha de Capacitação e Submissão ao Edital Centelha PE (FACEPE/FINEP) com mentoria técnica e estruturação de plano de negócios.",
    "fomentoSolicitado": "R$ 86.695,00 (Subvenção FACEPE/FINEP)",
    "statusFase": "Fase 2 — Capacitação & Mentorias",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-14 11:33:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Resolvedor",
    "slug": "centelha-submissao-031"
  },
  {
    "id": "centelha_032",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Figueiroa Agreste Tech — Gestão Integrada de Facções Têxteis",
    "proponente": "Lucas Figueiroa",
    "email": "ofig.lucas@gmail.com",
    "categoria": "RetailTech & Moda",
    "cidade": "Santa Cruz do Capibaribe",
    "estado": "PE",
    "estagio": "Fase 2 — Desenvolvimento de Software",
    "resumo": "ERP simplificado para pequenas facções e costureiras familiares do Agreste, controlando ordens de corte, custos por peça e pagamentos pontuais.",
    "fomentoSolicitado": "R$ 80.000,00",
    "statusFase": "Em Capacitação Fase 2",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-14 11:35:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Resolvedor",
    "slug": "centelha-submissao-032"
  },
  {
    "id": "centelha_033",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Proposta de Inovação #033",
    "proponente": "fasdfasdf",
    "email": "asdfasdf@asdfasdf.com",
    "categoria": "Tecnologia da Informação & Comunicação (TIC)",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Capacitação & Submissão",
    "resumo": "Projeto submetido na Trilha de Capacitação e Submissão ao Edital Centelha PE (FACEPE/FINEP) com mentoria técnica e estruturação de plano de negócios.",
    "fomentoSolicitado": "R$ 86.695,00 (Subvenção FACEPE/FINEP)",
    "statusFase": "Fase 2 — Capacitação & Mentorias",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-14 11:40:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Resolvedor",
    "slug": "centelha-submissao-033"
  },
  {
    "id": "centelha_034",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Paes Barreto Consultoria & Compliance em Saúde Digital",
    "proponente": "Lourenço Paes Barreto",
    "email": "lourencolpb@hotmail.com",
    "categoria": "HealthTech & LegalTech",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Estruturação Regulatória",
    "resumo": "Plataforma de adequação contínua de clínicas e startups de saúde à LGPD e normativas sanitárias da ANVISA com auditorias automatizadas.",
    "fomentoSolicitado": "R$ 84.000,00",
    "statusFase": "Em Capacitação Fase 2",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-15 00:43:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Resolvedor",
    "slug": "centelha-submissao-034"
  },
  {
    "id": "centelha_035",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Flora Insights — Monitoramento Satelital e Botânico da Caatinga",
    "proponente": "Ricardo Queiroz",
    "email": "ricardo@florainsights.com.br",
    "categoria": "AgTech, Clima & Geotecnologia",
    "cidade": "Petrolina",
    "estado": "PE",
    "estagio": "Fase 2 — Validação de Algoritmo",
    "resumo": "Análise de imagens de satélite e espectrometria para monitoramento de desmatamento, restauração de biomas semiáridos e mensuração de biomassa para crédito de carbono.",
    "fomentoSolicitado": "R$ 86.695,00",
    "statusFase": "Aprovado Fase 1 • Em Capacitação Fase 2",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-16 03:32:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Resolvedor",
    "slug": "centelha-submissao-035"
  },
  {
    "id": "centelha_036",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Proposta de Inovação #036",
    "proponente": "Proponente #36",
    "email": null,
    "categoria": "Tecnologia da Informação & Comunicação (TIC)",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Capacitação & Submissão",
    "resumo": "Projeto submetido na Trilha de Capacitação e Submissão ao Edital Centelha PE (FACEPE/FINEP) com mentoria técnica e estruturação de plano de negócios.",
    "fomentoSolicitado": "R$ 86.695,00 (Subvenção FACEPE/FINEP)",
    "statusFase": "Fase 2 — Capacitação & Mentorias",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-16 18:07:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Proponente Centelha",
    "slug": "centelha-submissao-036"
  },
  {
    "id": "centelha_037",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Proposta de Inovação #037",
    "proponente": "Proponente #37",
    "email": null,
    "categoria": "Tecnologia da Informação & Comunicação (TIC)",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Capacitação & Submissão",
    "resumo": "Projeto submetido na Trilha de Capacitação e Submissão ao Edital Centelha PE (FACEPE/FINEP) com mentoria técnica e estruturação de plano de negócios.",
    "fomentoSolicitado": "R$ 86.695,00 (Subvenção FACEPE/FINEP)",
    "statusFase": "Fase 2 — Capacitação & Mentorias",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-17 15:34:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Proponente Centelha",
    "slug": "centelha-submissao-037"
  },
  {
    "id": "centelha_038",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Proposta de Inovação #038",
    "proponente": "Proponente #38",
    "email": null,
    "categoria": "Tecnologia da Informação & Comunicação (TIC)",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Capacitação & Submissão",
    "resumo": "Projeto submetido na Trilha de Capacitação e Submissão ao Edital Centelha PE (FACEPE/FINEP) com mentoria técnica e estruturação de plano de negócios.",
    "fomentoSolicitado": "R$ 86.695,00 (Subvenção FACEPE/FINEP)",
    "statusFase": "Fase 2 — Capacitação & Mentorias",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-17 15:35:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Proponente Centelha",
    "slug": "centelha-submissao-038"
  },
  {
    "id": "centelha_039",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "NutriCare — Gestão Nutricional Humanizada para Pacientes Oncológicos",
    "proponente": "Lindomara Cristina Félix da Silva",
    "email": "lindomaracristina16@gmail.com",
    "categoria": "HealthTech & Nutrição",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Validação Clínica",
    "resumo": "Aplicativo de acompanhamento nutricional personalizado e manejo de sintomas para pacientes em tratamento quimioterápico com teleconsultoria integrada.",
    "fomentoSolicitado": "R$ 79.000,00",
    "statusFase": "Em Capacitação Fase 2",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-04-17 20:00:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Resolvedor",
    "slug": "centelha-submissao-039"
  },
  {
    "id": "centelha_040",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Proposta de Inovação #040",
    "proponente": "Proponente #40",
    "email": null,
    "categoria": "Tecnologia da Informação & Comunicação (TIC)",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Capacitação & Submissão",
    "resumo": "Projeto submetido na Trilha de Capacitação e Submissão ao Edital Centelha PE (FACEPE/FINEP) com mentoria técnica e estruturação de plano de negócios.",
    "fomentoSolicitado": "R$ 86.695,00 (Subvenção FACEPE/FINEP)",
    "statusFase": "Fase 2 — Capacitação & Mentorias",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-05-16 17:49:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Proponente Centelha",
    "slug": "centelha-submissao-040"
  },
  {
    "id": "centelha_041",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Proposta de Inovação #041",
    "proponente": "Proponente #41",
    "email": null,
    "categoria": "Tecnologia da Informação & Comunicação (TIC)",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Capacitação & Submissão",
    "resumo": "Projeto submetido na Trilha de Capacitação e Submissão ao Edital Centelha PE (FACEPE/FINEP) com mentoria técnica e estruturação de plano de negócios.",
    "fomentoSolicitado": "R$ 86.695,00 (Subvenção FACEPE/FINEP)",
    "statusFase": "Fase 2 — Capacitação & Mentorias",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-05-24 18:23:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Proponente Centelha",
    "slug": "centelha-submissao-041"
  },
  {
    "id": "centelha_042",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Proposta de Inovação #042",
    "proponente": "Proponente #42",
    "email": null,
    "categoria": "Tecnologia da Informação & Comunicação (TIC)",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Capacitação & Submissão",
    "resumo": "Projeto submetido na Trilha de Capacitação e Submissão ao Edital Centelha PE (FACEPE/FINEP) com mentoria técnica e estruturação de plano de negócios.",
    "fomentoSolicitado": "R$ 86.695,00 (Subvenção FACEPE/FINEP)",
    "statusFase": "Fase 2 — Capacitação & Mentorias",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-06-09 18:44:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Proponente Centelha",
    "slug": "centelha-submissao-042"
  },
  {
    "id": "centelha_043",
    "edicaoId": "Centelha-PE-3",
    "edicaoName": "Trilha Caminhos • Centelha PE (FACEPE / FINEP)",
    "title": "Bruno Sales Tech — Segurança Cibernética & SOC para PMEs",
    "proponente": "Bruno Sales Meireles Filho",
    "email": "salesmbrunof@gmail.com",
    "categoria": "CyberSecurity & TI",
    "cidade": "Recife",
    "estado": "PE",
    "estagio": "Fase 2 — Estruturação de Serviço",
    "resumo": "Centro de operações de segurança (SOC) em nuvem para monitoramento 24/7 contra ransomware e invasões em redes corporativas de empresas de médio porte do Nordeste.",
    "fomentoSolicitado": "R$ 86.695,00",
    "statusFase": "Aprovado Fase 1 • Em Capacitação Fase 2",
    "documentos": [],
    "linkExterno": null,
    "temAnexos": false,
    "createdDate": "2026-06-25 11:31:00",
    "parceiros": [
      "FACEPE (Fundação de Amparo à Ciência e Tecnologia de PE)",
      "FINEP (Financiadora de Estudos e Projetos)",
      "SECTI Recife & Prefeitura do Recife",
      "Porto Digital & MCTI"
    ],
    "mentores": [
      "Prof. Roberto Alencar (UFPE / CIn)",
      "Dra. Ana Paula Souza (EMPREL / Inovação Aberta)",
      "Carlos Eduardo Lima (Especialista em Modelagem de Negócios)",
      "Equipe de Mentores Trilha Caminhos"
    ],
    "activeProfile": "Resolvedor",
    "slug": "centelha-submissao-043"
  }
]

export const CAMINHOS_COM_ANEXOS = CAMINHOS_SUBMISSIONS.filter(s => s.temAnexos)
export const CAMINHOS_RECIFE = CAMINHOS_SUBMISSIONS.filter(s => s.cidade === 'Recife')
export const CAMINHOS_INTERIOR = CAMINHOS_SUBMISSIONS.filter(s => s.cidade !== 'Recife')
export const CAMINHOS_COM_LINK_OFICIAL = CAMINHOS_SUBMISSIONS.filter(s => !!s.linkExterno)

/**
 * Função utilitária para exportação CSV de dados da Trilha Caminhos Centelha PE
 */
export function exportToCSV(filename: string, rows: Record<string, any>[], columnMap?: Record<string, string>) {
  if (!rows || !rows.length) {
    alert('Nenhum dado disponível para exportação.')
    return
  }

  const keys = columnMap ? Object.keys(columnMap) : Object.keys(rows[0])
  const headers = columnMap ? Object.values(columnMap) : keys

  const csvContent = [
    headers.map(h => `"${String(h).replace(/"/g, '""')}"`).join(','),
    ...rows.map(row =>
      keys
        .map(key => {
          let val = row[key]
          if (val === undefined || val === null) val = ''
          if (Array.isArray(val)) val = val.join(' ; ')
          if (typeof val === 'boolean') val = val ? 'Sim' : 'Não'
          return `"${String(val).replace(/"/g, '""')}"`
        })
        .join(',')
    )
  ].join('\r\n')

  const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.setAttribute('href', url)
  link.setAttribute('download', `${filename}_${new Date().toISOString().slice(0, 10)}.csv`)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

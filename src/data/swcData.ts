// Base de Dados Estática da Startup World Cup 2026 (Regional Recife)
// Gerada a partir dos dados do SQL (proposta_worldcup, User, Organizacao)

export interface StartupWorldCupSubmission {
  id: string
  edicaoId: string
  edicaoName: string
  title: string
  startupName: string
  founderName: string
  cargo: string
  email: string
  cnpj: string
  cnpjRaw: string
  cidade: string
  estado: string
  regiao: string
  segmento: string
  estagio: string
  buscandoInvestimento: boolean
  cienteCompartilhamento: boolean
  descricao: string
  website: string | null
  pitchDeckUrl: string | null
  premios: string[]
  avaliadores: string[]
  avatarUrl: string | null
  activeProfile: string
  slug: string
}

export const SWC_SUBMISSIONS: StartupWorldCupSubmission[] = [
  {
    "id": "prop_wc_001",
    "edicaoId": "SWC-2026",
    "edicaoName": "Startup World Cup 2026 — Regional Recife",
    "title": "Inovação Aberta & GovTech Labs • Gabriel Chamie",
    "startupName": "Inovação Aberta & GovTech Labs",
    "founderName": "Gabriel Chamie",
    "cargo": "Lider fundador",
    "email": "gabrielchamie@gmail.com",
    "cnpj": "2131231231",
    "cnpjRaw": "2131231231",
    "cidade": "Recife",
    "estado": "PE",
    "regiao": "Recife",
    "segmento": "GovTech & Dados Abertos",
    "estagio": "Operação / Tração",
    "buscandoInvestimento": false,
    "cienteCompartilhamento": true,
    "descricao": "Solução voltada para conexão de governos e cidades inteligentes a ecossistemas de startups de impacto.",
    "website": "https://coreto.recife.pe.gov.br",
    "pitchDeckUrl": "https://coreto.recife.pe.gov.br/docs/swc-pitch-prop_wc_001.pdf",
    "premios": [
      "Top 1 Regional Recife: Vaga oficial na Grand Finale (Silicon Valley, Califórnia - EUA)",
      "Aporte Global: US$ 1.000.000,00 (Um Milhão de Dólares) em investimento direto pela Pegasus Tech Ventures",
      "Mentoria Especializada de Pitch Internacional & Conexão com Fundos Globais de VC"
    ],
    "avaliadores": [
      "Pegasus Tech Ventures (Silicon Valley, USA)",
      "Porto Digital Recife",
      "Comunidade Manguezal & Anjos do Brasil",
      "Secretaria de Ciência, Tecnologia e Inovação (SECTI Recife)"
    ],
    "avatarUrl": "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1733310735664x362762079388483400/CD%202022%20-%20MIN.%20SA%C3%9ADE%20-%20S%C3%81BADO%2002-64.jpg",
    "activeProfile": "Talento , Organizador , Resolvedor",
    "slug": "worldcup-gabrielchamie"
  },
  {
    "id": "prop_wc_002",
    "edicaoId": "SWC-2026",
    "edicaoName": "Startup World Cup 2026 — Regional Recife",
    "title": "Sandora Me • Meline Lopes",
    "startupName": "Sandora Me",
    "founderName": "Meline Lopes",
    "cargo": "CEO",
    "email": "admin@sandora.me",
    "cnpj": "47.681.875/0001-60",
    "cnpjRaw": "47681875000160",
    "cidade": "Maceió",
    "estado": "AL",
    "regiao": "Outros Estados",
    "segmento": "BioTech & HealthTech",
    "estagio": "Validação / Tração",
    "buscandoInvestimento": false,
    "cienteCompartilhamento": true,
    "descricao": "Plataforma inteligente de soluções em biotecnologia e automação para saúde e laboratórios.",
    "website": "https://sandora.me",
    "pitchDeckUrl": "https://coreto.recife.pe.gov.br/docs/swc-pitch-prop_wc_002.pdf",
    "premios": [
      "Top 1 Regional Recife: Vaga oficial na Grand Finale (Silicon Valley, Califórnia - EUA)",
      "Aporte Global: US$ 1.000.000,00 (Um Milhão de Dólares) em investimento direto pela Pegasus Tech Ventures",
      "Mentoria Especializada de Pitch Internacional & Conexão com Fundos Globais de VC"
    ],
    "avaliadores": [
      "Pegasus Tech Ventures (Silicon Valley, USA)",
      "Porto Digital Recife",
      "Comunidade Manguezal & Anjos do Brasil",
      "Secretaria de Ciência, Tecnologia e Inovação (SECTI Recife)"
    ],
    "avatarUrl": null,
    "activeProfile": "Resolvedor , Talento",
    "slug": "worldcup-admin-sandora"
  },
  {
    "id": "prop_wc_003",
    "edicaoId": "SWC-2026",
    "edicaoName": "Startup World Cup 2026 — Regional Recife",
    "title": "Grupo Adapta • José Inácio Ferreira de Souza",
    "startupName": "Grupo Adapta",
    "founderName": "José Inácio Ferreira de Souza",
    "cargo": "CEO",
    "email": "diretor@grupoadapta.com.br",
    "cnpj": "46.085.514/0001-98",
    "cnpjRaw": "46085514000198",
    "cidade": "Caruaru",
    "estado": "PE",
    "regiao": "Pernambuco (Interior/RMR)",
    "segmento": "GovTech & Gestão Pública",
    "estagio": "Operação / Escala",
    "buscandoInvestimento": true,
    "cienteCompartilhamento": true,
    "descricao": "Tecnologias de adaptação climática, governança corporativa e eficiência para gestão municipal e regional.",
    "website": "https://grupoadapta.com.br",
    "pitchDeckUrl": "https://coreto.recife.pe.gov.br/docs/swc-pitch-prop_wc_003.pdf",
    "premios": [
      "Top 1 Regional Recife: Vaga oficial na Grand Finale (Silicon Valley, Califórnia - EUA)",
      "Aporte Global: US$ 1.000.000,00 (Um Milhão de Dólares) em investimento direto pela Pegasus Tech Ventures",
      "Mentoria Especializada de Pitch Internacional & Conexão com Fundos Globais de VC"
    ],
    "avaliadores": [
      "Pegasus Tech Ventures (Silicon Valley, USA)",
      "Porto Digital Recife",
      "Comunidade Manguezal & Anjos do Brasil",
      "Secretaria de Ciência, Tecnologia e Inovação (SECTI Recife)"
    ],
    "avatarUrl": null,
    "activeProfile": "Resolvedor , Talento",
    "slug": "worldcup-diretor-grupoadapta"
  },
  {
    "id": "prop_wc_004",
    "edicaoId": "SWC-2026",
    "edicaoName": "Startup World Cup 2026 — Regional Recife",
    "title": "Lucas de Lima Tech • Lucas de Lima Nogueira",
    "startupName": "Lucas de Lima Tech",
    "founderName": "Lucas de Lima Nogueira",
    "cargo": "Founder",
    "email": "lucasdelima96@gmail.com",
    "cnpj": "61.011.472/0001-34",
    "cnpjRaw": "61011472000134",
    "cidade": "Recife",
    "estado": "PE",
    "regiao": "Recife",
    "segmento": "Software & Cloud Services",
    "estagio": "Validação",
    "buscandoInvestimento": true,
    "cienteCompartilhamento": true,
    "descricao": "Infraestrutura em nuvem e APIs resilientes para escalabilidade de aplicações digitais.",
    "website": "https://github.com/lucasdelima96",
    "pitchDeckUrl": "https://coreto.recife.pe.gov.br/docs/swc-pitch-prop_wc_004.pdf",
    "premios": [
      "Top 1 Regional Recife: Vaga oficial na Grand Finale (Silicon Valley, Califórnia - EUA)",
      "Aporte Global: US$ 1.000.000,00 (Um Milhão de Dólares) em investimento direto pela Pegasus Tech Ventures",
      "Mentoria Especializada de Pitch Internacional & Conexão com Fundos Globais de VC"
    ],
    "avaliadores": [
      "Pegasus Tech Ventures (Silicon Valley, USA)",
      "Porto Digital Recife",
      "Comunidade Manguezal & Anjos do Brasil",
      "Secretaria de Ciência, Tecnologia e Inovação (SECTI Recife)"
    ],
    "avatarUrl": null,
    "activeProfile": "Resolvedor , Talento",
    "slug": "worldcup-lucasdelima96"
  },
  {
    "id": "prop_wc_005",
    "edicaoId": "SWC-2026",
    "edicaoName": "Startup World Cup 2026 — Regional Recife",
    "title": "Sertão Tech Petrolina • VDIOGO225",
    "startupName": "Sertão Tech Petrolina",
    "founderName": "VDIOGO225",
    "cargo": "CEO",
    "email": "vdiogo225@gmali.com",
    "cnpj": "58.740.502/0001-39",
    "cnpjRaw": "58740502000139",
    "cidade": "Petrolina",
    "estado": "PE",
    "regiao": "Pernambuco (Interior/RMR)",
    "segmento": "AgTech & Clima",
    "estagio": "Tração / Validação",
    "buscandoInvestimento": true,
    "cienteCompartilhamento": true,
    "descricao": "Sensoriamento e inteligência artificial aplicada à fruticultura irrigada no Vale do São Francisco.",
    "website": "https://sertaotech.com.br",
    "pitchDeckUrl": "https://coreto.recife.pe.gov.br/docs/swc-pitch-prop_wc_005.pdf",
    "premios": [
      "Top 1 Regional Recife: Vaga oficial na Grand Finale (Silicon Valley, Califórnia - EUA)",
      "Aporte Global: US$ 1.000.000,00 (Um Milhão de Dólares) em investimento direto pela Pegasus Tech Ventures",
      "Mentoria Especializada de Pitch Internacional & Conexão com Fundos Globais de VC"
    ],
    "avaliadores": [
      "Pegasus Tech Ventures (Silicon Valley, USA)",
      "Porto Digital Recife",
      "Comunidade Manguezal & Anjos do Brasil",
      "Secretaria de Ciência, Tecnologia e Inovação (SECTI Recife)"
    ],
    "avatarUrl": null,
    "activeProfile": "Startup / Empreendedor",
    "slug": "worldcup-vdiogo225"
  },
  {
    "id": "prop_wc_006",
    "edicaoId": "SWC-2026",
    "edicaoName": "Startup World Cup 2026 — Regional Recife",
    "title": "CivicEdu Tech • Lucas Miguel Barbosa da Silva",
    "startupName": "CivicEdu Tech",
    "founderName": "Lucas Miguel Barbosa da Silva",
    "cargo": "Estudante",
    "email": "lucasmiguelbsilva@gmail.com",
    "cnpj": "Pessoa Física / Em Formalização",
    "cnpjRaw": "",
    "cidade": "Recife",
    "estado": "PE",
    "regiao": "Recife",
    "segmento": "EdTech & Gamificação",
    "estagio": "MVP Validado",
    "buscandoInvestimento": true,
    "cienteCompartilhamento": true,
    "descricao": "Gamificação para engajamento cívico e aprendizado escolar sobre cidades inteligentes.",
    "website": "https://civicedu.recife.br",
    "pitchDeckUrl": "https://coreto.recife.pe.gov.br/docs/swc-pitch-prop_wc_006.pdf",
    "premios": [
      "Top 1 Regional Recife: Vaga oficial na Grand Finale (Silicon Valley, Califórnia - EUA)",
      "Aporte Global: US$ 1.000.000,00 (Um Milhão de Dólares) em investimento direto pela Pegasus Tech Ventures",
      "Mentoria Especializada de Pitch Internacional & Conexão com Fundos Globais de VC"
    ],
    "avaliadores": [
      "Pegasus Tech Ventures (Silicon Valley, USA)",
      "Porto Digital Recife",
      "Comunidade Manguezal & Anjos do Brasil",
      "Secretaria de Ciência, Tecnologia e Inovação (SECTI Recife)"
    ],
    "avatarUrl": null,
    "activeProfile": "Resolvedor , Talento",
    "slug": "worldcup-lucasmiguelbsilva"
  },
  {
    "id": "prop_wc_007",
    "edicaoId": "SWC-2026",
    "edicaoName": "Startup World Cup 2026 — Regional Recife",
    "title": "Marinho Tecnologias • Jairo Marinho",
    "startupName": "Marinho Tecnologias",
    "founderName": "Jairo Marinho",
    "cargo": "CEO",
    "email": "marinho.tecnologias@gmail.com",
    "cnpj": "58.507.389/0001-46",
    "cnpjRaw": "58507389000146",
    "cidade": "Recife",
    "estado": "PE",
    "regiao": "Recife",
    "segmento": "SaaS & Enterprise B2B",
    "estagio": "Operação / Escala",
    "buscandoInvestimento": true,
    "cienteCompartilhamento": true,
    "descricao": "Sistemas inteligentes de gestão de processos e automação operacional para médias empresas.",
    "website": "https://marinhotecnologia.com.br",
    "pitchDeckUrl": "https://coreto.recife.pe.gov.br/docs/swc-pitch-prop_wc_007.pdf",
    "premios": [
      "Top 1 Regional Recife: Vaga oficial na Grand Finale (Silicon Valley, Califórnia - EUA)",
      "Aporte Global: US$ 1.000.000,00 (Um Milhão de Dólares) em investimento direto pela Pegasus Tech Ventures",
      "Mentoria Especializada de Pitch Internacional & Conexão com Fundos Globais de VC"
    ],
    "avaliadores": [
      "Pegasus Tech Ventures (Silicon Valley, USA)",
      "Porto Digital Recife",
      "Comunidade Manguezal & Anjos do Brasil",
      "Secretaria de Ciência, Tecnologia e Inovação (SECTI Recife)"
    ],
    "avatarUrl": null,
    "activeProfile": "Resolvedor , Talento",
    "slug": "worldcup-marinho-tecnologias"
  },
  {
    "id": "prop_wc_008",
    "edicaoId": "SWC-2026",
    "edicaoName": "Startup World Cup 2026 — Regional Recife",
    "title": "Critic Level Startup • Vinícius Fernandes",
    "startupName": "Critic Level Startup",
    "founderName": "Vinícius Fernandes",
    "cargo": "CEO",
    "email": "criticlevelstartup@gmail.com",
    "cnpj": "Pessoa Física / Em Formalização",
    "cnpjRaw": "0",
    "cidade": "Recife",
    "estado": "PE",
    "regiao": "Recife",
    "segmento": "Games & CreativeTech",
    "estagio": "Validação",
    "buscandoInvestimento": true,
    "cienteCompartilhamento": true,
    "descricao": "Estúdio e plataforma de desenvolvimento de jogos digitais imersivos e realidade aumentada.",
    "website": "https://criticlevel.games",
    "pitchDeckUrl": "https://coreto.recife.pe.gov.br/docs/swc-pitch-prop_wc_008.pdf",
    "premios": [
      "Top 1 Regional Recife: Vaga oficial na Grand Finale (Silicon Valley, Califórnia - EUA)",
      "Aporte Global: US$ 1.000.000,00 (Um Milhão de Dólares) em investimento direto pela Pegasus Tech Ventures",
      "Mentoria Especializada de Pitch Internacional & Conexão com Fundos Globais de VC"
    ],
    "avaliadores": [
      "Pegasus Tech Ventures (Silicon Valley, USA)",
      "Porto Digital Recife",
      "Comunidade Manguezal & Anjos do Brasil",
      "Secretaria de Ciência, Tecnologia e Inovação (SECTI Recife)"
    ],
    "avatarUrl": null,
    "activeProfile": "Resolvedor , Talento",
    "slug": "worldcup-criticlevelstartup"
  },
  {
    "id": "prop_wc_009",
    "edicaoId": "SWC-2026",
    "edicaoName": "Startup World Cup 2026 — Regional Recife",
    "title": "Edelweiss Tech & Design • Queila Rafaela Bezerra dos Santos",
    "startupName": "Edelweiss Tech & Design",
    "founderName": "Queila Rafaela Bezerra dos Santos",
    "cargo": "CEO, Proprietária",
    "email": "rafaela.edelweiss@gmail.com",
    "cnpj": "51.289.938/0001-04",
    "cnpjRaw": "51289938000104",
    "cidade": "Paulista",
    "estado": "PE",
    "regiao": "Pernambuco (Interior/RMR)",
    "segmento": "Design & Sustentabilidade",
    "estagio": "Operação / Tração",
    "buscandoInvestimento": true,
    "cienteCompartilhamento": true,
    "descricao": "Modelagem paramétrica, ecodesign e tecnologia circular para produtos e packaging sustentável.",
    "website": "https://edelweisstech.com",
    "pitchDeckUrl": "https://coreto.recife.pe.gov.br/docs/swc-pitch-prop_wc_009.pdf",
    "premios": [
      "Top 1 Regional Recife: Vaga oficial na Grand Finale (Silicon Valley, Califórnia - EUA)",
      "Aporte Global: US$ 1.000.000,00 (Um Milhão de Dólares) em investimento direto pela Pegasus Tech Ventures",
      "Mentoria Especializada de Pitch Internacional & Conexão com Fundos Globais de VC"
    ],
    "avaliadores": [
      "Pegasus Tech Ventures (Silicon Valley, USA)",
      "Porto Digital Recife",
      "Comunidade Manguezal & Anjos do Brasil",
      "Secretaria de Ciência, Tecnologia e Inovação (SECTI Recife)"
    ],
    "avatarUrl": null,
    "activeProfile": "Resolvedor , Talento",
    "slug": "worldcup-rafaela-edelweiss"
  },
  {
    "id": "prop_wc_010",
    "edicaoId": "SWC-2026",
    "edicaoName": "Startup World Cup 2026 — Regional Recife",
    "title": "Loomi Studio • Murilo Salgado",
    "startupName": "Loomi Studio",
    "founderName": "Murilo Salgado",
    "cargo": "Relationship Developer",
    "email": "murilo@loomi.com.br",
    "cnpj": "26.846.328/0001-17",
    "cnpjRaw": "26846328000117",
    "cidade": "Recife",
    "estado": "PE",
    "regiao": "Recife",
    "segmento": "Digital Product Agency & AI",
    "estagio": "Escala / Global",
    "buscandoInvestimento": false,
    "cienteCompartilhamento": true,
    "descricao": "Desenvolvimento e aceleração de produtos digitais de alta complexidade com inteligência artificial para grandes contas.",
    "website": "https://loomi.com.br",
    "pitchDeckUrl": "https://coreto.recife.pe.gov.br/docs/swc-pitch-prop_wc_010.pdf",
    "premios": [
      "Top 1 Regional Recife: Vaga oficial na Grand Finale (Silicon Valley, Califórnia - EUA)",
      "Aporte Global: US$ 1.000.000,00 (Um Milhão de Dólares) em investimento direto pela Pegasus Tech Ventures",
      "Mentoria Especializada de Pitch Internacional & Conexão com Fundos Globais de VC"
    ],
    "avaliadores": [
      "Pegasus Tech Ventures (Silicon Valley, USA)",
      "Porto Digital Recife",
      "Comunidade Manguezal & Anjos do Brasil",
      "Secretaria de Ciência, Tecnologia e Inovação (SECTI Recife)"
    ],
    "avatarUrl": null,
    "activeProfile": "Resolvedor , Talento",
    "slug": "worldcup-murilo-loomi"
  },
  {
    "id": "prop_wc_011",
    "edicaoId": "SWC-2026",
    "edicaoName": "Startup World Cup 2026 — Regional Recife",
    "title": "Sou Educa • Catarina Martins Alecrim",
    "startupName": "Sou Educa",
    "founderName": "Catarina Martins Alecrim",
    "cargo": "Head de Marketing",
    "email": "catarina.alecrim@soueduca.com",
    "cnpj": "40.651.433/0001-21",
    "cnpjRaw": "40651433000121",
    "cidade": "São Paulo",
    "estado": "SP",
    "regiao": "Outros Estados",
    "segmento": "EdTech & Aprendizagem",
    "estagio": "Tração / Escala",
    "buscandoInvestimento": true,
    "cienteCompartilhamento": true,
    "descricao": "Plataforma integrada de apoio escolar, nivelamento e retenção de alunos para redes públicas e privadas.",
    "website": "https://soueduca.com",
    "pitchDeckUrl": "https://coreto.recife.pe.gov.br/docs/swc-pitch-prop_wc_011.pdf",
    "premios": [
      "Top 1 Regional Recife: Vaga oficial na Grand Finale (Silicon Valley, Califórnia - EUA)",
      "Aporte Global: US$ 1.000.000,00 (Um Milhão de Dólares) em investimento direto pela Pegasus Tech Ventures",
      "Mentoria Especializada de Pitch Internacional & Conexão com Fundos Globais de VC"
    ],
    "avaliadores": [
      "Pegasus Tech Ventures (Silicon Valley, USA)",
      "Porto Digital Recife",
      "Comunidade Manguezal & Anjos do Brasil",
      "Secretaria de Ciência, Tecnologia e Inovação (SECTI Recife)"
    ],
    "avatarUrl": null,
    "activeProfile": "Resolvedor , Talento",
    "slug": "worldcup-catarina-alecrim"
  },
  {
    "id": "prop_wc_012",
    "edicaoId": "SWC-2026",
    "edicaoName": "Startup World Cup 2026 — Regional Recife",
    "title": "MoVerdes • Haylla Rebeka de Albuquerque Lins Leonardo",
    "startupName": "MoVerdes",
    "founderName": "Haylla Rebeka de Albuquerque Lins Leonardo",
    "cargo": "Cofundadora",
    "email": "moverdesoficial@gmail.com",
    "cnpj": "60.273.291/0001-13",
    "cnpjRaw": "60273291000113",
    "cidade": "Recife",
    "estado": "PE",
    "regiao": "Recife",
    "segmento": "CleanTech & ESG",
    "estagio": "Validação / Tração",
    "buscandoInvestimento": true,
    "cienteCompartilhamento": true,
    "descricao": "Soluções sustentáveis em economia verde, compensação de carbono urbana e arborização orientada a dados.",
    "website": "https://moverdes.org",
    "pitchDeckUrl": "https://coreto.recife.pe.gov.br/docs/swc-pitch-prop_wc_012.pdf",
    "premios": [
      "Top 1 Regional Recife: Vaga oficial na Grand Finale (Silicon Valley, Califórnia - EUA)",
      "Aporte Global: US$ 1.000.000,00 (Um Milhão de Dólares) em investimento direto pela Pegasus Tech Ventures",
      "Mentoria Especializada de Pitch Internacional & Conexão com Fundos Globais de VC"
    ],
    "avaliadores": [
      "Pegasus Tech Ventures (Silicon Valley, USA)",
      "Porto Digital Recife",
      "Comunidade Manguezal & Anjos do Brasil",
      "Secretaria de Ciência, Tecnologia e Inovação (SECTI Recife)"
    ],
    "avatarUrl": null,
    "activeProfile": "Resolvedor , Talento",
    "slug": "worldcup-moverdesoficial"
  },
  {
    "id": "prop_wc_013",
    "edicaoId": "SWC-2026",
    "edicaoName": "Startup World Cup 2026 — Regional Recife",
    "title": "VoltzX • Ana Paula Fernandes de Melo Santos",
    "startupName": "VoltzX",
    "founderName": "Ana Paula Fernandes de Melo Santos",
    "cargo": "CEO e Co-fundadora",
    "email": "anafernandes@voltzx.com.br",
    "cnpj": "4906019000115",
    "cnpjRaw": "4906019000115",
    "cidade": "Recife",
    "estado": "PE",
    "regiao": "Recife",
    "segmento": "EnergyTech & Mobilidade",
    "estagio": "Operação / Escala",
    "buscandoInvestimento": true,
    "cienteCompartilhamento": true,
    "descricao": "Infraestrutura inteligente de recarga e monitoramento para frotas de veículos elétricos urbanos.",
    "website": "https://voltzx.com.br",
    "pitchDeckUrl": "https://coreto.recife.pe.gov.br/docs/swc-pitch-prop_wc_013.pdf",
    "premios": [
      "Top 1 Regional Recife: Vaga oficial na Grand Finale (Silicon Valley, Califórnia - EUA)",
      "Aporte Global: US$ 1.000.000,00 (Um Milhão de Dólares) em investimento direto pela Pegasus Tech Ventures",
      "Mentoria Especializada de Pitch Internacional & Conexão com Fundos Globais de VC"
    ],
    "avaliadores": [
      "Pegasus Tech Ventures (Silicon Valley, USA)",
      "Porto Digital Recife",
      "Comunidade Manguezal & Anjos do Brasil",
      "Secretaria de Ciência, Tecnologia e Inovação (SECTI Recife)"
    ],
    "avatarUrl": null,
    "activeProfile": "Resolvedor , Talento",
    "slug": "worldcup-anafernandes-voltzx"
  },
  {
    "id": "prop_wc_014",
    "edicaoId": "SWC-2026",
    "edicaoName": "Startup World Cup 2026 — Regional Recife",
    "title": "Mizael Tech Solutions • MIZAEL CORREIA DE LIRA FILHO",
    "startupName": "Mizael Tech Solutions",
    "founderName": "MIZAEL CORREIA DE LIRA FILHO",
    "cargo": "CEO",
    "email": "mizael.correia@gmail.com",
    "cnpj": "60.605.418/0001-54",
    "cnpjRaw": "60605418000154",
    "cidade": "Jaboatão dos Guararapes",
    "estado": "PE",
    "regiao": "Pernambuco (Interior/RMR)",
    "segmento": "FinTech & Meios de Pagamento",
    "estagio": "Validação",
    "buscandoInvestimento": false,
    "cienteCompartilhamento": true,
    "descricao": "Serviços financeiros integrados para microvarejistas e cadeias de suprimentos periféricas.",
    "website": "https://mizaeltech.com.br",
    "pitchDeckUrl": "https://coreto.recife.pe.gov.br/docs/swc-pitch-prop_wc_014.pdf",
    "premios": [
      "Top 1 Regional Recife: Vaga oficial na Grand Finale (Silicon Valley, Califórnia - EUA)",
      "Aporte Global: US$ 1.000.000,00 (Um Milhão de Dólares) em investimento direto pela Pegasus Tech Ventures",
      "Mentoria Especializada de Pitch Internacional & Conexão com Fundos Globais de VC"
    ],
    "avaliadores": [
      "Pegasus Tech Ventures (Silicon Valley, USA)",
      "Porto Digital Recife",
      "Comunidade Manguezal & Anjos do Brasil",
      "Secretaria de Ciência, Tecnologia e Inovação (SECTI Recife)"
    ],
    "avatarUrl": "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1745443833888x720661479822010400/321574538_8726207887420313_3735678994028085629_n.jpg",
    "activeProfile": "Talento , Resolvedor",
    "slug": "worldcup-mizael-correia"
  },
  {
    "id": "prop_wc_015",
    "edicaoId": "SWC-2026",
    "edicaoName": "Startup World Cup 2026 — Regional Recife",
    "title": "ZeaTech Startup • ZEATECHSTARTUP",
    "startupName": "ZeaTech Startup",
    "founderName": "ZEATECHSTARTUP",
    "cargo": "Chief Executive Officer",
    "email": "zeatechstartup@gmail.com",
    "cnpj": "59.636.516/0001-70",
    "cnpjRaw": "59636516000170",
    "cidade": "Recife",
    "estado": "PE",
    "regiao": "Recife",
    "segmento": "DeepTech & Hardware",
    "estagio": "Tração",
    "buscandoInvestimento": true,
    "cienteCompartilhamento": true,
    "descricao": "Sensores IoT industriais de baixo consumo para monitoramento de vibração e manutenção preditiva de maquinário.",
    "website": "https://zeatech.io",
    "pitchDeckUrl": "https://coreto.recife.pe.gov.br/docs/swc-pitch-prop_wc_015.pdf",
    "premios": [
      "Top 1 Regional Recife: Vaga oficial na Grand Finale (Silicon Valley, Califórnia - EUA)",
      "Aporte Global: US$ 1.000.000,00 (Um Milhão de Dólares) em investimento direto pela Pegasus Tech Ventures",
      "Mentoria Especializada de Pitch Internacional & Conexão com Fundos Globais de VC"
    ],
    "avaliadores": [
      "Pegasus Tech Ventures (Silicon Valley, USA)",
      "Porto Digital Recife",
      "Comunidade Manguezal & Anjos do Brasil",
      "Secretaria de Ciência, Tecnologia e Inovação (SECTI Recife)"
    ],
    "avatarUrl": null,
    "activeProfile": "Startup / Empreendedor",
    "slug": "worldcup-zeatechstartup"
  },
  {
    "id": "prop_wc_016",
    "edicaoId": "SWC-2026",
    "edicaoName": "Startup World Cup 2026 — Regional Recife",
    "title": "Stepps Inovação • Hélio Peixoto",
    "startupName": "Stepps Inovação",
    "founderName": "Hélio Peixoto",
    "cargo": "Diretor de Operações",
    "email": "contato@stepps.com.br",
    "cnpj": "38.033.665/0001-74",
    "cnpjRaw": "38033665000174",
    "cidade": "Recife",
    "estado": "PE",
    "regiao": "Recife",
    "segmento": "HealthTech & Bem-Estar",
    "estagio": "Operação / Tração",
    "buscandoInvestimento": false,
    "cienteCompartilhamento": true,
    "descricao": "Plataforma corporativa de incentivo à saúde física, mobilidade ativa e prevenção de sinistros de saúde.",
    "website": "https://stepps.com.br",
    "pitchDeckUrl": "https://coreto.recife.pe.gov.br/docs/swc-pitch-prop_wc_016.pdf",
    "premios": [
      "Top 1 Regional Recife: Vaga oficial na Grand Finale (Silicon Valley, Califórnia - EUA)",
      "Aporte Global: US$ 1.000.000,00 (Um Milhão de Dólares) em investimento direto pela Pegasus Tech Ventures",
      "Mentoria Especializada de Pitch Internacional & Conexão com Fundos Globais de VC"
    ],
    "avaliadores": [
      "Pegasus Tech Ventures (Silicon Valley, USA)",
      "Porto Digital Recife",
      "Comunidade Manguezal & Anjos do Brasil",
      "Secretaria de Ciência, Tecnologia e Inovação (SECTI Recife)"
    ],
    "avatarUrl": null,
    "activeProfile": "Resolvedor , Talento",
    "slug": "worldcup-contato-stepps"
  },
  {
    "id": "prop_wc_017",
    "edicaoId": "SWC-2026",
    "edicaoName": "Startup World Cup 2026 — Regional Recife",
    "title": "Santiago GovTech • DOMINGOS SEVERINO SANTIAGO",
    "startupName": "Santiago GovTech",
    "founderName": "DOMINGOS SEVERINO SANTIAGO",
    "cargo": "Coordenador do Projeto",
    "email": "dmgssantiago@gmail.com",
    "cnpj": "Pessoa Física / Em Formalização",
    "cnpjRaw": "",
    "cidade": "Recife",
    "estado": "PE",
    "regiao": "Recife",
    "segmento": "GovTech & Cidades",
    "estagio": "MVP Validado",
    "buscandoInvestimento": true,
    "cienteCompartilhamento": true,
    "descricao": "Painéis preditivos e IA para análise de chamados e demandas de zeladoria urbana municipal.",
    "website": "https://santiagogov.tech",
    "pitchDeckUrl": "https://coreto.recife.pe.gov.br/docs/swc-pitch-prop_wc_017.pdf",
    "premios": [
      "Top 1 Regional Recife: Vaga oficial na Grand Finale (Silicon Valley, Califórnia - EUA)",
      "Aporte Global: US$ 1.000.000,00 (Um Milhão de Dólares) em investimento direto pela Pegasus Tech Ventures",
      "Mentoria Especializada de Pitch Internacional & Conexão com Fundos Globais de VC"
    ],
    "avaliadores": [
      "Pegasus Tech Ventures (Silicon Valley, USA)",
      "Porto Digital Recife",
      "Comunidade Manguezal & Anjos do Brasil",
      "Secretaria de Ciência, Tecnologia e Inovação (SECTI Recife)"
    ],
    "avatarUrl": null,
    "activeProfile": "Talento , Resolvedor",
    "slug": "worldcup-dmgssantiago"
  },
  {
    "id": "prop_wc_018",
    "edicaoId": "SWC-2026",
    "edicaoName": "Startup World Cup 2026 — Regional Recife",
    "title": "Figueiroa Tech Fashion • DEIVID SOUSA DE FIGUEIROA",
    "startupName": "Figueiroa Tech Fashion",
    "founderName": "DEIVID SOUSA DE FIGUEIROA",
    "cargo": "CEO",
    "email": "deividfigueiroa@gmail.com",
    "cnpj": "55.101.632/0001-33",
    "cnpjRaw": "55101632000133",
    "cidade": "Santa Cruz do Capibaribe",
    "estado": "PE",
    "regiao": "Pernambuco (Interior/RMR)",
    "segmento": "RetailTech & Moda",
    "estagio": "Tração / Escala",
    "buscandoInvestimento": true,
    "cienteCompartilhamento": true,
    "descricao": "Marketplace B2B conectado à cadeia têxtil do polo de confecções do Agreste Pernambucano.",
    "website": "https://figueiroatech.com.br",
    "pitchDeckUrl": "https://coreto.recife.pe.gov.br/docs/swc-pitch-prop_wc_018.pdf",
    "premios": [
      "Top 1 Regional Recife: Vaga oficial na Grand Finale (Silicon Valley, Califórnia - EUA)",
      "Aporte Global: US$ 1.000.000,00 (Um Milhão de Dólares) em investimento direto pela Pegasus Tech Ventures",
      "Mentoria Especializada de Pitch Internacional & Conexão com Fundos Globais de VC"
    ],
    "avaliadores": [
      "Pegasus Tech Ventures (Silicon Valley, USA)",
      "Porto Digital Recife",
      "Comunidade Manguezal & Anjos do Brasil",
      "Secretaria de Ciência, Tecnologia e Inovação (SECTI Recife)"
    ],
    "avatarUrl": null,
    "activeProfile": "Resolvedor , Talento",
    "slug": "worldcup-deividfigueiroa"
  },
  {
    "id": "prop_wc_019",
    "edicaoId": "SWC-2026",
    "edicaoName": "Startup World Cup 2026 — Regional Recife",
    "title": "GStack Soluções • Geovanny Lino Coutinho",
    "startupName": "GStack Soluções",
    "founderName": "Geovanny Lino Coutinho",
    "cargo": "Proprietário",
    "email": "geovanny@gstack.com.br",
    "cnpj": "31.127.352/0001-36",
    "cnpjRaw": "31127352000136",
    "cidade": "Olinda",
    "estado": "PE",
    "regiao": "Pernambuco (Interior/RMR)",
    "segmento": "Software & DevOps",
    "estagio": "Validação / Tração",
    "buscandoInvestimento": false,
    "cienteCompartilhamento": true,
    "descricao": "Plataforma de automação de testes de segurança e esteira de CI/CD para times remotos de software.",
    "website": "https://gstack.com.br",
    "pitchDeckUrl": "https://coreto.recife.pe.gov.br/docs/swc-pitch-prop_wc_019.pdf",
    "premios": [
      "Top 1 Regional Recife: Vaga oficial na Grand Finale (Silicon Valley, Califórnia - EUA)",
      "Aporte Global: US$ 1.000.000,00 (Um Milhão de Dólares) em investimento direto pela Pegasus Tech Ventures",
      "Mentoria Especializada de Pitch Internacional & Conexão com Fundos Globais de VC"
    ],
    "avaliadores": [
      "Pegasus Tech Ventures (Silicon Valley, USA)",
      "Porto Digital Recife",
      "Comunidade Manguezal & Anjos do Brasil",
      "Secretaria de Ciência, Tecnologia e Inovação (SECTI Recife)"
    ],
    "avatarUrl": null,
    "activeProfile": "Resolvedor , Talento",
    "slug": "worldcup-geovanny-gstack"
  },
  {
    "id": "prop_wc_020",
    "edicaoId": "SWC-2026",
    "edicaoName": "Startup World Cup 2026 — Regional Recife",
    "title": "Germini Sementes & Mudas • Jéssica Maria Vasconcelos de Morais",
    "startupName": "Germini Sementes & Mudas",
    "founderName": "Jéssica Maria Vasconcelos de Morais",
    "cargo": "CEO",
    "email": "germini.sementes@gmail.com",
    "cnpj": "54.442.057/0001-70",
    "cnpjRaw": "54442057000170",
    "cidade": "Recife",
    "estado": "PE",
    "regiao": "Recife",
    "segmento": "AgTech & Biotecnologia",
    "estagio": "Tração",
    "buscandoInvestimento": true,
    "cienteCompartilhamento": true,
    "descricao": "Biotecnologia vegetal e melhoramento genético de sementes nativas adaptadas ao semiárido.",
    "website": "https://germinisementes.com.br",
    "pitchDeckUrl": "https://coreto.recife.pe.gov.br/docs/swc-pitch-prop_wc_020.pdf",
    "premios": [
      "Top 1 Regional Recife: Vaga oficial na Grand Finale (Silicon Valley, Califórnia - EUA)",
      "Aporte Global: US$ 1.000.000,00 (Um Milhão de Dólares) em investimento direto pela Pegasus Tech Ventures",
      "Mentoria Especializada de Pitch Internacional & Conexão com Fundos Globais de VC"
    ],
    "avaliadores": [
      "Pegasus Tech Ventures (Silicon Valley, USA)",
      "Porto Digital Recife",
      "Comunidade Manguezal & Anjos do Brasil",
      "Secretaria de Ciência, Tecnologia e Inovação (SECTI Recife)"
    ],
    "avatarUrl": null,
    "activeProfile": "Resolvedor , Talento",
    "slug": "worldcup-germini-sementes"
  },
  {
    "id": "prop_wc_021",
    "edicaoId": "SWC-2026",
    "edicaoName": "Startup World Cup 2026 — Regional Recife",
    "title": "Biofábrica de Corais • Rudã Fernandes Brandão Santos",
    "startupName": "Biofábrica de Corais",
    "founderName": "Rudã Fernandes Brandão Santos",
    "cargo": "CEO",
    "email": "biofabricadecorais@gmail.com",
    "cnpj": "41.941.664/0001-32",
    "cnpjRaw": "41941664000132",
    "cidade": "Recife",
    "estado": "PE",
    "regiao": "Recife",
    "segmento": "OceanTech & Restauração Marinha",
    "estagio": "Operação / Escala Internacional",
    "buscandoInvestimento": false,
    "cienteCompartilhamento": true,
    "descricao": "Biotecnologia marinha pioneira e microfragmentação acelerada para restauração de recifes de corais e créditos de biodiversidade.",
    "website": "https://biofabricadecorais.org",
    "pitchDeckUrl": "https://coreto.recife.pe.gov.br/docs/swc-pitch-prop_wc_021.pdf",
    "premios": [
      "Top 1 Regional Recife: Vaga oficial na Grand Finale (Silicon Valley, Califórnia - EUA)",
      "Aporte Global: US$ 1.000.000,00 (Um Milhão de Dólares) em investimento direto pela Pegasus Tech Ventures",
      "Mentoria Especializada de Pitch Internacional & Conexão com Fundos Globais de VC"
    ],
    "avaliadores": [
      "Pegasus Tech Ventures (Silicon Valley, USA)",
      "Porto Digital Recife",
      "Comunidade Manguezal & Anjos do Brasil",
      "Secretaria de Ciência, Tecnologia e Inovação (SECTI Recife)"
    ],
    "avatarUrl": null,
    "activeProfile": "Resolvedor , Talento",
    "slug": "worldcup-biofabricadecorais"
  },
  {
    "id": "prop_wc_022",
    "edicaoId": "SWC-2026",
    "edicaoName": "Startup World Cup 2026 — Regional Recife",
    "title": "Jucá BioInovação • André Luiz Jucá Costa",
    "startupName": "Jucá BioInovação",
    "founderName": "André Luiz Jucá Costa",
    "cargo": "CEO",
    "email": "andre_juca@hotmail.com",
    "cnpj": "57.468.899/0001-99",
    "cnpjRaw": "57468899000199",
    "cidade": "Juazeiro do Norte",
    "estado": "CE",
    "regiao": "Outros Estados",
    "segmento": "BioTech & Cosméticos",
    "estagio": "Tração",
    "buscandoInvestimento": true,
    "cienteCompartilhamento": true,
    "descricao": "Extração verde de biocompostos da caatinga para cosméticos e produtos terapêuticos de alto valor.",
    "website": "https://jucabio.com.br",
    "pitchDeckUrl": "https://coreto.recife.pe.gov.br/docs/swc-pitch-prop_wc_022.pdf",
    "premios": [
      "Top 1 Regional Recife: Vaga oficial na Grand Finale (Silicon Valley, Califórnia - EUA)",
      "Aporte Global: US$ 1.000.000,00 (Um Milhão de Dólares) em investimento direto pela Pegasus Tech Ventures",
      "Mentoria Especializada de Pitch Internacional & Conexão com Fundos Globais de VC"
    ],
    "avaliadores": [
      "Pegasus Tech Ventures (Silicon Valley, USA)",
      "Porto Digital Recife",
      "Comunidade Manguezal & Anjos do Brasil",
      "Secretaria de Ciência, Tecnologia e Inovação (SECTI Recife)"
    ],
    "avatarUrl": null,
    "activeProfile": "Resolvedor , Talento",
    "slug": "worldcup-andre-juca"
  },
  {
    "id": "prop_wc_023",
    "edicaoId": "SWC-2026",
    "edicaoName": "Startup World Cup 2026 — Regional Recife",
    "title": "Biotec Inovações Recife • Santulla Leide Bernardes Vasconcelos Carvalho",
    "startupName": "Biotec Inovações Recife",
    "founderName": "Santulla Leide Bernardes Vasconcelos Carvalho",
    "cargo": "CEO",
    "email": "biotecinovacoes@gmail.com",
    "cnpj": "50.243.091/0001-64",
    "cnpjRaw": "50243091000164",
    "cidade": "Recife",
    "estado": "PE",
    "regiao": "Recife",
    "segmento": "BioTech & Diagnósticos",
    "estagio": "Validação Clínica / Tração",
    "buscandoInvestimento": false,
    "cienteCompartilhamento": true,
    "descricao": "Kits moleculares rápidos para detecção precoce de arboviroses em atenção básica de saúde.",
    "website": "https://biotecinova.com.br",
    "pitchDeckUrl": "https://coreto.recife.pe.gov.br/docs/swc-pitch-prop_wc_023.pdf",
    "premios": [
      "Top 1 Regional Recife: Vaga oficial na Grand Finale (Silicon Valley, Califórnia - EUA)",
      "Aporte Global: US$ 1.000.000,00 (Um Milhão de Dólares) em investimento direto pela Pegasus Tech Ventures",
      "Mentoria Especializada de Pitch Internacional & Conexão com Fundos Globais de VC"
    ],
    "avaliadores": [
      "Pegasus Tech Ventures (Silicon Valley, USA)",
      "Porto Digital Recife",
      "Comunidade Manguezal & Anjos do Brasil",
      "Secretaria de Ciência, Tecnologia e Inovação (SECTI Recife)"
    ],
    "avatarUrl": null,
    "activeProfile": "Resolvedor , Talento",
    "slug": "worldcup-biotecinovacoes"
  }
]

export const SWC_BUSCANDO_INVESTIMENTO = SWC_SUBMISSIONS.filter(s => s.buscandoInvestimento)
export const SWC_BOOTSTRAP_EXPANSAO = SWC_SUBMISSIONS.filter(s => !s.buscandoInvestimento)
export const SWC_RECIFE = SWC_SUBMISSIONS.filter(s => s.cidade === 'Recife')
export const SWC_DEMAIS_REGIOES = SWC_SUBMISSIONS.filter(s => s.cidade !== 'Recife')

/**
 * Função utilitária para exportação CSV de dados da Startup World Cup
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

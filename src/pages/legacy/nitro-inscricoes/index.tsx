import { useState } from 'react'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'

interface SubmissionEdital1 {
  id: string
  razaoSocial: string
  tipoInstituicao: string
  cnpj: string
  endereco: string
  telefone: string
  emailInstitucional: string
  nomeNit: string
  responsavelNit: string
  cpfResponsavel: string
  cargo: string
  emailResponsavel: string
  telefoneResponsavel: string
  atoDeclaracao: string
  estruturaNit: string
  equipe: string
  horasDedicacao: string
  comprovanteSede: string
  experienciaNit: string
  dedicacaoTime: string
  tecnologia: string
  areaTematica: string
  resumo: string
  trl: string
  possuiPatente: string
  possuiRegistroSoftware: string
  possuiOutroTipo: string
  descrevaOutroTipo: string
  descrevaExperiencias: string
  problemaTecnologia: string
  valorMedio: string
  propostasValor: string
  diferenciais: string
  potencialMercado: string
  setores: string
  evidenciasDemanda: string
  modeloMercado: string
  aceite: string
}

interface SubmissionEdital2 {
  id: string
  tipoProponente: 'Startup PJ' | 'Inventor PF'
  razaoSocial: string
  nome: string
  cnpj: string
  dataAbertura: string
  representanteLegal: string
  cpfRepresentante: string
  endereco: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  estado: string
  cep: string
  whatsapp: string
  email: string
  contratoSocial: string
  comprovanteResidencia: string
  nomeSoftware: string
  versao: string
  descricaoSoftware: string
  hashSha256: string
  justificativa: string
  anexoI: string
  aceite: string
  nomeFantasia?: string
}

interface SubmissionEdital3 {
  id: string
  razaoSocial: string
  nomeFantasia: string
  cnpj: string
  dataConstituicao: string
  site: string
  linkedIn: string
  nomeResponsavel: string
  cargo: string
  cpfResponsavel: string
  emailContato: string
  telefoneContato: string
  cnpjAtivoRegular: string
  certidoesNegativas: string
  nomeProdutoSolucao: string
  descricaoGeralSolucao: string
  estagioDesenvolvimento: string
  possuiTracao: string
  aplicabilidadeCidade: string
  principalOds: string
  contribuicaoOds: string
  equipeExecutora: string
  escalabilidadeReplicabilidade: string
  documentoAnexo: string
  aceite: string
  nome?: string
}

// ── Mock Submissions for Edital 001 ──
const initialEdital1: SubmissionEdital1[] = [
  {
    id: 'e1-1',
    razaoSocial: 'ewqeqwewe',
    tipoInstituicao: 'ICT Privada',
    cnpj: '32432424324242',
    endereco: 'erewrewrrwrerr',
    telefone: '2133132232323',
    emailInstitucional: 'pererwerrwerwed@gmail.com',
    nomeNit: 'eqweweqwwew',
    responsavelNit: 'eweqeweqeqwe',
    cpfResponsavel: '343243243434',
    cargo: 'rrewrrwerwererwr',
    emailResponsavel: 'pedro.dhalia@gmail.com',
    telefoneResponsavel: '81971193323',
    atoDeclaracao: 'MODELO%20DE%20APRESENTA%C3%87%C3%83O%20DE%20PROPOSTA.docx.pdf',
    estruturaNit: 'rerwewerrew',
    equipe: 'rerwrwerewrwe',
    horasDedicacao: '313322133',
    comprovanteSede: 'MODELO%20DE%20APRESENTA%C3%87%C3%83O%20DE%20PROPOSTA.docx.pdf',
    experienciaNit: 'eqweqweqeqwewqwe',
    dedicacaoTime: '12122133213',
    tecnologia: 'weqewewq',
    areaTematica: 'eqweweqe',
    resumo: 'eqweweqweqwe',
    trl: 'TRL 8',
    possuiPatente: 'Não',
    possuiRegistroSoftware: 'Sim',
    possuiOutroTipo: 'Não',
    descrevaOutroTipo: 'weqweewwqeqwee',
    descrevaExperiencias: 'ewfwefefwefewf',
    problemaTecnologia: 'fewfewfwfwefw',
    valorMedio: '3123224124',
    propostasValor: 'fesfssrfsfefesfe',
    diferenciais: 'fdefefewfefsfe',
    potencialMercado: 'wqdwdefefef',
    setores: 'fefesffefsfef',
    evidenciasDemanda: 'fesfefefseffef',
    modeloMercado: 'Licenciamento',
    aceite: 'Sim',
  },
  {
    id: 'e1-2',
    razaoSocial: 'Instituto Recife de Inovação e Biotecnologia',
    tipoInstituicao: 'ICT Privada',
    cnpj: '98.457.201/0001-88',
    endereco: 'Av. Cais do Apolo, 222 - Bairro do Recife',
    telefone: '8133550000',
    emailInstitucional: 'contato@irib.org.br',
    nomeNit: 'NIT-IRIB Nordeste',
    responsavelNit: 'Carlos Alberto Santos',
    cpfResponsavel: '045.987.123-99',
    cargo: 'Gerente de Inovação',
    emailResponsavel: 'carlos.santos@irib.org.br',
    telefoneResponsavel: '81988887777',
    atoDeclaracao: 'DECLARACAO_RESPONSAVEL_NIT_2026.pdf',
    estruturaNit: 'Laboratório avançado de prototipagem e mentoria técnica',
    equipe: '5 pesquisadores e 2 gestores de projetos',
    horasDedicacao: '40h semanais',
    comprovanteSede: 'COMPROVANTE_SEDE_IRIB.pdf',
    experienciaNit: 'Mais de 10 patentes e softwares registrados no INPI',
    dedicacaoTime: '160h mensais',
    tecnologia: 'Sensor IoT Inteligente para Qualidade do Ar',
    areaTematica: 'Cidades Inteligentes & Meio Ambiente',
    resumo: 'Sistema integrado de monitoramento ambiental em tempo real.',
    trl: 'TRL 6',
    possuiPatente: 'Sim',
    possuiRegistroSoftware: 'Sim',
    possuiOutroTipo: 'Não',
    descrevaOutroTipo: '-',
    descrevaExperiencias: 'Licenciamento de tecnologia para concessionárias públicas.',
    problemaTecnologia: 'Medição imprecisa e tardia de poluentes urbanos.',
    valorMedio: 'R$ 150.000,00',
    propostasValor: 'Redução de custos operacionais de fiscalização ambiental.',
    diferenciais: 'Calibração automática com IA e baixo consumo de energia.',
    potencialMercado: 'Prefeituras, distritos industriais e órgãos ambientais.',
    setores: 'Gestão Pública, Meio Ambiente, Smart Cities',
    evidenciasDemanda: 'Projeto piloto pré-aprovado com a Prefeitura do Recife.',
    modeloMercado: 'Prestação de Serviços Tecnológicos',
    aceite: 'Sim',
  },
  {
    id: 'e1-3',
    razaoSocial: 'Universidade Federal de Pernambuco - UFPE',
    tipoInstituicao: 'IES Pública',
    cnpj: '24.134.488/0001-08',
    endereco: 'Av. Prof. Moraes Rego, 1235 - Cidade Universitária',
    telefone: '8121268000',
    emailInstitucional: 'posgt@ufpe.br',
    nomeNit: 'Positiva - Diretoria de Inovação UFPE',
    responsavelNit: 'Dra. Elena Vasconcelos',
    cpfResponsavel: '789.012.345-66',
    cargo: 'Diretora de Inovação',
    emailResponsavel: 'elena.vasconcelos@ufpe.br',
    telefoneResponsavel: '81991112233',
    atoDeclaracao: 'PORTARIA_DESIGNAÇÃO_POSITIVA_UFPE.pdf',
    estruturaNit: 'Espaço coworking com 12 núcleos de patente e transferência tecnológica',
    equipe: '15 técnicos administrativos e 30 bolsistas de extensão',
    horasDedicacao: '200h semanais agregadas',
    comprovanteSede: 'COMPROVANTE_POSITIVA_UFPE.pdf',
    experienciaNit: 'Transferência tecnológica para mais de 25 empresas do Porto Digital',
    dedicacaoTime: '800h mensais',
    tecnologia: 'Algoritmo preditivo de demanda hospitalar com IA',
    areaTematica: 'Saúde Digital & Inteligência Artificial',
    resumo: 'Algoritmo preditivo que otimiza leitos de UTI e triagem de emergência.',
    trl: 'TRL 7',
    possuiPatente: 'Não',
    possuiRegistroSoftware: 'Sim',
    possuiOutroTipo: 'Não',
    descrevaOutroTipo: '-',
    descrevaExperiencias: 'Parceria de P&D com hospitais filantrópicos de Pernambuco.',
    problemaTecnologia: 'Sobrelotação e demora na alocação de leitos críticos.',
    valorMedio: 'R$ 300.000,00',
    propostasValor: 'Redução do tempo de espera em emergências em 40%.',
    diferenciais: 'Integração via FHIR com prontuários eletrônicos existentes.',
    potencialMercado: 'Rede pública municipal de saúde e hospitais privados.',
    setores: 'Saúde, Gestão Hospitalar, Governo',
    evidenciasDemanda: 'Memorando de entendimento assinado com a Secretaria de Saúde.',
    modeloMercado: 'Licenciamento',
    aceite: 'Sim',
  },
  {
    id: 'e1-4',
    razaoSocial: 'Faculdade Pernambucana de Saúde - FPS',
    tipoInstituicao: 'IES Privada',
    cnpj: '07.234.567/0001-44',
    endereco: 'Av. Jean Emile Favre, 426 - Imbiribeira',
    telefone: '8130357777',
    emailInstitucional: 'nit@fps.edu.br',
    nomeNit: 'Núcleo de Inovação em Saúde FPS',
    responsavelNit: 'Prof. Dr. Ricardo Gouveia',
    cpfResponsavel: '321.654.987-11',
    cargo: 'Coordenador do NIT',
    emailResponsavel: 'ricardo.gouveia@fps.edu.br',
    telefoneResponsavel: '81987776655',
    atoDeclaracao: 'ATO_DESIGNACAO_NIT_FPS.pdf',
    estruturaNit: 'Laboratório de Simulação Realística e prototipagem médica',
    equipe: '8 docentes e 4 analistas de propriedade intelectual',
    horasDedicacao: '60h semanais',
    comprovanteSede: 'SEDE_FPS_RECIFE.pdf',
    experienciaNit: '5 patentes concedidas no INPI no setor médico-hospitalar',
    dedicacaoTime: '240h mensais',
    tecnologia: 'Curativo Biológico de Quitosana e Nanopartículas',
    areaTematica: 'Biotecnologia & Dispositivos Médicos',
    resumo: 'Curativo biológico cicatrizante de ação rápida para feridas crônicas.',
    trl: 'TRL 9',
    possuiPatente: 'Sim',
    possuiRegistroSoftware: 'Não',
    possuiOutroTipo: 'Sim',
    descrevaOutroTipo: 'Desenho Industrial registrado',
    descrevaExperiencias: 'Licenciamento exclusivo para farmacêutica nacional.',
    problemaTecnologia: 'Tratamento demorado de úlceras diabéticas e feridas de difícil cicatrização.',
    valorMedio: 'R$ 500.000,00',
    propostasValor: 'Aceleração de 60% na regeneração tecidual.',
    diferenciais: 'Matéria-prima sustentável obtida de resíduos da carcinicultura local.',
    potencialMercado: 'Redes de farmácias, postos de saúde e clínicas especializadas.',
    setores: 'Farmacêutico, Saúde Pública, Biotecnologia',
    evidenciasDemanda: 'Ensaios clínicos de Fase III concluídos com sucesso.',
    modeloMercado: 'Spin-off',
    aceite: 'Sim',
  },
]

// ── Mock Submissions for Edital 002 ──
const initialEdital2: SubmissionEdital2[] = [
  {
    id: 'e2-1',
    tipoProponente: 'Startup PJ',
    razaoSocial: 'qwewqeqew',
    nome: 'eqweqweqwe',
    nomeFantasia: 'eqweqweqwe',
    cnpj: 'qeqweqeqwe',
    dataAbertura: '05/18/2026',
    representanteLegal: 'qw2312',
    cpfRepresentante: '312313',
    endereco: '32',
    numero: '3123132',
    complemento: '',
    bairro: '32131312',
    cidade: '23123123',
    estado: '312',
    cep: '332312',
    whatsapp: '31231',
    email: 'pedro.dhalia@gmail.com',
    contratoSocial: 'Upload de apenas Startup',
    comprovanteResidencia: 'Comprovante de sede (PJ) ou residência (PF) em Recife/PE.',
    nomeSoftware: '3123231',
    versao: '312312313',
    descricaoSoftware: '131231231232',
    hashSha256: '3123',
    justificativa: '312321312323',
    anexoI: 'Upload de Anexo I',
    aceite: 'Sim',
  },
  {
    id: 'e2-2',
    tipoProponente: 'Inventor PF',
    razaoSocial: '-',
    nome: 'Davi Alencar',
    nomeFantasia: 'SmartTraffic Recife',
    cnpj: '123.456.789-00',
    dataAbertura: '10/02/2026',
    representanteLegal: 'Davi Alencar',
    cpfRepresentante: '123.456.789-00',
    endereco: 'Rua do Bom Jesus',
    numero: '100',
    complemento: 'Sala 302',
    bairro: 'Recife Antigo',
    cidade: 'Recife',
    estado: 'PE',
    cep: '50030-170',
    whatsapp: '81987654321',
    email: 'davi.inventor@gmail.com',
    contratoSocial: 'Upload de apenas Startup',
    comprovanteResidencia: 'COMPROVANTE_RESIDENCIA_RECIFE.pdf',
    nomeSoftware: 'SmartTraffic Recife AI',
    versao: 'v2.1',
    descricaoSoftware: 'Algoritmo otimizador de semáforos inteligentes em tempo real.',
    hashSha256: 'a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e',
    justificativa: 'Redução de até 30% nos congestionamentos em vias prioritárias do Recife.',
    anexoI: 'ANEXO_I_DECLARACAO.pdf',
    aceite: 'Sim',
  },
  {
    id: 'e2-3',
    tipoProponente: 'Startup PJ',
    razaoSocial: 'EcoWaste Rastreabilidade S.A.',
    nome: 'Gabriel Chamie',
    nomeFantasia: 'EcoWaste Tracker',
    cnpj: '12.345.678/0001-00',
    dataAbertura: '12/01/2025',
    representanteLegal: 'Gabriel Chamie Alves',
    cpfRepresentante: '987.654.321-11',
    endereco: 'Av. Engenheiro Domingos Ferreira',
    numero: '4040',
    complemento: 'Andar 12',
    bairro: 'Boa Viagem',
    cidade: 'Recife',
    estado: 'PE',
    cep: '51021-040',
    whatsapp: '81982223333',
    email: 'contato@ecowaste.com.br',
    contratoSocial: 'CONTRATO_SOCIAL_ECOWASTE.pdf',
    comprovanteResidencia: 'SEDE_RECIFE_ECOWASTE.pdf',
    nomeSoftware: 'EcoWaste Platform v3',
    versao: 'v3.0.0',
    descricaoSoftware: 'Plataforma de gestão e rastreabilidade de resíduos industriais em Blockchain.',
    hashSha256: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
    justificativa: 'Conformidade com a Política Nacional de Resíduos Sólidos e incentivo à economia circular.',
    anexoI: 'DECLARACAO_ANEXO_I_ECOWASTE.pdf',
    aceite: 'Sim',
  },
  {
    id: 'e2-4',
    tipoProponente: 'Startup PJ',
    razaoSocial: 'EducaTech Inovação Pedagógica Ltda',
    nome: 'Mariana Medeiros',
    nomeFantasia: 'EducaTech Recife',
    cnpj: '33.444.555/0001-22',
    dataAbertura: '20/02/2024',
    representanteLegal: 'Mariana Medeiros',
    cpfRepresentante: '555.444.333-22',
    endereco: 'Rua da Guia',
    numero: '75',
    complemento: 'Apto 201',
    bairro: 'Bairro do Recife',
    cidade: 'Recife',
    estado: 'PE',
    cep: '50030-210',
    whatsapp: '81981112222',
    email: 'mariana@educatech.com.br',
    contratoSocial: 'CONTRATO_SOCIAL_EDUCATECH.pdf',
    comprovanteResidencia: 'COMPROVANTE_SEDE_EDUCATECH.pdf',
    nomeSoftware: 'EducaGame Escolar',
    versao: 'v1.5.2',
    descricaoSoftware: 'Ambiente virtual gamificado para aprendizado de matemática em escolas públicas.',
    hashSha256: '6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b',
    justificativa: 'Elevação das notas do IDEB e redução do abandono escolar na rede municipal.',
    anexoI: 'ANEXO_I_EDUCATECH.pdf',
    aceite: 'Sim',
  },
]

// ── Mock Submissions for Edital 003 ──
const initialEdital3: SubmissionEdital3[] = [
  {
    id: 'e3-1',
    razaoSocial: 'sdfsdsdfsdff',
    nomeFantasia: 'fdsfsddfsf',
    nome: 'ddedwefwe',
    cnpj: '3121313312232',
    dataConstituicao: '26/03/2026',
    site: '3123e wdew',
    linkedIn: 'fewfwefw',
    nomeResponsavel: 'f sfewfe e',
    cargo: 'feff ef fcfc',
    cpfResponsavel: '3132331323321',
    emailContato: 'pedro.dhalia@gmail.com',
    telefoneContato: '23444324324242432',
    cnpjAtivoRegular: 'Sim',
    certidoesNegativas: 'MODELO%20DE%20APRESENTA%C3%87%C3%83O%20DE%20PROPOSTA.docx.pdf',
    nomeProdutoSolucao: 'ddedwefwe',
    descricaoGeralSolucao: 'fefewfewfwffewe',
    estagioDesenvolvimento: 'MVP',
    possuiTracao: 'Sim',
    aplicabilidadeCidade: 'efwfeffewwefsdsf',
    principalOds: 'ODS 3',
    contribuicaoOds: 'fefesffeffsdf',
    equipeExecutora: 'fefsfefesfse',
    escalabilidadeReplicabilidade: 'fesffefse',
    documentoAnexo: 'MODELO%20DE%20APRESENTA%C3%87%C3%83O%20DE%20PROPOSTA.docx.pdf',
    aceite: 'Sim',
  },
  {
    id: 'e3-2',
    razaoSocial: 'GRY Tech Soluções Ambientais Ltda',
    nomeFantasia: 'GRY Solutions',
    nome: 'FloodAlert IoT',
    cnpj: '88.999.000/0001-22',
    dataConstituicao: '15/01/2025',
    site: 'https://grytech.com.br',
    linkedIn: 'https://linkedin.com/company/grytech',
    nomeResponsavel: 'Mariana Lima',
    cargo: 'CTO & Co-fundadora',
    cpfResponsavel: '456.789.123-44',
    emailContato: 'mariana@grytech.com',
    telefoneContato: '81996665544',
    cnpjAtivoRegular: 'Sim',
    certidoesNegativas: 'CERTIDOES_NEGATIVAS_GRY.pdf',
    nomeProdutoSolucao: 'FloodAlert IoT',
    descricaoGeralSolucao: 'Sensores de nível d’água conectados via rede LoRaWAN para alerta antecipado de alagamentos.',
    estagioDesenvolvimento: 'Produto em Testes',
    possuiTracao: 'Sim',
    aplicabilidadeCidade: 'Monitoramento direto das bacias dos rios Capibaribe e Beberibe.',
    principalOds: 'ODS 11',
    contribuicaoOds: 'Cidades e Comunidades Sustentáveis com redução de danos por enchentes.',
    equipeExecutora: '3 Engenheiros IoT, 1 Cientista de Dados e 2 Especialistas Hidrológicos',
    escalabilidadeReplicabilidade: 'Arquitetura modular expansível para qualquer centro urbano costeiro.',
    documentoAnexo: 'PROPOSTA_TECNICA_FLOODALERT.pdf',
    aceite: 'Sim',
  },
  {
    id: 'e3-3',
    razaoSocial: 'HealthConnect Recife Tecnologia em Saúde',
    nomeFantasia: 'HealthConnect',
    nome: 'Prontuário Único Recife',
    cnpj: '77.111.222/0001-33',
    dataConstituicao: '08/08/2024',
    site: 'https://healthconnect.com.br',
    linkedIn: 'https://linkedin.com/company/healthconnect',
    nomeResponsavel: 'Lucas Vasconcelos',
    cargo: 'CEO',
    cpfResponsavel: '111.222.333-44',
    emailContato: 'lucas@healthconnect.com.br',
    telefoneContato: '81995554433',
    cnpjAtivoRegular: 'Sim',
    certidoesNegativas: 'CERTIDOES_HEALTHCONNECT.pdf',
    nomeProdutoSolucao: 'Plataforma Triagem Prévia IA',
    descricaoGeralSolucao: 'Sistema integrador de unidades básicas de saúde e prontuário único com triagem inteligente.',
    estagioDesenvolvimento: 'Produto Lançado',
    possuiTracao: 'Sim',
    aplicabilidadeCidade: 'Implantação em todas as 15 policlínicas municipais do Recife.',
    principalOds: 'ODS 3',
    contribuicaoOds: 'Saúde e Bem-Estar garantindo atendimento humanizado e rápido.',
    equipeExecutora: '4 Médicos Consultores, 5 Desenvolvedores Full-stack e 2 UX Designers',
    escalabilidadeReplicabilidade: 'Modelo SaaS adaptável a qualquer município brasileiro.',
    documentoAnexo: 'APRESENTACAO_HEALTHCONNECT.pdf',
    aceite: 'Sim',
  },
]

export default function NitroInscricoesPage() {
  const [searchEdital1, setSearchEdital1] = useState('')
  const [searchEdital2, setSearchEdital2] = useState('')
  const [searchEdital3, setSearchEdital3] = useState('')

  const [selectedDetails, setSelectedDetails] = useState<{
    type: 'Edital 001' | 'Edital 002' | 'Edital 003'
    data: any
  } | null>(null)

  // Filtered lists
  const filteredEdital1 = initialEdital1.filter(
    item =>
      item.razaoSocial.toLowerCase().includes(searchEdital1.toLowerCase()) ||
      item.tipoInstituicao.toLowerCase().includes(searchEdital1.toLowerCase()) ||
      item.nomeNit.toLowerCase().includes(searchEdital1.toLowerCase()) ||
      item.trl.toLowerCase().includes(searchEdital1.toLowerCase())
  )

  const filteredEdital2 = initialEdital2.filter(
    item =>
      item.nome.toLowerCase().includes(searchEdital2.toLowerCase()) ||
      item.tipoProponente.toLowerCase().includes(searchEdital2.toLowerCase()) ||
      item.razaoSocial.toLowerCase().includes(searchEdital2.toLowerCase()) ||
      (item.nomeFantasia && item.nomeFantasia.toLowerCase().includes(searchEdital2.toLowerCase()))
  )

  const filteredEdital3 = initialEdital3.filter(
    item =>
      (item.nome && item.nome.toLowerCase().includes(searchEdital3.toLowerCase())) ||
      item.razaoSocial.toLowerCase().includes(searchEdital3.toLowerCase()) ||
      item.nomeFantasia.toLowerCase().includes(searchEdital3.toLowerCase()) ||
      item.site.toLowerCase().includes(searchEdital3.toLowerCase())
  )

  // Header Map for Clean Human-Readable CSV Columns
  const headerMap: Record<string, string> = {
    id: 'ID',
    razaoSocial: 'Razão Social',
    tipoInstituicao: 'Tipo de Instituição',
    cnpj: 'CNPJ',
    endereco: 'Endereço',
    telefone: 'Telefone',
    emailInstitucional: 'Email Institucional',
    nomeNit: 'Nome do NIT',
    responsavelNit: 'Responsável pelo NIT',
    cpfResponsavel: 'CPF do Responsável',
    cargo: 'Cargo',
    emailResponsavel: 'Email do Responsável',
    telefoneResponsavel: 'Telefone do Responsável',
    atoDeclaracao: 'Ato / Declaração',
    estruturaNit: 'Estrutura do NIT',
    equipe: 'Equipe',
    horasDedicacao: 'Horas de Dedicação',
    comprovanteSede: 'Comprovante de Sede',
    experienciaNit: 'Experiência do NIT',
    dedicacaoTime: 'Dedicação do Time',
    tecnologia: 'Tecnologia',
    areaTematica: 'Área Temática',
    resumo: 'Resumo',
    trl: 'TRL',
    possuiPatente: 'Possui Patente?',
    possuiRegistroSoftware: 'Possui Registro Software?',
    possuiOutroTipo: 'Possui Outro Tipo?',
    descrevaOutroTipo: 'Descrição Outro Tipo',
    descrevaExperiencias: 'Experiências Prévias',
    problemaTecnologia: 'Problema relativo à Tecnologia',
    valorMedio: 'Valor Médio Comercializado',
    propostasValor: 'Propostas de Valor',
    diferenciais: 'Diferenciais',
    potencialMercado: 'Potencial de Mercado',
    setores: 'Setores',
    evidenciasDemanda: 'Evidências de Demanda',
    modeloMercado: 'Modelo do Mercado',
    aceite: 'Aceite LGPD / Termos',

    // Edital 002 Specifics
    tipoProponente: 'Tipo Proponente',
    nome: 'Nome',
    dataAbertura: 'Data de Abertura',
    representanteLegal: 'Representante Legal',
    cpfRepresentante: 'CPF Representante',
    numero: 'Número',
    complemento: 'Complemento',
    bairro: 'Bairro',
    cidade: 'Cidade',
    estado: 'Estado',
    cep: 'CEP',
    whatsapp: 'WhatsApp',
    email: 'E-mail',
    contratoSocial: 'Contrato Social',
    comprovanteResidencia: 'Comprovante de Residência',
    nomeSoftware: 'Nome do Software',
    versao: 'Versão',
    descricaoSoftware: 'Descrição do Software',
    hashSha256: 'Hash SHA-256',
    justificativa: 'Justificativa de Interesse Público',
    anexoI: 'Declaração Anexo I',
    nomeFantasia: 'Nome Fantasia',

    // Edital 003 Specifics
    dataConstituicao: 'Data de Constituição',
    site: 'Site',
    linkedIn: 'LinkedIn',
    nomeResponsavel: 'Nome do Responsável',
    emailContato: 'E-mail de Contato',
    telefoneContato: 'Telefone de Contato',
    cnpjAtivoRegular: 'CNPJ Ativo e Regular?',
    certidoesNegativas: 'Certidões Negativas',
    nomeProdutoSolucao: 'Nome do Produto / Solução',
    descricaoGeralSolucao: 'Descrição Geral da Solução',
    estagioDesenvolvimento: 'Estágio de Desenvolvimento',
    possuiTracao: 'Possui Tração?',
    aplicabilidadeCidade: 'Aplicabilidade na Cidade',
    principalOds: 'Principal ODS',
    contribuicaoOds: 'Contribuição para os ODS',
    equipeExecutora: 'Equipe Executora',
    escalabilidadeReplicabilidade: 'Escalabilidade e Replicabilidade',
    documentoAnexo: 'Documento Anexo',
  }

  // Helper for Exporting Full CSV with UTF-8 BOM
  const exportObjectsToCSV = (filename: string, dataArray: Record<string, any>[]) => {
    if (!dataArray || dataArray.length === 0) return

    // Unique keys in the objects
    const rawKeys = Array.from(new Set(dataArray.flatMap(obj => Object.keys(obj))))

    // Formatted headers
    const headerLabels = rawKeys.map(k => headerMap[k] || k)

    const csvRows: string[] = []
    csvRows.push(headerLabels.map(h => `"${String(h).replace(/"/g, '""')}"`).join(','))

    for (const rowObj of dataArray) {
      const rowValues = rawKeys.map(key => {
        const val = rowObj[key] ?? ''
        return `"${String(val).replace(/"/g, '""')}"`
      })
      csvRows.push(rowValues.join(','))
    }

    const csvContent = '\uFEFF' + csvRows.join('\r\n')
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `${filename}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F8FAFC', fontFamily: "'DM Sans', sans-serif" }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar activeItem="painel" />
        <main style={{ flex: 1, padding: '32px', maxWidth: '1280px', width: '100%', margin: '0 auto' }}>

          {/* ── Top Hero Card (Dashboard Inscrições Nitro 2026) ── */}
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              padding: '36px 40px',
              color: '#FFFFFF',
              background: 'linear-gradient(135deg, #022340 0%, #004d80 50%, #0077b6 100%)',
              overflow: 'hidden',
              boxShadow: '0 10px 25px rgba(2, 35, 64, 0.15)',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-40px',
                right: '10%',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                border: '40px solid rgba(255, 255, 255, 0.08)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-80px',
                right: '-40px',
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                border: '60px solid rgba(255, 255, 255, 0.05)',
                pointerEvents: 'none',
              }}
            />

            <h1 style={{ fontSize: '32px', fontWeight: 900, margin: '0 0 28px 0', letterSpacing: '-0.02em' }}>
              Dashboard Inscrições Nitro 2026
            </h1>

            {/* 3 Counter Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', maxWidth: '750px' }}>
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                }}
              >
                <div style={{ fontSize: '42px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '12px' }}>
                  {initialEdital1.length}
                </div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#00a8b5' }}>
                  Edital 001
                </div>
              </div>

              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                }}
              >
                <div style={{ fontSize: '42px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '12px' }}>
                  {initialEdital2.length}
                </div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#00a8b5' }}>
                  Edital 002
                </div>
              </div>

              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                }}
              >
                <div style={{ fontSize: '42px', fontWeight: 900, color: '#0F172A', lineHeight: 1, marginBottom: '12px' }}>
                  {initialEdital3.length}
                </div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#00a8b5' }}>
                  Edital 003
                </div>
              </div>
            </div>
          </div>

          {/* ───────────────────────────────────────────────────────── */}
          {/* ── SECTION 1: Edital 001 Table ────────────────────────── */}
          {/* ───────────────────────────────────────────────────────── */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', margin: 0, maxWidth: '800px', lineHeight: 1.3 }}>
                Submissões – Edital de Chamamento Público NCTI 001/2026 – Apoio para Comercialização de tecnologias
              </h2>
              <button
                onClick={() => exportObjectsToCSV('submissoes_edital_001_completas', filteredEdital1)}
                style={{
                  backgroundColor: '#00a8b5',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '30px',
                  padding: '10px 20px',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 2px 5px rgba(0, 168, 181, 0.25)',
                  whiteSpace: 'nowrap',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <span>Exportar CSV</span>
              </button>
            </div>

            {/* Search Bar */}
            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                value={searchEdital1}
                onChange={e => setSearchEdital1(e.target.value)}
                placeholder="Pesquise..."
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1.5px solid #00a8b5',
                  fontSize: '14px',
                  outline: 'none',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                }}
              />
            </div>

            {/* Table Container */}
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: '#FFFFFF' }}>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '30%' }}>Razão Social</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '25%' }}>Tipo Instituição</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '25%' }}>Nome NIT</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '10%' }}>TRL</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', textAlign: 'right', width: '10%' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEdital1.map(row => (
                    <tr key={row.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#0F172A', fontWeight: 500 }}>{row.razaoSocial}</td>
                      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#334155' }}>{row.tipoInstituicao}</td>
                      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#334155' }}>{row.nomeNit}</td>
                      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#334155' }}>{row.trl}</td>
                      <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                        <button
                          onClick={() => setSelectedDetails({ type: 'Edital 001', data: row })}
                          style={{
                            backgroundColor: '#00a8b5',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '20px',
                            padding: '8px 16px',
                            fontSize: '13px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          Ver Detalhes
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ───────────────────────────────────────────────────────── */}
          {/* ── SECTION 2: Edital 002 Table ────────────────────────── */}
          {/* ───────────────────────────────────────────────────────── */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', margin: 0, maxWidth: '800px', lineHeight: 1.3 }}>
                Submissões – Edital de Chamamento Público NCTI 002/2026 – Apoio para Registros de software
              </h2>
              <button
                onClick={() => exportObjectsToCSV('submissoes_edital_002_completas', filteredEdital2)}
                style={{
                  backgroundColor: '#00a8b5',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '30px',
                  padding: '10px 20px',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 2px 5px rgba(0, 168, 181, 0.25)',
                  whiteSpace: 'nowrap',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <span>Exportar CSV</span>
              </button>
            </div>

            {/* Search Bar */}
            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                value={searchEdital2}
                onChange={e => setSearchEdital2(e.target.value)}
                placeholder="Pesquise..."
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1.5px solid #00a8b5',
                  fontSize: '14px',
                  outline: 'none',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                }}
              />
            </div>

            {/* Table Container */}
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: '#FFFFFF' }}>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '25%' }}>Nome</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '20%' }}>Tipo Proponente</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '22%' }}>Razão Social</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '23%' }}>Nome Fantasia</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', textAlign: 'right', width: '10%' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEdital2.map(row => (
                    <tr key={row.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#0F172A', fontWeight: 500 }}>{row.nome}</td>
                      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#334155' }}>{row.tipoProponente}</td>
                      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#334155' }}>{row.razaoSocial}</td>
                      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#334155' }}>{row.nomeFantasia || '-'}</td>
                      <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                        <button
                          onClick={() => setSelectedDetails({ type: 'Edital 002', data: row })}
                          style={{
                            backgroundColor: '#00a8b5',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '20px',
                            padding: '8px 16px',
                            fontSize: '13px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          Ver Detalhes
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ───────────────────────────────────────────────────────── */}
          {/* ── SECTION 3: Edital 003 Table ────────────────────────── */}
          {/* ───────────────────────────────────────────────────────── */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', margin: 0, maxWidth: '800px', lineHeight: 1.3 }}>
                Submissões – Edital de Seleção De Startups NCTI 003/2026 – Trilha para qualificação ConectaLabs
              </h2>
              <button
                onClick={() => exportObjectsToCSV('submissoes_edital_003_completas', filteredEdital3)}
                style={{
                  backgroundColor: '#00a8b5',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '30px',
                  padding: '10px 20px',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 2px 5px rgba(0, 168, 181, 0.25)',
                  whiteSpace: 'nowrap',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <span>Exportar CSV</span>
              </button>
            </div>

            {/* Search Bar */}
            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                value={searchEdital3}
                onChange={e => setSearchEdital3(e.target.value)}
                placeholder="Pesquise..."
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1.5px solid #00a8b5',
                  fontSize: '14px',
                  outline: 'none',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                }}
              />
            </div>

            {/* Table Container */}
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: '#FFFFFF' }}>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '25%' }}>Nome</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '25%' }}>Razão Social</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '25%' }}>Nome Fantasia</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', width: '15%' }}>Site</th>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#475569', textAlign: 'right', width: '10%' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEdital3.map(row => (
                    <tr key={row.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#0F172A', fontWeight: 500 }}>{row.nome || '-'}</td>
                      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#334155' }}>{row.razaoSocial}</td>
                      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#334155' }}>{row.nomeFantasia}</td>
                      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#00a8b5' }}>{row.site}</td>
                      <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                        <button
                          onClick={() => setSelectedDetails({ type: 'Edital 003', data: row })}
                          style={{
                            backgroundColor: '#00a8b5',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '20px',
                            padding: '8px 16px',
                            fontSize: '13px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          Ver Detalhes
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>

      {/* ───────────────────────────────────────────────────────── */}
      {/* ── MODAL "VER DETALHES" (Formulário completo com campos) ── */}
      {/* ───────────────────────────────────────────────────────── */}
      {selectedDetails && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '24px',
          }}
          onClick={() => setSelectedDetails(null)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              maxWidth: '860px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '36px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedDetails(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                fontSize: '22px',
                cursor: 'pointer',
                color: '#64748B',
              }}
            >
              ✕
            </button>

            {/* Top Button: Exportar Como CSV */}
            <button
              onClick={() =>
                exportObjectsToCSV(
                  `submissao_${selectedDetails.type.toLowerCase().replace(' ', '_')}_${selectedDetails.data.id}`,
                  [selectedDetails.data]
                )
              }
              style={{
                width: '100%',
                border: '1.5px solid #00a8b5',
                borderRadius: '8px',
                padding: '14px',
                backgroundColor: '#FFFFFF',
                color: '#00a8b5',
                fontSize: '15px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <span>Exportar Como CSV</span>
            </button>

            {/* Render Details based on Edital Type */}
            {selectedDetails.type === 'Edital 001' && (
              <Edital001DetailsModal data={selectedDetails.data as SubmissionEdital1} />
            )}

            {selectedDetails.type === 'Edital 002' && (
              <Edital002DetailsModal data={selectedDetails.data as SubmissionEdital2} />
            )}

            {selectedDetails.type === 'Edital 003' && (
              <Edital003DetailsModal data={selectedDetails.data as SubmissionEdital3} />
            )}

            {/* Bottom Close Action */}
            <div style={{ marginTop: '12px', textAlign: 'right' }}>
              <button
                onClick={() => setSelectedDetails(null)}
                style={{
                  backgroundColor: '#00a8b5',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px 28px',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Modal Details Component for Edital 001 ──
function Edital001DetailsModal({ data }: { data: SubmissionEdital1 }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* ── Section: Dados da Instituição ── */}
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0B4F8C', margin: '0 0 16px 0' }}>
          Dados da Instituição:
        </h3>

        <FormInput label="Razão Social:" value={data.razaoSocial} />

        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontSize: '14px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '8px' }}>
            Tipo de Instituição:
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {['ICT Pública', 'ICT Privada', 'IES Pública', 'IES Privada', 'IES Comunitária'].map(tipo => (
              <label key={tipo} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#00a8b5', cursor: 'default' }}>
                <input type="radio" checked={data.tipoInstituicao === tipo} readOnly style={{ accentColor: '#00a8b5' }} />
                <span>{tipo}</span>
              </label>
            ))}
          </div>
        </div>

        <FormInput label="Cnpj:" value={data.cnpj} />
        <FormInput label="Endereço:" value={data.endereco} />
        <FormInput label="Telefone:" value={data.telefone} />
        <FormInput label="Email Institucional:" value={data.emailInstitucional} />
      </div>

      {/* ── Section: Responsável (NIT) ── */}
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0B4F8C', margin: '0 0 16px 0' }}>
          Responsável (NIT):
        </h3>

        <FormInput label="Nome do NIT" value={data.nomeNit} />
        <FormInput label="Responsável pelo NIT" value={data.responsavelNit} />
        <FormInput label="CPF do Responsável:" value={data.cpfResponsavel} />
        <FormInput label="Cargo:" value={data.cargo} />
        <FormInput label="Email:" value={data.emailResponsavel} />
        <FormInput label="Telefone:" value={data.telefoneResponsavel} />
        <FormFileBox label="Upload do ato ou declaração de responsável:" fileName={data.atoDeclaracao} />
      </div>

      {/* ── Section 1: Capacidade institucional ── */}
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0B4F8C', margin: '0 0 16px 0' }}>
          1. Capacidade institucional e engajamento do NIT ou órgão similar :
        </h3>

        <FormInput label="Estrutura do NIT:" value={data.estruturaNit} />
        <FormInput label="Equipe:" value={data.equipe} />
        <FormInput label="Horas de Dedicação:" value={data.horasDedicacao} />
        <FormFileBox label="Comprovante de Sede:" fileName={data.comprovanteSede} />

        <div style={{ marginBottom: '16px' }}>
          <FormDownloadButton text="Baixar Contrato Social" />
        </div>

        <FormInput label="Experiencia do NIT em comercialização em tecnologia:" value={data.experienciaNit} />
        <FormInput label="Dedicação do time (em horas semanais)" value={data.dedicacaoTime} />
      </div>

      {/* ── Section 2: Maturidade tecnológica ── */}
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0B4F8C', margin: '0 0 16px 0' }}>
          2. Maturidade tecnológica da solução:
        </h3>

        <FormInput label="Tecnologia:" value={data.tecnologia} />
        <FormInput label="Área Temática:" value={data.areaTematica} />
        <FormInput label="Resumo:" value={data.resumo} />

        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontSize: '14px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '8px' }}>
            TRL:
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {['TRL 6', 'TRL 7', 'TRL 8', 'TRL 9'].map(trl => (
              <label key={trl} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#00a8b5', cursor: 'default' }}>
                <input type="radio" checked={data.trl === trl} readOnly style={{ accentColor: '#00a8b5' }} />
                <span>{trl}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* ── Section: Propriedade Intelectual ── */}
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0B4F8C', margin: '0 0 16px 0' }}>
          Propriedade Intelectual:
        </h3>

        <FormRadioPair label="Possui Patente?" checked={data.possuiPatente === 'Sim'} />
        <FormRadioPair label="Possui Registro de Software?" checked={data.possuiRegistroSoftware === 'Sim'} />
        <FormRadioPair label="Possui outro tipo?" checked={data.possuiOutroTipo === 'Sim'} />

        <FormInput label="Descreva o outro tipo:" value={data.descrevaOutroTipo} />
        <FormTextarea label="Descreva experiências prévias em contratos, parcerias e/ou licenciamentos" value={data.descrevaExperiencias} />
      </div>

      {/* ── Section 3: Clareza e consistência da oferta ── */}
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0B4F8C', margin: '0 0 16px 0' }}>
          3. Clareza e consistência da oferta tecnológica:
        </h3>

        <FormInput label="Problema relativo a tecnologia:" value={data.problemaTecnologia} />
        <FormInput label="Valor médio comercializado:" value={data.valorMedio} />
        <FormInput label="Propostas de valor relacionada a tecnologia:" value={data.propostasValor} />
        <FormInput label="Diferenciais:" value={data.diferenciais} />
      </div>

      {/* ── Section 4: Potencial de mercado e aplicabilidade ── */}
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0B4F8C', margin: '0 0 8px 0' }}>
          4. Potencial de mercado e aplicabilidade
        </h3>
        <p style={{ fontSize: '13px', color: '#64748B', margin: '0 0 8px 0' }}>
          Avalia a viabilidade de inserção da tecnologia no mercado.
        </p>
        <p style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.4, margin: '0 0 16px 0' }}>
          <strong>Atenção:</strong> inclua itens relacionados a Identificação clara de setores ou segmentos-alvo, Evidências de demanda ou interesse do mercado (parcerias, pilotos, consultas, histórico de interação), Adequação da tecnologia a modelos viáveis de comercialização (licenciamento, serviços tecnológicos ou spin-off)
        </p>

        <FormTextarea label="" value={data.potencialMercado} />
        <FormInput label="Setores:" value={data.setores} />
        <FormTextarea label="Evidências de demandas ou interesse de mercado" value={data.evidenciasDemanda} />

        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontSize: '14px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '8px' }}>
            Modelo do Mercado:
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              'Licenciamento',
              'Prestação de Serviços Tecnológicos',
              'Spin-off',
              'Combinação',
              'Ainda não mobilizado',
              'Outro',
            ].map(mod => (
              <label key={mod} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#00a8b5', cursor: 'default' }}>
                <input type="radio" checked={data.modeloMercado === mod} readOnly style={{ accentColor: '#00a8b5' }} />
                <span>{mod}</span>
              </label>
            ))}
          </div>
        </div>

        <FormFileBox label="Anexos complementares:" fileName="Upload do ato administrativo de designação (PDF). Obrigatório para habilitação." />

        <div style={{ marginBottom: '16px' }}>
          <FormDownloadButton text="Baixar Documento" />
        </div>
      </div>

      {/* ── Section 5: Aceite e Assinatura ── */}
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0B4F8C', margin: '0 0 8px 0' }}>
          5. Aceite e Assinatura:
        </h3>
        <p style={{ fontSize: '13px', color: '#64748B', margin: '0 0 12px 0' }}>
          Ao aceitar esses termos você concorda com todos os critérios do edital, LGPD e originalidade
        </p>

        <FormRadioPair label="" checked={data.aceite === 'Sim'} />
      </div>
    </div>
  )
}

// ── Modal Details Component for Edital 002 ──
function Edital002DetailsModal({ data }: { data: SubmissionEdital2 }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* ── Section 1: Identificação ── */}
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0B4F8C', margin: '0 0 12px 0' }}>
          1. Identificação
        </h3>
        <p style={{ fontSize: '13px', color: '#64748B', margin: '0 0 12px 0' }}>
          Selecione: Startup PJ ou Inventor PF
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
          {['Startup PJ', 'Inventor PF'].map(tipo => (
            <label key={tipo} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#00a8b5', cursor: 'default' }}>
              <input type="radio" checked={data.tipoProponente === tipo} readOnly style={{ accentColor: '#00a8b5' }} />
              <span>{tipo}</span>
            </label>
          ))}
        </div>

        <FormInput label="Razão Social:" value={data.razaoSocial} />
        <FormInput label="Nome:" value={data.nome} />
        <FormInput label="CNPJ:" value={data.cnpj} />
        <FormInput label="Data de Abertura:" value={data.dataAbertura} />
        <FormInput label="Representante legal da startup:" value={data.representanteLegal} />
        <FormInput label="CPF do Representante:" value={data.cpfRepresentante} />
        <FormInput label="Endereço(logradouro):" value={data.endereco} />
        <FormInput label="Número:" value={data.numero} />
        <FormInput label="Complemento:" value={data.complemento} placeholder="Apartamento, sala, etc." />
        <FormInput label="Bairro:" value={data.bairro} />
        <FormInput label="Cidade:" value={data.cidade} />
        <FormInput label="Estado:" value={data.estado} />
        <FormInput label="Cep:" value={data.cep} />
        <FormInput label="Whatsapp:" value={data.whatsapp} />
        <FormInput label="Email:" value={data.email} />

        <FormFileBox label="Contrato Social:" fileName={data.contratoSocial || 'Upload de apenas Startup'} />
        <div style={{ marginBottom: '20px' }}>
          <FormDownloadButton text="Baixar Documento" />
        </div>

        <FormFileBox label="Comprovante de Residência:" fileName={data.comprovanteResidencia || 'Comprovante de sede (PJ) ou residência (PF) em Recife/PE.'} />
        <div style={{ marginBottom: '20px' }}>
          <FormDownloadButton text="Baixar Documento" />
        </div>
      </div>

      {/* ── Section 2: Dados do software ── */}
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0B4F8C', margin: '0 0 16px 0' }}>
          2. Dados do software:
        </h3>
        <FormInput label="Nome do Software:" value={data.nomeSoftware} />
        <FormInput label="Versão:" value={data.versao} />
        <FormTextarea label="Descrição do Software:" value={data.descricaoSoftware} />
        <FormInput label="Hash SHA-256:" value={data.hashSha256} />
        <FormTextarea label="Justificativa de correlação do software com interesse público do Recife e potencial mercadológico" value={data.justificativa} />
      </div>

      {/* ── Section 3: Declaração Anexo I ── */}
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0B4F8C', margin: '0 0 16px 0' }}>
          3. Declaração Anexo I:
        </h3>
        <FormFileBox label="" fileName={data.anexoI || 'Upload de Anexo I'} />
        <FormDownloadButton text="Baixar Documento" />
      </div>

      {/* ── Section 4: Aceite Final ── */}
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0B4F8C', margin: '0 0 8px 0' }}>
          4. Aceite Final:
        </h3>
        <p style={{ fontSize: '13px', color: '#64748B', margin: '0 0 12px 0' }}>
          Ao aceitar esses termos você concorda com todos os critérios do edital, LGPD e originalidade
        </p>
        <FormRadioPair label="" checked={data.aceite === 'Sim'} />
      </div>
    </div>
  )
}

// ── Modal Details Component for Edital 003 ──
function Edital003DetailsModal({ data }: { data: SubmissionEdital3 }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* ── Section 1: Identificação da Startup ── */}
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0B4F8C', margin: '0 0 16px 0' }}>
          1. Identificação da Startup
        </h3>
        <FormInput label="Razão Social" value={data.razaoSocial} />
        <FormInput label="Nome Fantasia" value={data.nomeFantasia} />
        <FormInput label="CNPJ" value={data.cnpj} />
        <FormInput label="Data de Constituição" value={data.dataConstituicao} />
        <FormInput label="Site" value={data.site} />
        <FormInput label="LinkedIn" value={data.linkedIn} />

        <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', marginTop: '20px', marginBottom: '12px' }}>
          Contato do Responsável pela Submissão
        </h4>
        <FormInput label="Nome do Responsável" value={data.nomeResponsavel} />
        <FormInput label="Cargo" value={data.cargo} />
        <FormInput label="CPF" value={data.cpfResponsavel} />
        <FormInput label="E-mail de Contato" value={data.emailContato} />
        <FormInput label="Telefone de Contato" value={data.telefoneContato} />

        <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', marginTop: '20px', marginBottom: '12px' }}>
          Regularidade Jurídica e Fiscal
        </h4>
        <FormRadioPair label="O CNPJ da startup está ativo e regular?" checked={data.cnpjAtivoRegular === 'Sim'} />
        <FormFileBox label="Upload de Certidões Negativas" fileName={data.certidoesNegativas} />
        <FormDownloadButton text={data.certidoesNegativas || 'MODELO DE APRESENTAÇÃO DE PROPOSTA.docx.pdf'} />
      </div>

      {/* ── Section 2: Descrição da Solução ── */}
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0B4F8C', margin: '0 0 16px 0' }}>
          2. Descrição da Solução
        </h3>
        <FormInput label="Nome do Produto/Solução" value={data.nomeProdutoSolucao} />
        <FormTextarea label="Descrição Geral da Solução" value={data.descricaoGeralSolucao} />

        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontSize: '14px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '8px' }}>
            Estágio atual de desenvolvimento
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {['Ideia/Conceito', 'MVP', 'Produto em Testes', 'Produto Lançado'].map(estagio => (
              <label key={estagio} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#00a8b5', cursor: 'default' }}>
                <input type="radio" checked={data.estagioDesenvolvimento === estagio} readOnly style={{ accentColor: '#00a8b5' }} />
                <span>{estagio}</span>
              </label>
            ))}
          </div>
        </div>

        <FormRadioPair label="A solução possui tração ou validação com usuários?" checked={data.possuiTracao === 'Sim'} />
      </div>

      {/* ── Section 3: Critérios de classificação e do julgamento das propostas ── */}
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0B4F8C', margin: '0 0 16px 0' }}>
          3. Critérios de classificação e do julgamento das propostas
        </h3>
        <FormTextarea label="Aplicabilidade na Cidade" value={data.aplicabilidadeCidade} />

        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontSize: '14px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '8px' }}>
            Seleciona a principal ODS atendida
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '180px', overflowY: 'auto', paddingRight: '8px' }}>
            {Array.from({ length: 17 }, (_, i) => `ODS ${i + 1}`).map(ods => (
              <label key={ods} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#00a8b5', cursor: 'default' }}>
                <input type="radio" checked={data.principalOds === ods} readOnly style={{ accentColor: '#00a8b5' }} />
                <span>{ods}</span>
              </label>
            ))}
          </div>
        </div>

        <FormTextarea label="Contribuição para os ODS" value={data.contribuicaoOds} />
        <FormTextarea label="Equipe Executora" value={data.equipeExecutora} />
        <FormTextarea label="Escalabilidade e Replicabilidade" value={data.escalabilidadeReplicabilidade} />
      </div>

      {/* ── Section 4: Documentos ── */}
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0B4F8C', margin: '0 0 8px 0' }}>
          4. Documentos
        </h3>
        <p style={{ fontSize: '13px', color: '#64748B', margin: '0 0 12px 0' }}>
          Submeta anexos de documentação prevista no edital
        </p>

        <FormFileBox label="" fileName={data.documentoAnexo || 'MODELO%20DE%20APRESENTA%C3%87%C3%83O%20DE%20PROPOSTA.docx.pdf'} />
        <div style={{ marginBottom: '16px' }}>
          <FormDownloadButton text={data.documentoAnexo || 'MODELO DE APRESENTAÇÃO DE PROPOSTA.docx.pdf'} />
        </div>

        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#334155', fontWeight: 600, cursor: 'default', marginTop: '12px' }}>
          <input type="checkbox" checked={data.aceite === 'Sim'} readOnly style={{ accentColor: '#00a8b5' }} />
          <span>Ao aceitar esses termos você concorda com todos os critérios do edital, LGPD e originalidade</span>
        </label>
      </div>
    </div>
  )
}

// ── Reusable Input Field (matching Coreto cyan border style) ──
function FormInput({ label, value, placeholder }: { label?: string; value: string; placeholder?: string }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      {label && (
        <label style={{ fontSize: '14px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '6px' }}>
          {label}
        </label>
      )}
      <input
        type="text"
        value={value || ''}
        placeholder={placeholder}
        readOnly
        style={{
          width: '100%',
          padding: '12px 14px',
          borderRadius: '8px',
          border: '1.5px solid #00a8b5',
          fontSize: '14px',
          color: '#0F172A',
          backgroundColor: '#FFFFFF',
          outline: 'none',
          boxSizing: 'border-box',
        }}
      />
    </div>
  )
}

// ── Reusable Textarea Field ──
function FormTextarea({ label, value }: { label?: string; value: string }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      {label && (
        <label style={{ fontSize: '14px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '6px' }}>
          {label}
        </label>
      )}
      <textarea
        value={value || ''}
        readOnly
        rows={4}
        style={{
          width: '100%',
          padding: '12px 14px',
          borderRadius: '8px',
          border: '1.5px solid #00a8b5',
          fontSize: '14px',
          color: '#0F172A',
          backgroundColor: '#FFFFFF',
          outline: 'none',
          boxSizing: 'border-box',
          resize: 'vertical',
        }}
      />
    </div>
  )
}

// ── Reusable File Upload Preview Box ──
function FormFileBox({ label, fileName }: { label?: string; fileName: string }) {
  return (
    <div style={{ marginBottom: '12px' }}>
      {label && (
        <label style={{ fontSize: '14px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '6px' }}>
          {label}
        </label>
      )}
      <div
        style={{
          width: '100%',
          padding: '24px',
          borderRadius: '8px',
          border: '1.5px solid #00a8b5',
          backgroundColor: '#FFFFFF',
          textAlign: 'center',
          color: '#94A3B8',
          fontSize: '13px',
          wordBreak: 'break-all',
          boxSizing: 'border-box',
        }}
      >
        {fileName}
      </div>
    </div>
  )
}

// ── Reusable Download Document Button ──
function FormDownloadButton({ text }: { text: string }) {
  return (
    <button
      style={{
        width: '100%',
        border: '1.5px solid #00a8b5',
        borderRadius: '8px',
        padding: '12px',
        backgroundColor: '#FFFFFF',
        color: '#00a8b5',
        fontSize: '14px',
        fontWeight: 700,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{text}</span>
    </button>
  )
}

// ── Reusable Radio Pair (Sim / Não) ──
function FormRadioPair({ label, checked }: { label?: string; checked: boolean }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      {label && (
        <label style={{ fontSize: '14px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '6px' }}>
          {label}
        </label>
      )}
      <div style={{ display: 'flex', gap: '20px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#00a8b5', cursor: 'default' }}>
          <input type="radio" checked={checked} readOnly style={{ accentColor: '#00a8b5' }} />
          <span>Sim</span>
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#00a8b5', cursor: 'default' }}>
          <input type="radio" checked={!checked} readOnly style={{ accentColor: '#00a8b5' }} />
          <span>Não</span>
        </label>
      </div>
    </div>
  )
}

// Static dataset for 3º Ciclo E.I.T.A! Recife
// Generated from Bubble SQL exports: RelatorioProposta_eita, RelatorioEITAAvaliacao, RelatorioEITAAvaliacaoOperacao
// With assertive fields: sw_nome, pf_nome, Nome_fantasia, Resp_nome

export interface EitaSubmission {
  id: string
  title: string
  sw_nome: string
  pf_nome: string
  Nome_fantasia: string
  Resp_nome: string
  cidade: string
  CNPJ: string | null
  desafio: string
  desafioCategory: string
  comoResolve: string
  documentos: string[]
  emailEnviado: boolean
  dataCadastro: string | null
  slug: string
  isSegundaFase: boolean
  evaluationIds: string[]
  operationIds: string[]
}

export interface EitaMentorEvaluation {
  id: string
  desafio: string
  desafioCategory: string
  mentor: string
  propostaNome: string
  propostaMedia: number | null
  propostaScore: number | null
  createdDate: string | null
  submissionId: string | null
  slug: string
}

export interface EitaCommitteeOperation {
  id: string
  propostaNome: string
  notaFinal: number | null
  criteriosENota: string
  createdDate: string | null
  submissionId: string | null
  slug: string
}

export const EITA_SUBMISSIONS: EitaSubmission[] = [
  {
    "id": "rel_prop_0001",
    "title": "Cabueta   Plataforma de Denúncias de Descarte Irregular de Lixo em Recife",
    "sw_nome": "Cabueta   Plataforma de Denúncias de Descarte Irregular de Lixo em Recife",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe Cabueta (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "A prefeitura se utiliza do ArcGis, à partir do mapeamento via agentes de campo, quando localizado novo foco de descarte inadequado. \nOs maiores problemas e dificuldades do modo de gestão atual se dão pela imprecisão dos dados, falta de atualizações mais rápidas e constantes de novos focos de lixo, além do gasto elevado de pessoal para monitorar os pontos pela cidade.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750474703767x128128067427345500/Untitled%20%281%29.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750474706107x695713864410845800/Projeto_%20Cabueta%20-%20Plataforma%20de%20Den%C3%BAncias%20de%20Descarte%20Irregular%20de%20Lixo%20em%20Recife.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 23:58:00",
    "slug": "rel-prop-0001",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0002",
    "title": "Integracoes Estrategicas Gymtime Saude",
    "sw_nome": "Integracoes Estrategicas Gymtime Saude",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Empresa / Startup (41111651000136)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": "41111651000136",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente não existe nenhuma ferramenta de engajamento e acompanhamento continuo do tratamento de HAS e DM, as Estratégias são majoritariamente offline e manuais com programas de acompanhamento pessoais. \nAs Doenças Crônicas Não Transmissíveis (DCNT) representam um dos principais desafios de saúde pública no Brasil e no mundo. De acordo com a Organização Mundial da Saúde (OMS), essas doenças foram responsáveis por aproximadamente 70% das mortes globais em 2019. Entre as DCNTs, destacam-se a Hipertensão Arterial Sistêmica (HAS) e o Diabetes Mellitus (DM), condições crônicas que podem resultar em complicações graves e possuem diversos fatores de risco associados. No Recife, estão cadastrados na Estratégia de Saúde da Família (ESF) mais de 200 mil pessoas para a condição de hipertensão e mais de 90 mil para DM. Um dos principais obstáculos para o controle dessas doenças é a baixa adesão do paciente diagnosticado com hipertensão ao tratamento medicamentoso e não medicamentoso. Estima-se que apenas 30% dos pacientes diagnosticados consigam manter controlada a HAS. Além disso, observou-se que no segundo quadrimestre de 2024, apenas 21% das pessoas cadastradas com a condição de DM na ESF do Recife, tiveram ao menos uma consulta, nesse período. Por isso, como uma das barreiras para o cuidado da pessoa com DM, nota-se o acompanhamento insuficiente das complicações do DM, principalmente, da neuropatia diabética (pé diabético). Exames periódicos dos pés permitem a identificação precoce e o tratamento oportuno das alterações, evitando, sobretudo, amputações dos membros.\nA hipertensão arterial (HA) e o diabetes mellitus (DM) são doenças crônicas que afetam um número crescente de pessoas, impactando significativamente sua qualidade de vida. O controle eficaz dessas condições exige um compromisso contínuo com o autocuidado, incluindo monitoramento regular, adesão ao tratamento e adoção de hábitos saudáveis. No entanto, diversos fatores dificultam esse processo, criando um cenário complexo e desafiador.\nO desafio consiste em desenvolver uma estratégia inovadora que permita que o profissional de saúde conheça a população hipertensa e diabética, de acordo com o Risco cardiovascular e nível do MACC (Modelo de Atenção às Condições Crônicas), o status da resposta terapêutica (controlado e não controlado) e o apoio ao autocuidado de pessoas com hipertensão e/ou diabetes, facilitando sua adesão ao tratamento e o acompanhamento realizado pelas equipes de saúde. Essa estratégia deve ser viável para aplicação na Atenção Básica. \nAtualmente as equipes contam com informações fragmentadas em vários sistemas de informação como PEC (Prontuário Eletrônico do Cidadão) e-SUS APS, e-Ggestor, entre outros, além da falta de relatórios com a Estratificação de Risco, nível do MACC e controle terapêutico (atingimento das metas estabelecidas). \nO acompanhamento é predominantemente prescricional, com dispensa de receita medicamentosa e orientações sobre mudança de hábitos, sem considerar a participação ativa dos usuários e suas famílias no cuidado em saúde e sem considerar ainda a motivação do paciente para aderir ao tratamento. Isso distorce a visão sobre serviço e compartilhamento de responsabilidades na jornada de cuidados em HA.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750474562418x596336100753606800/Integracoes_Estrategicas_Gymtime_Saude.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750474564357x552809352842835760/Proposta_Gymtime_SaudeDigital_Completa.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750474566303x248598023549420740/CUIDAA.png"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 23:58:00",
    "slug": "rel-prop-0002",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0003",
    "title": "DOCUMENTACAO TECNICA CONECTAI SAUDE Proposta para o Edital de Inovacao em Saude Publica",
    "sw_nome": "DOCUMENTACAO TECNICA CONECTAI SAUDE Proposta para o Edital de Inovacao em Saude Publica",
    "pf_nome": "Proponente / Autor (Belo Jardim)",
    "Nome_fantasia": "Equipe DOCUMENTACAO (Belo Jardim)",
    "Resp_nome": "Proponente / Autor (Belo Jardim)",
    "cidade": "Belo Jardim",
    "CNPJ": null,
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente, os cidadãos usuários do SUS, especialmente aqueles com doenças crônicas como hipertensão e diabetes, enfrentam grandes dificuldades no acompanhamento de sua própria saúde. A comunicação com os serviços de saúde é limitada, muitas vezes restrita a ligações telefônicas, deslocamentos presenciais ou falta total de acompanhamento entre consultas. Isso gera esquecimento de consultas, perda de prazos para exames, baixa adesão ao tratamento e, consequentemente, agravamento das condições de saúde.\n\nDo lado dos profissionais de saúde da atenção primária, o acompanhamento dos pacientes é feito de forma manual, utilizando fichas, planilhas e registros pouco integrados, o que dificulta o acesso rápido às informações do paciente, aumenta o retrabalho e limita a capacidade de monitorar e priorizar os casos que realmente precisam de maior atenção. Muitas vezes, o profissional não sabe se o paciente realizou o exame, compareceu à consulta ou manteve o controle da sua condição.\n\nPara a Secretaria Municipal de Saúde, o desafio está na falta de ferramentas tecnológicas acessíveis que permitam monitorar os indicadores populacionais em tempo real, planejar ações preventivas, reduzir agravos e otimizar os recursos da saúde pública. A ausência de dados atualizados e organizados compromete a gestão eficiente e a tomada de decisão.\n\nNo geral, o cenário atual é marcado pela baixa tecnologia, excesso de processos manuais, falta de integração de dados, dificuldade na comunicação com os pacientes e ausência de ferramentas que fortaleçam a atenção primária e a gestão da saúde pública.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750474315376x208478804583236200/DOCUMENTACAO-TECNICA-CONECTAI-SAUDE-Proposta-para-o-Edital-de-Inovacao-em-Saude-Publica.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 23:53:00",
    "slug": "rel-prop-0003",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0004",
    "title": "coletai",
    "sw_nome": "coletai",
    "pf_nome": "Proponente / Autor (Paulista)",
    "Nome_fantasia": "Equipe coletai (Paulista)",
    "Resp_nome": "Proponente / Autor (Paulista)",
    "cidade": "Paulista",
    "CNPJ": null,
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "1. Cidadãos\nDenúncias de descarte irregular:\nRegistram por telefone, e-mail e Frequentemente, essas denúncias não têm resposta rápida ou não são atendidas.\n\nDescarte de resíduos domésticos ou recicláveis:\nDepósito em pontos de coleta improvisados, sem garantia de que os resíduos serão manejados adequadamente.\n\n2. Órgãos Públicos\n\nColeta e fiscalização:\nUso de sistemas internos muitas vezes antiquados e desconectados da realidade da população.\nInsuficiência de ferramentas de monitoramento para identificar locais críticos de descarte irregular.\n\nGestão de dados:\nDados dispersos ou inexistentes, dificultando o planejamento e a criação de políticas públicas eficientes.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750474319010x354299451487820600/Informa%C3%A7%C3%B5es-coletai.rar"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 23:52:00",
    "slug": "rel-prop-0004",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0005",
    "title": "Elucidar",
    "sw_nome": "Elucidar",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe Elucidar (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "Atualmente, estudantes com deficiência visual dependem da interferência direta de terceiros, como professores, colegas ou monitores, para compreender plenamente os conteúdos apresentados em sala de aula, o que compromete significativamente sua autonomia no processo de aprendizagem. Para que esses conteúdos sejam acessíveis, é necessário que o professor ou monitor adapte ou descreva verbalmente todo o material visual, o que exige tempo e preparo adicionais, nem sempre viáveis na rotina escolar, especialmente em turmas grandes. Como consequência, muitos alunos acabam ficando para trás.\nAlém disso, esses estudantes enfrentam a limitação das tecnologias assistivas disponíveis atualmente, que em sua maioria apenas descrevem imagens estáticas, sem operar em tempo real, ou apresentam custos elevados, tornando-se inacessíveis para a maior parte das escolas públicas e das famílias de baixa renda. Com isso, muitos continuam sem acesso efetivo ao conteúdo visual das aulas, o que afeta diretamente seu desempenho escolar, autoestima e permanência na escola.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750473918030x709496974022580700/C%C3%A1lculo%20de%20custos%20Elucidar-2.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 23:49:00",
    "slug": "rel-prop-0005",
    "isSegundaFase": false,
    "evaluationIds": [
      "rel_av_0037",
      "rel_av_0072",
      "rel_av_0091",
      "rel_av_0105",
      "rel_av_0109"
    ],
    "operationIds": [
      "rel_op_0439",
      "rel_op_0443",
      "rel_op_0456",
      "rel_op_0469",
      "rel_op_0517"
    ]
  },
  {
    "id": "rel_prop_0006",
    "title": "COLI",
    "sw_nome": "COLI",
    "pf_nome": "Proponente / Autor (Jaboatão dos Guararapes)",
    "Nome_fantasia": "Empresa / Startup (60605418000154)",
    "Resp_nome": "Proponente / Autor (Jaboatão dos Guararapes)",
    "cidade": "Jaboatão dos Guararapes",
    "CNPJ": "60605418000154",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "Hoje, o principal recurso utilizado é a bengala branca, que só detecta obstáculos até a altura da cintura. Para evitar perigos aéreos, o usuário depende da memória dos trajetos, ajuda de terceiros ou arrisca impactos físicos. Isso limita a mobilidade, aumenta a insegurança e reduz a independência — especialmente em áreas urbanas desorganizadas, com infraestrutura precária e obstáculos fora do campo tátil da bengala.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750472365209x764058976607949700/COLI%20-Pitch.pptx%20%282%29.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 23:19:00",
    "slug": "rel-prop-0006",
    "isSegundaFase": false,
    "evaluationIds": [
      "rel_av_0036",
      "rel_av_0076",
      "rel_av_0084",
      "rel_av_0104",
      "rel_av_0108"
    ],
    "operationIds": [
      "rel_op_0438",
      "rel_op_0444",
      "rel_op_0463",
      "rel_op_0476",
      "rel_op_0507"
    ]
  },
  {
    "id": "rel_prop_0007",
    "title": "Preços totais   Página1",
    "sw_nome": "Preços totais   Página1",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe Preços (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "- Uso de bengalas ou cães-guia para navegação em calçadas e travessias.\n- Apoio de terceiros (pedestres ou agentes de trânsito) para atravessar ruas movimentadas.\n- Aplicativos de celular com GPS (como o Lazarillo ou Be My Eyes), que fornecem orientação geral.\n- Semáforos sonoros, quando disponíveis (mas são raros e mal distribuídos).\n- Memorização de trajetos e pontos de referência fixos — o que limita a autonomia em trajetos desconhecidos.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750472073533x253436043732819800/Pre%C3%A7os%20totais%20-%20P%C3%A1gina1.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750472075141x822579751379818500/CAIS.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750472144879x237505689607943260/CAIS%20%281%29.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 23:16:00",
    "slug": "rel-prop-0007",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0008",
    "title": "Técnica SOUV — UpSaude",
    "sw_nome": "Técnica SOUV — UpSaude",
    "pf_nome": "Proponente / Autor (Campina Grande)",
    "Nome_fantasia": "Empresa / Startup (30074093000160)",
    "Resp_nome": "Proponente / Autor (Campina Grande)",
    "cidade": "Campina Grande",
    "CNPJ": "30074093000160",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente o acompanhamento longitudinal de pacientes baseado em ciência de dados é quase inexistente principalmente no SUS. Hoje o acompanhamento é feito de forma periódica e pouco efetiva. Aprofundando indicadores negativos de saúde.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750471205115x416385098874367800/Proposta%20T%C3%A9cnica%20SOUV%20%E2%80%94%20UpSaude.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 23:00:00",
    "slug": "rel-prop-0008",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0009",
    "title": "COLI",
    "sw_nome": "COLI",
    "pf_nome": "Proponente / Autor (Jaboatão dos Guararapes)",
    "Nome_fantasia": "Empresa / Startup (60605418000154)",
    "Resp_nome": "Proponente / Autor (Jaboatão dos Guararapes)",
    "cidade": "Jaboatão dos Guararapes",
    "CNPJ": "60605418000154",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "Hoje, o principal recurso utilizado é a bengala branca, que só detecta obstáculos até a altura da cintura. Para evitar perigos aéreos, o usuário depende da memória dos trajetos, ajuda de terceiros ou arrisca impactos físicos. Isso limita a mobilidade, aumenta a insegurança e reduz a independência — especialmente em áreas urbanas desorganizadas, com infraestrutura precária e obstáculos fora do campo tátil da bengala.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750470960419x972236245283866000/COLI%20-Pitch.pptx%20%282%29.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 23:01:00",
    "slug": "rel-prop-0009",
    "isSegundaFase": false,
    "evaluationIds": [
      "rel_av_0036",
      "rel_av_0076",
      "rel_av_0084",
      "rel_av_0104",
      "rel_av_0108"
    ],
    "operationIds": [
      "rel_op_0438",
      "rel_op_0444",
      "rel_op_0463",
      "rel_op_0476",
      "rel_op_0507"
    ]
  },
  {
    "id": "rel_prop_0010",
    "title": "Uso Exemplo01",
    "sw_nome": "Uso Exemplo01",
    "pf_nome": "Proponente / Autor (Aracaju)",
    "Nome_fantasia": "Equipe Uso (Aracaju)",
    "Resp_nome": "Proponente / Autor (Aracaju)",
    "cidade": "Aracaju",
    "CNPJ": null,
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "Atualmente, as pessoas com deficiência visual dependem de uma combinação de métodos e ferramentas para navegar e interagir com o mundo ao seu redor, cada um apresentando suas próprias limitações e desafios. A bengala é uma das ferramentas mais comuns e essenciais. Ela permite ao usuário detectar obstáculos imediatos, degraus, buracos e mudanças de textura no solo. No entanto, sua capacidade é limitada ao alcance físico do braço e da bengala, não fornecendo informações sobre objetos acima da cintura (como galhos baixos, toldos, ou prateleiras salientes em um hipermercado), nem sobre a natureza do obstáculo (é uma parede, uma pessoa, um lixo?). Além disso, a bengala não oferece orientação direcional para um destino específico ou informações contextuais sobre o ambiente. Os cães-guia são companheiros incríveis que oferecem um nível superior de segurança e confiança, sendo treinados para desviar de obstáculos, parar em calçadas e encontrar portas ou assentos. Contudo, seu acesso é extremamente limitado devido ao alto custo, aos longos períodos de treinamento e às restrições de disponibilidade. A manutenção de um cão-guia exige tempo, dedicação e recursos financeiros consideráveis, e eles também não podem identificar objetos arbitrários ou interpretar sinalizações complexas. A assistência humana, seja de familiares, amigos ou até mesmo estranhos, é frequentemente crucial. Essa dependência, embora útil, pode gerar uma sensação de perda de independência e privacidade. A qualidade da assistência varia muito, e a disponibilidade nem sempre coincide com a necessidade do usuário, impedindo atividades espontâneas. Quanto à tecnologia de navegação existente, como aplicativos de GPS (ex: Google Maps), eles são amplamente utilizados, mas projetados principalmente para ambientes externos. Embora forneçam instruções de áudio para rotas, sua precisão e funcionalidade são severamente comprometidas em ambientes internos complexos, como hipermercados, shopping centers ou edifícios públicos, onde o sinal de GPS é fraco ou inexistente. Eles não oferecem micro-navegação (detalhes sobre obstáculos no caminho imediato, como carrinhos de compra, displays de produtos, ou pessoas), nem descrições ricas do ambiente interno. A memória e a familiaridade com o ambiente são estratégias valiosas para navegar em locais conhecidos, baseando-se em pontos de referência auditivos, táteis ou olfativos. No entanto, essa abordagem é ineficaz em locais novos ou desconhecidos e é facilmente comprometida por mudanças no layout do ambiente, como a realocação de móveis ou a introdução de novas exposições em uma loja. É nesse cenário de desafios e lacunas que o VisioWay emerge como uma solução transformadora. Atuando como uma extensão sensorial avançada, o VisioWay integra inteligência artificial, visão computacional e realidade aumentada para preencher as deficiências das ferramentas atuais e proporcionar um novo patamar de autonomia e segurança. Ao contrário da bengala, que possui um alcance limitado e não identifica a natureza dos objetos, o VisioWay utiliza a câmera do smartphone aliada ao poder da inteligência artificial para descrever o ambiente em tempo real. Isso significa que o usuário não apenas detecta um obstáculo, mas ouve \"Vejo uma prateleira com produtos à sua direita\" ou \"Há um grupo de pessoas em frente\". Essa capacidade de identificar e contextualizar objetos e cenários supera a limitação da bengala de fornecer apenas informações básicas sobre a presença de barreiras. Adicionalmente, a interação por voz permite que o usuário faça perguntas específicas como \"O que há na minha frente?\" ou \"Qual o caminho para a seção de laticínios?\", obtendo respostas auditivas detalhadas, eliminando a necessidade de assistência humana constante para obter informações visuais. Em contraste com os cães-guia, cujo acesso é restrito e o custo elevado, o VisioWay oferece uma solução acessível em um dispositivo portátil amplamente disponível. Embora não substitua a conexão única entre um cão-guia e seu usuário, ele democratiza o acesso a uma forma de assistência inteligente, sem as barreiras financeiras e logísticas. Sua capacidade de identificar objetos arbitrários e interpretar informações (como um \"caixa eletrônico\" ou uma \"saída de emergência\") supera as limitações de um cão-guia em termos de cognição e interpretação de contextos complexos. A dependência da assistência humana é mitigada pela capacidade do VisioWay de ser um guia constante e disponível. O usuário pode iniciar a navegação, obter descrições ambientais ou fazer perguntas a qualquer momento, sem precisar depender da presença ou da disposição de terceiros, recuperando sua privacidade e autonomia. A qualidade da \"orientação\" é padronizada e otimizada por algoritmos, superando a variabilidade da assistência humana. A maior lacuna que o VisioWay busca resolver é a navegação precisa em ambientes internos e externos, superando as limitações do GPS tradicional. Utilizando a câmera para o rastreamento e, futuramente, potencialmente integrando dados de posicionamento indoor (como Wi-Fi RTT, BLE beacons ou Persistent Cloud Anchors, dependendo da evolução da tecnologia e mapeamento dos locais), o VisioWay pode oferecer orientação passo a passo com precisão milimétrica onde o GPS falha. Para usuários com baixa acuidade visual, setas virtuais são projetadas na tela, indicando visualmente a direção a seguir. Para usuários com nenhuma acuidade visual, instruções de áudio claras e contextuais guiam o caminho, como \"Vire à direita no próximo corredor\", \"Você está a cinco metros do caixa\" ou \"Caminhe reto por dez passos\". Essa micro-navegação inclui alertas sobre obstáculos específicos no caminho imediato (como um carrinho abandonado ou uma pilastra), algo que o GPS tradicional simplesmente não consegue. Por fim, o VisioWay não se limita à familiaridade. Ele empodera o usuário a explorar ambientes novos e complexos com confiança, fornecendo o contexto necessário e a orientação precisa para superar a desorientação e a ansiedade associadas a lugares desconhecidos. A integração de reconhecimento de voz, visão computacional e realidade aumentada em uma única plataforma reduz a fadiga cognitiva, pois o usuário recebe informações sintetizadas e relevantes, em vez de ter que processar múltiplos estímulos sensoriais limitados de forma isolada. Com o VisioWay, o desafio de navegar e compreender o ambiente se transforma em uma experiência de maior liberdade e independência.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750470345841x435166539466363500/Uso-Exemplo01.jpeg",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750470345802x805039366005559300/Demo.mp4",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750470347566x920042572338045800/Uso-Exemplo02.jpeg",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750470349479x791713514486167500/Cronograma%20de%20Desembolso%20-%20VisioWay%20-%20Desenvolva%20uma%20planilha%20de%20gastos%20considerando%20os....pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750470372955x339435835350459400/PD%20-%20VisioWay.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 22:49:00",
    "slug": "rel-prop-0010",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0011",
    "title": "Qrcode Notion",
    "sw_nome": "Qrcode Notion",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe Qrcode (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "A pessoa com diabetes e/ou hipertensão não possui um acompanhamento ou incentivo para mudança de hábitos, como alimentação ou até mesmo exercícios, com pouco conhecimento sobre a própria comorbidade e profissionais possuindo pouco conhecimento sobre o estado de seus pacientes",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750468509354x781780805368377200/Qrcode%20Notion.png",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750468512679x713389268284623200/QRcode%20Figma.png",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750468517859x592072915164837400/Pitch.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750468540960x208646389673032840/Captura%20de%20tela%202025-06-20%20211836.png",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750468564645x356040889491696450/Wireframe_Desktop_Cuida.png"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 22:16:00",
    "slug": "rel-prop-0011",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0012",
    "title": "Planejamento Minha Rua Limpa",
    "sw_nome": "Planejamento Minha Rua Limpa",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe Planejamento (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Atualmente, o cidadão recifense lida com o descarte de resíduos de forma improvisada e desinformada. Muitos recorrem a carroceiros, deixam itens na calçada ou simplesmente não sabem onde ou como descartar corretamente, o que contribui para os mais de 1.700 pontos críticos de lixo irregular espalhados pela cidade. As iniciativas existentes, como Conecta Recife, Cataki e pontos sustentáveis, são úteis, mas fragmentadas e pouco acessíveis ao público em geral. Além disso, a fiscalização é lenta, com pouca tecnologia e alta taxa de impunidade. É nesse cenário que o Minha Rua Limpa se destaca: ao integrar e aprimorar essas iniciativas existentes, a plataforma centraliza agendamentos, denúncias e educação ambiental em um único lugar. Com diferenciais como gamificação, engajamento comunitário e análise de dados em tempo real, oferecemos não só uma resposta mais eficiente ao problema, mas também um incentivo contínuo à participação ativa do cidadão.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750468982082x622091174837286700/Planejamento%20Minha%20Rua%20Limpa.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750468983773x774284007799579000/Pesquisa%20com%20us%C3%A1rios-%20Minha%20Rua%20Limpa.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750468987417x850053511148926100/Minha%20rua%20limpa%20pitch.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 22:24:00",
    "slug": "rel-prop-0012",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0013",
    "title": "BoraVer",
    "sw_nome": "BoraVer",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe BoraVer (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "Algumas soluções atuais para o desafio são:\n\n- Leitores de tela de computador, como JAWS, NVDA e VoiceOver\n- Cães-guia para auxílio na locomoção e auxílio em tarefas diárias\n- Textos e livros em Braille\n- Ferramentas educacionais adaptadas, como softwares de leitura de livros e materiais acadêmicos digitalizados\n\nApesar dos avanços nas tecnologias de assistência, usuários com deficiência visual ainda enfrentam muitos obstáculos em navegação e no uso de dispositivos, além das soluções possuírem um custo elevado.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750467599053x667126262529939800/BoraVer%20-%20Documentac%CC%A7a%CC%83o.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 22:01:00",
    "slug": "rel-prop-0013",
    "isSegundaFase": false,
    "evaluationIds": [
      "rel_av_0023",
      "rel_av_0031",
      "rel_av_0075",
      "rel_av_0099",
      "rel_av_0101"
    ],
    "operationIds": [
      "rel_op_0446",
      "rel_op_0449",
      "rel_op_0467",
      "rel_op_0515",
      "rel_op_0545"
    ]
  },
  {
    "id": "rel_prop_0014",
    "title": "BoraVer",
    "sw_nome": "BoraVer",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe BoraVer (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "g",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750467364591x239609361022935740/BoraVer%20-%20Documentac%CC%A7a%CC%83o.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 21:56:00",
    "slug": "rel-prop-0014",
    "isSegundaFase": false,
    "evaluationIds": [
      "rel_av_0023",
      "rel_av_0031",
      "rel_av_0075",
      "rel_av_0099",
      "rel_av_0101"
    ],
    "operationIds": [
      "rel_op_0446",
      "rel_op_0449",
      "rel_op_0467",
      "rel_op_0515",
      "rel_op_0545"
    ]
  },
  {
    "id": "rel_prop_0015",
    "title": "BoraVer",
    "sw_nome": "BoraVer",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe BoraVer (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "Algumas soluções atuais para o desafio são:\n\n- Leitores de tela de computador, como JAWS, NVDA e VoiceOver\n- Cães-guia para auxílio na locomoção e auxílio em tarefas diárias\n- Textos e livros em Braille\n- Ferramentas educacionais adaptadas, como softwares de leitura de livros e materiais acadêmicos digitalizados\n\nApesar dos avanços nas tecnologias de assistência, usuários com deficiência visual ainda enfrentam muitos obstáculos em navegação e no uso de dispositivos, além das soluções possuírem um custo elevado",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750467056569x384052981752392300/BoraVer%20-%20Documentac%CC%A7a%CC%83o.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 21:52:00",
    "slug": "rel-prop-0015",
    "isSegundaFase": false,
    "evaluationIds": [
      "rel_av_0023",
      "rel_av_0031",
      "rel_av_0075",
      "rel_av_0099",
      "rel_av_0101"
    ],
    "operationIds": [
      "rel_op_0446",
      "rel_op_0449",
      "rel_op_0467",
      "rel_op_0515",
      "rel_op_0545"
    ]
  },
  {
    "id": "rel_prop_0016",
    "title": "de projeto (1)",
    "sw_nome": "de projeto (1)",
    "pf_nome": "Proponente / Autor (recife)",
    "Nome_fantasia": "Empresa / Startup (57317628000132)",
    "Resp_nome": "Proponente / Autor (recife)",
    "cidade": "recife",
    "CNPJ": "57317628000132",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente, o acompanhamento é feito de forma fragmentada, manual e reativa. Os profissionais precisam consultar múltiplos sistemas que não se comunicam, recorrendo a planilhas de controlo paralelas e anotações em papel. O cuidado é predominantemente prescritivo, focado na entrega de receitas, e não no acompanhamento contínuo. As principais dificuldades são: a falta de uma visão unificada e estratificada da sua população de risco, a sobrecarga de trabalho manual para consolidar informações e a enorme dificuldade em monitorar e influenciar a adesão ao tratamento quando o paciente está fora da unidade de saúde.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750460679733x619765291459225700/Proposta%20de%20projeto%20%281%29.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 20:07:00",
    "slug": "rel-prop-0016",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0017",
    "title": "VISAO E RITMO",
    "sw_nome": "VISAO E RITMO",
    "pf_nome": "Proponente / Autor (Teresina)",
    "Nome_fantasia": "Equipe VISAO (Teresina)",
    "Resp_nome": "Proponente / Autor (Teresina)",
    "cidade": "Teresina",
    "CNPJ": null,
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "Atualmente, as pessoas com deficiência visual dependem sobretudo da combinação de bengala e, quando disponível, de cão‑guia para detectar obstáculos imediatos, além de semáforos sonoros em cruzamentos principais que emitem sinais intermitentes para atravessar ruas. Muitas recorrem também a aplicativos de navegação genéricos (como Google Maps ou Waze) que fornecem orientações por voz, mas com baixa granularidade em ruas secundárias e sem indicação de pontos de interesse locais em tempo real. Alguns utilizam serviços de videochamada, como Be My Eyes ou Aira, para obter ajuda remota, mas isso requer boa conexão à internet e, em geral, envolve custos de assinatura. Esses métodos apresentam problemas de precisão posicional, ausência de informação contextual (nome de ruas, sinalizações temporárias, estado das calçadas), cobertura limitada às áreas centrais e falta de atualização imediata sobre obras ou obstáculos pontuais, o que compromete a autonomia, a segurança e a rapidez do deslocamento em ambientes urbanos mais complexos.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750465245242x627984730452129300/PROPOSTA%20VISAO%20E%20RITMO.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 21:28:00",
    "slug": "rel-prop-0017",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0018",
    "title": "Esquemático",
    "sw_nome": "Esquemático",
    "pf_nome": "Proponente / Autor (João Pessoa)",
    "Nome_fantasia": "Equipe Esquemático (João Pessoa)",
    "Resp_nome": "Proponente / Autor (João Pessoa)",
    "cidade": "João Pessoa",
    "CNPJ": null,
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente, o cidadão com Hipertensão Arterial Sistêmica (HAS) e/ou Diabetes Mellitus (DM) enfrenta um cenário fragmentado e reativo no cuidado à sua saúde, especialmente no âmbito da Atenção Básica do SUS. Veja abaixo como ele tenta resolver esse desafio hoje e quais são os principais obstáculos:\nComo o cidadão lida hoje com o desafio:\n1.\tBusca espontânea por atendimento na Unidade de Saúde da Família (USF)\no\tGeralmente quando há algum sintoma ou necessidade de renovar receita.\no\tConsultas espaçadas e, muitas vezes, com longos intervalos entre retornos.\n2.\tAcompanhamento em grupos de hipertensos/diabéticos (quando existentes)\no\tMuitos territórios não têm estrutura contínua para grupos educativos ou suporte multiprofissional.\n3.\tRecebe orientações pontuais nas consultas\no\tMédicos e enfermeiros orientam sobre medicação, alimentação, exercícios, mas sem acompanhamento do dia a dia do paciente.\n4.\tUso próprio de medidor de pressão ou glicemia (em casos com mais consciência e recursos)\no\tEm geral, sem registro sistemático ou retorno dessas informações à equipe de saúde.\n5.\tContato eventual com o ACS\no\tOs Agentes Comunitários de Saúde visitam o domicílio de forma pontual, mas enfrentam limitação de tempo e grande número de famílias a acompanhar.\n\nHoje, o cidadão tenta resolver o desafio por conta própria, com pouco apoio contínuo da rede de saúde, o que resulta em baixa adesão ao tratamento, descontrole clínico e maior risco de complicações evitáveis. A ausência de canais proativos, simples e personalizados impede o acompanhamento efetivo da sua jornada de cuidado.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750458709990x346935034034955260/Modelo%20Esquem%C3%A1tico.docx"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 19:32:00",
    "slug": "rel-prop-0018",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0019",
    "title": "Engaja Recife   EITA v1",
    "sw_nome": "Engaja Recife   EITA v1",
    "pf_nome": "Proponente / Autor (São Paulo)",
    "Nome_fantasia": "Empresa / Startup (33210027000168)",
    "Resp_nome": "Proponente / Autor (São Paulo)",
    "cidade": "São Paulo",
    "CNPJ": "33210027000168",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Hoje, em Recife, pacientes com hipertensão e DM2 contam com o acompanhamento das Unidades de Saúde da Família, acesso a medicamentos pelo SUS, realização de exames e uso de ferramentas como WhatsApp e Telessaúde Recife. No entanto, mesmo com essa estrutura, a adesão ao cuidado ainda é baixa: muitos pacientes deixam de comparecer às consultas, abandonam o tratamento medicamentoso ou não monitoram regularmente sua pressão e glicemia.\nAs equipes da Atenção Primária enfrentam limitações para acompanhar toda a população com condições crônicas. Os dados clínicos nem sempre estão organizados ou atualizados de forma integrada, dificultando a estratificação de risco e o planejamento das ações. Além disso, os registros ainda dependem, muitas vezes, de processos manuais ou não interoperáveis — o que compromete a continuidade do cuidado, especialmente na transição entre a APS e os níveis de atenção especializada.\nDo lado do cidadão, há barreiras como a baixa literacia em saúde, o pouco engajamento com o autocuidado, e a falta de uma experiência digital que o conecte ativamente ao seu plano de tratamento. Sem suporte estruturado, o cuidado segue fragmentado, reativo e limitado à presença física na UBS.\nEm resumo, embora Recife conte com iniciativas importantes, o modelo atual ainda não consegue garantir adesão sustentável nem transformar o paciente em protagonista do seu cuidado. Isso gera um ciclo de descontinuidade, piora dos desfechos clínicos e sobrecarga evitável do sistema de saúde.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750457756800x172440433108089100/Projeto%20Engaja%20Recife%20-%20EITA%20v1.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 19:17:00",
    "slug": "rel-prop-0019",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0020",
    "title": "Visus",
    "sw_nome": "Visus",
    "pf_nome": "Proponente / Autor (Goiana)",
    "Nome_fantasia": "Empresa / Startup (58600892000141)",
    "Resp_nome": "Proponente / Autor (Goiana)",
    "cidade": "Goiana",
    "CNPJ": "58600892000141",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "Atualmente, as pessoas com deficiência visual contam com soluções limitadas e, muitas vezes, inacessíveis financeiramente. As principais formas de locomoção e orientação são:\n\nUso de bengalas brancas tradicionais, que não oferecem informações sobre o ambiente, apenas ajudam a detectar obstáculos no chão.\n\nAuxílio de terceiros (familiares, amigos ou pessoas na rua), o que limita a autonomia.\n\nTecnologias assistivas caras, como bengalas eletrônicas, óculos inteligentes ou aplicativos baseados em inteligência artificial, que muitas vezes têm custo elevado e não estão disponíveis para a maioria da população.\n\nFalta de sinalização sonora nos espaços públicos, como em estações de transporte, prédios públicos e vias urbanas.\n\nFalta de integração de informações acessíveis em tempo real, como horários de ônibus, localização de pontos de referência ou alertas de segurança.\n\nEssas limitações tornam a mobilidade urbana para pessoas com deficiência visual insegura, imprevisível e dependente de outras pessoas, dificultando o exercício da cidadania plena e da inclusão social.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750450686316x423388821541273800/Projeto%20Visus.pptx",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750458443471x371717662217298600/Projeto_Visus_Resumo_e_Cronograma_MVP.docx",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750458447500x574460256248191100/Projeto_Visus_Viabilidade_Financeira.docx"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 19:27:00",
    "slug": "rel-prop-0020",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0021",
    "title": "Dashboard EITA RECIFE",
    "sw_nome": "Dashboard EITA RECIFE",
    "pf_nome": "Proponente / Autor (Rio de Janeiro)",
    "Nome_fantasia": "Equipe Dashboard (Rio de Janeiro)",
    "Resp_nome": "Proponente / Autor (Rio de Janeiro)",
    "cidade": "Rio de Janeiro",
    "CNPJ": null,
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente, o monitoramento de pacientes crônicos no SUS é feito de maneira:\nPassiva e intermitente – depende do comparecimento do paciente às consultas agendadas.\nManual e descentralizada – anotações físicas, fichas de papel, prontuários dispersos.\nSem ferramentas de comunicação contínua – ausência de canais digitais de orientação e apoio.\nBaixa capacidade de resposta a agravamentos – os sintomas só são detectados tardiamente, muitas vezes quando o paciente já está em situação de urgência/emergência.\nPrincipais dificuldades enfrentadas:\nAltas taxas de absenteísmo: segundo o Conasems, até 25% das consultas de rotina são perdidas.\nFalta de controle clínico: muitos pacientes não monitoram pressão ou glicemia regularmente.\nSobrecarga das equipes de saúde: limita a capacidade de visitas domiciliares e controle individualizado.\nDesconexão entre paciente e sistema de saúde: o cuidado não é contínuo nem proativo.\nConsequência: gastos elevados com internações evitáveis, agravamento de doenças crônicas, mortalidade precoce e queda na qualidade de vida da população.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750457634904x820406218239152500/Dashboard%20EITA%20RECIFE.jpeg"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 19:16:00",
    "slug": "rel-prop-0021",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0022",
    "title": "orcamento mvp guia urbano",
    "sw_nome": "orcamento mvp guia urbano",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Empresa / Startup (57124614000100)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": "57124614000100",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "Atualmente, pessoas cegas enfrentam diversos desafios para se deslocar com autonomia:\n\nFalta de informações acessíveis sobre a acessibilidade das rotas e dos espaços públicos;\nInsegurança ao sair de casa devido a buracos, obstáculos, postes e carros nas calçadas;\nAusência de audiodescrição da cidade em tempo real e de forma sensível;\nFalta de recursos que integrem mobilidade, cultura e informação urbana;\nDependência de terceiros para se localizar e se orientar, comprometendo sua independência;\nEvitam visitar lugares desconhecidos por receio de barreiras no caminho;\nFrequentemente saem acompanhados por assistentes e deixam de circular em áreas sem garantias de acessibilidade.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750456598426x323756675113112000/orcamento_mvp_guia_urbano.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750456603948x275961096335295400/DESAFIO4_EITA_enkode.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 18:58:00",
    "slug": "rel-prop-0022",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0023",
    "title": "orcamento mvp guia urbano",
    "sw_nome": "orcamento mvp guia urbano",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Empresa / Startup (47857616000147)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": "47857616000147",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "Atualmente, pessoas cegas enfrentam muitos desafios para se deslocar com autonomia:\n\nFalta de informações acessíveis sobre a acessibilidade das rotas e dos espaços públicos;\nInsegurança ao sair de casa por buracos, obstáculos, postes, carros estacionados nas calçadas, etc.;\nFalta de recursos integrados que unam informação urbana, mobilidade e cultura;\nAusência de audiodescrição da cidade em tempo real e de forma sensível;\nDependência de terceiros para se localizar e se orientar — o que compromete sua independência.\n\nAs pessoas cegas acabam dependendo de assistência por parte, geralmente da família, evitam sair sozinhos e para lugares desconhecidos e tendo sua vivência na cidade restrita. Além de evitar pedir ajuda, especialmente no processo de aceitação da perda da visão. Alguns enfrentam e enfrentaram situações constragedoras ao pedir ou precisar de ajuda.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750455165213x155589788604445060/orcamento_mvp_guia_urbano.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750455168630x359640648830681800/DESAFIO4_EITA_enkode.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 18:38:00",
    "slug": "rel-prop-0023",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0024",
    "title": "Detalhamento da proposta",
    "sw_nome": "Detalhamento da proposta",
    "pf_nome": "Proponente / Autor (Vitória)",
    "Nome_fantasia": "Empresa / Startup (48612137000123)",
    "Resp_nome": "Proponente / Autor (Vitória)",
    "cidade": "Vitória",
    "CNPJ": "48612137000123",
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Atualmente, o enfrentamento é reativo e pouco eficiente. A gestão depende de denúncias informais, rondas presenciais, mapeamento manual e uma fiscalização limitada, sem integração tecnológica. Isso gera um ciclo de limpa, acumula, limpa novamente, sem atacar as causas. As principais dificuldades são:\n- Falta de rastreabilidade da origem dos resíduos;\n- Baixa capacidade de flagrante e autuação;\n- Alto custo operacional com remoções frequentes;\n- Falta de dados para planejamento inteligente da coleta e da prevenção;\n- Desconexão entre quem gera resíduos e quem poderia reaproveitá-los (cooperativas, projetos, economia circular).",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750452453189x438038947338138940/Detalhamento%20da%20proposta.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 17:48:00",
    "slug": "rel-prop-0024",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0025",
    "title": "TCX  e.i.t.a! Recife    Desafio 2 Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade (2)",
    "sw_nome": "TCX  e.i.t.a! Recife    Desafio 2 Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade (2)",
    "pf_nome": "Proponente / Autor (Belo Horizonte)",
    "Nome_fantasia": "Empresa / Startup (44154784000188)",
    "Resp_nome": "Proponente / Autor (Belo Horizonte)",
    "cidade": "Belo Horizonte",
    "CNPJ": "44154784000188",
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Atualmente, o enfrentamento do desafio relacionado ao descarte irregular de resíduos na cidade do Recife é realizado de forma predominantemente manual, reativa e pouco eficiente. A gestão desse problema é conduzida por órgãos como a Secretaria de Limpeza Urbana, a Guarda Municipal, a Fiscalização Urbana e a CTTU, que atuam por meio de mapeamentos manuais dos pontos críticos, rondas periódicas, presença física de agentes em campo e ações desencadeadas a partir de denúncias da população.\n\nEsse modelo de atuação apresenta limitações significativas, especialmente pela ausência de soluções tecnológicas capazes de oferecer monitoramento contínuo e rastreabilidade eficiente. A fiscalização depende, majoritariamente, da atuação presencial dos agentes e da constatação flagrante do ato de descarte, o que limita sua abrangência e efetividade, considerando a existência de aproximadamente 1.700 pontos críticos espalhados pela cidade.\nUma das maiores dificuldades enfrentadas reside na incapacidade de rastrear a origem dos resíduos descartados. Na maioria dos casos, quando o descarte é realizado por pessoas físicas, carroceiros, pequenas obras ou domicílios, e não há apreensão do veículo ou identificação direta do responsável, torna-se praticamente impossível aplicar as sanções previstas. Esse cenário gera um ambiente de impunidade, que, por sua vez, estimula a reincidência da prática.\nAlém disso, a falta de integração de informações entre os diferentes órgãos envolvidos na gestão urbana e ambiental compromete a eficácia das ações. A inexistência de ferramentas de análise de dados e monitoramento preditivo impede a adoção de estratégias preventivas, tornando a atuação essencialmente corretiva e onerosa. Consequentemente, há um aumento significativo nos custos operacionais da prefeitura, que precisa realizar múltiplas remoções dos mesmos pontos ao longo do dia, sem que haja uma solução definitiva para a causa do problema.\n\nDiante desse contexto, fica evidente que o modelo atual não é sustentável nem eficiente para enfrentar a complexidade do descarte irregular de resíduos. A implementação de uma solução tecnológica, como a proposta pela TCX, baseada em visão computacional, Internet das Coisas (IoT) e inteligência artificial, representa uma oportunidade concreta de transformar esse cenário. A proposta permitirá à gestão pública migrar de um modelo reativo para um modelo preditivo, eficiente e alinhado às práticas de cidades inteligentes, proporcionando benefícios tanto operacionais quanto ambientais e sociais.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750449524878x610550719141717200/Apresenta%C3%A7%C3%A3o%20TCX%20%20e.i.t.a%21%20Recife%20%20-%20Desafio%202%20Como%20otimizar%20as%20t%C3%A9cnicas%20de%20monitoramento%20e%20fiscaliza%C3%A7%C3%A3o%20para%20inibir%20os%20pontos%20de%20descarte%20irregular%20de%20res%C3%ADduos%20na%20cidade%20%282%29.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 17:02:00",
    "slug": "rel-prop-0025",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0026",
    "title": "Detalhamento da proposta",
    "sw_nome": "Detalhamento da proposta",
    "pf_nome": "Proponente / Autor (Vitória)",
    "Nome_fantasia": "Empresa / Startup (48612137000123)",
    "Resp_nome": "Proponente / Autor (Vitória)",
    "cidade": "Vitória",
    "CNPJ": "48612137000123",
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Atualmente, o enfrentamento é reativo e pouco eficiente. A gestão depende de denúncias informais, rondas presenciais, mapeamento manual e uma fiscalização limitada, sem integração tecnológica. Isso gera um ciclo de limpa, acumula, limpa novamente, sem atacar as causas. As principais dificuldades são:\nFalta de rastreabilidade da origem dos resíduos;\nBaixa capacidade de flagrante e autuação;\nAlto custo operacional com remoções frequentes;\nFalta de dados para planejamento inteligente da coleta e da prevenção;\nDesconexão entre quem gera resíduos e quem poderia reaproveitá-los (cooperativas, projetos, economia circular).",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750451620851x687224338399618600/Detalhamento%20da%20proposta.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 17:33:00",
    "slug": "rel-prop-0026",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0027",
    "title": "Kali",
    "sw_nome": "Kali",
    "pf_nome": "Proponente / Autor (recife)",
    "Nome_fantasia": "Empresa / Startup (33460107000171)",
    "Resp_nome": "Proponente / Autor (recife)",
    "cidade": "recife",
    "CNPJ": "33460107000171",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente não há soluções disponíveis para estimular a autonomia e fortalecer a adesão ao tratamento de doenças crônicas.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750448470203x395362160200182000/proposta%20Kali.docx%20%281%29.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 16:50:00",
    "slug": "rel-prop-0027",
    "isSegundaFase": false,
    "evaluationIds": [
      "rel_av_0204",
      "rel_av_0250",
      "rel_av_0298",
      "rel_av_0321",
      "rel_av_0359"
    ],
    "operationIds": [
      "rel_op_0197",
      "rel_op_0230",
      "rel_op_0253",
      "rel_op_0298",
      "rel_op_0340"
    ]
  },
  {
    "id": "rel_prop_0028",
    "title": "TCX  e.i.t.a! Recife    Desafio 2 Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade (2)",
    "sw_nome": "TCX  e.i.t.a! Recife    Desafio 2 Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade (2)",
    "pf_nome": "Proponente / Autor (Belo Horizonte)",
    "Nome_fantasia": "Equipe TCX (Belo Horizonte)",
    "Resp_nome": "Proponente / Autor (Belo Horizonte)",
    "cidade": "Belo Horizonte",
    "CNPJ": null,
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Atualmente, o enfrentamento do desafio relacionado ao descarte irregular de resíduos na cidade do Recife é realizado de forma predominantemente manual, reativa e pouco eficiente. A gestão desse problema é conduzida por órgãos como a Secretaria de Limpeza Urbana, a Guarda Municipal, a Fiscalização Urbana e a CTTU, que atuam por meio de mapeamentos manuais dos pontos críticos, rondas periódicas, presença física de agentes em campo e ações desencadeadas a partir de denúncias da população.\nEsse modelo de atuação apresenta limitações significativas, especialmente pela ausência de soluções tecnológicas capazes de oferecer monitoramento contínuo e rastreabilidade eficiente. A fiscalização depende, majoritariamente, da atuação presencial dos agentes e da constatação flagrante do ato de descarte, o que limita sua abrangência e efetividade, considerando a existência de aproximadamente 1.700 pontos críticos espalhados pela cidade.\nUma das maiores dificuldades enfrentadas reside na incapacidade de rastrear a origem dos resíduos descartados. Na maioria dos casos, quando o descarte é realizado por pessoas físicas, carroceiros, pequenas obras ou domicílios, e não há apreensão do veículo ou identificação direta do responsável, torna-se praticamente impossível aplicar as sanções previstas. Esse cenário gera um ambiente de impunidade, que, por sua vez, estimula a reincidência da prática.\nAlém disso, a falta de integração de informações entre os diferentes órgãos envolvidos na gestão urbana e ambiental compromete a eficácia das ações. A inexistência de ferramentas de análise de dados e monitoramento preditivo impede a adoção de estratégias preventivas, tornando a atuação essencialmente corretiva e onerosa. Consequentemente, há um aumento significativo nos custos operacionais da prefeitura, que precisa realizar múltiplas remoções dos mesmos pontos ao longo do dia, sem que haja uma solução definitiva para a causa do problema.\nDiante desse contexto, fica evidente que o modelo atual não é sustentável nem eficiente para enfrentar a complexidade do descarte irregular de resíduos. A implementação de uma solução tecnológica, como a proposta pela TCX, baseada em visão computacional, Internet das Coisas (IoT) e inteligência artificial, representa uma oportunidade concreta de transformar esse cenário. A proposta permitirá à gestão pública migrar de um modelo reativo para um modelo preditivo, eficiente e alinhado às práticas de cidades inteligentes, proporcionando benefícios tanto operacionais quanto ambientais e sociais.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750449858313x330192806304419700/Apresenta%C3%A7%C3%A3o%20TCX%20%20e.i.t.a%21%20Recife%20%20-%20Desafio%202%20Como%20otimizar%20as%20t%C3%A9cnicas%20de%20monitoramento%20e%20fiscaliza%C3%A7%C3%A3o%20para%20inibir%20os%20pontos%20de%20descarte%20irregular%20de%20res%C3%ADduos%20na%20cidade%20%282%29.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 17:05:00",
    "slug": "rel-prop-0028",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0029",
    "title": "03 Lemobs no Jornal Nacional IA",
    "sw_nome": "03 Lemobs no Jornal Nacional IA",
    "pf_nome": "Proponente / Autor (Rio de Janeiro)",
    "Nome_fantasia": "Empresa / Startup (14457637000116)",
    "Resp_nome": "Proponente / Autor (Rio de Janeiro)",
    "cidade": "Rio de Janeiro",
    "CNPJ": "14457637000116",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Não aderindo ao tratamento ou aderindo de forma parcial\nEnfrentando filas para atendimentos de especialistas, muitas vezes apenas para rotina previsível (ex: renovação de receitas)\nEntrando na justiça para obter medicamentos\nSendo lembrado por familiares para aderir ao tratamento",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750441741562x185657357202357440/03_Lemobs%20no%20Jornal%20Nacional_IA.mp4",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750441741942x594873606217355100/02_MinhaSaude_Cases%20e%20Funcionalidades.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750441744274x614189650688985500/04_MinhaSaude_Petrobras_1_CPSI.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750441745065x819685788041608200/04_MinhaSaude_Petrobras_2_ContratoFornecimento.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750441746059x905746413717718300/04_MinhaSaude_Petrobras_3_AditivoContratoFornecimento.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750441746849x516142748067033100/04_MinhaSaude_Petrobras_4_Contrata%C3%A7%C3%A3o%20Direta%20pela%2013303.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750441747442x485347468424694340/05_MinhaSaude_SERPRO%20-%20Qualificados%20em%202o%20lugar%20nacional%20SaaS%20Sa%C3%BAde.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 14:51:00",
    "slug": "rel-prop-0029",
    "isSegundaFase": false,
    "evaluationIds": [
      "rel_av_0202",
      "rel_av_0246",
      "rel_av_0296",
      "rel_av_0318",
      "rel_av_0356"
    ],
    "operationIds": []
  },
  {
    "id": "rel_prop_0030",
    "title": "Salus Board",
    "sw_nome": "Salus Board",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe Salus (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "A prefeitura atua com unidades de saúde pela cidade para dar apoio aos pacientes.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750435792150x961398944055915700/Salus%20Board.png",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750435839403x765986258292745200/Salus%20%E2%80%93%20Tecnologia%20para%20o%20Autocuidado%20em%20Sa%C3%BAde%20P%C3%BAblica.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 15:08:00",
    "slug": "rel-prop-0030",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0031",
    "title": "Síntese   Projeto de Monitoramento e Apoio ao Autocuidado da pessoa com hipertensão e diabetes",
    "sw_nome": "Síntese   Projeto de Monitoramento e Apoio ao Autocuidado da pessoa com hipertensão e diabetes",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Empresa / Startup (58688481000150)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": "58688481000150",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente, os pacientes contam com informações fragmentada, de fontes não confiáveis e sem personalização para o suporte às mudanças de estilo de vida. Ele consegue informações por meio das Redes Sociais, pesquisas na WEB ou somente quando em contato com o médico, na consulta.\nAs equipes EMULTI's, por outro lado, resolvem o problema atual de filtração dos dados com interpretação manual, sacrificando eficiência e tempo.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750437059958x448870904662104640/S%C3%ADntese%20-%20Projeto%20de%20Monitoramento%20e%20Apoio%20ao%20Autocuidado%20da%20pessoa%20com%20hipertens%C3%A3o%20e%20diabetes.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750437064441x355307246621290300/Bibliografia%20-%20Projeto%20de%20Monitoramento%20e%20Apoio%20ao%20Autocuidado%20da%20pessoa%20com%20hipertens%C3%A3o%20e%20diabetes.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750437071676x574443858230678800/Gr%C3%A1fico%20de%20Conceitos%20-%20SIMADH%2B.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750437076142x876553436799359700/Tecnologias%20-%20Projeto%20de%20Monitoramento%20e%20Apoio%20ao%20Autocuidado%20da%20pessoa%20com%20hipertens%C3%A3o%20e%20diabetes.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750437079840x954866318732464000/Or%C3%A7amento%20-%20Projeto%20de%20Monitoramento%20e%20Apoio%20ao%20Autocuidado%20da%20pessoa%20com%20hipertens%C3%A3o%20e%20diabetes.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 13:43:00",
    "slug": "rel-prop-0031",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0032",
    "title": "Go Bee APIS EDITAL EITA RECIFE DESAFIO 1.docx assinado",
    "sw_nome": "Go Bee APIS EDITAL EITA RECIFE DESAFIO 1.docx assinado",
    "pf_nome": "Proponente / Autor (JOAO PESSOA)",
    "Nome_fantasia": "Empresa / Startup (50252623000120)",
    "Resp_nome": "Proponente / Autor (JOAO PESSOA)",
    "cidade": "JOAO PESSOA",
    "CNPJ": "50252623000120",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente, o cidadão com hipertensão, diabetes ou pré-diabetes atendido na Atenção Primária à Saúde (APS) do Recife enfrenta um conjunto de fragilidades estruturais e operacionais no cuidado contínuo. A gestão da própria saúde depende, majoritariamente, de ações presenciais fragmentadas, como consultas médicas esporádicas e visitas domiciliares realizadas pelos Agentes Comunitários de Saúde (ACS). Essa abordagem reativa, centrada no atendimento físico, apresenta diversas limitações:\n\n1. Acompanhamento irregular e baixa continuidade do cuidado\nMuitos usuários comparecem à Unidade de Saúde apenas quando já apresentam sintomas agravados. A ausência de um canal digital contínuo impede o monitoramento de rotina, dificultando a detecção precoce de descompensações clínicas. Isso resulta em:\n- maior risco de crises hipertensivas e hiperglicêmicas;\n- atraso em ajustes terapêuticos;\n- aumento de hospitalizações evitáveis.\n\n2. Baixa adesão ao tratamento e ao autocuidado\nA compreensão do tratamento e a motivação para manter hábitos saudáveis dependem, hoje, da memória do que foi dito em consultas rápidas e muitas vezes esporádicas. Sem reforço educativo, o paciente:\n- não segue corretamente a prescrição;\n- ignora sinais de alerta;\n- negligencia hábitos como alimentação balanceada e atividade física.\n\n3. Comunicação limitada com os profissionais de saúde\nUsuários não contam com canais rápidos e diretos para tirar dúvidas sobre medicamentos, sintomas ou resultados de exames. A comunicação é mediada por visitas ou idas à unidade, o que:\n- gera filas e sobrecarga;\n- dificulta a resposta tempestiva a situações clínicas leves;\n- reduz o vínculo e a confiança no sistema de saúde.\n\n4. Fragmentação de dados e ausência de gestão digital do cuidado\nA maior parte dos registros clínicos é feita de forma manual ou em sistemas que não se comunicam entre si. Isso compromete:\n- a visão longitudinal da saúde do paciente;\n- o planejamento baseado em dados;\n- a capacidade de estratificação de risco e priorização de atendimentos.\n\n5. Barreiras sociais, tecnológicas e cognitivas\nPessoas com baixa escolaridade, idosos e populações vulneráveis enfrentam obstáculos adicionais:\n- dificuldade em interpretar informações de saúde;\n- falta de familiaridade com plataformas digitais complexas;\n- baixa acessibilidade em sistemas padronizados para usuários letrados.\n\nEm resumo, o modelo atual é centrado na lógica da espera e da presença física, o que desresponsabiliza o usuário e sobrecarrega os profissionais da APS. A falta de tecnologias acessíveis, educativas e integradas reforça desigualdades no cuidado, limita a autonomia do cidadão e compromete os indicadores de saúde.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750433131334x966762221463939400/Go_Bee_APIS_-_EDITAL_EITA_RECIFE_DESAFIO_1.docx_assinado.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750433133214x949993331955169000/Go_Bee_APIS_-_anexo_I_-_Estado_da_Arte_assinado.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750433134666x159643333167494900/Go_Bee_Apis_-_Jornada_do_Usuario_assinado.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750433135251x616096356288472400/Pitch%20EITA%20Recife%202025%20-%20Desafio%201.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 12:31:00",
    "slug": "rel-prop-0032",
    "isSegundaFase": false,
    "evaluationIds": [
      "rel_av_0200",
      "rel_av_0244",
      "rel_av_0293",
      "rel_av_0315",
      "rel_av_0340"
    ],
    "operationIds": []
  },
  {
    "id": "rel_prop_0033",
    "title": "EITA Recife Sumario Proposta CFIT",
    "sw_nome": "EITA Recife Sumario Proposta CFIT",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Empresa / Startup (41645484000103)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": "41645484000103",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente, o enfrentamento do desafio de monitorar e apoiar o autocuidado de pessoas com hipertensão e diabetes em Recife é marcado por uma série de limitações que afetam tanto os profissionais de saúde quanto os próprios cidadãos. Do lado dos usuários, muitos enfrentam dificuldades para acessar informações, agendar consultas e exames, receber orientações personalizadas e garantir o acompanhamento regular do seu quadro clínico. A comunicação com as equipes de saúde, em geral, é esporádica e depende de visitas presenciais ou contatos telefônicos, o que não se mostra suficiente para promover o engajamento contínuo no autocuidado. Além disso, há obstáculos práticos, como a necessidade de deslocamento até as unidades de saúde, filas para atendimento, falta de integração entre serviços e, frequentemente, ausência de medicamentos na rede básica, o que pode levar ao abandono do tratamento ou à automedicação inadequada. Muitos pacientes relatam sentimentos de tensão e tristeza diante das exigências do autocuidado, além de dificuldades para incorporar mudanças de hábitos e monitorar sua condição de forma autônoma, especialmente quando não recebem suporte próximo da equipe de saúde.\n\nPara os profissionais, o cenário também é desafiador. As equipes de Atenção Básica, responsáveis pelo acompanhamento territorializado dos pacientes, frequentemente atuam de forma reativa, respondendo a demandas pontuais em vez de planejar ações preventivas e contínuas. O registro das informações ainda é, em muitos casos, manual ou fragmentado em diferentes sistemas, dificultando a visualização rápida do status clínico dos pacientes, a estratificação de riscos e a priorização das visitas domiciliares ou intervenções. A comunicação entre os membros da equipe é feita por reuniões, mensagens e discussões de casos, mas há pouca automação ou inteligência de dados para apoiar a tomada de decisão. Além disso, a integração entre os diferentes níveis de atenção e programas de saúde é limitada, o que pode resultar em duplicidade de esforços, perda de oportunidades de cuidado preventivo e falhas no acompanhamento longitudinal dos pacientes.\n\nEntre os principais problemas identificados, destacam-se gargalos de acesso ao rastreio e tratamento das doenças crônicas, falta de profissionais e de treinamento adequado para atuação em equipes multiprofissionais, segregação entre os níveis de cuidado, baixa taxa de acompanhamento e cadastramento dos usuários, lentidão no processo de informatização da Atenção Primária e, sobretudo, baixa adesão ao tratamento por parte dos pacientes. Esses fatores contribuem para que grande parte da população com hipertensão e diabetes não seja acompanhada de forma adequada, aumentando o risco de complicações, internações e perda de qualidade de vida.\n\nEm síntese, o desafio é atualmente enfrentado por meio de uma combinação de ações presenciais, registros manuais ou pouco integrados e comunicação limitada, tanto entre profissionais quanto entre estes e os cidadãos. Isso resulta em um cuidado fragmentado, com baixa efetividade na promoção do autocuidado, dificuldades de acesso e adesão ao tratamento, e limitações para o planejamento estratégico e a gestão eficiente dos recursos em saúde.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750430830359x349847126130779650/EITA_Recife_Sumario_Proposta_CFIT.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750430832707x593932343262646000/EITA_2025_Desafio01_CFIT%20%285%29.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 11:49:00",
    "slug": "rel-prop-0033",
    "isSegundaFase": false,
    "evaluationIds": [
      "rel_av_0199",
      "rel_av_0243",
      "rel_av_0275",
      "rel_av_0312",
      "rel_av_0337"
    ],
    "operationIds": []
  },
  {
    "id": "rel_prop_0034",
    "title": "Cuidar Recife (1)",
    "sw_nome": "Cuidar Recife (1)",
    "pf_nome": "Proponente / Autor (RECIFE)",
    "Nome_fantasia": "Empresa / Startup (57910819000103)",
    "Resp_nome": "Proponente / Autor (RECIFE)",
    "cidade": "RECIFE",
    "CNPJ": "57910819000103",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Hoje, o acompanhamento de pacientes com diabetes ou hipertensão no SUS é, em sua \nmaioria, presencial, fragmentado e reativo: \n● O paciente descobre a doença em uma consulta, recebe orientações e medicamentos; \n● Em muitos casos, não retorna mais, especialmente se estiver assintomático; \n● Quando volta, geralmente é por agravamento, muitas vezes já em situação de risco. \nPrincipais dificuldades atuais: \n● Baixa adesão ao acompanhamento e pouco entendimento sobre a gravidade da \ndoença; \n● Dificuldade de acesso à UBS (transporte, tempo, filas); \n● Falta de integração de dados entre paciente e equipe de saúde; \n● Pouco incentivo ao autocuidado e ausência de ferramentas tecnológicas acessíveis; \n● Desigualdade digital: os poucos recursos disponíveis hoje são complexos ou voltados \nao público pagante.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750421503046x918521490690778400/_Cuidar%20Recife%20%281%29.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 11:08:00",
    "slug": "rel-prop-0034",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0035",
    "title": "Watt Consultoria",
    "sw_nome": "Watt Consultoria",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Empresa / Startup (24300260000140)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": "24300260000140",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "Atualmente, a maioria dos usuários cegos ou com baixa visão depende de terceiros (funcionários, acompanhantes ou familiares) para se locomover com segurança dentro de hotéis e pousadas. Em muitos casos, a orientação se dá por memorização de caminhos, uso da bengala ou, em menor escala, por aplicativos de navegação assistida com pouca acurácia em ambientes internos. Isso pode gerar riscos e desorientação para o usuário, comprometendo sua experiência.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750426678542x920541166734035700/_Edital%20E.I.T.A%20Recife%20-%20Watt%20consultoria%20-%20Detalhamento%20da%20solu%C3%A7%C3%A3o%20de%20acessibilidade.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 10:38:00",
    "slug": "rel-prop-0035",
    "isSegundaFase": false,
    "evaluationIds": [
      "rel_av_0024",
      "rel_av_0069",
      "rel_av_0087",
      "rel_av_0092",
      "rel_av_0094"
    ],
    "operationIds": [
      "rel_op_0453",
      "rel_op_0454",
      "rel_op_0457",
      "rel_op_0473",
      "rel_op_0527"
    ]
  },
  {
    "id": "rel_prop_0036",
    "title": "EITA Recife Sumario Proposta CFIT",
    "sw_nome": "EITA Recife Sumario Proposta CFIT",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Empresa / Startup (41645484000103)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": "41645484000103",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente, o enfrentamento do desafio de monitorar e apoiar o autocuidado de pessoas com hipertensão e diabetes em Recife é marcado por uma série de limitações que afetam tanto os profissionais de saúde quanto os próprios cidadãos. Do lado dos usuários, muitos enfrentam dificuldades para acessar informações, agendar consultas e exames, receber orientações personalizadas e garantir o acompanhamento regular do seu quadro clínico. A comunicação com as equipes de saúde, em geral, é esporádica e depende de visitas presenciais ou contatos telefônicos, o que não se mostra suficiente para promover o engajamento contínuo no autocuidado. Além disso, há obstáculos práticos, como a necessidade de deslocamento até as unidades de saúde, filas para atendimento, falta de integração entre serviços e, frequentemente, ausência de medicamentos na rede básica, o que pode levar ao abandono do tratamento ou à automedicação inadequada. Muitos pacientes relatam sentimentos de tensão e tristeza diante das exigências do autocuidado, além de dificuldades para incorporar mudanças de hábitos e monitorar sua condição de forma autônoma, especialmente quando não recebem suporte próximo da equipe de saúde.\n\nPara os profissionais, o cenário também é desafiador. As equipes de Atenção Básica, responsáveis pelo acompanhamento territorializado dos pacientes, frequentemente atuam de forma reativa, respondendo a demandas pontuais em vez de planejar ações preventivas e contínuas. O registro das informações ainda é, em muitos casos, manual ou fragmentado em diferentes sistemas, dificultando a visualização rápida do status clínico dos pacientes, a estratificação de riscos e a priorização das visitas domiciliares ou intervenções. A comunicação entre os membros da equipe é feita por reuniões, mensagens e discussões de casos, mas há pouca automação ou inteligência de dados para apoiar a tomada de decisão. Além disso, a integração entre os diferentes níveis de atenção e programas de saúde é limitada, o que pode resultar em duplicidade de esforços, perda de oportunidades de cuidado preventivo e falhas no acompanhamento longitudinal dos pacientes.\n\nEntre os principais problemas identificados, destacam-se gargalos de acesso ao rastreio e tratamento das doenças crônicas, falta de profissionais e de treinamento adequado para atuação em equipes multiprofissionais, segregação entre os níveis de cuidado, baixa taxa de acompanhamento e cadastramento dos usuários, lentidão no processo de informatização da Atenção Primária e, sobretudo, baixa adesão ao tratamento por parte dos pacientes. Esses fatores contribuem para que grande parte da população com hipertensão e diabetes não seja acompanhada de forma adequada, aumentando o risco de complicações, internações e perda de qualidade de vida.\n\nEm síntese, o desafio é atualmente enfrentado por meio de uma combinação de ações presenciais, registros manuais ou pouco integrados e comunicação limitada, tanto entre profissionais quanto entre estes e os cidadãos. Isso resulta em um cuidado fragmentado, com baixa efetividade na promoção do autocuidado, dificuldades de acesso e adesão ao tratamento, e limitações para o planejamento estratégico e a gestão eficiente dos recursos em saúde.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750410333255x427737566624414800/EITA_Recife_Sumario_Proposta_CFIT.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750410388900x680388078675579600/EITA_2025_Desafio01_CFIT%20%285%29.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-20 06:35:00",
    "slug": "rel-prop-0036",
    "isSegundaFase": false,
    "evaluationIds": [
      "rel_av_0199",
      "rel_av_0243",
      "rel_av_0275",
      "rel_av_0312",
      "rel_av_0337"
    ],
    "operationIds": []
  },
  {
    "id": "rel_prop_0037",
    "title": "de Negocio Totem Conecta Recife",
    "sw_nome": "de Negocio Totem Conecta Recife",
    "pf_nome": "Proponente / Autor (RECIFE)",
    "Nome_fantasia": "Equipe de (RECIFE)",
    "Resp_nome": "Proponente / Autor (RECIFE)",
    "cidade": "RECIFE",
    "CNPJ": null,
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Atualmente, a coleta e redistribuição desses itens são feitas de forma manual e descentralizada, o que gera atrasos, falta de controle sobre o estado dos alimentos recebidos, e desperdício de recursos. As secretarias precisam visitar fisicamente os pontos ou depender de ligações e mensagens para saber se há itens disponíveis. Esse processo é ineficiente, consome tempo e dificulta a triagem rápida de materiais em bom estado.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750384193682x605585295340040700/Modelo_de_Negocio_Totem_Conecta_Recife.docx",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750384199892x385050223688846660/OR%C3%87AMENTO.doc",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750384252835x668248763574457200/Pontos%20essenciais%20Coleta%20autom%C3%A1tica%20e%20r%C3%A1pida%20Log%C3%ADstica%20integrada%20com%20secretarias%20Redistribui%C3%A7%C3%A3o%20e%20compostagem%20eficazes%20Monitoramento%20em%20tempo%20real%20%281%29%20%281%29.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-19 23:01:00",
    "slug": "rel-prop-0037",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0038",
    "title": "DESAFIO 6 LYSA ROBO GUIA (1)",
    "sw_nome": "DESAFIO 6 LYSA ROBO GUIA (1)",
    "pf_nome": "Proponente / Autor (Serra)",
    "Nome_fantasia": "Empresa / Startup (19915825000164)",
    "Resp_nome": "Proponente / Autor (Serra)",
    "cidade": "Serra",
    "CNPJ": "19915825000164",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "Hoje, a maior parte das pessoas com deficiência visual enfrenta dificuldades significativas para se locomover com segurança e autonomia em ambientes públicos e privados. As soluções disponíveis são limitadas, caras ou insuficientes:\nCães-guia\nEmbora eficazes, os cães-guia são raríssimos no Brasil: existem menos de 150 em atividade, para mais de 6,5 milhões de pessoas com deficiência visual.\n\nO treinamento é caro (mais de R$ 100 mil por cão) e leva de 18 a 24 meses.\n\nA maioria das pessoas não consegue acesso, seja por falta de disponibilidade ou custos.\n\nBengalas tradicionais ou eletrônicas\nAs bengalas são as soluções mais comuns, mas têm limitações importantes:\n\nDetectam apenas obstáculos no chão, deixando a pessoa vulnerável a obstáculos aéreos (lixeiras suspensas, placas, galhos, etc.).\n\nNão oferecem orientação sobre o ambiente ou rotas seguras.\n\nExigem total dependência da memória espacial do usuário ou apoio de terceiros.\n\nAplicativos de celular\nAlguns aplicativos utilizam câmeras e GPS para orientar o usuário, mas:\n\nTêm desempenho limitado em ambientes internos (como museus, estações, aeroportos e centros de serviços).\n\nRequerem uso contínuo do celular, o que pode comprometer a mobilidade.\n\nNão possuem integração com dispositivos táteis ou sensores de ambiente.\n\nPrincipais dificuldades enfrentadas hoje:\nFalta de autonomia plena para circular com segurança.\n\nBaixa disponibilidade de tecnologias acessíveis e eficazes.\n\nAlto custo das soluções existentes (como cães-guia ou tecnologias importadas).\n\nInfraestruturas urbanas não preparadas para atender às necessidades da pessoa com deficiência.\n\nDependência de terceiros para realizar tarefas simples do dia a dia.\n\nA proposta da Lysa surge justamente para superar esses obstáculos, oferecendo uma solução que combina navegação autônoma, inteligência artificial, feedback tátil e sonoro e integração com espaços urbanos e digitais — tudo isso com foco total na pessoa com deficiência visual como protagonista da própria mobilidade.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750386147616x959136500984102700/PROPOSTA%20DESAFIO%206%20LYSA%20ROBO%20GUIA%20%281%29.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-19 23:30:00",
    "slug": "rel-prop-0038",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0039",
    "title": "Programa Coreto (Emprel   Pref. Recife)   25.06.19",
    "sw_nome": "Programa Coreto (Emprel   Pref. Recife)   25.06.19",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Empresa / Startup (34937165000106)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": "34937165000106",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Hoje, o desafio do cuidado é resolvido de forma fragmentada, informal e com baixa coordenação entre os envolvidos. Cuidadores — formais ou informais — usam anotações manuais, mensagens por WhatsApp e ligações para acompanhar rotinas, repassar informações e interagir com outros profissionais. Já os profissionais de saúde não têm acesso contínuo ao histórico do paciente no domicílio e atuam com base em percepções isoladas ou partidas, muitas vezes sem conexão com o plano terapêutico ou com demais membros da rede.\n\nPrincipais dificuldades:\nPerda de informação de saúde por falta ou descentralização do registro;\nProfissionais de saúde não contém toda informação para diagnóstico adequado;\nBaixa integração entre profissionais, cuidadores e operadoras;\nDificuldade de tomada de decisão baseada em dados reais do dia a dia do paciente;\nSobrecarga emocional e operacional dos cuidadores, que não têm apoio contínuo;\nInvisibilidade da rede de cuidado para o sistema de saúde e gestores;\nRisco aumentado de eventos adversos, reinternações e baixa adesão ao tratamento.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750382206745x347871810749004600/Programa%20Coreto%20%28Emprel%20-%20Pref.%20Recife%29%20-%2025.06.19.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-19 22:25:00",
    "slug": "rel-prop-0039",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0040",
    "title": "ProjetoSuporteNozIA EitaRecife",
    "sw_nome": "ProjetoSuporteNozIA EitaRecife",
    "pf_nome": "Proponente / Autor (São José do Rio Preto)",
    "Nome_fantasia": "Empresa / Startup (26593560000190)",
    "Resp_nome": "Proponente / Autor (São José do Rio Preto)",
    "cidade": "São José do Rio Preto",
    "CNPJ": "26593560000190",
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Hoje, o enfrentamento ao descarte irregular de resíduos e às arboviroses depende majoritariamente de ações manuais, como vistorias em campo feitas por agentes de saúde e fiscais municipais. Esse modelo é lento, caro, sujeito a falhas humanas e com baixa cobertura territorial. Mesmo quando há o uso de drones, as imagens captadas raramente são analisadas com ferramentas de inteligência artificial, o que limita a capacidade de diagnóstico e resposta rápida. A ausência de automação e integração entre coleta de dados e análise dificulta a tomada de decisão estratégica, comprometendo a eficiência dos serviços públicos e agravando problemas de saúde pública, meio ambiente e planejamento urbano.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750375422189x800111045547573100/ProjetoSuporteNozIA%20EitaRecife.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-19 20:26:00",
    "slug": "rel-prop-0040",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0041",
    "title": "Passo Seguro",
    "sw_nome": "Passo Seguro",
    "pf_nome": "Proponente / Autor (Petrolina)",
    "Nome_fantasia": "Equipe Passo (Petrolina)",
    "Resp_nome": "Proponente / Autor (Petrolina)",
    "cidade": "Petrolina",
    "CNPJ": null,
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "Atualmente, pessoas cegas e com baixa visão contam principalmente com bengalas tradicionais para detectar obstáculos no nível do solo e com cães-guia, quando têm acesso a eles, para auxiliar na locomoção em ambientes urbanos. Em alguns casos, podem usar aplicativos de navegação geral, que nem sempre são acessíveis ou confiáveis para situações específicas de mobilidade de quem não enxerga.\n\nNo entanto, essas soluções apresentam várias limitações. A bengala comum não detecta obstáculos elevados, como placas, galhos, grades abertas ou buracos fora do alcance do toque, o que aumenta o risco de acidentes. O cão-guia, por sua vez, tem um custo muito alto de treinamento e manutenção, sendo inviável para a maioria da população.\n\nAlém disso, a infraestrutura urbana ainda é precária: calçadas esburacadas, ausência de sinalização tátil, falta de semáforos sonoros e pouca padronização nos espaços públicos dificultam a mobilidade segura. Ambientes internos, como hospitais, escolas e órgãos públicos, raramente possuem sinalização acessível ou orientação adequada, obrigando o usuário a depender da ajuda de terceiros.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750371965060x733972011222125000/Passo%20Seguro%20-%20EITA%20Recife.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-19 19:26:00",
    "slug": "rel-prop-0041",
    "isSegundaFase": false,
    "evaluationIds": [
      "rel_av_0013",
      "rel_av_0066",
      "rel_av_0082",
      "rel_av_0083",
      "rel_av_0085"
    ],
    "operationIds": [
      "rel_op_0460",
      "rel_op_0464",
      "rel_op_0481",
      "rel_op_0482",
      "rel_op_0534"
    ]
  },
  {
    "id": "rel_prop_0042",
    "title": "5W1H",
    "sw_nome": "5W1H",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe 5W1H (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Os usuários não aderem ao tratamento por falta de motivação, informação ou acompanhamento próximo. Eles dependem majoritariamente do e-SUS e da Estratégia Saúde da Família (ESF). Atualmente, os usuários enfrentam o problema com estratégias pouco eficazes e fragmentadas. Além disso, os pacientes tentam seguir orientações gerais recebidas em atendimentos pontuais ou campanhas de conscientização, que não são suficientes para promover mudanças duradouras de comportamento. Profissionais como ACSs e enfermeiros, por sua vez, lidam com uma alta carga de trabalho e carecem de ferramentas que permitam um acompanhamento contínuo e personalizado. A burocracia dos sistemas atuais também desmotiva tanto os usuários quanto os profissionais, gerando baixa adesão e dificultando o engajamento.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750358527160x598221406456397600/5W1H.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750358545351x143195070247470460/Jornada%20do%20usu%C3%A1rio.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750358552020x796777846173155200/Mapa%20de%20empatia.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750358566638x343295025838751040/Mapa%20de%20Stakeholders.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750358575898x649739378230351760/Personas.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750360612154x917913129330577500/Resultados%20da%20entrevista%20com%20Marcela%20da%20Mata.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750360620330x145193087931814180/Documento%20Completo%20Inscri%C3%A7%C3%A3o%20Projeto_%20Conecta-SUS%20%28Junho%202025%29.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-19 16:20:00",
    "slug": "rel-prop-0042",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0043",
    "title": "Cronograma BRIO.xlsx",
    "sw_nome": "Cronograma BRIO.xlsx",
    "pf_nome": "Proponente / Autor (São Paulo)",
    "Nome_fantasia": "Equipe Cronograma (São Paulo)",
    "Resp_nome": "Proponente / Autor (São Paulo)",
    "cidade": "São Paulo",
    "CNPJ": null,
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "Pessoas com deficiência visual costumam utilizar a bengala longa como principal recurso para navegação autônoma. Leve e dobrável, a bengala é composta por uma pega, uma haste que funciona como extensão do corpo e uma ponteira que entra em contato com o solo, transmitindo informações táteis sobre o ambiente. Embora eficaz na identificação de obstáculos no chão, ela não é capaz de detectar objetos suspensos ou fora da sua zona de alcance, como galhos, placas, grades ou catracas. Isso expõe o usuário a riscos de colisões e acidentes que podem gerar ferimentos graves.\nAlém disso, os desafios enfrentados vão além do equipamento em si: a infraestrutura urbana frequentemente é inadequada, com calçadas esburacadas, sinalização deficiente e ausência de semáforos sonoros, dificultando a locomoção segura e autônoma. Muitos usuários entrevistados relatam a sensação de insegurança ao se deslocarem por ambientes desconhecidos ou mal sinalizados. Esses fatores combinados limitam a independência e a participação plena dessas pessoas na vida social e profissional.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750363517898x955032991504893600/Cronograma_BRIO.xlsx",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750363570209x611509499070130900/Brio_7.jpg",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750363570279x676269025778255500/Brio_10.jpg",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750363571544x941911294590024100/Brio_5.jpg",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750363571593x119863783007248640/Brio_8.jpg"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-19 17:15:00",
    "slug": "rel-prop-0043",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0044",
    "title": "Brio picture1",
    "sw_nome": "Brio picture1",
    "pf_nome": "Proponente / Autor (São Paulo)",
    "Nome_fantasia": "Equipe Brio (São Paulo)",
    "Resp_nome": "Proponente / Autor (São Paulo)",
    "cidade": "São Paulo",
    "CNPJ": null,
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "Pessoas com deficiência visual costumam utilizar a bengala longa como principal recurso para navegação autônoma. Leve e dobrável, a bengala é composta por uma pega, uma haste que funciona como extensão do corpo e uma ponteira que entra em contato com o solo, transmitindo informações táteis sobre o ambiente. Embora eficaz na identificação de obstáculos no chão, ela não é capaz de detectar objetos suspensos ou fora da sua zona de alcance, como galhos, placas, grades ou catracas. Isso expõe o usuário a riscos de colisões e acidentes que podem gerar ferimentos graves.\nAlém disso, os desafios enfrentados vão além do equipamento em si: a infraestrutura urbana frequentemente é inadequada, com calçadas esburacadas, sinalização deficiente e ausência de semáforos sonoros, dificultando a locomoção segura e autônoma. Muitos usuários entrevistados relatam a sensação de insegurança ao se deslocarem por ambientes desconhecidos ou mal sinalizados. Esses fatores combinados limitam a independência e a participação plena dessas pessoas na vida social e profissional.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750286590554x978544990157987800/Brio_picture1.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750286591452x626029606666675700/Brio_picture3.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750287570365x120244985547623310/Cronograma_BRIO.xlsx"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-18 19:59:00",
    "slug": "rel-prop-0044",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0045",
    "title": "SmartCityTec EitaRecife",
    "sw_nome": "SmartCityTec EitaRecife",
    "pf_nome": "Proponente / Autor (Florianópolis)",
    "Nome_fantasia": "Empresa / Startup (52979810000135)",
    "Resp_nome": "Proponente / Autor (Florianópolis)",
    "cidade": "Florianópolis",
    "CNPJ": "52979810000135",
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "🔧 Como o desafio é resolvido hoje\nFiscalização manual e esporádica, com equipes de campo circulando por denúncias ou rotas conhecidas.\nUso de chamadas da população via telefone, WhatsApp ou ouvidoria para apontar pontos de descarte.\nRemoção periódica dos resíduos pela equipe de limpeza urbana, muitas vezes retornando aos mesmos locais em poucos dias.\nAusência de rastreamento da origem dos resíduos.\nMapeamento manual e incompleto dos pontos críticos.\n\n❌ Principais Problemas e Dificuldades\nBaixo uso de tecnologia para prevenção, detecção ou fiscalização.\nFalta de integração entre setores (ex: fiscalização, obras, coleta, meio ambiente, polícia).\nDesconhecimento da origem dos resíduos e reincidentes, dificultando autuação e educação ambiental.\nDesperdício de recursos públicos, com repetidas limpezas nos mesmos locais.\nAusência de dados em tempo real para tomada de decisão.\nComunicação fragmentada com a sociedade, sem engajamento ativo no processo.\n\n🧩 Resultado:\nUma gestão ineficaz, cara e insustentável, que trata os sintomas, mas não a causa do problema.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750295869892x188632724518427160/SmartCityTec_EitaRecife.pptx"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-18 22:25:00",
    "slug": "rel-prop-0045",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0046",
    "title": "Sobra de alimentos (1)",
    "sw_nome": "Sobra de alimentos (1)",
    "pf_nome": "Proponente / Autor (Leme)",
    "Nome_fantasia": "Equipe Sobra (Leme)",
    "Resp_nome": "Proponente / Autor (Leme)",
    "cidade": "Leme",
    "CNPJ": null,
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Se cadastrando no aplicativo e inserindo as informações necessárias, os problemas e as dificuldades atuais, ocorrem por falta de planejamento e a existência de um aplicativo como o que estamos propondo",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1750279379154x555982434677333600/Sobra%20de%20alimentos%20%281%29.docx"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-18 17:43:00",
    "slug": "rel-prop-0046",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0047",
    "title": "Qualiport Vision   Apresentação   Resíduos",
    "sw_nome": "Qualiport Vision   Apresentação   Resíduos",
    "pf_nome": "Proponente / Autor (RECIFE)",
    "Nome_fantasia": "Empresa / Startup (29029104000100)",
    "Resp_nome": "Proponente / Autor (RECIFE)",
    "cidade": "RECIFE",
    "CNPJ": "29029104000100",
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Na prática, a prefeitura tem muita dificuldade de fiscalizar e punir os responsáveis por descartes irregulares, pois não existe tecnologia de monitoramento para isso. Sem tecnologia, a fiscalização se torna muito custosa e ineficiente. Nossa proposta é oferecer uma tecnologia de baixo custo, que atuará principalmente na prevenção e inibição desses descartes, mas também no monitoramento e fiscalização, o que possibilitará punições de acordo com a legislação apropriada, inibindo futuras ocorrências e educando a população ao longo do tempo.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1749428540979x844826338715857400/Qualiport%20Vision%20-%20Apresenta%C3%A7%C3%A3o%20-%20Res%C3%ADduos.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-08 22:23:00",
    "slug": "rel-prop-0047",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0048",
    "title": "Proposta EITA #0048",
    "sw_nome": "Proposta EITA #0048",
    "pf_nome": "Proponente / Autor (Araripina)",
    "Nome_fantasia": "Equipe Proposta (Araripina)",
    "Resp_nome": "Proponente / Autor (Araripina)",
    "cidade": "Araripina",
    "CNPJ": null,
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "Hoje em dia, a pessoa com deficiência visual conta com soluções limitadas, caras e pouco eficazes para enfrentar os desafios de mobilidade e orientação. As alternativas mais comuns são: bengalas brancas (que ajudam apenas na detecção de obstáculos no chão, mas não alertam sobre riscos à altura da cabeça nem orientam a direção correta), cães-guia ( cuja aquisição, treinamento e manutenção são extremamente caros com custo médio acima de R$ 100 mil, e acessíveis a menos de 1% da população cega no Brasil), apoio de terceiros (como familiares ou funcionários públicos, o que compromete a autonomia e a privacidade da pessoa) e tecnologias assistivas importadas (como óculos inteligentes e sensores de navegação, que ultrapassam os R$ 10 mil e não são cobertos por políticas públicas na maioria dos municípios). Acrescentando a isso, há falhas estruturais que agravam o problema: como calçadas irregulares e sem sinalização tátil, ausência de semáforos sonoros, falta de acessibilidade digital em aplicativos de mobilidade e Ambientes internos (escolas, hospitais, empresas) sem qualquer suporte para orientação autônoma. Essas limitações resultam em restrição de circulação, exclusão social, maior risco de acidentes e dependência crônica, comprometendo a qualidade de vida e a dignidade do usuário.",
    "documentos": [],
    "emailEnviado": true,
    "dataCadastro": "2025-06-17 14:01:00",
    "slug": "rel-prop-0048",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0049",
    "title": "Liu",
    "sw_nome": "Liu",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe Liu (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente, o acompanhamento de pessoas com hipertensão e diabetes no SUS é feito principalmente de forma presencial e reativa, dependendo da iniciativa do paciente para comparecer à unidade de saúde. Isso gera diversos problemas:\n\nBaixa adesão ao tratamento por falta de acompanhamento contínuo.\n\nFalta de monitoramento ativo, o que dificulta identificar agravamentos antes de se tornarem emergências.\n\nSobrecarga nas unidades de saúde, que atuam mais em momentos de crise do que na prevenção.\n\nDesconexão entre paciente e equipe de saúde, dificultando o cuidado individualizado.\n\nNosso projeto resolve isso com uma solução digital, leve e acessível, que ativa o cuidado entre as visitas presenciais, melhora a comunicação com os usuários e ajuda a prevenir internações desnecessárias.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747793195807x389186845881912770/Liu%20%284%29.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747793213189x339841609389416100/modelo_tecnologico_liu.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747794067490x575017609273380300/apresentacaoliu.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-20 23:22:00",
    "slug": "rel-prop-0049",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": [
      "rel_op_0201",
      "rel_op_0258",
      "rel_op_0278",
      "rel_op_0309",
      "rel_op_0350"
    ]
  },
  {
    "id": "rel_prop_0050",
    "title": "PitchDeck RedCheck Mar2025",
    "sw_nome": "PitchDeck RedCheck Mar2025",
    "pf_nome": "Proponente / Autor (Belém)",
    "Nome_fantasia": "Empresa / Startup (33448874000165)",
    "Resp_nome": "Proponente / Autor (Belém)",
    "cidade": "Belém",
    "CNPJ": "33448874000165",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente, os pacientes com hipertensão e diabetes são encaminhados pela UBS para realizar retinografia em hospitais ou ambulatórios de média complexidade, via agendamento manual na regulação municipal. Esse fluxo depende de longas filas de espera e deslocamentos ao serviço especializado, o que acarreta faltas e baixa adesão ao exame. Além disso, os resultados chegam atrasados, majoritariamente em papel, dificultando à equipe de Atenção Básica acompanhar quem já fez o exame e em que condições. Não há comunicação entre a UBS e o especialista, o que impede o cuidado coordenado e intervenções efetivas. Sem um monitoramento contínuo e uma estratificação de risco integrada, não há criteriosa priorização dos pacientes de maior risco, resultando em diagnósticos tardios de retinopatia e demais complicações oftalmológicas, levando a cegueira.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747746439886x312755532927279100/PitchDeck_RedCheck_Mar2025.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-20 10:22:00",
    "slug": "rel-prop-0050",
    "isSegundaFase": false,
    "evaluationIds": [
      "rel_av_0190",
      "rel_av_0238",
      "rel_av_0270",
      "rel_av_0291",
      "rel_av_0352"
    ],
    "operationIds": []
  },
  {
    "id": "rel_prop_0051",
    "title": "Resumo do Projeto TrackMe Recife Oportunidades e Considerações.md",
    "sw_nome": "Resumo do Projeto TrackMe Recife Oportunidades e Considerações.md",
    "pf_nome": "Proponente / Autor (Rio de Janeiro)",
    "Nome_fantasia": "Equipe Resumo (Rio de Janeiro)",
    "Resp_nome": "Proponente / Autor (Rio de Janeiro)",
    "cidade": "Rio de Janeiro",
    "CNPJ": null,
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Atualmente, o monitoramento e a gestão  são feitos de forma manual, sem padronização, sem rastreabilidade e com base em registros desatualizados ou inexistentes, o que gera retrabalho, alto custo e baixa efetividade operacional.\n\nO desafio é, hoje, enfrentado com planilhas isoladas, anotações em papel ou comunicação verbal, o que dificulta o mapeamento preciso, seu estado de conservação e a necessidade de manutenção.\n\nAlém disso:\n- Não há base unificada de dados;\n- Os pontos mapeados muitas vezes estão desatualizados ou inexistem;\n- As decisões operacionais são tomadas de forma reativa e subjetiva;\n- A alocação de equipes de limpeza é ineficiente, com deslocamentos desnecessários;\n- A ausência de indicadores dificulta a prestação de contas e a transparência pública.\n\nEsse cenário gera custo elevado, retrabalho constante e desperdício de recursos públicos, além de comprometer a imagem da gestão municipal perante os cidadãos",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747344929941x364957020589855100/Resumo%20do%20Projeto%20TrackMe%20Recife_Oportunidades%20e%20Considera%C3%A7%C3%B5es.md",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747344929944x705130444572701600/Planejamento%20Estrat%C3%A9gico_TrackMe%20Recife%20-%20Inova%C3%A7%C3%A3o%20na%20Gest%C3%A3o%20de%20Res%C3%ADduos%20Urbanos.md"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-15 18:35:00",
    "slug": "rel-prop-0051",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0052",
    "title": "Deck AcessWay",
    "sw_nome": "Deck AcessWay",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe Deck (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "Atualmente, usuários com deficiência, idosos e pessoas com mobilidade reduzida enfrentam grandes desafios para se locomover em centros urbanos. A falta de informação acessível sobre trajetos adaptados, o desconhecimento sobre locais com infraestrutura adequada e a dificuldade de comunicação com serviços de transporte seguro tornam a experiência diária exaustiva e arriscada. Muitas vezes, esses usuários dependem de familiares ou cuidadores para navegar a cidade, o que compromete sua autonomia. Aplicativos convencionais de mobilidade não oferecem suporte personalizado nem integração com acessibilidade, resultando em exclusão digital e social desses públicos.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1749217041209x285636671148165700/Pitch%20Deck%20AcessWay.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-06-06 10:54:00",
    "slug": "rel-prop-0052",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0053",
    "title": "Associação Luminus",
    "sw_nome": "Associação Luminus",
    "pf_nome": "Proponente / Autor (Belo Horizonte)",
    "Nome_fantasia": "Empresa / Startup (33470843000100)",
    "Resp_nome": "Proponente / Autor (Belo Horizonte)",
    "cidade": "Belo Horizonte",
    "CNPJ": "33470843000100",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Atualmente, os usuários da Associação Luminus, principalmente as organizações sociais, enfrentam uma série de desafios para resolver o problema do desperdício de alimentos e da insegurança alimentar. Essas organizações, que têm a responsabilidade de redistribuir alimentos excedentes para populações vulneráveis, dependem de processos manuais e desorganizados para gerenciar as doações, monitorar o fluxo de alimentos e garantir que os excedentes sejam direcionados de forma eficiente.\n\n\nUma das formas mais comuns de resolução do problema é por meio da parceria com empresas do setor alimentício, como supermercados e distribuidores, que doam alimentos excedentes. No entanto, esses processos frequentemente não são centralizados ou otimizados, o que pode resultar em falhas de comunicação, perda de alimentos devido a falta de controle de temperatura ou armazenamento inadequado, e atrasos nas entregas. Além disso, as organizações sociais muitas vezes enfrentam dificuldades para gerenciar o estoque de alimentos de maneira eficiente, o que pode levar ao desperdício, à falta de transparência no processo de distribuição e à ineficiência operacional.\n\n\nOutro problema significativo é a logística de distribuição, que muitas vezes não é otimizada para conectar doadores e destinatários de forma ágil e eficiente. O processo de coleta e entrega dos alimentos é frequentemente desorganizado, com pouca visibilidade sobre os prazos e a quantidade de alimentos disponíveis para doação. Além disso, a falta de integração entre as diversas partes envolvidas na cadeia de distribuição — doadores, organizações sociais e transportadores — torna o processo mais suscetível a erros e falhas de comunicação, o que prejudica a eficiência geral da operação.\n\n\nA gestão dos resíduos sólidos orgânicos também representa um desafio importante. Os alimentos que não são adequados para consumo, muitas vezes, não são devidamente direcionados para destinação sustentável. As organizações sociais, que lidam com grandes volumes de alimentos excedentes, não têm processos estruturados para gerenciar adequadamente esses resíduos, o que pode resultar em descarte inadequado e maior impacto ambiental.\n\n\nPor fim, a transparência e o monitoramento do impacto social das doações ainda são limitados, o que dificulta a prestação de contas e o engajamento dos doadores. As empresas que realizam as doações frequentemente não têm visibilidade sobre o destino final dos alimentos, o que pode reduzir seu comprometimento com as ações de responsabilidade social e afetar a continuidade de suas contribuições.\n\n\nEm resumo, as organizações sociais enfrentam sérios obstáculos no processo de redistribuição de alimentos, que incluem falta de integração logística, ineficiência no gerenciamento de estoque, falta de monitoramento e transparência, além da dificuldade em destinar adequadamente os resíduos orgânicos. Esses problemas não só afetam a eficiência das operações, mas também dificultam a maximização do impacto social positivo e a sustentabilidade das soluções adotadas.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747312607659x789579554277591200/Apresenta%C3%A7%C3%A3o%20Luminus%20%203%C2%BA%20Ciclo%20de%20Inova%C3%A7%C3%A3o%20Aberta%20E.I.T.A%20Recife%20-%20Desafio%203%20Emprel%20%20Rodrigo%20Ara%C3%BAjo.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-15 09:38:00",
    "slug": "rel-prop-0053",
    "isSegundaFase": false,
    "evaluationIds": [
      "rel_av_0122",
      "rel_av_0135",
      "rel_av_0137",
      "rel_av_0165",
      "rel_av_0169"
    ],
    "operationIds": [
      "rel_op_0376",
      "rel_op_0378",
      "rel_op_0406",
      "rel_op_0411",
      "rel_op_0422"
    ]
  },
  {
    "id": "rel_prop_0054",
    "title": "Detalhamento da solução de acessibilidade com Beacons  Pitch – E.I.T.A Recife",
    "sw_nome": "Detalhamento da solução de acessibilidade com Beacons  Pitch – E.I.T.A Recife",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Empresa / Startup (24300260000140)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": "24300260000140",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "Atualmente, a maioria dos usuários cegos ou com baixa visão depende de terceiros (funcionários, acompanhantes ou familiares) para se locomover com segurança dentro de hotéis e pousadas. Em muitos casos, a orientação se dá por memorização de caminhos, uso da bengala ou, em menor escala, por aplicativos de navegação assistida com pouca acurácia em ambientes internos. Isso pode gerar riscos e desorientação para o usuário, comprometendo sua experiência.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747276936968x987055920274033600/Detalhamento%20da%20solu%C3%A7%C3%A3o%20de%20acessibilidade%20com%20Beacons%20%20Pitch%20%E2%80%93%20E.I.T.A%20Recife.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-14 23:53:00",
    "slug": "rel-prop-0054",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0055",
    "title": "SIMADH+ e Integração e SUS com Plugin   Esboço",
    "sw_nome": "SIMADH+ e Integração e SUS com Plugin   Esboço",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Empresa / Startup (58688481000150)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": "58688481000150",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente, os pacientes contam com informações fragmentada, de fontes não confiáveis e sem personalização para o suporte às mudanças de estilo de vida. Ele consegue informações por meio das Redes Sociais, pesquisas na WEB ou somente quando em contato com o médico, na consulta.\nAs equipes EMULTI's, por outro lado, resolvem o problema atual com interpretação manual dos dados, sacrificando eficiência e tempo.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747276625175x205579131531716580/SIMADH%2B%20e%20Integra%C3%A7%C3%A3o%20e-SUS%20com%20Plugin%20-%20Esbo%C3%A7o.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747276629704x217721203019431550/Estimativa%20de%20Custo%20de%20Projeto%20%E2%80%93%20SIMADH%2B.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-14 23:40:00",
    "slug": "rel-prop-0055",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0056",
    "title": "Associação Luminus",
    "sw_nome": "Associação Luminus",
    "pf_nome": "Proponente / Autor (Belo Horizonte)",
    "Nome_fantasia": "Empresa / Startup (33470843000100)",
    "Resp_nome": "Proponente / Autor (Belo Horizonte)",
    "cidade": "Belo Horizonte",
    "CNPJ": "33470843000100",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Atualmente, os usuários da Associação Luminus, principalmente as organizações sociais, enfrentam uma série de desafios para resolver o problema do desperdício de alimentos e da insegurança alimentar. Essas organizações, que têm a responsabilidade de redistribuir alimentos excedentes para populações vulneráveis, dependem de processos manuais e desorganizados para gerenciar as doações, monitorar o fluxo de alimentos e garantir que os excedentes sejam direcionados de forma eficiente.\n\n\nUma das formas mais comuns de resolução do problema é por meio da parceria com empresas do setor alimentício, como supermercados e distribuidores, que doam alimentos excedentes. No entanto, esses processos frequentemente não são centralizados ou otimizados, o que pode resultar em falhas de comunicação, perda de alimentos devido a falta de controle de temperatura ou armazenamento inadequado, e atrasos nas entregas. Além disso, as organizações sociais muitas vezes enfrentam dificuldades para gerenciar o estoque de alimentos de maneira eficiente, o que pode levar ao desperdício, à falta de transparência no processo de distribuição e à ineficiência operacional.\n\n\nOutro problema significativo é a logística de distribuição, que muitas vezes não é otimizada para conectar doadores e destinatários de forma ágil e eficiente. O processo de coleta e entrega dos alimentos é frequentemente desorganizado, com pouca visibilidade sobre os prazos e a quantidade de alimentos disponíveis para doação. Além disso, a falta de integração entre as diversas partes envolvidas na cadeia de distribuição — doadores, organizações sociais e transportadores — torna o processo mais suscetível a erros e falhas de comunicação, o que prejudica a eficiência geral da operação.\n\n\nA gestão dos resíduos sólidos orgânicos também representa um desafio importante. Os alimentos que não são adequados para consumo, muitas vezes, não são devidamente direcionados para destinação sustentável. As organizações sociais, que lidam com grandes volumes de alimentos excedentes, não têm processos estruturados para gerenciar adequadamente esses resíduos, o que pode resultar em descarte inadequado e maior impacto ambiental.\n\n\nPor fim, a transparência e o monitoramento do impacto social das doações ainda são limitados, o que dificulta a prestação de contas e o engajamento dos doadores. As empresas que realizam as doações frequentemente não têm visibilidade sobre o destino final dos alimentos, o que pode reduzir seu comprometimento com as ações de responsabilidade social e afetar a continuidade de suas contribuições.\n\n\nEm resumo, as organizações sociais enfrentam sérios obstáculos no processo de redistribuição de alimentos, que incluem falta de integração logística, ineficiência no gerenciamento de estoque, falta de monitoramento e transparência, além da dificuldade em destinar adequadamente os resíduos orgânicos. Esses problemas não só afetam a eficiência das operações, mas também dificultam a maximização do impacto social positivo e a sustentabilidade das soluções adotadas.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747311593706x127091198798051420/Apresenta%C3%A7%C3%A3o%20Luminus%20%203%C2%BA%20Ciclo%20de%20Inova%C3%A7%C3%A3o%20Aberta%20E.I.T.A%20Recife%20-%20Desafio%203%20Emprel%20%20Rodrigo%20Ara%C3%BAjo.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-15 09:27:00",
    "slug": "rel-prop-0056",
    "isSegundaFase": false,
    "evaluationIds": [
      "rel_av_0122",
      "rel_av_0135",
      "rel_av_0137",
      "rel_av_0165",
      "rel_av_0169"
    ],
    "operationIds": [
      "rel_op_0376",
      "rel_op_0378",
      "rel_op_0406",
      "rel_op_0411",
      "rel_op_0422"
    ]
  },
  {
    "id": "rel_prop_0057",
    "title": "c623a431 550b 4def a645 b5dc39bc50e2",
    "sw_nome": "c623a431 550b 4def a645 b5dc39bc50e2",
    "pf_nome": "Proponente / Autor (São Paulo)",
    "Nome_fantasia": "Empresa / Startup (38217648000197)",
    "Resp_nome": "Proponente / Autor (São Paulo)",
    "cidade": "São Paulo",
    "CNPJ": "38217648000197",
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Hoje, o desafio da redução do desperdício de alimentos em Recife é enfrentado por meio de iniciativas fragmentadas, ações manuais e infraestrutura limitada. \n\nPrincipais instrumentos:\n- Banco de Alimentos do Recife (recém-operacional): recebe doações centralizadas de excedentes e os distribui para equipamentos públicos e cozinhas comunitárias, mas com processos ainda manuais e dependentes de logística pública;\n- SAFUC – Sistema Agroflorestal e de Compostagem Urbana: realiza compostagem de resíduos orgânicos coletados de feiras e prédios públicos, mas sem automação no recebimento, sem rastreabilidade e com pouco controle da origem e qualidade dos resíduos;\n- Feiras e mercados públicos: operam com descarte diário de excedentes alimentares diretamente para o lixo, mesmo quando muitos produtos ainda são aproveitáveis para consumo humano ou compostagem;\n- Cozinhas solidárias e comunitárias: dependem de doações espontâneas ou convênios específicos com o município, sem acesso estruturado a notificações ou ofertas de alimentos excedentes;\n- Atores da agricultura urbana (SAFs): muitas vezes produzem sem previsão de recebimento de composto, e atuam isoladamente.\n\nProblemas e dificuldades atuais:\n- Fragmentação dos dados e atores: Não há um sistema unificado que conecte feirantes, doadores, bancos de alimentos, cozinhas e compostagem. As decisões são reativas e não orientadas por dados.\n- Falta de visibilidade sobre a oferta e demanda: Alimentos são descartados mesmo em boas condições por falta de informação sobre onde destiná-los, enquanto cozinhas populares muitas vezes operam com escassez.\n- Infraestrutura logística insuficiente e descoordenada: Não há rotas otimizadas de coleta de doações, o que dificulta a eficiência operacional e gera desperdício de tempo e combustível.\n- Baixo uso de tecnologia: A coleta, triagem e redistribuição são feitas de forma manual, sem agentes automatizados, monitoramento em tempo real ou integração com sistemas municipais.\n- Impossibilidade de escalar ações: Iniciativas locais como SAFUC ou Várzea Composta são eficazes, mas não conseguem escalar sem uma plataforma digital integradora que organize os fluxos e envolva múltiplos atores.\n- Falta de mecanismos de rastreabilidade e controle de qualidade: O alimento que é doado ou compostado não é rastreado com precisão, dificultando a geração de indicadores e o aprimoramento das políticas públicas.\n- Baixo engajamento da população e dos comerciantes: Muitos desconhecem os canais de doação ou compostagem, e não são incentivados por fluxos simples, rápidos e confiáveis para contribuir com segurança alimentar ou sustentabilidade.\n\nResumo:\nO modelo atual é repleto de boas intenções e práticas promissoras, mas falta orquestração tecnológica, integração automatizada e visibilidade operacional. A ausência de um sistema inteligente de coordenação entre oferta, necessidade e logística mantém o ciclo de desperdício ativo e impede que políticas públicas avancem de forma estruturada e escalável.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747275372332x398038229596072700/c623a431-550b-4def-a645-b5dc39bc50e2.png"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-14 23:33:00",
    "slug": "rel-prop-0057",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0058",
    "title": "4582e652 7ad2 4e93 81b6 e5b1c8ba2d48",
    "sw_nome": "4582e652 7ad2 4e93 81b6 e5b1c8ba2d48",
    "pf_nome": "Proponente / Autor (São Paulo)",
    "Nome_fantasia": "Empresa / Startup (38217648000197)",
    "Resp_nome": "Proponente / Autor (São Paulo)",
    "cidade": "São Paulo",
    "CNPJ": "38217648000197",
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Hoje, o monitoramento e a fiscalização do descarte irregular de resíduos em Recife são feitos de forma manual, reativa e pouco integrada. A gestão municipal mapeia pontos críticos, realiza limpezas recorrentes e depende de denúncias presenciais ou pontuais para iniciar ações. A fiscalização é feita por agentes à paisana ou pela Guarda Municipal, mas com baixa cobertura. A identificação de infratores depende do flagrante ou da apreensão de veículos, o que raramente ocorre. Sistemas e dados são fragmentados entre órgãos como EMLURB, DIRCON, CTTU e Meio Ambiente, sem automação, sem inteligência preditiva e sem centralização das informações.\n- Principais problemas e dificuldades:\n- Impunidade recorrente: sem flagrante ou identificação de origem dos resíduos, as infrações não resultam em penalidades efetivas.\n- Baixa capacidade de cobertura: fiscalização é manual e limitada a poucos agentes.\n- Falta de inteligência nos dados: não há uso de IA ou analytics para prever reincidências, planejar rotas ou identificar padrões.\n- Dados descentralizados e não integrados: os sistemas das diferentes secretarias não se conversam.\n- Canal de denúncia ineficiente: cidadão não sabe para onde reportar, e quando reporta, não tem retorno ou não vê ação.\n- Ações reativas e não preventivas: só se age após o descarte, com limpezas frequentes e dispendiosas.\n- Alto custo operacional: múltiplas remoções por semana em pontos reincidentes consomem orçamento sem resolver o problema na raiz.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747272791805x401462459796415170/4582e652-7ad2-4e93-81b6-e5b1c8ba2d48.png"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-14 22:57:00",
    "slug": "rel-prop-0058",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0059",
    "title": "Proposta EITA #0059",
    "sw_nome": "Proposta EITA #0059",
    "pf_nome": "Proponente / Autor (Arapiraca)",
    "Nome_fantasia": "Empresa / Startup (48200632000125)",
    "Resp_nome": "Proponente / Autor (Arapiraca)",
    "cidade": "Arapiraca",
    "CNPJ": "48200632000125",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "Atualmente, pessoas cegas ou com deficiência visual severa enfrentam diversas dificuldades para lidar com a falta de acessibilidade. Sem uma tecnologia como a proposta, elas recorrem a soluções tradicionais que possuem limitações significativas, como:\nBengalas: Embora sejam úteis para detectar obstáculos no chão, elas não ajudam na identificação de barreiras elevadas, como placas, veículos estacionados ou galhos de árvores, tornando a locomoção insegura.\nCães-guia: São extremamente eficazes, mas inacessíveis para a maioria da população devido ao alto custo e à baixa disponibilidade. No Brasil, existem menos de 300 cães-guia treinados para mais de 6,5 milhões de pessoas com deficiência visual.\nAuxílio de terceiros: Muitas pessoas cegas ou com baixa visão dependem da ajuda de familiares, amigos ou até mesmo desconhecidos para se locomoverem e realizarem tarefas do dia a dia, o que reduz sua autonomia e independência.\nAplicativos e tecnologias existentes: Algumas soluções digitais tentam oferecer assistência, mas geralmente são caras, exigem dispositivos específicos ou não possuem suporte adequado para o idioma e realidade brasileira.\nInfraestrutura urbana inadequada: A falta de semáforos sonoros, calçadas mal planejadas e ausência de sinalizações táteis dificultam a locomoção segura, aumentando o risco de acidentes.\nAcessibilidade digital limitada: Muitos sites e aplicativos ainda não são compatíveis com leitores de tela, tornando o acesso à informação e a serviços essenciais um grande desafio.",
    "documentos": [],
    "emailEnviado": true,
    "dataCadastro": "2025-05-14 22:10:00",
    "slug": "rel-prop-0059",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0060",
    "title": "Desperdicio",
    "sw_nome": "Desperdicio",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe Desperdicio (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Atualmente, o combate ao desperdício de alimentos e a garantia de sua destinação adequada ocorrem de forma fragmentada e pouco eficiente. Iniciativas públicas e privadas existem, mas atuam de maneira isolada e sem coordenação entre os diferentes agentes da cadeia alimentar. Supermercados, por exemplo, são legalmente autorizados a dar tratamento diferenciado a produtos próximos do vencimento — inclusive por meio de doações —, mas essa prática ainda é pouco comum. A Lei Municipal nº 19.026/2022 (Código de Limpeza Urbana) e o Decreto nº 33.080/2019 (compostagem) criam um ambiente normativo favorável, mas sua implementação ainda é limitada. Em nível federal, a Lei nº 14.016/2020 (Lei da Boa Fé Alimentar) estimula a doação de alimentos próprios para consumo, mas o Brasil ainda desperdiça mais de 12 milhões de toneladas por ano — cerca de 60 kg por pessoa.\nEnquanto isso, famílias em insegurança alimentar seguem sem acesso a alimentos em bom estado, e grande parte dos resíduos orgânicos é destinada a aterros, gerando impactos ambientais e perdendo o potencial da compostagem urbana. A falta de ferramentas tecnológicas, campanhas educativas e mecanismos de engajamento dificulta a participação ativa da população. Sem articulação entre leis, tecnologias e práticas, desperdício e fome continuam coexistindo em um cenário que poderia ser revertido com soluções integradas e de fácil adesão.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747270930411x455376170405766850/Desperdicio.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747270930609x914322548281937500/Food-waste-Brazil-2024.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747270932081x215295117150370750/Food-waste-china-Lima-2024.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-14 22:02:00",
    "slug": "rel-prop-0060",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0061",
    "title": "DE BENGALA INTELIGENTE Recife",
    "sw_nome": "DE BENGALA INTELIGENTE Recife",
    "pf_nome": "Proponente / Autor (Curitiba)",
    "Nome_fantasia": "Empresa / Startup (06306026000149)",
    "Resp_nome": "Proponente / Autor (Curitiba)",
    "cidade": "Curitiba",
    "CNPJ": "06306026000149",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "Atualmente, o usuário com deficiência visual utiliza a bengala tradicional, que detecta apenas obstáculos no solo. Isso o deixa vulnerável a colisões com objetos como placas, galhos, retrovisores e marquises — gerando quedas, ferimentos faciais e insegurança. A única alternativa disponível são bengalas inteligentes importadas, com altíssimo custo (acima de R$ 5.000) e baixa adaptação ao contexto urbano brasileiro, além da escassez de assistência técnica no país.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747270807601x357549440358150700/PROJETO%20DE%20BENGALA%20INTELIGENTE%20Recife.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-14 22:00:00",
    "slug": "rel-prop-0061",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0062",
    "title": "Equipe e funções (1)",
    "sw_nome": "Equipe e funções (1)",
    "pf_nome": "Proponente / Autor (Teresina)",
    "Nome_fantasia": "Equipe Equipe (Teresina)",
    "Resp_nome": "Proponente / Autor (Teresina)",
    "cidade": "Teresina",
    "CNPJ": null,
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Atualmente, o comerciante que lida com excedente de alimentos enfrenta sérias dificuldades para dar um destino adequado aos produtos não vendidos. Na maioria dos casos, os alimentos que ainda estão em condições de consumo são simplesmente descartados por falta de uma rede organizada de reaproveitamento. Quando há alguma tentativa de doação, ela costuma ser informal, pontual e dependente da boa vontade individual, sem controle, rastreabilidade ou regularidade.\n\nAs principais dificuldades enfrentadas incluem:\n\nFalta de canal direto e confiável com cooperativas ou instituições que possam recolher os alimentos;\nAusência de logística para transporte e armazenamento adequado desses produtos;\nDesconhecimento das normas sanitárias e medo de sofrer penalidades ao doar alimentos;\nTempo e rotina corrida, que dificultam buscar alternativas viáveis para o descarte consciente.\n\nDo outro lado, as comunidades em vulnerabilidade não têm acesso constante a alimentos frescos ou a canais de redistribuição solidária, e as cooperativas carecem de estrutura e de dados que ajudem a organizar suas ações.\nAssim, o problema persiste por falta de integração entre os atores, de ferramentas práticas e de incentivos logísticos e legais. A REação surge justamente para resolver esse gargalo, conectando os envolvidos de forma simples, acessível e eficiente.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747263360350x266847674536511580/Equipe%20e%20fun%C3%A7%C3%B5es%20%281%29.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-14 20:00:00",
    "slug": "rel-prop-0062",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0063",
    "title": "GIRO   pitch a problem (desperdício) pptx (1)",
    "sw_nome": "GIRO   pitch a problem (desperdício) pptx (1)",
    "pf_nome": "Proponente / Autor (São Paulo)",
    "Nome_fantasia": "Equipe GIRO (São Paulo)",
    "Resp_nome": "Proponente / Autor (São Paulo)",
    "cidade": "São Paulo",
    "CNPJ": null,
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Como eles resolvem esse desafio hoje:\nControle de estoque feito com papel, cadernos, planilhas manuais ou anotações informais\nFalta de previsibilidade de compras e insumos\nSem alertas sobre validade ou perdas\nDificuldade de gestão em meio à operação corrida do dia a dia\nAlto índice de desperdício (4 a 10% dos alimentos)\nBaixa margem de lucro por falhas na reposição e CMV\n\nProblemas atuais enfrentados:\nDesperdício elevado por desorganização e falta de controle\nSobras que não são reaproveitadas ou doadas por ausência de processos\nFalta de tempo e mão de obra para planilhas e gestão formal\nBaixa inteligência de dados sobre operação e compras",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747251448126x898160086200987100/GIRO%20-%20pitch%20a%20problem%20%28desperdi%CC%81cio%29%20pptx%20%281%29.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-14 16:40:00",
    "slug": "rel-prop-0063",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0064",
    "title": "BOB",
    "sw_nome": "BOB",
    "pf_nome": "Proponente / Autor (Curitiba)",
    "Nome_fantasia": "Equipe BOB (Curitiba)",
    "Resp_nome": "Proponente / Autor (Curitiba)",
    "cidade": "Curitiba",
    "CNPJ": null,
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "O BOB é um sistema acoplável à bengala tradicional, que combina sensores ultrassônicos, feedback háptico e alertas sonoros adaptativos, com conexão bluetooth e wifi.\nSão três modos de alcance – interno, externo e aberto, variando de 60cm a 240cm, e feedback instantâneo em menos de 0,5s.\nTudo isso em um dispositivo compacto, ergonômico e resistente à água e poeira (IP67). Além disso, mantém a funcionalidade da bengala mesmo em caso de falha, garantindo segurança e redundância.\n\nPessoas com deficiência visual, cegas ou com baixa visão, enfrentam riscos reais ao navegar em ambientes urbanos, especialmente por obstáculos acima da cintura, tais como galhos, placas, prateleiras ou sinalizações.\nAs soluções existentes, em sua maioria, são caras, importadas e não se adaptam às bengalas tradicionais. Já as nacionais focam em obstáculos baixos e muitas vezes ignoram o cotidiano do usuário brasileiro.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747256072557x964570230944715000/PROJETO_Desafio_Bengalas_Inteligentes.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-14 18:06:00",
    "slug": "rel-prop-0064",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": [
      "rel_op_0478",
      "rel_op_0491",
      "rel_op_0508",
      "rel_op_0516",
      "rel_op_0539"
    ]
  },
  {
    "id": "rel_prop_0065",
    "title": "VITA",
    "sw_nome": "VITA",
    "pf_nome": "Proponente / Autor (RECIFE)",
    "Nome_fantasia": "Empresa / Startup (54690817000168)",
    "Resp_nome": "Proponente / Autor (RECIFE)",
    "cidade": "RECIFE",
    "CNPJ": "54690817000168",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente, o paciente com diabetes ou hipertensão na rede pública de saúde do Recife é acompanhado de forma fragmentada e reativa, com consultas presenciais espaçadas e registros manuais ou desconectados entre diferentes sistemas (e-SUS, Hórus, prontuários físicos, etc.). Fora das consultas agendadas, não há monitoramento contínuo, o que faz com que problemas clínicos só sejam detectados tardiamente — muitas vezes já em contexto de urgência, aumentando os custos e os riscos à saúde.\n\nDo lado da gestão, as equipes de saúde enfrentam sobrecarga de trabalho, dificuldade para integrar informações clínicas, ausência de ferramentas preditivas para priorização de pacientes e baixa resolutividade operacional. Não existem mecanismos inteligentes de alerta, nem acompanhamento automatizado da adesão ao tratamento ou da evolução clínica dos pacientes entre as consultas.\n\nEssa realidade gera:\n\nAltos índices de internações evitáveis;\n\nBaixo controle clínico (ex.: PA descontrolada ou HbA1c elevada);\n\nPerda de vínculo com pacientes faltosos;\n\nIneficiência no uso de recursos e dificuldade para identificar prioridades.\n\nPortanto, o modelo atual falha em oferecer cuidado contínuo, personalizado e proativo, prejudicando tanto o paciente quanto o sistema de saúde como um todo.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747245466225x678308836874583600/Projeto%20VITA.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-14 16:15:00",
    "slug": "rel-prop-0065",
    "isSegundaFase": false,
    "evaluationIds": [
      "rel_av_0181",
      "rel_av_0225",
      "rel_av_0260",
      "rel_av_0285",
      "rel_av_0335"
    ],
    "operationIds": [
      "rel_op_0218",
      "rel_op_0264",
      "rel_op_0286",
      "rel_op_0320",
      "rel_op_0360"
    ]
  },
  {
    "id": "rel_prop_0066",
    "title": "Jornada do usuário",
    "sw_nome": "Jornada do usuário",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe Jornada (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Os usuários não aderem ao tratamento por falta de motivação, informação ou acompanhamento próximo. Eles dependem majoritariamente do e-SUS e da Estratégia Saúde da Família (ESF). Atualmente, os usuários enfrentam o problema com estratégias pouco eficazes e fragmentadas. Além disso, os pacientes tentam seguir orientações gerais recebidas em atendimentos pontuais ou campanhas de conscientização, que não são suficientes para promover mudanças duradouras de comportamento. Profissionais como ACSs e enfermeiros, por sua vez, lidam com uma alta carga de trabalho e carecem de ferramentas que permitam um acompanhamento contínuo e personalizado. A burocracia dos sistemas atuais também desmotiva tanto os usuários quanto os profissionais, gerando baixa adesão e dificultando o engajamento.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747234455676x243321303702958460/Jornada%20do%20usu%C3%A1rio.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747234461494x651070023718890900/Mapa%20de%20Stakeholders.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747234469482x674832759971187000/Mapa%20de%20empatia.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747234478109x483406926598690400/Matriz%20CSD.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747234481269x846924654567058800/Personas.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747234493063x458426335954648300/5W1H.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747237268425x789535536249759700/Documento%20Completo%20Inscri%C3%A7%C3%A3o%20Projeto_%20Conecta-SUS.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-14 12:41:00",
    "slug": "rel-prop-0066",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0067",
    "title": "SUSIA",
    "sw_nome": "SUSIA",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe SUSIA (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente, pacientes com hipertensão e diabetes tentam gerenciar suas condições de saúde primariamente através do acompanhamento oferecido pelo Sistema Único de Saúde (SUS). Isso geralmente envolve:\n\nConsultas médicas periódicas: Para avaliação, prescrição ou ajuste de medicamentos e orientações gerais.\nRetirada de medicamentos: Em farmácias da rede pública ou conveniadas (como o programa Farmácia Popular).\nTentativas de mudança no estilo de vida: Como seguir orientações dietéticas e praticar atividades físicas, muitas vezes com base nas recomendações recebidas.\nMonitoramento caseiro (quando possível): Aferição da pressão arterial ou glicemia capilar, embora nem sempre com a frequência ou técnica adequadas.\nNo entanto, os problemas e dificuldades atuais que esses usuários enfrentam no manejo de suas doenças são multifatoriais e contribuem significativamente para a baixa adesão ao tratamento e às políticas de cuidado:\n\nDesafios no Acesso e Continuidade do Cuidado no SUS:\n\nDificuldade de agendamento: Longas esperas para consultas especializadas ou mesmo com o médico da atenção primária, dificultando o acompanhamento regular.\nFalta de profissionais: Em algumas localidades, pode haver escassez de médicos, enfermeiros ou nutricionistas para um acompanhamento adequado.\nDisponibilidade de medicamentos: Ocasionalmente, pode haver falta de medicamentos específicos na rede pública, forçando o paciente a interromper o tratamento ou a arcar com custos próprios.\nFragmentação do cuidado: Dificuldade em ter um acompanhamento integrado entre diferentes níveis de atenção ou especialidades.\nFatores Socioeconômicos e Culturais:\n\nCusto indireto do tratamento: Mesmo com medicamentos gratuitos, a necessidade de transporte para consultas, o custo de alimentos saudáveis (frutas, verduras, produtos integrais e dietéticos) e a perda de dias de trabalho podem ser um fardo.\nBaixa literacia em saúde: Dificuldade em compreender a doença, a importância do tratamento contínuo (mesmo na ausência de sintomas), as orientações médicas e os riscos das complicações.\nCrenças e desinformação: Influência de informações incorretas, mitos sobre as doenças ou tratamentos, e descrença na eficácia da medicina tradicional.\nFalta de rede de apoio: Ausência de suporte familiar ou comunitário para incentivar a adesão e auxiliar nas mudanças de hábitos.\nAspectos Comportamentais e Psicológicos:\n\nComplexidade do tratamento: Múltiplos medicamentos com horários diferentes, dietas restritivas e a necessidade de mudanças significativas no estilo de vida podem ser percebidos como difíceis de seguir.\nAusência de sintomas imediatos: Como a hipertensão e o diabetes em fases iniciais podem ser assintomáticos, o paciente pode não perceber a gravidade da doença ou a urgência do tratamento.\nEfeitos colaterais dos medicamentos: Alguns medicamentos podem causar desconforto, levando ao abandono.\nFalta de motivação e esquecimento: Dificuldade em manter a disciplina a longo prazo, especialmente sem um acompanhamento próximo e motivador.\nQuestões de saúde mental: Condições como depressão ou ansiedade podem afetar a capacidade do paciente de cuidar de si.\nRelacionamento com a Equipe de Saúde:\n\nComunicação deficiente: Orientações pouco claras, falta de tempo na consulta para esclarecer dúvidas ou uma relação médico-paciente que não inspire confiança podem minar a adesão.\nFalta de acompanhamento proativo: Ausência de um sistema que monitore a adesão e intervenha quando necessário.\nEssa combinação de dificuldades resulta na baixa adesão às políticas de cuidados, que não só sobrecarrega o SUS com custos elevados de tratamento para complicações agudas e crônicas (como implantação de stents, amputações, diálise e cirurgias cardíacas), mas também causa um impacto imenso na qualidade de vida e na mortalidade desses pacientes, com consequências que, em muitos casos, seriam evitáveis com um manejo adequado e contínuo.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747225776786x862601418089646800/pitch_eita_recife_saude_20250514121759.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747235191868x631174857504881700/Projeto%20SUSIA-%20Agente%20Inteligente%20SUS.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747235452448x388541404593805400/Or%C3%A7amento%20Projeto%20SUSIA.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-14 12:12:00",
    "slug": "rel-prop-0067",
    "isSegundaFase": false,
    "evaluationIds": [
      "rel_av_0185",
      "rel_av_0232",
      "rel_av_0265",
      "rel_av_0287",
      "rel_av_0328"
    ],
    "operationIds": [
      "rel_op_0225",
      "rel_op_0270",
      "rel_op_0296",
      "rel_op_0316",
      "rel_op_0361"
    ]
  },
  {
    "id": "rel_prop_0068",
    "title": "PA e monitoramento",
    "sw_nome": "PA e monitoramento",
    "pf_nome": "Proponente / Autor (Curitiba)",
    "Nome_fantasia": "Empresa / Startup (09512130000188)",
    "Resp_nome": "Proponente / Autor (Curitiba)",
    "cidade": "Curitiba",
    "CNPJ": "09512130000188",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Os pacientes classificados como crônicos pelas unidades de saúde do SUS, especialmente das linhas de cuidado de hipertensão e diabetes, constituem um desafio por que são pacientes que resistem as boas práticas de saúde promovidas pela gestão da saúde. O motivo da resistência não é por que não desejam cuidar da própria saúde, mas por que têm 1.000 coisas para se preocupar antes da sua saúde - é um problema social, eles procuram a saúde pública somente quanto seu estado clínico está afetando seriamente suas atividades diárias. A facilitação do acesso ao paciente, compartilhar com o paciente tanto as metas quanto o progresso do seu quadro clínico, facilitar a comunicação com o paciente, torná-lo parte do processo de tomada de decisão, são meios para promover a adesão do paciente.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747241551644x110453987808442960/PA%20e%20monitoramento.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-14 13:53:00",
    "slug": "rel-prop-0068",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0069",
    "title": "Deck  Minha EVA 2025.1",
    "sw_nome": "Deck  Minha EVA 2025.1",
    "pf_nome": "Proponente / Autor (Curitiba)",
    "Nome_fantasia": "Empresa / Startup (41824728000115)",
    "Resp_nome": "Proponente / Autor (Curitiba)",
    "cidade": "Curitiba",
    "CNPJ": "41824728000115",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Atualmente, o usuário — como hortelões, técnicos da prefeitura e participantes das hortas — enfrenta esse desafio de forma manual e descentralizada, com registros em cadernos, planilhas ou por meio de comunicação informal (WhatsApp, bilhetes, mensagens orais).\n\nEssa forma de gestão gera diversos problemas, como:\n\nFalta de continuidade nas atividades entre turnos (quem vai à tarde não sabe o que foi feito de manhã);\n\nAusência de um histórico das ações realizadas (plantios, colheitas, problemas enfrentados);\n\nDificuldade em acompanhar o desempenho e engajamento das hortas;\n\nPouca capacitação continuada e suporte técnico no dia a dia, o que prejudica a produtividade e autonomia dos hortelões;\n\nFalta de dados concretos para as secretarias tomarem decisões ou justificarem investimentos.\n\nEssas dificuldades comprometem a eficiência da gestão, a valorização do trabalho dos participantes e o potencial de expansão da agricultura urbana nas cidades.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747193074750x369878792085485400/Pitch%20Deck-%20Minha%20EVA%202025.1.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747193818956x440735988685701000/Cronograma%20_Investimento%20estimado.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747193883565x594393719005197800/Fotos_eva_minhaeva.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-14 00:44:00",
    "slug": "rel-prop-0069",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0070",
    "title": "PlataformaSensorialParaCegos.docx (1)",
    "sw_nome": "PlataformaSensorialParaCegos.docx (1)",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Empresa / Startup (59636447000102)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": "59636447000102",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "Atualmente, pessoas cegas ou com deficiência visual geralmente utilizam a bengala longa ou cães-guia para detectar obstáculos e se locomover com segurança. No entanto, esses métodos apresentam algumas limitações. A bengala, por exemplo, detecta apenas obstáculos no chão ou em uma faixa muito próxima do corpo, deixando de identificar barreiras em altura média, como placas, galhos ou retrovisores. Já os cães guia são de difícil acesso, devido ao alto custo de treinamento e manutenção, além de estarem disponíveis para um número muito limitado de pessoas. Como resultado, muitos usuários enfrentam desafios diários como riscos de colisões, insegurança ao se locomover em ambientes desconhecidos e dependência de outras pessoas para tarefas básicas.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747234809700x507424516690666600/PlataformaSensorialParaCegos.docx%20%281%29.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-14 12:00:00",
    "slug": "rel-prop-0070",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0071",
    "title": "REbate",
    "sw_nome": "REbate",
    "pf_nome": "Proponente / Autor (Teresina)",
    "Nome_fantasia": "Equipe REbate (Teresina)",
    "Resp_nome": "Proponente / Autor (Teresina)",
    "cidade": "Teresina",
    "CNPJ": null,
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente, o cidadão-paciente enfrenta grandes desafios para controlar a hipertensão e o diabetes de forma eficaz. Na maioria dos casos, esse cuidado é realizado de maneira manual, fragmentada e reativa. Muitos utilizam cadernetas ou anotações em papel para registrar medições, quando possuem os equipamentos em casa. O acompanhamento nas Unidades Básicas de Saúde é irregular, muitas vezes prejudicado pela distância, longas filas ou falta de profissionais disponíveis. Além disso, faltam lembretes, incentivos e orientações acessíveis para manter hábitos saudáveis, como a prática de atividades físicas, alimentação balanceada e o retorno regular ao médico.\nO suporte digital quase não está presente na rotina desses pacientes, especialmente entre populações mais vulneráveis, que enfrentam limitações de conectividade, letramento digital ou até mesmo de compreensão das orientações médicas. Isso contribui para o abandono do tratamento, desinformação e baixa adesão. Ainda há um grande número de pessoas que vivem com pressão arterial ou glicemia alteradas sem saber — são os subdiagnosticados, que não passam por triagem ou acompanhamento adequado.\nAlém disso, do ponto de vista da gestão pública, os dados de saúde desses pacientes não estão organizados de forma integrada, o que dificulta o planejamento e a implementação de políticas públicas mais eficientes. Hoje, a Prefeitura não consegue visualizar, em tempo real, quais bairros têm maior risco, menor adesão ou maiores demandas de cuidado.\nDessa maneira, o cidadão lida com esse desafio de forma isolada, sem apoio contínuo, sem tecnologia acessível e sem uma rede conectada de cuidado. O REbate surge justamente para transformar essa realidade, oferecendo uma jornada de saúde preditiva, educativa e motivadora, que conecta o paciente à rede pública de forma inteligente e humanizada.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747182579912x165050756047369730/REBATE.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-13 21:38:00",
    "slug": "rel-prop-0071",
    "isSegundaFase": false,
    "evaluationIds": [
      "rel_av_0184",
      "rel_av_0230",
      "rel_av_0264",
      "rel_av_0286",
      "rel_av_0341"
    ],
    "operationIds": [
      "rel_op_0219",
      "rel_op_0269",
      "rel_op_0284",
      "rel_op_0317",
      "rel_op_0363"
    ]
  },
  {
    "id": "rel_prop_0072",
    "title": "instrucoes etapas projeto.md",
    "sw_nome": "instrucoes etapas projeto.md",
    "pf_nome": "Proponente / Autor (Rio de Janeiro)",
    "Nome_fantasia": "Equipe instrucoes (Rio de Janeiro)",
    "Resp_nome": "Proponente / Autor (Rio de Janeiro)",
    "cidade": "Rio de Janeiro",
    "CNPJ": null,
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Hoje, o desafio é resolvido com ações manuais, dispersas e pouco eficientes, tanto pela Secretaria quanto pelo cidadão.\nIsso gera altos custos, reincidência, impunidade e desmotivação. O RAIIF vem para transformar esse cenário com inteligência, automação e participação cidadã.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747180759284x916640792722025200/instrucoes_etapas_projeto.md",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747180760070x279757123546775500/Project%20Model%20Canvas%20%28PMC%29.md",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747180760858x148640076950705470/Metas%20SMART%20para%20o%20Projeto.md",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747180761437x155029248963089570/eap.md",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747180762183x584622127876911500/Descri%C3%A7%C3%B5es%20para%20Storyboard.md",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747180761757x710211330041010400/Raiif%20-%20Pitch%20Storytelling.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747180763302x946059165088642300/planejamento_estrategico.md"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-13 21:03:00",
    "slug": "rel-prop-0072",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0073",
    "title": "MEDIBOX",
    "sw_nome": "MEDIBOX",
    "pf_nome": "Proponente / Autor (Cajazeiras)",
    "Nome_fantasia": "Equipe MEDIBOX (Cajazeiras)",
    "Resp_nome": "Proponente / Autor (Cajazeiras)",
    "cidade": "Cajazeiras",
    "CNPJ": null,
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente, muitas pessoas dependem de alarmes no celular ou de caixas de remédios com horários indicados, porém esses métodos têm limitações: alarmes podem não tocar corretamente devido a problemas técnicos, notificações podem ser esquecidas ou ignoradas, e as caixas podem não indicar de forma precisa se o medicamento foi tomado. Esses métodos ainda são propensos a erros, o que prejudica a eficácia do tratamento e a segurança do usuário.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747154185252x431705629069336400/EQUIPE%20-%20MEDIBOX.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-13 13:38:00",
    "slug": "rel-prop-0073",
    "isSegundaFase": false,
    "evaluationIds": [
      "rel_av_0183",
      "rel_av_0226",
      "rel_av_0228",
      "rel_av_0261",
      "rel_av_0262",
      "rel_av_0280",
      "rel_av_0281",
      "rel_av_0339"
    ],
    "operationIds": [
      "rel_op_0195",
      "rel_op_0196",
      "rel_op_0280",
      "rel_op_0291",
      "rel_op_0325"
    ]
  },
  {
    "id": "rel_prop_0074",
    "title": "Fluxo Livre",
    "sw_nome": "Fluxo Livre",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe Fluxo (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Atualmente, o cidadão enfrenta os alagamentos de forma reativa, sem previsibilidade e com recursos limitados para prevenção ou resposta. As principais dificuldades enfrentadas incluem:\nFalta de dados em tempo real e de alertas confiáveis, o que dificulta o planejamento durante chuvas intensas;\nAlto índice de poluição nas redes de drenagem, causado principalmente pelo descarte irregular de resíduos;\nAusência de ferramentas estruturadas para participação cidadã, como sistemas de denúncia eficazes;\nDificuldade da gestão pública em priorizar ações, o que compromete o uso eficiente dos recursos disponíveis e reduz o impacto das intervenções preventivas.\nEm resumo, o desafio atual está na falta de integração entre tecnologia, engajamento cidadão e inteligência na gestão pública, o que limita a capacidade de resposta e prevenção.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747144991777x527877932890345800/Fluxo%20Livre.docx"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-13 11:24:00",
    "slug": "rel-prop-0074",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": [
      "rel_op_0551",
      "rel_op_0557",
      "rel_op_0599",
      "rel_op_0619",
      "rel_op_0645"
    ]
  },
  {
    "id": "rel_prop_0075",
    "title": "Deck   ContectaVital",
    "sw_nome": "Deck   ContectaVital",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe Deck (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente, o cidadão com doenças crônicas em Recife especialmente em regiões com menor acesso à saúde digitalizada enfrenta desafios significativos no acompanhamento diário de sua condição. Grande parte desses usuários depende de métodos manuais, como anotações em cadernos, alarmes convencionais ou lembretes verbais para lembrar da medicação e controle dos sintomas, o que é frequentemente falho e inconsistente. Além disso, muitos não têm acompanhamento frequente com profissionais de saúde devido à sobrecarga do sistema público, à dificuldade de locomoção ou à falta de acesso a consultas regulares, o que agrava a ausência de um monitoramento eficaz e contínuo.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747139168037x199843847840082140/Pitch%20Deck%20-%20ContectaVital.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-13 09:42:00",
    "slug": "rel-prop-0075",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0076",
    "title": "Ekonavi",
    "sw_nome": "Ekonavi",
    "pf_nome": "Proponente / Autor (Belo Horizonte)",
    "Nome_fantasia": "Empresa / Startup (46249763000171)",
    "Resp_nome": "Proponente / Autor (Belo Horizonte)",
    "cidade": "Belo Horizonte",
    "CNPJ": "46249763000171",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Atualmente, os desafios são enfrentados de forma desconectada, manual e pouco eficiente, com dificuldades como:\n\n-Desperdício diário de alimentos em feiras e hortas, sem canal de escoamento eficiente.\n\n-Falta de integração entre os elos da cadeia (produção, distribuição, compostagem).\n\n-Inexistência de ferramentas digitais para monitorar e rastrear resíduos ou excedentes.\n\n-Dificuldade em articular ações entre agricultura urbana e combate à fome.\n\n-Baixo reaproveitamento dos resíduos orgânicos, que acabam nos aterros.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747085089187x529949433743815740/Ekonavi%20-%20Recife%20-%2005-2025.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-12 18:28:00",
    "slug": "rel-prop-0076",
    "isSegundaFase": false,
    "evaluationIds": [
      "rel_av_0117",
      "rel_av_0130",
      "rel_av_0145",
      "rel_av_0156",
      "rel_av_0159"
    ],
    "operationIds": [
      "rel_op_0384",
      "rel_op_0392",
      "rel_op_0398",
      "rel_op_0413",
      "rel_op_0426"
    ]
  },
  {
    "id": "rel_prop_0077",
    "title": "Deck 10.0 mandar",
    "sw_nome": "Deck 10.0 mandar",
    "pf_nome": "Proponente / Autor (Madre de Deus)",
    "Nome_fantasia": "Empresa / Startup (60192706000124)",
    "Resp_nome": "Proponente / Autor (Madre de Deus)",
    "cidade": "Madre de Deus",
    "CNPJ": "60192706000124",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Testa se tratar sozinho, pede ajuda a terceiros, entra em contato com amigos e conhecidos para pedir orientação, entram em contato com os estabelecimentos de saúde que conhece e pesquisam na internet. \n\nDificuldade para obter informações claras sobre os serviços que necessita. \n\nTe desafio abrir a internet e encontrar que é o cardiologista com o valor mais acessível, que tem disponibilidade para um determinado dia que seria mais viável para você e que esteja entre os mais bem avaliados.  Parece impossível mais transformaremos isso em realidade.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1746973110897x958623164624975600/Pitch%20Deck%2010.0%20mandar.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-11 11:38:00",
    "slug": "rel-prop-0077",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0078",
    "title": "EITA Recife 2",
    "sw_nome": "EITA Recife 2",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Empresa / Startup (52914927000130)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": "52914927000130",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente, o manejo da hipertensão e diabetes envolve uma combinação de abordagens, e os pacientes enfrentam diversos desafios:\nMétodos Atuais de Manejo:\nConsultas presenciais: Pacientes realizam consultas periódicas com médicos e outros profissionais de saúde para monitoramento e ajuste do tratamento.\nMedicação: O uso regular de medicamentos prescritos é fundamental.\nAutomonitoramento: Muitos pacientes precisam medir regularmente a pressão arterial e/ou glicemia em casa.\nMudanças no estilo de vida: Adoção de dieta saudável, prática de exercícios físicos e controle do peso são cruciais.\nEducação em saúde: Pacientes recebem orientações sobre a doença, tratamento e autocuidado.\n\nProblemas e Dificuldades Atuais:\nBaixa Adesão ao Tratamento:\nDificuldade em seguir a prescrição médica corretamente (horários, doses).\nEsquecimento de tomar a medicação.\nFalta de motivação para manter as mudanças no estilo de vida.\nCustos dos medicamentos.\nSegundo a Organização Mundial da Saúde (OMS), a baixa adesão ao tratamento crônico é um problema global, com impacto significativo nos resultados de saúde.  \nDificuldades no Autocuidado:\nComplexidade das recomendações (dieta, exercícios).\nFalta de conhecimento e habilidades para realizar o automonitoramento corretamente.\nDificuldade em interpretar os resultados do automonitoramento.\nFalta de apoio para manter as mudanças no estilo de vida.\nAcesso e Qualidade da Atenção à Saúde:\nDificuldade em agendar consultas e obter acompanhamento regular.\nTempo limitado das consultas, o que dificulta a educação em saúde e o esclarecimento de dúvidas.\nDesigualdades no acesso aos serviços de saúde, especialmente em áreas remotas ou para populações de baixa renda.\nUm estudo publicado na Revista de Saúde Pública apontou desafios na organização da atenção às condições crônicas no Brasil, incluindo a necessidade de melhorar o acesso e a coordenação dos cuidados.  \nFalta de Suporte Contínuo:\nPacientes muitas vezes se sentem desamparados entre as consultas, sem suporte para lidar com dúvidas e dificuldades.\nA falta de comunicação eficiente entre pacientes e profissionais de saúde dificulta o ajuste oportuno do tratamento.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1746965908421x500011684772936300/Projeto%20EITA%20Recife-2.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-11 09:18:00",
    "slug": "rel-prop-0078",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0079",
    "title": "Lixo Zero Radar Documentacao",
    "sw_nome": "Lixo Zero Radar Documentacao",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe Lixo (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Atualmente, o cidadão que deseja denunciar descarte irregular de lixo enfrenta uma série de dificuldades e barreiras, tornando o processo lento, ineficaz ou até inexistente. \n\n\t•\tFalta de um canal ágil, confiável e acessível.\n\t•\tNenhum incentivo para agir de forma contínua.\n\t•\tBaixo impacto individual percebido.\n\t•\tDificuldade em saber quais áreas precisam de mais atenção.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1746940678333x186671994143653440/Lixo_Zero_Radar_Documentacao.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-11 02:23:00",
    "slug": "rel-prop-0079",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0080",
    "title": "GIRO   pitch a problem (desperdício) pptx (1)",
    "sw_nome": "GIRO   pitch a problem (desperdício) pptx (1)",
    "pf_nome": "Proponente / Autor (São Paulo)",
    "Nome_fantasia": "Equipe GIRO (São Paulo)",
    "Resp_nome": "Proponente / Autor (São Paulo)",
    "cidade": "São Paulo",
    "CNPJ": null,
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "COMO É FEITO:\nControle de estoque feito com papel, cadernos, planilhas manuais ou anotações informais\n\nPROBLEMAS E DIFICULDADES:\nFalta de previsibilidade de compras e insumos\nSem alertas sobre validade ou perdas\nDificuldade de gestão em meio à operação corrida do dia a dia\nAlto índice de desperdício (4 a 10% dos alimentos)\nBaixa margem de lucro por falhas na reposição e CMV\nSobras que não são reaproveitadas ou doadas por ausência de processos\nBaixa inteligência de dados sobre operação e compras",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747081797360x620934892386458600/GIRO%20-%20pitch%20a%20problem%20%28desperdi%CC%81cio%29%20pptx%20%281%29.pptx"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-12 17:41:00",
    "slug": "rel-prop-0080",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0081",
    "title": "NAV+Saúde Completo",
    "sw_nome": "NAV+Saúde Completo",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe NAV+Saúde (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente o cuida é fragmentado, não compartilhado com o usuário, não há engajamento e não é colocado o usuário como protagonista e participante ativo da jornada de cuidados, repercutindo na baixa adesão ao tratamento, aumento de abandono e cronicidade gerando complicações evitáveis como o pé diabético e amputações e até o óbito por doenças cardiovasculares. Com o NAV+ o acesso seguro as informações, facilidade de compreensão e aumento na tomada de decisão assertiva na sua saúde, o usuário se sente participante de sua jornada de cuidado com maior vinculação se segurança as informações prestadas por seus profissionais de saúde e tem o auxílio  digital na navegação do sistema de saúde para realizar exames e consultas a especialistas, bem como os profissionais  qualificam o acompanhamento clínico com estratificação de risco e apoio e a verificação do grau de letramento em saúde para facilitar a conduta clinica a cada paciente com o apoia digital da plataforma que sugere condutas e cuidados, incluindo os casos mais difíceis, aumentando assim a resolutividade da APS.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1746912864634x832017039412111000/Projeto_%20NAV%2BSa%C3%BAde%20Completo.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1746912880238x833467893715998500/Resumo%20da%20Apresenta%C3%A7%C3%A3o%20do%20Projeto.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1746912884996x414850237135005800/LOGO%20NAV%20%2B.png"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-10 21:17:00",
    "slug": "rel-prop-0081",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0082",
    "title": "MEDIBOX",
    "sw_nome": "MEDIBOX",
    "pf_nome": "Proponente / Autor (Cajazeiras)",
    "Nome_fantasia": "Equipe MEDIBOX (Cajazeiras)",
    "Resp_nome": "Proponente / Autor (Cajazeiras)",
    "cidade": "Cajazeiras",
    "CNPJ": null,
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente, muitas pessoas dependem de alarmes no celular ou de caixas de remédios com horários indicados, porém esses métodos têm limitações: alarmes podem não tocar corretamente devido a problemas técnicos, notificações podem ser esquecidas ou ignoradas, e as caixas podem não indicar de forma precisa se o medicamento foi tomado. Esses métodos ainda são propensos a erros, o que prejudica a eficácia do tratamento e a segurança do usuário.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1747152542204x132483241009328180/EQUIPE%20-%20MEDIBOX.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-13 13:14:00",
    "slug": "rel-prop-0082",
    "isSegundaFase": false,
    "evaluationIds": [
      "rel_av_0183",
      "rel_av_0226",
      "rel_av_0228",
      "rel_av_0261",
      "rel_av_0262",
      "rel_av_0280",
      "rel_av_0281",
      "rel_av_0339"
    ],
    "operationIds": [
      "rel_op_0195",
      "rel_op_0196",
      "rel_op_0280",
      "rel_op_0291",
      "rel_op_0325"
    ]
  },
  {
    "id": "rel_prop_0083",
    "title": "SaveAdd",
    "sw_nome": "SaveAdd",
    "pf_nome": "Proponente / Autor (São Paulo)",
    "Nome_fantasia": "Empresa / Startup (33897050000172)",
    "Resp_nome": "Proponente / Autor (São Paulo)",
    "cidade": "São Paulo",
    "CNPJ": "33897050000172",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Hoje, o usuário lida com o desafio de forma fragmentada e ineficiente. As ações de combate à fome, redistribuição de alimentos e controle de estoques são feitas, na maioria das vezes, de forma manual, com planilhas, listas impressas ou troca informal de mensagens entre atores. A logística é improvisada, com baixa rastreabilidade, falta de integração entre os elos da cadeia (como supermercados, bancos de alimentos, cozinhas comunitárias e secretarias), e ausência de indicadores confiáveis para tomada de decisão.\nComo consequência, há alto desperdício, baixa previsibilidade, subutilização de doações e uma dificuldade enorme em mensurar o real impacto social das ações. Além disso, muitas vezes, alimentos são descartados mesmo com potencial de aproveitamento, e os beneficiários têm pouco ou nenhum poder de escolha, o que reduz a dignidade e a eficiência do processo.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1746910828128x159896394942814940/Cronograma-%20Projeto%20EITA%20Recife.xlsx",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1746910829470x347977112690857300/Gerenciamento%20de%20excedentes%20para%20uso%20de%20incentivo%20social%20%282%29.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1746910831203x807696896502241300/Relat%C3%B3rio%20de%20aprendizagem%20-%20Jornada%20ASG%20-%20Vers%C3%A3o%20Final.docx%20-%20signed.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1746910834263x752128493199706400/SaveAdd%20EITA.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-10 19:40:00",
    "slug": "rel-prop-0083",
    "isSegundaFase": false,
    "evaluationIds": [
      "rel_av_0116",
      "rel_av_0129",
      "rel_av_0146",
      "rel_av_0154",
      "rel_av_0158"
    ],
    "operationIds": [
      "rel_op_0385",
      "rel_op_0388",
      "rel_op_0399",
      "rel_op_0412",
      "rel_op_0428"
    ]
  },
  {
    "id": "rel_prop_0084",
    "title": "Fluxo Livre",
    "sw_nome": "Fluxo Livre",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe Fluxo (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "O sistema de canais e galerias pluviais existente é comprometido por três fatores críticos: Descarte inadequado de resíduos sólidos pela população, Falta de monitoramento preventivo e fiscalização contínua e Dificuldade de priorização eficiente nas ações de desobstrução pelo poder público.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1746738503227x406680151179813250/Fluxo%20Livre.docx"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-08 21:03:00",
    "slug": "rel-prop-0084",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": [
      "rel_op_0551",
      "rel_op_0557",
      "rel_op_0599",
      "rel_op_0619",
      "rel_op_0645"
    ]
  },
  {
    "id": "rel_prop_0085",
    "title": "Proposta EITA #0085",
    "sw_nome": "Proposta EITA #0085",
    "pf_nome": "Proponente / Autor (RECIFE)",
    "Nome_fantasia": "Equipe Proposta (RECIFE)",
    "Resp_nome": "Proponente / Autor (RECIFE)",
    "cidade": "RECIFE",
    "CNPJ": null,
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente, o acompanhamento é feito de forma fragmentada e prescritiva. Não há integração com informações como risco cardiovascular, adesão ao tratamento e dados de autocuidado. O paciente depende de consultas esporádicas, muitas vezes sem retorno objetivo sobre sua evolução. A baixa adesão e a ausência de uma resposta rápida a alterações de risco são barreiras graves.",
    "documentos": [],
    "emailEnviado": true,
    "dataCadastro": "2025-05-05 21:47:00",
    "slug": "rel-prop-0085",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0086",
    "title": "Projeto Biblioteca Acessível   DESAFIO EITA RECIFE",
    "sw_nome": "Projeto Biblioteca Acessível   DESAFIO EITA RECIFE",
    "pf_nome": "Proponente / Autor (Fortaleza)",
    "Nome_fantasia": "Empresa / Startup (33823613000188)",
    "Resp_nome": "Proponente / Autor (Fortaleza)",
    "cidade": "Fortaleza",
    "CNPJ": "33823613000188",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "Atualmente, estudantes com deficiência visual dependem predominantemente de materiais transcritos ou impressos em braile, o que é caro, limitado e pouco acessível. Muitas vezes, eles enfrentam a escassez de livros e recursos atualizados nas bibliotecas, além de dificuldades de transporte e acesso a conteúdos digitais adaptados. A falta de recursos tecnológicos acessíveis também impede que esses estudantes tenham autonomia na leitura e na criação de textos, limitando seu potencial de aprendizagem. No dia a dia, eles enfrentam obstáculos que dificultam sua inclusão plena na rotina escolar e social. Essas dificuldades contribuem para a sua exclusão e maior dependência de terceiros.\n\nOutro desafio importante é a alta despesa envolvida na produção de materiais acessíveis, como livros em braile, que são significativamente caros e pouco distribuídos. Essa realidade reduz o acesso a conteúdos atualizados e diversificados, restringindo o desenvolvimento do estudante. A falta de dispositivos portáteis, acessíveis e integrados impede que esses indivíduos tenham uma experiência de leitura tranquila, confortável e autônoma. Além disso, muitas escolas públicas não dispõem de recursos adequados para atender a demanda crescente. Assim, eles enfrentam uma educação inadequada, muitas vezes deficiente em recursos que poderiam promover sua autonomia e inclusão social.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1746707017429x303434623958503500/_Projeto%20Biblioteca%20Acessi%CC%81vel%20-%20DESAFIO%20EITA-RECIFE%20-%20.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-08 09:26:00",
    "slug": "rel-prop-0086",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0087",
    "title": "TB protocolo",
    "sw_nome": "TB protocolo",
    "pf_nome": "Proponente / Autor (São Paulo)",
    "Nome_fantasia": "Empresa / Startup (55791359000116)",
    "Resp_nome": "Proponente / Autor (São Paulo)",
    "cidade": "São Paulo",
    "CNPJ": "55791359000116",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Hoje, muitas pessoas com diabetes recorrem a grupos de redes sociais, planilhas manuais, aplicativos fragmentados e consultas médicas esporádicas para tentar lidar com o desafio diário do autocuidado. Esses métodos, no entanto, exigem esforço, tempo, conhecimento técnico e nem sempre estão acessíveis, especialmente para populações com menor letramento digital ou em situação de vulnerabilidade social. A falta de acompanhamento contínuo e personalizado dificulta a adesão ao tratamento e pode levar a complicações de saúde.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1746734279377x274191441573666600/TB_protocolo.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-08 16:58:00",
    "slug": "rel-prop-0087",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0088",
    "title": "Recife   Desafio 1   Saúde",
    "sw_nome": "Recife   Desafio 1   Saúde",
    "pf_nome": "Proponente / Autor (São Paulo)",
    "Nome_fantasia": "Empresa / Startup (38217648000197)",
    "Resp_nome": "Proponente / Autor (São Paulo)",
    "cidade": "São Paulo",
    "CNPJ": "38217648000197",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente, o paciente com hipertensão ou diabetes depende principalmente de consultas presenciais espaçadas na unidade de saúde, onde recebe orientações e receitas; entre as consultas, o autocuidado depende dele mesmo ou de familiares. Profissionais de saúde usam prontuários manuais ou eletrônicos para acompanhamento, mas com pouca comunicação ativa entre consultas. Gestores acompanham resultados apenas por relatórios agregados periódicos, com dados muitas vezes desatualizados.\n- Principais problemas e dificuldades atuais:\n- Baixa adesão a medicamentos e mudanças de estilo de vida por esquecimento, desinformação ou desmotivação;\n- Falta de comunicação contínua e personalizada com profissionais;\n- Sobrecarga de equipes, dificultando acompanhamento ativo de todos os pacientes;\n- Ausência de alertas proativos para identificar riscos antes de agravamentos;\n- Gestão populacional fragmentada, sem dados em tempo real para orientar decisões;\n- Falta de ferramentas digitais simples e acessíveis para apoiar pacientes no dia a dia.\nPor fim, o processo atual torna o cidadão deveres \"passivo\", sobrecarregando sistema, tecnologias e rede de suporte para averiguar que ele entende, realiza e, de fato, está sendo direcionado para os melhores desfechos.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1746491512716x802762998652392700/Recife%20-%20Desafio%201%20-%20Sau%CC%81de.pptx"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-05 21:33:00",
    "slug": "rel-prop-0088",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0089",
    "title": "Recife   Desafio 1   Saúde",
    "sw_nome": "Recife   Desafio 1   Saúde",
    "pf_nome": "Proponente / Autor (São Paulo)",
    "Nome_fantasia": "Empresa / Startup (38217648000197)",
    "Resp_nome": "Proponente / Autor (São Paulo)",
    "cidade": "São Paulo",
    "CNPJ": "38217648000197",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente, o paciente com hipertensão ou diabetes depende principalmente de consultas presenciais espaçadas na unidade de saúde, onde recebe orientações e receitas; entre as consultas, o autocuidado depende dele mesmo ou de familiares. Profissionais de saúde usam prontuários manuais ou eletrônicos para acompanhamento, mas com pouca comunicação ativa entre consultas. Gestores acompanham resultados apenas por relatórios agregados periódicos, com dados muitas vezes desatualizados.\n- Principais problemas e dificuldades atuais:\n- Baixa adesão a medicamentos e mudanças de estilo de vida por esquecimento, desinformação ou desmotivação;\n- Falta de comunicação contínua e personalizada com profissionais;\n- Sobrecarga de equipes, dificultando acompanhamento ativo de todos os pacientes;\n- Ausência de alertas proativos para identificar riscos antes de agravamentos;\n- Gestão populacional fragmentada, sem dados em tempo real para orientar decisões;\n- Falta de ferramentas digitais simples e acessíveis para apoiar pacientes no dia a dia.\nPor fim, o processo atual torna o cidadão deveres \"passivo\", sobrecarregando sistema, tecnologias e rede de suporte para averiguar que ele entende, realiza e, de fato, está sendo direcionado para os melhores desfechos.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1746491439685x882176367922626900/Recife%20-%20Desafio%201%20-%20Sau%CC%81de.pptx"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-05 21:31:00",
    "slug": "rel-prop-0089",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0090",
    "title": "file 00000000ebc861f7a78391e968387ec6 (1)",
    "sw_nome": "file 00000000ebc861f7a78391e968387ec6 (1)",
    "pf_nome": "Proponente / Autor (Araraquara sp)",
    "Nome_fantasia": "Equipe file (Araraquara sp)",
    "Resp_nome": "Proponente / Autor (Araraquara sp)",
    "cidade": "Araraquara sp",
    "CNPJ": null,
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Lixo comum, aterros e poluição do solo, aguas e ar",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1746474897499x427443476105048500/file_00000000ebc861f7a78391e968387ec6%20%281%29.png"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-05 16:55:00",
    "slug": "rel-prop-0090",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0091",
    "title": "Epistemic   Edital Eita Recife",
    "sw_nome": "Epistemic   Edital Eita Recife",
    "pf_nome": "Proponente / Autor (São Paulo)",
    "Nome_fantasia": "Empresa / Startup (232794)",
    "Resp_nome": "Proponente / Autor (São Paulo)",
    "cidade": "São Paulo",
    "CNPJ": "232794",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente o usuário relata seus últimos meses de tratamento para o médico. Mas relatos são imprecisos na maioria das vezes.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1746458796898x951334862230856600/Projeto%20Epistemic%20-%20Edital%20Eita%20Recife.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1746458797815x171574276834575400/Apresenta%C3%A7%C3%A3o_Epistemic.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-05 12:32:00",
    "slug": "rel-prop-0091",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0092",
    "title": "RecicloBR",
    "sw_nome": "RecicloBR",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Empresa / Startup (60229995000199)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": "60229995000199",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "A maior parte dos gestores públicos municipais e estaduais enfrenta sérias limitações na gestão de resíduos sólidos urbanos. Em muitos municípios, os dados sobre geração, transporte e destinação final de resíduos são coletados de forma manual, descentralizada e sem padronização. Informações chegam por meio de planilhas, documentos físicos, relatórios esparsos ou registros inconsistentes, o que dificulta a consolidação de indicadores confiáveis, onde, os sistemas existentes nos aterros e centros de triagem, quando existem, geralmente não são integrados entre si nem com as secretarias responsáveis. Isso gera um cenário de baixa rastreabilidade dos resíduos, com dificuldade de comprovação de ações ambientais, o que compromete o acesso a benefícios como o ICMS Socioambiental. Outro problema é a ausência de uma ferramenta que conecte os diversos atores da cadeia — como catadores, cooperativas, transportadores, recicladores e cidadãos — de forma estruturada. A coleta seletiva, quando existe, costuma ter baixa adesão e não é georreferenciada, dificultando o planejamento de rotas e o aproveitamento de materiais recicláveis. Por parte do cidadão também é limitada. Falta acesso fácil a informações sobre como e onde descartar corretamente, além da ausência de incentivos claros para a participação ativa da população no processo de separação e destinação correta dos resíduos. O modelo atual é fragmentado, ineficiente e com baixa transparência. Os gestores gastam mais tempo com tarefas operacionais do que com planejamento estratégico, montando planilhas excel, com informações que chega de vários lugares da cadeia e o resultado é uma gestão ambiental vulnerável, com pouco impacto real e desperdício de recursos públicos.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1745961509711x951189519340186800/RecicloBR.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-04-29 18:23:00",
    "slug": "rel-prop-0092",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0093",
    "title": "Apresentação VER TI  8 (1)",
    "sw_nome": "Apresentação VER TI  8 (1)",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Empresa / Startup (54899594000143)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": "54899594000143",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "Atualmente, os usuários que enfrentam desafios de mobilidade urbana inclusiva recorrem a soluções limitadas e muitas vezes ineficientes. Principais problemas e dificuldades que eles enfrentam:\n\n1. Falta de Acessibilidade no Transporte Público\nMuitos ônibus e metrôs não possuem infraestrutura adequada, como rampas, elevadores e sinalização tátil.\n\nA ausência de informações em áudio e braille dificulta a locomoção de pessoas com deficiência visual.\n\n2. Dependência de Serviços de Transporte Tradicionais:\nAplicativos de transporte não oferecem recursos acessíveis, como comando de voz para solicitação de corridas.\n\nMotoristas nem sempre estão capacitados para atender PCDs de forma adequada.\n\n3. Barreiras Urbanas e Infraestrutura Deficiente:\nCalçadas irregulares, falta de rampas e ausência de sinalização sonora tornam a locomoção perigosa.\n\nA mobilidade urbana ainda é excludente, dificultando o acesso a serviços essenciais.\n\n4. Alto Custo e Falta de Incentivos:\nO transporte acessível muitas vezes tem custos elevados, tornando-se inviável para muitos usuários.\nPor não ter acesso ou conhecimento da tecnologia, os PCDS e grande parte da população é explorado financeiramente, por fazer o contato direto com o motorista, sendo cobrado um valor abusivo e colocando em risco o usuário por não ter monitoramento durante o seu percurso \n\nFalta de subsídios governamentais para incentivar soluções inclusivas.\n\nA Ver-TI Mobilidade Urbana Inclusiva busca resolver esses desafios com sua tecnologia assistiva, oferecendo um aplicativo com comando de voz, treinamento de motoristas e parcerias estratégicas para garantir acessibilidade real.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1746296252815x738511495405157900/Apresentac%CC%A7a%CC%83o%20VER-TI%20-8%20%281%29.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1746296365861x241302160432801400/Ver-TI%20Institucional.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-05-03 15:36:00",
    "slug": "rel-prop-0093",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0094",
    "title": "Picth Ver TI 10 PAG",
    "sw_nome": "Picth Ver TI 10 PAG",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Empresa / Startup (54899594000143)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": "54899594000143",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "Ver-TI Mobilidade Urbana Inclusiva busca resolver os desafios da acessibilidade no transporte urbano por meio de tecnologias inovadoras, incluindo comando de voz para facilitar a interação de usuários com deficiência visual, baixa visão, surdos, pessoas com Mal de Parkinson, autistas, idosos e toda a população.\n\nComo o usuário resolve esse desafio hoje?\nAdaptação às tecnologias existentes: Muitos usuários dependem de aplicativos de transporte tradicionais, que nem sempre são acessíveis ou intuitivos para pessoas com deficiência.\n\nApoio de terceiros: Pessoas com deficiência visual ou baixa visão muitas vezes precisam da ajuda de familiares ou motoristas para entender trajetos e informações sobre o transporte.\n\nSoluções improvisadas: Alguns usuários recorrem a tecnologias alternativas, como assistentes de voz em celulares, para buscar informações sobre deslocamentos.\n\nProblemas e dificuldades atuais\nFalta de padronização na acessibilidade: Muitos sistemas de transporte público não possuem interfaces adequadas para comandos de voz, dificultando a autonomia dos usuários.\n\nBarreiras na comunicação: Usuários surdos e aqueles com dificuldades motoras, como Mal de Parkinson, encontram desafios na interação com motoristas e plataformas de transporte.\n\nCumprimento de prazos e validação: A Ver-TI está em fase de validação do seu APP e precisa garantir que todas as funcionalidades planejadas atendam de maneira eficiente às necessidades dos usuários.\n\nInclusão digital: Nem todos os usuários têm acesso a dispositivos modernos ou conhecimento tecnológico suficiente para utilizar aplicativos de mobilidade.\n\nCom a validação do APP junto ao Instituto de Cegos de Pernambuco, a Ver-TI busca superar essas dificuldades, garantindo uma solução acessível, intuitiva e eficiente para todos os usuários. 🚀",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1745594110758x206495440603119200/Picth%20Ver-TI%2010%20PAG.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-04-25 12:25:00",
    "slug": "rel-prop-0094",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0095",
    "title": "Rotas.txt",
    "sw_nome": "Rotas.txt",
    "pf_nome": "Proponente / Autor (Curitiba)",
    "Nome_fantasia": "Empresa / Startup (43982725000135)",
    "Resp_nome": "Proponente / Autor (Curitiba)",
    "cidade": "Curitiba",
    "CNPJ": "43982725000135",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "Atualmente é muito desafiador falar sobre acessibilidade e autonomia de pessoas com deficiência em um aspecto geral, mas pode ser ainda mais grava ao tratar-se de pessoas com deficiência visual, muitas vezes inclusive invisíveis. O alto custo e até mesmo a escassez de recursos (como cão guia) estão dentre as maiores dificuldades.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1745634852015x489347827540365760/Rotas.txt"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-04-25 23:34:00",
    "slug": "rel-prop-0095",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0096",
    "title": "Proposta EITA #0096",
    "sw_nome": "Proposta EITA #0096",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe Proposta (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "1",
    "documentos": [],
    "emailEnviado": true,
    "dataCadastro": "2025-04-11 19:46:00",
    "slug": "rel-prop-0096",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0097",
    "title": "LidEye Emprel",
    "sw_nome": "LidEye Emprel",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Empresa / Startup (15224708000101)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": "15224708000101",
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "x",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1744397120966x802589554497366700/LidEye_Emprel.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-04-11 15:46:00",
    "slug": "rel-prop-0097",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0098",
    "title": "EITAPCR",
    "sw_nome": "EITAPCR",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Empresa / Startup (4187388000169)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": "4187388000169",
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "O desafio ao combate e ao descarte irregular de resíduos sólidos no Recife é enfrentado com ações predominantemente reativas e operacionais, que demandam alto investimento de tempo, pessoal e recursos públicos. A gestão da cidade utiliza o mapeamento dos cerca de 1.700 pontos críticos de descarte para organizar a coleta, sem dados em tempo real, remoção e limpeza dos locais, muitas vezes executadas de forma repetitiva, com necessidade de atuação diária ou semanal em alguns trechos, e as vezes através de denuncias. A fiscalização é feita de forma limitada, com equipes de campo, que atuam presencialmente após a formação dos pontos de descarte. Quando há flagrante, a autuação é realizada por meio da apreensão do veículo ou identificação do imóvel gerador. No entanto, a ausência de sistemas de monitoramento contínuo, e inteligência operacional torna esse modelo pouco eficaz. Em muitos casos, não é possível identificar o responsável pelo descarte, o que gera impunidade, reincidência e ineficiência no cumprimento da legislação. A falta de integração entre os dados operacionais, como frequência de coleta, equipamentos disponíveis, origem dos resíduos e localização dos descartes, dificulta o planejamento preventivo e a tomada de decisão estratégica. As ações são descentralizadas entre diferentes órgãos (EMLURB, CTTU, SEMAM, Guarda Municipal), o que fragmenta o combate ao problema e sobrecarrega o orçamento público. Outro grande obstáculo é a baixa conscientização da população, que, em muitos casos, desconhece os serviços de coleta regular, os canais de denúncia e as penalidades previstas na legislação. Isso favorece a informalidade, a atuação de carroceiros irregulares e o descarte por parte de obras e comércios, contribuindo para a perpetuação dos pontos críticos. Nossa solução entrega uma IA, com mapas térmicos de áreas de reincidência, para a prevenção de casos, trazendo benefícios para o gerador, no descarte adequado, como redução de taxa de limpeza urbana, através da Gamificação.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1746021297725x122590988729674340/EITAPCR.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-04-30 11:01:00",
    "slug": "rel-prop-0098",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0099",
    "title": "Godigital (fábrica de idéias) (1)",
    "sw_nome": "Godigital (fábrica de idéias) (1)",
    "pf_nome": "Proponente / Autor (PETROLINA- PE)",
    "Nome_fantasia": "Empresa / Startup (58740502000139)",
    "Resp_nome": "Proponente / Autor (PETROLINA- PE)",
    "cidade": "PETROLINA- PE",
    "CNPJ": "58740502000139",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "TECNOLOGIA PARA RESOLVER O PROBLEMA DO ENVELHECER.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1744154550666x968609198512143000/Godigital%20%28f%C3%A1brica%20de%20id%C3%A9ias%29%20%281%29.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-04-08 20:25:00",
    "slug": "rel-prop-0099",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0100",
    "title": "Vida e saúde.",
    "sw_nome": "Vida e saúde.",
    "pf_nome": "Proponente / Autor (PETROLINA- PE)",
    "Nome_fantasia": "Empresa / Startup (58740502000139)",
    "Resp_nome": "Proponente / Autor (PETROLINA- PE)",
    "cidade": "PETROLINA- PE",
    "CNPJ": "58740502000139",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "RESOLVE O ABSENTISMO NA SAÚDE A MÉDIO PRAZO E NO LONGO UMA POPULAÇÃO ENVELHECENDO COM QUALIDADE DE VIDA.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1744152926681x525374209296408000/Vida%20e%20sa%C3%BAde..pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-04-08 19:59:00",
    "slug": "rel-prop-0100",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0101",
    "title": "Resumo Projeto   EcoEduca",
    "sw_nome": "Resumo Projeto   EcoEduca",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe Resumo (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Atualmente, o desafio da educação ambiental é enfrentado com ações pontuais, materiais tradicionais e pouco engajadores. Os estudantes e professores lidam com conteúdos teóricos e desconectados da realidade, muitas vezes sem recursos tecnológicos ou apoio pedagógico contínuo. Isso gera desinteresse, falta de prática e pouca conscientização real. O Ecoeduca surge justamente para preencher essa lacuna, oferecendo uma solução acessível, prática e interativa.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1743892098496x359303627741416300/Resumo_Projeto%20-%20EcoEduca.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1743892132414x804359225889195200/TAP.pdf",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1743892178074x549799504295080700/Infraestrutura%20de%20Dados%20%281%29.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-04-05 19:43:00",
    "slug": "rel-prop-0101",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0102",
    "title": "Padlet   Censo Papeleira",
    "sw_nome": "Padlet   Censo Papeleira",
    "pf_nome": "Proponente / Autor (Rio de Janeiro)",
    "Nome_fantasia": "Equipe Padlet (Rio de Janeiro)",
    "Resp_nome": "Proponente / Autor (Rio de Janeiro)",
    "cidade": "Rio de Janeiro",
    "CNPJ": null,
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Atualmente, o monitoramento dos pontos críticos de descarte irregular é feito por meio de rondas presenciais, denúncias da população e fiscalização à paisana. A remoção dos resíduos exige mobilização constante de recursos, aumentando os custos operacionais. As dificuldades incluem:\n\n    • Falta de tecnologia para rastreamento e fiscalização em tempo real.\n\n    • Dificuldade na punição devido à impunidade quando não há apreensão de veículos ou identificação dos responsáveis.\n\n    • Falta de integração de dados entre diferentes órgãos para ação coordenada.\n\n    • Alto custo de manutenção devido à reincidência do problema e necessidade de remoção frequente dos resíduos.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1743719673864x746448209259956200/Padlet%20-%20Censo%20Papeleira.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-04-03 19:37:00",
    "slug": "rel-prop-0102",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0103",
    "title": "HRV4life",
    "sw_nome": "HRV4life",
    "pf_nome": "Proponente / Autor (Uberlândia)",
    "Nome_fantasia": "Empresa / Startup (39940057000106)",
    "Resp_nome": "Proponente / Autor (Uberlândia)",
    "cidade": "Uberlândia",
    "CNPJ": "39940057000106",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Hoje, o acompanhamento de pessoas com doenças crônicas como hipertensão e diabetes é feito majoritariamente de forma presencial e reativa, por meio de consultas, exames periódicos e orientações em grupos ou campanhas de saúde. Muitas vezes, o cidadão só procura atendimento quando os sintomas se agravam, o que gera atrasos na intervenção e sobrecarga no sistema. \n\nQuais são os problemas e dificuldades atuais? \n-Falta de monitoramento contínuo e acessível, o que dificulta ações preventivas; \n-Baixa adesão ao autocuidado, por ausência de feedback direto e recursos intuitivos; \n-Sobrecarga nos serviços de saúde, com atendimentos e internações evitáveis; \n-Falta de dados em tempo real para apoiar a tomada de decisão da gestão pública; \n-Dependência de dispositivos caros (wearables), que limitam o alcance das soluções de monitoramento; \n-Dificuldade em escalar soluções personalizadas de forma simples e eficaz.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1743950901146x911692508021527000/Apresenta%C3%A7%C3%A3o%20do%20sistema%20HRV4Life.mp4"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-04-06 11:49:00",
    "slug": "rel-prop-0103",
    "isSegundaFase": false,
    "evaluationIds": [
      "rel_av_0173",
      "rel_av_0193",
      "rel_av_0213",
      "rel_av_0214",
      "rel_av_0259"
    ],
    "operationIds": [
      "rel_op_0293",
      "rel_op_0328",
      "rel_op_0331",
      "rel_op_0351",
      "rel_op_0367"
    ]
  },
  {
    "id": "rel_prop_0104",
    "title": "Padlet   Censo Papeleira",
    "sw_nome": "Padlet   Censo Papeleira",
    "pf_nome": "Proponente / Autor (Rio de Janeiro)",
    "Nome_fantasia": "Equipe Padlet (Rio de Janeiro)",
    "Resp_nome": "Proponente / Autor (Rio de Janeiro)",
    "cidade": "Rio de Janeiro",
    "CNPJ": null,
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Atualmente, o monitoramento dos pontos críticos de descarte irregular é feito por meio de rondas presenciais, denúncias da população e fiscalização à paisana. A remoção dos resíduos exige mobilização constante de recursos, aumentando os custos operacionais. As dificuldades incluem:\n\n    Falta de tecnologia para rastreamento e fiscalização em tempo real.\n\n    Dificuldade na punição devido à impunidade quando não há apreensão de veículos ou identificação dos responsáveis.\n\n    Falta de integração de dados entre diferentes órgãos para ação coordenada.\n\n    Alto custo de manutenção devido à reincidência do problema e necessidade de remoção frequente dos resíduos.\nObs.: https://padlet.com/luizpenna/intelig-ncia-opera-o-p2tatdgy5vq51pql",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1743715888285x148555912651402200/Padlet%20-%20Censo%20Papeleira.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-04-03 19:25:00",
    "slug": "rel-prop-0104",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0105",
    "title": "Godigital (fábrica de idéias) (1)",
    "sw_nome": "Godigital (fábrica de idéias) (1)",
    "pf_nome": "Proponente / Autor (PETROLINA- PE)",
    "Nome_fantasia": "Empresa / Startup (58740502000139)",
    "Resp_nome": "Proponente / Autor (PETROLINA- PE)",
    "cidade": "PETROLINA- PE",
    "CNPJ": "58740502000139",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Um problema é a falta de profissionais na saúde.\nOutro é o sedentarismo da população controlada na poltrona pela tela da globo.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1744313808000x449928198918954100/Godigital%20%28f%C3%A1brica%20de%20id%C3%A9ias%29%20%281%29.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-04-10 16:41:00",
    "slug": "rel-prop-0105",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0106",
    "title": "Proposta CPSI Recife   Apresentação Pública.pptx",
    "sw_nome": "Proposta CPSI Recife   Apresentação Pública.pptx",
    "pf_nome": "Proponente / Autor (Florianópolis)",
    "Nome_fantasia": "Empresa / Startup (53215529000199)",
    "Resp_nome": "Proponente / Autor (Florianópolis)",
    "cidade": "Florianópolis",
    "CNPJ": "53215529000199",
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "O usuário resolver de forma emergencial e sem tecnologia o problema. Não há uma política pública consolidada e efetiva sobre o problema, não há ferramentas adequadas de planejamento territorial e gestão da problemática para o ente público. As dificuldades atuais são controlar o problema, diminuir as áreas de descarte irregular, e transformar o problema em uma oportunidade de geração de valor e deselvolvimento sustentável.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1743428191480x377226566374234900/Apresenta%C3%A7%C3%A3o%20Proposta%20CPSI%20Recife%20-%20Apresenta%C3%A7%C3%A3o%20P%C3%BAblica.pptx.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-03-31 10:46:00",
    "slug": "rel-prop-0106",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0107",
    "title": "Proposta EITA #0107",
    "sw_nome": "Proposta EITA #0107",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe Proposta (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "",
    "documentos": [],
    "emailEnviado": true,
    "dataCadastro": "2025-03-31 09:54:00",
    "slug": "rel-prop-0107",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0108",
    "title": "Esboc%CC%A7o.pdf",
    "sw_nome": "Esboc%CC%A7o.pdf",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe Esboc%CC%A7o.pdf (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Não resolve. O descaso da população e omissão dos órgãos governamentais",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1743340454270x575436554318450100/Esboc%25CC%25A7o.pdf.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-03-30 10:15:00",
    "slug": "rel-prop-0108",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0109",
    "title": "Proposta EITA #0109",
    "sw_nome": "Proposta EITA #0109",
    "pf_nome": "Proponente / Autor (RECIFE)",
    "Nome_fantasia": "Empresa / Startup (79582907487)",
    "Resp_nome": "Proponente / Autor (RECIFE)",
    "cidade": "RECIFE",
    "CNPJ": "79582907487",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "comoResolve": "resolução de difícil  acesso . educacional",
    "documentos": [],
    "emailEnviado": true,
    "dataCadastro": "2025-04-02 14:47:00",
    "slug": "rel-prop-0109",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0110",
    "title": "Fresco Labs",
    "sw_nome": "Fresco Labs",
    "pf_nome": "Proponente / Autor (Curitiba)",
    "Nome_fantasia": "Empresa / Startup (43675493000172)",
    "Resp_nome": "Proponente / Autor (Curitiba)",
    "cidade": "Curitiba",
    "CNPJ": "43675493000172",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Atualmente, o desafio do desperdício de alimentos no varejo alimentar não é efetivamente enfrentado com tecnologia ou inteligência de dados. A maioria dos varejistas encara as perdas como parte inevitável da operação — um \"custo de se fazer negócios\". Não há uma cultura consolidada de gestão preditiva ou de monitoramento sistemático das causas do desperdício, e quando existem ações, elas são pontuais, reativas e desconectadas da cadeia como um todo.\n\nAlém disso, faltam ferramentas que considerem a complexidade da operação do varejo de perecíveis, como sazonalidade, clima, comportamento do consumidor e variações de fornecimento. Com isso, as decisões de compra são baseadas mais na experiência individual dos gestores do que em dados objetivos, o que leva a estoques superdimensionados, ruptura de produtos essenciais e descarte frequente de alimentos ainda próprios para consumo.\n\nTambém há baixa integração entre os diversos atores da cadeia alimentar, o que dificulta o reaproveitamento e a destinação correta dos alimentos. Mesmo quando há excedentes em boas condições, não existem fluxos logísticos organizados, nem mecanismos que facilitem a doação ou o redirecionamento para cozinhas comunitárias, bancos de alimentos ou compostagem.\n\nEssa desconexão entre produção, distribuição, consumo e descarte perpetua o desperdício e a insegurança alimentar — problemas que poderiam ser mitigados com o uso de tecnologia e inteligência preditiva aplicada à cadeia de suprimentos.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1742926386696x246667979376673500/Fresco%20Labs%20-%20One%20Pager%20-%20Case.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-03-25 15:33:00",
    "slug": "rel-prop-0110",
    "isSegundaFase": false,
    "evaluationIds": [
      "rel_av_0112",
      "rel_av_0124",
      "rel_av_0126",
      "rel_av_0149",
      "rel_av_0150"
    ],
    "operationIds": [
      "rel_op_0393",
      "rel_op_0414",
      "rel_op_0418",
      "rel_op_0427",
      "rel_op_0434"
    ]
  },
  {
    "id": "rel_prop_0111",
    "title": "Combustíveis sintéticos (9)",
    "sw_nome": "Combustíveis sintéticos (9)",
    "pf_nome": "Proponente / Autor (Curitiba)",
    "Nome_fantasia": "Empresa / Startup (29815565000109)",
    "Resp_nome": "Proponente / Autor (Curitiba)",
    "cidade": "Curitiba",
    "CNPJ": "29815565000109",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Os resíduos de alimentos e plásticos, além de resíduos sólidos urbanos, são descartados nos rios, ruas, lixões ou até mesmo em aterros sanitários, o que não é uma solução adequada para o futuro da sociedade. Esses resíduos atraem roedores, moscas e trazem doenças para a população vulnerável. Existe uma dificuldade na solução devido à falta de tecnologia e mercado que agregue valor aos resíduos e que tragam benefícios econômicos para o gerador ou até mesmo para redução de custo aos municípios.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1742924898558x743404198967371100/Combust%C3%ADveis%20sint%C3%A9ticos%20%289%29.pdf"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-03-25 15:04:00",
    "slug": "rel-prop-0111",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0112",
    "title": "Saúde Cinco",
    "sw_nome": "Saúde Cinco",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Empresa / Startup (54138304000149)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": "54138304000149",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "Atualmente, os usuários (pacientes com hipertensão e diabetes) enfrentam vários desafios e dificuldades para gerenciar suas condições de saúde, especialmente quando se trata de adotar e manter tratamentos a longo prazo. A falta de adesão ao tratamento é um problema comum, e os métodos tradicionais de monitoramento e acompanhamento têm limitações que impactam a eficácia do controle das doenças crônicas.\n\nComo o usuário resolve esse desafio atualmente:\n\nConsultas periódicas com profissionais de saúde: Pacientes com hipertensão e diabetes costumam agendar visitas regulares ao médico ou endocrinologista para monitorar os níveis de glicose, pressão arterial e ajustar tratamentos.\n\nUso de dispositivos manuais: Para medir a glicose, os pacientes usam glicosímetros manuais e precisam registrar os dados manualmente. Da mesma forma, o controle da pressão arterial é feito por meio de esfigmomanômetros, e esses dados também precisam ser anotados.\n\nMedicamentos prescritos: Pacientes geralmente têm que seguir um cronograma de medicamentos, mas sem um acompanhamento ativo diário ou lembretes, o esquecimento de doses é comum.\n\nControle manual de dados: Em muitos casos, os pacientes anotam manualmente os dados sobre pressão arterial, glicose e medicamentos, o que pode levar a erros de interpretação e dificuldades em acompanhar tendências de saúde ao longo do tempo.\n\nPrincipais problemas e dificuldades atuais:\n\nBaixa adesão ao tratamento: A adesão inconsistente ao tratamento é um problema frequente entre pacientes com doenças crônicas, especialmente em relação à medicação. A falta de acompanhamento contínuo pode levar ao esquecimento de tomar medicamentos ou medir parâmetros vitais, resultando em descontrole da doença.\n\nFalta de acompanhamento contínuo e personalizado: Muitos pacientes com hipertensão e diabetes não têm acesso a monitoramento contínuo. O acompanhamento médico é geralmente esporádico, ocorrendo apenas durante consultas periódicas. Isso dificulta a detecção precoce de complicações e impede ajustes rápidos no tratamento.\n\nDificuldade no auto-monitoramento: O auto-monitoramento exige que o paciente seja disciplinado e tenha conhecimento adequado para interpretar os resultados. Muitos pacientes podem ter dificuldade em entender os dados ou não se lembrar de registrar as medições, o que prejudica a análise da evolução da doença.\n\nFalta de motivação e suporte emocional: O controle de doenças crônicas é um processo longo e, muitas vezes, isolado. Pacientes frequentemente sentem falta de motivação e suporte contínuo para seguir as orientações médicas, o que pode resultar em desistência do tratamento ou falta de comprometimento com o autocuidado.\n\nAusência de dados integrados e em tempo real: O monitoramento de glicose e pressão arterial não é realizado de forma integrada. Muitas vezes, os dados dos dispositivos de monitoramento não são sincronizados automaticamente com o histórico médico, dificultando uma análise mais precisa do estado de saúde do paciente.\n\nDificuldade no acompanhamento remoto: Para pacientes com dificuldades de mobilidade ou que vivem em áreas remotas, o acompanhamento físico pode ser um desafio. Consultas médicas constantes nem sempre estão ao alcance do paciente, o que aumenta o risco de complicações não detectadas.\n\nDesinformação e falta de educação continuada: Muitos pacientes não têm acesso a informações contínuas sobre como controlar melhor sua condição. A falta de educação sobre hábitos saudáveis e como interpretar os dados coletados também pode prejudicar o controle das doenças crônicas.\n\nConclusão:\n\nOs usuários enfrentam desafios significativos relacionados à adesão ao tratamento, monitoramento eficaz e acompanhamento contínuo de suas condições de saúde. As soluções atuais, como consultas periódicas e uso manual de dispositivos, muitas vezes não são suficientes para garantir que o paciente mantenha o controle de sua condição de forma eficaz e sustentável. Por isso, a implementação de uma plataforma integrada como o CINCO pode resolver muitos desses problemas, oferecendo um monitoramento contínuo e personalizado, suporte constante e a possibilidade de ajustes rápidos no tratamento.",
    "documentos": [
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1742585142558x359990558686202900/Atendimento%20-%20Prontu%C3%A1rio%20CINCO.png",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1742585143269x624936162337640300/Atendimento%20Mobile%20%20-%20%20CINCO.png",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1742585144117x373501575260525060/Atendimento%20Mobile%20Hist%C3%B3rico%20%20-%20%20CINCO.png",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1742585144700x387832933866649300/Dashboard%20-%20Gestor%20CINCO.png",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1742585145712x972255046489704600/Dashboard%20-%20Profissional%20de%20sa%C3%BAde%20CINCO.png",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1742585146089x561819672624985340/Fichas%20de%20sa%C3%BAed%20-%20Prontu%C3%A1rio%20CINCO.png",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1742585147192x392120608767721800/Inicial%20Mobile%20-%20%20CINCO.png",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1742585148201x421719939770168300/Monitoramento%20Hist%C3%B3rico%20Mobile%20%20-%20%20CINCO.png",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1742585149084x354105693863575600/Monitoramento%20Mobile%201%20-%20%20CINCO.png",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1742585149771x250489043980437020/Monitoramento%20Mobile%202%20-%20%20CINCO.png",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1742585150680x532108694822110800/Prontu%C3%A1rio%20CINCO.png",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1742585152231x646150273879324300/Relat%C3%B3rio%20de%20pacientes%20-%20%20CINCO.png",
      "//2eb0cd16e008139946c2510a2de49dd6.cdn.bubble.io/f1742585152055x657891808036245500/Sincroniza%C3%A7%C3%A3o%20Mobile%20-%20%20CINCO.png"
    ],
    "emailEnviado": true,
    "dataCadastro": "2025-03-21 16:39:00",
    "slug": "rel-prop-0112",
    "isSegundaFase": false,
    "evaluationIds": [
      "rel_av_0171",
      "rel_av_0191",
      "rel_av_0192",
      "rel_av_0194",
      "rel_av_0216"
    ],
    "operationIds": [
      "rel_op_0337",
      "rel_op_0352",
      "rel_op_0354",
      "rel_op_0368",
      "rel_op_0375"
    ]
  },
  {
    "id": "rel_prop_0113",
    "title": "Proposta EITA #0113",
    "sw_nome": "Proposta EITA #0113",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe Proposta (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "",
    "documentos": [],
    "emailEnviado": true,
    "dataCadastro": "2025-03-19 19:30:00",
    "slug": "rel-prop-0113",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0114",
    "title": "Proposta EITA #0114",
    "sw_nome": "Proposta EITA #0114",
    "pf_nome": "Proponente / Autor (Jaboatão dos Guararapes)",
    "Nome_fantasia": "Equipe Proposta (Jaboatão dos Guararapes)",
    "Resp_nome": "Proponente / Autor (Jaboatão dos Guararapes)",
    "cidade": "Jaboatão dos Guararapes",
    "CNPJ": null,
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Atualmente a Emlurb incentiva a coleta seletiva e também pontos de descartes coletivos. Porém, ainda há grandes números de resíduos que não são descartados corretamente e acabam sendo jogados em rios ou canais.",
    "documentos": [],
    "emailEnviado": true,
    "dataCadastro": "2025-03-23 19:11:00",
    "slug": "rel-prop-0114",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0115",
    "title": "Proposta EITA #0115",
    "sw_nome": "Proposta EITA #0115",
    "pf_nome": "Proponente / Autor (Jaboatão dos Guararapes)",
    "Nome_fantasia": "Equipe Proposta (Jaboatão dos Guararapes)",
    "Resp_nome": "Proponente / Autor (Jaboatão dos Guararapes)",
    "cidade": "Jaboatão dos Guararapes",
    "CNPJ": null,
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Atualmente, o combate ao descarte irregular de resíduos em Recife é realizado principalmente pela Emlurb e pela Secretaria de Meio Ambiente, que depende de denúncias da população, rondas presenciais e ações de limpeza periódicas. No entanto, esse modelo apresenta diversas funcionalidades. A fiscalização é limitada, pois o monitoramento presencial não cobre toda a cidade, dificultando o flagrante de infratores. Além disso, as denúncias feitas pelos cidadãos podem demorar a ser atendidas e, muitas vezes, não há provas suficientes para responsabilizar quem comete a infração. Outro problema é a falta de conscientização da população, já que muitas pessoas desconhecem as formas corretas de descarte ou acreditam que o descarte irregular não traz consequências. Esses fatores tornam o processo de controle ineficiente, resultando em pontos recorrentes de acúmulo de lixo e impactos negativos para o meio ambiente e a saúde pública.",
    "documentos": [],
    "emailEnviado": true,
    "dataCadastro": "2025-03-19 12:53:00",
    "slug": "rel-prop-0115",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0116",
    "title": "Proposta EITA #0116",
    "sw_nome": "Proposta EITA #0116",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe Proposta (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como otimizar as técnicas de monitoramento e fiscalização para inibir os pontos de descarte irregular de resíduos na cidade?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "comoResolve": "Uso de móveis convencionais (madeira, plástico, metal)\nProblemas: Alto custo, impacto ambiental elevado (desmatamento, produção de plástico), dificuldade no descarte adequado.\nDificuldades: Transporte pesado, baixa acessibilidade para comunidades de baixa renda, produção menos sustentável.",
    "documentos": [],
    "emailEnviado": true,
    "dataCadastro": "2025-03-19 12:03:00",
    "slug": "rel-prop-0116",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0117",
    "title": "Proposta EITA #0117",
    "sw_nome": "Proposta EITA #0117",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe Proposta (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Desafio não especificado",
    "desafioCategory": "Geral",
    "comoResolve": "",
    "documentos": [],
    "emailEnviado": false,
    "dataCadastro": null,
    "slug": "rel-prop-0117",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  },
  {
    "id": "rel_prop_0118",
    "title": "Proposta EITA #0118",
    "sw_nome": "Proposta EITA #0118",
    "pf_nome": "Proponente / Autor (Recife)",
    "Nome_fantasia": "Equipe Proposta (Recife)",
    "Resp_nome": "Proponente / Autor (Recife)",
    "cidade": "Recife",
    "CNPJ": null,
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "comoResolve": "",
    "documentos": [],
    "emailEnviado": true,
    "dataCadastro": "2025-03-18 15:34:00",
    "slug": "rel-prop-0118",
    "isSegundaFase": false,
    "evaluationIds": [],
    "operationIds": []
  }
]

export const EITA_MENTOR_EVALUATIONS: EitaMentorEvaluation[] = [
  {
    "id": "rel_av_0001",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "FERNANDO ANTONIO NUNES DE SOUZA",
    "propostaNome": "Passo com Vos - Adapt-Free",
    "propostaMedia": null,
    "propostaScore": 3.15,
    "createdDate": "2025-07-08 17:55:00",
    "submissionId": null,
    "slug": "rel-av-0001"
  },
  {
    "id": "rel_av_0002",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "OTO BUREGIO DE LIMA",
    "propostaNome": "ALEXANDRE GUEDES RIBEIRO",
    "propostaMedia": 1,
    "propostaScore": 1,
    "createdDate": "2025-07-08 17:55:00",
    "submissionId": null,
    "slug": "rel-av-0002"
  },
  {
    "id": "rel_av_0003",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "OTO BUREGIO DE LIMA",
    "propostaNome": "Passo com Vos - Adapt-Free",
    "propostaMedia": 3.17,
    "propostaScore": 3.15,
    "createdDate": "2025-07-08 17:55:00",
    "submissionId": null,
    "slug": "rel-av-0003"
  },
  {
    "id": "rel_av_0004",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "OTO BUREGIO DE LIMA",
    "propostaNome": "VER-TI MOBILIDADE URBANA LTDA",
    "propostaMedia": 3.75,
    "propostaScore": 2.62,
    "createdDate": "2025-07-08 17:55:00",
    "submissionId": null,
    "slug": "rel-av-0004"
  },
  {
    "id": "rel_av_0005",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "OTO BUREGIO DE LIMA",
    "propostaNome": "Heyde Leão de Souza",
    "propostaMedia": 3.67,
    "propostaScore": 3.98,
    "createdDate": "2025-07-08 17:55:00",
    "submissionId": null,
    "slug": "rel-av-0005"
  },
  {
    "id": "rel_av_0006",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "OTO BUREGIO DE LIMA",
    "propostaNome": "Synesthesia Vision",
    "propostaMedia": 4.17,
    "propostaScore": 4.35,
    "createdDate": "2025-07-08 17:55:00",
    "submissionId": null,
    "slug": "rel-av-0006"
  },
  {
    "id": "rel_av_0007",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "OTO BUREGIO DE LIMA",
    "propostaNome": "BOB",
    "propostaMedia": 3.83,
    "propostaScore": 4.5,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": null,
    "slug": "rel-av-0007"
  },
  {
    "id": "rel_av_0008",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "OTO BUREGIO DE LIMA",
    "propostaNome": "Gralha Azul",
    "propostaMedia": 3.58,
    "propostaScore": 4.42,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": null,
    "slug": "rel-av-0008"
  },
  {
    "id": "rel_av_0009",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "OTO BUREGIO DE LIMA",
    "propostaNome": "See U",
    "propostaMedia": 4.17,
    "propostaScore": 3.67,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": null,
    "slug": "rel-av-0009"
  },
  {
    "id": "rel_av_0010",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "OTO BUREGIO DE LIMA",
    "propostaNome": "Vitor Gabriel Silva de Lima",
    "propostaMedia": 3.42,
    "propostaScore": 3.4,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": null,
    "slug": "rel-av-0010"
  },
  {
    "id": "rel_av_0011",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "OTO BUREGIO DE LIMA",
    "propostaNome": "Pulsetec",
    "propostaMedia": 1,
    "propostaScore": 1.58,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": null,
    "slug": "rel-av-0011"
  },
  {
    "id": "rel_av_0012",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "OTO BUREGIO DE LIMA",
    "propostaNome": "Brio: Mobilidade Segura para Pessoas com Deficiência",
    "propostaMedia": 3.75,
    "propostaScore": 4.38,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": null,
    "slug": "rel-av-0012"
  },
  {
    "id": "rel_av_0013",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "OTO BUREGIO DE LIMA",
    "propostaNome": "Passo Seguro",
    "propostaMedia": 3.42,
    "propostaScore": 4.33,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": "rel_prop_0041",
    "slug": "rel-av-0013"
  },
  {
    "id": "rel_av_0014",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "FERNANDO ANTONIO NUNES DE SOUZA",
    "propostaNome": "VER-TI MOBILIDADE URBANA LTDA",
    "propostaMedia": 1.25,
    "propostaScore": 2.62,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": null,
    "slug": "rel-av-0014"
  },
  {
    "id": "rel_av_0015",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "FERNANDO ANTONIO NUNES DE SOUZA",
    "propostaNome": "Heyde Leão de Souza",
    "propostaMedia": 4.58,
    "propostaScore": 3.98,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": null,
    "slug": "rel-av-0015"
  },
  {
    "id": "rel_av_0016",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "FERNANDO ANTONIO NUNES DE SOUZA",
    "propostaNome": "Synesthesia Vision",
    "propostaMedia": 4.08,
    "propostaScore": 4.35,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": null,
    "slug": "rel-av-0016"
  },
  {
    "id": "rel_av_0017",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "RAFAEL HENRIQUES PIMENTEL DE PAULA",
    "propostaNome": "ALEXANDRE GUEDES RIBEIRO",
    "propostaMedia": 1,
    "propostaScore": 1,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": null,
    "slug": "rel-av-0017"
  },
  {
    "id": "rel_av_0018",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "RAFAEL HENRIQUES PIMENTEL DE PAULA",
    "propostaNome": "Passo com Vos - Adapt-Free",
    "propostaMedia": 2.25,
    "propostaScore": 3.15,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": null,
    "slug": "rel-av-0018"
  },
  {
    "id": "rel_av_0019",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "OTO BUREGIO DE LIMA",
    "propostaNome": "Vixsystem",
    "propostaMedia": 3.75,
    "propostaScore": 4.5,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": null,
    "slug": "rel-av-0019"
  },
  {
    "id": "rel_av_0020",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO",
    "propostaNome": "Passo com Vos - Adapt-Free",
    "propostaMedia": 3.58,
    "propostaScore": 3.15,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": null,
    "slug": "rel-av-0020"
  },
  {
    "id": "rel_av_0021",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "RAFAEL HENRIQUES PIMENTEL DE PAULA",
    "propostaNome": "VER-TI MOBILIDADE URBANA LTDA",
    "propostaMedia": 2.58,
    "propostaScore": 2.62,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": null,
    "slug": "rel-av-0021"
  },
  {
    "id": "rel_av_0022",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO",
    "propostaNome": "ALEXANDRE GUEDES RIBEIRO",
    "propostaMedia": 1,
    "propostaScore": 1,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": null,
    "slug": "rel-av-0022"
  },
  {
    "id": "rel_av_0023",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO",
    "propostaNome": "BoraVer",
    "propostaMedia": 4.67,
    "propostaScore": 4.05,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": "rel_prop_0013",
    "slug": "rel-av-0023"
  },
  {
    "id": "rel_av_0024",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "OTO BUREGIO DE LIMA",
    "propostaNome": "Watt Consultoria",
    "propostaMedia": 3.58,
    "propostaScore": 4.08,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": "rel_prop_0035",
    "slug": "rel-av-0024"
  },
  {
    "id": "rel_av_0025",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO",
    "propostaNome": "VER-TI MOBILIDADE URBANA LTDA",
    "propostaMedia": 2.92,
    "propostaScore": 2.62,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": null,
    "slug": "rel-av-0025"
  },
  {
    "id": "rel_av_0026",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO",
    "propostaNome": "Heyde Leão de Souza",
    "propostaMedia": 4.42,
    "propostaScore": 3.98,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": null,
    "slug": "rel-av-0026"
  },
  {
    "id": "rel_av_0027",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "OTO BUREGIO DE LIMA",
    "propostaNome": "enkode",
    "propostaMedia": 3.75,
    "propostaScore": 4.25,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": null,
    "slug": "rel-av-0027"
  },
  {
    "id": "rel_av_0028",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO",
    "propostaNome": "Synesthesia Vision",
    "propostaMedia": 4.92,
    "propostaScore": 4.35,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": null,
    "slug": "rel-av-0028"
  },
  {
    "id": "rel_av_0029",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "OTO BUREGIO DE LIMA",
    "propostaNome": "Tech3",
    "propostaMedia": 4.75,
    "propostaScore": 4.68,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": null,
    "slug": "rel-av-0029"
  },
  {
    "id": "rel_av_0030",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "OTO BUREGIO DE LIMA",
    "propostaNome": "Visão e ritmo",
    "propostaMedia": 3.92,
    "propostaScore": 3.83,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": null,
    "slug": "rel-av-0030"
  },
  {
    "id": "rel_av_0031",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "OTO BUREGIO DE LIMA",
    "propostaNome": "BoraVer",
    "propostaMedia": 4.33,
    "propostaScore": 4.05,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": "rel_prop_0013",
    "slug": "rel-av-0031"
  },
  {
    "id": "rel_av_0032",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO",
    "propostaNome": "BOB",
    "propostaMedia": 5,
    "propostaScore": 4.5,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": null,
    "slug": "rel-av-0032"
  },
  {
    "id": "rel_av_0033",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO",
    "propostaNome": "Gralha Azul",
    "propostaMedia": 5,
    "propostaScore": 4.42,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": null,
    "slug": "rel-av-0033"
  },
  {
    "id": "rel_av_0034",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO",
    "propostaNome": "RAFAEL ANDRADE DA SILVA",
    "propostaMedia": 3.42,
    "propostaScore": 3.98,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": null,
    "slug": "rel-av-0034"
  },
  {
    "id": "rel_av_0035",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO",
    "propostaNome": "Hailton de Melo Lima Neto",
    "propostaMedia": 3.75,
    "propostaScore": 4.2,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": null,
    "slug": "rel-av-0035"
  },
  {
    "id": "rel_av_0036",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO",
    "propostaNome": "COLI",
    "propostaMedia": 4.83,
    "propostaScore": 4.62,
    "createdDate": "2025-07-08 17:56:00",
    "submissionId": "rel_prop_0006",
    "slug": "rel-av-0036"
  },
  {
    "id": "rel_av_0037",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO",
    "propostaNome": "Elucidar",
    "propostaMedia": 4.33,
    "propostaScore": 4.55,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": "rel_prop_0005",
    "slug": "rel-av-0037"
  },
  {
    "id": "rel_av_0038",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO",
    "propostaNome": "Visão e ritmo",
    "propostaMedia": 4.75,
    "propostaScore": 3.83,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0038"
  },
  {
    "id": "rel_av_0039",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO",
    "propostaNome": "See U",
    "propostaMedia": 4.33,
    "propostaScore": 3.67,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0039"
  },
  {
    "id": "rel_av_0040",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO",
    "propostaNome": "Vitor Gabriel Silva de Lima",
    "propostaMedia": 4.33,
    "propostaScore": 3.4,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0040"
  },
  {
    "id": "rel_av_0041",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO",
    "propostaNome": "Tech3",
    "propostaMedia": 4.67,
    "propostaScore": 4.68,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0041"
  },
  {
    "id": "rel_av_0042",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO",
    "propostaNome": "Pulsetec",
    "propostaMedia": 2,
    "propostaScore": 1.58,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0042"
  },
  {
    "id": "rel_av_0043",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO",
    "propostaNome": "Brio: Mobilidade Segura para Pessoas com Deficiência",
    "propostaMedia": 5,
    "propostaScore": 4.38,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0043"
  },
  {
    "id": "rel_av_0044",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "OTO BUREGIO DE LIMA",
    "propostaNome": "RAFAEL ANDRADE DA SILVA",
    "propostaMedia": 4,
    "propostaScore": 3.98,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0044"
  },
  {
    "id": "rel_av_0045",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "RAFAEL HENRIQUES PIMENTEL DE PAULA",
    "propostaNome": "Heyde Leão de Souza",
    "propostaMedia": 3.25,
    "propostaScore": 3.98,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0045"
  },
  {
    "id": "rel_av_0046",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "TIAGO MACEDO BEZERRA MAIA",
    "propostaNome": "ALEXANDRE GUEDES RIBEIRO",
    "propostaMedia": 1,
    "propostaScore": 1,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0046"
  },
  {
    "id": "rel_av_0047",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "TIAGO MACEDO BEZERRA MAIA",
    "propostaNome": "Tech3",
    "propostaMedia": 4.75,
    "propostaScore": 4.68,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0047"
  },
  {
    "id": "rel_av_0048",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "RAFAEL HENRIQUES PIMENTEL DE PAULA",
    "propostaNome": "Synesthesia Vision",
    "propostaMedia": 4.17,
    "propostaScore": 4.35,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0048"
  },
  {
    "id": "rel_av_0049",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "TIAGO MACEDO BEZERRA MAIA",
    "propostaNome": "Passo com Vos - Adapt-Free",
    "propostaMedia": 3.58,
    "propostaScore": 3.15,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0049"
  },
  {
    "id": "rel_av_0050",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "RAFAEL HENRIQUES PIMENTEL DE PAULA",
    "propostaNome": "BOB",
    "propostaMedia": 4.25,
    "propostaScore": 4.5,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0050"
  },
  {
    "id": "rel_av_0051",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "OTO BUREGIO DE LIMA",
    "propostaNome": "Hailton de Melo Lima Neto",
    "propostaMedia": 3.75,
    "propostaScore": 4.2,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0051"
  },
  {
    "id": "rel_av_0052",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "TIAGO MACEDO BEZERRA MAIA",
    "propostaNome": "VER-TI MOBILIDADE URBANA LTDA",
    "propostaMedia": 2.58,
    "propostaScore": 2.62,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0052"
  },
  {
    "id": "rel_av_0053",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "RAFAEL HENRIQUES PIMENTEL DE PAULA",
    "propostaNome": "Gralha Azul",
    "propostaMedia": 3.83,
    "propostaScore": 4.42,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0053"
  },
  {
    "id": "rel_av_0054",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "TIAGO MACEDO BEZERRA MAIA",
    "propostaNome": "Heyde Leão de Souza",
    "propostaMedia": 4,
    "propostaScore": 3.98,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0054"
  },
  {
    "id": "rel_av_0055",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "RAFAEL HENRIQUES PIMENTEL DE PAULA",
    "propostaNome": "See U",
    "propostaMedia": 3,
    "propostaScore": 3.67,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0055"
  },
  {
    "id": "rel_av_0056",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "TIAGO MACEDO BEZERRA MAIA",
    "propostaNome": "Synesthesia Vision",
    "propostaMedia": 4.42,
    "propostaScore": 4.35,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0056"
  },
  {
    "id": "rel_av_0057",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "RAFAEL HENRIQUES PIMENTEL DE PAULA",
    "propostaNome": "Vitor Gabriel Silva de Lima",
    "propostaMedia": 3,
    "propostaScore": 3.4,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0057"
  },
  {
    "id": "rel_av_0058",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "RAFAEL HENRIQUES PIMENTEL DE PAULA",
    "propostaNome": "Pulsetec",
    "propostaMedia": 1.92,
    "propostaScore": 1.58,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0058"
  },
  {
    "id": "rel_av_0059",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "TIAGO MACEDO BEZERRA MAIA",
    "propostaNome": "BOB",
    "propostaMedia": 4.92,
    "propostaScore": 4.5,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0059"
  },
  {
    "id": "rel_av_0060",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "TIAGO MACEDO BEZERRA MAIA",
    "propostaNome": "Gralha Azul",
    "propostaMedia": 4.67,
    "propostaScore": 4.42,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0060"
  },
  {
    "id": "rel_av_0061",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "RAFAEL HENRIQUES PIMENTEL DE PAULA",
    "propostaNome": "Brio: Mobilidade Segura para Pessoas com Deficiência",
    "propostaMedia": 4.25,
    "propostaScore": 4.38,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0061"
  },
  {
    "id": "rel_av_0062",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "TIAGO MACEDO BEZERRA MAIA",
    "propostaNome": "See U",
    "propostaMedia": 3.33,
    "propostaScore": 3.67,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0062"
  },
  {
    "id": "rel_av_0063",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "TIAGO MACEDO BEZERRA MAIA",
    "propostaNome": "Vitor Gabriel Silva de Lima",
    "propostaMedia": 3.17,
    "propostaScore": 3.4,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0063"
  },
  {
    "id": "rel_av_0064",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "TIAGO MACEDO BEZERRA MAIA",
    "propostaNome": "Pulsetec",
    "propostaMedia": 2,
    "propostaScore": 1.58,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0064"
  },
  {
    "id": "rel_av_0065",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "TIAGO MACEDO BEZERRA MAIA",
    "propostaNome": "Brio: Mobilidade Segura para Pessoas com Deficiência",
    "propostaMedia": 4.42,
    "propostaScore": 4.38,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": null,
    "slug": "rel-av-0065"
  },
  {
    "id": "rel_av_0066",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "TIAGO MACEDO BEZERRA MAIA",
    "propostaNome": "Passo Seguro",
    "propostaMedia": 5,
    "propostaScore": 4.33,
    "createdDate": "2025-07-08 17:57:00",
    "submissionId": "rel_prop_0041",
    "slug": "rel-av-0066"
  },
  {
    "id": "rel_av_0067",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "FERNANDO ANTONIO NUNES DE SOUZA",
    "propostaNome": "BOB",
    "propostaMedia": 4.5,
    "propostaScore": 4.5,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": null,
    "slug": "rel-av-0067"
  },
  {
    "id": "rel_av_0068",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "TIAGO MACEDO BEZERRA MAIA",
    "propostaNome": "Vixsystem",
    "propostaMedia": 4.92,
    "propostaScore": 4.5,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": null,
    "slug": "rel-av-0068"
  },
  {
    "id": "rel_av_0069",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "TIAGO MACEDO BEZERRA MAIA",
    "propostaNome": "Watt Consultoria",
    "propostaMedia": 4.83,
    "propostaScore": 4.08,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": "rel_prop_0035",
    "slug": "rel-av-0069"
  },
  {
    "id": "rel_av_0070",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "FERNANDO ANTONIO NUNES DE SOUZA",
    "propostaNome": "Gralha Azul",
    "propostaMedia": 5,
    "propostaScore": 4.42,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": null,
    "slug": "rel-av-0070"
  },
  {
    "id": "rel_av_0071",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "TIAGO MACEDO BEZERRA MAIA",
    "propostaNome": "enkode",
    "propostaMedia": 5,
    "propostaScore": 4.25,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": null,
    "slug": "rel-av-0071"
  },
  {
    "id": "rel_av_0072",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "TIAGO MACEDO BEZERRA MAIA",
    "propostaNome": "Elucidar",
    "propostaMedia": 5,
    "propostaScore": 4.55,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": "rel_prop_0005",
    "slug": "rel-av-0072"
  },
  {
    "id": "rel_av_0073",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "TIAGO MACEDO BEZERRA MAIA",
    "propostaNome": "Visão e ritmo",
    "propostaMedia": 4.25,
    "propostaScore": 3.83,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": null,
    "slug": "rel-av-0073"
  },
  {
    "id": "rel_av_0074",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "TIAGO MACEDO BEZERRA MAIA",
    "propostaNome": "RAFAEL ANDRADE DA SILVA",
    "propostaMedia": 3.67,
    "propostaScore": 3.98,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": null,
    "slug": "rel-av-0074"
  },
  {
    "id": "rel_av_0075",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "TIAGO MACEDO BEZERRA MAIA",
    "propostaNome": "BoraVer",
    "propostaMedia": 3.67,
    "propostaScore": 4.05,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": "rel_prop_0013",
    "slug": "rel-av-0075"
  },
  {
    "id": "rel_av_0076",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "TIAGO MACEDO BEZERRA MAIA",
    "propostaNome": "COLI",
    "propostaMedia": 4.25,
    "propostaScore": 4.62,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": "rel_prop_0006",
    "slug": "rel-av-0076"
  },
  {
    "id": "rel_av_0077",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "FERNANDO ANTONIO NUNES DE SOUZA",
    "propostaNome": "See U",
    "propostaMedia": 3.5,
    "propostaScore": 3.67,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": null,
    "slug": "rel-av-0077"
  },
  {
    "id": "rel_av_0078",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "TIAGO MACEDO BEZERRA MAIA",
    "propostaNome": "Hailton de Melo Lima Neto",
    "propostaMedia": 4.92,
    "propostaScore": 4.2,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": null,
    "slug": "rel-av-0078"
  },
  {
    "id": "rel_av_0079",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "FERNANDO ANTONIO NUNES DE SOUZA",
    "propostaNome": "Vitor Gabriel Silva de Lima",
    "propostaMedia": 3.08,
    "propostaScore": 3.4,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": null,
    "slug": "rel-av-0079"
  },
  {
    "id": "rel_av_0080",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "FERNANDO ANTONIO NUNES DE SOUZA",
    "propostaNome": "Pulsetec",
    "propostaMedia": 1,
    "propostaScore": 1.58,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": null,
    "slug": "rel-av-0080"
  },
  {
    "id": "rel_av_0081",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "FERNANDO ANTONIO NUNES DE SOUZA",
    "propostaNome": "Brio: Mobilidade Segura para Pessoas com Deficiência",
    "propostaMedia": 4.5,
    "propostaScore": 4.38,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": null,
    "slug": "rel-av-0081"
  },
  {
    "id": "rel_av_0082",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "RAFAEL HENRIQUES PIMENTEL DE PAULA",
    "propostaNome": "Passo Seguro",
    "propostaMedia": 4,
    "propostaScore": 4.33,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": "rel_prop_0041",
    "slug": "rel-av-0082"
  },
  {
    "id": "rel_av_0083",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "FERNANDO ANTONIO NUNES DE SOUZA",
    "propostaNome": "Passo Seguro",
    "propostaMedia": 4.5,
    "propostaScore": 4.33,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": "rel_prop_0041",
    "slug": "rel-av-0083"
  },
  {
    "id": "rel_av_0084",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "OTO BUREGIO DE LIMA",
    "propostaNome": "COLI",
    "propostaMedia": 4.5,
    "propostaScore": 4.62,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": "rel_prop_0006",
    "slug": "rel-av-0084"
  },
  {
    "id": "rel_av_0085",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO",
    "propostaNome": "Passo Seguro",
    "propostaMedia": 4.75,
    "propostaScore": 4.33,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": "rel_prop_0041",
    "slug": "rel-av-0085"
  },
  {
    "id": "rel_av_0086",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO",
    "propostaNome": "Vixsystem",
    "propostaMedia": 4.75,
    "propostaScore": 4.5,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": null,
    "slug": "rel-av-0086"
  },
  {
    "id": "rel_av_0087",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO",
    "propostaNome": "Watt Consultoria",
    "propostaMedia": 3.92,
    "propostaScore": 4.08,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": "rel_prop_0035",
    "slug": "rel-av-0087"
  },
  {
    "id": "rel_av_0088",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO",
    "propostaNome": "enkode",
    "propostaMedia": 4.58,
    "propostaScore": 4.25,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": null,
    "slug": "rel-av-0088"
  },
  {
    "id": "rel_av_0089",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "RAFAEL HENRIQUES PIMENTEL DE PAULA",
    "propostaNome": "Vixsystem",
    "propostaMedia": 4.33,
    "propostaScore": 4.5,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": null,
    "slug": "rel-av-0089"
  },
  {
    "id": "rel_av_0090",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "FERNANDO ANTONIO NUNES DE SOUZA",
    "propostaNome": "Vixsystem",
    "propostaMedia": 4.75,
    "propostaScore": 4.5,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": null,
    "slug": "rel-av-0090"
  },
  {
    "id": "rel_av_0091",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "OTO BUREGIO DE LIMA",
    "propostaNome": "Elucidar",
    "propostaMedia": 4,
    "propostaScore": 4.55,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": "rel_prop_0005",
    "slug": "rel-av-0091"
  },
  {
    "id": "rel_av_0092",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "FERNANDO ANTONIO NUNES DE SOUZA",
    "propostaNome": "Watt Consultoria",
    "propostaMedia": 3.83,
    "propostaScore": 4.08,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": "rel_prop_0035",
    "slug": "rel-av-0092"
  },
  {
    "id": "rel_av_0093",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "FERNANDO ANTONIO NUNES DE SOUZA",
    "propostaNome": "enkode",
    "propostaMedia": 4,
    "propostaScore": 4.25,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": null,
    "slug": "rel-av-0093"
  },
  {
    "id": "rel_av_0094",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "RAFAEL HENRIQUES PIMENTEL DE PAULA",
    "propostaNome": "Watt Consultoria",
    "propostaMedia": 4.25,
    "propostaScore": 4.08,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": "rel_prop_0035",
    "slug": "rel-av-0094"
  },
  {
    "id": "rel_av_0095",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "FERNANDO ANTONIO NUNES DE SOUZA",
    "propostaNome": "Tech3",
    "propostaMedia": 5,
    "propostaScore": 4.68,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": null,
    "slug": "rel-av-0095"
  },
  {
    "id": "rel_av_0096",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "RAFAEL HENRIQUES PIMENTEL DE PAULA",
    "propostaNome": "enkode",
    "propostaMedia": 3.92,
    "propostaScore": 4.25,
    "createdDate": "2025-07-08 17:58:00",
    "submissionId": null,
    "slug": "rel-av-0096"
  },
  {
    "id": "rel_av_0097",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "RAFAEL HENRIQUES PIMENTEL DE PAULA",
    "propostaNome": "Tech3",
    "propostaMedia": 4.25,
    "propostaScore": 4.68,
    "createdDate": "2025-07-08 17:59:00",
    "submissionId": null,
    "slug": "rel-av-0097"
  },
  {
    "id": "rel_av_0098",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "FERNANDO ANTONIO NUNES DE SOUZA",
    "propostaNome": "Visão e ritmo",
    "propostaMedia": 2.42,
    "propostaScore": 3.83,
    "createdDate": "2025-07-08 17:59:00",
    "submissionId": null,
    "slug": "rel-av-0098"
  },
  {
    "id": "rel_av_0099",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "FERNANDO ANTONIO NUNES DE SOUZA",
    "propostaNome": "BoraVer",
    "propostaMedia": 3.83,
    "propostaScore": 4.05,
    "createdDate": "2025-07-08 17:59:00",
    "submissionId": "rel_prop_0013",
    "slug": "rel-av-0099"
  },
  {
    "id": "rel_av_0100",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "RAFAEL HENRIQUES PIMENTEL DE PAULA",
    "propostaNome": "Visão e ritmo",
    "propostaMedia": 3.83,
    "propostaScore": 3.83,
    "createdDate": "2025-07-08 17:59:00",
    "submissionId": null,
    "slug": "rel-av-0100"
  },
  {
    "id": "rel_av_0101",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "RAFAEL HENRIQUES PIMENTEL DE PAULA",
    "propostaNome": "BoraVer",
    "propostaMedia": 3.75,
    "propostaScore": 4.05,
    "createdDate": "2025-07-08 17:59:00",
    "submissionId": "rel_prop_0013",
    "slug": "rel-av-0101"
  },
  {
    "id": "rel_av_0102",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "RAFAEL HENRIQUES PIMENTEL DE PAULA",
    "propostaNome": "RAFAEL ANDRADE DA SILVA",
    "propostaMedia": 4,
    "propostaScore": 3.98,
    "createdDate": "2025-07-08 17:59:00",
    "submissionId": null,
    "slug": "rel-av-0102"
  },
  {
    "id": "rel_av_0103",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "RAFAEL HENRIQUES PIMENTEL DE PAULA",
    "propostaNome": "Hailton de Melo Lima Neto",
    "propostaMedia": 4.08,
    "propostaScore": 4.2,
    "createdDate": "2025-07-08 17:59:00",
    "submissionId": null,
    "slug": "rel-av-0103"
  },
  {
    "id": "rel_av_0104",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "RAFAEL HENRIQUES PIMENTEL DE PAULA",
    "propostaNome": "COLI",
    "propostaMedia": 4.5,
    "propostaScore": 4.62,
    "createdDate": "2025-07-08 17:59:00",
    "submissionId": "rel_prop_0006",
    "slug": "rel-av-0104"
  },
  {
    "id": "rel_av_0105",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "RAFAEL HENRIQUES PIMENTEL DE PAULA",
    "propostaNome": "Elucidar",
    "propostaMedia": 4.75,
    "propostaScore": 4.55,
    "createdDate": "2025-07-08 17:59:00",
    "submissionId": "rel_prop_0005",
    "slug": "rel-av-0105"
  },
  {
    "id": "rel_av_0106",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "FERNANDO ANTONIO NUNES DE SOUZA",
    "propostaNome": "RAFAEL ANDRADE DA SILVA",
    "propostaMedia": 4.83,
    "propostaScore": 3.98,
    "createdDate": "2025-07-08 17:59:00",
    "submissionId": null,
    "slug": "rel-av-0106"
  },
  {
    "id": "rel_av_0107",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "FERNANDO ANTONIO NUNES DE SOUZA",
    "propostaNome": "Hailton de Melo Lima Neto",
    "propostaMedia": 4.5,
    "propostaScore": 4.2,
    "createdDate": "2025-07-08 17:59:00",
    "submissionId": null,
    "slug": "rel-av-0107"
  },
  {
    "id": "rel_av_0108",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "FERNANDO ANTONIO NUNES DE SOUZA",
    "propostaNome": "COLI",
    "propostaMedia": 5,
    "propostaScore": 4.62,
    "createdDate": "2025-07-08 17:59:00",
    "submissionId": "rel_prop_0006",
    "slug": "rel-av-0108"
  },
  {
    "id": "rel_av_0109",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "FERNANDO ANTONIO NUNES DE SOUZA",
    "propostaNome": "Elucidar",
    "propostaMedia": 4.67,
    "propostaScore": 4.55,
    "createdDate": "2025-07-08 17:59:00",
    "submissionId": "rel_prop_0005",
    "slug": "rel-av-0109"
  },
  {
    "id": "rel_av_0110",
    "desafio": "Como podemos prover acessibilidade visual de forma escalável, sustentável e economicamente viável, utilizando tecnologias emergentes que proporcionem autonomia e inclusão para pessoas cegas e com baixa visão?",
    "desafioCategory": "Acessibilidade Visual",
    "mentor": "FERNANDO ANTONIO NUNES DE SOUZA",
    "propostaNome": "ALEXANDRE GUEDES RIBEIRO",
    "propostaMedia": 1,
    "propostaScore": 1,
    "createdDate": "2025-07-08 17:59:00",
    "submissionId": null,
    "slug": "rel-av-0110"
  },
  {
    "id": "rel_av_0111",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "ADRIANA BARATA DOS SANTOS FIGUEIRA",
    "propostaNome": "Cyro Hernandez Calixto",
    "propostaMedia": 2.17,
    "propostaScore": 3.05,
    "createdDate": "2025-07-09 10:23:00",
    "submissionId": null,
    "slug": "rel-av-0111"
  },
  {
    "id": "rel_av_0112",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "ADRIANA BARATA DOS SANTOS FIGUEIRA",
    "propostaNome": "Fresco Labs",
    "propostaMedia": 1.75,
    "propostaScore": 3.72,
    "createdDate": "2025-07-09 10:23:00",
    "submissionId": "rel_prop_0110",
    "slug": "rel-av-0112"
  },
  {
    "id": "rel_av_0113",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "ADRIANA BARATA DOS SANTOS FIGUEIRA",
    "propostaNome": "Confiança real",
    "propostaMedia": 2.17,
    "propostaScore": 2.33,
    "createdDate": "2025-07-09 10:23:00",
    "submissionId": null,
    "slug": "rel-av-0113"
  },
  {
    "id": "rel_av_0114",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "LAURA CALDAS MIGUEL",
    "propostaNome": "Cyro Hernandez Calixto",
    "propostaMedia": 2.33,
    "propostaScore": 3.05,
    "createdDate": "2025-07-09 10:23:00",
    "submissionId": null,
    "slug": "rel-av-0114"
  },
  {
    "id": "rel_av_0115",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "ADRIANA BARATA DOS SANTOS FIGUEIRA",
    "propostaNome": "EMANUEL DA MOTA PASSOS",
    "propostaMedia": 1.92,
    "propostaScore": 2.48,
    "createdDate": "2025-07-09 10:23:00",
    "submissionId": null,
    "slug": "rel-av-0115"
  },
  {
    "id": "rel_av_0116",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "ADRIANA BARATA DOS SANTOS FIGUEIRA",
    "propostaNome": "SaveAdd",
    "propostaMedia": 2.17,
    "propostaScore": 4,
    "createdDate": "2025-07-09 10:23:00",
    "submissionId": "rel_prop_0083",
    "slug": "rel-av-0116"
  },
  {
    "id": "rel_av_0117",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "ADRIANA BARATA DOS SANTOS FIGUEIRA",
    "propostaNome": "Ekonavi",
    "propostaMedia": 3.5,
    "propostaScore": 3.97,
    "createdDate": "2025-07-09 10:23:00",
    "submissionId": "rel_prop_0076",
    "slug": "rel-av-0117"
  },
  {
    "id": "rel_av_0118",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "ADRIANA BARATA DOS SANTOS FIGUEIRA",
    "propostaNome": "EVA Agricultura Urbana",
    "propostaMedia": 3,
    "propostaScore": 3.82,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": null,
    "slug": "rel-av-0118"
  },
  {
    "id": "rel_av_0119",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "ADRIANA BARATA DOS SANTOS FIGUEIRA",
    "propostaNome": "Rafaela de Abreu Archangelo",
    "propostaMedia": 2.25,
    "propostaScore": 3.47,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": null,
    "slug": "rel-av-0119"
  },
  {
    "id": "rel_av_0120",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "ADRIANA BARATA DOS SANTOS FIGUEIRA",
    "propostaNome": "CincoduQuatro",
    "propostaMedia": 3.5,
    "propostaScore": 3.7,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": null,
    "slug": "rel-av-0120"
  },
  {
    "id": "rel_av_0121",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "ADRIANA BARATA DOS SANTOS FIGUEIRA",
    "propostaNome": "BDI Cooptec",
    "propostaMedia": 3.83,
    "propostaScore": 3.45,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": null,
    "slug": "rel-av-0121"
  },
  {
    "id": "rel_av_0122",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "ADRIANA BARATA DOS SANTOS FIGUEIRA",
    "propostaNome": "Associação Luminus",
    "propostaMedia": 3.75,
    "propostaScore": 4.05,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": "rel_prop_0053",
    "slug": "rel-av-0122"
  },
  {
    "id": "rel_av_0123",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "ADRIANA BARATA DOS SANTOS FIGUEIRA",
    "propostaNome": "REVIRA",
    "propostaMedia": 3.75,
    "propostaScore": 3.43,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": null,
    "slug": "rel-av-0123"
  },
  {
    "id": "rel_av_0124",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "LAURA CALDAS MIGUEL",
    "propostaNome": "Fresco Labs",
    "propostaMedia": 2.75,
    "propostaScore": 3.72,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": "rel_prop_0110",
    "slug": "rel-av-0124"
  },
  {
    "id": "rel_av_0125",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "JOAO HENRIQUE DE LIMA LOBO",
    "propostaNome": "Cyro Hernandez Calixto",
    "propostaMedia": 2.08,
    "propostaScore": 3.05,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": null,
    "slug": "rel-av-0125"
  },
  {
    "id": "rel_av_0126",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "JOAO HENRIQUE DE LIMA LOBO",
    "propostaNome": "Fresco Labs",
    "propostaMedia": 4.75,
    "propostaScore": 3.72,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": "rel_prop_0110",
    "slug": "rel-av-0126"
  },
  {
    "id": "rel_av_0127",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "JOAO HENRIQUE DE LIMA LOBO",
    "propostaNome": "Confiança real",
    "propostaMedia": 2.75,
    "propostaScore": 2.33,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": null,
    "slug": "rel-av-0127"
  },
  {
    "id": "rel_av_0128",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "JOAO HENRIQUE DE LIMA LOBO",
    "propostaNome": "EMANUEL DA MOTA PASSOS",
    "propostaMedia": 3.33,
    "propostaScore": 2.48,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": null,
    "slug": "rel-av-0128"
  },
  {
    "id": "rel_av_0129",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "JOAO HENRIQUE DE LIMA LOBO",
    "propostaNome": "SaveAdd",
    "propostaMedia": 5,
    "propostaScore": 4,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": "rel_prop_0083",
    "slug": "rel-av-0129"
  },
  {
    "id": "rel_av_0130",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "JOAO HENRIQUE DE LIMA LOBO",
    "propostaNome": "Ekonavi",
    "propostaMedia": 4.75,
    "propostaScore": 3.97,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": "rel_prop_0076",
    "slug": "rel-av-0130"
  },
  {
    "id": "rel_av_0131",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "JOAO HENRIQUE DE LIMA LOBO",
    "propostaNome": "EVA Agricultura Urbana",
    "propostaMedia": 3.33,
    "propostaScore": 3.82,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": null,
    "slug": "rel-av-0131"
  },
  {
    "id": "rel_av_0132",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "JOAO HENRIQUE DE LIMA LOBO",
    "propostaNome": "Rafaela de Abreu Archangelo",
    "propostaMedia": 3.33,
    "propostaScore": 3.47,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": null,
    "slug": "rel-av-0132"
  },
  {
    "id": "rel_av_0133",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "JOAO HENRIQUE DE LIMA LOBO",
    "propostaNome": "CincoduQuatro",
    "propostaMedia": 4,
    "propostaScore": 3.7,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": null,
    "slug": "rel-av-0133"
  },
  {
    "id": "rel_av_0134",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "JOAO HENRIQUE DE LIMA LOBO",
    "propostaNome": "BDI Cooptec",
    "propostaMedia": 3.33,
    "propostaScore": 3.45,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": null,
    "slug": "rel-av-0134"
  },
  {
    "id": "rel_av_0135",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "JOAO HENRIQUE DE LIMA LOBO",
    "propostaNome": "Associação Luminus",
    "propostaMedia": 3.75,
    "propostaScore": 4.05,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": "rel_prop_0053",
    "slug": "rel-av-0135"
  },
  {
    "id": "rel_av_0136",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "JOAO HENRIQUE DE LIMA LOBO",
    "propostaNome": "REVIRA",
    "propostaMedia": 3.42,
    "propostaScore": 3.43,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": null,
    "slug": "rel-av-0136"
  },
  {
    "id": "rel_av_0137",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "LAURA CALDAS MIGUEL",
    "propostaNome": "Associação Luminus",
    "propostaMedia": 4.33,
    "propostaScore": 4.05,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": "rel_prop_0053",
    "slug": "rel-av-0137"
  },
  {
    "id": "rel_av_0138",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "LAURA CALDAS MIGUEL",
    "propostaNome": "BDI Cooptec",
    "propostaMedia": 1.75,
    "propostaScore": 3.45,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": null,
    "slug": "rel-av-0138"
  },
  {
    "id": "rel_av_0139",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "LAURA CALDAS MIGUEL",
    "propostaNome": "REVIRA",
    "propostaMedia": 3.67,
    "propostaScore": 3.43,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": null,
    "slug": "rel-av-0139"
  },
  {
    "id": "rel_av_0140",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "LAURA CALDAS MIGUEL",
    "propostaNome": "CincoduQuatro",
    "propostaMedia": 3.33,
    "propostaScore": 3.7,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": null,
    "slug": "rel-av-0140"
  },
  {
    "id": "rel_av_0141",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "LAURA CALDAS MIGUEL",
    "propostaNome": "Rafaela de Abreu Archangelo",
    "propostaMedia": 2,
    "propostaScore": 3.47,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": null,
    "slug": "rel-av-0141"
  },
  {
    "id": "rel_av_0142",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "LAURA CALDAS MIGUEL",
    "propostaNome": "EVA Agricultura Urbana",
    "propostaMedia": 4,
    "propostaScore": 3.82,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": null,
    "slug": "rel-av-0142"
  },
  {
    "id": "rel_av_0143",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "LAURA CALDAS MIGUEL",
    "propostaNome": "Confiança real",
    "propostaMedia": 1,
    "propostaScore": 2.33,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": null,
    "slug": "rel-av-0143"
  },
  {
    "id": "rel_av_0144",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "LAURA CALDAS MIGUEL",
    "propostaNome": "EMANUEL DA MOTA PASSOS",
    "propostaMedia": 1,
    "propostaScore": 2.48,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": null,
    "slug": "rel-av-0144"
  },
  {
    "id": "rel_av_0145",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "LAURA CALDAS MIGUEL",
    "propostaNome": "Ekonavi",
    "propostaMedia": 2.92,
    "propostaScore": 3.97,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": "rel_prop_0076",
    "slug": "rel-av-0145"
  },
  {
    "id": "rel_av_0146",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "LAURA CALDAS MIGUEL",
    "propostaNome": "SaveAdd",
    "propostaMedia": 3.42,
    "propostaScore": 4,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": "rel_prop_0083",
    "slug": "rel-av-0146"
  },
  {
    "id": "rel_av_0147",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "CESAR ARAUJO EVANGELISTA",
    "propostaNome": "Cyro Hernandez Calixto",
    "propostaMedia": 3.83,
    "propostaScore": 3.05,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": null,
    "slug": "rel-av-0147"
  },
  {
    "id": "rel_av_0148",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "EDER LIRA DE SOUZA LEAO",
    "propostaNome": "Cyro Hernandez Calixto",
    "propostaMedia": 4.83,
    "propostaScore": 3.05,
    "createdDate": "2025-07-09 10:24:00",
    "submissionId": null,
    "slug": "rel-av-0148"
  },
  {
    "id": "rel_av_0149",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "CESAR ARAUJO EVANGELISTA",
    "propostaNome": "Fresco Labs",
    "propostaMedia": 4.42,
    "propostaScore": 3.72,
    "createdDate": "2025-07-09 10:25:00",
    "submissionId": "rel_prop_0110",
    "slug": "rel-av-0149"
  },
  {
    "id": "rel_av_0150",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "EDER LIRA DE SOUZA LEAO",
    "propostaNome": "Fresco Labs",
    "propostaMedia": 4.92,
    "propostaScore": 3.72,
    "createdDate": "2025-07-09 10:25:00",
    "submissionId": "rel_prop_0110",
    "slug": "rel-av-0150"
  },
  {
    "id": "rel_av_0151",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "EDER LIRA DE SOUZA LEAO",
    "propostaNome": "Confiança real",
    "propostaMedia": 3.33,
    "propostaScore": 2.33,
    "createdDate": "2025-07-09 10:25:00",
    "submissionId": null,
    "slug": "rel-av-0151"
  },
  {
    "id": "rel_av_0152",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "CESAR ARAUJO EVANGELISTA",
    "propostaNome": "Confiança real",
    "propostaMedia": 2.42,
    "propostaScore": 2.33,
    "createdDate": "2025-07-09 10:25:00",
    "submissionId": null,
    "slug": "rel-av-0152"
  },
  {
    "id": "rel_av_0153",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "EDER LIRA DE SOUZA LEAO",
    "propostaNome": "EMANUEL DA MOTA PASSOS",
    "propostaMedia": 4.17,
    "propostaScore": 2.48,
    "createdDate": "2025-07-09 10:25:00",
    "submissionId": null,
    "slug": "rel-av-0153"
  },
  {
    "id": "rel_av_0154",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "EDER LIRA DE SOUZA LEAO",
    "propostaNome": "SaveAdd",
    "propostaMedia": 5,
    "propostaScore": 4,
    "createdDate": "2025-07-09 10:25:00",
    "submissionId": "rel_prop_0083",
    "slug": "rel-av-0154"
  },
  {
    "id": "rel_av_0155",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "CESAR ARAUJO EVANGELISTA",
    "propostaNome": "EMANUEL DA MOTA PASSOS",
    "propostaMedia": 2,
    "propostaScore": 2.48,
    "createdDate": "2025-07-09 10:25:00",
    "submissionId": null,
    "slug": "rel-av-0155"
  },
  {
    "id": "rel_av_0156",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "EDER LIRA DE SOUZA LEAO",
    "propostaNome": "Ekonavi",
    "propostaMedia": 4.25,
    "propostaScore": 3.97,
    "createdDate": "2025-07-09 10:25:00",
    "submissionId": "rel_prop_0076",
    "slug": "rel-av-0156"
  },
  {
    "id": "rel_av_0157",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "EDER LIRA DE SOUZA LEAO",
    "propostaNome": "EVA Agricultura Urbana",
    "propostaMedia": 4.17,
    "propostaScore": 3.82,
    "createdDate": "2025-07-09 10:25:00",
    "submissionId": null,
    "slug": "rel-av-0157"
  },
  {
    "id": "rel_av_0158",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "CESAR ARAUJO EVANGELISTA",
    "propostaNome": "SaveAdd",
    "propostaMedia": 4.42,
    "propostaScore": 4,
    "createdDate": "2025-07-09 10:25:00",
    "submissionId": "rel_prop_0083",
    "slug": "rel-av-0158"
  },
  {
    "id": "rel_av_0159",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "CESAR ARAUJO EVANGELISTA",
    "propostaNome": "Ekonavi",
    "propostaMedia": 4.42,
    "propostaScore": 3.97,
    "createdDate": "2025-07-09 10:25:00",
    "submissionId": "rel_prop_0076",
    "slug": "rel-av-0159"
  },
  {
    "id": "rel_av_0160",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "CESAR ARAUJO EVANGELISTA",
    "propostaNome": "EVA Agricultura Urbana",
    "propostaMedia": 4.58,
    "propostaScore": 3.82,
    "createdDate": "2025-07-09 10:25:00",
    "submissionId": null,
    "slug": "rel-av-0160"
  },
  {
    "id": "rel_av_0161",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "CESAR ARAUJO EVANGELISTA",
    "propostaNome": "Rafaela de Abreu Archangelo",
    "propostaMedia": 4.83,
    "propostaScore": 3.47,
    "createdDate": "2025-07-09 10:25:00",
    "submissionId": null,
    "slug": "rel-av-0161"
  },
  {
    "id": "rel_av_0162",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "CESAR ARAUJO EVANGELISTA",
    "propostaNome": "CincoduQuatro",
    "propostaMedia": 4.08,
    "propostaScore": 3.7,
    "createdDate": "2025-07-09 10:25:00",
    "submissionId": null,
    "slug": "rel-av-0162"
  },
  {
    "id": "rel_av_0163",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "CESAR ARAUJO EVANGELISTA",
    "propostaNome": "BDI Cooptec",
    "propostaMedia": 4.5,
    "propostaScore": 3.45,
    "createdDate": "2025-07-09 10:25:00",
    "submissionId": null,
    "slug": "rel-av-0163"
  },
  {
    "id": "rel_av_0164",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "EDER LIRA DE SOUZA LEAO",
    "propostaNome": "Rafaela de Abreu Archangelo",
    "propostaMedia": 4.92,
    "propostaScore": 3.47,
    "createdDate": "2025-07-09 10:25:00",
    "submissionId": null,
    "slug": "rel-av-0164"
  },
  {
    "id": "rel_av_0165",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "CESAR ARAUJO EVANGELISTA",
    "propostaNome": "Associação Luminus",
    "propostaMedia": 3.83,
    "propostaScore": 4.05,
    "createdDate": "2025-07-09 10:25:00",
    "submissionId": "rel_prop_0053",
    "slug": "rel-av-0165"
  },
  {
    "id": "rel_av_0166",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "CESAR ARAUJO EVANGELISTA",
    "propostaNome": "REVIRA",
    "propostaMedia": 2.58,
    "propostaScore": 3.43,
    "createdDate": "2025-07-09 10:25:00",
    "submissionId": null,
    "slug": "rel-av-0166"
  },
  {
    "id": "rel_av_0167",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "EDER LIRA DE SOUZA LEAO",
    "propostaNome": "CincoduQuatro",
    "propostaMedia": 3.58,
    "propostaScore": 3.7,
    "createdDate": "2025-07-09 10:25:00",
    "submissionId": null,
    "slug": "rel-av-0167"
  },
  {
    "id": "rel_av_0168",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "EDER LIRA DE SOUZA LEAO",
    "propostaNome": "BDI Cooptec",
    "propostaMedia": 3.83,
    "propostaScore": 3.45,
    "createdDate": "2025-07-09 10:25:00",
    "submissionId": null,
    "slug": "rel-av-0168"
  },
  {
    "id": "rel_av_0169",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "EDER LIRA DE SOUZA LEAO",
    "propostaNome": "Associação Luminus",
    "propostaMedia": 4.58,
    "propostaScore": 4.05,
    "createdDate": "2025-07-09 10:25:00",
    "submissionId": "rel_prop_0053",
    "slug": "rel-av-0169"
  },
  {
    "id": "rel_av_0170",
    "desafio": "Como podemos reduzir o desperdício de alimentos, integrando os diferentes atores envolvidos, para promover aproveitamento de alimentos para consumo às populações em insegurança alimentar, garantindo a destinação adequada dos Resíduos Sólidos Orgânicos?",
    "desafioCategory": "Resíduos Sólidos & Limpeza Urbana",
    "mentor": "EDER LIRA DE SOUZA LEAO",
    "propostaNome": "REVIRA",
    "propostaMedia": 3.75,
    "propostaScore": 3.43,
    "createdDate": "2025-07-09 10:25:00",
    "submissionId": null,
    "slug": "rel-av-0170"
  },
  {
    "id": "rel_av_0171",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "Saúde Cinco",
    "propostaMedia": 3.58,
    "propostaScore": 3.45,
    "createdDate": "2025-07-09 11:32:00",
    "submissionId": "rel_prop_0112",
    "slug": "rel-av-0171"
  },
  {
    "id": "rel_av_0172",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Mentor Avaliador",
    "propostaNome": "Proposta não identificada",
    "propostaMedia": 3.83,
    "propostaScore": null,
    "createdDate": "2025-07-09 11:32:00",
    "submissionId": null,
    "slug": "rel-av-0172"
  },
  {
    "id": "rel_av_0173",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "HRV4life",
    "propostaMedia": 1.75,
    "propostaScore": 3.03,
    "createdDate": "2025-07-09 11:32:00",
    "submissionId": "rel_prop_0103",
    "slug": "rel-av-0173"
  },
  {
    "id": "rel_av_0174",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "LUDI INOVA SIMPLES IS",
    "propostaMedia": 1.42,
    "propostaScore": 1.18,
    "createdDate": "2025-07-09 11:32:00",
    "submissionId": null,
    "slug": "rel-av-0174"
  },
  {
    "id": "rel_av_0175",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "daps",
    "propostaMedia": 1,
    "propostaScore": 1,
    "createdDate": "2025-07-09 11:32:00",
    "submissionId": null,
    "slug": "rel-av-0175"
  },
  {
    "id": "rel_av_0176",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "Cogfy",
    "propostaMedia": 3.92,
    "propostaScore": 4.37,
    "createdDate": "2025-07-09 11:32:00",
    "submissionId": null,
    "slug": "rel-av-0176"
  },
  {
    "id": "rel_av_0177",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "ALKE",
    "propostaMedia": 1.67,
    "propostaScore": 1.47,
    "createdDate": "2025-07-09 11:32:00",
    "submissionId": null,
    "slug": "rel-av-0177"
  },
  {
    "id": "rel_av_0178",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "Tia Bete",
    "propostaMedia": 3.08,
    "propostaScore": 3.3,
    "createdDate": "2025-07-09 11:32:00",
    "submissionId": null,
    "slug": "rel-av-0178"
  },
  {
    "id": "rel_av_0179",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "NAV + SAÚDE",
    "propostaMedia": 3,
    "propostaScore": 3.13,
    "createdDate": "2025-07-09 11:32:00",
    "submissionId": null,
    "slug": "rel-av-0179"
  },
  {
    "id": "rel_av_0180",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "dolfidoc",
    "propostaMedia": 2.17,
    "propostaScore": 1.73,
    "createdDate": "2025-07-09 11:32:00",
    "submissionId": null,
    "slug": "rel-av-0180"
  },
  {
    "id": "rel_av_0181",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "ConectaVital",
    "propostaMedia": 2.92,
    "propostaScore": 2.72,
    "createdDate": "2025-07-09 11:32:00",
    "submissionId": "rel_prop_0065",
    "slug": "rel-av-0181"
  },
  {
    "id": "rel_av_0182",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "Mosca Branca deeptech",
    "propostaMedia": 4.17,
    "propostaScore": 4.1,
    "createdDate": "2025-07-09 11:32:00",
    "submissionId": null,
    "slug": "rel-av-0182"
  },
  {
    "id": "rel_av_0183",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "MEDIBOX",
    "propostaMedia": 2.17,
    "propostaScore": 1.23,
    "createdDate": "2025-07-09 11:32:00",
    "submissionId": "rel_prop_0073",
    "slug": "rel-av-0183"
  },
  {
    "id": "rel_av_0184",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "REbate",
    "propostaMedia": 3.67,
    "propostaScore": 3.63,
    "createdDate": "2025-07-09 11:32:00",
    "submissionId": "rel_prop_0071",
    "slug": "rel-av-0184"
  },
  {
    "id": "rel_av_0185",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "SUSIA",
    "propostaMedia": 4.25,
    "propostaScore": 4.38,
    "createdDate": "2025-07-09 11:32:00",
    "submissionId": "rel_prop_0067",
    "slug": "rel-av-0185"
  },
  {
    "id": "rel_av_0186",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "Cesinhas",
    "propostaMedia": 3,
    "propostaScore": 1.6,
    "createdDate": "2025-07-09 11:32:00",
    "submissionId": null,
    "slug": "rel-av-0186"
  },
  {
    "id": "rel_av_0187",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "ROBO LAURA",
    "propostaMedia": 4.08,
    "propostaScore": 2.63,
    "createdDate": "2025-07-09 11:32:00",
    "submissionId": null,
    "slug": "rel-av-0187"
  },
  {
    "id": "rel_av_0188",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "Saúde com I.A",
    "propostaMedia": 4,
    "propostaScore": 3.88,
    "createdDate": "2025-07-09 11:32:00",
    "submissionId": null,
    "slug": "rel-av-0188"
  },
  {
    "id": "rel_av_0189",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "Clinitech",
    "propostaMedia": 3.08,
    "propostaScore": 1.82,
    "createdDate": "2025-07-09 11:32:00",
    "submissionId": null,
    "slug": "rel-av-0189"
  },
  {
    "id": "rel_av_0190",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "RedCheck",
    "propostaMedia": 2.83,
    "propostaScore": 2.27,
    "createdDate": "2025-07-09 11:32:00",
    "submissionId": "rel_prop_0050",
    "slug": "rel-av-0190"
  },
  {
    "id": "rel_av_0191",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "Saúde Cinco",
    "propostaMedia": 2.83,
    "propostaScore": 3.45,
    "createdDate": "2025-07-09 11:32:00",
    "submissionId": "rel_prop_0112",
    "slug": "rel-av-0191"
  },
  {
    "id": "rel_av_0192",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "Saúde Cinco",
    "propostaMedia": 3.17,
    "propostaScore": 3.45,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": "rel_prop_0112",
    "slug": "rel-av-0192"
  },
  {
    "id": "rel_av_0193",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "HRV4life",
    "propostaMedia": 3.33,
    "propostaScore": 3.03,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": "rel_prop_0103",
    "slug": "rel-av-0193"
  },
  {
    "id": "rel_av_0194",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "Saúde Cinco",
    "propostaMedia": 3.42,
    "propostaScore": 3.45,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": "rel_prop_0112",
    "slug": "rel-av-0194"
  },
  {
    "id": "rel_av_0195",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "Liu",
    "propostaMedia": 4.42,
    "propostaScore": 3.88,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": null,
    "slug": "rel-av-0195"
  },
  {
    "id": "rel_av_0196",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "Cesinhas",
    "propostaMedia": 3.67,
    "propostaScore": 2.8,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": null,
    "slug": "rel-av-0196"
  },
  {
    "id": "rel_av_0197",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "neri",
    "propostaMedia": 4.33,
    "propostaScore": 3.38,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": null,
    "slug": "rel-av-0197"
  },
  {
    "id": "rel_av_0198",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "Dayse Maria de Souza Oliveira, Amanda Felix da Silva, Antônia Felix Lessa",
    "propostaMedia": 3,
    "propostaScore": 2.58,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": null,
    "slug": "rel-av-0198"
  },
  {
    "id": "rel_av_0199",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "CFIT",
    "propostaMedia": 3.92,
    "propostaScore": 3.92,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": "rel_prop_0033",
    "slug": "rel-av-0199"
  },
  {
    "id": "rel_av_0200",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "GO BEE APIS",
    "propostaMedia": 4.42,
    "propostaScore": 4.32,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": "rel_prop_0032",
    "slug": "rel-av-0200"
  },
  {
    "id": "rel_av_0201",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "Clinitech Tecnologia em Saúde LTDA.",
    "propostaMedia": 3.25,
    "propostaScore": 3.65,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": null,
    "slug": "rel-av-0201"
  },
  {
    "id": "rel_av_0202",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "Lemobs",
    "propostaMedia": 4.42,
    "propostaScore": 4.25,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": "rel_prop_0029",
    "slug": "rel-av-0202"
  },
  {
    "id": "rel_av_0203",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "Projeto Saus",
    "propostaMedia": 3.33,
    "propostaScore": 2.83,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": null,
    "slug": "rel-av-0203"
  },
  {
    "id": "rel_av_0204",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "Kali",
    "propostaMedia": 3.42,
    "propostaScore": 2.95,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": "rel_prop_0027",
    "slug": "rel-av-0204"
  },
  {
    "id": "rel_av_0205",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "Conexão e Cuidado",
    "propostaMedia": 3.25,
    "propostaScore": 2.83,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": null,
    "slug": "rel-av-0205"
  },
  {
    "id": "rel_av_0206",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "KTecS",
    "propostaMedia": 3.17,
    "propostaScore": 4.05,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": null,
    "slug": "rel-av-0206"
  },
  {
    "id": "rel_av_0207",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "Cuida+ Saúde",
    "propostaMedia": 2.42,
    "propostaScore": 3.5,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": null,
    "slug": "rel-av-0207"
  },
  {
    "id": "rel_av_0208",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "Ponte Saúde",
    "propostaMedia": 2.67,
    "propostaScore": 2.75,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": null,
    "slug": "rel-av-0208"
  },
  {
    "id": "rel_av_0209",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "Manguehub",
    "propostaMedia": 4.08,
    "propostaScore": 3.35,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": null,
    "slug": "rel-av-0209"
  },
  {
    "id": "rel_av_0210",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "Cogfy",
    "propostaMedia": 5,
    "propostaScore": 4.37,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": null,
    "slug": "rel-av-0210"
  },
  {
    "id": "rel_av_0211",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "LUDI INOVA SIMPLES IS",
    "propostaMedia": 1.5,
    "propostaScore": 1.18,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": null,
    "slug": "rel-av-0211"
  },
  {
    "id": "rel_av_0212",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "daps",
    "propostaMedia": 1,
    "propostaScore": 1,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": null,
    "slug": "rel-av-0212"
  },
  {
    "id": "rel_av_0213",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "HRV4life",
    "propostaMedia": 3,
    "propostaScore": 3.03,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": "rel_prop_0103",
    "slug": "rel-av-0213"
  },
  {
    "id": "rel_av_0214",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "HRV4life",
    "propostaMedia": 4.17,
    "propostaScore": 3.03,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": "rel_prop_0103",
    "slug": "rel-av-0214"
  },
  {
    "id": "rel_av_0215",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "daps",
    "propostaMedia": 1,
    "propostaScore": 1,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": null,
    "slug": "rel-av-0215"
  },
  {
    "id": "rel_av_0216",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "Saúde Cinco",
    "propostaMedia": 4.25,
    "propostaScore": 3.45,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": "rel_prop_0112",
    "slug": "rel-av-0216"
  },
  {
    "id": "rel_av_0217",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "Cogfy",
    "propostaMedia": 4.58,
    "propostaScore": 4.37,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": null,
    "slug": "rel-av-0217"
  },
  {
    "id": "rel_av_0218",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "LUDI INOVA SIMPLES IS",
    "propostaMedia": 1,
    "propostaScore": 1.18,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": null,
    "slug": "rel-av-0218"
  },
  {
    "id": "rel_av_0219",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "ALKE",
    "propostaMedia": 1.67,
    "propostaScore": 1.47,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": null,
    "slug": "rel-av-0219"
  },
  {
    "id": "rel_av_0220",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "Tia Bete",
    "propostaMedia": 4,
    "propostaScore": 3.3,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": null,
    "slug": "rel-av-0220"
  },
  {
    "id": "rel_av_0221",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "NAV + SAÚDE",
    "propostaMedia": 3.75,
    "propostaScore": 3.13,
    "createdDate": "2025-07-09 11:33:00",
    "submissionId": null,
    "slug": "rel-av-0221"
  },
  {
    "id": "rel_av_0222",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "ALKE",
    "propostaMedia": 1.5,
    "propostaScore": 1.47,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": null,
    "slug": "rel-av-0222"
  },
  {
    "id": "rel_av_0223",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "Mosca Branca deeptech",
    "propostaMedia": 4.25,
    "propostaScore": 4.1,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": null,
    "slug": "rel-av-0223"
  },
  {
    "id": "rel_av_0224",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "dolfidoc",
    "propostaMedia": 1.75,
    "propostaScore": 1.73,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": null,
    "slug": "rel-av-0224"
  },
  {
    "id": "rel_av_0225",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "ConectaVital",
    "propostaMedia": 2.92,
    "propostaScore": 2.72,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": "rel_prop_0065",
    "slug": "rel-av-0225"
  },
  {
    "id": "rel_av_0226",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "MEDIBOX",
    "propostaMedia": 1,
    "propostaScore": 1.23,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": "rel_prop_0073",
    "slug": "rel-av-0226"
  },
  {
    "id": "rel_av_0227",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "LUDI INOVA SIMPLES IS",
    "propostaMedia": 1,
    "propostaScore": 1.18,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": null,
    "slug": "rel-av-0227"
  },
  {
    "id": "rel_av_0228",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "MEDIBOX",
    "propostaMedia": 1.92,
    "propostaScore": 2.25,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": "rel_prop_0073",
    "slug": "rel-av-0228"
  },
  {
    "id": "rel_av_0229",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "daps",
    "propostaMedia": 1,
    "propostaScore": 1,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": null,
    "slug": "rel-av-0229"
  },
  {
    "id": "rel_av_0230",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "REbate",
    "propostaMedia": 3.92,
    "propostaScore": 3.63,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": "rel_prop_0071",
    "slug": "rel-av-0230"
  },
  {
    "id": "rel_av_0231",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "Tia Bete",
    "propostaMedia": 3.83,
    "propostaScore": 3.3,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": null,
    "slug": "rel-av-0231"
  },
  {
    "id": "rel_av_0232",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "SUSIA",
    "propostaMedia": 4.92,
    "propostaScore": 4.38,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": "rel_prop_0067",
    "slug": "rel-av-0232"
  },
  {
    "id": "rel_av_0233",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "Cesinhas",
    "propostaMedia": 1,
    "propostaScore": 1.6,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": null,
    "slug": "rel-av-0233"
  },
  {
    "id": "rel_av_0234",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "Clinitech",
    "propostaMedia": 1,
    "propostaScore": 1.82,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": null,
    "slug": "rel-av-0234"
  },
  {
    "id": "rel_av_0235",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "NAV + SAÚDE",
    "propostaMedia": 3,
    "propostaScore": 3.13,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": null,
    "slug": "rel-av-0235"
  },
  {
    "id": "rel_av_0236",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "ROBO LAURA",
    "propostaMedia": 3.83,
    "propostaScore": 2.63,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": null,
    "slug": "rel-av-0236"
  },
  {
    "id": "rel_av_0237",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "Saúde com I.A",
    "propostaMedia": 4.08,
    "propostaScore": 3.88,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": null,
    "slug": "rel-av-0237"
  },
  {
    "id": "rel_av_0238",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "RedCheck",
    "propostaMedia": 3.08,
    "propostaScore": 2.27,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": "rel_prop_0050",
    "slug": "rel-av-0238"
  },
  {
    "id": "rel_av_0239",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "Liu",
    "propostaMedia": 3.67,
    "propostaScore": 3.88,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": null,
    "slug": "rel-av-0239"
  },
  {
    "id": "rel_av_0240",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "Cesinhas",
    "propostaMedia": 3.17,
    "propostaScore": 2.8,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": null,
    "slug": "rel-av-0240"
  },
  {
    "id": "rel_av_0241",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "neri",
    "propostaMedia": 3.42,
    "propostaScore": 3.38,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": null,
    "slug": "rel-av-0241"
  },
  {
    "id": "rel_av_0242",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "Dayse Maria de Souza Oliveira, Amanda Felix da Silva, Antônia Felix Lessa",
    "propostaMedia": 2.33,
    "propostaScore": 2.58,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": null,
    "slug": "rel-av-0242"
  },
  {
    "id": "rel_av_0243",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "CFIT",
    "propostaMedia": 4.17,
    "propostaScore": 3.92,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": "rel_prop_0033",
    "slug": "rel-av-0243"
  },
  {
    "id": "rel_av_0244",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "GO BEE APIS",
    "propostaMedia": 4.5,
    "propostaScore": 4.32,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": "rel_prop_0032",
    "slug": "rel-av-0244"
  },
  {
    "id": "rel_av_0245",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "Clinitech Tecnologia em Saúde LTDA.",
    "propostaMedia": 4.25,
    "propostaScore": 3.65,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": null,
    "slug": "rel-av-0245"
  },
  {
    "id": "rel_av_0246",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "Lemobs",
    "propostaMedia": 4.33,
    "propostaScore": 4.25,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": "rel_prop_0029",
    "slug": "rel-av-0246"
  },
  {
    "id": "rel_av_0247",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "Projeto Saus",
    "propostaMedia": 3.08,
    "propostaScore": 2.83,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": null,
    "slug": "rel-av-0247"
  },
  {
    "id": "rel_av_0248",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "UPSAÚDE",
    "propostaMedia": 2.67,
    "propostaScore": 2.85,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": null,
    "slug": "rel-av-0248"
  },
  {
    "id": "rel_av_0249",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "Metasolution",
    "propostaMedia": 3.83,
    "propostaScore": 3.52,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": null,
    "slug": "rel-av-0249"
  },
  {
    "id": "rel_av_0250",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "Kali",
    "propostaMedia": 3.33,
    "propostaScore": 2.95,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": "rel_prop_0027",
    "slug": "rel-av-0250"
  },
  {
    "id": "rel_av_0251",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "RODRIGO BEZERRA",
    "propostaNome": "Wladimilson Bernardino Nascimento",
    "propostaMedia": 3.42,
    "propostaScore": 3.15,
    "createdDate": "2025-07-09 11:34:00",
    "submissionId": null,
    "slug": "rel-av-0251"
  },
  {
    "id": "rel_av_0252",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "Conexão e Cuidado",
    "propostaMedia": 3.08,
    "propostaScore": 2.83,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": null,
    "slug": "rel-av-0252"
  },
  {
    "id": "rel_av_0253",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "KTecS",
    "propostaMedia": 4.5,
    "propostaScore": 4.05,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": null,
    "slug": "rel-av-0253"
  },
  {
    "id": "rel_av_0254",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "Cuida+ Saúde",
    "propostaMedia": 4,
    "propostaScore": 3.5,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": null,
    "slug": "rel-av-0254"
  },
  {
    "id": "rel_av_0255",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "Ponte Saúde",
    "propostaMedia": 3.33,
    "propostaScore": 2.75,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": null,
    "slug": "rel-av-0255"
  },
  {
    "id": "rel_av_0256",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "Mosca Branca deeptech",
    "propostaMedia": 4.17,
    "propostaScore": 4.1,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": null,
    "slug": "rel-av-0256"
  },
  {
    "id": "rel_av_0257",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "daps",
    "propostaMedia": 1,
    "propostaScore": 1,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": null,
    "slug": "rel-av-0257"
  },
  {
    "id": "rel_av_0258",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "dolfidoc",
    "propostaMedia": 1,
    "propostaScore": 1.73,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": null,
    "slug": "rel-av-0258"
  },
  {
    "id": "rel_av_0259",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "HRV4life",
    "propostaMedia": 2.92,
    "propostaScore": 3.03,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": "rel_prop_0103",
    "slug": "rel-av-0259"
  },
  {
    "id": "rel_av_0260",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "ConectaVital",
    "propostaMedia": 2.83,
    "propostaScore": 2.72,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": "rel_prop_0065",
    "slug": "rel-av-0260"
  },
  {
    "id": "rel_av_0261",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "MEDIBOX",
    "propostaMedia": 1,
    "propostaScore": 1.23,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": "rel_prop_0073",
    "slug": "rel-av-0261"
  },
  {
    "id": "rel_av_0262",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "MEDIBOX",
    "propostaMedia": 2.25,
    "propostaScore": 2.25,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": "rel_prop_0073",
    "slug": "rel-av-0262"
  },
  {
    "id": "rel_av_0263",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "LUDI INOVA SIMPLES IS",
    "propostaMedia": 1,
    "propostaScore": 1.18,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": null,
    "slug": "rel-av-0263"
  },
  {
    "id": "rel_av_0264",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "REbate",
    "propostaMedia": 4.17,
    "propostaScore": 3.63,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": "rel_prop_0071",
    "slug": "rel-av-0264"
  },
  {
    "id": "rel_av_0265",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "SUSIA",
    "propostaMedia": 4.67,
    "propostaScore": 4.38,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": "rel_prop_0067",
    "slug": "rel-av-0265"
  },
  {
    "id": "rel_av_0266",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "Cesinhas",
    "propostaMedia": 1.67,
    "propostaScore": 1.6,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": null,
    "slug": "rel-av-0266"
  },
  {
    "id": "rel_av_0267",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "ROBO LAURA",
    "propostaMedia": 1.42,
    "propostaScore": 2.63,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": null,
    "slug": "rel-av-0267"
  },
  {
    "id": "rel_av_0268",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "Saúde com I.A",
    "propostaMedia": 3.58,
    "propostaScore": 3.88,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": null,
    "slug": "rel-av-0268"
  },
  {
    "id": "rel_av_0269",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "Clinitech",
    "propostaMedia": 1,
    "propostaScore": 1.82,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": null,
    "slug": "rel-av-0269"
  },
  {
    "id": "rel_av_0270",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "RedCheck",
    "propostaMedia": 2.42,
    "propostaScore": 2.27,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": "rel_prop_0050",
    "slug": "rel-av-0270"
  },
  {
    "id": "rel_av_0271",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "Liu",
    "propostaMedia": 4.25,
    "propostaScore": 3.88,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": null,
    "slug": "rel-av-0271"
  },
  {
    "id": "rel_av_0272",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "Cesinhas",
    "propostaMedia": 4.33,
    "propostaScore": 2.8,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": null,
    "slug": "rel-av-0272"
  },
  {
    "id": "rel_av_0273",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "neri",
    "propostaMedia": 4,
    "propostaScore": 3.38,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": null,
    "slug": "rel-av-0273"
  },
  {
    "id": "rel_av_0274",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "Dayse Maria de Souza Oliveira, Amanda Felix da Silva, Antônia Felix Lessa",
    "propostaMedia": 2.92,
    "propostaScore": 2.58,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": null,
    "slug": "rel-av-0274"
  },
  {
    "id": "rel_av_0275",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "CFIT",
    "propostaMedia": 4.25,
    "propostaScore": 3.92,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": "rel_prop_0033",
    "slug": "rel-av-0275"
  },
  {
    "id": "rel_av_0276",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "Cogfy",
    "propostaMedia": 4.5,
    "propostaScore": 4.37,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": null,
    "slug": "rel-av-0276"
  },
  {
    "id": "rel_av_0277",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "ALKE",
    "propostaMedia": 1.5,
    "propostaScore": 1.47,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": null,
    "slug": "rel-av-0277"
  },
  {
    "id": "rel_av_0278",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "Tia Bete",
    "propostaMedia": 2.92,
    "propostaScore": 3.3,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": null,
    "slug": "rel-av-0278"
  },
  {
    "id": "rel_av_0279",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "NAV + SAÚDE",
    "propostaMedia": 3.67,
    "propostaScore": 3.13,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": null,
    "slug": "rel-av-0279"
  },
  {
    "id": "rel_av_0280",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "MEDIBOX",
    "propostaMedia": 2.58,
    "propostaScore": 2.25,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": "rel_prop_0073",
    "slug": "rel-av-0280"
  },
  {
    "id": "rel_av_0281",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "MEDIBOX",
    "propostaMedia": 1,
    "propostaScore": 1.23,
    "createdDate": "2025-07-09 11:35:00",
    "submissionId": "rel_prop_0073",
    "slug": "rel-av-0281"
  },
  {
    "id": "rel_av_0282",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "Cesinhas",
    "propostaMedia": 1,
    "propostaScore": 1.6,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": null,
    "slug": "rel-av-0282"
  },
  {
    "id": "rel_av_0283",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "Mosca Branca deeptech",
    "propostaMedia": 3.92,
    "propostaScore": 4.1,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": null,
    "slug": "rel-av-0283"
  },
  {
    "id": "rel_av_0284",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "dolfidoc",
    "propostaMedia": 2.75,
    "propostaScore": 1.73,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": null,
    "slug": "rel-av-0284"
  },
  {
    "id": "rel_av_0285",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "ConectaVital",
    "propostaMedia": 3.08,
    "propostaScore": 2.72,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": "rel_prop_0065",
    "slug": "rel-av-0285"
  },
  {
    "id": "rel_av_0286",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "REbate",
    "propostaMedia": 3.58,
    "propostaScore": 3.63,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": "rel_prop_0071",
    "slug": "rel-av-0286"
  },
  {
    "id": "rel_av_0287",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "SUSIA",
    "propostaMedia": 3.58,
    "propostaScore": 4.38,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": "rel_prop_0067",
    "slug": "rel-av-0287"
  },
  {
    "id": "rel_av_0288",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "ROBO LAURA",
    "propostaMedia": 2.58,
    "propostaScore": 2.63,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": null,
    "slug": "rel-av-0288"
  },
  {
    "id": "rel_av_0289",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "Saúde com I.A",
    "propostaMedia": 4.42,
    "propostaScore": 3.88,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": null,
    "slug": "rel-av-0289"
  },
  {
    "id": "rel_av_0290",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "Clinitech",
    "propostaMedia": 3,
    "propostaScore": 1.82,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": null,
    "slug": "rel-av-0290"
  },
  {
    "id": "rel_av_0291",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "RedCheck",
    "propostaMedia": 2,
    "propostaScore": 2.27,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": "rel_prop_0050",
    "slug": "rel-av-0291"
  },
  {
    "id": "rel_av_0292",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "Liu",
    "propostaMedia": 3.75,
    "propostaScore": 3.88,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": null,
    "slug": "rel-av-0292"
  },
  {
    "id": "rel_av_0293",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "GO BEE APIS",
    "propostaMedia": 4.33,
    "propostaScore": 4.32,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": "rel_prop_0032",
    "slug": "rel-av-0293"
  },
  {
    "id": "rel_av_0294",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "Cesinhas",
    "propostaMedia": 2.83,
    "propostaScore": 2.8,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": null,
    "slug": "rel-av-0294"
  },
  {
    "id": "rel_av_0295",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "Clinitech Tecnologia em Saúde LTDA.",
    "propostaMedia": 3.92,
    "propostaScore": 3.65,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": null,
    "slug": "rel-av-0295"
  },
  {
    "id": "rel_av_0296",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "Lemobs",
    "propostaMedia": 4.42,
    "propostaScore": 4.25,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": "rel_prop_0029",
    "slug": "rel-av-0296"
  },
  {
    "id": "rel_av_0297",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "Projeto Saus",
    "propostaMedia": 3.08,
    "propostaScore": 2.83,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": null,
    "slug": "rel-av-0297"
  },
  {
    "id": "rel_av_0298",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "Kali",
    "propostaMedia": 3.83,
    "propostaScore": 2.95,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": "rel_prop_0027",
    "slug": "rel-av-0298"
  },
  {
    "id": "rel_av_0299",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "Conexão e Cuidado",
    "propostaMedia": 2.67,
    "propostaScore": 2.83,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": null,
    "slug": "rel-av-0299"
  },
  {
    "id": "rel_av_0300",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "KTecS",
    "propostaMedia": 4.58,
    "propostaScore": 4.05,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": null,
    "slug": "rel-av-0300"
  },
  {
    "id": "rel_av_0301",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "Cuida+ Saúde",
    "propostaMedia": 3.75,
    "propostaScore": 3.5,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": null,
    "slug": "rel-av-0301"
  },
  {
    "id": "rel_av_0302",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "Ponte Saúde",
    "propostaMedia": 3.33,
    "propostaScore": 2.75,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": null,
    "slug": "rel-av-0302"
  },
  {
    "id": "rel_av_0303",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "Manguehub",
    "propostaMedia": 2.92,
    "propostaScore": 3.35,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": null,
    "slug": "rel-av-0303"
  },
  {
    "id": "rel_av_0304",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "Manguehub",
    "propostaMedia": 4.17,
    "propostaScore": 3.35,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": null,
    "slug": "rel-av-0304"
  },
  {
    "id": "rel_av_0305",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "UPSAÚDE",
    "propostaMedia": 3.5,
    "propostaScore": 2.85,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": null,
    "slug": "rel-av-0305"
  },
  {
    "id": "rel_av_0306",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "Metasolution",
    "propostaMedia": 3.58,
    "propostaScore": 3.52,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": null,
    "slug": "rel-av-0306"
  },
  {
    "id": "rel_av_0307",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Homero Cavalcanti",
    "propostaNome": "Wladimilson Bernardino Nascimento",
    "propostaMedia": 3,
    "propostaScore": 3.15,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": null,
    "slug": "rel-av-0307"
  },
  {
    "id": "rel_av_0308",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "neri",
    "propostaMedia": 3.33,
    "propostaScore": 3.38,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": null,
    "slug": "rel-av-0308"
  },
  {
    "id": "rel_av_0309",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "Cogfy",
    "propostaMedia": 3.83,
    "propostaScore": 4.37,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": null,
    "slug": "rel-av-0309"
  },
  {
    "id": "rel_av_0310",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "ALKE",
    "propostaMedia": 1,
    "propostaScore": 1.47,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": null,
    "slug": "rel-av-0310"
  },
  {
    "id": "rel_av_0311",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "Dayse Maria de Souza Oliveira, Amanda Felix da Silva, Antônia Felix Lessa",
    "propostaMedia": 2.75,
    "propostaScore": 2.58,
    "createdDate": "2025-07-09 11:36:00",
    "submissionId": null,
    "slug": "rel-av-0311"
  },
  {
    "id": "rel_av_0312",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "CFIT",
    "propostaMedia": 3.25,
    "propostaScore": 3.92,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": "rel_prop_0033",
    "slug": "rel-av-0312"
  },
  {
    "id": "rel_av_0313",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "UPSAÚDE",
    "propostaMedia": 3.08,
    "propostaScore": 2.85,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": null,
    "slug": "rel-av-0313"
  },
  {
    "id": "rel_av_0314",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "Metasolution",
    "propostaMedia": 3.92,
    "propostaScore": 3.52,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": null,
    "slug": "rel-av-0314"
  },
  {
    "id": "rel_av_0315",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "GO BEE APIS",
    "propostaMedia": 4.25,
    "propostaScore": 4.32,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": "rel_prop_0032",
    "slug": "rel-av-0315"
  },
  {
    "id": "rel_av_0316",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES",
    "propostaNome": "Wladimilson Bernardino Nascimento",
    "propostaMedia": 4.08,
    "propostaScore": 3.15,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": null,
    "slug": "rel-av-0316"
  },
  {
    "id": "rel_av_0317",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "Clinitech Tecnologia em Saúde LTDA.",
    "propostaMedia": 3.5,
    "propostaScore": 3.65,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": null,
    "slug": "rel-av-0317"
  },
  {
    "id": "rel_av_0318",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "Lemobs",
    "propostaMedia": 3.83,
    "propostaScore": 4.25,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": "rel_prop_0029",
    "slug": "rel-av-0318"
  },
  {
    "id": "rel_av_0319",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "Tia Bete",
    "propostaMedia": 2.67,
    "propostaScore": 3.3,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": null,
    "slug": "rel-av-0319"
  },
  {
    "id": "rel_av_0320",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "Projeto Saus",
    "propostaMedia": 2.33,
    "propostaScore": 2.83,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": null,
    "slug": "rel-av-0320"
  },
  {
    "id": "rel_av_0321",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "Kali",
    "propostaMedia": 2.58,
    "propostaScore": 2.95,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": "rel_prop_0027",
    "slug": "rel-av-0321"
  },
  {
    "id": "rel_av_0322",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "Wladimilson Bernardino Nascimento",
    "propostaMedia": 1.92,
    "propostaScore": 3.15,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": null,
    "slug": "rel-av-0322"
  },
  {
    "id": "rel_av_0323",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "Conexão e Cuidado",
    "propostaMedia": 3,
    "propostaScore": 2.83,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": null,
    "slug": "rel-av-0323"
  },
  {
    "id": "rel_av_0324",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "Metasolution",
    "propostaMedia": 2.17,
    "propostaScore": 3.52,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": null,
    "slug": "rel-av-0324"
  },
  {
    "id": "rel_av_0325",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "KTecS",
    "propostaMedia": 3.58,
    "propostaScore": 4.05,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": null,
    "slug": "rel-av-0325"
  },
  {
    "id": "rel_av_0326",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "NAV + SAÚDE",
    "propostaMedia": 2.25,
    "propostaScore": 3.13,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": null,
    "slug": "rel-av-0326"
  },
  {
    "id": "rel_av_0327",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "Mosca Branca deeptech",
    "propostaMedia": 4,
    "propostaScore": 4.1,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": null,
    "slug": "rel-av-0327"
  },
  {
    "id": "rel_av_0328",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "SUSIA",
    "propostaMedia": 4.5,
    "propostaScore": 4.38,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": "rel_prop_0067",
    "slug": "rel-av-0328"
  },
  {
    "id": "rel_av_0329",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "Cuida+ Saúde",
    "propostaMedia": 3.33,
    "propostaScore": 3.5,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": null,
    "slug": "rel-av-0329"
  },
  {
    "id": "rel_av_0330",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "Ponte Saúde",
    "propostaMedia": 2.92,
    "propostaScore": 2.75,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": null,
    "slug": "rel-av-0330"
  },
  {
    "id": "rel_av_0331",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "Manguehub",
    "propostaMedia": 3.17,
    "propostaScore": 3.35,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": null,
    "slug": "rel-av-0331"
  },
  {
    "id": "rel_av_0332",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "UPSAÚDE",
    "propostaMedia": 1.92,
    "propostaScore": 2.85,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": null,
    "slug": "rel-av-0332"
  },
  {
    "id": "rel_av_0333",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "dolfidoc",
    "propostaMedia": 1,
    "propostaScore": 1.73,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": null,
    "slug": "rel-av-0333"
  },
  {
    "id": "rel_av_0334",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "UPSAÚDE",
    "propostaMedia": 3.08,
    "propostaScore": 2.85,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": null,
    "slug": "rel-av-0334"
  },
  {
    "id": "rel_av_0335",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "ConectaVital",
    "propostaMedia": 1.83,
    "propostaScore": 2.72,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": "rel_prop_0065",
    "slug": "rel-av-0335"
  },
  {
    "id": "rel_av_0336",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "Metasolution",
    "propostaMedia": 4.08,
    "propostaScore": 3.52,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": null,
    "slug": "rel-av-0336"
  },
  {
    "id": "rel_av_0337",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "CFIT",
    "propostaMedia": 4,
    "propostaScore": 3.92,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": "rel_prop_0033",
    "slug": "rel-av-0337"
  },
  {
    "id": "rel_av_0338",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "Moisés Leal",
    "propostaNome": "Wladimilson Bernardino Nascimento",
    "propostaMedia": 3.33,
    "propostaScore": 3.15,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": null,
    "slug": "rel-av-0338"
  },
  {
    "id": "rel_av_0339",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "MEDIBOX",
    "propostaMedia": 1,
    "propostaScore": 1.23,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": "rel_prop_0073",
    "slug": "rel-av-0339"
  },
  {
    "id": "rel_av_0340",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "GO BEE APIS",
    "propostaMedia": 4.08,
    "propostaScore": 4.32,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": "rel_prop_0032",
    "slug": "rel-av-0340"
  },
  {
    "id": "rel_av_0341",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "REbate",
    "propostaMedia": 2.83,
    "propostaScore": 3.63,
    "createdDate": "2025-07-09 11:37:00",
    "submissionId": "rel_prop_0071",
    "slug": "rel-av-0341"
  },
  {
    "id": "rel_av_0342",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "Manguehub",
    "propostaMedia": 2.42,
    "propostaScore": 3.35,
    "createdDate": "2025-07-09 11:38:00",
    "submissionId": null,
    "slug": "rel-av-0342"
  },
  {
    "id": "rel_av_0343",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "Cesinhas",
    "propostaMedia": 1.33,
    "propostaScore": 1.6,
    "createdDate": "2025-07-09 11:38:00",
    "submissionId": null,
    "slug": "rel-av-0343"
  },
  {
    "id": "rel_av_0344",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "ROBO LAURA",
    "propostaMedia": 1.25,
    "propostaScore": 2.63,
    "createdDate": "2025-07-09 11:38:00",
    "submissionId": null,
    "slug": "rel-av-0344"
  },
  {
    "id": "rel_av_0345",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "KTecS",
    "propostaMedia": 4.42,
    "propostaScore": 4.05,
    "createdDate": "2025-07-09 11:38:00",
    "submissionId": null,
    "slug": "rel-av-0345"
  },
  {
    "id": "rel_av_0346",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "Saúde com I.A",
    "propostaMedia": 3.33,
    "propostaScore": 3.88,
    "createdDate": "2025-07-09 11:38:00",
    "submissionId": null,
    "slug": "rel-av-0346"
  },
  {
    "id": "rel_av_0347",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "Ponte Saúde",
    "propostaMedia": 1.5,
    "propostaScore": 2.75,
    "createdDate": "2025-07-09 11:38:00",
    "submissionId": null,
    "slug": "rel-av-0347"
  },
  {
    "id": "rel_av_0348",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "Cesinhas",
    "propostaMedia": 0,
    "propostaScore": 2.8,
    "createdDate": "2025-07-09 11:38:00",
    "submissionId": null,
    "slug": "rel-av-0348"
  },
  {
    "id": "rel_av_0349",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "Cuida+ Saúde",
    "propostaMedia": 4,
    "propostaScore": 3.5,
    "createdDate": "2025-07-09 11:38:00",
    "submissionId": null,
    "slug": "rel-av-0349"
  },
  {
    "id": "rel_av_0350",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "Clinitech",
    "propostaMedia": 1,
    "propostaScore": 1.82,
    "createdDate": "2025-07-09 11:38:00",
    "submissionId": null,
    "slug": "rel-av-0350"
  },
  {
    "id": "rel_av_0351",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "neri",
    "propostaMedia": 1.83,
    "propostaScore": 3.38,
    "createdDate": "2025-07-09 11:38:00",
    "submissionId": null,
    "slug": "rel-av-0351"
  },
  {
    "id": "rel_av_0352",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "RedCheck",
    "propostaMedia": 1,
    "propostaScore": 2.27,
    "createdDate": "2025-07-09 11:38:00",
    "submissionId": "rel_prop_0050",
    "slug": "rel-av-0352"
  },
  {
    "id": "rel_av_0353",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "Clinitech Tecnologia em Saúde LTDA.",
    "propostaMedia": 3.33,
    "propostaScore": 3.65,
    "createdDate": "2025-07-09 11:38:00",
    "submissionId": null,
    "slug": "rel-av-0353"
  },
  {
    "id": "rel_av_0354",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "Conexão e Cuidado",
    "propostaMedia": 2.17,
    "propostaScore": 2.83,
    "createdDate": "2025-07-09 11:38:00",
    "submissionId": null,
    "slug": "rel-av-0354"
  },
  {
    "id": "rel_av_0355",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "Liu",
    "propostaMedia": 3.33,
    "propostaScore": 3.88,
    "createdDate": "2025-07-09 11:38:00",
    "submissionId": null,
    "slug": "rel-av-0355"
  },
  {
    "id": "rel_av_0356",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "Lemobs",
    "propostaMedia": 4.25,
    "propostaScore": 4.25,
    "createdDate": "2025-07-09 11:38:00",
    "submissionId": "rel_prop_0029",
    "slug": "rel-av-0356"
  },
  {
    "id": "rel_av_0357",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "Dayse Maria de Souza Oliveira, Amanda Felix da Silva, Antônia Felix Lessa",
    "propostaMedia": 1.92,
    "propostaScore": 2.58,
    "createdDate": "2025-07-09 11:38:00",
    "submissionId": null,
    "slug": "rel-av-0357"
  },
  {
    "id": "rel_av_0358",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "Projeto Saus",
    "propostaMedia": 2.33,
    "propostaScore": 2.83,
    "createdDate": "2025-07-09 11:38:00",
    "submissionId": null,
    "slug": "rel-av-0358"
  },
  {
    "id": "rel_av_0359",
    "desafio": "Como podemos construir uma estratégia que propicie o monitoramento e apoio ao autocuidado da pessoa com hipertensão e/ou diabetes para facilitar a adesão e acompanhamento do tratamento?",
    "desafioCategory": "Saúde Pública (Hipertensão / Diabetes)",
    "mentor": "ANA INES DE JESUS VIEIRA",
    "propostaNome": "Kali",
    "propostaMedia": 1.58,
    "propostaScore": 2.95,
    "createdDate": "2025-07-09 11:38:00",
    "submissionId": "rel_prop_0027",
    "slug": "rel-av-0359"
  }
]

export const EITA_COMMITTEE_OPERATIONS: EitaCommitteeOperation[] = [
  {
    "id": "rel_op_0001",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.98,
    "criteriosENota": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 1)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,92\nHomero Cavalcanti: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 4)\n+(1* 3) )/12\nNota: 2,25\nMoisés Leal: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,58\nRODRIGO BEZERRA: ((3* 2)\n+(1* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2) )/12\nNota: 2,17\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0001"
  },
  {
    "id": "rel_op_0002",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.95,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nHomero Cavalcanti: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,83\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 4)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,58\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,58",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0002"
  },
  {
    "id": "rel_op_0003",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.28,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,33\nHomero Cavalcanti: ((3* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,42\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nANA INES DE JESUS VIEIRA: ((2* 5)\n+(1* 2)\n+(3* 5)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0003"
  },
  {
    "id": "rel_op_0004",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.83,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,67\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 1)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,17",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0004"
  },
  {
    "id": "rel_op_0005",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.88,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,67\nHomero Cavalcanti: ((3* 4)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(1* 5)\n+(1* 5)\n+(2* 4) )/12\nNota: 4,25\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75\nANA INES DE JESUS VIEIRA: ((1* 4)\n+(3* 3)\n+(2* 4)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 2) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0005"
  },
  {
    "id": "rel_op_0006",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.83,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,33\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,08\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,33\nANA INES DE JESUS VIEIRA: ((1* 3)\n+(3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 2) )/12\nNota: 2,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0006"
  },
  {
    "id": "rel_op_0007",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.65,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nHomero Cavalcanti: ((2* 4)\n+(1* 3)\n+(3* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,92\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,50\nANA INES DE JESUS VIEIRA: ((2* 5)\n+(3* 4)\n+(2* 2)\n+(1* 1)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0007"
  },
  {
    "id": "rel_op_0008",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.27,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 4)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,83\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,42\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 2,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0008"
  },
  {
    "id": "rel_op_0009",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.38,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,33\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,42\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,00\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(2* 2)\n+(1* 2)\n+(3* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,83",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0009"
  },
  {
    "id": "rel_op_0010",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.13,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 3,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,17\nHomero Cavalcanti: ((3* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,33\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,17\nANA INES DE JESUS VIEIRA: ((2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(3* 2)\n+(1* 2) )/12\nNota: 1,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0010"
  },
  {
    "id": "rel_op_0011",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.58,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,33\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,92\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,75\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 1,92",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0011"
  },
  {
    "id": "rel_op_0012",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.82,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 1) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0012"
  },
  {
    "id": "rel_op_0013",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.75,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,33\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,92\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(3* 2) )/12\nNota: 1,50",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0013"
  },
  {
    "id": "rel_op_0014",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.5,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 4) )/12\nNota: 4,00\nHomero Cavalcanti: ((2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3)\n+(3* 3) )/12\nNota: 3,75\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,33\nANA INES DE JESUS VIEIRA: ((2* 3)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(3* 3)\n+(1* 3) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0014"
  },
  {
    "id": "rel_op_0015",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.88,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 3)\n+(3* 5)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,08\nHomero Cavalcanti: ((3* 5)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,58\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 3) )/12\nNota: 4,42\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(3* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0015"
  },
  {
    "id": "rel_op_0016",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.05,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,50\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((2* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(1* 5)\n+(1* 3)\n+(3* 5) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0016"
  },
  {
    "id": "rel_op_0017",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.63,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 3)\n+(1* 5) )/12\nNota: 4,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nHomero Cavalcanti: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,42\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,58\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(1* 1)\n+(2* 1)\n+(3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1) )/12\nNota: 1,25",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0017"
  },
  {
    "id": "rel_op_0018",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.35,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,08\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 4)\n+(1* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 5)\n+(2* 4) )/12\nNota: 4,17\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 3,17\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,42",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0018"
  },
  {
    "id": "rel_op_0019",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.63,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 5) )/12\nNota: 4,17\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,83",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0019"
  },
  {
    "id": "rel_op_0020",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.32,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,50\nHomero Cavalcanti: ((2* 4)\n+(1* 4)\n+(2* 5)\n+(1* 4)\n+(1* 3)\n+(2* 4)\n+(3* 5) )/12\nNota: 4,33\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,25\nANA INES DE JESUS VIEIRA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 3)\n+(2* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,08",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0020"
  },
  {
    "id": "rel_op_0021",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.15,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,42\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,08\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(3* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,92\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0021"
  },
  {
    "id": "rel_op_0022",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.6,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((2* 5)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1)\n+(3* 1) )/12\nNota: 1,67\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0022"
  },
  {
    "id": "rel_op_0023",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.72,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,83\nMoisés Leal: ((1* 3)\n+(2* 3)\n+(2* 3)\n+(3* 3)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,08\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1)\n+(2* 1)\n+(3* 3)\n+(2* 3) )/12\nNota: 1,83",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0023"
  },
  {
    "id": "rel_op_0024",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.92,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nHomero Cavalcanti: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,25\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,25\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0024"
  },
  {
    "id": "rel_op_0025",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.52,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 4)\n+(1* 2) )/12\nNota: 2,17\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,08",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0025"
  },
  {
    "id": "rel_op_0026",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.73,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 3)\n+(3* 1)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,75\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 3)\n+(1* 1)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 2) )/12\nNota: 2,75\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0026"
  },
  {
    "id": "rel_op_0027",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.85,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 1)\n+(1* 2) )/12\nNota: 2,67\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,50\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 4) )/12\nNota: 3,08\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,92\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0027"
  },
  {
    "id": "rel_op_0028",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.85,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 1)\n+(1* 2) )/12\nNota: 2,67\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,50\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 4) )/12\nNota: 3,08\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,92\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0028"
  },
  {
    "id": "rel_op_0029",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.1,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,25\nHomero Cavalcanti: ((3* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,92\nANA INES DE JESUS VIEIRA: ((2* 4)\n+(1* 5)\n+(2* 4)\n+(1* 2)\n+(2* 5)\n+(1* 3)\n+(3* 4) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0029"
  },
  {
    "id": "rel_op_0030",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.5,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 4) )/12\nNota: 4,00\nHomero Cavalcanti: ((2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3)\n+(3* 3) )/12\nNota: 3,75\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,33\nANA INES DE JESUS VIEIRA: ((2* 3)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(3* 3)\n+(1* 3) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0030"
  },
  {
    "id": "rel_op_0031",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.23,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(1* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(1* 3) )/12\nNota: 2,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0031"
  },
  {
    "id": "rel_op_0032",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.35,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,08\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 4)\n+(1* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 5)\n+(2* 4) )/12\nNota: 4,17\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 3,17\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,42",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0032"
  },
  {
    "id": "rel_op_0033",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.05,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,50\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((2* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(1* 5)\n+(1* 3)\n+(3* 5) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0033"
  },
  {
    "id": "rel_op_0034",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.75,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,33\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,92\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(3* 2) )/12\nNota: 1,50",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0034"
  },
  {
    "id": "rel_op_0035",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.52,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 4)\n+(1* 2) )/12\nNota: 2,17\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,08",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0035"
  },
  {
    "id": "rel_op_0036",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.38,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,92\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,67\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((3* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(1* 3)\n+(2* 4) )/12\nNota: 4,50",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0036"
  },
  {
    "id": "rel_op_0037",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.98,
    "criteriosENota": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 1)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,92\nHomero Cavalcanti: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 4)\n+(1* 3) )/12\nNota: 2,25\nMoisés Leal: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,58\nRODRIGO BEZERRA: ((3* 2)\n+(1* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2) )/12\nNota: 2,17\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0037"
  },
  {
    "id": "rel_op_0038",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.83,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,67\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 1)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,17",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0038"
  },
  {
    "id": "rel_op_0039",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.83,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,33\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,08\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,33\nANA INES DE JESUS VIEIRA: ((1* 3)\n+(3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 2) )/12\nNota: 2,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0039"
  },
  {
    "id": "rel_op_0040",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.15,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,42\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,08\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(3* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,92\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0040"
  },
  {
    "id": "rel_op_0041",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.13,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 5) )/12\nNota: 3,75\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,00\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(1* 3) )/12\nNota: 3,67\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,25",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0041"
  },
  {
    "id": "rel_op_0042",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.65,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nHomero Cavalcanti: ((2* 4)\n+(1* 3)\n+(3* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,92\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,50\nANA INES DE JESUS VIEIRA: ((2* 5)\n+(3* 4)\n+(2* 2)\n+(1* 1)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0042"
  },
  {
    "id": "rel_op_0043",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.95,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nHomero Cavalcanti: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,83\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 4)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,58\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,58",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0043"
  },
  {
    "id": "rel_op_0044",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.15,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,42\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,08\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(3* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,92\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0044"
  },
  {
    "id": "rel_op_0045",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.32,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,50\nHomero Cavalcanti: ((2* 4)\n+(1* 4)\n+(2* 5)\n+(1* 4)\n+(1* 3)\n+(2* 4)\n+(3* 5) )/12\nNota: 4,33\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,25\nANA INES DE JESUS VIEIRA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 3)\n+(2* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,08",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0045"
  },
  {
    "id": "rel_op_0046",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.3,
    "criteriosENota": "RODRIGO BEZERRA: ((2* 4)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 2) )/12\nNota: 3,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(3* 3)\n+(1* 4) )/12\nNota: 4,00\nHomero Cavalcanti: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,83\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92\nANA INES DE JESUS VIEIRA: ((2* 3)\n+(2* 5)\n+(1* 2)\n+(2* 2)\n+(3* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,67",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0046"
  },
  {
    "id": "rel_op_0047",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.52,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 4)\n+(1* 2) )/12\nNota: 2,17\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,08",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0047"
  },
  {
    "id": "rel_op_0048",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.28,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,33\nHomero Cavalcanti: ((3* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,42\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nANA INES DE JESUS VIEIRA: ((2* 5)\n+(1* 2)\n+(3* 5)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0048"
  },
  {
    "id": "rel_op_0049",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.85,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 1)\n+(1* 2) )/12\nNota: 2,67\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,50\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 4) )/12\nNota: 3,08\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,92\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0049"
  },
  {
    "id": "rel_op_0050",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.47,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,67\nHomero Cavalcanti: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,50\nMoisés Leal: ((3* 2)\n+(2* 1)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,50\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0050"
  },
  {
    "id": "rel_op_0051",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.92,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nHomero Cavalcanti: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,25\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,25\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0051"
  },
  {
    "id": "rel_op_0052",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.38,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,33\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,42\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,00\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(2* 2)\n+(1* 2)\n+(3* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,83",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0052"
  },
  {
    "id": "rel_op_0053",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.85,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 1)\n+(1* 2) )/12\nNota: 2,67\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,50\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 4) )/12\nNota: 3,08\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,92\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0053"
  },
  {
    "id": "rel_op_0054",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.35,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,08\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 4)\n+(1* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 5)\n+(2* 4) )/12\nNota: 4,17\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 3,17\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,42",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0054"
  },
  {
    "id": "rel_op_0055",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.5,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 4) )/12\nNota: 4,00\nHomero Cavalcanti: ((2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3)\n+(3* 3) )/12\nNota: 3,75\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,33\nANA INES DE JESUS VIEIRA: ((2* 3)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(3* 3)\n+(1* 3) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0055"
  },
  {
    "id": "rel_op_0056",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.35,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,08\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 4)\n+(1* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 5)\n+(2* 4) )/12\nNota: 4,17\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 3,17\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,42",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0056"
  },
  {
    "id": "rel_op_0057",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.52,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 4)\n+(1* 2) )/12\nNota: 2,17\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,08",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0057"
  },
  {
    "id": "rel_op_0058",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.75,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,33\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,92\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(3* 2) )/12\nNota: 1,50",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0058"
  },
  {
    "id": "rel_op_0059",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.83,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,33\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,08\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,33\nANA INES DE JESUS VIEIRA: ((1* 3)\n+(3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 2) )/12\nNota: 2,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0059"
  },
  {
    "id": "rel_op_0060",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.15,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,42\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,08\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(3* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,92\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0060"
  },
  {
    "id": "rel_op_0061",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.05,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,50\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((2* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(1* 5)\n+(1* 3)\n+(3* 5) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0061"
  },
  {
    "id": "rel_op_0062",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.95,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nHomero Cavalcanti: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,83\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 4)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,58\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,58",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0062"
  },
  {
    "id": "rel_op_0063",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.83,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,67\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 1)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,17",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0063"
  },
  {
    "id": "rel_op_0064",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.28,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,33\nHomero Cavalcanti: ((3* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,42\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nANA INES DE JESUS VIEIRA: ((2* 5)\n+(1* 2)\n+(3* 5)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0064"
  },
  {
    "id": "rel_op_0065",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.37,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5)\n+(3* 4)\n+(2* 4) )/12\nNota: 4,58\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4)\n+(2* 4)\n+(1* 4) )/12\nNota: 4,50\nANA INES DE JESUS VIEIRA: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 3) )/12\nNota: 3,83",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0065"
  },
  {
    "id": "rel_op_0066",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.13,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 3,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,17\nHomero Cavalcanti: ((3* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,33\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,17\nANA INES DE JESUS VIEIRA: ((2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(3* 2)\n+(1* 2) )/12\nNota: 1,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0066"
  },
  {
    "id": "rel_op_0067",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.32,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,50\nHomero Cavalcanti: ((2* 4)\n+(1* 4)\n+(2* 5)\n+(1* 4)\n+(1* 3)\n+(2* 4)\n+(3* 5) )/12\nNota: 4,33\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,25\nANA INES DE JESUS VIEIRA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 3)\n+(2* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,08",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0067"
  },
  {
    "id": "rel_op_0068",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.65,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nHomero Cavalcanti: ((2* 4)\n+(1* 3)\n+(3* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,92\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,50\nANA INES DE JESUS VIEIRA: ((2* 5)\n+(3* 4)\n+(2* 2)\n+(1* 1)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0068"
  },
  {
    "id": "rel_op_0069",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.27,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 4)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,83\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,42\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 2,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0069"
  },
  {
    "id": "rel_op_0070",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.88,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,67\nHomero Cavalcanti: ((3* 4)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(1* 5)\n+(1* 5)\n+(2* 4) )/12\nNota: 4,25\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75\nANA INES DE JESUS VIEIRA: ((1* 4)\n+(3* 3)\n+(2* 4)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 2) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0070"
  },
  {
    "id": "rel_op_0071",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.63,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 3)\n+(1* 5) )/12\nNota: 4,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nHomero Cavalcanti: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,42\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,58\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(1* 1)\n+(2* 1)\n+(3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1) )/12\nNota: 1,25",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0071"
  },
  {
    "id": "rel_op_0072",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.88,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 3)\n+(3* 5)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,08\nHomero Cavalcanti: ((3* 5)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,58\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 3) )/12\nNota: 4,42\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(3* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0072"
  },
  {
    "id": "rel_op_0073",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.82,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 1) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0073"
  },
  {
    "id": "rel_op_0074",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.38,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,92\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,67\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((3* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(1* 3)\n+(2* 4) )/12\nNota: 4,50",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0074"
  },
  {
    "id": "rel_op_0075",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.63,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 5) )/12\nNota: 4,17\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,83",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0075"
  },
  {
    "id": "rel_op_0076",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.72,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,83\nMoisés Leal: ((1* 3)\n+(2* 3)\n+(2* 3)\n+(3* 3)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,08\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1)\n+(2* 1)\n+(3* 3)\n+(2* 3) )/12\nNota: 1,83",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0076"
  },
  {
    "id": "rel_op_0077",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.1,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,25\nHomero Cavalcanti: ((3* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,92\nANA INES DE JESUS VIEIRA: ((2* 4)\n+(1* 5)\n+(2* 4)\n+(1* 2)\n+(2* 5)\n+(1* 3)\n+(3* 4) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0077"
  },
  {
    "id": "rel_op_0078",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.73,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 3)\n+(3* 1)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,75\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 3)\n+(1* 1)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 2) )/12\nNota: 2,75\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0078"
  },
  {
    "id": "rel_op_0079",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.6,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((2* 5)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1)\n+(3* 1) )/12\nNota: 1,67\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0079"
  },
  {
    "id": "rel_op_0080",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.98,
    "criteriosENota": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 1)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,92\nHomero Cavalcanti: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 4)\n+(1* 3) )/12\nNota: 2,25\nMoisés Leal: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,58\nRODRIGO BEZERRA: ((3* 2)\n+(1* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2) )/12\nNota: 2,17\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0080"
  },
  {
    "id": "rel_op_0081",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.13,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 5) )/12\nNota: 3,75\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,00\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(1* 3) )/12\nNota: 3,67\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,25",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0081"
  },
  {
    "id": "rel_op_0082",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.23,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(1* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(1* 3) )/12\nNota: 2,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0082"
  },
  {
    "id": "rel_op_0083",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.3,
    "criteriosENota": "RODRIGO BEZERRA: ((2* 4)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 2) )/12\nNota: 3,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(3* 3)\n+(1* 4) )/12\nNota: 4,00\nHomero Cavalcanti: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,83\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92\nANA INES DE JESUS VIEIRA: ((2* 3)\n+(2* 5)\n+(1* 2)\n+(2* 2)\n+(3* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,67",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0083"
  },
  {
    "id": "rel_op_0084",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.92,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nHomero Cavalcanti: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,25\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,25\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0084"
  },
  {
    "id": "rel_op_0085",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.58,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,33\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,92\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,75\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 1,92",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0085"
  },
  {
    "id": "rel_op_0086",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.47,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,67\nHomero Cavalcanti: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,50\nMoisés Leal: ((3* 2)\n+(2* 1)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,50\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0086"
  },
  {
    "id": "rel_op_0087",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.37,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5)\n+(3* 4)\n+(2* 4) )/12\nNota: 4,58\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4)\n+(2* 4)\n+(1* 4) )/12\nNota: 4,50\nANA INES DE JESUS VIEIRA: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 3) )/12\nNota: 3,83",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0087"
  },
  {
    "id": "rel_op_0088",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.38,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,33\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,42\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,00\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(2* 2)\n+(1* 2)\n+(3* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,83",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0088"
  },
  {
    "id": "rel_op_0089",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.13,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 3,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,17\nHomero Cavalcanti: ((3* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,33\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,17\nANA INES DE JESUS VIEIRA: ((2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(3* 2)\n+(1* 2) )/12\nNota: 1,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0089"
  },
  {
    "id": "rel_op_0090",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.27,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 4)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,83\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,42\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 2,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0090"
  },
  {
    "id": "rel_op_0091",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.82,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 1) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0091"
  },
  {
    "id": "rel_op_0092",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.63,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 3)\n+(1* 5) )/12\nNota: 4,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nHomero Cavalcanti: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,42\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,58\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(1* 1)\n+(2* 1)\n+(3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1) )/12\nNota: 1,25",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0092"
  },
  {
    "id": "rel_op_0093",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.63,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 5) )/12\nNota: 4,17\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,83",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0093"
  },
  {
    "id": "rel_op_0094",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.88,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 3)\n+(3* 5)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,08\nHomero Cavalcanti: ((3* 5)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,58\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 3) )/12\nNota: 4,42\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(3* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0094"
  },
  {
    "id": "rel_op_0095",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.18,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,42\nHomero Cavalcanti: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,50\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0095"
  },
  {
    "id": "rel_op_0096",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.38,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,92\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,67\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((3* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(1* 3)\n+(2* 4) )/12\nNota: 4,50",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0096"
  },
  {
    "id": "rel_op_0097",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.98,
    "criteriosENota": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 1)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,92\nHomero Cavalcanti: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 4)\n+(1* 3) )/12\nNota: 2,25\nMoisés Leal: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,58\nRODRIGO BEZERRA: ((3* 2)\n+(1* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2) )/12\nNota: 2,17\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0097"
  },
  {
    "id": "rel_op_0098",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.23,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(1* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(1* 3) )/12\nNota: 2,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0098"
  },
  {
    "id": "rel_op_0099",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.03,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(2* 3)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,75\nHomero Cavalcanti: ((3* 3)\n+(2* 2)\n+(1* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3)\n+(2* 4) )/12\nNota: 3,33\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(1* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4)\n+(2* 3)\n+(2* 2) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(3* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0099"
  },
  {
    "id": "rel_op_0100",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0100"
  },
  {
    "id": "rel_op_0101",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.72,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,83\nMoisés Leal: ((1* 3)\n+(2* 3)\n+(2* 3)\n+(3* 3)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,08\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1)\n+(2* 1)\n+(3* 3)\n+(2* 3) )/12\nNota: 1,83",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0101"
  },
  {
    "id": "rel_op_0102",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.6,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((2* 5)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1)\n+(3* 1) )/12\nNota: 1,67\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0102"
  },
  {
    "id": "rel_op_0103",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.5,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 4) )/12\nNota: 4,00\nHomero Cavalcanti: ((2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3)\n+(3* 3) )/12\nNota: 3,75\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,33\nANA INES DE JESUS VIEIRA: ((2* 3)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(3* 3)\n+(1* 3) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0103"
  },
  {
    "id": "rel_op_0104",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.75,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,33\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,92\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(3* 2) )/12\nNota: 1,50",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0104"
  },
  {
    "id": "rel_op_0105",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.05,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,50\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((2* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(1* 5)\n+(1* 3)\n+(3* 5) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0105"
  },
  {
    "id": "rel_op_0106",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.83,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,67\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 1)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,17",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0106"
  },
  {
    "id": "rel_op_0107",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.88,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,67\nHomero Cavalcanti: ((3* 4)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(1* 5)\n+(1* 5)\n+(2* 4) )/12\nNota: 4,25\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75\nANA INES DE JESUS VIEIRA: ((1* 4)\n+(3* 3)\n+(2* 4)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 2) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0107"
  },
  {
    "id": "rel_op_0108",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.1,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,25\nHomero Cavalcanti: ((3* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,92\nANA INES DE JESUS VIEIRA: ((2* 4)\n+(1* 5)\n+(2* 4)\n+(1* 2)\n+(2* 5)\n+(1* 3)\n+(3* 4) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0108"
  },
  {
    "id": "rel_op_0109",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.95,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nHomero Cavalcanti: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,83\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 4)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,58\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,58",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0109"
  },
  {
    "id": "rel_op_0110",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.28,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,33\nHomero Cavalcanti: ((3* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,42\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nANA INES DE JESUS VIEIRA: ((2* 5)\n+(1* 2)\n+(3* 5)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0110"
  },
  {
    "id": "rel_op_0111",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.15,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,42\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,08\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(3* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,92\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0111"
  },
  {
    "id": "rel_op_0112",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.52,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 4)\n+(1* 2) )/12\nNota: 2,17\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,08",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0112"
  },
  {
    "id": "rel_op_0113",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.65,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nHomero Cavalcanti: ((2* 4)\n+(1* 3)\n+(3* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,92\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,50\nANA INES DE JESUS VIEIRA: ((2* 5)\n+(3* 4)\n+(2* 2)\n+(1* 1)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0113"
  },
  {
    "id": "rel_op_0114",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.85,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 1)\n+(1* 2) )/12\nNota: 2,67\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,50\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 4) )/12\nNota: 3,08\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,92\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0114"
  },
  {
    "id": "rel_op_0115",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.83,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,33\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,08\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,33\nANA INES DE JESUS VIEIRA: ((1* 3)\n+(3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 2) )/12\nNota: 2,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0115"
  },
  {
    "id": "rel_op_0116",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.73,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 3)\n+(3* 1)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,75\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 3)\n+(1* 1)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 2) )/12\nNota: 2,75\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0116"
  },
  {
    "id": "rel_op_0117",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.58,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,33\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,92\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,75\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 1,92",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0117"
  },
  {
    "id": "rel_op_0118",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.92,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nHomero Cavalcanti: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,25\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,25\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0118"
  },
  {
    "id": "rel_op_0119",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.32,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,50\nHomero Cavalcanti: ((2* 4)\n+(1* 4)\n+(2* 5)\n+(1* 4)\n+(1* 3)\n+(2* 4)\n+(3* 5) )/12\nNota: 4,33\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,25\nANA INES DE JESUS VIEIRA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 3)\n+(2* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,08",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0119"
  },
  {
    "id": "rel_op_0120",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.88,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 3)\n+(3* 5)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,08\nHomero Cavalcanti: ((3* 5)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,58\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 3) )/12\nNota: 4,42\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(3* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0120"
  },
  {
    "id": "rel_op_0121",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.13,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 3,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,17\nHomero Cavalcanti: ((3* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,33\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,17\nANA INES DE JESUS VIEIRA: ((2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(3* 2)\n+(1* 2) )/12\nNota: 1,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0121"
  },
  {
    "id": "rel_op_0122",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.27,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 4)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,83\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,42\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 2,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0122"
  },
  {
    "id": "rel_op_0123",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.88,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,67\nHomero Cavalcanti: ((3* 4)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(1* 5)\n+(1* 5)\n+(2* 4) )/12\nNota: 4,25\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75\nANA INES DE JESUS VIEIRA: ((1* 4)\n+(3* 3)\n+(2* 4)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 2) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0123"
  },
  {
    "id": "rel_op_0124",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.13,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 5) )/12\nNota: 3,75\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,00\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(1* 3) )/12\nNota: 3,67\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,25",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0124"
  },
  {
    "id": "rel_op_0125",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.38,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,33\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,42\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,00\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(2* 2)\n+(1* 2)\n+(3* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,83",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0125"
  },
  {
    "id": "rel_op_0126",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.63,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 5) )/12\nNota: 4,17\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,83",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0126"
  },
  {
    "id": "rel_op_0127",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.38,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,92\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,67\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((3* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(1* 3)\n+(2* 4) )/12\nNota: 4,50",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0127"
  },
  {
    "id": "rel_op_0128",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.82,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 1) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0128"
  },
  {
    "id": "rel_op_0129",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.3,
    "criteriosENota": "RODRIGO BEZERRA: ((2* 4)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 2) )/12\nNota: 3,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(3* 3)\n+(1* 4) )/12\nNota: 4,00\nHomero Cavalcanti: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,83\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92\nANA INES DE JESUS VIEIRA: ((2* 3)\n+(2* 5)\n+(1* 2)\n+(2* 2)\n+(3* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,67",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0129"
  },
  {
    "id": "rel_op_0130",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.63,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 3)\n+(1* 5) )/12\nNota: 4,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nHomero Cavalcanti: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,42\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,58\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(1* 1)\n+(2* 1)\n+(3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1) )/12\nNota: 1,25",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0130"
  },
  {
    "id": "rel_op_0131",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.6,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((2* 5)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1)\n+(3* 1) )/12\nNota: 1,67\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0131"
  },
  {
    "id": "rel_op_0132",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0132"
  },
  {
    "id": "rel_op_0133",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.98,
    "criteriosENota": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 1)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,92\nHomero Cavalcanti: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 4)\n+(1* 3) )/12\nNota: 2,25\nMoisés Leal: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,58\nRODRIGO BEZERRA: ((3* 2)\n+(1* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2) )/12\nNota: 2,17\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0133"
  },
  {
    "id": "rel_op_0134",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.23,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(1* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(1* 3) )/12\nNota: 2,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0134"
  },
  {
    "id": "rel_op_0135",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.1,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,25\nHomero Cavalcanti: ((3* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,92\nANA INES DE JESUS VIEIRA: ((2* 4)\n+(1* 5)\n+(2* 4)\n+(1* 2)\n+(2* 5)\n+(1* 3)\n+(3* 4) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0135"
  },
  {
    "id": "rel_op_0136",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.73,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 3)\n+(3* 1)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,75\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 3)\n+(1* 1)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 2) )/12\nNota: 2,75\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0136"
  },
  {
    "id": "rel_op_0137",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.47,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,67\nHomero Cavalcanti: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,50\nMoisés Leal: ((3* 2)\n+(2* 1)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,50\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0137"
  },
  {
    "id": "rel_op_0138",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.18,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,42\nHomero Cavalcanti: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,50\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0138"
  },
  {
    "id": "rel_op_0139",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.72,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,83\nMoisés Leal: ((1* 3)\n+(2* 3)\n+(2* 3)\n+(3* 3)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,08\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1)\n+(2* 1)\n+(3* 3)\n+(2* 3) )/12\nNota: 1,83",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0139"
  },
  {
    "id": "rel_op_0140",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.47,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,67\nHomero Cavalcanti: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,50\nMoisés Leal: ((3* 2)\n+(2* 1)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,50\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0140"
  },
  {
    "id": "rel_op_0141",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.58,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,33\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,92\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,75\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 1,92",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0141"
  },
  {
    "id": "rel_op_0142",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.37,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5)\n+(3* 4)\n+(2* 4) )/12\nNota: 4,58\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4)\n+(2* 4)\n+(1* 4) )/12\nNota: 4,50\nANA INES DE JESUS VIEIRA: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 3) )/12\nNota: 3,83",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0142"
  },
  {
    "id": "rel_op_0143",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.13,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 5) )/12\nNota: 3,75\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,00\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(1* 3) )/12\nNota: 3,67\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,25",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0143"
  },
  {
    "id": "rel_op_0144",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.18,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,42\nHomero Cavalcanti: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,50\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0144"
  },
  {
    "id": "rel_op_0145",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0145"
  },
  {
    "id": "rel_op_0146",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.45,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((1* 3)\n+(2* 2)\n+(2* 3)\n+(3* 4)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,83\nHomero Cavalcanti: ((3* 4)\n+(2* 2)\n+(1* 4)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 2) )/12\nNota: 3,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(2* 3) )/12\nNota: 3,42\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0146"
  },
  {
    "id": "rel_op_0147",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.37,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5)\n+(3* 4)\n+(2* 4) )/12\nNota: 4,58\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4)\n+(2* 4)\n+(1* 4) )/12\nNota: 4,50\nANA INES DE JESUS VIEIRA: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 3) )/12\nNota: 3,83",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0147"
  },
  {
    "id": "rel_op_0148",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.3,
    "criteriosENota": "RODRIGO BEZERRA: ((2* 4)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 2) )/12\nNota: 3,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(3* 3)\n+(1* 4) )/12\nNota: 4,00\nHomero Cavalcanti: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,83\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92\nANA INES DE JESUS VIEIRA: ((2* 3)\n+(2* 5)\n+(1* 2)\n+(2* 2)\n+(3* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,67",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0148"
  },
  {
    "id": "rel_op_0149",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0149"
  },
  {
    "id": "rel_op_0150",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.03,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(2* 3)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,75\nHomero Cavalcanti: ((3* 3)\n+(2* 2)\n+(1* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3)\n+(2* 4) )/12\nNota: 3,33\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(1* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4)\n+(2* 3)\n+(2* 2) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(3* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0150"
  },
  {
    "id": "rel_op_0151",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.35,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,08\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 4)\n+(1* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 5)\n+(2* 4) )/12\nNota: 4,17\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 3,17\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,42",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0151"
  },
  {
    "id": "rel_op_0152",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.03,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(2* 3)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,75\nHomero Cavalcanti: ((3* 3)\n+(2* 2)\n+(1* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3)\n+(2* 4) )/12\nNota: 3,33\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(1* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4)\n+(2* 3)\n+(2* 2) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(3* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0152"
  },
  {
    "id": "rel_op_0153",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.5,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 4) )/12\nNota: 4,00\nHomero Cavalcanti: ((2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3)\n+(3* 3) )/12\nNota: 3,75\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,33\nANA INES DE JESUS VIEIRA: ((2* 3)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(3* 3)\n+(1* 3) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0153"
  },
  {
    "id": "rel_op_0154",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.95,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nHomero Cavalcanti: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,83\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 4)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,58\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,58",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0154"
  },
  {
    "id": "rel_op_0155",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.05,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,50\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((2* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(1* 5)\n+(1* 3)\n+(3* 5) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0155"
  },
  {
    "id": "rel_op_0156",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.75,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,33\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,92\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(3* 2) )/12\nNota: 1,50",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0156"
  },
  {
    "id": "rel_op_0157",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.65,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nHomero Cavalcanti: ((2* 4)\n+(1* 3)\n+(3* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,92\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,50\nANA INES DE JESUS VIEIRA: ((2* 5)\n+(3* 4)\n+(2* 2)\n+(1* 1)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0157"
  },
  {
    "id": "rel_op_0158",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.83,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,33\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,08\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,33\nANA INES DE JESUS VIEIRA: ((1* 3)\n+(3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 2) )/12\nNota: 2,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0158"
  },
  {
    "id": "rel_op_0159",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.58,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,33\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,92\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,75\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 1,92",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0159"
  },
  {
    "id": "rel_op_0160",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.38,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,33\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,42\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,00\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(2* 2)\n+(1* 2)\n+(3* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,83",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0160"
  },
  {
    "id": "rel_op_0161",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.92,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nHomero Cavalcanti: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,25\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,25\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0161"
  },
  {
    "id": "rel_op_0162",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.88,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,67\nHomero Cavalcanti: ((3* 4)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(1* 5)\n+(1* 5)\n+(2* 4) )/12\nNota: 4,25\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75\nANA INES DE JESUS VIEIRA: ((1* 4)\n+(3* 3)\n+(2* 4)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 2) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0162"
  },
  {
    "id": "rel_op_0163",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.13,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 3,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,17\nHomero Cavalcanti: ((3* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,33\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,17\nANA INES DE JESUS VIEIRA: ((2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(3* 2)\n+(1* 2) )/12\nNota: 1,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0163"
  },
  {
    "id": "rel_op_0164",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.03,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(2* 3)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,75\nHomero Cavalcanti: ((3* 3)\n+(2* 2)\n+(1* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3)\n+(2* 4) )/12\nNota: 3,33\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(1* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4)\n+(2* 3)\n+(2* 2) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(3* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0164"
  },
  {
    "id": "rel_op_0165",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.28,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,33\nHomero Cavalcanti: ((3* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,42\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nANA INES DE JESUS VIEIRA: ((2* 5)\n+(1* 2)\n+(3* 5)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0165"
  },
  {
    "id": "rel_op_0166",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.45,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((1* 3)\n+(2* 2)\n+(2* 3)\n+(3* 4)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,83\nHomero Cavalcanti: ((3* 4)\n+(2* 2)\n+(1* 4)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 2) )/12\nNota: 3,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(2* 3) )/12\nNota: 3,42\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0166"
  },
  {
    "id": "rel_op_0167",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.83,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,67\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 1)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,17",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0167"
  },
  {
    "id": "rel_op_0168",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.6,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((2* 5)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1)\n+(3* 1) )/12\nNota: 1,67\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0168"
  },
  {
    "id": "rel_op_0169",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.82,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 1) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0169"
  },
  {
    "id": "rel_op_0170",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.27,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 4)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,83\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,42\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 2,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0170"
  },
  {
    "id": "rel_op_0171",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.63,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 3)\n+(1* 5) )/12\nNota: 4,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nHomero Cavalcanti: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,42\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,58\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(1* 1)\n+(2* 1)\n+(3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1) )/12\nNota: 1,25",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0171"
  },
  {
    "id": "rel_op_0172",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.88,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 3)\n+(3* 5)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,08\nHomero Cavalcanti: ((3* 5)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,58\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 3) )/12\nNota: 4,42\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(3* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0172"
  },
  {
    "id": "rel_op_0173",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.45,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((1* 3)\n+(2* 2)\n+(2* 3)\n+(3* 4)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,83\nHomero Cavalcanti: ((3* 4)\n+(2* 2)\n+(1* 4)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 2) )/12\nNota: 3,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(2* 3) )/12\nNota: 3,42\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0173"
  },
  {
    "id": "rel_op_0174",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.45,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((1* 3)\n+(2* 2)\n+(2* 3)\n+(3* 4)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,83\nHomero Cavalcanti: ((3* 4)\n+(2* 2)\n+(1* 4)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 2) )/12\nNota: 3,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(2* 3) )/12\nNota: 3,42\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0174"
  },
  {
    "id": "rel_op_0175",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.38,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,92\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,67\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((3* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(1* 3)\n+(2* 4) )/12\nNota: 4,50",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0175"
  },
  {
    "id": "rel_op_0176",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.23,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(1* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(1* 3) )/12\nNota: 2,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0176"
  },
  {
    "id": "rel_op_0177",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.1,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,25\nHomero Cavalcanti: ((3* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,92\nANA INES DE JESUS VIEIRA: ((2* 4)\n+(1* 5)\n+(2* 4)\n+(1* 2)\n+(2* 5)\n+(1* 3)\n+(3* 4) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0177"
  },
  {
    "id": "rel_op_0178",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.63,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 5) )/12\nNota: 4,17\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,83",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0178"
  },
  {
    "id": "rel_op_0179",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.13,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 5) )/12\nNota: 3,75\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,00\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(1* 3) )/12\nNota: 3,67\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,25",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0179"
  },
  {
    "id": "rel_op_0180",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.73,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 3)\n+(3* 1)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,75\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 3)\n+(1* 1)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 2) )/12\nNota: 2,75\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0180"
  },
  {
    "id": "rel_op_0181",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.47,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,67\nHomero Cavalcanti: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,50\nMoisés Leal: ((3* 2)\n+(2* 1)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,50\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0181"
  },
  {
    "id": "rel_op_0182",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.03,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(2* 3)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,75\nHomero Cavalcanti: ((3* 3)\n+(2* 2)\n+(1* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3)\n+(2* 4) )/12\nNota: 3,33\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(1* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4)\n+(2* 3)\n+(2* 2) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(3* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0182"
  },
  {
    "id": "rel_op_0183",
    "propostaNome": "Proposta Geral",
    "notaFinal": 2.72,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,83\nMoisés Leal: ((1* 3)\n+(2* 3)\n+(2* 3)\n+(3* 3)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,08\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1)\n+(2* 1)\n+(3* 3)\n+(2* 3) )/12\nNota: 1,83",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0183"
  },
  {
    "id": "rel_op_0184",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.45,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((1* 3)\n+(2* 2)\n+(2* 3)\n+(3* 4)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,83\nHomero Cavalcanti: ((3* 4)\n+(2* 2)\n+(1* 4)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 2) )/12\nNota: 3,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(2* 3) )/12\nNota: 3,42\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0184"
  },
  {
    "id": "rel_op_0185",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.37,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5)\n+(3* 4)\n+(2* 4) )/12\nNota: 4,58\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4)\n+(2* 4)\n+(1* 4) )/12\nNota: 4,50\nANA INES DE JESUS VIEIRA: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 3) )/12\nNota: 3,83",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0185"
  },
  {
    "id": "rel_op_0186",
    "propostaNome": "Proposta Geral",
    "notaFinal": null,
    "criteriosENota": ": ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 1)\n+(1* 5) )/12\nNota: 3,83",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0186"
  },
  {
    "id": "rel_op_0187",
    "propostaNome": "Proposta Geral",
    "notaFinal": 3.3,
    "criteriosENota": "RODRIGO BEZERRA: ((2* 4)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 2) )/12\nNota: 3,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(3* 3)\n+(1* 4) )/12\nNota: 4,00\nHomero Cavalcanti: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,83\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92\nANA INES DE JESUS VIEIRA: ((2* 3)\n+(2* 5)\n+(1* 2)\n+(2* 2)\n+(3* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,67",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0187"
  },
  {
    "id": "rel_op_0188",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.18,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,42\nHomero Cavalcanti: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,50\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0188"
  },
  {
    "id": "rel_op_0189",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0189"
  },
  {
    "id": "rel_op_0190",
    "propostaNome": "Proposta Geral",
    "notaFinal": 4.32,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,50\nHomero Cavalcanti: ((2* 4)\n+(1* 4)\n+(2* 5)\n+(1* 4)\n+(1* 3)\n+(2* 4)\n+(3* 5) )/12\nNota: 4,33\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,25\nANA INES DE JESUS VIEIRA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 3)\n+(2* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,08",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0190"
  },
  {
    "id": "rel_op_0191",
    "propostaNome": "Proposta Geral",
    "notaFinal": 1.18,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,42\nHomero Cavalcanti: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,50\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 08:50:00",
    "submissionId": null,
    "slug": "rel-op-0191"
  },
  {
    "id": "rel_op_0192",
    "propostaNome": "Proposta Geral",
    "notaFinal": null,
    "criteriosENota": ": ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 1)\n+(1* 5) )/12\nNota: 3,83",
    "createdDate": "2025-07-10 08:53:00",
    "submissionId": null,
    "slug": "rel-op-0192"
  },
  {
    "id": "rel_op_0193",
    "propostaNome": "Proposta Geral",
    "notaFinal": null,
    "criteriosENota": ": ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 1)\n+(1* 5) )/12\nNota: 3,83",
    "createdDate": "2025-07-10 08:54:00",
    "submissionId": null,
    "slug": "rel-op-0193"
  },
  {
    "id": "rel_op_0194",
    "propostaNome": "Proposta Geral",
    "notaFinal": null,
    "criteriosENota": ": ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 1)\n+(1* 5) )/12\nNota: 3,83",
    "createdDate": "2025-07-10 08:57:00",
    "submissionId": null,
    "slug": "rel-op-0194"
  },
  {
    "id": "rel_op_0195",
    "propostaNome": "MEDIBOX(1747154336818x743371960980340700)",
    "notaFinal": 1.98,
    "criteriosENota": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 1)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,92\nHomero Cavalcanti: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 4)\n+(1* 3) )/12\nNota: 2,25\nMoisés Leal: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,58\nRODRIGO BEZERRA: ((3* 2)\n+(1* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2) )/12\nNota: 2,17\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0073",
    "slug": "rel-op-0195"
  },
  {
    "id": "rel_op_0196",
    "propostaNome": "MEDIBOX(1747154336818x743371960980340700)",
    "notaFinal": 1.98,
    "criteriosENota": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 1)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,92\nHomero Cavalcanti: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 4)\n+(1* 3) )/12\nNota: 2,25\nMoisés Leal: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,58\nRODRIGO BEZERRA: ((3* 2)\n+(1* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2) )/12\nNota: 2,17\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0073",
    "slug": "rel-op-0196"
  },
  {
    "id": "rel_op_0197",
    "propostaNome": "Kali(1750449027146x792217332883652600)",
    "notaFinal": 2.95,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nHomero Cavalcanti: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,83\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 4)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,58\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,58",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0027",
    "slug": "rel-op-0197"
  },
  {
    "id": "rel_op_0198",
    "propostaNome": "Projeto Saus(1750442890016x722503316385824800)",
    "notaFinal": 2.83,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,33\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,08\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,33\nANA INES DE JESUS VIEIRA: ((1* 3)\n+(3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 2) )/12\nNota: 2,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0198"
  },
  {
    "id": "rel_op_0199",
    "propostaNome": "Dayse Maria de Souza Oliveira, Amanda Felix da Silva, Antônia Felix Lessa(1750428483714x110287244945522690)",
    "notaFinal": 2.58,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,33\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,92\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,75\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 1,92",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0199"
  },
  {
    "id": "rel_op_0200",
    "propostaNome": "Lemobs(1750441883750x976151120499966000)",
    "notaFinal": 4.28,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,33\nHomero Cavalcanti: ((3* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,42\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nANA INES DE JESUS VIEIRA: ((2* 5)\n+(1* 2)\n+(3* 5)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0200"
  },
  {
    "id": "rel_op_0201",
    "propostaNome": "Liu(1747794171431x940488044287098900)",
    "notaFinal": 3.88,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,67\nHomero Cavalcanti: ((3* 4)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(1* 5)\n+(1* 5)\n+(2* 4) )/12\nNota: 4,25\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75\nANA INES DE JESUS VIEIRA: ((1* 4)\n+(3* 3)\n+(2* 4)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 2) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0049",
    "slug": "rel-op-0201"
  },
  {
    "id": "rel_op_0202",
    "propostaNome": "RedCheck(1747747339966x581554505157705700)",
    "notaFinal": 2.27,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 4)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,83\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,42\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 2,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0202"
  },
  {
    "id": "rel_op_0203",
    "propostaNome": "Clinitech(1747276858851x787162643421200400)",
    "notaFinal": 1.82,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 1) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0203"
  },
  {
    "id": "rel_op_0204",
    "propostaNome": "Cuida+ Saúde(1750458720850x474968371098288100)",
    "notaFinal": 3.5,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 4) )/12\nNota: 4,00\nHomero Cavalcanti: ((2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3)\n+(3* 3) )/12\nNota: 3,75\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,33\nANA INES DE JESUS VIEIRA: ((2* 3)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(3* 3)\n+(1* 3) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0204"
  },
  {
    "id": "rel_op_0205",
    "propostaNome": "neri(1750382702746x817002404516986900)",
    "notaFinal": 3.38,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,33\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,42\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,00\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(2* 2)\n+(1* 2)\n+(3* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,83",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0205"
  },
  {
    "id": "rel_op_0206",
    "propostaNome": "Ponte Saúde(1750460642268x111056270580514820)",
    "notaFinal": 2.75,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,33\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,92\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(3* 2) )/12\nNota: 1,50",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0206"
  },
  {
    "id": "rel_op_0207",
    "propostaNome": "Cesinhas(1750360813598x604209465657393200)",
    "notaFinal": 3.13,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 3,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,17\nHomero Cavalcanti: ((3* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,33\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,17\nANA INES DE JESUS VIEIRA: ((2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(3* 2)\n+(1* 2) )/12\nNota: 1,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0207"
  },
  {
    "id": "rel_op_0208",
    "propostaNome": "Conexão e Cuidado(1750457780030x714257608034222100)",
    "notaFinal": 2.83,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,67\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 1)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,17",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0208"
  },
  {
    "id": "rel_op_0209",
    "propostaNome": "Saúde com I.A(1747250100162x590354311999127600)",
    "notaFinal": 3.88,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 3)\n+(3* 5)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,08\nHomero Cavalcanti: ((3* 5)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,58\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 3) )/12\nNota: 4,42\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(3* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0209"
  },
  {
    "id": "rel_op_0210",
    "propostaNome": "Clinitech Tecnologia em Saúde LTDA.(1750437798539x879582976976093200)",
    "notaFinal": 3.65,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nHomero Cavalcanti: ((2* 4)\n+(1* 3)\n+(3* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,92\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,50\nANA INES DE JESUS VIEIRA: ((2* 5)\n+(3* 4)\n+(2* 2)\n+(1* 1)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0210"
  },
  {
    "id": "rel_op_0211",
    "propostaNome": "KTecS(1750457846826x615898407090257900)",
    "notaFinal": 4.05,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,50\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((2* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(1* 5)\n+(1* 3)\n+(3* 5) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0211"
  },
  {
    "id": "rel_op_0212",
    "propostaNome": "ROBO LAURA(1747241501575x516406866711674900)",
    "notaFinal": 2.63,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 3)\n+(1* 5) )/12\nNota: 4,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nHomero Cavalcanti: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,42\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,58\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(1* 1)\n+(2* 1)\n+(3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1) )/12\nNota: 1,25",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0212"
  },
  {
    "id": "rel_op_0213",
    "propostaNome": "Metasolution(1750474393435x693673183255986200)",
    "notaFinal": 3.52,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 4)\n+(1* 2) )/12\nNota: 2,17\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,08",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0213"
  },
  {
    "id": "rel_op_0214",
    "propostaNome": "Wladimilson Bernardino Nascimento(1750474698961x745850263332978700)",
    "notaFinal": 3.15,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,42\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,08\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(3* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,92\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0214"
  },
  {
    "id": "rel_op_0215",
    "propostaNome": "GO BEE APIS(1750433496862x349578267965521900)",
    "notaFinal": 4.32,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,50\nHomero Cavalcanti: ((2* 4)\n+(1* 4)\n+(2* 5)\n+(1* 4)\n+(1* 3)\n+(2* 4)\n+(3* 5) )/12\nNota: 4,33\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,25\nANA INES DE JESUS VIEIRA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 3)\n+(2* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,08",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0215"
  },
  {
    "id": "rel_op_0216",
    "propostaNome": "Manguehub(1750468570847x616203165245898800)",
    "notaFinal": 3.35,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,08\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 4)\n+(1* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 5)\n+(2* 4) )/12\nNota: 4,17\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 3,17\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,42",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0216"
  },
  {
    "id": "rel_op_0217",
    "propostaNome": "CFIT(1750430947736x758923719412285400)",
    "notaFinal": 3.92,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nHomero Cavalcanti: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,25\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,25\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0217"
  },
  {
    "id": "rel_op_0218",
    "propostaNome": "ConectaVital(1747140161151x752513062168166400)",
    "notaFinal": 2.72,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,83\nMoisés Leal: ((1* 3)\n+(2* 3)\n+(2* 3)\n+(3* 3)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,08\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1)\n+(2* 1)\n+(3* 3)\n+(2* 3) )/12\nNota: 1,83",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0065",
    "slug": "rel-op-0218"
  },
  {
    "id": "rel_op_0219",
    "propostaNome": "REbate(1747183088043x258719990149808130)",
    "notaFinal": 3.63,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 5) )/12\nNota: 4,17\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,83",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0071",
    "slug": "rel-op-0219"
  },
  {
    "id": "rel_op_0220",
    "propostaNome": "Ponte Saúde(1750460642268x111056270580514820)",
    "notaFinal": 2.75,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,33\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,92\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(3* 2) )/12\nNota: 1,50",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0220"
  },
  {
    "id": "rel_op_0221",
    "propostaNome": "dolfidoc(1746974279211x999840447551504400)",
    "notaFinal": 1.73,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 3)\n+(3* 1)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,75\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 3)\n+(1* 1)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 2) )/12\nNota: 2,75\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0221"
  },
  {
    "id": "rel_op_0222",
    "propostaNome": "UPSAÚDE (1750471215836x861794257257103400)",
    "notaFinal": 2.85,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 1)\n+(1* 2) )/12\nNota: 2,67\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,50\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 4) )/12\nNota: 3,08\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,92\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0222"
  },
  {
    "id": "rel_op_0223",
    "propostaNome": "UPSAÚDE (1750471215836x861794257257103400)",
    "notaFinal": 2.85,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 1)\n+(1* 2) )/12\nNota: 2,67\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,50\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 4) )/12\nNota: 3,08\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,92\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0223"
  },
  {
    "id": "rel_op_0224",
    "propostaNome": "Manguehub(1750468570847x616203165245898800)",
    "notaFinal": 3.35,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,08\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 4)\n+(1* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 5)\n+(2* 4) )/12\nNota: 4,17\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 3,17\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,42",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0224"
  },
  {
    "id": "rel_op_0225",
    "propostaNome": "SUSIA(1747235530911x729365137673420800)",
    "notaFinal": 4.38,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,92\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,67\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((3* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(1* 3)\n+(2* 4) )/12\nNota: 4,50",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0067",
    "slug": "rel-op-0225"
  },
  {
    "id": "rel_op_0226",
    "propostaNome": "Mosca Branca deeptech(1746965925773x167408289790820350)",
    "notaFinal": 4.1,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,25\nHomero Cavalcanti: ((3* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,92\nANA INES DE JESUS VIEIRA: ((2* 4)\n+(1* 5)\n+(2* 4)\n+(1* 2)\n+(2* 5)\n+(1* 3)\n+(3* 4) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0226"
  },
  {
    "id": "rel_op_0227",
    "propostaNome": "Cuida+ Saúde(1750458720850x474968371098288100)",
    "notaFinal": 3.5,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 4) )/12\nNota: 4,00\nHomero Cavalcanti: ((2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3)\n+(3* 3) )/12\nNota: 3,75\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,33\nANA INES DE JESUS VIEIRA: ((2* 3)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(3* 3)\n+(1* 3) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0227"
  },
  {
    "id": "rel_op_0228",
    "propostaNome": "Metasolution(1750474393435x693673183255986200)",
    "notaFinal": 3.52,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 4)\n+(1* 2) )/12\nNota: 2,17\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,08",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0228"
  },
  {
    "id": "rel_op_0229",
    "propostaNome": "NAV + SAÚDE(1746922651654x574889112310644740)",
    "notaFinal": 3.13,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 5) )/12\nNota: 3,75\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,00\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(1* 3) )/12\nNota: 3,67\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,25",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0229"
  },
  {
    "id": "rel_op_0230",
    "propostaNome": "Kali(1750449027146x792217332883652600)",
    "notaFinal": 2.95,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nHomero Cavalcanti: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,83\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 4)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,58\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,58",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0027",
    "slug": "rel-op-0230"
  },
  {
    "id": "rel_op_0231",
    "propostaNome": "KTecS(1750457846826x615898407090257900)",
    "notaFinal": 4.05,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,50\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((2* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(1* 5)\n+(1* 3)\n+(3* 5) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0231"
  },
  {
    "id": "rel_op_0232",
    "propostaNome": "Projeto Saus(1750442890016x722503316385824800)",
    "notaFinal": 2.83,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,33\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,08\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,33\nANA INES DE JESUS VIEIRA: ((1* 3)\n+(3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 2) )/12\nNota: 2,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0232"
  },
  {
    "id": "rel_op_0233",
    "propostaNome": "Wladimilson Bernardino Nascimento(1750474698961x745850263332978700)",
    "notaFinal": 3.15,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,42\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,08\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(3* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,92\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0233"
  },
  {
    "id": "rel_op_0234",
    "propostaNome": "Conexão e Cuidado(1750457780030x714257608034222100)",
    "notaFinal": 2.83,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,67\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 1)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,17",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0234"
  },
  {
    "id": "rel_op_0235",
    "propostaNome": "Lemobs(1750441883750x976151120499966000)",
    "notaFinal": 4.28,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,33\nHomero Cavalcanti: ((3* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,42\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nANA INES DE JESUS VIEIRA: ((2* 5)\n+(1* 2)\n+(3* 5)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0235"
  },
  {
    "id": "rel_op_0236",
    "propostaNome": "Tia Bete(1746734309886x839844561318576100)",
    "notaFinal": 3.3,
    "criteriosENota": "RODRIGO BEZERRA: ((2* 4)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 2) )/12\nNota: 3,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(3* 3)\n+(1* 4) )/12\nNota: 4,00\nHomero Cavalcanti: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,83\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92\nANA INES DE JESUS VIEIRA: ((2* 3)\n+(2* 5)\n+(1* 2)\n+(2* 2)\n+(3* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,67",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0236"
  },
  {
    "id": "rel_op_0237",
    "propostaNome": "GO BEE APIS(1750433496862x349578267965521900)",
    "notaFinal": 4.32,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,50\nHomero Cavalcanti: ((2* 4)\n+(1* 4)\n+(2* 5)\n+(1* 4)\n+(1* 3)\n+(2* 4)\n+(3* 5) )/12\nNota: 4,33\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,25\nANA INES DE JESUS VIEIRA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 3)\n+(2* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,08",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0237"
  },
  {
    "id": "rel_op_0238",
    "propostaNome": "Metasolution(1750474393435x693673183255986200)",
    "notaFinal": 3.52,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 4)\n+(1* 2) )/12\nNota: 2,17\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,08",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0238"
  },
  {
    "id": "rel_op_0239",
    "propostaNome": "Clinitech Tecnologia em Saúde LTDA.(1750437798539x879582976976093200)",
    "notaFinal": 3.65,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nHomero Cavalcanti: ((2* 4)\n+(1* 3)\n+(3* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,92\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,50\nANA INES DE JESUS VIEIRA: ((2* 5)\n+(3* 4)\n+(2* 2)\n+(1* 1)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0239"
  },
  {
    "id": "rel_op_0240",
    "propostaNome": "Dayse Maria de Souza Oliveira, Amanda Felix da Silva, Antônia Felix Lessa(1750428483714x110287244945522690)",
    "notaFinal": 2.58,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,33\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,92\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,75\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 1,92",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0240"
  },
  {
    "id": "rel_op_0241",
    "propostaNome": "ALKE(1746492433853x232626703095037950)",
    "notaFinal": 1.47,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,67\nHomero Cavalcanti: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,50\nMoisés Leal: ((3* 2)\n+(2* 1)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,50\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0241"
  },
  {
    "id": "rel_op_0242",
    "propostaNome": "Cogfy(1746491460701x929709310693867500)",
    "notaFinal": 4.37,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5)\n+(3* 4)\n+(2* 4) )/12\nNota: 4,58\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4)\n+(2* 4)\n+(1* 4) )/12\nNota: 4,50\nANA INES DE JESUS VIEIRA: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 3) )/12\nNota: 3,83",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0242"
  },
  {
    "id": "rel_op_0243",
    "propostaNome": "Wladimilson Bernardino Nascimento(1750474698961x745850263332978700)",
    "notaFinal": 3.15,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,42\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,08\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(3* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,92\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0243"
  },
  {
    "id": "rel_op_0244",
    "propostaNome": "neri(1750382702746x817002404516986900)",
    "notaFinal": 3.38,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,33\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,42\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,00\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(2* 2)\n+(1* 2)\n+(3* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,83",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0244"
  },
  {
    "id": "rel_op_0245",
    "propostaNome": "UPSAÚDE (1750471215836x861794257257103400)",
    "notaFinal": 2.85,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 1)\n+(1* 2) )/12\nNota: 2,67\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,50\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 4) )/12\nNota: 3,08\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,92\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0245"
  },
  {
    "id": "rel_op_0246",
    "propostaNome": "Metasolution(1750474393435x693673183255986200)",
    "notaFinal": 3.52,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 4)\n+(1* 2) )/12\nNota: 2,17\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,08",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0246"
  },
  {
    "id": "rel_op_0247",
    "propostaNome": "Manguehub(1750468570847x616203165245898800)",
    "notaFinal": 3.35,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,08\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 4)\n+(1* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 5)\n+(2* 4) )/12\nNota: 4,17\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 3,17\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,42",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0247"
  },
  {
    "id": "rel_op_0248",
    "propostaNome": "Manguehub(1750468570847x616203165245898800)",
    "notaFinal": 3.35,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,08\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 4)\n+(1* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 5)\n+(2* 4) )/12\nNota: 4,17\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 3,17\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,42",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0248"
  },
  {
    "id": "rel_op_0249",
    "propostaNome": "Ponte Saúde(1750460642268x111056270580514820)",
    "notaFinal": 2.75,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,33\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,92\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(3* 2) )/12\nNota: 1,50",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0249"
  },
  {
    "id": "rel_op_0250",
    "propostaNome": "UPSAÚDE (1750471215836x861794257257103400)",
    "notaFinal": 2.85,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 1)\n+(1* 2) )/12\nNota: 2,67\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,50\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 4) )/12\nNota: 3,08\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,92\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0250"
  },
  {
    "id": "rel_op_0251",
    "propostaNome": "Wladimilson Bernardino Nascimento(1750474698961x745850263332978700)",
    "notaFinal": 3.15,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,42\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,08\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(3* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,92\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0251"
  },
  {
    "id": "rel_op_0252",
    "propostaNome": "Cuida+ Saúde(1750458720850x474968371098288100)",
    "notaFinal": 3.5,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 4) )/12\nNota: 4,00\nHomero Cavalcanti: ((2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3)\n+(3* 3) )/12\nNota: 3,75\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,33\nANA INES DE JESUS VIEIRA: ((2* 3)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(3* 3)\n+(1* 3) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0252"
  },
  {
    "id": "rel_op_0253",
    "propostaNome": "Kali(1750449027146x792217332883652600)",
    "notaFinal": 2.95,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nHomero Cavalcanti: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,83\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 4)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,58\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,58",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0027",
    "slug": "rel-op-0253"
  },
  {
    "id": "rel_op_0254",
    "propostaNome": "Projeto Saus(1750442890016x722503316385824800)",
    "notaFinal": 2.83,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,33\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,08\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,33\nANA INES DE JESUS VIEIRA: ((1* 3)\n+(3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 2) )/12\nNota: 2,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0254"
  },
  {
    "id": "rel_op_0255",
    "propostaNome": "Conexão e Cuidado(1750457780030x714257608034222100)",
    "notaFinal": 2.83,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,67\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 1)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,17",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0255"
  },
  {
    "id": "rel_op_0256",
    "propostaNome": "Cesinhas(1750360813598x604209465657393200)",
    "notaFinal": 3.13,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 3,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,17\nHomero Cavalcanti: ((3* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,33\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,17\nANA INES DE JESUS VIEIRA: ((2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(3* 2)\n+(1* 2) )/12\nNota: 1,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0256"
  },
  {
    "id": "rel_op_0257",
    "propostaNome": "Lemobs(1750441883750x976151120499966000)",
    "notaFinal": 4.28,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,33\nHomero Cavalcanti: ((3* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,42\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nANA INES DE JESUS VIEIRA: ((2* 5)\n+(1* 2)\n+(3* 5)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0257"
  },
  {
    "id": "rel_op_0258",
    "propostaNome": "Liu(1747794171431x940488044287098900)",
    "notaFinal": 3.88,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,67\nHomero Cavalcanti: ((3* 4)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(1* 5)\n+(1* 5)\n+(2* 4) )/12\nNota: 4,25\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75\nANA INES DE JESUS VIEIRA: ((1* 4)\n+(3* 3)\n+(2* 4)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 2) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0049",
    "slug": "rel-op-0258"
  },
  {
    "id": "rel_op_0259",
    "propostaNome": "RedCheck(1747747339966x581554505157705700)",
    "notaFinal": 2.27,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 4)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,83\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,42\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 2,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0259"
  },
  {
    "id": "rel_op_0260",
    "propostaNome": "GO BEE APIS(1750433496862x349578267965521900)",
    "notaFinal": 4.32,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,50\nHomero Cavalcanti: ((2* 4)\n+(1* 4)\n+(2* 5)\n+(1* 4)\n+(1* 3)\n+(2* 4)\n+(3* 5) )/12\nNota: 4,33\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,25\nANA INES DE JESUS VIEIRA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 3)\n+(2* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,08",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0260"
  },
  {
    "id": "rel_op_0261",
    "propostaNome": "ROBO LAURA(1747241501575x516406866711674900)",
    "notaFinal": 2.63,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 3)\n+(1* 5) )/12\nNota: 4,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nHomero Cavalcanti: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,42\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,58\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(1* 1)\n+(2* 1)\n+(3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1) )/12\nNota: 1,25",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0261"
  },
  {
    "id": "rel_op_0262",
    "propostaNome": "Clinitech Tecnologia em Saúde LTDA.(1750437798539x879582976976093200)",
    "notaFinal": 3.65,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nHomero Cavalcanti: ((2* 4)\n+(1* 3)\n+(3* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,92\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,50\nANA INES DE JESUS VIEIRA: ((2* 5)\n+(3* 4)\n+(2* 2)\n+(1* 1)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0262"
  },
  {
    "id": "rel_op_0263",
    "propostaNome": "Saúde com I.A(1747250100162x590354311999127600)",
    "notaFinal": 3.88,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 3)\n+(3* 5)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,08\nHomero Cavalcanti: ((3* 5)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,58\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 3) )/12\nNota: 4,42\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(3* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0263"
  },
  {
    "id": "rel_op_0264",
    "propostaNome": "ConectaVital(1747140161151x752513062168166400)",
    "notaFinal": 2.72,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,83\nMoisés Leal: ((1* 3)\n+(2* 3)\n+(2* 3)\n+(3* 3)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,08\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1)\n+(2* 1)\n+(3* 3)\n+(2* 3) )/12\nNota: 1,83",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0065",
    "slug": "rel-op-0264"
  },
  {
    "id": "rel_op_0265",
    "propostaNome": "dolfidoc(1746974279211x999840447551504400)",
    "notaFinal": 1.73,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 3)\n+(3* 1)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,75\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 3)\n+(1* 1)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 2) )/12\nNota: 2,75\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0265"
  },
  {
    "id": "rel_op_0266",
    "propostaNome": "CFIT(1750430947736x758923719412285400)",
    "notaFinal": 3.92,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nHomero Cavalcanti: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,25\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,25\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0266"
  },
  {
    "id": "rel_op_0267",
    "propostaNome": "Clinitech(1747276858851x787162643421200400)",
    "notaFinal": 1.82,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 1) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0267"
  },
  {
    "id": "rel_op_0268",
    "propostaNome": "KTecS(1750457846826x615898407090257900)",
    "notaFinal": 4.05,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,50\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((2* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(1* 5)\n+(1* 3)\n+(3* 5) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0268"
  },
  {
    "id": "rel_op_0269",
    "propostaNome": "REbate(1747183088043x258719990149808130)",
    "notaFinal": 3.63,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 5) )/12\nNota: 4,17\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,83",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0071",
    "slug": "rel-op-0269"
  },
  {
    "id": "rel_op_0270",
    "propostaNome": "SUSIA(1747235530911x729365137673420800)",
    "notaFinal": 4.38,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,92\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,67\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((3* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(1* 3)\n+(2* 4) )/12\nNota: 4,50",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0067",
    "slug": "rel-op-0270"
  },
  {
    "id": "rel_op_0271",
    "propostaNome": "Tia Bete(1746734309886x839844561318576100)",
    "notaFinal": 3.3,
    "criteriosENota": "RODRIGO BEZERRA: ((2* 4)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 2) )/12\nNota: 3,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(3* 3)\n+(1* 4) )/12\nNota: 4,00\nHomero Cavalcanti: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,83\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92\nANA INES DE JESUS VIEIRA: ((2* 3)\n+(2* 5)\n+(1* 2)\n+(2* 2)\n+(3* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,67",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0271"
  },
  {
    "id": "rel_op_0272",
    "propostaNome": "Mosca Branca deeptech(1746965925773x167408289790820350)",
    "notaFinal": 4.1,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,25\nHomero Cavalcanti: ((3* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,92\nANA INES DE JESUS VIEIRA: ((2* 4)\n+(1* 5)\n+(2* 4)\n+(1* 2)\n+(2* 5)\n+(1* 3)\n+(3* 4) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0272"
  },
  {
    "id": "rel_op_0273",
    "propostaNome": "ALKE(1746492433853x232626703095037950)",
    "notaFinal": 1.47,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,67\nHomero Cavalcanti: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,50\nMoisés Leal: ((3* 2)\n+(2* 1)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,50\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0273"
  },
  {
    "id": "rel_op_0274",
    "propostaNome": "Cogfy(1746491460701x929709310693867500)",
    "notaFinal": 4.37,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5)\n+(3* 4)\n+(2* 4) )/12\nNota: 4,58\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4)\n+(2* 4)\n+(1* 4) )/12\nNota: 4,50\nANA INES DE JESUS VIEIRA: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 3) )/12\nNota: 3,83",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0274"
  },
  {
    "id": "rel_op_0275",
    "propostaNome": "NAV + SAÚDE(1746922651654x574889112310644740)",
    "notaFinal": 3.13,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 5) )/12\nNota: 3,75\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,00\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(1* 3) )/12\nNota: 3,67\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,25",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0275"
  },
  {
    "id": "rel_op_0276",
    "propostaNome": "neri(1750382702746x817002404516986900)",
    "notaFinal": 3.38,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,33\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,42\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,00\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(2* 2)\n+(1* 2)\n+(3* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,83",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0276"
  },
  {
    "id": "rel_op_0277",
    "propostaNome": "Cesinhas(1750360813598x604209465657393200)",
    "notaFinal": 3.13,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 3,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,17\nHomero Cavalcanti: ((3* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,33\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,17\nANA INES DE JESUS VIEIRA: ((2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(3* 2)\n+(1* 2) )/12\nNota: 1,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0277"
  },
  {
    "id": "rel_op_0278",
    "propostaNome": "Liu(1747794171431x940488044287098900)",
    "notaFinal": 3.88,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,67\nHomero Cavalcanti: ((3* 4)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(1* 5)\n+(1* 5)\n+(2* 4) )/12\nNota: 4,25\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75\nANA INES DE JESUS VIEIRA: ((1* 4)\n+(3* 3)\n+(2* 4)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 2) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0049",
    "slug": "rel-op-0278"
  },
  {
    "id": "rel_op_0279",
    "propostaNome": "Dayse Maria de Souza Oliveira, Amanda Felix da Silva, Antônia Felix Lessa(1750428483714x110287244945522690)",
    "notaFinal": 2.58,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,33\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,92\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,75\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 1,92",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0279"
  },
  {
    "id": "rel_op_0280",
    "propostaNome": "MEDIBOX(1747154336818x743371960980340700)",
    "notaFinal": 1.98,
    "criteriosENota": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 1)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,92\nHomero Cavalcanti: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 4)\n+(1* 3) )/12\nNota: 2,25\nMoisés Leal: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,58\nRODRIGO BEZERRA: ((3* 2)\n+(1* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2) )/12\nNota: 2,17\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0073",
    "slug": "rel-op-0280"
  },
  {
    "id": "rel_op_0281",
    "propostaNome": "RedCheck(1747747339966x581554505157705700)",
    "notaFinal": 2.27,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 4)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,83\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,42\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 2,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0281"
  },
  {
    "id": "rel_op_0282",
    "propostaNome": "Clinitech(1747276858851x787162643421200400)",
    "notaFinal": 1.82,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 1) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0282"
  },
  {
    "id": "rel_op_0283",
    "propostaNome": "CFIT(1750430947736x758923719412285400)",
    "notaFinal": 3.92,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nHomero Cavalcanti: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,25\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,25\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0283"
  },
  {
    "id": "rel_op_0284",
    "propostaNome": "REbate(1747183088043x258719990149808130)",
    "notaFinal": 3.63,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 5) )/12\nNota: 4,17\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,83",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0071",
    "slug": "rel-op-0284"
  },
  {
    "id": "rel_op_0285",
    "propostaNome": "LUDI INOVA SIMPLES IS(1744314060151x235712984620990460)",
    "notaFinal": 1.18,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,42\nHomero Cavalcanti: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,50\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0285"
  },
  {
    "id": "rel_op_0286",
    "propostaNome": "ConectaVital(1747140161151x752513062168166400)",
    "notaFinal": 2.72,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,83\nMoisés Leal: ((1* 3)\n+(2* 3)\n+(2* 3)\n+(3* 3)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,08\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1)\n+(2* 1)\n+(3* 3)\n+(2* 3) )/12\nNota: 1,83",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0065",
    "slug": "rel-op-0286"
  },
  {
    "id": "rel_op_0287",
    "propostaNome": "ROBO LAURA(1747241501575x516406866711674900)",
    "notaFinal": 2.63,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 3)\n+(1* 5) )/12\nNota: 4,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nHomero Cavalcanti: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,42\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,58\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(1* 1)\n+(2* 1)\n+(3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1) )/12\nNota: 1,25",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0287"
  },
  {
    "id": "rel_op_0288",
    "propostaNome": "Mosca Branca deeptech(1746965925773x167408289790820350)",
    "notaFinal": 4.1,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,25\nHomero Cavalcanti: ((3* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,92\nANA INES DE JESUS VIEIRA: ((2* 4)\n+(1* 5)\n+(2* 4)\n+(1* 2)\n+(2* 5)\n+(1* 3)\n+(3* 4) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0288"
  },
  {
    "id": "rel_op_0289",
    "propostaNome": "dolfidoc(1746974279211x999840447551504400)",
    "notaFinal": 1.73,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 3)\n+(3* 1)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,75\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 3)\n+(1* 1)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 2) )/12\nNota: 2,75\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0289"
  },
  {
    "id": "rel_op_0290",
    "propostaNome": "daps(1744411579295x899428874322706400)",
    "notaFinal": 1,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0290"
  },
  {
    "id": "rel_op_0291",
    "propostaNome": "MEDIBOX(1747154336818x743371960980340700)",
    "notaFinal": 1.98,
    "criteriosENota": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 1)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,92\nHomero Cavalcanti: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 4)\n+(1* 3) )/12\nNota: 2,25\nMoisés Leal: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,58\nRODRIGO BEZERRA: ((3* 2)\n+(1* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2) )/12\nNota: 2,17\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0073",
    "slug": "rel-op-0291"
  },
  {
    "id": "rel_op_0292",
    "propostaNome": "Saúde com I.A(1747250100162x590354311999127600)",
    "notaFinal": 3.88,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 3)\n+(3* 5)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,08\nHomero Cavalcanti: ((3* 5)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,58\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 3) )/12\nNota: 4,42\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(3* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0292"
  },
  {
    "id": "rel_op_0293",
    "propostaNome": "HRV4life(1743950956269x224493368474337280)",
    "notaFinal": 3.03,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(2* 3)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,75\nHomero Cavalcanti: ((3* 3)\n+(2* 2)\n+(1* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3)\n+(2* 4) )/12\nNota: 3,33\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(1* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4)\n+(2* 3)\n+(2* 2) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(3* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0103",
    "slug": "rel-op-0293"
  },
  {
    "id": "rel_op_0294",
    "propostaNome": "KTecS(1750457846826x615898407090257900)",
    "notaFinal": 4.05,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,50\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((2* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(1* 5)\n+(1* 3)\n+(3* 5) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0294"
  },
  {
    "id": "rel_op_0295",
    "propostaNome": "Ponte Saúde(1750460642268x111056270580514820)",
    "notaFinal": 2.75,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,33\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,92\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(3* 2) )/12\nNota: 1,50",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0295"
  },
  {
    "id": "rel_op_0296",
    "propostaNome": "SUSIA(1747235530911x729365137673420800)",
    "notaFinal": 4.38,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,92\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,67\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((3* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(1* 3)\n+(2* 4) )/12\nNota: 4,50",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0067",
    "slug": "rel-op-0296"
  },
  {
    "id": "rel_op_0297",
    "propostaNome": "Cuida+ Saúde(1750458720850x474968371098288100)",
    "notaFinal": 3.5,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 4) )/12\nNota: 4,00\nHomero Cavalcanti: ((2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3)\n+(3* 3) )/12\nNota: 3,75\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,33\nANA INES DE JESUS VIEIRA: ((2* 3)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(3* 3)\n+(1* 3) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0297"
  },
  {
    "id": "rel_op_0298",
    "propostaNome": "Kali(1750449027146x792217332883652600)",
    "notaFinal": 2.95,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nHomero Cavalcanti: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,83\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 4)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,58\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,58",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0027",
    "slug": "rel-op-0298"
  },
  {
    "id": "rel_op_0299",
    "propostaNome": "Metasolution(1750474393435x693673183255986200)",
    "notaFinal": 3.52,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 4)\n+(1* 2) )/12\nNota: 2,17\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,08",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0299"
  },
  {
    "id": "rel_op_0300",
    "propostaNome": "UPSAÚDE (1750471215836x861794257257103400)",
    "notaFinal": 2.85,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 1)\n+(1* 2) )/12\nNota: 2,67\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,50\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 4) )/12\nNota: 3,08\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,92\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0300"
  },
  {
    "id": "rel_op_0301",
    "propostaNome": "Conexão e Cuidado(1750457780030x714257608034222100)",
    "notaFinal": 2.83,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,67\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 1)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,17",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0301"
  },
  {
    "id": "rel_op_0302",
    "propostaNome": "neri(1750382702746x817002404516986900)",
    "notaFinal": 3.38,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,33\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,42\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,00\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(2* 2)\n+(1* 2)\n+(3* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,83",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0302"
  },
  {
    "id": "rel_op_0303",
    "propostaNome": "Clinitech Tecnologia em Saúde LTDA.(1750437798539x879582976976093200)",
    "notaFinal": 3.65,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nHomero Cavalcanti: ((2* 4)\n+(1* 3)\n+(3* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,92\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,50\nANA INES DE JESUS VIEIRA: ((2* 5)\n+(3* 4)\n+(2* 2)\n+(1* 1)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0303"
  },
  {
    "id": "rel_op_0304",
    "propostaNome": "CFIT(1750430947736x758923719412285400)",
    "notaFinal": 3.92,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nHomero Cavalcanti: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,25\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,25\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0304"
  },
  {
    "id": "rel_op_0305",
    "propostaNome": "Dayse Maria de Souza Oliveira, Amanda Felix da Silva, Antônia Felix Lessa(1750428483714x110287244945522690)",
    "notaFinal": 2.58,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,33\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,92\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,75\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 1,92",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0305"
  },
  {
    "id": "rel_op_0306",
    "propostaNome": "Wladimilson Bernardino Nascimento(1750474698961x745850263332978700)",
    "notaFinal": 3.15,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,42\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,08\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(3* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,92\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0306"
  },
  {
    "id": "rel_op_0307",
    "propostaNome": "Lemobs(1750441883750x976151120499966000)",
    "notaFinal": 4.28,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,33\nHomero Cavalcanti: ((3* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,42\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nANA INES DE JESUS VIEIRA: ((2* 5)\n+(1* 2)\n+(3* 5)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0307"
  },
  {
    "id": "rel_op_0308",
    "propostaNome": "Projeto Saus(1750442890016x722503316385824800)",
    "notaFinal": 2.83,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,33\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,08\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,33\nANA INES DE JESUS VIEIRA: ((1* 3)\n+(3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 2) )/12\nNota: 2,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0308"
  },
  {
    "id": "rel_op_0309",
    "propostaNome": "Liu(1747794171431x940488044287098900)",
    "notaFinal": 3.88,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,67\nHomero Cavalcanti: ((3* 4)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(1* 5)\n+(1* 5)\n+(2* 4) )/12\nNota: 4,25\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75\nANA INES DE JESUS VIEIRA: ((1* 4)\n+(3* 3)\n+(2* 4)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 2) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0049",
    "slug": "rel-op-0309"
  },
  {
    "id": "rel_op_0310",
    "propostaNome": "RedCheck(1747747339966x581554505157705700)",
    "notaFinal": 2.27,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 4)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,83\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,42\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 2,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0310"
  },
  {
    "id": "rel_op_0311",
    "propostaNome": "Cesinhas(1750360813598x604209465657393200)",
    "notaFinal": 3.13,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 3,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,17\nHomero Cavalcanti: ((3* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,33\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,17\nANA INES DE JESUS VIEIRA: ((2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(3* 2)\n+(1* 2) )/12\nNota: 1,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0311"
  },
  {
    "id": "rel_op_0312",
    "propostaNome": "Clinitech(1747276858851x787162643421200400)",
    "notaFinal": 1.82,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 1) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0312"
  },
  {
    "id": "rel_op_0313",
    "propostaNome": "ROBO LAURA(1747241501575x516406866711674900)",
    "notaFinal": 2.63,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 3)\n+(1* 5) )/12\nNota: 4,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nHomero Cavalcanti: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,42\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,58\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(1* 1)\n+(2* 1)\n+(3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1) )/12\nNota: 1,25",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0313"
  },
  {
    "id": "rel_op_0314",
    "propostaNome": "Saúde com I.A(1747250100162x590354311999127600)",
    "notaFinal": 3.88,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 3)\n+(3* 5)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,08\nHomero Cavalcanti: ((3* 5)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,58\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 3) )/12\nNota: 4,42\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(3* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0314"
  },
  {
    "id": "rel_op_0315",
    "propostaNome": "NAV + SAÚDE(1746922651654x574889112310644740)",
    "notaFinal": 3.13,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 5) )/12\nNota: 3,75\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,00\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(1* 3) )/12\nNota: 3,67\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,25",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0315"
  },
  {
    "id": "rel_op_0316",
    "propostaNome": "SUSIA(1747235530911x729365137673420800)",
    "notaFinal": 4.38,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,92\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,67\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((3* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(1* 3)\n+(2* 4) )/12\nNota: 4,50",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0067",
    "slug": "rel-op-0316"
  },
  {
    "id": "rel_op_0317",
    "propostaNome": "REbate(1747183088043x258719990149808130)",
    "notaFinal": 3.63,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 5) )/12\nNota: 4,17\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,83",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0071",
    "slug": "rel-op-0317"
  },
  {
    "id": "rel_op_0318",
    "propostaNome": "GO BEE APIS(1750433496862x349578267965521900)",
    "notaFinal": 4.32,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,50\nHomero Cavalcanti: ((2* 4)\n+(1* 4)\n+(2* 5)\n+(1* 4)\n+(1* 3)\n+(2* 4)\n+(3* 5) )/12\nNota: 4,33\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,25\nANA INES DE JESUS VIEIRA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 3)\n+(2* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,08",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0318"
  },
  {
    "id": "rel_op_0319",
    "propostaNome": "daps(1744411579295x899428874322706400)",
    "notaFinal": 1,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0319"
  },
  {
    "id": "rel_op_0320",
    "propostaNome": "ConectaVital(1747140161151x752513062168166400)",
    "notaFinal": 2.72,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,83\nMoisés Leal: ((1* 3)\n+(2* 3)\n+(2* 3)\n+(3* 3)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,08\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1)\n+(2* 1)\n+(3* 3)\n+(2* 3) )/12\nNota: 1,83",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0065",
    "slug": "rel-op-0320"
  },
  {
    "id": "rel_op_0321",
    "propostaNome": "ALKE(1746492433853x232626703095037950)",
    "notaFinal": 1.47,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,67\nHomero Cavalcanti: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,50\nMoisés Leal: ((3* 2)\n+(2* 1)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,50\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0321"
  },
  {
    "id": "rel_op_0322",
    "propostaNome": "dolfidoc(1746974279211x999840447551504400)",
    "notaFinal": 1.73,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 3)\n+(3* 1)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,75\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 3)\n+(1* 1)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 2) )/12\nNota: 2,75\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0322"
  },
  {
    "id": "rel_op_0323",
    "propostaNome": "ALKE(1746492433853x232626703095037950)",
    "notaFinal": 1.47,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,67\nHomero Cavalcanti: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,50\nMoisés Leal: ((3* 2)\n+(2* 1)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,50\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0323"
  },
  {
    "id": "rel_op_0324",
    "propostaNome": "Cogfy(1746491460701x929709310693867500)",
    "notaFinal": 4.37,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5)\n+(3* 4)\n+(2* 4) )/12\nNota: 4,58\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4)\n+(2* 4)\n+(1* 4) )/12\nNota: 4,50\nANA INES DE JESUS VIEIRA: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 3) )/12\nNota: 3,83",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0324"
  },
  {
    "id": "rel_op_0325",
    "propostaNome": "MEDIBOX(1747154336818x743371960980340700)",
    "notaFinal": 1.98,
    "criteriosENota": "GUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 1)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,92\nHomero Cavalcanti: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 4)\n+(1* 3) )/12\nNota: 2,25\nMoisés Leal: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,58\nRODRIGO BEZERRA: ((3* 2)\n+(1* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2) )/12\nNota: 2,17\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0073",
    "slug": "rel-op-0325"
  },
  {
    "id": "rel_op_0326",
    "propostaNome": "daps(1744411579295x899428874322706400)",
    "notaFinal": 1,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0326"
  },
  {
    "id": "rel_op_0327",
    "propostaNome": "NAV + SAÚDE(1746922651654x574889112310644740)",
    "notaFinal": 3.13,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 5) )/12\nNota: 3,75\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,00\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(1* 3) )/12\nNota: 3,67\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,25",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0327"
  },
  {
    "id": "rel_op_0328",
    "propostaNome": "HRV4life(1743950956269x224493368474337280)",
    "notaFinal": 3.03,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(2* 3)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,75\nHomero Cavalcanti: ((3* 3)\n+(2* 2)\n+(1* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3)\n+(2* 4) )/12\nNota: 3,33\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(1* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4)\n+(2* 3)\n+(2* 2) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(3* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0103",
    "slug": "rel-op-0328"
  },
  {
    "id": "rel_op_0329",
    "propostaNome": "Mosca Branca deeptech(1746965925773x167408289790820350)",
    "notaFinal": 4.1,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,25\nHomero Cavalcanti: ((3* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,92\nANA INES DE JESUS VIEIRA: ((2* 4)\n+(1* 5)\n+(2* 4)\n+(1* 2)\n+(2* 5)\n+(1* 3)\n+(3* 4) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0329"
  },
  {
    "id": "rel_op_0330",
    "propostaNome": "LUDI INOVA SIMPLES IS(1744314060151x235712984620990460)",
    "notaFinal": 1.18,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,42\nHomero Cavalcanti: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,50\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0330"
  },
  {
    "id": "rel_op_0331",
    "propostaNome": "HRV4life(1743950956269x224493368474337280)",
    "notaFinal": 3.03,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(2* 3)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,75\nHomero Cavalcanti: ((3* 3)\n+(2* 2)\n+(1* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3)\n+(2* 4) )/12\nNota: 3,33\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(1* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4)\n+(2* 3)\n+(2* 2) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(3* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0103",
    "slug": "rel-op-0331"
  },
  {
    "id": "rel_op_0332",
    "propostaNome": "Tia Bete(1746734309886x839844561318576100)",
    "notaFinal": 3.3,
    "criteriosENota": "RODRIGO BEZERRA: ((2* 4)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 2) )/12\nNota: 3,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(3* 3)\n+(1* 4) )/12\nNota: 4,00\nHomero Cavalcanti: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,83\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92\nANA INES DE JESUS VIEIRA: ((2* 3)\n+(2* 5)\n+(1* 2)\n+(2* 2)\n+(3* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,67",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0332"
  },
  {
    "id": "rel_op_0333",
    "propostaNome": "LUDI INOVA SIMPLES IS(1744314060151x235712984620990460)",
    "notaFinal": 1.18,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,42\nHomero Cavalcanti: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,50\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0333"
  },
  {
    "id": "rel_op_0334",
    "propostaNome": "daps(1744411579295x899428874322706400)",
    "notaFinal": 1,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0334"
  },
  {
    "id": "rel_op_0335",
    "propostaNome": "Ponte Saúde(1750460642268x111056270580514820)",
    "notaFinal": 2.75,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,33\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,92\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(3* 2) )/12\nNota: 1,50",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0335"
  },
  {
    "id": "rel_op_0336",
    "propostaNome": "Manguehub(1750468570847x616203165245898800)",
    "notaFinal": 3.35,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,08\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 4)\n+(1* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 5)\n+(2* 4) )/12\nNota: 4,17\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 3,17\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,42",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0336"
  },
  {
    "id": "rel_op_0337",
    "propostaNome": "Saúde Cinco(1742585972084x533940837542264800)",
    "notaFinal": 3.45,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((1* 3)\n+(2* 2)\n+(2* 3)\n+(3* 4)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,83\nHomero Cavalcanti: ((3* 4)\n+(2* 2)\n+(1* 4)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 2) )/12\nNota: 3,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(2* 3) )/12\nNota: 3,42\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0112",
    "slug": "rel-op-0337"
  },
  {
    "id": "rel_op_0338",
    "propostaNome": "KTecS(1750457846826x615898407090257900)",
    "notaFinal": 4.05,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,50\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((2* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(1* 5)\n+(1* 3)\n+(3* 5) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0338"
  },
  {
    "id": "rel_op_0339",
    "propostaNome": "Cuida+ Saúde(1750458720850x474968371098288100)",
    "notaFinal": 3.5,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 4) )/12\nNota: 4,00\nHomero Cavalcanti: ((2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3)\n+(3* 3) )/12\nNota: 3,75\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,33\nANA INES DE JESUS VIEIRA: ((2* 3)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(3* 3)\n+(1* 3) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0339"
  },
  {
    "id": "rel_op_0340",
    "propostaNome": "Kali(1750449027146x792217332883652600)",
    "notaFinal": 2.95,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nHomero Cavalcanti: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,83\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 4)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,58\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,58",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0027",
    "slug": "rel-op-0340"
  },
  {
    "id": "rel_op_0341",
    "propostaNome": "Conexão e Cuidado(1750457780030x714257608034222100)",
    "notaFinal": 2.83,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 4)\n+(2* 1)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,67\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 1)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,17",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0341"
  },
  {
    "id": "rel_op_0342",
    "propostaNome": "Projeto Saus(1750442890016x722503316385824800)",
    "notaFinal": 2.83,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,33\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,08\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,33\nANA INES DE JESUS VIEIRA: ((1* 3)\n+(3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 2) )/12\nNota: 2,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0342"
  },
  {
    "id": "rel_op_0343",
    "propostaNome": "LUDI INOVA SIMPLES IS(1744314060151x235712984620990460)",
    "notaFinal": 1.18,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,42\nHomero Cavalcanti: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,50\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0343"
  },
  {
    "id": "rel_op_0344",
    "propostaNome": "GO BEE APIS(1750433496862x349578267965521900)",
    "notaFinal": 4.32,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,50\nHomero Cavalcanti: ((2* 4)\n+(1* 4)\n+(2* 5)\n+(1* 4)\n+(1* 3)\n+(2* 4)\n+(3* 5) )/12\nNota: 4,33\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,25\nANA INES DE JESUS VIEIRA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 3)\n+(2* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,08",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0344"
  },
  {
    "id": "rel_op_0345",
    "propostaNome": "Clinitech Tecnologia em Saúde LTDA.(1750437798539x879582976976093200)",
    "notaFinal": 3.65,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nHomero Cavalcanti: ((2* 4)\n+(1* 3)\n+(3* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,92\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,50\nANA INES DE JESUS VIEIRA: ((2* 5)\n+(3* 4)\n+(2* 2)\n+(1* 1)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0345"
  },
  {
    "id": "rel_op_0346",
    "propostaNome": "neri(1750382702746x817002404516986900)",
    "notaFinal": 3.38,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,33\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,42\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,00\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(2* 2)\n+(1* 2)\n+(3* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,83",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0346"
  },
  {
    "id": "rel_op_0347",
    "propostaNome": "Lemobs(1750441883750x976151120499966000)",
    "notaFinal": 4.28,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,33\nHomero Cavalcanti: ((3* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,42\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nANA INES DE JESUS VIEIRA: ((2* 5)\n+(1* 2)\n+(3* 5)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0347"
  },
  {
    "id": "rel_op_0348",
    "propostaNome": "Dayse Maria de Souza Oliveira, Amanda Felix da Silva, Antônia Felix Lessa(1750428483714x110287244945522690)",
    "notaFinal": 2.58,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,33\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,92\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,75\nANA INES DE JESUS VIEIRA: ((3* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 1,92",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0348"
  },
  {
    "id": "rel_op_0349",
    "propostaNome": "Cesinhas(1750360813598x604209465657393200)",
    "notaFinal": 3.13,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 3,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,17\nHomero Cavalcanti: ((3* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,33\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,17\nANA INES DE JESUS VIEIRA: ((2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(3* 2)\n+(1* 2) )/12\nNota: 1,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0349"
  },
  {
    "id": "rel_op_0350",
    "propostaNome": "Liu(1747794171431x940488044287098900)",
    "notaFinal": 3.88,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,42\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,67\nHomero Cavalcanti: ((3* 4)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(1* 5)\n+(1* 5)\n+(2* 4) )/12\nNota: 4,25\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75\nANA INES DE JESUS VIEIRA: ((1* 4)\n+(3* 3)\n+(2* 4)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 2) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0049",
    "slug": "rel-op-0350"
  },
  {
    "id": "rel_op_0351",
    "propostaNome": "HRV4life(1743950956269x224493368474337280)",
    "notaFinal": 3.03,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(2* 3)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,75\nHomero Cavalcanti: ((3* 3)\n+(2* 2)\n+(1* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3)\n+(2* 4) )/12\nNota: 3,33\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(1* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4)\n+(2* 3)\n+(2* 2) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(3* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0103",
    "slug": "rel-op-0351"
  },
  {
    "id": "rel_op_0352",
    "propostaNome": "Saúde Cinco(1742585972084x533940837542264800)",
    "notaFinal": 3.45,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((1* 3)\n+(2* 2)\n+(2* 3)\n+(3* 4)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,83\nHomero Cavalcanti: ((3* 4)\n+(2* 2)\n+(1* 4)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 2) )/12\nNota: 3,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(2* 3) )/12\nNota: 3,42\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0112",
    "slug": "rel-op-0352"
  },
  {
    "id": "rel_op_0353",
    "propostaNome": "Saúde com I.A(1747250100162x590354311999127600)",
    "notaFinal": 3.88,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 3)\n+(3* 5)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,08\nHomero Cavalcanti: ((3* 5)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,58\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 3) )/12\nNota: 4,42\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(3* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0353"
  },
  {
    "id": "rel_op_0354",
    "propostaNome": "Saúde Cinco(1742585972084x533940837542264800)",
    "notaFinal": 3.45,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((1* 3)\n+(2* 2)\n+(2* 3)\n+(3* 4)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,83\nHomero Cavalcanti: ((3* 4)\n+(2* 2)\n+(1* 4)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 2) )/12\nNota: 3,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(2* 3) )/12\nNota: 3,42\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0112",
    "slug": "rel-op-0354"
  },
  {
    "id": "rel_op_0355",
    "propostaNome": "RedCheck(1747747339966x581554505157705700)",
    "notaFinal": 2.27,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 4)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,83\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,08\nHomero Cavalcanti: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,42\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 2,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0355"
  },
  {
    "id": "rel_op_0356",
    "propostaNome": "ROBO LAURA(1747241501575x516406866711674900)",
    "notaFinal": 2.63,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 3)\n+(1* 5) )/12\nNota: 4,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,83\nHomero Cavalcanti: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,42\nMoisés Leal: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,58\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(1* 1)\n+(2* 1)\n+(3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1) )/12\nNota: 1,25",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0356"
  },
  {
    "id": "rel_op_0357",
    "propostaNome": "Cogfy(1746491460701x929709310693867500)",
    "notaFinal": 4.37,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5)\n+(3* 4)\n+(2* 4) )/12\nNota: 4,58\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4)\n+(2* 4)\n+(1* 4) )/12\nNota: 4,50\nANA INES DE JESUS VIEIRA: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 3) )/12\nNota: 3,83",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0357"
  },
  {
    "id": "rel_op_0358",
    "propostaNome": "Clinitech(1747276858851x787162643421200400)",
    "notaFinal": 1.82,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 1) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0358"
  },
  {
    "id": "rel_op_0359",
    "propostaNome": "Mosca Branca deeptech(1746965925773x167408289790820350)",
    "notaFinal": 4.1,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,25\nHomero Cavalcanti: ((3* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,92\nANA INES DE JESUS VIEIRA: ((2* 4)\n+(1* 5)\n+(2* 4)\n+(1* 2)\n+(2* 5)\n+(1* 3)\n+(3* 4) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0359"
  },
  {
    "id": "rel_op_0360",
    "propostaNome": "ConectaVital(1747140161151x752513062168166400)",
    "notaFinal": 2.72,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,83\nMoisés Leal: ((1* 3)\n+(2* 3)\n+(2* 3)\n+(3* 3)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,08\nANA INES DE JESUS VIEIRA: ((1* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1)\n+(2* 1)\n+(3* 3)\n+(2* 3) )/12\nNota: 1,83",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0065",
    "slug": "rel-op-0360"
  },
  {
    "id": "rel_op_0361",
    "propostaNome": "SUSIA(1747235530911x729365137673420800)",
    "notaFinal": 4.38,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,92\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,67\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((3* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(1* 3)\n+(2* 4) )/12\nNota: 4,50",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0067",
    "slug": "rel-op-0361"
  },
  {
    "id": "rel_op_0362",
    "propostaNome": "Proposta Geral",
    "notaFinal": null,
    "criteriosENota": ": ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 1)\n+(1* 5) )/12\nNota: 3,83",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0362"
  },
  {
    "id": "rel_op_0363",
    "propostaNome": "REbate(1747183088043x258719990149808130)",
    "notaFinal": 3.63,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nHomero Cavalcanti: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 5) )/12\nNota: 4,17\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,83",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0071",
    "slug": "rel-op-0363"
  },
  {
    "id": "rel_op_0364",
    "propostaNome": "NAV + SAÚDE(1746922651654x574889112310644740)",
    "notaFinal": 3.13,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 5) )/12\nNota: 3,75\nHomero Cavalcanti: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,00\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(1* 3) )/12\nNota: 3,67\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,25",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0364"
  },
  {
    "id": "rel_op_0365",
    "propostaNome": "daps(1744411579295x899428874322706400)",
    "notaFinal": 1,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0365"
  },
  {
    "id": "rel_op_0366",
    "propostaNome": "Cogfy(1746491460701x929709310693867500)",
    "notaFinal": 4.37,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nHomero Cavalcanti: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5)\n+(3* 4)\n+(2* 4) )/12\nNota: 4,58\nMoisés Leal: ((3* 5)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4)\n+(2* 4)\n+(1* 4) )/12\nNota: 4,50\nANA INES DE JESUS VIEIRA: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 3) )/12\nNota: 3,83",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0366"
  },
  {
    "id": "rel_op_0367",
    "propostaNome": "HRV4life(1743950956269x224493368474337280)",
    "notaFinal": 3.03,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(2* 3)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,75\nHomero Cavalcanti: ((3* 3)\n+(2* 2)\n+(1* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3)\n+(2* 4) )/12\nNota: 3,33\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(1* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4)\n+(2* 3)\n+(2* 2) )/12\nNota: 3,00\nANA INES DE JESUS VIEIRA: ((2* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(3* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0103",
    "slug": "rel-op-0367"
  },
  {
    "id": "rel_op_0368",
    "propostaNome": "Saúde Cinco(1742585972084x533940837542264800)",
    "notaFinal": 3.45,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((1* 3)\n+(2* 2)\n+(2* 3)\n+(3* 4)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,83\nHomero Cavalcanti: ((3* 4)\n+(2* 2)\n+(1* 4)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 2) )/12\nNota: 3,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(2* 3) )/12\nNota: 3,42\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0112",
    "slug": "rel-op-0368"
  },
  {
    "id": "rel_op_0369",
    "propostaNome": "Tia Bete(1746734309886x839844561318576100)",
    "notaFinal": 3.3,
    "criteriosENota": "RODRIGO BEZERRA: ((2* 4)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 2) )/12\nNota: 3,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(3* 3)\n+(1* 4) )/12\nNota: 4,00\nHomero Cavalcanti: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,83\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92\nANA INES DE JESUS VIEIRA: ((2* 3)\n+(2* 5)\n+(1* 2)\n+(2* 2)\n+(3* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,67",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0369"
  },
  {
    "id": "rel_op_0370",
    "propostaNome": "Tia Bete(1746734309886x839844561318576100)",
    "notaFinal": 3.3,
    "criteriosENota": "RODRIGO BEZERRA: ((2* 4)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 2) )/12\nNota: 3,08\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(3* 3)\n+(1* 4) )/12\nNota: 4,00\nHomero Cavalcanti: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,83\nMoisés Leal: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92\nANA INES DE JESUS VIEIRA: ((2* 3)\n+(2* 5)\n+(1* 2)\n+(2* 2)\n+(3* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,67",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0370"
  },
  {
    "id": "rel_op_0371",
    "propostaNome": "ALKE(1746492433853x232626703095037950)",
    "notaFinal": 1.47,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,67\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,67\nHomero Cavalcanti: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,50\nMoisés Leal: ((3* 2)\n+(2* 1)\n+(1* 2)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,50\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0371"
  },
  {
    "id": "rel_op_0372",
    "propostaNome": "LUDI INOVA SIMPLES IS(1744314060151x235712984620990460)",
    "notaFinal": 1.18,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 4) )/12\nNota: 1,42\nHomero Cavalcanti: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,50\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0372"
  },
  {
    "id": "rel_op_0373",
    "propostaNome": "dolfidoc(1746974279211x999840447551504400)",
    "notaFinal": 1.73,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((2* 3)\n+(3* 1)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,75\nHomero Cavalcanti: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nMoisés Leal: ((3* 3)\n+(1* 1)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 2) )/12\nNota: 2,75\nANA INES DE JESUS VIEIRA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0373"
  },
  {
    "id": "rel_op_0374",
    "propostaNome": "CFIT(1750430947736x758923719412285400)",
    "notaFinal": 3.92,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,92\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,17\nHomero Cavalcanti: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,25\nMoisés Leal: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,25\nANA INES DE JESUS VIEIRA: ((3* 3)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": null,
    "slug": "rel-op-0374"
  },
  {
    "id": "rel_op_0375",
    "propostaNome": "Saúde Cinco(1742585972084x533940837542264800)",
    "notaFinal": 3.45,
    "criteriosENota": "RODRIGO BEZERRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,58\nANA INES DE JESUS VIEIRA: ((1* 3)\n+(2* 2)\n+(2* 3)\n+(3* 4)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,83\nHomero Cavalcanti: ((3* 4)\n+(2* 2)\n+(1* 4)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 2) )/12\nNota: 3,17\nGUSTAVO SÉRGIO DE GODOY MAGALHÃES: ((3* 3)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(2* 3) )/12\nNota: 3,42\nMoisés Leal: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25",
    "createdDate": "2025-07-10 09:06:00",
    "submissionId": "rel_prop_0112",
    "slug": "rel-op-0375"
  },
  {
    "id": "rel_op_0376",
    "propostaNome": "Associação Luminus(1747312681308x105417894606929920)",
    "notaFinal": 4.05,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,75\nJOAO HENRIQUE DE LIMA LOBO: ((3* 5)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,75\nLAURA CALDAS MIGUEL: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,33\nCESAR ARAUJO EVANGELISTA: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 3) )/12\nNota: 3,83\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,58",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": "rel_prop_0053",
    "slug": "rel-op-0376"
  },
  {
    "id": "rel_op_0377",
    "propostaNome": "REVIRA(1750384916592x151474736440279040)",
    "notaFinal": 3.43,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,75\nJOAO HENRIQUE DE LIMA LOBO: ((3* 5)\n+(2* 2)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,42\nLAURA CALDAS MIGUEL: ((1* 4)\n+(1* 5)\n+(2* 4)\n+(2* 3)\n+(3* 4)\n+(2* 3)\n+(1* 3) )/12\nNota: 3,67\nCESAR ARAUJO EVANGELISTA: ((3* 5)\n+(2* 1)\n+(1* 1)\n+(2* 3)\n+(2* 1)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,58\nEDER LIRA DE SOUZA LEAO: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0377"
  },
  {
    "id": "rel_op_0378",
    "propostaNome": "Associação Luminus(1747312681308x105417894606929920)",
    "notaFinal": 4.05,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,75\nJOAO HENRIQUE DE LIMA LOBO: ((3* 5)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,75\nLAURA CALDAS MIGUEL: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,33\nCESAR ARAUJO EVANGELISTA: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 3) )/12\nNota: 3,83\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,58",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": "rel_prop_0053",
    "slug": "rel-op-0378"
  },
  {
    "id": "rel_op_0379",
    "propostaNome": "REVIRA(1750384916592x151474736440279040)",
    "notaFinal": 3.43,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,75\nJOAO HENRIQUE DE LIMA LOBO: ((3* 5)\n+(2* 2)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,42\nLAURA CALDAS MIGUEL: ((1* 4)\n+(1* 5)\n+(2* 4)\n+(2* 3)\n+(3* 4)\n+(2* 3)\n+(1* 3) )/12\nNota: 3,67\nCESAR ARAUJO EVANGELISTA: ((3* 5)\n+(2* 1)\n+(1* 1)\n+(2* 3)\n+(2* 1)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,58\nEDER LIRA DE SOUZA LEAO: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0379"
  },
  {
    "id": "rel_op_0380",
    "propostaNome": "BDI Cooptec(1747270956929x223852702211768300)",
    "notaFinal": 3.45,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(1* 2)\n+(2* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 3,83\nJOAO HENRIQUE DE LIMA LOBO: ((3* 4)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 5)\n+(1* 2) )/12\nNota: 3,33\nLAURA CALDAS MIGUEL: ((3* 2)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 1,75\nCESAR ARAUJO EVANGELISTA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,50\nEDER LIRA DE SOUZA LEAO: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,83",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0380"
  },
  {
    "id": "rel_op_0381",
    "propostaNome": "Rafaela de Abreu Archangelo(1747251651001x309203201899102200)",
    "notaFinal": 3.47,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,25\nJOAO HENRIQUE DE LIMA LOBO: ((3* 1)\n+(2* 2)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,33\nLAURA CALDAS MIGUEL: ((3* 2)\n+(2* 2)\n+(1* 1)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 1) )/12\nNota: 2,00\nCESAR ARAUJO EVANGELISTA: ((3* 5)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,83\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 5) )/12\nNota: 4,92",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0381"
  },
  {
    "id": "rel_op_0382",
    "propostaNome": "Rafaela de Abreu Archangelo(1747251651001x309203201899102200)",
    "notaFinal": 3.47,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,25\nJOAO HENRIQUE DE LIMA LOBO: ((3* 1)\n+(2* 2)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,33\nLAURA CALDAS MIGUEL: ((3* 2)\n+(2* 2)\n+(1* 1)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 1) )/12\nNota: 2,00\nCESAR ARAUJO EVANGELISTA: ((3* 5)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,83\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 5) )/12\nNota: 4,92",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0382"
  },
  {
    "id": "rel_op_0383",
    "propostaNome": "EVA Agricultura Urbana(1747194250308x563060757529624600)",
    "notaFinal": 3.82,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,00\nJOAO HENRIQUE DE LIMA LOBO: ((3* 1)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,33\nLAURA CALDAS MIGUEL: ((1* 4)\n+(3* 3)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(2* 3) )/12\nNota: 4,00\nEDER LIRA DE SOUZA LEAO: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,17\nCESAR ARAUJO EVANGELISTA: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0383"
  },
  {
    "id": "rel_op_0384",
    "propostaNome": "Ekonavi(1747085309395x688064878954676200)",
    "notaFinal": 3.97,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,50\nJOAO HENRIQUE DE LIMA LOBO: ((3* 5)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,75\nLAURA CALDAS MIGUEL: ((2* 2)\n+(3* 4)\n+(1* 2)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(1* 2) )/12\nNota: 2,92\nEDER LIRA DE SOUZA LEAO: ((3* 4)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,25\nCESAR ARAUJO EVANGELISTA: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": "rel_prop_0076",
    "slug": "rel-op-0384"
  },
  {
    "id": "rel_op_0385",
    "propostaNome": "SaveAdd(1746916850978x482881701165137900)",
    "notaFinal": 4,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 1)\n+(1* 3) )/12\nNota: 2,17\nJOAO HENRIQUE DE LIMA LOBO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nLAURA CALDAS MIGUEL: ((3* 3)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(2* 2)\n+(1* 3) )/12\nNota: 3,42\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nCESAR ARAUJO EVANGELISTA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": "rel_prop_0083",
    "slug": "rel-op-0385"
  },
  {
    "id": "rel_op_0386",
    "propostaNome": "BDI Cooptec(1747270956929x223852702211768300)",
    "notaFinal": 3.45,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(1* 2)\n+(2* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 3,83\nJOAO HENRIQUE DE LIMA LOBO: ((3* 4)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 5)\n+(1* 2) )/12\nNota: 3,33\nLAURA CALDAS MIGUEL: ((3* 2)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 1,75\nCESAR ARAUJO EVANGELISTA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,50\nEDER LIRA DE SOUZA LEAO: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,83",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0386"
  },
  {
    "id": "rel_op_0387",
    "propostaNome": "CincoduQuatro(1747263600491x625636412432056300)",
    "notaFinal": 3.7,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 4)\n+(2* 4)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,50\nJOAO HENRIQUE DE LIMA LOBO: ((3* 5)\n+(2* 2)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,00\nLAURA CALDAS MIGUEL: ((2* 3)\n+(1* 2)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 2)\n+(3* 3) )/12\nNota: 3,33\nCESAR ARAUJO EVANGELISTA: ((1* 3)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 5)\n+(3* 5)\n+(2* 2) )/12\nNota: 4,08\nEDER LIRA DE SOUZA LEAO: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,58",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0387"
  },
  {
    "id": "rel_op_0388",
    "propostaNome": "SaveAdd(1746916850978x482881701165137900)",
    "notaFinal": 4,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 1)\n+(1* 3) )/12\nNota: 2,17\nJOAO HENRIQUE DE LIMA LOBO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nLAURA CALDAS MIGUEL: ((3* 3)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(2* 2)\n+(1* 3) )/12\nNota: 3,42\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nCESAR ARAUJO EVANGELISTA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": "rel_prop_0083",
    "slug": "rel-op-0388"
  },
  {
    "id": "rel_op_0389",
    "propostaNome": "CincoduQuatro(1747263600491x625636412432056300)",
    "notaFinal": 3.7,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 4)\n+(2* 4)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,50\nJOAO HENRIQUE DE LIMA LOBO: ((3* 5)\n+(2* 2)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,00\nLAURA CALDAS MIGUEL: ((2* 3)\n+(1* 2)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 2)\n+(3* 3) )/12\nNota: 3,33\nCESAR ARAUJO EVANGELISTA: ((1* 3)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 5)\n+(3* 5)\n+(2* 2) )/12\nNota: 4,08\nEDER LIRA DE SOUZA LEAO: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,58",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0389"
  },
  {
    "id": "rel_op_0390",
    "propostaNome": "EMANUEL DA MOTA PASSOS(1745961810223x622941298904531000)",
    "notaFinal": 2.48,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 1)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 1)\n+(1* 3) )/12\nNota: 1,92\nJOAO HENRIQUE DE LIMA LOBO: ((3* 1)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,33\nLAURA CALDAS MIGUEL: ((1* 1)\n+(1* 1)\n+(3* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(2* 1) )/12\nNota: 1,00\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,17\nCESAR ARAUJO EVANGELISTA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,00",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0390"
  },
  {
    "id": "rel_op_0391",
    "propostaNome": "Confiança real(1743719836156x359029446949994500)",
    "notaFinal": 2.33,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 1)\n+(1* 3) )/12\nNota: 2,17\nJOAO HENRIQUE DE LIMA LOBO: ((3* 1)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 2,75\nLAURA CALDAS MIGUEL: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nEDER LIRA DE SOUZA LEAO: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,33\nCESAR ARAUJO EVANGELISTA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 5)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,42",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0391"
  },
  {
    "id": "rel_op_0392",
    "propostaNome": "Ekonavi(1747085309395x688064878954676200)",
    "notaFinal": 3.97,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,50\nJOAO HENRIQUE DE LIMA LOBO: ((3* 5)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,75\nLAURA CALDAS MIGUEL: ((2* 2)\n+(3* 4)\n+(1* 2)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(1* 2) )/12\nNota: 2,92\nEDER LIRA DE SOUZA LEAO: ((3* 4)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,25\nCESAR ARAUJO EVANGELISTA: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": "rel_prop_0076",
    "slug": "rel-op-0392"
  },
  {
    "id": "rel_op_0393",
    "propostaNome": "Fresco Labs(1742927604251x321704278513680400)",
    "notaFinal": 3.72,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 3)\n+(2* 2)\n+(1* 1)\n+(1* 2) )/12\nNota: 1,75\nLAURA CALDAS MIGUEL: ((3* 2)\n+(2* 2)\n+(1* 3)\n+(2* 4)\n+(2* 2)\n+(1* 5)\n+(1* 3) )/12\nNota: 2,75\nJOAO HENRIQUE DE LIMA LOBO: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75\nCESAR ARAUJO EVANGELISTA: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,42\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,92",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": "rel_prop_0110",
    "slug": "rel-op-0393"
  },
  {
    "id": "rel_op_0394",
    "propostaNome": "Cyro Hernandez Calixto(1742925887659x316803116278480900)",
    "notaFinal": 3.05,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 2)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 2) )/12\nNota: 2,17\nLAURA CALDAS MIGUEL: ((3* 3)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 1)\n+(2* 1)\n+(1* 2) )/12\nNota: 2,33\nJOAO HENRIQUE DE LIMA LOBO: ((3* 1)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,08\nCESAR ARAUJO EVANGELISTA: ((2* 5)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(3* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,83\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,83",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0394"
  },
  {
    "id": "rel_op_0395",
    "propostaNome": "Cyro Hernandez Calixto(1742925887659x316803116278480900)",
    "notaFinal": 3.05,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 2)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 2) )/12\nNota: 2,17\nLAURA CALDAS MIGUEL: ((3* 3)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 1)\n+(2* 1)\n+(1* 2) )/12\nNota: 2,33\nJOAO HENRIQUE DE LIMA LOBO: ((3* 1)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,08\nCESAR ARAUJO EVANGELISTA: ((2* 5)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(3* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,83\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,83",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0395"
  },
  {
    "id": "rel_op_0396",
    "propostaNome": "EVA Agricultura Urbana(1747194250308x563060757529624600)",
    "notaFinal": 3.82,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,00\nJOAO HENRIQUE DE LIMA LOBO: ((3* 1)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,33\nLAURA CALDAS MIGUEL: ((1* 4)\n+(3* 3)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(2* 3) )/12\nNota: 4,00\nEDER LIRA DE SOUZA LEAO: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,17\nCESAR ARAUJO EVANGELISTA: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0396"
  },
  {
    "id": "rel_op_0397",
    "propostaNome": "EMANUEL DA MOTA PASSOS(1745961810223x622941298904531000)",
    "notaFinal": 2.48,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 1)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 1)\n+(1* 3) )/12\nNota: 1,92\nJOAO HENRIQUE DE LIMA LOBO: ((3* 1)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,33\nLAURA CALDAS MIGUEL: ((1* 1)\n+(1* 1)\n+(3* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(2* 1) )/12\nNota: 1,00\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,17\nCESAR ARAUJO EVANGELISTA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,00",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0397"
  },
  {
    "id": "rel_op_0398",
    "propostaNome": "Ekonavi(1747085309395x688064878954676200)",
    "notaFinal": 3.97,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,50\nJOAO HENRIQUE DE LIMA LOBO: ((3* 5)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,75\nLAURA CALDAS MIGUEL: ((2* 2)\n+(3* 4)\n+(1* 2)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(1* 2) )/12\nNota: 2,92\nEDER LIRA DE SOUZA LEAO: ((3* 4)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,25\nCESAR ARAUJO EVANGELISTA: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": "rel_prop_0076",
    "slug": "rel-op-0398"
  },
  {
    "id": "rel_op_0399",
    "propostaNome": "SaveAdd(1746916850978x482881701165137900)",
    "notaFinal": 4,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 1)\n+(1* 3) )/12\nNota: 2,17\nJOAO HENRIQUE DE LIMA LOBO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nLAURA CALDAS MIGUEL: ((3* 3)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(2* 2)\n+(1* 3) )/12\nNota: 3,42\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nCESAR ARAUJO EVANGELISTA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": "rel_prop_0083",
    "slug": "rel-op-0399"
  },
  {
    "id": "rel_op_0400",
    "propostaNome": "Rafaela de Abreu Archangelo(1747251651001x309203201899102200)",
    "notaFinal": 3.47,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,25\nJOAO HENRIQUE DE LIMA LOBO: ((3* 1)\n+(2* 2)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,33\nLAURA CALDAS MIGUEL: ((3* 2)\n+(2* 2)\n+(1* 1)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 1) )/12\nNota: 2,00\nCESAR ARAUJO EVANGELISTA: ((3* 5)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,83\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 5) )/12\nNota: 4,92",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0400"
  },
  {
    "id": "rel_op_0401",
    "propostaNome": "Confiança real(1743719836156x359029446949994500)",
    "notaFinal": 2.33,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 1)\n+(1* 3) )/12\nNota: 2,17\nJOAO HENRIQUE DE LIMA LOBO: ((3* 1)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 2,75\nLAURA CALDAS MIGUEL: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nEDER LIRA DE SOUZA LEAO: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,33\nCESAR ARAUJO EVANGELISTA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 5)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,42",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0401"
  },
  {
    "id": "rel_op_0402",
    "propostaNome": "CincoduQuatro(1747263600491x625636412432056300)",
    "notaFinal": 3.7,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 4)\n+(2* 4)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,50\nJOAO HENRIQUE DE LIMA LOBO: ((3* 5)\n+(2* 2)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,00\nLAURA CALDAS MIGUEL: ((2* 3)\n+(1* 2)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 2)\n+(3* 3) )/12\nNota: 3,33\nCESAR ARAUJO EVANGELISTA: ((1* 3)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 5)\n+(3* 5)\n+(2* 2) )/12\nNota: 4,08\nEDER LIRA DE SOUZA LEAO: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,58",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0402"
  },
  {
    "id": "rel_op_0403",
    "propostaNome": "EVA Agricultura Urbana(1747194250308x563060757529624600)",
    "notaFinal": 3.82,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,00\nJOAO HENRIQUE DE LIMA LOBO: ((3* 1)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,33\nLAURA CALDAS MIGUEL: ((1* 4)\n+(3* 3)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(2* 3) )/12\nNota: 4,00\nEDER LIRA DE SOUZA LEAO: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,17\nCESAR ARAUJO EVANGELISTA: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0403"
  },
  {
    "id": "rel_op_0404",
    "propostaNome": "REVIRA(1750384916592x151474736440279040)",
    "notaFinal": 3.43,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,75\nJOAO HENRIQUE DE LIMA LOBO: ((3* 5)\n+(2* 2)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,42\nLAURA CALDAS MIGUEL: ((1* 4)\n+(1* 5)\n+(2* 4)\n+(2* 3)\n+(3* 4)\n+(2* 3)\n+(1* 3) )/12\nNota: 3,67\nCESAR ARAUJO EVANGELISTA: ((3* 5)\n+(2* 1)\n+(1* 1)\n+(2* 3)\n+(2* 1)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,58\nEDER LIRA DE SOUZA LEAO: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0404"
  },
  {
    "id": "rel_op_0405",
    "propostaNome": "Confiança real(1743719836156x359029446949994500)",
    "notaFinal": 2.33,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 1)\n+(1* 3) )/12\nNota: 2,17\nJOAO HENRIQUE DE LIMA LOBO: ((3* 1)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 2,75\nLAURA CALDAS MIGUEL: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nEDER LIRA DE SOUZA LEAO: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,33\nCESAR ARAUJO EVANGELISTA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 5)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,42",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0405"
  },
  {
    "id": "rel_op_0406",
    "propostaNome": "Associação Luminus(1747312681308x105417894606929920)",
    "notaFinal": 4.05,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,75\nJOAO HENRIQUE DE LIMA LOBO: ((3* 5)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,75\nLAURA CALDAS MIGUEL: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,33\nCESAR ARAUJO EVANGELISTA: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 3) )/12\nNota: 3,83\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,58",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": "rel_prop_0053",
    "slug": "rel-op-0406"
  },
  {
    "id": "rel_op_0407",
    "propostaNome": "REVIRA(1750384916592x151474736440279040)",
    "notaFinal": 3.43,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,75\nJOAO HENRIQUE DE LIMA LOBO: ((3* 5)\n+(2* 2)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,42\nLAURA CALDAS MIGUEL: ((1* 4)\n+(1* 5)\n+(2* 4)\n+(2* 3)\n+(3* 4)\n+(2* 3)\n+(1* 3) )/12\nNota: 3,67\nCESAR ARAUJO EVANGELISTA: ((3* 5)\n+(2* 1)\n+(1* 1)\n+(2* 3)\n+(2* 1)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,58\nEDER LIRA DE SOUZA LEAO: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0407"
  },
  {
    "id": "rel_op_0408",
    "propostaNome": "BDI Cooptec(1747270956929x223852702211768300)",
    "notaFinal": 3.45,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(1* 2)\n+(2* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 3,83\nJOAO HENRIQUE DE LIMA LOBO: ((3* 4)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 5)\n+(1* 2) )/12\nNota: 3,33\nLAURA CALDAS MIGUEL: ((3* 2)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 1,75\nCESAR ARAUJO EVANGELISTA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,50\nEDER LIRA DE SOUZA LEAO: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,83",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0408"
  },
  {
    "id": "rel_op_0409",
    "propostaNome": "CincoduQuatro(1747263600491x625636412432056300)",
    "notaFinal": 3.7,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 4)\n+(2* 4)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,50\nJOAO HENRIQUE DE LIMA LOBO: ((3* 5)\n+(2* 2)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,00\nLAURA CALDAS MIGUEL: ((2* 3)\n+(1* 2)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 2)\n+(3* 3) )/12\nNota: 3,33\nCESAR ARAUJO EVANGELISTA: ((1* 3)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 5)\n+(3* 5)\n+(2* 2) )/12\nNota: 4,08\nEDER LIRA DE SOUZA LEAO: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,58",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0409"
  },
  {
    "id": "rel_op_0410",
    "propostaNome": "EVA Agricultura Urbana(1747194250308x563060757529624600)",
    "notaFinal": 3.82,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,00\nJOAO HENRIQUE DE LIMA LOBO: ((3* 1)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,33\nLAURA CALDAS MIGUEL: ((1* 4)\n+(3* 3)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(2* 3) )/12\nNota: 4,00\nEDER LIRA DE SOUZA LEAO: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,17\nCESAR ARAUJO EVANGELISTA: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0410"
  },
  {
    "id": "rel_op_0411",
    "propostaNome": "Associação Luminus(1747312681308x105417894606929920)",
    "notaFinal": 4.05,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,75\nJOAO HENRIQUE DE LIMA LOBO: ((3* 5)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,75\nLAURA CALDAS MIGUEL: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,33\nCESAR ARAUJO EVANGELISTA: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 3) )/12\nNota: 3,83\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,58",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": "rel_prop_0053",
    "slug": "rel-op-0411"
  },
  {
    "id": "rel_op_0412",
    "propostaNome": "SaveAdd(1746916850978x482881701165137900)",
    "notaFinal": 4,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 1)\n+(1* 3) )/12\nNota: 2,17\nJOAO HENRIQUE DE LIMA LOBO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nLAURA CALDAS MIGUEL: ((3* 3)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(2* 2)\n+(1* 3) )/12\nNota: 3,42\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nCESAR ARAUJO EVANGELISTA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": "rel_prop_0083",
    "slug": "rel-op-0412"
  },
  {
    "id": "rel_op_0413",
    "propostaNome": "Ekonavi(1747085309395x688064878954676200)",
    "notaFinal": 3.97,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,50\nJOAO HENRIQUE DE LIMA LOBO: ((3* 5)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,75\nLAURA CALDAS MIGUEL: ((2* 2)\n+(3* 4)\n+(1* 2)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(1* 2) )/12\nNota: 2,92\nEDER LIRA DE SOUZA LEAO: ((3* 4)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,25\nCESAR ARAUJO EVANGELISTA: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": "rel_prop_0076",
    "slug": "rel-op-0413"
  },
  {
    "id": "rel_op_0414",
    "propostaNome": "Fresco Labs(1742927604251x321704278513680400)",
    "notaFinal": 3.72,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 3)\n+(2* 2)\n+(1* 1)\n+(1* 2) )/12\nNota: 1,75\nLAURA CALDAS MIGUEL: ((3* 2)\n+(2* 2)\n+(1* 3)\n+(2* 4)\n+(2* 2)\n+(1* 5)\n+(1* 3) )/12\nNota: 2,75\nJOAO HENRIQUE DE LIMA LOBO: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75\nCESAR ARAUJO EVANGELISTA: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,42\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,92",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": "rel_prop_0110",
    "slug": "rel-op-0414"
  },
  {
    "id": "rel_op_0415",
    "propostaNome": "Confiança real(1743719836156x359029446949994500)",
    "notaFinal": 2.33,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 1)\n+(1* 3) )/12\nNota: 2,17\nJOAO HENRIQUE DE LIMA LOBO: ((3* 1)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 2,75\nLAURA CALDAS MIGUEL: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nEDER LIRA DE SOUZA LEAO: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,33\nCESAR ARAUJO EVANGELISTA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 5)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,42",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0415"
  },
  {
    "id": "rel_op_0416",
    "propostaNome": "Cyro Hernandez Calixto(1742925887659x316803116278480900)",
    "notaFinal": 3.05,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 2)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 2) )/12\nNota: 2,17\nLAURA CALDAS MIGUEL: ((3* 3)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 1)\n+(2* 1)\n+(1* 2) )/12\nNota: 2,33\nJOAO HENRIQUE DE LIMA LOBO: ((3* 1)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,08\nCESAR ARAUJO EVANGELISTA: ((2* 5)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(3* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,83\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,83",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0416"
  },
  {
    "id": "rel_op_0417",
    "propostaNome": "Rafaela de Abreu Archangelo(1747251651001x309203201899102200)",
    "notaFinal": 3.47,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,25\nJOAO HENRIQUE DE LIMA LOBO: ((3* 1)\n+(2* 2)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,33\nLAURA CALDAS MIGUEL: ((3* 2)\n+(2* 2)\n+(1* 1)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 1) )/12\nNota: 2,00\nCESAR ARAUJO EVANGELISTA: ((3* 5)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,83\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 5) )/12\nNota: 4,92",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0417"
  },
  {
    "id": "rel_op_0418",
    "propostaNome": "Fresco Labs(1742927604251x321704278513680400)",
    "notaFinal": 3.72,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 3)\n+(2* 2)\n+(1* 1)\n+(1* 2) )/12\nNota: 1,75\nLAURA CALDAS MIGUEL: ((3* 2)\n+(2* 2)\n+(1* 3)\n+(2* 4)\n+(2* 2)\n+(1* 5)\n+(1* 3) )/12\nNota: 2,75\nJOAO HENRIQUE DE LIMA LOBO: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75\nCESAR ARAUJO EVANGELISTA: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,42\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,92",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": "rel_prop_0110",
    "slug": "rel-op-0418"
  },
  {
    "id": "rel_op_0419",
    "propostaNome": "EMANUEL DA MOTA PASSOS(1745961810223x622941298904531000)",
    "notaFinal": 2.48,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 1)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 1)\n+(1* 3) )/12\nNota: 1,92\nJOAO HENRIQUE DE LIMA LOBO: ((3* 1)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,33\nLAURA CALDAS MIGUEL: ((1* 1)\n+(1* 1)\n+(3* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(2* 1) )/12\nNota: 1,00\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,17\nCESAR ARAUJO EVANGELISTA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,00",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0419"
  },
  {
    "id": "rel_op_0420",
    "propostaNome": "Rafaela de Abreu Archangelo(1747251651001x309203201899102200)",
    "notaFinal": 3.47,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,25\nJOAO HENRIQUE DE LIMA LOBO: ((3* 1)\n+(2* 2)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,33\nLAURA CALDAS MIGUEL: ((3* 2)\n+(2* 2)\n+(1* 1)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 1) )/12\nNota: 2,00\nCESAR ARAUJO EVANGELISTA: ((3* 5)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,83\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 5) )/12\nNota: 4,92",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0420"
  },
  {
    "id": "rel_op_0421",
    "propostaNome": "CincoduQuatro(1747263600491x625636412432056300)",
    "notaFinal": 3.7,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 4)\n+(2* 4)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,50\nJOAO HENRIQUE DE LIMA LOBO: ((3* 5)\n+(2* 2)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,00\nLAURA CALDAS MIGUEL: ((2* 3)\n+(1* 2)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 2)\n+(3* 3) )/12\nNota: 3,33\nCESAR ARAUJO EVANGELISTA: ((1* 3)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 5)\n+(3* 5)\n+(2* 2) )/12\nNota: 4,08\nEDER LIRA DE SOUZA LEAO: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,58",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0421"
  },
  {
    "id": "rel_op_0422",
    "propostaNome": "Associação Luminus(1747312681308x105417894606929920)",
    "notaFinal": 4.05,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,75\nJOAO HENRIQUE DE LIMA LOBO: ((3* 5)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,75\nLAURA CALDAS MIGUEL: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,33\nCESAR ARAUJO EVANGELISTA: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 3) )/12\nNota: 3,83\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,58",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": "rel_prop_0053",
    "slug": "rel-op-0422"
  },
  {
    "id": "rel_op_0423",
    "propostaNome": "BDI Cooptec(1747270956929x223852702211768300)",
    "notaFinal": 3.45,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(1* 2)\n+(2* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 3,83\nJOAO HENRIQUE DE LIMA LOBO: ((3* 4)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 5)\n+(1* 2) )/12\nNota: 3,33\nLAURA CALDAS MIGUEL: ((3* 2)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 1,75\nCESAR ARAUJO EVANGELISTA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,50\nEDER LIRA DE SOUZA LEAO: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,83",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0423"
  },
  {
    "id": "rel_op_0424",
    "propostaNome": "EVA Agricultura Urbana(1747194250308x563060757529624600)",
    "notaFinal": 3.82,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,00\nJOAO HENRIQUE DE LIMA LOBO: ((3* 1)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,33\nLAURA CALDAS MIGUEL: ((1* 4)\n+(3* 3)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(2* 3) )/12\nNota: 4,00\nEDER LIRA DE SOUZA LEAO: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,17\nCESAR ARAUJO EVANGELISTA: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0424"
  },
  {
    "id": "rel_op_0425",
    "propostaNome": "Confiança real(1743719836156x359029446949994500)",
    "notaFinal": 2.33,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 1)\n+(1* 3) )/12\nNota: 2,17\nJOAO HENRIQUE DE LIMA LOBO: ((3* 1)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 2,75\nLAURA CALDAS MIGUEL: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nEDER LIRA DE SOUZA LEAO: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,33\nCESAR ARAUJO EVANGELISTA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 5)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,42",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0425"
  },
  {
    "id": "rel_op_0426",
    "propostaNome": "Ekonavi(1747085309395x688064878954676200)",
    "notaFinal": 3.97,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,50\nJOAO HENRIQUE DE LIMA LOBO: ((3* 5)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,75\nLAURA CALDAS MIGUEL: ((2* 2)\n+(3* 4)\n+(1* 2)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(1* 2) )/12\nNota: 2,92\nEDER LIRA DE SOUZA LEAO: ((3* 4)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,25\nCESAR ARAUJO EVANGELISTA: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": "rel_prop_0076",
    "slug": "rel-op-0426"
  },
  {
    "id": "rel_op_0427",
    "propostaNome": "Fresco Labs(1742927604251x321704278513680400)",
    "notaFinal": 3.72,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 3)\n+(2* 2)\n+(1* 1)\n+(1* 2) )/12\nNota: 1,75\nLAURA CALDAS MIGUEL: ((3* 2)\n+(2* 2)\n+(1* 3)\n+(2* 4)\n+(2* 2)\n+(1* 5)\n+(1* 3) )/12\nNota: 2,75\nJOAO HENRIQUE DE LIMA LOBO: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75\nCESAR ARAUJO EVANGELISTA: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,42\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,92",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": "rel_prop_0110",
    "slug": "rel-op-0427"
  },
  {
    "id": "rel_op_0428",
    "propostaNome": "SaveAdd(1746916850978x482881701165137900)",
    "notaFinal": 4,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 1)\n+(1* 3) )/12\nNota: 2,17\nJOAO HENRIQUE DE LIMA LOBO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nLAURA CALDAS MIGUEL: ((3* 3)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(2* 2)\n+(1* 3) )/12\nNota: 3,42\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nCESAR ARAUJO EVANGELISTA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": "rel_prop_0083",
    "slug": "rel-op-0428"
  },
  {
    "id": "rel_op_0429",
    "propostaNome": "Cyro Hernandez Calixto(1742925887659x316803116278480900)",
    "notaFinal": 3.05,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 2)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 2) )/12\nNota: 2,17\nLAURA CALDAS MIGUEL: ((3* 3)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 1)\n+(2* 1)\n+(1* 2) )/12\nNota: 2,33\nJOAO HENRIQUE DE LIMA LOBO: ((3* 1)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,08\nCESAR ARAUJO EVANGELISTA: ((2* 5)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(3* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,83\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,83",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0429"
  },
  {
    "id": "rel_op_0430",
    "propostaNome": "EMANUEL DA MOTA PASSOS(1745961810223x622941298904531000)",
    "notaFinal": 2.48,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 1)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 1)\n+(1* 3) )/12\nNota: 1,92\nJOAO HENRIQUE DE LIMA LOBO: ((3* 1)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,33\nLAURA CALDAS MIGUEL: ((1* 1)\n+(1* 1)\n+(3* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(2* 1) )/12\nNota: 1,00\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,17\nCESAR ARAUJO EVANGELISTA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,00",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0430"
  },
  {
    "id": "rel_op_0431",
    "propostaNome": "EMANUEL DA MOTA PASSOS(1745961810223x622941298904531000)",
    "notaFinal": 2.48,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 1)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 1)\n+(1* 3) )/12\nNota: 1,92\nJOAO HENRIQUE DE LIMA LOBO: ((3* 1)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,33\nLAURA CALDAS MIGUEL: ((1* 1)\n+(1* 1)\n+(3* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(2* 1) )/12\nNota: 1,00\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,17\nCESAR ARAUJO EVANGELISTA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,00",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0431"
  },
  {
    "id": "rel_op_0432",
    "propostaNome": "Cyro Hernandez Calixto(1742925887659x316803116278480900)",
    "notaFinal": 3.05,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 2)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 2) )/12\nNota: 2,17\nLAURA CALDAS MIGUEL: ((3* 3)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 1)\n+(2* 1)\n+(1* 2) )/12\nNota: 2,33\nJOAO HENRIQUE DE LIMA LOBO: ((3* 1)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,08\nCESAR ARAUJO EVANGELISTA: ((2* 5)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(3* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,83\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,83",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0432"
  },
  {
    "id": "rel_op_0433",
    "propostaNome": "REVIRA(1750384916592x151474736440279040)",
    "notaFinal": 3.43,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,75\nJOAO HENRIQUE DE LIMA LOBO: ((3* 5)\n+(2* 2)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,42\nLAURA CALDAS MIGUEL: ((1* 4)\n+(1* 5)\n+(2* 4)\n+(2* 3)\n+(3* 4)\n+(2* 3)\n+(1* 3) )/12\nNota: 3,67\nCESAR ARAUJO EVANGELISTA: ((3* 5)\n+(2* 1)\n+(1* 1)\n+(2* 3)\n+(2* 1)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,58\nEDER LIRA DE SOUZA LEAO: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0433"
  },
  {
    "id": "rel_op_0434",
    "propostaNome": "Fresco Labs(1742927604251x321704278513680400)",
    "notaFinal": 3.72,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 3)\n+(2* 2)\n+(1* 1)\n+(1* 2) )/12\nNota: 1,75\nLAURA CALDAS MIGUEL: ((3* 2)\n+(2* 2)\n+(1* 3)\n+(2* 4)\n+(2* 2)\n+(1* 5)\n+(1* 3) )/12\nNota: 2,75\nJOAO HENRIQUE DE LIMA LOBO: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75\nCESAR ARAUJO EVANGELISTA: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,42\nEDER LIRA DE SOUZA LEAO: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,92",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": "rel_prop_0110",
    "slug": "rel-op-0434"
  },
  {
    "id": "rel_op_0435",
    "propostaNome": "BDI Cooptec(1747270956929x223852702211768300)",
    "notaFinal": 3.45,
    "criteriosENota": "ADRIANA BARATA DOS SANTOS FIGUEIRA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(1* 2)\n+(2* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 3,83\nJOAO HENRIQUE DE LIMA LOBO: ((3* 4)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 5)\n+(1* 2) )/12\nNota: 3,33\nLAURA CALDAS MIGUEL: ((3* 2)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 1,75\nCESAR ARAUJO EVANGELISTA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,50\nEDER LIRA DE SOUZA LEAO: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,83",
    "createdDate": "2025-07-10 09:10:00",
    "submissionId": null,
    "slug": "rel-op-0435"
  },
  {
    "id": "rel_op_0436",
    "propostaNome": "ALEXANDRE GUEDES RIBEIRO(1743616040182x329049495127982100)",
    "notaFinal": 1,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((1* 1)\n+(1* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(2* 1)\n+(3* 1) )/12\nNota: 1,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTIAGO MACEDO BEZERRA MAIA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0436"
  },
  {
    "id": "rel_op_0437",
    "propostaNome": "Vixsystem(1750386615441x880886100849852400)",
    "notaFinal": 4.5,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 5)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,92\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((1* 3)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 5)\n+(2* 4)\n+(3* 5) )/12\nNota: 4,33\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0437"
  },
  {
    "id": "rel_op_0438",
    "propostaNome": "COLI(1750472370070x624706963282591700)",
    "notaFinal": 4.62,
    "criteriosENota": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,83\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nOTO BUREGIO DE LIMA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4) )/12\nNota: 4,50\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 5) )/12\nNota: 4,50\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0006",
    "slug": "rel-op-0438"
  },
  {
    "id": "rel_op_0439",
    "propostaNome": "Elucidar(1750474178894x660330135783473200)",
    "notaFinal": 4.55,
    "criteriosENota": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 4)\n+(1* 5)\n+(2* 3)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,33\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nOTO BUREGIO DE LIMA: ((2* 4)\n+(3* 4)\n+(1* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,75\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 1) )/12\nNota: 4,67",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0005",
    "slug": "rel-op-0439"
  },
  {
    "id": "rel_op_0440",
    "propostaNome": "Hailton de Melo Lima Neto(1750472207471x859310673469636600)",
    "notaFinal": 4.2,
    "criteriosENota": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 2)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,75\nOTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,75\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,92\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,08\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 1) )/12\nNota: 4,50",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0440"
  },
  {
    "id": "rel_op_0441",
    "propostaNome": "RAFAEL ANDRADE DA SILVA(1750470548811x148097843080986620)",
    "notaFinal": 3.98,
    "criteriosENota": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 2)\n+(2* 4)\n+(1* 3)\n+(2* 2)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,42\nOTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,00\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,67\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,83",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0441"
  },
  {
    "id": "rel_op_0442",
    "propostaNome": "RAFAEL ANDRADE DA SILVA(1750470548811x148097843080986620)",
    "notaFinal": 3.98,
    "criteriosENota": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 2)\n+(2* 4)\n+(1* 3)\n+(2* 2)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,42\nOTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,00\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,67\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,83",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0442"
  },
  {
    "id": "rel_op_0443",
    "propostaNome": "Elucidar(1750474178894x660330135783473200)",
    "notaFinal": 4.55,
    "criteriosENota": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 4)\n+(1* 5)\n+(2* 3)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,33\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nOTO BUREGIO DE LIMA: ((2* 4)\n+(3* 4)\n+(1* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,75\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 1) )/12\nNota: 4,67",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0005",
    "slug": "rel-op-0443"
  },
  {
    "id": "rel_op_0444",
    "propostaNome": "COLI(1750472370070x624706963282591700)",
    "notaFinal": 4.62,
    "criteriosENota": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,83\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nOTO BUREGIO DE LIMA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4) )/12\nNota: 4,50\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 5) )/12\nNota: 4,50\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0006",
    "slug": "rel-op-0444"
  },
  {
    "id": "rel_op_0445",
    "propostaNome": "Hailton de Melo Lima Neto(1750472207471x859310673469636600)",
    "notaFinal": 4.2,
    "criteriosENota": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 2)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,75\nOTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,75\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,92\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,08\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 1) )/12\nNota: 4,50",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0445"
  },
  {
    "id": "rel_op_0446",
    "propostaNome": "BoraVer(1750467696005x441635592284930050)",
    "notaFinal": 4.05,
    "criteriosENota": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,67\nOTO BUREGIO DE LIMA: ((1* 5)\n+(2* 5)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 4)\n+(3* 4) )/12\nNota: 4,33\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,67\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 4)\n+(2* 2)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,83\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0013",
    "slug": "rel-op-0446"
  },
  {
    "id": "rel_op_0447",
    "propostaNome": "Visão e ritmo(1750465688276x271010992059580400)",
    "notaFinal": 3.83,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,92\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 2)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,42\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(1* 3)\n+(2* 4)\n+(1* 3)\n+(1* 4)\n+(2* 4)\n+(2* 4) )/12\nNota: 3,83",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0447"
  },
  {
    "id": "rel_op_0448",
    "propostaNome": "Tech3(1750458455261x175536613849301000)",
    "notaFinal": 4.68,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,67\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 5) )/12\nNota: 4,25",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0448"
  },
  {
    "id": "rel_op_0449",
    "propostaNome": "BoraVer(1750467696005x441635592284930050)",
    "notaFinal": 4.05,
    "criteriosENota": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,67\nOTO BUREGIO DE LIMA: ((1* 5)\n+(2* 5)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 4)\n+(3* 4) )/12\nNota: 4,33\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,67\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 4)\n+(2* 2)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,83\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0013",
    "slug": "rel-op-0449"
  },
  {
    "id": "rel_op_0450",
    "propostaNome": "Tech3(1750458455261x175536613849301000)",
    "notaFinal": 4.68,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,67\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 5) )/12\nNota: 4,25",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0450"
  },
  {
    "id": "rel_op_0451",
    "propostaNome": "enkode(1750455499886x638591438523203600)",
    "notaFinal": 4.25,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 4) )/12\nNota: 3,92",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0451"
  },
  {
    "id": "rel_op_0452",
    "propostaNome": "Visão e ritmo(1750465688276x271010992059580400)",
    "notaFinal": 3.83,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,92\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 2)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,42\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(1* 3)\n+(2* 4)\n+(1* 3)\n+(1* 4)\n+(2* 4)\n+(2* 4) )/12\nNota: 3,83",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0452"
  },
  {
    "id": "rel_op_0453",
    "propostaNome": "Watt Consultoria(1750426734948x679162655262900200)",
    "notaFinal": 4.08,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,58\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,83\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,92\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 3)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,83\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 5)\n+(1* 4)\n+(1* 4)\n+(1* 2)\n+(2* 5)\n+(2* 4)\n+(2* 4) )/12\nNota: 4,25",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0035",
    "slug": "rel-op-0453"
  },
  {
    "id": "rel_op_0454",
    "propostaNome": "Watt Consultoria(1750426734948x679162655262900200)",
    "notaFinal": 4.08,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,58\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,83\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,92\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 3)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,83\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 5)\n+(1* 4)\n+(1* 4)\n+(1* 2)\n+(2* 5)\n+(2* 4)\n+(2* 4) )/12\nNota: 4,25",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0035",
    "slug": "rel-op-0454"
  },
  {
    "id": "rel_op_0455",
    "propostaNome": "Vixsystem(1750386615441x880886100849852400)",
    "notaFinal": 4.5,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 5)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,92\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((1* 3)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 5)\n+(2* 4)\n+(3* 5) )/12\nNota: 4,33\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0455"
  },
  {
    "id": "rel_op_0456",
    "propostaNome": "Elucidar(1750474178894x660330135783473200)",
    "notaFinal": 4.55,
    "criteriosENota": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 4)\n+(1* 5)\n+(2* 3)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,33\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nOTO BUREGIO DE LIMA: ((2* 4)\n+(3* 4)\n+(1* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,75\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 1) )/12\nNota: 4,67",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0005",
    "slug": "rel-op-0456"
  },
  {
    "id": "rel_op_0457",
    "propostaNome": "Watt Consultoria(1750426734948x679162655262900200)",
    "notaFinal": 4.08,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,58\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,83\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,92\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 3)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,83\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 5)\n+(1* 4)\n+(1* 4)\n+(1* 2)\n+(2* 5)\n+(2* 4)\n+(2* 4) )/12\nNota: 4,25",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0035",
    "slug": "rel-op-0457"
  },
  {
    "id": "rel_op_0458",
    "propostaNome": "Vixsystem(1750386615441x880886100849852400)",
    "notaFinal": 4.5,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 5)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,92\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((1* 3)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 5)\n+(2* 4)\n+(3* 5) )/12\nNota: 4,33\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0458"
  },
  {
    "id": "rel_op_0459",
    "propostaNome": "enkode(1750455499886x638591438523203600)",
    "notaFinal": 4.25,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 4) )/12\nNota: 3,92",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0459"
  },
  {
    "id": "rel_op_0460",
    "propostaNome": "Passo Seguro(1750372008997x772099467722096600)",
    "notaFinal": 4.33,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,42\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,00\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,50\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0041",
    "slug": "rel-op-0460"
  },
  {
    "id": "rel_op_0461",
    "propostaNome": "Brio: Mobilidade Segura para Pessoas com Deficiência(1750364140423x786370289360175100)",
    "notaFinal": 4.38,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 5)\n+(2* 4) )/12\nNota: 4,25\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,42\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 5) )/12\nNota: 4,50",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0461"
  },
  {
    "id": "rel_op_0462",
    "propostaNome": "Pulsetec(1750179661934x493441771244617700)",
    "notaFinal": 1.58,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 2)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(1* 1)\n+(1* 2)\n+(2* 3) )/12\nNota: 1,92\nTIAGO MACEDO BEZERRA MAIA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,00\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0462"
  },
  {
    "id": "rel_op_0463",
    "propostaNome": "COLI(1750472370070x624706963282591700)",
    "notaFinal": 4.62,
    "criteriosENota": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,83\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nOTO BUREGIO DE LIMA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4) )/12\nNota: 4,50\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 5) )/12\nNota: 4,50\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0006",
    "slug": "rel-op-0463"
  },
  {
    "id": "rel_op_0464",
    "propostaNome": "Passo Seguro(1750372008997x772099467722096600)",
    "notaFinal": 4.33,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,42\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,00\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,50\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0041",
    "slug": "rel-op-0464"
  },
  {
    "id": "rel_op_0465",
    "propostaNome": "Hailton de Melo Lima Neto(1750472207471x859310673469636600)",
    "notaFinal": 4.2,
    "criteriosENota": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 2)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,75\nOTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,75\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,92\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,08\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 1) )/12\nNota: 4,50",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0465"
  },
  {
    "id": "rel_op_0466",
    "propostaNome": "See U(1747271412021x865596489359687700)",
    "notaFinal": 3.67,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4)\n+(3* 4)\n+(2* 4) )/12\nNota: 4,17\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 5) )/12\nNota: 4,33\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(1* 2)\n+(1* 2)\n+(2* 4) )/12\nNota: 3,00\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 3)\n+(1* 5)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,50",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0466"
  },
  {
    "id": "rel_op_0467",
    "propostaNome": "BoraVer(1750467696005x441635592284930050)",
    "notaFinal": 4.05,
    "criteriosENota": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,67\nOTO BUREGIO DE LIMA: ((1* 5)\n+(2* 5)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 4)\n+(3* 4) )/12\nNota: 4,33\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,67\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 4)\n+(2* 2)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,83\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0013",
    "slug": "rel-op-0467"
  },
  {
    "id": "rel_op_0468",
    "propostaNome": "Vitor Gabriel Silva de Lima(1749218056573x614755932894396400)",
    "notaFinal": 3.4,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,42\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 5) )/12\nNota: 4,33\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3)\n+(3* 4) )/12\nNota: 3,00\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 2)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,17\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 3)\n+(2* 1)\n+(1* 3)\n+(2* 5)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,08",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0468"
  },
  {
    "id": "rel_op_0469",
    "propostaNome": "Elucidar(1750474178894x660330135783473200)",
    "notaFinal": 4.55,
    "criteriosENota": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 4)\n+(1* 5)\n+(2* 3)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,33\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nOTO BUREGIO DE LIMA: ((2* 4)\n+(3* 4)\n+(1* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,75\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 1) )/12\nNota: 4,67",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0005",
    "slug": "rel-op-0469"
  },
  {
    "id": "rel_op_0470",
    "propostaNome": "Visão e ritmo(1750465688276x271010992059580400)",
    "notaFinal": 3.83,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,92\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 2)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,42\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(1* 3)\n+(2* 4)\n+(1* 3)\n+(1* 4)\n+(2* 4)\n+(2* 4) )/12\nNota: 3,83",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0470"
  },
  {
    "id": "rel_op_0471",
    "propostaNome": "RAFAEL ANDRADE DA SILVA(1750470548811x148097843080986620)",
    "notaFinal": 3.98,
    "criteriosENota": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 2)\n+(2* 4)\n+(1* 3)\n+(2* 2)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,42\nOTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,00\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,67\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,83",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0471"
  },
  {
    "id": "rel_op_0472",
    "propostaNome": "Gralha Azul(1747270855036x195390718165647360)",
    "notaFinal": 4.42,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(2* 3) )/12\nNota: 3,58\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 4) )/12\nNota: 3,83\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,67\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0472"
  },
  {
    "id": "rel_op_0473",
    "propostaNome": "Watt Consultoria(1750426734948x679162655262900200)",
    "notaFinal": 4.08,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,58\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,83\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,92\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 3)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,83\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 5)\n+(1* 4)\n+(1* 4)\n+(1* 2)\n+(2* 5)\n+(2* 4)\n+(2* 4) )/12\nNota: 4,25",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0035",
    "slug": "rel-op-0473"
  },
  {
    "id": "rel_op_0474",
    "propostaNome": "enkode(1750455499886x638591438523203600)",
    "notaFinal": 4.25,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 4) )/12\nNota: 3,92",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0474"
  },
  {
    "id": "rel_op_0475",
    "propostaNome": "Vixsystem(1750386615441x880886100849852400)",
    "notaFinal": 4.5,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 5)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,92\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((1* 3)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 5)\n+(2* 4)\n+(3* 5) )/12\nNota: 4,33\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0475"
  },
  {
    "id": "rel_op_0476",
    "propostaNome": "COLI(1750472370070x624706963282591700)",
    "notaFinal": 4.62,
    "criteriosENota": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,83\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nOTO BUREGIO DE LIMA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4) )/12\nNota: 4,50\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 5) )/12\nNota: 4,50\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0006",
    "slug": "rel-op-0476"
  },
  {
    "id": "rel_op_0477",
    "propostaNome": "enkode(1750455499886x638591438523203600)",
    "notaFinal": 4.25,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 4) )/12\nNota: 3,92",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0477"
  },
  {
    "id": "rel_op_0478",
    "propostaNome": "BOB(1747256813350x778000898229010400)",
    "notaFinal": 4.5,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,83\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 4)\n+(1* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(1* 4)\n+(3* 4) )/12\nNota: 4,25\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,92\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 1) )/12\nNota: 4,50",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0064",
    "slug": "rel-op-0478"
  },
  {
    "id": "rel_op_0479",
    "propostaNome": "Brio: Mobilidade Segura para Pessoas com Deficiência(1750364140423x786370289360175100)",
    "notaFinal": 4.38,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 5)\n+(2* 4) )/12\nNota: 4,25\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,42\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 5) )/12\nNota: 4,50",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0479"
  },
  {
    "id": "rel_op_0480",
    "propostaNome": "Pulsetec(1750179661934x493441771244617700)",
    "notaFinal": 1.58,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 2)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(1* 1)\n+(1* 2)\n+(2* 3) )/12\nNota: 1,92\nTIAGO MACEDO BEZERRA MAIA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,00\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0480"
  },
  {
    "id": "rel_op_0481",
    "propostaNome": "Passo Seguro(1750372008997x772099467722096600)",
    "notaFinal": 4.33,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,42\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,00\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,50\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0041",
    "slug": "rel-op-0481"
  },
  {
    "id": "rel_op_0482",
    "propostaNome": "Passo Seguro(1750372008997x772099467722096600)",
    "notaFinal": 4.33,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,42\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,00\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,50\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0041",
    "slug": "rel-op-0482"
  },
  {
    "id": "rel_op_0483",
    "propostaNome": "See U(1747271412021x865596489359687700)",
    "notaFinal": 3.67,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4)\n+(3* 4)\n+(2* 4) )/12\nNota: 4,17\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 5) )/12\nNota: 4,33\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(1* 2)\n+(1* 2)\n+(2* 4) )/12\nNota: 3,00\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 3)\n+(1* 5)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,50",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0483"
  },
  {
    "id": "rel_op_0484",
    "propostaNome": "Vitor Gabriel Silva de Lima(1749218056573x614755932894396400)",
    "notaFinal": 3.4,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,42\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 5) )/12\nNota: 4,33\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3)\n+(3* 4) )/12\nNota: 3,00\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 2)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,17\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 3)\n+(2* 1)\n+(1* 3)\n+(2* 5)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,08",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0484"
  },
  {
    "id": "rel_op_0485",
    "propostaNome": "Brio: Mobilidade Segura para Pessoas com Deficiência(1750364140423x786370289360175100)",
    "notaFinal": 4.38,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 5)\n+(2* 4) )/12\nNota: 4,25\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,42\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 5) )/12\nNota: 4,50",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0485"
  },
  {
    "id": "rel_op_0486",
    "propostaNome": "Gralha Azul(1747270855036x195390718165647360)",
    "notaFinal": 4.42,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(2* 3) )/12\nNota: 3,58\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 4) )/12\nNota: 3,83\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,67\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0486"
  },
  {
    "id": "rel_op_0487",
    "propostaNome": "Pulsetec(1750179661934x493441771244617700)",
    "notaFinal": 1.58,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 2)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(1* 1)\n+(1* 2)\n+(2* 3) )/12\nNota: 1,92\nTIAGO MACEDO BEZERRA MAIA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,00\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0487"
  },
  {
    "id": "rel_op_0488",
    "propostaNome": "See U(1747271412021x865596489359687700)",
    "notaFinal": 3.67,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4)\n+(3* 4)\n+(2* 4) )/12\nNota: 4,17\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 5) )/12\nNota: 4,33\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(1* 2)\n+(1* 2)\n+(2* 4) )/12\nNota: 3,00\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 3)\n+(1* 5)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,50",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0488"
  },
  {
    "id": "rel_op_0489",
    "propostaNome": "Heyde Leão de Souza(1746707157949x895218344394752000)",
    "notaFinal": 3.98,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,67\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 2)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,42\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 4)\n+(2* 2)\n+(1* 2) )/12\nNota: 3,25\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0489"
  },
  {
    "id": "rel_op_0490",
    "propostaNome": "Synesthesia Vision (1747234890261x303493752378621950)",
    "notaFinal": 4.35,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,17\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 1) )/12\nNota: 4,08\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,92\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 5) )/12\nNota: 4,17\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0490"
  },
  {
    "id": "rel_op_0491",
    "propostaNome": "BOB(1747256813350x778000898229010400)",
    "notaFinal": 4.5,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,83\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 4)\n+(1* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(1* 4)\n+(3* 4) )/12\nNota: 4,25\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,92\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 1) )/12\nNota: 4,50",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0064",
    "slug": "rel-op-0491"
  },
  {
    "id": "rel_op_0492",
    "propostaNome": "VER-TI MOBILIDADE URBANA LTDA(1746297384978x444246789471338500)",
    "notaFinal": 2.62,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4)\n+(2* 3) )/12\nNota: 3,75\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,25\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 2)\n+(3* 3) )/12\nNota: 2,58\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 2)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,92\nTIAGO MACEDO BEZERRA MAIA: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,58",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0492"
  },
  {
    "id": "rel_op_0493",
    "propostaNome": "Vitor Gabriel Silva de Lima(1749218056573x614755932894396400)",
    "notaFinal": 3.4,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,42\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 5) )/12\nNota: 4,33\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3)\n+(3* 4) )/12\nNota: 3,00\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 2)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,17\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 3)\n+(2* 1)\n+(1* 3)\n+(2* 5)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,08",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0493"
  },
  {
    "id": "rel_op_0494",
    "propostaNome": "Hailton de Melo Lima Neto(1750472207471x859310673469636600)",
    "notaFinal": 4.2,
    "criteriosENota": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 2)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,75\nOTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,75\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,92\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,08\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 1) )/12\nNota: 4,50",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0494"
  },
  {
    "id": "rel_op_0495",
    "propostaNome": "Gralha Azul(1747270855036x195390718165647360)",
    "notaFinal": 4.42,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(2* 3) )/12\nNota: 3,58\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 4) )/12\nNota: 3,83\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,67\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0495"
  },
  {
    "id": "rel_op_0496",
    "propostaNome": "Passo com Vos - Adapt-Free(1745634856585x832885378648637400)",
    "notaFinal": 3.15,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 3)\n+(2* 3)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,17\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,25\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((1* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 2)\n+(2* 1)\n+(3* 3) )/12\nNota: 3,58\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,58",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0496"
  },
  {
    "id": "rel_op_0497",
    "propostaNome": "Tech3(1750458455261x175536613849301000)",
    "notaFinal": 4.68,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,67\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 5) )/12\nNota: 4,25",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0497"
  },
  {
    "id": "rel_op_0498",
    "propostaNome": "Synesthesia Vision (1747234890261x303493752378621950)",
    "notaFinal": 4.35,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,17\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 1) )/12\nNota: 4,08\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,92\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 5) )/12\nNota: 4,17\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0498"
  },
  {
    "id": "rel_op_0499",
    "propostaNome": "Heyde Leão de Souza(1746707157949x895218344394752000)",
    "notaFinal": 3.98,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,67\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 2)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,42\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 4)\n+(2* 2)\n+(1* 2) )/12\nNota: 3,25\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0499"
  },
  {
    "id": "rel_op_0500",
    "propostaNome": "ALEXANDRE GUEDES RIBEIRO(1743616040182x329049495127982100)",
    "notaFinal": 1,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((1* 1)\n+(1* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(2* 1)\n+(3* 1) )/12\nNota: 1,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTIAGO MACEDO BEZERRA MAIA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0500"
  },
  {
    "id": "rel_op_0501",
    "propostaNome": "Tech3(1750458455261x175536613849301000)",
    "notaFinal": 4.68,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,67\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 5) )/12\nNota: 4,25",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0501"
  },
  {
    "id": "rel_op_0502",
    "propostaNome": "RAFAEL ANDRADE DA SILVA(1750470548811x148097843080986620)",
    "notaFinal": 3.98,
    "criteriosENota": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 2)\n+(2* 4)\n+(1* 3)\n+(2* 2)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,42\nOTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,00\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,67\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,83",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0502"
  },
  {
    "id": "rel_op_0503",
    "propostaNome": "Pulsetec(1750179661934x493441771244617700)",
    "notaFinal": 1.58,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 2)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(1* 1)\n+(1* 2)\n+(2* 3) )/12\nNota: 1,92\nTIAGO MACEDO BEZERRA MAIA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,00\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0503"
  },
  {
    "id": "rel_op_0504",
    "propostaNome": "Brio: Mobilidade Segura para Pessoas com Deficiência(1750364140423x786370289360175100)",
    "notaFinal": 4.38,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 5)\n+(2* 4) )/12\nNota: 4,25\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,42\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 5) )/12\nNota: 4,50",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0504"
  },
  {
    "id": "rel_op_0505",
    "propostaNome": "See U(1747271412021x865596489359687700)",
    "notaFinal": 3.67,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4)\n+(3* 4)\n+(2* 4) )/12\nNota: 4,17\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 5) )/12\nNota: 4,33\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(1* 2)\n+(1* 2)\n+(2* 4) )/12\nNota: 3,00\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 3)\n+(1* 5)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,50",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0505"
  },
  {
    "id": "rel_op_0506",
    "propostaNome": "Vitor Gabriel Silva de Lima(1749218056573x614755932894396400)",
    "notaFinal": 3.4,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,42\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 5) )/12\nNota: 4,33\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3)\n+(3* 4) )/12\nNota: 3,00\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 2)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,17\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 3)\n+(2* 1)\n+(1* 3)\n+(2* 5)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,08",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0506"
  },
  {
    "id": "rel_op_0507",
    "propostaNome": "COLI(1750472370070x624706963282591700)",
    "notaFinal": 4.62,
    "criteriosENota": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,83\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nOTO BUREGIO DE LIMA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4) )/12\nNota: 4,50\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 5) )/12\nNota: 4,50\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0006",
    "slug": "rel-op-0507"
  },
  {
    "id": "rel_op_0508",
    "propostaNome": "BOB(1747256813350x778000898229010400)",
    "notaFinal": 4.5,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,83\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 4)\n+(1* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(1* 4)\n+(3* 4) )/12\nNota: 4,25\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,92\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 1) )/12\nNota: 4,50",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0064",
    "slug": "rel-op-0508"
  },
  {
    "id": "rel_op_0509",
    "propostaNome": "RAFAEL ANDRADE DA SILVA(1750470548811x148097843080986620)",
    "notaFinal": 3.98,
    "criteriosENota": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 2)\n+(2* 4)\n+(1* 3)\n+(2* 2)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,42\nOTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,00\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,67\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,83",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0509"
  },
  {
    "id": "rel_op_0510",
    "propostaNome": "Visão e ritmo(1750465688276x271010992059580400)",
    "notaFinal": 3.83,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,92\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 2)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,42\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(1* 3)\n+(2* 4)\n+(1* 3)\n+(1* 4)\n+(2* 4)\n+(2* 4) )/12\nNota: 3,83",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0510"
  },
  {
    "id": "rel_op_0511",
    "propostaNome": "Visão e ritmo(1750465688276x271010992059580400)",
    "notaFinal": 3.83,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,92\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,25\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 2)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,42\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(1* 3)\n+(2* 4)\n+(1* 3)\n+(1* 4)\n+(2* 4)\n+(2* 4) )/12\nNota: 3,83",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0511"
  },
  {
    "id": "rel_op_0512",
    "propostaNome": "Hailton de Melo Lima Neto(1750472207471x859310673469636600)",
    "notaFinal": 4.2,
    "criteriosENota": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 2)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,75\nOTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,75\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,92\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,08\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 1) )/12\nNota: 4,50",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0512"
  },
  {
    "id": "rel_op_0513",
    "propostaNome": "Tech3(1750458455261x175536613849301000)",
    "notaFinal": 4.68,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,67\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 5) )/12\nNota: 4,25",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0513"
  },
  {
    "id": "rel_op_0514",
    "propostaNome": "enkode(1750455499886x638591438523203600)",
    "notaFinal": 4.25,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 4) )/12\nNota: 3,92",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0514"
  },
  {
    "id": "rel_op_0515",
    "propostaNome": "BoraVer(1750467696005x441635592284930050)",
    "notaFinal": 4.05,
    "criteriosENota": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,67\nOTO BUREGIO DE LIMA: ((1* 5)\n+(2* 5)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 4)\n+(3* 4) )/12\nNota: 4,33\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,67\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 4)\n+(2* 2)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,83\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0013",
    "slug": "rel-op-0515"
  },
  {
    "id": "rel_op_0516",
    "propostaNome": "BOB(1747256813350x778000898229010400)",
    "notaFinal": 4.5,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,83\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 4)\n+(1* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(1* 4)\n+(3* 4) )/12\nNota: 4,25\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,92\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 1) )/12\nNota: 4,50",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0064",
    "slug": "rel-op-0516"
  },
  {
    "id": "rel_op_0517",
    "propostaNome": "Elucidar(1750474178894x660330135783473200)",
    "notaFinal": 4.55,
    "criteriosENota": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 4)\n+(1* 5)\n+(2* 3)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,33\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nOTO BUREGIO DE LIMA: ((2* 4)\n+(3* 4)\n+(1* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,75\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 1) )/12\nNota: 4,67",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0005",
    "slug": "rel-op-0517"
  },
  {
    "id": "rel_op_0518",
    "propostaNome": "Gralha Azul(1747270855036x195390718165647360)",
    "notaFinal": 4.42,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(2* 3) )/12\nNota: 3,58\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 4) )/12\nNota: 3,83\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,67\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0518"
  },
  {
    "id": "rel_op_0519",
    "propostaNome": "Heyde Leão de Souza(1746707157949x895218344394752000)",
    "notaFinal": 3.98,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,67\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 2)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,42\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 4)\n+(2* 2)\n+(1* 2) )/12\nNota: 3,25\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0519"
  },
  {
    "id": "rel_op_0520",
    "propostaNome": "ALEXANDRE GUEDES RIBEIRO(1743616040182x329049495127982100)",
    "notaFinal": 1,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((1* 1)\n+(1* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(2* 1)\n+(3* 1) )/12\nNota: 1,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTIAGO MACEDO BEZERRA MAIA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0520"
  },
  {
    "id": "rel_op_0521",
    "propostaNome": "VER-TI MOBILIDADE URBANA LTDA(1746297384978x444246789471338500)",
    "notaFinal": 2.62,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4)\n+(2* 3) )/12\nNota: 3,75\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,25\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 2)\n+(3* 3) )/12\nNota: 2,58\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 2)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,92\nTIAGO MACEDO BEZERRA MAIA: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,58",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0521"
  },
  {
    "id": "rel_op_0522",
    "propostaNome": "Passo com Vos - Adapt-Free(1745634856585x832885378648637400)",
    "notaFinal": 3.15,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 3)\n+(2* 3)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,17\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,25\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((1* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 2)\n+(2* 1)\n+(3* 3) )/12\nNota: 3,58\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,58",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0522"
  },
  {
    "id": "rel_op_0523",
    "propostaNome": "Synesthesia Vision (1747234890261x303493752378621950)",
    "notaFinal": 4.35,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,17\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 1) )/12\nNota: 4,08\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,92\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 5) )/12\nNota: 4,17\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0523"
  },
  {
    "id": "rel_op_0524",
    "propostaNome": "Passo com Vos - Adapt-Free(1745634856585x832885378648637400)",
    "notaFinal": 3.15,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 3)\n+(2* 3)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,17\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,25\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((1* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 2)\n+(2* 1)\n+(3* 3) )/12\nNota: 3,58\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,58",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0524"
  },
  {
    "id": "rel_op_0525",
    "propostaNome": "Vixsystem(1750386615441x880886100849852400)",
    "notaFinal": 4.5,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 5)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,92\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((1* 3)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 5)\n+(2* 4)\n+(3* 5) )/12\nNota: 4,33\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0525"
  },
  {
    "id": "rel_op_0526",
    "propostaNome": "VER-TI MOBILIDADE URBANA LTDA(1746297384978x444246789471338500)",
    "notaFinal": 2.62,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4)\n+(2* 3) )/12\nNota: 3,75\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,25\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 2)\n+(3* 3) )/12\nNota: 2,58\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 2)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,92\nTIAGO MACEDO BEZERRA MAIA: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,58",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0526"
  },
  {
    "id": "rel_op_0527",
    "propostaNome": "Watt Consultoria(1750426734948x679162655262900200)",
    "notaFinal": 4.08,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,58\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,83\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,92\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 3)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,83\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 5)\n+(1* 4)\n+(1* 4)\n+(1* 2)\n+(2* 5)\n+(2* 4)\n+(2* 4) )/12\nNota: 4,25",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0035",
    "slug": "rel-op-0527"
  },
  {
    "id": "rel_op_0528",
    "propostaNome": "ALEXANDRE GUEDES RIBEIRO(1743616040182x329049495127982100)",
    "notaFinal": 1,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((1* 1)\n+(1* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(2* 1)\n+(3* 1) )/12\nNota: 1,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTIAGO MACEDO BEZERRA MAIA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0528"
  },
  {
    "id": "rel_op_0529",
    "propostaNome": "Pulsetec(1750179661934x493441771244617700)",
    "notaFinal": 1.58,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 2)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(1* 1)\n+(1* 2)\n+(2* 3) )/12\nNota: 1,92\nTIAGO MACEDO BEZERRA MAIA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,00\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0529"
  },
  {
    "id": "rel_op_0530",
    "propostaNome": "Heyde Leão de Souza(1746707157949x895218344394752000)",
    "notaFinal": 3.98,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,67\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 2)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,42\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 4)\n+(2* 2)\n+(1* 2) )/12\nNota: 3,25\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0530"
  },
  {
    "id": "rel_op_0531",
    "propostaNome": "VER-TI MOBILIDADE URBANA LTDA(1746297384978x444246789471338500)",
    "notaFinal": 2.62,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4)\n+(2* 3) )/12\nNota: 3,75\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,25\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 2)\n+(3* 3) )/12\nNota: 2,58\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 2)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,92\nTIAGO MACEDO BEZERRA MAIA: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,58",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0531"
  },
  {
    "id": "rel_op_0532",
    "propostaNome": "Brio: Mobilidade Segura para Pessoas com Deficiência(1750364140423x786370289360175100)",
    "notaFinal": 4.38,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 5)\n+(2* 4) )/12\nNota: 4,25\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,42\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 5) )/12\nNota: 4,50",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0532"
  },
  {
    "id": "rel_op_0533",
    "propostaNome": "Gralha Azul(1747270855036x195390718165647360)",
    "notaFinal": 4.42,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(2* 3) )/12\nNota: 3,58\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 4) )/12\nNota: 3,83\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,67\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0533"
  },
  {
    "id": "rel_op_0534",
    "propostaNome": "Passo Seguro(1750372008997x772099467722096600)",
    "notaFinal": 4.33,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,42\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(2* 4) )/12\nNota: 4,00\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 3)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,50\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,75",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0041",
    "slug": "rel-op-0534"
  },
  {
    "id": "rel_op_0535",
    "propostaNome": "See U(1747271412021x865596489359687700)",
    "notaFinal": 3.67,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((1* 5)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4)\n+(3* 4)\n+(2* 4) )/12\nNota: 4,17\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 5) )/12\nNota: 4,33\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(1* 2)\n+(1* 2)\n+(2* 4) )/12\nNota: 3,00\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,33\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 3)\n+(1* 5)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,50",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0535"
  },
  {
    "id": "rel_op_0536",
    "propostaNome": "Vitor Gabriel Silva de Lima(1749218056573x614755932894396400)",
    "notaFinal": 3.4,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,42\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 3)\n+(1* 5) )/12\nNota: 4,33\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 3)\n+(3* 4) )/12\nNota: 3,00\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 2)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,17\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 3)\n+(2* 1)\n+(1* 3)\n+(2* 5)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,08",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0536"
  },
  {
    "id": "rel_op_0537",
    "propostaNome": "Heyde Leão de Souza(1746707157949x895218344394752000)",
    "notaFinal": 3.98,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,67\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 2)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,42\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 4)\n+(2* 2)\n+(1* 2) )/12\nNota: 3,25\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,00",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0537"
  },
  {
    "id": "rel_op_0538",
    "propostaNome": "Synesthesia Vision (1747234890261x303493752378621950)",
    "notaFinal": 4.35,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,17\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 1) )/12\nNota: 4,08\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,92\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 5) )/12\nNota: 4,17\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0538"
  },
  {
    "id": "rel_op_0539",
    "propostaNome": "BOB(1747256813350x778000898229010400)",
    "notaFinal": 4.5,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,83\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 5,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 4)\n+(1* 5)\n+(2* 5)\n+(1* 4)\n+(2* 4)\n+(1* 4)\n+(3* 4) )/12\nNota: 4,25\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,92\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 1) )/12\nNota: 4,50",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0064",
    "slug": "rel-op-0539"
  },
  {
    "id": "rel_op_0540",
    "propostaNome": "Passo com Vos - Adapt-Free(1745634856585x832885378648637400)",
    "notaFinal": 3.15,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 3)\n+(2* 3)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,17\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,25\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((1* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 2)\n+(2* 1)\n+(3* 3) )/12\nNota: 3,58\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,58",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0540"
  },
  {
    "id": "rel_op_0541",
    "propostaNome": "VER-TI MOBILIDADE URBANA LTDA(1746297384978x444246789471338500)",
    "notaFinal": 2.62,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(1* 3)\n+(1* 4)\n+(2* 3) )/12\nNota: 3,75\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,25\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 2)\n+(3* 3) )/12\nNota: 2,58\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 2)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,92\nTIAGO MACEDO BEZERRA MAIA: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,58",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0541"
  },
  {
    "id": "rel_op_0542",
    "propostaNome": "ALEXANDRE GUEDES RIBEIRO(1743616040182x329049495127982100)",
    "notaFinal": 1,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((1* 1)\n+(1* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(2* 1)\n+(3* 1) )/12\nNota: 1,00\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTIAGO MACEDO BEZERRA MAIA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0542"
  },
  {
    "id": "rel_op_0543",
    "propostaNome": "Passo com Vos - Adapt-Free(1745634856585x832885378648637400)",
    "notaFinal": 3.15,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 3)\n+(2* 3)\n+(1* 4)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 3) )/12\nNota: 3,17\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,25\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((1* 5)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 2)\n+(2* 1)\n+(3* 3) )/12\nNota: 3,58\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,58",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0543"
  },
  {
    "id": "rel_op_0544",
    "propostaNome": "Synesthesia Vision (1747234890261x303493752378621950)",
    "notaFinal": 4.35,
    "criteriosENota": "OTO BUREGIO DE LIMA: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 3)\n+(2* 3)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,17\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 1) )/12\nNota: 4,08\nDALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 5)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,92\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4)\n+(3* 5) )/12\nNota: 4,17\nTIAGO MACEDO BEZERRA MAIA: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 5)\n+(1* 3) )/12\nNota: 4,42",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": null,
    "slug": "rel-op-0544"
  },
  {
    "id": "rel_op_0545",
    "propostaNome": "BoraVer(1750467696005x441635592284930050)",
    "notaFinal": 4.05,
    "criteriosENota": "DALMÁRIO JOSÉ LIMA DE BARROS SILVA NETO: ((3* 4)\n+(2* 5)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,67\nOTO BUREGIO DE LIMA: ((1* 5)\n+(2* 5)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 4)\n+(3* 4) )/12\nNota: 4,33\nTIAGO MACEDO BEZERRA MAIA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,67\nFERNANDO ANTONIO NUNES DE SOUZA: ((3* 4)\n+(2* 2)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 5) )/12\nNota: 3,83\nRAFAEL HENRIQUES PIMENTEL DE PAULA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75",
    "createdDate": "2025-07-10 09:25:00",
    "submissionId": "rel_prop_0013",
    "slug": "rel-op-0545"
  },
  {
    "id": "rel_op_0546",
    "propostaNome": "Cabueta(1750474717548x239448712580956160)",
    "notaFinal": 3.22,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,75\nANDRÉ LUIZ GALINDO DE BRITO: ((2* 4)\n+(3* 2)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,75\nTiago dos Santos Mendes: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 4)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,58\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(1* 4)\n+(2* 3)\n+(1* 3) )/12\nNota: 3,00",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0546"
  },
  {
    "id": "rel_op_0547",
    "propostaNome": "Cidade Science(1750469093364x881078442918936600)",
    "notaFinal": 3.18,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 5) )/12\nNota: 3,75\nANDRÉ LUIZ GALINDO DE BRITO: ((2* 2)\n+(1* 4)\n+(1* 5)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(3* 2) )/12\nNota: 3,25\nTiago dos Santos Mendes: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,50\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 4)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,08\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0547"
  },
  {
    "id": "rel_op_0548",
    "propostaNome": "Manacá Tecnologias Sociais(1750452512570x514699865063161860)",
    "notaFinal": 4.17,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,75\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,00\nTiago dos Santos Mendes: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 3) )/12\nNota: 3,50\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00\nViviane Kawashima: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0548"
  },
  {
    "id": "rel_op_0549",
    "propostaNome": "Cogfy (by Indigo Hive)(1747274257685x122816064052527100)",
    "notaFinal": 2.57,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,67\nTiago dos Santos Mendes: ((3* 3)\n+(2* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 1)\n+(1* 2) )/12\nNota: 2,92\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 2)\n+(2* 1)\n+(2* 1)\n+(1* 2)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,33\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,08\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,83",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0549"
  },
  {
    "id": "rel_op_0550",
    "propostaNome": "Nozes Geoinformações(1750375622115x563711854504050700)",
    "notaFinal": 2.87,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 2)\n+(1* 3)\n+(2* 5)\n+(2* 3)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,17\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 3)\n+(2* 2)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,25\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0550"
  },
  {
    "id": "rel_op_0551",
    "propostaNome": "Fluxo Livre(1747146234140x323187820117884900)",
    "notaFinal": 2.18,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 3,17\nTiago dos Santos Mendes: ((3* 2)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,75\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nViviane Kawashima: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,08",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": "rel_prop_0074",
    "slug": "rel-op-0551"
  },
  {
    "id": "rel_op_0552",
    "propostaNome": "Gilsoni Albino, Eloi Ronnau(1750296316999x874523258798211100)",
    "notaFinal": 3.32,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 3)\n+(3* 4)\n+(2* 3)\n+(1* 4) )/12\nNota: 3,92\nANDRÉ LUIZ GALINDO DE BRITO: ((2* 3)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 3)\n+(3* 3)\n+(1* 3) )/12\nNota: 3,50\nTiago dos Santos Mendes: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 3)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,58\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00\nViviane Kawashima: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,58",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0552"
  },
  {
    "id": "rel_op_0553",
    "propostaNome": "MIT SOLUÇÕES(1750279581521x145867723460575230)",
    "notaFinal": 1.1,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 3)\n+(1* 2) )/12\nNota: 1,50\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0553"
  },
  {
    "id": "rel_op_0554",
    "propostaNome": "RaiiF(1747181037225x426954338790801400)",
    "notaFinal": 2.92,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 5)\n+(3* 5) )/12\nNota: 4,75\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 2)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,50\nTiago dos Santos Mendes: ((3* 3)\n+(2* 1)\n+(1* 1)\n+(2* 3)\n+(2* 3)\n+(1* 1)\n+(1* 1) )/12\nNota: 2,17\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 1)\n+(1* 1)\n+(1* 2) )/12\nNota: 1,92\nViviane Kawashima: ((3* 3)\n+(2* 4)\n+(1* 1)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 1) )/12\nNota: 3,25",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0554"
  },
  {
    "id": "rel_op_0555",
    "propostaNome": "Gilsoni Albino, Eloi Ronnau(1750296316999x874523258798211100)",
    "notaFinal": 3.32,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 3)\n+(3* 4)\n+(2* 3)\n+(1* 4) )/12\nNota: 3,92\nANDRÉ LUIZ GALINDO DE BRITO: ((2* 3)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 3)\n+(3* 3)\n+(1* 3) )/12\nNota: 3,50\nTiago dos Santos Mendes: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 3)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,58\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00\nViviane Kawashima: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,58",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0555"
  },
  {
    "id": "rel_op_0556",
    "propostaNome": "TrackMe(1747344947024x807521408212533200)",
    "notaFinal": 2.18,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 3)\n+(2* 4)\n+(2* 5)\n+(1* 3)\n+(1* 2)\n+(1* 4) )/12\nNota: 3,33\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 2) )/12\nNota: 1,92\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,17\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,33\nViviane Kawashima: ((3* 2)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,17",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0556"
  },
  {
    "id": "rel_op_0557",
    "propostaNome": "Fluxo Livre(1747146234140x323187820117884900)",
    "notaFinal": 2.18,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 3,17\nTiago dos Santos Mendes: ((3* 2)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,75\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nViviane Kawashima: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,08",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": "rel_prop_0074",
    "slug": "rel-op-0557"
  },
  {
    "id": "rel_op_0558",
    "propostaNome": "Manacá Tecnologias Sociais(1750452512570x514699865063161860)",
    "notaFinal": 4.17,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,75\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,00\nTiago dos Santos Mendes: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 3) )/12\nNota: 3,50\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00\nViviane Kawashima: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0558"
  },
  {
    "id": "rel_op_0559",
    "propostaNome": "Nozes Geoinformações(1750375622115x563711854504050700)",
    "notaFinal": 2.87,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 2)\n+(1* 3)\n+(2* 5)\n+(2* 3)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,17\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 3)\n+(2* 2)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,25\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0559"
  },
  {
    "id": "rel_op_0560",
    "propostaNome": "QUALIPORT(1749432185417x683882622927503400)",
    "notaFinal": 3.63,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,17\nANDRÉ LUIZ GALINDO DE BRITO: ((2* 4)\n+(3* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,92\nTiago dos Santos Mendes: ((3* 3)\n+(2* 1)\n+(1* 1)\n+(2* 3)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 2,00\nViviane Kawashima: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 1) )/12\nNota: 4,33\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0560"
  },
  {
    "id": "rel_op_0561",
    "propostaNome": "Green Minot(1746474917318x165412545582333950)",
    "notaFinal": 1.13,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 2)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,67",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0561"
  },
  {
    "id": "rel_op_0562",
    "propostaNome": "TrackMe(1747344947024x807521408212533200)",
    "notaFinal": 2.18,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 3)\n+(2* 4)\n+(2* 5)\n+(1* 3)\n+(1* 2)\n+(1* 4) )/12\nNota: 3,33\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 2) )/12\nNota: 1,92\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,17\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,33\nViviane Kawashima: ((3* 2)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,17",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0562"
  },
  {
    "id": "rel_op_0563",
    "propostaNome": "ECOEDUCA(1743893027408x819035914347741200)",
    "notaFinal": 2.15,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,08\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 1)\n+(2* 4)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,58\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,33\nViviane Kawashima: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 2,58\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 2)\n+(1* 2) )/12\nNota: 1,17",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0563"
  },
  {
    "id": "rel_op_0564",
    "propostaNome": "LidEye(1744397193212x857900192720486400)",
    "notaFinal": 3.27,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 3)\n+(1* 4)\n+(2* 3)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,75\nANDRÉ LUIZ GALINDO DE BRITO: ((1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 3)\n+(3* 4)\n+(2* 4)\n+(1* 1) )/12\nNota: 3,83\nTiago dos Santos Mendes: ((3* 4)\n+(2* 1)\n+(1* 1)\n+(2* 3)\n+(2* 3)\n+(1* 1)\n+(1* 3) )/12\nNota: 2,58\nViviane Kawashima: ((3* 4)\n+(2* 5)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 5) )/12\nNota: 3,75\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 3)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,42",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0564"
  },
  {
    "id": "rel_op_0565",
    "propostaNome": "EcoSenso (1742767875585x681211700468252700)",
    "notaFinal": 1.03,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 2)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,17\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0565"
  },
  {
    "id": "rel_op_0566",
    "propostaNome": "ALEX MIQUEIAS BARBOSA DE SOUZA(1750474350032x203039135597330430)",
    "notaFinal": 3.28,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,75\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 4)\n+(2* 3)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,75\nTiago dos Santos Mendes: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,42\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,92",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0566"
  },
  {
    "id": "rel_op_0567",
    "propostaNome": "Radar Lixo Zero(1746941035333x838644430649426000)",
    "notaFinal": 2.93,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,08\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,92\nTiago dos Santos Mendes: ((3* 2)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 2)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,33\nViviane Kawashima: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,67\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 2)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,67",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0567"
  },
  {
    "id": "rel_op_0568",
    "propostaNome": "equipe 4 (inovação a engenharia)(1742423428232x561693473329643500)",
    "notaFinal": 1,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0568"
  },
  {
    "id": "rel_op_0569",
    "propostaNome": "Ecoboard (1742396587841x346059140321247200)",
    "notaFinal": 1,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0569"
  },
  {
    "id": "rel_op_0570",
    "propostaNome": "Radar Lixo Zero(1746941035333x838644430649426000)",
    "notaFinal": 2.93,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,08\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,92\nTiago dos Santos Mendes: ((3* 2)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 2)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,33\nViviane Kawashima: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,67\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 2)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,67",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0570"
  },
  {
    "id": "rel_op_0571",
    "propostaNome": "MIT SOLUÇÕES(1750279581521x145867723460575230)",
    "notaFinal": 1.1,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 3)\n+(1* 2) )/12\nNota: 1,50\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0571"
  },
  {
    "id": "rel_op_0572",
    "propostaNome": "ALEX MIQUEIAS BARBOSA DE SOUZA(1750474350032x203039135597330430)",
    "notaFinal": 3.28,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,75\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 4)\n+(2* 3)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,75\nTiago dos Santos Mendes: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,42\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,92",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0572"
  },
  {
    "id": "rel_op_0573",
    "propostaNome": "Confiança real(1743719132092x937650549396078600)",
    "notaFinal": 2.37,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,50\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 2)\n+(2* 2)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,58\nTiago dos Santos Mendes: ((3* 1)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 1) )/12\nNota: 1,75\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,83\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,17",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0573"
  },
  {
    "id": "rel_op_0574",
    "propostaNome": "QUALIPORT(1749432185417x683882622927503400)",
    "notaFinal": 3.63,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,17\nANDRÉ LUIZ GALINDO DE BRITO: ((2* 4)\n+(3* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,92\nTiago dos Santos Mendes: ((3* 3)\n+(2* 1)\n+(1* 1)\n+(2* 3)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 2,00\nViviane Kawashima: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 1) )/12\nNota: 4,33\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0574"
  },
  {
    "id": "rel_op_0575",
    "propostaNome": "RaiiF(1747181037225x426954338790801400)",
    "notaFinal": 2.92,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 5)\n+(3* 5) )/12\nNota: 4,75\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 2)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,50\nTiago dos Santos Mendes: ((3* 3)\n+(2* 1)\n+(1* 1)\n+(2* 3)\n+(2* 3)\n+(1* 1)\n+(1* 1) )/12\nNota: 2,17\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 1)\n+(1* 1)\n+(1* 2) )/12\nNota: 1,92\nViviane Kawashima: ((3* 3)\n+(2* 4)\n+(1* 1)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 1) )/12\nNota: 3,25",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0575"
  },
  {
    "id": "rel_op_0576",
    "propostaNome": "Time Integrado Governo Digital(1743428760246x239092809917267970)",
    "notaFinal": 2.88,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,83\nTiago dos Santos Mendes: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,50\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 1)\n+(2* 4)\n+(2* 5)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,25\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 4)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,83",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0576"
  },
  {
    "id": "rel_op_0577",
    "propostaNome": "seuzeh(1746021667074x722393361191796700)",
    "notaFinal": 2.92,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 5)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(1* 3)\n+(2* 4) )/12\nNota: 4,50\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,75\nTiago dos Santos Mendes: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,42\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 1) )/12\nNota: 3,08\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3)\n+(1* 4) )/12\nNota: 2,83",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0577"
  },
  {
    "id": "rel_op_0578",
    "propostaNome": "Cidade Science(1750469093364x881078442918936600)",
    "notaFinal": 3.18,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 5) )/12\nNota: 3,75\nANDRÉ LUIZ GALINDO DE BRITO: ((2* 2)\n+(1* 4)\n+(1* 5)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(3* 2) )/12\nNota: 3,25\nTiago dos Santos Mendes: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,50\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 4)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,08\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0578"
  },
  {
    "id": "rel_op_0579",
    "propostaNome": "seuzeh(1746021667074x722393361191796700)",
    "notaFinal": 2.92,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 5)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(1* 3)\n+(2* 4) )/12\nNota: 4,50\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,75\nTiago dos Santos Mendes: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,42\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 1) )/12\nNota: 3,08\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3)\n+(1* 4) )/12\nNota: 2,83",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0579"
  },
  {
    "id": "rel_op_0580",
    "propostaNome": "Green Minot(1746474917318x165412545582333950)",
    "notaFinal": 1.13,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 2)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,67",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0580"
  },
  {
    "id": "rel_op_0581",
    "propostaNome": "Cogfy (by Indigo Hive)(1747274257685x122816064052527100)",
    "notaFinal": 2.57,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,67\nTiago dos Santos Mendes: ((3* 3)\n+(2* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 1)\n+(1* 2) )/12\nNota: 2,92\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 2)\n+(2* 1)\n+(2* 1)\n+(1* 2)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,33\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,08\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,83",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0581"
  },
  {
    "id": "rel_op_0582",
    "propostaNome": "Eng Inova(1743340516550x123872810449502200)",
    "notaFinal": 1.88,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,58\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nViviane Kawashima: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,50\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 1)\n+(1* 2) )/12\nNota: 2,33",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0582"
  },
  {
    "id": "rel_op_0583",
    "propostaNome": "LidEye(1744397193212x857900192720486400)",
    "notaFinal": 3.27,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 3)\n+(1* 4)\n+(2* 3)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,75\nANDRÉ LUIZ GALINDO DE BRITO: ((1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 3)\n+(3* 4)\n+(2* 4)\n+(1* 1) )/12\nNota: 3,83\nTiago dos Santos Mendes: ((3* 4)\n+(2* 1)\n+(1* 1)\n+(2* 3)\n+(2* 3)\n+(1* 1)\n+(1* 3) )/12\nNota: 2,58\nViviane Kawashima: ((3* 4)\n+(2* 5)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 5) )/12\nNota: 3,75\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 3)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,42",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0583"
  },
  {
    "id": "rel_op_0584",
    "propostaNome": "ECOEDUCA(1743893027408x819035914347741200)",
    "notaFinal": 2.15,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,08\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 1)\n+(2* 4)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,58\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,33\nViviane Kawashima: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 2,58\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 2)\n+(1* 2) )/12\nNota: 1,17",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0584"
  },
  {
    "id": "rel_op_0585",
    "propostaNome": "ALEX MIQUEIAS BARBOSA DE SOUZA(1750474350032x203039135597330430)",
    "notaFinal": 3.28,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,75\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 4)\n+(2* 3)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,75\nTiago dos Santos Mendes: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,42\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,92",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0585"
  },
  {
    "id": "rel_op_0586",
    "propostaNome": "Cidade Science(1750469093364x881078442918936600)",
    "notaFinal": 3.18,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 5) )/12\nNota: 3,75\nANDRÉ LUIZ GALINDO DE BRITO: ((2* 2)\n+(1* 4)\n+(1* 5)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(3* 2) )/12\nNota: 3,25\nTiago dos Santos Mendes: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,50\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 4)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,08\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0586"
  },
  {
    "id": "rel_op_0587",
    "propostaNome": "Confiança real(1743719132092x937650549396078600)",
    "notaFinal": 2.37,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,50\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 2)\n+(2* 2)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,58\nTiago dos Santos Mendes: ((3* 1)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 1) )/12\nNota: 1,75\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,83\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,17",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0587"
  },
  {
    "id": "rel_op_0588",
    "propostaNome": "Gilsoni Albino, Eloi Ronnau(1750296316999x874523258798211100)",
    "notaFinal": 3.32,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 3)\n+(3* 4)\n+(2* 3)\n+(1* 4) )/12\nNota: 3,92\nANDRÉ LUIZ GALINDO DE BRITO: ((2* 3)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 3)\n+(3* 3)\n+(1* 3) )/12\nNota: 3,50\nTiago dos Santos Mendes: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 3)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,58\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00\nViviane Kawashima: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,58",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0588"
  },
  {
    "id": "rel_op_0589",
    "propostaNome": "Cabueta(1750474717548x239448712580956160)",
    "notaFinal": 3.22,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,75\nANDRÉ LUIZ GALINDO DE BRITO: ((2* 4)\n+(3* 2)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,75\nTiago dos Santos Mendes: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 4)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,58\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(1* 4)\n+(2* 3)\n+(1* 3) )/12\nNota: 3,00",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0589"
  },
  {
    "id": "rel_op_0590",
    "propostaNome": "Nozes Geoinformações(1750375622115x563711854504050700)",
    "notaFinal": 2.87,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 2)\n+(1* 3)\n+(2* 5)\n+(2* 3)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,17\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 3)\n+(2* 2)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,25\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0590"
  },
  {
    "id": "rel_op_0591",
    "propostaNome": "Cabueta(1750474717548x239448712580956160)",
    "notaFinal": 3.22,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,75\nANDRÉ LUIZ GALINDO DE BRITO: ((2* 4)\n+(3* 2)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,75\nTiago dos Santos Mendes: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 4)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,58\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(1* 4)\n+(2* 3)\n+(1* 3) )/12\nNota: 3,00",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0591"
  },
  {
    "id": "rel_op_0592",
    "propostaNome": "Manacá Tecnologias Sociais(1750452512570x514699865063161860)",
    "notaFinal": 4.17,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,75\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,00\nTiago dos Santos Mendes: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 3) )/12\nNota: 3,50\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00\nViviane Kawashima: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0592"
  },
  {
    "id": "rel_op_0593",
    "propostaNome": "QUALIPORT(1749432185417x683882622927503400)",
    "notaFinal": 3.63,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,17\nANDRÉ LUIZ GALINDO DE BRITO: ((2* 4)\n+(3* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,92\nTiago dos Santos Mendes: ((3* 3)\n+(2* 1)\n+(1* 1)\n+(2* 3)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 2,00\nViviane Kawashima: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 1) )/12\nNota: 4,33\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0593"
  },
  {
    "id": "rel_op_0594",
    "propostaNome": "MIT SOLUÇÕES(1750279581521x145867723460575230)",
    "notaFinal": 1.1,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 3)\n+(1* 2) )/12\nNota: 1,50\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0594"
  },
  {
    "id": "rel_op_0595",
    "propostaNome": "TrackMe(1747344947024x807521408212533200)",
    "notaFinal": 2.18,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 3)\n+(2* 4)\n+(2* 5)\n+(1* 3)\n+(1* 2)\n+(1* 4) )/12\nNota: 3,33\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 2) )/12\nNota: 1,92\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,17\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,33\nViviane Kawashima: ((3* 2)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,17",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0595"
  },
  {
    "id": "rel_op_0596",
    "propostaNome": "RaiiF(1747181037225x426954338790801400)",
    "notaFinal": 2.92,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 5)\n+(3* 5) )/12\nNota: 4,75\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 2)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,50\nTiago dos Santos Mendes: ((3* 3)\n+(2* 1)\n+(1* 1)\n+(2* 3)\n+(2* 3)\n+(1* 1)\n+(1* 1) )/12\nNota: 2,17\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 1)\n+(1* 1)\n+(1* 2) )/12\nNota: 1,92\nViviane Kawashima: ((3* 3)\n+(2* 4)\n+(1* 1)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 1) )/12\nNota: 3,25",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0596"
  },
  {
    "id": "rel_op_0597",
    "propostaNome": "Radar Lixo Zero(1746941035333x838644430649426000)",
    "notaFinal": 2.93,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,08\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,92\nTiago dos Santos Mendes: ((3* 2)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 2)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,33\nViviane Kawashima: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,67\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 2)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,67",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0597"
  },
  {
    "id": "rel_op_0598",
    "propostaNome": "Green Minot(1746474917318x165412545582333950)",
    "notaFinal": 1.13,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 2)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,67",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0598"
  },
  {
    "id": "rel_op_0599",
    "propostaNome": "Fluxo Livre(1747146234140x323187820117884900)",
    "notaFinal": 2.18,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 3,17\nTiago dos Santos Mendes: ((3* 2)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,75\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nViviane Kawashima: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,08",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": "rel_prop_0074",
    "slug": "rel-op-0599"
  },
  {
    "id": "rel_op_0600",
    "propostaNome": "Eng Inova(1743340516550x123872810449502200)",
    "notaFinal": 1.88,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,58\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nViviane Kawashima: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,50\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 1)\n+(1* 2) )/12\nNota: 2,33",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0600"
  },
  {
    "id": "rel_op_0601",
    "propostaNome": "Time Integrado Governo Digital(1743428760246x239092809917267970)",
    "notaFinal": 2.88,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,83\nTiago dos Santos Mendes: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,50\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 1)\n+(2* 4)\n+(2* 5)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,25\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 4)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,83",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0601"
  },
  {
    "id": "rel_op_0602",
    "propostaNome": "seuzeh(1746021667074x722393361191796700)",
    "notaFinal": 2.92,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 5)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(1* 3)\n+(2* 4) )/12\nNota: 4,50\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,75\nTiago dos Santos Mendes: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,42\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 1) )/12\nNota: 3,08\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3)\n+(1* 4) )/12\nNota: 2,83",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0602"
  },
  {
    "id": "rel_op_0603",
    "propostaNome": "EcoSenso (1742767875585x681211700468252700)",
    "notaFinal": 1.03,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 2)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,17\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0603"
  },
  {
    "id": "rel_op_0604",
    "propostaNome": "Cabueta(1750474717548x239448712580956160)",
    "notaFinal": 3.22,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,75\nANDRÉ LUIZ GALINDO DE BRITO: ((2* 4)\n+(3* 2)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,75\nTiago dos Santos Mendes: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 4)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,58\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(1* 4)\n+(2* 3)\n+(1* 3) )/12\nNota: 3,00",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0604"
  },
  {
    "id": "rel_op_0605",
    "propostaNome": "ALEX MIQUEIAS BARBOSA DE SOUZA(1750474350032x203039135597330430)",
    "notaFinal": 3.28,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,75\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 4)\n+(2* 3)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,75\nTiago dos Santos Mendes: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,42\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,92",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0605"
  },
  {
    "id": "rel_op_0606",
    "propostaNome": "Cidade Science(1750469093364x881078442918936600)",
    "notaFinal": 3.18,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 5) )/12\nNota: 3,75\nANDRÉ LUIZ GALINDO DE BRITO: ((2* 2)\n+(1* 4)\n+(1* 5)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(3* 2) )/12\nNota: 3,25\nTiago dos Santos Mendes: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,50\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 4)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,08\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0606"
  },
  {
    "id": "rel_op_0607",
    "propostaNome": "Nozes Geoinformações(1750375622115x563711854504050700)",
    "notaFinal": 2.87,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 2)\n+(1* 3)\n+(2* 5)\n+(2* 3)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,17\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 3)\n+(2* 2)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,25\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0607"
  },
  {
    "id": "rel_op_0608",
    "propostaNome": "LidEye(1744397193212x857900192720486400)",
    "notaFinal": 3.27,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 3)\n+(1* 4)\n+(2* 3)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,75\nANDRÉ LUIZ GALINDO DE BRITO: ((1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 3)\n+(3* 4)\n+(2* 4)\n+(1* 1) )/12\nNota: 3,83\nTiago dos Santos Mendes: ((3* 4)\n+(2* 1)\n+(1* 1)\n+(2* 3)\n+(2* 3)\n+(1* 1)\n+(1* 3) )/12\nNota: 2,58\nViviane Kawashima: ((3* 4)\n+(2* 5)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 5) )/12\nNota: 3,75\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 3)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,42",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0608"
  },
  {
    "id": "rel_op_0609",
    "propostaNome": "Manacá Tecnologias Sociais(1750452512570x514699865063161860)",
    "notaFinal": 4.17,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,75\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,00\nTiago dos Santos Mendes: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 3) )/12\nNota: 3,50\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00\nViviane Kawashima: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0609"
  },
  {
    "id": "rel_op_0610",
    "propostaNome": "MIT SOLUÇÕES(1750279581521x145867723460575230)",
    "notaFinal": 1.1,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 3)\n+(1* 2) )/12\nNota: 1,50\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0610"
  },
  {
    "id": "rel_op_0611",
    "propostaNome": "ECOEDUCA(1743893027408x819035914347741200)",
    "notaFinal": 2.15,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,08\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 1)\n+(2* 4)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,58\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,33\nViviane Kawashima: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 2,58\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 2)\n+(1* 2) )/12\nNota: 1,17",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0611"
  },
  {
    "id": "rel_op_0612",
    "propostaNome": "QUALIPORT(1749432185417x683882622927503400)",
    "notaFinal": 3.63,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,17\nANDRÉ LUIZ GALINDO DE BRITO: ((2* 4)\n+(3* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,92\nTiago dos Santos Mendes: ((3* 3)\n+(2* 1)\n+(1* 1)\n+(2* 3)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 2,00\nViviane Kawashima: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 1) )/12\nNota: 4,33\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0612"
  },
  {
    "id": "rel_op_0613",
    "propostaNome": "Ecoboard (1742396587841x346059140321247200)",
    "notaFinal": 1,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0613"
  },
  {
    "id": "rel_op_0614",
    "propostaNome": "Confiança real(1743719132092x937650549396078600)",
    "notaFinal": 2.37,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,50\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 2)\n+(2* 2)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,58\nTiago dos Santos Mendes: ((3* 1)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 1) )/12\nNota: 1,75\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,83\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,17",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0614"
  },
  {
    "id": "rel_op_0615",
    "propostaNome": "RaiiF(1747181037225x426954338790801400)",
    "notaFinal": 2.92,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 5)\n+(3* 5) )/12\nNota: 4,75\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 2)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,50\nTiago dos Santos Mendes: ((3* 3)\n+(2* 1)\n+(1* 1)\n+(2* 3)\n+(2* 3)\n+(1* 1)\n+(1* 1) )/12\nNota: 2,17\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 1)\n+(1* 1)\n+(1* 2) )/12\nNota: 1,92\nViviane Kawashima: ((3* 3)\n+(2* 4)\n+(1* 1)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 1) )/12\nNota: 3,25",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0615"
  },
  {
    "id": "rel_op_0616",
    "propostaNome": "Time Integrado Governo Digital(1743428760246x239092809917267970)",
    "notaFinal": 2.88,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,83\nTiago dos Santos Mendes: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,50\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 1)\n+(2* 4)\n+(2* 5)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,25\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 4)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,83",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0616"
  },
  {
    "id": "rel_op_0617",
    "propostaNome": "Cogfy (by Indigo Hive)(1747274257685x122816064052527100)",
    "notaFinal": 2.57,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,67\nTiago dos Santos Mendes: ((3* 3)\n+(2* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 1)\n+(1* 2) )/12\nNota: 2,92\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 2)\n+(2* 1)\n+(2* 1)\n+(1* 2)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,33\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,08\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,83",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0617"
  },
  {
    "id": "rel_op_0618",
    "propostaNome": "Cogfy (by Indigo Hive)(1747274257685x122816064052527100)",
    "notaFinal": 2.57,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,67\nTiago dos Santos Mendes: ((3* 3)\n+(2* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 1)\n+(1* 2) )/12\nNota: 2,92\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 2)\n+(2* 1)\n+(2* 1)\n+(1* 2)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,33\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,08\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,83",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0618"
  },
  {
    "id": "rel_op_0619",
    "propostaNome": "Fluxo Livre(1747146234140x323187820117884900)",
    "notaFinal": 2.18,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 3,17\nTiago dos Santos Mendes: ((3* 2)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,75\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nViviane Kawashima: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,08",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": "rel_prop_0074",
    "slug": "rel-op-0619"
  },
  {
    "id": "rel_op_0620",
    "propostaNome": "Green Minot(1746474917318x165412545582333950)",
    "notaFinal": 1.13,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 2)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,67",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0620"
  },
  {
    "id": "rel_op_0621",
    "propostaNome": "LidEye(1744397193212x857900192720486400)",
    "notaFinal": 3.27,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 3)\n+(1* 4)\n+(2* 3)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,75\nANDRÉ LUIZ GALINDO DE BRITO: ((1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 3)\n+(3* 4)\n+(2* 4)\n+(1* 1) )/12\nNota: 3,83\nTiago dos Santos Mendes: ((3* 4)\n+(2* 1)\n+(1* 1)\n+(2* 3)\n+(2* 3)\n+(1* 1)\n+(1* 3) )/12\nNota: 2,58\nViviane Kawashima: ((3* 4)\n+(2* 5)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 5) )/12\nNota: 3,75\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 3)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,42",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0621"
  },
  {
    "id": "rel_op_0622",
    "propostaNome": "Gilsoni Albino, Eloi Ronnau(1750296316999x874523258798211100)",
    "notaFinal": 3.32,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 3)\n+(3* 4)\n+(2* 3)\n+(1* 4) )/12\nNota: 3,92\nANDRÉ LUIZ GALINDO DE BRITO: ((2* 3)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 3)\n+(3* 3)\n+(1* 3) )/12\nNota: 3,50\nTiago dos Santos Mendes: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 3)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,58\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00\nViviane Kawashima: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,58",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0622"
  },
  {
    "id": "rel_op_0623",
    "propostaNome": "TrackMe(1747344947024x807521408212533200)",
    "notaFinal": 2.18,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 3)\n+(2* 4)\n+(2* 5)\n+(1* 3)\n+(1* 2)\n+(1* 4) )/12\nNota: 3,33\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 2) )/12\nNota: 1,92\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,17\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,33\nViviane Kawashima: ((3* 2)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,17",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0623"
  },
  {
    "id": "rel_op_0624",
    "propostaNome": "ECOEDUCA(1743893027408x819035914347741200)",
    "notaFinal": 2.15,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,08\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 1)\n+(2* 4)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,58\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,33\nViviane Kawashima: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 2,58\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 2)\n+(1* 2) )/12\nNota: 1,17",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0624"
  },
  {
    "id": "rel_op_0625",
    "propostaNome": "seuzeh(1746021667074x722393361191796700)",
    "notaFinal": 2.92,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 5)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(1* 3)\n+(2* 4) )/12\nNota: 4,50\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,75\nTiago dos Santos Mendes: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,42\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 1) )/12\nNota: 3,08\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3)\n+(1* 4) )/12\nNota: 2,83",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0625"
  },
  {
    "id": "rel_op_0626",
    "propostaNome": "Time Integrado Governo Digital(1743428760246x239092809917267970)",
    "notaFinal": 2.88,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,83\nTiago dos Santos Mendes: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,50\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 1)\n+(2* 4)\n+(2* 5)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,25\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 4)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,83",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0626"
  },
  {
    "id": "rel_op_0627",
    "propostaNome": "Eng Inova(1743340516550x123872810449502200)",
    "notaFinal": 1.88,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,58\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nViviane Kawashima: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,50\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 1)\n+(1* 2) )/12\nNota: 2,33",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0627"
  },
  {
    "id": "rel_op_0628",
    "propostaNome": "Radar Lixo Zero(1746941035333x838644430649426000)",
    "notaFinal": 2.93,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,08\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,92\nTiago dos Santos Mendes: ((3* 2)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 2)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,33\nViviane Kawashima: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,67\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 2)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,67",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0628"
  },
  {
    "id": "rel_op_0629",
    "propostaNome": "equipe 4 (inovação a engenharia)(1742423428232x561693473329643500)",
    "notaFinal": 1,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0629"
  },
  {
    "id": "rel_op_0630",
    "propostaNome": "Confiança real(1743719132092x937650549396078600)",
    "notaFinal": 2.37,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,50\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 2)\n+(2* 2)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,58\nTiago dos Santos Mendes: ((3* 1)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 1) )/12\nNota: 1,75\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,83\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,17",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0630"
  },
  {
    "id": "rel_op_0631",
    "propostaNome": "EcoSenso (1742767875585x681211700468252700)",
    "notaFinal": 1.03,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 2)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,17\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0631"
  },
  {
    "id": "rel_op_0632",
    "propostaNome": "equipe 4 (inovação a engenharia)(1742423428232x561693473329643500)",
    "notaFinal": 1,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0632"
  },
  {
    "id": "rel_op_0633",
    "propostaNome": "ALEX MIQUEIAS BARBOSA DE SOUZA(1750474350032x203039135597330430)",
    "notaFinal": 3.28,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,75\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 4)\n+(2* 3)\n+(1* 4)\n+(2* 5)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,75\nTiago dos Santos Mendes: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,42\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,58\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,92",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0633"
  },
  {
    "id": "rel_op_0634",
    "propostaNome": "Cabueta(1750474717548x239448712580956160)",
    "notaFinal": 3.22,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,75\nANDRÉ LUIZ GALINDO DE BRITO: ((2* 4)\n+(3* 2)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 3,75\nTiago dos Santos Mendes: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 4)\n+(2* 3)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 4) )/12\nNota: 3,58\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(1* 4)\n+(2* 3)\n+(1* 3) )/12\nNota: 3,00",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0634"
  },
  {
    "id": "rel_op_0635",
    "propostaNome": "MIT SOLUÇÕES(1750279581521x145867723460575230)",
    "notaFinal": 1.1,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 3)\n+(1* 2) )/12\nNota: 1,50\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0635"
  },
  {
    "id": "rel_op_0636",
    "propostaNome": "Cidade Science(1750469093364x881078442918936600)",
    "notaFinal": 3.18,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 5) )/12\nNota: 3,75\nANDRÉ LUIZ GALINDO DE BRITO: ((2* 2)\n+(1* 4)\n+(1* 5)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(3* 2) )/12\nNota: 3,25\nTiago dos Santos Mendes: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,50\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 4)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,08\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,33",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0636"
  },
  {
    "id": "rel_op_0637",
    "propostaNome": "Manacá Tecnologias Sociais(1750452512570x514699865063161860)",
    "notaFinal": 4.17,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 5)\n+(2* 5)\n+(1* 5)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 4) )/12\nNota: 4,75\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,00\nTiago dos Santos Mendes: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(1* 5)\n+(1* 3) )/12\nNota: 3,50\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00\nViviane Kawashima: ((3* 4)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(2* 5)\n+(1* 5)\n+(1* 5) )/12\nNota: 4,58",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0637"
  },
  {
    "id": "rel_op_0638",
    "propostaNome": "Gilsoni Albino, Eloi Ronnau(1750296316999x874523258798211100)",
    "notaFinal": 3.32,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 3)\n+(3* 4)\n+(2* 3)\n+(1* 4) )/12\nNota: 3,92\nANDRÉ LUIZ GALINDO DE BRITO: ((2* 3)\n+(2* 5)\n+(2* 3)\n+(1* 5)\n+(1* 3)\n+(3* 3)\n+(1* 3) )/12\nNota: 3,50\nTiago dos Santos Mendes: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 3)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,58\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00\nViviane Kawashima: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 1) )/12\nNota: 3,58",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0638"
  },
  {
    "id": "rel_op_0639",
    "propostaNome": "Nozes Geoinformações(1750375622115x563711854504050700)",
    "notaFinal": 2.87,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 2)\n+(1* 3)\n+(2* 5)\n+(2* 3)\n+(1* 4)\n+(1* 2) )/12\nNota: 3,17\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 3)\n+(2* 2)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,25\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0639"
  },
  {
    "id": "rel_op_0640",
    "propostaNome": "EcoSenso (1742767875585x681211700468252700)",
    "notaFinal": 1.03,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 2)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,17\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0640"
  },
  {
    "id": "rel_op_0641",
    "propostaNome": "TrackMe(1747344947024x807521408212533200)",
    "notaFinal": 2.18,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 3)\n+(2* 4)\n+(2* 5)\n+(1* 3)\n+(1* 2)\n+(1* 4) )/12\nNota: 3,33\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 2) )/12\nNota: 1,92\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,17\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,33\nViviane Kawashima: ((3* 2)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,17",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0641"
  },
  {
    "id": "rel_op_0642",
    "propostaNome": "Eng Inova(1743340516550x123872810449502200)",
    "notaFinal": 1.88,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,58\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nViviane Kawashima: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,50\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 1)\n+(1* 2) )/12\nNota: 2,33",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0642"
  },
  {
    "id": "rel_op_0643",
    "propostaNome": "Ecoboard (1742396587841x346059140321247200)",
    "notaFinal": 1,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0643"
  },
  {
    "id": "rel_op_0644",
    "propostaNome": "Cogfy (by Indigo Hive)(1747274257685x122816064052527100)",
    "notaFinal": 2.57,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 3)\n+(1* 2)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,67\nTiago dos Santos Mendes: ((3* 3)\n+(2* 3)\n+(2* 4)\n+(2* 3)\n+(1* 3)\n+(1* 1)\n+(1* 2) )/12\nNota: 2,92\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 2)\n+(2* 1)\n+(2* 1)\n+(1* 2)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,33\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,08\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 3)\n+(1* 3)\n+(1* 1) )/12\nNota: 2,83",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0644"
  },
  {
    "id": "rel_op_0645",
    "propostaNome": "Fluxo Livre(1747146234140x323187820117884900)",
    "notaFinal": 2.18,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,92\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 3,17\nTiago dos Santos Mendes: ((3* 2)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,75\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nViviane Kawashima: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,08",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": "rel_prop_0074",
    "slug": "rel-op-0645"
  },
  {
    "id": "rel_op_0646",
    "propostaNome": "Ecoboard (1742396587841x346059140321247200)",
    "notaFinal": 1,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0646"
  },
  {
    "id": "rel_op_0647",
    "propostaNome": "equipe 4 (inovação a engenharia)(1742423428232x561693473329643500)",
    "notaFinal": 1,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0647"
  },
  {
    "id": "rel_op_0648",
    "propostaNome": "Green Minot(1746474917318x165412545582333950)",
    "notaFinal": 1.13,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 2)\n+(2* 1)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,67",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0648"
  },
  {
    "id": "rel_op_0649",
    "propostaNome": "Radar Lixo Zero(1746941035333x838644430649426000)",
    "notaFinal": 2.93,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,08\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,92\nTiago dos Santos Mendes: ((3* 2)\n+(2* 2)\n+(1* 3)\n+(2* 3)\n+(2* 2)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,33\nViviane Kawashima: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,67\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 2)\n+(1* 3)\n+(2* 2)\n+(2* 3)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,67",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0649"
  },
  {
    "id": "rel_op_0650",
    "propostaNome": "Time Integrado Governo Digital(1743428760246x239092809917267970)",
    "notaFinal": 2.88,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 4) )/12\nNota: 4,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 2)\n+(2* 3)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,83\nTiago dos Santos Mendes: ((3* 1)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,50\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 1)\n+(2* 4)\n+(2* 5)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,25\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 4)\n+(1* 2)\n+(2* 2)\n+(2* 3)\n+(1* 2)\n+(1* 3) )/12\nNota: 2,83",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0650"
  },
  {
    "id": "rel_op_0651",
    "propostaNome": "ECOEDUCA(1743893027408x819035914347741200)",
    "notaFinal": 2.15,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 3)\n+(1* 2) )/12\nNota: 3,08\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 1)\n+(2* 4)\n+(1* 2)\n+(1* 1) )/12\nNota: 2,58\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 2)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,33\nViviane Kawashima: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 4)\n+(1* 3) )/12\nNota: 2,58\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 2)\n+(1* 2) )/12\nNota: 1,17",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0651"
  },
  {
    "id": "rel_op_0652",
    "propostaNome": "QUALIPORT(1749432185417x683882622927503400)",
    "notaFinal": 3.63,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 4)\n+(1* 3)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 4,17\nANDRÉ LUIZ GALINDO DE BRITO: ((2* 4)\n+(3* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,92\nTiago dos Santos Mendes: ((3* 3)\n+(2* 1)\n+(1* 1)\n+(2* 3)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 2,00\nViviane Kawashima: ((3* 5)\n+(2* 4)\n+(1* 4)\n+(2* 5)\n+(2* 5)\n+(1* 4)\n+(1* 1) )/12\nNota: 4,33\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 4)\n+(1* 4)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 4) )/12\nNota: 3,75",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0652"
  },
  {
    "id": "rel_op_0653",
    "propostaNome": "RaiiF(1747181037225x426954338790801400)",
    "notaFinal": 2.92,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((2* 5)\n+(1* 4)\n+(2* 4)\n+(2* 5)\n+(1* 5)\n+(1* 5)\n+(3* 5) )/12\nNota: 4,75\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 2)\n+(1* 3)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 3) )/12\nNota: 2,50\nTiago dos Santos Mendes: ((3* 3)\n+(2* 1)\n+(1* 1)\n+(2* 3)\n+(2* 3)\n+(1* 1)\n+(1* 1) )/12\nNota: 2,17\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 2)\n+(2* 1)\n+(1* 1)\n+(1* 2) )/12\nNota: 1,92\nViviane Kawashima: ((3* 3)\n+(2* 4)\n+(1* 1)\n+(2* 4)\n+(2* 4)\n+(1* 4)\n+(1* 1) )/12\nNota: 3,25",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0653"
  },
  {
    "id": "rel_op_0654",
    "propostaNome": "Confiança real(1743719132092x937650549396078600)",
    "notaFinal": 2.37,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 4)\n+(1* 3)\n+(2* 4)\n+(2* 4)\n+(1* 3)\n+(1* 3) )/12\nNota: 3,50\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 2)\n+(2* 2)\n+(1* 3)\n+(2* 2)\n+(2* 4)\n+(1* 2)\n+(1* 4) )/12\nNota: 2,58\nTiago dos Santos Mendes: ((3* 1)\n+(2* 2)\n+(1* 2)\n+(2* 2)\n+(2* 2)\n+(1* 3)\n+(1* 1) )/12\nNota: 1,75\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,83\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 2)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,17",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0654"
  },
  {
    "id": "rel_op_0655",
    "propostaNome": "LidEye(1744397193212x857900192720486400)",
    "notaFinal": 3.27,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 4)\n+(2* 3)\n+(1* 4)\n+(2* 3)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,75\nANDRÉ LUIZ GALINDO DE BRITO: ((1* 4)\n+(2* 5)\n+(2* 4)\n+(1* 3)\n+(3* 4)\n+(2* 4)\n+(1* 1) )/12\nNota: 3,83\nTiago dos Santos Mendes: ((3* 4)\n+(2* 1)\n+(1* 1)\n+(2* 3)\n+(2* 3)\n+(1* 1)\n+(1* 3) )/12\nNota: 2,58\nViviane Kawashima: ((3* 4)\n+(2* 5)\n+(1* 2)\n+(2* 4)\n+(2* 3)\n+(1* 2)\n+(1* 5) )/12\nNota: 3,75\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 2)\n+(1* 1)\n+(2* 3)\n+(2* 2)\n+(1* 3)\n+(1* 2) )/12\nNota: 2,42",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0655"
  },
  {
    "id": "rel_op_0656",
    "propostaNome": "equipe 4 (inovação a engenharia)(1742423428232x561693473329643500)",
    "notaFinal": 1,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0656"
  },
  {
    "id": "rel_op_0657",
    "propostaNome": "seuzeh(1746021667074x722393361191796700)",
    "notaFinal": 2.92,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 5)\n+(2* 4)\n+(1* 5)\n+(2* 5)\n+(1* 5)\n+(1* 3)\n+(2* 4) )/12\nNota: 4,50\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 4)\n+(1* 2)\n+(1* 2) )/12\nNota: 2,75\nTiago dos Santos Mendes: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,42\nViviane Kawashima: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 3)\n+(2* 4)\n+(1* 4)\n+(1* 1) )/12\nNota: 3,08\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 2)\n+(2* 3)\n+(2* 3)\n+(1* 2)\n+(1* 3)\n+(1* 4) )/12\nNota: 2,83",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0657"
  },
  {
    "id": "rel_op_0658",
    "propostaNome": "Eng Inova(1743340516550x123872810449502200)",
    "notaFinal": 1.88,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 3)\n+(2* 3)\n+(1* 3)\n+(2* 4)\n+(2* 5)\n+(1* 4)\n+(1* 3) )/12\nNota: 3,58\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nViviane Kawashima: ((3* 2)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 2)\n+(1* 2)\n+(1* 1) )/12\nNota: 1,50\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 3)\n+(2* 2)\n+(1* 2)\n+(2* 3)\n+(2* 2)\n+(1* 1)\n+(1* 2) )/12\nNota: 2,33",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0658"
  },
  {
    "id": "rel_op_0659",
    "propostaNome": "Ecoboard (1742396587841x346059140321247200)",
    "notaFinal": 1,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0659"
  },
  {
    "id": "rel_op_0660",
    "propostaNome": "EcoSenso (1742767875585x681211700468252700)",
    "notaFinal": 1.03,
    "criteriosENota": "ANA CAROLINA ALVES BREDA: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nTiago dos Santos Mendes: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nANDRÉ LUIZ GALINDO DE BRITO: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 2)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,17\nViviane Kawashima: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00\nDIOGO HENRIQUE FERNANDES DA PAZ: ((3* 1)\n+(2* 1)\n+(1* 1)\n+(2* 1)\n+(2* 1)\n+(1* 1)\n+(1* 1) )/12\nNota: 1,00",
    "createdDate": "2025-07-10 11:48:00",
    "submissionId": null,
    "slug": "rel-op-0660"
  }
]

// Quick Lookups
export const EITA_SUBMISSIONS_BY_ID: Record<string, EitaSubmission> = Object.fromEntries(
  EITA_SUBMISSIONS.map(s => [s.id, s])
)

export const EITA_EVALUATIONS_BY_ID: Record<string, EitaMentorEvaluation> = Object.fromEntries(
  EITA_MENTOR_EVALUATIONS.map(e => [e.id, e])
)

export const EITA_OPERATIONS_BY_ID: Record<string, EitaCommitteeOperation> = Object.fromEntries(
  EITA_COMMITTEE_OPERATIONS.map(o => [o.id, o])
)

// Helper: Export to CSV (UTF-8 BOM for Excel compatibility)
export function exportToCSV(filename: string, rows: any[], columnMap: Record<string, string>) {
  if (!rows || rows.length === 0) return
  const headers = Object.values(columnMap)
  const keys = Object.keys(columnMap)

  const csvRows = [
    headers.map(h => `"${h.replace(/"/g, '""')}"`).join(';')
  ]

  rows.forEach(row => {
    const values = keys.map(k => {
      let val = row[k]
      if (val === null || val === undefined) return '""'
      if (Array.isArray(val)) return `"${val.join(', ').replace(/"/g, '""')}"`
      if (typeof val === 'boolean') return val ? '"Sim"' : '"Não"'
      return `"${String(val).replace(/"/g, '""')}"`
    })
    csvRows.push(values.join(';'))
  })

  const csvContent = '\uFEFF' + csvRows.join('\r\n')
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.setAttribute('href', url)
  link.setAttribute('download', `${filename}_${new Date().toISOString().slice(0, 10)}.csv`)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

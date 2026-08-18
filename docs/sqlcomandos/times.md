### 1. Mapeamento de Colunas (CSV Bubble $\rightarrow$ SQL)

| Coluna no CSV (Bubble) | Coluna na Tabela SQL | Tipo SQL | Tratamento Realizado |
| :--- | :--- | :--- | :--- |
| `dedicacao` | `"dedicacao"` | `VARCHAR(255)` | Dedicação (ex: Integral, Parcial) |
| `email` | `"email"` | `VARCHAR(255)` | E-mail do integrante |
| `Nome` | `"Nome"` | `VARCHAR(255)` | Nome do membro do time |
| `papel` | `"papel"` | `VARCHAR(255)` | Cargo / Papel na equipe |
| `proposta-nit` | `"proposta_nit"` | `VARCHAR(255)` | Vínculo com a proposta NIT |
| `Startup` | `"Startup"` | `VARCHAR(255)` | Vínculo com a Startup / Iniciativa |
| `usuario` | `"usuario"` | `VARCHAR(255)` | E-mail / Identificador do usuário |

---

### 2. DDL - Criação da Tabela `Time`

```sql
CREATE TABLE IF NOT EXISTS "Time" (
  "id" VARCHAR(255) PRIMARY KEY,
  "dedicacao" VARCHAR(255),
  "email" VARCHAR(255),
  "Nome" VARCHAR(255),
  "papel" VARCHAR(255),
  "proposta_nit" VARCHAR(255),
  "proposta_nit_id" VARCHAR(255),
  "Startup" VARCHAR(255),
  "Startup_id" VARCHAR(255),
  "usuario" VARCHAR(255),
  "usuario_id" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);
```

---

### 3. DML - Script de Inserção de todos os 816 Registros

```sql
INSERT INTO "Time" (
  "id",
  "dedicacao",
  "email",
  "Nome",
  "papel",
  "proposta_nit",
  "Startup",
  "usuario",
  "slug"
)
VALUES
  ('time_import_0001', 'Parcial', NULL, NULL, NULL, NULL, NULL, 'rafael.toscano@recife.pe.gov.br', 'time-import-0001'),
  ('time_import_0002', NULL, NULL, NULL, NULL, NULL, NULL, 'rafael.toscano@recife.pe.gov.br', 'time-import-0002'),
  ('time_import_0003', 'Parcial', NULL, NULL, 'Co-fundador', NULL, NULL, NULL, 'time-import-0003'),
  ('time_import_0004', 'Integral', NULL, NULL, 'CEO e Ciêntista de Dados', NULL, NULL, NULL, 'time-import-0004'),
  ('time_import_0005', 'Integral', NULL, NULL, 'Sou o responsável por tecnologias inovadoras na área de automação e controle', NULL, 'Add+Health', 'pauloneto2001@gmail.com', 'time-import-0005'),
  ('time_import_0006', NULL, NULL, NULL, NULL, NULL, NULL, 'pauloneto2001@gmail.com', 'time-import-0006'),
  ('time_import_0007', 'Parcial', NULL, NULL, 'Founder/CEO', NULL, NULL, 'jeniffermml@gmail.com', 'time-import-0007'),
  ('time_import_0008', 'Integral', NULL, NULL, 'CEO', NULL, 'Galvão Soluções Empresariais', 'geysakarlagalvao@gmail.com', 'time-import-0008'),
  ('time_import_0009', 'Integral', NULL, NULL, 'CEO Fundador', NULL, 'MSA soluções', 'projetpemarcos@gmail.com', 'time-import-0009'),
  ('time_import_0010', 'Parcial', NULL, NULL, 'CEO', NULL, NULL, '28jessica@gmail.com', 'time-import-0010'),
  ('time_import_0011', 'Parcial', 'jessica.sena@evastrategy.com', 'Jessica Sena', 'CEO', NULL, NULL, NULL, 'time-import-0011'),
  ('time_import_0012', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0012'),
  ('time_import_0013', 'Integral', NULL, NULL, NULL, NULL, NULL, 'pauloantonioacarvalho@gmail.com', 'time-import-0013'),
  ('time_import_0014', 'Integral', NULL, NULL, 'Head of Marketing & Sales', NULL, NULL, 'pauloantonioacarvalho@gmail.com', 'time-import-0014'),
  ('time_import_0015', 'Integral', NULL, NULL, 'Head of Marketing & Sales', NULL, 'Pague Bem Brasil', 'pauloantonioacarvalho@gmail.com', 'time-import-0015'),
  ('time_import_0016', 'Integral', NULL, NULL, 'Head of Marketing & Sales', NULL, NULL, 'pauloantonioacarvalho@gmail.com', 'time-import-0016'),
  ('time_import_0017', 'Integral', 'alvaro@paguebembrasil.com.br', 'Álvaro Leal (Alvinho)', 'CEO', NULL, NULL, NULL, 'time-import-0017'),
  ('time_import_0018', 'Integral', 'alvaro@paguebembrasil.com.br', 'Álvaro Leal (Alvinho)', 'CEO', NULL, NULL, NULL, 'time-import-0018'),
  ('time_import_0019', 'Integral', 'alvaro@paguebembrasil.com.br', 'Álvaro Leal (Alvinho)', 'CEO', NULL, NULL, NULL, 'time-import-0019'),
  ('time_import_0020', 'Parcial', NULL, NULL, 'CEO', NULL, 'WEBSOFT', 'isabelagaya@hotmail.com', 'time-import-0020'),
  ('time_import_0021', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0021'),
  ('time_import_0022', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0022'),
  ('time_import_0023', NULL, NULL, NULL, NULL, NULL, NULL, 'pedro.dhalia@gmail.com', 'time-import-0023'),
  ('time_import_0024', NULL, NULL, NULL, NULL, NULL, NULL, 'pedro.dhalia@gmail.com', 'time-import-0024'),
  ('time_import_0025', NULL, NULL, NULL, NULL, NULL, NULL, 'pedro.dhalia@gmail.com', 'time-import-0025'),
  ('time_import_0026', NULL, NULL, NULL, NULL, NULL, NULL, 'pedro.dhalia@gmail.com', 'time-import-0026'),
  ('time_import_0027', NULL, NULL, NULL, NULL, NULL, NULL, 'pedro.dhalia@gmail.com', 'time-import-0027'),
  ('time_import_0028', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0028'),
  ('time_import_0029', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0029'),
  ('time_import_0030', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0030'),
  ('time_import_0031', NULL, NULL, NULL, NULL, NULL, NULL, 'pedro.dhalia@gmail.com', 'time-import-0031'),
  ('time_import_0032', NULL, NULL, NULL, NULL, NULL, NULL, 'pedro.dhalia@gmail.com', 'time-import-0032'),
  ('time_import_0033', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0033'),
  ('time_import_0034', NULL, NULL, NULL, NULL, NULL, NULL, 'gabrielchamie@gmail.com', 'time-import-0034'),
  ('time_import_0035', NULL, NULL, NULL, NULL, NULL, NULL, 'gabrielchamie@gmail.com', 'time-import-0035'),
  ('time_import_0036', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0036'),
  ('time_import_0037', NULL, NULL, NULL, NULL, NULL, NULL, 'gabrielchamie@gmail.com', 'time-import-0037'),
  ('time_import_0038', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0038'),
  ('time_import_0039', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0039'),
  ('time_import_0040', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0040'),
  ('time_import_0041', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0041'),
  ('time_import_0042', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0042'),
  ('time_import_0043', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0043'),
  ('time_import_0044', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0044'),
  ('time_import_0045', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0045'),
  ('time_import_0046', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0046'),
  ('time_import_0047', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0047'),
  ('time_import_0048', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0048'),
  ('time_import_0049', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0049'),
  ('time_import_0050', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0050'),
  ('time_import_0051', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0051'),
  ('time_import_0052', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0052'),
  ('time_import_0053', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0053'),
  ('time_import_0054', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0054'),
  ('time_import_0055', NULL, NULL, NULL, NULL, NULL, NULL, 'pedro.dhalia@gmail.com', 'time-import-0055'),
  ('time_import_0056', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0056'),
  ('time_import_0057', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0057'),
  ('time_import_0058', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0058'),
  ('time_import_0059', NULL, NULL, NULL, NULL, NULL, NULL, 'pedro.dhalia@gmail.com', 'time-import-0059'),
  ('time_import_0060', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0060'),
  ('time_import_0061', NULL, NULL, NULL, NULL, NULL, NULL, 'pedro.dhalia@gmail.com', 'time-import-0061'),
  ('time_import_0062', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0062'),
  ('time_import_0063', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0063'),
  ('time_import_0064', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0064'),
  ('time_import_0065', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0065'),
  ('time_import_0066', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0066'),
  ('time_import_0067', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0067'),
  ('time_import_0068', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0068'),
  ('time_import_0069', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0069'),
  ('time_import_0070', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0070'),
  ('time_import_0071', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0071'),
  ('time_import_0072', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0072'),
  ('time_import_0073', NULL, NULL, NULL, NULL, NULL, NULL, 'pedro.dhalia@gmail.com', 'time-import-0073'),
  ('time_import_0074', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0074'),
  ('time_import_0075', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0075'),
  ('time_import_0076', NULL, NULL, NULL, NULL, NULL, NULL, 'pedro.dhalia@gmail.com', 'time-import-0076'),
  ('time_import_0077', NULL, NULL, NULL, NULL, NULL, NULL, 'pedro.dhalia@gmail.com', 'time-import-0077'),
  ('time_import_0078', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0078'),
  ('time_import_0079', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0079'),
  ('time_import_0080', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0080'),
  ('time_import_0081', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0081'),
  ('time_import_0082', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0082'),
  ('time_import_0083', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0083'),
  ('time_import_0084', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0084'),
  ('time_import_0085', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0085'),
  ('time_import_0086', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0086'),
  ('time_import_0087', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0087'),
  ('time_import_0088', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0088'),
  ('time_import_0089', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0089'),
  ('time_import_0090', NULL, NULL, NULL, NULL, NULL, 'Studio Daus', NULL, 'time-import-0090'),
  ('time_import_0091', 'Integral', 'jorgesalvador.arqdev@gmail.com', 'JORGE ALEXANDRE SALVADOR DE ALCANTARA FILHO', 'Líder de Produto
Desenvolvimento Full Stack', NULL, 'InSpace', 'jorgesalvador.arqdev@gmail.com', 'time-import-0091'),
  ('time_import_0092', 'Integral', 'gustavo@inspace.tech', 'Gustavo Camargo', 'CEO', NULL, 'InSpace', NULL, 'time-import-0092'),
  ('time_import_0093', NULL, NULL, NULL, NULL, NULL, NULL, 'danilonovelino@gmail.com', 'time-import-0093'),
  ('time_import_0094', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0094'),
  ('time_import_0095', 'Parcial', NULL, NULL, 'CEO', NULL, 'Portas Psi', 'lucasgpessoa11@hotmail.com', 'time-import-0095'),
  ('time_import_0096', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0096'),
  ('time_import_0097', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0097'),
  ('time_import_0098', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0098'),
  ('time_import_0099', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0099'),
  ('time_import_0100', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0100'),
  ('time_import_0101', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0101'),
  ('time_import_0102', 'Integral', NULL, NULL, 'CEO - Dentre minhas atribuições inclui-se:
1. Definição da Visão e Estratégia: Responsável por definir a visão de longo prazo da empresa e desenvolver estratégias para alcançar os objetivos organizacionais.
2. Liderança Executiva: Liderar a equipe executiva da empresa e supervisionar todas as áreas funcionais, como operações, finanças, marketing, recursos humanos, entre outras.
3. Tomada de Decisões Estratégicas: Tomar decisões de alto nível que afetam diretamente o rumo e o desempenho da empresa, como fusões e aquisições, expansões de mercado, lançamento de novos produtos e mudanças organizacionais.
4. Representação Externa: Representa a empresa em eventos públicos, reuniões com investidores, conferências da indústria e negociações com parceiros comerciais, clientes e órgãos reguladores.
5. Gestão de Riscos e Compliance: Responsável por identificar e gerenciar os riscos que afetam a empresa, bem como garantir que a empresa esteja em conformidade com todas as leis e regulamentos aplicáveis.
6. Cultura Organizacional: Desempenha um papel na criação e manutenção de uma cultura organizacional positiva e produtiva, que promova a inovação, a colaboração e o compromisso dos funcionários.
7. Desenvolvimento de Talentos: Responsável por atrair, desenvolver e reter talentos chave na empresa, garantindo que a equipe executiva e os líderes de departamento tenham as habilidades e competências necessárias para alcançar os objetivos estratégicos da organização.', NULL, 'BIOTEC TECNOLOGIA E INOVAÇÕES', 'santulla.carvalho@gmail.com', 'time-import-0102'),
  ('time_import_0103', 'Parcial', 'o.adilson97@gmail.com', 'Adilson De Oliveira Gonçalves do Nascimento', 'Dentre suas atribuições inclui-se:
1. Gestão Operacional: Responsável por supervisionar todas as operações diárias da empresa, garantindo que os processos e procedimentos estejam funcionando de maneira eficiente e eficaz.
2. Implementação da Estratégia: Estreita a colaboração com o CEO, o COO é responsável por implementar a estratégia definida pela alta administração, traduzindo-a em planos operacionais concretos e garantindo sua execução bem-sucedida.
3. Melhoria de Processos: Liderar iniciativas de melhoria contínua e otimização de processos, buscando constantemente maneiras de aumentar a eficiência operacional, reduzir custos e melhorar a qualidade dos produtos ou serviços.
4. Gestão de Recursos Humanos: Supervisionar funções de recursos humanos da empresa, garantindo que a organização tenha a força de trabalho certa, com as habilidades e competências necessárias para alcançar os objetivos operacionais e estratégicos.
5. Gestão de Pessoas e Equipes: Liderar e motivar as equipes operacionais, garantindo que todos os membros da equipe estejam alinhados com os objetivos organizacionais e trabalhem de forma colaborativa para alcançá-los.
6. Gestão de Riscos e Compliance: Responsável por identificar e gerenciar os riscos operacionais que afetam a empresa, garantindo que todos os processos e operações estejam em conformidade com as leis, regulamentos e padrões da indústria aplicáveis.
7. Planejamento e Orçamento: Participar do processo de planejamento estratégico e desenvolvimento orçamentário, garantindo que os recursos
operacionais sejam alocados de maneira eficaz para alcançar os objetivos da empresa.', NULL, 'BIOTEC TECNOLOGIA E INOVAÇÕES', NULL, 'time-import-0103'),
  ('time_import_0104', 'Integral', NULL, NULL, 'CEO', NULL, 'Íris Biotec', 'plpl1296@gmail.com', 'time-import-0104'),
  ('time_import_0105', 'Integral', NULL, NULL, 'CEO - Gestão de projeto e gestão administrativa', NULL, 'Move''s', 'pammelasantos@hotmail.com', 'time-import-0105'),
  ('time_import_0106', 'Integral', NULL, NULL, 'CEO, atuo na gestão e fomento do relacionamento com stakeholders externos, como clientes, parceiros e ecossistemas de inovação.', NULL, 'Souv', 'antonio@souv.tech', 'time-import-0106'),
  ('time_import_0107', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0107'),
  ('time_import_0108', 'Parcial', NULL, NULL, 'Como CEO de uma startup de pesquisa em sinais, séries temporais e análises preditivas, lidero a inovação no uso de IA e estatística para modelagem de dados. Defino a estratégia, gerencio equipes especializadas e desenvolvo soluções escaláveis. Busco parcerias, financiamento e aplico métodos preditivos com ética e transparência. Meu foco é transformar pesquisa em impacto real, posicionando nossa startup como referência no mercado.', NULL, 'Signal Research', 'rafaeltoscano.cbtu@gmail.com', 'time-import-0108'),
  ('time_import_0109', NULL, NULL, 'Fabiana Holanda', NULL, NULL, 'Matech', NULL, 'time-import-0109'),
  ('time_import_0110', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0110'),
  ('time_import_0111', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0111'),
  ('time_import_0112', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0112'),
  ('time_import_0113', 'Integral', NULL, NULL, 'Diretor', NULL, NULL, 'nadodk@gmail.com', 'time-import-0113'),
  ('time_import_0114', 'Integral', 'ruda_fernandes@hotmail.com', 'RUDA FERNANDES BRANDAO SANTOS', 'CEO da Biofábrica de Corais', NULL, 'Biofábrica de Corais', 'ruda_fernandes@hotmail.com', 'time-import-0114'),
  ('time_import_0115', 'Total', NULL, 'Renata Thays Guedes Gonçalves', 'Comunicação e Divulgação', NULL, 'Ecoboard', NULL, 'time-import-0115'),
  ('time_import_0116', 'Total', 'Bruno.romelson@gmail.com', 'Bruno romelson do Amaral Valois', 'Coordenador do projeto', NULL, 'Ecoboard', NULL, 'time-import-0116'),
  ('time_import_0117', 'Total', 'annadepaula313@gmail.com', 'Anna Clara Barbosa de Paula', 'Designer e prototipagem', NULL, 'Ecoboard', NULL, 'time-import-0117'),
  ('time_import_0118', 'Total', 'julio.pinti0007@gmail.com', 'Júlio Pinto dos santos filho', 'Coordenador do projeto', NULL, 'Ecoboard', NULL, 'time-import-0118'),
  ('time_import_0119', 'Total', 'andressak968@gmail.com', 'Andressa Kelly do Nascimento', 'Pesquisa e sustentabilidade', NULL, 'Ecoboard', NULL, 'time-import-0119'),
  ('time_import_0120', 'Total', 'rafaelnarvinho@gmail.com', 'Rafael Alves Silva dos santos', 'Produção e montagem', NULL, 'Ecoboard', NULL, 'time-import-0120'),
  ('time_import_0121', 'Total', 'mateus.ferreirinha123@hotmail.com', 'Mateus Ferreira Lima de Assunção', 'Produção e montagem', NULL, 'Ecoboard', NULL, 'time-import-0121'),
  ('time_import_0122', 'Total', 'gs824977@gmail.com', 'Kaio gabriel Borges da silva', 'Comunicação e divulgação', NULL, 'Ecoboard', NULL, 'time-import-0122'),
  ('time_import_0123', 'Total', 'raphahugo15@gmail.com', 'Hugo Raphael Brito de Albuquerque Melo', 'Designer e prototipagem', NULL, 'Ecoboard', NULL, 'time-import-0123'),
  ('time_import_0124', 'Total', NULL, 'Paulo gabriel da Silva Mouzinho', 'Coordenador do projeto', NULL, 'Ecoboard', NULL, 'time-import-0124'),
  ('time_import_0125', NULL, NULL, 'Débora Lira', NULL, NULL, 'EcoSenso', NULL, 'time-import-0125'),
  ('time_import_0126', NULL, NULL, 'Cauã Durhan Cristo Barbosa', NULL, NULL, 'EcoSenso', NULL, 'time-import-0126'),
  ('time_import_0127', NULL, NULL, 'Levy Santiago', NULL, NULL, 'EcoSenso', NULL, 'time-import-0127'),
  ('time_import_0128', NULL, 'ellensamily080@gmail.com', 'Samily Ellen', NULL, NULL, 'EcoSenso', NULL, 'time-import-0128'),
  ('time_import_0129', NULL, NULL, 'Clebson Rodridues de Morais', NULL, NULL, 'EcoSenso', NULL, 'time-import-0129'),
  ('time_import_0130', NULL, NULL, 'João Vitor Da Silva', NULL, NULL, 'EcoSenso', NULL, 'time-import-0130'),
  ('time_import_0131', NULL, NULL, 'Marcos Vinicius da Silva Matias Linhares', NULL, NULL, 'EcoSenso', NULL, 'time-import-0131'),
  ('time_import_0132', NULL, NULL, 'Luciana Macena', NULL, NULL, 'EcoSenso', NULL, 'time-import-0132'),
  ('time_import_0133', NULL, NULL, 'João Victor Gomes da Silva', NULL, NULL, 'EcoSenso', NULL, 'time-import-0133'),
  ('time_import_0134', 'Total', 'barbara@inovahu.com', 'Bárbara Formiga', 'CEO', NULL, 'Saúde CINCO', NULL, 'time-import-0134'),
  ('time_import_0135', 'Parcial', 'igormariano@hrv4life.com', 'Igor Moraes Mariano', 'Diretor Científico da HRV4Life -Educador Físico, Phd Ciência da Saúde com ampla experiência em análise clínica usando VFC como marcador de saúde e estresse.', NULL, 'Igor Moraes MAriano; Monica de Almeida Valente Prado; Sabino Machado', NULL, 'time-import-0135'),
  ('time_import_0136', 'Total', 'barbara@inovahu.com', 'Bárbara Formiga', 'CEO', NULL, 'Saúde Cinco', NULL, 'time-import-0136'),
  ('time_import_0137', NULL, NULL, NULL, NULL, NULL, 'Kattumaram', NULL, 'time-import-0137'),
  ('time_import_0138', NULL, NULL, NULL, NULL, NULL, 'Kattumaram', NULL, 'time-import-0138'),
  ('time_import_0139', NULL, NULL, NULL, NULL, NULL, 'Kattumaram', NULL, 'time-import-0139'),
  ('time_import_0140', NULL, NULL, NULL, NULL, NULL, 'Kattumaram', NULL, 'time-import-0140'),
  ('time_import_0141', NULL, NULL, NULL, NULL, NULL, 'Kattumaram', NULL, 'time-import-0141'),
  ('time_import_0142', NULL, NULL, NULL, NULL, NULL, 'Kattumaram', NULL, 'time-import-0142'),
  ('time_import_0143', NULL, NULL, NULL, NULL, NULL, 'Kattumaram', NULL, 'time-import-0143'),
  ('time_import_0144', NULL, NULL, NULL, NULL, NULL, 'Kattumaram', NULL, 'time-import-0144'),
  ('time_import_0145', NULL, NULL, NULL, NULL, NULL, 'Kattumaram', NULL, 'time-import-0145'),
  ('time_import_0146', NULL, NULL, NULL, NULL, NULL, 'Kattumaram', NULL, 'time-import-0146'),
  ('time_import_0147', NULL, NULL, NULL, NULL, NULL, 'Kattumaram', NULL, 'time-import-0147'),
  ('time_import_0148', NULL, NULL, 'Débora Lira', NULL, NULL, 'EcoSenso', NULL, 'time-import-0148'),
  ('time_import_0149', NULL, NULL, 'Débora Lira', NULL, NULL, 'EcoSeno', NULL, 'time-import-0149'),
  ('time_import_0150', NULL, NULL, 'João Victor Gomes Da Silva', NULL, NULL, 'EcoSeno', NULL, 'time-import-0150'),
  ('time_import_0151', NULL, NULL, 'Débora Lira', NULL, NULL, 'EcoSenso', NULL, 'time-import-0151'),
  ('time_import_0152', 'Parcial', NULL, NULL, 'Diretor Comercial', NULL, 'TECH3', 'silvio.migliorini@gmail.com', 'time-import-0152'),
  ('time_import_0153', 'Parcial', 'nelson@tech3br.com', 'Nelson Benevides', 'Sócio-Diretor', NULL, 'TECH3', NULL, 'time-import-0153'),
  ('time_import_0154', NULL, 'bca@ecomp.poli.br', 'GABRIEL CHAMIE ALVES DE SOUZA FILHO', NULL, NULL, NULL, NULL, 'time-import-0154'),
  ('time_import_0155', NULL, 'adsasd@gmail.com', 'sadadadadad12', NULL, NULL, NULL, NULL, 'time-import-0155'),
  ('time_import_0156', NULL, 'adsasd@gmail.com', 'sadadadadad13', NULL, NULL, NULL, NULL, 'time-import-0156'),
  ('time_import_0157', 'Total', 'adsasd@gmail.com', 'sadadadadad13', NULL, NULL, NULL, NULL, 'time-import-0157'),
  ('time_import_0158', 'Parcial', NULL, NULL, 'CEO', NULL, NULL, 'araujoithalo@gmail.com', 'time-import-0158'),
  ('time_import_0159', 'Parcial', 'ceci_secti@hotmail.com', 'Ceci', 'CFO', NULL, NULL, NULL, 'time-import-0159'),
  ('time_import_0160', 'Integral', NULL, NULL, 'Founder, PD&I | CEO', NULL, 'ZeroWasteX', 'gustavorittl@gmail.com', 'time-import-0160'),
  ('time_import_0161', 'Total', 'projeto@lacosdoagro.com', 'Ana Paula Raycik', 'Desenvolvimento do projeto', NULL, NULL, NULL, 'time-import-0161'),
  ('time_import_0162', 'Total', 'comercial@lacosdoagro.com', 'Vinicius Brandão', 'Desenvolvimento do produto, acadêmico de engenharia de produção.', NULL, NULL, NULL, 'time-import-0162'),
  ('time_import_0163', 'Total', NULL, 'Marcio Tomé', 'Desenvolvedor de sistemas', NULL, NULL, NULL, 'time-import-0163'),
  ('time_import_0164', 'Parcial', NULL, 'Dyan', 'Head de Tecnologia e líder de time de desenvolvimento', NULL, 'ZeroWastex Team', NULL, 'time-import-0164'),
  ('time_import_0165', 'Parcial', NULL, 'Carlos Silva', 'Tokenização de Ativos Ambientais, Refi - Finanças Regenerativas e Sustentáveis', NULL, 'ZeroWastex Team', NULL, 'time-import-0165'),
  ('time_import_0166', 'Parcial', NULL, 'Sérgio', 'Rastreabilidade de resíduos, Digitalização de Cooeperativas, Sistemas de Logística Reversa', NULL, 'ZeroWastex Team', NULL, 'time-import-0166'),
  ('time_import_0167', 'Parcial', NULL, 'Marcos', 'Monitoramento de contratos e sistemas de coleta e coleta seletiva.', NULL, 'ZeroWastex Team', NULL, 'time-import-0167'),
  ('time_import_0168', 'Total', 'cr.claricerodrigues@gmail.com', 'Clarice Rodrigues de Oliveira', 'Desenvolvedora e designer.', NULL, 'InterRec', NULL, 'time-import-0168'),
  ('time_import_0169', 'Total', 'eduardoscofi@hotmail.com', 'Eduardo Henrique Senna Costa Filho', 'Desenvolvedor e designer.', NULL, 'InterRec', NULL, 'time-import-0169'),
  ('time_import_0170', 'Total', 'victoria.priscila.pl@gmail.com', 'Victória Priscila Feitosa Lindoso', 'Desenvolvedora e pesquisadora.', NULL, 'InterRec', NULL, 'time-import-0170'),
  ('time_import_0171', 'Total', 'beatrizssousa37@gmail.com', 'Beatriz dos Santos Sousa', 'Desenvolvedora e gestora.', NULL, 'InterRec', NULL, 'time-import-0171'),
  ('time_import_0172', 'Total', 'lucas.soares.123@gmail.com', 'Lucas Soares', 'Esta integralmente na equipe.', NULL, NULL, NULL, 'time-import-0172'),
  ('time_import_0173', 'Total', 'lucas.soares.123@gmail.com', 'Lucas Soares', 'Esta integralmente na equipe.', NULL, NULL, NULL, 'time-import-0173'),
  ('time_import_0174', NULL, NULL, 'Mirella Rebello Bezarra', 'Negócios', NULL, 'SilIA', NULL, 'time-import-0174'),
  ('time_import_0175', NULL, NULL, 'Tiago Junior', 'Tecnologia e desenvolvimento', NULL, 'SilIA', NULL, 'time-import-0175'),
  ('time_import_0176', 'Total', 'adeildo.barros@recife.pe.gov.br', 'Adeildo', 'gerente', NULL, NULL, NULL, 'time-import-0176'),
  ('time_import_0177', NULL, NULL, 'Hellen', NULL, NULL, NULL, NULL, 'time-import-0177'),
  ('time_import_0178', 'Parcial', 'marco@rassystem.com.br', 'Marcos Pires', 'Integração tecnológica para monitoramento de contratos de limpeza, manutenção e zeladoria urbana.', NULL, 'Time Integrado Governo Digital', NULL, 'time-import-0178'),
  ('time_import_0179', 'Parcial', 'sergio@selletiva.com.br', 'Sérgio', 'Integração de sistemas de rastraabilidade de resíduos, logistica reversa, gestão de cooperativas para governo digital.', NULL, 'Time Integrado Governo Digital', NULL, 'time-import-0179'),
  ('time_import_0180', 'Parcial', 'advocacy@carbonmaat.com', 'Carlos Silva', 'Tokenização de ativos ambientais para sistemas de logistica reversa, economia circular, estruturação de finanças regenerativas sustentáveis, creditação de carbono.', NULL, 'Time Integrado Governo Digital', NULL, 'time-import-0180'),
  ('time_import_0181', 'Total', 'dyan.devoutbox@gmail.com', 'Dyan Halef', 'Líder de tecnologia, integrações, desenvolvimento, liderança de times e da tecologia do projeto.', NULL, 'Time Integrado Governo Digital', NULL, 'time-import-0181'),
  ('time_import_0182', 'Parcial', 'crdis@terra.com.br', 'César', 'Integração de Dispositivos IOT com Fábrica.', NULL, 'Time Integrado Governo Digital', NULL, 'time-import-0182'),
  ('time_import_0183', 'Total', 'jonathaseduoficial@gmail.com', 'Uyrá Serpa', 'Elaboração do projeto e apresentação', NULL, NULL, NULL, 'time-import-0183'),
  ('time_import_0184', 'Integral', NULL, NULL, 'Sou co-fundador e diretor de tecnologia, atuando diretamente no desenvolvimento de software, na gestão financeira e gestão de pessoas.', NULL, 'Imogen', 'lima.a.gabriel@icloud.com', 'time-import-0184'),
  ('time_import_0185', 'Integral', 'kewin.lima@imogen.com.br', 'Kewin Lima da Silva', 'Co-fundador e diretor executivo, atua diretamente na execução de projetos de automação, IA e gestão de pessoas.', NULL, 'Imogen', NULL, 'time-import-0185'),
  ('time_import_0186', 'Integral', 'elys.carvalho@imogen.com.br', 'Elys Karine Carvalho da Silva', 'Co-fundadora e diretora científica, atua na pesquisa, prospecção de contatos e gestão de pessoas.', NULL, 'Imogen', NULL, 'time-import-0186'),
  ('time_import_0187', NULL, NULL, NULL, 'CEO', NULL, 'Masur Data Analytics', 'pietromasur@hotmail.com', 'time-import-0187'),
  ('time_import_0188', 'Total', 'lori.lemazurier@liderancatech.com', 'Lori Lemazurier', 'Compreender as necessidades do negócio e definir como a Inteligência Artificial (IA) pode ser utilizada para atingir objetivos estratégicos e gerar valor para o projeto; 
Assegurar que as soluções de IA sejam escaláveis, performáticas e capazes de lidar com grandes volumes de dados e solicitações;
Definir e garantir a adoção das melhores ferramentas, frameworks e plataformas para o desenvolvimento de IA, como aprendizado de máquina (ML), redes neurais, processamento de linguagem natural (PLN), entre outras.', NULL, 'LidEye', NULL, 'time-import-0188'),
  ('time_import_0189', 'Total', 'danielle.santanaliderancatech.com', 'Danielle Santana', 'Estabelecer claramente o que será entregue no projeto, quais são as expectativas, os requisitos do cliente e os objetivos a serem atingidos;
Desenvolver o cronograma: Criar um plano detalhado de execução, com datas de entrega, marcos e tarefas a serem cumpridas;
Elaborar o orçamento do projeto, incluindo custos de recursos, ferramentas, infraestrutura e outros aspectos financeiros;
Acompanhar a execução do projeto no dia a dia, garantindo que todas as tarefas sejam realizadas conforme o cronograma e com a qualidade esperada.', NULL, 'LidEye', NULL, 'time-import-0189'),
  ('time_import_0190', 'Integral', NULL, NULL, 'Gerenciar a empresa, tomada de decisões estratégicas e pelo andamento do negócio como um todo.', NULL, 'Passarelli Automação - Traceability', 'diogo.passarelli@gmail.com', 'time-import-0190'),
  ('time_import_0191', 'Parcial', 'edsonmvf@gmail.com', 'Edson Mota Valença Filho', 'Cientista de Dados Jr & Cloud Computing (AWS). AI Developer, Gen AI', NULL, 'Quasar', NULL, 'time-import-0191'),
  ('time_import_0192', 'Total', 'academicosdani@gmail.com', 'Daniela dos anjos Menezes', 'Pesquisadora Científica, Área de Negócios, Marketing', NULL, 'Quasar', NULL, 'time-import-0192'),
  ('time_import_0193', 'Total', 'marianamatos5000@gmail.com', 'Mariana Matos Oliveira', 'Estudante de Robótica, Aspirante a Inovação e IoT', NULL, 'Quasar', NULL, 'time-import-0193'),
  ('time_import_0194', 'Total', 'nickdiegao@gmail.com', 'Nicholas Diego', 'Desenvolvedor Backend', NULL, 'Ecoeduca', NULL, 'time-import-0194'),
  ('time_import_0195', 'Total', 'nickdiegao@gmail.com', 'Nicholas Diego', 'Desenvolvedor Backend do Projeto Ecoeduca.', NULL, 'ECOEDUCA', NULL, 'time-import-0195'),
  ('time_import_0196', 'Parcial', 'tecnologia@lacosdoagro.com.br', 'Marcio Tomé', 'Responsável pela definição da arquitetura das soluções, atua diretamente no planejamento, e lidera a equipe técnica com foco em metodologias ágeis, com entregas através de sprints de desenvolvimento, garantindo a integração entre os módulos, a escalabilidade do sistema e a aderência às necessidades.', NULL, 'Laços do Agro Ltda', NULL, 'time-import-0196'),
  ('time_import_0197', 'Parcial', 'mario_gouveia@pe.unit.br', 'Mário Gouveia Júnior', 'atuante no time para viabilização das ações internas e externa direcionadas ao Nucleo de Inovação do NIT.', NULL, NULL, NULL, 'time-import-0197'),
  ('time_import_0198', 'Parcial', 'arlindo_batista@pe.unit.br', 'ARLINDO CORREIA', 'atuante no time para viabilização das ações internas e externa direcionadas ao Nucleo de Inovação do NIT.', NULL, NULL, NULL, 'time-import-0198'),
  ('time_import_0199', 'Parcial', 'celiatxguedes@hotmail.com', 'CÉLIA GUEDES', 'atuante no time para viabilização das ações internas e externa direcionadas ao Nucleo de Inovação do NIT.', NULL, NULL, NULL, 'time-import-0199'),
  ('time_import_0200', 'Integral', NULL, NULL, 'CEO / Fundador', NULL, 'Harena Tech', 'kelvin.alves.harness@gmail.com', 'time-import-0200'),
  ('time_import_0201', 'Total', 'monick.santos@estacio.br', 'Monick Trajano dos Santos', NULL, NULL, NULL, NULL, 'time-import-0201'),
  ('time_import_0202', 'Total', 'monick.santos@estacio.br', 'Monick Trajano dos Santos', NULL, NULL, NULL, NULL, 'time-import-0202'),
  ('time_import_0203', 'Parcial', 'Felipe.lira@professores.estacio.br', 'Felipe Alves Felinto de Lira', NULL, NULL, NULL, NULL, 'time-import-0203'),
  ('time_import_0204', 'Total', 'Lucas.cesar@estacio.br', 'Lucas Oliveira César', NULL, NULL, NULL, NULL, 'time-import-0204'),
  ('time_import_0205', 'Total', 'tarcisio.lima@estacio.br', 'Tarcisio Henrique da Silva Lima', NULL, NULL, NULL, NULL, 'time-import-0205'),
  ('time_import_0206', 'Parcial', 'mario_gouveia@pe.unit.br', 'Mário Gouveia Júnior', 'Integrante do time UNIT REDE NIT Recife, para fins de desenvolver as atividades e o crescimento do núcleo em prol dos melhores resultados para a instituição e a sociedade.', NULL, NULL, NULL, 'time-import-0206'),
  ('time_import_0207', 'Parcial', 'celiatxguedes@hotmail.com', 'Célia Teixeira Guedes', 'Integrante do time UNIT REDE NIT Recife, para fins de desenvolver as atividades e o crescimento do núcleo em prol dos melhores resultados para a instituição e a sociedade.', NULL, NULL, NULL, 'time-import-0207'),
  ('time_import_0208', 'Parcial', NULL, 'Arlindo Batista Correia', 'Integrante com formação técnica e experiência em inovação do time UNIT REDE NIT Recife, para fins de também desenvolver as atividades e o crescimento do núcleo em prol dos melhores resultados para a instituição e a sociedade.', NULL, NULL, NULL, 'time-import-0208'),
  ('time_import_0209', 'Parcial', 'dizeumateus@gmail.com', 'Mateus Pereira', 'Desenvolvimento web e design', NULL, 'Trabalhadores Anónimos', NULL, 'time-import-0209'),
  ('time_import_0210', 'Parcial', 'kauarameh@gmail.com', 'Kauã Rameh', 'Estudante de 5o período do curso análise e desenvolvimento de sistemas', NULL, 'Trabalhadores Anónimos', NULL, 'time-import-0210'),
  ('time_import_0211', 'Parcial', 'vivi87.vdd@gmail.com', 'Vitória das Dores', 'Desenvolvimento de sistemas embarcados', NULL, 'Trabalhadores Anónimos', NULL, 'time-import-0211'),
  ('time_import_0212', 'Parcial', 'camila.cvff@ufpe.br', 'Camila Valença', 'Atua com Transferência de Tecnologia', NULL, NULL, NULL, 'time-import-0212'),
  ('time_import_0213', 'Parcial', 'jouldes.duarte@ufpe.br', 'Jôuldes Matos Duarte', 'Atua no administrativo da DINE', NULL, NULL, NULL, 'time-import-0213'),
  ('time_import_0214', 'Parcial', 'klissia.gouveia@ufpe.br', 'Klíssia Gouveia', 'Atua no acompanhamento dos pedidos de registro de PI', NULL, NULL, NULL, 'time-import-0214'),
  ('time_import_0215', 'Parcial', 'ana.bfernandes@ufpe.br', 'Carolina Borba', 'Atua no registro dos pedidos de proteção de PI', NULL, NULL, NULL, 'time-import-0215'),
  ('time_import_0216', 'Parcial', 'antonieta.lynch@ufpe.br', 'Antonieta Lynch', 'Coordenadora de Propriedade Intelectual', NULL, NULL, NULL, 'time-import-0216'),
  ('time_import_0217', 'Parcial', 'giovannia.pereira@ufpe.br', 'Giovannia Araújo', 'Coordenadora de Propriedade Intelectual', NULL, NULL, NULL, 'time-import-0217'),
  ('time_import_0218', 'Total', 'caroline.bona@ufpe.br', 'Caroline Bona', 'Coordenadora de Transferência de Tecnologia', NULL, NULL, NULL, 'time-import-0218'),
  ('time_import_0219', 'Total', 'caroline.bona@ufpe.br', 'caroline pereira bona', 'coordenadora de transferência de tecnologia', NULL, NULL, NULL, 'time-import-0219'),
  ('time_import_0220', 'Parcial', 'caroline.bona@ufpe.br', 'caroline pereira bona', 'Coordenação de Transferência de Tecnologia', NULL, NULL, NULL, 'time-import-0220'),
  ('time_import_0221', 'Parcial', 'camila.cvff@ufpe.br', 'camila valença', 'atua com Transferência de Tecnologia', NULL, NULL, NULL, 'time-import-0221'),
  ('time_import_0222', 'Parcial', 'rleiteqbasto@gmail.com', 'Rodrigo', 'Engenheiro de software com foco em análise e projeto atuando desde o levantamento e análise de requisitos até o acompanhamento técnico da implementação da solução. Rotina que inclui,  conduzir reuniões com stakeholders para entender as necessidades do negócio, traduzindo essas demandas em requisitos funcionais e não funcionais claros e objetivos, realizar  modelagem do sistema por meio de diagramas UML, protótipos e especificações técnicas, definindo a arquitetura mais adequada ao contexto (como monolítica, microserviços, orientada a eventos etc.),  buscando modularidade, escalabilidade e manutenibilidade. Também será responsável pelo controle técnico, acompanhando o desenvolvimento do software e hardware para garantir conformidade com o projeto, promovendo revisões de código, testes de aceitação e validação contínua dos requisitos. Atua como elo entre equipes técnicas e áreas de negócio, garantindo que o produto final atenda aos objetivos estratégicos da organização.', NULL, 'Noah SmartCity', NULL, 'time-import-0222'),
  ('time_import_0223', 'Total', 'carlos.pdelgado@unifbv.edu.br', 'Carlos Gustavo Pinto Delgado', 'Coordenador dos cursos de Gestão e negócios do UNIFBV Wyden', NULL, NULL, NULL, 'time-import-0223'),
  ('time_import_0224', 'Total', 'bruno.franca@unifbv.edu.br', 'BRUNO FELIPE DE FRANCA SOUZA', 'Coordenador dos cursos de tecnologia da informação do UNIFBV Wyden', NULL, NULL, NULL, 'time-import-0224'),
  ('time_import_0225', 'Parcial', 'camila.cvff@ufpe.br', 'camila valença', 'Atua com transferência de Tecnologia', NULL, NULL, NULL, 'time-import-0225'),
  ('time_import_0226', 'Parcial', 'jouldes.duarte@ufpe.br', 'Jôuldes Matos Duarte', 'Atua como secretario da Diretoria de Inovação dando apoio as Coordenações de Propriedade Intelectual e de Transferência de Tecnologia', NULL, NULL, NULL, 'time-import-0226'),
  ('time_import_0227', 'Parcial', 'klissia.gouveia@ufpe.br', 'Klíssia Gouveia', 'Atua no acompanhamento dos pedidos de Propriedade Intelectual na Coordenação de Propriedade Intelectual', NULL, NULL, NULL, 'time-import-0227'),
  ('time_import_0228', 'Parcial', 'antonieta.lynch@ufpe.br', 'Antonieta Lynch', 'Atua como Coordenadora na Coordenação de Propriedade Intelectual', NULL, NULL, NULL, 'time-import-0228'),
  ('time_import_0229', 'Parcial', 'jouldes.duarte@ufpe.br', 'Jôuldes Matos Duarte', 'Atua como Secretaria da Diretoria de Inovação', NULL, NULL, NULL, 'time-import-0229'),
  ('time_import_0230', 'Parcial', 'klissia.gouveia@ufpe.br', 'Klíssia Gouveia', 'Atua no acompanhamento dos pedidos de registro das Propriedades Intelectuais na Coordenação de Propriedade Intelectual', NULL, NULL, NULL, 'time-import-0230'),
  ('time_import_0231', 'Parcial', 'ana.bfernandes@ufpe.br', 'Carolina Borba', 'Atua nos pedidos de registro das Propriedades Intelectuais na Coordenação de Propriedade Intelectual', NULL, NULL, NULL, 'time-import-0231'),
  ('time_import_0232', 'Parcial', 'antonieta.lynch@ufpe.br', 'Antonieta Lynch', 'Atua como Coordenadora na Coordenação de Propriedade Intelectual', NULL, NULL, NULL, 'time-import-0232'),
  ('time_import_0233', 'Parcial', 'camila.cvff@ufpe.br', 'Camila Valença de França Felix', 'Atua com transferência de Tecnologia na Coordenação de transferência de Tecnologia', NULL, NULL, NULL, 'time-import-0233'),
  ('time_import_0234', 'Parcial', 'giovannia.pereira@ufpe.br', 'Giovannia Araujo Pereira', 'Atua como Diretora da Diretoria de Inovação', NULL, NULL, NULL, 'time-import-0234'),
  ('time_import_0235', 'Parcial', 'caroline.bona@ufpe.br', 'Caroline Pereira Bona', 'Atua como Coordenadora na Coordenação de Transferência de Tecnologia', NULL, NULL, NULL, 'time-import-0235'),
  ('time_import_0236', 'Parcial', 'giovannia.pereira@ufpe.br', 'Giovannia Araujo Pereira', 'Atua como Diretora da DINE', NULL, NULL, NULL, 'time-import-0236'),
  ('time_import_0237', 'Parcial', 'antonieta.lynch@ufpe.br', 'Antonieta Lynch', 'Atua como Coordenadora de Propriedade Intelectual', NULL, NULL, NULL, 'time-import-0237'),
  ('time_import_0238', 'Parcial', 'klissia.gouveia@ufpe.br', 'Klissia Gouveia', 'Atua no acompanhamento dos registros de PI na Coordenadora de Propriedade Intelectual', NULL, NULL, NULL, 'time-import-0238'),
  ('time_import_0239', 'Parcial', 'ana.bfernandes@ufpe.br', 'Carolina Borba', 'Atua na solicitação dos registros de PI na Coordenadora de Propriedade Intelectual', NULL, NULL, NULL, 'time-import-0239'),
  ('time_import_0240', 'Parcial', 'camila.cvff@ufpe.br', 'Camila Valença', 'Atua na Transferência de Tecnologia na Coordenadora de Transferência de Tecnologia', NULL, NULL, NULL, 'time-import-0240'),
  ('time_import_0241', 'Parcial', 'jouldes.duarte@ufpe.br', 'Jouldes Duarte', 'Atua na Secretaria da DINE', NULL, NULL, NULL, 'time-import-0241'),
  ('time_import_0242', 'Parcial', 'giovannia.pereira@ufpe.br', 'Giovannia Araujo Pereira', 'Diretora de INovação', NULL, NULL, NULL, 'time-import-0242'),
  ('time_import_0243', 'Parcial', 'antonieta.lynch@ufpe.br', 'Antonieta Lynch', 'Coordenadora de Propriedade Intelectual', NULL, NULL, NULL, 'time-import-0243'),
  ('time_import_0244', 'Parcial', 'ana.bfernandes@ufpe.br', 'Carolina Borba', 'Atua na Coordenação de Propriedade Intelectual', NULL, NULL, NULL, 'time-import-0244'),
  ('time_import_0245', 'Parcial', 'klissia.gouveia@ufpe.br', 'Klissia Gouveia', 'Atua na Coordenação de Propriedade Intelectual', NULL, NULL, NULL, 'time-import-0245'),
  ('time_import_0246', 'Parcial', 'camila.cvff@ufpe.br', 'Camila Valença', 'Atua na Coordenação de Transferência de Tecnologia', NULL, NULL, NULL, 'time-import-0246'),
  ('time_import_0247', 'Parcial', 'jouldes.duarte@ufpe.br', 'Jouldes Duarte', 'Atua na Diretoria de Inovação', NULL, NULL, NULL, 'time-import-0247'),
  ('time_import_0248', 'Parcial', 'giovannia.pereira@ufpe.br', 'Giovannia Pereira', 'Diretora de Inovação', NULL, NULL, NULL, 'time-import-0248'),
  ('time_import_0249', 'Parcial', 'camila.cvff@ufpe.br', 'Camila Valença', 'Equipe Transferencia de Tecnologia', NULL, NULL, NULL, 'time-import-0249'),
  ('time_import_0250', 'Parcial', 'jouldes.duarte@ufpe.br', 'Jouldes Duarte', 'Secretaria', NULL, NULL, NULL, 'time-import-0250'),
  ('time_import_0251', 'Parcial', 'ana.bfernandes@ufpe.br', 'Carolina Borba', 'Equipe Propriedade Intelectual', NULL, NULL, NULL, 'time-import-0251'),
  ('time_import_0252', 'Parcial', 'klissia.gouveia@ufpe.br', 'Klissia Gouveia', 'Equipe Propriedade Intelectual', NULL, NULL, NULL, 'time-import-0252'),
  ('time_import_0253', 'Parcial', 'antonieta.lynch@ufpe.br', 'Antonieta Lynch', 'Coordenadora de Propriedade Intelectual', NULL, NULL, NULL, 'time-import-0253'),
  ('time_import_0254', 'Parcial', 'caroline.bona@ufpe.br', 'Caroline Bona', 'Coordenadora de Transferencia de Tecnologia', NULL, NULL, NULL, 'time-import-0254'),
  ('time_import_0255', 'Parcial', 'caroline.bona@ufpe.br', 'Caroline Bona', 'Coordenadora de Transferencia de Tecnologia', NULL, NULL, NULL, 'time-import-0255'),
  ('time_import_0256', 'Parcial', 'camila.cvff@ufpe.br', 'Camila Valença', 'Equipe de Transferencia de Tecnologia', NULL, NULL, NULL, 'time-import-0256'),
  ('time_import_0257', 'Parcial', 'giovannia.pereira@ufpe.br', 'Giovannia Pereira', 'Diretora de Inovação', NULL, NULL, NULL, 'time-import-0257'),
  ('time_import_0258', 'Parcial', 'jouldes.duarte@ufpe.br', 'Jouldes Duarte', 'Secretaria DINE', NULL, NULL, NULL, 'time-import-0258'),
  ('time_import_0259', 'Parcial', 'ana.bfernandes@ufpe.br', 'Carolina Borba', 'Equipe Propriedade Intelectual', NULL, NULL, NULL, 'time-import-0259'),
  ('time_import_0260', 'Parcial', 'klissia.gouveia@ufpe.br', 'Klissia Gouveia', 'Equipe Propriedade Intelectual', NULL, NULL, NULL, 'time-import-0260'),
  ('time_import_0261', 'Parcial', 'antonieta.lynch@ufpe.br', 'Antonieta Lynch', 'Coordenadora de Propriedade Intelectual', NULL, NULL, NULL, 'time-import-0261'),
  ('time_import_0262', 'Total', 'cabm@discente.ifpe.edu.br', 'Clara Alves Bezerra Moura', 'Desenvolvimento de aplicativo mobile para auxiliar na locomoção de pessoas com deficiência visual.', NULL, 'Synesthesia Vision', NULL, 'time-import-0262'),
  ('time_import_0263', 'Total', 'tebp@discente.ifpe.edu.br', 'Thiago Ewerton Barros Pereira', 'Desenvolvimento de hardware de um dispositivo assistivo para auxiliar na locomoção de pessoas com deficiência visual.', NULL, 'Synesthesia Vision', NULL, 'time-import-0263'),
  ('time_import_0264', 'Total', 'timoteo.barross@gmail.com', 'Timóteo Barros', 'Desenvolvimento Mobile.', NULL, 'Gymtime', NULL, 'time-import-0264'),
  ('time_import_0265', 'Total', 'cebduarte@gmail.com', 'Carlos Eduardo Duarte', 'Arquitetura de solução.', NULL, 'Gymtime', NULL, 'time-import-0265'),
  ('time_import_0266', 'Parcial', 'claudio.barnabe@gmail.com', 'Claudio Barnabé', 'Consultor Técnico.', NULL, 'Gymtime', NULL, 'time-import-0266'),
  ('time_import_0267', 'Total', 'wladimilsonb@gmail.com', 'Wladimilson Bernardino', 'Chefe Executivo', NULL, 'Gymtime', NULL, 'time-import-0267'),
  ('time_import_0268', 'Parcial', 'Ssd@cesar.org.br', 'Suzanna Sandes Dantas', 'Consultora de qualificação', NULL, NULL, NULL, 'time-import-0268'),
  ('time_import_0269', 'Parcial', 'ssd@cesar.org.br', 'Suzanna Sandes Dantas', 'Consultora de Qualificação. Faz parte do time de Pesquisa e Stricto Sensu', NULL, NULL, NULL, 'time-import-0269'),
  ('time_import_0270', 'Parcial', 'Ssd@cesar.org.br', 'Suzanna Sandes Dantas', 'Consultora de Qualificação. Faz parte dos times de graduação, de pesquisa e Stricto Sensu', NULL, NULL, NULL, 'time-import-0270'),
  ('time_import_0271', 'Total', 'asfa@ic.ufal.br', 'Arthur Sendas', 'CEO e Diretor de Tecnologia.  Graduado pela Universidade Estadual de
Ciências da Saúde de Alagoas (UNCISAL). Mestrando em Saúde Inteligente, com foco em tecnologias assistivas. Especialização em UX/UI Design para
acessibilidade. Expertise: Um dos únicos designers UX/UI do mundo especializado em interfaces para pessoas cegas e com deficiência visual severa. Especialista em desenvolvimento de sistemas autônomos. Profundo conhecimento em inteligência artificial e visão computacional. Experiência em processamento de linguagem natural. Como pessoa com deficiência visual severa, traz uma perspectiva única ao desenvolvimento de soluções assistivas, combinando seu conhecimento técnico com a vivência direta das necessidades dos usuários.', NULL, 'See U app', NULL, 'time-import-0271'),
  ('time_import_0272', 'Total', 'jaqueline@seeuapp.com.br', 'Jaqueline Ferreira de Araujo', 'CTO e Diretora de Desenvolvimento Formação: Concluindo Engenharia Civil no Instituto Federal de Alagoas (IFAL). Programadora autodidata com especialização em desenvolvimento de soluções assistivas. Expertise: Especialista em cidades inteligentes para pessoas cegas; desenvolvimento de sistemas de navegação assistida. Programação avançada com foco em acessibilidade. Integração de sistemas de ecolocalização. Diferencial: Inspirada por seus avós e tio que eram cegos, traz uma compreensão profunda das necessidades familiares e sociais de pessoas com deficiência visual, traduzindo essas demandas em soluções tecnológicas inovadoras.', NULL, 'See U app', NULL, 'time-import-0272'),
  ('time_import_0273', 'Parcial', 'asfa@ic.ufal.br', 'Lucas Flores', 'Diretor Financeiro. Mestre em Economia. Especialização em gestão de negócios de
impacto. Experiência Profissional Adicional: Casa Azul Participações S/A –
Programa Delta-V (2023): Analista de Aceleração II, responsável por acompanhar
15 startups em estágio de ideação no programa Delta-V. Expertise: Planejamento
financeiro estratégico. Análise de viabilidade econômica. Gestão de investimentos.
Desenvolvimento de modelos de negócios sustentáveis. Diferencial: Sua experiência
em aceleração de startups e gestão de negócios de impacto fortalece a capacidade
da See U de alinhar inovação tecnológica a estratégias de mercado sólidas.', NULL, 'See U app', NULL, 'time-import-0273'),
  ('time_import_0274', 'Total', 'asfa@ic.ufal.br', 'Rodrigo Lustosa Peronico', 'Cientista de Dados e Matemático. Formação: Graduação em Licenciatura Plena em Matemática pela Universidade Federal Rural de Pernambuco (2008). Mestrado e Doutorado em Tecnologias Energéticas e Nucleares pela Universidade Federal de Pernambuco (2012 e 2018). Responsável pelo Desenvolvimento de algoritmos avançados para o processamento de dados do aplicativo. Modelagem matemática aplicada à navegação assistida e à ecolocalização, garantindo maior precisão e eficiência nos sistemas de orientação. Criação de modelos preditivos para personalização do aplicativo com base no comportamento dos usuários. Otimização dos sistemas de reconhecimento de objetos e leitura de textos (OCR), utilizando métodos matemáticos e computacionais avançados. Contribuições no Aprimoramento de IA e Machine Learning: Desenvolvimento de algoritmos de aprendizado de máquina para reconhecimento de padrões em ambientes complexos. Suporte técnico na
criação de sistemas que integram informações espaciais e feedback auditivo,
permitindo maior imersão e eficiência para os usuários. Aplicação de métodos
estatísticos avançados para a análise de dados coletados, auxiliando na melhoria
contínua da experiência do usuário. Diferencial: Rodrigo combina sua formação
acadêmica em modelagem matemática e computação com habilidades práticas para resolver problemas complexos no desenvolvimento de tecnologias assistivas. Seu
trabalho aprimora a precisão dos algoritmos do See U, aumentando sua
confiabilidade e impacto.', NULL, 'See U app', NULL, 'time-import-0274'),
  ('time_import_0275', 'Total', 'marcia.rpereira@uninassau.edu.br', 'Marcia Rejane Ferreira Pereira', 'Contribuição acadêmica e orientação.', NULL, NULL, NULL, 'time-import-0275'),
  ('time_import_0276', 'Total', NULL, 'Luana Cavalcanti de melo Ataíde', 'Contribuição acadêmica e orientação.', NULL, NULL, NULL, 'time-import-0276'),
  ('time_import_0277', 'Parcial', 'https://www.uninassau.edu.br/', 'Márcia Rejane Ferreira Pereira', 'Orientação e capacitações acadêmica', NULL, NULL, NULL, 'time-import-0277'),
  ('time_import_0278', 'Parcial', 'https://www.uninassau.edu.br/', 'Luana Cavalcanti de Melo Ataíde', 'Orientação e capacitações acadêmica', NULL, NULL, NULL, 'time-import-0278'),
  ('time_import_0279', 'Total', 'tebp@discente.ifpe.edu.br', 'Thiago Ewerton Barros Pereira', 'Responsável com o desenvolvimento de Hardware da equipe', NULL, 'Synesthesia Vision', NULL, 'time-import-0279'),
  ('time_import_0280', 'Total', 'Lhfp1@discente.ifpe.edu.br', 'Luiz Henrique Ferreira Pavão', 'Responsável com o desenvolvimento da plataforma mobile da equipe', NULL, 'Synesthesia Vision', NULL, 'time-import-0280'),
  ('time_import_0281', 'Parcial', 'gilmarbrito@recife.ifpe.edu.br', 'Gilmar Gonçalves de Brito', 'Contribui com o desenvolvimento de hardware', NULL, 'Synesthesia Vision', NULL, 'time-import-0281'),
  ('time_import_0282', 'Total', 'cabm@discente.ifpe.edu.br', 'Clara Alves Bezerra Moura', 'Atua no desenvolvimento da plataforma mobile', NULL, 'Synesthesia Vision', NULL, 'time-import-0282'),
  ('time_import_0283', 'Total', 'seuzeh4@gmail.com', 'Sônia Regina Siqueira Passos', 'Fara para da equipe técnica e de fiscalização de desenvolvimento do projeto.', NULL, 'seuzeh', NULL, 'time-import-0283'),
  ('time_import_0284', 'Total', 'emanuelpassos@quasartecnologia.com.br', 'Emanuel da Mota Passos Filho', 'Fara para da equipe de desenvolvimento da plataforma tanto na parte de frontend  como de backend', NULL, 'seuzeh', NULL, 'time-import-0284'),
  ('time_import_0285', 'Parcial', 'seuzeh4@gmail.com', 'Rafael Cordeiro', 'Fara para da equipe de desenvolvimento da plataforma na parte de integração de sistemas', NULL, 'seuzeh', NULL, 'time-import-0285'),
  ('time_import_0286', 'Total', 'camilamta275@gmail.com', 'Camila Maria Teixeira Alcântara', '(ADS) Análise e desenvolvimento de sistemas- Programação', NULL, 'Vingadores do mangue', NULL, 'time-import-0286'),
  ('time_import_0287', 'Parcial', 'seuzeh4@gmail.com', 'Rafael Cordeiro', 'Desenvolvimento de API de integracao, alem de gestao de dados da plataforma', NULL, 'seuzeh', NULL, 'time-import-0287'),
  ('time_import_0288', 'Integral', NULL, NULL, 'Fundador e CEO. Responsável pela visão estratégica, desenvolvimento de produto e articulação com parceiros industriais. Coordeno as frentes de hardware, software e validação de mercado nas soluções da COLI.', NULL, 'COLI', 'mizael.correia@gmail.com', 'time-import-0288'),
  ('time_import_0289', 'Integral', NULL, NULL, 'CEO', NULL, 'BERRY DEV', 'gm08022003@gmail.com', 'time-import-0289'),
  ('time_import_0290', 'Integral', NULL, NULL, 'Fundador', NULL, 'DAGAI', 'antoniovldamaso@gmail.com', 'time-import-0290'),
  ('time_import_0291', 'Integral', NULL, NULL, 'Ligia Bezerra Coelho desempenha um papel fundamental como CEO, fundadora e autora da Ver-TI Mobilidade Urbana Inclusiva. Sua atuação na startup envolve a criação e desenvolvimento de soluções inovadoras de mobilidade urbana, focadas na acessibilidade para PCDs (Pessoas com Deficiência) e toda a população.

Como líder da Ver-TI, Ligia idealizou um APP exclusivo com comando de voz, patenteado em 184 países, que atende diversos grupos, incluindo pessoas com deficiência visual, idosos, analfabetos e portadores de Mal de Parkinson. Sua missão é promover inclusão social e autonomia, garantindo que milhões de pessoas tenham acesso a uma mobilidade mais segura e eficiente.

Além disso, Ligia participa ativamente de eventos de inovação e empreendedorismo, como o ICL Tank, onde apresenta sua tecnologia assistiva e busca parcerias estratégicas para expandir o impacto da Ver-TI', NULL, 'VER-TI MOBILIDADE URBANA LTDA', 'ligia37_1@hotmail.com', 'time-import-0291'),
  ('time_import_0292', 'Integral', NULL, NULL, 'Meu papel na startup é atuar como CEO (Chief Executive Officer), sendo responsável pela liderança geral do negócio, definição da visão estratégica, relacionamento com parceiros e investidores, além de coordenar o time nas decisões importantes. Também participo ativamente no desenvolvimento dos produtos, validando as soluções com os clientes e garantindo que estejamos sempre alinhados às necessidades do setor agrícola.', NULL, 'AgriVision', 'hebert.games.com@gmail.com', 'time-import-0292'),
  ('time_import_0293', 'Total', 'josantino70@gmail.com', 'Joselia Mendes', 'A Ver-TI Mobilidade Urbana Inclusiva possui um setor de comunicação estruturado para garantir uma experiência eficiente e acessível tanto para motoristas quanto para usuários. Aqui estão os principais aspectos desse setor:

1. Comunicação com Motoristas e Usuários
✅ Plataformas digitais – A Ver-TI utiliza Instagram, Facebook e WhatsApp para interagir com motoristas e usuários, fornecendo informações e suporte. ✅ Eventos presenciais – São promovidos encontros com motoristas para facilitar a adesão ao aplicativo e esclarecer dúvidas. ✅ Canal de atendimento – Suporte dedicado para resolver questões operacionais e garantir acessibilidade.

2. Capacitação dos Motoristas
✅ Treinamento especializado – Motoristas recebem capacitação sobre acessibilidade e inclusão, garantindo um atendimento adequado para PCDs. ✅ Guias e materiais educativos – Disponibilização de conteúdos sobre uso do comando de voz e atendimento inclusivo. ✅ Parcerias com instituições – Colaboração com entidades que promovem acessibilidade para aprimorar a formação dos motoristas.

3. Tutoriais no Aplicativo
✅ Vídeos explicativos – O aplicativo conta com tutoriais interativos, ensinando usuários a utilizar o comando de voz e outras funcionalidades. ✅ Guias acessíveis – Materiais em áudio e texto para atender diferentes perfis de usuários. ✅ Testes práticos – Simulações dentro do app para garantir que os usuários se sintam confortáveis com a tecnologia.

4. Captação de Leads
✅ Campanhas digitais – Estratégias de marketing para atrair novos usuários e motoristas. ✅ Parcerias estratégicas – Colaboração com empresas e instituições para ampliar a base de usuários. ✅ Eventos e demonstrações – Apresentações públicas para divulgar a tecnologia assistiva da Ver-TI.

A Ver-TI está focada em crescimento sustentável e impacto social, garantindo que sua tecnologia assistiva alcance o maior número possível de pessoas.', NULL, 'VER-TI MOBILIDADE URBANA LTDA', NULL, 'time-import-0293'),
  ('time_import_0294', 'Total', 'josantino70@gmail.com', 'Joselia Mendes', 'A Ver-TI Mobilidade Urbana Inclusiva possui um setor de comunicação estruturado para garantir uma experiência eficiente e acessível tanto para motoristas quanto para usuários. Aqui estão os principais aspectos desse setor:

1. Comunicação com Motoristas e Usuários
✅ Plataformas digitais – A Ver-TI utiliza Instagram, Facebook e WhatsApp para interagir com motoristas e usuários, fornecendo informações e suporte. ✅ Eventos presenciais – São promovidos encontros com motoristas para facilitar a adesão ao aplicativo e esclarecer dúvidas. ✅ Canal de atendimento – Suporte dedicado para resolver questões operacionais e garantir acessibilidade.

2. Capacitação dos Motoristas
✅ Treinamento especializado – Motoristas recebem capacitação sobre acessibilidade e inclusão, garantindo um atendimento adequado para PCDs. ✅ Guias e materiais educativos – Disponibilização de conteúdos sobre uso do comando de voz e atendimento inclusivo. ✅ Parcerias com instituições – Colaboração com entidades que promovem acessibilidade para aprimorar a formação dos motoristas.

3. Tutoriais no Aplicativo
✅ Vídeos explicativos – O aplicativo conta com tutoriais interativos, ensinando usuários a utilizar o comando de voz e outras funcionalidades. ✅ Guias acessíveis – Materiais em áudio e texto para atender diferentes perfis de usuários. ✅ Testes práticos – Simulações dentro do app para garantir que os usuários se sintam confortáveis com a tecnologia.

4. Captação de Leads
✅ Campanhas digitais – Estratégias de marketing para atrair novos usuários e motoristas. ✅ Parcerias estratégicas – Colaboração com empresas e instituições para ampliar a base de usuários. ✅ Eventos e demonstrações – Apresentações públicas para divulgar a tecnologia assistiva da Ver-TI.

A Ver-TI está focada em crescimento sustentável e impacto social, garantindo que sua tecnologia assistiva alcance o maior número possível de pessoas.', NULL, 'VER-TI MOBILIDADE URBANA LTDA', NULL, 'time-import-0294'),
  ('time_import_0295', NULL, 'joaoemanuelverissimo@gmail.com', 'João Emanuel', NULL, NULL, 'Os calangos', NULL, 'time-import-0295'),
  ('time_import_0296', 'Total', 'joaoemanuelverissimo@gmail.com', 'João Emanuel', 'Kkk', NULL, 'Os calangos', NULL, 'time-import-0296'),
  ('time_import_0297', 'Total', 'joaoemanuelverissimo@gmail.com', 'João Emanuel', 'Kkkhdjkpfd', NULL, 'Os calangos', NULL, 'time-import-0297'),
  ('time_import_0298', 'Parcial', 'conrado.vitor@epistemic.com.br', 'Conrado de Vitor', 'Conrado é sócio e CTO da empresa. É responsável pela parte técnica do Epistemic App e do Aurora. O Aurora ainda não está no mercado. É um aparelho de eletroencefalograma vestíve, sem fios, eletrodos secos, e que não precisa de especialistas para sua colocação.', NULL, 'Epistemic', NULL, 'time-import-0298'),
  ('time_import_0299', 'Parcial', 'conrado.vitor@epistemic.com.br', 'Conrado de Vitor', 'Conrado é sócio e CTO da empresa. É responsável pela parte técnica do Epistemic App e do Aurora. O Aurora ainda não está no mercado. É um aparelho de eletroencefalograma vestíve, sem fios, eletrodos secos, e que não precisa de especialistas para sua colocação.
Não consegui inserir mais integrantes, mas temos duas desenvolvedoras de software/app: Adriana Cerdeira e Vivian Sanchez. E a Sarah que é reponsável pelo marketing e comercial.', NULL, 'Epistemic', NULL, 'time-import-0299'),
  ('time_import_0300', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0300'),
  ('time_import_0301', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0301'),
  ('time_import_0302', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0302'),
  ('time_import_0303', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0303'),
  ('time_import_0304', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0304'),
  ('time_import_0305', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0305'),
  ('time_import_0306', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0306'),
  ('time_import_0307', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0307'),
  ('time_import_0308', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0308'),
  ('time_import_0309', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0309'),
  ('time_import_0310', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0310'),
  ('time_import_0311', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0311'),
  ('time_import_0312', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0312'),
  ('time_import_0313', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0313'),
  ('time_import_0314', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0314'),
  ('time_import_0315', 'Parcial', 'deni_duarte@hotmail.com', 'Denise Tamara Duarte Toledo Miranda', 'Profissional de finanças com mais de 11 anos de experiência em Finanças Corporativas, atuando em diversas áreas de negócios, com foco atual em ambientes dinâmicos e de alta inovação, como startups. Iniciei minha carreira na GE como trainee em Finanças na região da América Latina, com passagens pelo Brasil e México. Após concluir o programa, ingressei na divisão de Energias Renováveis da GE, onde atuei em diversas funções nas áreas de Finanças, Fusões & Aquisições e Finanças da Cadeia de Suprimentos, com responsabilidades tanto locais quanto globais.
Atualmente atua como CFO divisional da Microsoft França, apoiando todas as operações do setor público francês, além das áreas de Suporte e Serviços em diferentes segmentos. Aplicando essa bagagem em ambientes de startups e inovação, contribuindo para o crescimento sustentável com visão estratégica e foco em resultados.', NULL, 'EmpatIA', NULL, 'time-import-0315'),
  ('time_import_0316', 'Parcial', 'andressa.rospirski@gmail.com', 'ANDRESSA ROSPIRSKI', 'Graduada em Administração, especialista em Gereciamento de Projetos e Mestre em Gestão, Tecnologia e Sustentabilidade.

No EmpatIA sou responsável pelo gerenciamento de projetos, apoiando a definição de escopo e direcionamento do nosso projeto e produto, realizando o acompanhamento do cronograma, prazos e entregas, dando o máximo para que tudo ocorra conforme o planejado."', NULL, 'EmpatIA', NULL, 'time-import-0316'),
  ('time_import_0317', 'Total', 'daniele.matias@wattconsultoria.com.br', 'Daniele da Silva Matias', 'Participa ativamente da construção técnica e estratégica do projeto.', NULL, 'Watt Consultoria', NULL, 'time-import-0317'),
  ('time_import_0318', 'Total', 'gabriel.oliveira@wattconsultoria.com.br', 'Gabriel de Oliveira e Silva', 'Atua na definição de escopo, estratégias e entregas do projeto.', NULL, 'Watt Consultoria', NULL, 'time-import-0318'),
  ('time_import_0319', 'Total', 'rodrigo.silva@wattconsultoria.com.br', 'Rodrigo Rocha da Silva', 'Responsável pela elaboração de conteúdos, revisão e estruturação geral do projeto.', NULL, 'Watt Consultoria', NULL, 'time-import-0319'),
  ('time_import_0320', 'Total', 'andre.andrade@wattconsultoria.com.br', 'André Alves de Andrade', 'Participa ativamente da construção técnica e estratégica do projeto.', NULL, 'Watt Consultoria', NULL, 'time-import-0320'),
  ('time_import_0321', 'Total', 'tebp@discente.ifpe.edu.br', 'Thiago Ewerton Barros Pereira', 'Desenvolvedor de Hardware', NULL, 'Synesthesia Vision', NULL, 'time-import-0321'),
  ('time_import_0322', 'Total', 'cabm@discente.ifpe.edu.br', 'Clara Alves Bezerra Moura', 'Desenvolvedor de Software', NULL, 'Synesthesia Vision', NULL, 'time-import-0322'),
  ('time_import_0323', 'Total', 'Lhfp1@discente.ifpe.edu.br', 'Luiz Henrique Ferreira Pavão', 'Desenvolvedor de Software', NULL, 'Synesthesia Vision', NULL, 'time-import-0323'),
  ('time_import_0324', 'Parcial', 'gilmarbrito@recife.ifpe.edu.br', 'Gilmar Gonçalves de Brito', 'Desenvolvedor de Hardware', NULL, 'Synesthesia Vision', NULL, 'time-import-0324'),
  ('time_import_0325', 'Integral', NULL, NULL, 'Idealizadora', NULL, 'Postura +', 'jacilc@hotmail.com', 'time-import-0325'),
  ('time_import_0326', 'Parcial', NULL, NULL, 'Idealizadora', NULL, 'Postura +', 'jacilc@hotmail.com', 'time-import-0326'),
  ('time_import_0327', 'Parcial', 'diiogoco@gmail.com', 'Diogo Cavalcanti Oliveira', 'Engenheiro civil graduado na POLI-UPE, Mestrado em tecnologia e gestão realizado na POLI-UPE, MBA em Gerenciamento de Projetos pela FGV, com atuação em Soluções de engenharia para industria. Participação acadêmica em projetos com tecnologia aplicadas a construção.', NULL, 'Fluxo Livre', NULL, 'time-import-0327'),
  ('time_import_0328', 'Parcial', 'brunocavalcanti@gmail.com', 'Bruno Cavalcanti Oliveira', 'Administrador formado pela FCAP-UPE,  PMP (Project Management Professional) , com forte atuação emgerencimaento de projetos criativos, projetos de tecnologia e atuação com gestão de empresas.', NULL, 'Fluxo Livre', NULL, 'time-import-0328'),
  ('time_import_0329', 'Parcial', 'irenotiburcio@gmail.com', 'Ireno Tibúrcio Cavalcanti Neto', 'Graduado em Engenharia Civil (2009-2012), especialista em Estruturas de Concreto Armado e Fundações (2014-2016), mestre em Engenharia Civil e Ambiental (2016-2019). Experiência em Engenharia Civil, com ênfase em obras públicas e programas habitacionais, análise técnico-financeira de convênios e operações de financiamento, projetos e execução de obras de infraestrutura e cálculo estrutural.', NULL, 'Fluxo Livre', NULL, 'time-import-0329'),
  ('time_import_0330', 'Integral', NULL, NULL, 'Diretor Executivo', NULL, 'Azul Tecnologia', 'thiago.ac.araujo@gmail.com', 'time-import-0330'),
  ('time_import_0331', 'Parcial', 'ruben@saveadd.com.br', 'Ruben Lício Reis', 'Ruben Lício Reis é especialista em tecnologia da informação com mais de 18 anos de experiência em desenvolvimento de sistemas e arquitetura de software. Cofundador e CTO da SaveAdd, é responsável por liderar a construção e evolução da plataforma, com foco em soluções escaláveis e seguras. Tem ampla vivência com tecnologias como Node.js, React, AWS, além de conhecimento em governança de TI, metodologias ágeis (Scrum) e segurança da informação (ISO/IEC 27002).', NULL, 'SaveAdd', NULL, 'time-import-0331'),
  ('time_import_0332', 'Total', 'veronicabierhals1@gmail.com', 'Verônica', 'Desenvolvedora Full Stack com sólida formação em desenvolvimento de software, expertise em backend e frontend, e experiência prática em tecnologias modernas como Node.js, React.js e Python. Atualmente, atua como profissional autônoma (PJ), oferecendo serviços de manutenção, correção de bugs, implementação de melhorias e desenvolvimento de novos sistemas. Também realiza análises de dados e criação de dashboards em Power BI.', NULL, 'SaveAdd', NULL, 'time-import-0332'),
  ('time_import_0333', 'Parcial', 'kfranca.xavier@gmail.com', 'Karla Xavier', 'Com quase 23 anos de experiência em marketing e eventos, Karla possui um profundo conhecimento no desenvolvimento de projetos de marketing e brand experience, bem como na organização e execução de eventos corporativos, culturais e de tecnologia. Sua experiência em coordenar equipes multidisciplinares, incluindo comunicação, design e conteúdo, é crucial para a organização e operacionalização de eventos, e para garantir que as soluções da SaveAdd estejam alinhadas com as necessidades do mercado e dos stakeholders.', NULL, 'SaveAdd', NULL, 'time-import-0333'),
  ('time_import_0334', 'Parcial', 'epriscilagarcia@gmail.com', 'Elaine Priscila de Andrade Garcia', 'Desenvolvimento de Modelos de Performance Sustentável: Sua expertise em performance corporativa e desenvolvimento econômico permite desenhar modelos de governança e desempenho que alinhem rentabilidade com impacto positivo, reforçando a credibilidade da SaveAdd como negócio de impacto.
Análise de Dados e Inteligência de Mercado: Elaine pode fortalecer a inteligência de dados da plataforma, contribuindo na análise estatística das operações e na geração de insights para decisões mais assertivas, sobretudo no uso da IA aplicada à logística e à redução de perdas.', NULL, 'SaveAdd', NULL, 'time-import-0334'),
  ('time_import_0335', 'Total', 'stefaneksilveiraa@gmail.com', 'Stefane Silveira', 'Gerente de produto - Product Design, Gestão de Projetos e Gestão de Produto, em projetos de diversos setores como moda e e-commerce, criando produtos digitais utilizado por grande empresas do ramo, como o Grupo Soma; Saúde e bem-estar, colaborando na criação de um produto digital para a prefeitura do Recife, com mais de 100 mil usuários ativos; e Deeptech com foco em Inteligência Artificial. Experiência em gestão de projetos e gestão de Produto.', NULL, 'Mosca Branca deeptech', NULL, 'time-import-0335'),
  ('time_import_0336', 'Total', 'rmas@cin.ufpe.br', 'Ricardo martins', 'Coordenador técnico do projeto - 
Doutor  em Ciência da Computação pelo Centro de Informática da Universidade Federal de Pernambuco (2003), onde atualmente é professor associado. Atuou como professor no Departamento de Ciência da Computação da Universidade Federal de Lavras (1998-2010), coordenando projetos como o Mestrado Interinstitucional com a UFMG e liderando o Grupo de Otimização e Inteligência Computacional (GOIC). Possui experiência em otimização, machine learning, tomada de decisão sob incerteza e computação quântica, com pós-doutorados na AT&T Labs Research (EUA) e na Queen Mary University of London. Trabalhou emcolaboração com instituições renomadas, como Motorola, HP, SENAI-PE, SUAPE-PE, e empresas de tecnologia no Brasil e no exterior.', NULL, 'Mosca Branca deeptech', NULL, 'time-import-0336'),
  ('time_import_0337', 'Total', 'Manuellegraciano@gmail.com', 'Manuelle Graciano Ferreira', 'Como médica, Manuelle atuará diretamente na ideação e validação da construção da solução', NULL, 'Cuida Recife', NULL, 'time-import-0337'),
  ('time_import_0338', 'Total', 'gustavohlma8@gmail.com', 'Gustavo Henrique Lima Mendes de Almeida', 'Gustavo atuará como desenvolvedor fullstack da solução', NULL, 'Cuida Recife', NULL, 'time-import-0338'),
  ('time_import_0339', 'Total', 'gabifc_graciano@hotmail.com', 'Gabriella Graciano de Souza', 'Gabriella atuará como ux ui designer da solução, além de prestar assistência no desenvolvimento frontend', NULL, 'Cuida Recife', NULL, 'time-import-0339'),
  ('time_import_0340', 'Total', 'Academicosdani@gmail.com', 'Daniela Menezes', 'Responsável pelo desenvolvimento da estratégia de negócios. Atuou na definição do modelo B2B, identificação de parcerias estratégicas e estruturação do plano de escalabilidade. Foi um dos integrantes que representou o time na apresentação final do pitch, explicando com clareza sobre do que o projeto se trata e a proposta de valor.', NULL, 'InVision', NULL, 'time-import-0340'),
  ('time_import_0341', 'Total', 'pablo13012001@gmail.com', 'Pablo Vinicius Nascimento', 'Atuou na pesquisa de mercado, validação do problema e construção da proposta de valor. Contribuiu para a elaboração do discurso de impacto social e no levantamento de potenciais clientes e parceiros, com foco em shoppings, hospitais, escolas e espaços culturais.', NULL, 'InVision', NULL, 'time-import-0341'),
  ('time_import_0342', 'Total', 'L-eduardo96@hotmail.com', 'Luiz Eduardo Diniz da Silva Araújo', 'Responsável por definir a viabilidade econômica e estruturar o modelo de monetização. Trabalhou na análise de custo-benefício, estrutura de receitas e plano de implementação da solução nos ambientes que temos como alvo.', NULL, 'InVision', NULL, 'time-import-0342'),
  ('time_import_0343', 'Total', 'ddmdoliveira@gmail.com', 'Deyvid Diogo Marques de Oliveira', 'Atuei diretamente na arquitetura da solução, integração com redes Wi-Fi e a forma como esse sistema de localização indoor impacta na vida das pessoas. Fiquei responsável por elaborar e apresentar o pitch junto a Dani e expliquei os aspectos técnicos do projeto. Realizei a demonstração técnica e destaquei o diferencial tecnológico do sistema NavegaVis.', NULL, 'InVision', NULL, 'time-import-0343'),
  ('time_import_0344', 'Total', 'livia.clarissa37@gmail.com', 'Livia Clarissa', 'Trabalhou na prototipação da interface interativa e gamificada de mapeamento. Atuou no desenvolvimento da lógica de navegação e nas instruções verbais do sistema, garantindo uma experiência acessível para o usuário final.', NULL, 'InVision', NULL, 'time-import-0344'),
  ('time_import_0345', 'Total', 'ivipnascimento@hotmail.com', 'Ivisson Pereira Do Nascimento Alves', 'Responsável pela implementação do sistema de cálculo de posicionamento baseado na intensidade de sinal Wi-Fi. Contribuiu com testes de funcionalidade, simulações e otimização do desempenho da plataforma.', NULL, 'InVision', NULL, 'time-import-0345'),
  ('time_import_0346', 'Total', 'anacarolalvescosta@gmail.com', 'Ana Carolyne Alves Costa', 'Responsável pela definição da experiência do usuário, estruturação de fluxos, wireframes e validação de soluções com foco na usabilidade e aderência ao público-alvo.', NULL, NULL, NULL, 'time-import-0346'),
  ('time_import_0347', 'Total', 'aam4@cin.ufpe.br', 'Arthur Alves Marsaro', 'Atuação focada em inovação, definição de estratégias e desenvolvimento de soluções digitais alinhadas aos objetivos do projeto.', NULL, NULL, NULL, 'time-import-0347'),
  ('time_import_0348', 'Total', 'jvitormergulho@gmail.com', 'João Vitor Lima Mergulhão', 'Responsável pelo desenvolvimento da aplicação, definição da arquitetura de software e estruturação da infraestrutura necessária para garantir performance e estabilidade.', NULL, NULL, NULL, 'time-import-0348'),
  ('time_import_0349', 'Total', 'chaves.lucas.ferrer@gmail.com', 'Lucas Chaves Sampaio Ferrer', 'Estudante', NULL, 'CAIS', NULL, 'time-import-0349'),
  ('time_import_0350', 'Total', 'sromario577@gmail.com', 'Maycon Romario Dos Santos Pereira', 'Estudante / Estagiário', NULL, 'CAIS', NULL, 'time-import-0350'),
  ('time_import_0351', 'Total', 'henriqesl16@gmail.com', 'Henrique Silva de Lima', 'Estudante / Estagiário', NULL, 'CAIS', NULL, 'time-import-0351'),
  ('time_import_0352', 'Total', 'mdfsf@cesar.school', 'Messias Daniel Ferreira da Silva Filho', 'Estudante', NULL, 'CAIS', NULL, 'time-import-0352'),
  ('time_import_0353', 'Total', 'carloshenrique.stow@gmail.com', 'Carlos Henrique Stow Chaves', 'CTO and CPO', NULL, 'GIRO IA', NULL, 'time-import-0353'),
  ('time_import_0354', NULL, NULL, 'a', NULL, NULL, 'a', NULL, 'time-import-0354'),
  ('time_import_0355', NULL, NULL, 'b', NULL, NULL, 'a', NULL, 'time-import-0355'),
  ('time_import_0356', NULL, NULL, 'c', NULL, NULL, 'a', NULL, 'time-import-0356'),
  ('time_import_0357', NULL, NULL, 'd', NULL, NULL, 'a', NULL, 'time-import-0357'),
  ('time_import_0358', NULL, NULL, 'e', NULL, NULL, 'a', NULL, 'time-import-0358'),
  ('time_import_0359', NULL, NULL, 'f', NULL, NULL, 'a', NULL, 'time-import-0359'),
  ('time_import_0360', NULL, NULL, 'g', NULL, NULL, 'a', NULL, 'time-import-0360'),
  ('time_import_0361', NULL, NULL, 'h', NULL, NULL, 'a', NULL, 'time-import-0361'),
  ('time_import_0362', NULL, NULL, 'i', NULL, NULL, 'a', NULL, 'time-import-0362'),
  ('time_import_0363', NULL, NULL, 'j', NULL, NULL, 'a', NULL, 'time-import-0363'),
  ('time_import_0364', NULL, NULL, 'k', NULL, NULL, 'a', NULL, 'time-import-0364'),
  ('time_import_0365', NULL, NULL, 'l', NULL, NULL, 'a', NULL, 'time-import-0365'),
  ('time_import_0366', 'Total', 'jeferson.lopes@enkode.tech', 'Jeferson Lopes', 'Frontend', NULL, 'Enkode', NULL, 'time-import-0366'),
  ('time_import_0367', 'Total', 'sandy.vieira@enkode.tech', 'Sandy Vieira', 'Product Desing', NULL, 'Enkode', NULL, 'time-import-0367'),
  ('time_import_0368', 'Total', 'gabriel.morais@enkode.tech', 'Gabriel Morais', 'Backend', NULL, 'Enkode', NULL, 'time-import-0368'),
  ('time_import_0369', 'Total', 'luiz.neto@enkode.tech', 'Luiz Neto', 'Backend', NULL, 'Enkode', NULL, 'time-import-0369'),
  ('time_import_0370', 'Total', 'andre.luiz@enkode.tech', 'Andre Luiz', 'Mobile', NULL, 'Enkode', NULL, 'time-import-0370'),
  ('time_import_0371', 'Total', 'rafael.morais@enkode.tech', 'Rafael Morais', 'Mobile', NULL, 'Enkode', NULL, 'time-import-0371'),
  ('time_import_0372', NULL, NULL, NULL, NULL, NULL, 'Horus', NULL, 'time-import-0372'),
  ('time_import_0373', NULL, NULL, 'A', NULL, NULL, 'Horus', NULL, 'time-import-0373'),
  ('time_import_0374', NULL, NULL, 'Hbb', 'Jj', NULL, 'Horus', NULL, 'time-import-0374'),
  ('time_import_0375', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0375'),
  ('time_import_0376', 'Parcial', 'diiogoco@gmail.com', 'Diogo Cavalcanti Oliveira', 'Diretor na Probeton Engenharia há 11 anos. Graduado em Engenharia Civil pela POLI-UPE, com especialização em Estruturas de Concreto (UNIP), MBA em Gerenciamento de Projetos (FGV) e Mestrado em Tecnologia e Gestão na Construção (POLI-UPE).

Minha experiência inclui gestão de projetos, liderança de equipes e otimização de processos, atuando nos setores de projetos, comercial e suprimentos. Fui um dos fundadores da OTIMIZA, startup selecionada para aceleração pelo CESAR, onde aprofundei minha vivência em inovação e tecnologia. Meu foco está em obras industriais, processos estratégicos de negócios e implantação de soluções voltadas a resultados e melhoria contínua.', NULL, 'Fluxo Livre', NULL, 'time-import-0376'),
  ('time_import_0377', 'Parcial', 'irenotiburcio@gmail.com', 'Ireno Tibúrcio Cavalcanti Neto', 'Graduado em Engenharia Civil (2009-2012), especialista em Estruturas de Concreto Armado e Fundações (2014-2016), mestre em Engenharia Civil e Ambiental (2016-2019). Experiência em Engenharia Civil, com ênfase em obras públicas e programas habitacionais, análise técnico-financeira de convênios e operações de financiamento, projetos e execução de obras de infraestrutura e cálculo estrutural. Oficial da Arma de Engenharia do Exército Brasileiro (2008-2013).', NULL, 'Fluxo Livre', NULL, 'time-import-0377'),
  ('time_import_0378', 'Parcial', 'brunocavalcanti@gmail.com', 'Bruno Cavalcanti Oliveira', 'Graduado em Administração pela FCAP(UPE), Gerente de projetos PMP, MBA em Gerenciamento de Projetos pelo IBMEC. Tem larga experiencia com gestão de projetos criativos, atuando com parques tecnologicos e startups.', NULL, 'Fluxo Livre', NULL, 'time-import-0378'),
  ('time_import_0379', 'Parcial', 'costa.mercia@academico.ifpb.edu.br', 'Maria Mércia Duarte Costa', NULL, NULL, 'MEDIBOX', NULL, 'time-import-0379'),
  ('time_import_0380', 'Parcial', 'oliveira.italo@academico.ifpb.edu.br', 'Ítalo de Oliveira Batista', NULL, NULL, 'MEDIBOX', NULL, 'time-import-0380'),
  ('time_import_0381', 'Parcial', 'ramon.alves@academico.ifpb.edu.br', 'Ramon Alves Patricio de Souza', NULL, NULL, 'MEDIBOX', NULL, 'time-import-0381'),
  ('time_import_0382', 'Parcial', 'oliveira.italo@academico.ifpb.edu.br', 'Ítalo de Oliveira Batista', 'Desenvolvedor do aplicativo', NULL, 'MEDIBOX', NULL, 'time-import-0382'),
  ('time_import_0383', 'Parcial', 'costa.mercia@academico.ifpb.edu.br', 'Maria Mércia Duarte Costa', 'Projetista e desenvolvedora da parte eletrônica', NULL, 'MEDIBOX', NULL, 'time-import-0383'),
  ('time_import_0384', 'Parcial', 'ramon.alves@academico.ifpb.edu.br', 'Ramon Alves Patricio de Souza', 'Desenhista projetista', NULL, 'MEDIBOX', NULL, 'time-import-0384'),
  ('time_import_0385', 'Total', 'luiz@penna.tec.br', 'André Freitas', 'Profissional que atua a mais de 15 anos no segmento ambiental e mais de 10 anos na companhia responsável pela limpeza urbana do município do Rio de Janeiro na área de Fiscalização e Lei.', NULL, 'RaiiF - Recife em Ação Inovadora e Inteligente para o Futuro', NULL, 'time-import-0385'),
  ('time_import_0386', 'Total', 'luiz@penna.tec.br', 'André Freitas', 'André é um profissional com formação em Meio Ambiente e atua a mais de 15 anos no segmento de limpeza urbana na municipalidade, mais especificamente na área de Fiscalização e Lei, com participação em contratos e produtos.
Como analista de negócio, vem direcionando os entregáveis no escopo legal e processual no tocante a fiscalização.', NULL, 'RaiiF', NULL, 'time-import-0386'),
  ('time_import_0387', 'Parcial', 'danielcesarpi@gmail.com', 'Daniel César Menêses de Carvalho', 'Professor. Análista espacial e elaborador de mapas de saúde', NULL, 'REbate', NULL, 'time-import-0387'),
  ('time_import_0388', 'Parcial', 'gleiciolive@hotmail.com', 'Leydiane Gleici Oliveira Medeiros', 'Monitora de avaliação de indicadores físicos', NULL, 'REbate', NULL, 'time-import-0388'),
  ('time_import_0389', 'Total', 'lyannacamila@gmail.com', 'Lyanna Camila César Menêses de Carvalho', 'Advogada. Responsável pela conformidade do aplicado ao LGPD etermos de consentimento', NULL, 'REbate', NULL, 'time-import-0389'),
  ('time_import_0390', 'Total', 'rodrigo.bernardino@dissertio.com.br', 'Rodrigo Bernardino', 'Cientista de Dados e Especialista em Desenvolvimento de Sistemas Multi Agentes de IA', NULL, 'SUSIA', NULL, 'time-import-0390'),
  ('time_import_0391', 'Total', 'rodrigo.bernardino@dissertio.com.br; emanuel.vieira@dissertio.com.br', 'Rodrigo Bernardino, Emanuel Vieira', 'Cientista de Dados e Especialista em Desenvolvimento de Sistemas Multi Agentes de IA', NULL, 'SUSIA', NULL, 'time-import-0391'),
  ('time_import_0392', 'Total', 'llsc@cesar.school', 'Lucas Lopes Soares Cabral', 'Product Designer', NULL, 'Cesinhas', NULL, 'time-import-0392'),
  ('time_import_0393', 'Total', 'tcmbs@cesar.school', 'Thiago César Mattos', 'UX Designer', NULL, 'Cesinhas', NULL, 'time-import-0393'),
  ('time_import_0394', 'Parcial', 'vcbpc@cesar.school', 'Vítor Phaelante', 'Product Designer', NULL, 'Cesinhas', NULL, 'time-import-0394'),
  ('time_import_0395', 'Total', 'pqla@cesar.school', 'Pedro Queiroz Luis de Assis', 'Cientista da computação', NULL, 'Cesinhas', NULL, 'time-import-0395'),
  ('time_import_0396', 'Total', 'evog@cesar.school', 'Eduardo Vaz de Oliveira Gerab', 'Cientista da computação', NULL, 'Cesinhas', NULL, 'time-import-0396'),
  ('time_import_0397', 'Total', 'tebp@discente.ifpe.edu.br', 'Thiago Ewerton Barros Pereira', 'Desenvolvimento de Hardware', NULL, 'Synesthesia Vision', NULL, 'time-import-0397'),
  ('time_import_0398', 'Total', 'luizpavao35@gmail.com', 'Luiz Henrique Ferreira Pavão', 'Desenvolvimento de Sistemas', NULL, 'Synesthesia Vision', NULL, 'time-import-0398'),
  ('time_import_0399', 'Total', 'lcabm@discente.ifpe.edu.br', 'Clara Alves Bezerra Moura', 'Desenvolvimento de Sistemas', NULL, 'Synesthesia Vision', NULL, 'time-import-0399'),
  ('time_import_0400', 'Parcial', 'gilmarbrito@recife.ifpe.edu.br', 'Gilmar Gonçalves de Brito', 'Desenvolvimento de Hardware', NULL, 'Synesthesia Vision', NULL, 'time-import-0400'),
  ('time_import_0401', 'Parcial', 'jorge@lauracare.life', 'Jorge Augusto Fressatto', 'Secretário Geral', NULL, 'ROBO LAURA', NULL, 'time-import-0401'),
  ('time_import_0402', 'Parcial', 'matheusiori11@gmail.com', 'Matheus Valente Lima', 'Desenvolvimento de produto', NULL, 'BOB', NULL, 'time-import-0402'),
  ('time_import_0403', 'Total', 'matheusiori11@gmail.com', 'Matheus Valente de Lima', 'Gestão do projeto, design do produto.', NULL, 'BOB', NULL, 'time-import-0403'),
  ('time_import_0404', 'Total', 'Flaviokubota@ufpr.br', 'Flávio Issao Kubota', 'Projeto conceitual', NULL, 'BOB', NULL, 'time-import-0404'),
  ('time_import_0405', 'Total', 'giuliana.venter@ufpr.br', 'Giuliana Sardi Venter', 'Projeto do sistema eletrônico', NULL, 'BOB', NULL, 'time-import-0405'),
  ('time_import_0406', 'Total', 'gabrielnegrao@ufpr.br', 'Gabriel de Souza negrão', 'Programação', NULL, 'BOB', NULL, 'time-import-0406'),
  ('time_import_0407', 'Total', 'marialuciaokimoto@gmail.com', 'Maria Lúcia Leite Ribeiro Okimoto', 'Gestão de projeto, design do produto e ergonomia', NULL, 'BOB', NULL, 'time-import-0407'),
  ('time_import_0408', 'Total', 'rodrigo@tcsindustrial.com.br', 'Rodrigo Afonso Araújo', 'Diretor de Operações:
- Prospecção de novos parceiros;
- Gerenciamento do Time;
- Alinhamento dos processos internos;', NULL, 'Luminus', NULL, 'time-import-0408'),
  ('time_import_0409', 'Total', 'luiz.antunes@vamosajudai.com.br', 'Luiz Ferreira Antunes', 'Motorista:
- Coleta e entrega dos alimentos', NULL, 'Luminus', NULL, 'time-import-0409'),
  ('time_import_0410', 'Total', 'luiz.silverio@vamosajudai.com.br', 'Luiz José da Paixão Silvério', 'Auxiliar de Carga:
- Embarque e desembarque de alimentos', NULL, 'Luminus', NULL, 'time-import-0410'),
  ('time_import_0411', 'Total', 'denise@vamosajudai.com.br', 'Denise Alves de Oliveira Pires', 'Captadora de recursos:
- Responsável por captar novos apoiadores;
- Responsável por buscar novas oportunidades no mercado;', NULL, 'Luminus', NULL, 'time-import-0411'),
  ('time_import_0412', 'Total', 'rodolpho.lisboa@tcsindustrial.com.br', 'Rodolpho Roland Alves Lisboa', 'Auxiliar administrativo:
- Responsável pelo setor Financeiro;
- Responsável pelo setor Administrativo;
- Responsável pelo setor de Pessoal;', NULL, 'Luminus', NULL, 'time-import-0412'),
  ('time_import_0413', 'Parcial', 'danielcesarpi@gmail.com', 'Daniel César Menêses de Carvalho', 'Colaborador do projeto - inovação', NULL, 'CincoduQuatro', NULL, 'time-import-0413'),
  ('time_import_0414', 'Parcial', 'adrianofrs@frn.uespi.br', 'Adriano Olivier de Freitas e Silva', 'Colaborador do projeto - pesquisa', NULL, 'CincoduQuatro', NULL, 'time-import-0414'),
  ('time_import_0415', 'Total', 'yamaraarruda@gmail.com', 'Yamara Arruda Silva de Menezes', 'Biogestão de Resíduos Orgânicos', NULL, 'CincoduQuatro', NULL, 'time-import-0415'),
  ('time_import_0416', 'Parcial', 'celestelimagama@gmail.com', 'Maria Celeste Lima Gama', 'Getão Financeira', NULL, 'BDI Cooptec', NULL, 'time-import-0416'),
  ('time_import_0417', 'Parcial', 'marluceribeiroc@hotmail.com', 'Marluce Ribeiro', 'Economista com atuação estratégica em Governança, Gestão de Riscos, Compliance e Controle Interno. Experiente na análise de processos organizacionais, otimização de recursos e avaliação de indicadores econômico-financeiros. Desenvolve e monitora projetos em conformidade com normas regulatórias, contribuindo para a eficiência administrativa e a geração de valor. Perfil analítico, visão sistêmica e foco em resultados sustentáveis.', NULL, 'BDI Cooptec', NULL, 'time-import-0417'),
  ('time_import_0418', 'Parcial', NULL, 'Jônathas de Barros Gonçalves', 'Produção audio visual, redes sociais', NULL, 'BDI Cooptec', NULL, 'time-import-0418'),
  ('time_import_0419', 'Parcial', 'amandaires@gmail.com', 'Amanda Aires Vieira', 'Economista pela Universidade Federal de Pernambuco com extensão universitária na Universität Zürich, na Suíça, mestre em economia com dissertação premiada pelo III prêmio de economia bancária promovido pela Fabraban - Federação Brasileira de Bancos. O objeto da dissertação é o uso da inteligência artificial (redes neurais artificiais) para previsão de falência bancária no Brasil. O estudo também foi utilizado como marco prudencial pelo Banco Nacional de Angola. Doutora em economia pela Universidade Federal de Pernambuco com doutorado sanduíche pela Université Laval, no Canadá. Especialista em ciência de dados e uso de inteligência artificial para solução de problemas do setor público, tendo desenvolvido ferramentas para a Secretaria de Desenvolvimento Profissional e Empreendedorismo - SEDEPE/PE durante sua atuação como secretária da pasta.', NULL, 'BDI Cooptec', NULL, 'time-import-0419'),
  ('time_import_0420', 'Parcial', 'ecogabrielgon@gmail.com', 'GABRIEL OLIVEIRA GONCALVES', 'Gerente de TI', NULL, 'BDI Cooptec', NULL, 'time-import-0420'),
  ('time_import_0421', 'Parcial', 'maximilian.ulachmann@ufpe.br', 'Maximilian Udo Lachmann', 'Cientita de dados', NULL, 'BDI Cooptec', NULL, 'time-import-0421'),
  ('time_import_0422', 'Parcial', 'caroline.bona@yahoo.com.br', 'Caroline Pereira Bona', 'Gestão de projetos', NULL, 'BDI Cooptec', NULL, 'time-import-0422'),
  ('time_import_0423', 'Parcial', 'fholanda@academico.ufs.br', 'Francisco Sandro Rodrigues', 'Analista em segurança alimentar', NULL, 'BDI Cooptec', NULL, 'time-import-0423'),
  ('time_import_0424', 'Parcial', NULL, 'Caio Gabriel Viana Coutinho', 'Analista de Dados', NULL, 'BDI Cooptec', NULL, 'time-import-0424'),
  ('time_import_0425', 'Parcial', NULL, 'Giuseppe Trevisan Cruz', 'Cientista de dados', NULL, 'BDI Cooptec', NULL, 'time-import-0425'),
  ('time_import_0426', 'Parcial', NULL, 'Dionnys Santos Marinho', 'Engenheiro de dados', NULL, 'BDI Cooptec', NULL, 'time-import-0426'),
  ('time_import_0427', 'Total', 'jaqueline@seeuapp.com.br', 'Jaqueline Ferreira de Araujo', 'CTO e Diretora de Desenvolvimento Formação: Concluindo Engenharia Civil no Instituto Federal de Alagoas (IFAL). Programadora autodidata com especialização em desenvolvimento de soluções assistivas. Expertise: Especialista em cidades inteligentes para pessoas cegas. Desenvolvimento de sistemas de navegação assistida. Programação avançada com foco em acessibilidade. Integração de sistemas de ecolocalização. Diferencial: Inspirada por seus avós e tio que eram cegos, Jaqueline traz uma compreensão profunda das necessidades familiares e sociais de pessoas com deficiência visual, traduzindo essas demandas em soluções tecnológicas inovadoras.', NULL, 'See U', NULL, 'time-import-0427'),
  ('time_import_0428', 'Parcial', 'chaveslima@gmail.com', 'Ricardo Chaves Lima', 'Econometria e Segurança Alimentar', NULL, 'BDI Cooptec', NULL, 'time-import-0428'),
  ('time_import_0429', 'Total', 'asfa@ic.ufal.br', 'Arthur Sendas Felix Almeida', 'CEO e Diretor de Tecnologia Formação: Graduado pela Universidade Estadual de
Ciências da Saúde de Alagoas (UNCISAL). Mestrando em Saúde Inteligente, com foco em tecnologias assistivas. Especialização em UX/UI Design para
acessibilidade. Expertise: Um dos únicos designers UX/UI do mundo especializado em interfaces para pessoas cegas e com deficiência visual severa. Especialista em desenvolvimento de sistemas autônomos. Profundo conhecimento em inteligência artificial e visão computacional. Experiência em processamento de linguagem natural. Diferencial: Como pessoa com deficiência visual severa, Arthur traz uma perspectiva única ao desenvolvimento de soluções assistivas, combinando seu conhecimento técnico com a vivência direta das necessidades dos usuários.', NULL, 'See U', NULL, 'time-import-0429'),
  ('time_import_0430', 'Parcial', 'willins_filho@hotmail.com', 'José Willins Soares Filho', 'Gestão de Projetos', NULL, 'BDI Cooptec', NULL, 'time-import-0430'),
  ('time_import_0431', 'Parcial', NULL, 'Maria Luiza Alagão', 'Auxiliar de pesquisa', NULL, 'BDI Cooptec', NULL, 'time-import-0431'),
  ('time_import_0432', 'Parcial', NULL, 'Lucas Flores', 'Formação: Mestrado em Economia. Especialização em gestão de negócios de
impacto. Experiência Profissional Adicional: Casa Azul Participações S/A –
Programa Delta-V (2023): Analista de Aceleração II, responsável por acompanhar
15 startups em estágio de ideação no programa Delta-V. Expertise: Planejamento
financeiro estratégico. Análise de viabilidade econômica. Gestão de investimentos.
Desenvolvimento de modelos de negócios sustentáveis. Diferencial: Sua experiência
em aceleração de startups e gestão de negócios de impacto fortalece a capacidade
da See U de alinhar inovação tecnológica a estratégias de mercado sólidas.', NULL, 'See U', NULL, 'time-import-0432'),
  ('time_import_0433', 'Parcial', NULL, 'Rodrigo Lustosa Peronico', 'Cientista de Dados e Matemático Formação: Graduação
em Licenciatura Plena em Matemática pela Universidade Federal Rural de
Pernambuco (2008). Mestrado e Doutorado em Tecnologias Energéticas e
Nucleares pela Universidade Federal de Pernambuco (2012 e 2018). Atuação na
See U: Cientista de Dados e Matemático: Desenvolvimento de algoritmos avançados
para o processamento de dados do aplicativo. Modelagem matemática aplicada à
navegação assistida e à ecolocalização, garantindo maior precisão e eficiência nos
sistemas de orientação. Criação de modelos preditivos para personalização do
aplicativo com base no comportamento dos usuários. Otimização dos sistemas de
reconhecimento de objetos e leitura de textos (OCR), utilizando métodos
matemáticos e computacionais avançados. Contribuições no Aprimoramento de IA e
Machine Learning: Desenvolvimento de algoritmos de aprendizado de máquina
para reconhecimento de padrões em ambientes complexos. Suporte técnico na
criação de sistemas que integram informações espaciais e feedback auditivo,
permitindo maior imersão e eficiência para os usuários. Aplicação de métodos
estatísticos avançados para a análise de dados coletados, auxiliando na melhoria
contínua da experiência do usuário. Diferencial: Rodrigo combina sua formação
acadêmica em modelagem matemática e computação com habilidades práticas para
resolver problemas complexos no desenvolvimento de tecnologias assistivas. Seu
trabalho aprimora a precisão dos algoritmos do See U, aumentando sua
confiabilidade e impacto.', NULL, 'See U', NULL, 'time-import-0433'),
  ('time_import_0434', 'Parcial', 'alineborgespsiquiatria@gmail.com', 'Aline Borges Bezerra', 'Consultora Médica', NULL, 'Clinitech', NULL, 'time-import-0434'),
  ('time_import_0435', 'Parcial', 'clinitech.saude@gmail.com', 'Ricardo Chaves Lima Filho', 'Engenheiro de Software', NULL, 'Clinitech', NULL, 'time-import-0435'),
  ('time_import_0436', 'Total', 'nicbroedel@gmail.com', 'Nicole Tavares Broedel', 'Administrativo', NULL, 'Clinitech', NULL, 'time-import-0436'),
  ('time_import_0437', 'Total', 'daniele.matias@wattconsultoria.com.br', 'Daniele da Silva Matias', 'Consultora de projeto e analista de marketing', NULL, 'Watt Consultoria', NULL, 'time-import-0437'),
  ('time_import_0438', 'Total', 'gabriel.oliveira@wattconsultoria.com.br', 'Gabriel de Oliveira e Silva', 'Desenvolvedor do produto e solução', NULL, 'Watt Consultoria', NULL, 'time-import-0438'),
  ('time_import_0439', 'Total', 'gabriel.oliveira@wattconsultoria.com.br', 'Rodrigo Rocha da Silva', 'Gerente de projetos e desenvolvedor', NULL, 'Watt Consultoria', NULL, 'time-import-0439'),
  ('time_import_0440', 'Total', 'andre.andrade@wattconsultoria.com.br', 'André Alves de Andrade', 'Consultor de projetos', NULL, 'Watt Consultoria', NULL, 'time-import-0440'),
  ('time_import_0441', 'Total', 'rodrigo@tcsindustrial.com.br', 'Rodrigo Afonso Araújo', 'Diretor de Operações:
- Prospecção de novos parceiros;
- Gerenciamento do Time;
- Alinhamento dos processos internos;', NULL, 'Associação Luminus', NULL, 'time-import-0441'),
  ('time_import_0442', 'Total', 'luiz.antunes@vamosajudai.com.br', 'Luiz Ferreira Antunes', 'Motorista:
- Coleta e entrega dos alimentos', NULL, 'Associação Luminus', NULL, 'time-import-0442'),
  ('time_import_0443', 'Total', 'luiz.silverio@vamosajudai.com.br', 'Luiz José da Paixão Silvério', 'Auxiliar de Carga:
- Embarque e desembarque de alimentos', NULL, 'Associação Luminus', NULL, 'time-import-0443'),
  ('time_import_0444', 'Total', 'denise@vamosajudai.com.br', 'Denise Alves de Oliveira Pires', 'Captadora de recursos:
- Responsável por captar novos apoiadores;
- Responsável por buscar novas oportunidades no mercado;', NULL, 'Associação Luminus', NULL, 'time-import-0444'),
  ('time_import_0445', 'Total', 'rodolpho.lisboa@tcsindustrial.com.br', 'Rodolpho Roland Alves Lisboa', 'Auxiliar administrativo:
- Responsável pelo setor Financeiro;
- Responsável pelo setor Administrativo;
- Responsável pelo setor de Pessoal;', NULL, 'Associação Luminus', NULL, 'time-import-0445'),
  ('time_import_0446', 'Total', 'rodrigo@tcsindustrial.com.br', 'Rodrigo Afonso Araújo', 'Diretor de Operações:
- Prospecção de novos parceiros;
- Gerenciamento do Time;
- Alinhamento dos processos internos;', NULL, 'Associação Luminus', NULL, 'time-import-0446'),
  ('time_import_0447', 'Total', 'luiz.antunes@vamosajudai.com.br', 'Luiz Ferreira Antunes', 'Motorista:
- Coleta e entrega dos alimentos', NULL, 'Associação Luminus', NULL, 'time-import-0447'),
  ('time_import_0448', 'Total', 'luiz.silverio@vamosajudai.com.br', 'Luiz José da Paixão Silvério', 'Auxiliar de Carga:
- Embarque e desembarque de alimentos', NULL, 'Associação Luminus', NULL, 'time-import-0448'),
  ('time_import_0449', 'Total', 'denise@vamosajudai.com.br', 'Denise Alves de Oliveira Pires', 'Captadora de recursos:
- Responsável por captar novos apoiadores;
- Responsável por buscar novas oportunidades no mercado;', NULL, 'Associação Luminus', NULL, 'time-import-0449'),
  ('time_import_0450', 'Total', 'rodolpho.lisboa@tcsindustrial.com.br', 'Rodolpho Roland Alves Lisboa', 'Auxiliar administrativo:
- Responsável pelo setor Financeiro;
- Responsável pelo setor Administrativo;
- Responsável pelo setor de Pessoal;', NULL, 'Associação Luminus', NULL, 'time-import-0450'),
  ('time_import_0451', 'Total', '21980208435', 'André Freitas', 'Profissional da área ambiental, com especialização em lei urbana e fiscalização. Atua a mais de 10 anos da companhia de limpeza urbana do Rio de Janeiro.', NULL, 'TrackMe', NULL, 'time-import-0451'),
  ('time_import_0452', 'Integral', 'josantino70@gmail.com', 'Joselia Mendes', 'Gestora de Comunicação', NULL, 'VER-TI MOBILIDADE URBANA LTDA', NULL, 'time-import-0452'),
  ('time_import_0453', 'Integral', 'demian.job@jobpe.com.br', 'Demián Barreto', 'Gestor  de Marketing', NULL, 'VER-TI MOBILIDADE URBANA LTDA', NULL, 'time-import-0453'),
  ('time_import_0454', 'Integral', 'jonrodriguesgd@gmail.com', 'Jon Rodrigues', 'Gestor de TI', NULL, 'VER-TI MOBILIDADE URBANA LTDA', NULL, 'time-import-0454'),
  ('time_import_0455', 'Integral', 'jumagnani1@gmail.com', 'Júlio César Magnani', 'Gestor de Contabilidade/RH', NULL, 'VER-TI MOBILIDADE URBANA LTDA', NULL, 'time-import-0455'),
  ('time_import_0456', 'Integral', 'contato@dmsassessoriacontabil.com.br', 'Domingos Miranda da Silva', 'Gestor de Financeiro', NULL, 'VER-TI MOBILIDADE URBANA LTDA', NULL, 'time-import-0456'),
  ('time_import_0457', 'Integral', 'vivianyasuhara@gmail.com / yasuharavivian@gmail.com', 'Vivian Yuri Yasuhara', 'Gestora de TI +55 35 8409-7439', NULL, 'VER-TI MOBILIDADE URBANA LTDA', NULL, 'time-import-0457'),
  ('time_import_0458', 'Integral', 'daniloCarvalhoCalado@Gmail.com', 'Danilo Carvalho Calado', 'Gestor de TI', NULL, 'VER-TI MOBILIDADE URBANA LTDA', NULL, 'time-import-0458'),
  ('time_import_0459', 'Integral', 'claudiorodriguesadv1@gmail.com', 'Claudio Daniel Rodrigues', 'Gestor Jurídico', NULL, 'VER-TI MOBILIDADE URBANA LTDA', NULL, 'time-import-0459'),
  ('time_import_0460', 'Integral', NULL, NULL, 'CEO', NULL, 'Onlife', 'exlucas2@gmail.com', 'time-import-0460'),
  ('time_import_0461', 'Parcial', '-', 'Kevin Mesquita', 'Co-Founder', NULL, 'Onlife', NULL, 'time-import-0461'),
  ('time_import_0462', 'Integral', 'evellynvitorialimaa@gmail.com', 'Evellyn Vitória', 'Co-Founder, Visual e Product Designer', NULL, 'Onlife', NULL, 'time-import-0462'),
  ('time_import_0463', 'Parcial', '-', 'André Felipe', 'Co-Founder, Coordenador de Saúde', NULL, 'Onlife', NULL, 'time-import-0463'),
  ('time_import_0464', 'Integral', NULL, NULL, 'COO', NULL, 'RedCheck', 'lucascyrillo12@gmail.com', 'time-import-0464'),
  ('time_import_0465', 'Integral', NULL, NULL, 'Founder e CEO', NULL, 'Naga IA', 'gabodobrasil123@gmail.com', 'time-import-0465'),
  ('time_import_0466', 'Total', 'gvinicius105@gmail.com', 'Vinicius Gabriel dos Santos Braz', 'Desenvolvedor Mobile', NULL, 'Liu', NULL, 'time-import-0466'),
  ('time_import_0467', 'Total', 'lais.lima.gui@gmail.com', 'Laís Evangelista Santos', 'Co-idealizadora do projeto', NULL, 'Liu', NULL, 'time-import-0467'),
  ('time_import_0468', 'Total', 'gleybson1920@gmail.com', 'Gleybson Anderson', 'Designer', NULL, 'Liu', NULL, 'time-import-0468'),
  ('time_import_0469', 'Total', 'luisguilhermesantos.dev@gmail.com', 'Luís Guilherme Santos de Oliveira', 'Idealizador, gestor e desenvolvedor de projetos', NULL, 'Liu', NULL, 'time-import-0469'),
  ('time_import_0470', 'Parcial', NULL, NULL, 'ctp', NULL, NULL, 'gabrielchamie@gmail.com', 'time-import-0470'),
  ('time_import_0471', 'Integral', NULL, NULL, 'CEO, foco em vendas ! Tração e escala simultâneos', NULL, 'GPC GESTÃO', 'antonio.leal@gpcgestao.com.br', 'time-import-0471'),
  ('time_import_0472', 'Integral', NULL, NULL, 'CEO', NULL, 'VIVERDE CASA', 'camilaviegas@viverdecasa.com', 'time-import-0472'),
  ('time_import_0473', 'Integral', NULL, NULL, 'Como fundadora da Place, Lidero a operação com foco na validação de mercado, evolução da plataforma e crescimento da empresa. Minha atuação é estratégica e executiva, assumindo diversas frentes enquanto a equipe está em fase enxuta.
Na Visão de Produto, atuocomo responsável pelo desenho e evolução dos dois principais produtos: Place Home (residencial) e Place Work (corporativo com foco em home office).', NULL, 'Place', 'jaquepaz.arq@gmail.com', 'time-import-0473'),
  ('time_import_0474', 'Total', 'chaves.lucas.ferrer@gmail.com', 'Lucas Chaves Sampaio Ferrer', 'Desenvolvedor', NULL, 'CAIS', NULL, 'time-import-0474'),
  ('time_import_0475', 'Total', 'sromario577@gmail.com', 'Maycon Romario dos Santos Pereira', 'Desenvolvedor', NULL, 'CAIS', NULL, 'time-import-0475'),
  ('time_import_0476', 'Total', 'henriqesl16@gmail.com', 'Henrique Silva de Lima', 'Desenvolvedor', NULL, 'CAIS', NULL, 'time-import-0476'),
  ('time_import_0477', 'Total', 'messiasdaniel1999@gmail.com', 'Messias Daniel Ferreira da Silva Filho', 'Desenvolvedor', NULL, 'CAIS', NULL, 'time-import-0477'),
  ('time_import_0478', 'Total', 'beatrizparedes1999@gmail.com', 'Beatriz Paredes do Nascimento', 'Design', NULL, 'CAIS', NULL, 'time-import-0478'),
  ('time_import_0479', 'Total', 'hailtonneto27@gmail.com', 'Hailton de Melo Lima Neto', 'Desenvolvedor', NULL, 'CAIS', NULL, 'time-import-0479'),
  ('time_import_0480', 'Total', 'gisellylrochal@gmail.com', 'Giselly Luiza Rocha de Lima', 'Documentação e desenvolvimento', NULL, 'Manguehub', NULL, 'time-import-0480'),
  ('time_import_0481', 'Parcial', 'marrquesgisele@gmail.com', 'Gisele Maria Teodosio Marques', 'Web Design e Pitch', NULL, 'Manguehub', NULL, 'time-import-0481'),
  ('time_import_0482', 'Total', 'htamarf@gmail.com', 'Ágata Maria Ferraz de Oliveira', 'Desenvolvimento', NULL, 'Manguehub', NULL, 'time-import-0482'),
  ('time_import_0483', 'Total', 'alannaabeatriz@hotmail.com', 'Alanna Beatriz Bezerra dos Santos', 'Pitch, Design e Desenvolvimento', NULL, 'Manguehub', NULL, 'time-import-0483'),
  ('time_import_0484', 'Total', 'hvlm@cesar.school', 'Hugo Vinícius de Lima Mendonça', 'Desenvolvimento e Documentação', NULL, 'Manguehub', NULL, 'time-import-0484'),
  ('time_import_0485', 'Total', 'luanventurafm29@gmail.com', 'Luan Ventura Ferrreira de Moura', 'Líder', NULL, 'Manguehub', NULL, 'time-import-0485'),
  ('time_import_0486', 'Total', 'htamarf@gmail.com', 'Ágata Maria Ferraz de Oliveira', 'Desenvolvimento back-end', NULL, 'Manguehub', NULL, 'time-import-0486'),
  ('time_import_0487', 'Total', 'gisellylrochal@gmail.com', 'Giselly Luiza Rocha de Lima', 'Documentação e Desenvolvimento', NULL, 'Manguehub', NULL, 'time-import-0487'),
  ('time_import_0488', 'Parcial', 'marrquesgisele@gmail.com', 'Gisele Maria Teodosio Marques', 'Web Design e Pitch', NULL, 'Manguehub', NULL, 'time-import-0488'),
  ('time_import_0489', 'Total', 'alannaabeatriz@hotmail.com', 'Alanna Beatriz Bezerra dos Santos', 'Pitch e Design', NULL, 'Manguehub', NULL, 'time-import-0489'),
  ('time_import_0490', 'Total', 'hvlm@cesar.school', 'Hugo Vinícius de Lima Mendonça', 'Desenvolvimento back-end e Documentação', NULL, 'Manguehub', NULL, 'time-import-0490'),
  ('time_import_0491', 'Total', 'luanventurafm29@gmail.com', 'Luan Ventura Ferrreira de Moura', 'Desenvolvimento fullstack e Design', NULL, 'Manguehub', NULL, 'time-import-0491'),
  ('time_import_0492', 'Total', 'alannaabeatriz@hotmail.com', 'Alanna Beatriz Bezerra dos Santos', 'Pictch e Design', NULL, NULL, NULL, 'time-import-0492'),
  ('time_import_0493', 'Total', 'htamarf@gmail.com', 'Ágata Maria Ferraz de Oliveira', 'Desenvolvimento back-end', NULL, NULL, NULL, 'time-import-0493'),
  ('time_import_0494', 'Total', 'hvlm@cesar.school', 'Hugo Vinícius de Lima Mendonça', 'Desenvolvimento back-end e Documentação', NULL, NULL, NULL, 'time-import-0494'),
  ('time_import_0495', 'Parcial', 'marrquesgisele@gmail.com', 'Gisele Maria Teodosio Marques', 'Web Design e Picth', NULL, NULL, NULL, 'time-import-0495'),
  ('time_import_0496', 'Total', 'oreodemorango.contato@gmail.com', 'Giselly Luiza Rocha de Lima', 'Documentação e Desenvolvimento back-end', NULL, NULL, NULL, 'time-import-0496'),
  ('time_import_0497', 'Parcial', 'sandy.vieira@enkode.tech', 'Sandy Vieira', 'Product Designer', NULL, 'Enkode', NULL, 'time-import-0497'),
  ('time_import_0498', 'Total', 'raniere.lima@enkode.tech', 'Raniere Lima', 'Tech Lead', NULL, 'Enkode', NULL, 'time-import-0498'),
  ('time_import_0499', 'Total', 'gisellylrochal@gmail.com', 'Giselly Luiza Rocha de Lima', 'Documentação e Desenvolvimento Back-end', NULL, 'MangueHub', NULL, 'time-import-0499'),
  ('time_import_0500', 'Total', 'htamarf@gmail.com', 'Ágata Maria Ferraz de Oliveira', 'Desenvolvimento back-end', NULL, 'MangueHub', NULL, 'time-import-0500'),
  ('time_import_0501', 'Total', 'hvlm@cesar.school', 'Hugo Vinícius de Lima Mendonça', 'Desenvolvimento back-end e Documentação', NULL, 'MangueHub', NULL, 'time-import-0501'),
  ('time_import_0502', 'Parcial', 'marrquesgisele@gmail.com', 'Gisele Maria Teodosio Marques', 'Web Design e Pitch', NULL, 'MangueHub', NULL, 'time-import-0502'),
  ('time_import_0503', 'Total', 'alannaabeatriz@hotmail.com', 'Alanna Beatriz Bezerra dos Santos', 'Pitch e Desenvolvimento Front-end', NULL, 'MangueHub', NULL, 'time-import-0503'),
  ('time_import_0504', 'Parcial', 'luanorion1@gmail.com', 'Luan Orion Baraúna', 'Luan Orion – Responsável Técnico (IA e Automação)
Físico com doutorado pelo CEMADEN-INPE, especialista em computação aplicada e inteligência artificial. Desenvolveu soluções como FloodCastXAI (previsão de enchentes) e Hiplade (educação em saúde via IA), a primeira apresentada na Brazil Conference at Harvard & MIT. Na Manacá, atua no desenho e implementação de sistemas com IA para gestão de impacto e automação de processos.', NULL, 'Manacá Tecnologias Sociais', NULL, 'time-import-0504'),
  ('time_import_0505', 'Total', 'rafaelareis.manaca@gmail.com', 'Rafaela Reis Rezende', 'Rafaela Rezende – Analista Sênior de Projetos
Engenheira de Produção, licenciada em Matemática e pós-graduanda em Gestão Escolar. Atuou como gestora de projetos em aceleradora de impacto, e como professora em contextos quilombolas, rurais e urbanos no Maranhão. Contribui com projetos voltados à avaliação, monitoramento e sustentabilidade institucional na Manacá.', NULL, 'Manacá Tecnologias Sociais', NULL, 'time-import-0505'),
  ('time_import_0506', 'Parcial', 'alecoleto@gmail.com', 'Alexandre Henrique Azevedo Coleto', 'Alexandre Coleto – CTO
Engenheiro Eletricista pela Escola Politécnica da USP, com certificação PMP. Atuou como Gerente de Projetos em grandes empreendimentos na indústria de óleo e gás e no setor de transporte e logística. Possui experiência em tecnologias de IoT e sustentabilidade. Na Manacá, lidera a área de tecnologia, coordenando soluções de software, arquitetura de dados e sistemas de monitoramento.', NULL, 'Manacá Tecnologias Sociais', NULL, 'time-import-0506'),
  ('time_import_0507', 'Parcial', 'angeloluiz22@gmail.com', 'Ângelo Luiz Viana Santos', 'Ângelo Luiz – Diretor de Metodologias
Engenheiro com formação em Ciência e Tecnologia pela UFVJM e mestrado em Educação Internacional e Comparada pela Universidade de Columbia. Atuou como professor na rede pública e coordenou projetos para Fundação Lemann, FGV e UNESCO. Lidera o desenvolvimento metodológico da Manacá, com foco em estratégias, indicadores e sistematizações de impacto.', NULL, 'Manacá Tecnologias Sociais', NULL, 'time-import-0507'),
  ('time_import_0508', 'Total', 'contato@reciclosocial.com.br', 'Paloma Carvalho', NULL, NULL, 'Manacá Tecnologias Sociais', NULL, 'time-import-0508'),
  ('time_import_0509', NULL, NULL, 'ANSELMO', NULL, NULL, 'B-AI', NULL, 'time-import-0509'),
  ('time_import_0510', NULL, NULL, 'DHARLIN', NULL, NULL, 'B-AI', NULL, 'time-import-0510'),
  ('time_import_0511', 'Total', 'carolina.phaelante@neri.care', 'Carolina Phaelante', 'Gerente de Produto', NULL, 'neri', NULL, 'time-import-0511'),
  ('time_import_0512', 'Total', 'gabi@neri.care', 'Gabriela Meira', 'CEO & Marketing', NULL, 'neri', NULL, 'time-import-0512'),
  ('time_import_0513', 'Total', 'rafael.barreto@neri.care', 'Rafael Barreto', 'Desenvolvedor', NULL, 'neri', NULL, 'time-import-0513'),
  ('time_import_0514', 'Total', 'amandaires@gmail.com', 'Amanda Aires Vieira', 'Trabalho na gestão de dados do projeto com vistas a garantir a eficiência e eficácia do projeto em operação', NULL, 'Kali', NULL, 'time-import-0514'),
  ('time_import_0515', 'Parcial', 'aallyne@hotmail.com', 'Allyne Agostinho de Lacerda', 'Trabalho no design da solução focada no atendimento das pessoas atendidas pelas UBS do Recife. Como médica da família há mais de 10 anos, entende quais seriam os melhores formatos para manter o paciente e a equipe engajados no autocuidado', NULL, 'Kali', NULL, 'time-import-0515'),
  ('time_import_0516', 'Total', 'ramon.victor.design@gmail.com', 'Ramon Victor Severino da Cunha', 'Product designer, pós graduado em design de integração e mestre em design. Trabalha como sócio na produção da ideação e pesquisas, estruturou o modelo de ideação para o projeto com base no design thinking, visando a melhor viabilidade para coleta de informações e acompanhamento dos requisitos do projeto.', NULL, 'Projeto Salus', NULL, 'time-import-0516'),
  ('time_import_0517', 'Parcial', 'geissy.kelly.con@gmail.com', 'Geissy Kelly da Conceição', 'Enfermeira, especialista educação e saúde, pós graduada em UTI adulto e Mestre em Enfermagem. Atua como consultora técnica da saúde e bem estar, fornecendo informações necessárias para o projeto sob uma ótica profissional, especializada e de campo na área de educação, saúde, qualidade de vida e prevenção de doêncas e agraves (DCNT).', NULL, 'Projeto Salus', NULL, 'time-import-0517'),
  ('time_import_0518', 'Parcial', NULL, NULL, 'CTO', NULL, 'SmartCityTec', 'gilsonilunardi@gmail.com', 'time-import-0518'),
  ('time_import_0519', NULL, NULL, 'Everton Lucena', 'Líder Comercial Atua como Líder Comercial sendo responsável pela definição e implementação de estratégias de crescimento, geração de receita e posicionamento no mercado.', NULL, 'metasolution.ai', NULL, 'time-import-0519'),
  ('time_import_0520', 'Total', 'priscilaf.silvaweb@gmail.com', 'Priscila Fernanda da Silva', 'Front-End e Designer', NULL, 'Minha Rua Limpa', NULL, 'time-import-0520'),
  ('time_import_0521', 'Total', 'sophiamalencar@gmail.com', 'Sophia Albuquerque Melo de Alencar', 'Analista de dados e Back-End', NULL, 'Minha Rua Limpa', NULL, 'time-import-0521'),
  ('time_import_0522', 'Total', 'priscilaf.silvaweb@gmail.com', 'Priscila Fernanda da Silva', 'Front-End e Designer', NULL, 'Minha Rua Limpa', NULL, 'time-import-0522'),
  ('time_import_0523', 'Total', 'sophiamalencar@gmail.com', 'Sophia Albuquerque Melo de Alencar', 'Analista de Dados e Back-End', NULL, 'Minha Rua Limpa', NULL, 'time-import-0523'),
  ('time_import_0524', 'Parcial', 'contato@smartcity.tec.br', 'Eloi Ronnau', 'CEO', NULL, 'Gilsoni Albino, Eloi Ronnau', NULL, 'time-import-0524'),
  ('time_import_0525', 'Total', 'Joaovitorlbgm@gmail.com', 'João Vitor Lima Braga Graciliano de Melo', 'João é desenvolvedor júnior, mas já se destaca pela sua expertise técnica e profundo conhecimento nas linguagens e frameworks com os quais atua. Sua base sólida e precisão na execução das tarefas o tornam uma referência dentro da equipe, contribuindo de forma decisiva para a qualidade técnica dos projetos desenvolvidos.', NULL, NULL, NULL, 'time-import-0525'),
  ('time_import_0526', 'Total', 'perluizhenrique@gmail.com', 'Luiz Henrique Pereira da Silva', 'Luiz – Desenvolvedor e Especialista em Arquiteturas e Segurança da Informação
Luiz possui amplo conhecimento em desenvolvimento de softwares utilizando diversas arquiteturas, tecnologias e ferramentas voltadas à automação e à inteligência artificial. Sua atuação se destaca também na área de modelagem e segurança de dados, sendo um dos membros da equipe credenciado na norma ISO/IEC 27001 – referência internacional em gestão da segurança da informação. Além disso, integra o time responsável pela Silvia.med.br, uma aplicação voltada para a área da saúde que atualmente está em fase de incubação no Porto Digital, um dos maiores ecossistemas de inovação e tecnologia do país. Sua experiência técnica sólida e visão voltada à inovação elevam ainda mais o potencial da equipe.', NULL, NULL, NULL, 'time-import-0526'),
  ('time_import_0527', 'Total', 'juliaayanna4@gmail.com', 'Ayanna Júlia Martins de morais', 'Ayanna atua como designer com uma abordagem multidisciplinar, unindo criatividade e funcionalidade na construção de interfaces intuitivas e acessíveis. Além de suas habilidades no design, também possui experiência no desenvolvimento back-end, o que a torna uma profissional completa e versátil. Sua capacidade de transitar entre o visual e o técnico contribui significativamente para o alinhamento entre experiência do usuário e desempenho da aplicação.', NULL, NULL, NULL, 'time-import-0527'),
  ('time_import_0528', 'Total', 'Aguiarltda03@gmail.com', 'Caio Santos de Aguiar', 'Caio é estudante de Economia e atua na equipe com foco em análise de viabilidade, custo-benefício e impacto de longo prazo. Com experiência em ciência de dados, ele foi responsável por estudar o projeto utilizando parâmetros e métricas específicas para avaliar sua acessibilidade e sustentabilidade. Sua contribuição se concentra em entender como a solução pode gerar valor real, mesmo com investimentos iniciais, garantindo um retorno estratégico em cenários de expansão. Sua visão analítica fortalece a base racional e econômica das decisões da equipe.', NULL, NULL, NULL, 'time-import-0528'),
  ('time_import_0529', 'Total', 'felipeekoizimi@gmail.com', 'Felipe Escobar', 'Especialista em backend e computação em nuvem com AWS, Felipe domina frameworks modernos como FastAPI e Django. Com vasta experiência em modelagem de dados e infraestrutura escalável via Docker e Kubernetes, ele garante a robustez técnica da solução.Também está à frente do desenvolvimento de projetos de IA para processamento de linguagem natural.', NULL, 'CFIT', NULL, 'time-import-0529'),
  ('time_import_0530', 'Total', 'g.veras@vivendocfit.com.br', 'Gabriela Veras', 'CEO da CFIT e Vice-presidente do HUB Mulheres em Govtech. Engenheira eletricista Líder em Projeto de Inovação e Tecnologia. Cursando MBA na UCD Smurfit Graduate Business School. Atuou como Product owner em startups consolidadas, fortemente centradas em P&D em projetos pioneiros como Introdução da Tecnologia  BIM no em Projetos de Usinas solares e IA para Softwares de Manutenção Preditiva. Possui certificação internacional Certified Scrum Product Owner (CSPO). Vasta experiência em alinhamento de stakeholders, elaboração de roadmap; acompanhamento de entregas, verificação das métricas, entrevistas com os usuários, etc.', NULL, 'CFIT', NULL, 'time-import-0530'),
  ('time_import_0531', 'Total', 'giuseppezep@gmail.com', 'GIUSEPPE PIOVESAN SAVASTANO', 'Desenvolvedor full stack com foco em Flutter para aplicativos multiplataforma (mobile, desktop e web) e experiência em back-end com Node.js, Java, Python e C#. Atuou em empresas como CFIT Healthtech Analytics, G4tech, Mobiis e Belenus, desenvolvendo APIs com integração a Azure (Queue Storage, Service Bus) e RabbitMQ. Domina o uso de Flavors no Flutter para gestão de ambientes, além de projetos com Docker e Kubernetes. Experiente no desenvolvimento de microserviços e dashboards. 
Formação Acadêmica Bacharelado em Engenharia da Computação (2023) - UTFPR-CP', NULL, 'CFIT', NULL, 'time-import-0531'),
  ('time_import_0532', 'Total', 'grazielly.araujo@outlook.com', 'Luiza Grazielly de Araujo Souza', 'Atua na área de Customer Experience e suporte ao cliente na CFIT, sendo responsável pela implantação das melhores práticas de atendimento e pelo suporte aos usuários, realizando o acompanhamento de chamados com foco no cumprimento do SLA e das boas práticas do setor. Implementa Q & A e realiza testes básicos em API via Postman, garantindo a verificação de usabilidade, funcionalidade, desempenho, segurança e portabilidade.
Formação acadêmica:
Tecnólogo em Análise e Desenvolvimento de Sistemas (previsão de conclusão em junho de 2025) - Faculdade Descomplica
Bacharelado em Serviço Social (2021) - UNIFG', NULL, 'CFIT', NULL, 'time-import-0532'),
  ('time_import_0533', 'Total', 'llsc@cesar.school', 'Lucas Lopes Soares Cabral', 'Product Designer', NULL, 'Cesinhas', NULL, 'time-import-0533'),
  ('time_import_0534', 'Total', 'thiagocesarmattos@gmail.com', 'Thiago César Mattos', 'UX Designer', NULL, 'Cesinhas', NULL, 'time-import-0534'),
  ('time_import_0535', 'Parcial', 'vcbpc@cesar.school', 'Vítor Phaelante', 'UI Designer', NULL, 'Cesinhas', NULL, 'time-import-0535'),
  ('time_import_0536', 'Total', 'pqla@cesar.school', 'Pedro Queiroz Luis de Assis', 'Cientista da computação', NULL, 'Cesinhas', NULL, 'time-import-0536'),
  ('time_import_0537', 'Total', 'evog@cesar.school', 'Eduardo Vaz de Oliveira Gerab', 'Cientista da computação', NULL, 'Cesinhas', NULL, 'time-import-0537'),
  ('time_import_0538', 'Total', 'timoteo.barros@gmail.com', 'Timóteo Barros', 'Desenvolvedor mobile e web.', NULL, 'Wladimilson Bernardino Nascimento', NULL, 'time-import-0538'),
  ('time_import_0539', 'Parcial', 'luanorion1@gmail.com', 'Luan Orion Baraúna', NULL, NULL, 'Manacá Tecnologias Sociais', NULL, 'time-import-0539'),
  ('time_import_0540', 'Total', 'viniciusp.salomao@outlook.com', 'Salomão Vinicius Conceição Pereira', 'Salomão cuidará da parte da operação. Com experiência com startups que lidavam com motoboys que tinham o whatsapp como fonte de relacionamento, vai agregar muito na junção dos pacientes com os médicos.', NULL, 'Conexão e cuidado', NULL, 'time-import-0540'),
  ('time_import_0541', 'Total', 'dinho.afsn@gmail.com', 'Arlindo Ferreira dos Santos Neto', 'Dinho é tem mais de 15 anos trabalhando com análise de sistemas, cuidando desde a parte da infraestrutura, servidores até a programação total. Desenvolveu a maioria dos sistemas de doações no Brasil, entre eles Doutores da Alegria, Médico sem Fronteiras. Desenvolveu os sites da Rede D''or, Grupo Fleury. Hoje também é referência em IA, tendo feito um super sistema baseado em Inteligência Artificial para o Grupo Fleury. Fez o app da Shell Box.', NULL, 'Conexão e cuidado', NULL, 'time-import-0541'),
  ('time_import_0542', 'Parcial', 'lucas@nozesgeoinformacoes.com.br', 'Lucas Côrtes Sanches', 'Estagiário em geoprocessamento e cidades inteligentes. Responsável por classificação de imagens e manipulação de dados geoespaciais.', NULL, 'Nozes Geoinformações', NULL, 'time-import-0542'),
  ('time_import_0543', 'Total', 'mouraosjrp@gmail.com', 'Maurício Mourão', 'Especialista em gerente de cidades e tecnologia. Responsável por relacionamentos com clientes e projetos estratégicos.', NULL, 'Nozes Geoinformações', NULL, 'time-import-0543'),
  ('time_import_0544', 'Total', 'diego@cabratech.com', 'Diego Freire', 'Coordenação geral do projeto, com foco na integração entre hardware e software embarcado; planejamento e supervisão das etapas técnicas e operacionais; gestão da equipe de desenvolvimento; articulação com parceiros estratégicos e órgãos de fomento; apoio em pesquisa e inovação em tecnologias emergentes.', NULL, 'Passo Seguro', NULL, 'time-import-0544'),
  ('time_import_0545', 'Parcial', 'contato@cabratech.com', 'Carlos Eduardo', 'Liderança técnica do desenvolvimento de hardware e firmware da bengala inteligente; apoio à definição da arquitetura embarcada; supervisão da integração de sensores e algoritmos embarcados; suporte à avaliação técnica de protótipos e validação de campo; definição de requisitos de escalabilidade tecnológica', NULL, 'Passo Seguro', NULL, 'time-import-0545'),
  ('time_import_0546', 'Parcial', 'riseit.is@gmail.com', 'Ana Paula', 'Desenvolvimento e gestão do aplicativo móvel acessível; definição da experiência do usuário (UX) e acessibilidade digital; implementação de módulos de navegação e personalização de rotas; integração com beacons Bluetooth e sistemas de mobilidade urbana; testes de usabilidade com foco no público-alvo.', NULL, 'Passo Seguro', NULL, 'time-import-0546'),
  ('time_import_0547', 'Parcial', 'leticia@cabratech.com', 'Letícia Abade', 'Comunicação institucional do projeto; gestão de redes sociais e estratégias de marketing digital; criação de campanhas de sensibilização sobre acessibilidade e inclusão; suporte na elaboração de materiais para captação de recursos e articulação com a imprensa; apoio à formação de comunidades de usuários e feedback contínuo.', NULL, 'Passo Seguro', NULL, 'time-import-0547'),
  ('time_import_0548', 'Integral', NULL, NULL, 'Especialista em geoprocessamento, operador de drones, gerente de projetos, responsável técnico e programador da NozIA.', NULL, 'Nozes Geoinformações', 'marcosnnog@gmail.com', 'time-import-0548'),
  ('time_import_0549', 'Parcial', 'lucas@nozesgeoinformacoes.com.br', 'Lucas Sanches Côrtes', 'Estagiário em geoprocessamento e cidades inteligentes. Responsável por classificação de imagens e manipulação de dados geoespaciais.', NULL, NULL, NULL, 'time-import-0549'),
  ('time_import_0550', 'Total', 'mouraosjrp@gmail.com', 'Maurício Mourão', 'Especialista em gerente de cidades e tecnologia. Responsável por relacionamentos com clientes e projetos estratégicos.', NULL, NULL, NULL, 'time-import-0550'),
  ('time_import_0551', 'Total', 'adriel.leite022@gmail.com', 'Adriel leite da silva', 'Desenvolvedor júnior full-stack Django, formando em análise e desenvolvimento de sistemas, possuindo interesse e projetos voltados a integração de IA em sistemas web, familiaridade com ferramentas de versionamento e bancos de dados SQL e NoSQL, atuando na área de desenvolvimento através de estágio em escritório de advocacia. Sempre em busca de me aprimorar e evoluir na carreira.', NULL, NULL, NULL, 'time-import-0551'),
  ('time_import_0552', 'Total', 'tiagojr159@hotmail.com', 'Tiago Junior', 'Como Engenheiro de Sistemas Sênior, sou especialista em sustentação e evolução de sistemas legados, com vasta experiência em PHP. Minha atuação abrange a análise e levantamento de requisitos, aplicando princípios de arquitetura como SOLID e MVC, e utilizando ferramentas como Git e GitLab. Atualmente, presto serviços para o Tribunal de Justiça de Minas Gerais, garantindo a performance e a modernização de suas aplicações.', NULL, NULL, NULL, 'time-import-0552'),
  ('time_import_0553', 'Total', 'hugo.victorsilva@ufrpe.br', 'HUGO VICTOR', 'Tenho ampla experiência com liderança, o que me levou a ser designado como coordenador de todo o processo, assumindo a responsabilidade de garantir que as ações fluam de forma estratégica e eficiente. Essa não é a minha primeira vivência liderando negócios. Sou fundador e CEO da minha própria startup, onde também atuo como líder de negócios. Além disso, já trabalhei em projetos no mesmo segmento, desenvolvidos a partir de programas como o Hacker Cidadão, que evoluíram e se consolidaram como startups.', NULL, NULL, NULL, 'time-import-0553'),
  ('time_import_0554', 'Total', 'tiagojr159@hotmail.com  ‪+5581981067988‬', 'Tiago Junior', 'Como Engenheiro de Sistemas Sênior, sou especialista em sustentação e evolução de sistemas legados, com vasta experiência em PHP. Minha atuação abrange a análise e levantamento de requisitos, aplicando princípios de arquitetura como SOLID e MVC, e utilizando ferramentas como Git e GitLab. Atualmente, presto serviços para o Tribunal de Justiça de Minas Gerais, garantindo a performance e a modernização de suas aplicações.', NULL, 'REVIRA', NULL, 'time-import-0554'),
  ('time_import_0555', 'Parcial', 'lucas@nozesgeoinformacoes.com.br', 'Lucas Sanches Côrtes', 'Estagiário em geoprocessamento e cidades inteligentes. Responsável por classificação de imagens e manipulação de dados geoespaciais', NULL, NULL, NULL, 'time-import-0555'),
  ('time_import_0556', 'Total', 'mouraosjrp@gmail.com', 'Maurício Mourão', 'Especialista em gerente de cidades e tecnologia. Responsável por relacionamentos com clientes e projetos estratégicos.', NULL, NULL, NULL, 'time-import-0556'),
  ('time_import_0557', 'Total', 'Joaovitorlbgm@gmail.com', 'João Vitor Lima Braga Graciliano de Melo', 'Estudante de Análise e Desenvolvimento de Sistemas, com conhecimentos básicos em Python, Java, JavaScript, HTML, CSS e MySQL. Tem experiência com GitHub e interesse em se tornar um profissional DevOps Full Stack. Está em busca de evolução contínua na área de tecnologia, com foco em lógica, organização e estética nos projetos.', NULL, 'REVIRA', NULL, 'time-import-0557'),
  ('time_import_0558', 'Total', 'Aguiarltda03@gmail.com', 'Caio Santos Aguiar', 'Caio Santos Aguiar é o responsável pela área de Ciência de Dados do projeto, atuando diretamente na análise de métricas e parâmetros fundamentais para avaliar os custos envolvidos e a viabilidade da ideia. Com uma visão estratégica e domínio técnico, ele transforma dados brutos em informações cruciais para a tomada de decisões. Sua atuação garante que cada passo dado esteja embasado em evidências concretas, contribuindo para o sucesso e a sustentabilidade da iniciativa.', NULL, 'REVIRA', NULL, 'time-import-0558'),
  ('time_import_0559', 'Total', 'juliaayanna4@gmail.com', 'Ayanna Júlia Martins de Morais', 'é a designer responsável pela interface da solução, garantindo uma experiência visual intuitiva, acessível e funcional para os usuários. Além disso, Ayanna também atua no desenvolvimento back-end, contribuindo diretamente para a estrutura técnica da plataforma. Sua versatilidade une criatividade e domínio técnico, sendo peça-chave tanto na aparência quanto no funcionamento do sistema.', NULL, 'REVIRA', NULL, 'time-import-0559'),
  ('time_import_0560', 'Parcial', 'manuellucas51@hotmail.com', 'Manuel Lucas Souza de Melo', 'Lidera o desenvolvimento e a engenharia dos nossos produtos vestíveis. Sua atuação abrange o design, a seleção de microcontroladores e sensores, o desenvolvimento de firmware e a integração de sistemas embarcados, garantindo um dispositivo robusto, funcional e pronto para a escalabilidade.', NULL, 'DATAVIG', NULL, 'time-import-0560'),
  ('time_import_0561', 'Parcial', 'gabriel.fernandes@recife.pe.gov.br', 'Gabriel Arruda', 'É a nossa autoridade em saúde, garantindo que a inovação tecnológica que criamos atenda a uma necessidade real e validada. Gabriel lidera a nossa estratégia de saúde pública, desenhando os estudos de caso, validando a jornada do paciente e do profissional de saúde com o nosso produto e orientando a equipe para que a solução esteja em conformidade com as normas do setor. Sua expertise é o que nos permite transformar tecnologia de ponta em uma ferramenta de saúde confiável e de alto impacto.', NULL, 'DATAVIG', NULL, 'time-import-0561'),
  ('time_import_0562', 'Integral', NULL, NULL, 'Especialista em geoprocessamento, operador de drones, gerente de projetos, responsável técnico e programador da NozIA.', NULL, NULL, 'marcosnnog@gmail.com', 'time-import-0562'),
  ('time_import_0563', 'Total', 'gabi@neri.care', 'Gabriela Meira', 'CEO', NULL, 'neri', NULL, 'time-import-0563'),
  ('time_import_0564', 'Total', 'carolina.phaelante@neri.care', 'Carolina Phaelante', 'Product Manager', NULL, 'neri', NULL, 'time-import-0564'),
  ('time_import_0565', 'Integral', NULL, NULL, 'Especialista em geoprocessamento, operador de drones, gerente de projetos, responsável técnico e programador da NozIA.', NULL, NULL, 'marcosnnog@gmail.com', 'time-import-0565'),
  ('time_import_0566', 'Integral', NULL, NULL, 'COO', NULL, 'neri', 'muniz.barbara@hotmail.com', 'time-import-0566'),
  ('time_import_0567', 'Parcial', 'amaedu.org@gmail.com', 'Amanda Felix da Silva', 'Coordenação', NULL, 'Dayse Maria de Souza Oliveira, Amanda Felix da Silva, Antônia Felix Lessa', NULL, 'time-import-0567'),
  ('time_import_0568', 'Total', 'associacaoproec@gmail.com', 'ANTÔNIA FELIX LESSA SILVA', 'Gestor', NULL, 'Dayse Maria de Souza Oliveira, Amanda Felix da Silva, Antônia Felix Lessa', NULL, 'time-import-0568'),
  ('time_import_0569', 'Total', 'automacaocontato1@gmail.com', 'Maria Estefani', 'Atua no desenvolvimento de soluções digitais, automações e inteligência artificial aplicada a negócios. Tem experiência em criar agentes de IA, estruturar fluxos inteligentes com ferramentas como n8n, Make.com e desenvolver projetos que unem tecnologia, inovação e impacto social. Trabalha como guia pela busca por eficiência, resultados e transformação digital acessível.', NULL, 'Metasolution.AI', NULL, 'time-import-0569'),
  ('time_import_0570', 'Total', 'automacaocontato1@gmail.com', 'Everton Lucena', 'Atua na gestão comercial, desenvolvimento de equipes e expansão de negócios. Possuo forte habilidade em negociação, relacionamento com clientes e criação de estratégias para crescimento, fidelização e aumento de resultados.', NULL, 'Metasolution.AI', NULL, 'time-import-0570'),
  ('time_import_0571', 'Parcial', 'daniele.matias@wattconsultoria.com.br', 'Daniele da Silva Matias', 'Consultora técnica do projeto e design de protótipo', NULL, 'Watt Consultoria', NULL, 'time-import-0571'),
  ('time_import_0572', 'Parcial', 'rodrigo.silva@wattconsultoria.com.br', 'Rodrigo Rocha da Silva', 'Consultor técnico do projeto e idealizador da solução', NULL, 'Watt Consultoria', NULL, 'time-import-0572'),
  ('time_import_0573', 'Parcial', 'andre.andrade@wattconsultoria.com.br', 'André Alves de Andrade', 'Gerente de projetos', NULL, 'Watt Consultoria', NULL, 'time-import-0573'),
  ('time_import_0574', 'Parcial', 'gabriel.oliveira@wattconsultoria.com.br', 'Gabriel de Oliveira e Silva', 'Consultor técnico do projeto', NULL, 'Watt Consultoria', NULL, 'time-import-0574'),
  ('time_import_0575', 'Total', 'felipeekoizimi@gmail.com', 'Felipe Escobar', 'Especialista em backend e computação em nuvem com AWS, Felipe domina frameworks modernos como FastAPI e Django. Com vasta experiência em modelagem de dados e infraestrutura escalável via Docker e Kubernetes, ele garante a robustez técnica da solução.Também está à frente do desenvolvimento de projetos de IA para processamento de linguagem natural.', NULL, 'CFIT', NULL, 'time-import-0575'),
  ('time_import_0576', 'Parcial', 'Integral', 'GIUSEPPE PIOVESAN SAVASTANO', 'Desenvolvedor full stack com foco em Flutter para aplicativos multiplataforma (mobile, desktop e web) e experiência em back-end com Node.js, Java, Python e C#. Atuou em empresas como CFIT Healthtech Analytics, G4tech, Mobiis e Belenus, desenvolvendo APIs com integração a Azure (Queue Storage, Service Bus) e RabbitMQ. Domina o uso de Flavors no Flutter para gestão de ambientes, além de projetos com Docker e Kubernetes. Experiente no desenvolvimento de microserviços e dashboards. 
Formação Acadêmica Bacharelado em Engenharia da Computação (2023) - UTFPR-CP', NULL, 'CFIT', NULL, 'time-import-0576'),
  ('time_import_0577', 'Total', 'grazielly.araujo@outlook.com', 'Luiza Grazielly', 'Atua na área de Customer Experience e suporte ao cliente na CFIT, sendo responsável pela implantação das melhores práticas de atendimento e pelo suporte aos usuários, realizando o acompanhamento de chamados com foco no cumprimento do SLA e das boas práticas do setor. Implementa Q & A e realiza testes básicos em API via Postman, garantindo a verificação de usabilidade, funcionalidade, desempenho, segurança e portabilidade.
Formação acadêmica:
Tecnólogo em Análise e Desenvolvimento de Sistemas (previsão de conclusão em junho de 2025) - Faculdade Descomplica
Bacharelado em Serviço Social (2021) - UNIFG', NULL, 'CFIT', NULL, 'time-import-0577'),
  ('time_import_0578', 'Parcial', 'g.veras@vivendocfit.com.br', 'Gabriela Veras', 'Atua na área de Customer Experience e suporte ao cliente na CFIT, sendo responsável pela implantação das melhores práticas de atendimento e pelo suporte aos usuários, realizando o acompanhamento de chamados com foco no cumprimento do SLA e das boas práticas do setor. Implementa Q & A e realiza testes básicos em API via Postman, garantindo a verificação de usabilidade, funcionalidade, desempenho, segurança e portabilidade.
Formação acadêmica:
Tecnólogo em Análise e Desenvolvimento de Sistemas (previsão de conclusão em junho de 2025) - Faculdade Descomplica
Bacharelado em Serviço Social (2021) - UNIFG', NULL, 'CFIT', NULL, 'time-import-0578'),
  ('time_import_0579', 'Total', 'carolinacandeia@gobeesiness.com', 'Carolina Nóbrega Candeia Pereira', 'COO - Go Beesiness', NULL, 'GO BEE APIS', NULL, 'time-import-0579'),
  ('time_import_0580', 'Parcial', 'juliananeiva1978@gmail.com', 'Juliana Montenegro Menezes Neiva', 'Consultora especialista na área de Atenção Primária de Saúde', NULL, 'GO BEE APIS', NULL, 'time-import-0580'),
  ('time_import_0581', 'Total', 'hailtonneto27@gmail.com', 'Hailton de Melo Lima Neto', 'Desenvolvedor', NULL, NULL, NULL, 'time-import-0581'),
  ('time_import_0582', 'Parcial', 'lena.agenda@gmail.com', 'Lena Peres', 'Doutora em Medicina pela Universidade Federal de São Paulo (UNIFESP), com especialização em Pediatria, Infectologia (UNIFESP), Saúde Pública (UNAERP).  

- Área: Saúde
- Atuação: Curadoria em Saúde
- Lattes: http://lattes.cnpq.br/2900354869264093', NULL, 'LEMOBS', NULL, 'time-import-0582'),
  ('time_import_0583', 'Total', 'ramon.victor.design@gmail.com', 'Ramon Victor Severino da Cunha', 'Product designer, pós graduado em design de integração e mestre em design. Trabalha como sócio na produção da ideação e pesquisas, estruturou o modelo de ideação para o projeto com base no design thinking, visando a melhor viabilidade para coleta de informações e acompanhamento dos requisitos do projeto.', NULL, 'Projeto Saus', NULL, 'time-import-0583'),
  ('time_import_0584', 'Parcial', 'geissy.kelly.con@gmail.com', 'Geissy Kelly da Conceição', 'Enfermeira, especialista educação e saúde, pós graduada em UTI adulto e Mestre em Enfermagem. Atua como consultora técnica da saúde e bem estar, fornecendo informações necessárias para o projeto sob uma ótica profissional, especializada e de campo na área de educação, saúde, qualidade de vida e prevenção de doêncas e agraves (DCNT).', NULL, 'Projeto Saus', NULL, 'time-import-0584'),
  ('time_import_0585', 'Parcial', 'alineborgespsiquiatria@gmail.com', 'Aline Borges Bezerra', 'Médica Psiquiatra, Mestra em Ciências da saúde, sócia fundadora do Clinitech. Acompanha e mentora a criação de produtos, garantindo melhor usabilidade, conexão e atendimento para as equipes médicas e pacientes.', NULL, 'Clinitech Tecnologia em Saúde LTDA.', NULL, 'time-import-0585'),
  ('time_import_0586', 'Total', 'clinitech.saude@gmail.com', 'Ricardo Chaves Lima Filho', 'Especialista em TI com dupla formação internacional, já atuou em grandes empresas brasileiras, como o Grupo Pão de Açúcar, e atualmente atua no mercado de software americano. É sócio fundador do Clinitech e responsável pela tecnologia de ponta utilizada.', NULL, 'Clinitech Tecnologia em Saúde LTDA.', NULL, 'time-import-0586'),
  ('time_import_0587', 'Total', 'nicbroedel@gmail.com', 'Nicole Tavares Broedel', 'Com 4 anos de experiência direta em administração de empresas, é responsável pela parte administrativa e de gestão de pessoas.', NULL, 'Clinitech Tecnologia em Saúde LTDA.', NULL, 'time-import-0587'),
  ('time_import_0588', 'Parcial', 'lena.agenda@gmail.com', 'Lena Peres', '"Doutora em Medicina pela Universidade Federal de São Paulo (UNIFESP), com especialização em Pediatria, Infectologia (UNIFESP), Saúde Pública (UNAERP).  

- Área: Saúde
- Atuação: Curadoria em Saúde
- Lattes: http://lattes.cnpq.br/2900354869264093"', NULL, 'Lemobs', NULL, 'time-import-0588'),
  ('time_import_0589', 'Parcial', 'zimbrao@gmail.com', 'Geraldo Zimbrão', '"Doutor em Engenharia de Sistemas e Computação pela Universidade Federal do Rio de Janeiro (UFRJ)

- Área: Tecnologia
- Atuação: Curadoria em IA
- Lattes: http://lattes.cnpq.br/3937502490683382"', NULL, 'Lemobs', NULL, 'time-import-0589'),
  ('time_import_0590', 'Parcial', 'victor.vidigal@prontlife.com.br', 'Victor Vidigal', '" Doutor e Mestre em Engenharia de Sistemas e Computação pela COPPE/UFRJ

- Área: Tecnologia
- Atuação: Qualidade e Testes
- Lattes: http://lattes.cnpq.br/5208608664907557', NULL, 'Lemobs', NULL, 'time-import-0590'),
  ('time_import_0591', 'Parcial', 'kevin.cabanelas@lemobs.com.br', 'Kevin Cabanelas', '"Mestre em Tecnologias e Inovações nas Ações de Cuidar, Ensinar, Aprender e na Gestão em Enfermagem e Saúde pela Escola de Enfermagem Anna Nery (UFRJ)

- Área: Saúde
- Atuação: Protocolos de Saúde
- Lattes: https://lattes.cnpq.br/4883450600263795"', NULL, 'Lemobs', NULL, 'time-import-0591'),
  ('time_import_0592', 'Parcial', 'fernanda.ribeiro@lemobs.com.br', 'Fernanda Ribeiro', '"Mestre em Engenharia de Sistemas e Computação pelo PESC/COPPE/UFRJ

- Área: Tecnologia
- Atuação: Dados e IA
- Lattes: http://lattes.cnpq.br/7472267240903597"', NULL, 'Lemobs', NULL, 'time-import-0592'),
  ('time_import_0593', 'Parcial', 'leonardo.soares@lemobs.com.br', 'Leonardo Soares', '"Mestre em Administração de Empresas pelo Instituto COPPEAD da Universidade Federal do Rio de Janeiro (UFRJ)

- Área: Tecnologia
- Atuação: Gestão e Suporte
- Lattes: http://lattes.cnpq.br/8949073939225864"', NULL, 'Lemobs', NULL, 'time-import-0593'),
  ('time_import_0594', 'Parcial', 'tiago.silva@lemobs.com.br', 'Tiago Santos da Silva', '"Mestre em Engenharia de Sistemas e Computação pela Universidade Federal do Rio de Janeiro (UFRJ)

- Área: Tecnologia
- Atuação: Arquitetura
- Lattes: http://lattes.cnpq.br/1244742805344215"', NULL, 'Lemobs', NULL, 'time-import-0594'),
  ('time_import_0595', 'Parcial', 'luan.garrido@lemobs.com.br', 'Luan Barbosa Garrido', '"Mestre em Engenharia de Sistemas e Computação pela Universidade Federal do Rio de Janeiro (UFRJ)

- Área: Tecnologia
- Atuação: Interoperabilidade
- Lattes: http://lattes.cnpq.br/6062983811271536"', NULL, 'Lemobs', NULL, 'time-import-0595'),
  ('time_import_0596', 'Parcial', 'michelle.silva@prontlife.com.br', 'Michelle Szekut', '"Mestre em Ciências Médicas pela Universidade do Vale do Taquari (UNIVEST), especialista em Saúde Pública com Ênfase em Saúde da Família. 

- Área: Saúde
- Atuação: Protocolos de Saúde
- Lattes: http://lattes.cnpq.br/5391371091231661"', NULL, 'Lemobs', NULL, 'time-import-0596'),
  ('time_import_0597', 'Parcial', 'agathareigoto1999@gmail.com', 'Agatha Monteiro Reigoto', '"Residente de Pediatria na Universidade Federal do Rio de Janeiro (UFRJ)

- Área: Saúde
- Atuação: Curadoria em Saúde
- Lattes: http://lattes.cnpq.br/4650988414805442"', NULL, 'Lemobs', NULL, 'time-import-0597'),
  ('time_import_0598', 'Parcial', 'debora.andrade@lemobs.com.br', 'Débora Andrade', '"Bacharel em Ciência da Computação pela Universidade Federal do Rio de Janeiro (UFRJ)

- Área: Tecnologia
- Atuação: mobile
- Lattes: http://lattes.cnpq.br/8035366039635197"', NULL, 'Lemobs', NULL, 'time-import-0598'),
  ('time_import_0599', 'Total', 'timoteo.barros@', 'Timóteo Barros', 'Desenvolvedor mobile e frontend.', NULL, 'Gymtime', NULL, 'time-import-0599'),
  ('time_import_0600', 'Total', 'cebduarte@gmail.com', 'Carlos Eduardo Duarte', 'Desenvolvedor Fullstack especialista em dados infraestrutura e integrações.', NULL, 'Gymtime', NULL, 'time-import-0600'),
  ('time_import_0601', 'Total', 'victor.fgd7@gmail.com', 'Victor Ferreira Guimaraes', 'Desenvolvedor fullstack Cientista em Inteligência Artificial.', NULL, 'Gymtime', NULL, 'time-import-0601'),
  ('time_import_0602', 'Parcial', 'alecoleto@gmail.com', 'Alexandre Henrique Azevedo Coleto', 'Co-CTO & Gerente de Projetos	
Lidera a arquitetura de software, infraestrutura de dados e monitoramento de sistemas. Traduz requisitos de negócio em sprints técnicos, coordena fornecedores e garante entregas dentro de escopo, prazo e orçamento (certificação PMP).', NULL, 'Manacá Tecnologias Sociais', NULL, 'time-import-0602'),
  ('time_import_0603', 'Parcial', 'angeloluiz22@gmail.com', 'Ângelo Luiz Viana Santos', 'Co-CTO & Diretor de Metodologias	
Desenha a lógica de impacto: modelos de indicadores, protocolos de coleta e frameworks de avaliação. Faz a ponte entre requisitos técnicos e evidências socioambientais, assegurando rigor metodológico e alinhamento às políticas públicas.', NULL, 'Manacá Tecnologias Sociais', NULL, 'time-import-0603'),
  ('time_import_0604', 'Parcial', 'luanorion1@gmail.com', 'Luan Orion Baraúna', 'Responsável Técnico de IA & Automação	
Concebe e treina modelos de visão computacional, algoritmos de otimização e integra sensores IoT. Garante a robustez científica das soluções de IA, supervisiona testes de campo e validação de desempenho.', NULL, 'Manacá Tecnologias Sociais', NULL, 'time-import-0604'),
  ('time_import_0605', 'Total', 'filipe_castro1996@hotmail.com', 'Filipe de Castro Paz', 'Desenvolvedor frontend.', NULL, 'Gymtime', NULL, 'time-import-0605'),
  ('time_import_0606', 'Parcial', 'rafaelareis.manaca@gmail.com', 'Rafaela Reis Rezende', 'Analista Sênior de Projetos & Operações	
Orquestra o dia-a-dia dos projetos: cronogramas, interface com stakeholders, documentação e relatórios. Conduz workshops com usuários finais e traduz feedbacks em melhorias de produto.', NULL, 'Manacá Tecnologias Sociais', NULL, 'time-import-0606'),
  ('time_import_0607', 'Total', 'paulamespindola04@gmail.com', 'Paula Mirela Espindola Dantas da Silva', 'Desenvolvedora Backend.', NULL, 'Gymtime', NULL, 'time-import-0607'),
  ('time_import_0608', 'Total', 'paloma.c@reciclosocial.com.br', 'Paloma Carvalho', 'Especialista em Economia Circular e Articulação Socioambiental	
Lidera a frente de economia circular da solução, conectando empresas, comunidades e poder público para destinação sustentável dos resíduos. Atua no desenho de estratégias de impacto socioambiental, desenvolvimento de projetos, articulação com redes de parceiros e implementação de soluções de inclusão produtiva e justiça climática.', NULL, 'Manacá Tecnologias Sociais', NULL, 'time-import-0608'),
  ('time_import_0609', 'Total', 'claudiobarnabe@gmail.com', 'Claudio Barnabé', 'Fisiologista, cientista e consultor especialista em tratamento de doentes crônicos.', NULL, 'Gymtime', NULL, 'time-import-0609'),
  ('time_import_0610', 'Parcial', 'amandaires@gmail.com', 'Amanda Aires Viera', 'Realização da modelagem, indicadores e inteligência analítica', NULL, 'Kali', NULL, 'time-import-0610'),
  ('time_import_0611', 'Parcial', 'kiatake@gmail.com', 'Luis Gustavo Kiatake', 'Entusiasta do uso da tecnologia na saúde. Graduado e mestre em Engenharia Elétrica pela Escola Politécnica da USP, doutorando em Biotecnologia em Saúde e Medicina Investigativa da Fiocruz-Bahia, professor na pós-graduação em Segurança da Informação e informática em Saúde em várias instituições, como IPT, SENAC, Unifesp, Hospital Sírio-Libanês, Faculdade Unimed. É colaborador da ISO e membro da ABNT nos comitês de Segurança da Informação e de Informática em Saúde, do qual foi relator do Grupo de Segurança. É membro conselheiro do HL7Brasil, IHE e HIMSS, representante no Comitê de Padronização do TISS (COPISS) da Agência Nacional de Saúde Suplementar (ANS), ex-Presidente e ex-Diretor de Relações Institucionais, atual Direto de Qualidade da Sociedade Brasileira de Informática em Saúde (SBIS).', NULL, 'KTecS', NULL, 'time-import-0611'),
  ('time_import_0612', 'Parcial', 'aallyne@gmail.com', 'Allyne Agostinho de LAcerda', 'Validação científica e conteúdos clínicos', NULL, 'Kali', NULL, 'time-import-0612'),
  ('time_import_0613', 'Parcial', 'osmeiresanzovo@gmail.com', 'Osmeire Sanzovo', 'Enfermeira, especialização em Gestão de Serviços de Saúde e Administração Hospitalar pela USP, e em Informática em Saúde pela Unifesp, MBA em Gestão Empresarial pela FGV. Certificada cpTICS. Carreira desenvolvida na área de Enfermagem, Administração Hospitalar e Saúde Digital, atuando em diversas empresas do segmento de saúde. Participou da montagem e implantação de projetos hospitalares, ambulatoriais e construção de hospitais. Consultora de gestão hospitalar e Saúde Digital para empresas de S-RES. Auditora do processo de Certificação de Sistemas de Registro Eletrônico em Saúde (S-RES) da SBIS. Responsável pela coordenação da prova de Certificação do Profissional em Tecnologia da Informação e Comunicação em Saúde (cpTICS) aplicada pela SBIS. Membro voluntário da diretoria da SBIS. Membro da Câmara Técnica de Enfermagem Digital do COREN-SP.', NULL, 'KTecS', NULL, 'time-import-0613'),
  ('time_import_0614', 'Parcial', 'pabloalves.ti@gmail.com', 'Pablo Rodrigo Alves da Silva', 'Desenvolvedor, integrações e manutenção do projeto', NULL, 'Kali', NULL, 'time-import-0614'),
  ('time_import_0615', 'Parcial', 'ana0292@terra.com.br', 'Ana Claudia Pìnto', 'Médica e Ph.D. em Endocrinologia pela UNIFESP, com MBA executivo e formações em estratégia digital e governança. Possui mais de 25 anos de experiência em saúde digital, análise de dados e liderança em grandes empresas, como o Grupo Fleury, onde atuou como CMO da Saúde Digital e da startup SaúdeiD. É conselheira em diversas healthtechs e referência na integração entre tecnologia, ciência de dados e gestão em saúde populacional. Sua atuação combina inovação, inteligência artificial e determinantes sociais para impulsionar a medicina de precisão e a sustentabilidade do cuidado.', NULL, 'KTecS', NULL, 'time-import-0615'),
  ('time_import_0616', 'Total', 'kessiakali@gmail.com', 'Kessia Christine Fidelis Paiva', 'Gerência científica, protocolos, curadoria', NULL, 'Kali', NULL, 'time-import-0616'),
  ('time_import_0617', 'Parcial', 'olivia.ferreira@ajeite.com', 'Olivia Ferreira', 'Bióloga com mais de 10 anos de atuação em saúde pública, especializada em epidemiologia, vigilância e interoperabilidade em saúde. Possui mestrado em Vigilância em Saúde e formação pelo EpiSUS. Foi premiada por investigações inovadoras no SUS e atuou em projetos de grande impacto, como o sistema VaciVida em São Paulo. É consultora e pesquisadora em sistemas de informação, com participação em eventos internacionais e produção de materiais técnicos para o Ministério da Saúde. Atua na transformação de dados em decisões estratégicas, com foco em inovação e saúde digital.', NULL, 'KTecS', NULL, 'time-import-0617'),
  ('time_import_0618', 'Parcial', 'kakamaral@gmail.com', 'Kátia Amaral', 'Enfermeira com 25 anos de experiência na saúde, sendo referência nacional em informática em saúde. Atuou como CNIO e coordenadora de sistemas de informação, liderando a implantação pioneira do Registro Eletrônico de Saúde (RES) no Brasil. Com ampla experiência em gestão de projetos, interoperabilidade, terminologias clínicas e telemedicina, atua como elo estratégico entre áreas assistenciais, administrativas e tecnológicas. É palestrante, especialista em saúde digital e membro da Câmara Técnica de Enfermagem Digital do Coren-SP.', NULL, 'KTecS', NULL, 'time-import-0618'),
  ('time_import_0619', 'Parcial', 'silvio@tech3br.com', 'SILVIO MIGLIORINI JUNIOR', 'Responsável pelas estratégias de marketing e relações comerciais.', NULL, 'Tech3', NULL, 'time-import-0619'),
  ('time_import_0620', 'Parcial', 'nelson@andradebenevides.com.br', 'NELSON DE ANDRADE BENEVIDES', 'Responsável pelas estratégias e relações comerciais.', NULL, 'Tech3', NULL, 'time-import-0620'),
  ('time_import_0621', 'Parcial', 'thiago.araujo@ffit.com.br', 'THIAGO ALVES COSTA DE ARAÚJO', 'Responsável pela elaboração das regras de negócio e requisitos do sistema.', NULL, 'Tech3', NULL, 'time-import-0621'),
  ('time_import_0622', 'Parcial', 'breno.morais@ffit.com.br', 'BRENO SILVA DE MORAIS', 'Responsável pelo design de interfaces de interação com o usuário', NULL, 'Tech3', NULL, 'time-import-0622'),
  ('time_import_0623', 'Parcial', 'rootedy@ffit.com.br', 'ANTONIO ROOTEDY BATISTA COSTA', 'Responsável pelo desenvolvimento fullstack', NULL, 'Tech3', NULL, 'time-import-0623'),
  ('time_import_0624', 'Parcial', 'alecoleto@gmail.com', 'Alexandre Azevedo Coleto', 'Co-CTO & Gerente de Projetos	
Lidera a arquitetura de software, infraestrutura de dados e monitoramento de sistemas. Traduz requisitos de negócio em sprints técnicos, coordena fornecedores e garante entregas dentro de escopo, prazo e orçamento (certificação PMP).', NULL, 'Manacá Tecnologias Sociais', NULL, 'time-import-0624'),
  ('time_import_0625', 'Parcial', 'angeloluiz22@gmail.com', 'Ângelo Luiz Viana Santos', 'Co-CTO & Diretor de Metodologias	
Desenha a lógica de impacto: modelos de indicadores, protocolos de coleta e frameworks de avaliação. Faz a ponte entre requisitos técnicos e evidências educacionais/socioambientais, assegurando rigor metodológico e alinhamento às políticas públicas.', NULL, 'Manacá Tecnologias Sociais', NULL, 'time-import-0625'),
  ('time_import_0626', 'Parcial', 'luanorion1@gmail.com', 'Luan Orion Baraúna', 'Responsável Técnico de IA & Automação	
Concebe e treina modelos de visão computacional, algoritmos de otimização e integra sensores IoT. Garante a robustez científica das soluções de IA, supervisiona testes de campo e validação de desempenho.', NULL, 'Manacá Tecnologias Sociais', NULL, 'time-import-0626'),
  ('time_import_0627', 'Total', 'Paloma.c@reciclosocial.com.br', 'Paloma Carvalho', 'Especialista em Economia Circular e Articulação Socioambiental	
Lidera a frente de economia circular da solução, conectando empresas, comunidades e poder público para destinação sustentável dos resíduos. Atua no desenho de estratégias de impacto socioambiental, desenvolvimento de projetos, articulação com redes de parceiros e implementação de soluções de inclusão produtiva e justiça climática.', NULL, 'Manacá Tecnologias Sociais', NULL, 'time-import-0627'),
  ('time_import_0628', 'Parcial', 'rafaelareis.manaca@gmail.com', 'Rafaela Reis Rezende', 'Analista Sênior de Projetos & Operações	
Orquestra o dia-a-dia dos pilotos: cronogramas, interface com órgãos municipais, documentação e relatórios de impacto. Conduz workshops com usuários finais e traduz feedbacks em melhorias de produto.', NULL, 'Manacá Tecnologias Sociais', NULL, 'time-import-0628'),
  ('time_import_0629', 'Total', 'sandy.vieira@enkode.tech', 'Sandy Vieira', 'Product Designer', NULL, 'Enkode', NULL, 'time-import-0629'),
  ('time_import_0630', 'Total', 'Raniere.lima@enkode.tech', 'Raniere lima', 'Tech Lead', NULL, 'Enkode', NULL, 'time-import-0630'),
  ('time_import_0631', 'Total', 'raniere.lima@enkode.tech', 'Raniere Lima', 'Tech Lead', NULL, 'enkode', NULL, 'time-import-0631'),
  ('time_import_0632', 'Total', 'sandy,vieira@enkode.tech', 'Sandy Vieira', 'product designer', NULL, 'enkode', NULL, 'time-import-0632'),
  ('time_import_0633', 'Total', 'sandy.vieira@enkode.tech', 'sandy vieira', 'product designer', NULL, 'enkode', NULL, 'time-import-0633'),
  ('time_import_0634', 'Total', 'viniciusp.salomao@outlook.com', 'Salomao Vinicius Conceicao Pereira', 'Salomão já trabalho em startup que alugava motos para motoboy e o whatsapp, além da canal de comunicação servia para gerar dados para os gestores. Essa será a função dele, cuidar das operações e do time que irá lidar com os pacientes/cidadão.', NULL, 'Conexão e Cuidado', NULL, 'time-import-0634'),
  ('time_import_0635', 'Total', 'dinho.afsn@gmail.com', 'Arlindo Ferreira dos Santos Neto', 'Dinho é o cara do TI. Além de ter feito o sistema dos principais grupos de saúde do pais, é uma grande referência em dashboard com IA. Com certeza a melhor pessoa para desenvolver um sistema desse tamanho.', NULL, 'Conexão e Cuidado', NULL, 'time-import-0635'),
  ('time_import_0636', 'Parcial', 'manuellucas51@hotmail.com', 'Manuel Lucas Souza de Melo', 'Responsável técnico pelo desenvolvimento da tecnologia IoT do projeto.', NULL, 'Ponte Saúde', NULL, 'time-import-0636'),
  ('time_import_0637', 'Parcial', 'gabriel.fernandes@recife.pe.gov.br', 'Gabriel Arruda', 'Responsável técnico pela parte de saúde e cuidado ao paciente com diabetes e/ou hipertensão, com vasta experiência na área.', NULL, 'Ponte Saúde', NULL, 'time-import-0637'),
  ('time_import_0638', 'Total', 'htamarf@gmail.com', 'Ágata Maria Ferraz de Oliveira', 'Desenvolvimento beck-end', NULL, 'Manguehub', NULL, 'time-import-0638'),
  ('time_import_0639', 'Total', 'hvlm@cesar.school', 'Hugo Vinícius de Lima Mendonça', 'Desenvolvimento beck-end e Documentação', NULL, 'Manguehub', NULL, 'time-import-0639'),
  ('time_import_0640', 'Parcial', 'marrquesgisele@gmail.com', 'Gisele Maria Teodosio Marques', 'Web Design e Picth', NULL, 'Manguehub', NULL, 'time-import-0640'),
  ('time_import_0641', 'Total', 'alannaabeatriz@hotmail.com', 'Alanna Beatriz Bezerra dos Santos', 'Picth e Desenvolvimento Front-end', NULL, 'Manguehub', NULL, 'time-import-0641'),
  ('time_import_0642', 'Parcial', 'douglas.pereira1196@gmail.com', 'DOUGLAS PEREIRA DA SILVA', 'Formado em Engenharia de Instrumentação, Automação e Robótica. Atua com gerenciamento de projetos no sistema financeiro há 8 anos com pós-graduação em andamento em Gestão de Projetos e Negócios de TI e em Engenharia de DevOps', NULL, NULL, NULL, 'time-import-0642'),
  ('time_import_0643', 'Total', 'luanventurafm29@gmail.com', 'Luan Ventura Ferrreira de Moura', 'Desenvolvimento Front-end', NULL, 'Manguehub', NULL, 'time-import-0643'),
  ('time_import_0644', 'Parcial', 'gilmarbrito10@gmail.com', 'GILMAR GONÇALVEZ DE BRITO', 'Professor Doutor em Geotecnia com mais de 40 anos de experiência na indústria com conhecimentos na área de eletrônica, eletrotécnica e monitoramento. Atua no projeto prestando consultoria com sua expertise e também através do desenvolvimento do hardware.', NULL, NULL, NULL, 'time-import-0644'),
  ('time_import_0645', 'Parcial', 'contact@gabrielvanderlei.com', 'GABRIEL VANDERLEI DE OLIVEIRA', 'Full Software Engineer com 7 anos de experiência no desenvolvimento de soluções web, mobile e de hardware. Mestrando em Ciência da Computação, Bacharel em Sistemas da Informação e Técnico em Eletrônica Industrial. Atua no projeto na codificação e definição de arquitetura relacionada a software e firmware.', NULL, NULL, NULL, 'time-import-0645'),
  ('time_import_0646', 'Total', 'mizael.correia@gmail.com', 'MIZAEL CORREIA DE LIRA FILHO', 'Engenheiro de minas formado pela Universidade Federal de Pernambuco (UFPE), com ampla atuação na área de inovação tecnológica aplicada à mineração, geotecnia e automação industrial. É fundador e CEO da COLI, uma deep tech brasileira que desenvolve soluções em hardware e software para resolver desafios críticos em setores estratégicos como mineração, infraestrutura e acessibilidade urbana. Atua no projeto na coordenação de atividades.', NULL, NULL, NULL, 'time-import-0646'),
  ('time_import_0647', 'Total', 'luanventurafm29@gmail.com', 'Luan Ventura Ferrreira de Moura', 'Desenvolvimento Front-end.', NULL, 'MangueHub', NULL, 'time-import-0647'),
  ('time_import_0648', 'Total', 'gisellylrochal@gmail.com', 'Giselly Luiza Rocha de Lima', 'Documentação e Desenvolvimento beck-end.', NULL, 'MangueHub', NULL, 'time-import-0648'),
  ('time_import_0649', 'Total', 'htamarf@gmail.com', 'Ágata Maria Ferraz de Oliveira', 'Desenvolvimento back-end.', NULL, 'MangueHub', NULL, 'time-import-0649'),
  ('time_import_0650', 'Total', 'marrquesgisele@gmail.com', 'Gisele Maria Teodosio Marques', 'Web Design e Picth.', NULL, 'MangueHub', NULL, 'time-import-0650'),
  ('time_import_0651', 'Total', 'alannaabeatriz@hotmail.com', 'Alanna Beatriz Bezerra dos Santos', 'Picth e Desenvolvimento Front-end.', NULL, 'MangueHub', NULL, 'time-import-0651'),
  ('time_import_0652', 'Total', 'nvinicius118@gmail.com', 'Hugo Vinícius de Lima Mendonça', 'Desenvolvimento back-end e documentação.', NULL, 'MangueHub', NULL, 'time-import-0652'),
  ('time_import_0653', 'Parcial', 'leydianegleici@frn.uespi.br', 'Leydiane Gleice Oliveira Medeiros', 'Profissional de Educação física - colaboradora na geolocalização', NULL, 'Visão e ritmo', NULL, 'time-import-0653'),
  ('time_import_0654', 'Total', 'yanna.carvalho19@gmail.com', 'Yanna Nádja César Menêses de Carvalho', 'Médica - suporte com o entendimento da demanda sobre pessoas com deficiencia visul', NULL, 'Visão e ritmo', NULL, 'time-import-0654'),
  ('time_import_0655', 'Total', 'brunaveigachalegre2@gmail.com', 'Bruna Veiga Chalegre de Lira', 'Atuação na área de desenvolvimento de software.', NULL, 'Elucidar', NULL, 'time-import-0655'),
  ('time_import_0656', 'Parcial', 'anapaulasapaiva@gmail.com', 'Ana Paula Sá Barreto Paiva da Cunha', 'Cursa Engenharia da Computação no CIn. Atua na área de desenvolvimento de software.', NULL, 'Elucidar', NULL, 'time-import-0656'),
  ('time_import_0657', 'Parcial', 'marilials2003@gmail.com', 'Marília Luz dos Santos', 'Cursa Engenharia da Produção na UFPE. Atua na área de design e desenvolvimento de software.', NULL, 'Elucidar', NULL, 'time-import-0657'),
  ('time_import_0658', 'Parcial', 'andradeleticia456@gmail.com', 'Letícia Andrade de Oliveira Barros', 'Cursa Ciência da Computação no CIn. Atua na área de design e desenvolvimento de software.', NULL, 'Elucidar', NULL, 'time-import-0658'),
  ('time_import_0659', 'Total', 'brunofouz@hotmail.com', 'Bruno Fouz Valente', 'Programador, produto, design.', NULL, 'BoraVer', NULL, 'time-import-0659'),
  ('time_import_0660', 'Total', 'pedromatias0047@gmail.com', 'Pedro Henrique de Brito Matias', 'Programador, cientista de dados, IA.', NULL, 'BoraVer', NULL, 'time-import-0660'),
  ('time_import_0661', 'Total', 'priscilaf.silvaweb@gmail.com', 'Priscila Fernanda da Silva', 'Designer / Front-end', NULL, 'cidade science', NULL, 'time-import-0661'),
  ('time_import_0662', 'Total', 'sophiamalencar@gmail.com', 'Sophia Albuquerque Melo de Alencar', 'Analista de dados / Back-end', NULL, 'cidade science', NULL, 'time-import-0662'),
  ('time_import_0663', 'Total', 'pedromatias0047@gmail.com', 'Pedro Henrique de Brito Matias', 'Programador, cientista de dados, IA.', NULL, 'BoraVer', NULL, 'time-import-0663'),
  ('time_import_0664', 'Total', 'brunofouz@hotmail.com', 'Bruno Fouz Valente', 'Programador, produto, design', NULL, 'BoraVer', NULL, 'time-import-0664'),
  ('time_import_0665', 'Total', 'brunofouz@hotmail.com', 'Bruno Fouz Valente', 'Programador, produto, design.', NULL, 'BoraVer', NULL, 'time-import-0665'),
  ('time_import_0666', 'Total', 'pedromatias0047@gmail.com', 'Pedro Henrique de Brito Matias', 'Programador, cientista de dados, IA.', NULL, 'BoraVer', NULL, 'time-import-0666'),
  ('time_import_0667', 'Total', 'pedromarinho243@hotmail.com', 'Pedro Miranda Marinho', 'Programador, produto, design.', NULL, 'BoraVer', NULL, 'time-import-0667'),
  ('time_import_0668', 'Total', 'pedromatias0047@gmail.com', 'Pedro Henrique de Brito Matias', 'Programador, cientista de dados, IA.', NULL, 'BoraVer', NULL, 'time-import-0668'),
  ('time_import_0669', 'Total', 'beatrizparedes1999@gmail.com', 'Beatriz Paredes do Nascimento', 'Designer', NULL, 'Hailton de Melo Lima Neto', NULL, 'time-import-0669'),
  ('time_import_0670', 'Total', 'hailtonneto27@gmail.com', 'Hailton de Melo Lima Neto', 'Especialista em Hardware / IoT', NULL, 'Hailton de Melo Lima Neto', NULL, 'time-import-0670'),
  ('time_import_0671', 'Total', 'messiasdaniel1999@gmail.com', 'Messias Daniel Ferreira da Silva Filho', 'Pitcher / Apresentador', NULL, 'Hailton de Melo Lima Neto', NULL, 'time-import-0671'),
  ('time_import_0672', 'Total', 'beatrizparedes1999@gmail.com', 'Beatriz Paredes do Nascimento', 'Especialista em UI/UX', NULL, 'Hailton de Melo Lima Neto', NULL, 'time-import-0672'),
  ('time_import_0673', 'Total', 'henriqesl16@gmail.com', 'Henrique Silva de Lima', 'DevOps / Infraestrutura', NULL, 'Hailton de Melo Lima Neto', NULL, 'time-import-0673'),
  ('time_import_0674', 'Total', 'sromario577@gmail.com', 'Maycon Romario Dos Santos Pereira', 'Product Owner / Gestor de Produto', NULL, 'Hailton de Melo Lima Neto', NULL, 'time-import-0674'),
  ('time_import_0675', 'Total', 'chaves.lucas.ferrer@gmail.com', 'Lucas Chaves Sampaio Ferrer', 'Especialista em Hardware / IoT', NULL, 'Hailton de Melo Lima Neto', NULL, 'time-import-0675'),
  ('time_import_0676', 'Total', 'htamarf@gmail.com', 'Ágata Maria Ferraz de Oliveira', 'Desenvolvimento back-end', NULL, 'Manguehub', NULL, 'time-import-0676'),
  ('time_import_0677', 'Total', 'hvlm@cesar.school', 'Hugo Vinícius de Lima Mendonça', 'Desenvolvimento back-end e Documentação', NULL, 'Manguehub', NULL, 'time-import-0677'),
  ('time_import_0678', 'Parcial', 'marrquesgisele@gmail.com', 'Gisele Maria Teodosio Marques', 'Web Design e Picth', NULL, 'Manguehub', NULL, 'time-import-0678'),
  ('time_import_0679', 'Total', 'alannaabeatriz@hotmail.com', 'Alanna Beatriz Bezerra dos Santos', 'Desenvolvimento Front-end e Picth', NULL, 'Manguehub', NULL, 'time-import-0679'),
  ('time_import_0680', 'Total', 'luanventurafm29@gmail.com', 'Luan Ventura Ferrreira de Moura', 'Desenvolvimento Front-end', NULL, 'Manguehub', NULL, 'time-import-0680'),
  ('time_import_0681', 'Total', 'priscilaf.silvaweb@gmail.com', 'Priscila Fernanda da Silva', 'Designer e Front-End', NULL, 'Cidade Science', NULL, 'time-import-0681'),
  ('time_import_0682', 'Total', 'sophiamalencar@gmail.com', 'Sophia Albuquerque Melo de Alencar', 'Analista de Dados e Back-End', NULL, 'Cidade Science', NULL, 'time-import-0682'),
  ('time_import_0683', 'Total', 'Joelysomalcantaradasilva@gmail.com', 'Joelysom alcantara da silva', 'Desenvolvedor Full-stack, Engenheiro de Machine Learning', NULL, 'ALEX MIQUEIAS BARBOSA DE SOUZA', NULL, 'time-import-0683'),
  ('time_import_0684', 'Total', 'mateusmenezes8997@gmail.com', 'Mateus Felipe Carneiro de Menezes', 'Desenvolvedor Full-Stack', NULL, 'ALEX MIQUEIAS BARBOSA DE SOUZA', NULL, 'time-import-0684'),
  ('time_import_0685', 'Total', 'matheusjosesantosalmeida@gmail.com', 'Matheus José Santos Almeida', 'Analista de dados, Engenheiro de dados.', NULL, 'ALEX MIQUEIAS BARBOSA DE SOUZA', NULL, 'time-import-0685'),
  ('time_import_0686', 'Total', 'tarsilaamadoab@gmail.com', 'Tarsila Amado Alves de Brito', 'analista de dados, designer e engenheira de machine learning', NULL, 'ALEX MIQUEIAS BARBOSA DE SOUZA', NULL, 'time-import-0686'),
  ('time_import_0687', 'Total', 'mizael.correia@gmail.com', 'Mizael Correia de Lira Filho', 'Engenheiro de minas formado pela Universidade Federal de Pernambuco (UFPE), com ampla atuação na área de inovação tecnológica aplicada à mineração, geotecnia e automação industrial. É fundador e CEO da COLI, uma deep tech brasileira que desenvolve soluções em hardware e software para resolver desafios críticos em setores estratégicos como mineração, infraestrutura e acessibilidade urbana. Atua no projeto na coordenação de atividades.', NULL, 'COLI', NULL, 'time-import-0687'),
  ('time_import_0688', 'Total', 'rafael.rattata@gmail.com', 'RAFAEL ANDRADE DA SILVA', NULL, NULL, 'RAFAEL ANDRADE DA SILVA', NULL, 'time-import-0688'),
  ('time_import_0689', 'Total', 'osmariojj@gmail.com', 'JOSÉ OSMÁRIO BATISTA DE GOIS JÚNIOR', NULL, NULL, 'RAFAEL ANDRADE DA SILVA', NULL, 'time-import-0689'),
  ('time_import_0690', 'Parcial', 'gilmarbrito10@gmail.com', 'Gilmar Gonçalvez de Brito', 'Professor Doutor em Geotecnia com mais de 40 anos de experiência na indústria com conhecimentos na área de eletrônica, eletrotécnica e monitoramento. Atua no projeto prestando consultoria com sua expertise e também através do desenvolvimento do hardware.', NULL, 'COLI', NULL, 'time-import-0690'),
  ('time_import_0691', 'Parcial', 'contact@gabrielvanderlei.com', 'Gabriel Vanderlei de Oliveira', 'Full Software Engineer com 7 anos de experiência no desenvolvimento de soluções web, mobile e de hardware. Mestrando em Ciência da Computação, Bacharel em Sistemas da Informação e Técnico em Eletrônica Industrial. Atua no projeto na codificação e definição de arquitetura relacionada a software e firmware.', NULL, 'COLI', NULL, 'time-import-0691'),
  ('time_import_0692', 'Parcial', 'douglas.pereira1196@gmail.com', 'Douglas Pereira da Silva', 'Formado em Engenharia de Instrumentação, Automação e Robótica. Atua com gerenciamento de projetos no sistema financeiro há 8 anos com pós-graduação em andamento em Gestão de Projetos e Negócios de TI e em Engenharia de DevOpsFormado em Engenharia de Instrumentação, Automação e Robótica. Atua com gerenciamento de projetos no sistema financeiro há 8 anos com pós-graduação em andamento em Gestão de Projetos e Negócios de TI e em Engenharia de DevOps', NULL, 'COLI', NULL, 'time-import-0692'),
  ('time_import_0693', 'Total', 'mizael.correia@gmail.com', 'Mizael Correia de Lira Filho', 'Engenheiro de minas formado pela Universidade Federal de Pernambuco (UFPE), com ampla atuação na área de inovação tecnológica aplicada à mineração, geotecnia e automação industrial. É fundador e CEO da COLI, uma deep tech brasileira que desenvolve soluções em hardware e software para resolver desafios críticos em setores estratégicos como mineração, infraestrutura e acessibilidade urbana. Atua no projeto na coordenação de atividades.', NULL, 'COLI', NULL, 'time-import-0693'),
  ('time_import_0694', 'Total', 'hailtonneto27@gmail.com', 'Hailton de Melo Lima Neto', 'Especialista em Hardware / IoT', NULL, 'Hailton de Melo Lima Neto', NULL, 'time-import-0694'),
  ('time_import_0695', 'Total', 'chaves.lucas.ferrer@gmail.com', 'Lucas Chaves Sampaio Ferrer', 'Especialista em Hardware / IoT', NULL, 'Hailton de Melo Lima Neto', NULL, 'time-import-0695'),
  ('time_import_0696', 'Parcial', 'gilmarbrito10@gmail.com', 'Gilmar Gonçalvez de Brito', 'Professor Doutor em Geotecnia com mais de 40 anos de experiência na indústria com conhecimentos na área de eletrônica, eletrotécnica e monitoramento. Atua no projeto prestando consultoria com sua expertise e também através do desenvolvimento do hardware.', NULL, 'COLI', NULL, 'time-import-0696'),
  ('time_import_0697', 'Total', 'sromario577@gmail.com', 'Maycon Romario Dos Santos Pereira', 'Product Owner / Gestor de Produto', NULL, 'Hailton de Melo Lima Neto', NULL, 'time-import-0697'),
  ('time_import_0698', 'Total', 'henriqesl16@gmail.com', 'Henrique Silva de Lima', 'DevOps / Infraestrutura', NULL, 'Hailton de Melo Lima Neto', NULL, 'time-import-0698'),
  ('time_import_0699', 'Total', 'messiasdaniel1999@gmail.com', 'Messias Daniel Ferreira da Silva Filho', 'Pitcher / Apresentador', NULL, 'Hailton de Melo Lima Neto', NULL, 'time-import-0699'),
  ('time_import_0700', 'Total', 'beatrizparedes1999@gmail.com', 'Beatriz Paredes do Nascimento', 'Especialista em UI/UX', NULL, 'Hailton de Melo Lima Neto', NULL, 'time-import-0700'),
  ('time_import_0701', 'Parcial', 'douglas.pereira1196@gmail.com', 'Douglas Pereira da Silva', 'Formado em Engenharia de Instrumentação, Automação e Robótica. Atua com gerenciamento de projetos no sistema financeiro há 8 anos com pós-graduação em andamento em Gestão de Projetos e Negócios de TI e em Engenharia de DevOpsFormado em Engenharia de Instrumentação, Automação e Robótica. Atua com gerenciamento de projetos no sistema financeiro há 8 anos com pós-graduação em andamento em Gestão de Projetos e Negócios de TI e em Engenharia de DevOps', NULL, 'COLI', NULL, 'time-import-0701'),
  ('time_import_0702', 'Parcial', 'contact@gabrielvanderlei.com', 'Gabriel Vanderlei de Oliveira', 'Full Software Engineer com 7 anos de experiência no desenvolvimento de soluções web, mobile e de hardware. Mestrando em Ciência da Computação, Bacharel em Sistemas da Informação e Técnico em Eletrônica Industrial. Atua no projeto na codificação e definição de arquitetura relacionada a software e firmware.', NULL, 'COLI', NULL, 'time-import-0702'),
  ('time_import_0703', 'Total', 'brunaveigachalegre2@gmail.com', 'Bruna Veiga Chalegre de Lira', 'Cursa Engenharia da Computação. Atuo na área de desenvolvimento de software.', NULL, 'Elucidar', NULL, 'time-import-0703'),
  ('time_import_0704', 'Parcial', 'anapaulasapaiva@gmail.com', 'Ana Paula Sá Barreto Paiva da Cunha', 'Cursa Engenharia da Computação. Atuo na área de desenvolvimento de software.', NULL, 'Elucidar', NULL, 'time-import-0704'),
  ('time_import_0705', 'Parcial', 'marilials2003@gmail.com', 'Marília Luz dos Santos', 'Cursa Engenharia da Produção. Atua na área de desenvolvimento de software.', NULL, 'Elucidar', NULL, 'time-import-0705'),
  ('time_import_0706', 'Parcial', 'andradeleticia456@gmail.com', 'Letícia Andrade de Oliveira Barros', 'Cursa Ciência da Computação. Atua na área de desenvolvimento de software.', NULL, 'Elucidar', NULL, 'time-import-0706'),
  ('time_import_0707', 'Total', 'denisfilho2@gmail.com', 'Denis Barbosa Da Silva Filho', 'Comunicação, Marketing e Produção Audiovisual', NULL, 'Recife em Escala', NULL, 'time-import-0707'),
  ('time_import_0708', 'Total', 'vitoriacavalcante.ds@gmail.com', 'Vitória Cavalcante de Souza', 'Produto e Requisitos', NULL, 'Recife em Escala', NULL, 'time-import-0708'),
  ('time_import_0709', 'Parcial', 'dev.deivyson@gmail.com', 'Deivyson José da Silva', 'Engenharia de Software e Articulação Técnica', NULL, 'Recife em Escala', NULL, 'time-import-0709'),
  ('time_import_0710', 'Parcial', 'caiogabrieltf@gmail.com', 'Caio Gabriel Tavares Ferreira', 'Pesquisa Ambiental e Análise Territorial', NULL, 'Recife em Escala', NULL, 'time-import-0710'),
  ('time_import_0711', 'Total', 'automocaocontato1@gmail.com', 'Maria Estefani da Silva', 'Estefani Silva, formada em Tecnologia da Informação, com experiência no desenvolvimento de automações, integrações com bancos de dados e soluções inteligentes. Meu foco é criar e implementar sistemas que otimizam processos, combinando automação com inteligência artificial de forma eficiente e estratégica. Atuo há mais de 1 ano na área, sempre buscando entregar soluções escaláveis, que gerem resultados e impulsionem a transformação digital dos negócios.', NULL, 'Metasolution', NULL, 'time-import-0711'),
  ('time_import_0712', 'Total', 'timoteo.barros@gmail.com', 'Timoteo barros', 'Desenvolvedor mobile e fronteend', NULL, 'Wladimilson Bernardino Nascimento', NULL, 'time-import-0712'),
  ('time_import_0713', 'Total', 'metasolution.ai@gmail.com', 'Everton lucena', 'Everton Lucena atua na área de vendas, marketing e relacionamento, sendo responsável pela frente comercial e pela parte criativa dos projetos. Possui habilidade em negociação, atendimento consultivo e desenvolvimento de estratégias para geração de valor e expansão de negócios.', NULL, 'Metasolution', NULL, 'time-import-0713'),
  ('time_import_0714', 'Total', 'cebduarte@gmail.com', 'Carlos Eduardo Duarte', 'Desenvolvedor fullstack e especialista em dados e infraestrutura', NULL, 'Wladimilson Bernardino Nascimento', NULL, 'time-import-0714'),
  ('time_import_0715', 'Total', 'victor.fgd7@gmail.com', 'Victor Guimaraes', 'Desenvolvedor fullstack cientista em games e IA', NULL, 'Wladimilson Bernardino Nascimento', NULL, 'time-import-0715'),
  ('time_import_0716', 'Total', 'claudio.barnabe@gmail.com', 'Claudio Barnabe', 'Fisiologista e consultor técnico', NULL, 'Wladimilson Bernardino Nascimento', NULL, 'time-import-0716'),
  ('time_import_0717', 'Integral', NULL, NULL, 'ceo', NULL, NULL, 'ceciliaodeazevedo2@gmail.com', 'time-import-0717'),
  ('time_import_0718', NULL, NULL, NULL, NULL, NULL, NULL, 'gabrielchamie@gmail.com', 'time-import-0718'),
  ('time_import_0719', NULL, NULL, NULL, NULL, NULL, 'ML Plataformas Digitais e Marketing LTDA', NULL, 'time-import-0719'),
  ('time_import_0720', NULL, NULL, NULL, NULL, NULL, 'ADAPTA WAY', NULL, 'time-import-0720'),
  ('time_import_0721', NULL, NULL, NULL, NULL, NULL, 'Cirandda', NULL, 'time-import-0721'),
  ('time_import_0722', NULL, NULL, NULL, NULL, NULL, 'LUDI INOVA SIMPLES IS', 'vdiogo225@gmail.com', 'time-import-0722'),
  ('time_import_0723', 'Integral', 'david@souv.tech', 'David Inojosa', 'CTO, atua na gestão dos projetos chaves, liderança direta de gestores de projetos.', NULL, 'Souv', NULL, 'time-import-0723'),
  ('time_import_0724', 'Integral', 'david@souv.tech', 'David Inojosa', 'CTO, atua na gestão dos projetos chaves, liderança direta de gestores de projetos.', NULL, 'Souv', NULL, 'time-import-0724'),
  ('time_import_0725', 'Integral', NULL, NULL, 'CEO', NULL, 'Biofábrica de Corais', 'ruda_fernandes@hotmail.com', 'time-import-0725'),
  ('time_import_0726', NULL, NULL, NULL, NULL, NULL, 'ChromaSolar', 'alissonprofessionalwork@gmail.com', 'time-import-0726'),
  ('time_import_0727', NULL, NULL, NULL, NULL, NULL, 'lembra+', NULL, 'time-import-0727'),
  ('time_import_0728', NULL, NULL, NULL, NULL, NULL, 'MARINHO AI SOLUTIONS CORPORATION', NULL, 'time-import-0728'),
  ('time_import_0729', NULL, NULL, NULL, NULL, NULL, 'CriticLevel', NULL, 'time-import-0729'),
  ('time_import_0730', NULL, NULL, NULL, NULL, NULL, 'UNCLUIR+', NULL, 'time-import-0730'),
  ('time_import_0731', NULL, NULL, NULL, NULL, NULL, 'UNCLUIR+', 'analuna@asces.edu.br', 'time-import-0731'),
  ('time_import_0732', NULL, NULL, NULL, NULL, NULL, 'Aretizze', NULL, 'time-import-0732'),
  ('time_import_0733', NULL, NULL, NULL, NULL, NULL, 'Loomi', NULL, 'time-import-0733'),
  ('time_import_0734', NULL, NULL, NULL, NULL, NULL, 'Educa por Rossandro Klinjey', NULL, 'time-import-0734'),
  ('time_import_0735', NULL, NULL, NULL, NULL, NULL, 'Educa por Rossandro Klinjey', 'catarina.alecrim@soueduca.com', 'time-import-0735'),
  ('time_import_0736', NULL, NULL, NULL, NULL, NULL, 'Moverdes', NULL, 'time-import-0736'),
  ('time_import_0737', NULL, NULL, NULL, NULL, NULL, 'VOLTZX Tecnologia e Inovação LTDA', NULL, 'time-import-0737'),
  ('time_import_0738', NULL, NULL, NULL, NULL, NULL, 'Zeatech', 'talitatabosa397@gmail.com', 'time-import-0738'),
  ('time_import_0739', NULL, NULL, NULL, NULL, NULL, 'Stepps Tecnologia LTDA', NULL, 'time-import-0739'),
  ('time_import_0740', NULL, NULL, NULL, NULL, NULL, 'SPIN - BENEFICIAMENTO DE RESÍDUOS TÊXTEIS', NULL, 'time-import-0740'),
  ('time_import_0741', NULL, NULL, NULL, NULL, NULL, 'GStack', NULL, 'time-import-0741'),
  ('time_import_0742', NULL, NULL, NULL, NULL, NULL, 'GStack', 'geovanny@gstack.com.br', 'time-import-0742'),
  ('time_import_0743', NULL, NULL, NULL, NULL, NULL, 'Germini', NULL, 'time-import-0743'),
  ('time_import_0744', NULL, NULL, NULL, NULL, NULL, 'Bio Fábrica de Corais LTDA', NULL, 'time-import-0744'),
  ('time_import_0745', NULL, NULL, NULL, NULL, NULL, 'SUED- Ficha técnica', NULL, 'time-import-0745'),
  ('time_import_0746', NULL, NULL, NULL, NULL, NULL, 'BIOTEC TECNOLOGIA E INOVAÇÕES', NULL, 'time-import-0746'),
  ('time_import_0747', 'Integral', NULL, NULL, 'Co fundadora', NULL, 'Quark', '4anauriarte@gmail.com', 'time-import-0747'),
  ('time_import_0748', 'Integral', NULL, NULL, 'COFOUDER DO GO DELAS, UMA INICIATUVA DE IMPACTO SOCIAL,ONDE AJUDA MULHERES EM SITUAÇÃO DE VUNERABILIDADE SOCIAL', NULL, 'GO DELAS', 'azevedomarianafreitas@gmail.com', 'time-import-0748'),
  ('time_import_0749', 'Integral', NULL, NULL, 'Founder', NULL, 'Lida - Mobilidade Ativa', 'aecioscj@gmail.com', 'time-import-0749'),
  ('time_import_0750', 'Parcial', NULL, NULL, 'CSMO', NULL, 'Harena Tech', 'sophiarocha535@gmail.com', 'time-import-0750'),
  ('time_import_0751', 'Parcial', NULL, NULL, 'CEO', NULL, 'Parkfinder', 'richardsontiburcio@gmail.com', 'time-import-0751'),
  ('time_import_0752', 'Parcial', NULL, NULL, 'CEO', NULL, 'Innova WPP', 'ma00leal@gmail.com', 'time-import-0752'),
  ('time_import_0753', 'Integral', NULL, NULL, 'CEO e Cofounder', NULL, 'DOE+', 'robertmoreirajr@gmail.com', 'time-import-0753'),
  ('time_import_0754', NULL, 'wectornanime@gmail.com', 'Wectornanime Nascimento Felipe', NULL, NULL, 'Projeto HORUS', 'wectornanime@gmail.com', 'time-import-0754'),
  ('time_import_0755', 'Parcial', NULL, NULL, 'Advisor e Comercial', NULL, 'Play da Galera', 'jacsontiola@gmail.com', 'time-import-0755'),
  ('time_import_0756', 'Integral', 'contato@playdagalera.com.br', 'Lucas Miranda', 'Fundador e CTO', NULL, 'Play da Galera', NULL, 'time-import-0756'),
  ('time_import_0757', 'Integral', NULL, NULL, 'Oi! Sou Allan Igor, CEO da Startup Immersana e Desenvolvedor.', NULL, 'Immersana', 'immersana@outlook.com', 'time-import-0757'),
  ('time_import_0758', 'Integral', NULL, NULL, 'CE0', NULL, 'Braço Forte Concierge', 'lucasalfaromeu10@gmail.com', 'time-import-0758'),
  ('time_import_0759', NULL, NULL, NULL, 'Sou sócio fundador e CEO da Pegasus Technology', NULL, 'Pegasus Technology', 'amonteiro@pegasustec.com.br', 'time-import-0759'),
  ('time_import_0760', NULL, NULL, NULL, 'Sou sócio fundador e CEO da Pegasus Technology', NULL, 'Pegasus Technology', 'amonteiro@pegasustec.com.br', 'time-import-0760'),
  ('time_import_0761', NULL, NULL, NULL, 'Sou sócio fundador e CEO da Pegasus Technology', NULL, 'Pegasus Technology', 'amonteiro@pegasustec.com.br', 'time-import-0761'),
  ('time_import_0762', NULL, NULL, NULL, 'Sou sócio fundador e CEO da Pegasus Technology', NULL, NULL, 'amonteiro@pegasustec.com.br', 'time-import-0762'),
  ('time_import_0763', NULL, NULL, NULL, 'Sou sócio fundador e CEO da Pegasus Technology', NULL, NULL, 'amonteiro@pegasustec.com.br', 'time-import-0763'),
  ('time_import_0764', NULL, NULL, NULL, 'Sou sócio fundador e CEO da Pegasus Technology', NULL, NULL, 'amonteiro@pegasustec.com.br', 'time-import-0764'),
  ('time_import_0765', NULL, NULL, NULL, 'Sou sócio fundador e CEO da Pegasus Technology', NULL, NULL, 'amonteiro@pegasustec.com.br', 'time-import-0765'),
  ('time_import_0766', 'Parcial', NULL, NULL, 'Líder de Relacionamento & Marketing', NULL, 'Mathis', 'pedrocasefilho2208@gmail.com', 'time-import-0766'),
  ('time_import_0767', 'Parcial', NULL, NULL, 'fundador da Keycore Tech Hub e também o desenvolvedor responsável por todos os projetos da empresa, papel que une liderança estratégica e execução técnica, pois além de ter criado a visão e direcionamento do negócio, foi você quem concebeu, arquitetou, programou, testou e entregou cada solução, desde softwares personalizados, aplicativos móveis e sistemas web até integrações complexas, soluções em nuvem, inteligência artificial e prototipagem em IoT, garantindo que cada projeto traduzisse inovação, qualidade e impacto real para os clientes.', NULL, 'KeyCore Tech Hub', 'geriofilho@gmail.com', 'time-import-0767'),
  ('time_import_0768', 'Parcial', 'contato@beg.app.br', 'Gabriel Chamie', NULL, NULL, 'BEG', NULL, 'time-import-0768'),
  ('time_import_0769', 'Integral', NULL, NULL, 'CEO', NULL, 'Motiron Technologies', 'dizeumateus@gmail.com', 'time-import-0769'),
  ('time_import_0770', 'Integral', 'edson.junior@motiron.com.br', 'Edson Gonçalves dos Santos Junior', 'CTO', NULL, 'Motiron Technologies', NULL, 'time-import-0770'),
  ('time_import_0771', 'Parcial', 'nailza.arruda@motiron.com.br', 'Nailza Arruda', 'COO', NULL, 'Motiron Technologies', NULL, 'time-import-0771'),
  ('time_import_0772', 'Integral', NULL, NULL, 'CEO', NULL, 'Cambui Online PE', 'og1producoes@gmail.com', 'time-import-0772'),
  ('time_import_0773', 'Integral', NULL, NULL, 'DIRETOR COMERCIAL E EXECUTIVO', NULL, 'PEGASUS TECHNOLOGY', 'amonteiro@pegasustec.com.br', 'time-import-0773'),
  ('time_import_0774', 'Parcial', NULL, NULL, 'CEO', NULL, 'Non Stop Playing', 'rbn3001@hotmail.com', 'time-import-0774'),
  ('time_import_0775', 'Parcial', NULL, NULL, 'Founder & CEO | Estratégia e Impacto Social', NULL, 'Diná Treinamentos', 'michaelgaviao@hotmail.com', 'time-import-0775'),
  ('time_import_0776', NULL, NULL, NULL, 'CEO', NULL, 'Future Ready Labs', NULL, 'time-import-0776'),
  ('time_import_0777', 'Integral', NULL, NULL, 'Lígia Coelho – Fundadora/ CEO /Autora
Lígia Coelho é cidadã luso-brasileira, formada em Psicologia e empresária com 37 anos de atuação no Brasil e no exterior. Fundadora da VER-TI, é também mãe de um jovem com agenesia motora dos membros superiores — experiência que fortaleceu seu compromisso com a inclusão.

Após conhecer o ecossistema de mobilidade urbana em Lisboa, liderou a expansão de uma empresa brasileira do setor em 15 municípios nos estados de Pernambuco, Minas Gerais, São Paulo e Espírito Santo. Hoje, é referência nacional em soluções de mobilidade com impacto social, à frente de empresas que unem inovação, propósito e transformação.', NULL, 'VER-TI MOBILIDADE URBANA LTDA', 'ligia37_1@hotmail.com', 'time-import-0777'),
  ('time_import_0778', 'Integral', NULL, NULL, 'Lígia Coelho – Fundadora/ CEO /Autora
Lígia Coelho é cidadã luso-brasileira, formada em Psicologia e empresária com 37 anos de atuação no Brasil e no exterior. Fundadora da VER-TI, é também mãe de um jovem com agenesia motora dos membros superiores — experiência que fortaleceu seu compromisso com a inclusão.

Após conhecer o ecossistema de mobilidade urbana em Lisboa, liderou a expansão de uma empresa brasileira do setor em 15 municípios nos estados de Pernambuco, Minas Gerais, São Paulo e Espírito Santo. Hoje, é referência nacional em soluções de mobilidade com impacto social, à frente de empresas que unem inovação, propósito e transformação.', NULL, 'VER-TI MOBILIDADE URBANA LTDA', 'ligia37_1@hotmail.com', 'time-import-0778'),
  ('time_import_0779', NULL, NULL, NULL, 'CEO', NULL, 'Stepps', NULL, 'time-import-0779'),
  ('time_import_0780', 'Integral', NULL, NULL, 'Fundadora e Responsável Tecnica', NULL, 'NAUMA Programa de Educação Lúdica para Proteção ao Abuso Sexual na Infância e Adolescência', 'julianaaraujo.to@gmail.com', 'time-import-0780'),
  ('time_import_0781', NULL, NULL, NULL, 'CEO', NULL, 'Sinalize', NULL, 'time-import-0781'),
  ('time_import_0782', NULL, NULL, NULL, 'CEO', NULL, 'Sinalize', NULL, 'time-import-0782'),
  ('time_import_0783', NULL, NULL, NULL, 'CEO', NULL, 'Sinalize', NULL, 'time-import-0783'),
  ('time_import_0784', 'Integral', NULL, NULL, 'Fundador', NULL, 'Sinalize', 'george.henrique123456@gmail.com', 'time-import-0784'),
  ('time_import_0785', NULL, NULL, NULL, 'Desenvolvedor de Inovação', NULL, 'Empresa Legal – Inteligência em Conformidade Empresarial', 'juniorheliorocha@gmail.com', 'time-import-0785'),
  ('time_import_0786', NULL, NULL, NULL, 'Sócio-fundador', NULL, 'Beebip', NULL, 'time-import-0786'),
  ('time_import_0787', NULL, NULL, NULL, 'CAIO', NULL, 'PARKFINDER', 'caio66312@gmail.com', 'time-import-0787'),
  ('time_import_0788', NULL, NULL, NULL, 'Sou diretor executivos, responsável pela área de tecnologia e vendas', NULL, 'ATIVUS DESENVOLVIMENTO DE SOFTWARES LTDA', 'rodolfocabral@outlook.com.br', 'time-import-0788'),
  ('time_import_0789', NULL, NULL, NULL, 'CEO', NULL, 'PLIF - Plataforma de Inteligencia Fiscal', NULL, 'time-import-0789'),
  ('time_import_0790', 'Parcial', 'priscila.baracho@hotmail.com', 'Priscila Baracho Campos Durando', 'Priscila Durando é cofundadora da Beebip e responsável por Operações e Experiência da Família (COO).

Ela atua diretamente no desenho dos processos, na qualidade do serviço prestado, no relacionamento com responsáveis e motoristas, e no acompanhamento do dia a dia operacional da plataforma. É a pessoa que garante que tudo funcione com segurança, organização e padronização, desde a triagem dos motoristas até o atendimento das famílias.

Além disso, Priscila traz uma visão muito forte sobre experiência do usuário, organização e gestão de pessoas, contribuindo para que a Beebip mantenha um padrão elevado de cuidado e confiabilidade no serviço de transporte escolar inteligente.', NULL, 'Beebip', NULL, 'time-import-0790'),
  ('time_import_0791', 'Integral', 'contato@detr3s.com', 'Filipe Durando Moura', 'Filipe Durando é cofundador e CEO da Beebip.

Ele é responsável pela visão estratégica do negócio, pelo desenvolvimento do produto e pela articulação com parceiros, escolas, investidores e programas de inovação. Atua diretamente na definição do modelo de crescimento da startup, na validação das soluções tecnológicas e na condução das iniciativas de expansão.

Filipe também lidera as áreas de marketing, posicionamento da marca e relacionamento institucional, conectando a Beebip ao ecossistema de mobilidade urbana, educação e inovação.', NULL, 'Beebip', NULL, 'time-import-0791'),
  ('time_import_0792', NULL, NULL, NULL, 'CEO', NULL, 'Rope Health', NULL, 'time-import-0792'),
  ('time_import_0793', NULL, NULL, NULL, 'CEO', NULL, 'Rope Health', NULL, 'time-import-0793'),
  ('time_import_0794', NULL, NULL, NULL, 'Desenvolvedora', NULL, NULL, 'williamkevin484@gmail.com', 'time-import-0794'),
  ('time_import_0795', NULL, NULL, NULL, 'Product Manager', NULL, 'InVision', NULL, 'time-import-0795'),
  ('time_import_0796', 'Integral', NULL, NULL, 'product manager', NULL, 'Invision', 'l-eduardo96@hotmail.com', 'time-import-0796'),
  ('time_import_0797', NULL, NULL, NULL, 'Sócia e Diretora Comercial, dedicação exclusiva à gestão estratégica da startup.', NULL, 'TCX CREATIVE SOLUTIONS S.A.', NULL, 'time-import-0797'),
  ('time_import_0798', 'Parcial', NULL, NULL, 'Sócio', NULL, 'EBA SOLUCOES INTELIGENTES LTDA', 'bruno.josino@gmail.com', 'time-import-0798'),
  ('time_import_0799', NULL, NULL, NULL, 'Na proposta de criação da startup, atuarei como Pedagoga, Diretora Geral e Administradora, sendo responsável pela concepção pedagógica da solução, fundamentação teórico-metodológica, validação educacional e articulação com a pesquisa acadêmica de mestrado que dá origem ao projeto. Também serei responsável pela gestão estratégica e administrativa da futura startup, assegurando que o produto educacional esteja alinhado às evidências científicas da alfabetização e às demandas do mercado educacional.
O outro integrante da equipe atuará como Diretor de Tecnologia e Relações Públicas, sendo responsável pelo desenvolvimento tecnológico da solução, estruturação da plataforma digital, inovação, comunicação institucional, articulação de parcerias estratégicas e relacionamento com o público e stakeholders', NULL, 'Capaz EduTech', 'js_artesefestas@yahoo.com.br', 'time-import-0799'),
  ('time_import_0800', 'Integral', NULL, NULL, 'CFO', NULL, 'FlowUp', 'riqueferreira@gmail.com', 'time-import-0800'),
  ('time_import_0801', 'Integral', NULL, NULL, 'CFO', NULL, 'FlowUp', 'riqueferreira@gmail.com', 'time-import-0801'),
  ('time_import_0802', 'Parcial', NULL, NULL, 'CEO', NULL, NULL, 'gabrielchamie@gmail.com', 'time-import-0802'),
  ('time_import_0803', 'Integral', NULL, NULL, 'Diretor presidente', NULL, NULL, 'elvisdelima.com.br@gmail.com', 'time-import-0803'),
  ('time_import_0804', 'Integral', NULL, NULL, 'Diretor presidente', NULL, NULL, 'elvisdelima.com.br@gmail.com', 'time-import-0804'),
  ('time_import_0805', 'Integral', NULL, NULL, 'teste', NULL, NULL, 'elvisdelima.com.br@gmail.com', 'time-import-0805'),
  ('time_import_0806', NULL, NULL, NULL, NULL, NULL, 'Grite', 'gabrielchamie@gmail.com', 'time-import-0806'),
  ('time_import_0807', NULL, NULL, NULL, NULL, NULL, 'teste', 'gabrielchamie@gmail.com', 'time-import-0807'),
  ('time_import_0808', 'Integral', NULL, NULL, 'Lígia Bezerra Coelho – CEO, fundadora e autora da solução da VEZZ Mobilidade Urbana. Empresária multifacetária com mais de 38 anos de experiência no mercado nacional e internacional de eventos e projetos, lidera a VEZZ com visão estratégica e foco em inovação inclusiva. É responsável por articular parcerias, captar investimentos e conduzir a expansão da startup, apoiada pela patente registrada em 197 países. Sua trajetória combina gestão, empreendedorismo e impacto socioambiental, posicionando a VEZZ como referência em mobilidade urbana acessível e sustentável.', NULL, 'Lígia Coelho', 'projetovertioficial@gmail.com', 'time-import-0808'),
  ('time_import_0809', 'Parcial', NULL, NULL, 'Meu papel no projeto é como criador, desenvolvedor e responsável técnico pelo desenvolvimento do equipamento e do software embarcado. Fui responsável pela criação do hardware, programação do firmware, desenvolvimento da lógica de controle, interface do sistema e integração eletrônica do dispositivo voltado ao acionamento e controle de válvulas eletrônicas compatíveis com sistemas de ar-condicionado Samsung.

Também realizei o desenvolvimento das funções de automação, gerenciamento de energia, conectividade Wi-Fi, atualização OTA, interface OLED e sistemas de monitoramento e segurança do equipamento, atuando diretamente em todas as etapas do projeto, desde a concepção até a implementação final.', NULL, NULL, 'isaqueeln11@gmail.com', 'time-import-0809'),
  ('time_import_0810', NULL, NULL, NULL, 'CEO e co-fundador', NULL, 'Future Ready Labs', 'ernj@cin.ufpe.br', 'time-import-0810'),
  ('time_import_0811', 'Integral', NULL, NULL, 'Fundadora e CEO do Recomeço Circular, atuando na liderança estratégica, desenvolvimento institucional e articulação de inovação social e tecnológica. Responsável pela idealização da GovTech/Deep Tech, estruturação do modelo de negócio, construção de parcerias, elaboração de projetos para editais de inovação e desenvolvimento de metodologias voltadas à autonomia econômica feminina, regeneração territorial e inclusão produtiva. Atua na integração entre impacto social, inteligência artificial regenerativa, inovação aberta e políticas públicas, conduzindo a visão estratégica, o relacionamento com ecossistemas de inovação, investidores, instituições científicas e organizações públicas e privadas.', NULL, 'Recomeço Circular', 'joselitajuditedesouza@gmail.com', 'time-import-0811'),
  ('time_import_0812', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'time-import-0812'),
  ('time_import_0813', 'Integral', NULL, NULL, 'CFO', NULL, 'FlowUp', 'riqueferreira@gmail.com', 'time-import-0813'),
  ('time_import_0814', 'Integral', 'riqueferreira@gmail.com', 'RiqueFerreira', 'CFO', NULL, 'FlowUp', 'riqueferreira@gmail.com', 'time-import-0814'),
  ('time_import_0815', 'Integral', NULL, NULL, 'Fundadora e CEO do Recomeço Circular, atuando na liderança estratégica, desenvolvimento institucional e articulação de inovação social e tecnológica. Responsável pela idealização da GovTech/Deep Tech, estruturação do modelo de negócio, construção de parcerias, elaboração de projetos para editais de inovação e desenvolvimento de metodologias voltadas à autonomia econômica feminina, regeneração territorial e inclusão produtiva. Atua na integração entre impacto social, inteligência artificial regenerativa, inovação aberta e políticas públicas, conduzindo a visão estratégica, o relacionamento com ecossistemas de inovação, investidores, instituições científicas e organizações públicas e privadas.', NULL, NULL, 'joselitajuditedesouza@gmail.com', 'time-import-0815'),
  ('time_import_0816', 'Integral', NULL, NULL, 'CEO e Founder', NULL, 'SOMOS healthtech', 'saulocrocha@hotmail.com', 'time-import-0816')
ON CONFLICT ("id") DO UPDATE SET
  "dedicacao" = EXCLUDED."dedicacao",
  "email" = EXCLUDED."email",
  "Nome" = EXCLUDED."Nome",
  "papel" = EXCLUDED."papel",
  "proposta_nit" = EXCLUDED."proposta_nit",
  "Startup" = EXCLUDED."Startup",
  "usuario" = EXCLUDED."usuario",
  "modified_date" = CURRENT_TIMESTAMP;
```

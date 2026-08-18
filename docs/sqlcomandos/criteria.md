### 1. Mapeamento de Colunas (CSV Bubble $\rightarrow$ SQL)

| Coluna no CSV (Bubble) | Coluna na Tabela SQL | Tipo SQL | Tratamento Realizado |
| :--- | :--- | :--- | :--- |
| `desafio` | `"desafio"` | `VARCHAR(255)` | ID do desafio vinculado |
| `Description` | `"Description"` | `TEXT` | Descrição do critério com quebras e aspas tratadas |
| `eita` | `"eita"` | `VARCHAR(255)` | ID do ciclo EITA |
| `name` | `"name"` | `VARCHAR(255)` | Nome do critério de avaliação |
| `order` | `"order"` | `NUMERIC(15, 2)` | Ordem de exibição do critério |
| `type` | `"type"` | `VARCHAR(255)` | Tipo do critério (ex: Startup) |
| `weight` | `"weight"` | `NUMERIC(15, 2)` | Peso do critério |

---

### 2. DDL - Criação da Tabela `Criteria`

```sql
CREATE TABLE IF NOT EXISTS "Criteria" (
  "id" VARCHAR(255) PRIMARY KEY,
  "desafio" VARCHAR(255),
  "desafio_id" VARCHAR(255),
  "Description" TEXT,
  "eita" VARCHAR(255),
  "eita_id" VARCHAR(255),
  "name" VARCHAR(255),
  "order" NUMERIC(15, 2),
  "type" VARCHAR(255),
  "weight" NUMERIC(15, 2),
  "weight_value_id" VARCHAR(255),
  "created_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "modified_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "creator_id" VARCHAR(255),
  "slug" VARCHAR(255)
);
```

---

### 3. DML - Script de Inserção de todos os 72 Registros

```sql
INSERT INTO "Criteria" (
  "id",
  "desafio",
  "Description",
  "eita",
  "name",
  "order",
  "type",
  "weight",
  "slug"
)
VALUES
  ('crit_import_0001', '1741713756342x475094650909622300', 'A solução proposta resolve o problema? (Caso a solução proposta resolva a totalidade do problema, atribuir nota 4. Caso resolva uma parte do problema, atribuir notas entre 2 e 3, a critério do julgador. Caso não resolva nada, atribuir nota 1)

A solução proposta gera economia para a Administração Pública? (Caso seja aplicado, já que existirão soluções que não fazem sentido analisar a geração de economia (dinheiro) para a administração pública. Então, se for o caso, atribuir 1 ponto a mais na nota deste critério, totalizando nota 5 no máximo)', NULL, 'O potencial de resolução do problema pela solução proposta e, se for o caso, da provável economia para a administração pública', 1.00, 'Startup', 3.00, 'criteria-import-0001'),
  ('crit_import_0002', '1741713756342x475094650909622300', 'O modelo de negócio apresentado é viável? (Analisar a viabilidade do modelo de negócio apresentado. Esse modelo de negócio é solicitado no Pitch da ideia e também em documentos anexos. Caso não tenha sido apresentado nada, nota 1. Caso tenha sido apresentado, analisar a viabilidade e atribuir notas de 1 a 5 de acordo com o critério do julgador, sendo 5 para alta viabilidade)', NULL, 'A viabilidade e a maturidade do modelo de negócio da solução', 2.00, 'Startup', 2.00, 'criteria-import-0002'),
  ('crit_import_0003', '1741713756342x475094650909622300', 'Caso existam opções equivalentes, a proposta de solução apresenta uma melhor relação custo x benefício? (Existe uma pergunta no formulário de inscrição, a qual é solicitada a equipe para informar se existem opções equivalentes no mercado e qual o diferencial da sua ideia de solução. Além disso, é possível trazer para análise experiências e conhecimentos do julgador de outras soluções. Assim, se não existir nenhuma solução no mercado, e o que for apresentado tiver uma excelente relação custo x benefício, atribuir nota 5. Caso haja soluções de mercado melhores do que a apresentada, atribuir nota 1. Para todos os outros casos, atribuir notas de 1 a 5 a depender do critério do julgador, atribuindo nota 5 para a melhor relação custo x benefício - custo x benefício em relação ao mercado)', NULL, 'A demonstração comparativa de custo e benefício da proposta em relação às opções funcionalmente equivalentes', 3.00, 'Startup', 1.00, 'criteria-import-0003'),
  ('crit_import_0004', '1741713756342x475094650909622300', 'As tecnologias utilizadas para a solução do desafio são factíveis? - se as tecnologias são fáceis de manter, se é um padrão de mercado, se é uma tecnologia cara, etc.

(Observar as tecnologias explicadas no Pitch da solução e nos documentos anexos. Se for uma tecnologia muito difícil de adquirir, de manter, que não é factível, atribuir nota 1. Caso as tecnologias sejam fáceis de manter, factível, viável para aquisição, entre outras características, atribuir nota 5. Para os outros casos, analisar a proposta e atribuir notas de 1 a 5 a depender do critério do julgador.)', NULL, 'Tecnologias utilizadas para a solução do desafio', 4.00, 'Startup', 2.00, 'criteria-import-0004'),
  ('crit_import_0005', '1741713756342x475094650909622300', 'A proposta de solução apresentada é escalável? 

(Observar o Pitch da solução e os documentos anexos. Analisar o modelo de negócio, ideia e tecnologias utilizadas. Caso a solução não seja escalável, ou seja, caso não consiga ser reproduzida em grande quantidade e para um número grande de clientes, atribuir nota 1. Caso a solução seja totalmente escalável, atribuir nota 5. Para os outros casos, atribuir notas de 2 a 4, a depender do critério do julgador)', NULL, 'Escalabilidade, ou seja, refere-se à capacidade da solução ser reproduzida em grande quantidade e para um número grande de clientes', 5.00, 'Startup', 2.00, 'criteria-import-0005'),
  ('crit_import_0006', '1741713756342x475094650909622300', 'O formulário de inscrição da equipe foi bem fundamentado? 

(Analisar em todo o formulário de inscrição a qualidade da fundamentação e da subscrição da equipe participante. Caso várias informações estejam ausentes, se a qualidade das informações tiverem insuficientes, atribuir nota 1.  Caso tenha sido uma excelente fundamentação, com um pitch muito bem feito, contendo todas as  informações, atribuir nota 5. Para os outros casos, atribuir notas de 2 a 4, a depender do critério do julgador)', NULL, 'A qualidade da fundamentação, analisando o embasamento e a justificativa da solução proposta pelo aplicante', 6.00, 'Startup', 1.00, 'criteria-import-0006'),
  ('crit_import_0007', '1741713756342x475094650909622300', 'O prazo de entrega da proposta de solução é factível?

(Analisar o prazo de entrega previsto para proposta de solução. Lembrando que temos um prazo de até 3 meses para entrega do MVP  e de 1 ano, prorrogável por mais 1 ano, para a aceleração do produto. Então, se o prazo informado é compatível com a solução e com os prazos do ciclo, atribuir nota 5. Caso ele não consiga entregar no prazo ou não for compatível, atribuir nota 1)', NULL, 'Prazo dos entregáveis da solução', 7.00, 'Startup', 1.00, 'criteria-import-0007'),
  ('crit_import_0008', '1741715341881x519750575031320600', 'A solução proposta resolve o problema?

(Caso a solução proposta resolva a totalidade do problema, atribuir nota 4. Caso resolva uma parte do problema, atribuir notas entre 2 e 3, a critério do julgador. Caso não resolva nada, atribuir nota 1)

A solução proposta gera economia para a Administração Pública?

(Caso seja aplicado, já que existirão soluções que não fazem sentido analisar a geração de economia (dinheiro) para a administração pública. Então, se for o caso, atribuir 1 ponto a mais na nota deste critério, totalizando nota 5 no máximo)', NULL, 'O potencial de resolução do problema pela solução proposta e, se for o caso, da provável economia para a administração pública', 1.00, 'Startup', 3.00, 'criteria-import-0008'),
  ('crit_import_0009', '1741715341881x519750575031320600', 'O modelo de negócio apresentado é viável?

(Analisar a viabilidade do modelo de negócio apresentado. Esse modelo de negócio é solicitado no Pitch da ideia e também em documentos anexos. Caso não tenha sido apresentado nada, nota 1. Caso tenha sido apresentado, analisar a viabilidade e atribuir notas de 1 a 5 de acordo com o critério do julgador, sendo 5 para alta viabilidade)', NULL, 'A viabilidade e a maturidade do modelo de negócio da solução', 2.00, 'Startup', 2.00, 'criteria-import-0009'),
  ('crit_import_0010', '1741715341881x519750575031320600', 'Caso existam opções equivalentes, a proposta de solução apresenta uma melhor relação custo x benefício?

(Existe uma pergunta no formulário de inscrição, a qual é solicitada a equipe para informar se existem opções equivalentes no mercado e qual o diferencial da sua ideia de solução. Além disso, é possível trazer para análise experiências e conhecimentos do julgador de outras soluções. Assim, se não existir nenhuma solução no mercado, e o que for apresentado tiver uma excelente relação custo x benefício, atribuir nota 5. Caso haja soluções de mercado melhores do que a apresentada, atribuir nota 1. Para todos os outros casos, atribuir notas de 1 a 5 a depender do critério do julgador, atribuindo nota 5 para a melhor relação custo x benefício - custo x benefício em relação ao mercado )', NULL, 'A demonstração comparativa de custo e benefício da proposta em relação às opções funcionalmente equivalentes', 3.00, 'Startup', 1.00, 'criteria-import-0010'),
  ('crit_import_0011', '1741715341881x519750575031320600', 'As tecnologias utilizadas para a solução do desafio são factíveis? - se as tecnologias são fáceis de manter, se é um padrão de mercado, se é uma tecnologia cara, etc.

(Observar as tecnologias explicadas no Pitch da solução e nos documentos anexos. Se for uma tecnologia muito difícil de adquirir, de manter, que não é factível, atribuir nota 1. Caso as tecnologias sejam fáceis de manter, factível, viável para aquisição, entre outras características, atribuir nota 5. Para os outros casos, analisar a proposta e atribuir notas de 1 a 5 a depender do critério do julgador)', NULL, 'Tecnologias utilizadas para a solução do desafio', 4.00, 'Startup', 2.00, 'criteria-import-0011'),
  ('crit_import_0012', '1741715341881x519750575031320600', 'A proposta de solução apresentada é escalável? 

(Observar o Pitch da solução e os documentos anexos. Analisar o modelo de negócio, ideia e tecnologias utilizadas. Caso a solução não seja escalável, ou seja, caso não consiga ser reproduzida em grande quantidade e para um número grande de clientes, atribuir nota 1. Caso a solução seja totalmente escalável, atribuir nota 5. Para os outros casos, atribuir notas de 2 a 4, a depender do critério do julgador)', NULL, 'Escalabilidade, ou seja, refere-se à capacidade da solução ser reproduzida em grande quantidade e para um número grande de clientes', 5.00, 'Startup', 2.00, 'criteria-import-0012'),
  ('crit_import_0013', '1741715341881x519750575031320600', 'O formulário de inscrição da equipe foi bem fundamentado? 

(Analisar em todo o formulário de inscrição a qualidade da fundamentação e da subscrição da equipe participante. Caso várias informações estejam ausentes, se a qualidade das informações tiverem insuficientes, atribuir nota 1.  Caso tenha sido uma excelente fundamentação, com um pitch muito bem feito, contendo todas as  informações, atribuir nota 5. Para os outros casos, atribuir notas de 2 a 4, a depender do critério do julgador)', NULL, 'A qualidade da fundamentação, analisando o embasamento e a justificativa da solução proposta pelo aplicante', 6.00, 'Startup', 1.00, 'criteria-import-0013'),
  ('crit_import_0014', '1741715341881x519750575031320600', 'O prazo de entrega da proposta de solução é factível?

(Analisar o prazo de entrega previsto para proposta de solução. Lembrando que temos um prazo de até 3 meses para entrega do MVP  e de 1 ano, prorrogável por mais 1 ano, para a aceleração do produto. Então, se o prazo informado é compatível com a solução e com os prazos do ciclo, atribuir nota 5. Caso ele não consiga entregar no prazo ou não for compatível, atribuir nota 1)', NULL, 'Prazo dos entregáveis da solução', 7.00, 'Startup', 1.00, 'criteria-import-0014'),
  ('crit_import_0015', '1741717308549x865975349857747000', 'A solução proposta resolve o problema? 

(Caso a solução proposta resolva a totalidade do problema, atribuir nota 4. Caso resolva uma parte do problema, atribuir notas entre 2 e 3, a critério do julgador. Caso não resolva nada, atribuir nota 1)

A solução proposta gera economia para a Administração Pública?

(Caso seja aplicado, já que existirão soluções que não fazem sentido analisar a geração de economia (dinheiro) para a administração pública. Então, se for o caso, atribuir 1 ponto a mais na nota deste critério, totalizando nota 5 no máximo)', NULL, 'O potencial de resolução do problema pela solução proposta e, se for o caso, da provável economia para a administração pública', 1.00, 'Startup', 3.00, 'criteria-import-0015'),
  ('crit_import_0016', '1741717308549x865975349857747000', 'O modelo de negócio apresentado é viável?

(Analisar a viabilidade do modelo de negócio apresentado. Esse modelo de negócio é solicitado no Pitch da ideia e também em documentos anexos. Caso não tenha sido apresentado nada, nota 1. Caso tenha sido apresentado, analisar a viabilidade e atribuir notas de 1 a 5 de acordo com o critério do julgador, sendo 5 para alta viabilidade)', NULL, 'A viabilidade e a maturidade do modelo de negócio da solução', 2.00, 'Startup', 2.00, 'criteria-import-0016'),
  ('crit_import_0017', '1741717308549x865975349857747000', 'Caso existam opções equivalentes, a proposta de solução apresenta uma melhor relação custo x benefício?

(Existe uma pergunta no formulário de inscrição, a qual é solicitada a equipe para informar se existem opções equivalentes no mercado e qual o diferencial da sua ideia de solução. Além disso, é possível trazer para análise experiências e conhecimentos do julgador de outras soluções. Assim, se não existir nenhuma solução no mercado, e o que for apresentado tiver uma excelente relação custo x benefício, atribuir nota 5. Caso haja soluções de mercado melhores do que a apresentada, atribuir nota 1. Para todos os outros casos, atribuir notas de 1 a 5 a depender do critério do julgador, atribuindo nota 5 para a melhor relação custo x benefício - custo x benefício em relação ao mercado)', NULL, 'A demonstração comparativa de custo e benefício da proposta em relação às opções funcionalmente equivalentes', 3.00, 'Startup', 1.00, 'criteria-import-0017'),
  ('crit_import_0018', '1741717308549x865975349857747000', 'As tecnologias utilizadas para a solução do desafio são factíveis? - se as tecnologias são fáceis de manter, se é um padrão de mercado, se é uma tecnologia cara, etc.

(Observar as tecnologias explicadas no Pitch da solução e nos documentos anexos. Se for uma tecnologia muito difícil de adquirir, de manter, que não é factível, atribuir nota 1. Caso as tecnologias sejam fáceis de manter, factível, viável para aquisição, entre outras características, atribuir nota 5. Para os outros casos, analisar a proposta e atribuir notas de 1 a 5 a depender do critério do julgador)', NULL, 'Tecnologias utilizadas para a solução do desafio', 4.00, 'Startup', 2.00, 'criteria-import-0018'),
  ('crit_import_0019', '1741717308549x865975349857747000', 'A proposta de solução apresentada é escalável? 

(Observar o Pitch da solução e os documentos anexos. Analisar o modelo de negócio, ideia e tecnologias utilizadas. Caso a solução não seja escalável, ou seja, caso não consiga ser reproduzida em grande quantidade e para um número grande de clientes, atribuir nota 1. Caso a solução seja totalmente escalável, atribuir nota 5. Para os outros casos, atribuir notas de 2 a 4, a depender do critério do julgador)', NULL, 'Escalabilidade, ou seja, refere-se à capacidade da solução ser reproduzida em grande quantidade e para um número grande de clientes', 5.00, 'Startup', 2.00, 'criteria-import-0019'),
  ('crit_import_0020', '1741717308549x865975349857747000', 'O formulário de inscrição da equipe foi bem fundamentado? 

(Analisar em todo o formulário de inscrição a qualidade da fundamentação e da subscrição da equipe participante. Caso várias informações estejam ausentes, se a qualidade das informações tiverem insuficientes, atribuir nota 1.  Caso tenha sido uma excelente fundamentação, com um pitch muito bem feito, contendo todas as  informações, atribuir nota 5. Para os outros casos, atribuir notas de 2 a 4, a depender do critério do julgador)', NULL, 'A qualidade da fundamentação, analisando o embasamento e a justificativa da solução proposta pelo aplicante', 6.00, 'Startup', 1.00, 'criteria-import-0020'),
  ('crit_import_0021', '1741717308549x865975349857747000', 'O prazo de entrega da proposta de solução é factível?

(Analisar o prazo de entrega previsto para proposta de solução. Lembrando que temos um prazo de até 3 meses para entrega do MVP  e de 1 ano, prorrogável por mais 1 ano, para a aceleração do produto. Então, se o prazo informado é compatível com a solução e com os prazos do ciclo, atribuir nota 5. Caso ele não consiga entregar no prazo ou não for compatível, atribuir nota 1)', NULL, 'Prazo dos entregáveis da solução', 7.00, 'Startup', 1.00, 'criteria-import-0021'),
  ('crit_import_0022', '1741717852329x959885049985499100', 'A solução proposta resolve o problema?

(Caso a solução proposta resolva a totalidade do problema, atribuir nota 4. Caso resolva uma parte do problema, atribuir notas entre 2 e 3, a critério do julgador. Caso não resolva nada, atribuir nota 1)

A solução proposta gera economia para a Administração Pública?

(Caso seja aplicado, já que existirão soluções que não fazem sentido analisar a geração de economia (dinheiro) para a administração pública. Então, se for o caso, atribuir 1 ponto a mais na nota deste critério, totalizando nota 5 no máximo)', NULL, 'O potencial de resolução do problema pela solução proposta e, se for o caso, da provável economia para a administração pública', 1.00, 'Startup', 3.00, 'criteria-import-0022'),
  ('crit_import_0023', '1741717852329x959885049985499100', 'O modelo de negócio apresentado é viável?

(Analisar a viabilidade do modelo de negócio apresentado. Esse modelo de negócio é solicitado no Pitch da ideia e também em documentos anexos. Caso não tenha sido apresentado nada, nota 1. Caso tenha sido apresentado, analisar a viabilidade e atribuir notas de 1 a 5 de acordo com o critério do julgador, sendo 5 para alta viabilidade)', NULL, 'A viabilidade e a maturidade do modelo de negócio da solução', 2.00, 'Startup', 2.00, 'criteria-import-0023'),
  ('crit_import_0024', '1741717852329x959885049985499100', 'Caso existam opções equivalentes, a proposta de solução apresenta uma melhor relação custo x benefício?

(Existe uma pergunta no formulário de inscrição, a qual é solicitada a equipe para informar se existem opções equivalentes no mercado e qual o diferencial da sua ideia de solução. Além disso, é possível trazer para análise experiências e conhecimentos do julgador de outras soluções. Assim, se não existir nenhuma solução no mercado, e o que for apresentado tiver uma excelente relação custo x benefício, atribuir nota 5. Caso haja soluções de mercado melhores do que a apresentada, atribuir nota 1. Para todos os outros casos, atribuir notas de 1 a 5 a depender do critério do julgador, atribuindo nota 5 para a melhor relação custo x benefício - custo x benefício em relação ao mercado)', NULL, 'A demonstração comparativa de custo e benefício da proposta em relação às opções funcionalmente equivalentes', 3.00, 'Startup', 1.00, 'criteria-import-0024'),
  ('crit_import_0025', '1741717852329x959885049985499100', 'As tecnologias utilizadas para a solução do desafio são factíveis? - se as tecnologias são fáceis de manter, se é um padrão de mercado, se é uma tecnologia cara, etc

Observar as tecnologias explicadas no Pitch da solução e nos documentos anexos. Se for uma tecnologia muito difícil de adquirir, de manter, que não é factível, atribuir nota 1. Caso as tecnologias sejam fáceis de manter, factível, viável para aquisição, entre outras características, atribuir nota 5. Para os outros casos, analisar a proposta e atribuir notas de 1 a 5 a depender do critério do julgador.', NULL, 'Tecnologias utilizadas para a solução do desafio', 4.00, 'Startup', 2.00, 'criteria-import-0025'),
  ('crit_import_0026', '1741717852329x959885049985499100', 'A proposta de solução apresentada é escalável? 

(Observar o Pitch da solução e os documentos anexos. Analisar o modelo de negócio, ideia e tecnologias utilizadas. Caso a solução não seja escalável, ou seja, caso não consiga ser reproduzida em grande quantidade e para um número grande de clientes, atribuir nota 1. Caso a solução seja totalmente escalável, atribuir nota 5. Para os outros casos, atribuir notas de 2 a 4, a depender do critério do julgador)', NULL, 'Escalabilidade, ou seja, refere-se à capacidade da solução ser reproduzida em grande quantidade e para um número grande de clientes', 5.00, 'Startup', 2.00, 'criteria-import-0026'),
  ('crit_import_0027', '1741717852329x959885049985499100', 'O formulário de inscrição da equipe foi bem fundamentado? 

(Analisar em todo o formulário de inscrição a qualidade da fundamentação e da subscrição da equipe participante. Caso várias informações estejam ausentes, se a qualidade das informações tiverem insuficientes, atribuir nota 1.  Caso tenha sido uma excelente fundamentação, com um pitch muito bem feito, contendo todas as  informações, atribuir nota 5. Para os outros casos, atribuir notas de 2 a 4, a depender do critério do julgador)', NULL, 'A qualidade da fundamentação, analisando o embasamento e a justificativa da solução proposta pelo aplicante', 6.00, 'Startup', 1.00, 'criteria-import-0027'),
  ('crit_import_0028', '1741717852329x959885049985499100', 'O prazo de entrega da proposta de solução é factível?

(Analisar o prazo de entrega previsto para proposta de solução. Lembrando que temos um prazo de até 3 meses para entrega do MVP  e de 1 ano, prorrogável por mais 1 ano, para a aceleração do produto. Então, se o prazo informado é compatível com a solução e com os prazos do ciclo, atribuir nota 5. Caso ele não consiga entregar no prazo ou não for compatível, atribuir nota 1)', NULL, 'Prazo dos entregáveis da solução', 7.00, 'Startup', 1.00, 'criteria-import-0028'),
  ('crit_import_0029', '1741713756342x475094650909622300', 'Critérios de Sucesso :

1 -Integrar dados das pessoas com HAS (Hipertensão) e/ou DM (Diabetes) cadastradas na ESF (Estratégia de Saúde da Família - Atenção Básica) baseado no modelo MACC (Modelo de Atenção às Condições Crônicas)
2- Utilizar os protocolos clínicos da Secretaria de Saúde do Recife
3- Incentivar e garantir a integração com as teleconsultorias, já existentes na Prefeitura do Recife, nas especialidades relacionadas ao cuidado de HAS e DM  pelos profissionais da atenção primária
4- Garantir a integração da solução com o PEC eSUS
5- Permitir o monitoramento regular e o autocuidado, com indicadores de uso e engajamento
6- Garantir acessibilidade nas funcionalidades da solução
7- Permitir o monitoramento dos indicadores clínicos de acompanhamento de Hipertensão e Diabetes
8- Garantir a avaliação permanente de satisfação dos usuários da solução e profissionais de saúde que utilizarão a plataforma', NULL, 'O protótipo apresentado endereça os critérios de sucesso estabelecidos para o desafio proposto?', 1.00, 'segundaFase', 5.00, 'criteria-import-0029'),
  ('crit_import_0030', '1741713756342x475094650909622300', 'O grau de desenvolvimento da solução proposta', NULL, 'O quão completo e bem fundamentado está o projeto apresentado para a solução proposta?', 2.00, 'segundaFase', 2.00, 'criteria-import-0030'),
  ('crit_import_0031', '1741713756342x475094650909622300', 'A viabilidade econômica da proposta, considerados os recursos financeiros disponíveis para a celebração dos contratos', NULL, 'Com os recursos disponívels (R$ 50 mil reais para o MVP e R$ 1.55 milhão para a aceleração), a proposta apresentada é viável? O preço é compatível com o projeto apresentado?', 3.00, 'segundaFase', 2.00, 'criteria-import-0031'),
  ('crit_import_0032', '1741713756342x475094650909622300', 'O nível de dedicação da equipe, ou seja, refere-se à disponibilidade de tempo dedicado da equipe, se esta é considerada full-time ou part-time', NULL, 'O tempo disponível e o perfil da equipe alocada são compatíveis com as atividades propostas no projeto?', 4.00, 'segundaFase', 1.00, 'criteria-import-0032'),
  ('crit_import_0033', '1741713756342x475094650909622300', 'A viabilidade e a maturidade do modelo de negócio da solução', NULL, 'O modelo de negócio apresentado é viável?', 5.00, 'segundaFase', 3.00, 'criteria-import-0033'),
  ('crit_import_0034', '1741713756342x475094650909622300', 'Escalabilidade, ou seja, refere-se à capacidade da solução ser reproduzida em grande quantidade e para um número grande de clientes', NULL, 'A proposta de solução apresentada é escalável?', 6.00, 'segundaFase', 2.00, 'criteria-import-0034'),
  ('crit_import_0035', '1741713756342x475094650909622300', '1) Se o prazo está dentro do limite legal (prazo legal total 24 meses, contando MVP, experimentação e aceleração)? Se for não, nota 1. Se for sim, passa a próxima pergunta. 

2) Se o prazo é compatível com o escopo do projeto e os prazos estabelecidos na minuta do resumo executivo (lembrando que temos um prazo de até 3 meses para desenvolvimento do MVP, 2 meses para experimentação do MVP, e até 12 meses para a aceleração do produto) sim ou não? Se for não, nota 3. Se for sim, nota 5.', NULL, 'Prazo', 7.00, 'segundaFase', 1.00, 'criteria-import-0035'),
  ('crit_import_0036', '1741715341881x519750575031320600', 'Critério(s) de Sucesso (CS) do Protótipo (Critérios de Aceite definidos na oficina de Design de Problemas realizada com a participação dos especialistas e equipes finalistas):  

1- Garantir a medição de indicadores de descartes irregulares
2- Monitorar em tempo real os descartes irregulares em pontos estratégicos indicados pela Prefeitura
3- Possibilitar a identificação de possíveis infratores no descarte irregular de resíduos sólidos
4- Registrar as evidências dos descartes irregulares dos resíduos sólidos
5- Implementar mecanismos de acessibilidade na solução a ser desenvolvida nas funcionalidades que tenham interação com o cidadão
6- Garantir integração com os sistemas da Prefeitura do Recife
7- Identificar de forma georreferenciada o surgimento de pontos de descartes irregulares
8- Classificar o tipo e volumetria dos resíduos sólidos em pontos irregulares', NULL, 'O protótipo apresentado endereça os critérios de sucesso estabelecidos para o desafio proposto?', 1.00, 'segundaFase', 5.00, 'criteria-import-0036'),
  ('crit_import_0037', '1741715341881x519750575031320600', 'O grau de desenvolvimento da solução proposta', NULL, 'O quão completo e bem fundamentado está o projeto apresentado para a solução proposta?', 2.00, 'segundaFase', 2.00, 'criteria-import-0037'),
  ('crit_import_0038', '1741715341881x519750575031320600', 'A viabilidade econômica da proposta, considerados os recursos financeiros disponíveis para a celebração dos contratos', NULL, 'Com os recursos disponívels (R$ 50 mil reais para o MVP e R$ 1.55 milhão para a aceleração), a proposta apresentada é viável? O preço é compatível com o projeto apresentado?', 3.00, 'segundaFase', 2.00, 'criteria-import-0038'),
  ('crit_import_0039', '1741715341881x519750575031320600', 'O nível de dedicação da equipe, ou seja, refere-se à disponibilidade de tempo dedicado da equipe, se esta é considerada full-time ou part-time', NULL, 'O tempo disponível e o perfil da equipe alocada são compatíveis com as atividades propostas no projeto?', 4.00, 'segundaFase', 1.00, 'criteria-import-0039'),
  ('crit_import_0040', '1741715341881x519750575031320600', 'A viabilidade e a maturidade do modelo de negócio da solução', NULL, 'O modelo de negócio apresentado é viável?', 5.00, 'segundaFase', 3.00, 'criteria-import-0040'),
  ('crit_import_0041', '1741715341881x519750575031320600', 'Escalabilidade, ou seja, refere-se à capacidade da solução ser reproduzida em grande quantidade e para um número grande de clientes', NULL, 'A proposta de solução apresentada é escalável?', 6.00, 'segundaFase', 2.00, 'criteria-import-0041'),
  ('crit_import_0042', '1741715341881x519750575031320600', '1) Se o prazo está dentro do limite legal (prazo legal total 24 meses, contando MVP, experimentação e aceleração)? Se for não, nota 1. Se for sim, passa a próxima pergunta. 

2) Se o prazo é compatível com o escopo do projeto e os prazos estabelecidos na minuta do resumo executivo (lembrando que temos um prazo de até 3 meses para desenvolvimento do MVP, 2 meses para experimentação do MVP, e até 12 meses para a aceleração do produto) sim ou não? Se for não, nota 3. Se for sim, nota 5.', NULL, 'Prazo', 7.00, 'segundaFase', 1.00, 'criteria-import-0042'),
  ('crit_import_0043', '1741717308549x865975349857747000', 'Critério(s) de Sucesso (CS) do Protótipo (Critérios de Aceite definidos na oficina de Design de Problemas realizada com a participação dos especialistas e equipes finalistas):  

1- Permitir a medição de índices de desperdício de alimentos
2- Implementar mecanismos de integração dos dados do município sobre fome, insegurança alimentar e nutricional
3- Mapear equipamentos agroecológicos (SAFUC), cozinhas solidárias e restaurantes populares por RPA
4- Permitir o mapeamento e coleta de alimentos descartados em lugares indicados pela Prefeitura do Recife (Ex. foco em grandes geradores)
5- Viabilizar a destinação adequada de alimentos e dos resíduos sólidos
6- Permitir a medição da relação do volume de produtos destinados com a relação da emissão de GGE
7- Permitir a participação dos diferentes atores da cadeia
8- Permitir a integração com os sistema da Prefeitura do Recife', NULL, 'O protótipo apresentado endereça os critérios de sucesso estabelecidos para o desafio proposto?', 1.00, 'segundaFase', 5.00, 'criteria-import-0043'),
  ('crit_import_0044', '1741717308549x865975349857747000', 'O grau de desenvolvimento da solução proposta', NULL, 'O quão completo e bem fundamentado está o projeto apresentado para a solução proposta?', 2.00, 'segundaFase', 2.00, 'criteria-import-0044'),
  ('crit_import_0045', '1741717308549x865975349857747000', 'A viabilidade econômica da proposta, considerados os recursos financeiros disponíveis para a celebração dos contratos', NULL, 'Com os recursos disponívels (R$ 50 mil reais para o MVP e R$ 1.55 milhão para a aceleração), a proposta apresentada é viável? O preço é compatível com o projeto apresentado?', 3.00, 'segundaFase', 2.00, 'criteria-import-0045'),
  ('crit_import_0046', '1741717308549x865975349857747000', 'O nível de dedicação da equipe, ou seja, refere-se à disponibilidade de tempo dedicado da equipe, se esta é considerada full-time ou part-time', NULL, 'O tempo disponível e o perfil da equipe alocada são compatíveis com as atividades propostas no projeto?', 4.00, 'segundaFase', 1.00, 'criteria-import-0046'),
  ('crit_import_0047', '1741717308549x865975349857747000', 'A viabilidade e a maturidade do modelo de negócio da solução', NULL, 'O modelo de negócio apresentado é viável?', 5.00, 'segundaFase', 3.00, 'criteria-import-0047'),
  ('crit_import_0048', '1741717308549x865975349857747000', 'Escalabilidade, ou seja, refere-se à capacidade da solução ser reproduzida em grande quantidade e para um número grande de clientes', NULL, 'A proposta de solução apresentada é escalável?', 6.00, 'segundaFase', 2.00, 'criteria-import-0048'),
  ('crit_import_0049', '1741717308549x865975349857747000', '1) Se o prazo está dentro do limite legal (prazo legal total 24 meses, contando MVP, experimentação e aceleração)? Se for não, nota 1. Se for sim, passa a próxima pergunta. 

2) Se o prazo é compatível com o escopo do projeto e os prazos estabelecidos na minuta do resumo executivo (lembrando que temos um prazo de até 3 meses para desenvolvimento do MVP, 2 meses para experimentação do MVP, e até 12 meses para a aceleração do produto) sim ou não? Se for não, nota 3. Se for sim, nota 5.', NULL, 'Prazo', 7.00, 'segundaFase', 1.00, 'criteria-import-0049'),
  ('crit_import_0050', '1741717852329x959885049985499100', 'Critério(s) de Sucesso (CS) do Protótipo (Critérios de Aceite definidos na oficina de Design de Problemas realizada com a participação dos especialistas e equipes finalistas):  

1- Permitir a integração com outros dispositivos habilitados para dar uma maior autonomia para pessoas cegas ou com baixa visão, respeitando o espectro da deficiência
2- Possibilitar a acessibilidade e a navegação em outras plataformas digitais
3- Implementar mecanismos e/ou ferramentas que facilitem o deslocamento (Ex. ambientes urbanos, como ruas, centros comerciais, transportes públicos, prédios públicos, de forma segura)
4- Permitir maior autonomia para acesso a transporte público e serviços essenciais
5- Garantir a integração da solução nos diferentes contextos urbanos do Recife (Ex. Design Universal das cidades)
6- Garantir que a solução desenvolvida seja de tecnologias acessíveis, de baixo custo e que permite escalabilidade
7- Garantir que a solução desenvolvida seja segura para os deficientes visuais', NULL, 'O protótipo apresentado endereça os critérios de sucesso estabelecidos para o desafio proposto?', 1.00, 'segundaFase', 5.00, 'criteria-import-0050'),
  ('crit_import_0051', '1741717852329x959885049985499100', 'O grau de desenvolvimento da solução proposta', NULL, 'O quão completo e bem fundamentado está o projeto apresentado para a solução proposta?', 2.00, 'segundaFase', 2.00, 'criteria-import-0051'),
  ('crit_import_0052', '1741717852329x959885049985499100', 'A viabilidade econômica da proposta, considerados os recursos financeiros disponíveis para a celebração dos contratos', NULL, 'Com os recursos disponívels (R$ 50 mil reais para o MVP e R$ 1.55 milhão para a aceleração), a proposta apresentada é viável? O preço é compatível com o projeto apresentado?', 3.00, 'segundaFase', 2.00, 'criteria-import-0052'),
  ('crit_import_0053', '1741717852329x959885049985499100', 'O nível de dedicação da equipe, ou seja, refere-se à disponibilidade de tempo dedicado da equipe, se esta é considerada full-time ou part-time', NULL, 'O tempo disponível e o perfil da equipe alocada são compatíveis com as atividades propostas no projeto?', 4.00, 'segundaFase', 1.00, 'criteria-import-0053'),
  ('crit_import_0054', '1741717852329x959885049985499100', 'A viabilidade e a maturidade do modelo de negócio da solução', NULL, 'O modelo de negócio apresentado é viável?', 5.00, 'segundaFase', 3.00, 'criteria-import-0054'),
  ('crit_import_0055', '1741717852329x959885049985499100', 'Escalabilidade, ou seja, refere-se à capacidade da solução ser reproduzida em grande quantidade e para um número grande de clientes', NULL, 'A proposta de solução apresentada é escalável?', 6.00, 'segundaFase', 2.00, 'criteria-import-0055'),
  ('crit_import_0056', '1741717852329x959885049985499100', '1) Se o prazo está dentro do limite legal (prazo legal total 24 meses, contando MVP, experimentação e aceleração)? Se for não, nota 1. Se for sim, passa a próxima pergunta. 

2) Se o prazo é compatível com o escopo do projeto e os prazos estabelecidos na minuta do resumo executivo (lembrando que temos um prazo de até 3 meses para desenvolvimento do MVP, 2 meses para experimentação do MVP, e até 12 meses para a aceleração do produto) sim ou não? Se for não, nota 3. Se for sim, nota 5.', NULL, 'Prazo', 7.00, 'segundaFase', 1.00, 'criteria-import-0056'),
  ('crit_import_0057', NULL, 'A iniciativa se enquadra no público-alvo definido no Item 3 do edital (empresas, startups, ICTs, instituições de ensino ou organizações sociais)?', NULL, 'Alinhamento ao Público-Alvo do Prêmio.', 1.00, 'PremioPrimeiraFase', 2.00, 'criteria-import-0057'),
  ('crit_import_0058', NULL, 'A iniciativa se enquadra no público-alvo definido no Item 3 do edital (empresas, startups, ICTs, instituições de ensino ou organizações sociais)?', NULL, 'Alinhamento ao Público-Alvo do Prêmio.', 1.00, 'Startup', 2.00, 'criteria-import-0058'),
  ('crit_import_0059', NULL, 'A iniciativa cumpre integralmente os requisitos obrigatórios descritos no Item 4 do edital?', NULL, 'Atendimento aos Requisitos de Admissibilidade.', 2.00, 'Startup', 2.00, 'criteria-import-0059'),
  ('crit_import_0060', NULL, 'A iniciativa cumpre integralmente os requisitos obrigatórios descritos no Item 4 do edital?', NULL, 'Atendimento aos Requisitos de Admissibilidade.', 2.00, 'PremioPrimeiraFase', 2.00, 'criteria-import-0060'),
  ('crit_import_0061', NULL, 'A iniciativa foi submetida à categoria correta, conforme descrições das categorias e eixos apresentados no Item 7 do edital?', NULL, 'Adequação à Categoria Inscrita.', 3.00, 'PremioPrimeiraFase', 2.00, 'criteria-import-0061'),
  ('crit_import_0062', NULL, 'A iniciativa foi submetida à categoria correta, conforme descrições das categorias e eixos apresentados no Item 7 do edital?', NULL, 'Adequação à Categoria Inscrita.', 3.00, 'Startup', 2.00, 'criteria-import-0062'),
  ('crit_import_0063', NULL, NULL, NULL, 'Conclusão da Análise de Elegibilidade.', 4.00, 'PremioPrimeiraFase', 2.00, 'criteria-import-0063'),
  ('crit_import_0064', NULL, NULL, NULL, 'Conclusão da Análise de Elegibilidade.', 4.00, 'Startup', 2.00, 'criteria-import-0064'),
  ('crit_import_0065', NULL, 'Avalia a originalidade da iniciativa e sua capacidade de propor soluções inéditas ou melhorias significativas em relação ao que já existe. Considera o grau de ruptura ou diferenciação frente ao estado da arte em seu setor, bem como a relevância da proposta para introduzir novas formas de pensamento, ação e interação.', NULL, 'Grau de Disrupção', 1.00, 'Startup', 2.50, 'criteria-import-0065'),
  ('crit_import_0066', NULL, 'Avalia a originalidade da iniciativa e sua capacidade de propor soluções inéditas ou melhorias significativas em relação ao que já existe. Considera o grau de ruptura ou diferenciação frente ao estado da arte em seu setor, bem como a relevância da proposta para introduzir novas formas de pensamento, ação e interação.', NULL, 'Grau de Disrupção', 1.00, 'PremioSegundaFase', 2.50, 'criteria-import-0066'),
  ('crit_import_0067', NULL, 'Considera as evidências qualitativas e quantitativas dos efeitos alcançados pela iniciativa. São analisados os resultados concretos em termos de objetivos atingidos, indicadores de desempenho,  ganhos para o público-alvo ou setor de atuação, e a consistência das evidências apresentadas.', NULL, 'Resultados', 2.00, 'PremioSegundaFase', 2.50, 'criteria-import-0067'),
  ('crit_import_0068', NULL, 'Considera as evidências qualitativas e quantitativas dos efeitos alcançados pela iniciativa. São analisados os resultados concretos em termos de objetivos atingidos, indicadores de desempenho,  ganhos para o público-alvo ou setor de atuação, e a consistência das evidências apresentadas.', NULL, 'Resultados', 2.00, 'Startup', 2.50, 'criteria-import-0068'),
  ('crit_import_0069', NULL, 'Analisa a capacidade da iniciativa de ser expandida, adaptada ou reproduzida em diferentes contextos, públicos ou territórios. Considera a robustez da solução para alcançar maior abrangência, sua flexibilidade para ser replicada em outros cenários e o potencial de gerar impacto continuado em médio e longo prazo.', NULL, 'Replicabilidade e Potencial de Escala', 3.00, 'PremioSegundaFase', 2.50, 'criteria-import-0069'),
  ('crit_import_0070', NULL, 'Analisa a capacidade da iniciativa de ser expandida, adaptada ou reproduzida em diferentes contextos, públicos ou territórios. Considera a robustez da solução para alcançar maior abrangência, sua flexibilidade para ser replicada em outros cenários e o potencial de gerar impacto continuado em médio e longo prazo.', NULL, 'Replicabilidade e Potencial de Escala', 3.00, 'Startup', 2.50, 'criteria-import-0070'),
  ('crit_import_0071', NULL, 'Examina o grau em que a iniciativa coloca as pessoas no centro do processo, promove benefícios sociais mais amplos e contribui para o fortalecimento do ecossistema de inovação. Considera também a aderência aos desafios contemporâneos de relevância mundial, refletindo o potencial de gerar transformações positivas não apenas localmente, mas em um cenário global.', NULL, 'Foco nas Pessoas, Território e Ecossistema', 4.00, 'Startup', 2.50, 'criteria-import-0071'),
  ('crit_import_0072', NULL, 'Examina o grau em que a iniciativa coloca as pessoas no centro do processo, promove benefícios sociais mais amplos e contribui para o fortalecimento do ecossistema de inovação. Considera também a aderência aos desafios contemporâneos de relevância mundial, refletindo o potencial de gerar transformações positivas não apenas localmente, mas em um cenário global.', NULL, 'Foco nas Pessoas, Território e Ecossistema', 4.00, 'PremioSegundaFase', 2.50, 'criteria-import-0072')
ON CONFLICT ("id") DO UPDATE SET
  "desafio" = EXCLUDED."desafio",
  "Description" = EXCLUDED."Description",
  "eita" = EXCLUDED."eita",
  "name" = EXCLUDED."name",
  "order" = EXCLUDED."order",
  "type" = EXCLUDED."type",
  "weight" = EXCLUDED."weight",
  "modified_date" = CURRENT_TIMESTAMP;
```

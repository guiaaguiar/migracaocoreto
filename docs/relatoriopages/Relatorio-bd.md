# Relatório de Arquitetura do Backend Coreto

## 1. Visão Geral da Arquitetura

O backend da plataforma **Coreto** foi estruturado no Bubble.io utilizando uma modelagem relacional de alta complexidade, contando com **75 Data Types** customizados. A aplicação atua como um ecossistema integrado para gestão de inovação aberta, chamadas públicas, hackathons, ecossistema de startups/ICTs e processos de avaliação/mentoria.

## 2. Domínios Funcionais do Sistema

Os Data Types mapeados dividem-se em **8 grandes módulos funcionais**:

```
                         ┌─────────────────────────────────────────┐
                         │              CORETO BACKEND             │
                         └────────────────────┬────────────────────┘
                                              │
    ┌────────────────┬────────────────┬───────┴────────┬────────────────┬────────────────┐
    │                │                │                │                │                │
┌───┴────┐      ┌────┴───┐       ┌────┴───┐       ┌────┴───┐       ┌────┴───┐       ┌────┴───┐
│Gestão  │      │Gestão  │       │Programas│      │Inscri- │       │Avalia- │       │Gamifi- │
│ de     │      │ de     │       │   e     │      │ ções e │       │ ção e  │       │ cação  │
│Usuários│      │Entidades│      │Desafios│      │Propostas│      │Mentoria│       │e Quizzes│
└────────┘      └────────┘       └────────┘       └────────┘       └────────┘       └────────┘
```

### A. Usuários, Acessos e Perfis Base

- **`User`**: Entidade central de autenticação, armazenando metadados de acesso (`isAdmin`, `activeProfile`, `tmppass`) e dados básicos (`email`, `CPF`, `name`).
- **`Talento`**: Perfil estendido para profissionais/participantes (`curriculo`, `escolaridade`, `etnia`, `genero`, vínculo com `Empresa`, `isNotificacaoWhats`).
- **`cotitulares`**: Registro complementar de cotitularidade para cadastros jurídicos/projetos (`CPF`, `RG`, `estado_civil`, endereço).

### B. Mapeamento do Ecossistema (Atores)

- **`Iniciativa`**: Cadastro abrangente de startups/projetos inovadores com tipagem de maturidade (`estagio_inovacao`, `trl_grupo`, `tipo_iniciativa`, `cnpj`, redes sociais, contatos).
- **`Organizacao`**: Empresas, instituições e parceiros mantenedores (`tipo_organizacao`, `empresa_id`, `responsaveis`).
- **`Entidades`**: Mapeamento geográfico e relacional do ecossistema de inovação (`Conexões`, `Localização`, coordenadas `x`, `y`).
- **`Time`**: Composição de equipes vinculadas a propostas e iniciativas.

### C. Chamadas Públicas, Editais e Oportunidades

- **`Oportunidade` & `Oportunidade_crawler`**: Tabela mestra de desafios/chamadas abertas (`Data_limite_para_inscricao`, `estagio_elegivel`, `trl_elegivel`, `apoio_oferecido`, `premios`, `jurados`). A versão *crawler* suporta ingestão automatizada com controle de histórico/deletados.
- **`Edital`**: Documentos regulatórios e regras anexas (`validade`, `banner`, `anexos`).
- **`Programa`**: Agrupador macro de iniciativas de inovação.

### D. Submissões e Programas Específicos

O sistema contempla submissões customizadas para diferentes modalidades e editais da prefeitura/ecossistema:

- **`Submissao_ConectaLabs`**: Submissão de soluções tecnológicas com validação de tração, ODS e situação fiscal.
- **`Submissao_ICT`** & **`Inscricao_Nitro_ICT`**: Submissão de tecnologias originadas de Instituições de Ciência e Tecnologia (NITs, patentes, TRLs).
- **`Submissao_INPI`**: Registro de propriedade intelectual e softwares (`sw_hash_sha256`, `linguagem_programacao`, cotitularidades).
- **`proposta_eita`**, **`proposta_eita_segunda`**, **`proposta_nit`**, **`Proposta_Comercializacao`**, **`Proposta_startup`**, **`proposta_worldcup`**: Módulos específicos de submissão por fase e programa.

### E. Avaliação, Notas e Mentorias

- **`Criteria` / `eita_criterios`**: Critérios e pesos definidos para bancas examinadoras.
- **`Assessment`**, **`AssessmentPremioFaseUm`**, **`AssessmentPremioFaseDois`**, **`AssessmentSecondPhase`**: Lançamento de notas por avaliadores/mentores.
- **`Rates` & `Values`**: Armazenamento atomizado de pontuações por critério/item.
- **`RelatorioEITAAvaliacao`**, **`RelatorioProposta_eita`**: Tabelas consolidadas para geração de rankings e relatórios operacionais.
- **`Mentor`** & **`Mentoria`**: Agendamento, controle de duração, status e perguntas relativas a sessões de mentoria.

### F. Gestão Operacional e Kanban

- **`kanban`**, **`StatusLane`**, **`Task`**: Sistema interno de gerenciamento de tarefas/pipelines para startups e desafios em acompanhamento.

### G. Eventos, Engajamento e Comunicação

- **`HackerCidadão`** & **`InscricaoHacker`**: Módulo dedicado a hackathons (`Inscritos`, `Premios`, `locais`).
- **`quizz_recnplay_2025`**, **`quizzLugarInovacao`**, **`Voto_Popular`**, **`voto`**: Ferramentas de gamificação, diagnósticos rápidos e votação aberta.
- **`Notificacoes`**, **`Log_Notificacoes`**, **`DisparoWhatsapp`**, **`EmailEita`**, **`Newsletter`**: Régua de comunicação multi-canal (E-mail e WhatsApp).

### H. Módulos Auxiliares e Métricas

- **`Academy`** & **`Trilha`**: Trilhas de capacitação e conteúdos educativos.
- **`Click_Log`**: Logs de telemetria e interação do usuário na interface.
- **`Categoria`**, **`Perguntas`**, **`Respostas`**: Tabelas de suporte e taxonomia.

## 3. Padrões de Mapeamento Técnico para SQL

Para garantir uma migração consistente do Bubble para um banco relacional SQL (PostgreSQL / MySQL), foram aplicadas as seguintes diretrizes de modelagem:

| **Conceito no Bubble** | **Mapeamento SQL Equivalente** | **Motivação Técnica** |
| --- | --- | --- |
| **`text` / `file` / `image`** | `VARCHAR(255)` / `TEXT` | URLs de arquivos do S3 do Bubble e textos simples/longos. |
| **`number`** | `NUMERIC(15, 2)` / `INTEGER` | Suporte a valores decimais (pontuações, posições) e inteiros. |
| **`date`** | `TIMESTAMP` | Precisão de data e hora para auditoria e prazos. |
| **`yes / no`** | `BOOLEAN` | Flags lógicas de estado. |
| **`App Object` (Relação)** | `VARCHAR(255)` (FK) | Chave estrangeira apontando para o `id` da tabela relacionada. |
| **`List of ...`** | `TEXT[]` ou Tabela `N:N` | Coleções de dados armazenadas como arrays nativos do PostgreSQL. |
| **`Built-in fields`** | `created_date`, `modified_date`, `creator_id`, `slug` | Mantidos em todas as tabelas para histórico e SEO. |

## 4. Recomendações para a Migração

1. **Estratégia de Chaves Primárias (`ID`)**: O Bubble utiliza hashes de texto de 32 caracteres (ex: `1689230492831x123094823904`). Recomenda-se manter a coluna `id` como `VARCHAR(255)` na migração inicial para preservar os relacionamentos existentes sem quebrar dados históricos.
2. **Tratamento de Listas de Arquivos/Relacionamentos (`List of ...`)**:
    - Para arrays de textos/arquivos simples (`List of texts`, `List of files`), utilize o tipo `TEXT[]` (PostgreSQL) ou `JSONB`.
    - Para listas de objetos complexos (ex: `List of Iniciativas` dentro de `Organizacao`), criar tabelas intermediárias de junção (ex: `organizacao_iniciativas`) facilitará consultas SQL otimizadas.
3. **Normalização de Módulos Duplicados**: Tabelas de histórico como `Oportunidade_crawler` possuem campos sufixados com `_deleted`. Na nova arquitetura SQL, é recomendado utilizar uma coluna `status` ou tabela de auditoria separada.

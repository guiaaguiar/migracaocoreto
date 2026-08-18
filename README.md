# CORETO — Migração

Repositório de migração da plataforma **CORETO** de Bubble (low-code) para o novo stack moderno em React. Contém tanto o frontend do novo CORETO quanto uma **seção de legado** que preserva fielmente o visual de cada página da versão Bubble, convertida para React estático.

---

## ⚠️ Instrução Obrigatória para Agentes

> **Antes de criar ou modificar qualquer página**, leia o relatório de design system:
>
> 📄 [`docs/relatoriopages/design-system-coreto.md`](./docs/relatoriopages/design-system-coreto.md)
>
> Ele contém a paleta de cores, tipografia, estrutura de layout, especificações de todos os componentes (header, sidebar, card, inputs, selects, botões) e um checklist de verificação. Seguir esse documento é **obrigatório** para garantir consistência visual com o produto.

---

## Stack Tecnológico

### Frontend
| Tecnologia | Versão | Função |
|---|---|---|
| React | 19 | Base da interface e composição das telas |
| Vite | 8 | Build, dev server e empacotamento |
| TypeScript | 5.9 | Tipagem estática |
| Tailwind CSS | 4 | Estilização utilitária |
| react-router-dom | 7 | Roteamento SPA |
| Keycloak JS | 26 | Autenticação SSO |
| Vitest | 4 | Testes unitários e de componentes |
| ESLint | — | Análise estática |

### Backend & Banco de Dados
| Tecnologia | Versão | Função |
|---|---|---|
| PostgreSQL | 16 | Banco de dados relacional principal |
| Node.js / Express | 4 / 22+ | API REST para servir dados reais ao frontend |
| TypeScript | 5.9 | Tipagem estática compartilhada |
| pg (node-postgres) | 8 | Pool de conexões otimizado com PostgreSQL |
| Docker Compose | — | Orquestração local do PostgreSQL 16 + Adminer |

---

## Como Rodar Localmente (Full Stack)

### 1. Iniciar o Banco PostgreSQL
```bash
# Subir container PostgreSQL 16 e Adminer via Docker Compose
docker-compose up -d

# Ou se já tiver um PostgreSQL instalado localmente na porta 5432:
# Basta conferir as variáveis no arquivo .env
```

### 2. Configurar Schema e Dados Reais (Seed)
```bash
# Opção A: Executar setup completo (Schema moderno + 75 tabelas legadas + Seeds)
npm run db:setup

# Opção B: Executar especificamente a migração e inserts das 75 tabelas do Bubble
npm run db:bubble
```

### 3. Rodar Frontend e Backend API
```bash
# Opção A: Rodar tudo junto em paralelo (Frontend + API REST)
npm run dev:all

# Opção B: Rodar em terminais separados
npm run server:dev  # API backend na porta 3001
npm run dev         # Frontend Vite na porta 5173 (com proxy /api automático)
```

O frontend estará em `http://localhost:5173` e a API REST em `http://localhost:3001/api`.
O painel visual do banco (Adminer) estará em `http://localhost:8080` (Sistema: PostgreSQL, Servidor: postgres, Usuário: postgres, Senha: postgres, Base: coreto_db).

---

## Estrutura do Banco de Dados PostgreSQL

O banco de dados do CORETO contempla tanto o **schema relacional moderno** quanto o **mapeamento completo das 75 tabelas legadas do Bubble**:

### 1. Camada Moderna de Domínio
- `database/init/01_schema.sql`: Extensões (`uuid-ossp`, `pg_trgm`, `citext`), tabelas relacionais normalizadas (`users`, `organizations`, `startups`, `opportunities`, `ecosystem_actors`, `programs`, `inscriptions`, `evaluations`, `initiatives`, `pitches`), índices de busca textual e triggers de atualização de timestamps.
- `database/init/02_seed.sql`: Carga com dados reais do ecossistema de Recife (EMPREL, Polotec UFPE, Porto Digital, startups, editais EITA, NITRO 2026, Hacker Cidadão 13, atores no mapa e iniciativas).

### 2. Camada Legada do Bubble (75 Data Types Mapeados)
- `database/init/03_bubble_tables.sql`: DDL completo das **75 tabelas** originadas do Bubble (`Academy`, `Assessment`, `Iniciativa`, `Organizacao`, `Oportunidade`, `Eita`, `Submissao_ConectaLabs`, `Submissao_ICT`, `Submissao_INPI`, `kanban`, `StatusLane`, `Task`, `User`, etc.).
- `database/init/04_bubble_inserts.sql`: Scripts de `INSERT INTO` com carga de dados estruturados para todas as tabelas legadas.
- `server/src/db/migrate-bubble.ts`: Script dedicado de migração para o schema Bubble (`npm run db:bubble`).
- 📄 Relatório Técnico Completo: [`docs/relatoriopages/Relatorio-bd.md`](./docs/relatoriopages/Relatorio-bd.md)

---

## Estrutura de Pastas

```
migracaocoreto/
├── database/                      # Scripts SQL para PostgreSQL
│   └── init/
│       ├── 01_schema.sql          # DDL moderno (tabelas, índices, triggers, extensions)
│       ├── 02_seed.sql            # Carga de dados reais de Recife
│       ├── 03_bubble_tables.sql   # DDL das 75 tabelas legadas do Bubble
│       └── 04_bubble_inserts.sql  # Inserts de dados para as 75 tabelas legadas
├── server/                        # API Backend REST (Node.js + Express + TypeScript)
│   ├── src/
│   │   ├── db/
│   │   │   ├── pool.ts            # Conexão Pool com PostgreSQL
│   │   │   ├── setup.ts           # Runner de setup completo (npm run db:setup)
│   │   │   └── migrate-bubble.ts  # Runner específico das 75 tabelas (npm run db:bubble)
│   │   ├── routes/                # Rotas REST (/api/startups, /api/oportunidades, etc.)
│   │   └── index.ts               # Servidor Express principal
│   └── tsconfig.json
├── public/                        # Assets públicos (favicon, imagens estáticas)
├── docs/
│   └── relatoriopages/
│       ├── design-system-coreto.md  # ← Design system de referência (LEIA PRIMEIRO)
│       └── Relatorio-bd.md          # ← Relatório de arquitetura e modelagem do banco
├── src/
│   ├── main.tsx                   # Entry point da aplicação
│   ├── App.tsx                    # Configuração de rotas (react-router-dom v7)
│   ├── index.css                  # Tailwind CSS + reset global
│   ├── assets/                    # Logos e imagens
│   ├── services/                  # Camada de consumo da API PostgreSQL
│   ├── pages/
│   │   ├── legacy/                # 33 páginas Bubble convertidas para React
│   │   └── (demais páginas do novo CORETO)
│   └── components/                # Componentes globais reutilizáveis
├── docker-compose.yml             # PostgreSQL 16 + Adminer
├── .env / .env.example            # Configurações de ambiente
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Seção de Legado (`/legacy`)

A seção de legado é um arquivo histórico da plataforma CORETO na versão Bubble. Cada rota `/legacy/[pagina]` é uma conversão fiel do visual original para React — com dados mockados e sem chamadas reais de API.

### Acesso

> ⚠️ Esta seção é restrita a administradores. A proteção por role Keycloak será implementada em etapa futura.

### Páginas Convertidas (33 Páginas)

| Página | Rota | Status |
|---|---|---|
| Página de Erro 404 | `/legacy/404` | ✅ Concluída |
| Home — Portal Principal CORETO | `/legacy/home` | ✅ Concluída |
| Home — Ariano Call / Portal CORETO | `/legacy/home-arianov0` | ✅ Concluída |
| Área do Avaliador — Meus Programas | `/legacy/avaliador-premiorec` | ✅ Concluída |
| Área do Avaliador — Trilha E.I.T.A! Recife | `/legacy/avaliador-trilha` | ✅ Concluída |
| Back Office (BO) — Painel de Operações | `/legacy/bo` | ✅ Concluída |
| Trilha Caminhos — Centelha PE | `/legacy/caminhos-fase2` | ✅ Concluída |
| Conclusão de Cadastro — Startup & Resolvedor | `/legacy/complete-inscricao` | ✅ Concluída |
| 3º Ciclo de Inovação Aberta e.i.t.a! Recife | `/legacy/eita` | ✅ Concluída |
| Hacker Cidadão 13.0 | `/legacy/hackercidadao` | ✅ Concluída |
| Criar Conexão — Bora criar teu perfil? | `/legacy/inscricao-conexoes` | ✅ Concluída |
| Crie seu Desafio em CORETO | `/legacy/inscricao-desafio` | ✅ Concluída |
| Crie sua Oportunidade (V1) | `/legacy/inscricao-desafio-v1` | ✅ Concluída |
| Inscrição no Novo Coreto | `/legacy/inscricao-evento` | ✅ Concluída |
| Cadastrar Organização | `/legacy/inscricao-organizacao` | ✅ Concluída |
| Cadastro de Resolvedores | `/legacy/inscricao-resolvedor` | ✅ Concluída |
| Inscrição Startup (Iniciativa) | `/legacy/inscricao-startup` | ✅ Concluída |
| Perfil de Talento | `/legacy/inscricao-talento` | ✅ Concluída |
| Perfil de Talento (V2.1) | `/legacy/inscricao-v2_1` | ✅ Concluída |
| Mapa do Ecossistema | `/legacy/mapa-ecossistema` | ✅ Concluída |
| Matching com Coreto (Totem 1080x1920) | `/legacy/matchariano` | ✅ Concluída |
| Ecossistema - Organizações | `/legacy/meu_eco-organizacoes` | ✅ Concluída |
| NETpitch (IA Pitch Builder) | `/legacy/netpitch` | ✅ Concluída |
| NETpitch V2 (Gerador de Pitches com Layla) | `/legacy/netpitchv2` | ✅ Concluída |
| NITRO 2026 | `/legacy/nitro` | ✅ Concluída |
| Dashboard Inscrições NITRO 2026 | `/legacy/nitro-inscricoes` | ✅ Concluída |
| Oportunidades & Desafios | `/legacy/oportunidades` | ✅ Concluída |
| Escritório de Parcerias Inovadoras | `/legacy/parcerias-inovadoras` | ✅ Concluída |
| Prêmio Recife de Inovação 2025 | `/legacy/premio-inovacao-rec` | ✅ Concluída |
| Quiz: Descubra o Seu Lugar na Inovação | `/legacy/quizz-descubra_seu_lugar` | ✅ Concluída |
| Startup World Cup 2025 Regional Recife | `/legacy/startupworldcup` | ✅ Concluída |
| Startups & Meu Ecossistema | `/legacy/startups_e_meu_ecossistema` | ✅ Concluída |
| Trilha e.i.t.a! Recife (3º Ciclo Inovação Aberta) | `/legacy/trilha-eita` | ✅ Concluída |

---

## Como Adicionar uma Nova Página de Legado

> 📌 **Antes de começar:** leia [`docs/relatoriopages/design-system-coreto.md`](./docs/relatoriopages/design-system-coreto.md) para aplicar o design system correto.

Siga este processo sempre que uma nova página do Bubble for convertida:

### 1. Criar o arquivo da página

Crie o arquivo em:
```
src/pages/legacy/[nome-da-pagina]/index.tsx
```

O componente deve ser estático: sem chamadas de API, sem estados complexos. Use **CSS inline (`style={{...}}`)** para replicar fielmente o visual — **não use classes Tailwind para estilização visual**, apenas para estrutura quando necessário. Consulte o design system para os valores exatos de cores, espaçamentos e tipografia.

**Template base:**
```tsx
export default function Legacy[NomeDaPagina]Page() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#EEF2F5', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', display: 'flex', flexDirection: 'column', color: '#1A202C' }}>
      {/* Header Global */}
      {/* Sidebar */}
      {/* Main Content */}
    </div>
  )
}
```

### 2. Registrar a rota em `App.tsx`

```tsx
import Legacy[NomeDaPagina]Page from './pages/legacy/[nome-da-pagina]'

// Dentro de <Routes>:
<Route path="/legacy/[nome-da-pagina]" element={<Legacy[NomeDaPagina]Page />} />
```

### 3. Adicionar ao índice de legado

Em `src/pages/legacy/index.tsx`, adicione um objeto no array `LEGACY_PAGES`:

```ts
{
  slug: '[nome-da-pagina]',
  name: 'Nome Legível da Página',
  description: 'Breve descrição do que era esta tela no Bubble.',
  status: 'done', // 'done' | 'in-progress' | 'pending'
},
```

### 4. Atualizar a tabela neste README

Adicione uma linha na tabela "Páginas Convertidas" acima.

---

## Processo de Conversão (Bubble → React)

1. **Tirar screenshot** da página no Bubble (tela cheia, com dados reais visíveis)
2. **Exportar o HTML** da página (View Source no navegador)
3. **Ler o design system** em `docs/relatoriopages/design-system-coreto.md`
4. **Enviar** o HTML + screenshot para conversão
5. O agente converte para `.tsx` estático, fiel ao visual, usando inline styles conforme o design system
6. Registrar rota e atualizar índice

---

## Documentação

| Documento | Descrição |
|---|---|
| [`docs/relatoriopages/design-system-coreto.md`](./docs/relatoriopages/design-system-coreto.md) | Paleta, tipografia, componentes e checklist do design system CORETO |
| [`docs/relatoriopages/Relatorio-bd.md`](./docs/relatoriopages/Relatorio-bd.md) | Relatório de arquitetura do backend e mapeamento das 75 tabelas do Bubble |

---

## Roadmap

- [x] Setup do projeto (React 19 + Vite 8 + Tailwind 4 + react-router-dom 7)
- [x] Estrutura de pastas do legado
- [x] Página de índice `/legacy`
- [x] README de documentação
- [x] Design system documentado (`docs/relatoriopages/design-system-coreto.md`)
- [x] Conversão & Unificação: 33 páginas legadas convertidas e mescladas no projeto principal
- [x] Banco de dados PostgreSQL (DDL `01_schema.sql` + Seed `02_seed.sql` + Docker Compose)
- [x] Modelagem e DDL completo das 75 tabelas do Bubble no PostgreSQL (`03_bubble_tables.sql`)
- [x] Seed e Inserts estruturados para as 75 tabelas legadas (`04_bubble_inserts.sql` + `migrate-bubble.ts`)
- [x] API REST Backend em Express/TypeScript (`server/`) e camada de serviços (`src/services/`)
- [x] Integração de consumo de dados reais com fallback resiliente
- [ ] Proteção por role Keycloak nas rotas `/legacy/*`



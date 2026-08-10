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

### Backend (referência)
| Tecnologia | Versão | Função |
|---|---|---|
| Java | 21 | Linguagem principal |
| Spring Boot | 3.4.3 | Framework de API REST |
| Maven | — | Build e dependências |
| PostgreSQL | — | Banco de dados principal |
| Spring Security + OAuth2 | — | Autenticação via Keycloak/JWT |

---

## Como Rodar Localmente

```bash
# Instalar dependências
npm install

# Rodar em modo de desenvolvimento
npm run dev

# Build de produção
npm run build
```

O dev server sobe em `http://localhost:5173`.

---

## Estrutura de Pastas

```
migracaocoreto/
├── public/                        # Assets públicos (favicon, imagens estáticas)
├── docs/
│   └── relatoriopages/
│       └── design-system-coreto.md  # ← Design system de referência (LEIA PRIMEIRO)
├── src/
│   ├── main.tsx                   # Entry point da aplicação
│   ├── App.tsx                    # Configuração de rotas (react-router-dom v7)
│   ├── index.css                  # Tailwind CSS + reset global
│   ├── assets/                    # Logos e imagens (logo-coreto.png, logo-abdi.png, logo-emprel.png)
│   ├── pages/
│   │   ├── legacy/
│   │   │   ├── index.tsx          # Índice visual do legado (/legacy)
│   │   │   └── [nome-da-pagina]/
│   │   │       └── index.tsx      # Cada página Bubble convertida para React
│   │   └── (demais páginas do novo CORETO)
│   └── components/                # Componentes globais reutilizáveis
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

### Páginas Convertidas

| Página | Rota | Status |
|---|---|---|
| Inscrição Desafio V1 | `/legacy/inscricao-desafio-v1` | ✅ Concluída |

> As páginas são adicionadas à medida que o HTML do Bubble e os screenshots são fornecidos.

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

---

## Roadmap

- [x] Setup do projeto (React 19 + Vite 8 + Tailwind 4 + react-router-dom 7)
- [x] Estrutura de pastas do legado
- [x] Página de índice `/legacy`
- [x] README de documentação
- [x] Design system documentado (`docs/relatoriopages/design-system-coreto.md`)
- [x] Conversão: `inscricao-desafio-v1`
- [ ] Proteção por role Keycloak nas rotas `/legacy/*`
- [ ] Conversão das demais páginas do Bubble (em andamento)

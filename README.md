# CORETO — Migração

Repositório de migração da plataforma **CORETO** de Bubble (low-code) para o novo stack moderno em React. Contém tanto o frontend do novo CORETO quanto uma **seção de legado** que preserva fielmente o visual de cada página da versão Bubble, convertida para React estático.

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
├── src/
│   ├── main.tsx                   # Entry point da aplicação
│   ├── App.tsx                    # Configuração de rotas (react-router-dom v7)
│   ├── index.css                  # Tailwind CSS + reset global
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
| *(nenhuma ainda)* | — | ⏳ Aguardando conversão |

> As páginas são adicionadas à medida que o HTML do Bubble e os screenshots são fornecidos.

---

## Como Adicionar uma Nova Página de Legado

Siga este processo sempre que uma nova página do Bubble for convertida:

### 1. Criar o arquivo da página

Crie o arquivo em:
```
src/pages/legacy/[nome-da-pagina]/index.tsx
```

O componente deve ser estático: sem chamadas de API, sem estados complexos. Use CSS inline (`style={{...}}`) para replicar fielmente o visual do Bubble e Tailwind para estrutura de layout.

**Template base:**
```tsx
export default function Legacy[NomeDaPagina]Page() {
  return (
    <div style={{ /* estilos do Bubble */ }}>
      {/* Conteúdo convertido do Bubble */}
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
3. **Enviar** o HTML + screenshot para conversão
4. O agente converte para `.tsx` estático, fiel ao visual
5. Registrar rota e atualizar índice

---

## Roadmap

- [x] Setup do projeto (React 19 + Vite 8 + Tailwind 4 + react-router-dom 7)
- [x] Estrutura de pastas do legado
- [x] Página de índice `/legacy`
- [x] README de documentação
- [ ] Proteção por role Keycloak nas rotas `/legacy/*`
- [ ] Conversão das páginas do Bubble (em andamento)

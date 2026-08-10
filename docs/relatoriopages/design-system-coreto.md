# Design System — CORETO Platform

> Relatório de referência criado a partir da estilização da página `inscricao-desafio-v1`.  
> Serve como modelo fixo para que outros agentes produzam páginas visualmente consistentes com o produto.

---

## 1. Contexto

A página estava usando classes Tailwind CSS que não estavam sendo resolvidas corretamente no ambiente, resultando em uma aparência muito distante do design original. A solução adotada foi **migrar todos os estilos para inline styles** (objeto `style={}` do React), eliminando a dependência de processamento do Tailwind e garantindo fidelidade visual imediata.

---

## 2. Paleta de Cores

| Token                  | Valor       | Uso                                              |
|------------------------|-------------|--------------------------------------------------|
| `primary`              | `#00a8b5`   | Links da sidebar, subtítulos, botões primários   |
| `primary-dark`         | `#0096a3`   | Hover do botão primário                          |
| `navy`                 | `#003B6D`   | Headers de seção dentro dos cards, labels importantes |
| `accent-orange`        | `#FF6B00`   | Botões "Voltar" e "Próximo" (borda + texto)      |
| `accent-purple`        | `#9333EA`   | Item "Criar solução" na sidebar                  |
| `accent-red`           | `#e05c5c`   | Ícone de coração (Meus programas)                |
| `text-primary`         | `#1A202C`   | Texto principal, títulos de página               |
| `text-secondary`       | `#334155`   | Texto de inputs preenchidos                      |
| `text-placeholder`     | `#94a3b8`   | Placeholder de inputs e selects                  |
| `text-muted`           | `#64748b`   | Textos secundários, descrições                   |
| `border`               | `#cbd5e1`   | Bordas de inputs e selects padrão                |
| `border-light`         | `#e2e8f0`   | Bordas de cards, divisores, sidebar              |
| `bg-page`              | `#EEF2F5`   | Fundo geral da página                            |
| `bg-card`              | `#ffffff`   | Fundo de cards, header, sidebar                  |
| `amber`                | `#f59e0b`   | Ícone de "?" (Ajuda) na sidebar                  |

---

## 3. Tipografia

- **Família:** `Inter, -apple-system, BlinkMacSystemFont, sans-serif`
- **Tamanhos usados:**

| Elemento                        | Tamanho | Peso |
|---------------------------------|---------|------|
| Título de página (`h1`)         | `22px`  | 700  |
| Header de card (`h2`)           | `15px`  | 700  |
| Labels de formulário            | `13px`  | 600  |
| Textos de nav/sidebar           | `13px`  | 600  |
| Section headers sidebar         | `14px`  | 700  |
| Subtítulo de página             | `13px`  | 500  |
| Inputs / selects / placeholders | `13px`  | 400  |
| Botões                          | `13px`  | 600  |
| Botão primário (Lançar)         | `14px`  | 700  |
| "GERAL" (uppercase)             | `13px`  | 700  |

---

## 4. Estrutura de Layout

```
┌─────────────────────────────────────────────────────────┐
│  HEADER (60px altura, sticky, z-index: 30)              │
│  [Logo Coreto | divisor | Logo ABDI | Logo Emprel]      │
│                               [ícone rede | Pedro ▾]   │
├──────────┬──────────────────────────────────────────────┤
│ SIDEBAR  │  MAIN CONTENT                                │
│ 175px    │  padding: 32px 40px                          │
│ bg:#fff  │  max-width: 860px                            │
│ border-r │                                              │
│          │  [Page Header]                               │
│          │  h1: Crie sua oportunidade...                │
│          │  p: subtítulo em #00a8b5                     │
│          │                                              │
│          │  [CARD]                                      │
│          │  ┌────────────────────────────────────────┐  │
│          │  │ CARD HEADER (18px 28px padding)        │  │
│          │  │ [h2 título]          [botão Voltar]    │  │
│          │  ├────────────────────────────────────────┤  │
│          │  │ CARD BODY (28px padding, gap: 20px)    │  │
│          │  │ [label + input]                        │  │
│          │  │ [label + select]                       │  │
│          │  │ ...                                    │  │
│          │  │ [botão submit]                         │  │
│          │  └────────────────────────────────────────┘  │
└──────────┴──────────────────────────────────────────────┘
```

---

## 5. Componentes — Especificações Exatas

### 5.1 Header Global

```jsx
<header style={{
  backgroundColor: '#fff',
  height: '60px',
  padding: '0 32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid #e2e8f0',
  position: 'sticky',
  top: 0,
  zIndex: 30,
  boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
}}>
```

**Logos:** separados por um divisor vertical `1px` de altura `26px`, cor `#e2e8f0`.

**Perfil do usuário:** ícone SVG de rede (nós conectados) + nome em `14px 600` + seta chevron `#003B6D`.

---

### 5.2 Sidebar

```jsx
<aside style={{
  width: '175px',
  backgroundColor: '#fff',
  borderRight: '1px solid #e2e8f0',
  paddingTop: '16px',
  paddingBottom: '48px',
  flexShrink: 0
}}>
```

**Items de nav:**
```jsx
// Padrão de item
style={{
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '9px 14px',
  fontWeight: 600,
  color: '#00a8b5',
  textDecoration: 'none'
}}
```

**Ícones:** SVG `16x16`, `strokeWidth: 1.8`, sem fill (exceto "Meus programas" que usa stroke vermelho `#e05c5c`).

**Section headers (ex: "Resolvedor"):**
```jsx
<div style={{ padding: '16px 14px 6px' }}>
  <span style={{ fontSize: '14px', fontWeight: 700, color: '#1A202C' }}>Resolvedor</span>
</div>
```

**Divisor antes de GERAL:**
```jsx
<div style={{ margin: '12px 14px 6px', borderTop: '1px solid #e2e8f0' }} />
```

---

### 5.3 Card de Formulário

O card é dividido em **header** e **body** separados por borda interna:

```jsx
// Container do card
<div style={{
  backgroundColor: '#fff',
  borderRadius: '10px',
  border: '1px solid #e2e8f0',
  boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
}}>

  {/* Header do card */}
  <div style={{
    padding: '18px 28px',
    borderBottom: '1px solid #e2e8f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }}>
    <h2 style={{ fontSize: '15px', fontWeight: 700, color: '#003B6D', margin: 0 }}>
      Título da seção
    </h2>
    {/* Botão Voltar (somente quando há etapa anterior) */}
    <button style={{
      padding: '7px 16px',
      borderRadius: '6px',
      border: '1px solid #FF6B00',
      color: '#FF6B00',
      fontWeight: 600,
      backgroundColor: '#fff',
      cursor: 'pointer',
      fontSize: '13px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    }}>
      {'<'} Voltar
    </button>
  </div>

  {/* Body do card */}
  <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
    {/* campos aqui */}
  </div>
</div>
```

---

### 5.4 Inputs de Texto

```jsx
<input style={{
  width: '100%',
  padding: '10px 14px',
  borderRadius: '6px',
  border: '1px solid #cbd5e1',
  outline: 'none',
  fontSize: '13px',
  color: '#334155',
  boxSizing: 'border-box'
}} />
```

---

### 5.5 Selects

```jsx
// Wrapper com posição relativa para o ícone customizado
<div style={{ position: 'relative' }}>
  <select style={{
    width: '100%',
    padding: '10px 36px 10px 14px',
    borderRadius: '6px',
    border: '1px solid #cbd5e1',
    outline: 'none',
    fontSize: '13px',
    color: '#334155',       // quando preenchido
    // color: '#94a3b8',    // quando placeholder (valor vazio)
    backgroundColor: '#fff',
    appearance: 'none',
    cursor: 'pointer',
    boxSizing: 'border-box'
  }} />

  {/* Chevron customizado */}
  <div style={{
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    color: '#94a3b8'
  }}>
    <svg width="14" height="14">...</svg>
  </div>
</div>
```

---

### 5.6 Labels

```jsx
// Label padrão (maioria dos campos)
<label style={{ fontSize: '13px', fontWeight: 600, color: '#1A202C' }}>
  Texto do campo
</label>

// Label com destaque azul (campos de questões de perfil)
<label style={{ fontSize: '13px', fontWeight: 600, color: '#003B6D' }}>
  Que tipos de iniciativa podem participar?
</label>
```

---

### 5.7 Botões de Navegação (Próximo / Voltar)

```jsx
// Botão outline laranja (Próximo / Voltar dentro do header do card)
<button style={{
  padding: '7px 16px',
  borderRadius: '6px',
  border: '1px solid #FF6B00',
  color: '#FF6B00',
  fontWeight: 600,
  backgroundColor: '#fff',
  cursor: 'pointer',
  fontSize: '13px',
  display: 'flex',
  alignItems: 'center',
  gap: '6px'
}}>
  {'<'} Voltar
</button>

// Botão primário (submit / Lançar oportunidade)
<button style={{
  padding: '10px 28px',
  borderRadius: '6px',
  backgroundColor: '#00a8b5',
  color: '#fff',
  fontWeight: 700,
  fontSize: '14px',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
}}>
  Lançar oportunidade
</button>
```

---

## 6. Padrão de Grupos de Campo

Cada campo do formulário segue este padrão:

```jsx
<div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
  <label style={{ fontSize: '13px', fontWeight: 600, color: '#1A202C' }}>
    Label do campo
  </label>
  <input ... />
  {/* ou <select>, <textarea> */}
</div>
```

- **Gap entre label e input:** `7px`
- **Gap entre grupos de campos:** `20px` (via `gap` no container flex)

---

## 7. Lições Aprendidas — Decisões Técnicas

### Por que inline styles e não Tailwind?

Em projetos onde as classes Tailwind não estão sendo processadas corretamente (por configuração do `content` no `tailwind.config`, versão incompatível, ou ambiente de migração), o uso de **inline styles garante fidelidade 100%** ao design, sem dependências de compilação.

### Estratégia de comparação com screenshot

1. **Identificar o step visual correto:** A print mostrava o Step 3. O `useState` inicial foi ajustado para `3` para facilitar comparação direta.
2. **Estrutura card header/body:** O principal desvio era o card sem separação interna. A borda `borderBottom: '1px solid #e2e8f0'` entre header e body é essencial.
3. **Labels:** A cor dos labels mudou de `#003B6D` (azul) para `#1A202C` (quase preto) nos campos padrão, com `#003B6D` reservado para os campos de "perfil" e títulos de seção.
4. **Select placeholder:** O select com valor vazio usa `color: '#94a3b8'` para simular comportamento de placeholder.
5. **Sidebar width:** Reduzida de `210px` para `175px` para corresponder à proporção da imagem.

---

## 8. Checklist para Novas Páginas

Ao criar uma nova página no padrão Coreto, verificar:

- [ ] Fundo da página: `backgroundColor: '#EEF2F5'`
- [ ] Header global sticky com `height: 60px`, logos e perfil do usuário
- [ ] Sidebar com `width: 175px`, itens de nav com `gap: 10px`, `padding: 9px 14px`
- [ ] Título de página em `22px 700 #1A202C` + subtítulo em `13px 500 #00a8b5`
- [ ] Card com `borderRadius: 10px`, `border: 1px solid #e2e8f0`
- [ ] Header do card separado do body por `borderBottom: 1px solid #e2e8f0`
- [ ] Padding do header do card: `18px 28px`
- [ ] Padding do body do card: `28px`, gap entre campos: `20px`
- [ ] Inputs com `border: 1px solid #cbd5e1`, `padding: 10px 14px`, `borderRadius: 6px`
- [ ] Selects com `appearance: none` e chevron SVG customizado posicionado absolutamente
- [ ] Botões outline: `border: 1px solid #FF6B00`, `color: #FF6B00`
- [ ] Botão primário: `backgroundColor: #00a8b5`, `color: #fff`
- [ ] Todos os `boxSizing: 'border-box'` nos inputs para evitar overflow

---

*Relatório gerado em: 2026-08-10 | Página de referência: `inscricao-desafio-v1`*

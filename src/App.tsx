import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LegacyIndexPage from './pages/legacy'
import InscricaoDesafioV1Page from './pages/legacy/inscricao-desafio-v1'

// As páginas de legado serão importadas aqui à medida que forem convertidas.

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota raiz — redireciona para /legacy por enquanto */}
        <Route path="/" element={<Navigate to="/legacy" replace />} />

        {/* ── Seção de Legado Bubble ── */}
        <Route path="/legacy" element={<LegacyIndexPage />} />
        <Route path="/legacy/inscricao-desafio-v1" element={<InscricaoDesafioV1Page />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/legacy" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LegacyIndexPage from './pages/legacy'

// As páginas de legado serão importadas aqui à medida que forem convertidas.
// Exemplo:
// import LegacyDashboard from './pages/legacy/dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota raiz — redireciona para /legacy por enquanto */}
        <Route path="/" element={<Navigate to="/legacy" replace />} />

        {/* ── Seção de Legado Bubble ── */}
        <Route path="/legacy" element={<LegacyIndexPage />} />

        {/* Páginas convertidas do Bubble — adicionar aqui conforme forem criadas */}
        {/* <Route path="/legacy/dashboard" element={<LegacyDashboard />} /> */}

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/legacy" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

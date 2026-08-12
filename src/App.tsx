import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LegacyIndexPage from './pages/legacy'
import NotFoundPage from './pages/legacy/404'
import InscricaoDesafioV1Page from './pages/legacy/inscricao-desafio-v1'
import InscricaoEventoPage from './pages/legacy/inscricao-evento'
import InscricaoOrganizacaoPage from './pages/legacy/inscricao-organizacao'
import InscricaoResolvedorPage from './pages/legacy/inscricao-resolvedor'
import InscricaoStartupPage from './pages/legacy/inscricao-startup'
import InscricaoTalentoPage from './pages/legacy/inscricao-talento'
import InscricaoV21Page from './pages/legacy/inscricao-v2_1'
import MapaEcossistemaPage from './pages/legacy/mapa-ecossistema'
import MatcharianoPage from './pages/legacy/matchariano'
import MeuEcoOrganizacoesPage from './pages/legacy/meu_eco-organizacoes'
import NetpitchPage from './pages/legacy/netpitch'
import NetpitchV2Page from './pages/legacy/netpitchv2'
import NitroPage from './pages/legacy/nitro'
import NitroInscricoesPage from './pages/legacy/nitro-inscricoes'
import OportunidadesPage from './pages/legacy/oportunidades'
import ParceriasInovadorasPage from './pages/legacy/parcerias-inovadoras'
import PremioInovacaoRecPage from './pages/legacy/premio-inovacao-rec'
import QuizzDescubraSeuLugarPage from './pages/legacy/quizz-descubra_seu_lugar'
import StartupsEMeuEcossistemaPage from './pages/legacy/startups_e_meu_ecossistema'
import TrilhaEitaPage from './pages/legacy/trilha-eita'

// As páginas de legado serão importadas aqui à medida que forem convertidas.

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota raiz — redireciona para /legacy por enquanto */}
        <Route path="/" element={<Navigate to="/legacy" replace />} />

        {/* ── Página 404 ── */}
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/legacy/404" element={<NotFoundPage />} />

        {/* ── Seção de Legado Bubble ── */}
        <Route path="/legacy" element={<LegacyIndexPage />} />
        <Route path="/legacy/inscricao-desafio-v1" element={<InscricaoDesafioV1Page />} />
        <Route path="/legacy/inscricao-evento" element={<InscricaoEventoPage />} />
        <Route path="/legacy/inscricao-organizacao" element={<InscricaoOrganizacaoPage />} />
        <Route path="/legacy/inscricao-resolvedor" element={<InscricaoResolvedorPage />} />
        <Route path="/legacy/inscricao-startup" element={<InscricaoStartupPage />} />
        <Route path="/legacy/inscricao-talento" element={<InscricaoTalentoPage />} />
        <Route path="/legacy/inscricao-v2_1" element={<InscricaoV21Page />} />
        <Route path="/legacy/mapa-ecossistema" element={<MapaEcossistemaPage />} />
        <Route path="/legacy/matchariano" element={<MatcharianoPage />} />
        <Route path="/legacy/meu_eco-organizacoes" element={<MeuEcoOrganizacoesPage />} />
        <Route path="/legacy/netpitch" element={<NetpitchPage />} />
        <Route path="/legacy/netpitchv2" element={<NetpitchV2Page />} />
        <Route path="/legacy/nitro" element={<NitroPage />} />
        <Route path="/legacy/nitro-inscricoes" element={<NitroInscricoesPage />} />
        <Route path="/legacy/oportunidades" element={<OportunidadesPage />} />
        <Route path="/legacy/parcerias-inovadoras" element={<ParceriasInovadorasPage />} />
        <Route path="/legacy/premio-inovacao-rec" element={<PremioInovacaoRecPage />} />
        <Route path="/legacy/quizz-descubra_seu_lugar" element={<QuizzDescubraSeuLugarPage />} />
        <Route path="/legacy/quizz-descubra_seu_lugar/:slug" element={<QuizzDescubraSeuLugarPage />} />
        <Route path="/legacy/startups_e_meu_ecossistema" element={<StartupsEMeuEcossistemaPage />} />
        <Route path="/legacy/startups-e-meu-ecossistema" element={<StartupsEMeuEcossistemaPage />} />
        <Route path="/legacy/trilha-eita" element={<TrilhaEitaPage />} />
        <Route path="/trilha-eita" element={<TrilhaEitaPage />} />

        {/* Fallback — Qualquer link inexistente redireciona para /404 */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

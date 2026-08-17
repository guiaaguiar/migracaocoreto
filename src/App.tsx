import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import LegacyIndexPage from './pages/legacy'
import NotFoundPage from './pages/legacy/404'
import AvaliadorPremioRecPage from './pages/legacy/avaliador-premiorec'
import AvaliadorTrilhaPage from './pages/legacy/avaliador-trilha'
import BoPage from './pages/legacy/bo'
import CaminhosFase2Page from './pages/legacy/caminhos-fase2'
import CompleteInscricaoPage from './pages/legacy/complete-inscricao'
import EitaPage from './pages/legacy/eita'
import HackerCidadaoPage from './pages/legacy/hackercidadao'
import HomePage from './pages/legacy/home'
import HomeArianoPage from './pages/legacy/home-arianov0'
import InscricaoConexoesPage from './pages/legacy/inscricao-conexoes'
import InscricaoDesafioPage from './pages/legacy/inscricao-desafio'
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
import StartupWorldCupPage from './pages/legacy/startupworldcup'
import StartupsEMeuEcossistemaPage from './pages/legacy/startups_e_meu_ecossistema'
import TrilhaEitaPage from './pages/legacy/trilha-eita'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Rota raiz — redireciona para /legacy por enquanto */}
        <Route path="/" element={<Navigate to="/legacy" replace />} />

        {/* ── Página 404 ── */}
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/legacy/404" element={<NotFoundPage />} />

        {/* ── Seção de Legado Bubble ── */}
        <Route path="/legacy" element={<LegacyIndexPage />} />
        <Route path="/legacy/home" element={<HomePage />} />
        <Route path="/legacy/home-arianov0" element={<HomeArianoPage />} />
        <Route path="/legacy/avaliador-premiorec" element={<AvaliadorPremioRecPage />} />
        <Route path="/legacy/avaliador-trilha" element={<AvaliadorTrilhaPage />} />
        <Route path="/legacy/bo" element={<BoPage />} />
        <Route path="/legacy/caminhos-fase2" element={<CaminhosFase2Page />} />
        <Route path="/legacy/complete-inscricao" element={<CompleteInscricaoPage />} />
        <Route path="/legacy/eita" element={<EitaPage />} />
        <Route path="/legacy/hackercidadao" element={<HackerCidadaoPage />} />
        <Route path="/legacy/inscricao-conexoes" element={<InscricaoConexoesPage />} />
        <Route path="/legacy/inscricao-desafio" element={<InscricaoDesafioPage />} />
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
        <Route path="/legacy/startupworldcup" element={<StartupWorldCupPage />} />
        <Route path="/legacy/startups_e_meu_ecossistema" element={<StartupsEMeuEcossistemaPage />} />
        <Route path="/legacy/startups-e-meu-ecossistema" element={<StartupsEMeuEcossistemaPage />} />
        <Route path="/legacy/trilha-eita" element={<TrilhaEitaPage />} />
        <Route path="/trilha-eita" element={<TrilhaEitaPage />} />
        <Route path="/eita" element={<EitaPage />} />

        {/* Fallback — Qualquer link inexistente redireciona para /404 */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


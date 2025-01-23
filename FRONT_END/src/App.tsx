import "./App.css";
import Home from "./components/pages/Home";
import { Acessivel } from "./components/pages/acebillidade";
import { BaixaVisao } from "./components/pages/baixa-visao";
import { Daltonismo } from "./components/pages/daltonismo";
import { Header } from "./components/pages/header";
import BuracoNegro from "./components/pages/conceitos/naoacessivel/buraconegro";
import Nebulosas from "./components/pages/conceitos/naoacessivel/nebulosas";
import Estrelas from "./components/pages/conceitos/naoacessivel/estrelas";
import AstronomiaObservacional from "./components/pages/conceitos/naoacessivel/astronomiaobsvacional";
import EclipsesEEventos from "./components/pages/conceitos/naoacessivel/eclipse";
import ExoplanetasEVidaExtraterrestre from "./components/pages/conceitos/naoacessivel/exoplanetaevida";
import ExploracaoEspacial from "./components/pages/conceitos/naoacessivel/exploracaoespacial";
import TecnologiaEspacial from "./components/pages/conceitos/naoacessivel/tecnologiaespacial";
import CometasEAsteroides from "./components/pages/conceitos/naoacessivel/cometas";
import BuracoNegroBaixa from "./components/pages/conceitos/baixavisao/buraconegro";
import NebulosasBaixa from "./components/pages/conceitos/baixavisao/nebulosas";
import EstrelasBaixa from "./components/pages/conceitos/baixavisao/estrelas";
import AstronomiaObservacionalBaixa from "./components/pages/conceitos/baixavisao/astronomiaobsvacional";
import CometasEAsteroidesBaixa from "./components/pages/conceitos/baixavisao/cometas";
import EclipsesEEventosBaixa from "./components/pages/conceitos/baixavisao/eclipse";
import ExoplanetasEVidaExtraterrestreBaixa from "./components/pages/conceitos/baixavisao/exoplanetaevida";
import ExploracaoEspacialBaixa from "./components/pages/conceitos/baixavisao/exploracaoespacial";
import TecnologiaEspacialBaixa from "./components/pages/conceitos/baixavisao/tecnologiaespacial";
import BuracoNegroD from "./components/pages/conceitos/daltonismo/buraconegro";
import NebulosasD from "./components/pages/conceitos/daltonismo/nebulosas";
import EstrelasD from "./components/pages/conceitos/daltonismo/estrelas";
import AstronomiaObservacionalD from "./components/pages/conceitos/daltonismo/astronomiaobsvacional";
import CometasEAsteroidesD from "./components/pages/conceitos/daltonismo/cometas";
import EclipsesEEventosD from "./components/pages/conceitos/daltonismo/eclipse";
import ExoplanetasEVidaExtraterrestreD from "./components/pages/conceitos/daltonismo/exoplanetaevida";
import ExploracaoEspacialD from "./components/pages/conceitos/daltonismo/exploracaoespacial";
import TecnologiaEspacialD from "./components/pages/conceitos/daltonismo/tecnologiaespacial";
import { Story } from "./components/pages/story";
import { Quiz } from "./components/pages/quiz";
import {Login} from "../src/components/pages/login"
import Register from "../src/components/pages/register/"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acessivel" element={<Acessivel />} />
        <Route path="/assuntos" element={<Header />} />
        <Route path="/assuntos-baixa-visao" element={<BaixaVisao />} />
        <Route path="/assuntos-daltonismo" element={<Daltonismo />} />
        <Route path="/acessivel/buraconegro" element={<BuracoNegro />} />
        <Route path="/acessivel/nebulosas" element={<Nebulosas />} />
        <Route path="acessivel/estrelas" element={<Estrelas />} />
        <Route path="acessivel/astronomiaobservacional" element={<AstronomiaObservacional />} />
        <Route path="acessivel/cometas" element={<CometasEAsteroides />} />
        <Route path="acessivel/eclipse" element={<EclipsesEEventos />} />
        <Route path="acessivel/exoplanetas" element={<ExoplanetasEVidaExtraterrestre />} />
        <Route path="acessivel/exploracao" element={<ExploracaoEspacial />} />
        <Route path="acessivel/tecnologia" element={<TecnologiaEspacial />} />
        <Route path="/acessivel/baixa_visao_buraconegro" element={<BuracoNegroBaixa />} />
        <Route path="/acessivel/baixa_visao_nebulosas" element={<NebulosasBaixa />} />
        <Route path="acessivel/baixa_visao_estrelas" element={<EstrelasBaixa />} />
        <Route path="acessivel/baixa_visao_astronomiaobservacional" element={<AstronomiaObservacionalBaixa />} />
        <Route path="acessivel/baixa_visao_cometas" element={<CometasEAsteroidesBaixa />} />
        <Route path="acessivel/baixa_visao_eclipse" element={<EclipsesEEventosBaixa />} />
        <Route path="acessivel/baixa_visao_exoplanetas" element={<ExoplanetasEVidaExtraterrestreBaixa />} />
        <Route path="acessivel/baixa_visao_exploracao" element={<ExploracaoEspacialBaixa />} />
        <Route path="acessivel/baixa_visao_tecnologia" element={<TecnologiaEspacialBaixa />} />
        <Route path="/acessivel/buraconegro_D" element={<BuracoNegroD />} />
        <Route path="/acessivel/nebulosas_D" element={<NebulosasD />} />
        <Route path="acessivel/estrelas_D" element={<EstrelasD />} />
        <Route path="acessivel/astronomiaobservacional_D" element={<AstronomiaObservacionalD />} />
        <Route path="acessivel/cometas_D" element={<CometasEAsteroidesD />} />
        <Route path="acessivel/eclipse_D" element={<EclipsesEEventosD />} />
        <Route path="acessivel/exoplanetas_D" element={<ExoplanetasEVidaExtraterrestreD />} />
        <Route path="acessivel/exploracao_D" element={<ExploracaoEspacialD />} />
        <Route path="acessivel/tecnologia_D" element={<TecnologiaEspacialD />} />
        <Route path="/story" element={<Story />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

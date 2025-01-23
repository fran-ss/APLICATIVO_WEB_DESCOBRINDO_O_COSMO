import "./style.css";
import { Button } from "../../Button";
import { Link } from 'react-router-dom';
import { ArrowLeft } from "lucide-react";

export function BaixaVisao() {
  return (
    <div id="v1">
  <h2 id='h2'>Bem-vindo ao Explorando o Cosmos! O que deseja estudar?</h2>
  <div className="links-container">
  <div id="link-item1">
    <Link to="/acessivel/baixa_visao_buraconegro" className="link-item">
      Buraco Negro
    </Link>
    <Link to="/acessivel/baixa_visao_nebulosas" className="link-item">
      Nebulosas
    </Link>
    <Link to="/acessivel/baixa_visao_estrelas" className="link-item">
      Estrelas
    </Link>
    </div>
    <div id="link-item1">
    <Link to="/acessivel/baixa_visao_astronomiaobservacional" className="link-item">
      Astronomia Observacional
    </Link>
    <Link to="/acessivel/baixa_visao_cometas" className="link-item">
      Cometas e Asteroides
    </Link>
    <Link to="/acessivel/baixa_visao_eclipse" className="link-item">
      Eclipses e Eventos Cósmicos
    </Link>
    </div>
    <div id="link-item2">
    <Link to="/acessivel/baixa_visao_exoplanetas" className="link-item">
      Exoplanetas e Vida Extraterrestre
    </Link>
    <Link to="/acessivel/baixa_visao_exploracao" className="link-item">
      Exploração Espacial
    </Link>
    <Link to="/acessivel/baixa_visao_tecnologia" className="link-item">
      Tecnologia Espacial
    </Link>
    </div>
  </div>
  <Link to="/acessivel">
    <Button Icon={ArrowLeft} style={{backgroundColor:'#3b0764', border: '2px solid #93c5fd'}} />
  </Link>
</div>
  )
}
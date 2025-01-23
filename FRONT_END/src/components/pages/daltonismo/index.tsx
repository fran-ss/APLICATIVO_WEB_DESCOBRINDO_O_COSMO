
import { Link } from 'react-router-dom';
import { Button } from '../../Button';
import { ArrowLeft } from 'lucide-react';
import './style.css';

export function Daltonismo() {
  return (
    <div className="daltonismo-container">
      <h2 className="daltonismo-title">
        Bem-vindo ao explorando o Cosmos. O que deseja estudar?
      </h2>
      <div className="section">
        <Link to="/acessivel/buraconegro_D" >
          <div className="link-D">Buraco Negro</div>
        </Link>
        <Link to="/acessivel/nebulosas_D" >
          <div className="link-D">Nebulosas</div>
        </Link>
        <Link to="/acessivel/estrelas_D" >
          <div className="link-D">Estrelas</div>
        </Link>
      </div>
      <div className="section">
        <Link to="/acessivel/astronomiaobservacional_D" >
          <div className="link-D">Astronomia Observacional</div>
        </Link>
        <Link to="/acessivel/cometas_D" >
          <div className="link-D">Cometas e Asteroides</div>
        </Link>
        <Link to="/acessivel/eclipse_D" >
          <div className="link-D">Eclipses e Eventos Cósmicos</div>
        </Link>
      </div>
      <div className="section">
        <Link to="/acessivel/exoplanetas_D" >
          <div className="link-D">Exoplanetas e Vida Extraterrestre</div>
        </Link>
        <Link to="/acessivel/exploracao_D" >
          <div className="link-D">Exploração Espacial</div>
        </Link>
        <Link to="/acessivel/tecnologia_D" >
          <div className="link-D">Tecnologia Espacial</div>
        </Link>
      </div>
      <div id='botao'>
      <Link to="/acessivel">
        <Button Icon={ArrowLeft} aria-label="Voltar" style={{backgroundColor:'#3b0764', border: '2px solid #93c5fd', marginLeft:'16rem'}} />
      </Link>
      </div>
    </div>
  );
}

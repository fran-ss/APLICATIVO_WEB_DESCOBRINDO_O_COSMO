import "./styles.css";
import { Link } from 'react-router-dom';
import { Button } from "../../Button";
import { ArrowLeft } from "lucide-react";

export function Header() {
  return (
    <div className="container--">
    <div id="p1">
      <h2>Bem-vindo ao explorando o Cosmos, o que deseja estudar?</h2>
      <div id="q">
        <div id="qq">
          <Link to="/acessivel/buraconegro">
            <div className="q1">Buraco Negro</div>
          </Link>
          <Link to="/acessivel/nebulosas">
            <div className="q1">Nebulosas</div>
          </Link>
          <Link to="/acessivel/estrelas">
            <div className="q1">Estrelas</div>
          </Link>
        </div>
        <div id="qq1">
          <Link to="/acessivel/astronomiaobservacional">
            <div className="q1">Astronomia Observacional</div>
          </Link>
          <Link to="/acessivel/cometas">
            <div className="q1">Cometas e Asteroides</div>
          </Link>
          <Link to="/acessivel/eclipse">
            <div className="q1">Eclipses e Eventos Cósmicos</div>
          </Link>
        </div>
        <div id="qq2">
          <Link to="/acessivel/exoplanetas">
            <div className="q1">Exoplanetas e vida extraterrestre</div>
          </Link>
          <Link to="/acessivel/exploracao">
            <div className="q1">Exploração Espacial</div>
          </Link>
          <Link to="/acessivel/tecnologia">
            <div className="q1">Tecnologia Espacial</div>
          </Link>
        </div>
      <div id="botao">
      <Link to="/acessivel">
        <Button Icon={ArrowLeft} style={{backgroundColor:'#3b0764', border: '2px solid #93c5fd'}} />
      </Link>
      </div>
      </div>
    </div>
    </div>
  );
}

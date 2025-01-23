
import "./style.css";
import { Link } from 'react-router-dom';

export function Acessivel() {
  return (
    <div id="acessivel">
      <div id="btnacessivel">
        <div>
          <h2 id="h2acessivel">Selecione a opção que melhor se adequa a você:</h2>
        </div>

        <div id="botoes">
          <Link to="/assuntos-baixa-visao" className="link-sem-sublinhado">
            <button className="acessivelbotton">Baixa Visão</button>
          </Link>
          <Link to="/assuntos-daltonismo" className="link-sem-sublinhado">
            <button className="acessivelbotton">Daltonismo</button>
          </Link>
          <Link to="/assuntos" className="link-sem-sublinhado">
            <button className="acessivelbotton">Sem Acessibilidade</button>
          </Link>
        </div>
      </div>

      <div id="voltar-home">
      <Link to="/" className="link-sem-sublinhado">
        <h2 className="link-borda">Sair</h2>
      </Link>
      <Link to="/quiz" className="link-sem-sublinhado">
        <h2 className="link-borda">Quiz</h2>
      </Link>
        </div>
        
      </div>
    
  );
}

import { Link } from 'react-router-dom';
import { Button } from '../../../../Button';
import eclipse from '../../../../imagen/eclipse.png'; // Atualize com o caminho correto para a imagem de buraco
import './style.css'; // Certifique-se de que o caminho para o CSS está correto
import { ArrowLeft } from 'lucide-react';

export default function EclipsesEEventos() {
    return (
        <div className='buraco--' style={{height:'200vh'}}>
            <div className="buraco-container">
                <h1 className="buraco-title">Eclipses e Eventos Cósmicos</h1>
                <h2 style={{fontWeight:'500', fontSize:'32px', color:'#000', marginBottom:'10px' , textAlign:'center' }}>Espectáculos Celestiais</h2>
                <p className="buraco-description">
                   Eclipses ocorrem quando um corpo celeste, como a Lua ou um planeta, passa na frente de outro, bloqueando a luz que normalmente chega até nós. Existem dois tipos principais: buraco solares e lunares.
                    <br />
                    Os eclipses solares acontecem quando a Lua passa entre a Terra e o Sol, bloqueando a luz solar parcial ou totalmente. Já os buraco lunares ocorrem quando a Terra passa entre o Sol e a Lua, projetando uma sombra sobre a Lua.
                    <br />
                    Outros eventos cósmicos, como chuvas de meteoros e conjunções planetárias, também proporcionam vistas espetaculares e oportunidades para observar o céu.
                </p>
                <img className="buraco-image" src={eclipse} alt="Imagem de Eclipses" />
            <Link to="/assuntos">
                <Button Icon={ArrowLeft} style={{backgroundColor:'#3b0764', border: '2px solid #93c5fd', marginLeft:'23rem', marginTop:'1rem'}} />
            </Link>
            </div>
        </div>
    );
}

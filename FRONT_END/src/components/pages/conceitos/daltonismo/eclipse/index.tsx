import { ArrowLeft } from 'lucide-react';
import eclipses from '../../../../imagen/eclipse.png'; // Atualize com o caminho correto para a imagem de eclipses
import '../astronomiaobsvacional/style.css'; // Certifique-se de que o caminho para o CSS está correto
import { Button } from '../../../../Button';
import { Link } from 'react-router-dom';

export default function EclipsesEEventosD() {
    return (
        <div className='astro'style={{height:'189vh'}}>
            <div className="astronomia-container" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', marginLeft:'15rem', marginTop: '1px' }}>
                <h1 className="astronomia-title">Eclipses e Eventos Cósmicos</h1>
                <h2 style={{fontWeight:'500', fontSize:'32px', color:'#000', marginBottom:'10px' , textAlign:'center' }}>Espectáculos Celestiais</h2>
                <p className="astronomia-description">
                    Eclipses ocorrem quando um corpo celeste, como a Lua ou um planeta, passa na frente de outro, bloqueando a luz que normalmente chega até nós. Existem dois tipos principais: eclipses solares e lunares.
                    <br />
                    Os eclipses solares acontecem quando a Lua passa entre a Terra e o Sol, bloqueando a luz solar parcial ou totalmente. Já os eclipses lunares ocorrem quando a Terra passa entre o Sol e a Lua, projetando uma sombra sobre a Lua.
                    <br />
                    Outros eventos cósmicos, como chuvas de meteoros e conjunções planetárias, também proporcionam vistas espetaculares e oportunidades para observar o céu.
                </p>
                <img id="img-eclipses" src={eclipses} alt="Imagem de Eclipses" style={{marginLeft:'15rem'}} />
                <div className="button-container">
                    <Link to="/assuntos-daltonismo">
                        <div id='botao'>
                        <Button Icon={ArrowLeft} style={{backgroundColor:'#3b0764', border: '2px solid #93c5fd', margin:'10px', marginLeft:'-2rem'}} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

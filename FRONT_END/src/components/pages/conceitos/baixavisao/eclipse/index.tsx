import { Link } from 'react-router-dom';
import eclipses from '../../../../imagen/eclipse.png'; // Atualize com o caminho correto para a imagem de eclipses
import { Button } from '../../../../Button';
import { ArrowLeft } from 'lucide-react';
import '../buraconegro/style.css'; // Certifique-se de que o arquivo CSS seja o mesmo usado nos outros componentes

export default function EclipsesEEventosBaixa() {
    return (
        <div className='formatacao-page-eclipse'style={{height:'329vh'}}>
            <div className='div-baixa-visao' style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', marginLeft:'4.5rem', marginTop: '1rem'}}>
                <h1 className='h1-baixa-visao'>Eclipses e Eventos Cósmicos</h1>
                <h2 style={{fontWeight:'500', fontSize:'32px', color:'#000', marginBottom:'10px' }}>Espectáculos Celestiais</h2>
                <p className='p-baixa-visao'>
                    Eclipses ocorrem quando um corpo celeste, como a Lua ou um planeta, passa na frente de outro, bloqueando a luz que normalmente chega até nós. Existem dois tipos principais: eclipses solares e lunares.
                    <br />
                    Os eclipses solares acontecem quando a Lua passa entre a Terra e o Sol, bloqueando a luz solar parcial ou totalmente. Já os eclipses lunares ocorrem quando a Terra passa entre o Sol e a Lua, projetando uma sombra sobre a Lua.
                    <br />
                    Outros eventos cósmicos, como chuvas de meteoros e conjunções planetárias, também proporcionam vistas espetaculares e oportunidades para observar o céu.
                </p>
                <img className='img-baixa-visao' src={eclipses} alt="Imagem de Eclipses" />
                <Link to="/assuntos-baixa-visao">
                    <Button Icon={ArrowLeft} style={{backgroundColor:'#3b0764', border: '2px solid #93c5fd', marginLeft:'2rem', marginTop:'2px'}} />
                </Link>
            </div>
        </div>
    );
}

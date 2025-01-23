import { ArrowLeft } from 'lucide-react';
import cometas_asteroides from '../../../../imagen/cometas.png'; // Atualize com o caminho correto para a imagem de cometas e asteroides
import '../astronomiaobsvacional/style.css'; // Certifique-se de que o caminho para o CSS está correto
import { Button } from '../../../../Button';
import { Link } from 'react-router-dom';

export default function CometasEAsteroidesD() {
    return (
        <div className='astro' style={{height:'130vh'}}>
            <div className="astronomia-container" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', marginLeft:'15rem', marginTop: '1px' }}>
                <h1 className="astronomia-title">Cometas e Asteroides</h1>
                <h2 style={{fontWeight:'500', fontSize:'32px', color:'#000', marginBottom:'10px' , textAlign:'center' }}>Vestígios do Sistema Solar</h2>
                <p className="astronomia-description">
                   Cometas são corpos celestes compostos principalmente de gelo e poeira que, ao se aproximarem do Sol, desenvolvem uma cauda brilhante visível. Asteroides são rochas espaciais que orbitam o Sol, principalmente no cinturão de asteroides entre Marte e Júpiter.
                    <br />
                    Estudar cometas e asteroides é importante porque eles são remanescentes da formação do sistema solar e podem fornecer pistas sobre as condições iniciais do nosso sistema planetário. Algumas missões espaciais, como a Rosetta, têm como alvo cometas para estudo detalhado.
                    <br />
                    Cometas e asteroides também representam riscos potenciais para a Terra, e entender suas órbitas ajuda a prever e mitigar possíveis impactos.
                </p>
            <img id="img-cometas" src={cometas_asteroides} alt="Imagem de Cometas e Asteroides" style={{width:'50%', marginLeft:'15rem'}} />
                <div className="button-container">
                    <Link to="/assuntos-daltonismo">
                        <Button Icon={ArrowLeft} style={{backgroundColor:'#3b0764', border: '2px solid #93c5fd', margin:'10px', marginLeft:'28rem'}} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

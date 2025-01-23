import { Link } from 'react-router-dom';
import { Button } from '../../../../Button';
import cometas_asteroides from '../../../../imagen/cometas.png'; // Atualize com o caminho correto para a imagem de buraco e asteroides
import './style.css'; // Certifique-se de que o caminho para o CSS está correto
import { ArrowLeft } from 'lucide-react';

export default function CometasEAsteroides() {
    return (
        <div className='buraco--' style={{height:'135vh'}}>
            <div className="buraco-container">
                <h1 className="buraco-title">Cometas e Asteroides</h1>
                <h2 style={{fontWeight:'500', fontSize:'32px', color:'#000', marginBottom:'10px' , textAlign:'center' }}>Vestígios do Sistema Solar</h2>
                <p className="buraco-description">
                   Cometas são corpos celestes compostos principalmente de gelo e poeira que, ao se aproximarem do Sol, desenvolvem uma cauda brilhante visível. Asteroides são rochas espaciais que orbitam o Sol, principalmente no cinturão de asteroides entre Marte e Júpiter.
                    <br />
                    Estudar cometas e asteroides é importante porque eles são remanescentes da formação do sistema solar e podem fornecer pistas sobre as condições iniciais do nosso sistema planetário. Algumas missões espaciais, como a Rosetta, têm como alvo buraco para estudo detalhado.
                    <br />
                    Cometas e asteroides também representam riscos potenciais para a Terra, e entender suas órbitas ajuda a prever e mitigar possíveis impactos.
                </p>
                <img className="buraco-image" src={cometas_asteroides} alt="Cometas e Asteroides" />
            <Link to="/assuntos">
                <Button Icon={ArrowLeft} style={{backgroundColor:'#3b0764', border: '2px solid #93c5fd', marginLeft:'23rem', marginTop:'1rem'}} />
            </Link>
            </div>
        </div>
    );
}

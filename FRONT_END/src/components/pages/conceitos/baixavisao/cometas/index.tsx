import { Link } from 'react-router-dom';
import cometas_asteroides from '../../../../imagen/cometas.png'; // Atualize com o caminho correto para a imagem de cometas e asteroides
import { Button } from '../../../../Button';
import { ArrowLeft } from 'lucide-react';
import '../buraconegro/style.css'; // Certifique-se de que o arquivo CSS seja o mesmo usado nos outros componentes

export default function CometasEAsteroidesBaixa() {
    return (
        <div className='formatacao-page-cometa' style={{height:'215vh'}}>
            <div className='div-baixa-visao' style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', marginLeft:'4.5rem', marginTop: '1rem' }}>
                <h1 className='h1-baixa-visao'>Cometas e Asteroides</h1>
                <h2 style={{fontWeight:'500', fontSize:'32px', color:'#000', marginBottom:'10px' }}>Vestígios do Sistema Solar</h2>
                <p className='p-baixa-visao'>
                    Cometas são corpos celestes compostos principalmente de gelo e poeira que, ao se aproximarem do Sol, desenvolvem uma cauda brilhante visível. Asteroides são rochas espaciais que orbitam o Sol, principalmente no cinturão de asteroides entre Marte e Júpiter.
                    <br />
                    Estudar cometas e asteroides é importante porque eles são remanescentes da formação do sistema solar e podem fornecer pistas sobre as condições iniciais do nosso sistema planetário. Algumas missões espaciais, como a Rosetta, têm como alvo cometas para estudo detalhado.
                    <br />
                    Cometas e asteroides também representam riscos potenciais para a Terra, e entender suas órbitas ajuda a prever e mitigar possíveis impactos.
                </p>
                <img className='img-baixa-visao' src={cometas_asteroides} alt="Imagem de Cometas e Asteroides" />
                <Link to="/assuntos-baixa-visao">
                    <Button Icon={ArrowLeft} style={{backgroundColor:'#3b0764', border: '2px solid #93c5fd', marginLeft:'2rem', marginTop:'2px'}} />
                </Link>
            </div>
        </div>
    );
}

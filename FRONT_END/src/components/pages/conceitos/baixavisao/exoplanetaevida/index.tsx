import { Link } from 'react-router-dom';
import exoplanetas from "../../../../imagen/exoplaneta.jpg"; // Atualize com o caminho correto para a imagem de exoplanetas
import { Button } from '../../../../Button';
import { ArrowLeft } from 'lucide-react';
import '../buraconegro/style.css'; // Certifique-se de que o arquivo CSS seja o mesmo usado nos outros componentes

export default function ExoplanetasEVidaExtraterrestreBaixa() {
    return (
        <div className='formatacao-page-exoplanetas' style={{height:'210vh'}}>
            <div className='div-baixa-visao' style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', marginLeft:'4.5rem', marginTop: '1rem' }}>
                <h1 className='h1-baixa-visao'>Exoplanetas e Vida Extraterrestre</h1>
                <h2 style={{fontWeight:'500', fontSize:'32px', color:'#000', marginBottom:'10px' }}>Mundos Além do Nosso Sistema Solar</h2>
                <p className='p-baixa-visao'>
                   Exoplanetas são planetas que orbitam estrelas fora do nosso sistema solar. A descoberta de exoplanetas é uma das áreas mais emocionantes da astronomia moderna, oferecendo pistas sobre a diversidade de mundos no universo.
                    <br />
                    A busca por vida extraterrestre também está em andamento, com esforços para identificar exoplanetas que possam ter condições habitáveis, como água líquida e atmosferas estáveis. Projetos como o SETI (Search for Extraterrestrial Intelligence) buscam sinais de vida inteligente fora da Terra.
                    <br />
                    Explorar exoplanetas e procurar vida fora da Terra pode revelar novas formas de vida e nos ajudar a entender se estamos sozinhos no universo.
                </p>
                <img className='img-baixa-visao' src={exoplanetas} alt="Imagem de Exoplanetas" />
                <Link to="/assuntos-baixa-visao">
                    <Button Icon={ArrowLeft} style={{backgroundColor:'#3b0764', border: '2px solid #93c5fd', marginLeft:'2rem', marginTop:'2px'}} />
                </Link>
            </div>
        </div>
    );
}

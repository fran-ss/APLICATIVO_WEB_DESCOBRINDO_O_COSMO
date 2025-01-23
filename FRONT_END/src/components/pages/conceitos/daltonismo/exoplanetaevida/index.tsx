import { ArrowLeft } from 'lucide-react';
import exoplanetas from "../../../../imagen/exoplaneta.jpg"; // Atualize com o caminho correto para a imagem de exoplanetas
import '../astronomiaobsvacional/style.css'; // Certifique-se de que o caminho para o CSS está correto
import { Button } from '../../../../Button';
import { Link } from 'react-router-dom';

export default function ExoplanetasEVidaExtraterrestreD() {
    return (
        <div className='astro' style={{height:'157vh'}}>
            <div className="astronomia-container" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', marginLeft:'15rem', marginTop: '1px' }}>
                <h1 className="astronomia-title">Exoplanetas e Vida Extraterrestre</h1>
                <h2 style={{fontWeight:'500', fontSize:'32px', color:'#000', marginBottom:'10px' , textAlign:'center' }}>Mundos Além do Nosso Sistema Solar</h2>
                <p className="astronomia-description">
                    Exoplanetas são planetas que orbitam estrelas fora do nosso sistema solar. A descoberta de exoplanetas é uma das áreas mais emocionantes da astronomia moderna, oferecendo pistas sobre a diversidade de mundos no universo.
                    <br />
                    A busca por vida extraterrestre também está em andamento, com esforços para identificar exoplanetas que possam ter condições habitáveis, como água líquida e atmosferas estáveis. Projetos como o SETI (Search for Extraterrestrial Intelligence) buscam sinais de vida inteligente fora da Terra.
                    <br />
                    Explorar exoplanetas e procurar vida fora da Terra pode revelar novas formas de vida e nos ajudar a entender se estamos sozinhos no universo.
                </p>
                <img id="img-exoplanetas" src={exoplanetas} alt="Imagem de Exoplanetas" style={{marginLeft:'10rem'}} />
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

import { Link } from 'react-router-dom';
import { Button } from '../../../../Button';
import exoplaneta from "../../../../imagen/exoplaneta.jpg"; // Atualize com o caminho correto para a imagem de exoplaneta
import './style.css'; // Certifique-se de que o caminho para o CSS está correto
import { ArrowLeft } from 'lucide-react';

export default function exoplanetaEVidaExtraterrestre() {
    return (
        <div className='buraco--' style={{height:'130vh'}}>
            <div className="buraco-container">
                <h1 className="buraco-title">Exoplaneta e Vida Extraterrestre</h1>
                <h2 style={{fontWeight:'500', fontSize:'32px', color:'#000', marginBottom:'10px' , textAlign:'center' }}>Mundos Além do Nosso Sistema Solar</h2>
                <p className="buraco-description">
                    Exoplanetas são planetas que orbitam estrelas fora do nosso sistema solar. A descoberta de exoplaneta é uma das áreas mais emocionantes da astronomia moderna, oferecendo pistas sobre a diversidade de mundos no universo.
                    <br />
                    A busca por vida extraterrestre também está em andamento, com esforços para identificar exoplaneta que possam ter condições habitáveis, como água líquida e atmosferas estáveis. Projetos como o SETI (Search for Extraterrestrial Intelligence) buscam sinais de vida inteligente fora da Terra.
                    <br />
                    Explorar exoplanetas e procurar vida fora da Terra pode revelar novas formas de vida e nos ajudar a entender se estamos sozinhos no universo.
                </p>
                <img className="buraco-image" src={exoplaneta} alt="Imagem de exoplaneta" style={{width:'500px'}} />
            <Link to="/assuntos">
                <Button Icon={ArrowLeft} style={{backgroundColor:'#3b0764', border: '2px solid #93c5fd', marginLeft:'20rem', marginTop:'0.5rem'}} />
            </Link>
            </div>
        </div>
    );
}

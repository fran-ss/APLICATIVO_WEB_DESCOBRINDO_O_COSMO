import { Link } from 'react-router-dom';
import { Button } from '../../../../Button';
import observacao_espacial from '../../../../imagen/observacional.png'; // Atualize com o caminho correto para a imagem de observação espacial
import '../buraconegro/style.css'; // Certifique-se de que o caminho para o CSS está correto
import { ArrowLeft } from 'lucide-react';

export default function AstronomiaObservacional() {
    return (
        <div className='buraco--' style={{height:'140vh'}}>
            <div className="buraco-container" style={{height:'140vh'}}>
                <h1 className="buraco-title">Astronomia Observacional</h1>
                <h2 style={{fontWeight:'500', fontSize:'32px', color:'#000', marginBottom:'10px' , textAlign:'center' }}>Explorando o Céu Noturno</h2>
                <p className="buraco-description">
                    A astronomia observacional é o estudo dos corpos celestes através da observação direta. Utiliza telescópios, binóculos e técnicas de imagem para explorar e mapear o universo.
                    <br />
                    Equipamentos como telescópios espaciais, como o Hubble, e telescópios terrestres são usados para capturar imagens e dados de estrelas, galáxias e outros objetos celestes. A identificação de constelações e o uso de mapas estelares ajudam os observadores a navegar pelo céu noturno.
                    <br />
                    Estudar astronomia observacional nos permite descobrir novos objetos, entender a estrutura do universo e apreciar a beleza do cosmos.
                </p>
                <img className="buraco-image" src={observacao_espacial} alt="Imagem de Observação Espacial" />
            <Link to="/assuntos">
                <Button Icon={ArrowLeft} style={{backgroundColor:'#3b0764', border: '2px solid #93c5fd', marginLeft:'23rem', marginTop:'2rem'}} />
            </Link>
            </div>
        </div>
    );
}

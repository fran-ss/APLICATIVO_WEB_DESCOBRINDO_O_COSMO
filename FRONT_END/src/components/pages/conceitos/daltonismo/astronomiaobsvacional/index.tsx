
import { Link } from 'react-router-dom';
import observacao_espacial from '../../../../imagen/observacional.png'; // Atualize com o caminho correto para a imagem de observação espacial
import './style.css'; // Certifique-se de que o caminho para o CSS está correto
import { Button } from '../../../../Button';
import { ArrowLeft } from 'lucide-react';

export default function AstronomiaObservacionalD() {
    return (
        <div className='astro' style={{height:'174vh'}}>
        <div className="astronomia-container" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', marginLeft:'15rem', marginTop: '1px' }}>
            <h1 className="astronomia-title">Astronomia Observacional</h1>
            <h2 style={{fontWeight:'500', fontSize:'32px', color:'#000', marginBottom:'10px' , textAlign:'center' }}>Explorando o Céu Noturno</h2>
            <p className="astronomia-description">
                A astronomia observacional é o estudo dos corpos celestes através da observação direta. Utiliza telescópios, binóculos e técnicas de imagem para explorar e mapear o universo.
                <br />
                Equipamentos como telescópios espaciais, como o Hubble, e telescópios terrestres são usados para capturar imagens e dados de estrelas, galáxias e outros objetos celestes. A identificação de constelações e o uso de mapas estelares ajudam os observadores a navegar pelo céu noturno.
                <br />
                Estudar astronomia observacional nos permite descobrir novos objetos, entender a estrutura do universo e apreciar a beleza do cosmos.
            </p>
            <img className="astronomia-image" src={observacao_espacial} alt="Imagem de Observação Espacial" />
            <Link to="/assuntos-daltonismo">
            <div id='botao'>
            <Button Icon={ArrowLeft} style={{backgroundColor:'#3b0764', border: '2px solid #93c5fd', margin:'10px', marginLeft:'-20px'}} />
            </div>
            </Link>
            </div>
        
            </div>
    );
}

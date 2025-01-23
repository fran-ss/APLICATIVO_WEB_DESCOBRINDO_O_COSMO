import { Link } from 'react-router-dom';
import observacao_espacial from '../../../../imagen/observacional.png'; // Atualize com o caminho correto para a imagem de observação espacial
import { Button } from '../../../../Button';
import { ArrowLeft } from 'lucide-react';
import './styles.css'

export default function AstronomiaObservacionalBaixa() {
    return (
        <div className='formatacao-page-astronomia' style={{height:'225vh'}}>
            <div className='div-baixa-visao' style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', marginLeft:'4.5rem', marginTop: '0' }}>
                <h1 className='h1-baixa-visao'>Astronomia Observacional</h1>
                <h2 style={{fontWeight:'500', fontSize:'32px', color:'#000', marginBottom:'10px' }}>Explorando o Céu Noturno</h2>
                <p className='p-baixa-visao'>
                    A astronomia observacional é o estudo dos corpos celestes através da observação direta. Utiliza telescópios, binóculos e técnicas de imagem para explorar e mapear o universo.
                    <br />
                    Equipamentos como telescópios espaciais, como o Hubble, e telescópios terrestres são usados para capturar imagens e dados de estrelas, galáxias e outros objetos celestes. A identificação de constelações e o uso de mapas estelares ajudam os observadores a navegar pelo céu noturno.
                    <br />
                    Estudar astronomia observacional nos permite descobrir novos objetos, entender a estrutura do universo e apreciar a beleza do cosmos.
                </p>
                <img className='img-baixa-visao' src={observacao_espacial} alt="Imagem de Observação Espacial" />
                <Link to="/assuntos-baixa-visao">
                    <Button Icon={ArrowLeft} style={{backgroundColor:'#3b0764', border: '2px solid #93c5fd', marginLeft:'2rem', marginTop:'2px'}} />
                </Link>
            </div>
        </div>
    );
}

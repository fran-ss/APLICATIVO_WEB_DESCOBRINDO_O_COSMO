import { Link } from 'react-router-dom';
import { Button } from '../../../../Button';
import tecnologia_espacial from '../../../../imagen/tecnoloia.png'; // Atualize com o caminho correto para a imagem de tecnologia espacial
import './style.css'; // Certifique-se de que o caminho para o CSS está correto
import { ArrowLeft } from 'lucide-react';

export default function TecnologiaEspacial() {
    return (
        <div className='buraco--' style={{height:'140vh'}}>
            <div className="buraco-container">
                <h1 className="buraco-title">Tecnologia Espacial e Satélites</h1>
                <h2 style={{fontWeight:'500', fontSize:'32px', color:'#000', marginBottom:'10px' , textAlign:'center' }}>Inovação e Aplicações</h2>
                <p className="buraco-description">
                   A tecnologia espacial envolve o desenvolvimento e uso de satélites e outros dispositivos para explorar e utilizar o espaço. Satélites são usados para comunicação, monitoramento do clima, navegação e pesquisa científica.
                    <br />
                    As tecnologias de propulsão espacial, como foguetes e motores iônicos, possibilitam a exploração do espaço profundo e a realização de missões interplanetárias. Além disso, inovações em tecnologia espacial têm impactos diretos na vida cotidiana, desde a previsão do tempo até a navegação GPS.
                    <br />
                    Avanços na tecnologia espacial continuam a expandir nossas capacidades e a explorar novos limites no espaço.
                </p>
                <img className="buraco-image" src={tecnologia_espacial} alt="Imagem de Tecnologia Espacial" />
            <Link to="/assuntos">
                <Button Icon={ArrowLeft} style={{backgroundColor:'#3b0764', border: '2px solid #93c5fd', marginLeft:'23rem', marginTop:'1rem'}} />
            </Link>
            </div>
        </div>
    );
}

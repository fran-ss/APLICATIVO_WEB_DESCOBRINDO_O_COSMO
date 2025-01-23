import { ArrowLeft } from 'lucide-react';
import tecnologia_espacial from '../../../../imagen/tecnoloia.png'; // Atualize com o caminho correto para a imagem de tecnologia espacial
import '../astronomiaobsvacional/style.css'; // Certifique-se de que o caminho para o CSS está correto
import { Button } from '../../../../Button';
import { Link } from 'react-router-dom';

export default function TecnologiaEspacialD() {
    return (
        <div className='astro' style={{height:'140vh'}}>
            <div className="astronomia-container" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', marginLeft:'15rem', marginTop: '1px' }}>
                <h1 className="astronomia-title">Tecnologia Espacial e Satélites</h1>
                <h2 style={{fontWeight:'500', fontSize:'32px', color:'#000', marginBottom:'10px' , textAlign:'center' }}>Inovação e Aplicações</h2>
                <p className="astronomia-description">
                    A tecnologia espacial envolve o desenvolvimento e uso de satélites e outros dispositivos para explorar e utilizar o espaço. Satélites são usados para comunicação, monitoramento do clima, navegação e pesquisa científica.
                    <br />
                    As tecnologias de propulsão espacial, como foguetes e motores iônicos, possibilitam a exploração do espaço profundo e a realização de missões interplanetárias. Além disso, inovações em tecnologia espacial têm impactos diretos na vida cotidiana, desde a previsão do tempo até a navegação GPS.
                    <br />
                    Avanços na tecnologia espacial continuam a expandir nossas capacidades e a explorar novos limites no espaço.
                </p>
                <img id="img-tecnologia" src={tecnologia_espacial} alt="Imagem de Tecnologia Espacial" style={{width:'500px', marginLeft:'15rem'}} />
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

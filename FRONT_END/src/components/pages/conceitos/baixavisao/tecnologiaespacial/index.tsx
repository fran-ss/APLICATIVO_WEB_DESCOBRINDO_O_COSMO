import { Link } from 'react-router-dom';
import tecnologia_espacial from '../../../../imagen/tecnoloia.png'; // Atualize com o caminho correto para a imagem de tecnologia espacial
import { Button } from '../../../../Button';
import { ArrowLeft } from 'lucide-react';
import '../buraconegro/style.css'; // Certifique-se de que o arquivo CSS seja o mesmo usado nos outros componentes

export default function TecnologiaEspacialBaixa() {
    return (
        <div className='formatacao-page' style={{height:'235vh'}}>
            <div className='div-baixa-visao' style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', marginLeft:'4.5rem', marginTop: '1rem' }}>
                <h1 className='h1-baixa-visao'>Tecnologia Espacial e Satélites</h1>
                <h1 style={{fontWeight:'500', fontSize:'32px', color:'#000', marginBottom:'10px' }}>Inovação e Aplicações</h1>
                <p className='p-baixa-visao'>
                   A tecnologia espacial envolve o desenvolvimento e uso de satélites e outros dispositivos para explorar e utilizar o espaço. Satélites são usados para comunicação, monitoramento do clima, navegação e pesquisa científica.
                    <br />
                    As tecnologias de propulsão espacial, como foguetes e motores iônicos, possibilitam a exploração do espaço profundo e a realização de missões interplanetárias. Além disso, inovações em tecnologia espacial têm impactos diretos na vida cotidiana, desde a previsão do tempo até a navegação GPS.
                    <br />
                    Avanços na tecnologia espacial continuam a expandir nossas capacidades e a explorar novos limites no espaço.
                </p>
                <img className='img-baixa-visao' src={tecnologia_espacial} alt="Imagem de Tecnologia Espacial" />
                <Link to="/assuntos-baixa-visao">
                    <Button Icon={ArrowLeft} style={{backgroundColor:'#3b0764', border: '2px solid #93c5fd', marginLeft:'2rem', marginTop:'2px'}} />
                </Link>
            </div>
        </div>
    );
}

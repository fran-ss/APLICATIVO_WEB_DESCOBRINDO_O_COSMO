import { Link } from 'react-router-dom';
import exploracao_espacial from '../../../../imagen/exploracao.png'; // Atualize com o caminho correto para a imagem de exploração espacial
import { Button } from '../../../../Button';
import { ArrowLeft } from 'lucide-react';
import '../buraconegro/style.css'; // Certifique-se de que o arquivo CSS seja o mesmo usado nos outros componentes

export default function ExploracaoEspacialBaixa() {
    return (
        <div className='formatacao-page-exploracao' style={{height:'200vh'}}>
            <div className='div-baixa-visao' style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', marginLeft:'4.5rem', marginTop: '1rem' }}>
                <h1 className='h1-baixa-visao'>Exploração Espacial</h1>
                <h2 style={{fontWeight:'500', fontSize:'32px', color:'#000', marginBottom:'10px' }}>Desbravando o Cosmos</h2>
                <p className='p-baixa-visao'>
                   A exploração espacial envolve o estudo e a investigação do espaço exterior por meio de missões espaciais, sondas e telescópios. É uma jornada contínua para descobrir novos mundos e entender melhor o nosso próprio sistema solar.
                    <br />
                    As missões espaciais têm revelado muitos segredos do universo, desde a estrutura de planetas e luas até a observação de estrelas distantes e galáxias. Exemplos notáveis incluem as missões Apollo à Lua e as sondas Voyager que exploram os confins do sistema solar.
                    <br />
                    Explorar o espaço nos ajuda a entender nosso lugar no universo e a desenvolver novas tecnologias que têm aplicações aqui na Terra.
                </p>
                <img className='img-baixa-visao' src={exploracao_espacial} alt="Imagem de Exploração Espacial" />
                <Link to="/assuntos-baixa-visao">
                    <Button Icon={ArrowLeft} style={{backgroundColor:'#3b0764', border: '2px solid #93c5fd', marginLeft:'2rem', marginTop:'2px'}} />
                </Link>
            </div>
        </div>
    );
}

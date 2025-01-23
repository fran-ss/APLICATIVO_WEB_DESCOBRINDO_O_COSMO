import { Link } from 'react-router-dom';
import { Button } from '../../../../Button';
import exploracao_espacial from '../../../../imagen/exploracao.png'; // Atualize com o caminho correto para a imagem de exploração espacial
import './style.css'; // Certifique-se de que o caminho para o CSS está correto
import { ArrowLeft } from 'lucide-react';

export default function ExploracaoEspacial() {
    return (
        <div className='buraco--' style={{height:'132vh'}}>
            <div className="buraco-container">
                <h1 className="buraco-title">Exploração Espacial</h1>
                <h2 style={{fontWeight:'500', fontSize:'32px', color:'#000', marginBottom:'10px' , textAlign:'center' }}>Desbravando o Cosmos</h2>
                <p className="buraco-description">
                   A exploração espacial envolve o estudo e a investigação do espaço exterior por meio de missões espaciais, sondas e telescópios. É uma jornada contínua para descobrir novos mundos e entender melhor o nosso próprio sistema solar.
                    <br />
                    As missões espaciais têm revelado muitos segredos do universo, desde a estrutura de planetas e luas até a observação de estrelas distantes e galáxias. Exemplos notáveis incluem as missões Apollo à Lua e as sondas Voyager que exploram os confins do sistema solar.
                    <br />
                    Explorar o espaço nos ajuda a entender nosso lugar no universo e a desenvolver novas tecnologias que têm aplicações aqui na Terra.
                </p>
                <img className="buraco-image" src={exploracao_espacial} alt="Imagem de Exploração Espacial" />
            <Link to="/assuntos">
                <Button Icon={ArrowLeft} style={{backgroundColor:'#3b0764', border: '2px solid #93c5fd', marginLeft:'23rem', marginTop:'1rem'}} />
            </Link>
            </div>
        </div>
    );
}

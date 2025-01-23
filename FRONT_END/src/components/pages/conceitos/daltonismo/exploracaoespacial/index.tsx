import { ArrowLeft } from 'lucide-react';
import exploracao_espacial from '../../../../imagen/exploracao.png'; // Atualize com o caminho correto para a imagem de exploração espacial
import '../astronomiaobsvacional/style.css'; // Certifique-se de que o caminho para o CSS está correto
import { Button } from '../../../../Button';
import { Link } from 'react-router-dom';

export default function ExploracaoEspacialD() {
    return (
        <div className='astro' style={{height:'157vh'}}>
            <div className="astronomia-container" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', marginLeft:'15rem', marginTop: '1px' }}>
                <h1 className="astronomia-title">Exploração Espacial</h1>
                <h2 style={{fontWeight:'500', fontSize:'32px', color:'#000', marginBottom:'10px' , textAlign:'center', marginLeft:'2.5rem' }}>Desbravando o Cosmos</h2>
                <p className="astronomia-description">
                    A exploração espacial envolve o estudo e a investigação do espaço exterior por meio de missões espaciais, sondas e telescópios. É uma jornada contínua para descobrir novos mundos e entender melhor o nosso próprio sistema solar.
                    <br />
                    As missões espaciais têm revelado muitos segredos do universo, desde a estrutura de planetas e luas até a observação de estrelas distantes e galáxias. Exemplos notáveis incluem as missões Apollo à Lua e as sondas Voyager que exploram os confins do sistema solar.
                    <br />
                    Explorar o espaço nos ajuda a entender nosso lugar no universo e a desenvolver novas tecnologias que têm aplicações aqui na Terra.
                </p>
                <img id="img-exploracao-espacial" src={exploracao_espacial} alt="Imagem de Exploração Espacial" style={{width:'800px'}} />
                <div className="button-container">
                    <Link to="/assuntos-daltonismo">
                        <div id='botao'>
                        <Button Icon={ArrowLeft} style={{backgroundColor:'#3b0764', border: '2px solid #93c5fd', margin:'10px'}} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

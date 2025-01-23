import { ArrowLeft } from 'lucide-react';
import sol from '../../../../imagen/sol.png'; // Atualize com o caminho correto para a imagem do Sol
import '../astronomiaobsvacional/style.css'; // Certifique-se de que o caminho para o CSS está correto
import { Button } from '../../../../Button';
import { Link } from 'react-router-dom';

export default function EstrelasD() {
    return (
        <div className='astro' style={{height:'177vh'}}>
            <div className="astronomia-container" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', marginLeft:'15rem', marginTop: '1px' }}>
                <h1 className="astronomia-title">Estrelas</h1>
                <h2 style={{fontWeight:'500', fontSize:'32px', color:'#000', marginBottom:'10px' , textAlign:'center' }}>As Fontes de Luz do Universo</h2>
                <p className="astronomia-description">
                    Estrelas são esferas gigantes de plasma que emitem luz e calor devido a reações nucleares em seus núcleos. Essas reações ocorrem por meio da fusão nuclear, onde átomos de hidrogênio se combinam para formar hélio, liberando uma enorme quantidade de energia.
                    <br />
                    As estrelas variam em tamanho, cor e luminosidade. Algumas são gigantescas e brilhantes, enquanto outras são menores e mais frias. Elas são classificadas em diferentes tipos com base em suas características, como a temperatura e o brilho.
                    <br />
                    O Sol é a estrela mais próxima da Terra e a fonte primária de luz e calor para o nosso planeta. Ele é uma estrela de tipo espectral G, com uma temperatura superficial de aproximadamente 5.500 graus Celsius. O Sol é fundamental para a vida na Terra, fornecendo a energia necessária para o crescimento das plantas, o clima e os ciclos naturais.
                    <br />
                    O Sol passa por um ciclo de aproximadamente 11 anos, conhecido como ciclo solar, que afeta a atividade solar, incluindo manchas solares e erupções solares. Entender o Sol é essencial para estudar o funcionamento de outras estrelas e o impacto que elas têm em seus sistemas planetários.
                    <br />
                    Estudar estrelas nos ajuda a compreender melhor a formação de sistemas estelares, a evolução das galáxias e os processos que sustentam a vida em planetas ao redor dessas estrelas.
                </p>
                <img id="img-sol" src={sol} alt="Imagem do Sol" style={{marginLeft:'22rem'}} />
                <div className="button-container">
                    <Link to="/assuntos-daltonismo">
                        <div id='botao'>
                        <Button Icon={ArrowLeft} style={{backgroundColor:'#3b0764', border: '2px solid #93c5fd', margin:'10px', marginLeft:'-20px'}} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

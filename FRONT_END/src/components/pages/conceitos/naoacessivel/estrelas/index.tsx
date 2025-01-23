import { Link } from 'react-router-dom';
import { Button } from '../../../../Button';
import sol from '../../../../imagen/sol.png'; // Atualize com o caminho correto para a imagem do Sol
import '../buraconegro/style.css'; // Certifique-se de que o caminho para o CSS está correto
import { ArrowLeft } from 'lucide-react';

export default function Estrelas() {
    return (
        <div className='buraco--' style={{height:'200vh'}}>
            <div className="buraco-container">
                <h1 className="buraco-title">Estrelas</h1>
                <h2 style={{fontWeight:'500', fontSize:'32px', color:'#000', marginBottom:'10px' , textAlign:'center' }}>As Fontes de Luz do Universo</h2>
                <p className="buraco-description">
                    Estrelas são esferas gigantes de plasma que emitem luz e calor devido a reações nucleares em seus núcleos. Essas reações ocorrem por meio da fusão nuclear, onde átomos de hidrogênio se combinam para formar hélio, liberando uma enorme quantidade de energia.
                    <br />
                    As estrelas variam em tamanho, cor e luminosidade. Algumas são gigantescas e brilhantes, enquanto outras são menores e mais frias. Elas são classificadas em diferentes tipos com base em suas características, como a temperatura e o brilho.
                    <br />
                    O Sol é a estrela mais próxima da Terra e a fonte primária de luz e calor para o nosso planeta. Ele é uma estrela de tipo espectral G, com uma temperatura superficial de aproximadamente 5.500 graus Celsius. O Sol é fundamental para a vida na Terra, fornecendo a energia necessária para o crescimento das plantas, o clima e os ciclos naturais.
                    <br />
                    O Sol passa por um ciclo de aproximadamente 11 anos, conhecido como ciclo solar, que afeta a atividade solar, incluindo manchas solares e erupções solares. Entender o Sol é essencial para estudar o funcionamento de outras buraco e o impacto que elas têm em seus sistemas planetários.
                    <br />
                    Estudar estrelas nos ajuda a compreender melhor a formação de sistemas estelares, a evolução das galáxias e os processos que sustentam a vida em planetas ao redor dessas buraco.
                </p>
                <img className="buraco-image" src={sol} alt="Imagem do Sol" />
            <Link to="/assuntos">
                <Button Icon={ArrowLeft} style={{backgroundColor:'#3b0764', border: '2px solid #93c5fd', marginLeft:'23rem', marginTop:'1rem'}} />
            </Link>
            </div>
        </div>
    );
}

import { Link } from 'react-router-dom';
import sol from '../../../../imagen/sol.png'; // Atualize com o caminho correto para a imagem do Sol
import { Button } from '../../../../Button';
import { ArrowLeft } from 'lucide-react';
import "../buraconegro/style.css"; // Certifique-se de que o arquivo CSS seja o mesmo usado nos outros componentes

import './styles.css'

export default function EstrelasBaixa() {
    return (
        <div className='formatacao-page-estrelas' style={{height:'160rem'}}>
            <div className='div-baixa-visao' style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', marginLeft:'4.5rem', marginTop: '1rem'}}>
                <h1 className='h1-baixa-visao' style={{fontWeight:'bold', color:'#000', margin:'1rem'}}>Estrelas</h1>
                <h2 style={{fontWeight:'500', fontSize:'32px', color:'#000', marginBottom:'10px' }}>As Fontes de Luz do Universo</h2>
                <p className='p-baixa-visao'>
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
                <img className='img-baixa-visao' src={sol} alt="Imagem do Sol" />
                <Link to="/assuntos-baixa-visao">
                    <Button Icon={ArrowLeft}  style={{backgroundColor:'#3b0764', border: '2px solid #93c5fd', marginLeft:'2rem', marginTop:'2px'}}/>
                </Link>
            </div>
        </div>
    );
}

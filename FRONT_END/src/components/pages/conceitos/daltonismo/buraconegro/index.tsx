import { ArrowLeft} from 'lucide-react';
import buraco_negro from '../../../../imagen/buraco_negro.png';
import '../astronomiaobsvacional/style.css'; // Certifique-se de que o caminho para o CSS está correto
import { Button } from '../../../../Button';
import { Link } from 'react-router-dom';

export default function BuracoNegroD() {
    return (
        <div className='astro' style={{height:'182vh'}}>
            <div className="astronomia-container" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', marginLeft:'15rem', marginTop: '1px' }}>
                <h1 className="astronomia-title">Buraco Negro</h1>
                <h2 style={{fontWeight:'500', fontSize:'32px', color:'#000', marginBottom:'10px' , textAlign:'center' }}>Explorando o Mistério do Cosmos</h2>
                <p className="astronomia-description" style={{lineHeight:'1.7'}}>
                   Os buracos negros são alguns dos objetos mais fascinantes e misteriosos do universo. Eles se formam quando uma estrela muito grande colapsa sob a própria gravidade no final de sua vida. Imagine um ponto no espaço onde a gravidade é tão intensa que nada, nem mesmo a luz, pode escapar. Esse é o buraco negro!
                    <br />
                    A "borda" de um buraco negro é chamada de horizonte de eventos. É o limite além do qual nada pode retornar. Dentro deste horizonte, a atração gravitacional é tão poderosa que toda matéria e radiação são sugadas, tornando o buraco negro invisível. Apesar de serem invisíveis, os cientistas podem detectar buracos negros observando os efeitos que têm sobre objetos ao seu redor, como estrelas ou gás.
                    <br />
                    Estudar buracos negros ajuda os cientistas a entender melhor a física do universo, incluindo as forças que moldam galáxias e os fundamentos da teoria da relatividade de Einstein. Apesar de serem um dos mistérios mais intrigantes da astronomia, ainda há muito a aprender sobre esses fenômenos cósmicos!
                </p>
                <img id="img-fundo" src={buraco_negro} alt="Exemplo"/>
               <Link to="/assuntos-daltonismo">

                <div id='botao'>
                <Button Icon={ArrowLeft} style={{backgroundColor:'#3b0764', border: '2px solid #93c5fd', margin:'10px', marginTop:'2px'}} />
                </div>

                </Link>
            </div>

        </div>
    );
}

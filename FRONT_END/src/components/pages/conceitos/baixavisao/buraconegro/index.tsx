
import { Link } from 'react-router-dom';
import buraco_negro from '../../../../imagen/buraco_negro.png'
import "./style.css"
import { Button } from '../../../../Button';
import { ArrowLeft } from 'lucide-react';
export default function BuracoNegroBaixa() {
    return (
        <div className='formatacao-page-buraco-negro' style={{height:'200vh'}}>
        <div className='div-baixa-visao' style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', marginLeft:'4.5rem', marginTop: '1rem' }}>
            <h1 className='h1-baixa-visao' style={{fontWeight:'bold', color:'#000', margin:'1rem'}}>Buraco Negro</h1>
            <h2 style={{fontWeight:'500', fontSize:'32px', color:'#000', marginBottom:'10px' }}>Explorando o Mistério do Cosmos</h2>
            <p className='p-baixa-visao' style={{fontWeight:'400', color:'#000'}}>
                Os buracos negros são alguns dos objetos mais fascinantes e misteriosos do universo. Eles se formam quando uma estrela muito grande colapsa sob a própria gravidade no final de sua vida. Imagine um ponto no espaço onde a gravidade é tão intensa que nada, nem mesmo a luz, pode escapar. Esse é o buraco negro!
                <br />
                A "borda" de um buraco negro é chamada de horizonte de eventos. É o limite além do qual nada pode retornar. Dentro deste horizonte, a atração gravitacional é tão poderosa que toda matéria e radiação são sugadas, tornando o buraco negro invisível. Apesar de serem invisíveis, os cientistas podem detectar buracos negros observando os efeitos que têm sobre objetos ao seu redor, como estrelas ou gás.
                <br />
            </p>
           
           
         <img className='img-baixa-visao' src={buraco_negro} alt="Exemplo" />
         <Link to="/assuntos-baixa-visao">
        <Button Icon={ArrowLeft} style={{backgroundColor:'#3b0764', border: '2px solid #93c5fd', marginLeft:'2rem', marginTop:'2px'}} />
      </Link>
        </div>
        </div>
    );
}

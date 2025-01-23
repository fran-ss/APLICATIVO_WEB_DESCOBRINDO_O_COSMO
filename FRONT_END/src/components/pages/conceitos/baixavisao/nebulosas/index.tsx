import { Link } from 'react-router-dom';
import nebula from '../../../../imagen/nebula.png'; // Atualize com o caminho correto para a imagem de nebulosa
import { Button } from '../../../../Button';
import { ArrowLeft } from 'lucide-react';
import '../buraconegro/style.css'; // Certifique-se de que o arquivo CSS seja o mesmo usado nos outros componentes

export default function NebulosasBaixa() {
    return (
        <div className='formatacao-page-nebulosas' style={{height:'300vh'}}>
            <div className='div-baixa-visao' style={{backgroundColor: 'rgba(255, 255, 255, 0.9)', marginLeft:'4.5rem', marginTop: '1rem' }}>
                <h1 className='h1-baixa-visao' style={{marginBottom:'10px'}}>Nebulosas</h1>
                <h2 style={{fontWeight:'500', fontSize:'32px', color:'#000', marginBottom:'10px' }}>As Berçários das Estrelas</h2>
                <p className='p-baixa-visao'>
                    As nebulosas são vastas nuvens de gás e poeira no espaço que desempenham um papel crucial na formação de estrelas e sistemas planetários. São como gigantescos berçários cósmicos, onde novas estrelas estão constantemente nascendo.
                    <br />
                    Existem diferentes tipos de nebulosas, cada uma com suas características únicas:
                    <br />
                    - Nebulosas de Emissão: Estas nebulosas emitem luz própria devido ao gás ionizado por estrelas jovens e quentes que estão nascendo dentro delas. Um exemplo famoso é a Nebulosa de Órion, visível a olho nu no céu noturno.
                    <br />
                    - Nebulosas de Reflexão: Essas nebulosas não emitem luz própria, mas refletem a luz das estrelas próximas. Elas costumam aparecer azuis porque a luz azul é espalhada mais eficientemente do que outras cores.
                    <br />
                    - Nebulosas de Absorção (ou Escuras): Essas nebulosas são densas e opacas, bloqueando a luz das estrelas e das nebulosas mais distantes. Elas são frequentemente vistas como manchas escuras contra o fundo brilhante de uma nebulosa de emissão ou de reflexão.
                    <br />
                    - Nebulosas Planetárias: São formadas quando uma estrela semelhante ao Sol atinge o final de sua vida e expulsa suas camadas externas. O núcleo exposto da estrela quente ilumina as camadas expulsas, criando uma estrutura muitas vezes com formato esférico.
                    <br />
                    Estudar as nebulosas nos ajuda a entender melhor os processos de formação estelar e a evolução do cosmos. Elas não são apenas belas a olho nu, mas também fornecem insights valiosos sobre a vida e a morte das estrelas!
                </p>
                <h6 className='link-referencia'>https://nssdc.gsfc.nasa.gov/photo_gallery/photogallery-astro-nebula.html</h6>
                <img className='img-baixa-visao' src={nebula} alt="Imagem de Nebulosa" />
                <Link to="/assuntos-baixa-visao">
                    <Button Icon={ArrowLeft} style={{backgroundColor:'#3b0764', border: '2px solid #93c5fd', marginLeft:'2rem', marginTop:'2px'}} />
                </Link>
            </div>
        </div>
    );
}

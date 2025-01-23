import { ArrowRight } from 'lucide-react';
import { Button } from '../../Button';
import  image1  from '../../imagen/1.png';
import  image2  from '../../imagen/2.png';
import  image3  from '../../imagen/3.png';
import  image4  from '../../imagen/4.png';
import  image5  from '../../imagen/5.png';

import './styles.css';
import { Link } from 'react-router-dom'
export function Story() {
  return (
    <div className="story-container" style={{height:'815vh'}}>
      <div >
      <h2>O SEGREDO DA LUA</h2>
      <Link to="/acessivel">
    <p id='segredo' style={{color:'#ffff', marginTop:'-5rem', fontSize: '24px'}}>Pular a história</p>
  </Link>
      </div>
      
      <div className="image-gallery">
        <img src={image1} alt="Imagem 1" className="story-image" />
        <img src={image2} alt="Imagem 2" className="story-image" />
        <img src={image3} alt="Imagem 3" className="story-image" />
        <img src={image4} alt="Imagem 4" className="story-image" />
        <img src={image5} alt="Imagem 5" className="story-image" />
        
      </div>
      <Link to="/acessivel">
    <Button Icon={ArrowRight}  style={{backgroundColor:'#3b0764', border: '2px solid #93c5fd', marginTop:'-8rem', marginLeft:'2rem'}} />
    <p style={{color:'#3b0764', marginTop:'-5rem', marginLeft:'1.5rem'}}>Acessar o Menu</p>
  </Link>
    </div>
  );
}
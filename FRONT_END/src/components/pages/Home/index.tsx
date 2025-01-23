

import { Link } from 'react-router-dom';

import "./style.css";



export default function Home() {

  return (
    <div id="page_1">
      

      <div>
        <h2>Bem-Vindo ao</h2>
        <h1>Explorando o cosmos</h1>
        <div id="login">
          
        <Link to="/Login" className="link-sem-sublinhado">
        <h2 className="link-borda">Login</h2>
      </Link>
      <Link to="/Register" className="link-sem-sublinhado">
        <h2 className="link-borda">Register</h2>
      </Link>
         
        </div>
      </div>
      
     
      <div className="cosmos-background"></div>
      <div className="stars"></div>
      


     


    </div>
  );
}

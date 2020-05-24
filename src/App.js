import React,{Fragment, useState} from 'react';
//Instalamos emotion (npm i @emotion/core @emotion/styled) y lo importamos:
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div `
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button `
  background: -webkit-linear-gradient(top left, #007d35 0%,  #007d35 40%,  #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

function App() {

  //Hook useState para frases
  const [frase, guardarFrase] = useState({});

  //Con Fecth API
  /*
  const consultarAPI = () => {
    //console.log('consultando...');
    const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = api.then(r => r.json());
    frase.then(r => console.log(r));
    console.log(frase);
  }
  */

  //Con Async/Await
  const consultarAPI = async() => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    guardarFrase(frase[0]);
  }

  return (
    <Fragment>
      <Contenedor>
        <Frase 
          frase={frase}
        />
        <Boton
          //Si se quiere que la función llame automaticamente sin esperar a clickar el 
          // Botón entonces se debería llamar así: consultarAPI()
          onClick={consultarAPI} //Es lo mismo que hacer esto: () => consultarAPI() 
        >
          Obtener Frase
        </Boton>
      </Contenedor>
    </Fragment>
  );
}

export default App;

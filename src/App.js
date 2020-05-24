import React,{Fragment} from 'react';
//Instalamos emotion (npm i @emotion/core @emotion/styled) y lo importamos:
import styled from '@emotion/styled';

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

  const consultarAPI = () => {
    console.log('consultando...');
  }

  return (
    <Fragment>
      <Contenedor>
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

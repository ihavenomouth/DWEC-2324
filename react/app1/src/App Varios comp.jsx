import './App.css';

import Encabezado from './componentes/Encabezado';
import Saludo from './componentes/Saludo';
import Resultado from './componentes/Resultado';
import Nota from './componentes/Nota';

const App = () =>{

  return (<>
    <Encabezado/>
    <Saludo nombre="Pablo"/>
    <Saludo/>

    <Resultado>
      <Saludo nombre="Pablo"/>
      <p>Este es el resultado:</p>
      <p>34 + 12 = <strong>46</strong></p>
    </Resultado>

    <h1>Renderizado condicional</h1>
    <Nota titulo="Hola">
      <p>Hola caracola es un saludo típico</p>
    </Nota>

    <Nota></Nota>

  </>);
}

export default App;

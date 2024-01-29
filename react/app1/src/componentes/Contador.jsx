
import { useState } from "react";

const Contador = () =>{
  const [contador, setContador] = useState(0);
  const incrementar = () =>{
    setContador( contador + 1 );
  }

  return (<>
    <h2>Contador</h2>
    <p>Ejempo de uso del hook useState.</p>
    <button onClick={incrementar}>Incrementar</button>
    <button onClick={()=> setContador(contador-1)}>Decrementar</button>
    <div className="resultado">{contador}</div>
    </>);
}

export default Contador;
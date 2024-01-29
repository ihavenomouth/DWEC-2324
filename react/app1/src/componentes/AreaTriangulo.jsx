import { useState } from "react";

const AreaTriangulo = () =>{
  const [alto, setAlto] = useState(0);
  const [ancho, setAncho] = useState(0);

  return (<>
    <h2>Calcular el área de un triángulo</h2>
    <label>Alto</label><br/>
    <input type="number" defaultValue="0" 
      onChange={e=>setAlto(e.target.value)}/><br/>
    <br/>

    <label>Ancho</label><br/>
    <input type="number" defaultValue="0" 
      onChange={e=>setAncho(e.target.value) }/><br/>
    
    <div className="resultado">{ancho*alto/2}</div>
    </>)
}
export default AreaTriangulo;
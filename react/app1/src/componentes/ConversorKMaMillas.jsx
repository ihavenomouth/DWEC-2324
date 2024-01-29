import { useRef } from 'react';

const ConversorKMaMillas = () =>{
  const refKM = useRef();
  const refResultado = useRef();

  const convertir = () =>{
    const km = refKM.current.value;
    const millas = km * 0.621371;
    refResultado.current.innerHTML = `${km} km son ${millas} millas`;
  }
  return (<>
    <h2>Conversor de Km a millas</h2>
    <label>Kilómetros</label><br/>
    <input ref={refKM} type="number" defaultValue="0"></input><br/>
    <button onClick={convertir}>Convertir</button>
    <p ref={refResultado}></p>
    </>)
}
export default ConversorKMaMillas;
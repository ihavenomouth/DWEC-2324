import {useAtom } from 'jotai';
import { contadorAtom } from '../jotai/state.js';

const JotaiContador = () => {
  const [contador, setContador] = useAtom(contadorAtom);

  return (<>
  <button onClick={() => setContador(contador+1)}>Incrementar</button>
  <p>Contador: {contador}</p>
  </>)
}

export default JotaiContador;

import {useAtom } from 'jotai';
import { contadorAtom, productoAtom } from '../jotai/state.js';

const JotaiMostrarDatos = () => {
  
  const [contador, setContador] = useAtom(contadorAtom);
  const [producto, setProducto] = useAtom(productoAtom);
  
  return (
    <>
      <div>Contador: {contador}</div>
      <div>Producto {producto.id}: {producto.nombre}</div>
    </>
  )
}

export default JotaiMostrarDatos;
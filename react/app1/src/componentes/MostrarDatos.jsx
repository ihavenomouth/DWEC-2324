import { useAppContext } from '../context/AppContext';

function MostrarDatos() {
  const { nombre,edad } = useAppContext();

  return (<>
  <p>Nombre ingresado: {nombre}</p>
  <p>Edad ingresada: {edad}</p>
  </>);
}
export default MostrarDatos;
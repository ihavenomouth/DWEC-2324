import Menu from '../componentes/Menu';
import Formulario from '../componentes/Formulario';
import MostrarDatos from '../componentes/MostrarDatos';
import { AppContextProvider } from '../context/AppContext';

const Saludo = () => {
  return (<>
    <Menu />
    <h2>Hola caracola</h2>
    <AppContextProvider>
      <Formulario />
      <MostrarDatos />

    </AppContextProvider>
  </>);
}
export default Saludo;
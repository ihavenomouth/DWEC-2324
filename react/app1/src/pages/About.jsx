import Menu from '../componentes/Menu';
import ListaEmoji from '../componentes/ListaEmoji';
import ControlEdad from '../componentes/ControlEdad';
import ContadorEdad from '../componentes/ContadorEdad';

const About = () => {
  return (<>
    <Menu />
    <h2>Acerca de...</h2>
    <ListaEmoji/>
    <br/>
    <br/>
    <ControlEdad />
    <ContadorEdad />
  </>);
}
export default About;
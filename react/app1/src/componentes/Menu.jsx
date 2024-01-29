import {Link} from 'react-router-dom';

const Menu = () => {
  return(<>
    <nav className="menu">
      <ul>
        <li><Link to={'/'}>Inicio</Link></li>
        <li><Link to={'/about'}>Acerca de...</Link></li>
        <li><Link to={'/saludo'}>Saludo</Link></li>
      </ul>
    </nav>
  </>);
}

export default Menu;
import Menu from '../componentes/Menu';

const Saludo = () => {
  return (<>
    <Menu />
    <h2>Hola caracola</h2>
    <form>
      <label>Dato</label><br/>
      <input type="text"></input><br/>
      <br/>
      <button>Acción</button>
    </form>
  </>);
}
export default Saludo;
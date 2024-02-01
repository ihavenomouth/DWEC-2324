import { useAppContext } from '../context/AppContext';

function Formulario() {
  const { setNombre, setEdad } = useAppContext();

  return (
    <div className="resultado">
      <label>Nombre:</label><br/>
      <input type="text" onChange={ev => setNombre(ev.target.value)} /><br/>
      <label>Edad:</label><br/>
      <input type="number" defaultValue="0" onChange={ev => setEdad(ev.target.value)} /><br />
    </div>
  );
}
export default Formulario;
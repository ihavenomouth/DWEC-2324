import useStore  from "../zustand/state";

function ControlEdad() {
  const incEdad = useStore( (state) => state.incEdad );
  const resetEdad = useStore( (state) => state.resetEdad );

  return (<>
    <button onClick={incEdad}>Incrementar</button>
    <button onClick={resetEdad}>Resetear</button>
  </>);
}

export default ControlEdad;
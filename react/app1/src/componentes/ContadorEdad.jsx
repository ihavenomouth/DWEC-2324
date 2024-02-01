import useStore from "../zustand/state";

function ContadorEdad() {
  const edad = useStore( (state) => state.edad  )
  return <div className="resultado">Tienes {edad} años</div>
}

export default ContadorEdad;
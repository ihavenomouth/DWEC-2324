/* eslint-disable react/prop-types */

// Componente ListaElementosDesaparece
import { useState } from "react";

const ListaElementosDesaparecen =  ({elementos}) =>{
  const [arrElementos, setArrElementos] = useState(elementos);

  const quitarElemento = (i) =>{
    let nuevoArray = [...arrElementos.slice(0, i), ...arrElementos.slice(i+1)];
    setArrElementos(nuevoArray);
  }

  if (arrElementos.length == 0)
    return <p>No hay elementos que mostrar</p>
  else
    return (<>
      <ul>
      {
        arrElementos.map( (e, i) => {
          return <li onClick={()=> {quitarElemento(i)}} key={i}>{e}</li>
        })
      }
      </ul>
    </>);
}

export default ListaElementosDesaparecen;
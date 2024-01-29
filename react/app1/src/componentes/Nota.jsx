/* eslint-disable react/prop-types */

const Nota = ({titulo, children}) => {
  return (
    titulo ?
      <details><summary>{titulo}</summary>{children}</details>
    :
      <p>No hay nada que mostrar.</p> 
  );
}

export default Nota;
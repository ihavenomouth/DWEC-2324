/* eslint-disable react/prop-types */


const Saludo = ({nombre}) =>{

  return(
    <p>Hola {nombre ? nombre: "desconocido" } </p>
  );
}

export default Saludo;
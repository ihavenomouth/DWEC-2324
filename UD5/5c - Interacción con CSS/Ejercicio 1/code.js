"use strict";


// Al pulsar el botón se cambia la regla 2 (que es la que se aplica a las
// etiquetas button), concretamente la propiedad del color de fondo.
// En lugar de buscar todos los botones del documento y modificar uno 
// a uno su color, simplemente modificamos la regla CSS y que se encargue
// el navegador.
document.querySelector("#btnColor").addEventListener("click", e=>{
  document.styleSheets[0].cssRules[2].style.backgroundColor="#47adad";
});


// Recuperamos la etiqueta que enlaza las hojas de estilos
let hojaDeEstilos = document.querySelector("#hojaDeEstilos");

// Usamos un booleano para indicar el tema elegido
let temaClaro = true;

document.querySelector("#btnModo").addEventListener("click", e=>{

  // Al pulsar el botón se cambia la hoja de estilos y se 
  // cambia la variable del tema
  if(temaClaro)
    hojaDeEstilos.href="style2.css";
  else
    hojaDeEstilos.href="style.css";

  temaClaro=!temaClaro;
})

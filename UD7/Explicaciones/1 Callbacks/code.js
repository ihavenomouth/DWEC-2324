"use strict";

/**
 * Muestra el resultado en la web
 * @param {Number} resultado
 * @param {HTMLElement} divRes Elemento en el que se mostrará el resultado 
 */
const imprimeResultado = (resultado, divRes) => {
  console.log("El resultado es " + resultado);
  divRes.innerHTML = "El resultado es " + resultado;
}



/**
 * Realiza la suma de dos números y llama a la función de callback
 * para mostrar el resultado en la web
 * @param {Number} x Primer sumando
 * @param {Number} y Segundo sumando
 * @param {Function} cb Función que tratará el resultado
 * @param {HTMLElement} divRes Elemento en el que se mostrará el resultado
 */
const sumarCB = (x, y, cb, divRes) => {
  const res = x + y;
  cb(res, divRes);
}




document.querySelector("#btnAccion").addEventListener('click', 
  e=>{
    const divResultado = document.querySelector("#divResultado");
    sumarCB(3, 4, imprimeResultado, divResultado);
  }
);


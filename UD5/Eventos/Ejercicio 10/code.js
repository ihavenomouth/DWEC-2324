"use strict";

const generarArrayDatos = contenido =>{
  let a = contenido.split("\n");
  a.shift(); // Quitamos la primera línea de la cabecera
  return a.map( s=>Number(s.split(",")[1] )); // Nos quedamos sólo con los valores numéricos
}

/**
 * Genera una gráfica de barras horizontales
 * @param {Array} arrDatos - Array de valores numéricos 
 */
const generarGráfica = arrDatos => {

  let max = Math.max( ...arrDatos );
  let factorMult = 500/max;

  for(let gasto of arrDatos){
    output.innerHTML+=`<div style="width:${factorMult * gasto}px">${gasto}</div>`;
  }
}

/////////////////
// MAIN
//////////////////

// Variable que contiene los datos del fichero
let contenido;

// Código que leer de un fichero
const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector(".output");

fileInput.addEventListener("change", async () => {
  const [file] = fileInput.files;

  if (file) {
    contenido = await file.text();
    let arrDatos = generarArrayDatos(contenido);
    generarGráfica(arrDatos);
  }
});
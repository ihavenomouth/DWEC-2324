"use strict";

/////////////////
// Ejercicio 5a-6
/////////////////

/////// Primera aproximación
/*document.querySelector("#tabla").addEventListener('click', (e)=>{
  const elemento = e.target; //el elemento más interno
  if(elemento.tagName == "TR") return;
  if (elemento.tagName == "TABLE") return;
  if(elemento.tagName == "TD"){
    elemento.parentElement.classList.add("amarillo");
  }
});
*/

/////// Segunda aproximación
/*const quitarFondo = () =>{
  document.querySelectorAll("#tabla td").forEach(elem => {
    elem.classList.remove("amarillo");
  });
  document.querySelectorAll("#tabla tr").forEach(elem => {
    elem.classList.remove("amarillo");
  });
}

document.querySelector("#tabla").addEventListener('click', (e)=>{
  quitarFondo();

  const td = e.target.closest('td'); //el td más cercano al elemento más interno
  const tr = td.parentElement;
  tr.classList.add("amarillo");
});
*/

///// Solución final
const quitarFondo = () =>{
  document.querySelectorAll("#tabla td").forEach(elem => {
  elem.classList.remove("amarillo");
  });
  document.querySelectorAll("#tabla tr").forEach(elem => {
    elem.classList.remove("amarillo");
  });
}

document.querySelector("#tabla").addEventListener('click', (e)=>{
  quitarFondo();

  const td = e.target.closest('td'); //el td más cercano al elemento más interno
  const tr = td.parentElement;
  tr.classList.add("amarillo");

  //¿En qué columna está?
  let i = 0;
  for( ; i<tr.childElementCount ; i++){
    if(tr.children[i] === td ) break;
  }

  // let i = Array.from(tr.children).indexOf(td) // alternativa propuesta por ChatGPT

  document.querySelectorAll(`td:nth-child( ${i+1})`).forEach(elem => {
    elem.classList.add("amarillo");
  });
});
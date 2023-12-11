"use strict";

const parrafo = document.querySelector("#parrafo");
const txtClase = document.querySelector("#txtClase");


document.querySelector("#btnAnadir").addEventListener("click", e=>{
  parrafo.classList.add( txtClase.value.trim() );
  parrafo.textContent = parrafo.className;
});


document.querySelector("#btnEliminar").addEventListener("click", e=>{
  parrafo.classList.remove(txtClase.value.trim());
  parrafo.textContent = parrafo.className;
});



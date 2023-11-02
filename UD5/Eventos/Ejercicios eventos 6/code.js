"use strict";

/////////////////
// Ejercicio 5a-6
/////////////////
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

const divEj5a6 = document.querySelector("#divEj5a6");
const ene = document.querySelector("#ene");
let eneX = 0;
let eneY = 0;
let puntos = 0;
let velocidadEne = 1;

const mueveEne =()=>{
	eneX+=velocidadEne;
	ene.style.right = eneX + "px";
	requestAnimationFrame(mueveEne);
};
mueveEne();

ene.addEventListener("click", e=>{
  eneX=0;
  eneY = getRndInteger(0,400);
  ene.style.top = eneY+'px';
  velocidadEne++;
  puntos +=50;
  divEj5a6.innerHTML="Puntos: "+puntos;
});
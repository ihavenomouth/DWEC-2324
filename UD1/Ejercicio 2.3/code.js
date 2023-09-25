"use strict";

/////////////
// FUNCTIONS
////////////////

function volumenEsfera(){
	let vol1 = 4/3 * Math.PI * (1**3);
	let vol2 = 4/3 * Math.PI * (2**3);
	console.log("Vol esfera radio 1 = " + vol1);
	console.log("Vol esfera radio 2 = " + vol2);
}

//////////////
//MAIN
/////////////


// 1.- Recupero el botón
let btnEmpezar = document.getElementById("btnEmpezar");

//2.- Le añado un eventListener
btnEmpezar.addEventListener('click', volumenEsfera);
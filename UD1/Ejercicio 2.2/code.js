"use strict";

//////////////////
// FUNCTIONS
//////////////////

/**
 * Calcular
 * Calcula la media
 */
function calcular(){
	let notaMedia = (4 + 8 + 9 + 7 + 1 + 6) / 6;
	console.log("El resultado es " +  notaMedia);

}

/**
 * Sumar - Devuelva la suma de dos parámetros
 * @param {Number} a - El primer sumando
 * @param {Number} b - El segundo sumando
 * @returns Devuelve la suma
 */
function sumar(a,b){
	return a+b;
}


///////////////////
// MAIN
//////////////////

let btnEmpezar = document.getElementById("btnEmpezar");
btnEmpezar.addEventListener('click', calcular);


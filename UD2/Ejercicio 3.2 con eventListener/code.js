"use strict";


//////////////
// FUNCTIONS
///////////////////

function calcularArea(){
	//1.- Recuperamos el radio del círculo
	let radio = Number(document.getElementById("txtRadio").value);

	//2.- Calculamos el área
	let area = Math.PI * radio * radio;
	
	//3.- Mostramos el resultado
	let divResultado = document.getElementById("divResultado");
	divResultado.innerHTML = `<p><strong>Área:</strong> ${area}</p>`;
}

//////////////////
// MAIN
/////////////

//1.- Recupero la etiqueta del botón y le asigno un addEventListener
let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener('click', calcularArea);

// let btnCalcular = document.querySelector("#btnCalcular");


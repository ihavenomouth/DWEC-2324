"use strict";


//////////////////
// FUNCTIONS
//////////////////

/**
 * Cambia el contenido de la tarjeta, si se está mostrando la cara muestra el revés y viceversa
 * @param {Number} i 
 */
function resolver(i) {

	let dp = document.querySelector(`main > div:nth-child(${i+1})`);

	if (arrPreguntaCara[i]) {
		dp.innerHTML = `<p>${arrPreguntas[i][1]}</p><button onclick="marcarAcertada(${i})">Acertada</button>`;
	}
	else {
		dp.innerHTML = `<p>${arrPreguntas[i][0]}</p>`;
	}

	// Indicamos que se está mostrando lo contrario que se mostraba antes
	arrPreguntaCara[i] = !arrPreguntaCara[i];
}

/**
 * Marca como acertada la pregunta iésima
 * @param {Number} i 
 */
function marcarAcertada(i) {
	arrPreguntasAcertadas[i] = true;
}

/**
 * Calcula la nota final y lo muestra en una división
 */
function calcularNotaFinal(){
	let divResultado = document.getElementById('divResultado');
	let acertadas=0;

	for(let p of arrPreguntasAcertadas){
		if(p){
			acertadas++;
		}
	}

	divResultado.innerHTML = `<p><strong>Nota final: </strong> acertadas ${acertadas} de ${arrPreguntas.length} (${ (acertadas/arrPreguntas.length*100).toFixed(2)}%)</p>`;
}


///////////////////
// MAIN
/////////////////////

//1.- El array con las preguntas
let arrPreguntas = [
	["¿Cuánto es 6x4?", "6 x 4 = 24"], 
	["¿De qué color es el caballo blanco de Santiago?", "Blanco"],
	["¿Qué significa harrowing en inglés?", "Angustioso, horroroso."],
];

//2.- Un array que indique si se está mostrando el anverso o el reverso de la pregunta (true o false respectivamente) y otro para saber las preguntas acertadas
let arrPreguntaCara = [];
let arrPreguntasAcertadas = [];

//3.- Cargamos las preguntas en la página
let main = document.querySelector("main");

for (let i = 0; i < arrPreguntas.length; i++) {
	let p = arrPreguntas[i];
	main.innerHTML += `<div onclick="resolver(${i})">
  							<p>${p[0]}</p>
							</div>`;

	arrPreguntaCara.push(true);
	arrPreguntasAcertadas.push(false);
}

//4.- Añadimos la funcionalidad al botón para calcular la nota final
document.getElementById('btnResultado').addEventListener('click', calcularNotaFinal);
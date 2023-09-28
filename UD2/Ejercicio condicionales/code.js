"use strict";

////////////
// FUNCTION
////////////
function calcular() {
	//1.- Recuperamos los datos del formulario
	let nota = document.getElementById('txtNota').value;
	let pResultado = document.getElementById('pResultado');

	//2.- Validamos los datos
	if (nota == "") {
		pResultado.innerHTML = "Error: Ingrese una nota";
		return;
	}
	if (nota < 0 || nota > 10) {
		pResultado.innerHTML = "Error: Ingrese una nota válida";
		return;
	}

	//3.- Calculamos el resultado
	if (nota >= 9) {
		pResultado.innerHTML = "Sobresaliente";
	}
	else if (nota >= 7){
		pResultado.innerHTML = "Notable";
	}
	else if (nota >= 6){
		pResultado.innerHTML = "Bien";
	}
	else if (nota >= 5){
		pResultado.innerHTML = "Suficiente";
	}
	else{
		pResultado.innerHTML = "Suspenso";
	}
}

/////////////
// MAIN
/////////////

//1.- Recupero el botón y le añado un eventListener
document.getElementById("btnCalcular").addEventListener("click", calcular);
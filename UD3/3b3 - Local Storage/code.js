"use strict";

/////////////////////
// FUNCTIONS
/////////////////////

function fichar() {
	//1.- Generamos la fecha actual
	let f = new Date();

	//2.- Si no hay un array donde guardar la
	//fecha, lo creamos
	if(localStorage.arrFichajes == undefined){
		localStorage.arrFichajes = JSON.stringify([]);
	}
	//3.- La almacenamos en el localStorage
	let arrFichajes = JSON.parse(localStorage.arrFichajes);
	arrFichajes.push(f);
	localStorage.arrFichajes = JSON.stringify(arrFichajes);

}

function mostrarFichajes() {
	//1.- Recuperamos la división donde mostraremos los fichajes divFichajes
	let divFichajes = document.querySelector("#divFichajes");
	//2.- Recuperamos los fichajes del localStorage. Si no hay ninguno, lo indicamos
	if (localStorage.arrFichajes == undefined) {
		divFichajes.innerHTML = "<p>Todavía no hay ningún fichaje.</p>";
		return;
	}
	//3.- Mostramos los fichajes
	divFichajes.innerHTML ="";
	let arrFichajes = JSON.parse(localStorage.arrFichajes);
	
	for (let fichaje of arrFichajes) {
		divFichajes.innerHTML += "<p>" + fichaje + "</p>";
	}
}

function resetearFichajes() {
	//1.- Eliminamos los fichajes del localStorage
	localStorage.removeItem("arrFichajes");
}

/////////////////////
// MAIN
/////////////////////

//1.- Add event Listeners
document.querySelector("#btnFichar").addEventListener("click", fichar);
document.querySelector("#btnMostrar").addEventListener("click", mostrarFichajes);
document.querySelector("#btnResetear").addEventListener("click", resetearFichajes);

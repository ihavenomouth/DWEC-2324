"use strict";


////////////////////
// FUNCTIONS
////////////////////
function crearCookie(){
	//1.- Recuperamos los datos del formulario
	const clave = document.querySelector("#txtClave").value.trim(); 
	const valor = document.querySelector("#txtValor").value.trim(); 

	//2.- Guardamos la cookie
	document.cookie = `${clave}=${valor}; SameSite=None;`;
}


function recuperarCookie(){
	//1.- Recuperamos la clave a buscar del formulario
	const clave = document.querySelector("#txtClave").value.trim();

	//2.- Recuperamos la cookie
	
}


////////////////////
// MAIN
////////////////////

//1.- Recuperamos los botones y les asignamos eventListeners

document.querySelector("#btnCrear").addEventListener('click', crearCookie);
document.querySelector("#btnRecuperar").addEventListener('click', recuperarCookie);
"use strict";

////////////////
// FUNCTION
////////////////
function mostrarTabla(){
	//1.- Recuperamos la división donde vamos a mostrar la tabla
	let tabla = document.getElementById("divResultado");

	//2.- Borramos el contenido de la tabla
	tabla.innerHTML="";

	//3.- Recuperamos el número que ha introducido el usuario
	let num = Number( document.getElementById("txtNumero").value );

	//4.- Escribimos la tabla de multiplicar
	tabla.innerHTML += `<p>${num} x 1 = ${num *1 }</p>`;
	tabla.innerHTML += `<p>${num} x 2 = ${num *2 }</p>`;
	tabla.innerHTML += `<p>${num} x 3 = ${num *3 }</p>`;
	tabla.innerHTML += `<p>${num} x 4 = ${num *4 }</p>`;
	tabla.innerHTML += `<p>${num} x 5 = ${num *5 }</p>`;
	tabla.innerHTML += `<p>${num} x 6 = ${num *6 }</p>`;
	tabla.innerHTML += `<p>${num} x 7 = ${num *7 }</p>`;
	tabla.innerHTML += `<p>${num} x 8 = ${num *8 }</p>`;
	tabla.innerHTML += `<p>${num} x 9 = ${num *9 }</p>`;
	tabla.innerHTML += `<p>${num} x 10 = ${num *10 }</p>`;
}

////////////////
// MAIN
////////////////

//1.- Recuperamos el botón y le añadimos un eventListener
let btnTabla = document.getElementById("btnTabla");

btnTabla.addEventListener('click', mostrarTabla);
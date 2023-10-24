"use strict";


///////////////////////////////
// FUNCIONES
///////////////////////////////
const agregarFichero = () => {
	
	// let esCanción = ( document.querySelector("[name=txtTipo]:checked").value === "canción" );

	//alternativa
	let esCanción = (document.querySelector("#txtRadioCanción").checked);

	let nombreFichero = document.querySelector("#txtNombreFic").value;
	let tamaño = document.querySelector("#txtTamaño").value;

	// console.log("EsCanción: "+ esCanción)

	if(esCanción){
		let nombreCanción = document.querySelector("#txtNombreCan").value;
		let duración = document.querySelector("#txtDuración").value;
		let canción = new Canción(nombreFichero, tamaño, nombreCanción, duración);
		arrFicheros.push(canción);
		// return;
	}
	else{
		let fichero = new Fichero(nombreFichero, tamaño);
		arrFicheros.push(fichero);
	}
	console.table(arrFicheros);
}


const mostrarFicheros = () => {
	const divResultado = document.querySelector("#divResultado");
	divResultado.innerHTML = "";
	let sol = "<ul>";
	for(let fichero of arrFicheros){
		sol+=`<li>${fichero.getDatos()}</li>`;
	}
	sol+="</ul>";
	divResultado.innerHTML = sol;
}


///////////////////////////////
// MAIN
///////////////////////////////

// Creamos el array de ficheros vacío
let arrFicheros = [];

document.querySelector("#btnAgregar").addEventListener("click", agregarFichero);
document.querySelector("#btnMostrar").addEventListener("click", mostrarFicheros);



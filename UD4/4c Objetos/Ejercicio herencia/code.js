"use strict";

class Fichero{
	constructor(nombre, tamaño){
		this.nombre = nombre;
		this.tamaño = tamaño;
	}

	getDatos(){
		return `${this.nombre} (${this.tamaño} KB)`;
	}

	extensión(){
		return this.nombre.split(".").pop();
	}
}



class Canción extends Fichero{
	constructor(nombreFichero, tamaño, nombreCanción, duración){
		super(nombreFichero, tamaño);
		this.nombreCanción = nombreCanción;
		this.duración = duración;
	}

	getDatos(){
		return `${this.nombreCanción} (${this.duración} segundos) [Tamaño: ${this.tamaño} KB]`;
	}
}


///////////////////////////////
// FUNCIONES
///////////////////////////////
const agregarFichero = () => {
	
	let esCanción = ( document.querySelector("[name=txtTipo]:checked").value === "canción" );

	//alternativa
	// let esCanción = (document.querySelector("#txtRadioCanción").checked);

	let nombreFichero = document.querySelector("#txtNombreFic").value;
	let tamaño = document.querySelector("#txtTamaño").value;

	console.log("EsCanción: "+ esCanción)

	if(esCanción){
		let nombreCanción = document.querySelector("#txtNombreCan").value;
		let duración = document.querySelector("#txtDuración").value;
		let canción = new Canción(nombreFichero, tamaño, nombreCanción, duración);
		arrFicheros.push(canción);
	}
	else{
		let fichero = new Fichero(nombreFichero, tamaño);
		arrFicheros.push(fichero);
	}
	// console.log(arrFicheros);
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



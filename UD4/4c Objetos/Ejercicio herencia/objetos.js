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

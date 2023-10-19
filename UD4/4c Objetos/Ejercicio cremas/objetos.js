"use strict";

////////////
// PERRO
////////////

function Perro(nombre, edad, raza){
  this.nombre = nombre,
  this.edad = edad,
  this.raza = raza
  this.mostrarDatos = function(){ 
	return `${this.nombre} (${this.raza}, ${this.edad})`
  }
  this.toHTMLLi = function () {
    return `<li>${this.nombre} (${this.raza}, ${this.edad})</li>`;
  };
}


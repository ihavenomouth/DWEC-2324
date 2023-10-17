"use strict";


//Objeto vacío:
let objetoVacio = {};

//Objeto con propiedades
let alumno = {
	nombre: "Javier",
	edad: 42,
}

// console.log( `Nombre: ${alumno.nombre} (${alumno.edad})`);

alumno = {
	nombre: "Javier",
	edad: 42,
	
	saludo: function(){
		return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
	},
	
	mostrar(){
		return `Nombre: ${this.nombre} (${this.edad})`;
	},

	// No se deben usar funciones flecha como métodos
	saludoFlecha: ()=>{
		return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
	},
}

// console.log( alumno.saludo() );
// console.log( alumno.mostrar() );

alumno.edad = 43;
alumno.getEdad = function(){
	return this.edad;
}

// console.log( "Edad del alumno: "+ alumno.getEdad() );

// console.log( alumno.saludo() );
// console.log( alumno.saludoFlecha() ); // Muestra undefined porque el this hace referencia a window

let alumno2={
	nombre: "Javier",
	hola: hola
}

let alumno3={
	nombre: "Paco",
	hola: hola
}

function hola(){
	return this.nombre;
}

console.log( alumno2.hola() );
console.log( alumno3.hola() );



function Alumno(no, ap, ed){
  this.nombre = no,
  this.apellidos = ap,
  this.edad = ed,
  this.teléfonos = [],
  this.info = function(){ return `Alumno: ${this.nombre} ${this.apellidos} - Edad: ${this.edad}`},
  this.mayorDeEdad = function(){ return (this.edad >=18);},
  this.imprime = function(){ 
      let s = this.nombre + " " + this.apellidos + " (" + this.edad + ")";
      console.log(s);
  }
}

let juan = new Alumno("Juan", "Lopez Caro", 23);

console.log( juan.info() );
console.log(  juan["nombre"] );


"use strict";

// Creación de objetos literales

// let alumno={
// 	nombre: "Javier",
// 	edad: 42
// }

// console.log(`Nombre: ${alumno.nombre}, edad: ${alumno.edad}`);

// Creación de objetos literales con métodos
// let alumno={
// 	nombre: "Javier",
// 	edad: 42,
// 	getDatos: function(){
// 		return `Nombre: ${this.nombre}, edad: ${this.edad}`;
// 	}
// }

// console.log( alumno.getDatos()  );

// Creación de objetos sando una función constructora 
// con métodos dentro
// function Alumno(nombre, edad){
// 	this.nombre=nombre;
// 	this.edad=edad;
// 	this.getDatos=function(){
// 		return `Nombre: ${this.nombre}, edad: ${this.edad}`;
// 	}
// }

// let a1 = new Alumno("Javier", 42);
// let a2 = new Alumno("Paco", 25);

// console.log( a1.getDatos() );
// console.log( a2.getDatos() );

// Creación de objetos sando una función constructora 
// con métodos dentro
// function Alumno(nombre, edad){
// 	this.nombre=nombre;
// 	this.edad=edad;
// }

// Alumno.prototype.getDatos=function(){
// 	return `Nombre: ${this.nombre}, edad: ${this.edad}`;
// }
// Alumno.prototype.curso="23-24";


// let a1 = new Alumno("Javier", 42);
// let a2 = new Alumno("Paco", 25);

// console.log( a1.getDatos() + ", Curso:"+ a1.curso );

// Alumno.prototype.curso="23-24-1";

// console.log( a1.getDatos() + ", Curso:"+ a1.curso );
// console.log( a2.getDatos() + ", Curso:"+ a1.curso );


/////////////////////////////
// HERENCIA PROTOTÍPICA
/////////////////////////////////

// ////////////////////////////////////////////////////////
// // Un objeto literal que herede de otro objeto literal
// ///////////////////////////////////////////////////////
// let persona = {
// 	mayorDeEdad: false,
// 	curso: "23-24"
// }

// let alumno = {
// 	nombre: "Javier",
// 	edad: 42
// }

// // alumno.__proto__ = persona;
// Object.setPrototypeOf(alumno, persona);
// console.log("Curso: "+ alumno.curso);


// ////////////////////////////////////////////////////////
// // Una función constructora que herede de un objeto literal
// ///////////////////////////////////////////////////////
// let persona = {
// 	mayorDeEdad: false,
// 	curso: "23-24"
// }

// function Alumno(nombre, edad){
// 	this.nombre = nombre;
// 	this.edad = edad;
// }
// Alumno.prototype = persona;
// // alumno.__proto__ = persona;
// // Object.setPrototypeOf(alumno, persona);

// let alumno = new Alumno("Javier", 42);
// let alumno2 = new Alumno("Paco", 25);

// persona.curso = "22-23";
// alumno.curso = "23-24";

// console.log("Nombre:"+ alumno.nombre+" Curso: "+ alumno.curso);
// console.log("Nombre:"+ alumno2.nombre+" Curso: "+ alumno2.curso);

////////////////////////////////////////////////////////
// Una función constructora que herede de otra
///////////////////////////////////////////////////////

function Punto2D(x,y){
	this.x=x;
	this.y=y;
	this.getDatos = function(){
		return `(${this.x},${this.y})`;
	}
}

function Punto3D(x,y,z){
	Punto2D.call(this,x,y);
	this.z = z;
	this.getDatos = function(){
		return `(${this.x},${this.y},${this.z})`;
	}
}
Object.setPrototypeOf(Punto3D.prototype, Punto2D.prototype);


let p1 = new Punto2D(1,2);
let p2 = new Punto3D(1,2,3);








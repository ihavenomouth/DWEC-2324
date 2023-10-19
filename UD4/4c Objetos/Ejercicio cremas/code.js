"use strict";

///////////////
// Functions
///////////////
const anadirPerro = () => {
	//1.- Recuperamos los datos de los textboxes
	const nombre = document.querySelector("#txtNombre").value;
	const edad = document.querySelector("#txtEdad").value;
	const raza = document.querySelector("#txtRaza").value;

	//2.- Creamos un objeto de tipo Perro
	const perro = new Perro(nombre, edad, raza);
	// console.log(perro);

	//3.- Añadimos el objeto a la lista
	arrPerros.push(perro);

}


const ordenarPorInsercion = () => {
	//1.- Recuperamos la división donde se mostrará la lista
	const divResultado = document.querySelector("#divResultado");

	//2.- Recorremos el array de perros, mostrando cada perro como un elemento de una lista no ordenada
	let sol = "<ul>";
	for(let perro of arrPerros){
		sol+= perro.toHTMLLi();
		// sol+= "<li>" +perro.mostrarDatos() + "</li>";
	}
	sol+="</ul>";

	divResultado.innerHTML = sol;
}


const ordenarPorEdad = () =>{
  //1.- Recuperamos la división donde se mostrará la lista
  const divResultado = document.querySelector("#divResultado");

  //2.- Recorremos el array de perros, mostrando cada perro como un elemento de una lista no ordenada
  let sol = "<ol>";
  for (let perro of arrPerros.toSorted( (a,b)=>a.edad-b.edad )  ) {
    sol += perro.toHTMLLi();
    // sol+= "<li>" +perro.mostrarDatos() + "</li>";
  }
  sol += "</ol>";

  divResultado.innerHTML = sol;
}

const ordenarPorRaza = () => {
  //1.- Recuperamos la división donde se mostrará la lista
  const divResultado = document.querySelector("#divResultado");

  //2.- Recorremos el array de perros, mostrando cada perro como un elemento de una lista no ordenada
  let sol = "<ol>";
  for (let perro of arrPerros.toSorted((a, b) => a.raza.localeCompare(b.raza, "es") )) {
    sol += perro.toHTMLLi();
    // sol+= "<li>" +perro.mostrarDatos() + "</li>";
  }
  sol += "</ol>";

  divResultado.innerHTML = sol;
};

///////////////
// MAIN
///////////////

let arrPerros = [];

//2.- Recupero los botones y le añado los event Listener
let btnAnadir = document.querySelector("#btnAnadir");
btnAnadir.addEventListener("click", anadirPerro);

let btnOrdIns = document.querySelector("#btnOrdIns");
btnOrdIns.addEventListener("click", ordenarPorInsercion);

let btnOrdEdad = document.querySelector("#btnOrdEdad");
btnOrdEdad.addEventListener("click", ordenarPorEdad);

let btnOrdRaza = document.querySelector("#btnOrdRaza");
btnOrdRaza.addEventListener("click", ordenarPorRaza);
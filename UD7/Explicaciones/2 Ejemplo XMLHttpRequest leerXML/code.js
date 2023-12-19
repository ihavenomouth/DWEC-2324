"use strict";

//////////////////
// FUNCTION
///////////////////


function gestionarFichero(xml) {
	const divResultado = document.getElementById("resultado");
	let res = "";

	xml.querySelectorAll("pelicula").forEach( p=>{
		const nombre = p.querySelector("nombre");
		const actor = nombre.nextElementSibling;
		const director = actor.nextElementSibling;
		const categoria = p.querySelector("categoria");
		
		res += `<li>${nombre.textContent} - ${actor.textContent} - ${director.textContent} - ${categoria.textContent}</li>`;
	});

	divResultado.innerHTML = `<ul>${res}</ul>`;
}



function loadXMLDoc(filename, callback) {
	let xhttp;
	if (window.XMLHttpRequest) {
		xhttp = new XMLHttpRequest();
	}
	else { // code for IE5 and IE6
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.onreadystatechange = function () {
		if (xhttp.readyState === XMLHttpRequest.DONE) {
			if (xhttp.status === 200) {
				callback(xhttp.responseXML);
				// callback(xhttp.responseText); // si el fichero es de texto
			} else {
				console.log("Hubo un error con la petición.");
			}
		}
		
	};
	xhttp.open("GET", filename, true); //true = asíncrona, //false = síncrona
	xhttp.send();
}


function leerFicheroXML() {
	loadXMLDoc("ejemplo_peliculas.xml", gestionarFichero);
	console.log("Petición mandada");
}



//////////////////
// MAIN
///////////////////
document.getElementById("btn").addEventListener('click', leerFicheroXML);

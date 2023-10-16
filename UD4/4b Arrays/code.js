"use strict";

let a = [9, 9, 9, 8, 8, 8, 7, 7, 7, 6, 6];

//////////////////
// Bucle for clásico
//////////////////

let s = "<ul>";
for(let i = 0; i < a.length; i++) {
 s+= `<li>Elemento ${i}: ${a[i]}</li>`;
}
s += "</ul>";
document.querySelector("#forclasico").innerHTML = s;


//////////////////
// Bucle for
//////////////////

s = "<ul>";
for (let e of a) {
	s += `<li>${e}</li>`;
}
s += "</ul>";
document.querySelector("#forof").innerHTML = s;


//////////////////
// Bucle map
//////////////////

s = "<ul>";
a.map(x => {
	s += `<li>${x}</li>`;
	return x * x;
});
s += "</ul>";
document.querySelector("#map").innerHTML = s;


//////////////////
// Bucle forEach
//////////////////

s = "<ul>";
a.forEach( (x, i,a) => {
	s += `<li>Elemento ${i} es ${x} y el siguiente es ${a[i+1]}</li>`;
});
s += "</ul>";
document.querySelector("#foreach").innerHTML = s;



//////////////////////
// Ejercicio 4b-2
///////////////////////
// Crea una función que compare dos arrays y diga si son iguales.
// Nota: por simplificar supondremos que los arrays no contienen objetos ni otros arrays, sólo valores literales (booleanos, números, cadenas de caracteres, null...). 

/**
 * Compara dos arrays y devuelve true si son iguales o false si son diferentes
 * @param {Array} a 
 * @param {Array} b 
 * @returns Boolean
 */
const comparaArrays = (a,b) => {
	if(a.length != b.length) 
		return false;

	for(let i=0; i<a.length; i++){
		if(a[i] !== b[i])
			return false;
	}
	return true;
}

let divEj4b2 = document.querySelector("#ej4b-2");

divEj4b2.innerHTML= `<p>[1,2,3] y [1,2,3]: ${comparaArrays([1, 2, 3], [1, 2, 3])}</p>`;
divEj4b2.innerHTML+= `<p>[1,2,3] y [4]: ${comparaArrays([1, 2, 3], [4])}</p>`;
divEj4b2.innerHTML+= `<p>[1,2,3] y [4,5,6]: ${comparaArrays([1, 2, 3], [4, 5, 6])}</p>`;
divEj4b2.innerHTML += `<p>[1,2,3] y []: ${comparaArrays([1, 2, 3], [])}</p>`;



//////////////////////
// Ejercicio 4b-2
///////////////////////
// Crea una función camelice una cadena de caracteres. 

/**
 * Convierte la cadena separada por - en camelCase
 * @param {String} s - La cadena a camelizar
 * @return {String} - La cadena camelizeada
*/
const camelizar = (s)=>{
	return s.split("-")
    .map((palabra, i) => {
      if (i == 0) 
		  return palabra.toLowerCase();

      return palabra[0].toUpperCase() + palabra.slice(1).toLowerCase();
    })
    .join("");
}


let divEj4b3 = document.querySelector("#ej4b-3");

divEj4b3.innerHTML = `<p>En-un-LugaR-DE-lA-Mancha: 
${camelizar("En-un-LugaR-DE-lA-Mancha")}
</p>`;


//////////////////////
// Ejercicio 4b-10
///////////////////////
// Crea una función que convierte a
// texto los dígitos de un número
/**
 * Convierte a texto los dígitos del número
 * @param {*} num 
 */
const convierteATexto = num =>{
	const a = String(num).split("");
	
	let sol = "<table><tr><th>Número</th><th>Nombre</th></tr>";
   
	a.forEach(n => {
		sol+= `<tr><td>${n}</td><td>`;
		sol+= convierteDigitoATexto(n);
		sol+= "</td></tr>";
	});

	sol+="</table>";
	return sol;
}

const convierteDigitoATexto = n =>{
	switch(n){
		case "0": return "cero";
		case "1": return "uno";
		case "2": return "dos";
		case "3": return "tres";
		case "4": return "cuatro";
		case "5": return "cinco";
		case "6": return "seis";
		case "7": return "siete";
		case "8": return "ocho";
		case "9": return "nueve";
		default: return "error";
	}
}

/*
	<table>
		</tr>
			<th></th>
		</tr>
		</tr>
			<td></td>
		</tr>
	</table>
*/
let divEj4b10 = document.querySelector("#ej4b10");

divEj4b10.innerHTML = `<p>1845</p> 
${convierteATexto(1845)}
`;



//////////////////////
// Ejercicio 4b-10
///////////////////////

let arrayViajes = [
  ['Juan',   ['Granada',' Londres',' Roma']],
  ['Ana',    ['Bilbao', 'Sevilla', 'Roma']],
  ['Manuel', ['Granada', 'Paris', 'Londres', 'Roma']],
  ['Antonio',['Granada', 'Sevilla','Bilbao']],
  ['Elena',  ['Granada', 'Sevilla' ]],
  ['Jorge',  ['Sevilla']]
];

let selectPersona = document.querySelector("#selectPersona");
arrayViajes.forEach( (lineaViajes,i ) => {
	selectPersona.innerHTML += `<option value="${i}">${lineaViajes[0]}</option>`;
});

selectPersona.addEventListener( "change", ()=>{
	let indiceSeleccionado = selectPersona.value;
	alert("Cambio a "+ arrayViajes[indiceSeleccionado][0] );
});

"use strict";


/**
 * Calcula los divisores de un número que recibe como parámetro
 * @param {Number} n 
 */
function divisores(n){
	//1.- Creamos un párrafo con información
	let texto =`<p>Divisores de ${n}</p>`;

	//2.- Calculamos los divisores y los imprimimos en una lista
	texto +="<ul>";
	for(let i = 1; i <= n; i++){
        if(n % i == 0){
         //   console.log(i);
			  texto += "<li>"+i+"</li>";
        }
    }
	texto += "</ul>";
	divResultado.innerHTML += texto;
}

///////////////////
// MAIN
///////////////////
//1.- Recuperamos la división donde vamos a imprimir el resultado
let divResultado = document.getElementById("divResultado");

//2.- Preguntamos al usuario hasta que introduce 0 o un dato incorrecto
let n = -1;
while(n != 0){
	n = prompt("Introduzca un número", 0);
	if (n == ""){
		divResultado.innerHTML += "<p>No indicó ningún número.</p>";
		break;
	}
	n = Number(n);
	if( isNaN(n) ){
		divResultado.innerHTML += "<p>Debe introducir un número</p>";
		break;	
	}
	if( n == 0 ){
		divResultado.innerHTML += "<p>Seleccionó 0.</p>";
		break;
	}
	divisores(n);
}
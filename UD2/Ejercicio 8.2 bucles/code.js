"use strict";

function divisores(n){
	// divResultado.innerHTML = "<p>Divisores de "+n+"</p>";
	for(let i = 1; i <= n; i++){
        if(n % i == 0){
           console.log(i);
			//   divResultado.innerHTML += "<p>" + i + "</p>";
        }
    }
}


// let divResultado = document.getElementById("divResultado");

let n = -1;
while(n != 0){
	n = prompt("Introduzca un número")
	divisores(n);
}
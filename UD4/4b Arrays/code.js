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
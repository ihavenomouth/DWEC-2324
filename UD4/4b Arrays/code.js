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
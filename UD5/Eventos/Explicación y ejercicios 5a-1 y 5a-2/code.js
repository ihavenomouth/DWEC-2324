"use strict";

//////////////
// Functions
//////////////



///////////////
// Main
///////////////

let divResultado = document.querySelector("#divResultado");

let divEventos = document.querySelector("#divEventos");

divEventos.addEventListener( "click", ()=>{
	divResultado.innerHTML+="<p>Se hizo click</p>";
} );

divEventos.addEventListener( "dblclick", ()=>{
	divResultado.innerHTML+="<p>Se hizo doble click</p>";
} );

divEventos.addEventListener( "contextmenu", (ev)=>{
	ev.preventDefault();
	divResultado.innerHTML+="<p>Se hizo click derecho</p>";
} );



document.querySelector("#txtDato").addEventListener("keydown", e=>{
	if(e.key=="Backspace")
		document.querySelector("#txtDato").value="";
});


/////////////////////
// Ejercicio 5a-1
/////////////////////
let divResultado2 = document.querySelector("#divResultado2");

// document.querySelectorAll("[name=txtOpcion]").forEach(  
// 	radio => {
// 		radio.addEventListener("change", e=>{
// 			let opcion = document.querySelector("[name=txtOpcion]:checked").value;
// 			if(opcion=="colores"){
// 				divResultado2.innerHTML="Rojo, verde, azul";
// 			}
// 			else{
// 				divResultado2.innerHTML="Zorro, perro, gato";				
// 			}
// 		});
// 	}
// );


// Manera alternativa
// document.querySelectorAll("[name=txtOpcion]").forEach(  
// 	radio => {
// 		radio.addEventListener("change", e=>{
// 			let opcion = radio.value;
// 			if(opcion=="colores"){
// 				divResultado2.innerHTML="Rojo, verde, azul";
// 			}
// 			else{
// 				divResultado2.innerHTML="Zorro, perro, gato";				
// 			}
// 		});
// 	}
// );

//Con un bucle for..of
const radiobuttons = document.querySelectorAll("[name=txtOpcion]");

for( let radio of radiobuttons){  
	radio.addEventListener("change", e=>{

		let opcion = radio.value;
		
		if(opcion=="colores"){
			divResultado2.innerHTML="Rojo, verde, azul";
		}
		else{
			divResultado2.innerHTML="Zorro, perro, gato";				
		}
	});
}



///////////////////////////////////////
// Ejercicio 5a-2: Menú contextual
//////////////////////////////////////

let menu = document.querySelector("#divTexto .menu");
let pTexto = document.querySelector("#divTexto p");

document.querySelector("#divTexto").addEventListener("contextmenu", e=>{
	//impedimos que se abra el menú contextual
	e.preventDefault();
	menu.classList.toggle("oculto");
});

document.querySelector("#btnCursiva").addEventListener("click",()=>{
	pTexto.innerHTML= `<em>${pTexto.textContent}</em>`;
});

document.querySelector("#btnNegrita").addEventListener("click",()=>{
	pTexto.innerHTML= `<strong>${pTexto.textContent}</strong>`;
});

document.addEventListener("click", e=>{
	//hacemos que el menú se oculto al hacer click en cualquier parte del documento
	menu.classList.add("oculto");
});



///////////////////////////

function descartar(id){
	alert("ID a descartar: "+ id);
}

let arr=[
	{id:1, nombre: "Javier"},
	{id:14, nombre: "Juan"},
	{id:123, nombre: "Paco"},
	{id:124, nombre: "Pedro"},
];

let divResultado3 = document.querySelector("#divResultado3");

let s="";
for (let o of arr){
	s+=`<p><button onclick="descartar(${o.id})">Info sobre ${o.nombre}</button></p>`;
}
divResultado3.innerHTML = s;


"use strict";

////////////////////
// Ejercicio 1
///////////////////
const resultadoEj1 = document.querySelector("#resultado");

//Cambia el texto del párrafo para que indique "Lista de animales".
resultadoEj1.firstElementChild.innerText="Lista de animales";

//Haz que el último elemento de la lista indique "Lobo"
const lista = resultadoEj1.firstElementChild.nextElementSibling;
lista.lastElementChild.innerText="Lobo";

//Haz que el texto en negrita sea "de agua".
lista.children[2].firstElementChild.innerText="de agua";

//Haz que se muestre por pantalla el contenido del último párrafo.
const divEj1 = document.querySelector("#divEj1");
divEj1.innerHTML=resultadoEj1.lastElementChild.innerText;



////////////////////
// Ejercicio 2
///////////////////

const resultadoEj2 = document.querySelector("#resultado2");

//Cambia el texto del párrafo para que indique "Lista de animales".
resultadoEj2.parentElement.parentElement.previousElementSibling.innerText="Lista de animales";

//Haz que el último elemento de la lista indique "Lobo"
resultadoEj2.parentElement.nextElementSibling.innerText="Lobo";

//Haz que el texto en negrita sea "de agua".
resultadoEj2.innerText="de agua";

//Haz que se muestre por pantalla el contenido del último párrafo.
const divEj2 = document.querySelector("#divEj2");
divEj2.innerHTML=resultadoEj2.parentElement.parentElement.nextElementSibling.innerText;
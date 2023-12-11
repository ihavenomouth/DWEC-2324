"use strict";


//////////////////
// FUNCTIONS
//////////////////


///////////////////
// MAIN
/////////////////////
let btn = document.querySelector("#btnAccion");
let divResultado = document.querySelector("#divResultado");


// btn.style="border-radius: 5px; opacity:0.5;"

// btn.style.borderRadius= "15px";
// btn.style.paddingLeft = "30px";

divResultado.innerHTML+=`<p>${btn.classList}</p>`;
divResultado.innerHTML+=`<p>${btn.classList[0]}</p>`;

// btn.classList="btn info";


// btn.classList.replace("danger", "success");

btn.classList.toggle("danger");
btn.classList.toggle("danger");



//// Hojas de estilo ///
// document.styleSheets[0].cssRules[5].style.backgroundColor="yellow"
// document.styleSheets[0].deleteRule(5)

// document.styleSheets[0].insertRule("button { color: white }", 1); 

// Cambiar una hoja de estilos por otra
// document.querySelector("#theme-link").href="styleDark.css"; 

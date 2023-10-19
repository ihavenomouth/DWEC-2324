"use strict";

///////////////
// Functions
///////////////


///////////////
// MAIN
///////////////
let divResultado = document.querySelector("#divResultado");

let crema = new Crema("Crema de zanahoria", 2.25, "Knorr");

crema.addIngrediente("Zanahoria", 200);
crema.addIngrediente("Cebolla", 50);
crema.addIngrediente("Puerro", 50);
crema.addIngrediente("Patata", 100);
crema.addIngrediente("Nata", 100);
crema.addIngrediente("Caldo de pollo", 400);

divResultado.innerHTML = crema.toHTMLTable();

crema.removeIngrediente(25);
// divResultado.innerHTML = crema.toHTMLTable();

"use strict";

/*
Ejercicio 3.2

Escribe el código que habría que usar en la web console para que ocurra lo siguiente:

    Muestre un mensaje en la consola diciendo "Pedimos el radio del círculo".
    Se mostrará un mensaje de prompt() donde se pida el radio de un círculo.
    Se calculará el área del círculo con ese radio(Math.Pi * r * r).
    Se imprimirá un mensaje en la consola que indique el área calculada(por ejemplo: "El área de un círculo con radio 2 es 12.566370614359172").
*/
console.log("Pedimos el radio del círculo");

let radio = Number(prompt("Introduzca el radio del círculo"));

let areaCirculo = Math.PI * radio * radio;

console.log("El área de un círculo con radio "+ radio +" es " + areaCirculo);
console.log(`El área de un círculo con radio ${radio} es ${areaCirculo}`);







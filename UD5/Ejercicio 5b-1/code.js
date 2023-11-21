"use strict";


///////////////////////
// Ejercicio 1
///////////////////////

frmEj1.txtEj1.addEventListener("keyup", e=>{
  divEj1.innerHTML=frmEj1.txtEj1.value;
});

///////////////////////
// Ejercicio 2
///////////////////////

btnEj2.addEventListener("click", e=>{
  
  let numMarcados = frmEj2.ch1Ej2.checked + frmEj2.ch2Ej2.checked + frmEj2.ch3Ej2.checked;
  
  //alternativa
  // let numMarcados = document.querySelectorAll("[name=frmEj2] input:checked").length;

  if(numMarcados<1 || numMarcados>2){
    divEj2.innerHTML="Debe marcar 1 o 2 opciones. No se pueden marcar 3.";
    return;
  }

  divEj2.innerHTML="";
  document.querySelectorAll("[name=frmEj2] input:checked").forEach(
    e=>{
      divEj2.innerHTML+=e.value+" ";
    }
  );

  //Alternativa rebuscada
  // divEj2.innerHTML = Array.from(document.querySelectorAll("[name=frmEj2] input:checked")).map( e=>e.value).join(", ");

});
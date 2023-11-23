"use strict";


///////////////////////
// Ejercicio 1
///////////////////////

frmEj1.txtEj1.addEventListener("keyup", e=>{
  divEj1.innerHTML = frmEj1.txtEj1.value;
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


///////////////////////
// Ejercicio 3
///////////////////////

//Devuelve un número positivo entre -100 y 99
const getRandomInt = () =>{
  const max=200;
  return Math.floor(Math.random() * max) - 100;
}

btnAleatorio.addEventListener("click", e=>{
  frmEj3.querySelectorAll("input").forEach(i=>{
    i.value = getRandomInt();
  });
});


btnTodosPositivos.addEventListener("click", e=>{
  const todosPositivos = Array.from( frmEj3.querySelectorAll("input") ).every( i=>i.value>=0);

  if(todosPositivos)
    divEj3.innerHTML = "Todos los valores son positivos";
  else
    divEj3.innerHTML = "Hay valores que no son positivos";
});



btnContarPositivos.addEventListener("click", e=>{
  const numPositivos = Array.from( frmEj3.querySelectorAll("input") ).reduce( 
    (acc,input)=> {
      if(  Number(input.value>=0)  ) return acc+1
      return acc;
    }
  ,0);

  divEj3.innerHTML = `Hay ${numPositivos} valores positivos.`
});





///////////////////////
// Ejercicio 4
///////////////////////

let arrVotaciones = [];


btnVotar.addEventListener("click", e=>{
  arrVotaciones.push(
    {
      sabor: frm4.selectHelado.value, 
      nota: Number(frm4.rbNota.value),
    }
  );
});


const calculaVotaciones = (arr)=>{
  let numVotos = arr.length;
  let media = arr.reduce((acc, v)=>acc+v.nota,0) / arr.length;
  let notaMax = arr.filter(v=>v.nota===5).length;

  if(isNaN(media))
    media=0;

  return {numVotos, media, notaMax};
}


btnVervotaciones.addEventListener("click", e=>{  
  const votosVainilla = arrVotaciones.filter(v=>v.sabor==="vainilla");
  const votosFresa = arrVotaciones.filter(v=>v.sabor==="fresa");
  const votosChocolate = arrVotaciones.filter(v=>v.sabor==="chocolate");
  const votosNata = arrVotaciones.filter(v=>v.sabor==="nata");

  let s="";
  let calculos = calculaVotaciones(votosVainilla);
  s+=`<p>Votos vainilla: ${calculos.numVotos}. Media: ${calculos.media}. Nº 5: ${calculos.notaMax}</p>`;

  calculos = calculaVotaciones(votosFresa);
  s+=`<p>Votos fresa: ${calculos.numVotos}. Media: ${calculos.media}. Nº 5: ${calculos.notaMax}</p>`;

  calculos = calculaVotaciones(votosChocolate);
  s+=`<p>Votos chocolate: ${calculos.numVotos}. Media: ${calculos.media}. Nº 5: ${calculos.notaMax}</p>`;

  calculos = calculaVotaciones(votosNata);
  s+=`<p>Votos nata: ${calculos.numVotos}. Media: ${calculos.media}. Nº 5: ${calculos.notaMax}</p>`;

  divVerVotaciones.innerHTML=s;
  ej4Dialogo.showModal();
});


///////////////////////
// Ejercicio 5
///////////////////////
let borrar;
divEditable.addEventListener( "keyup", e=>{
  

  if(e.ctrlKey){
    if( e.key === "b" )
      divEditable.innerHTML = `<strong>${divEditable.innerHTML}</strong>`;
    else if( e.key === "i" )
      divEditable.innerHTML = `<em>${divEditable.innerHTML}</em>`;
    else if( e.key === "u" )
      divEditable.innerHTML = `<u>${divEditable.innerHTML}</u>`;
    else if( e.key === "+" )
      divEditable.style+=";font-size:2rem;";
    else if( e.key === "-" )
      divEditable.style+=";font-size:1rem;";
  }

  e.preventDefault();
});

divEditable.addEventListener( "keydown", e=>{
  if( e.ctrlKey ){
    if( e.key === "b" )
      e.preventDefault();
    else if( e.key === "i" )
      e.preventDefault();
    else if( e.key === "u" )
      e.preventDefault();
    else if( e.key === "+" )
      e.preventDefault();
    else if( e.key === "-" )
      e.preventDefault();
  }

});


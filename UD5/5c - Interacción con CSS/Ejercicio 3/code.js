"use strict";

const lista = document.querySelector("#lista");


document.querySelector("#btnAnadir").addEventListener("click", e=>{
  lista.innerHTML+=`<li>${txtItem.value}</li>`;
});

document.querySelector("#btnColorear").addEventListener("click", e=>{
  const listaItems = document.querySelectorAll("#lista>li");
  for(let i of listaItems){
    if(i.innerText.length%2==0){
      i.style.color = "white";
      i.style.backgroundColor = "red";
    }
    else{
      i.style.backgroundColor = "goldenrod";
    }
  }
});



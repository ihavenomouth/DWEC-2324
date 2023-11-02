"use strict";

//////////////
// Functions
//////////////



///////////////
// Main
///////////////

function clickTodos(ev) { 
  console.log(ev.currentTarget);
}

document.getElementById("idEnlace").addEventListener('click', clickTodos);
document.getElementById("idParrafo").addEventListener('click', clickTodos);
document.getElementById("idDiv").addEventListener('click', clickTodos);




document.querySelector("#btnAnadir").addEventListener('click', ()=>{
  const texto = document.querySelector("#txtNuevoElemento").value;  
  document.querySelector("#lista").innerHTML += `<li>${texto}</li>`;
});

document.querySelector("#lista").addEventListener('click', (e)=>{

  if(e.target.tagName === "LI"){
    e.target.style="display:none;";
  }
});
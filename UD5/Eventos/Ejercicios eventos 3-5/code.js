"use strict";

/////////////////
// Ejercicio 5a-3
/////////////////

document.querySelector("#sEmoji").addEventListener('click', e=>{
  e.target.innerText = '🙁';
});
document.querySelector("#sEmoji").addEventListener('dblclick', e=>{
  e.target.innerText = '😒';
});
document.querySelector("#sEmoji").addEventListener('contextmenu', e=>{
  e.target.innerText = '😀';
  e.preventDefault();
});

/////////////////
// Ejercicio 5a-4
/////////////////

let konamiCode=['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'a', 'b'];
let code=[];

document.addEventListener("keyup", e=>{
  if( e.key==='j'){
    alert("Javier Mancera");
  }
  else if (e.key === 'e'){
    alert("42");
  }
  else{
    code.push(e.key);
    if(code.length==10){
      for(let i=0;i<code.length;i++){
        if(code[i]!= konamiCode[i]){
          return;
        }
      }
      alert("¡Introduciste el konami code!");
      code=[];
    }
  }
});


/////////////////
// Ejercicio 5a-5
/////////////////
let arrProvincias = ["Álava","Albacete","Alicante","Almería","Ávila","Badajoz","Baleares","Barcelona","Burgos","Cáceres","Cádiz","Castellón",
"Ciudad Real","Córdoba","Coruña","Cuenca","Girona","Granada","Guadalajara","Guipuzcoa","Huelva","Huesca","Jaén","León","Lleida",
"Rioja","Lugo","Madrid","Málaga", "Murcia","Navarra","Orense","Asturias","Palencia","Las Palmas","Pontevedra","Salamanca",
"Tenerife","Cantabria","Segovia","Sevilla","Soria","Tarragona","Teruel","Toledo","Valencia","Valladolid",
"Vizcaya","Zamora","Zaragoza","Ceuta","Melilla"];

const txtEj5a5 = document.querySelector("#txtEj5a5");
const divResultado5a5 = document.querySelector("#divResultado5a5");

txtEj5a5.addEventListener("keyup", e=>{
  const texto = e.target.value;
  if(texto.length!==5)
    return;
  
  const numeroProv = Number(texto.slice(0,2) - 1);
  
  if( isNaN(numeroProv) ){
    divResultado5a5.innerHTML=`Error: debe indicar sólo números en el C.P.`;
    return;
  }
  divResultado5a5.innerHTML=`${arrProvincias[numeroProv]}`;
});



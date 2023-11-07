"use strict";

/////////////////////
// FUNCTIONS
/////////////////////
const creaTabla = contenido =>{
  let s='<table></tr><th onclick="ordenar(1)">Red social</th><th onclick="ordenar(2)">Seguidores</th></tr>';

  for(let redsocial of contenido.arrRedesSociales){
    s+=`<tr><td><a href="${redsocial.url}">${redsocial.nombre}</a></td><td>${redsocial.seguidores}</td>`;
  }
 
  s+="</table>";
 
 output.innerHTML = s;
}


const ordenar = columna =>{
  // La primera columna es el nombre de la red social, 
  // La segunda es el número de seguidores
  if(columna===1){
    contenido.arrRedesSociales.sort(
      // Sin tener en cuenta acentos)
      // (a,b) => a.nombre>b.nombre
      // Teniendo en cuenta acentos
      (a,b) => a.nombre.localeCompare(b.nombre, "es")
    );
  }
  else{
    contenido.arrRedesSociales.sort( 
      (a,b) => a.seguidores - b.seguidores
    );
  }
  creaTabla( contenido );
}
/////////////////////
// MAIN
/////////////////////

//1.- Variable donde vamos a guardar el contenido del fichero JSON
let contenido;

//2.- Recuperamos las etiquetas para leer el fichero
const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector(".output");

//3.- Leemos el fichero
fileInput.addEventListener("change", async () => {
  const [file] = fileInput.files;

  if (file) {
    // Cuando se haya seleccionado
    contenido = JSON.parse( await file.text() );
    creaTabla( contenido );
  }
});

"use strict";


//1.- Creamos la división en la que añadiremos las notificaciones
const divToastArea = document.createElement("div");
divToastArea.style.position="fixed";
divToastArea.style.top=0;
divToastArea.style.right="1rem";
// divToastArea.style.backgroundColor="red";
divToastArea.style.width="300px";
divToastArea.style.height="100px";
document.body.append(divToastArea);


//2.- Creamos una notificación
const createToast = (texto) => {
  const divToast = document.createElement("div");
  // divToast.style.position="absolute";
  divToast.style.backgroundColor="#eee";
  divToast.style.minWidth="200px";
  divToast.style.borderRadius="5px";
  divToast.style.boxShadow="3px 3px 3px #ccc";
  divToast.style.margin="10px";
  divToast.style.padding="10px";
  divToast.innerText=texto;
  divToastArea.append(divToast);

  setTimeout( ()=>{
    divToast.remove();
  }
  ,3000);
}

// createToast("Hola");
// createToast("caracola");
// createToast("en");
// createToast("un");
// createToast("lugar");
// createToast("de");
// createToast("la");
// createToast("En un lugar de la mancha de cuyo nombre no quiero acordarme");




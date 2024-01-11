"use strict";

////////////////////
// FUNCTION
/////////////////

const verDetalleUsuario = (e)=>{
  console.log(e.target);
  console.log(e.target.tagName);
  
  if(e.target.tagName == "TR"){
    // Nota: prefiero ignorarlo por si se pulsó sobre una fila
    // de la cabecera
    // console.log("tr" + e.target.dataset.id)
  }
  else if(e.target.tagName == "TD"){
    // console.log("td" + e.target.parentElement.dataset.id);
    let idUsuario = e.target.parentElement.dataset.id
    getDatosUsuario(idUsuario);
  }
  else{
    //Se pulsó sobre la tabla o un TH
  }

}



const getDatosUsuario = async (idUsuario) => {
  divResultado.innerHTML = "Cargando...";

  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/"+idUsuario);
    if (!response.ok) {
      throw new Error("Error de red o servidor");
    }

    //Convertir la respuesta a formato JSON con response.json() o texto
    let data = await response.json();
    tratarDatosUsuario(data);
  } catch (error) {
    // Manejar errores
    console.error("Hubo un problema con la solicitud: ", error);
    divResultado.innerHTML = "Hubo un problema con la solicitud: " + error.message;
  }
}


const tratarDatosUsuario = (usuario) =>{
  datosUsuario.innerHTML = "";
  // el nombre completo y el nombre de su compañía
  console.log(usuario);
  datosUsuario.innerHTML = `<li>Usuario: ${usuario.name}</li><li>Compañía: ${usuario.company.name}</li>`;
}


////////////// /////////////////////
function tratarDatos(data) {

  // La respuesta es esta:
  /*
  [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  ...
  ]
  */

  //Hay que generar una tabla con:
  // el (username), el e-mail, el sitio web y la ciudad en la que vive. El id de cada usuario se almacenará en un atributo data-id de la fila
  // Hacer algo con los datos
  let tabla = document.querySelector("#tablaResultado");
  tabla.innerHTML = "";
  console.log(data);

  let sol = '</tr><th>Username</th><th>E-mail</th><th>Web</th><th>Ciudad</th>';
  for(let user of data){
    sol+=`<tr data-id=${user.id}>
    <td>${user.username}</td>
    <td>${user.email}</td>
    <td>${user.website}</td>
    <td>${user.address.city}</td>
    </tr>`;
  }
  tabla.addEventListener('click', verDetalleUsuario);

  tabla.innerHTML = sol;
  divResultado.innerHTML="Datos cargados";
}




const getDatos = async () => {
  divResultado.innerHTML = "Cargando...";

  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Error de red o servidor");
    }

    //Convertir la respuesta a formato JSON con response.json() o texto
    let data = await response.json();
    tratarDatos(data);
  } catch (error) {
    // Manejar errores
    console.error("Hubo un problema con la solicitud: ", error);
    divResultado.innerHTML = "Hubo un problema con la solicitud: " + error.message;
  }
}



//////////////////////
// MAIN
///////////////////

document.querySelector("#btnIniciar").addEventListener("click", e => {
  getDatos();
});

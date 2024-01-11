"use strict";

////////////////////
// FUNCTION
/////////////////




////////////// Apartado 1 /////////////////////
function tratarDatosApartado1(data) {
  // La respuesta es esta:
  // <?xml version="1.0" encoding="UTF-8"?> <root><city>San Jose</city><firstName>John</firstName><lastName>Doe</lastName><state>CA</state></root>

  // Hacer algo con los datos
  divResultadoApartado1.innerHTML = "";
  // console.log(data);
  let ciudad = data.querySelector("city").textContent;
  let nombre = data.querySelector("firstName").textContent;
  let apellido = data.querySelector("lastName").textContent;
  let estado = data.querySelector("state").textContent;
  divResultadoApartado1.innerHTML = `<ul>
    <li>Nombre: ${nombre} ${apellido}</li>
    <li>Ciudad: ${ciudad} (${estado})</li>
  </ul>`;
}

const apartado1 = async () => {
  divResultadoApartado1.innerHTML = "Cargando...";

  try {
    let response = await fetch("https://mocktarget.apigee.net/xml");
    if (!response.ok) {
      throw new Error("Error de red o servidor");
    }

    //Convertir la respuesta a formato JSON con response.json() o texto
    let texto = await response.text();
    let data = await new window.DOMParser().parseFromString(texto, "text/xml");
    tratarDatosApartado1(data);
  } catch (error) {
    // Manejar errores
    console.error("Hubo un problema con la solicitud: ", error);
    divResultadoApartado1.innerHTML = "Hubo un problema con la solicitud: " + error.message;
  }
}




////////////// Apartado 2 /////////////////////
function tratarDatosApartado2(data) {
  divResultadoApartado2.innerHTML = "";
  // console.log(data);
  divResultadoApartado2.innerHTML = data;
}

const apartado2 = () => {
  divResultadoApartado2.innerHTML = "Cargando...";

  fetch("https://mocktarget.apigee.net/iloveapis")
  .then( response =>{
    if (!response.ok) {
      throw new Error("Error de red o servidor");
    }
    return response.text();
  })
  .then(data=>tratarDatosApartado2(data) )
  .catch(error=>{
    // Manejar errores
    console.error("Hubo un problema con la solicitud: ", error);
    divResultadoApartado2.innerHTML = "Hubo un problema con la solicitud: " + error.message;
  })
}

////////////// Apartado 3 /////////////////////
function tratarDatosApartado3(data) {
  divResultadoApartado3.innerHTML = "";
  // console.log(data);
  divResultadoApartado3.innerHTML = `<ul>
  <li>Nombre: ${data.firstName} ${data.lastName}</li>
  <li>Ciudad: ${data.city} (${data.state})</li>
</ul>`;
}

async function apartado3 () {
  divResultadoApartado3.innerHTML = "Cargando...";

  try{
    let response = await fetch("https://mocktarget.apigee.net/json");
    if (!response.ok) {
      throw new Error("Error de red o servidor");
    }

    let data = await response.json();
    tratarDatosApartado3(data);
  } catch(error){
    // Manejar errores
    console.error("Hubo un problema con la solicitud: ", error);
    divResultadoApartado3.innerHTML = "Hubo un problema con la solicitud: " + error.message;
  }
}


//////////////////////
// MAIN
///////////////////

document.querySelector("#btnApartado1").addEventListener("click", e => {
  apartado1();
});

document.querySelector("#btnApartado2").addEventListener("click", e => {
  apartado2();
});

document.querySelector("#btnApartado3").addEventListener("click", e => {
  apartado3();
});

"use strict";

////////////////////
// FUNCTION
/////////////////

function tratarDatos(data) {
  // Hacer algo con los datos
  divResultado.innerHTML = "";
  console.log(data);
  data.split("\n").forEach(e => {
    divResultado.innerHTML += "<p>" + e + "</p>";
  });
}

const iniciar = async () => {
  divResultado.innerHTML = "Cargando...";

  try {
    let response = await fetch("datos.csv");
    if (!response.ok) {
      throw new Error("Error de red o servidor");
    }

    //Convertir la respuesta a formato JSON con response.json() o texto
    let data = await response.text();
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

document.querySelector("#btnLeerFichero").addEventListener("click", e => {
  iniciar();
});

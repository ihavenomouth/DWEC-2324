"use strict";

////////////////////
// FUNCTION
/////////////////

function iniciar() {
  divResultado.innerHTML = "Cargando...";

  fetch("datos.csv")
    .then(response => {
      // Verificar si la solicitud fue exitosa (código de respuesta 200..299)
      if (!response.ok) {
        throw new Error("Error de red o servidor");
      }
      // Convertir la respuesta a formato JSON con response.json() o texto
      return response.text();
    })
    .then(data => {
      // Hacer algo con los datos
      divResultado.innerHTML = "";
      console.log(data);

      data.split("\n").forEach(e => {
        divResultado.innerHTML += "<p>" + e + "</p>";
      });
    })
    .catch(error => {
      // Manejar errores
      console.error("Hubo un problema con la solicitud: ", error);
      divResultado.innerHTML = "Hubo un problema con la solicitud: " + error.message;
    });
}

//////////////////////
// MAIN
///////////////////

document.querySelector("#btnLeerFichero").addEventListener("click", e => {
  iniciar();
});

"use strict";

////////////////////
// FUNCTION
/////////////////




////////////// /////////////////////
function tratarDatos({country, city, ip}) {

  // La respuesta es esta:
  /*{
    "ip":"158.99.0.15",
    "type":"IPv4",
    "location":{"latitude":37.3951,"longitude":-5.7285},
    "postcode":"41520",
    "area":{"code":"ES-SE","geonameid":2510910,"name":"Seville"},
    "asn":{"number":766,"organisation":"Entidad Publica Empresarial Red.es"},
    "city":{"geonameid":2518040,"name":"El Viso del Alcor","population":19191},
    "continent":{"geonameid":6255148,"name":"Europe","code":"EU"},
    "country":{
      "geonameid":2510769,
      "name":"Spain",
      "code":"ES",
      "capital":"Madrid",
      "area_size":"504782.00 sq. km",
      "population":46723749,
      "phone_code":"34",
      "is_in_eu":true,
      "languages":{"es":"Spanish language","ca":"Catalan language","gl":"Galician language","eu":"Basque language","oc":"Occitan language"},
      "flag":{"file":"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Spain.svg","emoji":"🇪🇸","unicode":"U+1F1EA U+1F1F8"},
      "tld":".es"},
      "currency":{"code":"EUR","name":"Euro"},
      "security":{"is_tor":false,"is_proxy":false,"is_crawler":false,"is_threat":false,"is_thread":false},
      "time":{"timezone":"Europe/Madrid","gtm_offset":3600,"gmt_offset":3600,"is_daylight_saving":false,"code":"CET"},
      "status":"success"
    }
  */


  // Hacer algo con los datos
  divResultado.innerHTML = "";
  // console.log(data);

  let poblacion = city.population;
  divResultado.innerHTML = `<p>IP: ${ip}<br>${city.name} (Población: ${city.population}), ${country.name} ${country.flag.emoji} (Población: ${country.population})</p>`;
}

const getDatos = async () => {
  divResultado.innerHTML = "Cargando...";

  try {
    //https://api.getgeoapi.com/v2/ip/check
    let response = await fetch("https://api.getgeoapi.com/v2/ip/check?api_key=indicatukeyaquí");
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

document.querySelector("#btnGetIpInfo").addEventListener("click", e => {
  getDatos();
});

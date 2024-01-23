/**
 * Realiza peticiones AJAX de tipo POST
 * @param {string} url 
 * @param {FormData} parametros - Objeto FormData con los parámetros de la llamada 
 * @param {Boolean} json - Indica si la respuesta debe ser un fichero JSON o de texto
 * @returns 
 */
const peticionPOST = async (url, parametros, json=true) => {

  let response = await fetch( url,{
    body: parametros,
    method: "POST"
  });
   
  if(!response.ok) {
    console.error("Error al acceder al acceder al servidor (STATUS != 200..299).");
    throw new Error("Error al acceder al acceder al servidor (STATUS != 200..299).");
  }
 
  if(json)
    return await response.json();
  else
    return await response.text();
}


/**
 * Realiza peticiones AJAX de tipo GET
 * @param {string} url 
 * @param {FormData} parametros - Objeto FormData con los parámetros de la llamada 
 * @param {Boolean} json - Indica si la respuesta debe ser un fichero JSON o de texto
 * @returns 
 */
const peticionGET = async (url, parametros, json=true) => {
 
  let searchparam = new URLSearchParams( parametros );
  let urlget = url + "?" + searchparam.toString();

  let response = await fetch( urlget);
   
  if(!response.ok) {
    console.error("Error al acceder al acceder al servidor (STATUS != 200..299).");
    throw new Error("Error al acceder al acceder al servidor (STATUS != 200..299).");
  }
 
  if(json)
    return await response.json();
  else
    return await response.text();
}


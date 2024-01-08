"use strict";


////////////////////
// FUNCTION
/////////////////


/**
 * Carga un fichero XML de manera asíncrona
 * @param {String} filename 
 * @param {Function} callback 
 */
function loadXMLDoc(filename, callback) {
  let xhttp;
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
  }
  else { // código de IE5 and IE6
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function (){
    if (xhttp.readyState === XMLHttpRequest.DONE) {
      if (xhttp.status === 200) {
        callback(xhttp.responseXML);
        // callback(xhttp.responseText); // si el fichero es de texto
      } else {
        console.log("Hubo un error con la petición.");
      }
    }	
  };
  xhttp.open("GET", filename, true); //true = asíncrona, //false = síncrona
  xhttp.send();
}


/**
 * Genera un conjunto de <option> y los añade al <select id="#slPostre">
 * @param {XMLDocument} xml 
 */
const crearOptions = (xml) => {
  const select = document.querySelector("#slPostre");
  xml.querySelectorAll("name").forEach( (name, i)=>{
    let option = document.createElement("option");
    option.value = i;
    option.innerText = name.textContent;
    select.append(option);
  });
  // console.log(select);
}



/**
 * Crea el formulario procesando el XML
 * @param {XMLDocument} xml 
 */
const crearForm = (xml) =>{

  // Nota: el ejercicio hay muchas maneras de resolverlo, se usa una que
  // involucra muchas navegaciones por el DOM para repasar

  // Creamos el formulario y lo añadimos al final de la web
  const form = document.createElement("form");
  document.body.append(form);

  // El título será un h3 que se añadirá al formulario. El texto
  // del h3 lo recuperaremos del fichero XML (etiqueta <title>)
  const title = document.createElement("h3");
  form.append(title);

  const xmlTitle = xml.firstElementChild.firstElementChild;
  title.innerText = xmlTitle.textContent;

  // Generamos un fieldset con un legend. El texto del legend será de nuevo
  // el del <title> del XML
  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  form.append(fieldset);
  fieldset.append(legend);

  legend.innerText = xmlTitle.textContent;

  // Ahora tenemos que crear el <select> (las <option> las generaremos luego).
  // No podemos insertar el <select> directamente del XML (no es HTML, sino XML), 
  // para poder usarlo hay que indicar al navegador que parsee el XML
  const select = xmlTitle.nextElementSibling;
  fieldset.innerHTML = select.outerHTML;

  // Creamos el <label> del <input> de cantidad y el <input> 
  const label = document.createElement("label");
  label.innerText = select.nextElementSibling.textContent + " ";
  const input = document.createElement("input");
  input.type="number";
  // Añadimos el <input> dentro del <label> y el label en el <form>
  label.append(input);
  fieldset.append(label);

  //el botón lo convertimos a elemento parseando el XML
  form.innerHTML+= xml.firstElementChild.lastElementChild.outerHTML;

  // Cargamos las opciones volviendo a leer el fichero con los platos.
  // Sería más eficiente si guardásemos el contenido del fichero en una variable
  // cuando lo leemos por primera vez al cargar la página
  loadXMLDoc( "simple.xml", crearOptions );
}



/**
 * Genera una Card por cada comida en el menú que se lee desde un fichero XML
 * @param {XMLDocument} xml 
 */
const crearCards = (xml) =>{
  const menu = document.querySelector("#menu");

  xml.querySelectorAll("food").forEach(
    f=>{

    const div = document.createElement("div");
    div.classList.add("card");
    
    const nombre = f.children[0].textContent;
    const precio = f.children[1].textContent;
    const descripcion = f.children[2].textContent;
    const calorias = f.children[3].textContent;
    
    div.innerHTML=`
    <h5>${nombre}</h5>
    <p>${descripcion}</p>
    <div>
      <div><span>Precio:</span> ${precio}</div>
      <div><span>Calorías:</span> ${calorias}</div>
    </div>
    `;
    menu.append(div);
  });

}

const cargarMenu = function () {
  loadXMLDoc( "simple.xml", crearCards );
}




//////////////////////
// MAIN
///////////////////

// Cuando se pulse el botón de "realizar pedido" se carga el 
// XML con el formulario, se procesa, se presenta y se elimina el botón
// de "realizar pedido"
document.querySelector("#btnRealizarPedido").addEventListener( 'click',e=>{
  loadXMLDoc( "form.xml", crearForm );
  e.target.remove();
});


cargarMenu();


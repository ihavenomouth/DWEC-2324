"use strict";

///////////////////
// FUNCTIONS
///////////////////

/**
 * Oculta todas las div.formulario asignándole la clase .oculto
 */
const ocultarTodosLosFormularios = () =>{
  //1.- Añadimos la clase oculto a las div.formulario
  document.querySelectorAll(".formulario").forEach( 
    formulario => formulario.classList.add("oculto")
  );
}


/**
 * Realiza el alta de un producto nuevo en el almacén
 */
const altaDeProducto = () => {
  // El objeto creado (de tipo Movil o de tipo Carcasa) se almacenará en el almacen mediante 
  // el método altaProducto que devolverá un booleano indicando si se pudo realizar el 
  // alta correctamente

  //1.- Recuperamos los datos necesarios, primero los comunes
  const idProducto = Number(document.querySelector("[name=txtIdProducto]").value);
  const nombre = document.querySelector("[name=txtNombre]").value;
  const precio = Number(document.querySelector("[name=txtPrecio]").value);

  //2.- Comprobamos si es un móvil o una carcasa
  let tipo = document.querySelector("[name=txtTipo]:checked").value;
 
  let oProducto;  // el producto que vamos a añadir

  if( tipo === "movil"){
    const modelo = document.querySelector("[name=txtModelo]").value;
    const android = document.querySelector("[name=txtAndroid]").checked;
    // Creamos el objeto de tipo móvil y lo añadimos al almacén
    oProducto = new Movil(idProducto, nombre, precio, modelo, android);
  }
  else{
    const material = document.querySelector("#txtMaterial").value;
    // Creamos el objeto de tipo carcasa y lo añadimos al almacén
    oProducto = new Carcasa(idProducto, nombre, precio, material);
  }

  //3.- Añadimos el producto
  if( almacen.altaProducto(oProducto) ){
    divListado.innerHTML = `El producto (${tipo}) ${nombre} con id ${idProducto} se ha añadido correctamente.`;
  }
  else{
    divListado.innerHTML = `No se pudo añadir el producto (${tipo}) ${nombre} con id ${idProducto}. Ese id de producto ya existe en el almacén.`;    
  }

}


/**
 * Realiza la operación de entrada o salida de Stock
 */
const entradaSalidaStock = () => {
  //1.- Recuperamos los datos necesarios para modificar el stock
  const idProducto = Number(document.querySelector("[name=txtIdProductoStock]").value);
  const numUnidades = Number(document.querySelector("[name=txtNumUnidades]").value);
  
  //2.- Modificamos el stock en el almacén
  if(numUnidades>=0){
    divListado.innerHTML = almacen.entradaStock(idProducto, numUnidades);
  } 
  else{
    divListado.innerHTML = almacen.salidaStock(idProducto, numUnidades);
  }
}


const listadoCatalogo = () =>{

  divListado.innerHTML = almacen.listadoCatalogo();
}

const listadoStock = () =>{
  divListado.innerHTML = almacen.listadoStock();
}


///////////////////
// MAIN
///////////////////

//1.- Añadimos la clase oculto a las div.formulario
ocultarTodosLosFormularios();

//2.- Añadimos los addEventListeners a los botones principales
document.querySelector("#btnFormAltaProducto").addEventListener("click", e=>{
  ocultarTodosLosFormularios();
  document.querySelector("#frmAltaProducto").classList.remove("oculto");
});

document.querySelector("#btnFormEntradaSalidaStock").addEventListener("click", e=>{
  ocultarTodosLosFormularios();
  document.querySelector("#frmEntradaSalidaStock").classList.remove("oculto");
});


//3.- Creamos el almacén (por defecto el array de Stock y de producto está vacío)
let almacen = new Almacen();

//4.- Añadimos el addEventListener al botón de alta de producto y modificación de Stock
document.querySelector("#btnAltaProducto").addEventListener("click", altaDeProducto);
document.querySelector("#btnEntradaSalidaStock").addEventListener("click", entradaSalidaStock);

//5.- Recuperamos la división de los listados
const divListado = document.querySelector("#listado");

//6.- Añadimos el addEventListener al botón de Listado de Catálogo y Stock
document.querySelector("#btnListadoCatalogo").addEventListener("click", listadoCatalogo);
document.querySelector("#btnListadoStock").addEventListener("click", listadoStock);


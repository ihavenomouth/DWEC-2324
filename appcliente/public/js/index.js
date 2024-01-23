"use strict";



/////////////////////
// MAIN
///////////////////////

// Ejercicio 1 y 2
// document.querySelector("#btnEnviar").addEventListener("click", async e=>{
//   const frmDatos = document.querySelector("#frmDatos");
//   const formData = new FormData(frmDatos);

//   try{
// 	  const textoRespuesta = await peticionGET("/php/responderGritando.php", formData, false);
//     document.querySelector("#pRespuesta").innerHTML = textoRespuesta;
//   }
//   catch(error){
//     document.querySelector("#pRespuesta").innerHTML = error;
//   }
// });



// Crear la tabla
//-------------------
document.querySelector("#btnCrearTabla").addEventListener("click", async e=>{
  const formData = new FormData();
  
  try{
	  const textoRespuesta = await peticionPOST("/php/crearTablas.php", formData, false);
    document.querySelector("#pRespuesta").innerHTML = textoRespuesta;
  }
  catch(error){
    document.querySelector("#pRespuesta").innerHTML = error;
  }
});


// Crear una tarea
//-------------------
document.querySelector("#btnCrearTarea").addEventListener("click", async e=>{
  // const formData = new FormData(frmTareas);
  
  //También se puede crear el objeto FormData a mano para
  //añadir datos que no estén en el formulario.
  const formData = new FormData();
  formData.append("txtTarea", frmTareas.txtTarea.value);
  formData.append("txtPrioridad", frmTareas.txtPrioridad.value);


  try{
	  const textoRespuesta = await peticionPOST("/php/crearTarea.php", formData, false);
    document.querySelector("#pRespuesta").innerHTML = textoRespuesta;
  }
  catch(error){
    document.querySelector("#pRespuesta").innerHTML = error;
  }
});


// Listar las tareas
//-------------------
document.querySelector("#btnListarTareas").addEventListener("click", async e=>{
  const formData = new FormData();
  try{
	  const tareasJSON = await peticionGET("/php/listarTareas.php", formData, true);
    document.querySelector("#pRespuesta").innerHTML = "<p>Tareas recuperadas con éxito</p>";

    tbodyTareas.innerHTML="";
    for(let tarea of tareasJSON){
      tbodyTareas.innerHTML+=`<tr>
      <td>${tarea.id}</td>
      <td>${tarea.nombre}</td>
      <td>${tarea.prioridad}</td>
      </tr>`;
    }
    tbodyTareas
      .nextElementSibling
      .firstElementChild
      .firstElementChild
      .innerHTML=`Nº de tareas: ${tareasJSON.length}`;
  }
  catch(error){
    document.querySelector("#pRespuesta").innerHTML = error;
  }
});
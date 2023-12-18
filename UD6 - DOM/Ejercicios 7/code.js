"use strict";


///////////////////////////////
// Ejercicio 7
///////////////////////////////

// NOTA: Recuerda que en el local Storage SÓLO se puede
// guardar texto. Por eso stringificamos el array de tareas
// cada vez que se va a guardar y lo parseamos cada vez
// que necesitamos manipularlo

// Recuperamos el localStorage y si había algo guardado
// recreamos la lista
if( localStorage.getItem("tareas") ){
  let tareas = JSON.parse( localStorage.getItem("tareas") );
  for(let t of tareas){
    const li = document.createElement('li');
    li.innerText = t.nombre;

    if(t.completada)
      li.classList.add("completada");
    
    listaTareas.prepend(li);
  }
}
else{
  //  Si no había ninguna lista de tareas, se crea una vacía
  localStorage.setItem("tareas", JSON.stringify([]) );
}



//Creación de una nueva tarea
btnNuevaTarea.addEventListener('click', e=>{
  if( txtTarea.value === "") return;

  //Añadimos la tarea al principio de la lista
  const li = document.createElement('li');
  li.innerText = txtTarea.value;
  listaTareas.prepend(li);

  //Guardamos la tarea en el local Storage
  let tareas = JSON.parse( localStorage.getItem("tareas") );
  tareas.push( {
      nombre: txtTarea.value, 
      completada: false
    });
  localStorage.setItem("tareas", JSON.stringify(tareas) );
});



// Al hacer click en la lista, se añade o quita la clase completada
// También se cambia en el local Storage
listaTareas.addEventListener('click', e=>{
  if(e.target.tagName =="LI"){
    e.target.classList.toggle("completada");
    // e.target.parentElement.append(e.target);

    // Se busca la tarea en el localStorage, se cambia el estado de
    // la propiedad completada y se guarda la actualización
    let tareas = JSON.parse(localStorage.getItem("tareas"));
    let t = tareas.find( t=>t.nombre === e.target.innerText);
    t.completada = !t.completada;

    localStorage.setItem("tareas", JSON.stringify(tareas) );  
  }
});

"use strict";


///////////////////////////////
// Ejercicio 4
///////////////////////////////

listaAlumnos.addEventListener("click",e=>{
  if(e.target.tagName=="LI"){
    if(frmEj1.rbAlumno.value =="aprobado")
      alumnosAprobados.append(e.target)
    else
      alumnosSuspensos.append(e.target);
  }
});


alumnosSuspensos.addEventListener("click",e=>{
  if(e.target.tagName=="LI"){
    listaAlumnos.prepend(e.target);
  }
});

alumnosAprobados.addEventListener("click",e=>{
  if(e.target.tagName=="LI"){
    listaAlumnos.append(e.target);
  }
});



///////////////////////////////
// Ejercicio 5
///////////////////////////////

btnOrdenar.addEventListener("click", e=>{
  let tbody = document.querySelector("#tej5  tbody");

  if(tbody.dataset.orden === "descendente"){
    Array.from(tbody.children).toSorted( 
      (f1,f2) => f1.children[0].innerText>f2.children[0].innerText).forEach( fila => {
      tbody.appendChild(fila);
    });
    tbody.dataset.orden = "ascendente";
    document.querySelector("#tej5 th").innerText="Nombre ⬆️";
  }

  else{
    Array.from(tbody.children).toSorted( 
      (f1,f2) => f1.children[0].innerText>f2.children[0].innerText).forEach( fila => {
      tbody.prepend(fila);
    });
    tbody.dataset.orden = "descendente";
    document.querySelector("#tej5 th").innerText="Nombre ⬇️";
  }
});


btnBuscar.addEventListener("click", e=>{
  divEj2.innerHTML="";

  const buscar = txtNombre.value;

  let tbody = document.querySelector("#tej5 tbody");

  for (let fila of tbody.children){
    if(fila.firstElementChild.innerText.startsWith(buscar)){
      divEj2.innerHTML+=`<p>${fila.firstElementChild.innerText} ${fila.firstElementChild.nextElementSibling.innerText}</p>`;
    }
  }
  // 
});












///////////////////////////////
// Ejercicio 6
///////////////////////////////

const ej6listaAlumnos = document.querySelector("#ej6listaAlumnos");
let ej6Tabla = null;

//Crear la tabla
document.querySelector("#btnCrearTabla").addEventListener('click', e=>{
  
  ej6Tabla = document.createElement("table");
  ej6Tabla.id = "tableEj6";
  document.body.append(ej6Tabla)

  const trheader = document.createElement("tr");
  ej6Tabla.append(trheader)

  const th1 = document.createElement("th");
  th1.innerText="Nombre";
  trheader.append(th1);

  const th2 = document.createElement("th");
  th2.innerText="Apellido";
  trheader.append(th2);

  

  for(let alumno of ej6listaAlumnos.children){
    const nombre = alumno.innerText.split(" ")[0];
    const apellido = alumno.innerText.split(" ")[1];

    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerText = nombre;
    const td2 = document.createElement("td");
    td2.innerText = apellido;

    ej6Tabla.append(tr);
    tr.append(td1, td2);
  }

  //le añadadimos el eventListener AHORA que la tabla existe
  añadirEventListener(ej6Tabla);
});


// Añadir alumno
document.querySelector("#btnAñadirAlumno").addEventListener('click', e=>{
  if(ej6Tabla === null){
    alert("La tabla todavía no ha sido creada");
    return;
  }

  //¿Hay que insertar el alumno al inicio (true) o al final (false)?
  let insertarAlInicio = document.querySelector("#txtInicio").checked;

  let nombre = document.querySelector("#txtNombreAlumno").value;
  let apellido = document.querySelector("#txtApellidoAlumno").value;

  //Añadimos el alumno a la tabla
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.innerText = nombre;
  const td2 = document.createElement("td");
  td2.innerText = apellido;

  tr.append(td1, td2);

  if(insertarAlInicio)
    ej6Tabla.firstElementChild.after(tr);
  else
    ej6Tabla.append(tr);

  // añadimos el alumno a la lista
  const li = document.createElement("li");
  li.innerText = nombre + " " + apellido;
  
  if(insertarAlInicio)
    ej6listaAlumnos.prepend(li);
  else
    ej6listaAlumnos.append(li);

});


//Si se pulsa en un elemento de la lista se coloca el primero
ej6listaAlumnos.addEventListener("click", e=>{
  if(e.target.tagName=="LI"){
    ej6listaAlumnos.prepend(e.target);
  }
});

//Si se pulsa en una fila de la tabla, se hace un clon de la fila
function añadirEventListener(t){
  
  t.addEventListener('click', e=>{
    if(e.target.tagName === "TR"){
      //si es la primera fila, es la cabecera y no se hace nada.
      if(e.target.firstElementChild.tagName === "TH"){
        return;
      }

      //clonamos la fila y sus descendientes (los <td>)
      const clonFila = e.target.cloneNode( true )
      ej6Tabla.append(clonFila);
    }
    else if(e.target.tagName === "TD"){
      //clonamos la fila y sus descendientes (los <td>)
      const clonFila = e.target.parentElement.cloneNode( true )
      t.append(clonFila);
    }
  });
}


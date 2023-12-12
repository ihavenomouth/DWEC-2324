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
    listaAlumnos.append(e.target);
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
  let tbody = document.querySelector("table tbody");
  Array.from(tbody.children).toSorted( 
    (f1,f2) => f1.children[0].innerText>f2.children[0].innerText).forEach( fila => {
    tbody.appendChild(fila);
  });
});


btnBuscar.addEventListener("click", e=>{
  divEj2.innerHTML="";

  const buscar = txtNombre.value;
  let tbody = document.querySelector("table tbody");
  for (let fila of tbody.children){
    if(fila.firstElementChild.innerText.startsWith(buscar)){
      divEj2.innerHTML+=`<p>${fila.firstElementChild.innerText} ${fila.firstElementChild.nextElementSibling.innerText}</p>`;
    }
  }
  // 
});
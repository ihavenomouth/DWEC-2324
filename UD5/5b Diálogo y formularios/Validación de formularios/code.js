"use strict";


// const dialogo = document.querySelector("#dialogo");

// document.querySelector("#btnMostrar").addEventListener('click', ()=>{
//   dialogo.showModal();
// });


frmEj6.addEventListener('submit', e=>{
  
  let errores="";

  if(txtNickname.value.length<3)
    errores+="<p>Nickname: la longitud es menor que 3.</p>";
  if(txtNickname.value.length>8)
    errores+="<p>Nickname: la longitud es mayor que 8.</p>";
  if(!/^[^0-9.,:;][^.,:;]*$/.test(txtNickname.value)){
    errores+="<p>Nickname: no puede empezar por un número ni contener algunos caracteres como el punto o el punto y coma.</p>";
  }
  
  if(txtPassword1.value.length<4)
    errores+="<p>Password 1: la longitud es menor que 3.</p>";
  if(txtPassword1.value.length>8)
    errores+="<p>Password 1: la longitud es mayor que 8.</p>";
  if(!/^[0-9]{4}$/.test(txtPassword1.value)){
    errores+="<p>Password 1: el password debe constar de 4 dígitos.</p>";
  }

  if(txtPassword2.value.length<4)
    errores+="<p>Password 2: la longitud es menor que 3.</p>";
  if(txtPassword2.value.length>8)
    errores+="<p>Password 2: la longitud es mayor que 8.</p>";
  if(!/^[0-9]{4}$/.test(txtPassword2.value)){
    errores+="<p>Password 2: el password debe constar de 4 dígitos.</p>";
  }


  if(txtPassword1.value != txtPassword2.value){
    errores+="<p>Password: los password no coinciden.</p>";
  }

  if(frmEj6.rbNacimiento.value=="si"){
    if(txtDia.value<=0 || txtDia.value>=31)
      errores+="<p>Día de nacimiento: el día debe estar comprendido entre 1 y 31.</p>";
    if(txtMes.value<=0 || txtMes.value>12)
      errores+="<p>Mes de nacimiento: el mes debe estar comprendido entre 1 y 12.</p>";
    if(txtAno.value<1900 || txtAno.value>2023)
      errores+="<p>Año de nacimiento: el mes debe estar comprendido entre 1900 y 2023.</p>";
  }

  let checkboxesMarcados = frmEj6.querySelectorAll("input[type=checkbox]:checked");

  if(checkboxesMarcados.length!=2){
    errores+="<p>Colores: Debe marcar exactamente dos colores.</p>";  
  }


  if(errores.length!=0){
    e.preventDefault();
    let divErrores = document.querySelector("#divErrores");
    divErrores.innerHTML=errores;
    dialogo.showModal();
    return;
  }

  console.log(checkboxesMarcados);

  if(checkboxesMarcados[0].value=="rojo"&& checkboxesMarcados[1].value=="verde"){
    document.body.style="background:yellow;"
  }
  else if(checkboxesMarcados[0].value=="rojo"&& checkboxesMarcados[1].value=="azul"){
    document.body.style="background:purple;"
  }
  else if(checkboxesMarcados[0].value=="verde"&& checkboxesMarcados[1].value=="azul"){
    document.body.style="background:cyan;"
  }
});
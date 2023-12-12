"use strict";


btnNotificar.addEventListener("click", e=>{
  createToast( txtTexto.value );
  txtTexto.focus();
});


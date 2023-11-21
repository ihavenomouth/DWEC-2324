const dialogo = document.querySelector("#dialogo");

document.querySelector("#btnMostrar").addEventListener('click', ()=>{
  dialogo.showModal();
});



dialogo.addEventListener('close', () => {
  console.log('Valor devuelto: '+ dialogo.returnValue); 
  //concebollista o sincebollista
})



//////////////////////
// Recuperar el contenido del radio button seleccionado
//////////////////////

console.log(formulario.rbOpcion.value);

divResultado.innerHTML="Hola caracola";
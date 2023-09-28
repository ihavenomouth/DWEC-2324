"use strict";


///////// func

function validar(){
	let divErrores = document.getElementById("errores");
	divErrores.innerHTML="";

	//1.- Comprobamos que todos los campos están rellenos
	let nombre=document.getElementById("txtNombre").value;
	let edad=document.getElementById("txtEdad").value;
	let turno=document.getElementById("txtTurno").value;

	if(nombre==="" || edad ==="" || turno ===""){
		divErrores.innerHTML += "<p>Hay campos vacíos</p>";
	}

	//2.- Comprobamos que el nombre no tenga más de 20 caracteres
	if(nombre.length>20){
		divErrores.innerHTML += "<p>El nombre no puede tener más de 20 caracteres</p>";
	}

	//3.- Comprobamos que la edad es correcta
	edad=Number(edad);
	if(edad<18 || edad>67){
		divErrores.innerHTML += "<p>La edad debe estar entre 18 y 67 años</p>";
	}

	//4.- Comprobamos que el turno está correcto
	if(turno!=="Mañana" && turno!=="Tarde"){
		divErrores.innerHTML += "<p>El turno debe ser Mañana o Tarde</p>";
	}

	//5.- Comprobamos que la contraseña sea correcta
	let password=document.getElementById("txtPassword1").value;
	let password2=document.getElementById("txtPassword2").value;
	if(password!==password2){
		divErrores.innerHTML += "<p>Las contraseñas no coinciden</p>";
	}
	if (password.length < 6 || password2.length < 6){
		divErrores.innerHTML += "<p>Las contraseñas no pueden tener menos de 6 caracteres</p>";
	}


}

//////// main
document.getElementById("btnValidar").addEventListener("click", validar);
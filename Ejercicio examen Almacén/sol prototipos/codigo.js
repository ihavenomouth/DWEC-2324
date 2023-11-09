"use strict";

///////////////////
// FUNCTIONS
///////////////////
const altaProducto = () =>{
	let idProducto = document.querySelector("[name=txtIdProducto]").value;
	let nombre = document.querySelector("[name=txtNombre]").value;
	let precio = document.querySelector("[name=txtPrecio]").value;

	if( idProducto==="" || nombre==="" || precio===""){
		listado.innerHTML=`Debe indicar todos los datos para poder dar de alta al producto.`;
		return;
	}
	let txtTipo = document.querySelector("[name=txtTipo]:checked");
	if(txtTipo == null){
		listado.innerHTML=`Debe indicar si el producto es un móvil o una carcasa.`;
		return;
	}

	if(txtTipo.value == "movil"){
		let modelo = document.querySelector("[name=txtModelo]").value;
		let android = document.querySelector("[name=txtAndroid]").checked;
		if (modelo === ""){
			listado.innerHTML=`Debe indicar todos los datos para poder dar de alta al producto.`;
			return;
		}

		let oProducto = new Movil(idProducto, nombre, precio, modelo, android);
		if(almacen.altaProducto(oProducto)){
			listado.innerHTML=`Producto ${nombre} añadido correctamente.`;
		}
		else{
			listado.innerHTML=`No se pudo insertar un producto con ese id (ya existe otro producto con ese identificador).`;
		}
	}else{
		let material = document.querySelector("#txtMaterial").value;
		if (material === ""){
			listado.innerHTML=`Debe indicar todos los datos para poder dar de alta al producto.`;
			return;
		}
		let oProducto = new Carcasa(idProducto, nombre, precio, material);
		if(almacen.altaProducto(oProducto)){
			listado.innerHTML=`Producto ${nombre} añadido correctamente.`;
		}
		else{
			listado.innerHTML=`No se pudo insertar un producto con ese id (ya existe otro producto con ese identificador).`;
		}
	}
}


const listadoCatalogo = () =>{
	listado.innerHTML=almacen.listadoCatalogo();
}


const entradaSalidaStock = () =>{

	let idProducto = document.querySelector("[name=txtIdProductoStock]").value;
	let unidades = document.querySelector("[name=txtNumUnidades]").value;

	if( idProducto==="" || unidades==="" || unidades=="0"){
		listado.innerHTML=`Debe indicar todos los datos para poder modificar el stock.`;
		return;
	}
	unidades = Number(unidades);

	if(unidades<0){
		listado.innerHTML=almacen.salidaStock(idProducto, unidades);
	}
	else{
		listado.innerHTML=almacen.entradaStock(idProducto, unidades);
	}
}

const listadoStock = () =>{
	listado.innerHTML=almacen.listadoStock();
}



///////////////////
// MAIN
///////////////////

let almacen = new Almacen();

let listado = document.querySelector("#listado");

document.querySelectorAll("div.formulario").forEach(
	div=>{
		div.classList.add("oculto");
	}
);

const frmAltaProducto = document.querySelector("#frmAltaProducto");
const frmEntradaSalidaStock = document.querySelector("#frmEntradaSalidaStock");


document.querySelector("#btnFormAltaProducto").addEventListener("click", e=>{
	frmAltaProducto.classList.remove("oculto");
	frmEntradaSalidaStock.classList.add("oculto");
}
);

document.querySelector("#btnFormEntradaSalidaStock").addEventListener("click", e=>{
	frmAltaProducto.classList.add("oculto");
	frmEntradaSalidaStock.classList.remove("oculto");
}
);

document.querySelector("#btnAltaProducto").addEventListener("click", altaProducto);

// El evento change sólo se lanza cuando se ha 
let txtTipos = document.querySelectorAll("[name=txtTipo]");

txtTipos.forEach(radio=>
	radio.addEventListener("change", e=>{
		let tipo = document.querySelector("[name=txtTipo]:checked").value;
		if(tipo=="movil"){
			document.querySelector("#fMovil").classList.remove("oculto");
			document.querySelector("#fCarcasa").classList.add("oculto");
		}
		else if(tipo=="carcasa"){
			document.querySelector("#fMovil").classList.add("oculto");
			document.querySelector("#fCarcasa").classList.remove("oculto");
		}
	})
);

document.querySelector("#btnListadoCatalogo").addEventListener('click', listadoCatalogo);

document.querySelector("#btnEntradaSalidaStock").addEventListener('click', entradaSalidaStock);

document.querySelector("#btnListadoStock").addEventListener('click', listadoStock);


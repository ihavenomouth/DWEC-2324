"use strict";


///////////////
// Funciones
///////////////
function añadirProducto(){
	let idProd = document.getElementById("txtProducto").value;
	let nombreProd = arrProductos[idProd][0];
	let precioProd = arrProductos[idProd][1];
	let cantidad=document.getElementById("txtCantidad").value;
	arrCarrito.push([nombreProd, precioProd, cantidad]);
}

function verPedido(){
	alternarFormulario();
	// console.table(arrCarrito);
	let divPedido = document.getElementById('divPedido');

	let tabla= `<table>
		<caption>Carrito de la compra</caption>
		<thead>
			<tr>
				<th>Producto</th><th>Precio</th><th>Cantidad</th><th>Subtotal</th>
			</tr>
		</thead>
		<tbody>`;
	let total=0;
	for(let prod of arrCarrito){
		tabla+="<tr>";
		tabla += `<td>${prod[0]}</td><td>${prod[1]} €</td><td>${prod[2]}</td><td>${(prod[2] * prod[1]).toFixed(2)} €</td>`;
		tabla += "</tr>";
		total += prod[2] * prod[1];
	}
	
	tabla+=`</tbody >
		<tfoot>
			<tr>
				<th colspan="3">Total</th>
				<th>${total.toFixed(2)} €</th>
			</tr>
		</tfoot>
	</table >`;
	tabla +=`<button type="button" class="noprint" onClick="alternarFormulario()">Seguir comprando</button> `;
	tabla +=`<button type="button" class="noprint" onClick="window.print()">Imprimir</button>`;

		divPedido.innerHTML = tabla;
}

function alternarFormulario(){
	document.getElementById("divPedido").classList.toggle("oculto");
	document.getElementById("formAnadirProducto").classList.toggle("oculto");
}

///////////////
// Main
///////////////


//1.- añadimos los productos al select
let arrProductos = [
	["Ambientador", 1.25],
	["Queso en lonchas", 2.80],
	["Turrón de chocolate", 1.70],
	["Chirimoya", 1.54],
	["Granada", 0.48],
	["Arroz", 1.30],
];

for(let i=0;i<arrProductos.length;i++){
	let precio = arrProductos[i][1];
	let nombre = arrProductos[i][0];
	document.getElementById("txtProducto").innerHTML += `<option value="${i}">${nombre} (${precio} €)</option>`;
};

//2.- Creamos el array del carrito
let arrCarrito = [];

//3.- Recuperamos el botón que permite añadir un producto al carrito
let btnAñadir = document.getElementById("btnAñadir");
btnAñadir.addEventListener("click", añadirProducto);

//4.- Recuperamos el botón que permite ver el pedido
let btnVerPedido = document.getElementById("btnVerPedido");
btnVerPedido.addEventListener("click", verPedido);

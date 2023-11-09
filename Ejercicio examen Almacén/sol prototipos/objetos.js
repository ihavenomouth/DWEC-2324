"use strict";

function Almacen(){
  this.catalogo=[];
  this.stock=[];
}

Almacen.prototype.altaProducto = function(oProducto){ 
  if(this.catalogo.some( p=>p.id == oProducto.id ) ){
    return false;
  }
  else{
    this.catalogo.push(oProducto);
    return true;
  }
};

Almacen.prototype.entradaStock = function(idProducto, unidades){ 
  let existeProducto = this.catalogo.some( p=>p.id === idProducto);
  if(existeProducto){
    let oStock = new StockProducto(idProducto, unidades);
    this.stock.push(oStock);
    return "Modificado el stock del producto " +idProducto + ", actualmente hay " + this.numUnidadesStock(idProducto);
  }
  else {
    return "No se pudo modificar el stock, no se encontró un producto con id " +idProducto;
  }
};

Almacen.prototype.salidaStock = function(idProducto, unidades){ 
	return this.entradaStock(idProducto, unidades);
};

Almacen.prototype.listadoCatalogo = function(){ 
	let s=`<table><tr><td>id</td><td>nombre</td><td>precio</td><td>Android/Material</td></tr>`;
  for(let p of this.catalogo){
    s+=`${p.toHTMLRow()}`;
  }
  s+="</table>";
  return s;
};

Almacen.prototype.listadoStock = function(){ 
  let arrMoviles = this.catalogo.filter( p=>p instanceof Movil);
  let arrCarcasas = this.catalogo.filter( p=>p instanceof Carcasa);

  let s=`<h3>Móviles</h3><table><tr><td>id</td><td>nombre</td><td>unidades</td></tr>`;
  for(let p of arrMoviles){
    s+=`<tr><td>${p.id}</td><td>${p.nombre}</td><td>${this.numUnidadesStock(p.id)}</td></tr>`;
  }
  s+="</table>";
  s+=`<h3>Carcasas</h3><table><tr><td>id</td><td>nombre</td><td>unidades</td></tr>`;
  for(let p of arrCarcasas){
    s+=`<tr><td>${p.id}</td><td>${p.nombre}</td><td>${this.numUnidadesStock(p.id)}</td></tr>`;
  }
  s+="</table>";
  return s;
};

//numCarcasaStock se cambia a 
Almacen.prototype.numUnidadesStock = function(idProducto){ 
	return this.stock.filter( p=>p.idProducto==idProducto).reduce( (acc,v)=>acc+v.unidades , 0);
};

Almacen.prototype.importeTotalStock = function(){ 
	
};

//////////////////
// StockProducto
//////////////////
function StockProducto(idProducto, unidades){
  this.idProducto=idProducto;
  this.unidades=unidades;
}

StockProducto.prototype.toHTMLRow = function(){ 
	
};

////////////////////
// Producto
////////////////////
function Producto(id, nombre,precio){
  this.id=id;
  this.nombre=nombre;
  this.precio=precio;
}

Producto.prototype.toString = function(){ 
	//Borrarlo
};

function Movil(id, nombre, precio,modelo, android){
	Producto.call(this,id, nombre, precio);
  this.modelo=modelo;
  this.android=android;
}

Movil.prototype.toHTMLRow = function(){ 
	return `<tr><td>${this.id}</td><td>${this.nombre}</td><td>${this.precio}</td><td>${this.android==true?"Android":"No android"}</td></tr>`;
};

function Carcasa(id, nombre, precio,material){
	Producto.call(this,id, nombre, precio);
  this.material=material;
}

Carcasa.prototype.toHTMLRow = function(){ 
  return `<tr><td>${this.id}</td><td>${this.nombre}</td><td>${this.precio}</td><td>${this.material}</td></tr>`;
};




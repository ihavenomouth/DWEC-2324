"use strict";

class Almacen {
  // Constructor de la clase
  constructor( catalogo=[], stock=[]) {
    this.catalogo = catalogo;
    this.stock = stock;
  }

  /**
   * Da de alta a un producto en el almacén
   * @param {Producto} oProducto 
   * @returns {Booelan} true = se realizó el alta, false = no se realizó el alta 
   */
  altaProducto(oProducto) {
    const yaExisteEseId = (this.catalogo.some( p=>p.id === oProducto.id) );

    if( yaExisteEseId )
      return false;

    this.catalogo.push(oProducto);
    return true;
  }

  /**
   * Añade Stock de un producto
   * @param {Number} idProducto 
   * @param {Number} numUnidades 
   * @returns {String} Mensaje indicando si se realizó la operación correctamente o no
   */
  entradaStock(idProducto, numUnidades){
    const yaExisteEseId = (this.catalogo.some( p=>p.id === idProducto) );
    // Si el producto existe en el almacén, podemos modificar su stock
    if( yaExisteEseId ){
      const oStock = new StockProducto(idProducto, numUnidades);
      almacen.stock.push(oStock);

      // Calculamos el total de Stock de ese producto
      const totalStock = this.stock.filter( p=>p.idProducto === idProducto ).reduce( (acc,p)=>acc+p.unidades , 0);

      return `El stock del producto ${idProducto} se ha modificado correctamente. Quedan ${totalStock} unidades.`;
    }
    
    return `No se pudo realizar el cambio de stock del producto ${idProducto} porque no se encontró en el almacén.`;
  }

    /**
   * Quita Stock de un producto
   * @param {Number} idProducto 
   * @param {Number} numUnidades 
   * @returns {String} Mensaje indicando si se realizó la operación correctamente o no
   */
  salidaStock(idProducto, numUnidades){
    return this.entradaStock(idProducto,numUnidades);
  }


  listadoCatalogo(){
    let s;
    s =  "<table><caption>Listado catálogo</caption>";
    s += "<thead><tr><th>ID</th><th>Nombre</th><th>Precio</th><th>Android/Material</th></tr></thead>";
    s += "<tbody>";
    
    for(let producto of this.catalogo){
      s += producto.toHTMLRow();
    }
  
    s += "</tbody></table>";
    return s;
  }


  listadoStock(){
    let s;
    s =  "<table><caption>Stock Móviles</caption>";
    s += "<thead><tr><th>ID</th><th>Nombre</th><th>Nº unidades</th></tr></thead>";
    s += "<tbody>";

    // Filtramos el catálogo quedándonos sólo con los móviles
    const arrMoviles = this.catalogo.filter( p => p instanceof Movil);
    
    for(let movil of arrMoviles){
      let numUnidadesStock = this.stock.filter( p=>p.idProducto === movil.id ).reduce( (acc,p)=>acc+p.unidades , 0);
      s += `<tr><td>${movil.id}</td><td>${movil.nombre}</td><td>${numUnidadesStock}</td></tr>`;
    }
    s += "</tbody></table>";

    //Ahora hacemos lo mismo para las carcasas
    s +=  "<table><caption>Stock Carcasas</caption>";
    s += "<thead><tr><th>ID</th><th>Nombre</th><th>Nº unidades</th></tr></thead>";
    s += "<tbody>";

    // Filtramos el catálogo quedándonos sólo con los móviles
    const arrCarcasas = this.catalogo.filter( p => p instanceof Carcasa);
    
    for(let carcasa of arrCarcasas){
      let numUnidadesStock = this.stock.filter( p=>p.idProducto === carcasa.id ).reduce( (acc,p)=>acc+p.unidades , 0);
      s += `<tr><td>${carcasa.id}</td><td>${carcasa.nombre}</td><td>${numUnidadesStock}</td></tr>`;
    }
    s += "</tbody></table>";

    return s;

  }


  numCarcasa(){}
  importeTotalStock(){}
}





class StockProducto {
  // Constructor de la clase
  constructor(idProducto, unidades) {
    this.idProducto = idProducto;
    this.unidades = unidades;
  }

  toHTMLRow() {
  }
}





class Producto {
  // Constructor de la clase
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }

  toString() {
  }
}





class Movil extends Producto {
  // Constructor de la clase
  constructor(id, nombre, precio, modelo, android) {
    super(id,nombre,precio);
    this.modelo = modelo;
    this.android = android;
  }

  toHTMLRow() {
    let and = "No android";
    if(this.android) and="Android";

    return `<tr><td>${this.id}</td><td>${this.nombre}</td><td>${this.precio}</td><td>${and}</td></tr>`;
  }
}





class Carcasa extends Producto {
  // Constructor de la clase
  constructor(id, nombre, precio, material) {
    super(id,nombre,precio);
    this.material = material;
  }

  toHTMLRow() {
    return `<tr><td>${this.id}</td><td>${this.nombre}</td><td>${this.precio}</td><td>${this.material}</td></tr>`;
  }
}
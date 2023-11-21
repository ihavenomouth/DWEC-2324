"use strict";

class Tienda{
  constructor(tBicis=[], numVentas=0){
    this.tBicis = tBicis;
    this.numVentas = numVentas;
    this.numCarretera=0;
    this.numMontaña = 0;
    this.numTotal = 0;
    this.numVenta = 0;
  }

  altaBicicleta(oBici){ 
    const existeEseLocalizador = (
      this.tBicis.some(b=>b.localizador === oBici.localizador) 
    );
    
    if(existeEseLocalizador)
      return false;

    this.tBicis.push(oBici);
    return true;
  }



  ventaBici(sLocalizador){
    let bici = this.tBicis.find( b=>b.localizador=== sLocalizador);
    
    if(bici){
      if(bici.vendida){
        return "Bicicleta ya vendida";
      }
      else{
        bici.vendida = true;
        return "Bicicleta vendida";
      } 
    }
    else{
      return "La bicicleta no existe";
    }
  }



  listadoCarretera(){
    return tabla;
  }
  listadoMontania(){
    return tabla;
  }
  listadoGeneral(){
    return tabla;
  }
}










//////////////
// Bicicletas
//////////////

function Bicicleta(localizador, año, vendida){
  this.localizador=localizador;
  this.año=año;
  this.vendida=vendida;
}

Bicicleta.prototype.toHTMLrow = function(){ 
  return `${this.x}, ${this.y}, ${this.z}`
};










/////////////////////
// Carretera
/////////////////////

function Carretera(localizador, año, vendida, numPlatos){
  Bicicleta.call(this,localizador,año, vendida);
  this.numPlatos=numPlatos;
}

Carretera.prototype.toHTMLrow = function(){ 
  return `<tr><td>${this.localizador}</td><td>${this.año}</td><td>${this.vendida? '✅':'❎'}</td><td>${this.numPlatos}</td></tr>`
};

// Establecemos la herencia
Object.setPrototypeOf( Carretera.prototype, Bicicleta.prototype );



/////////////////////
// Montaña
/////////////////////

function Montaña(localizador, año, vendida, numSuspensiones){
  Bicicleta.call(this,localizador,año, vendida);
  this.numSuspensiones=numSuspensiones;
}


Montaña.prototype.toHTMLrow = function(){ 
  return `<tr><td>${this.localizador}</td><td>${this.año}</td><td>${this.vendida? '✅':'❎'}</td><td>${this.numSuspensiones}</td></tr>`
};

// Establecemos la herencia
Object.setPrototypeOf( Montaña.prototype, Bicicleta.prototype );


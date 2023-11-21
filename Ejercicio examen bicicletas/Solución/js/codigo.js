"use strict";


////////////////
// FUNCTIONS
//////////////////
const ocultarTodoslosFormularios=()=>{
  document.querySelectorAll(".form-horizontal").forEach( f=>{
    f.classList.add("oculto");
  });
}




const altaBicicleta=()=>{
  //leermos los atributos comunes
  const localizador = document.querySelector("#txtLocalizador").value;
 
  const año = document.querySelector("#lstAnio").value;

  const tipo = document.querySelector("[name=rbtTipoBicicleta]:checked").value;
  
  
  //Tipo == "carretera" o "montana"
  let oBici;

  if(tipo === "carretera"){
    const numPlatos = document.querySelector("#txtPlatos").value;
    oBici = new Carretera(localizador, año, false,numPlatos);
  }
  else{
    const numSuspensiones = document.querySelector("#txtSuspensiones").value;
    oBici = new Montaña(localizador, año, false,numSuspensiones);
  }

  // Añadimos la bicicleta
  if( tienda.altaBicicleta(oBici) ){
    alert("Alta bicicleta OK");
  }
  else{
    alert("Bicicleta registrada previamente");
  }

  //ocultamos el formulario
  ocultarTodoslosFormularios();
}





const ventaBicicleta=()=>{
  //leermos los atributos comunes
  const localizador = document.querySelector("#txtLocalizadorVenta").value;
 
  const respuesta = tienda.ventaBici(localizador);
  alert(respuesta);
}




const calculoTotales = () =>{
  const totalBicicletas = tienda.tBicis.length;
  const totalCarretera = tienda.tBicis.filter( b=>b instanceof Carretera).length;
  const totalMontaña = tienda.tBicis.filter( b=>b instanceof Montaña).length;
  const totalVentas = tienda.tBicis.filter( b=>b.vendida).length;
  const totalNovendidas = tienda.tBicis.filter( b=>!b.vendida).length;


  // let contador = 0;
  // for(let i=0; i<tienda.tBicis.length;i++){
  //   if( tienda.tBicis[i] instanceof Montaña)
  //     contador++;
  // }


  const totales = document.querySelector("#totales");
  totales.innerHTML=`
  <h3>Bicicletas de carretera: ${totalCarretera} </h3>
  <h3>Bicicletas de montaña: ${totalMontaña} </h3>
  <h3>Total de bicicletas: ${totalBicicletas} </h3>
  <h3>Total de ventas: ${totalVentas} </h3>
  <h3>Total no vendidas: ${totalNovendidas} </h3>
  `;
}



const mostrarListados = () =>{
  const totales = document.querySelector("#totales");

  let s=`<table>
    </tr>
        <th>localizador</th><th>año</th><th>vendida</th><th>numSuspensiones</th>
    </tr>`;
    
  const montañas = tienda.tBicis.filter( b=>b instanceof Montaña);
  for(let b of montañas){
    s+= b.toHTMLrow();
  }

  s+="</table>";

  s+=`<table>
  </tr>
      <th>localizador</th><th>año</th><th>vendida</th><th>numSuspensiones</th>
  </tr>`;
  
  const carreteras = tienda.tBicis.filter( b=>b instanceof Carretera);
  for(let b of carreteras){
    s+= b.toHTMLrow();
  }

  s+="</table>";
  totales.innerHTML=s;

}



//////////////////
// MAIN
//////////////////
//1.- Ocultamos todos los formularios
ocultarTodoslosFormularios();


//2.- Mostramos los formularios
document.querySelector("#btnMostrarAlta").addEventListener("click", e=>{
  ocultarTodoslosFormularios();
  document.querySelector("[form=frmAltaBicicleta]").classList.remove("oculto");
});

document.querySelector("#btnMostrarVenta").addEventListener("click", e=>{
  ocultarTodoslosFormularios();
  document.querySelector("[form=frmVentaBicicleta]").classList.remove("oculto");
});

//3.- Alta de bicicleta
document.querySelector("#btnAltaBicicleta").addEventListener("click", e=>{
  altaBicicleta(e);
});


//4.- Venta de bicicleta
document.querySelector("#btnVentaBicicleta").addEventListener("click", e=>{
  ventaBicicleta();
});

//5.- Creamos el objeto Tienda
let tienda = new Tienda([],0);

//6.- Cálculo de totales
document.querySelector("#btnMostrarTotales").addEventListener("click", e=>{
  calculoTotales();
});

//6.- Mostrar listados
document.querySelector("#btnMostrarListado").addEventListener("click", e=>{
  mostrarListados();
});


"use strict"

/***************************
	FUNCTIONS
***************************/

/*
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.async = false;
    
    script.onload = callback;

    document.body.append(script);
  }



const generar = () => {

    const hCalc = () => {
      let n1 = Number(document.querySelector("#n1").value);
      let n2 = Number(document.querySelector("#n2").value);
        
        // Crear un libro nuevo
        let libro = XLSX.utils.book_new();

  
        // Crear una hoja nueva
        let hoja = XLSX.utils.aoa_to_sheet([
            ['Número 1', 'Número 2', 'Resultado'],
            [10, 20, {t:'n', f:'A2+B2'}],
            [n1, n2, {t:'n', f:'A3+B3'}]
        ]);
  
        // Agregar la hoja al libro
        XLSX.utils.book_append_sheet(libro, hoja, 'Hoja 1');
  
        // Guardar el libro en formato ODS
        XLSX.writeFile(libro, 'ejemplo.ods');
    }

    if (typeof XLSX == 'undefined') {
     loadScript('https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.9/xlsx.full.min.js', hCalc);
    }
    else{
        hCalc();
    }
}
*/

// Función que devuelve una promesa que se resuelve cuando la biblioteca SheetJS está cargada
const cargarJS = url => {
  return new Promise(  (resolve, reject) =>{
    // Comprobar si la biblioteca ya está cargada
    if (typeof XLSX !== 'undefined') {
      resolve();
    } else {
      // Crear el elemento script
      var script = document.createElement('script');

      // Asignar la URL de la biblioteca SheetJS al atributo src del elemento script
      script.src = url;

      // Añadir un evento onload que resuelve la promesa cuando la biblioteca está cargada
      script.onload = resolve;

      // Añadir el elemento script al documento
      document.body.appendChild(script);
    }
  });
}



// Función asincrónica que espera a que se cargue la biblioteca SheetJS y luego genera la hoja de cálculo
const generar = async () => {
  //Sin el number se generará en la hcalc como '125 en vez de 125
  let n1 = Number(document.querySelector("#n1").value);
  let n2 = Number(document.querySelector("#n2").value);
  
  
  // Esperar a que se cargue la biblioteca SheetJS
  await cargarJS('https://cdn.sheetjs.com/xlsx-0.19.2/package/dist/xlsx.full.min.js');
  //await cargarJS('https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.9/xlsx.full.min.js');

  // Crear un libro nuevo
  let libro = XLSX.utils.book_new();

  // Crear una hoja nueva
  let hoja = XLSX.utils.aoa_to_sheet([
      ['Número 1', 'Número 2', 'Resultado'],
      [10, 20, {t:'n', f:'A2+B2'}],
      [n1, n2, {t:'n', f:'A3+B3', s: { bgColor: {rgb: '445566'}, color: {rgb: 'ccddee'} } }]
  ]);

  // Agregar la hoja al libro
  XLSX.utils.book_append_sheet(libro, hoja, 'Hoja 1');

  // Guardar el libro en formato ODS
  XLSX.writeFile(libro, 'ejemplo.ods');
}



/*
   //También se puede usar una tabla HTML como fuente
    const table = document.getElementById("Table2XLSX");
    const wb = XLSX.utils.table_to_book(table);

    // Export to file (start a download)
    XLSX.writeFile(wb, "SheetJSTable.xlsx");
*/

/***************************
	MAIN
***************************/
//let XLSX;

document.querySelector("#btnGenerar").addEventListener('click', generar);



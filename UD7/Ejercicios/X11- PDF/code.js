"use strict"

/***************************
	FUNCTIONS
***************************/
function PDF(){
    let d ={
        doc: new jsPDF(),
        imprimeEncabezado1: imprimeEncabezado1,
        imprimeEncabezado2: imprimeEncabezado2,
        imprimePárrafo: imprimePárrafo,
        líneasEnUnaPágina: 55,
        save: function(formato){ this.doc.save(formato);}
    }
    return d;
}





/**
 * Imprime un encabezado de nivel 1 en el PDF más grande y devuelve la pos vertical
 * del siguiente elemento.
 * @param {string} título 
 * @param {number} y 
 */
function imprimeEncabezado1( título, y ){
    let distanciaLíneas = 5; //la separación entre líneas
    let espacioLibreEnLaPágina = this.líneasEnUnaPágina*distanciaLíneas - y;
    if(espacioLibreEnLaPágina <40){
        this.doc.addPage();
    }

    y+=10;
    this.doc.setFontSize(22);
    this.doc.text( título, 20, y);//texto, x, y

    return y+20;
}



/**
 * Imprime un encabezado de nivel 2 en el PDF más grande y devuelve la pos vertical
 * del siguiente elemento.
 * @param {string} título 
 * @param {number} y 
 */
function imprimeEncabezado2( título, y ){

    let distanciaLíneas = 5; //la separación entre líneas
    let espacioLibreEnLaPágina = this.líneasEnUnaPágina*distanciaLíneas - y;
    if(espacioLibreEnLaPágina <35){
        this.doc.addPage();
    }

    y+=10;

    this.doc.setFontSize(18);
    this.doc.text( título, 20, y);//texto, x, y

    return y+16;
}



/**
 * imprime un párrafo en el PDF
 * @param {string} texto 
 * @param {number} y 
 */
function imprimePárrafo( texto, y ){
    this.doc.setFontSize( 12 ); //tamaño del texto 12
    
    let líneasEnUnaPágina = this.líneasEnUnaPágina;//¿cuántas líneas caben en las páginas?
    let distanciaPárrafos = 5; //la distancia entre un párrafo y el siguiente
    let distanciaLíneas   = 5; //la separación entre líneas

    let espacioLibreEnLaPágina = líneasEnUnaPágina*distanciaLíneas - y;
    let líneasQueCaben = Math.floor(espacioLibreEnLaPágina/distanciaLíneas);

    //¿Cuántas líneas tiene el párrafo?
    let líneasPárrafo = this.doc.splitTextToSize( texto, 170 ); //210mm ancho - 20mm..margen izq - 20 mm. margen der
    
    if(líneasPárrafo.length<=líneasQueCaben){
        //imprimimos el párrafo entero, porque cabe
        this.doc.text( texto, 20, y, {maxWidth: "170", align: "justify"} );
        //calculamos la posición del siguiente párrafo
        y += distanciaPárrafos + líneasPárrafo.length*distanciaLíneas;
    }else{
        //Si no caben todas las líneas, imprimimos las que caben,
        //empezamos una nueva página y luego imprimimos el resto
        let textoQueCabe = líneasPárrafo.splice(0,líneasQueCaben);
        this.doc.text( textoQueCabe, 20, y, {maxWidth: "170", align: "justify"} );
        this.doc.addPage();
        this.doc.text( líneasPárrafo, 20, 20, {maxWidth: "170", align: "justify"} );
        y = 20+distanciaPárrafos + líneasPárrafo.length*distanciaLíneas;
    }

    return y;
}




function acción(){
    
    let doc = PDF();

    let offsetVertical = doc.imprimeEncabezado1( txtTítulo.value, 20 );
        
    //dividimos el texto a imprimir en párrafos
    let párrafos = txtTexto.value.split("\n");

    for(let p = 0; p<párrafos.length; p++){
        offsetVertical = doc.imprimePárrafo( párrafos[p], offsetVertical );
        if(p==4){
            offsetVertical = doc.imprimeEncabezado1( "Hola caracola", offsetVertical );
        }       
    }

    doc.save('a4.pdf')
}





	// //El encabezado de la página
	// doc.setFontSize(22);
	// doc.text( "CDP Tareas", 20, 20)
	// //La tabla de ejemplo sin usar autotable
	// doc.table(10, 30, [
	// 	{id: "1", Tarea:"Completar la documentación", Completada:"X"},
	// 	{id: "3", Tarea:"Pasar la ITV", Completada:" "},
	// 	{id: "7", Tarea:"Declaración de la renta", Completada:"X"}
	// ], ["id", "Tarea", "Completada"]);

	// doc.save('documento.pdf');


    /* Tabla con colores por defecto */
    // const data = [
    //   ["Nombre", "Apellido", "Edad"],
    //   ["Juan", "Pérez", "25"],
    //   ["María", "García", "35"],
    //   ["Luis", "Fernández", "42"]
    // ];
    
    // doc.autoTable({
    //   head: [data[0]],
    //   body: data.slice(1)
    // });
    
    // doc.save("tabla.pdf");
    
const generarPDF = () => {
	const doc = new jsPDF('p', 'mm','a4',true);

	doc.setFontSize(12);
	//Nota: la coordenada Y en el texto es donde se encuentra la base del texto, el texto de abajo no se verá:
	doc.text("Hola caracola", 10, 0); //X=10mm, Y=0

    // Establecer el tamaño de fuente para el título
	doc.setFontSize(20);
	// Agregar el título "Documento PDF"
	doc.text("Documento PDF", 105, 20, { align: "center" }); // Como la alineación es centrada, se indica el punto central (210mm/2 = 105mm)
	

	// Establecer el tamaño de fuente para el párrafo
	doc.setFontSize(12);
	let espaciadoPárrafos = 10; // podríamos probar con doc.internal.getLineHeight(), pero eso devuelve el valor en pt
	let posY = 40;
	
	doc.text("¡El primer párrafo en jsPDF!", 10, posY); //x=10, y=40, dejamos un poco de espacio extra (20mm) con el párrafo de arriba, luego dejaremos sólo 10mm)

	posY += espaciadoPárrafos;	
	doc.text("¡El segundo párrafo en jsPDF!", 10, posY);

	
	//estamos llevando el control de la coordenada y a mano, pero y si tenemos un párrafo muy largo que ocupe varias líneas?
	
	
	// Agregamos un párrafo grande que no cabe en la página
	let textoLargo = "Recuerda que la documentación oficial de jsPDF y jsPDF-AutoTable tiene mucha información detallada sobre todas las opciones y funcionalidades disponibles; Te recomendamos que la busques y resuelvas tus dudas ¡Mucho éxito en tus proyectos!";
	let lineasTextoLargo = doc.splitTextToSize(textoLargo, 190); // dividir el texto en líneas de 190 unidades de ancho (190mm de los 210mm que tiene un a4, si queremos 2cm habría que indicar 170)
	
	posY+=espaciadoPárrafos;
	doc.text(lineasTextoLargo, 10, posY);

	//necesitamos ahora calcular la posY de la última línea:
   let posYÚltimaLínea = posY + (lineasTextoLargo.length-1) * (doc.getFontSize()*0.4 ); //aprox: 1pt es 0.35 mm (aprox) + 0.05mm de margen

	//calculamos la nueva posición Y
	posY = posYÚltimaLínea + espaciadoPárrafos;	
	doc.text("¡Ánimo y suerte!", 10, posY);


	//Vamos a añadir una tabla, usaremos autotable para ello para mejorar la estética, pero no es necesario
	//jsPDF proporciona la posibilidad de añadir tablas (aunque muy feas)
	
	//doc.addPage(); // Podemos agregar un salto de página para que la tabla se genere aparte
	 posY+= espaciadoPárrafos;
	
	//la posiciónY de un texto es la de la línea base del texto, pero de una fila es la del borde superior.
	//No sabemos cuánto ocupará una tabla hasta que no la hemos dibujado completamente
	 
    /* Tabla cambiando colores por defecto y destacando una fila */
    doc.autoTable({
        head: [['Name', 'Email', 'Country']],
        body: [
          ['David', 'david@email.com', 'USA'],
          ['Maria', 'maria@email.com', 'Spain'],
          ['Pedro', 'pedro@email.com', 'Italy'],
          ['Juan', 'juan@email.com', 'Spain'],
          ['Carlos', 'carlos@email.com', 'Italy'],
        ],
        startY: posY, //si no lo indicamos se generará la tabla sobre el texto
        headStyles: {
            fillColor: '#456',
            textColor: '#fff',
            fontSize: 14
            /*
            //Otras propiedades disponibles
            fontWeight: 'bold',
            borderBottom: {width: 0.1, color: '#fff'},
            padding: 2
            */
          },
        didParseCell: function(data) {
          if (data.row.index === 1) { //destacamos la segunda fila
            data.cell.styles.fillColor = [80, 130, 255];
            data.cell.styles.textColor = 255;
          }
        }
      });
      
      //recuperamos la posición del borde inferior de la tabla.
      //y le añadimos el espacioado. 
      posY = doc.lastAutoTable.finalY + espaciadoPárrafos;
	   doc.text("--[ Fin del documento ]--", 10, posY);
	
      doc.save("tabla2.pdf");
      
}




/***************************
	MAIN
***************************/
//Necesario para generar PDF
// window.jsPDF = window.jspdf.jsPDF;
let jsPDF = window.jspdf.jsPDF;


//1.- Recuperamos las etiquetas HTML
let txtTexto = document.querySelector("#txtTexto");
let txtTítulo = document.querySelector("#txtTítulo");

//2.- Asignamos las funciones a los botones
document.querySelector("#btnAcción").addEventListener('click', acción);
document.querySelector("#btnGenerar").addEventListener('click', generarPDF);



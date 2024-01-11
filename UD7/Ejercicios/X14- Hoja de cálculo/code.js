"use strict"

/***************************
	FUNCTIONS
***************************/

// Función que devuelve una promesa que se resuelve cuando la biblioteca está cargada
// La variable cargada es un cerrojo para que no se vuelva a cargar dos veces la misma biblioteca
const cargarJS = (url , cargada) => {
  return new Promise(  (resolve, reject) =>{
    // Comprobar si la biblioteca ya está cargada
    if (cargada) {
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



// Función que genera la hoja de cálculo
/*const generar = () => {

  let n1 = Number(document.querySelector("#n1").value);
  let n2 = Number(document.querySelector("#n2").value);

  let arrContenido=['<html lang="es"><head><meta charset="utf-8" /><meta http-equiv="Content-Language" content="es_ES"><head><body>'];
  arrContenido.push('<table><tr bgcolor="navy"><th>Dato 1</th><th>Dato 2</th><th style="background-color: navy">Resultado</th></tr>');
  arrContenido.push(`<tr><td>${n1}</td><td>${n2}</td><td>=A2+B2</td></tr>`);
  arrContenido.push('<tr><td bgcolor="black" color="yellow">Total</td><td>=SUM(A2:C2)</td></tr>');
  arrContenido.push('</table></body></html>');
  
  let fichero = new File(arrContenido, { type: "application/vnd.oasis.opendocument.spreadsheet; charset=UTF-8; lang=es_Es" })
  var url = window.URL.createObjectURL(fichero);
  let divURL = document.querySelector('#urlFichero');
  divURL.innerHTML = '<a download="hcalc.xlsx" href="' + url + '">Descargar Hoja de cálculo</a>'
}*/




const generar = async () => {
  let n1 = Number(document.querySelector("#n1").value);
  let n2 = Number(document.querySelector("#n2").value);
    
  let styles = [
      {name:'ce1', color:"#6666ff", bold:false, backgroundcolor: "#ffffff", fontsize:"24pt" },
      {name:'ce2', color:"#cadaff", bold:false, backgroundcolor: "#3d4a6e" },
      {name:'ce3', color:"#ff6666", bold:true , backgroundcolor: "#ffffff" },
  ];
  let content=[
      [{v:"Prueba de concepto", t:'string', s:'ce1'}],
      [],
      [{v:"Dato 1", t:'string', s:'ce3'}, {v:"Dato 2", t:'string', s:'ce3'}, {v: "Suma",        t:'string'  , s:'ce3'}],
      [{v: n1,      t:'float'}          , {v: n2,      t:'float'}          , {v: "=A4+B4",      t:'float'   , s:'ce3', formula: "=[.A4]+[.B4]"}],
      [{v: "Total", t:'string', s:'ce2'}, {v: "",      t:'string', s:'ce2'}, {v: "=SUM(A4:C4)", t:'float'   , s:'ce3', formula: "=SUM([.A4:.C4])"}],
  ];

  let contentXML = generarContentXML( content, styles);
  let metaXML = generarMetaXML();
  let manifestXML = generarManifestXML();

  await cargarJS("jszip.min.js", cargadaBibliotecaZIP);
  cargadaBibliotecaZIP = true;
  // Crea una instancia de JSZip
  const zip = new JSZip();

  // Agrega los archivos al archivo comprimido
  zip.file("content.xml", contentXML);
  zip.file("meta.xml", metaXML);
  zip.file("META-INF/manifest.xml", manifestXML);

  // Genera el blob del archivo comprimido
  zip.generateAsync({ type: "blob" }).then(function (blob) {
    // Añade la URL del archivo al HTML
    var url = window.URL.createObjectURL(blob);
    let divURL = document.querySelector('#urlFichero');
    divURL.innerHTML = '<a download="hcalc.ods" href="' + url + '">Descargar hoja de cálculo</a>';
  });
}




const generarContentXML = (content, styles=null) => {

   let filecontent = `<?xml version="1.0" encoding="UTF-8"?>
<office:document-content xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:ooo="http://openoffice.org/2004/office" xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0" xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0" xmlns:rpt="http://openoffice.org/2005/report" xmlns:draw="urn:oasis:names:tc:opendocument:xmlns:drawing:1.0" xmlns:dr3d="urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0" xmlns:svg="urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0" xmlns:chart="urn:oasis:names:tc:opendocument:xmlns:chart:1.0" xmlns:table="urn:oasis:names:tc:opendocument:xmlns:table:1.0" xmlns:number="urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0" xmlns:ooow="http://openoffice.org/2004/writer" xmlns:oooc="http://openoffice.org/2004/calc" xmlns:of="urn:oasis:names:tc:opendocument:xmlns:of:1.2" xmlns:xforms="http://www.w3.org/2002/xforms" xmlns:tableooo="http://openoffice.org/2009/table" xmlns:calcext="urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0" xmlns:drawooo="http://openoffice.org/2010/draw" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:loext="urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0" xmlns:field="urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0" xmlns:math="http://www.w3.org/1998/Math/MathML" xmlns:form="urn:oasis:names:tc:opendocument:xmlns:form:1.0" xmlns:script="urn:oasis:names:tc:opendocument:xmlns:script:1.0" xmlns:formx="urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0" xmlns:dom="http://www.w3.org/2001/xml-events" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:grddl="http://www.w3.org/2003/g/data-view#" xmlns:css3t="http://www.w3.org/TR/css3-text/" xmlns:presentation="urn:oasis:names:tc:opendocument:xmlns:presentation:1.0" office:version="1.3"><office:scripts/><office:font-face-decls><style:font-face style:name="Arial" svg:font-family="Arial" style:font-family-generic="system" style:font-pitch="variable"/><style:font-face style:name="Liberation Sans" svg:font-family="&apos;Liberation Sans&apos;" style:font-family-generic="swiss" style:font-pitch="variable"/><style:font-face style:name="Microsoft YaHei" svg:font-family="&apos;Microsoft YaHei&apos;" style:font-family-generic="system" style:font-pitch="variable"/></office:font-face-decls>

<office:automatic-styles>
   <style:style style:name="co1" style:family="table-column">
      <style:table-column-properties fo:break-before="auto" style:column-width="2.258cm"/>
   </style:style>
   
   <style:style style:name="ro1" style:family="table-row">
      <style:table-row-properties style:row-height="0.452cm" fo:break-before="auto" style:use-optimal-row-height="true"/>
   </style:style>
   
   <style:style style:name="ta1" style:family="table" style:master-page-name="Default">
      <style:table-properties table:display="true" style:writing-mode="lr-tb"/>
   </style:style>
`;


//generamos los estilos
//{name:'ce2',color:"#cadaff", bold:false, background-color: "#3d4a6e" },
if(styles!=null){   
   for (let s of styles){
      filecontent +=`<style:style style:name="${s.name}" style:family="table-cell" style:parent-style-name="Default">
         <style:table-cell-properties fo:background-color="${s.backgroundcolor}"/>`;

      filecontent +=`<style:text-properties fo:color="${s.color}"`;
      
      if(s.bold)
         filecontent +=` fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"`;
      if(s.fontsize)
         filecontent +=` fo:font-size="${s.fontsize}"`;

      filecontent +=`/></style:style>`;
   }
}

filecontent +=`</office:automatic-styles>
<office:body><office:spreadsheet>
<table:calculation-settings table:automatic-find-labels="false" table:use-regular-expressions="false" table:use-wildcards="true"/>
<table:table table:name="Hoja1" table:style-name="ta1">`;


   //generamos el contenido
   //[{v: "Total", t:'string', s:'ce2'}, {v: "",      t:'string', s:'ce2'}, {v: "=SUM(A2:C2)", t: 'float'  , s:'ce3', formula: "=SUM([.A2:.B2])"}],
   for (let row of content){
      filecontent +='<table:table-row>';

      for(let c of row){         
         filecontent +=`<table:table-cell office:value-type="${c.t}" office:value="${c.v}"`;
         if(c.s)
            filecontent +=` table:style-name="${c.s}"`;
         if(c.formula)
            filecontent +=` table:formula="of:=${c.formula}"`;
         filecontent +=`><text:p>${c.v}</text:p></table:table-cell>`; 
      }
      filecontent +='</table:table-row>';
   }

filecontent +=` 
      </table:table></office:spreadsheet></office:body></office:document-content>`;
   return filecontent;
}





const generarMetaXML = () => {
  let content = `<?xml version="1.0" encoding="UTF-8"?>
<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:ooo="http://openoffice.org/2004/office" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:grddl="http://www.w3.org/2003/g/data-view#" office:version="1.3"><office:meta><meta:creation-date>2023-03-05T13:39:26.252000000</meta:creation-date><meta:document-statistic meta:table-count="1" meta:cell-count="0" meta:object-count="0"/><meta:generator>LibreOffice/7.5.1.2$Windows_X86_64 LibreOffice_project/fcbaee479e84c6cd81291587d2ee68cba099e129</meta:generator></office:meta></office:document-meta>`;

  return content;
};


const generarManifestXML = () => {
  let content = `<?xml version="1.0" encoding="UTF-8"?>
<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.3" xmlns:loext="urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0">
 <manifest:file-entry manifest:full-path="/" manifest:version="1.3" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>
 <manifest:file-entry manifest:full-path="manifest.rdf" manifest:media-type="application/rdf+xml"/>
 <manifest:file-entry manifest:full-path="meta.xml" manifest:media-type="text/xml"/>
 <manifest:file-entry manifest:full-path="content.xml" manifest:media-type="text/xml"/>
</manifest:manifest>`;
return content;
}





/***************************
	MAIN
***************************/

let cargadaBibliotecaZIP = false; // vble cerrojo para no cargar dos veces la misma biblioteca
document.querySelector("#btnGenerar").addEventListener('click', generar);



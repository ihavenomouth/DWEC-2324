<?php

function conectarBaseDatos( ){
  $doc_root = $_SERVER["DOCUMENT_ROOT"];
  $rutabd = $doc_root . "/basedatos/bd.sqlite";

  try {
    $conexion = new PDO("sqlite:".$rutabd);
  } catch (PDOException $e) {
    responderError( "No se ha podido establecer conexión con el servidor de bases de datos. \n " . $e->getMessage() );
    die ("Error: " . $e->getMessage());
  }

  return $conexion;
}


/* Respuesta con error 500 */
function responderError( $datos, $codigo=123 ){
  header('HTTP/1.1 500 Internal Server Error');
  header('Content-Type: application/json; charset=UTF-8');
  die(json_encode(['message' => $datos, 'code' => $codigo]));
}

/* Respuesta correcta */
function responder( $datos ){
  echo json_encode($datos);
  exit(0);
}

/* ERROR REPORTING */
//Indica que sólo se mostrarán errores, no Warnings ni otros errores. 
//Valores posibles: E_ERROR | E_WARNING | E_PARSE | E_NOTICE
error_reporting(E_ERROR);



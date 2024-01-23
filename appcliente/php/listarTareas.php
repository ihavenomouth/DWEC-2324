<?php
require( 'config.php');

// Creamos la conexión al servidor
$conexion = conectarBaseDatos();

// Recuperamos los parámetros de la petición
// $tarea = $_POST["txtTarea"];
// $prioridad = $_POST["txtPrioridad"];


try{
  $sql = "SELECT * FROM TAREAS" ;
	$resultado = $conexion->query( $sql ); //Consultas de inserción, eliminación y actualización con exec. Selección con query
  responder($resultado->fetchAll()); //los manda todos de vuelta

}catch(Exception $e){
	$resultado = null;
	$conexion = null;
	responderError( "Error al crear la tarea $tarea (prioridad: $prioridad). " . $e->getMessage());
	exit(0);
}

//cerramos la conexión
$resultado = null;
$conexion = null;

//mandamos la respuesta en HTML
// echo "<p>La tarea $tarea (prioridad: $prioridad) ha sido creada con éxito.</p>";
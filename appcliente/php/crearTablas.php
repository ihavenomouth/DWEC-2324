<?php
require( 'config.php');

// Creamos la conexión al servidor
$conexion = conectarBaseDatos();

// Recuperamos los parámetros de la petición
// $nombreTarea = $_POST["nombreTarea"];

$sql = "CREATE TABLE tareas (
	id INTEGER PRIMARY KEY AUTOINCREMENT, 
	nombre TEXT, 
	prioridad INTEGER DEFAULT 0
	);" ;

try{
	$resultado = $conexion->exec( $sql ); //Consultas de inserción, eliminación y actualización con exec. Selección con query
}catch(Exception $e){
	$resultado = null;
	$conexion = null;
	responderError( "Error al crear la tabla TAREAS. " . $e->getMessage());
	exit(0);
}

//cerramos la conexión
$resultado = null;
$conexion = null;

//mandamos la respuesta en HTML
echo "<p>Tabla TAREAS creada con éxito.</p>";
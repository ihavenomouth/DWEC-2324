<?php

// Ejercicio 1.a
//echo "Hola caracola";

//Ejercicio 1.b
$mensaje = trim($_GET['txtMensaje'] ?? '');
echo "<b>¡¡¡" . mb_strtoupper($mensaje) . "!!!</b>";

// Nota: strtoupper() no convierte a mayúsculas las letras con acento, ñ, ç,...
// por eso se usa mb_strtoupper

<?php
// Obtener el nombre del juego de la variable $_GET
$juegoNombre = $_GET['juego'];

// Construir la ruta de la plantilla juego.html
$plantillaRuta = 'juego.html';

// Leer el contenido de la plantilla
$contenidoPlantilla = file_get_contents($plantillaRuta);

// Reemplazar cualquier marcador de posición en la plantilla con el nombre del juego
$contenidoPlantilla = str_replace('{{nombreJuego}}', $juegoNombre, $contenidoPlantilla);

// Imprimir el contenido de la plantilla
echo $contenidoPlantilla;
?>
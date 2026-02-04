<?php
// Obtener el nombre del juego de la variable $_GET
$search = $_GET['search'];

// Construir la ruta de la plantilla juego.html
$plantillaRuta = 'search.html';

// Leer el contenido de la plantilla
$contenidoPlantilla = file_get_contents($plantillaRuta);

// Reemplazar cualquier marcador de posici贸n en la plantilla con el nombre del juego
$contenidoPlantilla = str_replace('{{search}}', $search, $contenidoPlantilla);

// Imprimir el contenido de la plantilla
echo $contenidoPlantilla;
?>
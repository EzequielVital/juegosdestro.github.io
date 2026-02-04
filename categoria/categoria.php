<?php
$categoria = $_GET['categoria'];
$plantilla = 'categoria.html';
$contenido = '';

// Aquí puedes realizar alguna lógica para obtener el contenido del juego
// correspondiente al nombre en la variable $juego y asignarlo a la variable $contenido

if ($contenido) {
  $plantilla = file_get_contents($plantilla);
  $plantilla = str_replace('{{contenido}}', $contenido, $plantilla);
  echo $plantilla;
} else {
  echo 'Juego no encontrado';
}
?>
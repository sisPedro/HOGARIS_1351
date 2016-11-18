<?php
$casa = getenv('HOME');
echo $casa;
$datos = $_POST['datos'];
$myfile = fopen(${HOME}."Registro.csv", "a") or die("Unable to open file!");
fwrite($myfile, $datos["nombreYApellido"]);
fwrite($myfile, ",");
fwrite($myfile, $datos["email"]);
fwrite($myfile, ",");
fwrite($myfile, $datos["telefono"]);
fwrite($myfile, ",");
fwrite($myfile, $datos["direccion"]);
fwrite($myfile, ",");
fwrite($myfile, $datos["pais"]);
fwrite($myfile, ",");
fwrite($myfile, $datos["provincia"]);
fwrite($myfile, ",");
fwrite($myfile, $datos["ciudad"]);
fwrite($myfile, ",");
fwrite($myfile, $datos["comoNosConocio"]);
fwrite($myfile, ",");
fwrite($myfile, $datos["destinatario"]);
fwrite($myfile, ",");
fwrite($myfile, $datos["mensaje"]);
fwrite($myfile, "\n");
fclose($myfile);
?>

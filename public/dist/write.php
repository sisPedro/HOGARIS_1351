<?php
require_once "vendor/autoload.php";
$datos = $_POST['datos'];
$mail = new PHPMailer;
$myfile = fopen("Registro.csv", "a") or die("Unable to open file!");
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


$mail->SMTPDebug = 3; //debug
$mail->isSMTP();//PHPMailer usara smtp
$mail->Host = "smtp.gmail.com"; // Host que corre el proceso smtp
$mail->SMTPAuth = true; // Dependiendo de la configuracion del smtp puede ser necesario especificar contrasena. 
//username & password
$mail->Username = "pedrito.gagliardi@gmail.com";
$mail->Password = "BambisDead";//
//If SMTP requires TLS encryption then set it
$mail->SMTPSecure = "tls";// encriptacion a usar
// Especifica el puerto tcp a utilizar (Los mas comunes son 25 2525 587) 
$mail->Port = 587;                                   

$mail->From = "pedrito.gagliardi@gmail.com"; // Direccion de correo que enviara el email

$mail->FromName = "Pedro Gagliardi"; // Nombre que vera el receptor
$mail->addAddress("pedrito.gagliardi@gmail.com"); // A quien se envia
$mail->isHTML(false); // Determina si el texto debe ser procesado como html o texto plano

$mail->Subject = "Mails de Prueba"; //asunto
$mail->Body = "Nombre :".$datos[nombreYApellido]."\nEmail :".$datos[email]."\nTelefono :".$datos[telefono]."\nDireccion :".$datos[direccion]
."\nPais :".$datos[pais]."\nCiudad :".$datos[ciudad]."\nComo nos conocio :".$datos[comoNosConocio]."\nDestinatario :".$datos[destinatario]."\nMensaje :".$datos[mensaje]; // Cuerpo del mensaje
if(!$mail->send())  // Debug
{
    echo "Mailer Error: " . $mail->ErrorInfo;
} 
else 
{
    echo "Message has been sent successfully";
}
?>

<?php
echo "<h1>MUCHAS GRACIAS POR REGISTRARSE.</h1>";
echo "<h2>estos son sus datos ingresados</h2>";
//var_dump($_FILES ["adjuntarFoto"]["name"]);
//var_dump($_FILES["adjuntarFoto"]["type"]);
//exit;
$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];
$nacimiento=$_POST['nacimiento'];
$direccion=$_POST['direccion'];
$email=$_POST['email'];
$telefono=$_POST['telefono'];
$dni=$_POST['dni'];
$pais=$_POST['pais'];
$provincia=$_POST['provincia'];
$ciudad=$_POST['ciudad'];
$name=$_FILES['adjuntarFoto']['name'];
$type=$_FILES['adjuntarFoto']['type'];
echo "<b>NOMBRE</b>: " . $nombre;
echo "<br>";
echo "<b>APELLIDO</b>: " .$apellido;
echo "<br>";
echo "<b>NACIMIENTO</b>: " .$nacimiento;
echo "<br>";
echo "<b>DIRECCION</b>: " .$direccion;
echo "<br>";
echo "<b>EMAIL</b>: " .$email;
echo "<br>";
echo "<b>TELEFONO</b>: " .$telefono;
echo "<br>";
echo "<b>DNI</b>: " .$dni;
echo "<br>";
echo "<b>PAIS</b>: " .$pais;
echo "<br>";
echo "<b>PROVINCIA</b>: " .$provincia;
echo "<br>";
echo "<b>CIUDAD</b>: " .$ciudad;
echo "<br>";
echo "<b>FOTO</b>:".$name ." tipo: ".$type;

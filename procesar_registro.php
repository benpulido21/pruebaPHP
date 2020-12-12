<?php
include "conexion.php";

  if($_POST)
   {
   $correo = strip_tags($_POST['correo']);
   $nombre = strip_tags($_POST['nombre']);
   $cedula = strip_tags($_POST['cedula']);
   $apellido = strip_tags($_POST['apellido']);

   $correo_existe = "SELECT correo FROM persona WHERE correo = '$correo'";
   $result_correo = mysqli_query($con,$correo_existe);
   $num_rows = mysqli_num_rows($result_correo);
   if ($num_rows > 0) {
      echo "El correo electronico ya esta en uso";
   }else{
   $cedula_existe = "SELECT cedula FROM persona WHERE cedula = '$cedula'";
   $result_cedula = mysqli_query($con,$cedula_existe);
   $num_rows2 = mysqli_num_rows($result_cedula);
   if ($num_rows2 > 0) {
      echo "La cedula especificada ya existe en la base de datos";
   }else{
      $query = "INSERT INTO persona (nombre,apellido,cedula,correo) VALUES ('$nombre','$apellido','$cedula','$correo')";
      mysqli_query($con,$query);

      echo "El registro ha sido exitoso!";
   }
   }
 }
?>

<?php
if (isset($_POST['cedula']) && !empty($_POST['cedula'])) {

    $cedula = $_POST['cedula'];

    include "conexion.php";
    $query = "SELECT cedula FROM persona WHERE cedula = '$cedula'";
    $result = mysqli_query($con,$query);
    $num_rows = mysqli_num_rows($result);
    if ($num_rows > 0) {
        echo "La cedula especificada ya existe en nuestro sistema";
    }else{
        echo "";
    }
}
?>

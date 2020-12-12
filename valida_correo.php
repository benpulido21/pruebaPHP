<?php
if (isset($_POST['correo']) && !empty($_POST['correo'])) {

    $correo = $_POST['correo'];

    include "conexion.php";
    $query = "SELECT correo FROM persona WHERE correo = '$correo'";
    $result = mysqli_query($con,$query);
    $num_rows = mysqli_num_rows($result);
    if ($num_rows > 0) {
        echo "El correo electronico ya esta en uso";
    }else{
        echo "";
    }
}
?>

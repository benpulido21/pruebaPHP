<!DOCTYPE html>
<html>
<head>
    <title>Registro</title>
    <script src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/validaciones.js"></script>
</head>
<body>
    <div align="center">
   <h2>Registro</h2>
     <div style="border-color: black; border-style: solid; width: 300px;"><br>
        <label for="nombre">Nombre:</label>
         <input type="text" name="nombre" id="nombre" required maxlength="70" onkeypress="return soloLetras(event);"><br><br>
         <label for="apellido">Apellido:</label>
         <input type="text" name="apellido" id="apellido" required maxlength="70" onkeypress="return soloLetras(event);"><br><br>
         <label for="cedula">Cedula:</label>
         <input type="number" name="cedula" id="cedula" required maxlength="20" onkeypress="return soloNumeros(event);"><br><br>
         <label for="correo">Correo:</label>
         <input type="email" name="correo" id="correo" required maxlength="120"><br><br>
         <button type="button" id="registrar">Registrar</button>
     </div>
    </div>
</body>
</html>

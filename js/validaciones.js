 //funcion para permitir solo letras en los campos nombre y apellido
 function soloLetras(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }

//funcion para permitir solo numeros en el campo cedula
  function soloNumeros(e){
  var key = window.Event ? e.which : e.keyCode
  return (key >= 48 && key <= 57)
}

//funcion que procesa el formulario de registro
$(document).ready(function()
{
 $("#registrar").click(function()
 {
  nombre= document.getElementById('nombre').value;
  apellido= document.getElementById('apellido').value;
  cedula= document.getElementById('cedula').value;
  correo = document.getElementById('correo').value;

  var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

  if(nombre != "" && apellido != "" && cedula != "" && correo != "")
  {
    if (regex.test($('#correo').val().trim())) {
    $.ajax({

    type : 'POST',
    url  : 'procesar_registro.php',
    data : {nombre:nombre, apellido:apellido, cedula:cedula, correo:correo},
    success : function(data)
        {
              var result2 = $.trim(data);
              if (result2 == "El correo electronico ya esta en uso") {
                document.getElementById('registrar').style.display = 'none';
                alert('El correo electronico ya esta en uso!');
              }else if(result2 == "La cedula especificada ya existe en la base de datos"){
                document.getElementById('registrar').style.display = 'none';
                alert('La cedula especificada ya existe en la base de datos');
              }else{
                alert('El registro ha sido exitoso!');
                 document.getElementById('nombre').value = ""
                 document.getElementById('apellido').value = ""
                 document.getElementById('cedula').value = ""
                 document.getElementById('correo').value = ""
              }
           }
    });
    return false;
    }
    else
    {
       alert('El correo electronico no es valido!');
    }

  }
  else
  {
     alert('Por favor llene los campos vacios!');
  }
 });

});


//funcion que valida si el correo existe en la base de datos
$(document).ready(function()
{
 $("#correo").keyup(function()
 {
  var correo = $(this).val();

  if(correo.length > 0)
  {
    $.ajax({

    type : 'POST',
    url  : 'valida_correo.php',
    data : {correo:correo},
    success : function(data)
        {
              var result2 = $.trim(data);
              if (result2 == "El correo electronico ya esta en uso") {
                document.getElementById('registrar').style.display = 'none';
                alert('El correo electronico ya esta en uso!');
              }else{
                document.getElementById('registrar').style.display = 'inline';
              }
           }
    });
    return false;

  }
  else
  {

  }
 });

});


//funcion que valida si la cedula existe en la base de datos
$(document).ready(function()
{
 $("#cedula").keyup(function()
 {
  var cedula = $(this).val();

  if(cedula.length > 0)
  {
    $.ajax({

    type : 'POST',
    url  : 'valida_cedula.php',
    data : {cedula:cedula},
    success : function(data)
        {
              var result3 = $.trim(data);
              if (result3 == "La cedula especificada ya existe en nuestro sistema") {
                document.getElementById('registrar').style.display = 'none';
                alert('La cedula especificada ya existe en nuestro sistema');
              }else{
                document.getElementById('registrar').style.display = 'inline';
              }
           }
    });
    return false;

  }
  else
  {

  }
 });

});
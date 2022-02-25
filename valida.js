window.onload = iniciar;

function iniciar() {
  document.getElementById('submit').addEventListener('click', validate, false);
}

function valida_nombre() {
  var nombreform = document.getElementById('nombre');
  if (nombreform.value == '') {
    alert('El campo nombre no puede estar vacío');
    return false;
  }
  return true;
}

function valida_mail() {
    var emailform = document.getElementById('email');
    if (emailform.value !== '@') {
      alert('Debe proporcionar un e-mail válido');
      return false;
    }
    return true;
  }


function validate() {
    if (valida_nombre() && valida_mail() &&confirm('Pulse aceptar si desea enviar el form')){
      return true;
    }
    return false;
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que se envíe el formulario automáticamente
  
  // Validación del formulario
  var name = document.getElementsByName('name')[0].value;
  var email = document.getElementsByName('email')[0].value;
  var message = document.getElementsByName('message')[0].value;

  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    alert('Por favor complete todos los campos del formulario.');
    return;
  }

  // Aquí puedes agregar código para enviar el formulario, por ejemplo, usando AJAX
  
  // Limpiar el formulario después de enviar
  document.getElementById('contact-form').reset();
});

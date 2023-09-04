var form = document.getElementById('form'); // Primero "traemos" el formulario

form.addEventListener('submit', function(e){ // Le añadimos una escucha para el evento submit
 e.preventDefault();

 var fname = document.getElementById('fname').value // Definimos los valores de los campos a enviar
 var lname = document.getElementById('lname').value
 var bdate = document.getElementById('bdate').value

 fetch('https://jsonplaceholder.typicode.com/users', { // Hacemos el fetch a la url y además le pasamos otro parámetro
  method: 'POST', // Definimos el método a utilizar
  body: JSON.stringify({ // Definimos el cuerpo de lo que vamos a enviar como el objeto deseado convertido a json
    firstName: fname,
    lastName: lname,
    birthDate: bdate,

  }),
  headers: { // Asignamos los headers
    'Content-type': 'application/json; charset=UTF-8',
  }
  })
  .then(response => response.json()) // Convertimos la respuesta del servidor a un objeto js
  .then(json => console.log("Success:", json)) // En caso positivo mostramos la respuesta a continuación del mensaje "Success"
.catch(error => console.error('Error:', error)); // O de lo contrario añadimos este manejador de errores
});
var form = document.getElementById('form')

form.addEventListener('submit', function(e){
 e.preventDefault()

 var fname = document.getElementById('fname').value
 var lname = document.getElementById('lname').value
 var bdate = document.getElementById('bdate').value

 fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  body: JSON.stringify({
    firstName: fname,
    lastName: lname,
    birthDate: bdate,

  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
  })
  .then(response => {
    response.json()
    console.log(response)}) 
.catch(error => console.error('Error:', error)) 
  });

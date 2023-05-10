let capturaProducto = document.getElementById("formCrear");

capturaProducto.addEventListener("submit", function (event) {
  event.preventDefault();
  let data = {
    nombre:"juan"
  };
  console.log(data);

  fetch('http://localhost:5000/createNombre', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}); 

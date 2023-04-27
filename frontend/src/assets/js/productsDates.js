let url='https://catalogopuntomotero-production.up.railway.app/api/create';//crear productos 

let capturaProducto = document.getElementById("formCrear");

capturaProducto.addEventListener("submit", function (event) {
  event.preventDefault();

  /*const enviarJson = {};

  enviarJson.nombre = document.querySelector("#nombre").value;

  let selectCategoria = document.querySelector('#categoria');
  let documentoSelected = selectCategoria.selectedOptions[0];
  enviarJson.categoria = documentoSelected.textContent;

  enviarJson.imagen = document.querySelector("#imagen").value;
  enviarJson.descripcion = document.querySelector("#descripcion").value;
  enviarJson.precio = Number(document.querySelector("#precio").value);
  console.log(enviarJson);*/
  let selectCategoria = document.querySelector('#categoria');
  let documentoSelected = selectCategoria.selectedOptions[0];

  const data = {
    nombre: document.querySelector('#nombre').value,
    categoria: documentoSelected.textContent,
    imagen : document.querySelector("#imagen").value,
    descripcion : document.querySelector("#descripcion").value,
    precio : Number(document.querySelector("#precio").value)
  };

  console.log(data);

  fetch('https://catalogopuntomotero-production.up.railway.app/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("El producto no se puedo cargar");
  });
});
//let url='mysql://root:O1L85rtc1VZKxsLjPZCq@containers-us-west-176.railway.app:6262/railway';//ver productos 
let capturaProducto = document.getElementById("formCrear");

capturaProducto.addEventListener("submit", function (event) {
  event.preventDefault();

  const enviarJson = {};

  enviarJson.nombre = document.querySelector("#nombre").value;

  let selectCategoria = document.querySelector('#categoria');
  let documentoSelected = selectCategoria.selectedOptions[0];
  enviarJson.categoria = documentoSelected.textContent;

  enviarJson.imagen = document.querySelector("#imagen").value;
  enviarJson.descripcion = document.querySelector("#descripcion").value;
  enviarJson.precio = Number(document.querySelector("#precio").value);
  console.log(enviarJson);

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(enviarJson),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch(console.log("no se pudo guardar los datos"));

  /*let nombre = document.querySelector("#nombre").value;

  let selectCategoria = document.querySelector('#categoria');
  let documentoSelected = selectCategoria.selectedOptions[0];
  let categoria = documentoSelected.textContent;

  let imagen = document.querySelector("#imagen").value;
  let descripcion = document.querySelector("#descripcion").value;
  let precio = Number(document.querySelector("#precio").value);

  let data = {
    nombre: nombre,
    categoria: categoria,
    imagen: imagen,
    descripcion: descripcion,
    precio: precio
  };

  let productos = JSON.parse(localStorage.getItem("productos")) || [];
  productos.push(data);
  localStorage.setItem("productos", JSON.stringify(productos));

  alert("Los datos se han guardado correctamente en el LocalStorage.");*/
});
let productId = 1;
let productos = JSON.parse(localStorage.getItem("productos")) || [];

if (productos.length > 0) {
  // Obtener el último id asignado
  productId = productos[productos.length - 1].id + 1;
}

let capturaProducto = document.getElementById("formCrear");

capturaProducto.addEventListener("submit", function (event) {
  event.preventDefault();

  let selectCategoria = document.querySelector('#categoria');
  let documentoSelected = selectCategoria.selectedOptions[0];
  
  const data = {
    id: productId,
    nombre: document.querySelector('#nombre').value,
    categoria: documentoSelected.textContent,
    imagen : document.querySelector('#imagen').value,
    descripcion : document.querySelector("#descripcion").value,
    precio : Number(document.querySelector("#precio").value)
  };

  productos.push(data);
  localStorage.setItem("productos", JSON.stringify(productos));
  productId++;

  alert("Los datos se han guardado correctamente");
});

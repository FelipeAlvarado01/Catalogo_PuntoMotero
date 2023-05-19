let productId = 1;
let productos = JSON.parse(localStorage.getItem("productos")) || [];
let datosCargados = JSON.parse(localStorage.getItem("datosCargados")) || false;

// Cargar los datos del archivo JSON
cargarDatos();

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

function cargarDatos() {
  if (!datosCargados) {
    fetch('../../../../frontend/src/assets/js/datos.json')
      .then(response => response.json())
      .then(productosJSON => {
        let productos = JSON.parse(localStorage.getItem("productos")) || [];

        // Obtener el último id asignado
        let lastId = 0;
        if (productos.length > 0) {
          lastId = productos[productos.length - 1].id;
        }

        // Asignar un ID a cada producto y agregarlo al array de productos
        productosJSON.forEach(producto => {
          producto.id = ++lastId;
          productos.push(producto);
        });

        // Guardar los productos en el localStorage
        localStorage.setItem("productos", JSON.stringify(productos));
        
        // Cambiar el estado de datosCargados a true y guardarlo en el localStorage
        datosCargados = true;
        localStorage.setItem("datosCargados", JSON.stringify(datosCargados));
      });
  }
}


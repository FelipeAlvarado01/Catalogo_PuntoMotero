const rightButton = document.querySelector("#scrolling-button_right");
const leftButton = document.querySelector("#scrolling-button_left");

const content = document.querySelector(".scrolling-container");

//Para mover el contenido a la derecha
rightButton.addEventListener("click", () => {
  content.scrollLeft += 800; //Movemos 800px a la derecha
});

leftButton.addEventListener("click", () => {
  content.scrollLeft -= 800; //Movemos 800px a la izquierda
});

//////////////////////////////////////////////////////////////////////////////////////////////////
// Obtener los datos del local storage
let productos = JSON.parse(localStorage.getItem("productos"));
let categoria;
let contenedorPrincipal = document.getElementById("productos");

// Filtrar los productos por categoría
const cards = document.querySelectorAll('.scrolling-card');
cards.forEach(card => {
  card.addEventListener('click', (event) => {
    event.preventDefault();
    categoria = card.dataset.categoria;
    mostrarProductosxCategoria(categoria);
  });
});

function mostrarProductosxCategoria(categoria) {
  console.log(categoria);

  let productosFiltrados = productos.filter((producto) => producto.categoria === categoria);

  // Limpiar el contenedor principal
  contenedorPrincipal.innerHTML = "";

  // Crear un nuevo array con los productos filtrados
  let productosPorFila = [];
  for (let i = 0; i < productosFiltrados.length; i += 3) {
    let fila = productosFiltrados.slice(i, i + 3);
    productosPorFila.push(fila);
  }

  // Recorrer el array de productos por fila y agregarlos a la página
  productosPorFila.forEach((fila) => {
    let contenedorFila = document.createElement("div");
    contenedorFila.classList.add("product-container");
    contenedorFila.classList.add("fila");
    fila.forEach((producto) => {
      let elementoProducto = document.createElement("article");
      elementoProducto.classList.add("article-product");
      elementoProducto.classList.add("producto");
      elementoProducto.innerHTML = `
      <img src="${producto.imagen}">
      <div class="product-description">
      <h4>${producto.nombre}</h4>
      <p class="description-product">${producto.descripcion}</p>
      <p class="cost-product">Precio: $${producto.precio}</p>
      </div>
    `;
      contenedorFila.appendChild(elementoProducto);
    });
    contenedorPrincipal.appendChild(contenedorFila);
  });
}


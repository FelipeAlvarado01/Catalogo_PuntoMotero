// Datos de productos
const productos = [
  { id: 1, nombre: 'Producto 1', categoria: 'Categoría 1', precio: 10 },
  { id: 2, nombre: 'Producto 2', categoria: 'Categoría 2', precio: 20 },
  { id: 3, nombre: 'Producto 3', categoria: 'Categoría 1', precio: 15 },
  // ... más datos de productos
];

// Obtener elementos HTML
const menuCategorias = document.getElementById('menuCategorias');
const areaProductos = document.getElementById('areaProductos');

// Generar productos en el área de visualización de productos
function generarProductos(categoria) {
  // Limpiar área de visualización de productos
  areaProductos.innerHTML = '';

  // Filtrar productos por categoría
  const productosFiltrados = productos.filter(producto => producto.categoria === categoria);

  // Generar elementos HTML para cada producto
  productosFiltrados.forEach(producto => {
    const productoElement = document.createElement('div');
    productoElement.className = 'producto';
    productoElement.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio}</p>
      <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
    `;
    areaProductos.appendChild(productoElement);
  });
}

// Manejador de eventos para el menú de categorías
menuCategorias.addEventListener('click', event => {
  if (event.target.classList.contains('categoria')) {
    const categoria = event.target.textContent;
    generarProductos(categoria);
  }
});

// Función para agregar producto al carrito (ejemplo)
function agregarAlCarrito(id) {
  // Lógica para agregar producto al carrito
  console.log(`Producto con ID ${id} agregado al carrito.`);
}

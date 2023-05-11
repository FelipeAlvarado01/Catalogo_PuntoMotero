function mostrarTodos(){
  const productos = JSON.parse(localStorage.getItem("productos"));
  let body = ""
  productos.forEach((producto) => {
    body +=
      `<tr>
  <th>${producto.id}</th>
  <th>${producto.nombre}</th>
  <td>${producto.categoria}</td>
  <td>${producto.precio}</td>
  <td><button type="button" onclick="pintarId(${producto.id})">Ver más</button></td>
  <td><button type="button" onclick="eliminarProducto(${producto.id})">Eliminar</button></td>
  <td><button type="button" onclick="editarProducto(${producto.id})">Editar</button></td>
</tr>`
    document.getElementById('data1').innerHTML = body;
  });

  console.log("creando tabla");
}

////////////////////////////////////////////////////////////////////////////

//Filtramos los productos
function filtrarProductos() {
  const categoriaSeleccionada = document.getElementById("categoria").value;
  const productos = JSON.parse(localStorage.getItem("productos"));
  let body = "";
  let productosFiltrados = productos;

  if (categoriaSeleccionada) {
    productosFiltrados = productos.filter(producto => producto.categoria === categoriaSeleccionada);
  }

  productosFiltrados.forEach((producto) => {
    body +=
      `<tr>
  <th>${producto.id}</th>
  <th>${producto.nombre}</th>
  <td>${producto.categoria}</td>
  <td>${producto.precio}</td>
  <td><button type="button" onclick="pintarId(${producto.id})">Ver mas</button></td>
  <td><button type="button" onclick="eliminarProducto(${producto.id})">Eliminar</button></td>
  <td><button type="button" onclick="editarProducto(${producto.id})">Editar</button></td>
</tr>`;
  });

  document.getElementById("data1").innerHTML = body;
}

//////////////////////////////////////////////////////////////////////////

//Muestra las tarjetas de los productos
let modal_container = document.getElementById("modal_container");

function pintarId(id) {
  let producto = getProductByName(id);
  modal_container.innerHTML += `   
    <div class="modal_container"> 
      <div class="modal__conten">
        <h3>Nombre: ${producto.nombre}</h3><br>
        <h4>Categoria:  ${producto.categoria}</h4>
        <p>${producto.descripcion}</p>
        <div class="modal_img"> 
          <img src="${producto.imagen}" alt=""style="width: 100px;">
          <div class="modal_p">
            <p>Precio: ${producto.precio}</p>
          </div>
        </div>
        <button class="modal__closed" id="closed">X</button>
      </div>
    </div>`;
    
  let closed = document.getElementById('closed');
  closed.addEventListener('click', function () {
    modal_container.innerHTML = "";
  });
}


function getProductByName(id) {
  let products = JSON.parse(localStorage.getItem('productos'));
  console.log(products.find(product => product.id === id));
  return products.find(product => product.id === id);
}

//////////////////////////////////////////////////////////////////////////

//Funcion para eliminar un producto
function eliminarProducto(id) {
  let productos = JSON.parse(localStorage.getItem("productos"));
  let index = productos.findIndex((producto) => producto.id === id);
  if (index !== -1) {
    productos.splice(index, 1);
    localStorage.setItem("productos", JSON.stringify(productos));
    mostrarTodos();
  }
}

//////////////////////////////////////////////////////////////////////////

//Funcion para editar un producto

function editarProducto(id) {
  let productos = JSON.parse(localStorage.getItem("productos"));
  let index = productos.findIndex((producto) => producto.id === id);

  if (index !== -1) {
    let producto = productos[index];
    let nuevoNombre = prompt("Introduce el nuevo nombre", producto.nombre);
    let nuevaCategoria = prompt("Introduce la nueva categoría", producto.categoria);
    let nuevoPrecio = prompt("Introduce el nuevo precio", producto.precio);

    if (nuevoNombre && nuevaCategoria && nuevoPrecio) {
      productos[index] = {
        ...producto,
        nombre: nuevoNombre,
        categoria: nuevaCategoria,
        precio: nuevoPrecio
      };
      localStorage.setItem("productos", JSON.stringify(productos));
      mostrarTodos();
    } else {
      alert("Debes introducir valores válidos para editar el producto");
    }
  }
}

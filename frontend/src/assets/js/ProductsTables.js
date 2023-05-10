let url = 'https://catalogopuntomotero-production.up.railway.app/getAll';//ver productos 

function ver_productos() {
  /* metodo fetch trae productos por Get */
  /* fetch(url)
     .then(data => mostrarData(data))
   const mostrarData = (data) => {
     console.log(data);
     let body = ""
     for (var i = 0; i < data.length; i++) {
       let id = data[i].id
       console.log(id)
       body +=
         `<tr>
       <th>${data[i].id}</th>
       <th>${data[i].nombre}</th>
       <td>${data[i].categoria}</td>
       <td>${data[i].imagen}</td>
       <td>${data[i].descripcion}</td>
       <td>${data[i].precio}</td>
     </tr>`
     }
     document.getElementById('data1').innerHTML = body;
   }*/

  const productos = JSON.parse(localStorage.getItem("productos"));
  let body = ""
  productos.forEach((producto) => {
    body +=
      `<tr>
  <th>${producto.id}</th>
  <th>${producto.nombre}</th>
  <td>${producto.categoria}</td>
  <td>${producto.precio}</td>
  <td><button type="button" onclick="pintarId(${producto.id})">Ver mas</button></td>
</tr>`
    document.getElementById('data1').innerHTML = body;
  });

  console.log("creando tabla");
}

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
</&div>
</div> 
`
  console.log(producto.imagen);
  /* cierra el modal  */
  let closed = document.getElementById('closed');
  closed.addEventListener('click', function () {
    location.reload();
  });
}

function getProductByName(id) {
  let products = JSON.parse(localStorage.getItem('productos'));
  console.log(products.find(product => product.id === id));
  return products.find(product => product.id === id);
}



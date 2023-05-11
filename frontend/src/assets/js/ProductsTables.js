//let url = 'https://catalogopuntomotero-production.up.railway.app/obtenerProductos';//ver productos 
import axios from 'axios';

const url = 'https://catalogopuntomotero-production.up.railway.app/getProductos';

function ver_productos() {

  axios.get(url)
    .then(response => {
      const data = response.data;
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
          <td>${data[i].precio}</td>
        </tr>`
      }
      document.getElementById('data1').innerHTML = body;
    })
    .catch(error => {
      console.error(error);
    });

}

//////////////////////////////////////////////////////////////////////////

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



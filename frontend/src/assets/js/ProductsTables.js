let url = 'https://catalogopuntomotero-production.up.railway.app/getAll';//ver productos 

function ver_productos() {
  /* metodo fetch trae productos por Get */
  fetch(url)
    //.then(response => response.json())
    .then(data => mostrarData(data))

  /* pinta todos los productos en el Dom */
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
  }
}



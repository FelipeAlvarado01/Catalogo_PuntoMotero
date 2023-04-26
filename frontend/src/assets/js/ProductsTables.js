function ver_libros() {

  por_categoria.style.visibility = "hidden";
  verLibros.style.visibility = "visible";
  /* metodo fetch trae libros por Get */
  fetch(url)
  .then(response=>response.json())
  .then(data=>mostrarData(data))
                            
  /* pinta todos los libros en el Dom */
  const mostrarData = (data) => {
    console.log(data)
    let body = ""
    for (var i = 0; i < data.length; i++) {
      let id = data[i].id
      console.log(id)
      /* tabla libros */
      body += `
      <tr>
      <th>${data[i].id}</th>
      <th>${data[i].nombre}</th>
      <td>${data[i].autor}</td>
      <td>${data[i].editorial}</td>
      <td>${data[i].ano_de_publicacion}</td>
      <td><button type="button" class="btn btn btn-secondary" onclick="pintarId(${id})">Ver mas</button></td>
    </tr>
      `
    }
    document.getElementById('data1').innerHTML = body;
  }

}
const formulario = document.querySelector('.formulario-solicitud')
formulario.addEventListener('submit', cargaForm);

async function cargaForm(event) {
  event.preventDefault();
  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'Accept': 'application/json'
    }
  });



  if (response.ok) {
    this.reset();
    const alert = document.getElementById('alert');
    alert.innerHTML += `<div class="modal_container">
    <div class="modal__conten">
      <h3>Solicitud recibida con éxito.<br> Nos contactaremos lo antes posible.</h3>
      <button class="modal__closed" id="closed">X</button>
      </div>
    </div>
    `
    let closed = document.getElementById('closed');
    console.log("SI ELIMINO");
    closed.addEventListener('click', function () {
      location.reload();
    });
  }
}
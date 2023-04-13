const rightButton = document.querySelector("#scrolling-button_right");
const leftButton = document.querySelector("#scrolling-button_left");

const content = document.querySelector(".scrolling-container");

//Para mover el contenido a la derecha

rightButton.addEventListener("click",()=>{
  content.scrollLeft += 800; //Movemos 800px a la derecha
});

leftButton.addEventListener("click",()=>{
  content.scrollLeft -= 800; //Movemos 800px a la izquierda
})
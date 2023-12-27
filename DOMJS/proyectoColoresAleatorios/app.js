/*Seleccionar los elementos del DOM*/
const boton = document.querySelector("button");
const color = document.getElementById("color");

function generarColorAleatorio(){
  let digitos = "0123456789ABCDEF";
  let colorHex = "#"; 

  for(let i = 0; i < 6; i++){
    let indiceAlea = Math.floor(Math.random() * 16);
    colorHex += digitos[indiceAlea];

  }
  return colorHex;
}

boton.addEventListener('click', function(){ 
  let colorAleatorio = generarColorAleatorio();
  //Actualizar el texto
  color.textContent = colorAleatorio;
  //Actualizar el color de fondo
  document.body.style.backgroundColor = colorAleatorio;
});
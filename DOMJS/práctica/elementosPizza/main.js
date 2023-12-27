/*Seleccionar elementos por id => Elemento getElementByID()*/
const titulo = document.getElementById('titulo');
console.log(titulo.tagName);

/*Seleccionar elementos por clases => Elemento getElementsByClassName()*/
const aderezos = document.getElementsByClassName("topping");
console.log(aderezos);

/*Seleccionar elementos por clases => Elemento getElementsByTagName()*/
const etiqueta = document.getElementsByTagName("p");
console.log(etiqueta);

/*Seleccionar elementos individuales => método querySelector()*/
const aderezoNaranja = document.querySelector("ul li.fondo-naranja");
console.log(aderezoNaranja);

/*Seleccionar elementos => método querySelectorAll()*/
const aderezo = document.querySelectorAll(".topping.fondo-naranja");
console.log(aderezo);

/*Estilos con JS*/
const primerAderezo = document.querySelector(".topping");
console.log(primerAderezo.style);
primerAderezo.style.backgroundColor = "blue";
primerAderezo.style.color = "#6dff00";
primerAderezo.style.textTransform = "uppercase";

/*Texto en el DOM*/
const listaAderezos = document.getElementById("lista");
console.log("> innerText");
console.log(listaAderezos.innerText);

console.log("> textContent");
console.log(listaAderezos.textContent);

console.log("> innerHTML");
console.log(listaAderezos.innerHTML);

/**Realizar cambios al texto*/
const menu = document.getElementById("titulo");
//menu.innerText = "Menú Aderezos";

/*Atributos*/
const enlace = document.getElementsByTagName("a");
console.log(enlace[0].setAttribute("href", "www.google.com"));

/*Clases*/
const segundoAderezo = document.querySelector(".topping");
console.log(segundoAderezo.classList);
console.log(segundoAderezo.classList.contains("texto-verde"));

/*Adicionar o agregar una Clase*/
segundoAderezo.classList.add("texto-verde");
console.log(segundoAderezo.classList);

/*Verificar si existe la clase*/
console.log(segundoAderezo.classList.contains("texto-verde"));

/*Remover o eliminar una Clase*/
segundoAderezo.classList.remove("texto-verde");
console.log(segundoAderezo.classList);

/*Crear Elemento*/

const lista = document.getElementById("lista");

const elementoNuevo = document.createElement("li");
elementoNuevo.classList.add("topping", "fondo-marron");
elementoNuevo.innerText = "Queso Extra";
lista.append(elementoNuevo);//agrega un nodo dentro del elemento.

elementoNuevo.remove();//Remover o eliminar elemento

lista.appendChild(elementoNuevo);

/*Recorrer el DOM*/
const listaAderezo = document.getElementById("lista");
console.log(listaAderezo.parentElement);
console.log(listaAderezo.parentNode);
console.log(listaAderezo.children);
console.log(listaAderezo.firstElementChild);
console.log(listaAderezo.lastElementChild);
console.log(listaAderezo.previousElementSibling);

/*Eventos del DOM*/
/*function verClick(topping){
    alert("Ud pidio aderezo: " + topping);
}*/
const listaderezos = document.getElementsByClassName("topping");

/*function verClick(e){
    console.log(e.target.innerText);
}*/

//albahaca.addEventListener("click", verClick);
for(const topping of listaderezos){
    topping.addEventListener("click", (e) => {
        console.log(e.target.innerText);
    });
}














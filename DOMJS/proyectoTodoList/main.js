const tarea = document.getElementById("ingresa-tarea");
const botonCrear = document.querySelector("#crea-tarea");
const listaDeTarea = document.getElementById("lista-tareas");

function crearTarea(){
    //console.log("Si ingresa a la función");
    if(tarea.value){
        //console.log("verifica el if");
        //crear tarea
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add("tarea");

        //Texto ingresado de usuarios
        let texto = document.createElement("p");
        texto.innerText = tarea.value;
        tareaNueva.appendChild(texto);

        //Crear y agregar contenedor de iconos
        let iconos = document.createElement("div");
        iconos.classList.add("iconos");
        tareaNueva.appendChild(iconos);

        //Iconos
        let completar = document.createElement("i");
        completar.classList.add("bi", "bi-check-circle-fill", "icono-completar");
        completar.addEventListener("click", completarTarea);

        let eliminar = document.createElement("i");
        eliminar.classList.add("bi", "bi-trash3-fill", "icono-eliminar");
        eliminar.addEventListener("click", eliminarTarea);

        iconos.append(completar, eliminar);

        //Agregar tarea a la lista
        listaDeTarea.appendChild(tareaNueva);
    }else{
        alert("Por favor ingresa una tarea");
        //console.log("No esta verificando la variable tarea");
    }
}

function completarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle("completada");
}

function eliminarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}
//crearTarea();
//console.log("Si esta leyendo el archivo");
botonCrear.addEventListener('click', crearTarea);

//Presionar Enter

tarea.addEventListener("keydown", (e) => {
    if(e.key === 'Enter'){
        crearTarea();
    }
});
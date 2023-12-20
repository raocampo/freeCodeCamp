/*Sentencia SWITCH*/

//Ejemplo 1

function clasificarValor(valor){
    let respuesta;
    switch (valor){
        case 1:
            respuesta = "alpha";
            break;
        case 2:
            respuesta = "beta";
            break;
        case 3:
            respuesta = "gamma";
            break;
        case 4:
            respuesta = "delta";
            break;
    }
    return console.log(respuesta);
}

let valor = 0;

clasificarValor(valor);

//Ejemplo 2

let producto = "hamburguesa";

switch(producto){
    case "pizza":
        console.log("La porción de pizza tiene un valor de $1,00");
        break;
    case "hamburguesa":
        console.log("La hamburguesa tiene un valor de $4,00");
        break;
    case "helado":
        console.log("El helado tiene un valor de $1,50");
    break;
}

//Ejemplo 3 Switch con opción predeterminada "default"

function idioma(opcion){
    let idioma;
    switch (opcion){
        case 1:
            idioma = "Español";
            break;
        case 2:
            idioma = "Frances";
            break;
        case 3:
            idioma = "Italiano";
            break;
        default:
            idioma = "Ingles";
            break;
    }
    return console.log(idioma);
}

let opcion = 0;

idioma(opcion);

//Ejemplo 4 Switch con multiples opciones"

function volumen(intensidad){
    let volumen;
    switch (intensidad){
        case 1:
            volumen = "bajo";
            break;
        case 2:
        case 3:
            volumen = "intermedio";
            break;
        case 4:
        case 5:
        case 6:
            volumen = "alto";
            break;
    }
    return console.log(volumen);
}

let intensidad;

volumen(intensidad);
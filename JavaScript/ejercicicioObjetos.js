/*
Tenemos un bojeto que representa parte de una colección de álbumnes musicales.

Cada álbum tiene un número de identificación único(id) asociado a otras propiedades.

No todos los álbumnes tienen la información completa.
*/

let coleccionDiscos = {
    7853: {
        tituloAlbum: "Bee Gees Greatest",
        artista: "Bee Gees",
        canciones: ["Stayin' Alive"]
    },
    5439:{
        tituloAlbum: "ABBA Gold",
    }
};

/*
Define una función actualizarDiscos que tome los siguientes parámetros:
    - Discos (el objeto que representa la coleccio de discos).
    - id.
    - Propiedad("artista" o "canciones").
    - valor.

La meta es completar la función implementando las siguientes reglas para modificar el objeto pasado a la función:
    -   Si "valor" es una cadena vacía, elimina la propiedad del álbum correspondiente.

    -   Si "propiedad" es igual a la cadena de caracteres "canciones" pero el álbum no tiene una propiedad llamada "canciones", crea un arreglo vacío y agrega "valor" a ese arreglo.

    -   Si "propiedad" es igual a la cadena de caracteres "canciones" y "valor" no es una cadena vacía agrega "valor" al final del arreglo de canciones del álbum correspondiente.

    -   Si "valor" no es una cadena vacía y "propiedad" no es igual a "canciones", asigna el valor del parámetro "valor" a la propiedad.
    Si la propiedad no existe, debes crearla y asignar este valor.
*/

function actualizarDiscos(discos, id, propiedad, valor){
    if(valor === ""){
        delete discos[id][propiedad];
    }else if(propiedad === "canciones"){
        discos[id][propiedad] = discos[id][propiedad] || [];
        discos[id][propiedad].push(valor);
    }else{
        discos[id][propiedad] = valor;
    }
}

//Primera Condición
console.log(coleccionDiscos[7583].tituloAlbum);

actualizarDiscos(coleccionDiscos, 7853, "tituloAlbum", "");

console.log(coleccionDiscos[7583].tituloAlbum);

// Segunda Condición
console.log(coleccionDiscos[5439].tituloAlbum);

actualizarDiscos(coleccionDiscos, 5439, "canciones", "Mamma Mia");

console.log(coleccionDiscos[7583].canciones);


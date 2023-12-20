/*OBJETOS*/

//SINTAXIS
 let miObjeto = {
    "nombre": "Objeto",
    "altura": 5,
    "peso": 15,
    "color": "rojo",
 };

 //acceder al objeto

 miObjeto.nombre;

 //Presentar el objeto

 console.log(miObjeto.altura);
 console.log(miObjeto.color);

 //acceder a propiedades con espacios y normales

 let objeto2 = {
    "nombre": "Mi Objeto",
    "numero de espacio": 4,
    "longitud": 15
 };

 console.log(objeto2["numero de espacio"]);
 console.log(objeto2["nombre"]);

 //Acceder a la propiedad del objeto desde una variable.

 let resultados = {
    1: "nora256",
    2: "gino577",
    3: "estef543",
    4: "kiara566"
 };

 let posicion = 3;

 console.log(resultados[posicion]);

 //Atualizar las Propiedades en objetos

 let mochila = {
    "color": "verde",
    "tamaño": "grande",
    "contenido": ["botella de agua", "cauderno"]
 };

 console.log(mochila.tamaño);

 mochila.tamaño = "pequeña";
 console.log(mochila.tamaño);

 //Cuando hay un arreglo dentro de una propiedad se puede utilizar los métodos del arreglo para actualizar sus propiedades.

 console.log(mochila.contenido);
 mochila.contenido.push("lápiz");
 console.log(mochila.contenido);

 //Agregar nuevas propiedades en un objeto

 let curso = {
    "titulo": "Aprende JavaScript dede Cero",
    "idioma": "Español",
    "duracion": 30
 };

 curso.vistas = 34500;//forma una de agregar propiedades
 console.log(curso.vistas);

 curso["nivel"] = "básico";//forma dos de agregar propiedades
 console.log(curso.nivel);

 //Borrar una propiedad de un objeto

 console.log(vistas); //antes de borrar
 delete curso.vistas; //borrar la propiedad
 console.log(curso.vistas); //luego de borrar


 //Buscar un elemento para modificar

 function buscarElemento(simbolo){
    //let elemento = " ";

    let momenclatura = {
        "Al": "Aluminio",
        "S": "Azufre",
        "Cl": "Cloro",
        "He": "Helio",
        "B": "Boro",
        "Li": "Litio",
    };

    /*switch(simbolo){
        case "Al":
            elemento = "Aluminio";
            break;
        case "S":
            elemento = "Azufre";
            break;
        case "Cl":
            elemento = "Cloro";
            break;
        case "He":
            elemento = "Helio";
            break;
        case "B":
            elemento = "Boro";
            break;
        case "Li":
            elemento = "Litio";
            break;
    }*/
    return nomenclatura[simbolo];
 }

 console.log(buscarElemento("Cl"));
 console.log(buscarElemento("Li"));

//Verificar Propiedades en un objeto

let miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "precio": 4.56
};

console.log(miCuaderno.hasOwnProperty("categoria")); //RTA=> true si existe
console.log(miCuaderno.hasOwnProperty("nombre")); //RTA=> flase no exites

function verificaProp(obj, propiedad){
    if(obj.hasOwnProperty(propiedad)){
        return "Propiedad: " + obj[propiedad];
    }else{
        return "El objeto no tiene esta propiedad";
    }
}

let miCuaderno1 = {
    "color": "verde",
    "categoria": 3,
    "precio": 4.56
};

console.log(verificaProp(miCuaderno1, "categoria"));
console.log(verificaProp(miCuaderno1, "nombre"));






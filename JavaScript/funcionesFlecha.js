/*FUNCIONES FLECHA O ARROW FUNCTIONS*/

//Función normal
const fecha = function(){
    return new Date();
}

//Función Flecha

const fecha1 = () => new Date();

//Funciones flecha con parámetros

const sumarTres = function(x){
    return x + 3;
};
console.log(sumarTres(4));

 //función flecha
const sumarTre = (x) => x + 3;
console.log(sumarTre(4));

const concatenar = (arr1, arr2) => arr1.concat(arr2);
console.log(concatenar([0, 2, 4], [5, 7, 9]));

const suma = (a, b) =>{
    let num = 6;
    return a + b + num;
}
console.log(suma(5, 7));

//asignar un valor por defecto al valor para asignar
const incrementa = (num, valor = 1) => num + valor;
console.log(incrementa(6));
console.log(incrementa(6, 4));

//OPERADOR REST
// Este se utiliza en la función para recibir mas parametros de los permitidos.
function miFuncion(...args){
    console.log(args.length);
}

miFuncion(1, 2, 3, 4);
miFuncion([1, 2, 3], [4, 5, 6]);

//Ejemplo rest

const sumar = (...args) =>{
    return args.reduce((a, b) => a + b, 0);
}

//OPERADOR SPREAD
//Este se utiliza al llamar la función para enviar mas argumentos
const numeros = [1, 2, 3];

function sumar1(x, y, z){
    return x + y + z;
}

sumar1(...numeros);


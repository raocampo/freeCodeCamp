/* Arreglos
 * Sintaxis var o  let variable = [];
 */
let miArreglo = ["Jhon", 35];

console.log(miArreglo);

/*Arreglos Anidados*/

let listaEstudiantes = [["Nora", 97], ["Gino", 78], ["Kelly", 100]];

console.log(listaEstudiantes);

let listaPrecios = [["pantalones", 50, "P345"], ["Buzos", 10, "B014"], ["Polo", 7, "P045"]];

console.log(listaPrecios);

//También se puede agregar numeros decimales y datos booleanos.

let numeros = [50, 20, 68, 12];

//Para presentar es variable con el indice del arreglos y es de la siguiente forma:

console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);

// Para sumar los valores del arreglo esta es una forma:

let numSuma = [45, 89, 23];

let sumaVal = numSuma[0] + numSuma[1] + numSuma[2];
console.log(sumaVal); //Resultado es 157

// Los arreglos son mutables por ende si se puede cambiar los valores de su indice respectivamente, solo tener en cuenta que los indices siempre empiezan con 0, ejemplo.

let arreglo = [1, 2, 3];

console.log(arreglo);

arreglo[0] = 5;
arreglo[2] = "Es";
arreglo[1] = [5, 6, 7];

console.log(arreglo);

/*Acceder a arreglos anidados
    arreglo=>       [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    índices=>            0          1          2
    índices internos  0  1  2    0  1  2    0  1  2
*/

let arregloDoble = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(arregloDoble[2][1])// valor a presentar sería 7
console.log(arregloDoble[0][1])// valor a presentar sería 3








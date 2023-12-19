//Inmutabilidad => no se puede cambiar

var miCadena = "Jola, Mundo";

console.log(miCadena);

miCadena[0] = "H"; //Error, ya que las cadenas son inmutables, por ende no se puede cambiar un o unos caracter(es) de la cadena, lo que se puede hacer es cambiar toda la cadena.

miCadena = "Hola, Mundo"; //Esto si esta bien. 

var miCadena = "JavaScript";
/**
 * cadena:  J a v a S c r i p t
 * Índices: 0 1 2 3 4 5 6 7 8 9
 */

console.log(miCadena[0]);
console.log(miCadena[1]);
console.log(miCadena[2]);// Y asi podemos ir hasta el índice 9 que es lo que tiene la cadena, cuando no existe el ídice nos presentara el resultado UNDEFINED.

/* Para acceder al último elemento de una cadena siempre será nombreVariable[nombreVariable.length - 1] dentro de unos corchetes, ejemplo: 
*/
miCadena = "JavaScript";
console.log(miCadena[miCadena.length - 1]);//Resultado es la letra "t"
/*Esto también se puede utilizar para presentar los caracteres desde la derecha a izquierda es decir -1, -2, -3,.... -n */



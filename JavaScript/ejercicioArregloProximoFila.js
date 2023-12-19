/*Próximo en la Fila
Define una función proximoFila que tome un arreglo(array) y un número(elemento) como argumentos. Agrega el número al final del arreglo y luego elimina el primer elemento del arreglo.
La función debe retornar el elemento que fue removido
*/

let fila = [5, 4, 8, 10, 25]

function primeroFila(fila, num){
    let ultimo = fila.shift();
    fila.push(num);
    return console.log(ultimo, fila);
}

primeroFila(fila, 15);

let fila1 = [5, 4, 8, 10, 25]

function ultimoFila(fila, num){
    let ultimo = fila.pop();
    fila.unshift(num);
    return console.log(ultimo, fila);
}

ultimoFila(fila1, 3);
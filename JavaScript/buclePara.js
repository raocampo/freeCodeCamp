let miArreglo = [];

for(let i=0; i<10; i++){
    miArreglo.push(i);
}

console.log(miArreglo);

//Ejemplo: Guardar los números impares en un arreglo

let impares = [];

for(let i = 1; i < 20; i += 2){
    impares.push(i);
}

console.log(impares);

//Ejemplo: Guardar los números pares en un arreglo

let pares = [];

for(let i = 1; i < 26; i += 2){
    pares.push(i);
}

console.log(pares);

//Ejemplo: Decrementar la iteración

for(let i = 25; i >= 5; i--){
    console.log(i);
}

let arreglo = [];

for(let i = 10; i > 0; i -= 2){
    arreglo.push(i);
}

console.log(arreglo);

//Iterar un arreglo con for

let paraArreglo = [4, 5, 8, 2];
let total = 0;

for(i = 0; i < paraArreglo.length; i++){
    total += paraArreglo[i];
}

console.log(total);

let lenguajes = ["JavaScript", "Python", "Java", "C++"];

for(let i=0; i<lenguajes.length; i++){
    console.log(lenguajes[i].toUpperCase());
}

//For en una función

function numPares(arreglo){
    let total = 0;

    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] % 2 == 0){
            total ++;
        }
    }
    return total;
}

console.log(numPares([5, 2, 4, 0, 7, 8]))

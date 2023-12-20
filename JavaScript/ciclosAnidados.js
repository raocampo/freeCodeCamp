let arreglo = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];

for (let i=0; i<arreglo.length; i++){
    
    console.log(arreglo[i]);
    
    let arregloAnidado = arreglo[i];
    
    for(let j=0; j<arregloAnidado.length; j++){

        console.log(arregloAnidado[j]);
    }
}
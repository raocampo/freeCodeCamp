function numeroAleatorio(){
    return Math.random();
}

console.log(numeroAleatorio());

//Numero aleatorio entero

let aleatorio = Math.floor(Math.random() * 10);

console.log(aleatorio);

function aleatorioEntero(limiteSuperior){
    //Genera un aleatorio entre 0 y limiteSuperior
    return Math.floor(Math.random() * limiteSuperior);
}

for(let i = 0; i<15; i++){
    
    console.log(aleatorioEntero(5));

}

//Números aleatorios enteros en un rango de limite inferior y superior

function rangoAleatorio(limInferior, limSuperior){
    return Math.floor(Math.random() * (limSuperior - limInferior + 1)) + limInferior;
}

for(let i=0; i<20; i++){
    console.log(rangoAleatorio(3, 8));
}
/*IF; IF ELSE IF; IF ELSE */
//Ejemplo 1
function clasificarValor(valor){
    if(valor < 5){
        console.log("Menor que 5");
    }else if (valor < 10){
        console.log("Menor que 10");
    }else{
        console.log("Mayor o igual a 10");
    }
}

let valor = 5
clasificarValor(valor);

//Ejemplo 2
function interpretarIMC(indiceMasaCorporal){
    if(indiceMasaCorporal < 18.5){
        console.log("Bajo Peso");
    }else if(indiceDeMasaCorporal <= 24.9){
        console.log("Normal");
    }else if(indiceMasaCorporal <= 29.9){
        console.log("Sobrepeso");
    }else{
        console.log("Obeso");
    }
}

let IMC = 19;

interpretarIMC(IMC);
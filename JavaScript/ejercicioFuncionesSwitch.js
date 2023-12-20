/*Juego Conteo de Cartas para el juego blackjack
En el juego de casino Blackjack el jugador puede sacarle ventaja a la casa llevando un registro del número relativo de cartas altas y bajas que quedan en la baraja.

Esto se llama "Conteo de cartas"

Tener más cartas altas en la baraja es una ventaja para el jugador. Se le asigna un valor a cada carta de acuerdo a la siguiente tabla.

- Cuando el conteo es positivo, el jugador debería apostar alto.
- Cuando el conteo es 0 o negativo, el jugador debería apostar bajo.

Cambio de conteo    	    Cartas
    +1	                2, 3, 4, 5, 6
     0	                    7, 8, 9
    -1	               10, 'J', 'Q', 'K', 'A'

La función debe tomar un parámetro carta que puede ser un número o cuna cadena de caracteres y luego aumentar o reducir el valor de la variable global conteo de acuerdo al valor de la carta(observar tabla).

La función debe retornar una cadena de caracteres con el conteo actual y la cadena:
- "Apostar" si el conteo es positivo.
- "Esperar" si el conteo es cero o negativo.

El conteo actual y la decisión del jugador ("Apostar" o "Esperar") deben estar separados por un espacio.
*/

let conteo = 0;

function contarCartas(carta){
    let decisión;
    switch (carta){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            conteo ++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            conteo --
            break;
    }

    if(conteo > 0){
        decisión = "Apostar";
    }else{
        decisión = "Esperar";
    }

    return console.log(conteo + " " + decision);
}

let cartas = 0;
contarCartas(cartas);
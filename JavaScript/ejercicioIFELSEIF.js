/*
En el juego de golf cada hoyo tiene un par que representa el número promedio de golpes que se espera que haga un golfista para introducir la pelota en el hoyo.

Hay un nombre difierente dependiendo de qué tan por encima o por debajo del par estén tus golpes.

La función tomará los argumentos par y golpes.

Retorna la cadena correcta según esta tabla que muestra los golpes en orden de mayo a menor prioridad:

Golpes          Retorna
   1         "Hole-in-one!"
<= par -2        "Eagle"
 par -1          "Birdie"
  par              "Par"
par + 1          "Bogey"   
par + 2      "Double Bogey"
>= par + 3      "Go Home"

Par y golpes siempre serán numéricos y positivos
*/

function golpeGolf(par, golpe){
    if(golpe === 1){
        return "Hole-in-one!";
    }else if(golpe  <= par - 2){
        return "Eagle";
    }else if( golpe === par - 1){
        return "Birdie";
    }else if(golpe === par){
        return "Par";
    }else if(golpe === par + 1){
        return "Bogey";
    }else if(golpe === par + 2){
        return "Double Bogey";
    }else if(golpe >= par + 3){
        return "Go Home";
    }
}

let par = 3;
let golpe = 1;

golpeGolf(par, golpe);


/*OBJETOS COMPLEJOS*/

let ordenesPizza = [
    {
        "tipo": "margarita",
        "tamaño": "individual",
        "precio": 5.67,
        "toppings":[
            "extra queso",
            "champiñones",
            "piña"
        ],
        "paraLlevar": true
    },
    {
        "tipo": "cuatro quesos",
        "tamaño": "familiar",
        "precio": 18.34,
        "toppings":[
            "extra queso",
            "pimenton",
            "piña"
        ],
        "paraLlevar": true
    },
    {
        "tipo": "completa",
        "tamaño": "mediana",
        "precio": 10.25,
        "toppings":[
            "salami",
            "pimenton",
            "piña",
            "champiñones"
        ],
        "paraLlevar": false
    },
    {
        "tipo": "napolitana",
        "tamaño": "personal",
        "precio": 4.00,
        "paraLlevar": true
    }
];

//presentar los objetos en general.
console.log(ordenesPizza[0]);
console.log(ordenesPizza[1]);

//Presentar propiedades de cada objeto

console.log(ordenesPizza[0]["tipo"]); //forma 1 notación de corchetes
console.log(ordenesPizza[0].precio); //forma 2 dando punto y la propiedad.

/* Objetos dinamicos => objeto dentro de otro objeto*/

let miReceta = {
    "descripcion": "mi postre favorito",
    "costo": 15.6,
    "ingredientes":{
        "masa": {
            "harina": "100 g",
            "sal": "1 cucharadita",
            "agua": "1 taza"
        },
        "cobertura":{
            "azucar": "120 g",
            "chocolate": "4 cucharadas",
            "mantequilla": "200 g"
        }
    }
};

console.log(miReceta.descripcion);
console.log(miReceta.costo);
console.log(miReceta.ingredientes);

//acceder o presentar los datos(propiedades) de los objetos anidados con notación de punto.

console.log(miReceta.ingredientes.cobertura);
console.log(miReceta.ingredientes.cobertura.azucar);
console.log(miReceta.ingredientes.cobertura.chocolate);
console.log(miReceta.ingredientes.cobertura.mantequilla);

//acceder o presentar los datos(propiedades) de los objetos anidados con notación de corchetes.

console.log(miReceta.ingredientes["masa"]);
console.log(miReceta.ingredientes.masa["harina"]);
console.log(miReceta.ingredientes.masa["sal"]);
console.log(miReceta.ingredientes.masa["agua"]);

/*OBJETOS CON ARREGLOS ANIDADOS*/

let misPlantas = [
    {
        tipo: "flores",
        lista: [
            "rosas",
            "tulipanes",
            "dientes de león"
        ]
    },
    {
        tipo: "árboles",
        lista: [
            "abeto",
            "pino",
            "abedul"
        ]
    }
];

//Acceder a los elementos de los objetos con arreglos anidados

let propiedad = misPlantas[0].lista[0];
console.log(propiedad);

let propiedad1 = misPlantas[1].lista[2];
console.log(propiedad1);
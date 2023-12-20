let contacto = [
    {
        "nombre": "Harry",
        "apellido": "Potter",
        "numero": "0994372684",
        "gusto": ["Howarts", "Magia"]
    },
    {
        "nombre": "Sherlock",
        "apellido": "Holmes",
        "numero": "0487345643",
        "gustos": ["Casos interesantes", "violin"]
    },
    {
        "nombre": "Anie",
        "apellido": "Cajamarca",
        "numero": "098456321",
        "gustos": ["baile", "actuar"]
    }
];

function buscarPerfil(nombre, propiedad){
    for(let i=0; i<contactos.length; i++){
        
        if(contacto[i].nombre === nombre){
        
            return contacto[i][propiedad] || "La propiedad no existe.";
        }
    }
    return "El contacto no es un contacto valido!!!";
}

console.log(buscarPerfil("Anie", "gustos"));//La propiedad y el contacto existe.
console.log(buscarPerfil("Anie", "direccion"));//La propiedad no existe el contacto si existe.
console.log(buscarPerfil("Pedro", "direccion"));//El contacto no existe.
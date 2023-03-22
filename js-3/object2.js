let persona = {
    nombre: "Katerin Santana",
    edad: "28",
    ciudad: "Bogotá",
    profesión: "Ingeniera Ambiental",
};

console.log(persona);

/*
persona.presentacion = function () {
    return (this.nombre) + ", " + (this.edad) + ", " + (this.ciudad);
}

console.log(persona.presentacion());
*/

function presentacion(persona) {
    return (persona.nombre) + ", " + (persona.edad) + ", " + (persona.ciudad);
}

const mensaje = presentacion(persona);
console.log(mensaje);

persona.hobbies = ["leer", "viajar", "tomar fotos"];
console.log(persona.hobbies);
for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
}

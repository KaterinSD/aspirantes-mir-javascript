const pedro = {
    nombre: "Pedro Perez",
    edad: "30",
    activo: "true",
    hobbies: ["programar", "squash", "piano"],

}
//console.log(pedro.edad);
pedro.estatura = 1.8;
//console.log(pedro.estatura);
delete pedro.activo;
//console.log(pedro.activo);
for (const llave in pedro) {
    console.log(llave, ": ", pedro[llave]);

}
pedro.saluda = function (nombre) {
    return 'Hola, me llamo ' + nombre;
}
console.log(pedro.saluda("Pedro Perez"));
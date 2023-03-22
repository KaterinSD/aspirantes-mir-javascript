let receta = {

};

receta.nombre = "Sandwich";
receta.ingredientes = [];
receta.ingredientes.push({
    nombre: "Pan",
    cantidad: 2
});
receta.ingredientes.push({
    nombre: "Queso",
    cantidad: 1
});

console.log(receta.ingredientes[0]);

let suma_cantidad = 0;
for (let i = 0; i < receta.ingredientes.length; i++) {
    for (const key in receta.ingredientes[i]) {
        if (key === "cantidad") {
            suma_cantidad += receta.ingredientes[i][key];
        }
    }
};

console.log("Suma de las cantidades de ingredientes: ", suma_cantidad);
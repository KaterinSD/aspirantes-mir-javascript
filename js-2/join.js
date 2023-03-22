const join = function (arreglo) {
    if (arreglo.length === 0) return "";
    let str = "";

    for (let word of arreglo) {
        str += word + " ";
    }
    return str;
}

console.log(join(["Hola", "Mundo"]));
console.log(join(["Make", "It", "Real"]));
console.log(join([]));
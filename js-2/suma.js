const sum = function (arreglo) {
    if (arreglo.length === 0) return 0;

    let acum = 0;
    for (let i = 0; i < arreglo.length; i++) {
        acum += arreglo[i];
    }

    return acum;
}

console.log(sum([1, 2, 3]));
console.log(sum([10, 8, 12, 5]));
console.log(sum([]));

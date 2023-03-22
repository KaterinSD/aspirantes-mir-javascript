const max = function (arreglo) {

    if (arreglo.length === 0) return undefined;
    let max = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (max < arreglo[i]) max = arreglo[i];
    }
    return max;
}

console.log(max([1, 3, 2]));
console.log(max([10, 9, 8, 7, 6, 5, 4]));
console.log(max([]));

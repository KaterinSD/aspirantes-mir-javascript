const maxIndex = function (arreglo) {
    if (arreglo.length === 0) return -1;
    let max_index = 0;
    let max = arreglo[0];
    for (let i = 0; i < arreglo.length; i++) {
        if (max < arreglo[i]) {
            max = arreglo[i];
            max_index = 1;
        }
    }
    return max_index;
}

console.log(maxIndex([1, 3, 2]));
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4]));
console.log(maxIndex([]));
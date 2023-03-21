function sum(numero) {
    let suma = 0;
    if (numero === 0) return 0;
    for (let i = 1; i <= numero; i++) {
        suma += i;
    }
    return suma;
}

console.log(sum(4));
console.log(sum(10));
console.log(sum(15));
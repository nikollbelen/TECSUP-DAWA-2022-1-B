/**
 * Mostrar los 50 primeros números múltiplos de 7, pero NO múltiplos de 2,3 o 5.
 */

let arreglo = [];
for (var i = 0; i < 51; i++) {
    if ((i % 2) == 0 || (i % 3) == 0 || (i % 5) == 0) {
    } else if ((i % 7) == 0) {
        arreglo.push(+i);
    }
};

console.log(arreglo)
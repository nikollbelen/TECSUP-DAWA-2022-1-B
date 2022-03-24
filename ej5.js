/**
 * Cree una función que reciba un número entero J y un arreglo de enteros, 
 * la función debe retornar el arreglo con los enteros desplazados hacia 
 * la izquierda según el entero J. Ej. J = 2 y el arreglo original es igual 
 * a [1,2,3,4,5] el resultado debe ser [3,4,5,1,2], NOTA. Investigue el 
 * método Shift() de Javascript para obtener el resultado.
 */

const moverPosiciones = (j, arreglo) => {
    console.log(arreglo)
    console.log(j)
    for (var i = 0; i < j; i++) {
        let eliminado = arreglo.shift();
        arreglo.push(+eliminado);
    };
    return (arreglo)
};

let j = prompt("Ingrese el desplazamiento");
let continuar = true;
let arrNum = [];
do {
    let ingreso = prompt("Ingrese un número o escriba x para dejar de ingresar números");
    if (ingreso === "x") {
        continuar = false;
    } else {
        arrNum.push(+ingreso);
    }
} while (continuar === true);

console.log(moverPosiciones(j, arrNum))
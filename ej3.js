/**
 * Calcular la comisión sobre las ventas totales de un empleado, sabiendo que 
 * el empleado no recibe comisión si su venta es hasta S/.150, si la venta es 
 * superior a S/.150 y menor o igual a S/.400 el empleado recibe una comisión 
 * del 10% de las ventas y si las ventas son mayores a 400, entonces la comisión 
 * es de S/.50 más el 9% de las ventas.
 */

const comision = (ventas) => {
    if (ventas < 150) {
        return ("No recibes comision")
    } else if (ventas <= 400) {
        return ("Tu comision es: S/." + ventas*0.1)
    } else {
        return ("Tu comision es: S/." + (50 + ventas*0.09))
    }
};

let ventas = prompt("Ingrese la cantidad de las ventas totales: ");

ventas = parseInt(ventas);

console.log(comision(ventas))
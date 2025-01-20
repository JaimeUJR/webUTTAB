// Escriba un programa que reciba como entrada las longitudes de los dos catetos
// aa y bb de un triángulo rectángulo, y que entregue como salida el largo de la
// hipotenusa cc del triangulo, dado por el teorema de Pitágoras.

const { log } = require('console');
const rd = require('readline');
const rl = rd.createInterface({
    input: process.stdin,
    output: process.stdout
})

let aa, bb;

function hipotenusa(x = 1) {
    if (x === 2) {
        rl.question(`\nIngrese el lado ${x} (bb): `, (res) => {
            bb = parseFloat(res.toString().trim());

            if (isNaN(bb)) {
                console.log("Por favor, ingrese un número válido.");
                hipotenusa(2);
            }

            console.log(`La hipotenusa es: ${Math.hypot(aa, bb).toFixed(2)}`);
            rl.close();
        });
    } else {
        rl.question(`\nIngrese el lado ${x} (aa): `, (res) => {
            aa = parseFloat(res.toString().trim());

            if (isNaN(aa)) {
                console.log("Por favor, ingrese un número válido.");
                hipotenusa(1);
            }

            hipotenusa(2);
        });
    }
}

hipotenusa();
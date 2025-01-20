// Cree un programa que convierta de centímetros a pulgadas.
// Recuerda que una pulgada es igual a 2.54 centímetros.

const rd = require('readline');
const rl = rd.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("\n Ingrese el número en centímetros (cm): ", (res)=>{
    console.log(`\n ${res} cm = ${(res / 2.54).toFixed(4)} in (pulgadas)\n`);
    rl.close();
})


// Cree un programa que pregunte al usuario la hora actual t del reloj y un número entero de horas h,
// que indique qué hora marcará el reloj dentro de h horas.

const rd = require('readline');
const rl = rd.createInterface({
    input: process.stdin,
    output: process.stdout
})

let horaString, suma, hora;
function sumaHora(x = 1) {
    if (x == 2) {
        rl.question("\n Ingrese la cantidad de hora(s) a sumar: ", (res)=>{
            suma = parseInt(res.toString().trim());
            parseInt(hora);

            console.log(`\n En ${suma} hrs, la hora será ${horaString.replace(hora, suma+hora)}`);
            rl.close();
        })

    } else {
        rl.question("\n Ingrese la hora actual: ", (res)=>{
            horaString = res.toString().trim();
            hora = parseInt(res.charAt(0));
            sumaHora(2);
        });
    }
}

sumaHora()
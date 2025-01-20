// Cree un programa que muestre que solicite al usuario su edad y el programa le muestre
//  las decadas, lustros, años, meses, semanas, días, horas y minutos vividos.

let edad, decadas, lustros, años, meses, semanas, dias, horas, minutos;
process.stdout.write("\n Ingrese su edad: ");
process.stdin.on('data', (data)=>{
    edad = parseInt(data.toString().trim());

    decadas = edad / 10;
    lustros = edad / 5;
    años = edad;
    meses = 12 * años;
    semanas = 52 * años;
    dias = 365 * años;
    horas = 8760 * años;
    minutos = 12614400 * años;

    console.log(`
            Decadas: ${decadas}, \n
            Lustros: ${lustros}, \n
            años: ${años}, \n
            meses: ${meses}, \n
            semanas: ${semanas}, \n
            dias: ${dias}, \n
            horas: ${horas}, \n
            minutos: ${minutos} \n
        `);

    process.exit();
})
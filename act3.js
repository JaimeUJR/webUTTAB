// Cree un programa que permita calcular el promedio de cuatro calificaciones ingresadas por el usuario.

// -------- CONSULTADO CON IA 😞 --------
const readline = require('readline');

// Configurar entrada y salida
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calificaciones = [];
let suma = 0;

function pedirCalificacion(index, total) {
    if (index > total) {
        // Cuando todas las calificaciones han sido ingresadas
        console.log(`\nEl promedio es de: ${(suma / total).toFixed(2)}`);
        rl.close();
        return;
    }

    rl.question(`\nIngrese la calificación ${index}: `, (respuesta) => {
        const c = parseFloat(respuesta.trim());
        if (!isNaN(c)) {
            calificaciones.push(c);
            suma += c;
            pedirCalificacion(index + 1, total); // Llamar para la siguiente calificación
        } else {
            console.log("Por favor, ingrese un número válido.");
            pedirCalificacion(index, total); // Reintentar la misma calificación
        }
    });
}

const noCalificaciones = 4;
pedirCalificacion(1, noCalificaciones);
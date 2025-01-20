// Cree un programa que solicite el radio de un circulo y entregue como salida el perímetro y el área.

process.stdout.write("\n Ingrese el radio del círculo: ");
process.stdin.on('data', (data) => {
    let r = parseInt(data.toString().trim(), 10);

    let area = Math.PI * (r * r);
    let perimetro = (2 * Math.PI) * r;

    console.log(`\nEl radio del circulo es de ${r}cm, el área es de  ${area.toFixed(1)} y su perimetro es de ${perimetro.toFixed(1)}\n`);

    // console.log(typeof data);
    // console.log(typeof r);
    process.exit();
});
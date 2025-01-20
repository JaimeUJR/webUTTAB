// Cree un programa que le pida su nombre a usuario y lo salude por su nombre

process.stdout.write("\n ¿Cuál es tu nommbre?\n");
process.stdin.on('data',  (data)=> {
    let nombre = data.toString().trim();

    process.stdout.write("\nHola "+ nombre +", bienvenido a node JS \n\n");

    for (let i = 0; i < nombre.length; i++) {
        console.log(nombre.charAt(i));
    }
    console.log("\n");

    process.exit();
});
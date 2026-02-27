const obtenerVidejuego = require('./mod1');
let nombreDelJuego = 'Medal of Honor';

if(obtenerVidejuego(nombreDelJuego)){
    console.log(`${nombreDelJuego}, esta en la base de datos`);
} else {
    console.log(`${nombreDelJuego}, no existe`);
}

console.log("Inicio");

setTimeout(() => {
    console.log("Esto tarda 2 segundos");
}, 2000);

console.log("Fin");

const fs = require("fs");

fs.readFile("texto.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error");
        return;
    }

    console.log(data);
});

const http = require("http");

const servidor = http.createServer((req, res) => {
    res.end("Servidor funcionando");
});

servidor.listen(3000);


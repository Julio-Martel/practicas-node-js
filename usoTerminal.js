const os = require("os"); // importamos el módulo nativo "os"

console.log("🖥️ Información del sistema:");
console.log("Sistema operativo:", os.type());
console.log("Versión:", os.release());
console.log("Arquitectura:", os.arch());
console.log("Memoria libre (MB):", Math.round(os.freemem() / 1024 / 1024));
console.log("Memoria total (MB):", Math.round(os.totalmem() / 1024 / 1024));

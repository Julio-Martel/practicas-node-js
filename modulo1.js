const encontrarNumeroEnElArreglo = (numero,arreglo) => {
    let numeroEncontrado = arreglo.includes(numero);
    return numeroEncontrado;
}

module.exports = encontrarNumeroEnElArreglo(numero,arreglo);
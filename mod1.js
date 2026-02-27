const mostrarVideojuego = (tituloVideojuego) => {
    let juegos = ['Resident Evil Requiem','Call of Duty', 'The Evil Within'];
    let incluido = null;

    if(juegos.includes(tituloVideojuego)){
        incluido = true;
    } else {
        incluido = false;
    } 

    return incluido;

}

module.exports = mostrarVideojuego;
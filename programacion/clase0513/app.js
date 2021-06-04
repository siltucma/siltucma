window.onload = main;

function main(params) {
    document.getElementById("boton").addEventListener("click",traerDatos);
}

function traerDatos() {
    fetch("https://randomuser.me/api/")
    .then(dato => dato.json())
    .then(dato => {
        console.log(dato);
        //document.getElementById("nombre").innerHTML = dato.results[0].title + dato.results[0].first + dato.results[0].
        document.getElementById("div1")
        .innerHTML = `<img src=${dato.results[0].picture.large} alt="sin datos" width=150 height=150>`
    })
}
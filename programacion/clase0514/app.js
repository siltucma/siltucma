window.onload = main;

function main() {
    nuevoArticulo = {
        id: 6,
        descripcion: "fideo cotella",
        cantidad: 55
    }

    fetch("http://localhost:3000/articulos", {
        method: "POST",
        body: JSON.stringify(nuevoArticulo),
        headers: {
            "Content-type": "aplication/json"
        }
    })
    .then(res => res.json())
    .then(res => console.log(res))
}


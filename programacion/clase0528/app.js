window.onload = main;

var datosDiv = document.getElementById("div");
var url = 

function main() {
    const boton = document.getElementById("boton");
    boton.addEventListener("click", mostrar);
}

async function traerDatos(url) {
    let res = await fetch(url);
    console.log(res);
    return res.json();
}

async function mostrar() {
    loopDatos(await traerDatos("https://randomuser.me/api/"));
    loopDatos(await traerDatos("https://jsonplaceholder.typicode.com/users"));
}

function loopDatos(dato) {
    for (var key in dato){
        if (typeof datos[key] === "object" && dato[key] !== null) {
            datosDiv.innerHTML += "<li> "+key+" </li>";
            loopDatos(dato[key]);
        }else{
            datosDiv.innerHTML += "<li>"+key+"->"+dato[key]+"</li>";
        }
    }
}


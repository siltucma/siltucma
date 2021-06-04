function generarTabla() {
    const tabla = document.getElementById("numNumero").value;
    let tablaCompleta = "<br>";
    for (let i = 1; i <= 12; i++) {
        tablaCompleta +=  `${tabla} x ${i} = ${tabla * i} <br>`;
    }
    document.getElementById("division").innerHTML = tablaCompleta;
}

let htmlgenerado = tabla + `<table border="1"><th>Tabla del ${numero}</th>`;
        //ahroa tengo que usar <tr><td>
        for (let i = 0; i <= 9 ; i++) {

            htmlgenerado += `<tr><td>${numero} * ${i} = ${numero * i} </td></tr>`;
        }


        function agregarAlumno() {
            const nom = document.getElementById("nombre").value;
            document.getElementById("division").innerHTML += nom + "<br>";
            document.getElementById("nombre").value="";
            document.getElementById("nombre").focus();
            if (localStorage.alumnos) {
                localStorage.alumnos += nom +"<br>";
            }
            else {
                localStorage.alumnos = nom + "<br>";
            }
        }

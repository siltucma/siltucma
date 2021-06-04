window.onload = main;

function main() {
    document.getElementById("agregar").addEventListener("click", agregarAlumno);
    document.getElementById("borrar").addEventListener("click", () => {
      localStorage.clear();
      document.getElementById("division").innerHTML = "";
    });
    if (localStorage.alumnos) {
      document.getElementById("division").innerHTML = localStorage.alumno
    }
    document.getElementById("txtNombre").focus();
}

function agregarAlumno() {
    const nombre = document.getElementById("txtNombre").value;
    document.getElementById("division").innerHTML += nombre +"<br>";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtNombre").focus();
    if (localStorage.alumnos) {
      localStorage.alumnos +=  nombre + "<br>";  
    } else {
        localStorage.alumnos = nombre + "<br>";
    }
}
function sumar() {
  const primero = document.getElementById("primero").value;
  const segundo = document.getElementById("segundo").value;

  const resultado = +primero + +segundo;
  document.getElementById("resultado").value = resultado;
}
function restar() {
  const primero = document.getElementById("primero").value;
  const segundo = document.getElementById("segundo").value;

  const resultado = +primero - +segundo;
  document.getElementById("resultado").value = resultado;
}
function multiplicar() {
  const primero = document.getElementById("primero").value;
  const segundo = document.getElementById("segundo").value;

  const resultado = +primero * +segundo;
  document.getElementById("resultado").value = resultado;
}
function dividir() {
  const primero = document.getElementById("primero").value;
  const segundo = document.getElementById("segundo").value;
  if (segundo == 0) {
    alert("No se puede dividir por cero");
  } else {
    const resultado = +primero / +segundo;
    document.getElementById("resultado").value = resultado;
  }
}
function potencia() {
  const primero = document.getElementById("primero").value;
  const segundo = document.getElementById("segundo").value;

  const resultado = Math.pow(+primero, +segundo);
  document.getElementById("resultado").value = resultado;
}
function raiz() {
  const primero = document.getElementById("primero").value;
  const segundo = document.getElementById("segundo").value;

  const resultado = Math.pow(+primero, 1 / +segundo);
  document.getElementById("resultado").value = resultado;
}
function vertabla() {
  const tabla = document.getElementById("tabla").value;
  for (i = 1; i <= 10; i++) {
    document.getElementById(i).innerHTML = tabla + " x " + i + "= " + tabla * i;
  }
}

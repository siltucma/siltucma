/* do {
    let contador = prompt("Ingrese desde que numero quiere contar.");
    while (contador) {
        alert(contador--)
    }
} while (confirm("¿quiero otra cuenta?"));
 */

function suma() {
    const primerOperando = document.getElementById("numNumero1").value;
    const segundoOperando = document.getElementById("numNumero2").value;
    const suma = parseInt(primerOperando) + +segundoOperando;
    
    document.getElementById("numTotal").value=suma;
}


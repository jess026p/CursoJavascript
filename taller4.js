function calcularDigitos() {
    // Obtener el valor del input
    var numero = document.getElementById('numero').value;

    // Validar que el número sea de dos dígitos
    if (numero < 10 || numero > 99) {
        document.getElementById('resultado').innerText = 'Por favor, ingresa un número de dos dígitos.';
        return;
    }

    // Calcular las decenas y las unidades
    var decenas = Math.floor(numero / 10);
    var unidades = numero % 10;

    // Mostrar el resultado
    document.getElementById('resultado').innerText = 'Decenas: ' + decenas + ', Unidades: ' + unidades;
}
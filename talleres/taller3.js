function calcularConsumo() {
    // Obtener los valores de los inputs
    var kilometros = document.getElementById('kilometros').value;
    var litros = document.getElementById('litros').value;

    // Validar que los valores ingresados sean mayores a cero
    if (kilometros <= 0 || litros <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, ingresa valores mayores a cero.';
        return;
    }

    // Calcular el consumo de combustible por kilómetro
    var consumoPorKilometro = litros / kilometros;

    // Mostrar el resultado
    document.getElementById('resultado').innerText = 'El consumo de combustible por kilómetro es: ' + consumoPorKilometro.toFixed(2) + ' litros/km.';
}
// Función para convertir de Celsius a Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
// Función para convertir de Fahrenheit a Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
// Función principal del programa
function temperaturaConversor() {
    // Solicitar al usuario el tipo de conversión
    let opcion = prompt("¿Qué tipo de conversión deseas realizar? (1 para Celsius a Fahrenheit, 2 para Fahrenheit a Celsius)");
    // Convertir la opción a un número entero
    opcion = parseInt(opcion);
    // Validar la opción insertada por el usuario
    if (opcion !== 1 && opcion !== 2) {
        alert("Opción no válida. Por favor, inserta 1 o 2.");
        return;
    }
    // Solicitar al usuario la temperatura a convertir
    let temperatura = prompt("Inserta la temperatura:");
    // Convertir la temperatura a un número flotante
    temperatura = parseFloat(temperatura);
    // Realizar la conversión según la opción seleccionada
    let resultado;
    if (opcion === 1) {
        resultado = celsiusToFahrenheit(temperatura);
        alert(`${temperatura} grados Celsius equivalen a ${resultado} grados Fahrenheit.`);
    } else {
        resultado = fahrenheitToCelsius(temperatura);
        alert(`${temperatura} grados Fahrenheit equivalen a ${resultado} grados Celsius.`);
    }
}
// Llamar a la función principal del programa
temperaturaConversor();
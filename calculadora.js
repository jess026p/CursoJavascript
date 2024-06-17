const sumar=({numero1, numero2})=> numero1 + numero2;
const restar = ({ numero1, numero2 }) => numero1 - numero2;
const multiplicar = ({ numero1, numero2 }) => numero1 * numero2;
const dividir = ({ numero1, numero2 }) => numero1 / numero2;

//objeto=numeros
const numeros = { numero1: 10, numero2: 5 };

//desestructuracion para las operaciones
const { numero1, numero2 } = numeros;

console.log(`Suma: ${numero1} + ${numero2} = ${sumar(numeros)}`);
console.log(`Resta: ${numero1} - ${numero2} = ${restar(numeros)}`);
console.log(`Multiplicación: ${numero1} * ${numero2} = ${multiplicar(numeros)}`);
console.log(`División: ${numero1} / ${numero2} = ${dividir(numeros)}`);
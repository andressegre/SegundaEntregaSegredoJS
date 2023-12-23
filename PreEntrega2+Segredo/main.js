// Variables necesarias
let userInput;
let resultado;

// Objetos (puedes agregar más según tus necesidades)
const calculadora = {
    sumar: function(a, b) {
        return a + b;
    },
    restar: function(a, b) {
        return a - b;
    },
    multiplicar: function(a, b) {
        return a * b;
    },
    dividir: function(a, b) {
        // Manejar división por cero
        return b !== 0 ? a / b : "Error: División por cero";
    },
    // Agregar más operaciones según sea necesario
};

// Arrays (ejemplo)
const historialOperaciones = [];

// Métodos de búsqueda y filtrado sobre el Array (ejemplo)
function buscarEnHistorial(operacion) {
    return historialOperaciones.includes(operacion);
}

function filtrarHistorialPorTipo(tipo) {
    return historialOperaciones.filter(operacion => operacion.includes(tipo));
}

// Funciones esenciales del proceso a simular
function capturarEntradas() {
    userInput = prompt("Ingrese los números y la operación (ejemplo: 2 + 3)");
}

function procesarEntradas() {
    // Separar la entrada en números y operación
    const [num1, operacion, num2] = userInput.split(" ");
    
    // Convertir los números a tipo numérico
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    // Realizar la operación
    switch (operacion) {
        case "+":
            resultado = calculadora.sumar(numero1, numero2);
            break;
        case "-":
            resultado = calculadora.restar(numero1, numero2);
            break;
        case "*":
            resultado = calculadora.multiplicar(numero1, numero2);
            break;
        case "/":
            resultado = calculadora.dividir(numero1, numero2);
            break;
        // Agregar más casos según las operaciones necesarias
        default:
            resultado = "Operación no válida";
    }
}

function mostrarResultado() {
    alert(`El resultado es: ${resultado}`);
}

// Ejecutar el flujo principal
capturarEntradas();
procesarEntradas();
mostrarResultado();

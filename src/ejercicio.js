// Datos del aprendiz (const porque estos valores no cambiarán durante la ejecución)
const nombre = "Daniel Ochoa";
const ficha = "3412768";

// Arreglo que almacena las tres calificaciones del aprendiz
const notas = [3.0, 2.5, 1.8];

// Cálculo del promedio sumando las tres notas y dividiéndolas entre la cantidad de notas
const promedio = (notas[0] + notas[1] + notas[2]) / 3;

// Encabezado del programa
console.log(`==============================\nSISTEMA DE NOTAS SENA\n==============================`);

// Muestra el nombre del aprendiz
console.log(`Aprendiz: ${nombre}`);

// Muestra el número de ficha
console.log(`Ficha: ${ficha}`);

// Muestra todas las notas separadas por comas
console.log(`Notas: ${notas.join(", ")}`);

console.log(`==============================`);

// Muestra el promedio con dos cifras decimales
console.log(`Promedio: ${promedio.toFixed(2)}`);

// Evalúa si el promedio es mayor o igual a 3.0 para determinar el estado del aprendiz
console.log(`Estado: ${promedio >= 3 ? "Aprobado" : "No Aprobado"}`);
// Desafíos:

// Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
diaDeSemana = prompt("¿Qué día de la semana es?");
if (diaDeSemana === "Sábado" || diaDeSemana === "Domingo") {
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena Semana!");
}

// Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numero = prompt("Ingrese un número");
if ( numero > 0){
    alert(`El numero ${numero} es positivo`)
} else {
    alert(`El numero ${numero} es negativo o cero`)
}

// Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
let puntaje = prompt("Ingrese tu puntaje");
if ( puntaje >= 100){
    alert("¡Felicidades, has ganado!")
} else {
    alert("Intentalo nuevamente para ganar.")
}

// Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let saldo = 1000000;
alert(`Su saldo es de $${saldo}`);

// Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombre = 1000000;
alert(`Bienvenido ${nombre}`);

// Puntuaciones
let tuPuntuacion = 0;
let compPuntuacion = 0;

// Opciones disponibles
const opciones = ['piedra', 'papel', 'tijera'];

// Elementos del DOM
const botones = document.querySelectorAll('.boton');
const eleccionTexto = document.getElementById('eleccion');
const mensajeTexto = document.getElementById('mensaje');
const tuPuntuacionSpan = document.getElementById('tuPuntuacion');
const compPuntuacionSpan = document.getElementById('compPuntuacion');
const botonReiniciar = document.getElementById('reiniciar');

// Obtener opción aleatoria de la computadora
function obtenerOpcionComputadora() {
    return opciones[Math.floor(Math.random() * opciones.length)];
}

// Obtener emoji según la opción
function obtenerEmoji(opcion) {
    const emojis = {
        piedra: '🪨',
        papel: '📄',
        tijera: '✂️'
    };
    return emojis[opcion] || '';
}

// Obtener nombre en español
function obtenerNombre(opcion) {
    const nombres = {
        piedra: 'Piedra',
        papel: 'Papel',
        tijera: 'Tijera'
    };
    return nombres[opcion] || '';
}

// Determinar ganador
function determinarGanador(tuOpcion, compOpcion) {
    if (tuOpcion === compOpcion) {
        return 'empate';
    }
    
    if (
        (tuOpcion === 'piedra' && compOpcion === 'tijera') ||
        (tuOpcion === 'papel' && compOpcion === 'piedra') ||
        (tuOpcion === 'tijera' && compOpcion === 'papel')
    ) {
        return 'ganaste';
    }
    
    return 'perdiste';
}

// Actualizar marcador
function actualizarMarcador() {
    tuPuntuacionSpan.textContent = tuPuntuacion;
    compPuntuacionSpan.textContent = compPuntuacion;
}

// Jugar
function jugar(opcionJugador) {
    const opcionComp = obtenerOpcionComputadora();
    const resultado = determinarGanador(opcionJugador, opcionComp);
    
    // Mostrar elecciones
    eleccionTexto.textContent = `Tu: ${obtenerEmoji(opcionJugador)} | Computadora: ${obtenerEmoji(opcionComp)}`;
    
    // Actualizar puntuación y mensaje
    if (resultado === 'ganaste') {
        tuPuntuacion++;
        mensajeTexto.textContent = '¡Ganaste! 🎉';
        mensajeTexto.style.color = '#51cf66';
    } else if (resultado === 'perdiste') {
        compPuntuacion++;
        mensajeTexto.textContent = '¡Perdiste! 😔';
        mensajeTexto.style.color = '#ff6b6b';
    } else {
        mensajeTexto.textContent = '¡Empate! 🤝';
        mensajeTexto.style.color = '#ffa94d';
    }
    
    actualizarMarcador();
}

// Reiniciar juego
function reiniciar() {
    tuPuntuacion = 0;
    compPuntuacion = 0;
    eleccionTexto.textContent = 'Elige una opción';
    mensajeTexto.textContent = '';
    actualizarMarcador();
}

// Event listeners
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const opcion = boton.dataset.opcion;
        jugar(opcion);
    });
});

botonReiniciar.addEventListener('click', reiniciar);

import { StorageService } from './services/storage.service.js';

const lecciones = StorageService.getLecciones();
const leccionActual = lecciones[0]; 

const iconoIdioma = document.getElementById('icono-idioma');
const tituloIdioma = document.getElementById('titulo-idioma');
const oracionOriginal = document.getElementById('oracion-original');
const bancoPalabras = document.getElementById('banco-palabras');
const contenedorRespuesta = document.getElementById('contenedor-respuesta');

const btnComprobar = document.getElementById('btn-comprobar');
const estadoNormal = document.getElementById('estado-normal');
const estadoExito = document.getElementById('estado-exito');
const estadoError = document.getElementById('estado-error');
const textoExito = document.getElementById('texto-exito');
const textoError = document.getElementById('texto-error');
const btnContinuarExito = document.getElementById('btn-continuar-exito');
const btnContinuarError = document.getElementById('btn-continuar-error');

// Estado local de la lección
let palabrasSeleccionadas = [];
let palabrasDisponibles = [...leccionActual.bancoPalabras]; // Copia del banco

// 1. Configurar vista inicial
if (leccionActual.idioma === 'ingles') {
    iconoIdioma.src = '../imagenes/bandera-gb.png'; 
    tituloIdioma.textContent = 'Inglés';
}
oracionOriginal.textContent = leccionActual.oracionOriginal;

// 2. Renderizar las palabras en pantalla
function renderizar() {
    bancoPalabras.innerHTML = '';
    contenedorRespuesta.innerHTML = '';

    // Renderizar banco
    palabrasDisponibles.forEach((palabra, i) => {
        const span = document.createElement('span');
        span.classList.add('palabra');
        span.textContent = palabra;
        span.addEventListener('click', () => {
            // Mover de banco a respuesta
            palabrasSeleccionadas.push(palabra);
            palabrasDisponibles.splice(i, 1);
            renderizar();
        });
        bancoPalabras.appendChild(span);
    });

    // Renderizar respuesta
    palabrasSeleccionadas.forEach((palabra, i) => {
        const span = document.createElement('span');
        span.classList.add('palabra');
        span.textContent = palabra;
        span.addEventListener('click', () => {
            // Mover de respuesta de vuelta al banco
            palabrasDisponibles.push(palabra);
            palabrasSeleccionadas.splice(i, 1);
            renderizar();
        });
        contenedorRespuesta.appendChild(span);
    });
}

// 3. Botón Comprobar Respuesta
btnComprobar.addEventListener('click', () => {
    if (palabrasSeleccionadas.length === 0) return;

    const esCorrecta = JSON.stringify(palabrasSeleccionadas) === JSON.stringify(leccionActual.traduccionCorrecta);

    estadoNormal.classList.add('oculto');

    if (esCorrecta) {
        textoExito.textContent = `Significado: ${leccionActual.traduccionCorrecta.join(' ')}`;
        estadoExito.classList.add('activo');

        // Sumar XP al usuario activo
        const usuarioStr = localStorage.getItem('usuarioActivo');
        if (usuarioStr) {
            const usuario = JSON.parse(usuarioStr);
            usuario.xp += 50; 
            localStorage.setItem('usuarioActivo', JSON.stringify(usuario));
        }
    } else {
        textoError.textContent = `Solución: ${leccionActual.traduccionCorrecta.join(' ')}`;
        estadoError.classList.add('activo');

        // RESTAR VIDA AL USUARIO ACTIVO
        const usuarioStr = localStorage.getItem('usuarioActivo');
        if (usuarioStr) {
            const usuario = JSON.parse(usuarioStr);
            // Si el usuario no tiene la propiedad vidas, arrancamos en 3 por defecto
            if (usuario.vidas === undefined) usuario.vidas = 3;
            
            usuario.vidas -= 1; // Restamos una vida
            localStorage.setItem('usuarioActivo', JSON.stringify(usuario));
            
            // Actualizamos el texto de vidas en la Navbar al instante
            const contadorVidas = document.getElementById('contador-vidas');
            if (contadorVidas) {
                contadorVidas.textContent = `Vidas: ${usuario.vidas}`;
            }
        }
    }
});

// Botones de continuar para volver al dashboard o reiniciar
btnContinuarExito.addEventListener('click', () => {
    window.location.href = 'dashboard.html';
});

btnContinuarError.addEventListener('click', () => {
    window.location.href = 'dashboard.html';
});

// Inicializar juego
renderizar();
import { StorageService } from './services/storage.service.js';

const lecciones = StorageService.getLecciones();
let indiceActual = 0; // Para llevar la cuenta de por qué oración vamos
let leccionActual = lecciones[indiceActual]; 

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

// Elementos de la barra de progreso nativa
const barraProgreso = document.getElementById('barra-progreso');
const textoPorcentaje = document.getElementById('texto-porcentaje');

let palabrasSeleccionadas = [];
let palabrasDisponibles = [];

// Diccionario de idiomas
const idiomasConfig = {
    'ingles': { bandera: '../imagenes/bandera-gb.png', titulo: 'Inglés' },
    'frances': { bandera: '../imagenes/bandera-fr.png', titulo: 'Francés' },
    'aleman': { bandera: '../imagenes/bandera-de.png', titulo: 'Alemán' },
    'italiano': { bandera: '../imagenes/bandera-it.png', titulo: 'Italiano' },
    'portugues': { bandera: '../imagenes/bandera-br.png', titulo: 'Portugués' },
    'espanol': { bandera: '../imagenes/bandera-es.png', titulo: 'Español' },
    'japones': { bandera: '../imagenes/bandera-jp.png', titulo: 'Japonés' },
    'chino': { bandera: '../imagenes/bandera-cn.png', titulo: 'Chino' }
};

// Función para cargar los datos de la oración actual
function cargarLeccionActual() {
    if (!lecciones || lecciones.length === 0) return;
    leccionActual = lecciones[indiceActual];
    palabrasDisponibles = [...leccionActual.bancoPalabras];
    palabrasSeleccionadas = [];

    // Configurar idioma usando el diccionario
    const configActual = idiomasConfig[leccionActual.idioma] || { 
        bandera: '../imagenes/default.png', 
        titulo: leccionActual.idioma 
    };

    iconoIdioma.src = configActual.bandera;
    tituloIdioma.textContent = configActual.titulo;
    oracionOriginal.textContent = leccionActual.oracionOriginal;

    // Actualizar barra de progreso visualmente al cargar
    const porcentaje = Math.round((indiceActual / lecciones.length) * 100);
    if (barraProgreso && textoPorcentaje) {
        barraProgreso.value = porcentaje;
        textoPorcentaje.textContent = `${porcentaje}%`;
    }

    renderizar();
}

// 2. Renderizar las palabras en pantalla
function renderizar() {
    bancoPalabras.innerHTML = '';
    contenedorRespuesta.innerHTML = '';

    palabrasDisponibles.forEach((palabra, i) => {
        const span = document.createElement('span');
        span.classList.add('palabra');
        span.textContent = palabra;
        span.addEventListener('click', () => {
            palabrasSeleccionadas.push(palabra);
            palabrasDisponibles.splice(i, 1);
            renderizar();
        });
        bancoPalabras.appendChild(span);
    });

    palabrasSeleccionadas.forEach((palabra, i) => {
        const span = document.createElement('span');
        span.classList.add('palabra');
        span.textContent = palabra;
        span.addEventListener('click', () => {
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

        // Restar vida
        const usuarioStr = localStorage.getItem('usuarioActivo');
        if (usuarioStr) {
            const usuario = JSON.parse(usuarioStr);
            if (usuario.vidas === undefined) usuario.vidas = 3;
            usuario.vidas -= 1; 
            localStorage.setItem('usuarioActivo', JSON.stringify(usuario));
            
            const contadorVidas = document.getElementById('contador-vidas');
            if (contadorVidas) {
                contadorVidas.textContent = `Vidas: ${usuario.vidas}`;
            }
        }
    }
});

// Botón Continuar (Éxito): Avanzar a la siguiente oración o finalizar
btnContinuarExito.addEventListener('click', () => {
    indiceActual++;
    
    // Si quedan más oraciones en la lección
    if (indiceActual < lecciones.length) {
        estadoExito.classList.remove('activo');
        estadoNormal.classList.remove('oculto');
        cargarLeccionActual();
    } else {
        // Si era la última oración, la lección se completó al 100% y volvemos al dashboard
        if (barraProgreso && textoPorcentaje) {
            barraProgreso.value = 100;
            textoPorcentaje.textContent = '100%';
        }
        window.location.href = 'dashboard.html';
    }
});

// Botón Continuar (Error): Permitir reintentar o volver al estado normal
btnContinuarError.addEventListener('click', () => {
    estadoError.classList.remove('activo');
    estadoNormal.classList.remove('oculto');
    
    // Reseteamos las palabras seleccionadas para que vuelva a armar la oración desde cero
    palabrasDisponibles = [...leccionActual.bancoPalabras];
    palabrasSeleccionadas = [];
    renderizar();
});

// Inicializar la primera oración al cargar la página
cargarLeccionActual();
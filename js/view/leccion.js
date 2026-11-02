import { StorageService } from '../services/storage.service.js';
import { UsuarioService } from '../services/usuario.service.js';

// Inicializamos los servicios
const usuarioService = new UsuarioService();

// 1. Aseguramos que los datos del JSON estén listos en el Storage antes de leerlos
StorageService.inicializarDatos();

// 2. Leemos el parámetro 'leccion' de la URL (si no hay nada, por defecto carga la 1)
const parametrosURL = new URLSearchParams(window.location.search);
const leccionSeleccionadaId = parseInt(parametrosURL.get('leccion')) || 1;

// 3. Traemos todas las lecciones del Storage y filtramos estrictamente por el ID y por el idioma inglés
const todasLasLecciones = StorageService.getLecciones();
const lecciones = todasLasLecciones.filter(l => l.leccionId === leccionSeleccionadaId && l.idioma === 'ingles');

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

    if (iconoIdioma) iconoIdioma.src = configActual.bandera;
    if (tituloIdioma) tituloIdioma.textContent = configActual.titulo;
    if (oracionOriginal) oracionOriginal.textContent = leccionActual.oracionOriginal;

    // Actualizar barra de progreso visualmente al cargar
    const porcentaje = Math.round((indiceActual / lecciones.length) * 100);
    if (barraProgreso && textoPorcentaje) {
        barraProgreso.value = porcentaje;
        textoPorcentaje.textContent = `${porcentaje}%`;
    }

    renderizar();
}

// Renderizar las palabras en pantalla
function renderizar() {
    if (!bancoPalabras || !contenedorRespuesta) return;
    
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
if (btnComprobar) {
    btnComprobar.addEventListener('click', () => {
        if (palabrasSeleccionadas.length === 0) return;

        const esCorrecta = JSON.stringify(palabrasSeleccionadas) === JSON.stringify(leccionActual.traduccionCorrecta);

        estadoNormal.classList.add('oculto');

        // Simulamos obtener el usuario actual activo (tomamos el primero de la lista para el prototipo)
        let usuarios = usuarioService.getUsuarios();
        let usuarioActual = usuarios.length > 0 ? usuarios[0] : null;

        if (esCorrecta) {
            textoExito.textContent = `Significado: ${leccionActual.traduccionCorrecta.join(' ')}`;
            estadoExito.classList.add('activo');

            // Sumar XP usando el servicio o actualizando el objeto
            if (usuarioActual) {
                usuarioActual.xp = (usuarioActual.xp || 0) + 50;
                localStorage.setItem('usuarios', JSON.stringify(usuarios));
            }
        } else {
            textoError.textContent = `Solución: ${leccionActual.traduccionCorrecta.join(' ')}`;
            estadoError.classList.add('activo');

            if (usuarioActual) {
                if (usuarioActual.vidas === undefined || usuarioActual.vidas === null) {
                    usuarioActual.vidas = 3;
                }
                
                usuarioActual.vidas -= 1; 
                if (usuarioActual.vidas < 0) usuarioActual.vidas = 0;

                localStorage.setItem('usuarios', JSON.stringify(usuarios));
                
                const contadorVidas = document.getElementById('contador-vidas');
                if (contadorVidas) {
                    contadorVidas.textContent = `Vidas: ${usuarioActual.vidas}`;
                }

                // Si las vidas llegan a 0, ponemos un enlace interactivo al mapa y el botón a la tienda
                if (usuarioActual.vidas === 0) {
                    textoError.innerHTML = `¡Te quedaste sin vidas! Esperá 1 hora en tu <a href="dashboard.html" style="text-decoration: underline; color: inherit; font-weight: bold;">mapa</a> para recargar o ve a la tienda.`;
                    
                    btnContinuarError.textContent = "Ir a la Tienda";
                    btnContinuarError.onclick = () => {
                        window.location.href = 'tienda.html';
                    };
                } else {
                    // Si aún tiene vidas, dejamos el botón listo para reintentar normalmente
                    btnContinuarError.textContent = "Continuar";
                    btnContinuarError.onclick = () => {
                        estadoError.classList.remove('activo');
                        estadoNormal.classList.remove('oculto');
                        
                        palabrasDisponibles = [...leccionActual.bancoPalabras];
                        palabrasSeleccionadas = [];
                        renderizar();
                    };
                }
            }
        }
    });
}

// Botón Continuar (Éxito): Avanzar a la siguiente oración o finalizar
if (btnContinuarExito) {
    btnContinuarExito.addEventListener('click', () => {
        indiceActual++;
        
        // Si quedan más oraciones en lección
        if (indiceActual < lecciones.length) {
            estadoExito.classList.remove('activo');
            estadoNormal.classList.remove('oculto');
            cargarLeccionActual();
        } else {
            // Si era la última oración, la lección se completó y volvemos al dashboard
            if (barraProgreso && textoPorcentaje) {
                barraProgreso.value = 100;
                textoPorcentaje.textContent = '100%';
            }
            window.location.href = 'dashboard.html';
        }
    });
}

// Inicializar la primera oración al cargar la página
cargarLeccionActual();
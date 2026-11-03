import { getData, saveData } from '../services/storage.service.js';
import { UsuarioService } from '../services/usuario.service.js';

// Inicializamos el servicio de usuarios
const usuarioService = new UsuarioService();

// 1. Verificar si hay un usuario activo logueado (Protección de ruta)
let usuarioActivo = getData('usuarioActivo');

if (!usuarioActivo || Object.keys(usuarioActivo).length === 0) {
    window.location.href = '../index.html';
}

// 2. Manejo de vidas: verificar si pasaron 30 minutos para regenerarlas automáticamente
usuarioActivo = usuarioService.verificarRegeneracionVidas(usuarioActivo);

// Si el usuario no tiene vidas disponibles, no puede iniciar ni continuar la lección
const sinVidas = (usuarioActivo.vidas ?? 3) <= 0;
if (sinVidas) {
    const minutosRestantes = usuarioService.obtenerMinutosRestantes(usuarioActivo);
    alert(`¡No tienes vidas suficientes para realizar la lección! Debes esperar ${minutosRestantes} minuto(s) para que se restablezcan o ir a la tienda a recargarlas con XP.`);
    window.location.href = 'tienda.html';
}

// 3. Leemos los parámetros 'curso' y 'leccion' de la URL
const parametrosURL = new URLSearchParams(window.location.search);
const cursoSeleccionadoId = parametrosURL.get('curso') || 'ingles';
const leccionSeleccionadaId = parseInt(parametrosURL.get('leccion')) || 1;

// 4. Traemos todas las lecciones y filtramos de forma flexible (por idioma/curso y opcionalmente lección)
const todasLasPreguntas = getData('preguntas') || [];
const lecciones = todasLasPreguntas.filter(l =>
    (l.idioma === cursoSeleccionadoId || l.curso === cursoSeleccionadoId) &&
    (l.leccionId === leccionSeleccionadaId || l.id === leccionSeleccionadaId || !l.leccionId)
);

// Si no encuentra nada específico por ID, filtramos al menos por el idioma del curso
let leccionesFiltradas = lecciones;
if (leccionesFiltradas.length === 0) {
    leccionesFiltradas = todasLasPreguntas.filter(l => l.idioma === cursoSeleccionadoId || l.curso === cursoSeleccionadoId);
}

let indiceActual = 0; // Para llevar la cuenta de por qué oración vamos
let leccionActual = leccionesFiltradas[indiceActual];

// Elementos del DOM
const iconoIdioma = document.getElementById('icono-idioma');
const tituloIdioma = document.getElementById('titulo-idioma');
const oracionOriginal = document.getElementById('oracion-original');
const bancoPalabras = document.getElementById('banco-palabras');
const contenedorRespuesta = document.getElementById('contenedor-respuesta');
const contadorVidas = document.getElementById('contador-vidas');

const btnComprobar = document.getElementById('btn-comprobar');
const estadoNormal = document.getElementById('estado-normal');
const estadoExito = document.getElementById('estado-exito');
const estadoError = document.getElementById('estado-error');
const textoExito = document.getElementById('texto-exito');
const textoError = document.getElementById('texto-error');
const btnContinuarExito = document.getElementById('btn-continuar-exito');
const btnContinuarError = document.getElementById('btn-continuar-error');

// Elementos de la barra de progreso
const barraProgreso = document.getElementById('barra-progreso');
const textoPorcentaje = document.getElementById('texto-porcentaje');

let palabrasSeleccionadas = [];
let palabrasDisponibles = [];

// Diccionario de idiomas para banderas y títulos
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

// Función para actualizar las vidas en pantalla
function actualizarInterfazVidas() {
    if (contadorVidas) {
        contadorVidas.textContent = `Vidas: ${usuarioActivo.vidas ?? 0}`;
    }
}

actualizarInterfazVidas();

// Función para cargar los datos de la oración actual
function cargarLeccionActual() {
    if (!lecciones || lecciones.length === 0) {
        alert('No hay oraciones disponibles para esta lección.');
        window.location.href = `mapa.html?curso=${cursoSeleccionadoId}`;
        return;
    }

    leccionActual = lecciones[indiceActual];
    palabrasDisponibles = [...leccionActual.bancoPalabras];
    palabrasSeleccionadas = [];

    // Configurar idioma usando el diccionario
    const configActual = idiomasConfig[cursoSeleccionadoId] || {
        bandera: '../imagenes/default.png',
        titulo: cursoSeleccionadoId
    };

    if (iconoIdioma) iconoIdioma.src = configActual.bandera;
    if (tituloIdioma) tituloIdioma.textContent = configActual.titulo;
    if (oracionOriginal) oracionOriginal.textContent = leccionActual.oracionOriginal;

    // Actualizar barra de progreso visualmente al cargar (proporcional al avance)
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

// Botón Comprobar Respuesta
if (btnComprobar) {
    btnComprobar.addEventListener('click', () => {
        if (palabrasSeleccionadas.length === 0) return;

        // Comprobación de seguridad: si no tiene vidas, no puede jugar
        if ((usuarioActivo.vidas ?? 3) <= 0) {
            const minutosRestantes = usuarioService.obtenerMinutosRestantes(usuarioActivo);
            alert(`¡No tienes vidas suficientes! Espera ${minutosRestantes} minuto(s) o recarga en la tienda.`);
            window.location.href = 'tienda.html';
            return;
        }

        const esCorrecta = JSON.stringify(palabrasSeleccionadas) === JSON.stringify(leccionActual.traduccionCorrecta);

        if (estadoNormal) estadoNormal.classList.add('oculto');

        // Sincronizar con la lista general de usuarios
        let usuarios = usuarioService.getUsuarios() || [];
        let usuarioActual = usuarios.find(u => u.id === usuarioActivo.id) || usuarioActivo;

        if (esCorrecta) {
            if (textoExito) textoExito.textContent = `Significado: ${leccionActual.traduccionCorrecta.join(' ')}`;
            if (estadoExito) estadoExito.classList.add('activo');

            // Sumar XP real al usuario logueado (+20 XP por oración correcta)
            usuarioActual.xp = (usuarioActual.xp || 0) + 20;
            usuarioActivo.xp = usuarioActual.xp;

            usuarioService.sincronizarUsuario(usuarioActual);
        } else {
            if (textoError) textoError.textContent = `Solución: ${leccionActual.traduccionCorrecta.join(' ')}`;
            if (estadoError) estadoError.classList.add('activo');

            // Restar vida
            usuarioActual.vidas = (usuarioActual.vidas ?? 3) - 1;
            if (usuarioActual.vidas < 0) usuarioActual.vidas = 0;
            usuarioActivo.vidas = usuarioActual.vidas;

            // Si se quedó sin vidas, registrar timestamp para contar la media hora
            if (usuarioActual.vidas === 0) {
                usuarioActual.tiempoSinVidas = Date.now();
                usuarioActivo.tiempoSinVidas = usuarioActual.tiempoSinVidas;
            }

            usuarioService.sincronizarUsuario(usuarioActual);
            actualizarInterfazVidas();

            // Si las vidas llegan a 0: bloquear continuar y ofrecer ir a la tienda o esperar 30 minutos
            if (usuarioActual.vidas === 0) {
                if (textoError) {
                    textoError.innerHTML = `¡Te quedaste sin vidas! Debes esperar 30 minutos para que se restablezcan o ir a la <a href="tienda.html" style="text-decoration: underline; color: inherit; font-weight: bold;">tienda</a> a recargar con XP.`;
                }
                if (btnContinuarError) {
                    btnContinuarError.textContent = "Ir a la Tienda";
                    btnContinuarError.onclick = () => {
                        window.location.href = 'tienda.html';
                    };
                }
            } else {
                if (btnContinuarError) {
                    btnContinuarError.textContent = "Continuar";
                    btnContinuarError.onclick = () => {
                        if (estadoError) estadoError.classList.remove('activo');
                        if (estadoNormal) estadoNormal.classList.remove('oculto');
                        cargarLeccionActual();
                    };
                }
            }
        }
    });
}

// Botón Continuar (Éxito): Avanzar a la siguiente oración o finalizar la lección
if (btnContinuarExito) {
    btnContinuarExito.addEventListener('click', () => {
        indiceActual++;

        if (indiceActual < lecciones.length) {
            if (estadoExito) estadoExito.classList.remove('activo');
            if (estadoNormal) estadoNormal.classList.remove('oculto');
            cargarLeccionActual();
        } else {
            // ¡Lección completada con éxito! Forzamos la barra al 100% visualmente
            if (barraProgreso && textoPorcentaje) {
                barraProgreso.value = 100;
                textoPorcentaje.textContent = '100%';
            }

            // Deshabilitamos el botón para evitar múltiples envíos
            btnContinuarExito.disabled = true;

            // Esperamos a que la animación de la barra (transition: 0.3s) termine de llenarse al 100%
            setTimeout(() => {
                let usuarios = usuarioService.getUsuarios() || [];
                let usuarioActual = usuarios.find(u => u.id === usuarioActivo.id) || usuarioActivo;

                // --- LÓGICA DE RACHA DIARIA INTELIGENTE ---
                const hoy = new Date().toISOString().split('T')[0]; // Fecha actual "YYYY-MM-DD"

                if (usuarioActual.lastStreakDate === hoy) {
                    // Ya sumó racha hoy, no la aumentamos pero completamos la lección
                    alert('¡Lección completada! 🌟 Ya cubriste tu racha del día de hoy.');
                } else {
                    // Es un nuevo día, incrementamos la racha y actualizamos la fecha
                    usuarioActual.racha = (usuarioActual.racha ?? 0) + 1;
                    usuarioActual.lastStreakDate = hoy;
                    usuarioActivo.racha = usuarioActual.racha;
                    usuarioActivo.lastStreakDate = hoy;

                    alert(`¡Lección completada con éxito! 🔥 Tu racha subió a ${usuarioActual.racha} días.`);
                }

                // Marcar lección como completada para actualizar el mapa a "Repasar"
                let leccionesCompletadas = getData('leccionesCompletadas') || {};
                const claveLeccion = `${cursoSeleccionadoId}_${leccionSeleccionadaId}`;
                leccionesCompletadas[claveLeccion] = { completed: true, fecha: hoy };
                saveData('leccionesCompletadas', leccionesCompletadas);

                // Persistir usuario (las vidas remanentes se conservan intactas)
                usuarioService.sincronizarUsuario(usuarioActual);

                // Redirigir al mapa
                window.location.href = `mapa.html?curso=${cursoSeleccionadoId}`;
            }, 500);
        }
    });
}

// Inicializar la primera oración si tiene vidas disponibles
if (!sinVidas) {
    cargarLeccionActual();
}

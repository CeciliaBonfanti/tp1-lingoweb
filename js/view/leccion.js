import { getData, saveData } from '../services/storage.service.js';
import { UsuarioService } from '../services/usuario.service.js';
import { preguntasIniciales } from '../../data/initial_data.js';

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

// 4. Asegurar sincronización de preguntas con datos iniciales si no existen
let todasLasPreguntas = getData('preguntas') || [];
if (todasLasPreguntas.length === 0) {
    todasLasPreguntas = preguntasIniciales;
    saveData('preguntas', todasLasPreguntas);
} else {
    // Si hay preguntas guardadas pero faltan de otros cursos, sincronizamos
    const idsExistentes = new Set(todasLasPreguntas.map(p => p.id));
    const faltantes = preguntasIniciales.filter(p => !idsExistentes.has(p.id));
    if (faltantes.length > 0) {
        todasLasPreguntas = [...todasLasPreguntas, ...faltantes];
        saveData('preguntas', todasLasPreguntas);
    }
}

// 2-A: Consistencia en el filtrado de lecciones usando una única colección
let preguntasLeccion = todasLasPreguntas.filter(l => {
    const cursoCoincide = (l.idioma === cursoSeleccionadoId || l.curso === cursoSeleccionadoId);
    const leccionCoincide = Number(l.leccionId) === leccionSeleccionadaId;
    return cursoCoincide && leccionCoincide;
});

// Fallback: si no encuentra preguntas exactas con ese leccionId, traer las del idioma
if (preguntasLeccion.length === 0) {
    preguntasLeccion = todasLasPreguntas.filter(l => l.idioma === cursoSeleccionadoId || l.curso === cursoSeleccionadoId);
}

let indiceActual = 0; // Para llevar la cuenta de qué oración estamos resolviendo
let leccionActual = preguntasLeccion[indiceActual];
let comprobacionRealizada = false; // Control de estado para bloquear fichas post-comprobación

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
    'frances': { bandera: '../imagenes/bandera-gb.png', titulo: 'Francés' },
    'aleman': { bandera: '../imagenes/bandera-de.png', titulo: 'Alemán' },
    'italiano': { bandera: '../imagenes/bandera-gb.png', titulo: 'Italiano' },
    'portugues': { bandera: '../imagenes/bandera-gb.png', titulo: 'Portugués' },
    'espanol': { bandera: '../imagenes/bandera-de.png', titulo: 'Español' },
    'japones': { bandera: '../imagenes/bandera-gb.png', titulo: 'Japonés' },
    'chino': { bandera: '../imagenes/bandera-cn.png', titulo: 'Chino' },
    'coreano': { bandera: '../imagenes/bandera-gb.png', titulo: 'Coreano' }
};

// Función para actualizar las vidas en pantalla
function actualizarInterfazVidas() {
    if (contadorVidas) {
        contadorVidas.textContent = `Vidas: ${usuarioActivo.vidas ?? 0}`;
    }
}

actualizarInterfazVidas();

// 3-2: Actualizar el estado disabled del botón de comprobar
function actualizarEstadoBotonComprobar() {
    if (btnComprobar) {
        btnComprobar.disabled = palabrasSeleccionadas.length === 0 || comprobacionRealizada;
    }
}

// Función para cargar los datos de la oración actual
function cargarLeccionActual() {
    if (!preguntasLeccion || preguntasLeccion.length === 0) {
        alert('No hay oraciones disponibles para esta lección.');
        window.location.href = `mapa.html?curso=${cursoSeleccionadoId}`;
        return;
    }

    comprobacionRealizada = false;
    leccionActual = preguntasLeccion[indiceActual];
    palabrasDisponibles = [...leccionActual.bancoPalabras];
    palabrasSeleccionadas = [];

    // Configurar idioma usando el diccionario
    const configActual = idiomasConfig[cursoSeleccionadoId] || {
        bandera: '../imagenes/bandera-gb.png',
        titulo: cursoSeleccionadoId
    };

    if (iconoIdioma) iconoIdioma.src = configActual.bandera;
    if (tituloIdioma) tituloIdioma.textContent = configActual.titulo;
    if (oracionOriginal) oracionOriginal.textContent = leccionActual.oracionOriginal;

    // Actualizar barra de progreso visualmente al cargar
    const porcentaje = Math.round((indiceActual / preguntasLeccion.length) * 100);
    if (barraProgreso && textoPorcentaje) {
        barraProgreso.value = porcentaje;
        textoPorcentaje.textContent = `${porcentaje}%`;
    }

    renderizar();
}

// 3-3: Renderizar palabras accesibles con <button type="button"> y bloquearlas post-comprobación (2-B)
function renderizar() {
    if (!bancoPalabras || !contenedorRespuesta) return;

    bancoPalabras.innerHTML = '';
    contenedorRespuesta.innerHTML = '';

    palabrasDisponibles.forEach((palabra, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.classList.add('palabra');
        btn.textContent = palabra;

        // Si ya se comprobó la respuesta, bloquear interacción
        if (comprobacionRealizada) {
            btn.disabled = true;
        }

        btn.addEventListener('click', () => {
            if (comprobacionRealizada) return;
            palabrasSeleccionadas.push(palabra);
            palabrasDisponibles.splice(i, 1);
            renderizar();
        });
        bancoPalabras.appendChild(btn);
    });

    palabrasSeleccionadas.forEach((palabra, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.classList.add('palabra');
        btn.textContent = palabra;

        // Si ya se comprobó la respuesta, bloquear interacción
        if (comprobacionRealizada) {
            btn.disabled = true;
        }

        btn.addEventListener('click', () => {
            if (comprobacionRealizada) return;
            palabrasDisponibles.push(palabra);
            palabrasSeleccionadas.splice(i, 1);
            renderizar();
        });
        contenedorRespuesta.appendChild(btn);
    });

    actualizarEstadoBotonComprobar();
}

// Botón Comprobar Respuesta
if (btnComprobar) {
    btnComprobar.addEventListener('click', () => {
        if (palabrasSeleccionadas.length === 0 || comprobacionRealizada) return;

        // Comprobación de seguridad: si no tiene vidas, no puede jugar
        if ((usuarioActivo.vidas ?? 3) <= 0) {
            const minutosRestantes = usuarioService.obtenerMinutosRestantes(usuarioActivo);
            alert(`¡No tienes vidas suficientes! Espera ${minutosRestantes} minuto(s) o recarga en la tienda.`);
            window.location.href = 'tienda.html';
            return;
        }

        // 2-B: Marcamos comprobación realizada y renderizamos para deshabilitar fichas
        comprobacionRealizada = true;
        renderizar();

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

            // Guardar progreso parcial de la lección (para mostrar % en el mapa)
            const lcParcial = getData('leccionesCompletadas') || {};
            const claveParcial = `${cursoSeleccionadoId}_${leccionSeleccionadaId}`;
            const progresoExistente = lcParcial[claveParcial] || {};
            // Solo actualizar si la lección aún no fue marcada como completada
            if (!progresoExistente.completed) {
                lcParcial[claveParcial] = {
                    completed: false,
                    avance: indiceActual + 1, // cuántas preguntas correctas llevamos
                    total: preguntasLeccion.length
                };
                saveData('leccionesCompletadas', lcParcial);
            }
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

            // Configurar el botón de error (3-5: dice "Rehacer" si le quedan vidas)
            if (usuarioActual.vidas === 0) {
                if (textoError) {
                    textoError.innerHTML = `¡Te quedaste sin vidas! Debes esperar 30 minutos para que se restablezcan o ir a la <a href="tienda.html" style="text-decoration: underline; color: inherit; font-weight: bold;">tienda</a> a recargar con XP.`;
                }
                if (btnContinuarError) {
                    btnContinuarError.textContent = "Ir a la Tienda";
                }
            } else {
                if (btnContinuarError) {
                    btnContinuarError.textContent = "Rehacer";
                }
            }
        }
    });
}

// 2-C y 3-5: Listener fijo para el botón de error / rehacer sin reasignar .onclick
if (btnContinuarError) {
    btnContinuarError.addEventListener('click', () => {
        if ((usuarioActivo.vidas ?? 3) <= 0) {
            window.location.href = 'tienda.html';
            return;
        }

        // Si le quedan vidas, oculta el error y rehace la oración actual limpia
        if (estadoError) estadoError.classList.remove('activo');
        if (estadoNormal) estadoNormal.classList.remove('oculto');
        comprobacionRealizada = false;
        cargarLeccionActual();
    });
}

// Botón Continuar (Éxito): Avanzar a la siguiente oración o finalizar la lección
if (btnContinuarExito) {
    btnContinuarExito.addEventListener('click', () => {
        indiceActual++;

        if (indiceActual < preguntasLeccion.length) {
            if (estadoExito) estadoExito.classList.remove('activo');
            if (estadoNormal) estadoNormal.classList.remove('oculto');
            comprobacionRealizada = false;
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
                    alert('¡Lección completada! 🌟 Ya cubriste tu racha del día de hoy.');
                } else {
                    usuarioActual.racha = (usuarioActual.racha ?? 0) + 1;
                    usuarioActual.lastStreakDate = hoy;
                    usuarioActivo.racha = usuarioActual.racha;
                    usuarioActivo.lastStreakDate = hoy;

                    alert(`¡Lección completada con éxito! 🔥 Tu racha subió a ${usuarioActual.racha} días.`);
                }

                // Marcar lección como completada para actualizar el mapa a "Repasar"
                let leccionesCompletadas = getData('leccionesCompletadas') || {};
                const claveLeccion = `${cursoSeleccionadoId}_${leccionSeleccionadaId}`;
                leccionesCompletadas[claveLeccion] = {
                    completed: true,
                    avance: preguntasLeccion.length,
                    total: preguntasLeccion.length,
                    fecha: hoy
                };
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

import { getData, saveData } from './services/storage.service.js';
import { usuariosIniciales, cursosIniciales, preguntasIniciales, leccionesCompletadasIniciales } from '../data/initial_data.js';

// Función para inicializar las colecciones si el almacenamiento está vacío o incompleto
function inicializarSistema() {
    // 1. Cargar usuarios iniciales si no existen o sincronizar progreso de Juan
    const usuariosExistentes = getData('usuarios');
    if (usuariosExistentes.length === 0) {
        saveData('usuarios', usuariosIniciales);
    } else {
        const juan = usuariosExistentes.find(u => u.id === 1);
        if (juan) {
            let modificado = false;
            if (!juan.leccionesCompletadas || juan.leccionesCompletadas.length === 0) {
                juan.leccionesCompletadas = ["ingles_1", "ingles_2", "aleman_1"];
                modificado = true;
            }
            if (juan.password === "123") {
                juan.password = "12345678";
                modificado = true;
            }
            if (modificado) {
                saveData('usuarios', usuariosExistentes);
                const usuarioActivo = getData('usuarioActivo');
                if (usuarioActivo && usuarioActivo.id === 1) {
                    saveData('usuarioActivo', juan);
                }
            }
        }
    }

    // 2. Cargar los 8 cursos de idiomas si no existen o actualizar
    const cursosExistentes = getData('cursos');
    if (cursosExistentes.length === 0) {
        saveData('cursos', cursosIniciales);
    } else {
        // Asegurar que 'japones' esté sincronizado sin problemas de tildes
        const idsCursos = new Set(cursosExistentes.map(c => c.id));
        const nuevosCursos = cursosIniciales.filter(c => !idsCursos.has(c.id));
        if (nuevosCursos.length > 0) {
            saveData('cursos', [...cursosExistentes, ...nuevosCursos]);
        }
    }

    // 3. Cargar las preguntas iniciales o sincronizar las preguntas actualizadas
    const preguntasExistentes = getData('preguntas');
    if (preguntasExistentes.length === 0) {
        saveData('preguntas', preguntasIniciales);
    } else {
        const mapaNuevas = new Map(preguntasIniciales.map(p => [p.id, p]));
        const actualizadas = preguntasExistentes.map(p => mapaNuevas.has(p.id) ? mapaNuevas.get(p.id) : p);
        const idsExistentes = new Set(actualizadas.map(p => p.id));
        const faltantes = preguntasIniciales.filter(p => !idsExistentes.has(p.id));
        saveData('preguntas', [...actualizadas, ...faltantes]);
    }

    // 4. Inicializar progreso de lecciones completadas si está vacío
    const leccionesExistentes = getData('leccionesCompletadas');
    if (!leccionesExistentes || Object.keys(leccionesExistentes).length === 0) {
        saveData('leccionesCompletadas', leccionesCompletadasIniciales);
    }
}

// Ejecutamos cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    inicializarSistema();
    console.log('LingoWeb: Sistema inicializado correctamente desde datos.js');
});

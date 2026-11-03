import { getData, saveData } from './services/storage.service.js';
import { usuariosIniciales, cursosIniciales, preguntasIniciales } from '../data/initial_data.js';

// Función para inicializar las colecciones si el almacenamiento está vacío o incompleto
function inicializarSistema() {
    // 1. Cargar usuarios iniciales si no existen
    if (getData('usuarios').length === 0) {
        saveData('usuarios', usuariosIniciales);
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

    // 3. Cargar las preguntas iniciales o sincronizar las preguntas de nuevos idiomas
    const preguntasExistentes = getData('preguntas');
    if (preguntasExistentes.length === 0) {
        saveData('preguntas', preguntasIniciales);
    } else {
        const idsPreguntas = new Set(preguntasExistentes.map(p => p.id));
        const nuevasPreguntas = preguntasIniciales.filter(p => !idsPreguntas.has(p.id));
        if (nuevasPreguntas.length > 0) {
            saveData('preguntas', [...preguntasExistentes, ...nuevasPreguntas]);
        }
    }
}

// Ejecutamos cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    inicializarSistema();
    console.log('LingoWeb: Sistema inicializado correctamente desde datos.js');
});

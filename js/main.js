import { getData, saveData } from './services/storage.service.js';
import { usuariosIniciales, cursosIniciales, preguntasIniciales } from '../data/initial_data.js';

// Función para inicializar las colecciones si el almacenamiento está vacío
function inicializarSistema() {
    // 1. Cargar usuarios iniciales si no existen
    if (getData('usuarios').length === 0) {
        saveData('usuarios', usuariosIniciales);
    }

    // 2. Cargar los 8 cursos de idiomas si no existen
    if (getData('cursos').length === 0) {
        saveData('cursos', cursosIniciales);
    }

    // 3. Cargar las preguntas iniciales si no existen
    if (getData('preguntas').length === 0) {
        saveData('preguntas', preguntasIniciales);
    }
}

// Ejecutamos cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    inicializarSistema();
    console.log('LingoWeb: Sistema inicializado correctamente desde datos.js');
});
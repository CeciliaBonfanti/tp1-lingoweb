import { getData } from '../services/storage.service.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Verificar si hay un usuario activo logueado (Protección de ruta)
    const usuarioActivo = getData('usuarioActivo');
    
    if (!usuarioActivo || Object.keys(usuarioActivo).length === 0) {
        window.location.href = '../index.html';
        return;
    }

    // 2. Elementos del DOM a actualizar dinámicamente
    const navRacha = document.querySelector('a[href="racha.html"]');
    const navXp = document.querySelector('header nav ul li span');
    
    // Tarjeta de Estado Actual
    const tituloRachaActual = document.querySelector('.tarjeta h2');
    const textoRachaActual = document.querySelector('.tarjeta .nivel-texto');
    const textoFechaInicio = document.querySelector('.tarjeta .texto-chico strong');

    // Tarjeta de Historial / Resumen
    const textosHistorial = document.querySelectorAll('.tarjeta .texto-chico');
    const textoMejorRacha = document.querySelector('.tarjeta article:nth-of-type(2) .nivel-texto strong');

    // 3. Inyectar datos en la barra de navegación superior
    const rachaActual = usuarioActivo.racha ?? 0;
    const xpActual = usuarioActivo.xp ?? 0;

    if (navRacha) navRacha.textContent = `🔥 ${rachaActual} Días`;
    if (navXp) navXp.textContent = `⚡ ${xpActual} XP`;

    // 4. Inyectar datos en la Tarjeta de Estado Actual
    if (tituloRachaActual) {
        tituloRachaActual.textContent = `🔥 Racha Actual: ${rachaActual} Días`;
    }
    
    if (textoRachaActual) {
        if (rachaActual > 0) {
            textoRachaActual.textContent = `¡Estás en racha! Practicaste ${rachaActual} días seguidos.`;
        } else {
            textoRachaActual.textContent = `¡Aún no tenés racha activa! Completá una lección hoy para empezar.`;
        }
    }

    if (textoFechaInicio) {
        // Si el usuario tiene guardada una fecha la usa, sino pone una por defecto o indicativa
        textoFechaInicio.textContent = usuarioActivo.fechaInicioRacha || 'Septiembre de 2026';
    }

    // 5. Inyectar datos en la Tarjeta de Historial / Resumen
    if (textoMejorRacha) {
        // Calculamos un estimado o usamos una propiedad si la agregas al modelo en el futuro
        const mejorRachaHistorica = usuarioActivo.mejorRacha || Math.max(rachaActual, 14);
        textoMejorRacha.textContent = `${mejorRachaHistorica} Días`;
    }

    // Actualizar lecciones completadas si existen en el array del usuario
    const totalLecciones = usuarioActivo.leccionesCompletadas ? usuarioActivo.leccionesCompletadas.length : 12;
    
    // Buscamos el párrafo que muestra el total de lecciones de la semana
    textosHistorial.forEach(p => {
        if (p.textContent.includes('Total de lecciones esta semana:')) {
            p.textContent = `Total de lecciones esta semana: ${totalLecciones}`;
        }
    });
});
import { getData } from '../services/storage.service.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Verificamos que haya un usuario con sesión activa (Protección de ruta)
    const usuarioActivo = getData('usuarioActivo');
    if (!usuarioActivo || Object.keys(usuarioActivo).length === 0) {
        window.location.href = '../index.html';
        return;
    }

    // 2. Actualizamos la barra de navegación con las estadísticas reales del usuario activo
    const navRacha = document.getElementById('nav-racha') || document.querySelector('a[href="racha.html"]');
    const navXp = document.getElementById('nav-xp') || document.querySelector('nav .nav-enlaces li:last-child span');
    if (navRacha) navRacha.textContent = `🔥 ${usuarioActivo.racha ?? 0} Días`;
    if (navXp) navXp.textContent = `⚡ ${usuarioActivo.xp ?? 0} XP`;

    // 3. Actualizamos la tarjeta de estadísticas de la barra lateral
    const statLiga = document.getElementById('stat-liga');
    const statMeta = document.getElementById('stat-meta');

    if (statLiga) {
        const xp = usuarioActivo.xp ?? 0;
        if (xp >= 1000) statLiga.textContent = 'Oro';
        else if (xp >= 500) statLiga.textContent = 'Plata';
        else statLiga.textContent = 'Bronce';
    }

    if (statMeta) {
        const xpHoy = usuarioActivo.xp ?? 0;
        statMeta.textContent = `${Math.min(xpHoy, 50)} / 50 XP/día`;
    }

    // 4. Traemos los cursos, preguntas y lecciones completadas para calcular progreso real
    const cursos = getData('cursos') || [];
    const preguntas = getData('preguntas') || [];
    const leccionesCompletadas = getData('leccionesCompletadas') || {};

    const contenedor = document.querySelector('.grilla-tarjetas');

    if (!contenedor) return;

    contenedor.innerHTML = ''; // Limpiamos el contenedor

    // Si no existen cursos en almacenamiento, mostramos un fallback accesible
    if (cursos.length === 0) {
        const mensajeVacio = document.createElement('p');
        mensajeVacio.classList.add('texto-chico');
        mensajeVacio.textContent = 'No hay cursos disponibles en este momento.';
        contenedor.appendChild(mensajeVacio);
        return;
    }

    // 5. Renderizado dinámico de tarjetas de idiomas
    cursos.forEach((curso) => {
        // Calculamos el progreso según las lecciones completadas de este idioma
        const preguntasCurso = preguntas.filter(p => p.idioma === curso.id);
        const leccionIdsUnicos = [...new Set(preguntasCurso.map(p => p.leccionId))];
        const totalLecciones = leccionIdsUnicos.length > 0 ? leccionIdsUnicos.length : 1;

        let completadas = 0;
        leccionIdsUnicos.forEach(leccionId => {
            const clave = `${curso.id}_${leccionId}`;
            if (leccionesCompletadas[clave]?.completed) {
                completadas++;
            }
        });

        const progresoCalculado = Math.round((completadas / totalLecciones) * 100);
        const progresoFinal = progresoCalculado;

        let textoBoton = 'Continuar';
        if (progresoFinal === 0) {
            textoBoton = 'Empezar';
        } else if (progresoFinal >= 100) {
            textoBoton = 'Repasar';
        }

        const tarjeta = document.createElement('article');
        tarjeta.classList.add('tarjeta');
        tarjeta.innerHTML = `
            <div class="tarjeta-header">
                <img src="${curso.bandera}" alt="Bandera de ${curso.nombre}" class="bandera-img">
                <h2>${curso.nombre}</h2>
            </div>
            <p class="texto-chico">Progreso: ${progresoFinal}%</p>
            <p class="nivel-texto">Nivel: ${curso.nivel}</p>
            <a href="mapa.html?curso=${curso.id}" class="btn btn-primario">${textoBoton}</a>
        `;
        contenedor.appendChild(tarjeta);
    });
});

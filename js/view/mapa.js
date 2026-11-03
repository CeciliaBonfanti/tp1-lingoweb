import { getData } from '../services/storage.service.js';
import { UsuarioService } from '../services/usuario.service.js';

document.addEventListener('DOMContentLoaded', () => {
    const usuarioService = new UsuarioService();

    // 1. Verificar si hay un usuario activo logueado (Protección de ruta)
    let usuarioActivo = getData('usuarioActivo');
    
    if (!usuarioActivo || Object.keys(usuarioActivo).length === 0) {
        window.location.href = '../index.html';
        return;
    }

    // 2. Verificar regeneración de vidas automática (30 minutos)
    usuarioActivo = usuarioService.verificarRegeneracionVidas(usuarioActivo);

    // 3. Actualizar los datos de la barra superior (Racha y XP)
    const navRacha = document.getElementById('nav-racha') || document.querySelector('a[href="racha.html"]');
    const navXp = document.getElementById('nav-xp') || document.querySelector('.navbar .nav-enlaces li:last-child span') || document.querySelector('nav ul li span');

    if (navRacha) navRacha.textContent = `🔥 ${usuarioActivo.racha ?? 0} Días`;
    if (navXp) navXp.textContent = `⚡ ${usuarioActivo.xp ?? 0} XP`;

    // 4. Leer qué curso mandó la URL (ej: mapa.html?curso=ingles)
    const parametrosURL = new URLSearchParams(window.location.search);
    const cursoId = parametrosURL.get('curso');

    // 5. Traer los cursos y las preguntas del localStorage
    const cursos = getData('cursos') || [];
    const preguntas = getData('preguntas') || [];

    // 6. Buscar el curso actual que coincide con el ID
    const cursoActual = cursos.find(c => c.id === cursoId);

    const tituloCurso = document.getElementById('titulo-curso');
    const tituloUnidad = document.getElementById('titulo-unidad');

    if (cursoActual) {
        if (tituloCurso) {
            tituloCurso.textContent = `${cursoActual.nombre} desde Español`;
        }
        if (tituloUnidad) {
            tituloUnidad.textContent = `Nivel: ${cursoActual.nivel} - ${cursoActual.descripcion || 'Introducción y saludos'}`;
        }
    } else {
        if (tituloCurso) tituloCurso.textContent = 'Curso no encontrado';
        if (tituloUnidad) tituloUnidad.textContent = '';
    }

    // 7. Renderizar las lecciones/tarjetas dentro de la grilla
    const contenedor = document.querySelector('.grilla-tarjetas');
    
    if (contenedor) {
        contenedor.innerHTML = ''; // Limpiamos por si hay algo estático

        // Filtramos las preguntas asociadas a este idioma
        const leccionesDelCurso = preguntas.filter(p => p.idioma === cursoId);

        if (leccionesDelCurso.length > 0) {
            leccionesDelCurso.forEach((leccion, index) => {
                const tarjeta = document.createElement('article');
                tarjeta.classList.add('tarjeta');
                tarjeta.innerHTML = `
                    <div class="tarjeta-header">
                        <h2>Lección ${index + 1}</h2>
                    </div>
                    <p class="texto-chico">Práctica de traducción y vocabulario.</p>
                    <p class="nivel-texto">Oración: "${leccion.oracionOriginal}"</p>
                    <a href="leccion.html?curso=${cursoId}&leccion=${index + 1}" class="btn btn-primario">Comenzar Lección</a>
                `;

                // Interceptar click si no tiene vidas disponibles
                const btnIniciar = tarjeta.querySelector('.btn');
                if (btnIniciar) {
                    btnIniciar.addEventListener('click', (e) => {
                        usuarioActivo = usuarioService.verificarRegeneracionVidas(usuarioActivo);
                        if ((usuarioActivo.vidas ?? 3) <= 0) {
                            e.preventDefault();
                            const minutosRestantes = usuarioService.obtenerMinutosRestantes(usuarioActivo);
                            alert(`¡No tienes vidas suficientes para iniciar una lección! Debes esperar ${minutosRestantes} minuto(s) para que se restablezcan o ir a la tienda a recargar con XP.`);
                            window.location.href = 'tienda.html';
                        }
                    });
                }

                contenedor.appendChild(tarjeta);
            });
        } else {
            // Si no hay preguntas específicas, mostramos una tarjeta por defecto
            const tarjeta = document.createElement('article');
            tarjeta.classList.add('tarjeta');
            tarjeta.innerHTML = `
                <div class="tarjeta-header">
                    <h2>Unidad 1: Práctica General</h2>
                </div>
                <p class="texto-chico">Comenzá a practicar las bases de este idioma.</p>
                <a href="#" class="btn btn-primario">Iniciar Lección</a>
            `;
            contenedor.appendChild(tarjeta);
        }
    }
});

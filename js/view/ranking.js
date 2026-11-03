import { getData } from '../services/storage.service.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Verificar si hay un usuario activo logueado (Protección de ruta)
    const usuarioActivo = getData('usuarioActivo');
    
    if (!usuarioActivo || Object.keys(usuarioActivo).length === 0) {
        window.location.href = '../index.html';
        return;
    }

    // 2. Actualizar los datos de la barra superior (Racha y XP del usuario activo)
    const navRacha = document.getElementById('nav-racha') || document.querySelector('a[href="racha.html"]');
    const navXp = document.getElementById('nav-xp') || document.querySelector('.navbar .nav-enlaces li:last-child span') || document.querySelector('nav ul li span');

    if (navRacha) navRacha.textContent = `🔥 ${usuarioActivo.racha ?? 0} Días`;
    if (navXp) navXp.textContent = `⚡ ${usuarioActivo.xp ?? 0} XP`;

    // 3. Obtener la lista general de usuarios de la "base de datos" local
    const usuarios = getData('usuarios');

    // 4. Ordenar los usuarios de mayor a menor según su XP
    usuarios.sort((a, b) => (b.xp ?? 0) - (a.xp ?? 0));

    // 5. Renderizar dinámicamente la tabla de posiciones
    const tbody = document.querySelector('table tbody');
    
    if (tbody) {
        tbody.innerHTML = ''; // Limpiamos el contenido estático de prueba

        usuarios.forEach((user, index) => {
            const puesto = index + 1;
            
            // Definir medalla o número de puesto
            let iconoPuesto = `${puesto}`;
            if (puesto === 1) iconoPuesto = '🥇 1';
            else if (puesto === 2) iconoPuesto = '🥈 2';
            else if (puesto === 3) iconoPuesto = '🥉 3';

            // Calcular iniciales para el avatar (ej: "Juan Pérez" -> "JP")
            const iniciales = user.nombre 
                ? user.nombre.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2)
                : 'US';

            // Identificar si es el usuario que inició sesión actualmente
            const esUsuarioActual = user.id === usuarioActivo.id;
            const nombreMostrar = esUsuarioActual ? `${user.nombre || user.usuario} (Tú)` : (user.nombre || user.usuario);
            
            // Determinar estado según el puesto (ej: los primeros 5 ascienden)
            const estado = puesto <= 5 ? 'Zona de Ascenso' : 'Zona Normal';

            // Construir la fila de la tabla
            const tr = document.createElement('tr');
            if (esUsuarioActual) {
                tr.classList.add('fila-usuario'); // Aplica la clase CSS que ya tenías para resaltar
            }

            tr.innerHTML = `
                <td>${iconoPuesto}</td>
                <td class="avatar">${iniciales}</td>
                <td>${nombreMostrar}</td>
                <td>${user.xp ?? 0} XP</td>
                <td>${estado}</td>
            `;

            tbody.appendChild(tr);
        });
    }
});

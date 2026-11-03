import { getData, saveData } from '../services/storage.service.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Verificar si hay un usuario activo logueado (Protección de ruta)
    const usuarioActivo = getData('usuarioActivo');
    
    if (!usuarioActivo || Object.keys(usuarioActivo).length === 0) {
        window.location.href = '../index.html';
        return;
    }

    // 2. Elementos del DOM a actualizar con los datos del perfil
    const elementoNombre = document.querySelector('.perfil-cabecera h3');
    const elementoUser = document.querySelector('.perfil-cabecera .texto-chico'); // @usuario
    const elementoEmail = document.querySelectorAll('.perfil-cabecera .texto-chico')[2]; // Email
    const avatarPlaceholder = document.querySelector('.avatar-placeholder');
    
    // Elementos de la barra de navegación (Racha y XP)
    const navRacha = document.getElementById('nav-racha') || document.querySelector('a[href="racha.html"]');
    const navXp = document.getElementById('nav-xp') || document.querySelector('.navbar .nav-enlaces li:last-child span') || document.querySelector('nav ul li span');

    // 3. Inyectar los datos del usuario activo en la vista
    if (elementoNombre) elementoNombre.textContent = usuarioActivo.nombre;
    if (elementoUser) elementoUser.textContent = `@${usuarioActivo.usuario || 'usuario'}`;
    if (elementoEmail) elementoEmail.textContent = `Email: ${usuarioActivo.email}`;
    
    // Generar iniciales para el avatar (ej: "Juan Pérez" -> "JP")
    if (avatarPlaceholder && usuarioActivo.nombre) {
        const iniciales = usuarioActivo.nombre
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase()
            .substring(0, 2);
        avatarPlaceholder.textContent = iniciales;
    }

    // Actualizar racha y XP en el header si existen
    if (navRacha) navRacha.textContent = `🔥 ${usuarioActivo.racha ?? 0} Días`;
    if (navXp) navXp.textContent = `⚡ ${usuarioActivo.xp ?? 0} XP`;

    // 4. Manejar el formulario de cambio de contraseña y ajustes
    const formulario = document.querySelector('form');
    const inputPassActual = document.getElementById('password-actual');
    const inputPassNueva = document.getElementById('password-nueva');
    const inputPassConfirmar = document.getElementById('password-confirmar');

    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();

            // Si completó algún campo de contraseña, validamos
            if (inputPassActual.value || inputPassNueva.value || inputPassConfirmar.value) {
                if (inputPassActual.value !== usuarioActivo.password) {
                    alert('La contraseña actual es incorrecta.');
                    return;
                }
                if (inputPassNueva.value !== inputPassConfirmar.value) {
                    alert('Las nuevas contraseñas no coinciden.');
                    return;
                }
                if (inputPassNueva.value.length < 8) {
                    alert('La nueva contraseña debe tener al menos 8 caracteres.');
                    return;
                }

                // Actualizar contraseña en el objeto del usuario activo
                usuarioActivo.password = inputPassNueva.value;
            }

            // Actualizar la lista general de usuarios en el localStorage
            const listaUsuarios = getData('usuarios');
            const index = listaUsuarios.findIndex(u => u.id === usuarioActivo.id);
            
            if (index !== -1) {
                listaUsuarios[index] = usuarioActivo;
                saveData('usuarios', listaUsuarios);
            }

            // Actualizar el usuario activo actual
            saveData('usuarioActivo', usuarioActivo);

            alert('¡Cambios guardados con éxito!');
            
            // Limpiar los inputs de contraseña
            inputPassActual.value = '';
            inputPassNueva.value = '';
            inputPassConfirmar.value = '';
        });
    }

    // 5. Manejar el Cerrar Sesión de forma limpia
    const btnCerrarSesion = document.querySelector('a[href="../index.html"]');
    if (btnCerrarSesion) {
        btnCerrarSesion.addEventListener('click', (e) => {
            e.preventDefault();
            // Borramos únicamente la sesión activa, manteniendo la base de datos de usuarios y cursos
            localStorage.removeItem('usuarioActivo');
            window.location.href = '../index.html';
        });
    }
});

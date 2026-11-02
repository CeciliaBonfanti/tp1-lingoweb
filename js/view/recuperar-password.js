import { getData, saveData } from '../services/storage.service.js';

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('form');
    const inputEmail = document.getElementById('email');

    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault(); // Evitamos que recargue y mande datos por la URL

            const emailBuscado = inputEmail.value.trim();

            // 1. Traemos la lista general de usuarios
            const usuarios = getData('usuarios');

            // 2. Buscamos si existe un usuario con ese correo electrónico
            const usuarioEncontrado = usuarios.find(u => u.email === emailBuscado);

            if (usuarioEncontrado) {
                // Simulación de éxito en la recuperación
                alert(`¡Instrucciones enviadas con éxito!\n\nSe ha enviado un enlace de recuperación a: ${emailBuscado}\n(Para esta versión de prueba, tu contraseña actual es: ${usuarioEncontrado.password})`);
                
                // Redirigimos de vuelta al inicio de sesión
                window.location.href = '../index.html';
            } else {
                alert('No encontramos ninguna cuenta asociada a ese correo electrónico. Verificá los datos e intentá nuevamente.');
            }
        });
    }
});
import { getData } from '../services/storage.service.js';

const formulario = document.querySelector('form');
const inputUsuario = document.getElementById('usuario'); 
const inputPassword = document.getElementById('password');

if (formulario) {
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        // 1. Traemos los usuarios usando la función getData del storage service
        const usuarios = getData('usuarios');

        // 2. Buscamos si coincide el usuario, el nombre o el email, junto con la contraseña
        const usuarioValido = usuarios.find(user => 
            (user.usuario === inputUsuario.value || user.nombre === inputUsuario.value || user.email === inputUsuario.value) && 
            user.password === inputPassword.value
        );

        if (usuarioValido) {
            // 3. Guardamos el usuario activo oficial en el navegador
            localStorage.setItem('usuarioActivo', JSON.stringify(usuarioValido));

            // 4. Redirigimos al dashboard
            window.location.href = '../vistas/dashboard.html'; 
        } else {
            alert('Credenciales Incorrectas. Por favor, verificá tu usuario o contraseña.');
        }
    });
}
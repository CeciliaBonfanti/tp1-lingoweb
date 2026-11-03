import { UsuarioService } from '../services/usuario.service.js';

const usuarioService = new UsuarioService();

// 1. Capturamos el formulario y los inputs por su ID
const formularioRegistro = document.querySelector('form');
const inputNombre = document.getElementById('nombre');
const inputUsuario = document.getElementById('usuario');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');

// 2. Escuchamos el envío en "Registrarme"
if (formularioRegistro) {
    formularioRegistro.addEventListener('submit', (evento) => {
        evento.preventDefault(); // Frenamos la recarga de página

        const usuarios = usuarioService.getUsuarios();
        const usernameVal = inputUsuario.value.trim().toLowerCase();
        const emailVal = inputEmail.value.trim().toLowerCase();

        // 3. Validamos que la contraseña tenga al menos 8 caracteres
        if (inputPassword.value.length < 8) {
            alert('La contraseña debe tener al menos 8 caracteres.');
            return;
        }

        // 4. Validamos que el email o el usuario no estén repetidos
        const usuarioRepetido = usuarios.find(user => 
            (user.usuario && user.usuario.toLowerCase() === usernameVal) || 
            (user.email && user.email.toLowerCase() === emailVal)
        );

        if (usuarioRepetido) {
            alert('Ese nombre de usuario o correo ya están registrados. Elegí otro.');
            return;
        }

        // 4. Guardamos a través de UsuarioService para asignarle ID y valores iniciales
        usuarioService.agregarUsuario(
            inputNombre.value.trim(),
            inputEmail.value.trim(),
            inputPassword.value,
            inputUsuario.value.trim()
        );

        // 5. Avisamos y mandamos a loguearse
        alert('¡Cuenta creada con éxito! Ahora podés iniciar sesión.');
        window.location.href = '../index.html';
    });
}

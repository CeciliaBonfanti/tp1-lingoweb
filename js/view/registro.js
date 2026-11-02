import { StorageService } from '../services/storage.service.js';

// 1. Capturamos el formulario y los inputs por su ID
const formularioRegistro = document.querySelector('form');
const inputNombre = document.getElementById('nombre');
const inputUsuario = document.getElementById('usuario');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');

// 2. Escuchamos el click en "Registrarme"
formularioRegistro.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Frenamos la recarga de página

    const usuarios = StorageService.getUsuarios();

    // 3. Validamos que el email o el usuario no estén repetidos
    const usuarioRepetido = usuarios.find(user => 
        user.usuario === inputUsuario.value || user.email === inputEmail.value
    );

    if (usuarioRepetido) {
        alert('Ese nombre de usuario o correo ya están registrados. Elegí otro.');
        return; // Cortamos la función acá para que no siga
    }

    // 4. Creamos el objeto del usuario nuevo (como si hicieras un new Usuario() en Java)
    const nuevoUsuario = {
        nombre: inputNombre.value,
        usuario: inputUsuario.value,
        email: inputEmail.value,
        password: inputPassword.value,
        xp: 0,     // Arranca con 0 experiencia
        racha: 0   // Arranca sin racha de días
    };

    // 5. Lo mandamos a guardar a nuestro servicio
    StorageService.agregarUsuario(nuevoUsuario);

    // 6. Le avisamos y lo mandamos a loguearse
    alert('¡Cuenta creada con éxito! Ahora podés iniciar sesión.');
    window.location.href = '../index.html';
});
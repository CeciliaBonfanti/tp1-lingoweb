import {StorageService} from './services/storage.service.js';

StorageService.inicializarDatos(); // Inicializamos datos de prueba si el storage está vacío

const formulario = document.querySelector('form');//traemos/capturamos la etiqueta form entera

//traemos los inputs del formulario por su id
const inputUsuario = document.getElementById('usuario'); 
const inputPassword = document.getElementById('password');

formulario.addEventListener('submit', (evento)=> {
    evento.preventDefault();

    const usuarios = StorageService.getUsuarios();

    const usuarioValido = usuarios.find(user=>(user.usuario === inputUsuario.value || user.email === inputUsuario.value) && user.password === inputPassword.value
);

if(usuarioValido){
    localStorage.setItem('usuarioActivo', JSON.stringify(usuarioValido));

    window.location.href = 'vistas/dashboard.html';
}else{
    alert('Credenciales Incorrectas. Por favor, verificá tu usuario o contraseña.');
}
});


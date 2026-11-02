import { getData, saveData } from '../services/storage.service.js';

const btnConfirmar = document.getElementById('btn-confirmar');
const btnCancelar = document.getElementById('btn-cancelar');

if (btnConfirmar) {
    btnConfirmar.addEventListener('click', (evento) => {
        evento.preventDefault(); // Evita que navegue al href="#" por defecto

        // 1. Obtenemos el usuario que está actualmente activo en la sesión
        const usuarioActivoStr = localStorage.getItem('usuarioActivo');
        
        if (usuarioActivoStr) {
            const usuarioActivo = JSON.parse(usuarioActivoStr);
            
            // 2. Traemos todos los usuarios registrados
            let usuarios = getData('usuarios');
            
            // 3. Filtramos la lista para sacar al usuario actual (por email o nombre de usuario)
            usuarios = usuarios.filter(u => u.email !== usuarioActivo.email && u.usuario !== usuarioActivo.usuario);
            
            // 4. Guardamos la nueva lista limpia en el storage
            saveData('usuarios', usuarios);
            
            // 5. Borramos la sesión activa del navegador
            localStorage.removeItem('usuarioActivo');
            
            alert('Tu cuenta ha sido eliminada correctamente.');
            
            // 6. Redirigimos al inicio de todo saliendo de vistas/
            window.location.href = '../index.html';
        } else {
            alert('No hay ninguna sesión activa.');
            window.location.href = '../index.html';
        }
    });
}

if (btnCancelar) {
    btnCancelar.addEventListener('click', (evento) => {
        evento.preventDefault();
        // Vuelve de forma segura al perfil dentro de la carpeta vistas
        window.location.href = 'perfil.html';
    });
}
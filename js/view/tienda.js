import { getData, saveData } from '../services/storage.service.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Verificar si hay un usuario activo logueado (Protección de ruta)
    const usuarioActivo = getData('usuarioActivo');
    
    if (!usuarioActivo || Object.keys(usuarioActivo).length === 0) {
        window.location.href = '../index.html';
        return;
    }

    // 2. Actualizar los datos de la barra superior (Racha y XP)
    const navRacha = document.querySelector('a[href="racha.html"]');
    const navXp = document.querySelector('header nav ul li span');

    function actualizarInterfaz() {
        if (navRacha) navRacha.textContent = `🔥 ${usuarioActivo.racha ?? 0} Días`;
        if (navXp) navXp.textContent = `⚡ ${usuarioActivo.xp ?? 0} XP`;
    }

    actualizarInterfaz();

    // 3. Obtener los botones de compra de la tienda
    const btnComprarVidas = document.querySelector('.tarjeta:nth-of-type(1) button');
    const btnComprarProtector = document.querySelector('.tarjeta:nth-of-type(2) button');

    // Función auxiliar para guardar y sincronizar los cambios del usuario
    function persistirCambiosUsuario() {
        // Actualizar la sesión activa
        saveData('usuarioActivo', usuarioActivo);

        // Actualizar también en la lista general de usuarios
        const listaUsuarios = getData('usuarios');
        const index = listaUsuarios.findIndex(u => u.id === usuarioActivo.id);
        if (index !== -1) {
            listaUsuarios[index] = usuarioActivo;
            saveData('usuarios', listaUsuarios);
        }
    }

    // Lógica de compra: Recargar Vidas (Costo: 50 XP)
    if (btnComprarVidas) {
        btnComprarVidas.addEventListener('click', () => {
            const costo = 50;

            if ((usuarioActivo.xp ?? 0) < costo) {
                alert('¡No tenés suficiente XP! Necesitás al menos 50 XP para recargar vidas.');
                return;
            }

            // Descontar XP y rellenar vidas (asumimos que el máximo de vidas es 3 o 5 según tu clase Usuario)
            usuarioActivo.xp -= costo;
            usuarioActivo.vidas = 3; // Rellena las vidas al máximo

            persistirCambiosUsuario();
            actualizarInterfaz();

            alert('¡Compra exitosa! Has recargado tus vidas al máximo ❤️.');
        });
    }

    // Lógica de compra: Protector de Racha (Costo: 150 XP)
    if (btnComprarProtector) {
        btnComprarProtector.addEventListener('click', () => {
            const costo = 150;

            if ((usuarioActivo.xp ?? 0) < costo) {
                alert('¡No tenés suficiente XP! Necesitás al menos 150 XP para adquirir el protector de racha.');
                return;
            }

            // Descontar XP y activar protector (podemos guardar una bandera en el usuario)
            usuarioActivo.xp -= costo;
            usuarioActivo.tieneProtectorRacha = true;

            persistirCambiosUsuario();
            actualizarInterfaz();

            alert('¡Protector de racha activado con éxito 🛡️! Tu racha está segura por las próximas 24 horas.');
        });
    }
});
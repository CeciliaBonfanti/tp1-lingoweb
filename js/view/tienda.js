import { getData, saveData } from '../services/storage.service.js';
import { UsuarioService } from '../services/usuario.service.js';

document.addEventListener('DOMContentLoaded', () => {
    const usuarioService = new UsuarioService();

    // 1. Verificar si hay un usuario activo logueado (Protección de ruta)
    let usuarioActivo = getData('usuarioActivo');
    
    if (!usuarioActivo || Object.keys(usuarioActivo).length === 0) {
        window.location.href = '../index.html';
        return;
    }

    // 2. Verificar si pasaron los 30 minutos para regenerar vidas automáticamente
    usuarioActivo = usuarioService.verificarRegeneracionVidas(usuarioActivo);

    // 3. Actualizar los datos de la barra superior (Racha y XP)
    const navRacha = document.getElementById('nav-racha') || document.querySelector('a[href="racha.html"]');
    const navXp = document.getElementById('nav-xp') || document.querySelector('.navbar .nav-enlaces li:last-child span') || document.querySelector('nav ul li span');

    function actualizarInterfaz() {
        if (navRacha) navRacha.textContent = `🔥 ${usuarioActivo.racha ?? 0} Días`;
        if (navXp) navXp.textContent = `⚡ ${usuarioActivo.xp ?? 0} XP`;
    }

    actualizarInterfaz();

    // 4. Obtener los botones de compra de la tienda
    const btnComprarVidas = document.querySelector('.tarjeta:nth-of-type(1) button');
    const btnComprarProtector = document.querySelector('.tarjeta:nth-of-type(2) button');

    // Función auxiliar para guardar y sincronizar los cambios del usuario
    function persistirCambiosUsuario() {
        usuarioService.sincronizarUsuario(usuarioActivo);
    }

    // Lógica de compra: Recargar Vidas (Costo: 50 XP)
    if (btnComprarVidas) {
        btnComprarVidas.addEventListener('click', () => {
            const costo = 50;

            usuarioActivo = usuarioService.verificarRegeneracionVidas(usuarioActivo);

            if ((usuarioActivo.vidas ?? 3) >= 3) {
                alert('¡Ya tienes el máximo de vidas (3 ❤️)! No necesitas recargar.');
                return;
            }

            if ((usuarioActivo.xp ?? 0) < costo) {
                alert('¡No tenés suficiente XP! Necesitás al menos 50 XP para recargar vidas.');
                return;
            }

            // Descontar XP y rellenar vidas
            usuarioActivo.xp -= costo;
            usuarioActivo.vidas = 3; // Rellena las vidas al máximo
            delete usuarioActivo.tiempoSinVidas; // Limpia el temporizador de regeneración

            persistirCambiosUsuario();
            actualizarInterfaz();

            alert('¡Compra exitosa! Has recargado tus vidas al máximo ❤️.');
        });
    }

    // Lógica de compra: Protector de Racha (Costo: 150 XP)
    if (btnComprarProtector) {
        btnComprarProtector.addEventListener('click', () => {
            const costo = 150;

            if (usuarioActivo.tieneProtectorRacha) {
                alert('¡Ya tienes un protector de racha activo 🛡️! No necesitas adquirir otro.');
                return;
            }

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

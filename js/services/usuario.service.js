import { Usuario } from "../models/usuario.model.js";
import { getData, saveData } from "./storage.service.js";

export const TIEMPO_REGENERACION_VIDAS_MS = 30 * 60 * 1000; // 30 minutos (1.800.000 ms)

export class UsuarioService {
    constructor() {
        // Cargamos la lista de usuarios al instanciar el servicio
        this.usuarios = getData('usuarios') || [];
    }

    getUsuarios() {
        this.usuarios = getData('usuarios') || [];
        return [...this.usuarios];
    }

    // Guarda el usuario tanto en 'usuarioActivo' como en la lista general 'usuarios'
    sincronizarUsuario(usuario) {
        if (!usuario) return;
        saveData('usuarioActivo', usuario);
        this.usuarios = getData('usuarios') || [];
        const index = this.usuarios.findIndex(u => u.id === usuario.id);
        if (index !== -1) {
            this.usuarios[index] = { ...usuario };
            saveData('usuarios', this.usuarios);
        }
    }

    // Verifica si ya pasaron 30 minutos sin vidas para restaurarlas automáticamente a 3
    verificarRegeneracionVidas(usuario) {
        if (!usuario) return null;

        // Si no tiene definida la propiedad vidas, arranca con 3
        if (usuario.vidas === undefined || usuario.vidas === null) {
            usuario.vidas = 3;
            delete usuario.tiempoSinVidas;
            this.sincronizarUsuario(usuario);
            return usuario;
        }

        // Si tiene 0 vidas, verificar si pasaron los 30 minutos
        if (usuario.vidas <= 0) {
            if (!usuario.tiempoSinVidas) {
                usuario.tiempoSinVidas = Date.now();
                this.sincronizarUsuario(usuario);
            } else {
                const transcurrido = Date.now() - usuario.tiempoSinVidas;
                if (transcurrido >= TIEMPO_REGENERACION_VIDAS_MS) {
                    usuario.vidas = 3;
                    delete usuario.tiempoSinVidas;
                    this.sincronizarUsuario(usuario);
                }
            }
        }
        return usuario;
    }

    // Calcula cuántos minutos faltan para que se regeneren las vidas
    obtenerMinutosRestantes(usuario) {
        if (!usuario || (usuario.vidas ?? 3) > 0 || !usuario.tiempoSinVidas) return 0;
        const transcurrido = Date.now() - usuario.tiempoSinVidas;
        const restante = TIEMPO_REGENERACION_VIDAS_MS - transcurrido;
        return restante > 0 ? Math.ceil(restante / 60000) : 0;
    }

    // Agrega un nuevo usuario con ID autoincremental y estadísticas por defecto
    agregarUsuario(nombre, email, password, usuario) {
        this.usuarios = getData('usuarios') || [];
        // 1. Calculamos el ID autoincremental
        const nuevoId = this.usuarios.length > 0 
            ? this.usuarios[this.usuarios.length - 1].id + 1 
            : 1;

        // Instanciamos la clase pasando los datos iniciales
        const nuevoUsuario = new Usuario(
            nuevoId, 
            nombre, 
            email, 
            password, 
            0,  // xp
            0,  // racha
            3,  // vidas
            [], // leccionesCompletadas
            null,
            usuario || (email ? email.split('@')[0] : `usuario_${nuevoId}`)
        );
        
        // 3. Agregamos y guardamos en el localStorage
        this.usuarios.push(nuevoUsuario);
        saveData('usuarios', this.usuarios);
        return nuevoUsuario;
    }
}

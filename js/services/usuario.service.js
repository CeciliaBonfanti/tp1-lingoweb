import { Usuario } from "../models/usuario.model.js";
import { getData, saveData } from "./storage.service.js";

export class UsuarioService {
    constructor() {
        // Cargamos la lista de usuarios al instanciar el servicio
        this.usuarios = getData('usuarios');
    }

    getUsuarios() {
        return [...this.usuarios];
    }

    // La vista de registro (el HTML) nos va a mandar solo estos tres datos
    agregarUsuario(nombre, email, password) {
        // 1. Calculamos el ID autoincremental
        const nuevoId = this.usuarios.length > 0 
            ? this.usuarios[this.usuarios.length - 1].id + 1 
            : 1;

        // Instanciamos la clase pasando los parámetros sueltos en orden.
        // Mandamos undefined a las estadísticas para que actúe el ?? del constructor.
        const nuevoUsuario = new Usuario(
            nuevoId, 
            nombre, 
            email, 
            password, 
            undefined, // xp
            undefined, // racha
            undefined, // vidas
            undefined  // leccionesCompletadas
        );
        
        // 3. Agregamos y guardamos en el localStorage
        this.usuarios.push(nuevoUsuario);
        saveData('usuarios', this.usuarios);
    }
}
export const StorageService = {
    inicializarDatos: function() {
        // Si no hay usuarios o no hay lecciones en el storage, los vamos a buscar al JSON
        if (!localStorage.getItem('usuarios') || !localStorage.getItem('lecciones')) {
            // Como fetch es asíncrono, lo ideal es dispararlo para que llene el storage
            fetch('../data/initial_data.json')
                .then(respuesta => respuesta.json())
                .then(datos => {
                    localStorage.setItem('usuarios', JSON.stringify(datos.usuarios));
                    localStorage.setItem('lecciones', JSON.stringify(datos.lecciones));
                })
                .catch(error => console.error("Error al cargar los datos iniciales:", error));
        }
    },
    
    getUsuarios: function() {
        return JSON.parse(localStorage.getItem('usuarios')) || [];
    },

    getLecciones: function() {
        this.inicializarDatos();
        return JSON.parse(localStorage.getItem('lecciones')) || [];
    },

    agregarUsuario: function(nuevoUsuario) {
        const usuarios = this.getUsuarios();
        nuevoUsuario.id = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;
        usuarios.push(nuevoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
};
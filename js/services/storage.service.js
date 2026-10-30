export const StorageService = {
    inicializarDatos: function() {
        // Si no hay usuarios o no hay lecciones en el storage, los vamos a buscar al JSON
        if (!localStorage.getItem('usuarios') || !localStorage.getItem('lecciones')) {
            
            // Usamos fetch con .then()
            fetch('../data/initial_data.json')
                .then(respuesta => respuesta.json()) // Convertimos el texto a un objeto JS
                .then(datos => {
                    // Guardamos los arrays por separado en el localStorage
                    localStorage.setItem('usuarios', JSON.stringify(datos.usuarios));
                    localStorage.setItem('lecciones', JSON.stringify(datos.lecciones));
                });
        }
    },
    
    getUsuarios: function() {
        return JSON.parse(localStorage.getItem('usuarios')) || [];
    },

    getLecciones: function() {
        return JSON.parse(localStorage.getItem('lecciones')) || [];
    }
};
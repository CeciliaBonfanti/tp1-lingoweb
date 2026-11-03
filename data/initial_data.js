// 1. Usuarios iniciales de la aplicación
export const usuariosIniciales = [
    {
        id: 1,
        nombre: "Juan Pérez",
        usuario: "juanperez_web",
        email: "juan@unlam.edu.ar",
        password: "123",
        xp: 350,
        racha: 5,
        vidas: 3
    }
];

// 2. Los 8 Cursos de diferentes idiomas
export const cursosIniciales = [
    {
        id: 'ingles',
        nombre: 'Inglés',
        nivel: 'Básico',
        descripcion: 'Esencial para tecnología y vida cotidiana.',
        bandera: '../imagenes/bandera-gb.png'
    },
    {
        id: 'aleman',
        nombre: 'Alemán',
        nivel: 'Básico',
        descripcion: 'Introducción al idioma y cultura alemana.',
        bandera: '../imagenes/bandera-de.png'
    },
    {
        id: 'chino',
        nombre: 'Chino Mandarín',
        nivel: 'Básico',
        descripcion: 'Primeros pasos en caracteres y tonos.',
        bandera: '../imagenes/bandera-cn.png'
    },
    {
        id: 'frances',
        nombre: 'Francés',
        nivel: 'Básico',
        descripcion: 'Fonética, saludos y vocabulario cotidiano.',
        bandera: '../imagenes/bandera-gb.png'
    },
    {
        id: 'italiano',
        nombre: 'Italiano',
        nivel: 'Básico',
        descripcion: 'Aprende la lengua romance de forma intuitiva.',
        bandera: '../imagenes/bandera-gb.png'
    },
    {
        id: 'portugues',
        nombre: 'Portugués',
        nivel: 'Básico',
        descripcion: 'Comunicación fluida y expresiones frecuentes.',
        bandera: '../imagenes/bandera-gb.png'
    },
    {
        id: 'japonés',
        nombre: 'Japonés',
        nivel: 'Básico',
        descripcion: 'Silabarios básicos y frases de cortesía.',
        bandera: '../imagenes/bandera-gb.png'
    },
    {
        id: 'coreano',
        nombre: 'Coreano',
        nivel: 'Básico',
        descripcion: 'Introducción al Hangul y gramática elemental.',
        bandera: '../imagenes/bandera-gb.png'
    }
];

export const preguntasIniciales = [
    // --- Preguntas de la Lección 1 ---
    {
        id: 1,
        leccionId: 1,
        idioma: "ingles",
        oracionOriginal: "Hello, nice to meet you.",
        traduccionCorrecta: ["Hola,", "encantado", "de", "conocerte"],
        bancoPalabras: ["de", "triste", "Hola,", "tu", "encantado", "Adios,", "conocerte"]
    },
    {
        id: 2,
        leccionId: 1,
        idioma: "ingles",
        oracionOriginal: "Good morning, how are you?",
        traduccionCorrecta: ["Buenos", "días,", "¿cómo", "estás?"],
        bancoPalabras: ["noches", "¿cómo", "estás?", "mal", "Buenos", "días,", "hola"]
    },

    // --- Preguntas de la Lección 2 ---
    {
        id: 3,
        leccionId: 2,
        idioma: "ingles",
        oracionOriginal: "I am a web developer student.",
        traduccionCorrecta: ["Soy", "estudiante", "de", "desarrollo", "web."],
        bancoPalabras: ["desarrollo", "Soy", "web.", "estudiante", "la", "profesor", "de", "programador"]
    },
    {
        id: 4,
        leccionId: 2,
        idioma: "ingles",
        oracionOriginal: "I live in a family house.",
        traduccionCorrecta: ["Vivo", "en", "una", "casa", "familiar."],
        bancoPalabras: ["casa", "una", "Vivo", "trabajo", "en", "familiar.", "departamento"]
    }
];

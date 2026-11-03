// 1. Usuarios iniciales de la aplicación
export const usuariosIniciales = [
    {
        id: 1,
        nombre: "Juan Pérez",
        usuario: "juanperez_web",
        email: "juan@unlam.edu.ar",
        password: "12345678",
        xp: 350,
        racha: 5,
        vidas: 3,
        leccionesCompletadas: ["ingles_1", "ingles_2", "aleman_1"],
        tiempoSinVidas: null
    }
];

// Progreso inicial para el usuario de prueba Juan Pérez
export const leccionesCompletadasIniciales = {
    "ingles_1": { completed: true, avance: 2, total: 2, fecha: "2026-11-01" },
    "ingles_2": { completed: true, avance: 2, total: 2, fecha: "2026-11-02" },
    "aleman_1": { completed: true, avance: 2, total: 2, fecha: "2026-11-03" }
};

// 2. Títulos estándar para las 4 lecciones de todos los cursos
export const titulosLecciones = {
    1: "Frases Básicas",
    2: "Presentaciones",
    3: "Vocabulario de Familia",
    4: "Vocabulario de Viajes"
};

// 3. Los 8 Cursos de diferentes idiomas
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
        descripcion: 'Primeros pasos en caracteres',
        bandera: '../imagenes/bandera-cn.png'
    },
    {
        id: 'frances',
        nombre: 'Francés',
        nivel: 'Básico',
        descripcion: 'Saludos y vocabulario cotidiano.',
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
        id: 'japones',
        nombre: 'Japonés',
        nivel: 'Básico',
        descripcion: 'Frases de cortesía.',
        bandera: '../imagenes/bandera-gb.png'
    },
    {
        id: 'coreano',
        nombre: 'Coreano',
        nivel: 'Básico',
        descripcion: 'Introducción al Hangul y gramática elemental.',
        bandera: '../imagenes/bandera-gb.png'
    },
    {
        id: 'ruso',
        nombre: 'Ruso',
        nivel: 'Básico',
        descripcion: 'Aprende el alfabeto cirílico y expresiones básicas.',
        bandera: '../imagenes/bandera-gb.png'
    }
];

// 4. Preguntas de las 4 lecciones temáticas para cada uno de los 8 idiomas
export const preguntasIniciales = [
    // =============================================
    // --- INGLÉS ---
    // =============================================
    // Lección 1: Frases Básicas
    {
        id: 1,
        leccionId: 1,
        tituloLeccion: "Frases Básicas",
        idioma: "ingles",
        oracionOriginal: "Hello, how are you today?",
        traduccionCorrecta: ["Hola,", "¿cómo", "estás", "hoy?"],
        bancoPalabras: ["hoy?", "Hola,", "adiós,", "¿cómo", "mal", "estás", "mañana"]
    },
    {
        id: 2,
        leccionId: 1,
        tituloLeccion: "Frases Básicas",
        idioma: "ingles",
        oracionOriginal: "Good morning, thank you very much.",
        traduccionCorrecta: ["Buenos", "días,", "muchas", "gracias."],
        bancoPalabras: ["muchas", "noches", "días,", "por", "gracias.", "Buenos", "favor"]
    },
    // Lección 2: Presentaciones
    {
        id: 3,
        leccionId: 2,
        tituloLeccion: "Presentaciones",
        idioma: "ingles",
        oracionOriginal: "My name is John and I am a student.",
        traduccionCorrecta: ["Mi", "nombre", "es", "John", "y", "soy", "estudiante."],
        bancoPalabras: ["es", "Mi", "profesor.", "y", "John", "nombre", "soy", "tu", "estudiante."]
    },
    {
        id: 4,
        leccionId: 2,
        tituloLeccion: "Presentaciones",
        idioma: "ingles",
        oracionOriginal: "Nice to meet you, I am from Argentina.",
        traduccionCorrecta: ["Mucho", "gusto,", "soy", "de", "Argentina."],
        bancoPalabras: ["Argentina.", "Mucho", "en", "gusto,", "vivo", "soy", "de", "España."]
    },
    // Lección 3: Vocabulario de Familia
    {
        id: 5,
        leccionId: 3,
        tituloLeccion: "Vocabulario de Familia",
        idioma: "ingles",
        oracionOriginal: "My mother and my father are at home.",
        traduccionCorrecta: ["Mi", "madre", "y", "mi", "padre", "están", "en", "casa."],
        bancoPalabras: ["en", "Mi", "padre", "madre", "escuela.", "y", "mi", "están", "casa.", "tío"]
    },
    {
        id: 6,
        leccionId: 3,
        tituloLeccion: "Vocabulario de Familia",
        idioma: "ingles",
        oracionOriginal: "I have a brother and a sister.",
        traduccionCorrecta: ["Tengo", "un", "hermano", "y", "una", "hermana."],
        bancoPalabras: ["una", "Tengo", "hijo", "hermano", "y", "un", "abuelo", "hermana."]
    },
    // Lección 4: Vocabulario de Viajes
    {
        id: 7,
        leccionId: 4,
        tituloLeccion: "Vocabulario de Viajes",
        idioma: "ingles",
        oracionOriginal: "Where is the train station?",
        traduccionCorrecta: ["¿Dónde", "está", "la", "estación", "de", "tren?"],
        bancoPalabras: ["está", "¿Dónde", "de", "aeropuerto?", "la", "estación", "tren?", "el"]
    },
    {
        id: 8,
        leccionId: 4,
        tituloLeccion: "Vocabulario de Viajes",
        idioma: "ingles",
        oracionOriginal: "I need my passport for the flight.",
        traduccionCorrecta: ["Necesito", "mi", "pasaporte", "para", "el", "vuelo."],
        bancoPalabras: ["para", "Necesito", "boleto", "el", "mi", "pasaporte", "vuelo.", "hotel"]
    },

    // =============================================
    // --- ALEMÁN ---
    // =============================================
    // Lección 1: Frases Básicas
    {
        id: 9,
        leccionId: 1,
        tituloLeccion: "Frases Básicas",
        idioma: "aleman",
        oracionOriginal: "Guten Tag, wie geht es dir?",
        traduccionCorrecta: ["Buenos", "días,", "¿cómo", "estás?"],
        bancoPalabras: ["¿cómo", "Buenos", "estás?", "noches", "días,", "mal", "gracias"]
    },
    {
        id: 10,
        leccionId: 1,
        tituloLeccion: "Frases Básicas",
        idioma: "aleman",
        oracionOriginal: "Vielen Dank und auf Wiedersehen.",
        traduccionCorrecta: ["Muchas", "gracias", "y", "hasta", "luego."],
        bancoPalabras: ["y", "Muchas", "hasta", "hola", "gracias", "luego.", "por", "favor"]
    },
    // Lección 2: Presentaciones
    {
        id: 11,
        leccionId: 2,
        tituloLeccion: "Presentaciones",
        idioma: "aleman",
        oracionOriginal: "Ich heiße Lukas und ich bin Student.",
        traduccionCorrecta: ["Me", "llamo", "Lukas", "y", "soy", "estudiante."],
        bancoPalabras: ["Lukas", "Me", "profesor.", "llamo", "y", "soy", "estudiante.", "tu"]
    },
    {
        id: 12,
        leccionId: 2,
        tituloLeccion: "Presentaciones",
        idioma: "aleman",
        oracionOriginal: "Freut mich, ich komme aus Deutschland.",
        traduccionCorrecta: ["Mucho", "gusto,", "vengo", "de", "Alemania."],
        bancoPalabras: ["Alemania.", "Mucho", "de", "gusto,", "vivo", "en", "vengo", "España."]
    },
    // Lección 3: Vocabulario de Familia
    {
        id: 13,
        leccionId: 3,
        tituloLeccion: "Vocabulario de Familia",
        idioma: "aleman",
        oracionOriginal: "Meine Mutter und mein Vater sind zu Hause.",
        traduccionCorrecta: ["Mi", "madre", "y", "mi", "padre", "están", "en", "casa."],
        bancoPalabras: ["en", "Mi", "padre", "madre", "escuela.", "y", "mi", "están", "casa.", "tío"]
    },
    {
        id: 14,
        leccionId: 3,
        tituloLeccion: "Vocabulario de Familia",
        idioma: "aleman",
        oracionOriginal: "Ich habe einen Bruder und eine Schwester.",
        traduccionCorrecta: ["Tengo", "un", "hermano", "y", "una", "hermana."],
        bancoPalabras: ["un", "Tengo", "hermana.", "una", "tío", "hermano", "y", "abuela"]
    },
    // Lección 4: Vocabulario de Viajes
    {
        id: 15,
        leccionId: 4,
        tituloLeccion: "Vocabulario de Viajes",
        idioma: "aleman",
        oracionOriginal: "Wo ist der Bahnhof?",
        traduccionCorrecta: ["¿Dónde", "está", "la", "estación", "de", "tren?"],
        bancoPalabras: ["la", "¿Dónde", "está", "estación", "de", "tren?", "aeropuerto", "el"]
    },
    {
        id: 16,
        leccionId: 4,
        tituloLeccion: "Vocabulario de Viajes",
        idioma: "aleman",
        oracionOriginal: "Ich brauche meinen Reisepass für die Reise.",
        traduccionCorrecta: ["Necesito", "mi", "pasaporte", "para", "el", "viaje."],
        bancoPalabras: ["para", "Necesito", "mi", "hotel", "el", "pasaporte", "viaje.", "boleto"]
    },

    // =============================================
    // --- CHINO MANDARÍN ---
    // =============================================
    // Lección 1: Frases Básicas
    {
        id: 17,
        leccionId: 1,
        tituloLeccion: "Frases Básicas",
        idioma: "chino",
        oracionOriginal: "你好，早上好。",
        traduccionCorrecta: ["Hola,", "buenos", "días."],
        bancoPalabras: ["Hola,", "buenos", "tardes.", "días.", "noches", "adiós"]
    },
    {
        id: 18,
        leccionId: 1,
        tituloLeccion: "Frases Básicas",
        idioma: "chino",
        oracionOriginal: "非常感谢，再见。",
        traduccionCorrecta: ["Muchas", "gracias,", "adiós."],
        bancoPalabras: ["adiós.", "gracias,", "Muchas", "por", "favor,", "hola"]
    },
    // Lección 2: Presentaciones
    {
        id: 19,
        leccionId: 2,
        tituloLeccion: "Presentaciones",
        idioma: "chino",
        oracionOriginal: "我叫王明，我是学生。",
        traduccionCorrecta: ["Me", "llamo", "Wang", "Ming", "y", "soy", "estudiante."],
        bancoPalabras: ["Wang", "Me", "Ming", "llamo", "y", "soy", "profesor.", "estudiante.", "él"]
    },
    {
        id: 20,
        leccionId: 2,
        tituloLeccion: "Presentaciones",
        idioma: "chino",
        oracionOriginal: "很高兴认识你，我来自中国。",
        traduccionCorrecta: ["Mucho", "gusto,", "vengo", "de", "China."],
        bancoPalabras: ["Mucho", "gusto,", "soy", "de", "vengo", "China.", "España.", "vivo"]
    },
    // Lección 3: Vocabulario de Familia
    {
        id: 21,
        leccionId: 3,
        tituloLeccion: "Vocabulario de Familia",
        idioma: "chino",
        oracionOriginal: "我的爸爸和妈妈在家里。",
        traduccionCorrecta: ["Mi", "padre", "y", "mi", "madre", "están", "en", "casa."],
        bancoPalabras: ["en", "Mi", "padre", "madre", "escuela.", "y", "mi", "están", "casa.", "tío"]
    },
    {
        id: 22,
        leccionId: 3,
        tituloLeccion: "Vocabulario de Familia",
        idioma: "chino",
        oracionOriginal: "我有一个哥哥和一个姐姐。",
        traduccionCorrecta: ["Tengo", "un", "hermano", "y", "una", "hermana."],
        bancoPalabras: ["un", "Tengo", "hermano", "y", "hijo", "una", "hermana.", "abuelo"]
    },
    // Lección 4: Vocabulario de Viajes
    {
        id: 23,
        leccionId: 4,
        tituloLeccion: "Vocabulario de Viajes",
        idioma: "chino",
        oracionOriginal: "火车站在哪里？",
        traduccionCorrecta: ["¿Dónde", "está", "la", "estación", "de", "tren?"],
        bancoPalabras: ["¿Dónde", "la", "de", "estación", "tren?", "está", "hotel?", "el"]
    },
    {
        id: 24,
        leccionId: 4,
        tituloLeccion: "Vocabulario de Viajes",
        idioma: "chino",
        oracionOriginal: "旅行需要我的护照。",
        traduccionCorrecta: ["Necesito", "mi", "pasaporte", "para", "el", "viaje."],
        bancoPalabras: ["el", "Necesito", "pasaporte", "para", "mi", "viaje.", "boleto", "maleta"]
    },

    // =============================================
    // --- FRANCÉS ---
    // =============================================
    // Lección 1: Frases Básicas
    {
        id: 25,
        leccionId: 1,
        tituloLeccion: "Frases Básicas",
        idioma: "frances",
        oracionOriginal: "Bonjour, comment allez-vous aujourd'hui?",
        traduccionCorrecta: ["Hola,", "¿cómo", "está", "usted", "hoy?"],
        bancoPalabras: ["¿cómo", "Hola,", "hoy?", "usted", "está", "adiós,", "bien"]
    },
    {
        id: 26,
        leccionId: 1,
        tituloLeccion: "Frases Básicas",
        idioma: "frances",
        oracionOriginal: "Merci beaucoup et bonne journée.",
        traduccionCorrecta: ["Muchas", "gracias", "y", "buen", "día."],
        bancoPalabras: ["buen", "Muchas", "tardes.", "día.", "gracias", "y", "por", "favor"]
    },
    // Lección 2: Presentaciones
    {
        id: 27,
        leccionId: 2,
        tituloLeccion: "Presentaciones",
        idioma: "frances",
        oracionOriginal: "Je m'appelle Pierre et je suis étudiant.",
        traduccionCorrecta: ["Me", "llamo", "Pierre", "y", "soy", "estudiante."],
        bancoPalabras: ["y", "Me", "Pierre", "llamo", "profesor.", "soy", "estudiante.", "tu"]
    },
    {
        id: 28,
        leccionId: 2,
        tituloLeccion: "Presentaciones",
        idioma: "frances",
        oracionOriginal: "Enchanté, je viens de France.",
        traduccionCorrecta: ["Encantado,", "vengo", "de", "Francia."],
        bancoPalabras: ["Encantado,", "de", "vengo", "Francia.", "vivo", "en", "España."]
    },
    // Lección 3: Vocabulario de Familia
    {
        id: 29,
        leccionId: 3,
        tituloLeccion: "Vocabulario de Familia",
        idioma: "frances",
        oracionOriginal: "Ma mère et mon père sont à la maison.",
        traduccionCorrecta: ["Mi", "madre", "y", "mi", "padre", "están", "en", "casa."],
        bancoPalabras: ["en", "Mi", "padre", "están", "y", "mi", "madre", "casa.", "escuela."]
    },
    {
        id: 30,
        leccionId: 3,
        tituloLeccion: "Vocabulario de Familia",
        idioma: "frances",
        oracionOriginal: "J'ai un frère et une sœur.",
        traduccionCorrecta: ["Tengo", "un", "hermano", "y", "una", "hermana."],
        bancoPalabras: ["Tengo", "hermano", "un", "y", "hijo", "una", "hermana.", "primo"]
    },
    // Lección 4: Vocabulario de Viajes
    {
        id: 31,
        leccionId: 4,
        tituloLeccion: "Vocabulario de Viajes",
        idioma: "frances",
        oracionOriginal: "Où est la gare de train?",
        traduccionCorrecta: ["¿Dónde", "está", "la", "estación", "de", "tren?"],
        bancoPalabras: ["está", "¿Dónde", "la", "estación", "de", "tren?", "hotel?", "el"]
    },
    {
        id: 32,
        leccionId: 4,
        tituloLeccion: "Vocabulario de Viajes",
        idioma: "frances",
        oracionOriginal: "J'ai besoin de mon passeport pour le voyage.",
        traduccionCorrecta: ["Necesito", "mi", "pasaporte", "para", "el", "viaje."],
        bancoPalabras: ["viaje.", "Necesito", "el", "mi", "pasaporte", "para", "boleto", "vuelo."]
    },

    // =============================================
    // --- ITALIANO ---
    // =============================================
    // Lección 1: Frases Básicas
    {
        id: 33,
        leccionId: 1,
        tituloLeccion: "Frases Básicas",
        idioma: "italiano",
        oracionOriginal: "Buongiorno, come stai oggi?",
        traduccionCorrecta: ["Buenos", "días,", "¿cómo", "estás", "hoy?"],
        bancoPalabras: ["Buenos", "¿cómo", "hoy?", "días,", "estás", "tardes,", "mal"]
    },
    {
        id: 34,
        leccionId: 1,
        tituloLeccion: "Frases Básicas",
        idioma: "italiano",
        oracionOriginal: "Grazie mille e arrivederci.",
        traduccionCorrecta: ["Muchas", "gracias", "y", "hasta", "luego."],
        bancoPalabras: ["y", "Muchas", "hasta", "luego.", "gracias", "hola", "por", "favor"]
    },
    // Lección 2: Presentaciones
    {
        id: 35,
        leccionId: 2,
        tituloLeccion: "Presentaciones",
        idioma: "italiano",
        oracionOriginal: "Mi chiamo Marco e sono uno studente.",
        traduccionCorrecta: ["Me", "llamo", "Marco", "y", "soy", "estudiante."],
        bancoPalabras: ["Marco", "Me", "y", "llamo", "profesor.", "soy", "estudiante.", "tu"]
    },
    {
        id: 36,
        leccionId: 2,
        tituloLeccion: "Presentaciones",
        idioma: "italiano",
        oracionOriginal: "Piacere di conoscerti, vengo dall'Italia.",
        traduccionCorrecta: ["Mucho", "gusto,", "vengo", "de", "Italia."],
        bancoPalabras: ["Mucho", "de", "gusto,", "vengo", "Italia.", "vivo", "en", "Roma."]
    },
    // Lección 3: Vocabulario de Familia
    {
        id: 37,
        leccionId: 3,
        tituloLeccion: "Vocabulario de Familia",
        idioma: "italiano",
        oracionOriginal: "Mia madre e mio padre sono a casa.",
        traduccionCorrecta: ["Mi", "madre", "y", "mi", "padre", "están", "en", "casa."],
        bancoPalabras: ["Mi", "madre", "padre", "están", "y", "mi", "en", "casa.", "tío"]
    },
    {
        id: 38,
        leccionId: 3,
        tituloLeccion: "Vocabulario de Familia",
        idioma: "italiano",
        oracionOriginal: "Ho un fratello e una sorella.",
        traduccionCorrecta: ["Tengo", "un", "hermano", "y", "una", "hermana."],
        bancoPalabras: ["Tengo", "un", "hermano", "y", "una", "hermana.", "abuelo", "hijo"]
    },
    // Lección 4: Vocabulario de Viajes
    {
        id: 39,
        leccionId: 4,
        tituloLeccion: "Vocabulario de Viajes",
        idioma: "italiano",
        oracionOriginal: "Dov'è la stazione dei treni?",
        traduccionCorrecta: ["¿Dónde", "está", "la", "estación", "de", "trenes?"],
        bancoPalabras: ["la", "¿Dónde", "estación", "está", "de", "trenes?", "aeropuerto", "el"]
    },
    {
        id: 40,
        leccionId: 4,
        tituloLeccion: "Vocabulario de Viajes",
        idioma: "italiano",
        oracionOriginal: "Ho bisogno del passaporto per il viaggio.",
        traduccionCorrecta: ["Necesito", "el", "pasaporte", "para", "el", "viaje."],
        bancoPalabras: ["para", "Necesito", "el", "pasaporte", "boleto", "viaje.", "hotel", "un"]
    },

    // =============================================
    // --- PORTUGUÉS ---
    // =============================================
    // Lección 1: Frases Básicas
    {
        id: 41,
        leccionId: 1,
        tituloLeccion: "Frases Básicas",
        idioma: "portugues",
        oracionOriginal: "Bom dia, como você está hoje?",
        traduccionCorrecta: ["Buenos", "días,", "¿cómo", "estás", "hoy?"],
        bancoPalabras: ["Buenos", "¿cómo", "días,", "hoy?", "estás", "tardes,", "mal"]
    },
    {
        id: 42,
        leccionId: 1,
        tituloLeccion: "Frases Básicas",
        idioma: "portugues",
        oracionOriginal: "Muito obrigado e até logo.",
        traduccionCorrecta: ["Muchas", "gracias", "y", "hasta", "luego."],
        bancoPalabras: ["Muchas", "hasta", "gracias", "y", "luego.", "hola", "por", "favor"]
    },
    // Lección 2: Presentaciones
    {
        id: 43,
        leccionId: 2,
        tituloLeccion: "Presentaciones",
        idioma: "portugues",
        oracionOriginal: "Meu nome é Lucas e sou estudante.",
        traduccionCorrecta: ["Mi", "nombre", "es", "Lucas", "y", "soy", "estudiante."],
        bancoPalabras: ["Lucas", "Mi", "nombre", "es", "y", "profesor.", "soy", "estudiante."]
    },
    {
        id: 44,
        leccionId: 2,
        tituloLeccion: "Presentaciones",
        idioma: "portugues",
        oracionOriginal: "Prazer em conhecê-lo, venho do Brasil.",
        traduccionCorrecta: ["Mucho", "gusto,", "vengo", "de", "Brasil."],
        bancoPalabras: ["Mucho", "gusto,", "de", "vengo", "Brasil.", "vivo", "en", "Portugal."]
    },
    // Lección 3: Vocabulario de Familia
    {
        id: 45,
        leccionId: 3,
        tituloLeccion: "Vocabulario de Familia",
        idioma: "portugues",
        oracionOriginal: "Minha mãe e meu pai estão em casa.",
        traduccionCorrecta: ["Mi", "madre", "y", "mi", "padre", "están", "en", "casa."],
        bancoPalabras: ["en", "Mi", "padre", "madre", "y", "mi", "están", "casa.", "escola."]
    },
    {
        id: 46,
        leccionId: 3,
        tituloLeccion: "Vocabulario de Familia",
        idioma: "portugues",
        oracionOriginal: "Eu tenho um irmão e uma irmã.",
        traduccionCorrecta: ["Tengo", "un", "hermano", "y", "una", "hermana."],
        bancoPalabras: ["un", "Tengo", "hermano", "hermana.", "y", "una", "hijo", "primo"]
    },
    // Lección 4: Vocabulario de Viajes
    {
        id: 47,
        leccionId: 4,
        tituloLeccion: "Vocabulario de Viajes",
        idioma: "portugues",
        oracionOriginal: "Onde fica a estação de trem?",
        traduccionCorrecta: ["¿Dónde", "queda", "la", "estación", "de", "tren?"],
        bancoPalabras: ["la", "¿Dónde", "queda", "estación", "de", "tren?", "aeroporto", "o"]
    },
    {
        id: 48,
        leccionId: 4,
        tituloLeccion: "Vocabulario de Viajes",
        idioma: "portugues",
        oracionOriginal: "Preciso do meu passaporte para a viagem.",
        traduccionCorrecta: ["Necesito", "mi", "pasaporte", "para", "el", "viaje."],
        bancoPalabras: ["para", "Necesito", "el", "mi", "pasaporte", "viaje.", "bilhete", "hotel"]
    },

    // =============================================
    // --- JAPONÉS ---
    // =============================================
    // Lección 1: Frases Básicas
    {
        id: 49,
        leccionId: 1,
        tituloLeccion: "Frases Básicas",
        idioma: "japones",
        oracionOriginal: "おはようございます、お元気ですか？",
        traduccionCorrecta: ["Buenos", "días,", "¿cómo", "estás?"],
        bancoPalabras: ["Buenos", "¿cómo", "días,", "estás?", "noches,", "mal", "hola"]
    },
    {
        id: 50,
        leccionId: 1,
        tituloLeccion: "Frases Básicas",
        idioma: "japones",
        oracionOriginal: "ありがとうございます、さようなら。",
        traduccionCorrecta: ["Muchas", "gracias,", "adiós."],
        bancoPalabras: ["gracias,", "Muchas", "adiós.", "por", "favor,", "hola"]
    },
    // Lección 2: Presentaciones
    {
        id: 51,
        leccionId: 2,
        tituloLeccion: "Presentaciones",
        idioma: "japones",
        oracionOriginal: "はじめまして、わたしはたなかです。",
        traduccionCorrecta: ["Mucho", "gusto,", "yo", "soy", "Tanaka."],
        bancoPalabras: ["Tanaka.", "Mucho", "gusto,", "yo", "él", "soy", "profesor"]
    },
    {
        id: 52,
        leccionId: 2,
        tituloLeccion: "Presentaciones",
        idioma: "japones",
        oracionOriginal: "わたしはにほんからきました、がくせいです。",
        traduccionCorrecta: ["Vengo", "de", "Japón", "y", "soy", "estudiante."],
        bancoPalabras: ["Vengo", "de", "Japón", "y", "soy", "estudiante.", "profesor.", "vivo"]
    },
    // Lección 3: Vocabulario de Familia
    {
        id: 53,
        leccionId: 3,
        tituloLeccion: "Vocabulario de Familia",
        idioma: "japones",
        oracionOriginal: "ちちとはははいえにいます。",
        traduccionCorrecta: ["Mi", "padre", "y", "mi", "madre", "están", "en", "casa."],
        bancoPalabras: ["padre", "Mi", "y", "mi", "madre", "están", "en", "casa.", "escuela."]
    },
    {
        id: 54,
        leccionId: 3,
        tituloLeccion: "Vocabulario de Familia",
        idioma: "japones",
        oracionOriginal: "わたしにはあにとあねがいます。",
        traduccionCorrecta: ["Tengo", "un", "hermano", "y", "una", "hermana."],
        bancoPalabras: ["un", "Tengo", "hermano", "y", "una", "hermana.", "hijo", "abuelo"]
    },
    // Lección 4: Vocabulario de Viajes
    {
        id: 55,
        leccionId: 4,
        tituloLeccion: "Vocabulario de Viajes",
        idioma: "japones",
        oracionOriginal: "えきはどこですか？",
        traduccionCorrecta: ["¿Dónde", "está", "la", "estación", "de", "tren?"],
        bancoPalabras: ["está", "¿Dónde", "la", "de", "estación", "tren?", "hotel?", "el"]
    },
    {
        id: 56,
        leccionId: 4,
        tituloLeccion: "Vocabulario de Viajes",
        idioma: "japones",
        oracionOriginal: "りょこうのためにパスポートがひつようです。",
        traduccionCorrecta: ["Necesito", "mi", "pasaporte", "para", "el", "viaje."],
        bancoPalabras: ["el", "Necesito", "pasaporte", "para", "mi", "viaje.", "boleto", "avión"]
    },

    // =============================================
    // --- COREANO ---
    // =============================================
    // Lección 1: Frases Básicas
    {
        id: 57,
        leccionId: 1,
        tituloLeccion: "Frases Básicas",
        idioma: "coreano",
        oracionOriginal: "안녕하세요, 잘 지내세요?",
        traduccionCorrecta: ["Hola,", "¿cómo", "estás?"],
        bancoPalabras: ["Hola,", "¿cómo", "estás?", "adiós,", "bien", "gracias"]
    },
    {
        id: 58,
        leccionId: 1,
        tituloLeccion: "Frases Básicas",
        idioma: "coreano",
        oracionOriginal: "정말 감사합니다, 안녕히 계세요.",
        traduccionCorrecta: ["Muchas", "gracias,", "adiós."],
        bancoPalabras: ["Muchas", "gracias,", "adiós.", "por", "favor,", "hola"]
    },
    // Lección 2: Presentaciones
    {
        id: 59,
        leccionId: 2,
        tituloLeccion: "Presentaciones",
        idioma: "coreano",
        oracionOriginal: "제 이름은 민준이고 학생입니다.",
        traduccionCorrecta: ["Mi", "nombre", "es", "Minjun", "y", "soy", "estudiante."],
        bancoPalabras: ["Minjun", "Mi", "nombre", "es", "y", "soy", "estudiante.", "profesor"]
    },
    {
        id: 60,
        leccionId: 2,
        tituloLeccion: "Presentaciones",
        idioma: "coreano",
        oracionOriginal: "만나서 반가워요, 한국에서 왔어요.",
        traduccionCorrecta: ["Mucho", "gusto,", "vengo", "de", "Corea."],
        bancoPalabras: ["Mucho", "de", "gusto,", "vengo", "Corea.", "vivo", "en", "Seúl"]
    },
    // Lección 3: Vocabulario de Familia
    {
        id: 61,
        leccionId: 3,
        tituloLeccion: "Vocabulario de Familia",
        idioma: "coreano",
        oracionOriginal: "아버지와 어머니는 집에 계십니다.",
        traduccionCorrecta: ["Mi", "padre", "y", "mi", "madre", "están", "en", "casa."],
        bancoPalabras: ["padre", "Mi", "y", "madre", "mi", "están", "en", "casa.", "escuela."]
    },
    {
        id: 62,
        leccionId: 3,
        tituloLeccion: "Vocabulario de Familia",
        idioma: "coreano",
        oracionOriginal: "저는 형과 누나가 있습니다.",
        traduccionCorrecta: ["Tengo", "un", "hermano", "y", "una", "hermana."],
        bancoPalabras: ["Tengo", "hermano", "un", "y", "una", "hermana.", "hijo", "amigo"]
    },
    // Lección 4: Vocabulario de Viajes
    {
        id: 63,
        leccionId: 4,
        tituloLeccion: "Vocabulario de Viajes",
        idioma: "coreano",
        oracionOriginal: "기차역이 어디에 있습니까?",
        traduccionCorrecta: ["¿Dónde", "está", "la", "estación", "de", "tren?"],
        bancoPalabras: ["está", "¿Dónde", "la", "estación", "de", "tren?", "hotel?", "el"]
    },
    {
        id: 64,
        leccionId: 4,
        tituloLeccion: "Vocabulario de Viajes",
        idioma: "coreano",
        oracionOriginal: "여행을 위해 여권이 필요합니다.",
        traduccionCorrecta: ["Necesito", "mi", "pasaporte", "para", "el", "viaje."],
        bancoPalabras: ["el", "Necesito", "pasaporte", "para", "viaje.", "mi", "boleto", "avión"]
    },

    // =============================================
    // --- RUSO ---
    // =============================================
    // Lección 1: Frases Básicas
    {
        id: 65,
        leccionId: 1,
        tituloLeccion: "Frases Básicas",
        idioma: "ruso",
        oracionOriginal: "Здравствуйте, как ваши дела?",
        traduccionCorrecta: ["Hola,", "¿cómo", "estás", "hoy?"],
        bancoPalabras: ["Hola,", "adiós,", "¿cómo", "hoy?", "estás", "bien", "mal"]
    },
    {
        id: 66,
        leccionId: 1,
        tituloLeccion: "Frases Básicas",
        idioma: "ruso",
        oracionOriginal: "Большое спасибо и до свидания.",
        traduccionCorrecta: ["Muchas", "gracias", "y", "hasta", "luego."],
        bancoPalabras: ["Muchas", "y", "gracias", "hola", "hasta", "luego.", "por", "favor"]
    },
    // Lección 2: Presentaciones
    {
        id: 67,
        leccionId: 2,
        tituloLeccion: "Presentaciones",
        idioma: "ruso",
        oracionOriginal: "Меня зовут Иван и я студент.",
        traduccionCorrecta: ["Me", "llamo", "Iván", "y", "soy", "estudiante."],
        bancoPalabras: ["Iván", "Me", "profesor.", "llamo", "y", "soy", "estudiante.", "tu"]
    },
    {
        id: 68,
        leccionId: 2,
        tituloLeccion: "Presentaciones",
        idioma: "ruso",
        oracionOriginal: "Очень приятно, я из России.",
        traduccionCorrecta: ["Mucho", "gusto,", "vengo", "de", "Rusia."],
        bancoPalabras: ["Mucho", "gusto,", "vengo", "de", "Rusia.", "vivo", "en", "España."]
    },
    // Lección 3: Vocabulario de Familia
    {
        id: 69,
        leccionId: 3,
        tituloLeccion: "Vocabulario de Familia",
        idioma: "ruso",
        oracionOriginal: "Моя мама и мой папа дома.",
        traduccionCorrecta: ["Mi", "madre", "y", "mi", "padre", "están", "en", "casa."],
        bancoPalabras: ["en", "Mi", "padre", "madre", "escuela.", "y", "mi", "están", "casa.", "tío"]
    },
    {
        id: 70,
        leccionId: 3,
        tituloLeccion: "Vocabulario de Familia",
        idioma: "ruso",
        oracionOriginal: "У меня есть брат и сестра.",
        traduccionCorrecta: ["Tengo", "un", "hermano", "y", "una", "hermana."],
        bancoPalabras: ["un", "Tengo", "hermano", "y", "hijo", "una", "hermana.", "abuelo"]
    },
    // Lección 4: Vocabulario de Viajes
    {
        id: 71,
        leccionId: 4,
        tituloLeccion: "Vocabulario de Viajes",
        idioma: "ruso",
        oracionOriginal: "Где находится вокзал?",
        traduccionCorrecta: ["¿Dónde", "está", "la", "estación", "de", "tren?"],
        bancoPalabras: ["está", "¿Dónde", "la", "de", "estación", "tren?", "hotel?", "el"]
    },
    {
        id: 72,
        leccionId: 4,
        tituloLeccion: "Vocabulario de Viajes",
        idioma: "ruso",
        oracionOriginal: "Мне нужен паспорт для поездки.",
        traduccionCorrecta: ["Necesito", "mi", "pasaporte", "para", "el", "viaje."],
        bancoPalabras: ["el", "Necesito", "pasaporte", "para", "mi", "viaje.", "boleto", "avión"]
    }
];

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
        vidas: 3,
        leccionesCompletadas: [],
        tiempoSinVidas: null
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
        id: 'japones',
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
    // --- INGLÉS: Lección 1 ---
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

    // --- INGLÉS: Lección 2 ---
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
    },

    // --- ALEMÁN: Lección 1 ---
    {
        id: 5,
        leccionId: 1,
        idioma: "aleman",
        oracionOriginal: "Guten Tag, wie geht es dir?",
        traduccionCorrecta: ["Buenos", "días,", "¿cómo", "estás?"],
        bancoPalabras: ["Buenos", "días,", "¿cómo", "estás?", "mal", "noches", "gracias"]
    },
    {
        id: 6,
        leccionId: 1,
        idioma: "aleman",
        oracionOriginal: "Hallo, freut mich dich kennenzulernen.",
        traduccionCorrecta: ["Hola,", "encantado", "de", "conocerte."],
        bancoPalabras: ["Hola,", "de", "conocerte.", "adiós", "encantado", "triste"]
    },

    // --- FRANCÉS: Lección 1 ---
    {
        id: 7,
        leccionId: 1,
        idioma: "frances",
        oracionOriginal: "Bonjour, comment allez-vous?",
        traduccionCorrecta: ["Hola,", "¿cómo", "estás?"],
        bancoPalabras: ["Hola,", "¿cómo", "estás?", "adiós", "bien", "tarde"]
    },
    {
        id: 8,
        leccionId: 1,
        idioma: "frances",
        oracionOriginal: "Enchanté de faire votre connaissance.",
        traduccionCorrecta: ["Encantado", "de", "conocerte."],
        bancoPalabras: ["Encantado", "de", "conocerte.", "gracias", "triste", "mucho"]
    },

    // --- ITALIANO: Lección 1 ---
    {
        id: 9,
        leccionId: 1,
        idioma: "italiano",
        oracionOriginal: "Ciao, come stai?",
        traduccionCorrecta: ["Hola,", "¿cómo", "estás?"],
        bancoPalabras: ["Hola,", "¿cómo", "estás?", "adiós", "bien", "gracias"]
    },
    {
        id: 10,
        leccionId: 1,
        idioma: "italiano",
        oracionOriginal: "Piacere di conoscerti.",
        traduccionCorrecta: ["Mucho", "gusto", "en", "conocerte."],
        bancoPalabras: ["Mucho", "gusto", "en", "conocerte.", "triste", "adiós"]
    },

    // --- PORTUGUÉS: Lección 1 ---
    {
        id: 11,
        leccionId: 1,
        idioma: "portugues",
        oracionOriginal: "Olá, como você está?",
        traduccionCorrecta: ["Hola,", "¿cómo", "estás?"],
        bancoPalabras: ["Hola,", "¿cómo", "estás?", "bien", "adiós", "tarde"]
    },
    {
        id: 12,
        leccionId: 1,
        idioma: "portugues",
        oracionOriginal: "Muito prazer em conhecê-lo.",
        traduccionCorrecta: ["Mucho", "gusto", "en", "conocerte."],
        bancoPalabras: ["Mucho", "gusto", "en", "conocerte.", "triste", "gracias"]
    },

    // --- CHINO: Lección 1 ---
    {
        id: 13,
        leccionId: 1,
        idioma: "chino",
        oracionOriginal: "你好，你好吗？",
        traduccionCorrecta: ["Hola,", "¿cómo", "estás?"],
        bancoPalabras: ["Hola,", "¿cómo", "estás?", "bien", "gracias", "adiós"]
    },

    // --- JAPONÉS: Lección 1 ---
    {
        id: 14,
        leccionId: 1,
        idioma: "japones",
        oracionOriginal: "こんにちは、お元気ですか？",
        traduccionCorrecta: ["Hola,", "¿cómo", "estás?"],
        bancoPalabras: ["Hola,", "¿cómo", "estás?", "bien", "adiós", "gracias"]
    },

    // --- COREANO: Lección 1 ---
    {
        id: 15,
        leccionId: 1,
        idioma: "coreano",
        oracionOriginal: "안녕하세요, 잘 지내세요?",
        traduccionCorrecta: ["Hola,", "¿cómo", "estás?"],
        bancoPalabras: ["Hola,", "¿cómo", "estás?", "bien", "adiós", "gracias"]
    },

    // --- CHINO: Lección 1 (Pregunta 2) ---
    {
        id: 16,
        leccionId: 1,
        idioma: "chino",
        oracionOriginal: "谢谢你。",
        traduccionCorrecta: ["Muchas", "gracias."],
        bancoPalabras: ["Muchas", "gracias.", "por", "favor", "adiós", "hola"]
    },

    // --- JAPONÉS: Lección 1 (Pregunta 2) ---
    {
        id: 17,
        leccionId: 1,
        idioma: "japones",
        oracionOriginal: "ありがとうございます。",
        traduccionCorrecta: ["Muchas", "gracias."],
        bancoPalabras: ["Muchas", "gracias.", "por", "favor", "adiós", "hola"]
    },

    // --- COREANO: Lección 1 (Pregunta 2) ---
    {
        id: 18,
        leccionId: 1,
        idioma: "coreano",
        oracionOriginal: "감사합니다.",
        traduccionCorrecta: ["Muchas", "gracias."],
        bancoPalabras: ["Muchas", "gracias.", "por", "favor", "adiós", "hola"]
    },

    // =============================================
    // --- INGLÉS: Lección 3 ---
    // =============================================
    {
        id: 19,
        leccionId: 3,
        idioma: "ingles",
        oracionOriginal: "I like to read books.",
        traduccionCorrecta: ["Me", "gusta", "leer", "libros."],
        bancoPalabras: ["Me", "gusta", "leer", "libros.", "ver", "escribir", "películas"]
    },
    {
        id: 20,
        leccionId: 3,
        idioma: "ingles",
        oracionOriginal: "She is my best friend.",
        traduccionCorrecta: ["Ella", "es", "mi", "mejor", "amiga."],
        bancoPalabras: ["Ella", "es", "mi", "mejor", "amiga.", "hermana", "prima"]
    },

    // --- INGLÉS: Lección 4 ---
    {
        id: 21,
        leccionId: 4,
        idioma: "ingles",
        oracionOriginal: "We go to school every day.",
        traduccionCorrecta: ["Vamos", "a", "la", "escuela", "todos", "los", "días."],
        bancoPalabras: ["Vamos", "a", "la", "escuela", "todos", "los", "días.", "trabajo", "nunca"]
    },
    {
        id: 22,
        leccionId: 4,
        idioma: "ingles",
        oracionOriginal: "The weather is beautiful today.",
        traduccionCorrecta: ["El", "clima", "está", "hermoso", "hoy."],
        bancoPalabras: ["El", "clima", "está", "hermoso", "hoy.", "frío", "malo"]
    },

    // =============================================
    // --- ALEMÁN: Lección 2 ---
    // =============================================
    {
        id: 23,
        leccionId: 2,
        idioma: "aleman",
        oracionOriginal: "Ich lerne Deutsch.",
        traduccionCorrecta: ["Estoy", "aprendiendo", "alemán."],
        bancoPalabras: ["Estoy", "aprendiendo", "alemán.", "inglés", "estudiando", "hablando"]
    },
    {
        id: 24,
        leccionId: 2,
        idioma: "aleman",
        oracionOriginal: "Das ist sehr schön.",
        traduccionCorrecta: ["Eso", "es", "muy", "hermoso."],
        bancoPalabras: ["Eso", "es", "muy", "hermoso.", "feo", "malo", "aquello"]
    },

    // --- ALEMÁN: Lección 3 ---
    {
        id: 25,
        leccionId: 3,
        idioma: "aleman",
        oracionOriginal: "Ich gehe zur Schule.",
        traduccionCorrecta: ["Voy", "a", "la", "escuela."],
        bancoPalabras: ["Voy", "a", "la", "escuela.", "casa", "al", "trabajo"]
    },
    {
        id: 26,
        leccionId: 3,
        idioma: "aleman",
        oracionOriginal: "Ich mag Musik sehr.",
        traduccionCorrecta: ["Me", "gusta", "mucho", "la", "música."],
        bancoPalabras: ["Me", "gusta", "mucho", "la", "música.", "cine", "libros"]
    },

    // --- ALEMÁN: Lección 4 ---
    {
        id: 27,
        leccionId: 4,
        idioma: "aleman",
        oracionOriginal: "Sie ist meine beste Freundin.",
        traduccionCorrecta: ["Ella", "es", "mi", "mejor", "amiga."],
        bancoPalabras: ["Ella", "es", "mi", "mejor", "amiga.", "hermana", "prima"]
    },
    {
        id: 28,
        leccionId: 4,
        idioma: "aleman",
        oracionOriginal: "Wir essen zusammen.",
        traduccionCorrecta: ["Comemos", "juntos."],
        bancoPalabras: ["Comemos", "juntos.", "vivimos", "trabajamos", "separados"]
    },

    // =============================================
    // --- FRANCÉS: Lección 2 ---
    // =============================================
    {
        id: 29,
        leccionId: 2,
        idioma: "frances",
        oracionOriginal: "Je m'appelle Marie.",
        traduccionCorrecta: ["Me", "llamo", "Marie."],
        bancoPalabras: ["Me", "llamo", "Marie.", "te", "llamas", "ella", "chamo"]
    },
    {
        id: 30,
        leccionId: 2,
        idioma: "frances",
        oracionOriginal: "J'aime la musique.",
        traduccionCorrecta: ["Me", "gusta", "la", "música."],
        bancoPalabras: ["Me", "gusta", "la", "música.", "el", "cine", "libros"]
    },

    // --- FRANCÉS: Lección 3 ---
    {
        id: 31,
        leccionId: 3,
        idioma: "frances",
        oracionOriginal: "Je vais à l'école.",
        traduccionCorrecta: ["Voy", "a", "la", "escuela."],
        bancoPalabras: ["Voy", "a", "la", "escuela.", "casa", "al", "trabajo"]
    },
    {
        id: 32,
        leccionId: 3,
        idioma: "frances",
        oracionOriginal: "Il fait beau aujourd'hui.",
        traduccionCorrecta: ["Hace", "buen", "tiempo", "hoy."],
        bancoPalabras: ["Hace", "buen", "tiempo", "hoy.", "mal", "frío", "calor"]
    },

    // --- FRANCÉS: Lección 4 ---
    {
        id: 33,
        leccionId: 4,
        idioma: "frances",
        oracionOriginal: "Elle est ma meilleure amie.",
        traduccionCorrecta: ["Ella", "es", "mi", "mejor", "amiga."],
        bancoPalabras: ["Ella", "es", "mi", "mejor", "amiga.", "hermana", "prima"]
    },
    {
        id: 34,
        leccionId: 4,
        idioma: "frances",
        oracionOriginal: "Nous mangeons ensemble.",
        traduccionCorrecta: ["Comemos", "juntos."],
        bancoPalabras: ["Comemos", "juntos.", "vivimos", "trabajamos", "separados"]
    },

    // =============================================
    // --- ITALIANO: Lección 2 ---
    // =============================================
    {
        id: 35,
        leccionId: 2,
        idioma: "italiano",
        oracionOriginal: "Mi chiamo Marco.",
        traduccionCorrecta: ["Me", "llamo", "Marco."],
        bancoPalabras: ["Me", "llamo", "Marco.", "te", "llamas", "él", "se"]
    },
    {
        id: 36,
        leccionId: 2,
        idioma: "italiano",
        oracionOriginal: "Mi piace la musica.",
        traduccionCorrecta: ["Me", "gusta", "la", "música."],
        bancoPalabras: ["Me", "gusta", "la", "música.", "el", "cine", "libros"]
    },

    // --- ITALIANO: Lección 3 ---
    {
        id: 37,
        leccionId: 3,
        idioma: "italiano",
        oracionOriginal: "Vado a scuola.",
        traduccionCorrecta: ["Voy", "a", "la", "escuela."],
        bancoPalabras: ["Voy", "a", "la", "escuela.", "casa", "al", "trabajo"]
    },
    {
        id: 38,
        leccionId: 3,
        idioma: "italiano",
        oracionOriginal: "Fa bello oggi.",
        traduccionCorrecta: ["Hace", "buen", "tiempo", "hoy."],
        bancoPalabras: ["Hace", "buen", "tiempo", "hoy.", "mal", "frío", "calor"]
    },

    // --- ITALIANO: Lección 4 ---
    {
        id: 39,
        leccionId: 4,
        idioma: "italiano",
        oracionOriginal: "Lei è la mia migliore amica.",
        traduccionCorrecta: ["Ella", "es", "mi", "mejor", "amiga."],
        bancoPalabras: ["Ella", "es", "mi", "mejor", "amiga.", "hermana", "prima"]
    },
    {
        id: 40,
        leccionId: 4,
        idioma: "italiano",
        oracionOriginal: "Mangiamo insieme.",
        traduccionCorrecta: ["Comemos", "juntos."],
        bancoPalabras: ["Comemos", "juntos.", "vivimos", "trabajamos", "separados"]
    },

    // =============================================
    // --- PORTUGUÉS: Lección 2 ---
    // =============================================
    {
        id: 41,
        leccionId: 2,
        idioma: "portugues",
        oracionOriginal: "Meu nome é João.",
        traduccionCorrecta: ["Mi", "nombre", "es", "João."],
        bancoPalabras: ["Mi", "nombre", "es", "João.", "apellido", "tu", "ella"]
    },
    {
        id: 42,
        leccionId: 2,
        idioma: "portugues",
        oracionOriginal: "Eu gosto de música.",
        traduccionCorrecta: ["Me", "gusta", "la", "música."],
        bancoPalabras: ["Me", "gusta", "la", "música.", "el", "cine", "libros"]
    },

    // --- PORTUGUÉS: Lección 3 ---
    {
        id: 43,
        leccionId: 3,
        idioma: "portugues",
        oracionOriginal: "Vou à escola.",
        traduccionCorrecta: ["Voy", "a", "la", "escuela."],
        bancoPalabras: ["Voy", "a", "la", "escuela.", "casa", "al", "trabajo"]
    },
    {
        id: 44,
        leccionId: 3,
        idioma: "portugues",
        oracionOriginal: "Está bonito hoje.",
        traduccionCorrecta: ["Hace", "buen", "tiempo", "hoy."],
        bancoPalabras: ["Hace", "buen", "tiempo", "hoy.", "mal", "frío", "calor"]
    },

    // --- PORTUGUÉS: Lección 4 ---
    {
        id: 45,
        leccionId: 4,
        idioma: "portugues",
        oracionOriginal: "Ela é minha melhor amiga.",
        traduccionCorrecta: ["Ella", "es", "mi", "mejor", "amiga."],
        bancoPalabras: ["Ella", "es", "mi", "mejor", "amiga.", "hermana", "prima"]
    },
    {
        id: 46,
        leccionId: 4,
        idioma: "portugues",
        oracionOriginal: "Nós comemos juntos.",
        traduccionCorrecta: ["Comemos", "juntos."],
        bancoPalabras: ["Comemos", "juntos.", "vivimos", "trabajamos", "separados"]
    },

    // =============================================
    // --- CHINO: Lecciones 2, 3 y 4 ---
    // =============================================
    {
        id: 47,
        leccionId: 2,
        idioma: "chino",
        oracionOriginal: "我叫王明。",
        traduccionCorrecta: ["Me", "llamo", "Wang", "Ming."],
        bancoPalabras: ["Me", "llamo", "Wang", "Ming.", "llamas", "él", "se"]
    },
    {
        id: 48,
        leccionId: 2,
        idioma: "chino",
        oracionOriginal: "我喜欢音乐。",
        traduccionCorrecta: ["Me", "gusta", "la", "música."],
        bancoPalabras: ["Me", "gusta", "la", "música.", "el", "cine", "libros"]
    },
    {
        id: 49,
        leccionId: 3,
        idioma: "chino",
        oracionOriginal: "我去学校。",
        traduccionCorrecta: ["Voy", "a", "la", "escuela."],
        bancoPalabras: ["Voy", "a", "la", "escuela.", "casa", "al", "trabajo"]
    },
    {
        id: 50,
        leccionId: 3,
        idioma: "chino",
        oracionOriginal: "今天天气很好。",
        traduccionCorrecta: ["Hace", "buen", "tiempo", "hoy."],
        bancoPalabras: ["Hace", "buen", "tiempo", "hoy.", "mal", "frío", "calor"]
    },
    {
        id: 51,
        leccionId: 4,
        idioma: "chino",
        oracionOriginal: "她是我最好的朋友。",
        traduccionCorrecta: ["Ella", "es", "mi", "mejor", "amiga."],
        bancoPalabras: ["Ella", "es", "mi", "mejor", "amiga.", "hermana", "prima"]
    },
    {
        id: 52,
        leccionId: 4,
        idioma: "chino",
        oracionOriginal: "我们一起吃饭。",
        traduccionCorrecta: ["Comemos", "juntos."],
        bancoPalabras: ["Comemos", "juntos.", "vivimos", "trabajamos", "separados"]
    },

    // =============================================
    // --- JAPONÉS: Lecciones 2, 3 y 4 ---
    // =============================================
    {
        id: 53,
        leccionId: 2,
        idioma: "japones",
        oracionOriginal: "わたしはたなかです。",
        traduccionCorrecta: ["Me", "llamo", "Tanaka."],
        bancoPalabras: ["Me", "llamo", "Tanaka.", "llamas", "él", "se", "yo"]
    },
    {
        id: 54,
        leccionId: 2,
        idioma: "japones",
        oracionOriginal: "おんがくがすきです。",
        traduccionCorrecta: ["Me", "gusta", "la", "música."],
        bancoPalabras: ["Me", "gusta", "la", "música.", "el", "cine", "libros"]
    },
    {
        id: 55,
        leccionId: 3,
        idioma: "japones",
        oracionOriginal: "がっこうにいきます。",
        traduccionCorrecta: ["Voy", "a", "la", "escuela."],
        bancoPalabras: ["Voy", "a", "la", "escuela.", "casa", "al", "trabajo"]
    },
    {
        id: 56,
        leccionId: 3,
        idioma: "japones",
        oracionOriginal: "きょうはいいてんきです。",
        traduccionCorrecta: ["Hace", "buen", "tiempo", "hoy."],
        bancoPalabras: ["Hace", "buen", "tiempo", "hoy.", "mal", "frío", "calor"]
    },
    {
        id: 57,
        leccionId: 4,
        idioma: "japones",
        oracionOriginal: "かのじょはわたしのしんゆうです。",
        traduccionCorrecta: ["Ella", "es", "mi", "mejor", "amiga."],
        bancoPalabras: ["Ella", "es", "mi", "mejor", "amiga.", "hermana", "prima"]
    },
    {
        id: 58,
        leccionId: 4,
        idioma: "japones",
        oracionOriginal: "いっしょにたべます。",
        traduccionCorrecta: ["Comemos", "juntos."],
        bancoPalabras: ["Comemos", "juntos.", "vivimos", "trabajamos", "separados"]
    },

    // =============================================
    // --- COREANO: Lecciones 2, 3 y 4 ---
    // =============================================
    {
        id: 59,
        leccionId: 2,
        idioma: "coreano",
        oracionOriginal: "저는 김민준입니다.",
        traduccionCorrecta: ["Me", "llamo", "Kim", "Minjun."],
        bancoPalabras: ["Me", "llamo", "Kim", "Minjun.", "llamas", "él", "se"]
    },
    {
        id: 60,
        leccionId: 2,
        idioma: "coreano",
        oracionOriginal: "저는 음악을 좋아해요.",
        traduccionCorrecta: ["Me", "gusta", "la", "música."],
        bancoPalabras: ["Me", "gusta", "la", "música.", "el", "cine", "libros"]
    },
    {
        id: 61,
        leccionId: 3,
        idioma: "coreano",
        oracionOriginal: "학교에 가요.",
        traduccionCorrecta: ["Voy", "a", "la", "escuela."],
        bancoPalabras: ["Voy", "a", "la", "escuela.", "casa", "al", "trabajo"]
    },
    {
        id: 62,
        leccionId: 3,
        idioma: "coreano",
        oracionOriginal: "오늘 날씨가 좋아요.",
        traduccionCorrecta: ["Hace", "buen", "tiempo", "hoy."],
        bancoPalabras: ["Hace", "buen", "tiempo", "hoy.", "mal", "frío", "calor"]
    },
    {
        id: 63,
        leccionId: 4,
        idioma: "coreano",
        oracionOriginal: "그녀는 내 절친한 친구예요.",
        traduccionCorrecta: ["Ella", "es", "mi", "mejor", "amiga."],
        bancoPalabras: ["Ella", "es", "mi", "mejor", "amiga.", "hermana", "prima"]
    },
    {
        id: 64,
        leccionId: 4,
        idioma: "coreano",
        oracionOriginal: "우리는 함께 먹어요.",
        traduccionCorrecta: ["Comemos", "juntos."],
        bancoPalabras: ["Comemos", "juntos.", "vivimos", "trabajamos", "separados"]
    }
];

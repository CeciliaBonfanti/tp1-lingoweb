export class Leccion {
  constructor(data) {
    // ID único autoincremental manejado por services
    this.id = data.id;

    // Información general
    this.titulo = data.titulo; // Ej: "Frases Básicas"
    this.idioma = data.idioma; // ej: 'Alemán', 'Chino'
    this.unidad = data.unidad; // Ej: 1

    // Contenido de la lección
    this.preguntas = data.preguntas ?? []; 
  }
}
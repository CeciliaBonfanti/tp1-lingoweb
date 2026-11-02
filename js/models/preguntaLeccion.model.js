export class PreguntaLeccion {
  constructor({ id, enunciado, opciones = [], respuestaCorrecta } = {}) {
    this.id = id;
    this.enunciado = enunciado;           // Ej: "¿Cómo se dice 'hola' en alemán?"
    this.opciones = opciones;             // Array de posibles respuestas (si es multiple choice)
    this.respuestaCorrecta = respuestaCorrecta; // La respuesta válida
  }
}
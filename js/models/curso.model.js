export class Curso {
  // El constructor recibe un objeto como parámetro. 
  // El `= {}` al final es un "escudo protector": si creas el curso sin pasarle nada 
  // (ej: new Curso()), JavaScript toma un objeto vacío por defecto para que no explote.
  constructor({ id, titulo, idioma, descripcion, nivel, lecciones: leccionesEntrantes = [] } = {}) {
    
    // Las llaves de arriba usan "destructuración": abren el objeto que le pasas 
    // y sacan cada propiedad para guardarla directamente en una variable.
    this.id = id;
    this.titulo = titulo;
    this.idioma = idioma;
    this.descripcion = descripcion;
    this.nivel = nivel;

    // Si la propiedad 'lecciones' no viene en el objeto (viene undefined),
    // el `= []` le asigna automáticamente un array vacío para que no rompa después.
    this.lecciones = leccionesEntrantes;
  }
}
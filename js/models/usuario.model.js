export class Usuario {
  constructor(id, nombre, email, password, xp, racha, vidas, leccionesCompletadas) {
    // ID único
    this.id = id; 
    
    // Datos personales
    this.nombre = nombre;
    this.email = email;
    this.password = password; 
    
    // Estadísticas del juego (si no vienen en la data, arrancan con valores por defecto)
    this.xp = xp ?? 0;
    this.racha = racha ?? 0;
    this.vidas = vidas ?? 3;

    this.leccionesCompletadas = leccionesCompletadas ?? [];
  }
}
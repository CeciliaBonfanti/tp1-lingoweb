

const contenedor = document.querySelector(".grilla-tarjetas");

for (const curso of cursos) {
  let textoBoton = "Continuar";
  if (curso.progreso === 0) {
    textoBoton = "Empezar";
  }

 const tarjeta = document.createElement("article");
  tarjeta.classList.add("tarjeta");
  tarjeta.innerHTML = `
    <div class="tarjeta-header">
      <img src="${curso.bandera}" alt="Bandera de ${curso.nombre}" class="bandera-img">
      <h2>${curso.nombre}</h2>
    </div>
    <p class="texto-chico">Progreso: ${curso.progreso}%</p>
    <p class="nivel-texto">Nivel: ${curso.nivel}</p>
    <a href="mapa.html?curso=${curso.id}" class="btn btn-primario">${textoBoton}</a>
  `;
  contenedor.appendChild(tarjeta);
}
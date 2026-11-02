const parametros = new URLSearchParams(window.location.search);
const cursoElegido = parametros.get("curso");

const curso = cursos.find(function (c) {
  return c.id === cursoElegido;
});

if (!curso) {
  document.querySelector("main").innerHTML = `
    <h1>No encontramos ese curso</h1>
    <a href="dashboard.html" class="btn btn-primario">Volver a Cursos</a>
  `;
  throw new Error("Curso no encontrado");
}

const titulo = document.querySelector("#titulo-curso");
titulo.textContent = curso.nombre;

const unidad = document.querySelector("#titulo-unidad");
unidad.textContent = curso.unidad;

const contenedor = document.querySelector(".grilla-tarjetas");

for (const leccion of curso.lecciones) {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("tarjeta");

  let icono = "";
  let accion = "";
  const enlace = `leccion.html?curso=${curso.id}&leccion=${leccion.numero}`;

  if (leccion.estado === "completada") {
    icono = "🟢";
    accion = `<a href="${enlace}" class="btn btn-secundario">Repasar</a>`;
  } else if (leccion.estado === "en curso") {
    icono = "🟡";
    accion = `<a href="${enlace}" class="btn btn-primario">Continuar</a>`;
  } else {
    icono = "🔒";
    tarjeta.classList.add("bloqueada");
    accion = `<p class="texto-chico">Completá la lección anterior para desbloquearla</p>`;
  }

  tarjeta.innerHTML = `
    <p>${icono} Lección ${leccion.numero}</p>
    <h2>${leccion.titulo}</h2>
    <p class="texto-chico">Estado: ${leccion.estado}</p>
    ${accion}
  `;
  contenedor.appendChild(tarjeta);
}
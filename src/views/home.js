import imagenPerfil from '../assets/fotoperfil.png';

export default function renderHome() {
  const appContainer = document.getElementById('app');
  appContainer.innerHTML = `
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <img src="${imagenPerfil}" alt="Foto de perfil" class="img-fluid">
          </div>
          <div class="col-md-8">
            <h2>Victor Jiménez Vaquero</h2>
            <p>Programador Frontend</p>
            <p>Apasionado por la programación y el diseño web. Grado Superior en Programación y experiencia sólida en el desarrollo de aplicaciones web utilizando React y otras tecnologías modernas.</p>
            <p>
              <a href="https://github.com/tuusuario" target="_blank">GitHub</a> |
              <a href="https://linkedin.com/in/tuusuario" target="_blank">LinkedIn</a>
            </p>
          </div>
        </div>
      </div>`;
}

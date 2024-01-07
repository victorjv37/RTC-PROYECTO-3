export default function renderExperience() {
  const appContainer = document.getElementById('app');
  appContainer.innerHTML = `
      <div class="container">
        <h1 class="mt-4 mb-4">Experiencia Laboral:</h1>

        <div class="row border-bottom pb-4 mb-4">
          <div class="col-md-4">
            <img src="https://via.placeholder.com/150" alt="Logo ABC Solutions" class="img-fluid">
          </div>
          <div class="col-md-8">
            <h2>ABC Solutions</h2>
            <p class="font-italic">Enero 2019 - Julio 2020</p>
            <p>Desarrollé aplicaciones móviles utilizando React Native. Colaboré con diseñadores y equipos de backend para implementar soluciones innovadoras y mejorar la experiencia del usuario.</p>
            <ul>
              <li>Desarrollo de aplicaciones móviles con React Native.</li>
              <li>Colaboración en el diseño de interfaces de usuario intuitivas.</li>
              <li>Optimización de rendimiento de aplicaciones para una experiencia fluida.</li>
            </ul>
            <p><a href="https://abcsolutions.com" target="_blank">Sitio web de ABC Solutions</a></p>
          </div>
        </div>

        <div class="row border-bottom pb-4 mb-4">
          <div class="col-md-4">
            <img src="https://via.placeholder.com/150" alt="Logo XYZ Innovations" class="img-fluid">
          </div>
          <div class="col-md-8">
            <h2>XYZ Innovations</h2>
            <p class="font-italic">Agosto 2020 - Marzo 2022</p>
            <p>Desempeñé el papel de líder técnico en proyectos de desarrollo web. Colaboré con equipos multidisciplinarios para implementar soluciones escalables y asegurar la calidad del código.</p>
            <ul>
              <li>Liderazgo técnico en proyectos de desarrollo web.</li>
              <li>Colaboración en la definición de arquitecturas de aplicaciones.</li>
              <li>Garantía de calidad del código y revisión de pares.</li>
            </ul>
            <p><a href="https://xyzinnovations.com" target="_blank">Sitio web de XYZ Innovations</a></p>
          </div>
        </div>

        <div class="row border-bottom pb-4 mb-4">
          <div class="col-md-4">
            <img src="https://via.placeholder.com/150" alt="Logo InnovateTech Solutions" class="img-fluid">
          </div>
          <div class="col-md-8">
            <h2>InnovateTech Solutions</h2>
            <p class="font-italic">Abril 2022 - Actualidad</p>
            <p>Dirijo equipos de desarrollo en la implementación de soluciones tecnológicas innovadoras. Colaboro estrechamente con clientes para entender sus necesidades y proporcionar soluciones personalizadas.</p>
            <ul>
              <li>Director de desarrollo en proyectos tecnológicos.</li>
              <li>Colaboración en la definición de estrategias tecnológicas.</li>
              <li>Gestión de relaciones con clientes para entender y abordar sus necesidades.</li>
            </ul>
            <p><a href="https://innovatetechsolutions.com" target="_blank">Sitio web de InnovateTech Solutions</a></p>
          </div>
        </div>

        <div class="row border-bottom pb-4 mb-4">
          <div class="col-md-4">
            <img src="https://via.placeholder.com/150" alt="Logo TechPros" class="img-fluid">
          </div>
          <div class="col-md-8">
            <h2>TechPros</h2>
            <p class="font-italic">Mayo 2022 - Presente</p>
            <p>Desarrollo de soluciones tecnológicas para clientes empresariales. Colaboración con equipos de ventas para entender los requisitos del cliente y proponer soluciones efectivas.</p>
            <ul>
              <li>Desarrollo de aplicaciones empresariales personalizadas.</li>
              <li>Colaboración con equipos de ventas para presentar propuestas a clientes potenciales.</li>
              <li>Optimización de procesos internos de desarrollo para mejorar la eficiencia.</li>
            </ul>
            <p><a href="https://techprosolutions.com" target="_blank">Sitio web de TechPros</a></p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <img src="https://via.placeholder.com/150" alt="Logo CodeCrafters" class="img-fluid">
          </div>
          <div class="col-md-8">
            <h2>CodeCrafters</h2>
            <p class="font-italic">Septiembre 2021 - Marzo 2023</p>
            <p>Desarrollo de software personalizado para clientes de diversas industrias. Participación activa en el diseño y la implementación de soluciones a medida.</p>
            <ul>
              <li>Desarrollo de software a medida para clientes corporativos.</li>
              <li>Colaboración en el diseño de arquitecturas de software eficientes.</li>
              <li>Participación en reuniones con clientes para entender sus necesidades y expectativas.</li>
            </ul>
            <p><a href="https://codecrafters.com" target="_blank">Sitio web de CodeCrafters</a></p>
          </div>
        </div>

        <h1 class="mt-4 mb-4">Educación:</h1>
        <p><strong>Título:</strong> Ingeniero en Informática</p>
        <p><strong>Institución:</strong> Universidad TechMaster</p>
        <p><strong>Fechas:</strong> Septiembre 2015 - Julio 2019</p>
        <p>Adquirí conocimientos sólidos en programación, algoritmos y desarrollo de software durante mi carrera universitaria.</p>
      </div>`;

  appContainer.classList.add('container', 'mt-5');
}

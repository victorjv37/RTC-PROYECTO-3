(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const l="/assets/fotoperfil-9f2e8505.png";function n(){const i=document.getElementById("app");i.innerHTML=`
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <img src="${l}" alt="Foto de perfil" class="img-fluid">
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
      </div>`}function c(){const i=document.getElementById("app");i.innerHTML=`
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
      </div>`,i.classList.add("container","mt-5")}function d(){const i=document.getElementById("app");i.innerHTML=`
    <div class="container">
      <h1 class="proyectos">Mis Proyectos</h1>

      <div class="project">
        <div class="project-details">
          <h2>Blog Personal</h2>
          <p>Desarrollo de un blog personal donde comparto conocimientos sobre desarrollo web y tecnología. Implementado utilizando React para una interfaz dinámica y moderna. El blog incluye artículos detallados sobre tecnologías emergentes y mejores prácticas en desarrollo web.</p>
          <p>Tecnologías: React, JavaScript, HTML, CSS.</p>
        </div>
      </div>

      <div class="project">
        <div class="project-details">
          <h2>Tienda en Línea</h2>
          <p>Creación de una tienda virtual con funcionalidades de carrito de compras y pagos en línea. Utilización intensiva de React para una experiencia de usuario fluida. La tienda en línea ofrece una amplia gama de productos, desde tecnología hasta artículos de moda, con una interfaz fácil de navegar y segura para realizar compras en línea.</p>
          <p>Tecnologías: React, Redux, Node.js, MongoDB.</p>
        </div>
      </div>

      <div class="project">
        <div class="project-details">
          <h2>Aplicación de Notas</h2>
          <p>Desarrollo de una aplicación para tomar notas y organizar tareas, con una interfaz intuitiva construida con React. La aplicación de notas permite a los usuarios crear, editar y eliminar notas, así como organizarlas en categorías. Además, se integra con Firebase para el almacenamiento en la nube y la sincronización de datos en tiempo real.</p>
          <p>Tecnologías: React, Firebase.</p>
        </div>
      </div>

      <div class="project">
        <div class="project-details">
          <h2>Plataforma de Aprendizaje</h2>
          <p>Desarrollo de una plataforma de aprendizaje en línea que ofrece cursos interactivos y recursos educativos. La plataforma incluye funcionalidades de registro de usuarios, seguimiento del progreso del curso y foros de discusión. Se utilizó una arquitectura basada en microservicios para garantizar la escalabilidad y el rendimiento.</p>
          <p>Tecnologías: Node.js, React, MongoDB.</p>
        </div>
      </div>

      <div class="project">
        <div class="project-details">
          <h2>Red Social de Viajes</h2>
          <p>Desarrollo de una red social centrada en viajes, donde los usuarios pueden compartir sus experiencias, fotos y consejos de viaje. La plataforma permite la creación de perfiles de usuario, la publicación de itinerarios y la interacción entre viajeros. Se implementó un sistema de recomendaciones basado en la ubicación y preferencias de viaje.</p>
          <p>Tecnologías: React, Firebase, GraphQL.</p>
        </div>
      </div>

    </div>`}function p(i){switch(i.preventDefault(),i.target.getAttribute("href")){case"/home":n();break;case"/experience":c();break;case"/projects":d();break}}document.querySelector("nav").addEventListener("click",p);n();

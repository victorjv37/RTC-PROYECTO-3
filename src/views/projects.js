export default function renderProjects() {
  const appContainer = document.getElementById('app');
  appContainer.innerHTML = `
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

    </div>`;
}

import renderHome from './views/home';
import renderExperience from './views/experience';
import renderProjects from './views/projects';

// Manejar la navegación y renderizar la vista correspondiente
function handleNavigation(event) {
  event.preventDefault();
  const linkHref = event.target.getAttribute('href');

  switch (linkHref) {
    case '/home':
      renderHome();
      break;
    case '/experience':
      renderExperience();
      break;
    case '/projects':
      renderProjects();
      break;
    default:
      break;
  }
}

document.querySelector('nav').addEventListener('click', handleNavigation);

renderHome();

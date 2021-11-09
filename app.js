const slideMenu = () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-list');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
  });

  navLinks.addEventListener('click', (event) => {
    if (navLinks.classList.contains('nav-active')) {
      if (event.target.tagName === 'A' || event.target.tagName === 'IMG') {
        navLinks.classList.remove('nav-active');
      }
    }
  });
};
slideMenu();
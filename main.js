// TriZ. — Main JS

// Hamburger menu
const menuBtn = document.getElementById('menu-btn');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

menuClose.addEventListener('click', closeMobileMenu);

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
}

// Fechar menu ao clicar fora
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) closeMobileMenu();
});

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Header: aumenta opacidade ao scrollar
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.backgroundColor = 'rgba(8, 12, 10, 0.95)';
  } else {
    nav.style.backgroundColor = 'rgba(8, 12, 10, 0.8)';
  }
});

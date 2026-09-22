const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  const menuLabel = menuToggle.querySelector('.sr-only');

  const setMenuState = (isOpen) => {
    const label = isOpen ? 'Fechar menu' : 'Abrir menu';
    menuToggle.setAttribute('aria-label', label);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    if (menuLabel) menuLabel.textContent = label;
    mainNav.classList.toggle('is-open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
  };

  const closeMenu = () => {
    setMenuState(false);
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    setMenuState(!isOpen);
  });

  mainNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 899) closeMenu();
  });

  closeMenu();
}

document.querySelectorAll('details').forEach((detail) => {
  detail.addEventListener('toggle', () => {
    if (!detail.open) return;
    document.querySelectorAll('details[open]').forEach((other) => {
      if (other !== detail) other.removeAttribute('open');
    });
  });
});

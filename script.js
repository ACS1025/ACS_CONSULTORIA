const toggle = document.getElementById('mobileMenuToggle');
const mobileNav = document.getElementById('mobileNav');

toggle.addEventListener('click', () => {
  const isOpen = mobileNav.style.display === 'flex';

  mobileNav.style.display = isOpen ? 'none' : 'flex';
  mobileNav.setAttribute('aria-hidden', isOpen);
  toggle.setAttribute('aria-expanded', !isOpen);
});

const menuIcon = document.querySelector('#menu-icon');
const backdrop = document.querySelector('.backdrop');
const mobileMenu = document.querySelector('.mobile-menu');
const closeIcon = document.querySelector('#close-icon');

const openMenu = () => {
  backdrop.style.display = 'block';
  mobileMenu.style.display = 'block';
};

const closeMenu = () => {
  backdrop.style.display = 'none';
  mobileMenu.style.display = 'none';
};

menuIcon.addEventListener('click', openMenu);
backdrop.addEventListener('click', closeMenu);
closeIcon.addEventListener('click', closeMenu);

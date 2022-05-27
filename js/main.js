let nav, hamburger, navCollapse;

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};

const prepareDOMElements = () => {
  nav = document.querySelector('.navbar');
  navBtn = document.querySelector('.hamburger');
  navCollapse = document.querySelector('.navbar-collapse');
};

const prepareDOMEvents = () => {
  addEventListener('scroll', addShadow);
  addShadow();
  navBtn.addEventListener('click', handleNav);
  document.addEventListener('click', closeNav);
};

const addShadow = () =>
  scrollY >= 25
    ? nav.classList.add('shadow-bg')
    : nav.classList.remove('shadow-bg');

const handleNav = () =>
  navBtn.ariaExpanded === 'true'
    ? navBtn.classList.add('is-active')
    : navBtn.classList.remove('is-active');

const closeNav = () => {
  if (navCollapse.classList.contains('show')) {
    navBtn.ariaExpanded = 'false';
    navBtn.classList.remove('is-active');
    navCollapse.classList.remove('show');
  }
};

document.addEventListener('DOMContentLoaded', main);

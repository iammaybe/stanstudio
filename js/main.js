let nav, navCollapse;

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};

const prepareDOMElements = () => {
  nav = document.querySelector('.navbar');
  navCollapse = document.querySelector('.navbar-collapse');
};

const prepareDOMEvents = () => {
  window.addEventListener('scroll', addShadow);
  document.addEventListener('click', closeNav);
};

const addShadow = () =>
  window.scrollY >= 30
    ? nav.classList.add('shadow-bg')
    : nav.classList.remove('shadow-bg');

const closeNav = () => {
  if (navCollapse.classList.contains('show')) {
    navCollapse.classList.remove('show');
  }
};

document.addEventListener('DOMContentLoaded', main);

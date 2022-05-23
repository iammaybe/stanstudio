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
  window.addEventListener('scroll', addShadow);
  navBtn.addEventListener('click', handleNav);
  document.addEventListener('click', closeNav);
};

const addShadow = () =>
  window.scrollY >= 25
    ? nav.classList.add('shadow-bg')
    : nav.classList.remove('shadow-bg');

const handleNav = () => {
  navBtn.classList.toggle('is-active');
};

const closeNav = () => {
  if (navCollapse.classList.contains('show')) {
    navCollapse.classList.remove('show');
    navBtn.classList.toggle('is-active');
  }
};

document.addEventListener('DOMContentLoaded', main);

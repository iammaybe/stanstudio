let nav, navBtn;

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};

const prepareDOMElements = () => {
  nav = document.querySelector('.nav');
  navBtn = document.querySelector('.hamburger');
};

const prepareDOMEvents = () => {
  window.addEventListener('scroll', addShadow);
  navBtn.addEventListener('click', handleNav);
};

const addShadow = () =>
  window.scrollY >= 30
    ? nav.classList.add('shadow-bg')
    : nav.classList.remove('shadow-bg');

document.addEventListener('DOMContentLoaded', main);

const handleNav = () => {
  navBtn.classList.toggle('is-active');
};

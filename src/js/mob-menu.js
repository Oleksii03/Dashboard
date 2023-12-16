const mobMenu = document.querySelector('.js-mob-menu');
const mobMenuBtn = document.querySelector('.js-mob-menu-btn');

mobMenuBtn.addEventListener('click', onMenuToggle);

function onMenuToggle (e) {
  mobMenu.classList.toggle('is-visible');
}
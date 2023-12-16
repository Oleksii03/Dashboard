const mobMenu = document.querySelector('.js-mob-menu');
const mobMenuBtn = document.querySelector('.js-mob-menu-btn');
const mobMenuBtnActive = document.querySelector('.js-mob-menu-icon');

console.log(mobMenuBtnActive);

mobMenuBtn.addEventListener('click', onMenuToggle);

function onMenuToggle (e) {
  mobMenu.classList.toggle('is-visible');
  mobMenuBtnActive.classList.toggle('active-menu__btn');
}
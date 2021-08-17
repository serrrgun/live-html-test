// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

const topMenuBtn = document.querySelector('.header__btn')
const topMenu = document.querySelector('.top-menu') 

topMenuBtn.addEventListener('click', () => {
  topMenuBtn.classList.toggle('header__btn--active')
  topMenu.classList.toggle('top-menu--open')
})

const searchBtn = document.querySelector('.menu__search')
const search = document.querySelector('.search')

searchBtn.addEventListener('click', () => {
  search.classList.toggle('search--open')
})

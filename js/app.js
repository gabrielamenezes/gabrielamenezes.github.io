// menu hamburguer
const $menuBtn = document.querySelector('.icon-menu');
const $menuList = document.querySelector('.menu');
const conteudo = document.querySelector('#home')


$menuBtn.addEventListener('click', function() {
    $menuList.classList.toggle('menu_move')
})
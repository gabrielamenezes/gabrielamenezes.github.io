// menu hamburguer
const $menuBtn = document.querySelector('.icon-menu');
const $menuList = document.querySelector('.menu');
const $content = document.querySelector('.content');


$menuBtn.addEventListener('click', function() {
    $menuList.classList.toggle('menu_move');
    $content.classList.toggle('content_move')
})

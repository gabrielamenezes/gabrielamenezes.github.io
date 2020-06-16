//menu hamburguer
const $menuBtn = document.querySelector('.icon-menu');
const $content = document.querySelector('.content');
const $body = document.querySelector('body')

/*ACIONANDO O MENU BURGUER*/
$menuBtn.addEventListener('click', function() {
    $body.classList.toggle('__move');
})

$content.addEventListener('click', function () {
    $body.classList.remove('__move');
})



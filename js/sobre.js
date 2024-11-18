//hamburger
document.getElementById("hamburger").addEventListener("click", function()  {
    document.body.classList.toggle('menu-active');
});
//
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

// Função para controlar o carrossel
function updateCarousel() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
}

function updateCarouselReverse() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
}

// Executa a função de rotação apenas se a tela for maior que 868px
next.addEventListener('click', function () {
    if (window.innerWidth > 868) {
        updateCarousel();
    }
});

prev.addEventListener('click', function () {
    if (window.innerWidth > 868) {
        updateCarouselReverse();
    }
});

// Seleciona todos os links de navegação
const navLinks = document.querySelectorAll('.nav-list a');

// Adiciona um evento de clique a cada link
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = this.href;
        }, 500);
    });
});

window.addEventListener('load', () => {
    document.body.classList.add('fade-in');
});

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-list a, .logo a');

    document.body.classList.add('fade-in');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetUrl = this.href;
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500);
        });
    });
});

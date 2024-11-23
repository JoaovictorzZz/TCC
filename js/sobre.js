//humburger
document.getElementById("hamburger").addEventListener("click", function()  {
    document.body.classList.toggle('menu-active');
});
//


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
let currentSlide = 0;
//função de passar slides 
function setSlide(index) {
  const slides = document.querySelector('.carousel-slides');
  const dots = document.querySelectorAll('.bot');

  // Atualiza a posição do carrossel
  slides.style.transform = `translateX(-${index * 100}%)`;

  // Atualiza os indicadores
  dots.forEach(bot => bot.classList.remove('active'));
  dots[index].classList.add('active');

  currentSlide = index;
}

// Inicializar com o primeiro slide ativo
document.addEventListener('DOMContentLoaded', () => setSlide(0));


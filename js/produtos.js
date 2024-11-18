 //hamburger
 document.getElementById("hamburger").addEventListener("click", function() {
    document.body.classList.toggle('menu-active');
});
// fim do hamburguer
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-list a, .logo a');

    // Adiciona a classe fade-in quando a página é carregada
    document.body.classList.add('fade-in');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do link
            
            const targetUrl = this.href;

            // Adiciona a classe fade-out ao corpo
            document.body.classList.add('fade-out');

            // Aguarda a animação completar antes de navegar
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500); // Ajuste este valor de acordo com a duração da animação
        });
    });
});

const carousel = document.querySelector('.carousel');
let currentIndex = 0;
const totalItems = document.querySelectorAll('.product-card').length;
const itemWidth = 270; // Largura do produto

function updateCarousel() {
    const maxTranslateX = 1340 // Limite máximo de pixels para o reset

    // Calcula o deslocamento atual com base no índice e largura do item
    const translateX = currentIndex * itemWidth;

    // Verifica se ultrapassou o limite de 1200px
    if (translateX >= maxTranslateX) {
        currentIndex = 0; // Reseta para o início
    }

    // Atualiza o deslocamento do carrossel
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function prevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
    updateCarousel();
}

function nextSlide() {
    currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
    updateCarousel();
}

   // Mostrar o botão 
   window.onscroll = function() {mostrarBotao()};

   function mostrarBotao() {
       const button = document.getElementById("topoButton");
       if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
           button.style.display = "block";
       } else {
           button.style.display = "none";
       }
   }

   // Função para ir ao topo 
   function voltarAoTopo() {
       window.scrollTo({top: 0, behavior: 'smooth'});
   }

   
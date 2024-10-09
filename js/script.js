//header
//hamburger
document.getElementById('hamburger').addEventListener('click', function() {
    document.body.classList.toggle('menu-active');
});
//

//carrosel
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".carousel-slide");
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");
    let currentIndex = 0;
    const autoPlayInterval = 5000; // Tempo entre os slides (5 segundos)
    let slideInterval;

    // Função para exibir o slide
    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.remove("current", "previous");
            if (i === index) {
                slide.classList.add("current");
            } else if (i === (index + slides.length - 1) % slides.length) {
                slide.classList.add("previous");
            }
        });
    };

    // Função para o próximo slide
    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    };

    // Função para o slide anterior
    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    };

    // Função para iniciar o autoplay
    const startAutoPlay = () => {
        slideInterval = setInterval(nextSlide, autoPlayInterval);
    };

    // Função para parar o autoplay
    const stopAutoPlay = () => {
        clearInterval(slideInterval);
    };

    // Eventos dos botões de navegação
    nextButton.addEventListener("click", () => {
        stopAutoPlay();  // Pausa o autoplay ao clicar no botão
        nextSlide();     // Muda para o próximo slide manualmente
        startAutoPlay(); // Reinicia o autoplay
    });

    prevButton.addEventListener("click", () => {
        stopAutoPlay();  // Pausa o autoplay ao clicar no botão
        prevSlide();     // Muda para o slide anterior manualmente
        startAutoPlay(); // Reinicia o autoplay
    });

    // Iniciar autoplay ao carregar a página
    startAutoPlay();
    showSlide(currentIndex); // Exibir o slide inicial
});

//


document.addEventListener("DOMContentLoaded", function() {
    const locSection = document.querySelector('.loc');
    const animatedElements = document.querySelectorAll('.animate-up');
    const button = document.querySelector('.btn');
    let buttonInView = false;

    const checkScroll = () => {
        const locSectionTop = locSection.getBoundingClientRect().top;
        const halfViewportHeight = window.innerHeight / 2;

        // Verificar se a seção "loc" está visível na tela
        if (locSectionTop < halfViewportHeight) {
            animatedElements.forEach(element => {
                element.classList.add('in-view');
            });
            buttonInView = true;
        } else {
            animatedElements.forEach(element => {
                element.classList.remove('in-view');
            });
            buttonInView = false;
        }
    };

    // Adicionar um ouvinte de evento de scroll à janela
    window.addEventListener('scroll', () => {
        checkScroll();
        // Adicionar ou remover classe 'hide' no botão
        if (buttonInView) {
            button.classList.remove('hide');
        } else {
            button.classList.add('hide');
        }
    });

    // Verificar a posição do scroll ao carregar a página
    checkScroll();
});


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

document.addEventListener('DOMContentLoaded', function() {
    const produtos = document.querySelectorAll('.produtos');

    function checkScroll() {
        produtos.forEach(function(produto) {
            const produtoTop = produto.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            if (produtoTop < viewportHeight - 50) { // Adiciona um pequeno offset
                produto.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Verifica inicialmente se algum produto já está na tela
});


document.addEventListener('DOMContentLoaded', function() {
    const produtos = document.querySelectorAll('.produtos');
    const hist = document.querySelector('.hist');

    function checkScroll() {
        produtos.forEach(function(produto) {
            const produtoTop = produto.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            if (produtoTop < viewportHeight - 50) { // Adiciona um pequeno offset
                produto.classList.add('show');
            }
        });

        const histTop = hist.getBoundingClientRect().top;

        if (histTop < window.innerHeight - 50) {
            hist.classList.add('show');
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Verifica inicialmente se algum elemento já está na tela
});



document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate-up');
    
    elements.forEach(function(element) {
        element.classList.add('in-view');
    });
});


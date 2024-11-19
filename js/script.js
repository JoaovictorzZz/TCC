//hamburger
document.getElementById("hamburger").addEventListener("click" , function(){
    document.body.classList.toggle("menu-active")
});
//

//carrosel
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".carousel-slide");
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");
    let currentIndex = 0;
    const autoPlayInterval = 5000; //slides 5 segundos
    let slideInterval;

    //Função exibir slide
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

    //Função proximo slide
    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    };

    //Função para slide anterior
    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    };

    //Função para autoplay
    const startAutoPlay = () => {
        slideInterval = setInterval(nextSlide, autoPlayInterval);
    };

    //Função para parar
    const stopAutoPlay = () => {
        clearInterval(slideInterval);
    };

    //Função para passar slides
    nextButton.addEventListener("click", () => {
        stopAutoPlay();  
        nextSlide();     
        startAutoPlay(); 
    });

    prevButton.addEventListener("click", () => {
        stopAutoPlay();  
        prevSlide();     
        startAutoPlay(); 
    });

   //Iniciar o autoplay da loja 
    startAutoPlay();
    showSlide(currentIndex); 
});

 //Mostrar botão 
window.onscroll = function() {mostrarBotao()};

function mostrarBotao() {
    const button = document.getElementById("topoButton");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}
//fim carrosel



  // Função para verificar se um elemento está visível na tela
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  // Função para adicionar a classe 'visible' aos produtos quando entrarem na tela
  function handleScroll() {
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
      if (isInViewport(product)) {
        product.classList.add('visible');
      }
    });
  }

  // Inicializa a função ao carregar a página e a cada rolagem
  window.addEventListener('load', handleScroll);
  window.addEventListener('scroll', handleScroll); 



// Função para ir ao topo 
function voltarAoTopo() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}


// mapa
// Função para verificar se um elemento está visível na tela
function estaNaTela(elemento) {
    const retangulo = elemento.getBoundingClientRect();
    return retangulo.top <= window.innerHeight && retangulo.bottom >= 0;
}

// Função para adicionar a classe 'in-view' ao mapa quando ele entrar na tela
function lidarComScroll() {
    const mapa = document.querySelector('.caixa-mapa');
    
    // Verifica se o elemento está visível na tela
    if (estaNaTela(mapa)) {
        mapa.classList.add('in-view');
    }
}

// Inicializa a função ao carregar a página e a cada rolagem
window.addEventListener('load', lidarComScroll); 
window.addEventListener('scroll', lidarComScroll); 

//mapa fim

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-list a, .logo a');

    
    document.body.classList.add('fade-in');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            
            const targetUrl = this.href;

         
            document.body.classList.add('fade-out');

            
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const produtos = document.querySelectorAll('.produtos');

    function checkScroll() {
        produtos.forEach(function(produto) {
            const produtoTop = produto.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            if (produtoTop < viewportHeight - 50) { 
                produto.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); 
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
    checkScroll(); 
});



document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate-up');
    
    elements.forEach(function(element) {
        element.classList.add('in-view');
    });
});

//carrosel
const carousel = document.querySelector('.carousel');
let currentIndex = 0;
const totalItems = document.querySelectorAll('.product-card').length;

function updateCarousel() {
    const containerWidth = document.querySelector('.carousel-container').clientWidth;
    const itemsPerView = Math.floor(containerWidth / 250);
    const translateX = currentIndex * (containerWidth / itemsPerView);

    carousel.style.transform = `translateX(-${translateX}px)`;
}

function prevSlide() {
    const containerWidth = document.querySelector('.carousel-container').clientWidth;
    const itemsPerView = Math.floor(containerWidth / 250);
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - itemsPerView;
    }
    updateCarousel();
}

function nextSlide() {
    const containerWidth = document.querySelector('.carousel-container').clientWidth;
    const itemsPerView = Math.floor(containerWidth / 250);
    if (currentIndex < totalItems - itemsPerView) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}

window.addEventListener('resize', updateCarousel);
updateCarousel();

//mapa
// Função para verificar se um elemento está visível na tela
function estaNaTela(elemento) {
    const retangulo = elemento.getBoundingClientRect();
    // Verifica se o topo do elemento está dentro da altura da janela
    return retangulo.top <= window.innerHeight && retangulo.bottom >= 0;
}

// Função para ativar a animação ao rolar a página
function lidarComScroll() {
    const mapa = document.querySelector('.caixa-mapa');
    
    // Se o mapa estiver visível na tela, adiciona a classe 'in-view'
    if (estaNaTela(mapa)) {
        mapa.classList.add('in-view');
    }
}

// Inicia a verificação quando a página carrega e a cada rolagem
window.addEventListener('load', lidarComScroll); 
window.addEventListener('scroll', lidarComScroll); 

// Inicializa o Google Maps
function initMap() {
    var mapOptions = {
        center: { lat: -23.5505, lng: -46.6333 }, 
        zoom: 12
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

// engrenagem 

// Seleciona todos os elementos que precisam de animação
const elementosAnimados = document.querySelectorAll('.animate-up');

// Função para verificar se o elemento está visível na tela
function estaNaTela(elemento) {
    const retangulo = elemento.getBoundingClientRect();
    return retangulo.top <= window.innerHeight && retangulo.bottom >= 0;
}

// Função para adicionar a classe 'in-view' aos elementos quando eles estiverem visíveis
function ativarAnimacao() {
    elementosAnimados.forEach(elemento => {
        if (estaNaTela(elemento)) {
            elemento.classList.add('in-view');
        }
    });
}

// Inicializa a animação ao carregar a página e durante o scroll
window.addEventListener('load', ativarAnimacao);
window.addEventListener('scroll', ativarAnimacao);









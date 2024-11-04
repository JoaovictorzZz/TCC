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

    //Função para passar o slide 
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

    // Iniciar autoplay  Daa página
    startAutoPlay();
    showSlide(currentIndex); 
});

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

// mapa
document.addEventListener("DOMContentLoaded", function() {
    const locSection = document.querySelector('.loc');
    const animatedElements = document.querySelectorAll('.animate-up');
    const button = document.querySelector('.btn');
    let buttonInView = false;

    const checkScroll = () => {
        const locSectionTop = locSection.getBoundingClientRect().top;
        const halfViewportHeight = window.innerHeight / 2;

       
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

   
    window.addEventListener('scroll', () => {
        checkScroll();
       
        if (buttonInView) {
            button.classList.remove('hide');
        } else {
            button.classList.add('hide');
        }
    });

    
    checkScroll();
});
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
    checkScroll(); // Verifica inicialmente se algum elemento já está na tela
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
// Inicializa o Google Maps
function initMap() {
    var mapOptions = {
        center: { lat: -23.5505, lng: -46.6333 }, 
        zoom: 12
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}







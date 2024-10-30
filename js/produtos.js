 //hamburger
document.getElementById('hamburger').addEventListener('click', function() {
    document.body.classList.toggle('menu-active');
});
// fim do hamburguer
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

// carrosel
const carousel = document.querySelector('.carousel');
let currentIndex = 0;
const totalItems = document.querySelectorAll('.product-card').length;
const itemWidth = 250;

function updateCarousel() {
    const maxTranslateX = 1100; 

   
    const translateX = currentIndex * itemWidth;

   
    if (translateX >= maxTranslateX) {
        currentIndex = 0; 
    }

   
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}
//funções para passar o slide 
function prevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
    updateCarousel();
}

function nextSlide() {
    currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
    updateCarousel();
}
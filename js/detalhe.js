//detalhesjs
//hamburger
document.getElementById("hamburger").addEventListener("click", function() {
    document.body.classList.toggle('menu-active');
});
//
//ativar o menu pra mobile do header
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
//pegando elementos e deixando armazenada em variaveis
const thumbs = document.querySelectorAll('.thumbs img');
const mainImage = document.querySelector('.main-image');

thumbs.forEach(thumb => {
    thumb.addEventListener('click', function() {
        mainImage.src = this.src;
    });
});

//função de zoom e mudar as fotos do produtos
document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.querySelector(".product-gallery .main-image");
    const zoomLente = document.createElement("div");
    zoomLente.classList.add("zoom-lente");
    document.querySelector(".product-gallery").appendChild(zoomLente);

   
    mainImage.addEventListener("mousemove", function(e) {
        const rect = mainImage.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;  

        zoomLente.style.display = "block";

        let lenteX = x - zoomLente.offsetWidth / 1.5;
        let lenteY = y - zoomLente.offsetHeight / 1.5;

        if (lenteY < 20) { 
            lenteY = 20;  
        }

        if (lenteX < 0) {
            lenteX = 0; 
        } else if (lenteX > mainImage.offsetWidth - zoomLente.offsetWidth) {
            lenteX = mainImage.offsetWidth - zoomLente.offsetWidth; 
        }
        zoomLente.style.left = `${lenteX}px`;
        zoomLente.style.top = `${lenteY}px`;
        
        zoomLente.style.backgroundImage = `url(${mainImage.src})`;
        const zoomX = (x / mainImage.width) * 100;
        const zoomY = (y / mainImage.height) * 100;
        zoomLente.style.backgroundPosition = `${zoomX}% ${zoomY}%`;
    });

    
    mainImage.addEventListener("mouseleave", function() {
        zoomLente.style.display = "none";
    });
});


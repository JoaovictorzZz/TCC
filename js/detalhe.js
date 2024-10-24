//
//hamburger
document.getElementById('hamburger').addEventListener('click', function() {
    document.body.classList.toggle('menu-active');
});
//
const thumbs = document.querySelectorAll('.thumbs img');
const mainImage = document.querySelector('.main-image');

thumbs.forEach(thumb => {
    thumb.addEventListener('click', function() {
        mainImage.src = this.src;
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.querySelector(".product-gallery .main-image");
    const zoomLente = document.createElement("div");
    zoomLente.classList.add("zoom-lente");
    document.querySelector(".product-gallery").appendChild(zoomLente);

    // Evento de movimento do mouse sobre a imagem principal
    mainImage.addEventListener("mousemove", function(e) {
        const rect = mainImage.getBoundingClientRect();
        const x = e.clientX - rect.left; // Posição X do mouse em relação à imagem
        const y = e.clientY - rect.top;  // Posição Y do mouse em relação à imagem

        // Ajuste a posição da lente (zoom) para ficar mais abaixo
        zoomLente.style.display = "block";

        // Calcular a posição da lente, ajustando para que não fique muito no topo
        let lenteX = x - zoomLente.offsetWidth / 1.5;
        let lenteY = y - zoomLente.offsetHeight / 1.5;

        // Verificar se o zoom está muito próximo do topo e ajustá-lo mais para baixo
        if (lenteY < 20) { // Define um limite mínimo para a posição Y
            lenteY = 20;  // A lente nunca ficará acima de 20px do topo da página
        }

        // Aqui você pode ajustar a posição da lente para o lado também, se necessário
        if (lenteX < 0) {
            lenteX = 0; // Não deixar a lente sair do lado esquerdo
        } else if (lenteX > mainImage.offsetWidth - zoomLente.offsetWidth) {
            lenteX = mainImage.offsetWidth - zoomLente.offsetWidth; // Não deixar a lente sair do lado direito
        }

        zoomLente.style.left = `${lenteX}px`;
        zoomLente.style.top = `${lenteY}px`;

        // Definir a imagem de fundo da lente e ajustar a posição de zoom
        zoomLente.style.backgroundImage = `url(${mainImage.src})`;
        const zoomX = (x / mainImage.width) * 100;
        const zoomY = (y / mainImage.height) * 100;
        zoomLente.style.backgroundPosition = `${zoomX}% ${zoomY}%`;
    });

    // Esconder a lente quando o mouse sair da imagem
    mainImage.addEventListener("mouseleave", function() {
        zoomLente.style.display = "none";
    });
});


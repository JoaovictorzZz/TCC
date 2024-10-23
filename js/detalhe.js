const thumbs = document.querySelectorAll('.thumbs img');
const mainImage = document.querySelector('.main-image');

thumbs.forEach(thumb => {
    thumb.addEventListener('click', function() {
        mainImage.src = this.src;
    });
});

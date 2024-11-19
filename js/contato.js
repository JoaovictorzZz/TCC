//hamburger
document.getElementById("hamburger").addEventListener("click", function() {
    document.body.classList.toggle('menu-active');
});

//
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
//funcão para redirecionar apos o o envio do email em contatos 
function enviarEmail(){
    //Email
    window.location.href = "mailto:lidereq@hotmail.com";

    //Vai pra pagina obrigado apos o click dps de um tempo 
    setTimeout(function(){
        window.location.href = "../templates/obrigado.html";
    },2000); //tempo
}



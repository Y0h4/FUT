document.addEventListener('DOMContentLoaded', () => {
    console.log("Site de Futebol carregado!");
    // Exemplo de alerta ao clicar em uma notícia
    const noticias = document.querySelectorAll('#noticias article h3');
    noticias.forEach(noticia => {
        noticia.addEventListener('click', () => {
            alert(`Você clicou na notícia: ${noticia.innerText}`);
        });
    });
});

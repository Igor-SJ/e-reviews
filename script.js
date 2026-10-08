const botoes = document.querySelectorAll("[data-filtro]");
const cards = document.querySelectorAll(".total-card");
    
botoes.forEach(botao => {
    botao.addEventListener("click", () => {

        const filtro = botao.dataset.filtro;

        cards.forEach(card => {
            const tipo = card.dataset.tipo;

            if (filtro === "todos" || tipo === filtro) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

    });
});
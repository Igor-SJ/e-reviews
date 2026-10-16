const searchBar = document.getElementById("search-input");
const items = document.querySelectorAll(".total-card");

  searchBar.addEventListener("input", function () {
    let searchText = searchBar.value.toLowerCase();

    items.forEach(function (item) {
    const text = item.textContent.toLowerCase();

      if (text.includes(searchText)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
        }
  });
});


const filterButtons = document.querySelectorAll("#filtros button");
const cards = document.querySelectorAll(".total-card");
const noResultsMessage = document.querySelector("#mensagem-sem-resultados");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Get the selected category
    const filter = button.dataset.filter;
    let visibleCards = 0;

    // Show or hide each card
    cards.forEach(card => {
      const category = card.dataset.category;

      if (filter === "todos" || category === filter) {
        card.classList.remove("hidden");
        visibleCards++;
      } else {
        card.classList.add("hidden");
      }
    });

    // Show the message if no cards match
    if (noResultsMessage) {
      noResultsMessage.classList.toggle("hidden", visibleCards > 0);
    }

    // Update the active button
    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
  });
});

 const textarea = document.getElementById("conteudo-bar");

  textarea.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  });

const sorte = document.getElementById("sorte");

sorte.addEventListener("click", function () {

 const links = [];

  cards.forEach(function (card) {
    const link = card.querySelector("a[href]");

    if (link) {
      links.push(link.href);
    }
  });

  // Verifica se existem artigos disponíveis
  if (links.length === 0) {
    alert("Nenhum artigo disponível para sorteio!");
    return;
  }

   // Escolhe um índice aleatório
  const indice = Math.floor(Math.random() * links.length);

  // Abre o artigo sorteado
  window.location.href = links[indice];

})

const button = document.getElementById("saiba-mais-botao");
const menu = document.getElementById("saiba-mais");

if (button && menu) {
  button.addEventListener("click", function (event) {
    event.stopPropagation();

    const isOpen = menu.classList.toggle("show");
    button.setAttribute("aria-expanded", isOpen);
  });

  // Fecha ao clicar fora do dropdown
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown")) {
      menu.classList.remove("show");
      button.setAttribute("aria-expanded", "false");
    }
  });

  // Fecha ao pressionar Escape
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      menu.classList.remove("show");
      button.setAttribute("aria-expanded", "false");
      button.focus();
    }
  });
} else {
  console.error("Botão ou menu dropdown não encontrado.");
};

function descerTela() {
            document.getElementById("saiba-mais-botao").scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
}
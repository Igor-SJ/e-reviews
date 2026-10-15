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
  });s


const button = document.getElementById("saiba-mais-botao");
const menu = document.getElementById("saiba-mais");

button.addEventListener("click", function () {
    const isOpen = menu.classList.toggle("show");
  button.setAttribute("aria-expanded", isOpen);
});

// Close the menu when clicking outside it
document.addEventListener("click", function (event) {
  if (!event.target.closest(".dropdown")) {
    menu.classList.remove("show");
    button.setAttribute("aria-expanded", "false");
  }
});

// Close the menu when pressing Escape
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    menu.classList.remove("show");
    button.setAttribute("aria-expanded", "false");
    button.focus();
  }
});
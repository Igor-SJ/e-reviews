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
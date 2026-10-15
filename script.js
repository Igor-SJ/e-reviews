const filterButtons = document.querySelectorAll("#filtros button");
const cards = document.querySelectorAll(".total-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Get the selected category
    const filter = button.dataset.filter;

    // Show or hide each card
    cards.forEach(card => {
      const category = card.dataset.category;

      if (filter === "all" || category === filter) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });

    // Update the active button
    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
  });
});
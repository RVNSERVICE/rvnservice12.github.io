document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll(".filter");
  const items = document.querySelectorAll(".gallery-item");

  filters.forEach(button => {
    button.addEventListener("click", () => {
      filters.forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;

      items.forEach(item => {
        const show = filter === "all" || item.classList.contains(filter);
        item.classList.toggle("is-hidden", !show);
      });
    });
  });
});

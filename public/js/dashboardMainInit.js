// Dark - Light theme selection /////////////////////////////////////////////////////////////////////
function applyTheme(theme) {
  document.body.classList.remove("theme-auto", "theme-light", "theme-dark");
  document.body.classList.add(`theme-${theme}`);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "auto";
  
  applyTheme(savedTheme);

  for (const optionElement of document.querySelectorAll("#selTheme option")) {
    optionElement.selected = savedTheme === optionElement.value;
  }

  document.querySelector("#selTheme").addEventListener("change", function () {
    localStorage.setItem("theme", this.value);
    applyTheme(this.value);
  });
});

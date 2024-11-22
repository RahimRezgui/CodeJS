function applyTheme(theme) {
  document.body.classList.remove("theme-auto", "theme-light", "theme-dark");
  document.body.classList.add(`theme-${theme}`);
  if(window.location.href.toString().toLowerCase().includes("odejs?file=")){
    changePrismThemeOnLoad()
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark"; 
  applyTheme(savedTheme);
  for (const optionElement of document.querySelectorAll("#selTheme option")) {
    optionElement.selected = savedTheme === optionElement.value;
  }
  if(!document.querySelector("#selTheme")){
    return
  }else{
    document.querySelector("#selTheme").addEventListener("change", function () {
      localStorage.setItem("theme", this.value);
      applyTheme(this.value);
    });
  }
});

function applyThemeOnClick(themeElement){
  const newTheme = event.target.value.toLowerCase();
  localStorage.setItem("theme", newTheme);
  applyTheme(newTheme);
}

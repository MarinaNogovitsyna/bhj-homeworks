const editor = document.getElementById("editor");
const btnClear = document.getElementById("clear");

if (localStorage.text) {
  editor.value = localStorage.text;
}

editor.addEventListener("change", (e) => {
  localStorage.setItem("text", e.target.value);
});

btnClear.addEventListener("click", () => {
  localStorage.removeItem("text");
  editor.value = "";
});

const modal = document.getElementById("subscribe-modal");
const close = document.querySelector(".modal__close");

// document.cookie = 'close=true; Expires=Thu, 01 Jan 1970 00:00:00 GMT'

if (!isClosed()) {
  modal.classList.add("modal_active");
}

close.addEventListener("click", () => {
  document.cookie = "close=true";
  modal.classList.remove("modal_active");
});

function isClosed() {
  if (document.cookie.length && document.cookie.indexOf("close=true") !== -1) {
    return true;
  }
  return false;
}

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", addVisibilityElement);

function addVisibilityElement() {
  for (const rev of reveals) {
    if (isVisible(rev)) {
      rev.classList.add("reveal_active");
    }
  }
}

function isVisible(el) {
  const { top, bottom } = el.getBoundingClientRect();
  if (bottom < 0) {
    return false;
  }
  if (top > window.innerHeight) {
    return false;
  }
  return true;
}

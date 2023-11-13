const element = document.querySelectorAll(".has-tooltip");

const tooltip = document.createElement("div");
tooltip.classList.add("tooltip");

for (let el of element) {
  el.addEventListener("click", (event) => {
    event.preventDefault();
    if (tooltip.textContent === el.title) {
      tooltip.classList.toggle("tooltip_active");
      return;
    }
    tooltip.textContent = el.title;
    addPosition(el, tooltip)
    // tooltip.style.top = `${el.getBoundingClientRect().top + 20}px`;
    // tooltip.style.left = `${el.getBoundingClientRect().left}px`;
    tooltip.classList.add("tooltip_active");
    el.insertAdjacentElement("afterend", tooltip);
    // for (let tool of tooltip){
    //     if (tooltip.textContent !== el.title){
    //         tooltip.classList.remove('tooltip_active');
    //     }
    // }
  });
}

function addPosition(el, tooltip){
    if (el.dataset.position === 'top'){
        tooltip.style.top = `${el.getBoundingClientRect().top - 30}px`;
        tooltip.style.left = `${el.getBoundingClientRect().left}px`;
    }
    if(el.dataset.position === 'right'){
        tooltip.style.top = `${el.getBoundingClientRect().top}px`;
        tooltip.style.left = `${el.getBoundingClientRect().right + 5}px`;
    }
    if(el.dataset.position === 'bottom'){
        tooltip.style.top = `${el.getBoundingClientRect().bottom + 5}px`;
        tooltip.style.left = `${el.getBoundingClientRect().left}px`;
    }
    if(el.dataset.position === 'left'){
        tooltip.style.top = `${el.getBoundingClientRect().top}px`;
        tooltip.style.right = `${document.documentElement.getBoundingClientRect().width - el.getBoundingClientRect().right + el.getBoundingClientRect().width + 5}px`
    }
}
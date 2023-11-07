const allRotators = document.querySelectorAll(".rotator");
console.log(allRotators);
for (const rotator of allRotators) {
  let elem = rotator.firstElementChild;
  const interval = setInterval(() => {
    if (elem === rotator.firstElementChild) {
      elem.classList.add("rotator__case_active");
      rotator.lastElementChild.classList.remove("rotator__case_active");
      elem = elem.nextElementSibling;
    } else if (elem === rotator.lastElementChild) {
      elem.classList.toggle("rotator__case_active");
      elem.previousElementSibling.classList.remove("rotator__case_active");
      elem = rotator.firstElementChild;
    } else {
      elem.classList.toggle("rotator__case_active");
      elem.previousElementSibling.classList.remove("rotator__case_active");
      elem = elem.nextElementSibling;
    }
    elem.style.color = elem.dataset.color
    console.log(elem.dataset.speed);
  }, parseInt(elem.dataset.speed));
}
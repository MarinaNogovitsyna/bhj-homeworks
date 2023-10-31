const dropdownElement = document.querySelector(".dropdown__value");
let dropdownValue = dropdownElement.textContent;
const dropdowList = document.querySelector(".dropdown__list");
const dropdownLink = document.getElementsByClassName("dropdown__link");
const array = Array.from(dropdownLink);

dropdownElement.addEventListener("click", open);
for (let i = 0; i < array.length; i++){
    array[i].addEventListener("click", click)
}

function open () {
    dropdowList.classList.add("dropdown__list_active")
}

function click (event) {
    event.preventDefault();
    dropdownValue = this.textContent;
    dropdownElement.textContent = dropdownValue;
    dropdowList.classList.remove("dropdown__list_active")
}
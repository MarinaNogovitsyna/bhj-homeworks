const allButtons = Array.from(document.querySelectorAll(".font-size"));
const book = document.getElementById("book");

allButtons.forEach((el) =>
  el.addEventListener("click", (event) => changeClassesFs(el, event))
);

function changeClassesFs(el, event) {
  event.preventDefault();
  el.classList.add("font-size_active");

  for (let i = 0; i < allButtons.length; i++) {
    if (allButtons[i] !== el) {
      allButtons[i].classList.remove("font-size_active");
    }
  }

  if (el.classList.contains("font-size_small")) {
    book.classList.add("book_fs-small");
    book.classList.remove("book_fs-big");
  } else if (el.classList.contains("font-size_big")) {
    book.classList.add("book_fs-big");
    book.classList.remove("book_fs-small");
  } else {
    book.classList.remove("book_fs-big");
    book.classList.remove("book_fs-small");
  }
}



const allButtonsOfColor = Array.from(
  document.querySelectorAll(".book__control_color .color")
);

allButtonsOfColor.forEach((el) =>
  el.addEventListener("click", (event) => changeClassesColor(el, event))
);

function changeClassesColor(el, event) {
  event.preventDefault();
  el.classList.add("color_active");
  for (let i = 0; i < allButtonsOfColor.length; i++) {
    if (allButtonsOfColor[i] !== el) {
      allButtonsOfColor[i].classList.remove("color_active");
    }
  }
  book.classList.add(`book_color-${el.dataset.textColor}`);
  deleteClass(el, allButtonsOfColor, 'book_color-', 'textColor');
}


const allButtonsOfBg = Array.from(
    document.querySelectorAll(".book__control_background .color")
  );

  allButtonsOfBg.forEach((el) =>
  el.addEventListener("click", (event) => changeClassesBg(el, event))
);

function changeClassesBg(el, event){
    event.preventDefault();
    el.classList.add("color_active");
  for (let i = 0; i < allButtonsOfBg.length; i++) {
    if (allButtonsOfBg[i] !== el) {
        allButtonsOfBg[i].classList.remove("color_active");
    }
  }
  book.classList.add(`book_bg-${el.dataset.bgColor}`);
  deleteClass(el, allButtonsOfBg, 'book_bg-', 'bgColor');
}


function deleteClass(el, allDataset, startOfClassName, dataName) {
    let arrDataset = allDataset.map((el) => el.dataset[dataName]);
    console.log(arrDataset)
    for (let i = 0; i < arrDataset.length; i++) {
      if (arrDataset[i] !== el.dataset[dataName]) {
        book.classList.remove(`${startOfClassName + arrDataset[i]}`);
      }
    }
  }
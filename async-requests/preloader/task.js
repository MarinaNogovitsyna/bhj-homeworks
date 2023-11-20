const loader = document.getElementById("loader");
const items = document.getElementById("items");

const fetchAll = async () => {
  try {
    const response = await fetch(
      "https://students.netoservices.ru/nestjs-backend/slow-get-courses",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    loader.classList.remove("loader_active");
    addValutes(data);
  } catch (err) {
    console.log(err);
  }
};

function addValutes(data) {
  for (valute in data.response.Valute) {
    const item = document.createElement("div");
    items.insertAdjacentElement("afterbegin", item);
    item.outerHTML = `<div class="item">
        <div class="item__code">
                ${data.response.Valute[valute].CharCode}
            </div>
            <div class="item__value">
            ${data.response.Valute[valute].Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
      </div>`;
  }
}

fetchAll();

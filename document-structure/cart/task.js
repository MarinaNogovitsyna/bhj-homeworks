const btnDecrement = document.querySelectorAll(
  ".product__quantity-control_dec"
);
const btnIncrement = document.querySelectorAll(
  ".product__quantity-control_inc"
);
const btnAdd = document.querySelectorAll(".product__add");
const products = document.querySelectorAll(".product");
const cartProducts = document.querySelector(".cart__products");
const cart = document.querySelector(".cart");
cart.classList.add("cart-hidden");

for (let el of btnIncrement) {
  el.addEventListener("click", () => {
    el.previousElementSibling.innerHTML =
      +el.previousElementSibling.innerHTML + 1;
  });
}

for (let el of btnDecrement) {
  el.addEventListener("click", () => {
    if (el.nextElementSibling.innerHTML != 1) {
      el.nextElementSibling.innerHTML = +el.nextElementSibling.innerHTML - 1;
    }
  });
}

for (let product of products) {
  const btnAdd = product.lastElementChild.lastElementChild.lastElementChild;
  btnAdd.addEventListener("click", () => {
    const productInCard = Array.from(cartProducts.children).find(
      (item) => item.dataset.id === product.dataset.id
    );
    console.log(productInCard);
    if (productInCard) {
      productInCard.lastElementChild.textContent =
        +productInCard.lastElementChild.textContent +
        +product.lastElementChild.firstElementChild.children[1].children[1]
          .textContent;
      animation(product, productInCard);
    } else {
      addProduct(product);
    }
  });
}

function addProduct(product) {
  const cartProduct = document.createElement("div");
  cartProducts.insertAdjacentElement("afterbegin", cartProduct);
  cartProduct.outerHTML = `<div class="cart__product" data-id="${product.dataset.id}">
  <img class="cart__product-image" src="${product.children[1].src}">
  <div class="cart__product-delete" onClick="deleteCartProduct(this.parentElement)">x</div>
  <div class="cart__product-count">${product.lastElementChild.firstElementChild.children[1].children[1].textContent}</div>
</div>`;
  cart.classList.remove("cart-hidden");
}

function deleteCartProduct(product) {
  product.remove();
  if (!cartProducts.children.length) {
    cart.classList.add("cart-hidden");
  }
}

function animation(product, cartProduct) {
  const copy = product.children[1].cloneNode(false);
  const topProduct = product.children[1].getBoundingClientRect().top;
  const leftProduct = product.children[1].getBoundingClientRect().left;
  let topCartProduct =
    cartProduct.firstElementChild.getBoundingClientRect().top;
  let leftCartProduct =
    cartProduct.firstElementChild.getBoundingClientRect().left;
  let x = leftCartProduct - leftProduct;
  let y =
    topCartProduct > 0
      ? topProduct - topCartProduct
      : Math.abs(topCartProduct) + topProduct;
  let step = 100;
  let stepX = x / step;
  let stepY = y / step;
  document.body.insertAdjacentElement("afterbegin", copy);
  copy.classList.add("product-shadow");
  copy.style.zIndex = 2;
  let top =
    topProduct + Math.abs(document.documentElement.getBoundingClientRect().top);
  let left = leftProduct;
  copy.style.top = `${top}px`;
  copy.style.left = `${leftProduct}px`;

  const interval = setInterval(() => {
    if (!step) {
      clearInterval(interval);
      copy.remove();
    }
    top -= stepY;
    left += stepX;
    copy.style.top = `${top}px`;
    copy.style.left = `${left}px`;
    step--;
  }, 1);
}

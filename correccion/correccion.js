function handleSubmit(e) {
  e.preventDefault();
  search(e.target);
}

function search(e) {
  limpiarProductos();
  const productSearch = e.buscar.value;
  elFetch(productSearch);
}

function limpiarProductos() {
  const resultsItems = document.querySelector(".results-items");
  resultsItems.innerHTML = "";
}

function cloneAndDisplayProducts(productCollection) {
  const resultsItems = document.querySelector(".results-items");
  const template = document.querySelector("#result-template");

  for (const product of productCollection.results) {
    const clone = template.content.cloneNode(true);
    const resultsCountNum = document.querySelector(".results-count-num");
    resultsCountNum.textContent = productCollection.paging.total;
    const resultItemImg = clone.querySelector(".result-item-img");
    resultItemImg.src = product.thumbnail;

    const resultName = clone.querySelector(".result-name");
    resultName.textContent = product.title;

    const resultCondition = clone.querySelector(".result-condition");
    resultCondition.textContent = product.condition;

    const quantitySoldNum = clone.querySelector(".quantity-solds-num");
    quantitySoldNum.textContent = product.sold_quantity;

    const priceNum = clone.querySelector(".price-num");
    priceNum.textContent = "$" + product.price;
    resultsItems.appendChild(clone);
  }
}

function elFetch(product) {
  fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + product)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      cloneAndDisplayProducts(res);
    });
}

function main() {
  const formEl = document.querySelector(".form");
  formEl.addEventListener("submit", handleSubmit);
}

main();

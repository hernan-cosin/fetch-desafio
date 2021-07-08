function main() {
  const formEl = document.querySelector(".form");
  const inputEl = document.querySelector(".input-search");

  function handleSearch(e) {
    e.preventDefault();

    const templateResultados = document.querySelector("#results");

    const laUrl = "https://api.mercadolibre.com/sites/MLA/search?q=";

    const laBusqueda = inputEl.value;

    const laUrlConLaBusqueda = laUrl + laBusqueda;
    // console.log(laUrlConLaBusqueda)

    fetch(laUrlConLaBusqueda)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // var results = document.querySelector(".results");
        // var template = document.querySelector("#results-template");

        // var clone = template.content.cloneNode(true);
        // clone.textContent = "Resultados: " + res.paging.total;
        // results.appendChild(clone);

        // var productCard = document.querySelector(".product-card");

        // var productTemplate = document.querySelector("#product");

        // productCard.style.border = "1px solid black";
        // var cloneProduct = productTemplate.content.cloneNode(true);
        // const img = cloneProduct.querySelector("img");
        // img.src = res.results[0].thumbnail;

        // productCard.appendChild(img);

        // const info = cloneProduct.querySelector(".info");
        // const productInfo = cloneProduct.querySelector(".product-info");
        // const productName = cloneProduct.querySelector(".product-name");
        // productName.textContent = res.results[0].title;
        // productInfo.appendChild(productName);
        // info.appendChild(productInfo);
        // const condition = cloneProduct.querySelector(".condition");
        // condition.textContent = res.results[0].condition;
        // productInfo.appendChild(condition);

        // const solds = cloneProduct.querySelector(".solds");
        // const sold = cloneProduct.querySelector(".sold");

        // sold.textContent = "Vendidos: " + res.results[0].sold_quantity;
        // solds.appendChild(sold);
        // info.appendChild(solds);

        // productCard.appendChild(info);

        // const price = cloneProduct.querySelector(".price");
        // price.textContent =
        //   res.results[0].currency_id + " " + res.results[0].price;

        // productCard.appendChild(price);
        var results = document.querySelector(".results");
        var template = document.querySelector("#results-template");

        var clone = template.content.cloneNode(true);
        clone.textContent = "Resultados: " + res.paging.total;
        results.appendChild(clone);

        contador = 0;
        while (contador < 5) {
          var productCard = document.querySelector(".product-card");

          var productTemplate = document.querySelector("#product");
          //   var item = document.querySelector(".item");
          const divItem = document.createElement("a");

          contadorClase = 0;
          divItem.classList = "item" + contadorClase;
          divItem.classList = "item";
          divItem.setAttribute("href", res.results[contador].permalink);
          divItem.setAttribute("target", "_blank");
          contadorClase = +1;

          divItem.style.border = "1px solid black";
          var cloneProduct = productTemplate.content.cloneNode(true);
          const img = cloneProduct.querySelector("img");
          img.src = res.results[contador].thumbnail;

          divItem.appendChild(img);

          const info = cloneProduct.querySelector(".info");
          const productInfo = cloneProduct.querySelector(".product-info");
          const productName = cloneProduct.querySelector(".product-name");
          productName.textContent = res.results[contador].title;
          productInfo.appendChild(productName);
          info.appendChild(productInfo);
          const condition = cloneProduct.querySelector(".condition");
          condition.textContent = res.results[contador].condition;
          productInfo.appendChild(condition);

          const solds = cloneProduct.querySelector(".solds");
          const sold = cloneProduct.querySelector(".sold");

          sold.textContent = "Vendidos: " + res.results[contador].sold_quantity;
          solds.appendChild(sold);
          info.appendChild(solds);

          divItem.appendChild(info);

          const price = cloneProduct.querySelector(".price");
          price.textContent =
            res.results[contador].currency_id +
            " " +
            res.results[contador].price;

          divItem.appendChild(price);
          productCard.appendChild(divItem);
          contador++;
        }
      });

    // fetch("https://api.mercadolibre.com/sites/MLA/search?q=Motorola%20G6")
    // .then(res=>{
    //     return res.json()
    // })
    // .then(res=>{
    //     // resultados.textContent = "Resultados:"
    //     console.log(res)
    // })
  }

  formEl.addEventListener("submit", handleSearch);
}

main();

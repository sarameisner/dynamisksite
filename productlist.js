// const urlParams = new URLSearchParams(window.location.search);
// const category = urlParams.get("category");
fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder på showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  // console.log(product);
  // hent template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector(".product").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("h2").textContent = product.productdisplayname;
  copy.querySelector(".brand").textContent = product.brandname;
  copy.querySelector(".price").textContent = `${product.price},-`;

  copy.querySelector(".buy_btn").href = `product.html?id=${product.id}`;
  //appende

  if (product.soldout === 1) {
    copy.querySelector("article").classList.add("soldout");
  }
  if (product.discount != null) {
    copy.querySelector("article").classList.add("discount");
  }

  document.querySelector(".grid_1-1-1").appendChild(copy);
}

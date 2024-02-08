const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/products/" + id;

fetch(url)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  document.querySelector(".main_productinfo h3").textContent = product.productdisplayname;
  document.querySelector(".main_productinfo .modelname").textContent = product.productdisplayname;
  document.querySelector(".main_productinfo .season").textContent = product.season;
  document.querySelector(".main_productinfo .product_price").textContent = product.price;
  document.querySelector(".main_productinfo .inventorynr").textContent = product.id;
  document.querySelector(".product_img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}

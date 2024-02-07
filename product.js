// const urlParams = new URLSearchParams(window.location.search);
// const myId = urlParams.get("id");
// const url = "https://kea-alt-del.dk/t7/api/products/" + myId;

// fetch(url)
//   .then((response) => response.json())
//   .then(dataReceived);

// function dataReceived(data) {
//   //do something with the data
//   console.log(data);
//   console.log("her kommer brand: ", data.brandname);
//   document.querySelector(".product_h3").textContent = data.productdisplayname;
//   // Opdaterer produktets billede
//   const productImg = document.querySelector(".product_img");
//   productImg.src = data.brandimage;
//   productImg.alt = data.productdisplayname;

//   // Opdaterer produktinformation - ${...} bruges til at indsætte JavaScript-variabler i en template
//   const productInfo = document.querySelector(".harmonika details");
//   productInfo.innerHTML = `
//     <summary>About the product</summary>
//     <p>Model name: ${data.productdisplayname}</p>
//     <p>Season: ${data.season}</p>
//     <p>Color: ${data.basecolour}</p>
//     <p>Inventory number: ${data.id}</p>
//   `;
// }

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/products/" + id;
fetch(url)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  // Opdaterer produktets billede
  document.querySelector(".main_productinfo h3").textContent = product.productdisplayname;
  document.querySelector(".main_productinfo .modelname").textContent = product.productdisplayname;
  document.querySelector(".main_productinfo .season").textContent = product.season;
  document.querySelector(".main_productinfo .product_price").textContent = product.price;
  document.querySelector(".main_productinfo .inventorynr").textContent = product.id;
  // Opdaterer produktets billede
  // KAN IKKE FÅ TIL AT VIRKE
  document.querySelector(".product_img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  // copy.querySelector(".product").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  // HVORDAN GØR JEG INDHOLDET AF MIN HARMONIKA DYNAMISK
}

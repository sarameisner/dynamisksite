const urlParams = new URLSearchParams(window.location.search);
const myId = urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/products/" + myId;

fetch(url)
  .then((response) => response.json())
  .then(dataReceived);

function dataReceived(data) {
  //do something with the data
  console.log(data);
  console.log("her kommer brand: ", data.brandname);
  document.querySelector(".product_h3").textContent = data.productdisplayname;
  // Opdaterer produktets billede
  const productImg = document.querySelector(".product_img");
  productImg.src = data.brandimage;
  productImg.alt = data.productdisplayname;

  // Opdaterer produktinformation - ${...} bruges til at indsætte JavaScript-variabler i en template
  const productInfo = document.querySelector(".harmonika details");
  productInfo.innerHTML = `
    <summary>About the product</summary>
    <p>Model name: ${data.productdisplayname}</p>
    <p>Season: ${data.season}</p>
    <p>Color: ${data.basecolour}</p>
    <p>Inventory number: ${data.id}</p>
  `;
}

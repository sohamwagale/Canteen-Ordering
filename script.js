
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}


const sectionsData = [
  {
    title: "Indian Cuisine",
    items: [
      { name: "Butter Naan", price: 40 },
      { name: "Paneer Tikka", price: 120 },
      { name: "Biryani", price: 150 },
      { name: "Chole Bhature", price: 80 },
      { name: "Rajma Rice", price: 60 },
      { name: "Masala Dosa", price: 50 },
      { name: "Idli Sambar", price: 40 },
      { name: "Pav Bhaji", price: 70 },
      { name: "Paratha", price: 30 },
      { name: "Gulab Jamun", price: 20 },
    ],
  },
  {
    title: "Chinese Cuisine",
    items: [
      { name: "Hakka Noodles", price: 80 },
      { name: "Manchurian", price: 100 },
      // Add more dishes
    ],
  },
  {
    title: "Beverages",
    items: [
      { name: "Tea", price: 20 },
      { name: "Coffee", price: 30 },
      // Add more beverages
    ],
  },
];

const sectionsContainer = document.getElementById("sections");

sectionsData.forEach((section) => {
  const sectionDiv = document.createElement("div");
  sectionDiv.className = "section";

  sectionDiv.innerHTML = `
    <h2>${section.title}</h2>
    <div class="scroll-container">
      ${section.items
        .map(
          (item) => `
        <div class="product">
          <img src="https://via.placeholder.com/200?text=${item.name}" alt="${item.name}">
          <h3>${item.name}</h3>
          <span>₹${item.price}</span><br>
          <button class="buy-btn">Add to Cart</button>
        </div>
      `
        )
        .join("")}
    </div>
  `;

  sectionsContainer.appendChild(sectionDiv);
});
let cart = [];

function addToCart(item) {
cart.push(item);
alert(`${item.name} added to cart!`);
console.log(cart); // View the cart in the console
}

document.querySelectorAll(".buy-btn").forEach((btn) => {
btn.addEventListener("click", () => {
const productName = btn.parentElement.querySelector("h3").textContent;
const productPrice = btn.parentElement.querySelector("span").textContent.replace("₹", "");
addToCart({ name: productName, price: parseInt(productPrice) });
});
});



document.getElementById("searchBar").addEventListener("input", (e) => {
  const searchQuery = e.target.value.toLowerCase();
  document.querySelectorAll(".product").forEach((product) => {
    const name = product.querySelector("h3").textContent.toLowerCase();
    product.style.display = name.includes(searchQuery) ? "block" : "none";
  });
});




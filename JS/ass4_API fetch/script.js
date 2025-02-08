let products = [];   
let cart = [];       

document.addEventListener("DOMContentLoaded", () => {
  const loginSection = document.getElementById("loginSection");
  const storeSection = document.getElementById("storeSection");
  const loginBtn = document.getElementById("loginBtn");
  const cartCount = document.getElementById("cartCount");
  const searchInput = document.getElementById("searchInput");
  const productsContainer = document.getElementById("productsContainer");

  loginBtn.addEventListener("click", () => {
    
    loginSection.style.display = "none";
    storeSection.style.display = "block";

    fetchProducts();
  });

  function fetchProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        products = data;
        displayProducts(products);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }

  function displayProducts(productList) {
    productsContainer.innerHTML = ""; 

    productList.forEach((product) => {
      const col = document.createElement("div");
      col.classList.add("col-md-3", "mb-3");

      col.innerHTML = `
        <div class="card h-100">
          <img src="${product.image}" class="card-img-top" alt="Product" style="height:200px; object-fit:contain;">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">$${product.price}</p>
            <button class="btn btn-primary addToCartBtn">Add to Cart</button>
          </div>
        </div>
      `;

      const addToCartBtn = col.querySelector(".addToCartBtn");
      addToCartBtn.addEventListener("click", () => {
        cart.push(product);
        cartCount.textContent = cart.length; 
      });

      productsContainer.appendChild(col);
    });
  }

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filteredProducts = products.filter((p) =>
      p.title.toLowerCase().includes(query)
    );
    displayProducts(filteredProducts);
  });
});

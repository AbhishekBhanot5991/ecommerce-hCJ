document.addEventListener('DOMContentLoaded', () => {
  const productId = new URLSearchParams(window.location.search).get('id');

  if (!productId) {
      console.error('Product ID not found in the URL.');
      return;
  }

  const productImageContainer = document.getElementById('product-image');
  const productDetailsContainer = document.getElementById('product-details');

  fetch(`https://charming-leotard-pig.cyclic.app/api/products/${productId}`)
      .then(response => {
          if (!response.ok) {
              throw new Error(`Failed to fetch product (status ${response.status}).`);
          }
          return response.json();
      })
      .then(product => {
          const productImageHTML = `<img src="${product.imageUrl}" alt="${product.name}">`;

          const productDetailsHTML = `
              <span class="product-category">${product.category}</span>
              <h3 class="product-name">${product.name}</h3>
              <p class="product-price">₹${product.price.toFixed(2)}</p>
              <h3>Key Points</h3>
              <ul>
                <li>feature 1</li>
                <li>feature 2</li>
                <li>feature 3</li>
                <li>feature 4</li>
              </ul>
              <div class="btnInput">
                <button onclick="dec()" id="incr">-</button>
                <input type="text" value="0" id="quantity" readonly>
                <button onclick="inc()" id="decr">+</button>
              </div>
              <button class="add-to-cart-btn">Add to Cart</button>
          `;

          productImageContainer.innerHTML = productImageHTML;
          productDetailsContainer.innerHTML = productDetailsHTML;

          
      })
      .catch(error => console.error('Error fetching product details:', error));
});

let quantity = 0;
function inc(){
    quantity++;
    updateQuantity();
}
function dec(){
    if(quantity > 0){
        quantity--;
        updateQuantity();
    }
}
function updateQuantity(){
   const quantityInput = document.querySelector("#quantity");
   quantityInput.value = quantity;
   const updateCart = document.querySelector('.updateCart');
   updateCart.textContent = quantity;
}

document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-list');

    // Fetch products API
    fetch('https://charming-leotard-pig.cyclic.app/api/products/')
      .then(response => response.json())
      .then(products => {
        // Handle the products data
        products.forEach(product => {
          // Using template literals for cleaner code
          const productHTML = `
            <div class="product">
              <img src="${product.imageUrl}" alt="${product.name}">
              <div class="productInside">
              <span>${product.category}</span>
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <p>₹${product.price.toFixed(2)}</p>
              </div>
            </div>
          `;

          // Append the product HTML to the products container
          productsContainer.innerHTML += productHTML;
        });
      })
      .catch(error => console.error('Error fetching products:', error));
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

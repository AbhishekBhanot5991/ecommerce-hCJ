document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-list');

    // Fetch products API
    fetch('https://charming-leotard-pig.cyclic.app/api/products/')
      .then(response => response.json())
      .then(products => {
        // Handle the products data
        products.forEach(product => {
            // Extract the first 10 words from the description
        //   const shortDescription = product.description.split(' ').slice(0, 10).join(' ');

          // Using template literals for cleaner code
          const productHTML = `
            <div class="product" data-product-id="${product._id}">
              <img src="${product.imageUrl}" alt="${product.name}">
              <div class="productInside">
              <span>${product.category}</span>
              <h3 class="productName">${product.name}</h3>
              <p class="productPrice">₹${product.price}</p>
              </div>
            </div>
          `;

          // Append the product HTML to the products container
          productsContainer.innerHTML += productHTML;
          const productCard = productsContainer.querySelector(`[data-product-id="${product._id}"]`);
          productCard.addEventListener('click', () => openProductPage(product._id));
        });
      })
      .catch(error => console.error('Error fetching products:', error));
      function openProductPage(productId) {
        // Redirect to the single product page using the product ID
        window.location.href = `single-product.html?id=${productId}`;
      }
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

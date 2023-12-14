document.addEventListener('DOMContentLoaded', () => {
    const singleProductContainer = document.getElementById('single-product-container');

    // Extract product ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Fetch the specific product by ID
    fetch(`https://charming-leotard-pig.cyclic.app/api/products/${productId}`)
      .then(response => response.json())
      .then(product => {
        const productHTML = `
          <div class="product">
            <img src="${product.imageUrl}" alt="${product.name}">
            <div class="productInside">
              <span>${product.category}</span>
              <h3 class="productName">${product.name}</h3>
              <p class="productPrice">₹${product.price}</p>
              <!-- Add any other product details you want to display -->
            </div>
          </div>
        `;

        singleProductContainer.innerHTML = productHTML;
      })
      .catch(error => console.error('Error fetching product details:', error));
});

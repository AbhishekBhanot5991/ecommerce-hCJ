document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-list');

    // Fetch products API
    fetch('http://localhost:3000/api/products/')
      .then(response => response.json())
      .then(products => {
        // Handle the products data
        products.forEach(product => {
            // Extract the first 10 words from the description
        //   const shortDescription = product.description.split(' ').slice(0, 10).join(' ');

          // Using template literals for cleaner code
          const productHTML = `
            <a href="single-product.html?id=${product._id}" class="product" data-product-id="${product._id}">
              <img src="${product.imageUrl}" alt="${product.name}">
              <div class="productInside">
              <span>${product.category}</span>
              <h5 class="productName">${product.name}</h5>
              <p class="productPrice">₹${product.price}</p>
              </div>
            </a>
          `;

          // Append the product HTML to the products container
          productsContainer.innerHTML += productHTML;
        //   const productCard = productsContainer.querySelector(`[data-product-id="${product._id}"]`);
        //   productCard.addEventListener('click', () => openProductPage(product._id));
        });
      })
      .catch(error => console.error('Error fetching products:', error));
  });

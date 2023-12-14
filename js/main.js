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

//fetching products list
document.addEventListener('DOMContentLoaded',()=>{
    const productsContainer = document.querySelector('products-list');

    fetch('https://charming-leotard-pig.cyclic.app/api/products')
    .then(res=>res.json())
    // console.log(res)
    .then(products=>{
        products.forEach(product => {
            // Create a container for each product
            const productContainer = document.createElement('div');
            productContainer.classList.add('product');

            // Create an image element
            const productImage = document.createElement('img');
            productImage.src = product.imageUrl;
            productImage.alt = product.name;

            // Create elements for name, description, and price
            const productName = document.createElement('h3');
            productName.textContent = product.name;

            const productDescription = document.createElement('p');
            productDescription.textContent = product.description;

            const productPrice = document.createElement('p');
            productPrice.textContent = `Price: $${product.price.toFixed(2)}`;

            // Append elements to the product container
            productContainer.appendChild(productImage);
            productContainer.appendChild(productName);
            productContainer.appendChild(productDescription);
            productContainer.appendChild(productPrice);

            // Append the product container to the products container
            productsContainer.appendChild(productContainer);
        });
    })
    .catch(error=>console.error('Errors fetching products:', error))
})
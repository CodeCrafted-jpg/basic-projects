document.addEventListener("DOMContentLoaded", () => {
    // Define an array of products with id, name, and price
    const products = [
        { id: 1, name: "Product 1", price: 29.99 },
        { id: 2, name: "Product 2", price: 19.99 },
        { id: 3, name: "Product 3", price: 39.999 },
        {id:  4,  name:"product 4", price: 69.999 }
    ];
    
    // Initialize an empty array to store items in the cart
    const cart = [];
    
    // Get references to HTML elements where content will be displayed
    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart");
    const cartTotalMessage = document.getElementById("cart-total");
    const totalPriceDisplay = document.getElementById("total-price");
    const cheakOutBtn = document.getElementById("cheakout-btn");

    // Loop through the products array to display each product
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product"); // Add a class to style each product
        productDiv.innerHTML = `
            <span>${product.name} - $${product.price.toFixed(2)}</span>
            <button data-id="${product.id}">Add to cart</button>
        `;
        productList.appendChild(productDiv); // Append the product to the product list in the HTML
    });

    // Event listener for button clicks inside the product list (Add to cart)
    productList.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") { // Check if the clicked element is a button
            const productId = parseInt(e.target.getAttribute('data-id')); // Get the product ID from the button's data-id
            const product = products.find((p) => p.id === productId); // Find the corresponding product from the products array
            addToCart(product); // Call function to add the product to the cart
        }
    });

    // Function to add a product to the cart
    function addToCart(product) {
        cart.push(product); // Add the selected product to the cart array
        renderCartElements(); // Re-render the cart to reflect the added product
    }

    // Function to update and render the cart content
    function renderCartElements() {
        cartItems.innerText = ""; // Clear the cart items container
        let totalPrice = 0; // Initialize a variable to calculate the total price

        if (cart.length > 0) { // If the cart contains items
            emptyCartMessage.classList.add('hidden'); // Hide the empty cart message
            cartTotalMessage.classList.remove("hidden"); // Show the cart total message
            
            cart.forEach((item, index) => { // Loop through the items in the cart
                totalPrice += item.price; // Add the price of the item to the total
                const cartItem = document.createElement('div');
                cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}`; // Display item name and price
                cartItems.appendChild(cartItem); // Add the item to the cart
                totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`; // Update the displayed total price
            });
        } else {
            emptyCartMessage.classList.remove("hidden"); // Show the empty cart message
            totalPriceDisplay.textContent = `0.00`; // Set total price to zero
            
        }
    }

    // Event listener for the checkout button
    cheakOutBtn.addEventListener("click", () => {
        cart.length = 0; // Clear the cart
        alert("Checkout success!"); // Display an alert message
        renderCartElements(); // Re-render the cart to show the cart is empty
    });
});

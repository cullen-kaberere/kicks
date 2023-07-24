






// Function to handle adding a product to the cart
function addToCart(productTitle, productPrice) {
    // Find the cart content and total elements
    const cartContent = document.querySelector(".cart-content");
    const cartTotal = document.querySelector(".total-price");

    // Create a new cart item element
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-box");
    cartItem.innerHTML = `
      <img src="images/cash2.jpg" alt="" class="cart-img">
      <div class="detail-box">
          <div class="cart-product-title">${productTitle}</div>
          <div class="cart-price">${productPrice}</div>
          <input type="number" value="1" class="cart-quantity">
      </div>
      <!--remove cart-->
      <i class='bx bxs-trash-alt cart-remove'></i>
    `;

    // Add the new item to the cart content
    cartContent.appendChild(cartItem);

    // Update the cart total
    const currentTotal = parseFloat(cartTotal.textContent.substring(3)); // Extract the number from the "Ksh" prefix
    const productPriceFloat = parseFloat(productPrice.substring(3)); // Extract the number from the "ksh" prefix
    const newTotal = currentTotal + productPriceFloat;
    cartTotal.textContent = `Ksh${newTotal.toFixed(2)}`;

    // Add event listener to the new cart item's remove button
    const cartRemoveBtn = cartItem.querySelector(".cart-remove");
    cartRemoveBtn.addEventListener("click", () => {
        cartContent.removeChild(cartItem);
        const currentTotal = parseFloat(cartTotal.textContent.substring(3));
        const productPriceFloat = parseFloat(productPrice.substring(3));
        const newTotal = currentTotal - productPriceFloat;
        cartTotal.textContent = `Ksh${newTotal.toFixed(2)}`;
    });
}

// Function to initialize the cart icons
function initializeCartIcons() {
    const cartIcons = document.querySelectorAll(".add-cart");

    cartIcons.forEach(cartIcon => {
        cartIcon.addEventListener("click", () => {
            const productBox = cartIcon.parentElement;
            const productTitle = productBox.querySelector(".product-title").textContent;
            const productPrice = productBox.querySelector(".price").textContent;
            addToCart(productTitle, productPrice);
        });
    });
}

// Initialize cart icons on page load
document.addEventListener("DOMContentLoaded", () => {
    initializeCartIcons();
});
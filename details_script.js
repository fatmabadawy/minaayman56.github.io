// You can add functionality for adding the product to cart here
// For simplicity, let's just display an alert for now
document.addEventListener("DOMContentLoaded", function() {
    const addToCartBtn = document.getElementById("add-to-cart-btn");

    addToCartBtn.addEventListener("click", function() {
        alert("Product added to cart!");
    });
});

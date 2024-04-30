document.addEventListener("DOMContentLoaded", function() {
    const products = [
        {
    name: "Kiriazi 6400 SS Gas Cooker",
    image: "1.jpg",
    price: "Price upon request", // You can update the price accordingly
    description: "Freestanding gas cooker with 4 burners, auto-ignition, grill, oven light, and silver color.",
    detailsPage: "C:\Users\ahmed\OneDrive\Desktop\mm\product1.html" // Link to the details page
}
,
        {
            name: "to be continued",
            image: "4.jpg",
            price: 999,
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            name: "to be continued",
            image: "earbuds.jpg",
            price: 129,
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        },
        {
            name: "to be continued",
            image: "smartwatch.jpg",
            price: 299,
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
    ];

    const container = document.getElementById("product-container");

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}$</p>
            <p>${product.description}</p>
            <button class="see-more-btn" data-name="${product.name}">See More</button>
        `;
        container.appendChild(productElement);
    });

    // Add event listener to each "See More" button
    const seeMoreButtons = document.querySelectorAll(".see-more-btn");
    seeMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productName = button.dataset.name;
            window.location.href = `${productName.toLowerCase()}.html`;
        });
    });
});

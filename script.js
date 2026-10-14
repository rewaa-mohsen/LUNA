let cart = [];

let buttons = document.querySelectorAll(".product-card button");

let cartItems = document.getElementById("cart-items");
let cartTotal = document.getElementById("cart-total");


buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let product = button.parentElement;

        let productName = product.querySelector("h3").textContent;

        let productPrice = product.querySelector("p").textContent;

        let price = parseFloat(productPrice.replace("$", ""));

        cart.push({
            name: productName,
            price: price
        });

        displayCart();

    });

});


function displayCart() {

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(function(product) {

        let item = document.createElement("div");

        item.classList.add("cart-item");

        item.innerHTML = `
            <span>${product.name}</span>
            <span>$${product.price}</span>
        `;

        cartItems.appendChild(item);

        total += product.price;

    });

    cartTotal.textContent = total;

}
let languageBtn = document.getElementById("languageBtn");

let currentLanguage = "en";

languageBtn.addEventListener("click", function () {

    let elements = document.querySelectorAll("[data-en]");

    if (currentLanguage === "en") {

        elements.forEach(function(element) {
            element.textContent = element.getAttribute("data-ar");
        });

        languageBtn.textContent = "English";
        document.body.dir = "rtl";

        currentLanguage = "ar";

    } else {

        elements.forEach(function(element) {
            element.textContent = element.getAttribute("data-en");
        });

        languageBtn.textContent = "عربي";
        document.body.dir = "ltr";

        currentLanguage = "en";
    }

});
let categoryCards = document.querySelectorAll(".category-card");
let productCards = document.querySelectorAll(".product-card");

categoryCards.forEach(function(categoryCard) {

    categoryCard.addEventListener("click", function() {

        let selectedCategory = categoryCard.getAttribute("data-category");

        productCards.forEach(function(productCard) {

            let productCategory = productCard.getAttribute("data-category");

            if (productCategory === selectedCategory) {
                productCard.style.display = "block";
            } else {
                productCard.style.display = "none";
            }

        });

        document.querySelector(".products").scrollIntoView({
            behavior: "smooth"
        });

    });

});
let searchInput = document.getElementById("productSearch");
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {

    let searchText = searchInput.value.toLowerCase().trim();

    productCards.forEach(function (productCard) {

        let productName = productCard
            .querySelector("h3")
            .getAttribute("data-product-en")
            .toLowerCase();

        if (productName === searchText || productName.split(" ").includes(searchText)) {
            productCard.style.display = "block";
        } else {
            productCard.style.display = "none";
        }

    });

});
let cartButton = document.querySelector(".cart");

cartButton.addEventListener("click", function () {
    document.querySelector(".cart-section").scrollIntoView({
        behavior: "smooth"
    });
});

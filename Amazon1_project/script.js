// =========================
// Amazon Clone JavaScript
// =========================

// Search
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");

function searchProduct() {
    let value = searchInput.value.trim();

    if (value === "") {
        alert("Please enter a product name.");
    } else {
        alert("Searching for: " + value);
    }
}

searchIcon.addEventListener("click", searchProduct);

searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        searchProduct();
    }
});

// =========================
// Back To Top
// =========================

const backTop = document.querySelector(".foot-panel1");

backTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// =========================
// Cart Counter
// =========================

let cartCount = 0;

const cart = document.querySelector(".nav-cart");

cart.addEventListener("click", function () {

    cartCount++;

    cart.innerHTML = `
        <i class="fa-solid fa-cart-shopping"></i>
        Cart (${cartCount})
    `;

});

// =========================
// Product Hover Animation
// =========================

const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {

    box.addEventListener("mouseenter", function () {
        box.style.transform = "scale(1.05)";
        box.style.transition = ".3s";
    });

    box.addEventListener("mouseleave", function () {
        box.style.transform = "scale(1)";
    });

});

// =========================
// Hero Image Slider
// =========================

const hero = document.querySelector(".hero-section");

const heroImages = [

    "images/hero.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg"

];

let current = 0;

setInterval(function () {

    current++;

    if (current >= heroImages.length) {
        current = 0;
    }

    hero.style.backgroundImage =
        `url('${heroImages[current]}')`;

}, 3000);

// =========================
// Panel Menu Click
// =========================

const panelItems = document.querySelectorAll(".pannel-ops p");

panelItems.forEach(function (item) {

    item.addEventListener("click", function () {

        alert(item.innerText);

    });

});

// =========================
// Logo Reload
// =========================

const logo = document.querySelector(".nav-logo");

logo.addEventListener("click", function () {

    location.reload();

});

// =========================
// Box Click
// =========================

boxes.forEach(function (box) {

    box.addEventListener("click", function () {

        const title = box.querySelector("h2").innerText;

        alert("Opening " + title);

    });

});
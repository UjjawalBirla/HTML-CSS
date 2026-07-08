const cards = document.querySelectorAll(".card");
const nextBtn = document.querySelector(".controls button:last-child");
const prevBtn = document.querySelector(".controls button:first-child");
const pauseBtn = document.querySelector(".controls button:nth-child(2)");

let current = 0;
let autoSlide = true;
let interval;

function showCard(index) {
    cards.forEach((card) => card.classList.remove("active"));
    cards[index].classList.add("active");
}

function nextSlide() {
    current++;
    if (current >= cards.length) current = 0;
    showCard(current);
}

function prevSlide() {
    current--;
    if (current < 0) current = cards.length - 1;
    showCard(current);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

pauseBtn.addEventListener("click", () => {
    if (autoSlide) {
        clearInterval(interval);
        pauseBtn.innerHTML = "▶";
    } else {
        startAutoSlide();
        pauseBtn.innerHTML = "⏸";
    }
    autoSlide = !autoSlide;
});

function startAutoSlide() {
    interval = setInterval(nextSlide, 3000);
}

showCard(current);
startAutoSlide();
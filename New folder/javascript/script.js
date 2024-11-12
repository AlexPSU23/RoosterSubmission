let currentSlideIndex = 0;
const slides = document.getElementsByClassName("carousel-content");
const dots = document.getElementsByClassName("dot");

// Show the specified slide with fade effect
function showSlide(index) {
    if (index >= slides.length) currentSlideIndex = 0;
    if (index < 0) currentSlideIndex = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }

    slides[currentSlideIndex].classList.add("active");
    dots[currentSlideIndex].classList.add("active");
}

// Move to the next slide
function nextSlide() {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}

// Move to the previous slide
function prevSlide() {
    currentSlideIndex--;
    showSlide(currentSlideIndex);
}

// Set the slide based on dot click
function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
}

// Initialize the carousel with an interval
document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlideIndex);
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});

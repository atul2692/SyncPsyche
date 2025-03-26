document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;
    const visibleImages = 4;
    const totalImages = track.children.length;

    function updateCarousel() {
        const offset = -currentIndex * (100 + 10); // Adjust for margin
        track.style.transform = `translateX(${offset}px)`;
    }

    nextBtn.addEventListener("click", function () {
        if (currentIndex + visibleImages < totalImages) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    updateCarousel();
});

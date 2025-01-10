document.addEventListener("DOMContentLoaded", () => {
    const modalImage = document.getElementById("modalImage");
    const imageElements = document.querySelectorAll('[data-bs-src]');
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const images = Array.from(imageElements).map(img => img.getAttribute("data-bs-src"));
    let currentIndex = 0;

    imageElements.forEach((img, index) => {
        img.addEventListener("click", () => {
            currentIndex = index;
            modalImage.src = images[currentIndex];
        });
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        modalImage.src = images[currentIndex];
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        modalImage.src = images[currentIndex];
    });
});

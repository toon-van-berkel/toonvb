const customCursor = document.getElementById("custom-cursor");
const slashSound = document.getElementById("slash-sound");

// Update cursor position
document.addEventListener("mousemove", (e) => {
    customCursor.style.left = `${e.pageX - 20}px`; // Center the cursor
    customCursor.style.top = `${e.pageY - 20}px`;
});

// Play slash sound and animate on click
document.addEventListener("click", () => {
    // Play slash sound
    slashSound.currentTime = 0;
    slashSound.play();

    // Animate cursor with scale
    customCursor.style.transform = "scale(1.3) rotate(20deg)";
    setTimeout(() => {
        customCursor.style.transform = "scale(1) rotate(0deg)";
    }, 100);
});

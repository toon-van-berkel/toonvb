document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const travelDestination = params.get('travel');

    if (!travelDestination) {
        console.error('Travel destination not specified in URL.');
        return;
    }

    fetch('../../js/json/traveling.json')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            const destination = data[travelDestination];
            if (destination) {
                document.getElementById('destinationOverview').textContent = destination.destinationOverview;
                document.getElementById('travelTitleHeader').textContent = destination.destinationTitle;
                document.getElementById('travelHighlights').textContent = destination.experienceHighlights;
                document.getElementById('memorableExperiences').textContent = destination.memorableMoments;
                document.getElementById('travelDetailTitle').textContent = "Toonvb - Travel " + destination.destinationTitle;

                const imageGallery = document.querySelector('.image-gallery');
                imageGallery.innerHTML = '';

                destination.images.forEach((imgPath, index) => {
                    const img = document.createElement('img');
                    img.src = imgPath;
                    img.alt = `${destination.destinationTitle} image ${index + 1}`;
                    img.className = 'gallery-image';
                    img.style.position = 'absolute';
                    img.style.top = '0';
                    img.style.left = '0';
                    img.style.width = '100%';
                    img.style.height = 'auto';
                    img.style.opacity = index === 0 ? '1' : '0';  // Show only the first image initially
                    img.style.transition = 'opacity 0.5s ease';  // Add a fade effect
                    imageGallery.appendChild(img);
                });

                initializeGallery();
            } else {
                console.error('Destination data not found for:', travelDestination);
            }
        })
        .catch(error => console.error('Error loading the travel data:', error));
});

function initializeGallery() {
    const images = document.querySelectorAll('.gallery-image');
    let currentIndex = 0;

    if (images.length === 0) {
        console.error("No images found in the gallery.");
        return;
    }

    document.querySelector('.image-gallery').addEventListener('click', function () {
        // Hide the current image
        images[currentIndex].style.opacity = '0';

        // Move to the next image, looping back to the start if necessary
        currentIndex = (currentIndex + 1) % images.length;

        // Display the next image
        images[currentIndex].style.opacity = '1';
    });
}

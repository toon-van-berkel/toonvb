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
                destination.images.forEach(imgPath => {
                    const img = document.createElement('img');
                    img.src = imgPath;
                    img.alt = `${destination.destinationTitle} image`;
                    img.className = 'gallery-image';
                    imageGallery.appendChild(img);
                });
            } else {
                console.error('Destination data not found for:', travelDestination);
            }
        })
        .catch(error => console.error('Error loading the travel data:', error));
});

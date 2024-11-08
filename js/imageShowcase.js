document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const projectName = params.get('project');

    fetch('../../json/projects.json')
        .then(response => response.json())
        .then(data => {
            const project = data[projectName];
            if (project) {
                document.getElementById('projectTitle').textContent = project.projectTitle;
                document.getElementById('projectOverview').textContent = project.projectOverview;
                document.getElementById('designPhilosophy').textContent = project.designPhilosophy;
                document.getElementById('developmentProcess').textContent = project.developmentProcess;
                document.getElementById('purposeAndInspiration').textContent = project.purposeAndInspiration;

                // Load images
                const imageGallery = document.querySelector('.image-gallery');
                imageGallery.innerHTML = ''; // Clear any existing content
                project.images.forEach(imgPath => {
                    const img = document.createElement('img');
                    img.src = imgPath;
                    img.alt = project.projectTitle + ' image';
                    img.className = 'gallery-image'; // Add gallery-image class
                    imageGallery.appendChild(img);
                });

                // Initialize the gallery after images are loaded
                initializeGallery();
            } else {
                console.error('Project data not found');
            }
        })
        .catch(error => console.error('Error loading the project data:', error));
});

function initializeGallery() {
    let images = document.querySelectorAll('.gallery-image');
    if (images.length > 0) {
        let currentIndex = 0;
        images[currentIndex].classList.add('visible');
        images.forEach(img => {
            img.addEventListener('click', function () {
                images[currentIndex].classList.remove('visible');
                currentIndex = (currentIndex + 1) % images.length;
                images[currentIndex].classList.add('visible');
            });
        });
    } else {
        console.log("No images found after loading");
    }
}

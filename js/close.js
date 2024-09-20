document.addEventListener('DOMContentLoaded', function () {
    let closeButton = document.getElementById('closeButton');
    let notification = document.getElementById('notification');

    closeButton.addEventListener('click', function() {
        notification.style.display = 'none';
    });
});
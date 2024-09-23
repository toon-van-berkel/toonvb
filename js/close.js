document.addEventListener('DOMContentLoaded', function () {
    let closeButton = document.getElementById('closeButton');
    let notification = document.getElementById('notification');

    if (closeButton && notification) {
        closeButton.addEventListener('click', function() {
            notification.style.display = 'none';
        });
    } else {
        console.error('Elements not found');
    }
});

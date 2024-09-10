function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin-21341' && password === 'AWFOFANWI121422t3wtgww3tg') {
        window.location.href = './pages/admin.html';
    } else {
        alert('Invalid username or password');
    }
    return false;
}
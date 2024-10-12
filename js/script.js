document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNavbar = document.querySelector('#main-navbar');

    menuToggle.addEventListener('click', function() {
        mainNavbar.classList.toggle('active');
    });
});

document.getElementById('socialGlobe').addEventListener('click', function() {
    var buttons = document.getElementById('socialButtons');
    buttons.classList.toggle('show');
});

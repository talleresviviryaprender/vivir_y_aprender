document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNavbar = document.querySelector('#main-navbar');

    menuToggle.addEventListener('click', function() {
        mainNavbar.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNavbar = document.querySelector('#main-navbar');

    menuToggle.addEventListener('click', function() {
        mainNavbar.classList.toggle('active');
    });
});

const balloon = document.getElementById('floatingBalloon');
        const buttons = document.getElementById('socialButtons');

        balloon.addEventListener('click', () => {
            buttons.style.display = buttons.style.display === 'none' || buttons.style.display === '' ? 'flex' : 'none';
        });

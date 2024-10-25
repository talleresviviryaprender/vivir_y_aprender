document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNavbar = document.querySelector('#main-navbar');

    menuToggle.addEventListener('click', function() {
        mainNavbar.classList.toggle('active');
    });
});

// Validación del formulario de contacto
const contactForm = document.getElementById('contact-form');

    async function handleSubmit(event) {
        event.preventDefault(); // Previene el envío del formulario

        const fd = new FormData(contactForm); // Obtiene los datos del formulario

        const response = await fetch('https://formspree.io/f/mgvevqvq', { // Cambia por la URL de Formspree definitiva
            method: 'POST',
            body: fd,
            headers: {
                'Accept': 'application/json' // Acepta JSON como respuesta
            }
        });

        if (response.ok) {
            alert('Mensaje enviado con éxito'); // Mensaje de éxito
            contactForm.reset(); // Reinicia el formulario
        } else {
            alert('No se pudo enviar el mensaje'); // Mensaje de error
        }
    }

    // Agrega el manejador de eventos para el envío del formulario
    contactForm.addEventListener('submit', handleSubmit);
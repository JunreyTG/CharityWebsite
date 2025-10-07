document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) { // Check if both elements exist at once
        navToggle.addEventListener('click', function() { // Using 'function' for consistent 'this' context, though arrow function is fine too
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                // Check if the link is NOT the donate-button on desktop (where it's inline)
                // This logic might be slightly complex given the CSS hides it differently
                // For simplicity, let's keep it toggling off if any link is clicked on mobile
                if (window.innerWidth <= 769 && navLinks.classList.contains('active')) { // Only close on smaller screens
                    navLinks.classList.remove('active');
                }
            });
        });
    }
});
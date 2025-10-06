document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.dataset.target;
            const blogCard = document.getElementById(targetId);
            const fullContent = blogCard.querySelector('.full-content');

            if (!fullContent) return;

            if (fullContent.style.display === 'none' || !fullContent.style.display) {
                fullContent.style.display = 'block';
                this.textContent = 'Read Less ←';
            } else {
                fullContent.style.display = 'none';
                this.textContent = 'Read More →';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const volunteerForm = document.getElementById('volunteer-form');
    if (!volunteerForm) return;

    volunteerForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        if (!name || !email) {
            alert('Please fill in all required fields.');
            return;
        }

        alert(`Thank you for signing up, ${name}! We will be in touch shortly.`);
        volunteerForm.reset();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const donationFormContainer = document.getElementById('donation-form-container');

    if (!donationFormContainer) return;

    const customAmountInput = document.getElementById('custom-amount');

    // Reusable function for button groups
    function setupButtonGroup(groupId) {
        const group = document.getElementById(groupId);
        if (!group) return;

        const buttons = group.querySelectorAll('.btn-toggle');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove .active from all buttons in group
                buttons.forEach(btn => btn.classList.remove('active'));
                // Add .active to the clicked one
                button.classList.add('active');

                // Clear custom input when choosing a preset amount
                if (groupId === 'amount-group' && customAmountInput) {
                    customAmountInput.value = '';
                }
            });
        });
    }

    // Initialize button groups
    setupButtonGroup('frequency-group');
    setupButtonGroup('amount-group');

    // If custom input is typed, deselect amount buttons
    if (customAmountInput) {
        customAmountInput.addEventListener('input', () => {
            const amountButtons = document.querySelectorAll('#amount-group .btn-toggle');
            amountButtons.forEach(btn => btn.classList.remove('active'));
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const downloadModal = document.getElementById('downloadModal');
    const closeButton = document.querySelector('.close-button');
    const confirmDownloadBtn = document.getElementById('confirmDownloadBtn');
    const cancelDownloadBtn = document.getElementById('cancelDownloadBtn');
    const modalReportTitle = document.getElementById('modalReportTitle');
    const downloadTriggers = document.querySelectorAll('.download-trigger');

    let currentPdfUrl = ''; // To store the URL of the PDF to be downloaded

    // Function to open the modal
    function openModal(pdfUrl, reportTitle) {
        currentPdfUrl = pdfUrl;
        modalReportTitle.textContent = reportTitle; // Set the report title in the modal
        downloadModal.classList.add('active'); // Use class to show/hide with flexbox
    }

    // Function to close the modal
    function closeModal() {
        downloadModal.classList.remove('active');
        currentPdfUrl = ''; // Clear the URL
    }

    // Event listeners for download trigger links
    downloadTriggers.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior (direct download)
            const pdfUrl = this.getAttribute('data-pdf-url');
            const reportTitle = this.getAttribute('data-report-title');
            openModal(pdfUrl, reportTitle);
        });
    });

    // Event listener for the close button (X)
    closeButton.addEventListener('click', closeModal);

    // Event listener for the "Cancel" button
    cancelDownloadBtn.addEventListener('click', closeModal);

    // Event listener for the "Download" button inside the modal
    confirmDownloadBtn.addEventListener('click', function() {
        if (currentPdfUrl) {
            // Create a temporary link to trigger the download
            const tempLink = document.createElement('a');
            tempLink.href = currentPdfUrl;
            tempLink.target = '_blank'; // Open in new tab/window
            tempLink.download = currentPdfUrl.split('/').pop(); // Suggest filename
            document.body.appendChild(tempLink); // Append to DOM
            tempLink.click(); // Programmatically click the link
            document.body.removeChild(tempLink); // Remove the temporary link

            closeModal(); // Close the modal after initiating download
        }
    });

    // Close the modal if user clicks outside of the modal content
    window.addEventListener('click', function(event) {
        if (event.target == downloadModal) {
            closeModal();
        }
    });

    // Optional: Close modal with Esc key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && downloadModal.classList.contains('active')) {
            closeModal();
        }
    });
});
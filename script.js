document.addEventListener("DOMContentLoaded", function () {
    const inputLink = document.getElementById('input');
    const generateButton = document.getElementById('generate');
    const qrCodeDiv = document.getElementById('qrCodeDiv'); // Corrected

    generateButton.addEventListener('click', function () {
        const text = inputLink.value;

        // Show the loading spinner
        const loadingSpinner = document.getElementById('loading-spinner');
        loadingSpinner.style.display = "block";

        qrCodeDiv.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text;

        // Hide the loading spinner when the QR code image is loaded
        qrCodeDiv.onload = function() {
            loadingSpinner.style.display = "none";
        };
    });
});

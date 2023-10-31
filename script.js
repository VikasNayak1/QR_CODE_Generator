document.addEventListener("DOMContentLoaded", function () {
    const inputLink = document.getElementById('input');
    const generateButton = document.getElementById('generate');
    const qrCodeDiv = document.getElementById('qrCodeDiv'); 

    generateButton.addEventListener('click', function () {
        const text = inputLink.value;


        const loadingSpinner = document.getElementById('loading-spinner');
        loadingSpinner.style.display = "block";

        qrCodeDiv.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text;

        qrCodeDiv.onload = function() {
            loadingSpinner.style.display = "none";
        };
    });
});

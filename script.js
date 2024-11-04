// Initialize EmailJS with your public key
(function() {
    emailjs.init("3z9jtrTVHKRJGB-Ot"); // Replace with your actual public key
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_i21179g', 'template_66vff6g', this) // Replace with actual IDs
            .then(() => {
                alert('Message Sent Successfully! If you haven't got our mail kindly check spam folder.');
            }, (error) => {
                console.error('FAILED...', error);
                alert('There was an error sending the message. Please try again.');
            });
    });
}

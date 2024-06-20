document.getElementById('sosButton').addEventListener('click', function() {
    // Display the healthcare facilities
    document.getElementById('facilities').style.display = 'block';
    
    // Call emergency number (for demonstration, just an alert)
    alert('Calling emergency services...');
    
    // In a real-world application, you would integrate with a call API or service
    // Example: window.location.href = 'tel:911';
});

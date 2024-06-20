document.getElementById('sosButton').addEventListener('click', function() {
    // Display the healthcare facilities
    document.getElementById('facilities').style.display = 'block';
    
    // Simulate a call to emergency services
    alert('Calling emergency services...');
    
    // For an actual call, use: window.location.href = 'tel:911';
});

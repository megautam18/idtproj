document.getElementById('sosButton').addEventListener('click', function() {
    // Check if the browser supports geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert('Geolocation is not supported by this browser.');
    }
    window.location.href = 'tel:100'; 
});

function showPosition(position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;

    // Initialize Google Places API
    let map = new google.maps.Map(document.createElement('div'));
    let service = new google.maps.places.PlacesService(map);

    let request = {
        location: new google.maps.LatLng(lat, lng),
        radius: '5000', // Search within 5km radius
        type: ['hospital']
    };

    service.nearbySearch(request, function(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            let facilitiesList = document.getElementById('facilitiesList');
            facilitiesList.innerHTML = ''; // Clear previous results

            results.forEach(function(place) {
                let li = document.createElement('li');
                li.innerHTML = `<strong>${place.name}</strong>: ${place.vicinity} 
                                <a href="tel:${place.international_phone_number}" class="call-button">Call Now</a>`;
                facilitiesList.appendChild(li);
            });

            // Show the facilities section
            document.getElementById('facilities').style.display = 'block';
        } else {
            alert('No healthcare facilities found nearby.');
        }
    });
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert('User denied the request for Geolocation.');
            break;
        case error.POSITION_UNAVAILABLE:
            alert('Location information is unavailable.');
            break;
        case error.TIMEOUT:
            alert('The request to get user location timed out.');
            break;
        case error.UNKNOWN_ERROR:
            alert('An unknown error occurred.');
            break;
    }
}


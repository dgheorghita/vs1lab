// File origin: VS1LAB A2

/* eslint-disable no-unused-vars */

// This script is executed when the browser loads index.html.

// "console.log" writes to the browser's console. 
// The console window must be opened explicitly in the browser.
// Try to find this output in the browser...
console.log("The geoTagging script is going to start...");


function updateLocation() {
        
    const mapImage = document.getElementById('mapView');
    const latitudeView = document.getElementById('latitude');
    const longitudeView = document.getElementById('longitude');
    const latitudeDiscovery = document.getElementById('latitudeDiscovery');
    const longitudeDiscovery = document.getElementById('longitudeDiscovery');

    const mapDiv = document.getElementById('map');
    const taglist_json = mapDiv.getAttribute('data-tags');
    const tags = JSON.parse(taglist_json);

    var mapManager = new MapManager();
    
    if (latitudeView.value == "" || longitudeView.value == "" || latitudeDiscovery.value == "" || longitudeDiscovery.value == "") {
        
        LocationHelper.findLocation((location) => {
        
            latitudeView.value = location.latitude;
            longitudeView.value = location.longitude;
            latitudeDiscovery.value = location.latitude;
            longitudeDiscovery.value = location.longitude;

            console.log('location latitude:' +location.latitude);
            console.log('location longitude:' +location.longitude);

            mapImage.parentNode.removeChild(mapView);

            mapManager.initMap(location.latitude, location.longitude);
            mapManager.updateMarkers(location.latitude, location.longitude, tags);
        
        });
    }else{
        mapManager.initMap(latitudeView.value, longitudeView.value);
        mapManager.updateMarkers(latitudeView.value, longitudeView.value, tags);   
    }

    
}

// Wait for the page to fully load its DOM content, then call updateLocation
document.addEventListener("DOMContentLoaded", () => {
    updateLocation();
});

/*function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    if (!form.checkValidity()) {
        return; // If the form is invalid, do not proceed
    }

    const formData = new FormData(form);
    const formObject = {};
    formData.forEach((value, key) => formObject[key] = value);

    fetch(form.action, {
        method: form.method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formObject)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        // Optionally update the UI based on response
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

// Wait for the page to fully load its DOM content, then call updateLocation
document.addEventListener("DOMContentLoaded", () => {
    updateLocation();

    const tagForm = document.getElementById('tagForm');
    const filterForm = document.getElementById('filterForm');
    
    if (tagForm) {
        tagForm.addEventListener('submit', handleFormSubmit);
    }
    
    if (filterForm) {
        filterForm.addEventListener('submit', handleFormSubmit);
    }
});*/

// File origin: VS1LAB A2

/**
 * from VS1LAB A3
 * 
 * A class to help using the Leaflet map service.
 */
// eslint-disable-next-line no-unused-vars
class MapManager {

    #map;
    #defaultIcon;
    #markers;
    
    constructor() {
        // Default Icon of Leaflet can not be loaded in our environment, so it was manually added to the repo
        this.#defaultIcon = L.icon({
            iconUrl: '/images/marker.svg',
            shadowUrl: '/images/marker-shadow.svg',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });
    }
    
    /**
     * Initialize a Leaflet map
     * @param {number} latitude The map center latitude
     * @param {number} longitude The map center longitude
     * @param {number} zoom The map zoom, defaults to 18
     */
    initMap(latitude, longitude, zoom = 18) {
        try {
            // set up dynamic Leaflet map
            this.#map = L.map('map').setView([latitude, longitude], zoom);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.#map);
            this.#markers = L.layerGroup().addTo(this.#map);
        } catch (error) {
            console.error("Error initializing the map:", error);
        }
    }

    /**
     * Update the Markers of a Leaflet map
     * @param {number} latitude The map center latitude
     * @param {number} longitude The map center longitude
     * @param {{latitude, longitude, name}[]} tags The map tags, defaults to just the current location
     */
    updateMarkers(latitude, longitude, tags = []) {
        try {
            // delete all markers
            this.#markers.clearLayers();
            L.marker([latitude, longitude], { icon: this.#defaultIcon })
                .bindPopup("Your Location")
                .addTo(this.#markers);
            for (const tag of tags) {
                L.marker([tag.latitude, tag.longitude], { icon: this.#defaultIcon })
                    .bindPopup(tag.locationName)
                    .addTo(this.#markers);  
            }
        } catch (error) {
            console.error("Error updating markers:", error);
        }
    }
}

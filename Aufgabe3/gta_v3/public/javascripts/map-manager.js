// File origin: VS1LAB A2 

/**
 * A class to help using the MapQuest map service.
 */
// eslint-disable-next-line no-unused-vars
class MapManager {
    #apiKey

    /**
     * Create a new MapManager instance
     * @param {string} apiKey Your MapQuest API Key
     */
    constructor(apiKey) {
        this.#apiKey = apiKey;
    }

    /**
     * Generate a MapQuest image URL for the specified parameters
     * @param {number} latitude The map center latitude
     * @param {number} longitude The map center longitude
     * @param {{latitude, longitude, name}[]} tags The map tags, defaults to just the current location
     * @param {number} zoom The map zoom, defaults to 11
     * @returns {string} URL of generated map
     */
    getMapUrl(latitude, longitude, tags = [], zoom = 11) {
        if (!this.#apiKey) {
            console.log("No API key provided.");
            return "images/mapview.jpg";
        }

        let tagList = `${latitude},${longitude}|marker-start`;
        tagList += tags.reduce((acc, tag) => `${acc}||${tag.latitude},${tag.longitude}|flag-${tag.name}`, "");

        const mapQuestUrl = `https://www.mapquestapi.com/staticmap/v5/map?key=${this.#apiKey}&size=600,400&zoom=${zoom}&center=${latitude},${longitude}&locations=${tagList}`;
        console.log("Generated MapQuest URL:", mapQuestUrl);

        return mapQuestUrl;
    }

    updateMarkers(tags) {
    
        tags.forEach(tag => {
            console.log(`Adding marker at ${tag.latitude}, ${tag.longitude} named ${tag.name}`);
            
        });
    }

    updateLocation() {
        
        const mapImage = document.getElementById('mapView');
        const latitudeView = document.getElementById('latitude');
        const longitudeView = document.getElementById('longitude');
        const latitudeDiscovery = document.getElementById('latitude-discovery');
        const longitudeDiscovery = document.getElementById('longitude-discovery');

        const mapDiv = document.getElementById('map');
        const taglist_json = mapDiv.getAttribute('data-tags');
        const tags = JSON.parse(taglist_json)
        
        if (!latitudeView.value || !longitudeView.value) {
            
            LocationHelper.findLocation((location) => {
            
                latitudeView.value = location.latitude;
                longitudeView.value = location.longitude;
                latitudeDiscovery.value = location.latitude;
                longitudeDiscovery.value = location.longitude;
    
                const mapUrl = this.getMapUrl(location.latitude, location.longitude);
                mapImage.src = mapUrl;
            });
        }

        this.updateMarkers(tags);
    }

    
}

const mapManager = new MapManager('uuYdZFl1rKT9QFS97N4EjI4UzJYKgewL');

// Wait for the page to fully load its DOM content, then call updateLocation
document.addEventListener("DOMContentLoaded", () => {
    mapManager.updateLocation();
});
// File origin: VS1LAB A3

/**
 * This script is a template for exercise VS1lab/Aufgabe3
 * Complete all TODOs in the code documentation.
 */

/**
 * A class for in-memory-storage of geotags
 * 
 * Use an array to store a multiset of geotags.
 * - The array must not be accessible from outside the store.
 * 
 * Provide a method 'addGeoTag' to add a geotag to the store.
 * 
 * Provide a method 'removeGeoTag' to delete geo-tags from the store by name.
 * 
 * Provide a method 'getNearbyGeoTags' that returns all geotags in the proximity of a location.
 * - The location is given as a parameter.
 * - The proximity is computed by means of a radius around the location.
 * 
 * Provide a method 'searchNearbyGeoTags' that returns all geotags in the proximity of a location that match a keyword.
 * - The proximity constrained is the same as for 'getNearbyGeoTags'.
 * - Keyword matching should include partial matches from name or hashtag fields. 
 */
class InMemoryGeoTagStore{

    constructor() {
        this.geoTagsArray = [];
    }

    addGeoTag(geoTag) {
        this.geoTagsArray.push(geoTag);
    }

    removeGeoTag(locationName) {
        this.geoTagsArray = this.geoTagsArray.filter(tag => tag.locationName !== locationName);
    }

    getNearbyGeoTags({ latitude, longitude }, radius){
        return geoTagsArray.filter(geotag => {
          latitudeDistance = Math.abs(latitude - geotag.latitude);
          longitudeDistance = Math.abs(longitude - geotag.longitude);
          
          return (longitudeDistance < longitude + radius && latitudeDistance < latitude + radius);
        });
    }

    searchNearbyGeoTags({ latitude, longitude }, radius, locationName, hashTag){
        const nearbyGeotags = this.getNearbyGeoTags({ latitude, longitude }, radius);

        return nearbyGeotags.filter(geotag => {
            const nameMatch = geotag.locationNames.toLowerCase().includes(locationName.toLowerCase());
            const hashtagMatch = geotag.hashtags.toLowerCase().includes(hashTag.toLowerCase());
            return nameMatch || hashtagMatch;
          });
    }
    

}

module.exports = InMemoryGeoTagStore

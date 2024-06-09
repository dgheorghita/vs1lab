// File origin: VS1LAB A3

/**
 * This script is a template for exercise VS1lab/Aufgabe3
 * Complete all TODOs in the code documentation.
 */

/** * 
 * A class representing geotags.
 * GeoTag objects should contain at least all fields of the tagging form.
 */
class GeoTag {

    constructor(latitude, longitude, locationName, hashtag){
        this.latitude = this.latitude;
        this.longitude = this.longitude;
        this.locationName = this.locationName;
        this.hashtag = this.hashtag;
    }

    getLatitude() {
        return this.latitude;
    }

    setLatitude(latitude) {
        this.latitude = latitude;
    }

    getLongitude() {
        return this.longitude;
    }

    setLongitude(longitude) {
        this.longitude = longitude;
    }

    getLocationName() {
        return this.locationName;
    }

    setLocationName(locationName) {
        this.locationName = locationName;
    }

    getHashtag() {
        return this.hashtag;
    }

    setHashtag(hashtag) {
        this.hashtag = hashtag;
    }
    
}

module.exports = GeoTag;

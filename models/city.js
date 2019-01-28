const {cities} = require('../data/cities.json');

function normalizeLocationQuery(location) {
    const trimmed = location.trim();
    const withSpaces = decodeURI(trimmed);
    const lower = withSpaces.toLowerCase();

    return lower;
}

const City = {
    getAll: function() {
        return cities;
    },
    findByName: function(location) {
        const normalized = normalizeLocationQuery(location);

        return cities.find(city => {
            return normalized === `${city.city},${city.region}`.toLowerCase();
        });
    },

    findByLatLon: function(lattitude, longitude) {
        return cities.find(city => {
            if (lattitude && longitude) {
                return (
                    city.lat.toString() === lattitude && city.lon.toString() === longitude
                );
            } else if (lattitude) {
                return city.lat.toString() === lattitude;
            } else {
                return city.lon.toString() === longitude;
            }
        });
    }
};

module.exports = City;

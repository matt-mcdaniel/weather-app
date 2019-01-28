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
        if (lattitude && longitude) {
            return cities.find(city => {
                const latString = city.lat.toString();
                const lonString = city.lon.toString();
                return latString === lattitude && lonString === longitude;
            });
        } else if (lattitude) {
            return cities.find(city => {
                const latString = city.lat.toString();
                return latString === lattitude;
            });
        } else {
            return cities.find(city => {
                const lonString = city.lon.toString();
                return lonString === longitude;
            });
        }
    }
};

module.exports = City;

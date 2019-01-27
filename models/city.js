const { cities } = require('../data/cities.json');
const { lower, first, last, splitBy } = require('../client/src/lib/util');

const City = {
	getAll: function() {
		return cities;
	},
	findByName: function(location) {
		return cities.find(cityData => {
			const split = splitBy(location, ',');
			const city = lower(
				decodeURI(
					first(split)
						.trim()
						.replace(/\+/, ' ')
				)
			);
			const region = lower(last(split).trim());

			return (
				`${city},${region}` ===
				`${lower(cityData.city)},${lower(cityData.region)}`
			);
		});
	}
};

module.exports = City;

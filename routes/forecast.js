const Forecast = require('../models/forecast');
const City = require('../models/city');

module.exports = function(app) {
	app.get('/api/forecast', (req, res) => {
		const { query } = req;

		let cityData;

		if (query.location) {
			cityData = City.findByName(query.location);
		} else if (query.lat || query.lon) {
			cityData = City.findByLatLon(query.lat, query.lon);
		}

		if (!cityData) {
			return res.sendStatus(404);
		}

		res.json({
			location: cityData,
			forecast: Forecast.findByCityId(cityData.id)
		});
	});
};

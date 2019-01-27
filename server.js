const express = require('express');
const path = require('path');
const City = require('./models/city');
const Forecast = require('./models/forecast');

const app = express();

const port = process.env.PORT || 3001;

app.get('/api/forecast', (req, res) => {
	const { query } = req;
	if (query.location) {
		const cityData = City.findByName(query.location);
		const forecastData = Forecast.findByCityId(cityData.id);

		res.send({
			location: cityData,
			forecast: forecastData
		});
	}
});

app.get('/api/cities', (req, res) => {
	res.send(City.getAll());
});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, './client/build')));

	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, './client/build', 'index.html'));
	});
}

app.listen(port, err => {
	if (err) {
		throw err;
	}

	console.log(`Listening at http://localhost:${port}`);
});

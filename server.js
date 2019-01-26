const express = require('express');
const path = require('path');
const city = require('./models/city');

const app = express();

const port = process.env.PORT || 3001;

app.get('/api/forecast', (req, res) => {
	const { query } = req;
	if (query.location) {
		const cityData = city.findByName(query.location);
		res.send({
			location: cityData,
			forecast: null
		});
	}
});

app.get('/api/cities', (req, res) => {
	res.send(city.getAll());
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

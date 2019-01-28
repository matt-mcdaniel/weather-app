const City = require('../models/city');

module.exports = function(app) {
	app.get('/api/cities', (req, res) => {
		res.json(City.getAll());
	});
};

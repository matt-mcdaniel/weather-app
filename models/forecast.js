const { forecasts } = require('../data/forecasts.json');

const forecast = {
	getAll: function() {
		return forecasts;
	},
	findByCityId: function(cityId) {
		return forecasts.filter(forecastData => {
			return forecastData.id === cityId;
		});
	}
};

module.exports = forecast;

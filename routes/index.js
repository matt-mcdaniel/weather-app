module.exports = function(app) {
	require('./city.js')(app);
	require('./forecast.js')(app);
};

const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3001;

const api = require('./routes')(app);

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

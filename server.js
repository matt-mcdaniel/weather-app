const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3001;

/**
 * Expose weather API
 */
const api = require('./routes')(app);

/**
 * Create React App
 * In development, CRA has own dev server, just run API
 * In production, serve built files and run API
 */
if (process.env.NODE_ENV === 'production') {
    // Serve "build" directory publicly
    app.use(express.static(path.join(__dirname, './client/build')));

    // Forward all routes to client for client-side routing
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, './client/build', 'index.html'));
    });
}

app.listen(port, function(err) {
    if (err) {
        throw err;
    }

    console.log(`Listening at http://localhost:${port}`);
});

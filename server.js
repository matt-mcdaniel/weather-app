const express = require("express");
const city = require("./models/city");
const path = require("path");

const app = express();

const port = process.env.PORT || 3001;

app.get("/api/forecast", (req, res) => {
  const { query } = req;
  if (query.location) {
    res.send(city.findByName(query.location));
  }
});

app.get("/api/cities", (req, res) => {
  res.send(city.getAll());
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
  // Handle React routing, return all requests to React app

  // Send all requests to built index.html
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build", "index.html"));
  });
}

app.listen(port, err => {
  if (err) {
    throw err;
  }

  console.log(`Listening at http://localhost:${port}`);
});

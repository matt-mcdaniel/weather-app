const { cities } = require("../cities.json");

function lower(str) {
  return str.toLowerCase();
}

function first(arr) {
  return arr[0];
}

function last(arr) {
  return arr[arr.length - 1];
}

function splitBy(str, delimiter) {
  return str.split(delimiter);
}

const city = {
  getAll: function() {
    return cities;
  },
  findByName: function(location) {
    return cities.find(cityData => {
      const split = splitBy(location, ",");
      const city = lower(
        decodeURI(
          first(split)
            .trim()
            .replace(/\+/, " ")
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

module.exports = city;

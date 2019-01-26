exports.lower = function(str) {
	return str.toLowerCase();
};

exports.first = function(arr) {
	return arr[0];
};

exports.last = function(arr) {
	return arr[arr.length - 1];
};

exports.splitBy = function(str, delimiter) {
	return str.split(delimiter);
};

// exports.fromUrlFormat = function(str) {
//   const cityStateArr = splitBy(str, ',');
// };

// exports.toUrlFormat = function(str) {
//   let cityStateArr = splitBy(str, ',');
//   cityStateArr = cityStateArr.map(str => lower(str.trim()));
//   return cityStateArr.join(',').replace(/s/, '+');
// };

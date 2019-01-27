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

exports.toUrlFormat = function(city, region) {
	const { lower } = exports;

	const joined = `${city.trim()},${region.trim()}`;
	const urlFormat = joined.replace(/\s/, '+');

	console.log(lower(urlFormat));
	return lower(urlFormat);
};

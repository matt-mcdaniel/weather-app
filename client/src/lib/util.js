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

exports.toUrlFormat = function(city, region) {
	const { lower } = exports;

	const joined = `${city.trim()},${region.trim()}`;
	const urlFormat = joined.replace(/\s/, '+');

	console.log(lower(urlFormat));
	return lower(urlFormat);
};

// mountain+view,ca or mountain%20view,ca

exports.normalizeLocationQuery = function(location) {
	const trimmed = location.trim();
	const withSpaces = decodeURI(trimmed);
	const lower = withSpaces.toLowerCase();

	return lower;
};

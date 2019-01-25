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

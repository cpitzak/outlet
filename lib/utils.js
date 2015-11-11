'use strict'

exports.isInt = function(n) {
  if (typeof n === 'undefined' || n === null) {
  	return false;
  }
  return n === parseInt(n, 10);
};

exports.isIntString = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n) &&
         n.toString().indexOf('.') == -1;
}


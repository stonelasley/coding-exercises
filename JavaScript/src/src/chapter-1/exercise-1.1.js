'use strict';

var exercise = function() {};

exercise.prototype.unique = function(input) {
	 var processed = [];

	for(var i = 0; i < input.length; i++) {
		var char = input[i];
		if(processed.indexOf(char) !== -1) {
			return false;
		}
		processed.push(char);
	}
	return true;
};

exercise.prototype.uniqueInPlace = function(input) {
	for(var i = 0; i < input.length; i++) {
		var a = input[i];
		for(var j = 0; j < input.length; j++) {
			var b = input[j];
			if (i !== j && a === b) {
				return false;
			}
		}
	}
	return true;
};

//Assumes ASCII Charset
exercise.prototype.uniqueBookExample = function(input) {
	if(input.length > 128) return false;
	var charSet = new Array(128);
	for(var i = 0; i < input.length; i++) {
		var char = input[i].charCodeAt(0);
		if(charSet[char] === true) {
			return false;
		}
		charSet[char] = true;
	}
	return true;
};

module.exports = new exercise();
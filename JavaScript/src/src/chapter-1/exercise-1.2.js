'use strict';

var exercise = function () {
};

exercise.prototype.reverse = function (input) {

	for(var i = 0; i < input.length / 2; i++) {
		var tailIndex = (input.length - 1) - i;
		var headChar = input[i];
		var tailChar = input[tailIndex]
		input[i] = tailChar;
		input[tailIndex] = headChar;
	}
};

exercise.prototype.reverseBook = function (input) {

	var tmp,
		end = input.length - 1,
		start =  0;

	while(start < end) {
		tmp = input[start];
		input[start++] = input[end]
		input[end--] = tmp;
	}
};


module.exports = new exercise();
'use strict';

var exercise    = require('./exercise-1.2'),
	expect      = require('chai').expect;


describe('exercise 1.2', function () {

	describe('reverse', function () {

		it('should reverse char array', function () {

			var input1 = ['A', 'B', 'C'];
			var input2 = ['!', 'A', 'B', 'C'];

			exercise.reverse(input1);
			exercise.reverse(input2);

			expect(input1).to.deep.equal(['C', 'B', 'A']);
			expect(input2).to.deep.equal(['C', 'B', 'A', '!']);
		});

		it('should swap two char array', function () {

			var input = ['A', 'B'];

			exercise.reverse(input);

			expect(input).to.deep.equal(['B', 'A']);
		});

		it('should return single char array', function () {

			var input = ['A'];

			exercise.reverse(input);

			expect(input).to.deep.equal(['A']);
		});
	});

	describe('reverseBook', function () {

		it('should reverse char array', function () {

			var input1 = ['A', 'B', 'C'];
			var input2 = ['!', 'A', 'B', 'C'];

			exercise.reverseBook(input1);
			exercise.reverseBook(input2);

			expect(input1).to.deep.equal(['C', 'B', 'A']);
			expect(input2).to.deep.equal(['C', 'B', 'A', '!']);
		});

		it('should swap two char array', function () {

			var input = ['A', 'B'];

			exercise.reverseBook(input);

			expect(input).to.deep.equal(['B', 'A']);
		});

		it('should return single char array', function () {

			var input = ['A'];

			exercise.reverseBook(input);

			expect(input).to.deep.equal(['A']);
		});
	});

});
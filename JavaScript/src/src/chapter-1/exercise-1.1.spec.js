'use strict';

var exercise    = require('./exercise-1.1'),
	expect      = require('chai').expect;


describe('exercise 1.1', function () {

	describe('unique', function() {

		it('should return true with empty string', function() {

			expect(exercise.unique('')).to.equal(true);
		});

		it('should return true with single character', function() {

			expect(exercise.unique('x')).to.equal(true);
		});

		it('should return true when string contains no duplicates', function() {

			expect(exercise.unique('abc')).to.equal(true)
		});

		it('should handle non-alphanumeric characters', function () {

			expect(exercise.unique('!@# ')).to.equal(true);
			expect(exercise.unique('! b!')).to.equal(false);
		});

		it('should return false when string contains duplicates', function () {

			expect(exercise.unique('aa')).to.equal(false);
			expect(exercise.unique('aba')).to.equal(false);
			expect(exercise.unique(' bcc')).to.equal(false);
		});
	});

	describe('uniqueInPlace', function() {

		it('should return true with empty string', function () {

			expect(exercise.uniqueInPlace('')).to.equal(true);
		});

		it('should return true with single character', function () {

			expect(exercise.uniqueInPlace('x')).to.equal(true);
		});

		it('should return true when string contains no duplicates', function () {

			expect(exercise.uniqueInPlace('abc')).to.equal(true);
		});

		it('should handle non-alphanumeric characters', function () {

			expect(exercise.uniqueInPlace('!@# ')).to.equal(true);
			expect(exercise.uniqueInPlace('! b!')).to.equal(false);
		});

		it('should return false when string contains duplicates', function () {

			expect(exercise.uniqueInPlace('aa')).to.equal(false);
			expect(exercise.uniqueInPlace('aba')).to.equal(false);
			expect(exercise.uniqueInPlace('bcc')).to.equal(false);
		});
	});

	describe('uniqueBookExample', function () {

		it('should return true with empty string', function () {

			expect(exercise.uniqueBookExample('')).to.equal(true);
		});

		it('should return true with single character', function () {

			expect(exercise.uniqueBookExample('x')).to.equal(true);
		});

		it('should return true when string contains no duplicates', function () {

			expect(exercise.uniqueBookExample('abc')).to.equal(true);
		});

		it('should handle non-alphanumeric characters', function () {

			expect(exercise.uniqueBookExample('!@# ')).to.equal(true);
			expect(exercise.uniqueBookExample('! b!')).to.equal(false);
		});

		it('should return false when string contains duplicates', function () {

			expect(exercise.uniqueBookExample('aa')).to.equal(false);
			expect(exercise.uniqueBookExample('aba')).to.equal(false);
			expect(exercise.uniqueBookExample('bcc')).to.equal(false);
		});
	});
});

const countComments = require('./countComments.js');

test('Checks if comments are counted accurately', () => {
	expect(countComments([1,2,3,4,5,6,7,8,9])).toBe(9);
});
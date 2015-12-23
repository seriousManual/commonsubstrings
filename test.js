var expect = require('chai').expect

var css = require('./index')

describe('commonsubstrings', () => {
    it ('should return the correct substrings', () => expect(css('may the force be with you', 'may the sauce be with you')).to.deep.equal(['ce be with you', 'may the', 'th']))
})
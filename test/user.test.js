const expect = require('chai').expect;
const user = require('../models/user');

describe('user', function() {
    it('should contain a STRING dataType', function() {
        expect(user()).to.equal(string);
    });

    it('should contain a STRING datatype', function() {
        expect(user()).to.equal(string);
    });

});

// need to throw errors
// test for if user name exist.... return true
// if user does not exist, verify with anyway you can test a user, return error
// error, add values that it doesnt want
// test leaving null, test leaving with character

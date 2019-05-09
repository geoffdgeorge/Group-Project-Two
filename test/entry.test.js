const expect = require('chai').expect;
const entry = require('../models/entry');

describe('entry', function() {
    it('pain_level should allow integer input only', function() {
        expect(entry()).to.exist(integer);
    });

    it('strength_level should allow integer input only', function() {
        expect(entry()).to.exist(integer);
    });

    it('pain_top should require a yes/true or no/false choice', function() {
        expect(entry()).to.equal(boolean);
    });

    it('pain_botton should require a yes/true or no/false choice', function() {
        expect(entry()).to.equal(boolean);
    }); 

    it('pain_interior should require a yes/true or no/false choice', function() {
        expect(entry()).to.equal(boolean);
    });

    it('pain_exterior should require a yes/true or no/false choice', function() {
        expect(entry()).to.equal(boolean);
    });


});


// expect and equal need updated information
// the integer and boolean may need to be replaced
// need errors to throw


// Chai - Mocha testing for entry.js

const expect = require('chai').expect;
const entry = require('../models/entry'); //entry js link
const inputOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // for pain_level, strength_level, 


describe('entry', function(){
  it('pain_level entry should allow only a choice between 1 and 10', function(){
    let input = NULL;
    let entryInput = entry(inputOptions)

    expect(entryInput).to.equal(); // should have a value of 1-10
  });
  
  it('strength_level entry should allow a choice between 1 and 10', function(){
    let input = NULL;
    let entryInput = entry(inputOptions);

    expect(entryInput).to.equal(inputOptions); // should have a value of 1-10

  it('should not log entry if nothing is selected', function () {
    let entryCall = function() {
      entry('null');
    };

    expect(entryCall).to.throw(Error, "A value should be selected from the drop down menu for each entry") // or NaN
  }); 

});

module.exports = db // what is the module for the test //
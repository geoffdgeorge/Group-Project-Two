const expect = require('chai').expect;
const user = require('../models/user');

const inputOptions = [1, 2, 3, 4, 5];
const buttonSelect = [];


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

describe('user', () => {
  it('should contain a STRING dataType', () => {
    expect(user()).to.equal(string);
  });

  it('should contain a STRING datatype', () => {
    expect(user()).to.equal(string);
  });
});


// test leaving null, test leaving with character
// need validation for submit button functionality 

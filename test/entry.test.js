const assert = require('chai').assert;
const entry = require('../models/entry'); //entry js link


describe('entry', function(){
  it('pain_level should allow only an integer input of 1 to 10', function(){
  assert.equal(entry(), integer);
  });
});

//   it('pain_level should allow integer input only', () => {
//     expect(entry()).to.exist(integer);
//   });
// });


// describe('entry', () => {
//   it('pain_level should allow integer input only', () => {
//     expect(entry()).to.exist(integer);
//   });

//   it('strength_level should allow integer input only', () => {
//     expect(entry()).to.exist(integer);
//   });

//   it('pain_top should require a yes/true or no/false choice', () => {
//     expect(entry()).to.equal(boolean);
//   });

//   it('pain_botton should require a yes/true or no/false choice', () => {
//     expect(entry()).to.equal(boolean);
//   });

//   it('pain_interior should require a yes/true or no/false choice', () => {
//     expect(entry()).to.equal(boolean);
//   });

//   it('pain_exterior should require a yes/true or no/false choice', () => {
//     expect(entry()).to.equal(boolean);
//   });
// });

// expect and equal need updated information
// the integer and boolean may need to be replaced
// need errors to throw


var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;


chai.use(chaiHttp);
let request;

describe("POST /api/entries", function() {
  // Create a new request server for testing (using test_db)
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should save an example", function(done) {
    // Object for endpoint testing
    db.Test.createAll([
      { text: "pain_level", description: "number between 1 and 10"},
      { text: "strength_level", description: "number between 1 and 10"}, 
    ]).then(function() {
      request.get(" /api/entries").end(function(err, res) {
        let responseStatus = res.status;
        let responseBody = res.body;

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200); // http request will be successful 

        expect(responseBody[0])
          .to.be.an("number")
          .that.includes( {text: "pain_level", description: "number between 1 and 10"} );

        expect(responseBody[1])
          .to.be.an("number")
          .that.includes( {text: "strength_level", description: "number between 1 and 10"} )
        
        done();
      });
    });
  });
}); 


//Need this for initial signup, updating data
//Test should coincide with username
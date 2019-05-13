const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const db = require('../models');

const { expect } = chai;

chai.use(chaiHttp);
let request;

describe('POST /api/entries', () => {
  // Create a new request server for testing (using test_db)
  // & delete all examples from the db
  beforeEach(() => {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it('should save an example', (done) => {
    // Object for endpoint testing
    db.Test.createAll([
      { text: 'pain_level', description: 'number between 1 and 10' },
      { text: 'strength_level', description: 'number between 1 and 10' },
    ]).then(() => {
      request.get(' /api/entries').end((err, res) => {
        const responseStatus = res.status;
        const responseBody = res.body;

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200); // http request will be successful

        expect(responseBody[0])
          .to.be.an('number')
          .that.includes({ text: 'pain_level', description: 'number between 1 and 10' });

        expect(responseBody[1])
          .to.be.an('number')
          .that.includes({ text: 'strength_level', description: 'number between 1 and 10' });

        done();
      });
    });
  });
});

// Need this for initial signup, updating data
// Test should coincide with username

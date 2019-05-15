const chai = require('chai'); // Require Chai assertion library
const chaiHttp = require('chai-http'); // For integration testing for http tasks
const express = require('express');
const apiRoutes = require('../routes/apiRoutes.js');
const db = require('../models');

const { expect } = chai; // Asset Style
chai.use(chaiHttp); // Use chaiHTTP

let request; // 'let" variable so that it can be initialized later on

/**
 * This tests the APIs ability to add an entry for a given user.
 * This test creates a new user and test if entries can be added.
*/

describe('POST /api/entries', () => {
    beforeEach(async () => {
        const app = express(); //create dummy web server
        apiRoutes(app); // Add our route to it //
        request = chai.request(app); // Initialize a HTTP request object for later
        await db.sequelize.sync({ force: true }); // Sync up our test db
    });

    it('should test the APIs ability to add an entry for a given user.', async () => {
        // Object for endpoint testing
        let id;
        // Create a user to test. There is a constraint in the code where adding an entry must must have an existing user first
        await db.User.create({
            username: 'ginoworld',
            password: '123123',
        })
            .then(user => {
                console.log('JUST CREATED USER WITH ID: ', user.id);
                id = user.id; // Save id for later (not necessary, but it will always be 1)
            })
            .catch(error => {
                console.log('error creating user', error);
            });

        await db.Entry.bulkCreate([
            {
                "pain_level": 5,
                "strength_level": 2,
                "pain_top": true,
                "pain_bottom": false,
                "pain_exterior": false,
                "pain_interior": false,
                "UserId": id
            }
        ])
            .then(() => {
                request.get('/api/entries/' + id).end((err, res) => { // Makes a request
                    const responseStatus = res.status; // Grab the status code
                    const responseBody = res.body; // Grab the body of the response

                    expect(err).to.be.null; // Expect no errors
                    expect(responseStatus).to.equal(200); // Expect a 200 status code (successful)
                    expect(responseBody[0]) // Expect part of the body to look like the response that this route generates
                        .to.be.an('number')
                        .that.includes({ text: 'pain_level', description: 'number between 1 and 10' });
                    expect(responseBody[1])
                        .to.be.an('number')
                        .that.includes({ text: 'strength_level', description: 'number between 1 and 10' });
                });
            })
            .catch(error => {
                console.error('Failed to create all entries!', error); // Error will show if entries for user cannot be made
            });
    });
});


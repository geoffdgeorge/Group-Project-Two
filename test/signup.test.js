const chai = require("chai");
const charHttp = require("chai-http");
const expect = require('chai');
const user = require('../models/user');

describe('createUser', function() {
    it("user should have a minimum of 6 characters", function(){
        if (user.value.length < 6) {
            throw(error, "user name needs at least 6 characters")
        }
    });
    
    it("cannot signup if user name exists", function() {
        if (user === user) {
            throw(error, "user name already exists");
        }
    });

});
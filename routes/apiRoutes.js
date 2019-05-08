const passport = require('passport');
const db = require('../models');

const entry = require('../models/entry'); //
const user = require('../models/user'); // are these not needed because they are within 'models'?

module.exports = function (app) {
  // Get all examples
  app.get('/api/users/:username', (req, res) => {
    db.user.findAll({}).then((data) => {
      res.json(data);
    });
  });

  //
  app.get('/api/entries/:entries', (req, res) => { //  // Adding a 'get' to show previous entries
    db.entry.findAll({}).then((data) => { // db.entry (entry different from Entry)
      res.json(data);  
    });
  });

  // Create a new user
  app.post('/api/users', (req, res) => {
    db.User.create(req.body).then((results) => { //User or user
      res.json(results);
    });
  });

  // Create a new user entry
  app.post('/api/entries', (req, res) => {
    db.Entry.create(req.body).then((results) => { // Entry or entry
      res.json(results);
    });
  });

  // Validate user when they attempt to sign in and redirect them to their user page
  app.post('/login', passport.authenticate('local'), (req, res) => {
    res.redirect('/users/' + req.user.username);
  })

  // Delete an example by id
  app.delete('/api/entries/:id', (req, res) => { // user should be able to delete previous entries 
    db.entry.destroy({ where: { id: req.params.id } }).then((data) => { // entry vs Entry
      res.json(data);
    });
  });

} //

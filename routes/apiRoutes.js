const passport = require('passport');
const db = require('../models');

module.exports = function (app) {
  // Get all examples
  app.get('/api/users/:username', (req, res) => {
    db.User.findAll({}).then((data) => {
      res.json(data);
    });
  });

  //
  app.get('/api/entries/:entries', (req, res) => { //  // Adding a 'get' to show previous entries
    db.Entry.findAll({}).then((data) => { 
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

  /*
  // Delete an example by id
  app.delete('/api/entries/:id', (req, res) => { // user should be able to delete previous entries 
    db.entry.destroy({ where: { id: req.params.id } }).then((data) => { 
      res.json(data);
    });
  });
  */

} 

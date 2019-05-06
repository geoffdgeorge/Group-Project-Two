const db = require('../models');

module.exports = function (app) {
  // Get all examples
  app.get('/api/examples', (req, res) => {
    db.User.findAll({}).then((data) => {
      res.json(data);
    });
  });

  // Create a new user
  app.post('/api/users', (req, res) => {
    db.User.create(req.body).then((results) => {
      res.json(results);
    });
  });

  // Create a new user entry
  app.post('/api/entries', (req, res) => {
    db.Entry.create(req.body).then((results) => {
      res.json(results);
    });
  });

  // Delete an example by id
  app.delete('/api/examples/:id', (req, res) => {
    db.Example.destroy({ where: { id: req.params.id } }).then((dbExample) => {
      res.json(dbExample);
    });
  });
};

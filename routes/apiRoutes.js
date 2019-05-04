const db = require('../models');

module.exports = function (app) {
  // Get all examples
  app.get('/api/examples', (req, res) => {
    db.User.findAll({}).then((data) => {
      res.json(data);
    });
  });

  // Create a new example
  app.post('/api/examples', (req, res) => {
    db.User.create(req.body).then((results) => {
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

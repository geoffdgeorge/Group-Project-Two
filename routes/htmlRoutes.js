const db = require('../models');

module.exports = function (app) {
  // Load index page
  app.get('/', (req, res) => {
    res.redirect('/login');
  });

  app.get('/users/:username', (req, res) => {
    const username = req.params.username;
    db.User.findOne({ where: {username: username} }).then(results => {
      res.send(results);
    })
  })

//   // Load example page and pass in an example by id
//   app.get('/example/:id', (req, res) => {
//     db.Example.findOne({ where: { id: req.params.id } }).then((dbExample) => {
//       res.render('example', {
//         example: dbExample,
//       });
//     });
//   });

//   // Render 404 page for any unmatched routes
//   app.get('*', (req, res) => {
//     res.render('404');
//   });
};

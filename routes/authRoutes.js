const authController = require('../controllers/authcontroller.js');

module.exports = function (app, passport) {
  // Signs up a new user
  app.get('/signup', authController.signup);
  // Validates login of new user
  app.get('/login', authController.login);
  app.get('/userPage', authController.userPage);
  app.get('/logout', authController.logout);
  app.post(
    '/signup',
    passport.authenticate('local-signup', {
      successRedirect: '/userPage',
      failureRedirect: '/signup',
    }),
  );
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect('/login');
  }
  app.post(
    '/login',
    passport.authenticate('local-login', {
      successRedirect: '/userPage',
      failureRedirect: '/login',
    }),
  );
};

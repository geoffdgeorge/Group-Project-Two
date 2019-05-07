const path = require('path');

const signup = function (req, res) {
  res.sendFile(path.join(`${__dirname}/../public/views/signUpPage.html`));
};

const login = function (req, res) {
  res.sendFile(path.join(`${__dirname}/../public/views/logInPage.html`));
};

const userPage = function (req, res) {
  res.sendFile(path.join(`${__dirname}/../public/views/userPage.html`));
};

const logout = function (req, res) {
  req.session.destroy((err) => {
    res.redirect('/');
  });
};

module.exports = {
  signup,
  login,
  userPage,
  logout,
};

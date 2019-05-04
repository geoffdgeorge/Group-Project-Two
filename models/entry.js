module.exports = function (sequelize, DataTypes) {
  const Entry = sequelize.define('Entry', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  });
  return Entry;
};

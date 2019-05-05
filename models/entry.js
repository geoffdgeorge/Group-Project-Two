module.exports = function (sequelize, DataTypes) {
  const Entry = sequelize.define('Entry', {
    pain_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    strength_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pain_top: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    pain_bottom: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    pain_interior: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    pain_exterior: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  Entry.associate = function (models) {
    Entry.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Entry;
};

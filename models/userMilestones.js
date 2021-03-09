const db = require(".");

module.exports = function (sequelize, DataTypes) {
  var Milestones = sequelize.define("milestones", {
    // The email cannot be null, and must be a proper email before creation
    milestoneName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
  Milestones.associate = (models) => {
    Milestones.belongsTo(models.Goals, {
      foreignKey: {
        allowNull: false,
      },
    });
  }

  return Milestones;
};
 module.exports = function(sequelize, DataTypes) {
    var UserAnswer = sequelize.define("userAnswer", {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  return UserAnswer;
}; 
 module.exports = function(sequelize, DataTypes) {
    var UserAnswer = sequelize.define("userAnswer", {
      // The email cannot be null, and must be a proper email before creation
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      // The password cannot be null
      password: {
        type: DataTypes.STRING,
        allowNull: false
      } 


/* 
(bigGoal ID)
(times per week)
(how many weeks)
(take user ID and join Goal-id with goal_id on Milestones table)
 */

    });
  return UserAnswer;
}; 
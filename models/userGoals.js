/*  const { INTEGER } = require("sequelize/types"); */

module.exports =  function(sequelize, DataTypes) {
    var goals = sequelize.define("Goals", {
        // The email cannot be null, and must be a proper email before creation
        goal_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        frequency: {
            type: DataTypes.INTEGER,
            allowNull: false, 
        }
    });
    return goals;
}
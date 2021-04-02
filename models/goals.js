 
 module.exports =  function(sequelize, DataTypes) {
    var Goals = sequelize.define("Goals", {
        goalName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
    });
    Goals.associate = (models) => {
      Goals.hasMany(models.milestones, {
        });
      } 
      return Goals
      };     
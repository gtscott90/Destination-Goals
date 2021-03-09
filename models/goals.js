 
 module.exports =  function(sequelize, DataTypes) {
    var Goals = sequelize.define("Goals", {
        // The email cannot be null, and must be a proper email before creation
        goalName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        /* frequency: {
            type: DataTypes.INTEGER,
            allowNull: false, 
        },  */
    });
    Goals.associate = (models) => {
      Goals.hasMany(models.milestones, {
        });
      } 
      return Goals
      };     